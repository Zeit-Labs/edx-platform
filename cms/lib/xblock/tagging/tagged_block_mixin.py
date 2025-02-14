# lint-amnesty, pylint: disable=missing-module-docstring
from urllib.parse import quote


class TaggedBlockMixin:
    """
    Mixin containing XML serializing and parsing functionality for tagged blocks
    """

    def serialize_tag_data(self):
        """
        Serialize block's tag data to include in the xml, escaping special characters

        Example tags:
            LightCast Skills Taxonomy: ["Typing", "Microsoft Office"]
            Open Canada Skills Taxonomy: ["MS Office", "<some:;,skill/|=>"]

        Example serialized tags:
            lightcast-skills:Typing,Microsoft Office;open-canada-skills:MS Office,%3Csome%3A%3B%2Cskill%2F%7C%3D%3E
        """
        # This import is done here since we import and use TaggedBlockMixin in the cms settings, but the
        # content_tagging app wouldn't have loaded yet, so importing it outside causes an error
        from openedx.core.djangoapps.content_tagging.api import get_object_tags
        content_tags = get_object_tags(self.scope_ids.usage_id)

        serialized_tags = []
        taxonomies_and_tags = {}
        for tag in content_tags:
            taxonomy_export_id = tag.taxonomy.export_id

            if not taxonomies_and_tags.get(taxonomy_export_id):
                taxonomies_and_tags[taxonomy_export_id] = []

            # Escape special characters in tag values, except spaces (%20) for better readability
            escaped_tag = quote(tag.value).replace("%20", " ")
            taxonomies_and_tags[taxonomy_export_id].append(escaped_tag)

        for taxonomy in taxonomies_and_tags:
            merged_tags = ','.join(taxonomies_and_tags.get(taxonomy))
            serialized_tags.append(f"{taxonomy}:{merged_tags}")

        return ";".join(serialized_tags)

    def add_tags_to_node(self, node):
        """
        Serialize and add tag data (if any) to node
        """
        tag_data = self.serialize_tag_data()
        if tag_data:
            node.set('tags-v1', tag_data)

    def add_xml_to_node(self, node):
        """
        Include the serialized tag data in XML when adding to node
        """
        super().add_xml_to_node(node)
        self.add_tags_to_node(node)
