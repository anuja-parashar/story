export const GenralConfig = {
    nav_tabs: [
        { title: 'Overview', url: 'overview' },
        { title: 'KYC', url: 'kyc' },
        //{ title: 'Insured Details', url: 'insured_details' },
        { title: 'Health', url: 'health' },
        { title: 'Finance', url: 'finance' },
        { title: 'Profile Insights', url: 'profile-insights' },
        { title: 'AQI', url: 'aqi' },
        { title: 'Risk Insights', url: 'risk-insights' },
        { title: 'Weather Trends', url: 'weather-trends' },
        { title: 'Weather Trends', url: 'weather-trends' },
        { title: 'Weather Trends', url: 'weather-trends' },
        { title: 'Social', url: 'social' },
        { title: 'Application Form', url: 'application-form' },
        { title: 'COVID Questionnaire', url: 'covid-questionnaire' }
    ],
    navigationRoute: [
        {
            path: '/applications/new', opened: false, title: 'New Applications', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [
                { path: '/applications/queue/dialer', title: 'Dialer Queue', icon: 'asp-view-grid', class: '' },
                { path: '/applications/queue/pending', title: 'Pending Queue', icon: 'asp-view-grid', class: '' },
                { path: '/applications/queue/processing', title: 'Processing Queue', icon: 'asp-view-grid', class: '' },
            ]
        },
        {
            path: '/medical/doc-status', opened: false, title: 'Medical Pending', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [
                { path: '/medical/doc-status', title: 'Medical document status', icon: 'asp-view-grid', class: '' },
                { path: '/medical/telemer', title: 'TeleMER', icon: 'asp-view-grid', class: '' },
            ]
        },
        { path: '/applications/underwriting', opened: false, title: 'Application Underwriting', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },
        { path: '/applications/processed', opened: false, title: 'Application Processed', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },
        { path: '/pending-for-approval', opened: false, title: 'Pending for Approval', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },
        { path: '/applications/rejected', opened: false, title: 'Applicants Rejected', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },
        { path: '/earlyclaims', opened: false, title: 'Early Claims', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },
        { path: '/reports-analytics', opened: false, title: 'Insights Dashboard', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },
        { path: '/reports-analytics-new', opened: false, title: 'report Dashboard', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },
        { path: '/reports-ml', opened: false, title: 'report ML', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },
        { path: '/covid-insights', opened: false, title: 'Covid Insights', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },

        { path: '/connector', opened: false, title: 'Data Connector', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },
        { path: '/integration', opened: false, title: 'Integration', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },
        { path: '/rules', opened: false, title: 'Rules', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },
        { path: '/product', opened: false, title: 'Products', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },
        { path: '/workflow', opened: false, title: 'Workflow', icon: 'asp-view-grid', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },
        { path: '/setting', opened: false, title: 'Setting', icon: 'asp-settings', class: '', new_value: '', selected: true, isEdit: false, subDropdown: [] },
    ],
    overviewTabs: {
        aditya: [
            { title: 'Overview', url: 'overview' },
            { title: 'KYC', url: 'kyc' },
         // { title: 'Insured Details', url: 'insured_details', isEdit: false, new_value: '', selected: true },
           // { title: 'Insured Details', url: 'insured_details' },
         //   { title: 'Health', url: 'health' },
            { title: 'Finance', url: 'finance' },
            { title: 'Mortality & Sanitation', url: 'mortality-sanitation' }, // mortality, sanitation
            { title: 'Risk & fraud', url: 'risk-fraud' },// proflie , risk & fraud
            { title: 'Environment', url: 'environment' }, // aqi & weather
            { title: 'Social', url: 'social' },
            { title: 'Early Claim', url: 'early-claim' },
            { title: 'COVID Ques.', url: 'covid-questionnaire' },
            { title: 'App Form', url: 'application-form' },
            { title: 'Renewals', url: 'renewal' }
        ],
        icici: [
            { title: 'Overview', url: 'overview' },
            { title: 'KYC', url: 'kyc' },
            { title: 'Health', url: 'health' },
            { title: 'Finance', url: 'finance' },
            { title: 'Profile Insights', url: 'profile-insights' },
            { title: 'AQI', url: 'aqi' },
            { title: 'Risk Insights', url: 'risk-insights' },
            { title: 'Weather Trends', url: 'weather-trends' },
            { title: 'Social', url: 'social' }
        ],
        bharti: [
            { title: 'Overview', url: 'overview' },
            { title: 'KYC', url: 'kyc' },
            { title: 'Health', url: 'health' },
            { title: 'Finance', url: 'finance' },
            { title: 'Profile Insights', url: 'profile-insights' },
            { title: 'AQI', url: 'aqi' },
            { title: 'Risk Insights', url: 'risk-insights' },

            { title: 'Social', url: 'social' }
        ],
    },
    overviewTab: [
        { title: 'Overview', url: 'overview', isEdit: false, new_value: '', selected: true },
      
        { title: 'KYC', url: 'kyc', isEdit: false, new_value: '', selected: true },
///{  title: 'Insured Details', url: 'insured_details', isEdit: false, new_value: '', selected: true },
        { title: 'Health', url: 'health', isEdit: false, new_value: '', selected: true },
        { title: 'Finance', url: 'finance', isEdit: false, new_value: '', selected: true },
        { title: 'Mortality & Sanitation', url: 'mortality-sanitation', selected: true, isEdit: false, new_value: '' }, // mortality, sanitation
        { title: 'Risk & fraud', url: 'risk-fraud', isEdit: false, new_value: '', selected: true },// proflie , risk & fraud
        { title: 'Environment', url: 'environment', isEdit: false, new_value: '', selected: true }, // aqi & weather
        { title: 'Social', url: 'social', isEdit: false, new_value: '', selected: true },
        { title: 'Early Claim', url: 'early-claim', isEdit: false, new_value: '', selected: true },
        { title: 'COVID Ques.', url: 'covid-questionnaire', isEdit: false, new_value: '', selected: true },
        { title: 'App Form', url: 'application-form', isEdit: false, new_value: '', selected: true },
        { title: 'UW Worksheet', url: 'underwriting-worksheet', isEdit: false, new_value: '', selected: true },
        // { title: 'Elitmas', url: 'elitmas', isEdit: false, new_value: '', selected: true },
        // { title: 'IIb', url: 'iib', isEdit: false, new_value: '', selected: true },
        // { title: 'DRC', url: 'drc', isEdit: false, new_value: '', selected: true },
        // { title: 'Renewals', url: 'renewal', isEdit: false, new_value: '', selected: true },
        // { title: 'NRI Ques.', url: 'nri-questionnaire', isEdit: false, new_value: '', selected: true },
        // { title: 'Previous Policy', url: 'previous-policy', isEdit: false, new_value: '', selected: true }
    ],
    overviewTab_health: [
      { title: 'Overview', url: 'overview', isEdit: false, new_value: '', selected: true },
    
      { title: 'KYC', url: 'kyc', isEdit: false, new_value: '', selected: true },
      {  title: 'Insured Details', url: 'insured_details', isEdit: false, new_value: '', selected: true },
      { title: 'Health', url: 'health', isEdit: false, new_value: '', selected: true },
      { title: 'Finance', url: 'finance', isEdit: false, new_value: '', selected: true },
      { title: 'Mortality & Sanitation', url: 'mortality-sanitation', selected: true, isEdit: false, new_value: '' }, // mortality, sanitation
      { title: 'Risk & fraud', url: 'risk-fraud', isEdit: false, new_value: '', selected: true },// proflie , risk & fraud
      { title: 'Environment', url: 'environment', isEdit: false, new_value: '', selected: true }, // aqi & weather
      { title: 'Social', url: 'social', isEdit: false, new_value: '', selected: true },
      { title: 'Early Claim', url: 'early-claim', isEdit: false, new_value: '', selected: true },
      { title: 'COVID Ques.', url: 'covid-questionnaire', isEdit: false, new_value: '', selected: true },
      { title: 'App Form', url: 'application-form', isEdit: false, new_value: '', selected: true },
      // { title: 'Elitmas', url: 'elitmas', isEdit: false, new_value: '', selected: true },
      // { title: 'IIb', url: 'iib', isEdit: false, new_value: '', selected: true },
      // { title: 'DRC', url: 'drc', isEdit: false, new_value: '', selected: true },
      // { title: 'Renewals', url: 'renewal', isEdit: false, new_value: '', selected: true },
      // { title: 'NRI Ques.', url: 'nri-questionnaire', isEdit: false, new_value: '', selected: true },
      // { title: 'Previous Policy', url: 'previous-policy', isEdit: false, new_value: '', selected: true }
  ],
    overviewTabAxa: [
        { title: 'Overview', url: 'overview', isEdit: false, new_value: '', selected: true },
        { title: 'KYC', url: 'kyc', isEdit: false, new_value: '', selected: true },
      //  { title: 'Insured Details', url: 'insured_details', isEdit: false, new_value: '', selected: true },
        { title: 'Health', url: 'health', isEdit: false, new_value: '', selected: true },
        { title: 'Finance', url: 'finance', isEdit: false, new_value: '', selected: true },
        { title: 'Mortality & Sanitation', url: 'mortality-sanitation', selected: true, isEdit: false, new_value: '' }, // mortality, sanitation
        { title: 'Risk & fraud', url: 'risk-fraud', isEdit: false, new_value: '', selected: true },// proflie , risk & fraud
        { title: 'Environment', url: 'environment', isEdit: false, new_value: '', selected: true }, // aqi & weather
        { title: 'Social', url: 'social', isEdit: false, new_value: '', selected: true },
        { title: 'Early Claim', url: 'early-claim', isEdit: false, new_value: '', selected: true },
        { title: 'RCU Report', url: 'rcu-report', isEdit: false, new_value: '', selected: true },
        { title: 'UW Worksheet', url: 'uw-worksheet', isEdit: false, new_value: '', selected: true },
    ],
    overviewTabUsa: [
        { title: 'Overview', url: 'overview', isEdit: false, new_value: '', selected: true },
        { title: 'KYC', url: 'kyc', isEdit: false, new_value: '', selected: true },
        { title: 'Health', url: 'health', isEdit: false, new_value: '', selected: false },
        { title: 'Finance', url: 'finance', isEdit: false, new_value: '', selected: false },
        // { title: 'Mortality & Sanitation', url: 'mortality-sanitation', selected: true, isEdit: false, new_value: '' }, // mortality, sanitation
        // { title: 'Risk & fraud', url: 'risk-fraud', isEdit: false, new_value: '', selected: true },// proflie , risk & fraud
        { title: 'Environment', url: 'environment', isEdit: false, new_value: '', selected: true }, // aqi & weather
        { title: 'Social', url: 'social', isEdit: false, new_value: '', selected: true },
        // { title: 'Early Claim', url: 'early-claim', isEdit: false, new_value: '', selected: true },
        { title: 'Wearable Data', url: 'health-app', isEdit: false, new_value: '', selected: true },
        { title: 'App Form', url: 'application-form', isEdit: false, new_value: '', selected: true },
        // { title: 'Renewals', url: 'renewal', isEdit: false, new_value: '', selected: true }
    ],
    rawOverviewTab: [
        { title: 'Overview', url: 'overview', isEdit: false, new_value: '' },
        { title: 'KYC', url: 'kyc', isEdit: false, new_value: '' },
        { title: 'Health', url: 'health', isEdit: false, new_value: '' },
        { title: 'Finance', url: 'finance', isEdit: false, new_value: '' },
        { title: 'Mortality & Sanitation', url: 'mortality-sanitation', isEdit: false, new_value: '' }, // mortality, sanitation
        { title: 'Risk & fraud', url: 'risk-fraud', isEdit: false, new_value: '' },// proflie , risk & fraud
        { title: 'Environment', url: 'environment', isEdit: false, new_value: '' }, // aqi & weather
        { title: 'Social', url: 'social', isEdit: false, new_value: '' },
        { title: 'Early Claim', url: 'early-claim', isEdit: false, new_value: '' },
        { title: 'COVID Ques.', url: 'covid-questionnaire', isEdit: false, new_value: '' },
        { title: 'App Form', url: 'application-form', isEdit: false, new_value: '' },
        { title: 'Renewals', url: 'renewal', isEdit: false, new_value: '' }
    ],
    altUWTabs: [
        // { title: 'Overview', url: 'overview' },
        // { title: 'Digital', url: 'digital' },
        // { title: 'Finance', url: 'bureau' },
        // { title: 'Environment', url: 'environment' }, // aqi & weather
        // { title: 'Mortality & Sanitation', url: 'mortality-sanitation' }, // mortality, sanitation
        // { title: 'Risk & fraud', url: 'risk-fraud' },// proflie , risk & fraud
        // { title: 'Analytics', url: 'analytics' },// proflie , risk & fraud

        { title: 'Overview', url: 'overview' },      
        { title: 'UW Worksheet', url: 'underwriting-worksheet' },
        { title: 'KYC', url: 'kyc' },
        { title: 'Health', url: 'health' },
        // { title: 'Finance', url: 'finance' },
        { title: 'Mortality & Sanitation', url: 'mortality-sanitation' }, // mortality, sanitation
        { title: 'Risk & fraud', url: 'risk-fraud' },// proflie , risk & fraud
        // { title: 'Environment', url: 'environment' }, // aqi & weather
        // { title: 'Social', url: 'social' },
        // { title: 'Early Claim', url: 'early-claim' },
        { title: 'PIVC', url: 'pivc' },
        { title: 'Proposal Form', url: 'proposal-form' },
    ],
    RDSNavTabs: [
        { title: 'Financial Rules', url: 'fin_doc' },
        { title: 'Product rules', url: 'product_basic_rules' },
        { title: 'Ins Pdt cat rules', url: 'ins_pdt_cat_rules' },
        { title: 'Business Rules', url: 'b_rules' },
        { title: 'Lab Rules', url: 'lab' },
        { title: 'Medical Rules', url: 'medical_rules' }
    ],
    in: {
        overviewTabs: {
            aditya: [
                { title: 'Overview', url: 'overview' },
                { title: 'KYC', url: 'kyc' },
               //{ title: 'Insured Details', url: 'insured_details' },
                { title: 'Health', url: 'health' },
                { title: 'Finance', url: 'finance' },
                { title: 'Mortality & Sanitation', url: 'mortality-sanitation' }, // mortality, sanitation
                { title: 'Risk & fraud', url: 'risk-fraud' },// proflie , risk & fraud
                { title: 'Environment', url: 'environment' }, // aqi & weather
                { title: 'Social', url: 'social' },
                { title: 'Early Claim', url: 'early-claim' },
                { title: 'COVID Ques.', url: 'covid-questionnaire' },
                { title: 'App Form', url: 'application-form' },
                { title: 'Renewals', url: 'renewal' }
            ],
            icici: [
                { title: 'Overview', url: 'overview' },
                { title: 'KYC', url: 'kyc' },
                { title: 'Health', url: 'health' },
                { title: 'Finance', url: 'finance' },
                { title: 'Profile Insights', url: 'profile-insights' },
                { title: 'AQI', url: 'aqi' },
                { title: 'Risk Insights', url: 'risk-insights' },
                { title: 'Weather Trends', url: 'weather-trends' },
                { title: 'Social', url: 'social' }
            ],
            bharti: [
                { title: 'Overview', url: 'overview' },
                { title: 'KYC', url: 'kyc' },
                { title: 'Health', url: 'health' },
                { title: 'Finance', url: 'finance' },
                { title: 'Profile Insights', url: 'profile-insights' },
                { title: 'AQI', url: 'aqi' },
                { title: 'Risk Insights', url: 'risk-insights' },

                { title: 'Social', url: 'social' }
            ],
        },
        altUWTabs: {
            aditya: [
                { title: 'Risk', url: 'risk' },
                { title: 'Digital', url: 'digital' },
                { title: 'Location', url: 'location' },
                { title: 'Bureau', url: 'bureau' },
                { title: 'Environment', url: 'environment' },
                { title: 'Mortality & Sanitation', url: 'mortality-sanitation' },
                { title: 'Activities', url: 'activities' },
                { title: 'Insights', url: 'insights' },
                { title: 'Fraud', url: 'fraud' }
            ],
            icici: [
                { title: 'Risk', url: 'risk' },
                { title: 'Digital', url: 'digital' },
                { title: 'Location', url: 'location' },
                { title: 'Bureau', url: 'bureau' },
                { title: 'Environment', url: 'environment' },
                { title: 'Mortality & Sanitation', url: 'mortality-sanitation' },
                { title: 'Activities', url: 'activities' },
                { title: 'Insights', url: 'insights' },
                { title: 'Fraud', url: 'fraud' }
            ],
            bharti: [
                { title: 'Risk', url: 'risk' },
                { title: 'Digital', url: 'digital' },
                { title: 'Location', url: 'location' },
                { title: 'Bureau', url: 'bureau' },
                { title: 'Environment', url: 'environment' },
                { title: 'Mortality & Sanitation', url: 'mortality-sanitation' },
                { title: 'Activities', url: 'activities' },
                { title: 'Insights', url: 'insights' },
                { title: 'Fraud', url: 'fraud' }
            ],
        },
        navigationRoute: [
            {
                path: '/applications/new', opened: false, title: 'New Applications', icon: 'asp-view-grid', class: '', subDropdown: [
                    { path: '/applications/queue/dialer', title: 'Dialer Queue', icon: 'asp-view-grid', class: '' },
                    { path: '/applications/queue/pending', title: 'Pending Queue', icon: 'asp-view-grid', class: '' },
                    { path: '/applications/queue/processing', title: 'Processing Queue', icon: 'asp-view-grid', class: '' },
                ]
            },
            {
                path: '/medical/doc-status', opened: false, title: 'Medical Pending', icon: 'asp-view-grid', class: '', subDropdown: [
                    { path: '/medical/doc-status', title: 'Medical document status', icon: 'asp-view-grid', class: '' },
                    { path: '/medical/telemer', title: 'TeleMER', icon: 'asp-view-grid', class: '' },
                ]
            },
            { path: '/applications/underwriting', opened: false, title: 'Application Underwriting', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/earlyclaims', opened: false, title: 'Early Claims', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/applications/processed', opened: false, title: 'Application Processed', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/applications/rejected', opened: false, title: 'Applicants Rejected', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/reports-analytics', opened: false, title: 'Insights Dashboard', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/test', opened: false, title: 'Pending for Approval', icon: 'asp-view-grid', class: '', subDropdown: [] },

            { path: '/connector', opened: false, title: 'Data Connector', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/integration', opened: false, title: 'Integration', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/test', opened: false, title: 'Rules', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/product', opened: false, title: 'Products', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/workflow', opened: false, title: 'Workflow', icon: 'asp-view-grid', class: '', subDropdown: [] },
        ],
        overviewTab: {
            decisionBox: {
                display: true,
                headline: 'Decision',
                color: 'back-maroon'
            },
            predictedDecisionBox: {
                display: true,
                headline: 'Predicted Decision Category',
                color: 'back-maroon'
            },
            decisionFeedbackBox: {
                display: true,
                headline: 'Decision Feedback',
                color: 'back-maroon'
            },
            confidenceBox: {
                display: true,
                headline: 'Confidence',
                color: 'back-maroon'
            },
            deDuplicationBox: {
                display: true,
                headline: 'De- Duplication / Past Data',
                color: 'back-maroon'
            },
            existingInsuranceBox: {
                display: true,
                headline: 'Existing Insurance',
                color: 'back-maroon'
            },
            productBox: {
                display: true,
                headline: 'Product',
                color: 'back-maroon',
            },
            scoresBox: {
                display: true,
                headline: 'Scores',
                color: 'back-maroon',
            },
            demographicsBox: {
                display: true,
                headline: 'Demographics',
                color: 'back-maroon',
            },
            digitalBox: {
                display: true,
                headline: 'Digital',
                color: 'back-maroon',
            },
            kycBox: {
                display: true,
                headline: 'KYC',
                color: 'back-maroon',
            },
            predictiveInsightsBox: {
                display: true,
                headline: 'Predictive Insights',
                color: 'back-maroon',
            },
            environmentalBox: {
                display: true,
                headline: 'Environmental',
                color: 'back-maroon',
            },
            financialInformationBox: {
                display: true,
                headline: 'Financial Information',
                color: 'back-maroon',
            },
            earlyClaimsBox: {
                display: true,
                headline: 'Early Claims',
                color: 'back-maroon',
            },
            medicalBox: {
                display: true,
                headline: 'Medical',
                color: 'back-maroon',
            },

        }
    },
    usa: {
        overviewTabs: {
            aditya: [
                { title: 'Overview', url: 'overview' },
                { title: 'social security', url: 'kyc' },
                { title: 'Health', url: 'health' },
                { title: 'Finance', url: 'finance' },
                { title: 'Mortality & Sanitation', url: 'mortality-sanitation' }, // mortality, sanitation
                { title: 'Risk & fraud', url: 'risk-fraud' },// proflie , risk & fraud
                { title: 'Environment', url: 'environment' }, // aqi & weather
                { title: 'Social', url: 'social' },
                { title: 'Early Claim', url: 'early-claim' },
                { title: 'COVID Ques.', url: 'covid-questionnaire' },
                { title: 'App Form', url: 'application-form' },
                { title: 'Renewals', url: 'renewal' }
            ],
            icici: [
                { title: 'Overview', url: 'overview' },
                { title: 'KYC', url: 'kyc' },
                { title: 'Health', url: 'health' },
                { title: 'Finance', url: 'finance' },
                { title: 'Profile Insights', url: 'profile-insights' },
                { title: 'AQI', url: 'aqi' },
                { title: 'Risk Insights', url: 'risk-insights' },
                { title: 'Weather Trends', url: 'weather-trends' },
                { title: 'Social', url: 'social' }
            ],
            bharti: [
                { title: 'Overview', url: 'overview' },
                { title: 'KYC', url: 'kyc' },
                { title: 'Health', url: 'health' },
                { title: 'Finance', url: 'finance' },
                { title: 'Profile Insights', url: 'profile-insights' },
                { title: 'AQI', url: 'aqi' },
                { title: 'Risk Insights', url: 'risk-insights' },

                { title: 'Social', url: 'social' }
            ],
        },
        altUWTabs: {
            aditya: [
                { title: 'Risk', url: 'risk' },
                { title: 'Digital', url: 'digital' },
                { title: 'Location', url: 'location' },
                { title: 'Bureau', url: 'bureau' },
                { title: 'Environment', url: 'environment' },
                { title: 'Mortality & Sanitation', url: 'mortality-sanitation' },
                { title: 'Activities', url: 'activities' },
                { title: 'Insights', url: 'insights' },
                { title: 'Fraud', url: 'fraud' }
            ],
            icici: [
                { title: 'Risk', url: 'risk' },
                { title: 'Digital', url: 'digital' },
                { title: 'Location', url: 'location' },
                { title: 'Bureau', url: 'bureau' },
                { title: 'Environment', url: 'environment' },
                { title: 'Mortality & Sanitation', url: 'mortality-sanitation' },
                { title: 'Activities', url: 'activities' },
                { title: 'Insights', url: 'insights' },
                { title: 'Fraud', url: 'fraud' }
            ],
            bharti: [
                { title: 'Risk', url: 'risk' },
                { title: 'Digital', url: 'digital' },
                { title: 'Location', url: 'location' },
                { title: 'Bureau', url: 'bureau' },
                { title: 'Environment', url: 'environment' },
                { title: 'Mortality & Sanitation', url: 'mortality-sanitation' },
                { title: 'Activities', url: 'activities' },
                { title: 'Insights', url: 'insights' },
                { title: 'Fraud', url: 'fraud' }
            ],
        },
        navigationRoute: [
            {
                path: '/applications/new', opened: false, title: 'New Applications', icon: 'asp-view-grid', class: '', subDropdown: [
                    { path: '/applications/queue/dialer', title: 'Dialer Queue', icon: 'asp-view-grid', class: '' },
                    { path: '/applications/queue/pending', title: 'Pending Queue', icon: 'asp-view-grid', class: '' },
                    { path: '/applications/queue/processing', title: 'Processing Queue', icon: 'asp-view-grid', class: '' },
                ]
            },
            { path: '/applications/underwriting', opened: false, title: 'Application Underwriting', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/applications/processed', opened: false, title: 'Application Processed', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/applications/rejected', opened: false, title: 'Applicants Rejected', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/reports-analytics', opened: false, title: 'Insights Dashboard', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/earlyclaims', opened: false, title: 'Early Claims', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/test', opened: false, title: 'Pending for Approval', icon: 'asp-view-grid', class: '', subDropdown: [] },
            {
                path: '/medical/doc-status', opened: false, title: 'Medical Pending', icon: 'asp-view-grid', class: '', subDropdown: [
                    { path: '/medical/doc-status', title: 'Medical document status', icon: 'asp-view-grid', class: '' },
                    { path: '/medical/telemer', title: 'TeleMER', icon: 'asp-view-grid', class: '' },
                ]
            },
            { path: '/connector', opened: false, title: 'Data Connector', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/integration', opened: false, title: 'Integration', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/test', opened: false, title: 'Rules', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/product', opened: false, title: 'Products', icon: 'asp-view-grid', class: '', subDropdown: [] },
            { path: '/workflow', opened: false, title: 'Workflow', icon: 'asp-view-grid', class: '', subDropdown: [] },
        ],
        overviewTab: {
            decisionBox: {
                display: true,
                headline: 'Decision',
                color: 'back-maroon'
            },
            predictedDecisionBox: {
                display: true,
                headline: 'Predicted Decision Category',
                color: 'back-maroon'
            },
            decisionFeedbackBox: {
                display: true,
                headline: 'Decision Feedback',
                color: 'back-maroon'
            },
            confidenceBox: {
                display: true,
                headline: 'Confidence',
                color: 'back-maroon'
            },
            deDuplicationBox: {
                display: true,
                headline: 'De- Duplication / Past Data',
                color: 'back-maroon'
            },
            existingInsuranceBox: {
                display: true,
                headline: 'Existing Insurance',
                color: 'back-maroon'
            },
            productBox: {
                display: true,
                headline: 'Product',
                color: 'back-maroon',
            },
            scoresBox: {
                display: true,
                headline: 'Scores',
                color: 'back-maroon',
            },
            demographicsBox: {
                display: true,
                headline: 'Demographics',
                color: 'back-maroon',
            },
            digitalBox: {
                display: true,
                headline: 'Digital',
                color: 'back-maroon',
            },
            kycBox: {
                display: true,
                headline: 'KYC',
                color: 'back-maroon',
            },
            predictiveInsightsBox: {
                display: true,
                headline: 'Predictive Insights',
                color: 'back-maroon',
            },
            environmentalBox: {
                display: true,
                headline: 'Environmental',
                color: 'back-maroon',
            },
            financialInformationBox: {
                display: true,
                headline: 'Financial Information',
                color: 'back-maroon',
            },
            earlyClaimsBox: {
                display: true,
                headline: 'Early Claims',
                color: 'back-maroon',
            },
            medicalBox: {
                display: true,
                headline: 'Medical',
                color: 'back-maroon',
            },

        }
    },
    client: {
        aditya: 'Aditya Birla Life',
        bharti: 'Bharti AXA Life',
        icici: 'ICICI Prudential Life',
        maxlife: 'Maxlife',
        hdfc: 'HDFC Life',
        tata: 'TATA AIA Life',
        kotak: 'Kotak Life',
    },
    intigration: [
        {
            source: "Govt. API's",
            slug: "govt",
            describe: "Select From List",
            apiList: [
                {
                    source: "NSDL",
                    describe: "",
                },
                {
                    source: "IIB",
                    describe: "",
                },
                {
                    source: "CERSAI",
                    describe: "",
                },
                {
                    source: "IndiaStack",
                    describe: "",
                },
                {
                    source: "NDHM",
                    describe: "",
                },
                {
                    source: "UIDAI",
                    describe: "",
                },
            ]
        }, {
            source: "Credit API's",
            slug: "credit",
            describe: "Select From List",
            apiList: [
                {
                    source: "CRIF",
                    describe: "",
                },
                {
                    source: "Experian",
                    describe: "",
                },
                {
                    source: "CIBIL",
                    describe: "",
                }
            ]
        }, {
            source: "TeleMER",
            slug: "telemer",
            describe: "Select From List",
            apiList: [
                {
                    source: "DocsApp",
                    describe: "",
                },
                {
                    source: "QuicSolv",
                    describe: "",
                },
                {
                    source: "1MG",
                    describe: "",
                }
            ]
        }, {
            source: "Third Party Apps",
            slug: "third",
            describe: "Select From List",
            apiList: [
                {
                    source: "DocsApp",
                    describe: "",
                },
                {
                    source: "1MG",
                    describe: "",
                },
                {
                    source: "Litmus",
                    describe: "",
                },
                {
                    source: "Wellthy Therapeutics",
                    describe: "",
                },
                {
                    source: "Wysa",
                    describe: "",
                },
                {
                    source: "Plaid",
                    describe: "",
                },
                {
                    source: "Yodlee",
                    describe: "",
                }
            ]
        }, {
            source: "Device",
            slug: "device",
            describe: "Select From List",
            apiList: [
                {
                    source: "Health Device",
                    describe: "",
                }
            ]
        }, {
            source: "Reinsurance",
            slug: "reinsurance",
            describe: "Select From List",
            apiList: [
                {
                    source: "MunichRe",
                    describe: "",
                },
                {
                    source: "SwissRe",
                    describe: "",
                }
            ]
        }
    ],
    productList: [
        {
            source: "Life Insurance",
            slug: "life-insurance",
            describe: "Select From List",
            subList: [
                {
                    source: "Term Insurance",
                    slug: "term-insurance",
                    describe: "",
                    apiList: [
                        {
                            source: "I Protect",
                            slug: "protect",
                            describe: "",
                        },
                        {
                            source: "Suvidha",
                            slug: "suvidha",
                            describe: "",
                        },
                    ]
                },
                {
                    source: "Investment",
                    slug: "investment",
                    describe: "",
                },
                {
                    source: "Retirement",
                    slug: "retirement",
                    describe: "",
                }
            ]
        }, {
            source: "",
            slug: "credit",
            describe: "Select From List",
            apiList: [
                {
                    source: "CRIF",
                    describe: "",
                },
                {
                    source: "Experian",
                    describe: "",
                },
                {
                    source: "CIBIL",
                    describe: "",
                }
            ]
        }, {
            source: "",
            slug: "telemer",
            describe: "Select From List",
            apiList: [
                {
                    source: "DocsApp",
                    describe: "",
                },
                {
                    source: "1MG",
                    describe: "",
                }
            ]
        }
    ],
    dataConnector: [
        {
            source: "Social",
            slug: "social",
            describe: "Select From List",
            apiList: [
                {
                    source: "Facebook",
                    describe: "",
                },
                {
                    source: "Twitter",
                    describe: "",
                },
                {
                    source: "Instagram",
                    describe: "",
                }
            ]
        }, {
            source: "Environment",
            slug: "environment",
            describe: "Select From List",
            apiList: [
                {
                    source: "Weather",
                    describe: "",
                },
                {
                    source: "AQI",
                    describe: "",
                }
            ]
        }, {
            source: "Location",
            slug: "location",
            describe: "Select From List",
            apiList: [
                {
                    source: "Sanitation",
                    describe: "",
                },
                {
                    source: "Mortality",
                    describe: "",
                }
            ]
        }
    ],
    workflow: [
        {
            source: "Embedded Partner",
            slug: "embedded-partner",
            describe: "Select From List",
            selected: false,
            subList: [
                {
                    source: "Ecommerce",
                    describe: "Select From List",
                    slug: "ecommerce",
                    apiList: [
                        {
                            source: 'Amazon'
                        },
                        {
                            source: 'Flipkart'
                        }
                    ]
                },
                {
                    source: "Pharmacy",
                    describe: "Select From List",
                    slug: "pharmacy",
                    apiList: [
                        {
                            source: '1mg'
                        }
                    ]
                },
                {
                    source: "Travel",
                    describe: "Select From List",
                    slug: "travel",
                    apiList: [
                        {
                            source: 'make my trip'
                        }
                    ]
                }
            ]
        }, {
            source: "Website",
            slug: "website",
            describe: "Select From List",
            selected: false,
            subList: [
                {
                    source: "Ecommerce",
                    describe: "Select From List",
                    slug: "ecommerce",
                    apiList: [
                        {
                            source: 'Amazon'
                        },
                        {
                            source: 'Flipkart'
                        }
                    ]
                },
                {
                    source: "Pharmacy",
                    describe: "Select From List",
                    slug: "pharmacy",
                    apiList: [
                        {
                            source: '1mg'
                        }
                    ]
                },
                {
                    source: "Travel",
                    describe: "Select From List",
                    slug: "travel",
                    apiList: [
                        {
                            source: 'make my trip'
                        }
                    ]
                }
            ]
        }, {
            source: "App",
            slug: "app",
            describe: "Select From List",
            selected: false,
            subList: [
                {
                    source: "Ecommerce",
                    describe: "Select From List",
                    slug: "ecommerce",
                    apiList: [
                        {
                            source: 'Amazon'
                        },
                        {
                            source: 'Flipkart'
                        }
                    ]
                },
                {
                    source: "Pharmacy",
                    describe: "Select From List",
                    slug: "pharmacy",
                    apiList: [
                        {
                            source: '1mg'
                        }
                    ]
                },
                {
                    source: "Travel",
                    describe: "Select From List",
                    slug: "travel",
                    apiList: [
                        {
                            source: 'make my trip'
                        }
                    ]
                }
            ]
        }
    ],
    healthData: {
        "status": "success",
        "data": {
            document_list: [
                "aps",
                "diagnostic",
                "medical-record"
            ],
            document_data: {
                "aps": [
                    {
                        "id": 2,
                        "raw_data": {
                            "data": {
                                "Name": "David Anderson",
                                "Social Security #": "427876356",
                                "Occupation": "Engineer",
                                "Employer": "Wipro",
                                "Date": "30/05/2021",
                                "Date of birth": "05/01/1976",
                                "Sypmtoms from ": "Illness",
                                "Work related condition": "No",
                                "Initial date of treatment": "08/03/2018",
                                "Most recent date of treatment": "04/09/2020",
                                "Advise to cease occupation": "No",
                                "Primary ICD9 ": "426.1",
                                "Secondary ICD9": "404.01",
                                "Symptoms": "Hypertension and blockage of artery",
                                "Objective findings": "Mild coronary artery disease with blockage in the range of 20-30%. Mild heart blockage",
                                "Recommended treatment plan": "Need attention on risk factors for coronary disease(cholesterol, diabetes, smoking, blood pressure) Healthy lifestyle changes like exercise, weight loss and dietary modifications required.Prevent progressive heart blockage and stabilize",
                                "CPT4 ": "NA"
                            }
                        },
                        "file_field": "https://ausis.ai/assets/files/APS.pdf",
                        "file_path": "",
                        "file_base64": "",
                        "status": "Success"
                    }
                ],
                "medical-record": [
                    {
                        "id": 4,
                        "raw_data": {
                            "data": {
                                "Patient information": "David Anderson",
                                "Phone number": "1-898-878-XXXX",
                                "Address": "123 North State, St.Lansing.Ml 48918-0000",
                                "Birth Date": "05/01/1976",
                                "Weight": "176 Lb",
                                "Height": "5'11”",
                                "In emergency contact": "Cordi Ewert",
                                "Home Phone": "(26) 459-73XX",
                                "Chicken Pox": "Not Any",
                                "Measles": "Not Any",
                                "Hepatitis B vaccination": "Yes",
                                "List of medical problems": "blockage in heart detected in 2018, regular medication undergoing, but the patient is stable and is not at a risk",
                                "List of medication taken regularly": "Statins, Clopidogrel"
                            }
                        },
                        "file_field": "https://ausis.ai/assets/files/Medical-record.pdf",
                        "file_base64": ""
                    }
                ],
                "diagnostic": [
                    {
                        "id": 1,
                        "raw_data": {
                            "data": {
                                "demographics_part": {
                                    "Name": "David Anderson",
                                    "Address": "123 University, Michigan, ST 12345",
                                    "Age/Sex": "73/M",
                                    "DOB": "1/5/1976"
                                },
                                "detail_part": {
                                    "Patient ID": "987654321",
                                    "SPEC #": "223456",
                                    "Provider": "University Medical Center, Dept. of Pathology",
                                    "Report Date/Time": " 02/05/2021 16:40",
                                    "Ordering Dr": "Smith, Peter MD Physician ",
                                    "Copy for": "Smith, Jane MD",
                                    "Collection Date/Time": "5/2/2021 14:30:00",
                                    "Received Date/Time": "5/2/2021 14:50:00",
                                    "SPECIMEN": "Whole blood",
                                    "ORDERED": "Complete Blood Count and White Blood Cell Differential"
                                },
                                "risk_part": {
                                    "risk_score": 17,
                                    "health_score": 83,
                                    "factor": 1,
                                    "narration": [
                                        {
                                            "risk": "low",
                                            "value": "5.26"
                                        },
                                        {
                                            "risk": "med",
                                            "value": "0.0"
                                        },
                                        {
                                            "risk": "high",
                                            "value": "15.79"
                                        }
                                    ],
                                    "test_report": {
                                        "na": {
                                            "count": 0,
                                            "tests": []
                                        },
                                        "low": {
                                            "count": 1,
                                            "tests": [
                                                "hdl-cholesterol"
                                            ]
                                        },
                                        "med": {
                                            "count": 0,
                                            "tests": []
                                        },
                                        "high": {
                                            "count": 3,
                                            "tests": [
                                                "ldl cholesterol",
                                                "vldl cholesterol",
                                                "chol/hdl ratio"
                                            ]
                                        },
                                        "normal": {
                                            "count": 15,
                                            "tests": [
                                                "fasting blood sugar",
                                                "blood urea",
                                                "serum.creatinine",
                                                "total bilirubin",
                                                "direct bilirubin",
                                                "indirect bilirubin",
                                                "alkaline phosphatase",
                                                "sgpt(alt)",
                                                "sgot(ast)",
                                                "total protein",
                                                "albumin",
                                                "globulin",
                                                "ag ratio",
                                                "total cholesterol",
                                                "triglycerides"
                                            ]
                                        }
                                    }
                                },
                                "diagnostic_centre_name": "super speciality hospital",
                                "tests_part": {
                                    "2be091d4-1f66-49e4-bb5f-c1a9c127516c-0": {
                                        "blood_tests": {
                                            "White Blood Cell (WBC)": {
                                                "value": 6.9,
                                                "units": "K/mcL",
                                                "range": {
                                                    "max": 10.8,
                                                    "test_max": 500,
                                                    "min": 4.8
                                                },
                                                "risk": "normal",
                                                "recheck": "true"
                                            },
                                            "Red Blood Cell (RBC) ": {
                                                "value": 1.8,
                                                "units": "L M/mcL",
                                                "range": {
                                                    "max": 6.1,
                                                    "test_max": 3,
                                                    "min": 4.7
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Hemoglobin (HB/Hgb)": {
                                                "value": 6.5,
                                                "units": "L** g/dL",
                                                "range": {
                                                    "max": 18,
                                                    "test_max": 3,
                                                    "min": 14
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Hematocrit (HCT)": {
                                                "value": 19.5,
                                                "units": "L** %",
                                                "range": {
                                                    "max": 52,
                                                    "test_max": 3,
                                                    "min": 42
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Mean Cell Volume (MCV)": {
                                                "value": 109.6,
                                                "units": "H fL ",
                                                "range": {
                                                    "max": 100,
                                                    "test_max": 3,
                                                    "min": 80
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Mean Cell Hemoglobin (MCH) ": {
                                                "value": 36.5,
                                                "units": "H pg ",
                                                "range": {
                                                    "max": 32,
                                                    "test_max": 3,
                                                    "min": 27
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Mean Cell Hb Conc (MCHC) ": {
                                                "value": 33.3,
                                                "units": "g/dL",
                                                "range": {
                                                    "max": 36,
                                                    "test_max": 3,
                                                    "min": 32.0
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Red Cell Dist Width (RDW) ": {
                                                "value": 16,
                                                "units": "h %",
                                                "range": {
                                                    "max": 14.5,
                                                    "test_max": 3,
                                                    "min": 11.5
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Platelet count": {
                                                "value": 180,
                                                "units": "K/mcL",
                                                "range": {
                                                    "max": 450,
                                                    "test_max": 3,
                                                    "min": 150
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Mean Platelet Volume ": {
                                                "value": 7.9,
                                                "units": "fL",
                                                "range": {
                                                    "max": 11.0,
                                                    "test_max": 3,
                                                    "min": 7.5
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Neutrophil (Neut)": {
                                                "value": 50,
                                                "units": "%",
                                                "range": {
                                                    "max": 73,
                                                    "test_max": 3,
                                                    "min": 33
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Lymphocyte (Lymph) ": {
                                                "value": 36,
                                                "units": "%",
                                                "range": {
                                                    "max": 52,
                                                    "test_max": 3,
                                                    "min": 13
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Monocyte (Mono) ": {
                                                "value": 8,
                                                "units": "%",
                                                "range": {
                                                    "max": 10,
                                                    "test_max": 3,
                                                    "min": 0
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Eosinophil (Eos) ": {
                                                "value": 5,
                                                "units": "%",
                                                "range": {
                                                    "max": 5,
                                                    "test_max": 3,
                                                    "min": 0
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Basophil (Baso) ": {
                                                "value": 1,
                                                "units": "%",
                                                "range": {
                                                    "max": 2,
                                                    "test_max": 3,
                                                    "min": 0
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Neutrophil, Absolute ": {
                                                "value": 3.5,
                                                "units": "K/mcL",
                                                "range": {
                                                    "max": 7.8,
                                                    "test_max": 3,
                                                    "min": 1.8
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Lymphocyte, Absolute ": {
                                                "value": 2.5,
                                                "units": "K/mcL",
                                                "range": {
                                                    "max": 4.8,
                                                    "test_max": 3,
                                                    "min": 1.0
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Monocyte, Absolute ": {
                                                "value": 0.6,
                                                "units": "K/mcL",
                                                "range": {
                                                    "max": 0.8,
                                                    "test_max": 3,
                                                    "min": 0.0
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Eosinophil, Absolute ": {
                                                "value": 0.4,
                                                "units": "K/mcL",
                                                "range": {
                                                    "max": 0.6,
                                                    "test_max": 3,
                                                    "min": 0.0
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            },
                                            "Basophil, Absolute ": {
                                                "value": 0.1,
                                                "units": "K/mcL",
                                                "range": {
                                                    "max": 0.2,
                                                    "test_max": 3,
                                                    "min": 0.0
                                                },
                                                "risk": "normal",
                                                "recheck": false
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "file_field": "https://ausis.ai/assets/files/CBC-notes.pdf"
                    }
                ]
            },
            summary_data: {
                "raw_data": {},
                "health_score": 87.0,
                "health_score_summary": "",
                "mer_score": 7.0,
                "mer_score_summary": {},
                "diagnostic_score": 9.0,
                "diagnostic_score_summary": {}
            },
            medical_question_data: [
                {
                    "question": "Chest pain, low or high blood pressure, high cholesterol, heart attack, heart murmur or other heart disorders?",
                    "answer": "No",
                    "question_source": "application_form"
                },
                {
                    "question": "Cancer, tumour, abnormal growth, cyst, enlarged glands or enlarged lymph nodes?",
                    "answer": "No",
                    "question_source": "application_form"
                }
            ],
            medical_question_data_yes_part: null,
            substance_consumption: [],
            telemer: null
        }
    },
    "insurance-application": {
        "State of birth": "Michigan",
        "Social Security Number": "427876356",
        "Home address": "123 North State, St.Lansing.Ml 48918-0000",
        "email": "snriedel85@amail.com",
        "Lehal residency": "US",
        "Driver's license number": "D8767898",
        "Marital status": "M",
        "Insurer": "XX term plan",
        "Plan of insurance": "snriedel85",
        "Amount of insurance": "$500,000",
        "Death benefit option": "Level",
        "Payment method": "Direct Bill",
        "Payment mode": "Quarterly",
        "Send premium notice to ": "Insured",
        "Tobacco usage": "Never",
        "Gross annual income": "$ 130,000",
        "Total assets": "$ 1,000,000",
        "Total liabilities": "Total liabilities"
    },
    imageProcessed: {
        "data": {
            "app_no": "EA10651952",
            "processed_data": {
                "kyc": [
                    {
                        "id": 3,
                        "file_name": "EA10651952_000000000_111041_KYC_0.pdf",
                        "pg_no": "1",
                        "status": "failure",
                        "file_field": "zip_processing/EA10651952/EA10651952_000000000_111041_KYC_0__pg1.jpg",
                        "cls_type": "aadhar_back"
                    },
                    {
                        "id": 2,
                        "file_name": "EA10651952_000000000_111042_KYC_0.pdf",
                        "pg_no": "1",
                        "status": "failure",
                        "file_field": "zip_processing/EA10651952/EA10651952_000000000_111042_KYC_0__pg1.jpg",
                        "cls_type": "pan"
                    }
                ],
                "financial": [
                    {
                        "id": 2,
                        "file_name": "EA10651952_000000000_111209_NEFT CLIENT CONSENT_0.pdf",
                        "pg_no": "1",
                        "status": "failure",
                        "file_field": "zip_processing/EA10651952/EA10651952_000000000_111209_NEFT_CLIENT_CONSENT_0__pg1.jpg",
                        "cls_type": "cheque"
                    },
                    {
                        "id": 1,
                        "file_name": "EA10651952_000000000_121102_UW NON-MEDICAL REQUIRMENT_0.pdf",
                        "pg_no": "1",
                        "status": "failure",
                        "file_field": "zip_processing/EA10651952/EA10651952_000000000_121102_UW_NON-MEDICAL_REQUIRMENT_0.pdf",
                        "cls_type": "bank_statement"
                    },
                    {
                        "id": 3,
                        "file_name": "EA10651952_008217192_121019_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                        "pg_no": "2",
                        "status": "failure",
                        "file_field": "zip_processing/EA10651952/EA10651952_008217192_121019_UW_MEDICAL_BILLABLE_REQUIREMENT_0__pg2.jpg",
                        "cls_type": "cheque"
                    }
                ],
                "health": [
                    {
                        "id": 7,
                        "file_name": "EA10651952_008217192_121016_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                        "pg_no": "1",
                        "status": "failure",
                        "file_field": "zip_processing/EA10651952/EA10651952_008217192_121016_UW_MEDICAL_BILLABLE_REQUIREMENT_0__pg1.jpg",
                        "cls_type": "diagnostic"
                    },
                    {
                        "id": 8,
                        "file_name": "EA10651952_008217192_121018_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                        "pg_no": "1",
                        "status": "failure",
                        "file_field": "zip_processing/EA10651952/EA10651952_008217192_121018_UW_MEDICAL_BILLABLE_REQUIREMENT_0__pg1.jpg",
                        "cls_type": "diagnostic"
                    },
                    {
                        "id": 9,
                        "file_name": "EA10651952_008217192_121019_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                        "pg_no": "1",
                        "status": "failure",
                        "file_field": "zip_processing/EA10651952/EA10651952_008217192_121019_UW_MEDICAL_BILLABLE_REQUIREMENT_0__pg1.jpg",
                        "cls_type": "ecg"
                    },
                    {
                        "id": 4,
                        "file_name": "EA10651952_008217192_121020_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                        "pg_no": "1",
                        "status": "failure",
                        "file_field": "zip_processing/EA10651952/EA10651952_008217192_121020_UW_MEDICAL_BILLABLE_REQUIREMENT_0__pg1.jpg",
                        "cls_type": "mer_1"
                    },
                    {
                        "id": 5,
                        "file_name": "EA10651952_008217192_121020_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                        "pg_no": "2",
                        "status": "failure",
                        "file_field": "zip_processing/EA10651952/EA10651952_008217192_121020_UW_MEDICAL_BILLABLE_REQUIREMENT_0__pg2.jpg",
                        "cls_type": "mer_2"
                    },
                    {
                        "id": 6,
                        "file_name": "EA10651952_008217192_121020_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                        "pg_no": "3",
                        "status": "failure",
                        "file_field": "zip_processing/EA10651952/EA10651952_008217192_121020_UW_MEDICAL_BILLABLE_REQUIREMENT_0__pg3.jpg",
                        "cls_type": "mer_3"
                    },
                    {
                        "id": 1,
                        "file_name": "EA10651952_008217192_121102_UW NON-MEDICAL REQUIRMENT_0.pdf",
                        "pg_no": "1",
                        "status": "failure",
                        "file_field": "zip_processing/EA10651952/EA10651952_008217192_121102_UW_NON-MEDICAL_REQUIRMENT_0__pg1.jpg",
                        "cls_type": "diagnostic"
                    },
                    {
                        "id": 2,
                        "file_name": "EA10651952_008217192_121102_UW NON-MEDICAL REQUIRMENT_0.pdf",
                        "pg_no": "2",
                        "status": "failure",
                        "file_field": "zip_processing/EA10651952/EA10651952_008217192_121102_UW_NON-MEDICAL_REQUIRMENT_0__pg2.jpg",
                        "cls_type": "diagnostic"
                    },
                    {
                        "id": 3,
                        "file_name": "EA10651952_008217192_121118_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                        "pg_no": "1",
                        "status": "failure",
                        "file_field": "zip_processing/EA10651952/EA10651952_008217192_121118_UW_MEDICAL_BILLABLE_REQUIREMENT_0__pg1.jpg",
                        "cls_type": "diagnostic"
                    }
                ]
            },
            "av_applicant_files": [
                {
                    "id": 15,
                    "file_name": "EA10651952_000000000_111041_KYC_0.pdf",
                    "pg_no": 1,
                    "status": "failure",
                    "error": "unable to call the service api",
                    "type": "aadhar_back",
                    "insertion_datetime": "2022-02-15T05:59:07.922138Z"
                },
                {
                    "id": 13,
                    "file_name": "EA10651952_000000000_111042_KYC_0.pdf",
                    "pg_no": 1,
                    "status": "failure",
                    "error": "unable to call the service api",
                    "type": "pan",
                    "insertion_datetime": "2022-02-15T05:54:41.788458Z"
                },
                {
                    "id": 14,
                    "file_name": "EA10651952_000000000_111209_NEFT CLIENT CONSENT_0.pdf",
                    "pg_no": 1,
                    "status": "failure",
                    "error": "unable to call the service api",
                    "type": "cheque",
                    "insertion_datetime": "2022-02-15T05:56:54.835686Z"
                },
                {
                    "id": 12,
                    "file_name": "EA10651952_000000000_121102_UW NON-MEDICAL REQUIRMENT_0.pdf",
                    "pg_no": 1,
                    "status": "failure",
                    "error": "unable to call the service api",
                    "type": "bank_statement",
                    "insertion_datetime": "2022-02-15T05:52:28.517509Z"
                },
                {
                    "id": 9,
                    "file_name": "EA10651952_000000000_121210_PHOTOGRAPH_0.pdf",
                    "pg_no": 1,
                    "status": "failure",
                    "error": "face extraction API issue",
                    "type": "photo",
                    "insertion_datetime": "2022-02-15T05:45:47.115838Z"
                },
                {
                    "id": 2,
                    "file_name": "EA10651952_000000000_121212_CUSTOMER DECLARATION FORM_0.pdf",
                    "pg_no": null,
                    "status": "Failure",
                    "error": "doc_classifier service issue",
                    "type": "unknown",
                    "insertion_datetime": "2022-02-15T05:21:37.430599Z"
                },
                {
                    "id": 10,
                    "file_name": "EA10651952_008217192_121016_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                    "pg_no": 1,
                    "status": "failure",
                    "error": "unable to call the service api",
                    "type": "diagnostic",
                    "insertion_datetime": "2022-02-15T05:48:00.228322Z"
                },
                {
                    "id": 11,
                    "file_name": "EA10651952_008217192_121018_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                    "pg_no": 1,
                    "status": "failure",
                    "error": "unable to call the service api",
                    "type": "diagnostic",
                    "insertion_datetime": "2022-02-15T05:50:13.411521Z"
                },
                {
                    "id": 16,
                    "file_name": "EA10651952_008217192_121019_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                    "pg_no": 1,
                    "status": "failure",
                    "error": "unable to call the service api",
                    "type": "ecg",
                    "insertion_datetime": "2022-02-15T06:01:23.166624Z"
                },
                {
                    "id": 17,
                    "file_name": "EA10651952_008217192_121019_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                    "pg_no": 2,
                    "status": "failure",
                    "error": "unable to call the service api",
                    "type": "cheque",
                    "insertion_datetime": "2022-02-15T06:03:34.172363Z"
                },
                {
                    "id": 6,
                    "file_name": "EA10651952_008217192_121020_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                    "pg_no": 1,
                    "status": "failure",
                    "error": "unable to call the service api",
                    "type": "mer_1",
                    "insertion_datetime": "2022-02-15T05:30:27.628884Z"
                },
                {
                    "id": 7,
                    "file_name": "EA10651952_008217192_121020_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                    "pg_no": 2,
                    "status": "failure",
                    "error": "unable to call the service api",
                    "type": "mer_2",
                    "insertion_datetime": "2022-02-15T05:32:38.719769Z"
                },
                {
                    "id": 8,
                    "file_name": "EA10651952_008217192_121020_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                    "pg_no": 3,
                    "status": "failure",
                    "error": "unable to call the service api",
                    "type": "mer_3",
                    "insertion_datetime": "2022-02-15T05:34:49.747241Z"
                },
                {
                    "id": 3,
                    "file_name": "EA10651952_008217192_121102_UW NON-MEDICAL REQUIRMENT_0.pdf",
                    "pg_no": 1,
                    "status": "failure",
                    "error": "unable to call the service api",
                    "type": "diagnostic",
                    "insertion_datetime": "2022-02-15T05:23:52.339648Z"
                },
                {
                    "id": 4,
                    "file_name": "EA10651952_008217192_121102_UW NON-MEDICAL REQUIRMENT_0.pdf",
                    "pg_no": 2,
                    "status": "failure",
                    "error": "unable to call the service api",
                    "type": "diagnostic",
                    "insertion_datetime": "2022-02-15T05:26:03.406581Z"
                },
                {
                    "id": 5,
                    "file_name": "EA10651952_008217192_121118_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                    "pg_no": 1,
                    "status": "failure",
                    "error": "unable to call the service api",
                    "type": "diagnostic",
                    "insertion_datetime": "2022-02-15T05:28:14.505959Z"
                }
            ],
            "images": {
                "./zip_images/data": {
                    "EA10651952_008217192": {
                        "datetime": "02/15/2022::13:44:00 PM",
                        "files_list": [
                            "EA10651952_000000000_121212_CUSTOMER DECLARATION FORM_0.pdf",
                            "EA10651952_008217192_121102_UW NON-MEDICAL REQUIRMENT_0.pdf",
                            "EA10651952_008217192_121118_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                            "EA10651952_008217192_121020_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                            "EA10651952_000000000_121210_PHOTOGRAPH_0.pdf",
                            "EA10651952_008217192_121016_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                            "EA10651952_008217192_121018_UW MEDICAL BILLABLE REQUIREMENT_0.pdf",
                            "EA10651952_000000000_121102_UW NON-MEDICAL REQUIRMENT_0.pdf",
                            "EA10651952_000000000_111042_KYC_0.pdf",
                            "EA10651952_000000000_111209_NEFT CLIENT CONSENT_0.pdf",
                            "EA10651952_000000000_111041_KYC_0.pdf",
                            "EA10651952_008217192_121019_UW MEDICAL BILLABLE REQUIREMENT_0.pdf"
                        ]
                    }
                },
                "./zip_images/failure": {},
                "./zip_images/processed": {}
            },
            "av_api_logs_status": [
                {
                    "id": 51,
                    "type": "cheque",
                    "url": "http://35.207.255.237:5503/financialDocsReader/cheque/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T06:03:34.082782Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5503): Max retries exceeded with url: /financialDocsReader/cheque/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e3a5ae7f0>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 50,
                    "type": "ecg",
                    "url": "http://35.207.255.237:5507/healthDocsReader/ecg_info/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T06:01:23.010802Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5507): Max retries exceeded with url: /healthDocsReader/ecg_info/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e39bb74e0>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 49,
                    "type": "doc_classifier",
                    "url": "http://119.81.202.27:5505/docClassifier/prod/",
                    "request_type": "post",
                    "status_code": "200",
                    "insertion_datetime": "2022-02-15T05:59:12.073523Z",
                    "json": "{\"res\": \"{\\\"data\\\":[{\\\"file_name\\\":\\\"EA10651952_008217192_121019_UWMEDICALBILLABLEREQUIREMENT_0.pdf\\\",\\\"child_file\\\":\"}"
                },
                {
                    "id": 48,
                    "type": "aadhar_back",
                    "url": "http://35.207.255.237:5504/kycReader/aadhar/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T05:59:07.842839Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5504): Max retries exceeded with url: /kycReader/aadhar/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e3a615c88>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 47,
                    "type": "doc_classifier",
                    "url": "http://119.81.202.27:5505/docClassifier/prod/",
                    "request_type": "post",
                    "status_code": "200",
                    "insertion_datetime": "2022-02-15T05:56:57.162789Z",
                    "json": "{\"res\": \"{\\\"data\\\":[{\\\"file_name\\\":\\\"EA10651952_000000000_111041_KYC_0.pdf\\\",\\\"child_file\\\":[{\\\"base64\\\":\\\"/9j/4AAQSkZJR\"}"
                },
                {
                    "id": 46,
                    "type": "cheque",
                    "url": "http://35.207.255.237:5503/financialDocsReader/cheque/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T05:56:54.722778Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5503): Max retries exceeded with url: /financialDocsReader/cheque/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e3a5ab588>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 45,
                    "type": "doc_classifier",
                    "url": "http://119.81.202.27:5505/docClassifier/prod/",
                    "request_type": "post",
                    "status_code": "200",
                    "insertion_datetime": "2022-02-15T05:54:43.518961Z",
                    "json": "{\"res\": \"{\\\"data\\\":[{\\\"file_name\\\":\\\"EA10651952_000000000_111209_NEFTCLIENTCONSENT_0.pdf\\\",\\\"child_file\\\":[{\\\"base64\\\":\"}"
                },
                {
                    "id": 44,
                    "type": "pan",
                    "url": "http://35.207.255.237:5504/kycReader/pan/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T05:54:41.606816Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5504): Max retries exceeded with url: /kycReader/pan/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e3a58e4a8>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 43,
                    "type": "doc_classifier",
                    "url": "http://119.81.202.27:5505/docClassifier/prod/",
                    "request_type": "post",
                    "status_code": "200",
                    "insertion_datetime": "2022-02-15T05:52:31.770199Z",
                    "json": "{\"res\": \"{\\\"data\\\":[{\\\"file_name\\\":\\\"EA10651952_000000000_111042_KYC_0.pdf\\\",\\\"child_file\\\":[{\\\"base64\\\":\\\"/9j/4AAQSkZJR\"}"
                },
                {
                    "id": 42,
                    "type": "bank_statement",
                    "url": "http://35.207.255.237:5503/financialDocsReader/bankStatement/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T05:52:28.482445Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5503): Max retries exceeded with url: /financialDocsReader/bankStatement/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e3a4c3550>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 41,
                    "type": "doc_classifier",
                    "url": "http://119.81.202.27:5505/docClassifier/prod/",
                    "request_type": "post",
                    "status_code": "200",
                    "insertion_datetime": "2022-02-15T05:50:17.951381Z",
                    "json": "{\"res\": \"{\\\"data\\\":[{\\\"file_name\\\":\\\"EA10651952_000000000_121102_UWNON-MEDICALREQUIRMENT_0.pdf\\\",\\\"child_file\\\":[{\\\"ba\"}"
                },
                {
                    "id": 40,
                    "type": "diagnostic",
                    "url": "http://35.207.255.237:5507/healthDocsReader/diagnosticReport/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T05:50:13.314869Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5507): Max retries exceeded with url: /healthDocsReader/diagnosticReport/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e39bac4e0>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 39,
                    "type": "doc_classifier",
                    "url": "http://119.81.202.27:5505/docClassifier/prod/",
                    "request_type": "post",
                    "status_code": "200",
                    "insertion_datetime": "2022-02-15T05:48:02.050834Z",
                    "json": "{\"res\": \"{\\\"data\\\":[{\\\"file_name\\\":\\\"EA10651952_008217192_121018_UWMEDICALBILLABLEREQUIREMENT_0.pdf\\\",\\\"child_file\\\":\"}"
                },
                {
                    "id": 38,
                    "type": "diagnostic",
                    "url": "http://35.207.255.237:5507/healthDocsReader/diagnosticReport/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T05:48:00.194320Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5507): Max retries exceeded with url: /healthDocsReader/diagnosticReport/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e39bb52e8>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 37,
                    "type": "doc_classifier",
                    "url": "http://119.81.202.27:5505/docClassifier/prod/",
                    "request_type": "post",
                    "status_code": "200",
                    "insertion_datetime": "2022-02-15T05:45:48.810495Z",
                    "json": "{\"res\": \"{\\\"data\\\":[{\\\"file_name\\\":\\\"EA10651952_008217192_121016_UWMEDICALBILLABLEREQUIREMENT_0.pdf\\\",\\\"child_file\\\":\"}"
                },
                {
                    "id": 33,
                    "type": "large_face_extract",
                    "url": "http://35.207.255.237:5502/match/photocrop/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T05:39:13.858845Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5502): Max retries exceeded with url: /match/photocrop/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e3afdfcc0>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 32,
                    "type": "face_extract",
                    "url": "http://35.207.255.237:5502/match/extract/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T05:37:02.790603Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5502): Max retries exceeded with url: /match/extract/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e3a6354a8>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 31,
                    "type": "doc_classifier",
                    "url": "http://119.81.202.27:5505/docClassifier/prod/",
                    "request_type": "post",
                    "status_code": "200",
                    "insertion_datetime": "2022-02-15T05:34:52.786177Z",
                    "json": "{\"res\": \"{\\\"data\\\":[{\\\"file_name\\\":\\\"EA10651952_000000000_121210_PHOTOGRAPH_0.pdf\\\",\\\"child_file\\\":[{\\\"base64\\\":\\\"/9j/4A\"}"
                },
                {
                    "id": 30,
                    "type": "mer_3",
                    "url": "http://35.207.255.237:5507/healthDocsReader/adityaMer/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T05:34:49.670898Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5507): Max retries exceeded with url: /healthDocsReader/adityaMer/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e39bb74e0>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 29,
                    "type": "mer_2",
                    "url": "http://35.207.255.237:5507/healthDocsReader/adityaMer/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T05:32:38.594770Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5507): Max retries exceeded with url: /healthDocsReader/adityaMer/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e39bb0cc0>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 28,
                    "type": "mer_1",
                    "url": "http://35.207.255.237:5507/healthDocsReader/adityaMer/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T05:30:27.522734Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5507): Max retries exceeded with url: /healthDocsReader/adityaMer/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e39bb9d30>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 27,
                    "type": "doc_classifier",
                    "url": "http://119.81.202.27:5505/docClassifier/prod/",
                    "request_type": "post",
                    "status_code": "200",
                    "insertion_datetime": "2022-02-15T05:28:17.623373Z",
                    "json": "{\"res\": \"{\\\"data\\\":[{\\\"file_name\\\":\\\"EA10651952_008217192_121020_UWMEDICALBILLABLEREQUIREMENT_0.pdf\\\",\\\"child_file\\\":\"}"
                },
                {
                    "id": 26,
                    "type": "diagnostic",
                    "url": "http://35.207.255.237:5507/healthDocsReader/diagnosticReport/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T05:28:14.403136Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5507): Max retries exceeded with url: /healthDocsReader/diagnosticReport/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e39bac3c8>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 25,
                    "type": "doc_classifier",
                    "url": "http://119.81.202.27:5505/docClassifier/prod/",
                    "request_type": "post",
                    "status_code": "200",
                    "insertion_datetime": "2022-02-15T05:26:05.023597Z",
                    "json": "{\"res\": \"{\\\"data\\\":[{\\\"file_name\\\":\\\"EA10651952_008217192_121118_UWMEDICALBILLABLEREQUIREMENT_0.pdf\\\",\\\"child_file\\\":\"}"
                },
                {
                    "id": 24,
                    "type": "diagnostic",
                    "url": "http://35.207.255.237:5507/healthDocsReader/diagnosticReport/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T05:26:03.330310Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5507): Max retries exceeded with url: /healthDocsReader/diagnosticReport/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e3afc56a0>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 23,
                    "type": "diagnostic",
                    "url": "http://35.207.255.237:5507/healthDocsReader/diagnosticReport/",
                    "request_type": "post",
                    "status_code": null,
                    "insertion_datetime": "2022-02-15T05:23:52.258845Z",
                    "json": "{\"error\": \"HTTPConnectionPool(host='35.207.255.237', port=5507): Max retries exceeded with url: /healthDocsReader/diagnosticReport/ (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f9e3af7e198>: Failed to establish a new connection: [Errno 110] Connection timed out',))__||__line_no: 158\", \"status_code\": null}"
                },
                {
                    "id": 22,
                    "type": "doc_classifier",
                    "url": "http://119.81.202.27:5505/docClassifier/prod/",
                    "request_type": "post",
                    "status_code": "200",
                    "insertion_datetime": "2022-02-15T05:21:42.305359Z",
                    "json": "{\"res\": \"{\\\"data\\\":[{\\\"file_name\\\":\\\"EA10651952_008217192_121102_UWNON-MEDICALREQUIRMENT_0.pdf\\\",\\\"child_file\\\":[{\\\"ba\"}"
                },
                {
                    "id": 21,
                    "type": "doc_classifier",
                    "url": "http://119.81.202.27:5505/docClassifier/prod/",
                    "request_type": "post",
                    "status_code": "500",
                    "insertion_datetime": "2022-02-15T05:21:40.193729Z",
                    "json": "{\"error\": \"\\\"Error Occurred\\\"\", \"status_code\": 500, \"file\": \"{'file_path': <_io.BufferedReader name='/home/acer/Documents/old_lapi_data/arti2/av_bfsi_controller/media/zip_processing/ad223304-6b79-4efa-bed7-63d6cb283fcb/EA10651952_008217192/EA10651952_000000000_121212_CUSTOMER DECLARATION FORM_0.pdf'>}\"}"
                }
            ]
        }
    },
    prodx: {},

    videoMer:{
            "data": {
              "general_info": {
                "proposal_number": "EA90457567",
                "date": "2022-09-20 12:22:48",
                "life_assured": "MR. SUBHASHCHAND JAIN",
                "id_details": "ADHAAR CARD   675795308920",
                "dob": "03 Mar 1961",
                "gender": "",
                "nominee_name": "VINEET JAIN",
                "nominee_dob": "12/2/1984",
                "contact_no": null,
                "address": null,
                "policy_id": null,
                "date_time_of_medical_verification": "2022-09-20 12:22:48"
              },
              "tabular_info": [
                {
                  "question": "Any history of chest pain, heart attack, palpitations, and breathlessness on exertion or irregular heart beat?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Hypertension or high blood pressure/high cholesterol?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "High blood sugar/ Diabetes",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Thyroid disorder or any other endocrine disorders",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Asthma, bronchitis, prolonged cough, tuberculosis (TB),any breathing difficulties or any other respiratory disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any psychiatric disorders like depression, anxiety or neurological symptoms like fits, epilepsy, stroke or recurrent headaches?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any blood disorder like anemia or thalassemia or any history of blood transfusion?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any disease or disorder of the digestive systems like stomach ulcers, gall stones, Jaundice, Hepatitis or liver cirrhosis?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any physical or mental disability or any congenital disease?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any form of cancer, tumour, cyst, or growth of any kind or enlarged lymph nodes?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any diseases related to genitourinary system like kidney, ureter and bladder such as Kidney failure, Kidney stones, blood or pus in urine or any disease?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Epilepsy, nervous disorder, multiple sclerosis, tremors, numbness, paralysis or psychiatric disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Eye, ear, nose or throat disorder, (Except use of spectacles)?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any physical disability or any congenital disease or arthritis or musculoskeletal disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you undergone any blood test or special test like ECG, TMT,",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "2D Echo, CT scan, MRI or angiography? Please specify date, reason for undergoing and Findings.",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Do you or your spouse has been tested positive or is under treatment for HIV / AIDS / Sexually transmitted diseases (e.g. syphilis, gonorrhea, etc.) ?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have any of your immediate family members been diagnosed with or died from Heart Attack, Coronary artery disease, Cancer, Diabetes, stroke, before age 60yr or any other familial inherited disease ?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you receiving any treatment /medication or has in the past\nreceived any treatment or undergone surgery/hospitalized for any medical condition /disability? If yes, Reason for medication and name of medicine?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you been off work due to illness or for a continuous period of more than 10 days during the last one year?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Beer/Wine/Hard Liquor",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Tobacco/Pan Masala/Gutkha",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Type",
                      "reflexQuestionAnswer": "TOBBACO"
                    },
                    {
                      "reflexQuestionName": "Quantity",
                      "reflexQuestionAnswer": "1PACKET"
                    },
                    {
                      "reflexQuestionName": "Frequency",
                      "reflexQuestionAnswer": "ONCE A WEEK"
                    },
                    {
                      "reflexQuestionName": "Since when",
                      "reflexQuestionAnswer": "4/5YEARS BACK"
                    }
                  ]
                },
                {
                  "question": "Any Other substance",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Cigarettes/Beedis/ Cigar",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "DO YOU HAVE SYMPTOMS LIKE FEVER/COUGH/BREATHLESS OR ARE/WERE YOU IN CONTACT WITH ANY CORONA VIRUS POSITIVE PERSON. and RETURNED FROM ABROAD , HAVE YOU TESTED\nPOSITIVE for covid-19 (IF ANY ANSWER YES, details)",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you or have you been in close contact with anyone who has been quarantined or who has been diagnosed with novel coronavirus (SARS-CoV-2/COVID-19) ? If yes, please provide details",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you ever been quarantined due to a possible exposure to novel coronavirus (SARSCoV2/COVID-19)? If yes, please provide dates and locations",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you been advised to be tested to rule in, or rule out, a diagnosis of novel coronavirus (SARSCoV-2/COVID-19)? Or, are you awaiting the result of a test which has already been submitted for the novel\ncoronavirus (SARS-CoV-2/COVID-19)",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you ever tested positive for the novel coronavirus (SARS-CoV- 2/COVID-19)? If yes, provide the date of positive diagnosis",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you experienced any of the following symptoms within the last 14 days? Fever ( Greater than 38C or 100.4 F), Cough, Shortness of breath, Malaise (flu-like tiredness), Rhinorrhea (mucus discharge from the nose), Sore throat, Gastro-intestinal symptoms such as nausea, vomiting and/or diarrhea If yes, to any of these, please indicate which and provide full information",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you currently in good health?Travel Declaration",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Remarks",
                      "reflexQuestionAnswer": "LA IS HEALTHY"
                    }
                  ]
                },
                {
                  "question": "Please provide your travel patterns over the past 14 days:COUNTRY CITY DATE ARRIVED DATE DEPARTED",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Please detail your intended future travel plans for the next 30 days:COUNTRY CITY DATE ARRIVAL INTENDED DURATION",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Remarks",
                      "reflexQuestionAnswer": "RAJASTHAN ON 23RD TO 27TH SEPT."
                    }
                  ]
                },
                {
                  "question": "Have you suffered or suffering from any other disease/ailment/habit not mentioned above?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Are you pregnant?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Have you ever visited a medical practitioner for any problems of breast / uterus / cervix etc.? If yes, please give details of the same",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Have you undergone any of these tests like mammogram, ultrasound, pap smear etc.?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any history of chest pain, heart attack, palpitations, and breathlessness on exertion or irregular heart beat?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Hypertension or high blood pressure/high cholesterol?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "High blood sugar/ Diabetes",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Thyroid disorder or any other endocrine disorders",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Asthma, bronchitis, prolonged cough, tuberculosis (TB),any breathing difficulties or any other respiratory disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any psychiatric disorders like depression, anxiety or neurological symptoms like fits, epilepsy, stroke or recurrent headaches?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any blood disorder like anemia or thalassemia or any history of blood transfusion?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any disease or disorder of the digestive systems like stomach ulcers, gall stones, Jaundice, Hepatitis or liver cirrhosis?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any physical or mental disability or any congenital disease?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any form of cancer, tumour, cyst, or growth of any kind or enlarged lymph nodes?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any diseases related to genitourinary system like kidney, ureter and bladder such as Kidney failure, Kidney stones, blood or pus in urine or any disease?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Epilepsy, nervous disorder, multiple sclerosis, tremors, numbness, paralysis or psychiatric disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Eye, ear, nose or throat disorder, (Except use of spectacles)?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any physical disability or any congenital disease or arthritis or musculoskeletal disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you undergone any blood test or special test like ECG, TMT,",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "2D Echo, CT scan, MRI or angiography? Please specify date, reason for undergoing and Findings.",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Do you or your spouse has been tested positive or is under treatment for HIV / AIDS / Sexually transmitted diseases (e.g. syphilis, gonorrhea, etc.) ?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have any of your immediate family members been diagnosed with or died from Heart Attack, Coronary artery disease, Cancer, Diabetes, stroke, before age 60yr or any other familial inherited disease ?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you receiving any treatment /medication or has in the past\nreceived any treatment or undergone surgery/hospitalized for any medical condition /disability? If yes, Reason for medication and name of medicine?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you been off work due to illness or for a continuous period of more than 10 days during the last one year?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Beer/Wine/Hard Liquor",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Tobacco/Pan Masala/Gutkha",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Type",
                      "reflexQuestionAnswer": "TOBBACO"
                    },
                    {
                      "reflexQuestionName": "Quantity",
                      "reflexQuestionAnswer": "1PACKET"
                    },
                    {
                      "reflexQuestionName": "Frequency",
                      "reflexQuestionAnswer": "ONCE A WEEK"
                    },
                    {
                      "reflexQuestionName": "Since when",
                      "reflexQuestionAnswer": "4/5YEARS BACK"
                    }
                  ]
                },
                {
                  "question": "Any Other substance",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Cigarettes/Beedis/ Cigar",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "DO YOU HAVE SYMPTOMS LIKE FEVER/COUGH/BREATHLESS OR ARE/WERE YOU IN CONTACT WITH ANY CORONA VIRUS POSITIVE PERSON. and RETURNED FROM ABROAD , HAVE YOU TESTED\nPOSITIVE for covid-19 (IF ANY ANSWER YES, details)",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you or have you been in close contact with anyone who has been quarantined or who has been diagnosed with novel coronavirus (SARS-CoV-2/COVID-19) ? If yes, please provide details",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you ever been quarantined due to a possible exposure to novel coronavirus (SARSCoV2/COVID-19)? If yes, please provide dates and locations",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you been advised to be tested to rule in, or rule out, a diagnosis of novel coronavirus (SARSCoV-2/COVID-19)? Or, are you awaiting the result of a test which has already been submitted for the novel\ncoronavirus (SARS-CoV-2/COVID-19)",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you ever tested positive for the novel coronavirus (SARS-CoV- 2/COVID-19)? If yes, provide the date of positive diagnosis",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you experienced any of the following symptoms within the last 14 days? Fever ( Greater than 38C or 100.4 F), Cough, Shortness of breath, Malaise (flu-like tiredness), Rhinorrhea (mucus discharge from the nose), Sore throat, Gastro-intestinal symptoms such as nausea, vomiting and/or diarrhea If yes, to any of these, please indicate which and provide full information",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you currently in good health?Travel Declaration",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Remarks",
                      "reflexQuestionAnswer": "LA IS HEALTHY"
                    }
                  ]
                },
                {
                  "question": "Please provide your travel patterns over the past 14 days:COUNTRY CITY DATE ARRIVED DATE DEPARTED",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Please detail your intended future travel plans for the next 30 days:COUNTRY CITY DATE ARRIVAL INTENDED DURATION",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Remarks",
                      "reflexQuestionAnswer": "RAJASTHAN ON 23RD TO 27TH SEPT."
                    }
                  ]
                },
                {
                  "question": "Have you suffered or suffering from any other disease/ailment/habit not mentioned above?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Are you pregnant?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Have you ever visited a medical practitioner for any problems of breast / uterus / cervix etc.? If yes, please give details of the same",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Have you undergone any of these tests like mammogram, ultrasound, pap smear etc.?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any history of chest pain, heart attack, palpitations, and breathlessness on exertion or irregular heart beat?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Hypertension or high blood pressure/high cholesterol?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "High blood sugar/ Diabetes",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Thyroid disorder or any other endocrine disorders",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Asthma, bronchitis, prolonged cough, tuberculosis (TB),any breathing difficulties or any other respiratory disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any psychiatric disorders like depression, anxiety or neurological symptoms like fits, epilepsy, stroke or recurrent headaches?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any blood disorder like anemia or thalassemia or any history of blood transfusion?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any disease or disorder of the digestive systems like stomach ulcers, gall stones, Jaundice, Hepatitis or liver cirrhosis?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any physical or mental disability or any congenital disease?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any form of cancer, tumour, cyst, or growth of any kind or enlarged lymph nodes?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any diseases related to genitourinary system like kidney, ureter and bladder such as Kidney failure, Kidney stones, blood or pus in urine or any disease?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Epilepsy, nervous disorder, multiple sclerosis, tremors, numbness, paralysis or psychiatric disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Eye, ear, nose or throat disorder, (Except use of spectacles)?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any physical disability or any congenital disease or arthritis or musculoskeletal disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you undergone any blood test or special test like ECG, TMT,",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "2D Echo, CT scan, MRI or angiography? Please specify date, reason for undergoing and Findings.",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Do you or your spouse has been tested positive or is under treatment for HIV / AIDS / Sexually transmitted diseases (e.g. syphilis, gonorrhea, etc.) ?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have any of your immediate family members been diagnosed with or died from Heart Attack, Coronary artery disease, Cancer, Diabetes, stroke, before age 60yr or any other familial inherited disease ?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you receiving any treatment /medication or has in the past\nreceived any treatment or undergone surgery/hospitalized for any medical condition /disability? If yes, Reason for medication and name of medicine?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you been off work due to illness or for a continuous period of more than 10 days during the last one year?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Beer/Wine/Hard Liquor",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Tobacco/Pan Masala/Gutkha",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Type",
                      "reflexQuestionAnswer": "TOBBACO"
                    },
                    {
                      "reflexQuestionName": "Quantity",
                      "reflexQuestionAnswer": "1PACKET"
                    },
                    {
                      "reflexQuestionName": "Frequency",
                      "reflexQuestionAnswer": "ONCE A WEEK"
                    },
                    {
                      "reflexQuestionName": "Since when",
                      "reflexQuestionAnswer": "4/5YEARS BACK"
                    }
                  ]
                },
                {
                  "question": "Any Other substance",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Cigarettes/Beedis/ Cigar",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "DO YOU HAVE SYMPTOMS LIKE FEVER/COUGH/BREATHLESS OR ARE/WERE YOU IN CONTACT WITH ANY CORONA VIRUS POSITIVE PERSON. and RETURNED FROM ABROAD , HAVE YOU TESTED\nPOSITIVE for covid-19 (IF ANY ANSWER YES, details)",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you or have you been in close contact with anyone who has been quarantined or who has been diagnosed with novel coronavirus (SARS-CoV-2/COVID-19) ? If yes, please provide details",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you ever been quarantined due to a possible exposure to novel coronavirus (SARSCoV2/COVID-19)? If yes, please provide dates and locations",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you been advised to be tested to rule in, or rule out, a diagnosis of novel coronavirus (SARSCoV-2/COVID-19)? Or, are you awaiting the result of a test which has already been submitted for the novel\ncoronavirus (SARS-CoV-2/COVID-19)",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you ever tested positive for the novel coronavirus (SARS-CoV- 2/COVID-19)? If yes, provide the date of positive diagnosis",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you experienced any of the following symptoms within the last 14 days? Fever ( Greater than 38C or 100.4 F), Cough, Shortness of breath, Malaise (flu-like tiredness), Rhinorrhea (mucus discharge from the nose), Sore throat, Gastro-intestinal symptoms such as nausea, vomiting and/or diarrhea If yes, to any of these, please indicate which and provide full information",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you currently in good health?Travel Declaration",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Remarks",
                      "reflexQuestionAnswer": "LA IS HEALTHY"
                    }
                  ]
                },
                {
                  "question": "Please provide your travel patterns over the past 14 days:COUNTRY CITY DATE ARRIVED DATE DEPARTED",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Please detail your intended future travel plans for the next 30 days:COUNTRY CITY DATE ARRIVAL INTENDED DURATION",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Remarks",
                      "reflexQuestionAnswer": "RAJASTHAN ON 23RD TO 27TH SEPT."
                    }
                  ]
                },
                {
                  "question": "Have you suffered or suffering from any other disease/ailment/habit not mentioned above?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Are you pregnant?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Have you ever visited a medical practitioner for any problems of breast / uterus / cervix etc.? If yes, please give details of the same",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Have you undergone any of these tests like mammogram, ultrasound, pap smear etc.?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any history of chest pain, heart attack, palpitations, and breathlessness on exertion or irregular heart beat?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Hypertension or high blood pressure/high cholesterol?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "High blood sugar/ Diabetes",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Thyroid disorder or any other endocrine disorders",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Asthma, bronchitis, prolonged cough, tuberculosis (TB),any breathing difficulties or any other respiratory disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any psychiatric disorders like depression, anxiety or neurological symptoms like fits, epilepsy, stroke or recurrent headaches?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any blood disorder like anemia or thalassemia or any history of blood transfusion?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any disease or disorder of the digestive systems like stomach ulcers, gall stones, Jaundice, Hepatitis or liver cirrhosis?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any physical or mental disability or any congenital disease?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any form of cancer, tumour, cyst, or growth of any kind or enlarged lymph nodes?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any diseases related to genitourinary system like kidney, ureter and bladder such as Kidney failure, Kidney stones, blood or pus in urine or any disease?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Epilepsy, nervous disorder, multiple sclerosis, tremors, numbness, paralysis or psychiatric disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Eye, ear, nose or throat disorder, (Except use of spectacles)?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any physical disability or any congenital disease or arthritis or musculoskeletal disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you undergone any blood test or special test like ECG, TMT,",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "2D Echo, CT scan, MRI or angiography? Please specify date, reason for undergoing and Findings.",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Do you or your spouse has been tested positive or is under treatment for HIV / AIDS / Sexually transmitted diseases (e.g. syphilis, gonorrhea, etc.) ?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have any of your immediate family members been diagnosed with or died from Heart Attack, Coronary artery disease, Cancer, Diabetes, stroke, before age 60yr or any other familial inherited disease ?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you receiving any treatment /medication or has in the past\nreceived any treatment or undergone surgery/hospitalized for any medical condition /disability? If yes, Reason for medication and name of medicine?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you been off work due to illness or for a continuous period of more than 10 days during the last one year?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Beer/Wine/Hard Liquor",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Tobacco/Pan Masala/Gutkha",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Type",
                      "reflexQuestionAnswer": "TOBBACO"
                    },
                    {
                      "reflexQuestionName": "Quantity",
                      "reflexQuestionAnswer": "1PACKET"
                    },
                    {
                      "reflexQuestionName": "Frequency",
                      "reflexQuestionAnswer": "ONCE A WEEK"
                    },
                    {
                      "reflexQuestionName": "Since when",
                      "reflexQuestionAnswer": "4/5YEARS BACK"
                    }
                  ]
                },
                {
                  "question": "Any Other substance",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Cigarettes/Beedis/ Cigar",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "DO YOU HAVE SYMPTOMS LIKE FEVER/COUGH/BREATHLESS OR ARE/WERE YOU IN CONTACT WITH ANY CORONA VIRUS POSITIVE PERSON. and RETURNED FROM ABROAD , HAVE YOU TESTED\nPOSITIVE for covid-19 (IF ANY ANSWER YES, details)",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you or have you been in close contact with anyone who has been quarantined or who has been diagnosed with novel coronavirus (SARS-CoV-2/COVID-19) ? If yes, please provide details",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you ever been quarantined due to a possible exposure to novel coronavirus (SARSCoV2/COVID-19)? If yes, please provide dates and locations",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you been advised to be tested to rule in, or rule out, a diagnosis of novel coronavirus (SARSCoV-2/COVID-19)? Or, are you awaiting the result of a test which has already been submitted for the novel\ncoronavirus (SARS-CoV-2/COVID-19)",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you ever tested positive for the novel coronavirus (SARS-CoV- 2/COVID-19)? If yes, provide the date of positive diagnosis",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you experienced any of the following symptoms within the last 14 days? Fever ( Greater than 38C or 100.4 F), Cough, Shortness of breath, Malaise (flu-like tiredness), Rhinorrhea (mucus discharge from the nose), Sore throat, Gastro-intestinal symptoms such as nausea, vomiting and/or diarrhea If yes, to any of these, please indicate which and provide full information",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you currently in good health?Travel Declaration",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Remarks",
                      "reflexQuestionAnswer": "LA IS HEALTHY"
                    }
                  ]
                },
                {
                  "question": "Please provide your travel patterns over the past 14 days:COUNTRY CITY DATE ARRIVED DATE DEPARTED",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Please detail your intended future travel plans for the next 30 days:COUNTRY CITY DATE ARRIVAL INTENDED DURATION",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Remarks",
                      "reflexQuestionAnswer": "RAJASTHAN ON 23RD TO 27TH SEPT."
                    }
                  ]
                },
                {
                  "question": "Have you suffered or suffering from any other disease/ailment/habit not mentioned above?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Are you pregnant?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Have you ever visited a medical practitioner for any problems of breast / uterus / cervix etc.? If yes, please give details of the same",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Have you undergone any of these tests like mammogram, ultrasound, pap smear etc.?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any history of chest pain, heart attack, palpitations, and breathlessness on exertion or irregular heart beat?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Hypertension or high blood pressure/high cholesterol?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "High blood sugar/ Diabetes",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Thyroid disorder or any other endocrine disorders",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Asthma, bronchitis, prolonged cough, tuberculosis (TB),any breathing difficulties or any other respiratory disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any psychiatric disorders like depression, anxiety or neurological symptoms like fits, epilepsy, stroke or recurrent headaches?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any blood disorder like anemia or thalassemia or any history of blood transfusion?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any disease or disorder of the digestive systems like stomach ulcers, gall stones, Jaundice, Hepatitis or liver cirrhosis?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any physical or mental disability or any congenital disease?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any form of cancer, tumour, cyst, or growth of any kind or enlarged lymph nodes?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any diseases related to genitourinary system like kidney, ureter and bladder such as Kidney failure, Kidney stones, blood or pus in urine or any disease?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Epilepsy, nervous disorder, multiple sclerosis, tremors, numbness, paralysis or psychiatric disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Eye, ear, nose or throat disorder, (Except use of spectacles)?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any physical disability or any congenital disease or arthritis or musculoskeletal disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you undergone any blood test or special test like ECG, TMT,",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "2D Echo, CT scan, MRI or angiography? Please specify date, reason for undergoing and Findings.",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Do you or your spouse has been tested positive or is under treatment for HIV / AIDS / Sexually transmitted diseases (e.g. syphilis, gonorrhea, etc.) ?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have any of your immediate family members been diagnosed with or died from Heart Attack, Coronary artery disease, Cancer, Diabetes, stroke, before age 60yr or any other familial inherited disease ?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you receiving any treatment /medication or has in the past\nreceived any treatment or undergone surgery/hospitalized for any medical condition /disability? If yes, Reason for medication and name of medicine?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you been off work due to illness or for a continuous period of more than 10 days during the last one year?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Beer/Wine/Hard Liquor",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Tobacco/Pan Masala/Gutkha",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Type",
                      "reflexQuestionAnswer": "TOBBACO"
                    },
                    {
                      "reflexQuestionName": "Quantity",
                      "reflexQuestionAnswer": "1PACKET"
                    },
                    {
                      "reflexQuestionName": "Frequency",
                      "reflexQuestionAnswer": "ONCE A WEEK"
                    },
                    {
                      "reflexQuestionName": "Since when",
                      "reflexQuestionAnswer": "4/5YEARS BACK"
                    }
                  ]
                },
                {
                  "question": "Any Other substance",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Cigarettes/Beedis/ Cigar",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "DO YOU HAVE SYMPTOMS LIKE FEVER/COUGH/BREATHLESS OR ARE/WERE YOU IN CONTACT WITH ANY CORONA VIRUS POSITIVE PERSON. and RETURNED FROM ABROAD , HAVE YOU TESTED\nPOSITIVE for covid-19 (IF ANY ANSWER YES, details)",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you or have you been in close contact with anyone who has been quarantined or who has been diagnosed with novel coronavirus (SARS-CoV-2/COVID-19) ? If yes, please provide details",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you ever been quarantined due to a possible exposure to novel coronavirus (SARSCoV2/COVID-19)? If yes, please provide dates and locations",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you been advised to be tested to rule in, or rule out, a diagnosis of novel coronavirus (SARSCoV-2/COVID-19)? Or, are you awaiting the result of a test which has already been submitted for the novel\ncoronavirus (SARS-CoV-2/COVID-19)",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you ever tested positive for the novel coronavirus (SARS-CoV- 2/COVID-19)? If yes, provide the date of positive diagnosis",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you experienced any of the following symptoms within the last 14 days? Fever ( Greater than 38C or 100.4 F), Cough, Shortness of breath, Malaise (flu-like tiredness), Rhinorrhea (mucus discharge from the nose), Sore throat, Gastro-intestinal symptoms such as nausea, vomiting and/or diarrhea If yes, to any of these, please indicate which and provide full information",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you currently in good health?Travel Declaration",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Remarks",
                      "reflexQuestionAnswer": "LA IS HEALTHY"
                    }
                  ]
                },
                {
                  "question": "Please provide your travel patterns over the past 14 days:COUNTRY CITY DATE ARRIVED DATE DEPARTED",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Please detail your intended future travel plans for the next 30 days:COUNTRY CITY DATE ARRIVAL INTENDED DURATION",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Remarks",
                      "reflexQuestionAnswer": "RAJASTHAN ON 23RD TO 27TH SEPT."
                    }
                  ]
                },
                {
                  "question": "Have you suffered or suffering from any other disease/ailment/habit not mentioned above?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Are you pregnant?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Have you ever visited a medical practitioner for any problems of breast / uterus / cervix etc.? If yes, please give details of the same",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Have you undergone any of these tests like mammogram, ultrasound, pap smear etc.?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any history of chest pain, heart attack, palpitations, and breathlessness on exertion or irregular heart beat?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Hypertension or high blood pressure/high cholesterol?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "High blood sugar/ Diabetes",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Thyroid disorder or any other endocrine disorders",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Asthma, bronchitis, prolonged cough, tuberculosis (TB),any breathing difficulties or any other respiratory disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any psychiatric disorders like depression, anxiety or neurological symptoms like fits, epilepsy, stroke or recurrent headaches?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any blood disorder like anemia or thalassemia or any history of blood transfusion?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any disease or disorder of the digestive systems like stomach ulcers, gall stones, Jaundice, Hepatitis or liver cirrhosis?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any physical or mental disability or any congenital disease?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any form of cancer, tumour, cyst, or growth of any kind or enlarged lymph nodes?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any diseases related to genitourinary system like kidney, ureter and bladder such as Kidney failure, Kidney stones, blood or pus in urine or any disease?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Epilepsy, nervous disorder, multiple sclerosis, tremors, numbness, paralysis or psychiatric disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Eye, ear, nose or throat disorder, (Except use of spectacles)?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Any physical disability or any congenital disease or arthritis or musculoskeletal disorder?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you undergone any blood test or special test like ECG, TMT,",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "2D Echo, CT scan, MRI or angiography? Please specify date, reason for undergoing and Findings.",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Do you or your spouse has been tested positive or is under treatment for HIV / AIDS / Sexually transmitted diseases (e.g. syphilis, gonorrhea, etc.) ?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have any of your immediate family members been diagnosed with or died from Heart Attack, Coronary artery disease, Cancer, Diabetes, stroke, before age 60yr or any other familial inherited disease ?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you receiving any treatment /medication or has in the past\nreceived any treatment or undergone surgery/hospitalized for any medical condition /disability? If yes, Reason for medication and name of medicine?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you been off work due to illness or for a continuous period of more than 10 days during the last one year?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Beer/Wine/Hard Liquor",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Tobacco/Pan Masala/Gutkha",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Type",
                      "reflexQuestionAnswer": "TOBBACO"
                    },
                    {
                      "reflexQuestionName": "Quantity",
                      "reflexQuestionAnswer": "1PACKET"
                    },
                    {
                      "reflexQuestionName": "Frequency",
                      "reflexQuestionAnswer": "ONCE A WEEK"
                    },
                    {
                      "reflexQuestionName": "Since when",
                      "reflexQuestionAnswer": "4/5YEARS BACK"
                    }
                  ]
                },
                {
                  "question": "Any Other substance",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Cigarettes/Beedis/ Cigar",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "DO YOU HAVE SYMPTOMS LIKE FEVER/COUGH/BREATHLESS OR ARE/WERE YOU IN CONTACT WITH ANY CORONA VIRUS POSITIVE PERSON. and RETURNED FROM ABROAD , HAVE YOU TESTED\nPOSITIVE for covid-19 (IF ANY ANSWER YES, details)",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you or have you been in close contact with anyone who has been quarantined or who has been diagnosed with novel coronavirus (SARS-CoV-2/COVID-19) ? If yes, please provide details",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you ever been quarantined due to a possible exposure to novel coronavirus (SARSCoV2/COVID-19)? If yes, please provide dates and locations",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you been advised to be tested to rule in, or rule out, a diagnosis of novel coronavirus (SARSCoV-2/COVID-19)? Or, are you awaiting the result of a test which has already been submitted for the novel\ncoronavirus (SARS-CoV-2/COVID-19)",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you ever tested positive for the novel coronavirus (SARS-CoV- 2/COVID-19)? If yes, provide the date of positive diagnosis",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Have you experienced any of the following symptoms within the last 14 days? Fever ( Greater than 38C or 100.4 F), Cough, Shortness of breath, Malaise (flu-like tiredness), Rhinorrhea (mucus discharge from the nose), Sore throat, Gastro-intestinal symptoms such as nausea, vomiting and/or diarrhea If yes, to any of these, please indicate which and provide full information",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Are you currently in good health?Travel Declaration",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Remarks",
                      "reflexQuestionAnswer": "LA IS HEALTHY"
                    }
                  ]
                },
                {
                  "question": "Please provide your travel patterns over the past 14 days:COUNTRY CITY DATE ARRIVED DATE DEPARTED",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "Please detail your intended future travel plans for the next 30 days:COUNTRY CITY DATE ARRIVAL INTENDED DURATION",
                  "yes/no": "Yes",
                  "details": [
                    {
                      "reflexQuestionName": "Remarks",
                      "reflexQuestionAnswer": "RAJASTHAN ON 23RD TO 27TH SEPT."
                    }
                  ]
                },
                {
                  "question": "Have you suffered or suffering from any other disease/ailment/habit not mentioned above?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Are you pregnant?",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Have you ever visited a medical practitioner for any problems of breast / uterus / cervix etc.? If yes, please give details of the same",
                  "yes/no": "No",
                  "details": []
                },
                {
                  "question": "[For Women] Have you undergone any of these tests like mammogram, ultrasound, pap smear etc.?",
                  "yes/no": "No",
                  "details": []
                }
              ],
              "measurements": {
                "height(cm)": "5ft3in",
                "weight(kg)": "65Kg"
              },
              "habits_and_addictions": []
            },
            "message": "App form extracted successfully",
            "status": "success"
         











    },

    panCard:{

      
        "status": "success",
        "data": {
          "basic_data": {
            "full_name": "ranjita madheshiya",
            "first_name": "ranjita",
            "last_name": "madheshiya",
            "father_name": "chandrashekhar lal",
            "yob": "1986",
            "signature_file_field": null,
            "face_file_field": "/media/zip_processing/EA03648870/face_personal.jpg",
            "address": " W/o prshant kumar  City UTTAR PRADESH 273152"
          },
          "document_data": {
            "pan": [
              {
                "id": 1026222,
                "first_name": "RANJITA",
                "middle_name": "",
                "last_name": null,
                "file_field": "/media/zip_processing/EA03648870/EA03648870_008912248_111104_PAN_PROOF_21112022133417__pg1.pdf",
                "face_base64": "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",
                "signature_base64": null,
                "face_file_field": "/media/zip_processing/EA03648870/face_EA03648870_008912248_111104_PAN_PROOF_21112022133417.jpg",
                "signature_file_field": null,
                "full_name": "RANJITA",
                "dob": "03/04/1986",
                "yob": "1986",
                "father_name": "CHANDRASHEKHAR LAL",
                "pan_number": null,
                "address": null,
                "identifier": "primary"
              },
              {
                "id": 1026216,
                "first_name": "RANJITA",
                "middle_name": "",
                "last_name": null,
                "file_field": "/media/zip_processing/EA03648870/EA03648870_008912248_121001_AGEPROOF_21112022133417.pdf",
                "face_base64": "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",
                "signature_base64": null,
                "face_file_field": "/media/zip_processing/EA03648870/face_EA03648870_008912248_121001_AGEPROOF_21112022133417.jpg",
                "signature_file_field": "/media/zip_processing/EA03648870/sign_EA03648870_008912248_121001_AGEPROOF_21112022133417.jpg",
                "full_name": "RANJITA",
                "dob": "03/04/1986",
                "yob": "1986",
                "father_name": "CHANDRASHEKHAR LAL",
                "pan_number": null,
                "address": null,
                "identifier": "primary"
              }
            ],
            "aadhar": [
              {
                "id": 1026226,
                "face_base64": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADWANYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDoSeaBTcin4q7CDFLiilzTsA00LzxSNTN201YEhOOKb93JppbIzVG9vRED7UlFtilKyLbSqq5ZsVlXmrJCGAYEj3H+NYmpay2dqOQaxXmluH5kJyfWt4UzFyNK712d3wjcfQf4VnT3cs5yx5P0py27EjAJqYQ4wCOfrW6gojjFyZUjhY80/wAlyen6VeCYHSpETJ6VWh1qjoZxt2Azt/SqjwSFs/pXSiAFelRPbj0p3RyzptM51VaNsircGozwdGOPSrclqD2qnLDtHSiyZi+ZGhb67Nu+YnH4/wCNa9vqnmHqPyNccTsNPS9dG4NS4InnaPQI7nIHNWo5N3euPsdSJADH/P5VvWV2rkc1jOFjaMjZ7UlMVwQKdXO0ap3E704cGm0oNIdyZelFIpooC4nepVPFMwM07PFIY/NIfWm5pC2OtNALkmopG208uAKryvnJI4FUiWQ3Vz5cZPtXKanqDSFh7n+taGr6ioVkU5PoPxrns+a/1Oa6IRMpMiWJpWJrRtrPp8o/KrVlZBlyRWvBZADoKtysEI3M2OzOelWVsd4yRwK0ktgD0p/k7cKOAaiVS52QikZDWYCH1p8NmD1BrQaSBrryd3PI4z2qWNeOlTznRzqxUFsAMYNRSW3Fafl5pjoD2o5znk02Yj2/Ws64te9dI0YPaq01sCp4rSMjOcFY4+5hIJrOclHIrob62PJAxWFLCwc1tE4qkBYZ2BHtW3p12Q4Fc8pZCSelTQzOkgYHinKKZEXZno0Ep2DPFW0fPesDT7gzQqd1aEckgOT0rlnCzOmMjTzzQKhjlDrk9akHIrBotakqnNFC4A96Kkon+WnAZFRk0ocYpAKeKbSO2RTS2BkmmAkjACsrUb0QxHB5q7cvhck8Vx2t3mThW/D8q3pwM5yM65ujLMxPerWnxGRwf896yov3jc9a6fSoQq9K6XojKGrNW2h2LWiqYqOEZFWQOK5ps64IYOtKU3Io7gc04LzS7W5x3rJs0OYXTZ18RecCQm8seh4Lf4V02MDmnheMY57011NCGM2elMIJODUoJXrQykjNMllZ0xzULirLglTUDCtYsJGVdwhlP+FcxewFGP8An0rsZlB61g6jAMscdq2jI5aiOZC4PzdKaxJ4FTT/ACkj3qDdzXR0OTqbei3DLNGhb8K7AEMFweo5rz61n8mZH9CK6ODxHCqhCoyBj/PNYTibRZvKCsvByMVdjlGAKyLK+W6XcvetOMba5po2iy0MmimKcUVlYu5bwKTFJ1oJxSHcQ4xVO4nCL8zD86mkkKgn0rmdQu5ZJGRT0J61rTjciTG32pAnaGrk7uRnm5ar9wjlyWNZU/8ArTzXZFJHO3dl2wTdKB1rtdNg/chj/npXKaNGWlXI6kf0rtrQbIguKzqs1pouRrlRUyio0GAKlVa5WzqQu2nAUgHNOxUMoMelIQaeBS7eKaYysy5603eRxgVKRzUZXmmSyNm46VXkHBNTvkGoJGOOlaxCRUl5zWVfx7kbj/PNa0jHvVSUK6kGtIrqYyV0cReKVlOQetUznNdFe2QZsgd6wrmIxviumEjknHUYGzj2qxFtIORzVLJ9atW0mDzVSSsZq51GgOclW4HbP411Jxu4OR7VzOmMmAQP881uQzEg1x1InTBl3dg0VHFhqKwsaXNIUxjS7zUbHipGyC45Vh7Vyd0St8UPdj/OuolfJNc9q0Jjbze/X+db0iJbEN3bpHb7+5XP6VzMxUzcetaV9qW+IJluARWXbL5txzXStjBbnS6HDnkjoeP0rpY3VepFYdmBBHx1NStLKTxms56s3itDd+1xj+IH8alW8Qjoa5sLKx+8f1o8qbOcmsnE2R1azqwxmrCgMvWuYtnkUgGti3nbAGazlEo0RheSaBIh6OPpVaQu0J29cVVtknVizk4yfWsxovSsq81VedRnFOnfKiqMhA6mrSE7iS36hiM1Vk1BfX9ahkg3MTnrTPsW6t1FE6jmvVfv0qI3EZ7042BGenPtVSazMfOatEseyq+elc/qdoy5IxWujFWxS3cKy25OO39K0iYVDizlc5qWJ8EcVJexBHIxUUMW4itehgdJp12Ejya1bbU49pBdQfc//Xrn7GAlwpPBFbh0WMRGQNhgaxmi4yNuymEkZYEfnRVXTEMUBBPPr+dFczWpsjezUb5NSUxulZI0ZAyc5rE1118nj/PSthy2c5rG1OEyxk44A/wrWG5ElocXLiR+tX9KgDzDj/PNVLiMIzY6itjw9GHG7HP/AOr/ABrqexhD4jZS2LMB2q6sSBcZOabkxrURlCktmsTsRZ2xhfekO2qUt6qKGBH51CNTQtgsv5//AF6aC5phxnAqzbHkVmJMGxir1vJzUyRcdTVQnipGYAYxSQgMopJMZrBotIpzPzgVQkJc8mrk+AaoM2DxWkEJjkBHBp4IBIqHzSDwM1n3F+0LnitTJyNNn5qEkOcGstNRaZ8KDmljuW83awIqkTe5ZnhBPymozGRCQeaspgjHWlkT5MU7ilG5yOqxKp3H0/xqrbBcDFaeuRcHHb/61VdPgDx5/wA960TOSorF+3yqAgVsxXBljCBj9Ky4sojJjpVnS3ZrgqRxSkYxlqdDBCFiGOfeirUQHlqB6UVyvc7U9CzSEUpoFYmpCyA1Tuog0TL6itA1XuOh4rSD1FLY4HVLTy5GI7kj+dbPh63K2wbH+cCoNXjZ3J4+9/jWxpUZjs1XA6V0t6GcY6k0ynis0JI91s7ZraOG4I5FV2i2tuUc1nc3SM7UbQRxD1//AFVhRRGSbHOK6ubEqYbrVRLKOM5wc01IlxHwwhYh7Vcts5piR7hgAj8KsxR+XSky4qyNCOQhaR5D60wNxTHcCsjVEM5zzWexO+rzuDxUPlgnNaLYGh1uq7GyOawNVY+eQBxzXQhQq5qrdWyvyVzTuYyiYulRZk3FRt9xVi6iCzLtxxVtbfyl+QY/CkEBdstVXEosWAEICassmVzSpHtUD0p7cLSuU4mBrMIMLHH+eKoaPGuAD6/0rd1KLfbnjtWFZsIrnb71pFnJUhfc0p7cCUbf4qhi3W9+g6Zx/OpnyHEo5xSz5kiEpGCKbZyOPLsdLbkNEmDn5RRVTSJRJApz2orBrU3VTQ1zSDpS8Ulc52sQ1WmNWW7VWlGOaqO4rnP33zN0rUsv9Uo+v9arTopbnvWjbqvljAxWzegJD9gyakWNSOaBzmnDpUXNVsQvCgyQKYlurmp9hLVMkWKXMOxGluiDOKa5GasuAEqJUU8mi4EJ6VExq8IlYcVHLDihAZ7H5s1LEA46UyVMZp9scNVlXJGh9qYQe9aChWXpzUckIqGyWUCgPam+Xg8VaMWKTZimpDSKzA1G+cVaZKrzDAq0wkUL1i0ZX0FYtvCJbokf55rYu+jfSqmmxqXJNbI55I0o7WMQfN1qOSHfCUUcfWpZJMRYBqS2TMeSKiTOOokU9OnFtGVY4P8A9eio71PKkGOnNFFjlUjqsUFe9KKVjxXIeq5EJ5pk33DTyeahkPFUjPnM50y9aMCjyx9KpyDAzVi2JKirZrCVy0qVIEpFqVeKzNxBHzT2GBS55pGORQUivI2flqIts6nH41JJ8pJrNnMsjcZqkPQupOAev6017gE8mqccEm0Zb86cLYk9c1QrIlZwx+tRjKyjB4qKSJ1bg1JCjlhuqkDijTt+QCasOox0qtECAKnJOKzkCiQsDURHrU3JqN+KkohaqtwKuNiqdw1bQM5GNfMRzVeyZkBwaluTufb3zU9rb4GT6VsYSFG9lwc1pQgiIVVC5bgVeiUhBx0qGcVRmFqzssg47/40VY1WIyEEA9f8aKtHLY6kjvTS2BT2IAqFiK47HozkMZuaibmnMTjNMDrnmqUWc/PqQyx5qSAAcUshUr1qKLIbOaux0UpXNBAcCpccdagV+Kfv4rNo7ESA0E0zOKXcKRaGvgio/LTHSlmk2rms+S+UcAirRcabkXy6KAOOKQypjrWQ17k9aa13x1/WmjoWHNJ2QmnqARxWR9qwKt214p6mrIqUGjUjzU+aqRzA1LvHrWUjns0PBNRyEU4NxUMlSFyNmrPunwatucVnXb8mtoGcmZjfPeA+/wDWtXISNRjt1rMhANxmtSQqVA71qzGUhYPvE+9W1fgiq0C4XNSK4yahnFN3YlwgcDAzRUq4I5oqk9DB7mlJmoj0pztk0kjAAYrFI6ZSKrk8gVBsbPerecnpTtqsPemZMpsCFyT0qNZ13bc81Yn4DL2IrAml8i6OMkZ7/WrSLhOx0kbZUVKrZNUbWUPEp9qtR9c1EonoQkmWCaill2in9qp3IZvu0kjdGbf3pyQpqgHdhnmtE6eOpppiCdqo76HKUSJB600+YTzWgAp6gUhVOmBRY7OaJnNuBpIZWRqtNEd/Q/lTltM54qkZVaiaL1ld7+DWkj7qyLeHyiK1ofuE+lRKJ5lR6k4PFRueaUHioJTnpUJGbIpWI6ise7ly3FaU75XGRWPcEKCSa6IROebsQQP+9PNWzI2QapW43NkVfEZZKpnHKozRtzui604KBxUFsCoAq0VrNmTdwB9KKQDbRQmQ1qaIGWpJANwFOXGT9KgLMZG56VBbF344xTcENnNHXqKGGeDQkK5HMRiue1KMhiwHeuhfB4qleW6yL3rVMyk2Q2DMqfNWtHIClZblYIxmpLefcmR0oaurnZRqGruz0pCm6oYn6ZqwWAA96yO9SuiPywR0qvJb5zV9ACKd5YNTzG0JNGMbU+lNNswPStsxA9qaYgOoo5jT2kjIWAg8g/lUwjAHStAxoR0qF4wDxTjIl1GysycDirEZwMetMbrihvlINU2ZNkjttHWqU0pweafLJwazZ5SoJoSJlIjnmxmsW7nYkjJqzcznJrKkYvIa6IrQ4qkzX0wb+v8AnpW4kYCViaSpwP8APpW4ufLP0pSONjI3/ebasbjuxVKAZuOtaBXrWN9RpAelFA96KLjsX8HeahwfmNSdKYz84qQY0EjtSlj6U4Hmh+2KaEiHHOaR0DVJj8qZI4RSR6VSJkjF1aVQqqOoP+NFnJmBAOorP1R2NxnnGf8AGtHR1ElufXFbpe6EJWZfjn7VbjfeOT0rLkzDJ0zU0dzsPfFc7R306mhrK5AqaNs1mLdDGasJcgis+U6ozLpYCjIK1U84N3pPPwaOUvmJ3YCoGf06015wRVVrlVPUUJA5EzyEVA83ynmoJbkHNU5JsjrWqRm2SzTnJ+Y/nVCacnIzmmvISTUI5Y5qkZyd0RvmQmoVtWLkgVdUAGrtsgY4rS9jjqC6dCY05FaanKEcVABtbApd5XdUORiQQoy3Ht/9atPFVI2yc4qyGwcetQ7BcRjzxRTyoxmioLRYGaCooooJF6DNIGz2oopoEIxwuarMdx9qKKtESMbV7cbd4x0NGguyqRkn8frRRW/2TPqbFwgdMms5/vhe1FFc/U6qTF3Fe9OFw696KKLHXFjxcvQblzRRRYtsja5bmoDKSxoooC4xnqN3LCiimJkeM0uwDsKKKoViGc7QCOKsWEzF8UUUGM0jWXk7qjlJ3YooqTFoljwUFSiiipZNh+T60UUUhn//2Q==",
                "signature_base64": null,
                "first_name": "Ranjita",
                "last_name": "",
                "file_field": "/media/zip_processing/EA03648870/EA03648870_008912248_111042_KYC_21112022133417__pg1.pdf",
                "back_file_field": null,
                "face_file_field": "/media/zip_processing/EA03648870/face_EA03648870_008912248_111042_KYC_21112022133417.jpg",
                "signature_file_field": null,
                "full_name": "Ranjita",
                "dob": "03/04/1986",
                "yob": "1986",
                "father_name": "",
                "aadhar_number": "4416",
                "gender": "FEMALE",
                "address": "W/O: Prshant Kumar, Ward No 12 Nagar Panchayat Pipraich, Pipara ‘Gorakhpur, Uttar Pradesh - 273152",
                "identifier": "primary"
              },
              {
                "id": 1026217,
                "face_base64": "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",
                "signature_base64": null,
                "first_name": "Ranjita",
                "last_name": "",
                "file_field": "/media/zip_processing/EA03648870/EA03648870_008912248_111041_KYC_21112022133417__pg1.pdf",
                "back_file_field": null,
                "face_file_field": "/media/zip_processing/EA03648870/face_EA03648870_008912248_111041_KYC_21112022133417.jpg",
                "signature_file_field": null,
                "full_name": "Ranjita",
                "dob": "03/04/1986",
                "yob": "1986",
                "father_name": "",
                "aadhar_number": "4416",
                "gender": "FEMALE",
                "address": "W/O: Prshant Kumar, Ward No 12 Nagar Panchayat Pipraich, Pipara ‘Gorakhpur, Uttar Pradesh - 273152",
                "identifier": "primary"
              }
            ]
          },
          "aml_data": {
            "pan": {
              "full_name": 0,
              "first_name": 1,
              "last_name": null,
              "father_name": 1,
              "yob": 1,
              "address": null,
              "face_match_perc": 57.3024,
              "signature_match_perc": 0
            },
            "aadhar": {
              "full_name": 0,
              "first_name": 1,
              "last_name": null,
              "father_name": null,
              "yob": 1,
              "address": 0,
              "face_match_perc": 68.6625,
              "signature_match_perc": 0
            }
          },
          "document_list": [
            "pan",
            "aadhar"
          ],
          "relevant_message": {
            "overall_message": "Name is not matching in 0 out of 2 docs",
            "face_source": "",
            "signature_source": "",
            "average_face_match": 0,
            "average_signature_match": 0
          }
        }
      
    }



}

// "file_field": "https://ausis.ai/assets/files/Life-application.pdf",
// ICICI Prudential Life
// Aditya Birla Life
// Bharti AXA Life
// Aegon Life
// Maxlife
// HDFC Life
// TATA AIA Life
// Kotak Life

// India
// USA
// Canada
// Singapore
// Indonesia
// Australia
// Hongkong
// South Africa
// United Kingdom
