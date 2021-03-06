var aif;
(function (aif) {
    'use strict';
    var AifStepInputStyle;
    (function (AifStepInputStyle) {
        AifStepInputStyle[AifStepInputStyle["FreeText"] = 1] = "FreeText";
        AifStepInputStyle[AifStepInputStyle["NumberedValues"] = 2] = "NumberedValues";
        AifStepInputStyle[AifStepInputStyle["KeyedValues"] = 3] = "KeyedValues";
    })(AifStepInputStyle = aif.AifStepInputStyle || (aif.AifStepInputStyle = {}));
    var AifStepSummaryStyle;
    (function (AifStepSummaryStyle) {
        AifStepSummaryStyle[AifStepSummaryStyle["Entry"] = 0] = "Entry";
        AifStepSummaryStyle[AifStepSummaryStyle["WholeStep"] = 1] = "WholeStep";
    })(AifStepSummaryStyle = aif.AifStepSummaryStyle || (aif.AifStepSummaryStyle = {}));
    var AifInputCellType;
    (function (AifInputCellType) {
        AifInputCellType[AifInputCellType["Input"] = 1] = "Input";
        AifInputCellType[AifInputCellType["Info"] = 2] = "Info";
        AifInputCellType[AifInputCellType["Empty"] = 3] = "Empty";
    })(AifInputCellType = aif.AifInputCellType || (aif.AifInputCellType = {}));
    var AifData = (function () {
        function AifData() {
        }
        return AifData;
    }());
    AifData.baseCopy = {
        "ST": {
            description: "Start here text",
            en: "Start Here",
            translation: null
        },
        "SB": {
            description: "Submit text",
            en: "Submit",
            translation: null
        },
        "SB_D": {
            description: "Submit description",
            en: "Click on submit button to view your content in the Integrated Evaluation Framework by AMEC.",
            translation: null
        },
        "S1_L": {
            description: "Step Label 1",
            en: "Objectives",
            translation: null
        },
        "S1_I1_H": {
            description: "Step 1 Input 1 Heading",
            en: "Organisational Objectives",
            translation: null
        },
        "S1_I1_SH": {
            description: "Step 1 Input 1 Sub-heading",
            en: "What are the overall objectives or your organisation?",
            translation: null
        },
        "S1_I1_I": {
            description: "Step 1 Input 1 Info",
            en: "<span class=\"lead-in\" >Organizational Objectives</span> are usually published in the organization’s business plan or strategy. They are often long-term and require more than communication. Identify which organizational objectives your communication program can support.",
            translation: null
        },
        "S1_I2_H": {
            description: "Step 1 Input 2 Heading",
            en: "Communication Objectives",
            translation: null
        },
        "S1_I2_SH": {
            description: "Step 1 Input 2 Sub-heading",
            en: "What are your communication objectives for this program?",
            translation: null
        },
        "S1_I2_I": {
            description: "Step 1 Input 2 Info",
            en: "<span class=\"lead-in\" >Communications Objectives</span> are the specific, measureable, achievable, relevant, time-bound (SMART) objectives that your communication program, campaign, or project is designed to achieve. Your SMART communication objectives must support one or more organizational objectives; identify which one's.",
            translation: null
        },
        "S2_L": {
            description: "Step Label 1",
            en: "Inputs",
            translation: null
        },
        "S2_I1_H": {
            description: "Step 2 Input 1 Heading",
            en: "Target Audience",
            translation: null
        },
        "S2_I1_SH": {
            description: "Step 2 Input 1 Sub heading",
            en: "Define your key target audiences<br><br>",
            translation: null
        },
        "S2_I1_I": {
            description: "Step 2 Input 1 Info",
            en: "<span class=\"lead-in\" >Target Audience</span> define clearly with which audiences you are looking to communicate. Be as specific as possible. The more refined your audience definition, the more focussed your targeting can be. Think demographics, socio-economic data and media consumption habits.",
            translation: null
        },
        "S2_I2_H": {
            description: "Step 2 Input 1 Sub heading",
            en: "Strategic Inputs",
            translation: null
        },
        "S2_I2_SH": {
            description: "Step 2 Input 2 Sub heading",
            en: "List key inputs necessary to inform and prepare your communication.",
            translation: null
        },
        "S2_I2_I": {
            description: "Step 2 Input 2 Info",
            en: "<span class=\"lead-in\" >Inputs</span> include both information and materials that you need to design and prepare your communication.  Inputs can include: <ul><li><span class=\"bold\">Existing research</span> data that is relevant</li><li><span class=\"bold\">Background and context</span> information</li><li><span class=\"bold\">Budget</span> – set a budget and identify the most cost-effective approaches (e.g., through Cost Effectiveness Analysis)</li><li><span class=\"bold\">Resources</span> – what skills do you need? Are there potential partners?</li></ul>",
            translation: null
        },
        "S3_L": {
            description: "Step 3 Label",
            en: "Activities",
            translation: null
        },
        "S3_I1_SH": {
            description: "Step 2 Input 1 Sub heading",
            en: "List all the key activities that you will undertake or have undertaken",
            translation: null
        },
        "S3_I1_I": {
            description: "Step 2 Input 1 Info",
            en: "<span class=\"lead-in\" >Activities</span> include: <ul><li><span class=\"bold\">Formative research to be undertaken</span> (e.g., surveys, focus groups, pre-testing)</li><li><span class=\"bold\">Planning</span> (including SWOT analysis, PEST or PESTLE, etc.)</li><li><span class=\"bold\">Design</span> of materials</li><li><span class=\"bold\">Writing and production </span> of communication materials, events, etc.</li></ul>",
            translation: null
        },
        "S4_L": {
            description: "Step 4 Label",
            en: "Outputs",
            translation: null
        },
        "S4_I1_SH": {
            description: "Step 2 Input 1 Sub heading",
            en: "List the content, materials, and activities that you distributed and to which your target audiences were exposed",
            translation: null
        },
        "S4_I1_I": {
            description: "Step 2 Input 1 Info",
            en: "<span class=\"lead-in\" >Outputs</span> include: <ul><li><span class=\"bold\">Advertising</span> data that is relevant</li><li><span class=\"bold\">Publicity</span> information</li><li><span class=\"bold\">Web sites, blogs, partnerships or supplements </span> (owned media)</li><li><span class=\"bold\">Social media</span> – what skills do you need? Are there potential partners?</li><li><span class=\"bold\">Events</span> held – e.g., how many attended?</li><li><span class=\"bold\">Sponsorships</span> launched – e.g., what audience reach?</li><li><span class=\"bold\">Direct mail, e-mail, or e-marketing</span>, etc. – e.g., what audience reach?</li></ul>",
            translation: null
        },
        "S5_L": {
            description: "Step 4 Label",
            en: "Out-takes",
            translation: null
        },
        "S5_I1_SH": {
            description: "Step 2 Input 1 Sub heading",
            en: "List here what your target audiences took out of your communication and how they reacted to it",
            translation: null
        },
        "S5_I1_I": {
            description: "Step 2 Input 1 Info",
            en: "<span class=\"lead-in\" >Out-takes</span> are your target audiences’ initial responses and reactions to your communication. These may be interim steps towards your objectives, not necessarily achievement of your objectives. Out-takes may include evidence of: <ul><li><span class=\"bold\">Audience attention</span> – e.g., unique visitors, views, clickthroughs</li><li><span class=\"bold\">Awareness</span> – e.g., recall</li><li><span class=\"bold\">Understanding</span> – e.g., comments, post-campaign survey data</li><li><span class=\"bold\">Interest and liking</span> – e.g., likes, follows, shares, retweets, pins, etc.</li><li><span class=\"bold\">Engagement</span> – e.g., return visits, subscribing, positive comments</li><li><span class=\"bold\">Consideration</span> – e.g., comments, subscribing, registering, etc.</li></ul>",
            translation: null
        },
        "S6_L": {
            description: "Step 4 Label",
            en: "Outcomes",
            translation: null
        },
        "S6_I1_SH": {
            description: "Step 2 Input 1 Sub heading",
            en: "​List here evidence of the effects of your communication on your target audience",
            translation: null
        },
        "S6_I1_I": {
            description: "Step 2 Input 1 Info",
            en: "<span class=\"lead-in\" >Outcomes</span> are the effects that your communication had on your target audiences that align to your objectives. Examples of outcomes of communication can include: <ul><li><span class=\"bold\">Learning/knowledge</span> – e.g., through survey or interview data, quizzes, tests</li><li><span class=\"bold\">Trust</span> – e.g., increased trust ratings in surveys</li><li><span class=\"bold\">Preference</span> – e.g., stated preference in surveys, social media comments</li><li><span class=\"bold\">Intention</span> – e.g., through inquiries, registrations, trialling, survey data</li><li><span class=\"bold\">Attitude change</span> – e.g., through survey or interview data</li><li><span class=\"bold\">Complying behaviour</span> - e.g., sales, donations, driving safely; voting, etc</li><li><span class=\"bold\">Advocacy</span> – e.g., endorsements in online comments</li></ul>",
            translation: null
        },
        "S7_L": {
            description: "Step 4 Label",
            en: "Organizational Impact",
            translation: null
        },
        "S7_I1_SH": {
            description: "Step 2 Input 1 Sub heading",
            en: "​How has the organisation been impacted during the campaign?",
            translation: null
        },
        "S7_I1_I": {
            description: "Step 2 Input 1 Info",
            en: "<span class=\"lead-in\" >Impact</span> is the ultimate  flow-on results related to your objectives which your communication achieved or contributed to. Impact can include: <ul><li><span class=\"bold\">Reputation</span> improvement (recognised as an intangible asset)</li><li><span class=\"bold\">Relationships</span> established or improved (also recognised as an intangible asset by the International Integrated Reporting Council)</li><li><span class=\"bold\">Reaching targets</span> – e.g., sales revenue, fundraising or membership targets, health campaign targets such as smoking reduction, etc.</li><li><span class=\"bold\">Increased staff loyalty and retention</span> - i.e., reduced staff turnover and recruitment costs</li><li><span class=\"bold\">Organizational change</span> – e.g., insights to inform future strategy, realignment of policies to stakeholders</li><li><span class=\"bold\">Social change</span> – e.g., improved health and well-being, increased access to information, etc.</li></ul>",
            translation: null
        },
        "USR_RR": {
            description: "Register Reminder",
            en: "<p>New functionality has been added to the AMEC Integrated Evaluation Framework to improve the user experience. </p><p>Now you can save the progress of your work and can save and edit up to 10 different frameworks per user account.</p><p> To do so you must register, create an account and log in. While it is not compulsory to do so, this important new functionality is only available once logged into your account. Please either sign in or register if it’s your first time here to begin.Don’t worry, use of the framework remains completely free!</p>",
            translation: null
        },
        "USR_RR_D": {
            description: "Register Reminder - don't show again",
            en: "Don't show again",
            translation: null
        },
        "BTN_LGN": {
            description: "Login Button",
            en: "Login",
            translation: null
        },
        "BTN_RGR": {
            description: "Register Button",
            en: "Register",
            translation: null
        },
        "BTN_SVE": {
            description: "Save Button",
            en: "Save Progress",
            translation: null
        },
        "BTN_EDT": {
            description: "Edit Button",
            en: "Edit",
            translation: null
        },
        "BTN_DLD": {
            description: "Download PDF Button",
            en: "Download PDF",
            translation: null
        },
        "BTN_SMT": {
            description: "Submit Button",
            en: "Submit",
            translation: null
        },
        "BTN_WLM": {
            description: "Welcome Text",
            en: "Welcome ",
            translation: null
        },
        "LGN_TTL": {
            description: "Login Screen Title",
            en: "Login",
            translation: null
        },
        "LGN_NAT": {
            description: "Login Screen no account text",
            en: "New here?",
            translation: null
        },
        "LGN_NAL": {
            description: "Login Screen no account link",
            en: "Create an account",
            translation: null
        },
        "LGN_EML": {
            description: "Login Screen Email Label",
            en: "Email",
            translation: null
        },
        "LGN_PWD": {
            description: "Login Screen Password Label",
            en: "Password",
            translation: null
        },
        "LGN_BTN": {
            description: "Login Screen Login Button",
            en: "Login",
            translation: null
        },
        "LGN_LPD": {
            description: "Login Screen Lost Password Text",
            en: "Lost password?",
            translation: null
        },
        "LGN_FSM": {
            description: "Login Screen attempted save message",
            en: "You need to be logged in to save progress.",
            translation: null
        },
        "LGN_FSI": {
            description: "Login Screen attempted save instruction",
            en: "Log in below or ",
            translation: null
        },
        "LGN_FSL": {
            description: "Login Screen attempted save register link",
            en: "click here to create an account",
            translation: null
        },
        "LGN_EMR": {
            description: "Login Screen validation email missing",
            en: "Tell us your email",
            translation: null
        },
        "LGN_EMV": {
            description: "Login Screen validation email invalid.",
            en: "This is not a valid email address.",
            translation: null
        },
        "LGN_PWM": {
            description: "Login Screen validation password missing",
            en: "Tell us your password",
            translation: null
        },
        "LGN_SCS": {
            description: "Login Screen log in successful message",
            en: "Login successful, loading...",
            translation: null
        },
        "LGN_FL": {
            description: "Login Screen log in fail message",
            en: "Error contacting server",
            translation: null
        },
        "RG_TTL": { description: "Register Screen - Title", en: "Register", translation: null },
        "RG_AAM": { description: "Register Screen - Already have an account message", en: "Already have an account?", translation: null },
        "RG_AAL": { description: "Register Screen - Already have an account link", en: "Login here", translation: null },
        "RG_FN": { description: "Register Screen - First Name", en: "First Nam0", translation: null },
        "RG_FNV": { description: "Register Screen - First Name validation - missing", en: "You must supply a first name.", translation: null },
        "RG_LN": { description: "Register Screen - Last Name", en: "Last Name", translation: null },
        "RG_LNV": { description: "Register Screen - Last Name validation - missing", en: "You must supply a last name", translation: null },
        "RG_ON": { description: "Register Screen - Organisation", en: "Organisation", translation: null },
        "RG_ONV": { description: "Register Screen - Organisation validation - missing", en: "You must tell us your company or organisation name.", translation: null },
        "RG_JT": { description: "Register Screen - Job Title", en: "Job Title", translation: null },
        "RG_JTV": { description: "Register Screen - Job Title validation - missing", en: "You must provide a job title.", translation: null },
        "RG_CN": { description: "Register Screen - Contact Number", en: "Contact Number", translation: null },
        "RG_CNV": { description: "Register Screen - Contact Number validation - missing", en: "You must provide a contact number.", translation: null },
        "RG_CY": { description: "Register Screen - Country", en: "Country", translation: null },
        "RG_CYV": { description: "Register Screen - Country validation - missing", en: "You must select a country", translation: null },
        "RG_EML": { description: "Register Screen - Email", en: "Email", translation: null },
        "RG_EML_PH": { description: "Register Screen - Email Placeholder", en: "A Work Email Address", translation: null },
        "RG_EML_VM": { description: "Register Screen - Email validation - missing", en: "You must supply an email address", translation: null },
        "RG_EML_VW": { description: "Register Screen - Email validation - must be work", en: "You must use a work address", translation: null },
        "RG_EML_VI": { description: "Register Screen - Email validation - invalid email", en: "This is not a valid email address", translation: null },
        "RG_PWD": { description: "Register Screen - Password", en: "Password", translation: null },
        "RG_PWD_VM": { description: "Register Screen - Password validation - missing", en: "You must supply a password", translation: null },
        "RG_PWD_VL": { description: "Register Screen - Password validation - length", en: "Your password should be at least eight characters long.", translation: null },
        "RG_CPW": { description: "Register Screen - Password Confirmation", en: "Confirm Password", translation: null },
        "RG_CPW_VM": { description: "Register Screen - Password Confirmation validation - don't match", en: "The passwords don't match", translation: null },
        "AC_TTL": { description: "Account Screen - Title", en: "Your Account", translation: null },
        "AC_ATL_L": { description: "Account Screen - Alt title / Login successful", en: "Log in successful", translation: null },
        "AC_ATL_S": { description: "Account Screen - Alt title / Save framework", en: "Save framework", translation: null },
        "AC_LOB": { description: "Account Screen - Logout button label", en: "logout", translation: null },
        "AC_SEF": { description: "Account Screen - Select existing framework message", en: "Select an existing framework to load or", translation: null },
        "AC_CNF": { description: "Account Screen - Create new framework link", en: "create a new one", translation: null },
        "AC_LDT": { description: "Account Screen - Load text", en: "Load", translation: null },
        "AC_LDG": { description: "Account Screen - Loading text", en: "Loading...", translation: null },
        "AC_RFW": { description: "Account Screen - Rename button hover caption", en: "Rename Framework", translation: null },
        "AC_DFW": { description: "Account Screen - Delete button hover caption", en: "Delete Framework", translation: null },
        "AC_CDT": { description: "Account Screen - Confirm delete text", en: "Are you sure you want to delete ", translation: null },
        "AC_YES": { description: "Account Screen - Yes", en: "Yes", translation: null },
        "AC_NO": { description: "Account Screen - No", en: "No", translation: null },
        "AC_FTU": { description: "Account Screen - First time user text", en: "<p>This screen can be used to view and load measurement frameworks you have saved under you login.</p><p>You haven't saved any frameworks yet.  Click create below to set up a new framework for your campaign.</p><p>Alternatively close this screen and start working with the tool.  You can come back at any time to save your progress.</p>", translation: null },
        "AC_FTC": { description: "Account Screen - Create button label", en: "Create", translation: null },
        "NF_TTL": { description: "New Framework Screen - Title", en: "New Measurement Framework", translation: null },
        "NF_ATL_E": { description: "New Framework Screen - Alt title / arrived from edit button", en: "Edit ", translation: null },
        "NF_ATL_S": { description: "New Framework Screen - Alt title / arrived from detected unsaved work", en: "Save your work", translation: null },
        "NF_ATL_L": { description: "New Framework Screen - Alt title / arrived from first login", en: "Create your first framework", translation: null },
        "NF_CTM": { description: "New Framework Screen - Create message", en: "Create a new framework to save your progress.", translation: null },
        "NF_FWN": { description: "New Framework Screen - Framework name label", en: "Framework name", translation: null },
        "NF_FWN_VM": { description: "New Framework Screen - Framework name validation - missing", en: "You must provide a name for your framework.", translation: null },
        "NF_FWD": { description: "New Framework Screen - Framework description label", en: "Description", translation: null },
        "NF_FWD_PH": { description: "New Framework Screen - Framework description placeholder", en: "Optionally add any notes here", translation: null },
        "NF_CTB": { description: "New Framework Screen - Create button label", en: "Create", translation: null },
        "NF_SVB": { description: "New Framework Screen - Save button label", en: "Save", translation: null },
        "NF_CLB": { description: "New Framework Screen - Cancel link text", en: "Cancel", translation: null },
        "NF_ACL": { description: "New Framework Screen - Alt cancel link / from first login", en: "Skip for now", translation: null },
        "NF_OSV": { description: "New Framework Screen - Or save over message", en: "Or save over ", translation: null },
        "NF_OSL": { description: "New Framework Screen - Save over link", en: "an existing framework", translation: null },
        "SA_TTL": { description: "Save As Screen - Title", en: "Save framework", translation: null },
        "SA_SPM": { description: "Save As Screen - Save progress to message", en: "Save your progress to:", translation: null },
        "SA_SOM": { description: "Save As Screen - Save over message (when has existing)", en: "Alternatively, save as an existing framework or", translation: null },
        "SA_CNM": { description: "Save As Screen - Create new link (when has existing)", en: "create a new one", translation: null },
        "SA_OR": { description: "Save As Screen - Or", en: "or", translation: null },
        "SA_CNN": { description: "Save As Screen - Create new link when no existing frameworks", en: "create a new framework", translation: null },
        "SA_ASM": { description: "Save As Screen - Are you sure you want to save over message", en: "Are you sure you want to save over ", translation: null },
        "SA_YES": { description: "Save As Screen - Yes", en: "Yes", translation: null },
        "SA_NO": { description: "Save As Screen - No", en: "No", translation: null },
        "FP_TTL": { description: "Forgot Password Screen - Title", en: "Reset Password", translation: null },
        "FP_BKL": { description: "Forgot Password Screen - Back to login link", en: "Go back", translation: null },
        "FP_EML": { description: "Forgot Password Screen - Email address label", en: "Email address", translation: null },
        "FP_EML_VM": { description: "Forgot Password Screen - Email validation - missing", en: "Tell us your email.", translation: null },
        "FP_EMP_VI": { description: "Forgot Password Screen - Email validation - invalid", en: "This is not a valid email.", translation: null },
        "FP_RSB": { description: "Forgot Password Screen - Send reset button label", en: "Send reset link", translation: null },
        "FP_EMT": { description: "Forgot Password Screen - We've emailed you link text", en: "<p>We have emailed you a link to reset your password.</p><p>You should receive it in the next few minutes.</p>", translation: null },
        "FP_NRT": { description: "Forgot Password Screen - Haven't received it text", en: "Haven't received it? ", translation: null },
        "FP_RST": { description: "Forgot Password Screen - Resend link text", en: "Click here to resend", translation: null },
        "FP_CLS": { description: "Forgot Password Screen - Close button text", en: "Close", translation: null },
        "RP_TTL": { description: "Reset Password Screen - Title", en: "Reset Password", translation: null },
        "RP_NPM": { description: "Reset Password Screen - Enter a new password message", en: "Enter a new password for the login ", translation: null },
        "RP_PWD": { description: "Reset Password Screen - Password label", en: "Password", translation: null },
        "RP_PWD_VM": { description: "Reset Password Screen - Password validation - missing", en: "You must supply a password.", translation: null },
        "RP_PWD_VL": { description: "Reset Password Screen - Password validation - length", en: "Your password should be at least eight characters long.", translation: null },
        "RP_CPW": { description: "Reset Password Screen - Confirm label", en: "Confirm Password", translation: null },
        "RP_CPW_VM": { description: "Reset Password Screen - Confirm validation - not matching", en: "The passwords don't match.", translation: null },
        "RP_RFM": { description: "Reset Password Screen - Reset failed message", en: "There has been a problem resetting your password. Either this link has expired or your email address is not valid.<br>", translation: null },
        "RP_RFL": { description: "Reset Password Screen - Reset failed try again link", en: "Click here to try again", translation: null },
        "RP_CPB": { description: "Reset Password Screen - Change password button text", en: "Change Password", translation: null },
        "RP_RSM": { description: "Reset Password Screen - Password reset successful message", en: "Your password has been reset.  Logging in...", translation: null },
    };
    AifData.stepStructure = [
        {
            stepIndex: 1,
            stepHeadingKey: "S1_L",
            summaryStyle: AifStepSummaryStyle.Entry,
            baseColor: "red",
            row: 1,
            colSpan: 1,
            cellOrder: [AifInputCellType.Input, AifInputCellType.Info, AifInputCellType.Empty],
            inputs: [
                {
                    inputStyle: AifStepInputStyle.FreeText,
                    headingKey: "S1_I1_H",
                    subHeadingKey: "S1_I1_SH",
                    infoKey: "S1_I1_I",
                    textLimit: 500,
                    valueCount: 1,
                    valuesKey: "S1_I1_V"
                },
                {
                    inputStyle: AifStepInputStyle.FreeText,
                    headingKey: "S1_I2_H",
                    subHeadingKey: "S1_I2_SH",
                    infoKey: "S1_I2_I",
                    textLimit: 500,
                    valueCount: 1,
                    valuesKey: "S1_I2_V"
                }
            ]
        },
        {
            stepIndex: 2,
            stepHeadingKey: "S2_L",
            summaryStyle: AifStepSummaryStyle.Entry,
            baseColor: "yellow",
            row: 1,
            colSpan: 2,
            cellOrder: [AifInputCellType.Info, AifInputCellType.Input],
            inputs: [
                {
                    inputStyle: AifStepInputStyle.NumberedValues,
                    headingKey: "S2_I1_H",
                    subHeadingKey: "S2_I1_SH",
                    infoKey: "S2_I1_I",
                    textLimit: 200,
                    valueCount: 5,
                    valuesKey: "S2_I1_V"
                },
                {
                    inputStyle: AifStepInputStyle.FreeText,
                    headingKey: "S2_I2_H",
                    subHeadingKey: "S2_I2_SH",
                    infoKey: "S2_I2_I",
                    textLimit: 1000,
                    valueCount: 1,
                    valuesKey: "S2_I2_V"
                }
            ]
        },
        {
            stepIndex: 3,
            stepHeadingKey: "S3_L",
            summaryStyle: AifStepSummaryStyle.WholeStep,
            baseColor: "green",
            row: 1,
            colSpan: 2,
            cellOrder: [AifInputCellType.Info, AifInputCellType.Input],
            inputs: [
                {
                    inputStyle: AifStepInputStyle.KeyedValues,
                    headingKey: "S3_I1_H",
                    subHeadingKey: "S3_I1_SH",
                    infoKey: "S3_I1_I",
                    textLimit: 200,
                    valueCount: 16,
                    valuesKey: "S3_I1_V"
                }
            ]
        },
        {
            stepIndex: 4,
            stepHeadingKey: "S4_L",
            summaryStyle: AifStepSummaryStyle.WholeStep,
            baseColor: "light_blue",
            row: 2,
            colSpan: 2,
            cellOrder: [AifInputCellType.Input, AifInputCellType.Info],
            inputs: [
                {
                    inputStyle: AifStepInputStyle.KeyedValues,
                    headingKey: "S4_I1_H",
                    subHeadingKey: "S4_I1_SH",
                    infoKey: "S4_I1_I",
                    textLimit: 200,
                    valueCount: 16,
                    valuesKey: "S4_I1_V"
                }
            ]
        },
        {
            stepIndex: 5,
            stepHeadingKey: "S5_L",
            summaryStyle: AifStepSummaryStyle.WholeStep,
            baseColor: "dark_blue",
            row: 2,
            colSpan: 1,
            cellOrder: [AifInputCellType.Empty, AifInputCellType.Input, AifInputCellType.Info],
            inputs: [
                {
                    inputStyle: AifStepInputStyle.NumberedValues,
                    headingKey: "S5_I1_H",
                    subHeadingKey: "S5_I1_SH",
                    infoKey: "S5_I1_I",
                    textLimit: 200,
                    valueCount: 10,
                    valuesKey: "S5_I1_V"
                }
            ]
        },
        {
            stepIndex: 6,
            stepHeadingKey: "S6_L",
            summaryStyle: AifStepSummaryStyle.WholeStep,
            baseColor: "dark_blue",
            row: 2,
            colSpan: 1,
            cellOrder: [AifInputCellType.Empty, AifInputCellType.Info, AifInputCellType.Input],
            inputs: [
                {
                    inputStyle: AifStepInputStyle.NumberedValues,
                    headingKey: "S6_I1_H",
                    subHeadingKey: "S6_I1_SH",
                    infoKey: "S6_I1_I",
                    textLimit: 200,
                    valueCount: 10,
                    valuesKey: "S6_I1_V"
                }
            ]
        },
        {
            stepIndex: 7,
            stepHeadingKey: "S7_L",
            summaryStyle: AifStepSummaryStyle.WholeStep,
            baseColor: "purple",
            row: 3,
            colSpan: 2,
            cellOrder: [AifInputCellType.Input, AifInputCellType.Info],
            inputs: [
                {
                    inputStyle: AifStepInputStyle.NumberedValues,
                    headingKey: "S7_I1_H",
                    subHeadingKey: "S7_I1_SH",
                    infoKey: "S7_I1_I",
                    textLimit: 200,
                    valueCount: 10,
                    valuesKey: "S7_I1_V"
                }
            ]
        }
    ];
    aif.AifData = AifData;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    var InputStyle;
    (function (InputStyle) {
        InputStyle[InputStyle["TextArea"] = 1] = "TextArea";
        InputStyle[InputStyle["NumberedInputs"] = 2] = "NumberedInputs";
        InputStyle[InputStyle["LinkedInputs"] = 3] = "LinkedInputs";
        InputStyle[InputStyle["BlankInputs"] = 4] = "BlankInputs";
    })(InputStyle = aif.InputStyle || (aif.InputStyle = {}));
    var WorkflowInputItem = (function () {
        function WorkflowInputItem(heading, subHeading, leadText, remainText, inputStyle, inputSize) {
            this.heading = heading;
            this.subHeading = subHeading;
            this.leadText = leadText;
            this.remainText = remainText;
            this.inputStyle = inputStyle;
            this.inputSize = inputSize;
            this.frameworkEntry = null;
            this.createFrameworkEntry();
        }
        WorkflowInputItem.prototype.createFrameworkEntry = function () {
            switch (this.inputStyle) {
                case InputStyle.TextArea:
                default:
            }
        };
        WorkflowInputItem.fromData = function (data) {
            return new WorkflowInputItem(data.heading, data.subHeading, data.leadText, data.remainText, data.inputStyle, data.inputSize);
        };
        return WorkflowInputItem;
    }());
    aif.WorkflowInputItem = WorkflowInputItem;
    var WorkflowInput = (function () {
        function WorkflowInput(stepIndex, row, colSpan) {
            this.stepIndex = stepIndex;
            this.row = row;
            this.colSpan = colSpan;
        }
        return WorkflowInput;
    }());
    aif.WorkflowInput = WorkflowInput;
    var WorkflowInputCell = (function () {
        function WorkflowInputCell(row, colSpan) {
            this.row = row;
            this.colSpan = colSpan;
            this.cellType = aif.WorkflowCellType.Input;
            this.visible = false;
        }
        WorkflowInputCell.prototype.showInfo = function (item) {
            if (!this.infoCell)
                return;
            this.infoCell.leadText = item.leadText;
            this.infoCell.remainText = item.remainText;
        };
        return WorkflowInputCell;
    }());
    aif.WorkflowInputCell = WorkflowInputCell;
    var WorkflowInfoCell = (function () {
        function WorkflowInfoCell(row, colSpan) {
            this.row = row;
            this.colSpan = colSpan;
            this.cellType = aif.WorkflowCellType.Info;
            this.visible = false;
        }
        return WorkflowInfoCell;
    }());
    aif.WorkflowInfoCell = WorkflowInfoCell;
    var WorkflowEmptyCell = (function () {
        function WorkflowEmptyCell(row, colSpan) {
            this.row = row;
            this.colSpan = colSpan;
            this.cellType = aif.WorkflowCellType.Empty;
        }
        return WorkflowEmptyCell;
    }());
    aif.WorkflowEmptyCell = WorkflowEmptyCell;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var WorkflowCellType;
    (function (WorkflowCellType) {
        WorkflowCellType[WorkflowCellType["Step"] = 0] = "Step";
        WorkflowCellType[WorkflowCellType["Input"] = 1] = "Input";
        WorkflowCellType[WorkflowCellType["Info"] = 2] = "Info";
        WorkflowCellType[WorkflowCellType["Empty"] = 3] = "Empty";
    })(WorkflowCellType = aif.WorkflowCellType || (aif.WorkflowCellType = {}));
    var WorkflowStep = (function () {
        function WorkflowStep(title, index, row, colSpan, color, isSubmit) {
            this.title = title;
            this.index = index;
            this.row = row;
            this.colSpan = colSpan;
            this.color = color;
            this.isSubmit = isSubmit;
            this.inputRow = null;
            this.cellType = WorkflowCellType.Step;
            this.inputEntries = [];
        }
        WorkflowStep.prototype.loadInput = function (input) {
            if (this.inputRow) {
                for (var _i = 0, _a = this.inputRow; _i < _a.length; _i++) {
                    var cell = _a[_i];
                    if (cell.cellType === WorkflowCellType.Input) {
                        var inputCell = cell;
                        inputCell.items = input.items.map(function (i) {
                            return aif.WorkflowInputItem.fromData(i);
                        });
                        this.inputEntries = inputCell.items;
                    }
                }
            }
        };
        WorkflowStep.fromData = function (data) {
            var step = new WorkflowStep(data.title, data.index, data.row, data.colSpan, data.color, data.isSubmit === true);
            if (data.inputRow) {
                step.inputRow = [];
                var infoCell_1;
                var inputCell_1;
                data.inputRow.forEach(function (c) {
                    switch (c.cellType) {
                        case WorkflowCellType.Empty:
                            step.inputRow.push(new aif.WorkflowEmptyCell(c.row, c.colSpan));
                            break;
                        case WorkflowCellType.Info:
                            infoCell_1 = new aif.WorkflowInfoCell(c.row, c.colSpan);
                            step.inputRow.push(infoCell_1);
                            break;
                        case WorkflowCellType.Input:
                            inputCell_1 = new aif.WorkflowInputCell(c.row, c.colSpan);
                            step.inputRow.push(inputCell_1);
                            break;
                    }
                });
                if (infoCell_1 && inputCell_1)
                    inputCell_1.infoCell = infoCell_1;
            }
            return step;
        };
        return WorkflowStep;
    }());
    aif.WorkflowStep = WorkflowStep;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var WorkflowRow = (function () {
        function WorkflowRow(cells) {
            this.cells = cells;
        }
        return WorkflowRow;
    }());
    aif.WorkflowRow = WorkflowRow;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
/*

  New User

    Login -> don't have an account? -> register
    Register -> create subscriber + meta, return user object
        username
        password
        First Name
        Last Name
        Job Title
        Company
        Language

        -> User logged in
        -> No frameworks -> create new framework


  Existing User

     Register -> already registered -> forgot password?
     Forgot details
     Successful Login

        -> User logged in

        Has saved frameworks?

          Yes
          -> List existing
          -> or create new

          No
          -> No frameworks -> create new framework


    Create new framework

      Name
      Description


    Save frame work

        User logged in?
          No -> You need to log in to save.  User login below or register as a new amec user

          Yes ->

          Framework loaded?

            Yes?

            Save as xxxx dropdown or create new


            No ?

              Has other frameworks?

                No?

                Create new (limit)

                Yes?

                Create new or save over existing








* */
var aif;
(function (aif) {
    'use strict';
    var AifApp = (function () {
        function AifApp() {
            this.maxFrameworks = 3;
            this.user = null;
        }
        AifApp.prototype.loggedIn = function () {
            return this.user !== null;
        };
        return AifApp;
    }());
    aif.AifApp = AifApp;
    var AppUser = (function () {
        function AppUser(email, firstName, lastName, organisation, jobTitle, language, contactNumber) {
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.organisation = organisation;
            this.jobTitle = jobTitle;
            this.language = language;
            this.contactNumber = contactNumber;
            this.password = null;
            this.passwordConfirmation = null;
        }
        return AppUser;
    }());
    aif.AppUser = AppUser;
    var AifUser = (function () {
        function AifUser(email, firstName, lastName, organisation, jobTitle, language, contactNumber) {
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.organisation = organisation;
            this.jobTitle = jobTitle;
            this.language = language;
            this.contactNumber = contactNumber;
            this.frameworks = [];
            this.currentFramework = null;
        }
        AifUser.prototype.hasExistingFrameworks = function () {
            return this.frameworks != null && this.frameworks.length > 0;
        };
        AifUser.prototype.setExistingFramework = function (id) {
            var matches = this.frameworks.filter(function (f) { return f.id === id; });
            if (matches.length) {
                this.currentFramework = matches[0];
            }
            else {
                this.currentFramework = null;
            }
        };
        AifUser.prototype.addNewFramework = function (newFramework) {
            this.frameworks.push(newFramework);
            this.currentFramework = newFramework;
        };
        AifUser.prototype.hasFrameworks = function () {
            return this.frameworks.length > 0;
        };
        AifUser.prototype.asAppUser = function () {
            return new AppUser(this.email, this.firstName, this.lastName, this.organisation, this.jobTitle, this.language, this.contactNumber);
        };
        AifUser.createFromData = function (data) {
            return new AifUser(data.email, data.firstName, data.lastName, data.organisation, data.jobTitle, data.language, data.contactNumber);
        };
        return AifUser;
    }());
    aif.AifUser = AifUser;
    var LoginResult = (function () {
        function LoginResult(success, user, message) {
            this.success = success;
            this.user = user;
            this.message = message;
        }
        return LoginResult;
    }());
    aif.LoginResult = LoginResult;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var AifFramework = (function () {
        function AifFramework(id, name, description) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.selected = false;
            this.flaggedDelete = false;
            this.saving = false;
            this.current = false;
        }
        return AifFramework;
    }());
    aif.AifFramework = AifFramework;
    var AifFrameworkEditView = (function () {
        function AifFrameworkEditView() {
            this.steps = [];
        }
        return AifFrameworkEditView;
    }());
    aif.AifFrameworkEditView = AifFrameworkEditView;
    var AifUserFramework = (function () {
        function AifUserFramework(frameworkId, userData) {
            this.frameworkId = frameworkId;
            this.userData = userData;
            this.inputs = {};
            this.isDraft = false;
        }
        AifUserFramework.prototype.hasValues = function () {
            if (this.inputs) {
                for (var prop in this.inputs) {
                    if (this.inputs.hasOwnProperty(prop)) {
                        var values = this.inputs[prop].some(function (v) { return v.hasValue(); });
                        if (values)
                            return true;
                    }
                }
            }
            return false;
        };
        AifUserFramework.prototype.addInputOrEmpty = function (key, inputStyle, valueCount) {
            var inputs = [];
            if (inputStyle == aif.AifStepInputStyle.KeyedValues) {
                if (this.userData.inputs.hasOwnProperty(key)) {
                    inputs = this.userData.inputs[key].map(function (v) {
                        return new AifKeyPairInputValue(v.key, v.text);
                    });
                }
                for (var i = inputs.length; i < valueCount; i++) {
                    inputs.push(new AifKeyPairInputValue(null, null));
                }
            }
            else {
                if (this.userData.inputs.hasOwnProperty(key)) {
                    inputs = this.userData.inputs[key].map(function (v) {
                        return new AifStringInputValue(v, inputStyle == aif.AifStepInputStyle.NumberedValues);
                    });
                }
                for (var i = inputs.length; i < valueCount; i++) {
                    inputs.push(new AifStringInputValue(null, inputStyle == aif.AifStepInputStyle.NumberedValues));
                }
            }
            this.inputs[key] = inputs;
        };
        AifUserFramework.prototype.asJsonObj = function () {
            var jInputs = {};
            for (var prop in this.inputs) {
                if (this.inputs.hasOwnProperty(prop)) {
                    jInputs[prop] = this.inputs[prop].filter(function (v) { return v.hasValue(); }).map(function (v) { return v.asJsonObj(); });
                }
            }
            return { inputs: jInputs };
        };
        return AifUserFramework;
    }());
    aif.AifUserFramework = AifUserFramework;
    var AifSummary = (function () {
        function AifSummary(title) {
            this.title = title;
            this.rows = [];
        }
        return AifSummary;
    }());
    aif.AifSummary = AifSummary;
    var AifSummaryRow = (function () {
        function AifSummaryRow() {
            this.sections = [];
            this.maxRowHeight = -1;
        }
        return AifSummaryRow;
    }());
    aif.AifSummaryRow = AifSummaryRow;
    var AifSummarySection = (function () {
        function AifSummarySection(heading) {
            this.heading = heading;
            this.groups = [];
            this.width = 1;
        }
        return AifSummarySection;
    }());
    aif.AifSummarySection = AifSummarySection;
    var AifSummaryGroup = (function () {
        function AifSummaryGroup(heading, color) {
            this.heading = heading;
            this.color = color;
            this.steps = [];
        }
        return AifSummaryGroup;
    }());
    aif.AifSummaryGroup = AifSummaryGroup;
    var AifFrameworkStep = (function () {
        function AifFrameworkStep(stepIndex, heading) {
            this.stepIndex = stepIndex;
            this.heading = heading;
            this.inputs = [];
            this.summaryHeading = heading;
        }
        AifFrameworkStep.prototype.html = function () {
            var ht = "";
            if (this.inputs)
                this.inputs.forEach(function (e) {
                    var eht = e.html();
                    if (eht) {
                        if (ht.length)
                            ht += "<br>";
                        ht += eht.trim();
                    }
                });
            return ht.trim();
        };
        return AifFrameworkStep;
    }());
    aif.AifFrameworkStep = AifFrameworkStep;
    var AifStepInput = (function () {
        function AifStepInput(heading) {
            this.heading = heading;
            this.subHeading = null;
            this.info = null;
            this.textLimit = 500;
            this.valueCount = 1;
            this.summaryHeading = this.heading;
        }
        AifStepInput.prototype.isKeyedPair = function () {
            return this.inputStyle == aif.AifStepInputStyle.KeyedValues;
        };
        AifStepInput.prototype.html = function () {
            var ht = "";
            if (this.values)
                this.values.forEach(function (v, i) {
                    if (v.hasValue()) {
                        var eht = v.asHtml(i + 1);
                        if (eht) {
                            //if(ht.length) ht += "<br>";
                            ht += eht.trim();
                        }
                    }
                });
            return ht.trim();
        };
        return AifStepInput;
    }());
    aif.AifStepInput = AifStepInput;
    var AifStringInputValue = (function () {
        function AifStringInputValue(text, numbered) {
            this.text = text;
            this.numbered = numbered;
        }
        AifStringInputValue.prototype.isFreeText = function () {
            return !this.numbered;
        };
        AifStringInputValue.prototype.isNumberedText = function () {
            return this.numbered;
        };
        AifStringInputValue.prototype.isKeyedPair = function () {
            return false;
        };
        AifStringInputValue.prototype.hasValue = function () {
            return !!this.text;
        };
        AifStringInputValue.prototype.asHtml = function (index) {
            if (index === void 0) { index = -1; }
            if (this.numbered && index > -1) {
                return "<div class=\"key\">" + index + "</div><div class=\"value\">" + this.text + "</div>";
            }
            else {
                return "<p class='free-text'>" + this.text.replace(/\n/g, '<br/>') + "</p>";
            }
        };
        AifStringInputValue.prototype.asJsonObj = function () {
            return this.text;
        };
        return AifStringInputValue;
    }());
    aif.AifStringInputValue = AifStringInputValue;
    var AifKeyPairInputValue = (function () {
        function AifKeyPairInputValue(key, text) {
            this.key = key;
            this.text = text;
        }
        AifKeyPairInputValue.prototype.isFreeText = function () {
            return false;
        };
        AifKeyPairInputValue.prototype.isNumberedText = function () {
            return false;
        };
        AifKeyPairInputValue.prototype.isKeyedPair = function () {
            return true;
        };
        AifKeyPairInputValue.prototype.hasValue = function () {
            return (!!this.text && !!this.key);
        };
        AifKeyPairInputValue.prototype.asHtml = function () {
            return "<div class=\"key\">" + this.key + "</div><div class=\"value\">" + this.text + "</div>";
        };
        AifKeyPairInputValue.prototype.asJsonObj = function () {
            return {
                key: this.key,
                text: this.text
            };
        };
        return AifKeyPairInputValue;
    }());
    aif.AifKeyPairInputValue = AifKeyPairInputValue;
    var SaveFrameworkResult = (function () {
        function SaveFrameworkResult(success, frameWork, message) {
            this.success = success;
            this.frameWork = frameWork;
            this.message = message;
        }
        return SaveFrameworkResult;
    }());
    aif.SaveFrameworkResult = SaveFrameworkResult;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
/// <reference path="../_all.ts" />
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AccountDisplayRoute;
    (function (AccountDisplayRoute) {
        AccountDisplayRoute[AccountDisplayRoute["FromLogin"] = 0] = "FromLogin";
        AccountDisplayRoute[AccountDisplayRoute["FromSave"] = 1] = "FromSave";
        AccountDisplayRoute[AccountDisplayRoute["FromViewAccount"] = 2] = "FromViewAccount";
        AccountDisplayRoute[AccountDisplayRoute["FromEdit"] = 3] = "FromEdit";
        AccountDisplayRoute[AccountDisplayRoute["FromDetectUnsaved"] = 4] = "FromDetectUnsaved";
    })(AccountDisplayRoute = aif.AccountDisplayRoute || (aif.AccountDisplayRoute = {}));
    var ViewService = (function () {
        function ViewService($sce) {
            this.$sce = $sce;
            this.copy = null;
            this.registerButtonId = "#register-button";
            this.fadeBg = false;
            this.displayEdit = false;
            this.displayLogin = false;
            this.displayAccount = false;
            this.displayCreate = false;
            this.displaySaveAs = false;
            this.accountDisplayRoute = AccountDisplayRoute.FromViewAccount;
            this.displayFtnDetails = false;
            this.displayResetPassword = false;
            this.passwordResetParams = null;
            this.displayGrid = false;
            this.displayControls = false;
            this.displayLoading = true;
            this.displaySummary = false;
            this.displaySelectFramework = false;
            this.hasExistingFrameworks = false;
            this.displayRegister = false;
            this.displaySave = false;
            this.reset();
        }
        ViewService.prototype.getCopy = function () {
            if (this.copy)
                return this.copy;
            var remoteCopy = null;
            try {
                remoteCopy = getRemotePageCopy ? getRemotePageCopy() : null;
            }
            catch (ex) {
                remoteCopy = null;
            }
            this.copy = remoteCopy || aif.AifData.baseCopy;
            return this.copy;
        };
        ViewService.prototype.getCopyForKey = function (key, defaultCopy, asHtml) {
            if (defaultCopy === void 0) { defaultCopy = null; }
            if (asHtml === void 0) { asHtml = false; }
            var copy = this.getCopy();
            if (copy && copy[key]) {
                var text = copy[key].translation ? copy[key].translation : copy[key].en;
                if (text) {
                    if (asHtml)
                        return this.$sce.trustAsHtml(text);
                    return text;
                }
                return null;
            }
            if (defaultCopy) {
                if (asHtml)
                    return this.$sce.trustAsHtml(defaultCopy);
                return defaultCopy;
            }
            return null;
        };
        ViewService.prototype.showLoading = function () {
            this.reset();
            this.displayGrid = false;
            this.displayControls = false;
            this.displayLoading = true;
        };
        ViewService.prototype.showSummary = function () {
            this.reset();
            this.displaySummary = true;
            this.displayGrid = false;
        };
        ViewService.prototype.showGrid = function () {
            this.reset();
            this.displaySummary = false;
            this.displayGrid = true;
        };
        ViewService.prototype.showingUserScreens = function () {
            //TODO: Improve
            return this.displayAccount || this.displayLogin || this.displaySaveAs
                || this.displayCreate || this.displayFtnDetails || this.displaySelectFramework
                || this.displayRegister || this.displaySave || this.displayResetPassword;
        };
        ViewService.prototype.showLogin = function (fromSave) {
            if (fromSave === void 0) { fromSave = false; }
            this.reset();
            this.fadeBg = true;
            if (fromSave)
                this.accountDisplayRoute = AccountDisplayRoute.FromSave;
            this.displayLogin = true;
        };
        ViewService.prototype.showAccount = function (route) {
            this.reset();
            this.fadeBg = true;
            this.displayAccount = true;
            this.accountDisplayRoute = route;
        };
        ViewService.prototype.showCreateFramework = function (route, hasExisting) {
            this.reset();
            this.fadeBg = true;
            this.displayCreate = true;
            this.accountDisplayRoute = route;
            this.hasExistingFrameworks = hasExisting;
        };
        ViewService.prototype.showForgottenDetails = function () {
            this.reset();
            this.fadeBg = true;
            this.displayFtnDetails = true;
        };
        ViewService.prototype.showResetPassword = function (key, email) {
            this.reset();
            this.fadeBg = true;
            this.passwordResetParams = { key: key, email: email };
            this.displayResetPassword = true;
        };
        ViewService.prototype.resetView = function () {
            this.reset();
        };
        ViewService.prototype.showRegister = function (route) {
            if (route === void 0) { route = null; }
            this.reset();
            this.fadeBg = true;
            this.displayRegister = true;
            if (route !== null)
                this.accountDisplayRoute = route;
        };
        ViewService.prototype.showSaveAs = function () {
            this.reset();
            this.fadeBg = true;
            this.displaySaveAs = true;
        };
        ViewService.prototype.attemptSave = function (loggedIn, hasExisting, noCurrent) {
            if (hasExisting === void 0) { hasExisting = false; }
            if (noCurrent === void 0) { noCurrent = false; }
            this.reset();
            this.fadeBg = true;
            this.accountDisplayRoute = AccountDisplayRoute.FromSave;
            if (!loggedIn) {
                this.displayLogin = true;
                return;
            }
            else {
                if (hasExisting && !noCurrent) {
                    this.displaySaveAs = true;
                }
                else {
                    this.displayCreate = true;
                }
            }
        };
        ViewService.prototype.showEdit = function () {
            this.reset();
            this.displayEdit = true;
            this.fadeBg = true;
        };
        ViewService.prototype.showCreate = function (hasExisting) {
            if (hasExisting === void 0) { hasExisting = false; }
            this.reset();
            this.fadeBg = true;
            this.displayCreate = true;
        };
        ViewService.prototype.reset = function () {
            this.fadeBg = false;
            this.displayEdit = false;
            this.displayLogin = false;
            this.displayAccount = false;
            this.accountDisplayRoute = AccountDisplayRoute.FromViewAccount;
            this.displayCreate = false;
            this.displaySaveAs = false;
            this.displaySelectFramework = false;
            this.hasExistingFrameworks = false;
            this.displayFtnDetails = false;
            this.displayResetPassword = false;
            this.passwordResetParams = null;
            this.displayRegister = false;
            this.displaySave = false;
            this.displayControls = true;
            this.displayGrid = true;
            this.displaySummary = false;
            this.displayLoading = false;
        };
        return ViewService;
    }());
    ViewService.$inject = ["$sce"];
    aif.ViewService = ViewService;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var ReminderStatus;
    (function (ReminderStatus) {
        ReminderStatus[ReminderStatus["NotSeen"] = 0] = "NotSeen";
        ReminderStatus[ReminderStatus["SeenOnce"] = 1] = "SeenOnce";
        ReminderStatus[ReminderStatus["SeenTwiceOrMore"] = 2] = "SeenTwiceOrMore";
        ReminderStatus[ReminderStatus["Dismissed"] = 3] = "Dismissed";
        ReminderStatus[ReminderStatus["Registered"] = 4] = "Registered";
        ReminderStatus[ReminderStatus["NeverShow"] = 5] = "NeverShow";
    })(ReminderStatus = aif.ReminderStatus || (aif.ReminderStatus = {}));
    var AifStatus = (function () {
        function AifStatus(registerReminderStatus, backendError) {
            if (registerReminderStatus === void 0) { registerReminderStatus = ReminderStatus.NotSeen; }
            if (backendError === void 0) { backendError = false; }
            this.registerReminderStatus = registerReminderStatus;
            this.backendError = backendError;
        }
        return AifStatus;
    }());
    aif.AifStatus = AifStatus;
    var AifPasswordResetResponse = (function () {
        function AifPasswordResetResponse(success, message, redirectUrl) {
            this.success = success;
            this.message = message;
            this.redirectUrl = redirectUrl;
        }
        return AifPasswordResetResponse;
    }());
    aif.AifPasswordResetResponse = AifPasswordResetResponse;
    var UserRepository = (function () {
        function UserRepository($timeout, $rootScope, $cookies, $http, $q) {
            this.$timeout = $timeout;
            this.$rootScope = $rootScope;
            this.$cookies = $cookies;
            this.$http = $http;
            this.$q = $q;
            //For debug
            this.startLoggedIn = false;
            this.currentUserFramework = this.getEmptyUserFramework();
        }
        UserRepository.prototype.getEmptyUserFramework = function () {
            var emptyData = { inputs: {} };
            return new aif.AifUserFramework(-1, emptyData);
        };
        UserRepository.prototype.setFrameworkService = function (service) {
            this.frameworkService = service;
        };
        UserRepository.prototype.get = function () {
            var loggedIn = this.getCookieValue("isLoggedIn");
            if (!loggedIn) {
                this.getUser(true); //Attempt a get user anyway as might have cleared cookie
                var status_1 = new AifStatus();
                status_1.registerReminderStatus = this.getCookieValue("registerReminderStatus") || ReminderStatus.NotSeen;
                return this.$q.when(status_1);
            }
            return this.getUser();
        };
        UserRepository.prototype.getUser = function (broadcastLogin) {
            var _this = this;
            if (broadcastLogin === void 0) { broadcastLogin = false; }
            var status = new AifStatus();
            status.registerReminderStatus = this.getCookieValue("registerReminderStatus");
            try {
                if (ajax_auth_object == undefined || !ajax_auth_object) {
                    status.backendError = true;
                    status.registerReminderStatus = ReminderStatus.NeverShow;
                    return this.$q.when(status);
                }
            }
            catch (ex) {
                status.registerReminderStatus = ReminderStatus.NeverShow;
                status.backendError = true;
                return this.$q.when(status);
            }
            var regUrl = ajax_auth_object.ajaxurl;
            var restUrl = ajax_auth_object.resturl + "aif/v1/userframeworks";
            var data = {
                action: 'ajaxloggedin',
                security: ajax_auth_object.logged_in_nonce
            };
            var user = null;
            var currentFrameworkId = -1;
            return this.$http.post(regUrl, data)
                .then(function (response) {
                if (response.data && response.data.loggedIn) {
                    var d = response.data;
                    user = new aif.AifUser(d.email, d.displayName, null, null, null, null, null);
                    user.id = d.userId;
                    _this.currentUser = user;
                    _this.setLoggedInCookieStatus();
                    currentFrameworkId = _this.getCookieValue("currentFrameworkId") || -1;
                    return _this.$http.get(restUrl);
                }
                return null;
            }, function (e) {
                return null;
            }).then(function (response) {
                var currentIsDraft = false;
                if (user && response && response.data) {
                    user.frameworks = response.data.filter(function (f) { return f.status.toLowerCase() != 'draft'; }).map(function (f) { return new aif.AifFramework(f.id, f.title, f.excerpt); });
                    var draftFrameworks = response.data.filter(function (f) { return f.status.toLowerCase() == 'draft'; });
                    if (draftFrameworks.length) {
                        currentIsDraft = draftFrameworks.some(function (f) { return f.id == currentFrameworkId; });
                    }
                }
                if (currentFrameworkId > -1)
                    return _this.loadFramework(currentFrameworkId, currentIsDraft);
                return null;
            }).then(function (response) {
                if (broadcastLogin) {
                    _this.$rootScope.$broadcast("user:loggedIn", user);
                }
                status.user = user;
                return status;
            });
        };
        UserRepository.prototype.setRegisterReminderStatus = function (status) {
            this.setCookieValue("registerReminderStatus", status);
        };
        UserRepository.prototype.setLoggedInCookieStatus = function () {
            if (this.currentUser) {
                var loggedC = this.getCookieValue("loggedInFromSave");
                if (loggedC && loggedC.toString().toLowerCase() === "true") {
                    this.currentUser.loggedInFromSave = true;
                    this.setCookieValue("loggedInFromSave", false);
                }
                this.setCookieValue("isLoggedIn", true);
                this.setCookieValue("userId", this.currentUser.id);
            }
        };
        UserRepository.prototype.setPreLoginRefreshCookieStatus = function (userId, loggedInFromSave, currentFrameworkId) {
            if (loggedInFromSave === void 0) { loggedInFromSave = false; }
            if (currentFrameworkId === void 0) { currentFrameworkId = null; }
            var cookieHash = {
                userId: userId,
                isLoggedIn: true,
                loggedInFromSave: loggedInFromSave
            };
            if (currentFrameworkId && currentFrameworkId > 0) {
                cookieHash.currentFrameworkId = currentFrameworkId;
            }
            else {
                if (loggedInFromSave)
                    this.setCookieValue("currentFrameworkId", null);
            }
            this.setCookieObject(cookieHash);
        };
        UserRepository.prototype.save = function () {
            var _this = this;
            if (!this.currentUser) {
                return this.$q.when(new aif.SaveFrameworkResult(false, null, "User not logged in"));
            }
            if (!this.currentUser.currentFramework) {
                return this.$q.when(new aif.SaveFrameworkResult(false, null, "No framework to save"));
            }
            else {
                var regUrl = ajax_auth_object.resturl + 'wp/v2/aifworkflows-api/' + this.currentUser.currentFramework.id;
                var data = {
                    title: this.currentUser.currentFramework.name,
                    content: JSON.stringify(this.currentUserFramework.asJsonObj()),
                    author: this.currentUser.id,
                    excerpt: this.currentUser.currentFramework.description,
                    type: "aif_workflow",
                    status: "publish"
                };
                return this.$http.post(regUrl, JSON.stringify(data)).then(function (response) {
                    var postId = response.data.id;
                    var framework = _this.currentUser.currentFramework;
                    return new aif.SaveFrameworkResult(true, framework, null);
                }, function (e) {
                    return new aif.SaveFrameworkResult(false, null, e.statusText);
                });
            }
        };
        UserRepository.prototype.registerNewUser = function (user, fromSave) {
            var _this = this;
            if (fromSave === void 0) { fromSave = false; }
            var regUrl = ajax_auth_object.ajaxurl;
            var regUser = {
                action: 'ajaxregister',
                username: user.email,
                password: user.password,
                email: user.email,
                firstName: user.firstName,
                security: ajax_auth_object.register_nonce,
                lastName: user.lastName,
                organisation: user.organisation,
                jobTitle: user.jobTitle,
                contactNumber: user.contactNumber,
                locale: user.language
            };
            var hasUnsavedWork = false;
            if (this.currentUserFramework && this.currentUserFramework.frameworkId == -1) {
                if (this.currentUserFramework.hasValues()) {
                    regUser.tempFramework = JSON.stringify(this.currentUserFramework.asJsonObj());
                    hasUnsavedWork = true;
                }
            }
            return this.$http.post(regUrl, regUser).then(function (r) {
                if (r.data && r.data.loggedIn) {
                    var newUser = new aif.AifUser(user.email, user.firstName, user.lastName, user.organisation, user.jobTitle, user.language, user.contactNumber);
                    newUser.id = r.data.userId;
                    _this.currentUser = newUser;
                    var draftFrameworkId = (!r.data.draftFrameworkId || r.data.draftFrameworkId == -1) ? null : r.data.draftFrameworkId;
                    _this.setPreLoginRefreshCookieStatus(newUser.id, fromSave, draftFrameworkId);
                    _this.$rootScope.$broadcast("user:loggedIn", newUser);
                    return new aif.LoginResult(true, newUser, null);
                }
                var message = r.data.message || "Registration error";
                return new aif.LoginResult(false, null, message);
            }, function (e) {
                return new aif.LoginResult(false, null, "Registration error");
            });
        };
        UserRepository.prototype.logout = function () {
            var _this = this;
            var regUrl = ajax_auth_object.ajaxurl;
            var regUser = {
                action: 'ajaxlogout',
                security: ajax_auth_object.logout_nonce
            };
            return this.$http.post(regUrl, regUser).then(function (response) {
                _this.setCookieValue("isLoggedIn", false);
                _this.currentUser = null;
                _this.$rootScope.$broadcast("user:loggedOut");
                return !(response.data && !response.data.loggedOut);
            }, function (e) {
                return false;
            });
        };
        UserRepository.prototype.sendPasswordLink = function (email) {
            var regUrl = ajax_auth_object.lost_password_url;
            var regUser = {
                user_login: email,
                security: ajax_auth_object.password_reset_nonce
            };
            return this.$http.post(regUrl, regUser).then(function (response) {
                if (response && response.data) {
                    return new AifPasswordResetResponse(response.data.success, response.data.message, response.data.redirectUrl);
                }
                return new AifPasswordResetResponse(false, "Something went wrong. Please try again.", null);
            }, function (e) {
                return new AifPasswordResetResponse(false, "Something went wrong. Please try again.", null);
            });
        };
        UserRepository.prototype.resetPassword = function (email, key, newPassword) {
            var regUrl = ajax_auth_object.reset_password_url;
            var regUser = {
                user_login: email,
                key: key,
                new_pass: newPassword,
                security: ajax_auth_object.password_reset_nonce
            };
            return this.$http.post(regUrl, regUser).then(function (response) {
                if (response && response.data) {
                    return new AifPasswordResetResponse(response.data.success || response.data.loggedIn, response.data.message, response.data.redirectUrl);
                }
                return new AifPasswordResetResponse(false, "Something wen wrong please try again", null);
            }, function (e) {
                return new AifPasswordResetResponse(false, "Something went wrong. Please try again.", null);
            });
        };
        UserRepository.prototype.login = function (email, password, fromSave) {
            var _this = this;
            if (fromSave === void 0) { fromSave = false; }
            var regUrl = ajax_auth_object.ajaxurl;
            var regUser = {
                action: 'ajaxlogin',
                username: email,
                password: password,
                security: ajax_auth_object.login_nonce
            };
            var hasUnsavedWork = false;
            if (this.currentUserFramework && this.currentUserFramework.frameworkId == -1) {
                if (this.currentUserFramework.hasValues()) {
                    regUser.tempFramework = JSON.stringify(this.currentUserFramework.asJsonObj());
                    hasUnsavedWork = true;
                }
            }
            return this.$http.post(regUrl, regUser).then(function (r) {
                if (r.data) {
                    if (r.data.loggedIn) {
                        var newUser = new aif.AifUser(email, r.data.displayName, null, null, null, null, null);
                        newUser.id = r.data.userId;
                        var draftFrameworkId = (!r.data.draftFrameworkId || r.data.draftFrameworkId == -1) ? null : r.data.draftFrameworkId;
                        _this.setPreLoginRefreshCookieStatus(newUser.id, fromSave, draftFrameworkId);
                        _this.$rootScope.$broadcast("user:loggedIn", newUser);
                        return new aif.LoginResult(true, newUser, null);
                    }
                    else {
                        if (r.data == "0") {
                            _this.logout().then(function (r) {
                                window.location.href = window.location.href;
                            });
                        }
                        if (r.data.message && r.data.message.toLowerCase().indexOf('wrong username or password') > -1) {
                            return new aif.LoginResult(false, null, r.data.message);
                        }
                    }
                }
                return new aif.LoginResult(false, null, null);
            }, function (e) {
                return new aif.LoginResult(false, null, null);
            });
        };
        UserRepository.prototype.createNewFramework = function (name, description) {
            var _this = this;
            var hasUser = !!this.currentUser;
            var regUrl = ajax_auth_object.resturl + 'wp/v2/aifworkflows-api/';
            var data = {
                title: name,
                content: JSON.stringify({ inputs: {} }),
                author: this.currentUser.id,
                excerpt: description,
                type: "aif_workflow",
                status: "publish"
            };
            return this.$http.post(regUrl, JSON.stringify(data)).then(function (response) {
                var postId = response.data.id;
                var framework = new aif.AifFramework(postId, name, description);
                _this.currentUser.frameworks.forEach(function (f) { return f.current = false; });
                framework.current = true;
                _this.currentUser.frameworks.push(framework);
                _this.currentUser.currentFramework = framework;
                _this.setCookieValue("currentFrameworkId", framework.id);
                _this.$rootScope.$broadcast("framework:frameworkUpdated", framework);
                return new aif.SaveFrameworkResult(true, framework, null);
            }, function (e) {
                return new aif.SaveFrameworkResult(false, null, e.statusText);
            });
        };
        UserRepository.prototype.renameFramework = function (frameworkId, name, description) {
            var _this = this;
            var hasUser = !!this.currentUser;
            var hasFramework = frameworkId && frameworkId > 0;
            var regUrl = ajax_auth_object.resturl + 'wp/v2/aifworkflows-api/' + frameworkId;
            var data = {
                title: name,
                excerpt: description,
                type: "aif_workflow",
                status: "publish"
            };
            return this.$http.patch(regUrl, JSON.stringify(data)).then(function (response) {
                if (!hasUser)
                    return new aif.SaveFrameworkResult(false, null, "Not logged in");
                if (!hasFramework)
                    return new aif.SaveFrameworkResult(false, null, "No framework specified");
                var postId = response.data.id;
                var framework = new aif.AifFramework(postId, name, description);
                _this.currentUser.frameworks.forEach(function (f) {
                    if (f.id == frameworkId) {
                        f.name = name;
                        f.description = description;
                    }
                });
                _this.$rootScope.$broadcast("framework:frameworkUpdated", framework);
                return new aif.SaveFrameworkResult(true, framework, null);
            }, function (e) {
                return new aif.SaveFrameworkResult(false, null, e.statusText);
            });
        };
        UserRepository.prototype.saveOverFramework = function (id) {
            var _this = this;
            var hasUser = !!this.currentUser;
            if (!hasUser) {
                return this.$q.when(new aif.SaveFrameworkResult(false, null, "User not logged in"));
            }
            else {
                var matches = this.currentUser.frameworks.filter(function (f) { return f.id === id; });
                if (matches.length) {
                    var framework_1 = matches[0];
                    this.currentUser.frameworks.forEach(function (f) {
                        f.current = false;
                        f.saving = false;
                    });
                    framework_1.current = true;
                    this.currentUser.currentFramework = framework_1;
                    this.setCookieValue("currentFrameworkId", framework_1.id);
                    return this.save().then(function (s) {
                        if (s.success) {
                            _this.$rootScope.$broadcast("framework:frameworkSwitched", framework_1);
                            return new aif.SaveFrameworkResult(true, framework_1, "Framework selected");
                        }
                        else {
                            return s;
                        }
                    }, function (e) {
                        return new aif.SaveFrameworkResult(false, null, e.message);
                    });
                }
                else {
                    this.currentUser.currentFramework = null;
                    this.$rootScope.$broadcast("framework:frameworkUpdated", null);
                    var result = new aif.SaveFrameworkResult(false, null, "No matching frameworks found");
                    return this.$q.when(result);
                }
            }
        };
        UserRepository.prototype.setCookieObject = function (cookieHash) {
            var cookie = this.$cookies.getObject("aifStatus");
            if (!cookie) {
                cookie = {
                    userId: cookieHash["userId"],
                    currentFrameworkId: cookieHash["currentFrameworkId"],
                    isLoggedIn: cookieHash["isLoggedIn"],
                    loggedInFromSave: cookieHash["loggedInFromSave"],
                    registerReminderStatus: cookieHash["registerReminderStatus"]
                };
                this.$cookies.putObject("aifStatus", cookie);
                return;
            }
            for (var key in cookieHash) {
                if (cookie.hasOwnProperty(key)) {
                    cookie[key] = cookieHash[key];
                }
            }
            this.$cookies.putObject("aifStatus", cookie);
        };
        UserRepository.prototype.setCookieValue = function (key, value) {
            var cookie = this.$cookies.getObject("aifStatus");
            if (!cookie) {
                cookie = this.getDefaultCookie();
            }
            if (cookie.hasOwnProperty(key)) {
                cookie[key] = value;
            }
            this.$cookies.putObject("aifStatus", cookie);
        };
        UserRepository.prototype.getCookieValue = function (key) {
            var cookie = this.$cookies.getObject("aifStatus");
            if (!cookie) {
                cookie = this.getDefaultCookie();
                this.$cookies.putObject("aifStatus", cookie);
            }
            if (cookie.hasOwnProperty(key)) {
                return cookie[key];
            }
        };
        UserRepository.prototype.getDefaultCookie = function () {
            return {
                userId: this.currentUser ? this.currentUser.id : null,
                currentFrameworkId: this.currentUser && this.currentUser.currentFramework ? this.currentUser.currentFramework.id : null,
                isLoggedIn: !!this.currentUser,
                loggedInFromSave: false,
                registerReminderStatus: this.currentUser ? ReminderStatus.SeenOnce : ReminderStatus.NotSeen
            };
        };
        UserRepository.prototype.loadFramework = function (id, isDraft) {
            var _this = this;
            if (isDraft === void 0) { isDraft = false; }
            var hasUser = !!this.currentUser;
            if (!hasUser) {
                return this.$q.when(new aif.SaveFrameworkResult(false, null, "User not logged in"));
            }
            else {
                var matches = this.currentUser.frameworks.filter(function (f) { return f.id === id; });
                if (matches.length || isDraft) {
                    var framework_2 = null;
                    if (!isDraft) {
                        framework_2 = matches[0];
                        this.currentUser.frameworks.forEach(function (f) { return f.current = false; });
                        framework_2.current = true;
                        this.setCookieValue("currentFrameworkId", framework_2.id);
                        this.currentUser.currentFramework = framework_2;
                    }
                    var restUrl = ajax_auth_object.resturl + "wp/v2/aifworkflows-api/" + id;
                    return this.$http.get(restUrl)
                        .then(function (response) {
                        var data;
                        try {
                            data = JSON.parse(response.data.content_json);
                        }
                        catch (ex) {
                            data = { "inputs": {} };
                        }
                        _this.currentUserFramework = new aif.AifUserFramework(id, data);
                        _this.currentUserFramework.isDraft = true;
                        if (_this.frameworkService)
                            _this.frameworkService.onFrameworkLoaded();
                        if (!isDraft) {
                            _this.$rootScope.$broadcast("framework:frameworkUpdated", framework_2);
                            return new aif.SaveFrameworkResult(true, framework_2, "Framework loaded");
                        }
                        else {
                            return new aif.SaveFrameworkResult(true, null, "Draft framework loaded");
                        }
                    });
                }
                else {
                    this.currentUser.currentFramework = null;
                    this.$rootScope.$broadcast("framework:frameworkUpdated", null);
                    var result = new aif.SaveFrameworkResult(false, null, "No matching frameworks found");
                    return this.$q.when(result);
                }
            }
        };
        UserRepository.prototype.deleteFramework = function (id) {
            var hasUser = !!this.currentUser;
            if (!hasUser) {
                return this.$q.when(false);
            }
            else {
                var foundIndex_1 = -1;
                var foundFramework_1 = null;
                this.currentUser.frameworks.forEach(function (f, i) {
                    if (f.id == id) {
                        foundFramework_1 = f;
                        foundIndex_1 = i;
                    }
                });
                if (foundFramework_1) {
                    if (this.currentUser.currentFramework == foundFramework_1) {
                        this.currentUser.currentFramework = null;
                        this.$rootScope.$broadcast("framework:frameworkUpdated", null);
                    }
                    this.currentUser.frameworks.splice(foundIndex_1, 1);
                    var restUrl = ajax_auth_object.resturl + "wp/v2/aifworkflows-api/" + id;
                    return this.$http.delete(restUrl)
                        .then(function (response) {
                        return true;
                    }, function (e) {
                        console.log(e.statusText);
                        return false;
                    });
                }
                else {
                    return this.$q.when(false);
                }
            }
        };
        return UserRepository;
    }());
    UserRepository.$inject = ["$timeout", "$rootScope", '$cookies', '$http', '$q'];
    aif.UserRepository = UserRepository;
    var users = [
        {
            email: "michaelishmael1976@gmail.com",
            firstName: "Michael",
            lastName: "Ishmael",
            organisation: "Michael Ishmael Ltd",
            jobTitle: "Director",
            language: "en",
            contactNumber: "07866 627 323"
        },
        {
            email: "mail@michaelishmael.com",
            firstName: "Michael",
            lastName: "Ishmael",
            organisation: "66 Bytes",
            jobTitle: "Director",
            language: "en",
            contactNumber: "07866 627 323"
        }
    ];
    /*
     let userFrameworks: Array<AifFramework> = [
     {
     id: 1,
     name: "Coca-cola spring campaign",
     description: "New music promotion",
     selected: false,
     flaggedDelete: false,
     current:false
     },
     {
     id: 2,
     name: "Sprite summer campaign",
     description: "New basketball promotion",
     selected: false,
     flaggedDelete: false,
     current: false
     },
     // {
     //   id: 3,
     //   name: "Fanta summer campaign",
     //   description: "Renewed comedy promotion",
     //   selected: false,
     //   flaggedDelete: false,
     //   current: false
     // },
     {
     id: 4,
     name: "Diet Coke summer campaign",
     description: "Continued lifestyle promotion",
     selected: false,
     flaggedDelete: false,
     current: false
     },
     {
     id: 5,
     name: "Coke Zero winter",
     description: "Xtreme sports tie-ins",
     selected: false,
     flaggedDelete: false,
     current: false
     }


     ];
     */
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var FrameworkRepository = (function () {
        function FrameworkRepository($timeout, $rootScope, $cookies, userRepository) {
            this.$timeout = $timeout;
            this.$rootScope = $rootScope;
            this.$cookies = $cookies;
            this.userRepository = userRepository;
            this.editView = null;
            this.frameworkSummary = null;
            this.userRepository.setFrameworkService(this);
        }
        FrameworkRepository.prototype.getEditView = function () {
            if (!this.editView) {
                this.createEditView();
            }
            return this.editView;
        };
        FrameworkRepository.prototype.createEditView = function () {
            var _this = this;
            var structureSteps = aif.AifData.stepStructure;
            var remoteCopy = null;
            try {
                remoteCopy = getRemotePageCopy ? getRemotePageCopy() : null;
            }
            catch (ex) {
                remoteCopy = null;
            }
            var copy = remoteCopy || aif.AifData.baseCopy;
            var steps = structureSteps.map(function (s) {
                var heading = _this.resolveTranslation(copy[s.stepHeadingKey]);
                var step = new aif.AifFrameworkStep(s.stepIndex, heading);
                step.baseColor = s.baseColor;
                step.row = s.row;
                step.colSpan = s.colSpan;
                step.cellOrder = s.cellOrder;
                step.summaryStyle = s.summaryStyle;
                step.inputs = s.inputs.map(function (i) {
                    var input = new aif.AifStepInput(_this.resolveTranslation(copy[i.headingKey]));
                    input.inputStyle = i.inputStyle;
                    input.textLimit = i.textLimit;
                    input.valueCount = i.valueCount;
                    input.subHeading = _this.resolveTranslation(copy[i.subHeadingKey]);
                    input.info = _this.resolveTranslation(copy[i.infoKey]);
                    _this.userRepository.currentUserFramework.addInputOrEmpty(i.valuesKey, i.inputStyle, i.valueCount);
                    input.values = _this.userRepository.currentUserFramework.inputs[i.valuesKey];
                    return input;
                });
                return step;
            });
            this.editView = new aif.AifFrameworkEditView();
            this.editView.steps = steps;
            this.editView.startHereText = this.resolveTranslation(copy["ST"]);
            this.editView.submitText = this.resolveTranslation(copy["SB"]);
            this.editView.submitDescription = this.resolveTranslation(copy["SB_D"]);
        };
        FrameworkRepository.prototype.onFrameworkLoaded = function () {
            this.createEditView();
        };
        FrameworkRepository.prototype.resolveTranslation = function (copyItem) {
            if (!copyItem)
                return null;
            if (copyItem.translation)
                return copyItem.translation;
            return copyItem.en;
        };
        FrameworkRepository.prototype.getMockUserFramework = function () {
            return {
                inputs: {
                    "S1_I1_V": ["This is my ​Organizational Objectives text"],
                    "S1_I2_V": ["This is my Communications Objectives text"],
                }
            };
        };
        FrameworkRepository.prototype.getSummary = function () {
            var _this = this;
            return this.$timeout(function () {
                if (_this.editView == null)
                    return null;
                var steps = _this.editView.steps;
                var title = "";
                if (_this.userRepository.currentUser && _this.userRepository.currentUser.currentFramework) {
                    title = _this.userRepository.currentUser.currentFramework.name;
                }
                var summary = new aif.AifSummary(title);
                var data = _this.getRawSummaryArray();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var dataRow = data_1[_i];
                    var summaryRow = new aif.AifSummaryRow();
                    for (var _a = 0, _b = dataRow.sections; _a < _b.length; _a++) {
                        var dataSection = _b[_a];
                        var summarySection = new aif.AifSummarySection(dataSection.heading);
                        summarySection.width = dataSection.width;
                        for (var _c = 0, _d = dataSection.groups; _c < _d.length; _c++) {
                            var dataGroup = _d[_c];
                            var summaryGroup = new aif.AifSummaryGroup(dataGroup.heading, dataGroup.color);
                            for (var _e = 0, _f = dataGroup.entries; _e < _f.length; _e++) {
                                var dataEntry = _f[_e];
                                var entry = findEntry(dataEntry.stepId, dataEntry.stepEntryIndex, dataEntry.headingOverride);
                                if (entry) {
                                    summaryGroup.steps.push(entry);
                                }
                                else {
                                    var step = new aif.AifFrameworkStep(-1, "Empty");
                                    summaryGroup.steps.push(step);
                                }
                            }
                            summarySection.groups.push(summaryGroup);
                        }
                        summaryRow.sections.push(summarySection);
                    }
                    summary.rows.push(summaryRow);
                }
                _this.frameworkSummary = summary;
                return summary;
                function findEntry(stepIndex, entryIndex, headingOverride) {
                    var matches = steps.filter(function (s) { return s.stepIndex == stepIndex; });
                    if (matches.length) {
                        var step = matches[0];
                        if (entryIndex && step.inputs.length >= entryIndex) {
                            var iEntry = step.inputs[entryIndex - 1];
                            if (headingOverride)
                                iEntry.summaryHeading = headingOverride;
                            return iEntry;
                        }
                        if (headingOverride)
                            step.summaryHeading = headingOverride;
                        return step;
                    }
                    return null;
                }
            }, 1);
        };
        FrameworkRepository.prototype.getRawSummaryArray = function () {
            return [
                {
                    sections: [
                        {
                            heading: "Preparation",
                            groups: [
                                {
                                    heading: "Align Objectives",
                                    color: "red",
                                    entries: [
                                        {
                                            entryType: "stepItem",
                                            stepId: 1,
                                            stepEntryIndex: 1
                                        },
                                        {
                                            entryType: "stepItem",
                                            stepId: 1,
                                            stepEntryIndex: 2
                                        }
                                    ]
                                },
                                {
                                    heading: "Inform & Prepare Communication",
                                    color: "yellow",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 2,
                                            stepEntryIndex: 1
                                        },
                                        {
                                            entryType: "step",
                                            stepId: 2,
                                            stepEntryIndex: 2
                                        }
                                    ]
                                }
                            ],
                            width: 1
                        }
                    ],
                    maxRowHeight: 176
                },
                {
                    sections: [
                        {
                            heading: "Implementation",
                            groups: [
                                {
                                    heading: "Implement",
                                    color: "green",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 3,
                                        }
                                    ]
                                }
                            ],
                            width: .25
                        },
                        {
                            heading: "Measurement & Insights",
                            groups: [
                                {
                                    heading: "Measure Activity",
                                    color: "light_blue",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 4,
                                        }
                                    ]
                                },
                                {
                                    heading: "Audience Response & Effects",
                                    color: "dark_blue",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 5,
                                        },
                                        {
                                            entryType: "step",
                                            stepId: 6,
                                        }
                                    ]
                                },
                                {
                                    heading: "Organisation & Stakeholder Effects",
                                    color: "purple",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 7,
                                        }
                                    ]
                                },
                            ],
                            width: .75
                        }
                    ],
                    maxRowHeight: 300
                }
            ];
        };
        return FrameworkRepository;
    }());
    FrameworkRepository.$inject = ["$timeout", "$rootScope", '$cookies', 'userRepository'];
    aif.FrameworkRepository = FrameworkRepository;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AifService = (function () {
        function AifService($timeout, userRepository) {
            this.$timeout = $timeout;
            this.userRepository = userRepository;
        }
        AifService.prototype.getApp = function () {
            var self = this;
            if (self.app == null) {
                return self.buildApp().then(function (a) { return self.app = a; });
            }
            return this.$timeout(function () {
                return self.app;
            });
        };
        AifService.prototype.login = function (username, password) {
            var self = this;
            return this.userRepository.login(username, password).then(function (r) {
                self.user = r.user;
                self.app.user = r.user;
                return r;
            });
        };
        AifService.prototype.logout = function () {
            var _this = this;
            return this.userRepository.logout().then(function (b) {
                return _this.app.user = null;
            });
        };
        AifService.prototype.buildApp = function () {
            var _this = this;
            return this.userRepository.get().then(function (u) {
                _this.user = u;
                _this.app = new aif.AifApp();
                _this.app.user = u;
                return _this.app;
            });
        };
        return AifService;
    }());
    AifService.$inject = ["$timeout", "userRepository"];
    aif.AifService = AifService;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var TEMPLATE_PATH = aif_constants.templateDir;
    var AifLoginScreen = (function () {
        function AifLoginScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/login.html';
            this.restrict = 'E';
            this.controllerAs = 'lc';
            this.bindToContoller = true;
        }
        AifLoginScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifLoginScreen.factory = function () {
            var directive = function () { return new AifLoginScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifLoginScreen;
    }());
    AifLoginScreen.$inject = [''];
    aif.AifLoginScreen = AifLoginScreen;
    var AifUserScreens = (function () {
        function AifUserScreens() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/userScreens.html';
            //template: string = "<h1>User Screens</h1>";
            this.restrict = 'E';
            this.controller = aif.UserScreensCtrl;
            this.controllerAs = 'us';
            this.bindToController = true;
            this.replace = true;
        }
        //replace=true;
        AifUserScreens.prototype.link = function (scope, element, attributes) {
        };
        AifUserScreens.factory = function () {
            var directive = function () { return new AifUserScreens(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifUserScreens;
    }());
    AifUserScreens.$inject = [''];
    aif.AifUserScreens = AifUserScreens;
    var AifAccountScreen = (function () {
        function AifAccountScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/account.html';
            this.restrict = 'E';
            this.controllerAs = 'av';
            this.bindToController = true;
        }
        AifAccountScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifAccountScreen.factory = function () {
            var directive = function () { return new AifAccountScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifAccountScreen;
    }());
    AifAccountScreen.$inject = [''];
    aif.AifAccountScreen = AifAccountScreen;
    var AifCreateFwScreen = (function () {
        function AifCreateFwScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/create.html';
            this.restrict = 'E';
            this.controllerAs = 'cf';
            this.bindToController = true;
        }
        AifCreateFwScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifCreateFwScreen.factory = function () {
            var directive = function () { return new AifCreateFwScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifCreateFwScreen;
    }());
    AifCreateFwScreen.$inject = [''];
    aif.AifCreateFwScreen = AifCreateFwScreen;
    var AifSaveAsScreen = (function () {
        function AifSaveAsScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/saveAs.html';
            this.restrict = 'E';
            this.controllerAs = 'cf';
            this.bindToController = true;
        }
        AifSaveAsScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifSaveAsScreen.factory = function () {
            var directive = function () { return new AifSaveAsScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifSaveAsScreen;
    }());
    AifSaveAsScreen.$inject = [''];
    aif.AifSaveAsScreen = AifSaveAsScreen;
    var AifRegisterScreen = (function () {
        function AifRegisterScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/register.html';
            this.restrict = 'E';
            this.controllerAs = 'rc';
            this.bindToController = true;
        }
        AifRegisterScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifRegisterScreen.factory = function () {
            var directive = function () { return new AifRegisterScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifRegisterScreen;
    }());
    AifRegisterScreen.$inject = [''];
    aif.AifRegisterScreen = AifRegisterScreen;
    var AifForgotPassword = (function () {
        function AifForgotPassword() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/forgotPassword.html';
            this.restrict = 'E';
            this.controller = aif.ForgotPasswordCtrl;
            this.controllerAs = 'fp';
            this.bindToController = true;
        }
        AifForgotPassword.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifForgotPassword.factory = function () {
            var directive = function () { return new AifForgotPassword(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifForgotPassword;
    }());
    AifForgotPassword.$inject = [''];
    aif.AifForgotPassword = AifForgotPassword;
    var AifResetPassword = (function () {
        function AifResetPassword() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/resetPassword.html';
            this.restrict = 'E';
            this.controller = aif.ResetPasswordCtrl;
            this.controllerAs = 'rp';
            this.bindToController = true;
        }
        AifResetPassword.prototype.link = function (scope, element, attributes, ctrl) {
            console.log(element);
        };
        AifResetPassword.factory = function () {
            var directive = function () { return new AifResetPassword(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifResetPassword;
    }());
    AifResetPassword.$inject = [''];
    aif.AifResetPassword = AifResetPassword;
    var AifFrameworkSummary = (function () {
        function AifFrameworkSummary() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/frameworkSummary.html';
            this.restrict = 'E';
        }
        AifFrameworkSummary.factory = function () {
            var directive = function () { return new AifFrameworkSummary(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifFrameworkSummary;
    }());
    AifFrameworkSummary.$inject = [''];
    aif.AifFrameworkSummary = AifFrameworkSummary;
    var AifRegisterReminder = (function () {
        function AifRegisterReminder($sce) {
            this.$sce = $sce;
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/registerReminder.html';
            this.restrict = 'A';
            this.scope = {
                target: '@',
                copyKey: '@',
                dismissFn: '=',
                copyFn: '=',
            };
        }
        AifRegisterReminder.prototype.link = function (scope, element, attributes) {
            var _this = this;
            if (this.regTether) {
                this.regTether.show();
            }
            else {
                this.doTether();
            }
            if (scope.copyFn && scope.copyKey) {
                var copy = scope.copyFn(scope.copyKey, null, true);
                if (copy) {
                    scope.copy = copy;
                    scope.dismissText = scope.copyFn(scope.copyKey + '_D', "Don't show again") || "Don't show again";
                }
                else {
                    scope.copy = this.$sce.trustAsHtml("<p>New functionality has been added to the AMEC Integrated Evaluation Framework to improve the user experience. </p><p>Now you can save the progress of your work and can save and edit up to 10 different frameworks per user account.</p><p> To do so you must register, create an account and log in. While it is not compulsory to do so, this important new functionality is only available once logged into your account. Please either sign in or register if it’s your first time here to begin.Don’t worry, use of the framework remains completely free!</p>");
                    scope.dismissText = "Don't show again";
                }
            }
            else {
                scope.copy = this.$sce.trustAsHtml("<p>New functionality has been added to the AMEC Integrated Evaluation Framework to improve the user experience. </p><p>Now you can save the progress of your work and can save and edit up to 10 different frameworks per user account.</p><p> To do so you must register, create an account and log in. While it is not compulsory to do so, this important new functionality is only available once logged into your account. Please either sign in or register if it’s your first time here to begin.Don’t worry, use of the framework remains completely free!</p>");
                scope.dismissText = "Don't show again";
            }
            scope.$on('$destroy', function () {
                if (_this.regTether) {
                    _this.regTether.destroy();
                    delete _this.regTether;
                }
            });
            scope.dismiss = function () {
                scope.close();
                if (scope.dismissFn && typeof scope.dismissFn === "function")
                    scope.dismissFn();
            };
            scope.close = function () {
                if (_this.regTether) {
                    jQuery(_this.regTether.element).remove();
                    _this.regTether.destroy();
                }
            };
        };
        AifRegisterReminder.prototype.doTether = function () {
            var tetherOptions = {
                attachment: "top left",
                element: "#register-reminder",
                target: "#register-button",
                targetAttachment: "bottom left"
            };
            this.regTether = new Tether(tetherOptions);
        };
        AifRegisterReminder.factory = function () {
            var directive = function ($sce) { return new AifRegisterReminder($sce); };
            directive.$inject = ['$sce'];
            return directive;
        };
        return AifRegisterReminder;
    }());
    AifRegisterReminder.$inject = [''];
    aif.AifRegisterReminder = AifRegisterReminder;
    var AifLoadingSpinner = (function () {
        function AifLoadingSpinner() {
            this.restrict = 'A';
            this.scope = {
                loading: '='
            };
        }
        AifLoadingSpinner.prototype.link = function (scope, element, attributes, ctrl) {
            if (!Spinner)
                return;
            var opts = {
                lines: 8 // The number of lines to draw
                ,
                length: 0 // The length of each line
                ,
                width: 6 // The line thickness
                ,
                radius: 14 // The radius of the inner circle
                ,
                scale: 1 // Scales overall size of the spinner
                ,
                corners: 1 // Corner roundness (0..1)
                ,
                color: '#fff' // #rgb or #rrggbb or array of colors
                ,
                opacity: 0.25 // Opacity of the lines
                ,
                rotate: 12 // The rotation offset
                ,
                direction: 1 // 1: clockwise, -1: counterclockwise
                ,
                speed: 1.5 // Rounds per second
                ,
                trail: 64 // Afterglow percentage
                ,
                fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
                ,
                zIndex: 2e9 // The z-index (defaults to 2000000000)
                ,
                className: 'spinner' // The CSS class to assign to the spinner
                ,
                top: '50%' // Top position relative to parent
                ,
                left: '50%' // Left position relative to parent
                ,
                shadow: false // Whether to render a shadow
                ,
                hwaccel: false // Whether to use hardware acceleration
                ,
                position: 'absolute' // Element positioning
            };
            var spinner = new Spinner(opts).spin(element[0]);
            var jSpinner = jQuery(spinner.el);
            if (!scope.loading)
                jSpinner.hide();
            scope.$watch('loading', function (newValue, oldValue) {
                if (newValue) {
                    jQuery(element).children().hide();
                    jSpinner.show();
                }
                else {
                    jQuery(element).children().show();
                    jSpinner.hide();
                }
            });
        };
        AifLoadingSpinner.factory = function () {
            var directive = function () { return new AifLoadingSpinner(); };
            return directive;
        };
        return AifLoadingSpinner;
    }());
    aif.AifLoadingSpinner = AifLoadingSpinner;
    var AifInputGrid = (function () {
        function AifInputGrid($timeout) {
            this.$timeout = $timeout;
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/inputGrid.html';
            this.restrict = 'E';
            this.scope = {
                step: '='
            };
            this.controller = aif.InputGridCtrl;
            this.controllerAs = 'ig';
            this.bindToController = true;
        }
        AifInputGrid.prototype.link = function (scope, element, attributes, ctrl) {
            var handler = null;
            if (ctrl) {
                handler = "click.outsideHandler" + ctrl.step.stepIndex.toString();
                var self_1 = this;
                jQuery(element).on(handler, function (e) {
                    console.log(handler);
                    e.stopPropagation();
                });
                var allowFirst_1 = true;
                jQuery(document).on(handler, function (e) {
                    if (allowFirst_1) {
                        allowFirst_1 = false;
                    }
                    else {
                        self_1.$timeout(function () {
                            ctrl.close();
                        });
                    }
                });
                ctrl.init();
            }
            scope.$on('$destroy', function (e) {
                console.log('off ' + handler);
                if (element)
                    jQuery(element).off(handler);
                if (handler)
                    jQuery(document).off(handler);
            });
        };
        AifInputGrid.factory = function () {
            var directive = function ($timeout) { return new AifInputGrid($timeout); };
            directive.$inject = ['$timeout'];
            return directive;
        };
        return AifInputGrid;
    }());
    AifInputGrid.$inject = ['$timeout'];
    aif.AifInputGrid = AifInputGrid;
    var AifListInputTile = (function () {
        function AifListInputTile() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/listInputTile.html';
            this.restrict = 'E';
            this.scope = {
                cell: '=',
                step: '='
            };
            this.controller = aif.ListInputTileCtrl;
            this.controllerAs = 'li';
        }
        //replace=true;
        AifListInputTile.prototype.link = function (scope, element, attributes) {
        };
        AifListInputTile.factory = function () {
            var directive = function () { return new AifListInputTile(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifListInputTile;
    }());
    AifListInputTile.$inject = [''];
    aif.AifListInputTile = AifListInputTile;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var FrameworkCtrl = (function () {
        function FrameworkCtrl($scope, frameworkRepository, vs) {
            this.$scope = $scope;
            this.frameworkRepository = frameworkRepository;
            this.vs = vs;
            this.editMode = false;
            this.editStep = null;
            this.infoCell = null;
            this.init();
        }
        FrameworkCtrl.prototype.init = function () {
            var _this = this;
            this.editView = this.frameworkRepository.getEditView();
            this.$scope.$on("framework:frameworkUpdated", function (event, data) {
                _this.editView = _this.frameworkRepository.getEditView();
            });
        };
        FrameworkCtrl.prototype.getColorClass = function (prefix, step) {
            return prefix + "-" + step.color + " ";
        };
        FrameworkCtrl.prototype.handleStepClick = function (stepIndex) {
            var matches = this.editView.steps.filter(function (s) { return s.stepIndex === stepIndex; });
            if (matches.length) {
                this.switchToEditMode(matches[0]);
            }
            return;
        };
        FrameworkCtrl.prototype.getStepTitle = function (stepIndex, defaultTitle) {
            var text = null;
            if (stepIndex == -1) {
                text = this.editView.startHereText.trim();
            }
            if (stepIndex == -2) {
                text = this.editView.submitText.trim();
            }
            if (stepIndex == -3) {
                text = this.editView.submitDescription.trim();
            }
            var matches = this.editView.steps.filter(function (s) { return s.stepIndex === stepIndex; });
            if (matches.length) {
                text = matches[0].heading;
            }
            return text ? text : defaultTitle;
        };
        FrameworkCtrl.prototype.switchToEditMode = function (step) {
            this.editMode = true;
            this.editStep = step;
            this.vs.showEdit();
        };
        FrameworkCtrl.prototype.isInSameStep = function (scp, arg2) {
            console.log(arg2);
            return false;
        };
        FrameworkCtrl.prototype.clearEditMode = function () {
            this.vs.resetView();
            this.editMode = false;
            this.editStep = null;
        };
        FrameworkCtrl.prototype.isInfo = function (cell) {
            if (cell.cellType == aif.WorkflowCellType.Info)
                return true;
            return false;
        };
        FrameworkCtrl.prototype.isEmpty = function (cell) {
            if (cell.cellType == aif.WorkflowCellType.Empty)
                return true;
            return false;
        };
        FrameworkCtrl.prototype.isInput = function (cell) {
            if (cell.cellType == aif.WorkflowCellType.Input) {
                var inputCell = cell;
                if (inputCell.items[0].inputStyle !== aif.InputStyle.NumberedInputs)
                    return true;
            }
            return false;
        };
        FrameworkCtrl.prototype.isListInput = function (cell) {
            if (cell.cellType == aif.WorkflowCellType.Input) {
                var inputCell = cell;
                if (inputCell.items[0].inputStyle === aif.InputStyle.NumberedInputs)
                    return true;
            }
            return false;
        };
        FrameworkCtrl.prototype.showInfoCell = function (inputItem, infoCell) {
            //e.stopPropagation();
            if (inputItem && infoCell) {
                infoCell.leadText = inputItem.leadText;
                infoCell.remainText = inputItem.remainText;
                infoCell.visible = true;
            }
        };
        FrameworkCtrl.prototype.hideInfoCell = function () {
            if (this.infoCell) {
                this.infoCell.visible = false;
                this.infoCell = null;
            }
        };
        FrameworkCtrl.setRowsFromSteps = function (steps) {
            var rowObj = steps.reduce(function (grps, s) {
                (grps[s["row"]] = grps[s["row"]] || []).push(s);
                return grps;
            }, {});
            var rowCount = Math.max.apply(Math, steps.map(function (s) { return s.row; }));
            var rows = [];
            for (var i = 0; i < rowCount; i++) {
                var rowArray = rowObj[i + 1];
                var row = new aif.WorkflowRow(rowArray);
                rows.push(row);
            }
            return rows;
        };
        return FrameworkCtrl;
    }());
    FrameworkCtrl.$inject = ["$scope",
        "frameworkRepository",
        "viewService"
    ];
    aif.FrameworkCtrl = FrameworkCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var RegisterCtrl = (function () {
        function RegisterCtrl(vs, userRepository) {
            this.vs = vs;
            this.userRepository = userRepository;
            this.loginFailure = false;
            this.loginMessage = null;
            this.showNeedMessage = false;
            this.waiting = false;
            this.userModel = null;
            this.init();
        }
        RegisterCtrl.prototype.init = function () {
            this.userModel = new aif.AppUser(null, null, null, null, null, null, null);
            //this.userModel = new AppUser("guyincognito@hamptons.com", "Guy", "Incognito", "Hamptons", "Boss", "en", "07931");
            //this.userModel.password = "Crumpet1";
            //this.userModel.passwordConfirmation = "Crumpet1";
        };
        RegisterCtrl.prototype.registerNewUser = function (form) {
            var _this = this;
            if (!form.$valid)
                return;
            if (this.userModel.password != this.userModel.passwordConfirmation)
                return;
            this.waiting = true;
            this.userRepository.registerNewUser(this.userModel, this.vs.accountDisplayRoute == aif.AccountDisplayRoute.FromSave).then(function (r) {
                _this.waiting = false;
                if (r.success) {
                    _this.loginFailure = false;
                    _this.vs.showLoading();
                    window.location.href = window.location.href;
                }
                else {
                    _this.loginFailure = true;
                    _this.loginMessage = r.message;
                }
            });
        };
        RegisterCtrl.prototype.isCasualEmil = function (email) {
            if (!email)
                return;
            var isCasual = false;
            var casuals = ["hotmail", "gmail", "yahoo"];
            casuals.forEach(function (s) {
                if (email.toLowerCase().indexOf(s) > -1) {
                    isCasual = true;
                }
            });
            return isCasual;
        };
        return RegisterCtrl;
    }());
    RegisterCtrl.$inject = ["viewService", "userRepository"];
    aif.RegisterCtrl = RegisterCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var ForgotPasswordCtrl = (function () {
        function ForgotPasswordCtrl(vs, userRepository) {
            this.vs = vs;
            this.userRepository = userRepository;
            this.resetError = null;
            this.init();
        }
        ForgotPasswordCtrl.prototype.init = function () {
        };
        ForgotPasswordCtrl.prototype.resend = function () {
            this.linkSent = false;
            this.resetError = null;
        };
        ForgotPasswordCtrl.prototype.sendReset = function (form) {
            var _this = this;
            if (!form.$valid)
                return;
            this.userRepository.sendPasswordLink(this.email).then(function (s) {
                if (s.success) {
                    _this.resetError = null;
                    _this.linkSent = true;
                }
                else {
                    _this.resetError = s.message;
                }
            });
        };
        return ForgotPasswordCtrl;
    }());
    ForgotPasswordCtrl.$inject = ["viewService", "userRepository"];
    aif.ForgotPasswordCtrl = ForgotPasswordCtrl;
    var ResetPasswordCtrl = (function () {
        function ResetPasswordCtrl(vs, userRepository, $timeout, $location) {
            this.vs = vs;
            this.userRepository = userRepository;
            this.$timeout = $timeout;
            this.$location = $location;
            this.resetError = null;
            this.init();
        }
        ResetPasswordCtrl.prototype.init = function () {
            if (this.vs && this.vs.passwordResetParams) {
                this.email = this.vs.passwordResetParams.email;
                this.key = this.vs.passwordResetParams.key;
            }
        };
        ResetPasswordCtrl.prototype.resend = function () {
            this.vs.showForgottenDetails();
        };
        ResetPasswordCtrl.prototype.close = function () {
            this.vs.resetView();
        };
        ResetPasswordCtrl.prototype.changePassword = function (form) {
            var _this = this;
            if (!form.$valid)
                return;
            this.userRepository.resetPassword(this.email, this.key, this.password)
                .then(function (s) {
                if (s.success) {
                    _this.resetError = null;
                    _this.loggedIn = true;
                    _this.$timeout(function () {
                        window.location.href = s.redirectUrl;
                    }, 700);
                }
                else {
                    _this.resetError = s.message;
                }
            });
        };
        return ResetPasswordCtrl;
    }());
    ResetPasswordCtrl.$inject = ["viewService", "userRepository", "$timeout", "$location"];
    aif.ResetPasswordCtrl = ResetPasswordCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var ListInputTileCtrl = (function () {
        function ListInputTileCtrl($scope, vs) {
            this.$scope = $scope;
            this.vs = vs;
            this.message = "List testy";
            this.init();
        }
        ListInputTileCtrl.prototype.init = function () {
            this.cell = this.$scope.cell;
            this.step = this.$scope.step;
        };
        ListInputTileCtrl.prototype.close = function () {
            this.vs.resetView();
        };
        ListInputTileCtrl.prototype.getColorClass = function (prefix, step) {
            return prefix + "-" + step.color + " ";
        };
        return ListInputTileCtrl;
    }());
    ListInputTileCtrl.$inject = ["$scope", "viewService"];
    aif.ListInputTileCtrl = ListInputTileCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var CreateFrameworkCtrl = (function () {
        function CreateFrameworkCtrl($scope, userRepository, vs) {
            this.$scope = $scope;
            this.userRepository = userRepository;
            this.vs = vs;
            this.title = "New Measurement Framework";
            this.user = null;
            this.existingFrameworkId = null;
            this.newFrameworkName = null;
            this.newFrameworkDescription = null;
            this.createMessage = "";
            this.cancelButtonText = "Cancel";
            this.saveUnsuccessful = false;
            this.saveFailMessage = null;
            this.hasFrameworks = false;
            this.editMode = false;
            this.submitAction = this.createNewFramework;
            this.init();
        }
        CreateFrameworkCtrl.prototype.init = function () {
            this.title = this.vs.getCopyForKey('NF_TTL', 'New Measurement Framework');
            this.cancelButtonText = this.vs.getCopyForKey('NF_CLB', 'Cancel');
            if (!this.userRepository.currentUser) {
                this.vs.showLogin();
                return;
            }
            this.user = this.userRepository.currentUser;
            this.hasFrameworks = this.user.hasFrameworks();
            if (this.vs.accountDisplayRoute == aif.AccountDisplayRoute.FromEdit && this.userRepository.tempFramework) {
                this.editMode = true;
                this.title = this.vs.getCopyForKey('NF_ATL_E', 'Edit ') + this.userRepository.tempFramework.name;
                this.submitAction = this.renameFramework;
                this.newFrameworkName = this.userRepository.tempFramework.name;
                this.newFrameworkDescription = this.userRepository.tempFramework.description;
                return;
            }
            this.createMessage = this.vs.getCopyForKey('NF_CTM', 'Create a new framework to save your progress.');
            if (this.vs.accountDisplayRoute == aif.AccountDisplayRoute.FromSave) {
            }
            if (this.vs.accountDisplayRoute == aif.AccountDisplayRoute.FromDetectUnsaved) {
                this.title = this.vs.getCopyForKey('NF_ATL_S', 'Save your work');
            }
            if (this.vs.accountDisplayRoute == aif.AccountDisplayRoute.FromLogin) {
                if (!this.hasFrameworks) {
                    this.title = this.vs.getCopyForKey('NF_ATL_L', 'Create your first framework');
                    this.cancelButtonText = this.vs.getCopyForKey('NF_ACL', 'Skip for now');
                }
            }
        };
        CreateFrameworkCtrl.prototype.close = function () {
            if (this.editMode) {
                this.vs.showAccount(aif.AccountDisplayRoute.FromEdit);
            }
            else {
                this.vs.resetView();
            }
        };
        CreateFrameworkCtrl.prototype.createNewFramework = function (form) {
            var _this = this;
            if (!form.$valid)
                return;
            if (this.user) {
                this.userRepository.createNewFramework(this.newFrameworkName, this.newFrameworkDescription)
                    .then(function (r) {
                    if (r.success) {
                        _this.close();
                    }
                    else {
                        _this.saveUnsuccessful = true;
                        _this.saveFailMessage = r.message;
                    }
                });
            }
        };
        CreateFrameworkCtrl.prototype.showSaveAs = function () {
            this.vs.showSaveAs();
        };
        CreateFrameworkCtrl.prototype.renameFramework = function (form) {
            var _this = this;
            if (!form.$valid)
                return;
            if (!this.userRepository.tempFramework)
                return;
            if (this.user) {
                this.userRepository.renameFramework(this.userRepository.tempFramework.id, this.newFrameworkName, this.newFrameworkDescription)
                    .then(function (r) {
                    if (r.success) {
                        if (_this.editMode) {
                            _this.editMode = false;
                            _this.vs.showAccount(aif.AccountDisplayRoute.FromEdit);
                        }
                    }
                    else {
                        _this.saveUnsuccessful = true;
                        _this.saveFailMessage = r.message;
                    }
                });
            }
        };
        return CreateFrameworkCtrl;
    }());
    CreateFrameworkCtrl.$inject = ["$scope", "userRepository", "viewService"];
    aif.CreateFrameworkCtrl = CreateFrameworkCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var FrameworkSummaryCtrl = (function () {
        function FrameworkSummaryCtrl($sce, frameworkRepository, vs) {
            this.$sce = $sce;
            this.frameworkRepository = frameworkRepository;
            this.vs = vs;
            this.editMode = false;
            this.editStep = null;
            this.infoCell = null;
            this.summary = null;
            this.sectionOne = null;
            this.sectionTwo = null;
            this.sectionThree = null;
            this.init();
        }
        FrameworkSummaryCtrl.prototype.init = function () {
            var _this = this;
            this.frameworkRepository.getSummary().then(function (r) {
                _this.summary = r;
                _this.sectionOne = _this.summary.rows[0].sections[0];
                _this.sectionTwo = _this.summary.rows[1].sections[0];
                _this.sectionThree = _this.summary.rows[1].sections[1];
            });
        };
        FrameworkSummaryCtrl.prototype.sanitize = function (html) {
            return this.$sce.trustAsHtml(html);
        };
        FrameworkSummaryCtrl.prototype.getColorClass = function (prefix, color) {
            if (color === "red" && prefix.indexOf("light") > -1) {
                return prefix + "pale_grey";
            }
            return prefix + color;
        };
        FrameworkSummaryCtrl.prototype.getWidthClass = function (steps, totalSize, inside) {
            if (totalSize === void 0) { totalSize = 1; }
            if (inside === void 0) { inside = false; }
            var unit = 12 / totalSize;
            if (!inside)
                unit = unit * steps;
            return "col-md-" + unit.toString();
        };
        return FrameworkSummaryCtrl;
    }());
    FrameworkSummaryCtrl.$inject = ["$sce",
        "frameworkRepository",
        "viewService"
    ];
    aif.FrameworkSummaryCtrl = FrameworkSummaryCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var Empty = (function () {
        function Empty() {
        }
        Empty.prototype.isEmpty = function () {
            return true;
        };
        return Empty;
    }());
    aif.Empty = Empty;
    var InputCell = (function () {
        function InputCell(colSpan, cellType) {
            if (colSpan === void 0) { colSpan = 1; }
            this.colSpan = colSpan;
            this.cellType = cellType;
        }
        InputCell.prototype.isInput = function () {
            return this.cellType == aif.AifInputCellType.Input;
        };
        InputCell.prototype.isInfo = function () {
            return this.cellType == aif.AifInputCellType.Info;
        };
        InputCell.prototype.isEmpty = function () {
            return this.cellType == aif.AifInputCellType.Empty;
        };
        return InputCell;
    }());
    aif.InputCell = InputCell;
    var InputRow = (function () {
        function InputRow() {
            this.cells = [];
        }
        InputRow.prototype.isEmpty = function () {
            return this.cells.length == 0;
        };
        return InputRow;
    }());
    aif.InputRow = InputRow;
    var InputGridCtrl = (function () {
        function InputGridCtrl($scope, $sce, vs) {
            this.$scope = $scope;
            this.$sce = $sce;
            this.vs = vs;
            this.rows = [];
            this.infoText = null;
            this.visInfoInput = null;
            this.showFurtherInfo = null;
            this.init();
        }
        InputGridCtrl.prototype.getColorClass = function (prefix) {
            return prefix + "-" + this.step.baseColor + " ";
        };
        InputGridCtrl.prototype.showInfo = function (input) {
            if (this.visInfoInput == input) {
                this.hideInfo();
            }
            else {
                this.visInfoInput = input;
                this.infoText = this.$sce.trustAsHtml(input.info);
                this.showFurtherInfo = false;
            }
        };
        InputGridCtrl.prototype.hideInfo = function () {
            this.visInfoInput = null;
            this.infoText = null;
            this.showFurtherInfo = false;
        };
        InputGridCtrl.prototype.sanitize = function (text) {
            if (!text)
                return null;
            return this.$sce.trustAsHtml(text);
        };
        InputGridCtrl.prototype.close = function () {
            this.vs.resetView();
        };
        InputGridCtrl.prototype.toggleFurtherInfo = function () {
            this.showFurtherInfo = !this.showFurtherInfo;
        };
        InputGridCtrl.prototype.init = function () {
            var _this = this;
            this.infoText = null;
            this.showFurtherInfo = false;
            if (this.step) {
                var _loop_1 = function (i) {
                    var row = new InputRow();
                    if (i == this_1.step.row) {
                        this_1.step.cellOrder.forEach(function (o) {
                            if (o === aif.AifInputCellType.Input) {
                                row.cells.push(new InputCell(_this.step.colSpan, o));
                            }
                            else {
                                row.cells.push(new InputCell(1, o));
                            }
                        });
                    }
                    this_1.rows.push(row);
                };
                var this_1 = this;
                for (var i = 1; i <= 3; i++) {
                    _loop_1(i);
                }
            }
        };
        return InputGridCtrl;
    }());
    InputGridCtrl.$inject = ["$scope", '$sce', "viewService"];
    aif.InputGridCtrl = InputGridCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var SaveAsCtrl = (function () {
        function SaveAsCtrl($scope, userRepository, vs) {
            this.$scope = $scope;
            this.userRepository = userRepository;
            this.vs = vs;
            this.title = "Save framework";
            this.user = null;
            this.currentFramework = null;
            this.altMessage = "S";
            this.exInc = 0;
            this.waiting = false;
            this.saveUnsuccessful = false;
            this.saveFailMessage = null;
            this.colors = ["red", "yellow", "green", "light_blue", "dark_blue", "purple"];
            this.init();
        }
        SaveAsCtrl.prototype.getColorClass = function (prefix, index) {
            if (index === void 0) { index = 0; }
            if (index > this.colors.length - 1)
                index = index % this.colors.length;
            return prefix + "-" + this.colors[index] + " ";
        };
        SaveAsCtrl.prototype.init = function () {
            this.title = this.vs.getCopyForKey('SA_TTL', 'Save framework');
            if (!this.userRepository.currentUser) {
                this.vs.showLogin(true);
                return;
            }
            this.user = this.userRepository.currentUser;
            if (this.user.currentFramework) {
                this.currentFramework = this.user.currentFramework;
                this.selectFramework(this.currentFramework);
                this.user.frameworks.forEach(function (s) { return s.saving = false; });
                if (this.user.frameworks.length > 1) {
                    this.altMessage = this.vs.getCopyForKey('SA_SOM', 'Alternatively, save as an existing framework or');
                }
                else {
                    this.altMessage = this.vs.getCopyForKey('SA_OR', 'or');
                }
                this.exInc = 1;
            }
            else if (this.user.frameworks.length) {
                this.altMessage = "Save as an existing framework or";
            }
            this.setTitle(this.vs.accountDisplayRoute);
        };
        SaveAsCtrl.prototype.toggleSave = function () {
            this.waiting = !this.waiting;
        };
        SaveAsCtrl.prototype.setTitle = function (displayRoute) {
            this.title = "Save framework";
            if (this.currentFramework) {
            }
            else {
            }
        };
        SaveAsCtrl.prototype.closeView = function () {
            this.user.frameworks.forEach(function (f) { return f.selected = false; });
            this.user.frameworks.forEach(function (f) { return f.flaggedDelete = false; });
            this.vs.resetView();
        };
        SaveAsCtrl.prototype.saveAsSelectedFramework = function () {
            var _this = this;
            if (this.user && this.frameworkIsSelected()) {
                this.waiting = true;
                var selected = this.user.frameworks.filter(function (f) { return f.selected; })[0];
                this.userRepository.saveOverFramework(selected.id).then(function (s) {
                    if (s) {
                        _this.userRepository.save().then(function (s) {
                            //console.log(s.success)
                        });
                        _this.vs.resetView();
                    }
                });
            }
        };
        SaveAsCtrl.prototype.saveFramework = function (frameWork) {
            var _this = this;
            frameWork.saving = true;
            this.userRepository.saveOverFramework(frameWork.id).then(function (s) {
                if (s) {
                    frameWork.saving = false;
                    _this.vs.resetView();
                }
            });
        };
        SaveAsCtrl.prototype.showCreateFramework = function () {
            this.vs.showCreateFramework(aif.AccountDisplayRoute.FromSave, this.user.frameworks.length > 0);
        };
        SaveAsCtrl.prototype.selectFramework = function (framework) {
            framework.flaggedDelete = false;
            if (framework.selected) {
                return;
            }
            else {
                this.user.frameworks.forEach(function (f) { return f.selected = false; });
                framework.selected = true;
            }
        };
        SaveAsCtrl.prototype.toggleSaveOver = function (framework) {
            framework.flaggedDelete = !framework.flaggedDelete;
        };
        SaveAsCtrl.prototype.frameworkIsSelected = function () {
            return this.user.frameworks.some(function (f) {
                return f.selected;
            });
        };
        return SaveAsCtrl;
    }());
    SaveAsCtrl.$inject = ["$scope", "userRepository", "viewService"];
    aif.SaveAsCtrl = SaveAsCtrl;
})(aif || (aif = {}));
var getEntireDom;
var downloadPDF;
var aif;
(function (aif) {
    'use strict';
    var AppCtrl = (function () {
        function AppCtrl($scope, $interval, $sce, $location, userRepository, vs) {
            var _this = this;
            this.$scope = $scope;
            this.$interval = $interval;
            this.$sce = $sce;
            this.$location = $location;
            this.userRepository = userRepository;
            this.vs = vs;
            this.loginFailure = false;
            this.message = null;
            this.initialised = false;
            this.currentFramework = null;
            this.currentUser = null;
            this.getCopyFunction = function (key, defaultCopy, asHtml) {
                if (defaultCopy === void 0) { defaultCopy = null; }
                if (asHtml === void 0) { asHtml = false; }
                return _this.vs.getCopyForKey(key, defaultCopy, asHtml);
            };
            this.dismissLoginReminder = function () {
                _this.displayLoginReminder = false;
                _this.userRepository.setRegisterReminderStatus(aif.ReminderStatus.Dismissed);
            };
            this.init();
        }
        AppCtrl.prototype.init = function () {
            var _this = this;
            this.$scope.$on("user:loggedIn", function (event, data) {
                _this.userLoggedChanged(data);
            });
            this.$scope.$on("user:loggedOut", function (event) {
                _this.userLoggedChanged(null);
            });
            this.$scope.$on("framework:frameworkUpdated", function (event, data) {
                _this.setCurrentFramework(data);
            });
            this.$scope.$on("framework:frameworkSwitched", function (event, data) {
                _this.setCurrentFramework(data);
            });
            this.vs.showLoading();
            this.userRepository.get().then(function (status) {
                if (status.backendError) {
                    //Handle no back end here and return
                }
                var url = _this.$location.absUrl();
                if (url.toLowerCase().indexOf("rp=true") > -1) {
                    var params = _this.extractPasswordParams(url);
                    _this.vs.showResetPassword(params.key, params.email);
                    _this.initialised = true;
                    return;
                }
                _this.vs.resetView();
                if (status.user) {
                    _this.currentUser = status.user;
                    if (_this.currentUser.loggedInFromSave) {
                        _this.initialised = true;
                        _this.vs.showCreateFramework(aif.AccountDisplayRoute.FromSave, _this.currentUser.hasFrameworks());
                        return;
                    }
                    if (!_this.currentUser.currentFramework) {
                        _this.initialised = true;
                        if (_this.userRepository.currentUserFramework && _this.userRepository.currentUserFramework.isDraft) {
                            _this.vs.showCreateFramework(aif.AccountDisplayRoute.FromDetectUnsaved, _this.currentUser.hasFrameworks());
                            return;
                        }
                        if (_this.currentUser.hasExistingFrameworks())
                            _this.vs.showAccount(aif.AccountDisplayRoute.FromLogin);
                        else {
                            _this.vs.showCreateFramework(aif.AccountDisplayRoute.FromLogin, _this.currentUser.hasFrameworks());
                        }
                    }
                    if (_this.currentUser.currentFramework)
                        _this.currentFramework = _this.currentUser.currentFramework;
                }
                else {
                    if (status.registerReminderStatus < aif.ReminderStatus.Dismissed)
                        _this.reminderIntervalPromise = _this.$interval(function () {
                            if (_this.vs.displayLogin || _this.vs.displayRegister) {
                                return true;
                            }
                            _this.$interval.cancel(_this.reminderIntervalPromise);
                            _this.displayLoginReminder = true;
                            return false;
                        }, 2500);
                }
                _this.initialised = true;
            });
        };
        AppCtrl.prototype.userLoggedChanged = function (user) {
            if (user) {
                this.displayLoginReminder = false;
                if (this.reminderIntervalPromise)
                    this.$interval.cancel(this.reminderIntervalPromise);
                this.currentUser = user;
                if (this.currentUser.currentFramework) {
                    this.setCurrentFramework(this.currentUser.currentFramework);
                }
                else {
                    if (user.hasExistingFrameworks())
                        this.vs.showAccount(aif.AccountDisplayRoute.FromLogin);
                    else {
                        this.vs.showCreateFramework(aif.AccountDisplayRoute.FromLogin, false);
                    }
                }
            }
            else {
                this.currentUser = null;
                this.currentFramework = null;
            }
        };
        AppCtrl.prototype.setCurrentFramework = function (framework) {
            if (this.currentUser) {
                this.currentFramework = this.currentUser.currentFramework;
            }
            else {
                this.currentFramework = framework;
            }
        };
        AppCtrl.prototype.isLoggedIn = function () {
            return !!this.currentUser;
        };
        AppCtrl.prototype.submitFramework = function () {
            //TODO: saving etc
            this.vs.showSummary();
        };
        AppCtrl.prototype.showLogin = function () {
            this.vs.showLogin();
        };
        AppCtrl.prototype.showForgottenDetails = function () {
            this.vs.showForgottenDetails();
        };
        AppCtrl.prototype.hideLoginBox = function () {
            this.vs.resetView();
        };
        AppCtrl.prototype.showRegister = function () {
            this.vs.showRegister();
        };
        AppCtrl.prototype.viewAccount = function () {
            this.vs.showAccount(aif.AccountDisplayRoute.FromViewAccount);
        };
        AppCtrl.prototype.saveProgress = function () {
            var loggedIn = this.isLoggedIn();
            var hasExisting = loggedIn ? this.currentUser.hasExistingFrameworks() : false;
            var hasCurrent = loggedIn ? !!this.currentUser.currentFramework : false;
            this.vs.attemptSave(loggedIn, hasExisting, !hasCurrent);
        };
        AppCtrl.prototype.downloadAifPdf = function () {
            var title = this.currentFramework ? this.currentFramework.name : null;
            var fileName = "AMEC Measurement Framework" + (title ? ' - ' + title : '');
            if (getEntireDom && downloadPDF) {
                var opts = {
                    document_type: 'pdf',
                    document_content: getEntireDom(title),
                    name: fileName,
                    javascript: false,
                    test: false
                };
                downloadPDF(opts, 'UmPbAOzv3fSfgTsHLZV');
            }
        };
        AppCtrl.prototype.registerNewUser = function (form) {
            if (!form.$valid)
                return;
            this.hideLoginBox();
        };
        AppCtrl.prototype.extractPasswordParams = function (url) {
            var split = url.indexOf("?");
            if (split > -1) {
                var argString = url.substr(split + 1);
                var args = argString.split("&").map(function (s) {
                    var kv = s.split("=");
                    return { key: decodeURIComponent(kv[0]).toLowerCase(), value: decodeURIComponent(kv[1]) };
                });
                var key = void 0, email = void 0;
                for (var i = 0; i < args.length; i++) {
                    var kv = args[i];
                    if (kv.key === "key")
                        key = kv.value;
                    if (kv.key === "login")
                        email = kv.value;
                }
                if (key && email) {
                    return { key: key, email: email };
                }
            }
            return {};
        };
        return AppCtrl;
    }());
    AppCtrl.$inject = ["$scope", "$interval", "$sce", "$location", "userRepository", "viewService"];
    aif.AppCtrl = AppCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var AccountViewCtrl = (function () {
        function AccountViewCtrl($scope, userRepository, vs) {
            this.$scope = $scope;
            this.userRepository = userRepository;
            this.vs = vs;
            this.title = "Your Account";
            this.user = null;
            this.createMessage = "Use the fields below create a new framework.";
            this.colors = ["red", "yellow", "green", "light_blue", "dark_blue", "purple"];
            this.frameworkInEdit = null;
            this.loadingFramework = false;
            this.init();
        }
        AccountViewCtrl.prototype.getColorClass = function (prefix, index) {
            if (index === void 0) { index = 0; }
            if (index > this.colors.length - 1)
                index = index % this.colors.length;
            return prefix + "-" + this.colors[index] + " ";
        };
        AccountViewCtrl.prototype.init = function () {
            this.title = this.vs.getCopyForKey('AC_TTL', 'Your Account');
            if (!this.userRepository.currentUser) {
                this.vs.showLogin();
                return;
            }
            this.user = this.userRepository.currentUser;
            this.user.frameworks.forEach(function (f) { return f.selected = false; });
            if (this.user.hasExistingFrameworks()) {
                this.createMessage = "...or create a new framework.";
            }
            this.setTitle(this.vs.accountDisplayRoute);
        };
        AccountViewCtrl.prototype.logout = function () {
            this.closeView();
            this.vs.showLoading();
            this.userRepository.logout().then(function (b) {
                if (b) {
                    //this.$window.location.href = "";
                    window.location.href = window.location.href;
                }
            });
        };
        AccountViewCtrl.prototype.setTitle = function (displayRoute) {
            switch (displayRoute) {
                case aif.AccountDisplayRoute.FromLogin:
                    this.title = this.vs.getCopyForKey('AC_ATL_L', 'Log in successful');
                    break;
                case aif.AccountDisplayRoute.FromSave:
                    this.title = this.vs.getCopyForKey('AC_ATL_S', 'Save framework');
                    break;
                case aif.AccountDisplayRoute.FromViewAccount:
                default:
                    // do nothing
                    break;
            }
        };
        AccountViewCtrl.prototype.closeView = function () {
            this.user.frameworks.forEach(function (f) { return f.selected = false; });
            this.user.frameworks.forEach(function (f) { return f.flaggedDelete = false; });
            this.vs.resetView();
        };
        AccountViewCtrl.prototype.loadSelectedFramework = function () {
            var _this = this;
            if (this.user && this.frameworkIsSelected()) {
                this.loadingFramework = true;
                var selected = this.user.frameworks.filter(function (f) { return f.selected; })[0];
                this.userRepository.loadFramework(selected.id).then(function (r) {
                    if (r.success) {
                        _this.loadingFramework = false;
                        _this.closeView();
                    }
                    else {
                    }
                });
            }
        };
        AccountViewCtrl.prototype.showCreateFramework = function () {
            this.vs.showCreate(this.user.hasExistingFrameworks());
        };
        AccountViewCtrl.prototype.frameworkIsSelected = function () {
            return this.user.frameworks.some(function (f) { return f.selected; });
        };
        AccountViewCtrl.prototype.deleteFramework = function ($event, framework) {
            this.userRepository.deleteFramework(framework.id).then(function (s) {
                if (!s) {
                    framework.flaggedDelete = false;
                    //TODO: message failure
                }
            });
            $event.preventDefault();
        };
        AccountViewCtrl.prototype.toggleSelectFramework = function (framework) {
            if (framework.selected) {
                framework.selected = false;
            }
            else {
                this.user.frameworks.forEach(function (f) { return f.selected = false; });
                framework.selected = true;
            }
        };
        AccountViewCtrl.prototype.toggleFlagDeleteFramework = function ($event, framework) {
            framework.flaggedDelete = !framework.flaggedDelete;
        };
        AccountViewCtrl.prototype.editFramework = function (framework) {
            this.userRepository.tempFramework = framework;
            this.vs.showCreateFramework(aif.AccountDisplayRoute.FromEdit, false);
        };
        return AccountViewCtrl;
    }());
    AccountViewCtrl.$inject = ["$scope", "userRepository", "viewService"];
    aif.AccountViewCtrl = AccountViewCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var LoginCtrl = (function () {
        function LoginCtrl(vs, userRepository) {
            this.vs = vs;
            this.userRepository = userRepository;
            this.loginFailure = false;
            this.loginMessage = null;
            this.showNeedMessage = false;
            this.waiting = false;
            this.init();
        }
        LoginCtrl.prototype.init = function () {
            if (this.vs.accountDisplayRoute == aif.AccountDisplayRoute.FromSave) {
                this.showNeedMessage = true;
            }
        };
        LoginCtrl.prototype.login = function (form) {
            var _this = this;
            if (form) {
                if (!form.$valid)
                    return;
                form.$setPristine();
                form.$setUntouched();
            }
            else {
                return;
            }
            this.waiting = true;
            this.userRepository.login(this.email, this.password, this.vs.accountDisplayRoute == aif.AccountDisplayRoute.FromSave).then(function (r) {
                _this.waiting = false;
                if (!r.success) {
                    _this.loginFailure = true;
                    if (r.message) {
                        _this.loginMessage = r.message;
                    }
                    else {
                        _this.loginMessage = _this.vs.getCopyForKey("LGN_SCS", "Error contacting server");
                    }
                }
                else {
                    _this.loginFailure = false;
                    _this.loginMessage = _this.vs.getCopyForKey("LGN_SCS", "Login successful loading...");
                    _this.vs.showLoading();
                    window.location.href = window.location.href;
                }
            }).catch(function (r) {
                _this.waiting = false;
                _this.loginFailure = true;
                _this.loginMessage = r.message;
            });
        };
        LoginCtrl.prototype.switchToRegister = function () {
            var route = this.vs.accountDisplayRoute == aif.AccountDisplayRoute.FromSave ? this.vs.accountDisplayRoute : null;
            this.vs.showRegister(route);
        };
        LoginCtrl.prototype.showForgottenDetails = function () {
            this.vs.showForgottenDetails();
        };
        return LoginCtrl;
    }());
    LoginCtrl.$inject = ["viewService", "userRepository"];
    aif.LoginCtrl = LoginCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var UserScreensCtrl = (function () {
        function UserScreensCtrl($scope, vs, userRepository) {
            this.$scope = $scope;
            this.vs = vs;
            this.userRepository = userRepository;
            this.init();
        }
        UserScreensCtrl.prototype.init = function () {
            console.log("dfe");
        };
        return UserScreensCtrl;
    }());
    UserScreensCtrl.$inject = ["$scope", "viewService", "userRepository"];
    aif.UserScreensCtrl = UserScreensCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var AifHttpInterceptor = (function () {
        function AifHttpInterceptor() {
        }
        //public static $inject = ["$injector"];
        AifHttpInterceptor.prototype.request = function (config) {
            if (config.url.indexOf('admin-ajax') > -1 || config.url.indexOf('wp-login') > -1) {
                config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' },
                    config.transformRequest = function (obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    };
            }
            else {
                if (config.url.indexOf('wp-json') > -1) {
                    config.headers = { 'Content-Type': 'application/json',
                        'X-WP-Nonce': ajax_auth_object.rest_nonce };
                }
            }
            return config;
        };
        AifHttpInterceptor.factory = function () {
            return function () { return new AifHttpInterceptor(); };
        };
        return AifHttpInterceptor;
    }());
    aif.AifHttpInterceptor = AifHttpInterceptor;
})(aif || (aif = {}));
/// <reference path='../libs/jquery/jquery.d.ts' />
/// <reference path='../libs/angular/angular.d.ts' />
/// <reference path='../libs/angular/angular-cookies.d.ts' />
/// <reference path='models/AifData.ts' />
/// <reference path='models/WorkflowInput.ts' />
/// <reference path='models/WorkflowStep.ts' />
/// <reference path='models/WorkflowRow.ts' />
/// <reference path='models/AifUser.ts' />
/// <reference path='models/AifFramework.ts' />
/// <reference path='interfaces/IUserRepository.ts' />
/// <reference path='interfaces/IFrameworkRepository.ts' />
/// <reference path='interfaces/IAifService.ts' />
/// <reference path="services/ViewService.ts" />
/// <reference path="services/UserRepository.ts" />
/// <reference path="services/FrameworkRepository.ts" />
/// <reference path="services/AifService.ts" />
/// <reference path="directives/AccountDirectives.ts" />
/// <reference path="controllers/FrameworkCtrl.ts" />
/// <reference path="controllers/RegisterCtrl.ts" />
/// <reference path="controllers/ResetPasswordCtrl.ts" />
/// <reference path="controllers/InputTileCtrl.ts" />
/// <reference path="controllers/CreateFrameworkCtrl.ts" />
/// <reference path="controllers/FrameworkSummaryCtrl.ts" />
/// <reference path="controllers/InputGridCtrl.ts" />
/// <reference path="controllers/SaveAsCtrl.ts" />
/// <reference path="controllers/AppCtrl.ts" />
/// <reference path="controllers/AccountViewCtrl.ts" />
/// <reference path="controllers/LoginCtrl.ts" />
/// <reference path="controllers/UserScreensCtrl.ts" />
/// <reference path="services/AifHttpInterceptor.ts" /> 
/// <reference path="_all.ts" />
/**
 * The main Aif app module.
 *
 * @type {angular.Module}
 */
var aif;
(function (aif_1) {
    'use strict';
    var aif = angular.module('aif', ['ngCookies'])
        .service('userRepository', aif_1.UserRepository)
        .service('frameworkRepository', aif_1.FrameworkRepository)
        .service('aifService', aif_1.AifService)
        .service('viewService', aif_1.ViewService)
        .controller('appCtrl', aif_1.AppCtrl)
        .controller('accountViewCtrl', aif_1.AccountViewCtrl)
        .controller('frameworkCtrl', aif_1.FrameworkCtrl)
        .controller('createFrameworkCtrl', aif_1.CreateFrameworkCtrl)
        .controller('loginCtrl', aif_1.LoginCtrl)
        .controller('saveAsCtrl', aif_1.SaveAsCtrl)
        .controller('registerCtrl', aif_1.RegisterCtrl)
        .controller('forgotPasswordCtrl', aif_1.ForgotPasswordCtrl)
        .controller('resetPasswordCtrl', aif_1.ResetPasswordCtrl)
        .controller('frameworkSummaryCtrl', aif_1.FrameworkSummaryCtrl)
        .controller('userScreensCtrl', aif_1.UserScreensCtrl)
        .controller('listInputTileCtrl', aif_1.ListInputTileCtrl)
        .controller('inputGridCtrl', aif_1.InputGridCtrl)
        .directive('aifLoginScreen', aif_1.AifLoginScreen.factory())
        .directive('aifAccountScreen', aif_1.AifAccountScreen.factory())
        .directive('aifCreateFwScreen', aif_1.AifCreateFwScreen.factory())
        .directive('aifSaveAsScreen', aif_1.AifSaveAsScreen.factory())
        .directive('aifRegisterScreen', aif_1.AifRegisterScreen.factory())
        .directive('aifForgotPassword', aif_1.AifForgotPassword.factory())
        .directive('aifResetPassword', aif_1.AifResetPassword.factory())
        .directive('aifFrameworkSummary', aif_1.AifFrameworkSummary.factory())
        .directive('aifListInputTile', aif_1.AifListInputTile.factory())
        .directive('aifUserScreens', aif_1.AifUserScreens.factory())
        .directive('aifInputGrid', aif_1.AifInputGrid.factory())
        .directive('aifLoadingSpinner', aif_1.AifLoadingSpinner.factory())
        .directive('aifRegisterReminder', aif_1.AifRegisterReminder.factory())
        .config(['$httpProvider', function (_$httpProvider) {
            _$httpProvider.interceptors.push(aif_1.AifHttpInterceptor.factory());
        }]);
    //.directive('todoBlur', todoBlur)
    //.directive('todoFocus', todoFocus)
    //.directive('todoEscape', todoEscape)
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AccountService = (function () {
        function AccountService() {
        }
        return AccountService;
    }());
    aif.AccountService = AccountService;
})(aif || (aif = {}));
//# sourceMappingURL=build.js.map