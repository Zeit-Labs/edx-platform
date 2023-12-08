

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n > 1);
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "\n                After the due date has passed, you can review the exam, but you cannot change your answers.\n            ": "\n                Une fois la date d'\u00e9ch\u00e9ance pass\u00e9e, vous pouvez revoir l'examen, mais vous ne pouvez pas modifier vos r\u00e9ponses.\n            ",
    "\n                The time allotted for this exam has expired. Your exam has been submitted and any work you completed\n                will be graded.\n            ": "\n                Le temps allou\u00e9 pour cet examen a expir\u00e9. Votre examen a \u00e9t\u00e9 soumis et tout travail que vous avez termin\u00e9\n                sera not\u00e9.\n            ",
    "\n                You have submitted your timed exam.\n            ": "\n                Vous avez soumis votre examen chronom\u00e9tr\u00e9.\n            ",
    "\n                Your proctoring session was reviewed successfully. Go to your progress page to view your exam grade.\n            ": "\n                Votre session de surveillance a \u00e9t\u00e9 examin\u00e9e avec succ\u00e8s. Acc\u00e9dez \u00e0 votre page de progression pour afficher la note de votre examen.\n            ",
    "\n            Do not close this window before you finish your exam. if you close this window, your proctoring session ends, and you will not successfully complete the proctored exam.\n          ": "\n            Ne fermez pas cette fen\u00eatre avant d'avoir termin\u00e9 votre examen. Si vous fermez cette fen\u00eatre, votre session d'examen surveill\u00e9 sera termin\u00e9.\n          ",
    "\n            If you have issues relating to proctoring, you can contact %(provider_name)s technical support by emailing %(provider_tech_support_email)s  or by calling %(provider_tech_support_phone)s.\n          ": "\n           Si vous rencontrez des probl\u00e8mes de surveillance, vous pouvez contacter le support technique %(provider_name)s en \u00e9crivant un courriel \u00e0 %(provider_tech_support_email)s ou en appelant%(provider_tech_support_phone)s.\n          ",
    "\n            Return to the %(platform_name)s course window to start your exam. When you have finished your exam and\n            have marked it as complete, you can close this window to end the proctoring session\n            and upload your proctoring session data for review.\n          ": "\n           Retournez sur la page du cours %(platform_name)s pour d\u00e9marrer votre examen. Lorsque vous avez fini l'examen et\n           indiqu\u00e9 qu'il est compl\u00e9t\u00e9, vous pouvez fermer cette fen\u00eatre pour terminer la session d'examen surveill\u00e9\n            et charg\u00e9 votre session pour \u00e9valuation par nos \u00e9quipes.\n          ",
    "\n          %(platform_name)s Rules for Online Proctored Exams\n      ": "\n          R\u00e8gles pour les examens surveill\u00e9s en ligne %(platform_name)s\n      ",
    "\n          Copy this unique exam code. You will be prompted to paste this code later before you start the exam.\n        ": "\n          Copiez ce code d'examen unique. Vous serez invit\u00e9 \u00e0 coller ce code plus tard avant de commencer l'examen.\n        ",
    "\n          For security and exam integrity reasons, we ask you to sign in to your edX account. Then we will direct you to the RPNow proctoring experience.\n        ": "\n          Pour des raisons de s\u00e9curit\u00e9 et d'int\u00e9grit\u00e9 des examens, nous vous demandons de vous connecter \u00e0 votre compte edX. Nous vous dirigerons ensuite vers l'exp\u00e9rience de surveillance RPNow.\n        ",
    "\n          Note: As part of the proctored exam setup, you will be asked\n          to verify your identity. Before you begin, make sure you are\n          on a computer with a webcam, and that you have a valid form\n          of photo identification such as a driver\u2019s license or\n          passport.\n        ": "\n          Remarque: dans le cadre de la configuration de l'examen surveill\u00e9, il vous sera demand\u00e9\n          de v\u00e9rifier votre identit\u00e9. Avant de commencer, assurez-vous que vous \u00eates\n          sur un ordinateur \u00e9quip\u00e9 d'une webcam et que vous poss\u00e9dez une pi\u00e8ce d'identit\u00e9 avec photo valide\n          comme un permis de conduire ou\n          un passeport.\n        ",
    "\n          Step 1\n        ": "\n          \u00c9tape 1\n        ",
    "\n          Step 2\n        ": "\n          \u00c9tape 2\n        ",
    "\n          Step 3\n        ": "\n          \u00c9tape 3\n        ",
    "\n          You will be guided through steps to set up online proctoring software and verify your identity.\n        ": "\n          Vous serez guid\u00e9 \u00e0 travers les \u00e9tapes de configuration du logiciel de surveillance en ligne et de v\u00e9rification de votre identit\u00e9.\n        ",
    "\n         You must adhere to the following rules while you complete this exam.\n         <strong>If you violate these rules, you will receive a score of 0 on the exam, and you will not be eligible for academic course credit.\n         </strong></br>\n      ": "\n         Vous devez respecter les r\u00e8gles suivantes pendant que vous terminez cet examen.\n         <strong>Si vous enfreignez ces r\u00e8gles, vous recevrez un score de 0 \u00e0 l'examen et vous ne serez pas \u00e9ligible pour un cr\u00e9dit de cours acad\u00e9mique.\n         </strong></br>\n      ",
    "\n        &#8226; You have %(total_time)s to complete this exam. </br>\n        &#8226; Once you start the exam, you cannot stop the timer. </br>\n        &#8226; For all question types, you must click \"submit\" to complete your answer. </br>\n        &#8226; If time expires before you click \"End My Exam\", only your submitted answers will be graded.\n      ": "\n        &#8226; Vous avez %(total_time)s pour terminer cet examen.</br>\n        &#8226; Une fois que vous avez commenc\u00e9 l'examen, vous ne pouvez pas arr\u00eater le chronom\u00e8tre.</br>\n        &#8226; Pour tous les types de questions, vous devez cliquer sur \u00absoumettre\u00bb pour compl\u00e9ter votre r\u00e9ponse.</br>\n        &#8226; Si le d\u00e9lai expire avant que vous ne cliquiez sur \u00abTerminer mon examen\u00bb, seules les r\u00e9ponses que vous avez soumises seront not\u00e9es.\n      ",
    "\n        A system error has occurred with your proctored exam. Please reach out to \n        <a href=\"%(link_urls.contact_us)s\" target=\"_blank\">%(platform_name)s Support</a> for \n        assistance, and return to the exam once you receive further instructions.\n      ": "\n        Une erreur syst\u00e8me est survenue avec votre examen surveill\u00e9. Veuillez contacter\n        <a href=\"%(link_urls.contact_us)s\" target=\"_blank\">le support %(platform_name)s</a>pour\n        de l'assistance et retournez \u00e0 l'examen une fois que vous recevrez plus d'instructions.\n      ",
    "\n        A system error has occurred with your proctored exam. Please reach out to your course \n        team at <a href=\"mailto:%(proctoring_escalation_email)s\">%(proctoring_escalation_email)s</a> \n        for assistance, and return to the exam once you receive further instructions.\n      ": "\n        Une erreur syst\u00e8me est survenue avec votre examen surveill\u00e9. Veuillez contacter l'\u00e9quipe du cours\n        \u00e0 <a href=\"mailto:%(proctoring_escalation_email)s\">%(proctoring_escalation_email)s</a> \n        pour de l'assistance et retournez \u00e0 l'examen une fois que vous recevrez plus d'instructions.\n      ",
    "\n        About Proctored Exams\n        ": "\nA propos des examens surveill\u00e9s",
    "\n        Are you sure you want to take this exam without proctoring?\n      ": "\n\u00cates vous s\u00fbr de vouloir faire cet examen sans surveillance?",
    "\n        Create your onboarding profile for faster access in the future\n      ": "\n        Cr\u00e9ez votre profil d'int\u00e9gration pour un acc\u00e8s plus rapide \u00e0 l'avenir\n      ",
    "\n        Due to unsatisfied prerequisites, you can only take this exam without proctoring.\n      ": "\n        En raison de pr\u00e9requis non satisfaits, vous ne pouvez que passer cet examen sans surveillance.\n      ",
    "\n        Establish your identity with the proctoring system to take a proctored exam\n      ": "\n        \u00c9tablissez votre identit\u00e9 avec le syst\u00e8me de surveillance pour passer un examen surveill\u00e9\n      ",
    "\n        Get familiar with proctoring for real exams later in the course. This practice exam has no impact\n        on your grade in the course.\n      ": "\n        Familiarisez-vous avec la surveillance pour de vrais examens plus tard dans le cours. Cet examen de pratique n'a aucun impact\n        sur votre note dans le cours.\n      ",
    "\n        Hello %(username)s,\n    ": "\n        Bonjour %(username)s,\n    ",
    "\n        I am ready to start this timed exam.\n      ": "\nJe suis pr\u00eat \u00e0 d\u00e9marrer cet examen \u00e0 temps limit\u00e9.",
    "\n        If you cannot find this email, you can <a href=\"%(reset_link)s\" target=\"_blank\">reset your password</a> to\n        activate your account.\n      ": "\n        Si vous ne trouvez pas ce courriel, vous pouvez <a href=\"%(reset_link)s\" target=\"_blank\">r\u00e9initialiser votre mot de passe</a> pour\n        activer votre compte.\n      ",
    "\n        If you cannot find this email, you can reset your password to activate your account.\n      ": "\n        Si vous ne trouvez pas ce courriel, vous pouvez r\u00e9initialiser votre mot de passe pour activer votre compte.\n      ",
    "\n        If you have concerns about your proctoring session results, contact your course team.\n      ": "\n        Si vous avez des inqui\u00e9tudes concernant les r\u00e9sultats de votre session de surveillance, contactez votre \u00e9quipe de cours.\n      ",
    "\n        If you have questions about the status of your proctoring session results, contact %(platform_name)s Support.\n      ": "\n        Si vous avez des questions sur l'\u00e9tat des r\u00e9sultats de votre session de surveillance, contactez le support %(platform_name)s.\n      ",
    "\n        If you take this exam without proctoring, you will not be eligible for course credit or the MicroMasters credential if either applies to this course.\n      ": "\n        Si vous passez cet examen sans surveillance, vous ne serez pas \u00e9ligible au cr\u00e9dit de cours ou aux informations d'identification MicroMasters si l'un ou l'autre s'applique \u00e0 ce cours.\n      ",
    "\n        Make sure you:\n      ": "\n        Assurez-vous :\n      ",
    "\n        No, I want to continue working.\n      ": "\nNon, je veux continuer \u00e0 travailler",
    "\n        No, I'd like to continue working\n      ": "\nNon je voudrais continuer \u00e0 travailler",
    "\n        Once your profile has been reviewed, you will receive an email with review results. The email will come from\n        <a href=\"mailto:%(learner_notification_from_email)s\">%(learner_notification_from_email)s</a>.\n        Make sure this email has been added to your inbox filter.\n      ": "\n        Une fois votre profil examin\u00e9, vous recevrez un courriel contenant les r\u00e9sultats de l'examen. Le courriel proviendra de\n        <a href=\"mailto:%(learner_notification_from_email)s\">%(learner_notification_from_email)s</a>.\n        Assurez-vous que cette adresse courriel a \u00e9t\u00e9 ajout\u00e9e \u00e0 votre filtre de bo\u00eete de r\u00e9ception.\n      ",
    "\n        Please contact\n        <a href=\"mailto:%(integration_specific_email)s\">%(integration_specific_email)s</a>\n        if you have questions.\n      ": "\n        Veuillez contacter\n        <a href=\"mailto:%(integration_specific_email)s\">%(integration_specific_email)s</a>\n        si vous avez des questions.\n      ",
    "\n        Practice exams do not affect your grade.\n        You have completed this practice exam and can continue with your course work.\n      ": "\n        Les examens de pratique n'affectent pas votre note.\n        Vous avez termin\u00e9 cet examen de pratique et pouvez continuer votre travail de cours.\n      ",
    "\n        Practice taking a proctored test\n      ": "\n        Entra\u00eenez-vous \u00e0 passer un examen surveill\u00e9\n      ",
    "\n        Select the exam code, then copy it using Control + C (Windows) or Command + C (Mac).\n      ": "\n        S\u00e9lectionnez le code d'examen, puis copiez-le en utilisant Control + C (Windows) ou Command + C (Mac).\n      ",
    "\n        Start your system check now. A new window will open for this step and you will verify your identity.\n      ": "\n        D\u00e9marrez votre v\u00e9rification du syst\u00e8me maintenant. Une nouvelle fen\u00eatre s'ouvrira pour cette \u00e9tape et vous v\u00e9rifierez votre identit\u00e9.\n      ",
    "\n        The following additional rules apply to this exam. These rules take precedence over the Rules for Online Proctored Exams.</br> </br>\n\n        %(exam_review_policy)s </br>\n      ": "\n        Les r\u00e8gles suppl\u00e9mentaires suivantes s'appliquent \u00e0 cet examen. Ces r\u00e8gles ont priorit\u00e9 sur les r\u00e8gles des examens surveill\u00e9s en ligne.</br> </br>\n\n        %(exam_review_policy)s </br>\n      ",
    "\n        The result will be visible after <strong id=\"wait_deadline\"> Loading... </strong>\n    ": "\n        Le r\u00e9sultat sera visible apr\u00e8s <strong id=\"wait_deadline\"> Chargement... </strong>\n    ",
    "\n        There was a problem with your practice proctoring session\n      ": "\n        Il y a eu un probl\u00e8me avec votre s\u00e9ance d'examen surveill\u00e9 de pratique\n      ",
    "\n        To appeal your proctored exam results, please reach out with any relevant information\n        about your exam at \n        <a href=\"%(contact_url)s\">\n            %(contact_url_text)s\n        </a>.\n    ": "\n        Pour faire appel de vos r\u00e9sultats d'examen surveill\u00e9s, veuillez contacter avec toutes\n        les informations pertinentes \u00e0 propos de votre examen\n        <a href=\"%(contact_url)s\">\n            %(contact_url_text)s\n        </a>.\n    ",
    "\n        To be eligible for credit or the program credential associated with this course, you must pass the proctoring review for this exam.\n    ": "\n      Pour \u00eatre \u00e9ligible au cr\u00e9dit ou aux informations d'identification du programme associ\u00e9s \u00e0 ce cours, vous devez avoir une revue de surveillance valide pour cet examen.\n    ",
    "\n        Try a proctored exam\n      ": "\n        Essayez un examen surveill\u00e9\n      ",
    "\n        You have submitted this practice proctored exam\n      ": "\n        Vous avez soumis cet examen de pratique surveill\u00e9\n      ",
    "\n        You will be guided through steps to set up online proctoring software and verify your identity.</br>\n      ": "\n        Vous serez guid\u00e9 \u00e0 travers les \u00e9tapes de configuration du logiciel de surveillance en ligne et de v\u00e9rification de votre identit\u00e9.</br>\n      ",
    "\n        You will have %(total_time)s to complete your exam.\n    ": "\n        Vous aurez %(total_time)s afin de terminer votre examen.\n    ",
    "\n        Your proctored exam \"%(exam_name)s\" in\n        <a href=\"%(course_url)s\">%(course_name)s</a> was reviewed and the\n        course team has identified one or more violations of the proctored exam rules. Examples\n        of issues that may result in a rules violation include browsing\n        the internet, blurry or missing photo identification, using a phone,\n        or getting help from another person. As a result of the identified issue(s),\n        you did not successfully meet the proctored exam requirements.\n    ": "\n        Votre examen surveill\u00e9 \"%(exam_name)s\" dans\n        <a href=\"%(course_url)s\">%(course_name)s</a> a \u00e9t\u00e9 examin\u00e9\n        et l'\u00e9quipe du cours a identifi\u00e9 une ou plusieurs violations des r\u00e8gles d'examen surveill\u00e9es. Exemples\n        des probl\u00e8mes pouvant entra\u00eener une violation des r\u00e8gles incluent la navigation\n        sur internet, une pi\u00e8ce d'identit\u00e9 avec photo floue ou manquante, utiliser un t\u00e9l\u00e9phone,\n        ou obtenir de l'aide d'une autre personne. En raison des probl\u00e8mes identifi\u00e9(s),\n        vous n'avez pas satisfait aux exigences de l'examen surveill\u00e9.\n    ",
    "\n        Your proctored exam \"%(exam_name)s\" in\n        <a href=\"%(course_url)s\">%(course_name)s</a> was reviewed and you\n        met all proctoring requirements.\n    ": "\n        Votre examen surveill\u00e9 \"%(exam_name)s\" pour\n        <a href=\"%(course_url)s\">%(course_name)s</a> a \u00e9t\u00e9 examin\u00e9 et vous\n        avez satisfait \u00e0 toutes les exigences de surveillance.\n    ",
    "\n        Your proctored exam \"%(exam_name)s\" in\n        <a href=\"%(course_url)s\">%(course_name)s</a> was submitted\n        successfully and will now be reviewed to ensure all exam\n        rules were followed. You should receive an email with your exam\n        status within 5 business days.\n    ": "\n        Votre examen surveill\u00e9 \"%(exam_name)s\" pour\n        <a href=\"%(course_url)s\">%(course_name)s</a> a \u00e9t\u00e9 soumis\n        avec succ\u00e8s et sera maintenant examin\u00e9 pour garantir que tous les r\u00e8gles\n        ont \u00e9t\u00e9 suivies. Vous devriez recevoir un courriel avec votre statut\n        d'examen dans les 5 jours ouvrables.\n    ",
    "\n        Your proctoring session ended before you completed this practice exam.\n        You can retry this practice exam if you had problems setting up the online proctoring software.\n      ": "\n        Votre session de surveillance s'est termin\u00e9e avant que vous ayez termin\u00e9 cet examen de pratique.\n        Vous pouvez r\u00e9essayer cet examen de pratique si vous rencontrez des probl\u00e8mes lors de la configuration du logiciel de surveillance en ligne.\n      ",
    "\n        Your proctoring session was reviewed, but did not pass all requirements\n      ": "\n        Votre session de surveillance a \u00e9t\u00e9 examin\u00e9e, mais n'a pas satisfait \u00e0 toutes les exigences\n      ",
    "\n      Additional Exam Rules\n    ": "\n      R\u00e8gles d'examen suppl\u00e9mentaires\n    ",
    "\n      After you submit your exam, your exam will be graded.\n    ": "\nApr\u00e8s avoir soumis votre examen, votre examen sera not\u00e9.",
    "\n      Alternatively, you can end your exam.\n    ": "\n      Vous pouvez \u00e9galement mettre fin \u00e0 votre examen.\n    ",
    "\n      Are you sure that you want to submit your timed exam?\n    ": "\n      \u00cates-vous s\u00fbr de vouloir soumettre votre examen \u00e0 temps limit\u00e9?\n    ",
    "\n      Are you sure you want to end your proctored exam?\n    ": "\n      \u00cates-vous s\u00fbre de vouloir terminer votre examen surveill\u00e9?\n    ",
    "\n      Because the due date has passed, you are no longer able to take this exam.\n    ": "\nVous ne pouvez plus passer cet examen car, l\u2019\u00e9ch\u00e9ance est pass\u00e9e.",
    "\n      Error with proctored exam\n    ": "\nErreur lors de l'examen surveill\u00e9",
    "\n      If you already have an onboarding profile approved through another course,\n      this submission will not be reviewed. You may retry this exam at any time\n      to validate that your setup still meets the requirements for proctoring.\n    ": "\n      Si vous avez d\u00e9j\u00e0 un profil d'int\u00e9gration approuv\u00e9 dans un autre cours,\n      Cette soumission ne sera pas examin\u00e9e. Vous pouvez reprendre ce test\n      \u00e0 tout moment afin de valider votre configuration pour la surveillance.\n    ",
    "\n      If you continue to have trouble please contact <a href=\"%(link_urls.contact_us)s\" target=\"_blank\">\n      %(platform_name)s Support</a>.\n    ": "\n      Si vous continuez \u00e0 avoir des probl\u00e8mes, veuillez contacter<a href=\"%(link_urls.contact_us)s\" target=\"_blank\">\n      le support %(platform_name)s</a>.\n    ",
    "\n      If you do not have an onboarding profile with the system,\n      Verificient will review your submission and create an onboarding\n      profile to grant you access to proctored exams. Onboarding\n      profile review can take 2+ business days.\n    ": "\n      Si vous n'avez pas de profil d'int\u00e9gration avec le syst\u00e8me,\n      Verificient examinera votre soumission et cr\u00e9era un profil\n      d'int\u00e9gration, vous permettant d'acc\u00e9der aux examens surveill\u00e9s.\n      L'examen du profil d'int\u00e9gration peut prendre plus de 2 jours ouvrables.\n    ",
    "\n      If you have disabilities,\n      you might be eligible for an additional time allowance on timed exams.\n      Ask your course team for information about additional time allowances.\n    ": "\n      Si vous avez des incapacit\u00e9s,\n      vous pouvez demander du temps suppl\u00e9mentaire.\n      Contactez l'\u00e9quipe du cours pour les demandes de temps suppl\u00e9mentaire.\n    ",
    "\n      If you have made an error in this submission you may restart the onboarding process. \n      Your current submission will be removed and will not receive a review.\n    ": "\n      Si vous avez fait une erreur dans cette soumission, vous pouvez red\u00e9marrer le processus d'int\u00e9gration.\n      Votre soumission actuelle sera supprim\u00e9e et ne sera pas examin\u00e9e.\n    ",
    "\n      If you have questions about the status of your proctored exam results, contact %(platform_name)s Support.\n    ": "\n      Si vous avez des questions \u00e0 propos du statut de votre examen surveill\u00e9, contactez le support %(platform_name)s.\n    ",
    "\n      If you have questions about the status of your requirements, contact %(platform_name)s Support.\n    ": "\n      Si vous avez des questions sur l'\u00e9tat de vos exigences, contactez le support %(platform_name)s .\n    ",
    "\n      Important\n    ": "\n      Important\n    ",
    "\n      Make sure that you have selected \"Submit\" for each problem before you submit your exam.\n    ": "\n      Assurez-vous que vous avez s\u00e9lectionn\u00e9 \"Soumettre\" pour chaque probl\u00e8me avant de soumettre votre examen.\n    ",
    "\n      Once your profile has been reviewed, you will receive an email\n      with review results. The email will come from\n      <a href=\"mailto:%(learner_notification_from_email)s\">\n        %(learner_notification_from_email)s\n      </a>,\n      so make sure this email has been added to your inbox filter.\n    ": "\n      Une fois votre profil examin\u00e9, vous recevrez un courriel\n      avec les r\u00e9sultats de l'examen. Le courriel proviendra de\n      <a href=\"mailto:%(learner_notification_from_email)s\">\n        %(learner_notification_from_email)s\n      </a>,\n      alors assurez-vous que cette adresse courriel a \u00e9t\u00e9 ajout\u00e9e \u00e0 votre filtre de bo\u00eete de r\u00e9ception.\n    ",
    "\n      Please check your registered email's Inbox and Spam folders for an activation email from\n      %(platform_name)s.\n    ": "\n      Veuillez v\u00e9rifier votre bo\u00eete de r\u00e9ception et vos dossiers de pourriels pour un courriel d'activation de\n      %(platform_name)s.\n    ",
    "\n      Please complete an onboarding exam before attempting this exam.\n    ": "\n      Veuillez passer un examen d'int\u00e9gration avant de tenter cet examen.\n    ",
    "\n      Please contact\n      <a href=\"mailto:%(integration_specific_email)s\">\n        %(integration_specific_email)s\n      </a> if you have questions.\n    ": "\n      Veuillez contacter\n      <a href=\"mailto:%(integration_specific_email)s\">\n        %(integration_specific_email)s\n      </a> si vous avez des questions.\n    ",
    "\n      Please contact\n      <a href=\"mailto:%(integration_specific_email)s\">\n        %(integration_specific_email)s\n      </a> if you have questions. You may retake this onboarding exam by clicking \"Retry my exam\".\n    ": "\n      Veuillez contacter\n      <a href=\"mailto:%(integration_specific_email)s\">\n        %(integration_specific_email)s\n      </a> si vous avez des questions. Vous pouvez repasser cet examen d'int\u00e9gration en cliquant sur \"R\u00e9essayer mon examen\".\n    ",
    "\n      Proctored Exam Rules\n    ": "\n      R\u00e8gles d'examen surveill\u00e9\n    ",
    "\n      Proctoring for this course is provided via %(provider_name)s.  Onboarding review, including identity verification, can take 2+ business days.\n    ": "\n      La surveillance de ce cours est assur\u00e9e via%(provider_name)s.  L'examen de l'int\u00e9gration, y compris la v\u00e9rification de l'identit\u00e9, peut prendre plus de 2 jours ouvrables.\n    ",
    "\n      Proctoring for your exam is provided via %(provider_name)s.\n      If you have questions about the status of your onboarding exam, contact\n      <a href=\"mailto:%(integration_specific_email)s\">%(integration_specific_email)s</a>.\n    ": "\n      La surveillance de votre examen est assur\u00e9e via %(provider_name)s.\n      Si vous avez des questions sur l'\u00e9tat de votre examen d'int\u00e9gration, contactez\n      <a href=\"mailto:%(integration_specific_email)s\">%(integration_specific_email)s</a>.\n    ",
    "\n      Set up and start your proctored exam\n    ": "\n      Configurez et d\u00e9marrez votre examen surveill\u00e9\n    ",
    "\n      The content of this exam can only be viewed through the RPNow\n      application. If you have yet to complete your exam, please\n      return to the RPNow application to proceed.\n    ": "\n      Le contenu de cet examen ne peut \u00eatre consult\u00e9 que via l'application\n      RPNnow. Si vous n'avez pas encore termin\u00e9 votre examen, veuillez\n      retournez \u00e0 l'application RPNow pour continuer.\n    ",
    "\n      The due date for this exam has passed\n    ": "\n      La date limite pour cet examen est pass\u00e9e\n    ",
    "\n      This exam is proctored\n    ": "\nCet examen est surveill\u00e9",
    "\n      To be eligible for credit or the program credential associated with this course, you must pass the proctoring review for this exam.\n\n    ": "\n      Pour \u00eatre \u00e9ligible au cr\u00e9dit ou aux informations d'identification du programme associ\u00e9s \u00e0 ce cours, vous devez r\u00e9ussir l'examen de surveillance pour cet examen.\n\n    ",
    "\n      To view your exam questions and responses, select <strong>View my exam</strong>. The exam's review status is shown in the left navigation pane.\n    ": "\n      Pour voir votre examen et vos r\u00e9ponses, cliquez sur <strong>Voir mon examen</strong>. Le statut de la revue de l'examen est disponible dans le menu de gauche.\n    ",
    "\n      Why this is important to you:\n    ": "\n      Pourquoi cela est important pour vous :\n    ",
    "\n      Yes, submit my timed exam.\n    ": "\nOui, soumettre cet examen \u00e0 temps limit\u00e9.",
    "\n      You are taking \"%(exam_display_name)s\" as an onboarding exam. You must click \u201cYes, end my proctored exam\u201d and submit your proctoring session to complete onboarding.\n    ": "\n      Vous passez \"%(exam_display_name)s\" comme un examen d'int\u00e9gration. Vous devez cliquer sur \u00abOui, terminer mon examen surveill\u00e9\u00bb et soumettre votre session de surveillance pour terminer l'int\u00e9gration.\n    ",
    "\n      You have not activated your account.\n    ": "\n      Vous n'avez pas activ\u00e9 votre compte.\n    ",
    "\n      You have submitted this proctored exam for review\n    ": "\n      Vous avez envoyer votre examen surveill\u00e9 pour \u00e9valuation\n    ",
    "\n      You must complete an onboarding exam before taking this proctored exam\n    ": "\n      Vous devez passer un examen d'int\u00e9gration avant de passer cet examen surveill\u00e9\n    ",
    "\n      Your %(platform_name)s account has not yet been activated. To take the proctored exam,\n      you are required to activate your account.\n    ": "\n      Votre compte %(platform_name)s n'a pas encore \u00e9t\u00e9 activ\u00e9. Pour passer l'examen surveill\u00e9,\n      vous devez activer votre compte.\n    ",
    "\n      Your exam is ready to be resumed.\n    ": "\n      Votre examen est pr\u00eat \u00e0 \u00eatre repris.\n    ",
    "\n      Your onboarding exam failed to pass all requirements.\n    ": "\n      Votre examen d'int\u00e9gration n'a pas satisfait \u00e0 toutes les exigences.\n    ",
    "\n      Your practice proctoring results: <b class=\"failure\"> Unsatisfactory </b>\n    ": "\n     Vos r\u00e9sultats d'examen surveill\u00e9 d'entrainement: <b class=\"failure\"> \u00c9chec </b>\n    ",
    "\n      Your profile has been established, and you're ready to take proctored exams in this course.\n    ": "\n      Votre profil a \u00e9t\u00e9 \u00e9tabli et vous \u00eates pr\u00eat \u00e0 passer les examens surveill\u00e9s dans ce cours.\n    ",
    "\n    %(exam_name)s is a Timed Exam (%(total_time)s)\n    ": "\n    %(exam_name)s est un examen minut\u00e9 (%(total_time)s)\n    ",
    "\n    Error: There was a problem with your onboarding session\n  ": "\n    Erreur : Un probl\u00e8me est survenu lors de votre session d'int\u00e9gration\n  ",
    "\n    If you have any questions about your results, you can reach out at \n        <a href=\"%(contact_url)s\">\n            %(contact_url_text)s\n        </a>.\n    ": "\n    Si vous avez des questions \u00e0 propos de vos r\u00e9sultats, vous pouvez contacter \n        <a href=\"%(contact_url)s\">\n            %(contact_url_text)s\n        </a>.\n    ",
    "\n    Proctoring onboarding exam\n  ": "\n    Examen d'int\u00e9gration\n  ",
    "\n    The following prerequisites are in a <strong>pending</strong> state and must be successfully completed before you can proceed:\n    ": "\n    Les pr\u00e9requis suivants sont dans un \u00e9tat <strong>en attente </strong>et doivent \u00eatre compl\u00e9t\u00e9s avec succ\u00e8s avant de pouvoir proc\u00e9der:\n    ",
    "\n    You can take this exam with proctoring only when all prerequisites have been successfully completed.\n    ": "\n    Vous ne pouvez passer cet examen avec surveillance que lorsque tous les pr\u00e9requis ont \u00e9t\u00e9 remplis avec succ\u00e8s.\n    ",
    "\n    You did not satisfy the following prerequisites:\n    ": "\nVous n'avez pas satisfait les pr\u00e9requis suivants:",
    "\n    You did not satisfy the requirements for taking this exam with proctoring.\n    ": "\n    Vous ne remplissez pas les conditions requises pour passer cet examen avec surveillance.\n    ",
    "\n    You have not completed the prerequisites for this exam. All requirements must be satisfied before you can take this proctored exam.\n    ": "\n    Vous n'avez pas rempli les conditions pr\u00e9alables pour cet examen. Toutes les conditions doivent \u00eatre remplies avant de pouvoir passer cet examen surveill\u00e9.\n    ",
    "\n    You have submitted this onboarding exam\n  ": "\n    Vous avez soumis cet examen d'int\u00e9gration\n  ",
    "\n    You will be guided through online proctoring software set up and identity verification.\n  ": "\n    Vous serez guid\u00e9 \u00e0 travers la configuration du logiciel de surveillance en ligne et la v\u00e9rification d'identit\u00e9.\n  ",
    "\n    Your onboarding exam is being reviewed. Before attempting this exam, please allow 2+ business days for your onboarding exam to be reviewed.\n  ": "\n    Votre examen d'int\u00e9gration est en cours de r\u00e9vision. Avant de tenter cet examen, veuillez pr\u00e9voir plus de 2 jours ouvrables pour que votre examen d'int\u00e9gration soit examin\u00e9.\n  ",
    "\n    Your onboarding profile was reviewed successfully\n  ": "\n    Votre profil d'int\u00e9gration a \u00e9t\u00e9 examin\u00e9 avec succ\u00e8s\n  ",
    "\n    Your onboarding session was reviewed, but did not pass all requirements\n  ": "\n    Votre session d'int\u00e9gration a \u00e9t\u00e9 examin\u00e9e, mais n'a pas satisfait \u00e0 toutes les exigences\n  ",
    "\n    Your proctoring session ended before you completed this onboarding exam.\n    You should retry this onboarding exam.\n  ": "\n    Votre session de surveillance s'est termin\u00e9e avant que vous ayez termin\u00e9 cet examen d'int\u00e9gration.\n    Vous devriez r\u00e9essayer cet examen d'int\u00e9gration.\n  ",
    " From this point in time, you must follow the <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">online proctoring rules</a> to pass the proctoring review for your exam. ": " A ce stade vous devez suivre les <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">r\u00e9gles de surveillance</a> pour satisfaire les revues de votre examen surveill\u00e9. ",
    " Your Proctoring Session Has Started ": "Votre session d'examen surveill\u00e9 a d\u00e9marr\u00e9",
    " and {num_of_minutes} minute": "et {num_of_minutes} minute",
    " and {num_of_minutes} minutes": "et  {num_of_minutes} minutes",
    " to complete and submit the exam.": "pour compl\u00e9ter et soumettre l'examen.",
    "%(sel)s of %(cnt)s selected": [
      "%(sel)s sur %(cnt)s s\u00e9lectionn\u00e9",
      "%(sel)s sur %(cnt)s s\u00e9lectionn\u00e9s"
    ],
    "(required):": "(requis):",
    "6 a.m.": "6:00",
    "6 p.m.": "18:00",
    "Additional Time (minutes)": "Temps additionnel (minutes)",
    "After you select ": "Apr\u00e8s avoir choisi",
    "All Unreviewed": "Tous les non-revus",
    "All Unreviewed Failures": "Tous les \u00e9checs non-revus",
    "April": "Avril",
    "Are you sure you want to delete the following file? It cannot be restored.\nFile: ": "\u00cates-vous s\u00fbr de vouloir supprimer le fichier suivant ? Il ne peut pas \u00eatre restaur\u00e9.\nFichier : ",
    "Assessment": "\u00c9valuation",
    "Assessments": "\u00c9valuations",
    "August": "Ao\u00fbt",
    "Available %s": "%s disponible(s)",
    "Back to Full List": "Retour \u00e0 la liste compl\u00e8te",
    "Block view is unavailable": "La vue du block n'est pas disponible",
    "Can I request additional time to complete my exam?": "Puis-je demander un temps additionnel pour compl\u00e9ter mon examen ?",
    "Cancel": "Annuler",
    "Cannot update attempt review status": "Impossible de mettre \u00e0 jour l'\u00e9tat d'examen de la tentative",
    "Changes to steps that are not selected as part of the assignment will not be saved.": "Les modifications apport\u00e9es \u00e0 des \u00e9tapes qui ne sont pas s\u00e9lectionn\u00e9s comme parties prenantes du devoir ne seront pas sauvegard\u00e9s.",
    "Choose": "Choisir",
    "Choose a Date": "Choisir une date",
    "Choose a Time": "Choisir une heure",
    "Choose a time": "Choisir une heure",
    "Choose all": "Tout choisir",
    "Chosen %s": "Choix des \u00ab\u00a0%s \u00bb",
    "Click to choose all %s at once.": "Cliquez pour choisir tous les \u00ab\u00a0%s\u00a0\u00bb en une seule op\u00e9ration.",
    "Click to remove all chosen %s at once.": "Cliquez pour enlever tous les \u00ab\u00a0%s\u00a0\u00bb en une seule op\u00e9ration.",
    "Close": "Fermer",
    "Confirm": "Confirmer",
    "Confirm Delete Uploaded File": "Confirmer la suppression du fichier upload\u00e9",
    "Confirm Grade Team Submission": "Confirmer la soumission de la note d'\u00e9quipe",
    "Confirm Submit Response": "Confirmer l'envoi de la r\u00e9ponse",
    "Continue Exam Without Proctoring": "Continuer l'examen sans surveilance",
    "Continue to my practice exam": "Continuer mon examen d'essai",
    "Continue to my proctored exam.": "Continuez vers mon examen surveill\u00e9.",
    "Continue to onboarding": "Continuer vers l'int\u00e9gration",
    "Copy Exam Code": "Copier le code d'examen",
    "Could not load teams information.": "Impossible de charger les informations des \u00e9quipes.",
    "Could not retrieve download url.": "Impossible de r\u00e9cup\u00e9rer l'url  de t\u00e9l\u00e9chargement.",
    "Could not retrieve upload url.": "Impossible de r\u00e9cup\u00e9rer l'URL de t\u00e9l\u00e9versement.",
    "Course Id": "ID de Cours",
    "Created": "Cr\u00e9\u00e9",
    "Criterion Added": "Crit\u00e8re ajout\u00e9",
    "Criterion Deleted": "Crit\u00e8re supprim\u00e9",
    "December": "D\u00e9cembre",
    "Declined": "Refus\u00e9",
    "Demo the new Grading Experience": "D\u00e9monstration de la nouvelle exp\u00e9rience de notation",
    "Describe ": "D\u00e9crire",
    "Download Software Clicked": "T\u00e9l\u00e9chargement du logiciel demand\u00e9e",
    "End My Exam": "Terminer mon examen",
    "Ending Exam": "Fin de l'examen",
    "Enter a valid positive value number": "Entrez un nombre de valeur positive valide",
    "Enter a valid username or email": "Entrez un nom d'utilisateur ou un courriel valide",
    "Error": "Erreur",
    "Error getting the number of ungraded responses": "Erreur lors de la r\u00e9cup\u00e9ration du nombre de r\u00e9ponses non \u00e9valu\u00e9es",
    "Error when looking up username": "Erreur lors de la recherche du nom d'utilisateur",
    "Error while fetching student data.": "Erreur lors de la r\u00e9cup\u00e9ration des donn\u00e9es \u00e9tudiantes.",
    "Errors detected on the following tabs: ": "Erreurs d\u00e9tect\u00e9es sur les onglets suivants\u00a0:",
    "Failed Proctoring": "Echec de l'Examen Surveill\u00e9",
    "Failed to clone rubric": "\u00c9chec du clonage de la grille d'\u00e9valuation",
    "February": "F\u00e9vrier",
    "Feedback available for selection.": "Feedback disponible pour la s\u00e9lection.",
    "File types can not be empty.": "Les types de fichier ne peuvent \u00eatre vides.",
    "File upload failed: unsupported file type. Only the supported file types can be uploaded. If you have questions, please reach out to the course team.": "\u00c9chec du t\u00e9l\u00e9versement du fichier: type de fichier non pris en charge. Seuls les types de fichiers pris en charge peuvent \u00eatre t\u00e9l\u00e9vers\u00e9s. Si vous avez des questions, veuillez contacter l'\u00e9quipe du cours.",
    "Filter": "Filtrer",
    "Final Grade Received": "Note finale obtenue",
    "Go Back": "Retour",
    "Grade Status": "Statut des notes",
    "Have a computer with a functioning webcam": "Ayez un ordinateur avec une webcam fonctionnelle",
    "Have your valid photo ID (e.g. driver's license or passport) ready": "Ayez \u00e0 port\u00e9e de main votre pi\u00e8ce d'identit\u00e9 valide avec photo (par exemple, permis de conduire ou passeport)",
    "Heading 3": "Ent\u00eate 3",
    "Heading 4": "Titre 4",
    "Heading 5": "Titre 5",
    "Heading 6": "Titre 6",
    "Hide": "Masquer",
    "However, {overwritten_count} of these students have received a grade through the staff grade override tool already.": "Toutefois, {overwritten_count} \u00e9tudiants ont d\u00e9j\u00e0 re\u00e7u une note fournie par l'\u00e9quipe de cours.",
    "I am ready to start this timed exam,": "Je suis pr\u00eat \u00e0 d\u00e9marrer cet examen \u00e0 temps limit\u00e9,",
    "I understand and want to reset this onboarding exam.": "Je comprends et je souhaite r\u00e9initialiser cet examen d'int\u00e9gration.",
    "If the proctoring software window is still open, close it now and confirm that you want to quit the application.": "Si la fen\u00eatre du logiciel de surveillance est toujours ouverte, fermez-la maintenant et confirmez que vous souhaitez quitter l'application.",
    "If you leave this page without saving or submitting your response, you will lose any work you have done on the response.": "Si vous quittez cette page sans la sauvegarder ou soumettre votre r\u00e9ponse, vous perdrez tout le travail r\u00e9alis\u00e9 pour cette r\u00e9ponse.",
    "If you leave this page without submitting your peer assessment, you will lose any work you have done.": "Si vous quittez cette page sans envoyer votre \u00e9valuation par les pairs, vous perdrez tout le travail r\u00e9alis\u00e9.",
    "If you leave this page without submitting your self assessment, you will lose any work you have done.": "Si vous quittez cette page sans envoyer votre auto-\u00e9valuation, vous perdrez tout le travail r\u00e9alis\u00e9.",
    "If you leave this page without submitting your staff assessment, you will lose any work you have done.": "Si vous quittez cette page sans envoyer votre \u00e9valuation par l'\u00e9quipe p\u00e9dagogique, vous perdrez tout le travail r\u00e9alis\u00e9.",
    "Individual file size must be {max_files_mb}MB or less.": "La taille du fichier individuel doit \u00eatre inf\u00e9rieure ou \u00e9gale \u00e0 {max_files_mb}MB.",
    "Is Resumable": "Est reprenable",
    "Is Sample Attempt": "Est une tentative d'essai",
    "January": "Janvier",
    "July": "Juillet",
    "June": "Juin",
    "List of Open Assessments is unavailable": "La list des questions ouvertes n'est pas disponible",
    "Make sure that you have selected \"Submit\" for each answer before you submit your exam.": "Assurez-vous d'avoir s\u00e9lectionn\u00e9 \"Soumettre\" pour chaque r\u00e9ponse avant de soumettre votre examen.",
    "March": "Mars",
    "May": "Mai",
    "Midnight": "Minuit",
    "Missing required query parameter course_id": "Param\u00e8tre de requ\u00eate obligatoire course_id manquant",
    "Multiple teams returned for course": "Plusieurs \u00e9quipes sont revenues pour le cours",
    "Must be a Staff User to Perform this request.": "Vous devez \u00eatre un utilisateur du type Enseignant pour faire cette requ\u00eate.",
    "Navigate to onboarding exam": "Acc\u00e9dez \u00e0 l'examen d'int\u00e9gration",
    "No exams in course {course_id}.": "Aucun examen dans le cours {course_id}.",
    "No instructor dashboard for {proctor_service}": "Aucun tableau de bord d'instructeur pour {proctor_service}",
    "No onboarding status API for {proctor_service}": "Aucune API de statut d'int\u00e9gration pour {proctor_service}",
    "No proctored exams in course {course_id}": "Aucun examen surveill\u00e9 dans le cours {course_id}",
    "Noon": "Midi",
    "Not Selected": "Non s\u00e9lectionn\u00e9",
    "Note: You are %s hour ahead of server time.": [
      "Note\u00a0: l'heure du serveur pr\u00e9c\u00e8de votre heure de %s heure.",
      "Note\u00a0: l'heure du serveur pr\u00e9c\u00e8de votre heure de %s heures."
    ],
    "Note: You are %s hour behind server time.": [
      "Note\u00a0: votre heure pr\u00e9c\u00e8de l'heure du serveur de %s heure.",
      "Note\u00a0: votre heure pr\u00e9c\u00e8de l'heure du serveur de %s heures."
    ],
    "November": "Novembre",
    "Now": "Maintenant",
    "October": "Octobre",
    "Onboarding Expired": "L'int\u00e9gration a expir\u00e9",
    "Onboarding Failed": "L'int\u00e9gration a \u00e9chou\u00e9",
    "Onboarding Missing": "Int\u00e9gration manquante",
    "Onboarding Pending": "Int\u00e9gration en attente",
    "Onboarding status question": "Question sur le statut d'int\u00e9gration",
    "Once you click \"Yes, end my proctored exam\", the exam will be closed, and your proctoring session will be submitted for review.": "Une fois que vous aurez cliqu\u00e9 sur \u00abOui, terminer mon examen surveill\u00e9\u00bb, l'examen sera ferm\u00e9 et votre session de surveillance sera soumise pour examen.",
    "One or more rescheduling tasks failed.": "Une ou plusieurs t\u00e2ches de r\u00e9\u00e9chelonnement ont \u00e9chou\u00e9.",
    "Option Deleted": "Option supprim\u00e9e",
    "Paragraph": "Paragraphe",
    "Passed Proctoring": "A pass\u00e9 l'examen surveill\u00e9.",
    "Peer": "Pair",
    "Peer Responses Received": "R\u00e9ponses des pairs re\u00e7ues",
    "Peers Assessed": "\u00c9valu\u00e9 par les pairs",
    "Pending Session Review": "En attente de la revue de la session.",
    "Please wait": " Veuillez patienter",
    "Practice Exam Completed": "Examen d'essai compl\u00e9t\u00e9",
    "Practice Exam Failed": "Examen d'essai \u00e9chou\u00e9",
    "Preformatted": "Pr\u00e9format\u00e9",
    "Problem cloning rubric": "Probl\u00e8me de clonage de la grille d'\u00e9valuation",
    "Proctored Option Available": "Option Examen Surveill\u00e9 Possible",
    "Proctored Option No Longer Available": "Option Examen Surveill\u00e9 Plus Disponible.",
    "Proctored exam {exam_name} in {course_name} for user {username}": "Examen surveill\u00e9 {exam_name} pour {course_name} pour l'utilisateur {username}",
    "Proctoring Results For {course_name} {exam_name}": "R\u00e9sultats d'examen surveill\u00e9 pour {course_name} {exam_name}",
    "Proctoring Review In Progress For {course_name} {exam_name}": "Revue d'examen surveill\u00e9 en cours pour {course_name} {exam_name}",
    "Proctoring results are usually available within 5 business days after you submit your exam.": "Les r\u00e9sultats de la surveillance sont g\u00e9n\u00e9ralement disponibles dans les 5 jours ouvrables suivant la soumission de votre examen.",
    "Ready To Start": "Pr\u00eat \u00e0 Commencer",
    "Ready To Submit": "Pr\u00eat \u00e0 Soumettre",
    "Ready to Resume": "Pr\u00eat \u00e0 reprendre",
    "Refresh": "Actualiser",
    "Rejected": "Rejet\u00e9",
    "Remove": "Enlever",
    "Remove all": "Tout enlever",
    "Resetting Onboarding Exam": "R\u00e9initialisation de l'examen d'int\u00e9gration",
    "Resumed": "Recommenc\u00e9",
    "Retry my exam": "R\u00e9essayer mon examen",
    "Review Policy Exception": "Exception aux R\u00e8gles de Revues",
    "Save Unsuccessful": "\u00c9chec de la sauvegarde",
    "Second Review Required": "Revue additionnelle requise",
    "Self": "Auto",
    "September": "Septembre",
    "Server error.": "Erreur serveur.",
    "Show": "Afficher",
    "Staff": "\u00c9quipe p\u00e9dagogique",
    "Staff Grader": "Notation du personnel",
    "Staff assessment": "\u00c9valuation par l'\u00e9quipe enseignante",
    "Start Exam": "Commencer l'examen",
    "Start System Check": "D\u00e9marrer le diagnostique syst\u00e8me",
    "Start my exam": "Commencer mon examen",
    "Started": "D\u00e9but\u00e9",
    "Starting Exam": "D\u00e9but de l'examen",
    "Submitted": "Soumis",
    "Take this exam without proctoring.": "Faire cette examen sans surveillance.",
    "Taking As Open Exam": "Prendre comme session libre.",
    "Taking As Proctored Exam": "Faire en tant qu'examen surveill\u00e9",
    "Taking as Proctored": "Faire sous surveillance",
    "The \"{name}\" problem is configured to require a minimum of {min_grades} peer grades, and asks to review {min_graded} peers.": "Le probl\u00e8me \"{name}\" requi\u00e8re un minimim de {min_grades} \u00e9valutions par les pairs et que vous \u00e9valuez au moins {min_graded} pairs.",
    "The display of ungraded and checked out responses could not be loaded.": "L'affichage des r\u00e9ponses non not\u00e9es n'a pas pu \u00eatre charg\u00e9.",
    "The following file types are not allowed: ": "Les types de fichiers suivants ne sont pas support\u00e9s :",
    "The maximum number files that can be saved is ": "Le nombre maximum de fichiers pouvant \u00eatre enregistr\u00e9s est",
    "The onboarding service is temporarily unavailable. Please try again later.": "Le service d'int\u00e9gration est momentan\u00e9ment indisponible. Veuillez r\u00e9essayer plus tard.",
    "The server could not be contacted.": "Le serveur n'a pas pu \u00eatre contact\u00e9.",
    "The staff assessment form could not be loaded.": "Le formulaire d'\u00e9valuation de l'\u00e9quipe p\u00e9dagogique n'a pas pu \u00eatre charg\u00e9.",
    "The submission could not be removed from the grading pool.": "La soumission n'a pas pu \u00eatre retir\u00e9e du groupe de notation.",
    "There are currently {stuck_learners} learners in the waiting state, meaning they have not yet met all requirements for Peer Assessment. ": "Il y a {stuck_learners} apprenants dans l'\u00e9tape d'attente, c'est-\u00e0-dire qu'ils n'ont pas encore r\u00e9pondu \u00e0 l'ensemble des demandes de l'\u00e9valuation par les pairs.",
    "There is no onboarding exam accessible to this user.": "Il n'y a pas d'examen d'int\u00e9gration accessible \u00e0 cet utilisateur.",
    "There is no onboarding exam related to this course id.": "Il n'y a pas d'examen d'int\u00e9gration li\u00e9 \u00e0 cet identifiant de cours.",
    "This ORA has already been released. Changes will only affect learners making new submissions. Existing submissions will not be modified by this change.": "Ce probl\u00e8me ORA a d\u00e9j\u00e0 \u00e9t\u00e9 publi\u00e9. Les modifications n'affecteront que les apprenants faisant de nouvelles soumissions. Les soumissions existantes ne seront pas modifi\u00e9es par ce changement.",
    "This assessment could not be submitted.": "Cette \u00e9valuation n'a pas pu \u00eatre soumise.",
    "This exam has a time limit associated with it.": "Cet examen est \u00e0 temps limit\u00e9",
    "This feedback could not be submitted.": "Ce commentaire n'a pas pu \u00eatre soumis.",
    "This grade will be applied to all members of the team. Do you want to continue?": "Cette note sera accord\u00e9e \u00e0 tous les membres de l'\u00e9quipe. Voulez-vous continuer?",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Ceci est une liste des \u00ab\u00a0%s\u00a0\u00bb disponibles. Vous pouvez en choisir en les s\u00e9lectionnant dans la zone ci-dessous, puis en cliquant sur la fl\u00e8che \u00ab\u00a0Choisir\u00a0\u00bb entre les deux zones.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Ceci est la liste des \u00ab\u00a0%s\u00a0\u00bb choisi(e)s. Vous pouvez en enlever en les s\u00e9lectionnant dans la zone ci-dessous, puis en cliquant sur la fl\u00e8che \u00ab Enlever \u00bb entre les deux zones.",
    "This problem could not be saved.": "Ce probl\u00e8me n'a pas pu \u00eatre enregistr\u00e9.",
    "This response could not be submitted.": "Cette r\u00e9ponse n'a pas pu \u00eatre soumise.",
    "This section could not be loaded.": "Cette section n'a pas pu \u00eatre charg\u00e9e.",
    "Thumbnail view of ": "Aper\u00e7u de ",
    "Time Spent On Current Step": "Temps \u00e9coul\u00e9 sur l'\u00e9tape courante",
    "Timed Exam": "Examen minut\u00e9",
    "Timed Out": "Temps \u00e9coul\u00e9",
    "To pass this exam, you must complete the problems in the time allowed.": "Pour r\u00e9ussir l'examen, vous devez r\u00e9pondre aux questions dans le temps imparti.",
    "Today": "Aujourd'hui",
    "Tomorrow": "Demain",
    "Total Responses": "R\u00e9ponses total",
    "Training": "Entrainement",
    "Type into this box to filter down the list of available %s.": "\u00c9crivez dans cette zone pour filtrer la liste des \u00ab\u00a0%s\u00a0\u00bb disponibles.",
    "Unable to load": "Chargement impossible",
    "Unexpected server error.": "Erreur serveur inattendue. ",
    "Ungraded Practice Exam": "Examen d'entrainement non not\u00e9",
    "Unit Name": "Nom de l'unit\u00e9",
    "Units": "Unit\u00e9s",
    "Unnamed Option": "Option sans nom",
    "User lookup failed": "La recherche d'utilisateurs a \u00e9chou\u00e9",
    "Username": "Nom d\u2019utilisateur",
    "Verified": "V\u00e9rifi\u00e9",
    "View and grade responses": "Voir et noter les r\u00e9ponses",
    "View my exam": "Voir mon examen",
    "Waiting": "En attente",
    "Warning": "Attention",
    "Yes, end my proctored exam": "Oui, terminer mon examen surveill\u00e9",
    "Yesterday": "Hier",
    "You have added a criterion. You will need to select an option for the criterion in the Learner Training step. To do this, click the Assessment Steps tab.": "Vous avez ajout\u00e9 un crit\u00e8re. Vous devrez s\u00e9lectionner une option pour le crit\u00e8re \u00e0 l'\u00e9tape Formation de l'apprenant. Pour ce faire, cliquez sur l'onglet \u00c9tapes d'\u00e9valuation.",
    "You have deleted a criterion. The criterion has been removed from the example responses in the Learner Training step.": "Vous avez supprim\u00e9 un crit\u00e8re. Le crit\u00e8re a \u00e9t\u00e9 supprim\u00e9 des crit\u00e8res des exemples de r\u00e9ponses de cette \u00e9tape la formation de l'\u00e9tudiant.",
    "You have deleted all the options for this criterion. The criterion has been removed from the sample responses in the Learner Training step.": "Vous avez supprim\u00e9 toutes les options pour ce crit\u00e8re. Le crit\u00e8re a \u00e9t\u00e9 supprim\u00e9 des crit\u00e8res des exemples de r\u00e9ponses de cette \u00e9tape la Formation de l'Etudiant.",
    "You have deleted an option. That option has been removed from its criterion in the sample responses in the Learner Training step. You might have to select a new option for the criterion.": "Vous avez supprim\u00e9 une option. Cette option a \u00e9t\u00e9 supprim\u00e9e des crit\u00e8res des exemples de r\u00e9ponses de cette \u00e9tape la Formation de l'Etudiant. Vous pourriez avoir \u00e0 s\u00e9lectionner une nouvelle option pour le crit\u00e8re.",
    "You have selected an action, and you haven\u2019t made any changes on individual fields. You\u2019re probably looking for the Go button rather than the Save button.": "Vous avez s\u00e9lectionn\u00e9 une action, et vous n'avez fait aucune modification sur des champs. Vous cherchez probablement le bouton Envoyer et non le bouton Enregistrer.",
    "You have selected an action, but you haven\u2019t saved your changes to individual fields yet. Please click OK to save. You\u2019ll need to re-run the action.": "Vous avez s\u00e9lectionn\u00e9 une action, mais vous n'avez pas encore enregistr\u00e9 certains champs modifi\u00e9s. Cliquez sur OK pour enregistrer. Vous devrez r\u00e9appliquer l'action.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Vous avez des modifications non sauvegard\u00e9es sur certains champs \u00e9ditables. Si vous lancez une action, ces modifications vont \u00eatre perdues.",
    "You must provide a learner name.": "Vous devez saisir un nom d'apprenant.",
    "You're about to submit your response for this assignment. After you submit this response, you can't change it or submit a new response.": "Vous \u00eates sur le point d'envoyer votre r\u00e9ponse d\u00e9finitive. Apr\u00e8s cette \u00e9tape vous ne pourrez plus la modifier ou en soumettre une nouvelle.",
    "Your file has been deleted or path has been changed: ": "Votre fichier a \u00e9t\u00e9 supprim\u00e9 ou le chemin a \u00e9t\u00e9 modifi\u00e9\u00a0:",
    "Your recorded data should now be uploaded for review.": "Vos donn\u00e9es enregistr\u00e9es doivent maintenant \u00eatre t\u00e9l\u00e9charg\u00e9es pour examen.",
    "a practice exam": "un examen de pratique",
    "a proctored exam": "un examen surveill\u00e9",
    "a timed exam": "un examen chronom\u00e9tr\u00e9",
    "abbrev. month April\u0004Apr": "avr",
    "abbrev. month August\u0004Aug": "ao\u00fb",
    "abbrev. month December\u0004Dec": "d\u00e9c",
    "abbrev. month February\u0004Feb": "f\u00e9v",
    "abbrev. month January\u0004Jan": "jan",
    "abbrev. month July\u0004Jul": "jui",
    "abbrev. month June\u0004Jun": "jun",
    "abbrev. month March\u0004Mar": "mar",
    "abbrev. month May\u0004May": "mai",
    "abbrev. month November\u0004Nov": "nov",
    "abbrev. month October\u0004Oct": "oct",
    "abbrev. month September\u0004Sep": "sep",
    "active proctored exams": "Les examens surveill\u00e9s actifs",
    "allowance_value": "allowance_value",
    "an onboarding exam": "un examen d'int\u00e9gration",
    "could not determine the course_id": "ne peut d\u00e9terminer l'identifiant du cours - course_id",
    "courses with active proctored exams": "les cours avec des examens surveill\u00e9s actifs",
    "error count: ": "nombre d'erreurs\u00a0:",
    "internally reviewed": "revue interne",
    "one letter Friday\u0004F": "V",
    "one letter Monday\u0004M": "L",
    "one letter Saturday\u0004S": "S",
    "one letter Sunday\u0004S": "D",
    "one letter Thursday\u0004T": "J",
    "one letter Tuesday\u0004T": "M",
    "one letter Wednesday\u0004W": "M",
    "user_info": "user_info",
    "you have less than a minute remaining": "vous avez moins d'une minute restante",
    "you have {remaining_time} remaining": "vous avez {remaining_time} restant",
    "you will have ": "vous aurez",
    "your course": "votre cours",
    "{num_of_hours} hour": "{num_of_hours} heure",
    "{num_of_hours} hours": "{num_of_hours} heures",
    "{num_of_minutes} minute": "{num_of_minutes} minute",
    "{num_of_minutes} minutes": "{num_of_minutes} minutes"
  };
  for (const key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      const value = django.catalog[msgid];
      if (typeof value === 'undefined') {
        return msgid;
      } else {
        return (typeof value === 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      const value = django.catalog[singular];
      if (typeof value === 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      let value = django.gettext(context + '\x04' + msgid);
      if (value.includes('\x04')) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      let value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.includes('\x04')) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j F Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%d.%m.%Y",
      "%d.%m.%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "j N Y H:i",
    "SHORT_DATE_FORMAT": "j N Y",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      const value = django.formats[format_type];
      if (typeof value === 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }
};

