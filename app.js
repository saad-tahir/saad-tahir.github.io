/* =====================================================================
   CONTENT: edit everything below this line
   ---------------------------------------------------------------------
   link href starting with "TODO:" = not uploaded yet. Hidden from
   visitors; shown in ?draft view with the path after TODO:.
   draft:true on an entry = hidden from visitors until you remove it.
   ===================================================================== */

const SITE = {
  name: "Saad Tahir",
  email: ["saadtahir96","gmail.com"].join("@"),
  cv: "cv/Saad_Tahir_CV.pdf",
  availability: "Open to remote roles in FEA and computational mechanics, engineering research, and mechanical design.",
  availabilityShort: "Open to collaborate on FEA, research and design assignments",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saad-tahir" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=DvhFY7IAAAAJ" },
    { label: "ResearchGate", href: "https://www.researchgate.net/profile/Saad-Tahir-3" },
    { label: "YouTube", href: "https://www.youtube.com/@saadtahir96" },
    { label: "OnyxLeaf", href: "https://onyxleaf.co/" },
    { label: "GitHub", href: "https://github.com/saad-tahir" }
  ]
};

/* Figures already hosted on your Google Site. Save each one into /images
   with the matching local filename and the site stops depending on Google. */
const G = "https://sites.google.com/sitesv-images-rt/";
const GS = {
  t1: G+"AMxu72vLCqXQDGTjIC4FWcfjUicXSaFAIF90JprxrO8xb-o_Pk0PW0iTE7oZcVW8oEImsJSqxgSW0TVNRyoy5Nd6M0rMVCF0daE1AsK5l9JmZNPARD743688Aj9TlEjEX8MpdL7wjilu2Qk3wOPU3JafX3PCrnO8V8ZlojmTjTpIOFOYOLFM0SlEOJQc5MSfDa8L9eH0FVTMjCjp-uR7NwdNfe-t6w1z07CCTDGLh6q7BTg=w1280",
  t2: G+"AMxu72v34EV8IAxGZ8rzmwBrQBfXE9_yZ59xLvgob584qC6M4bCVK0Kt3ebM98wM28N6BMaUCYQNrxOinPr4XWTqUGf9KSC3-WGvu54vFtTQAhMlO1-r2GSd7mE_JAzbgVPfj7WeD81FpeHdQB_BCZPgY88-JQ4oL296ZEz5geyBDtQJnhXFFtw7rBQc5BXNtzveZNeDtd1EoA5OefTqwdZJapOgmfMRIGcRZzsBUO4R=w1280",
  t3: G+"AMxu72uvHr1DYiAMlVCrfq6CH0GcyasjtD9TxrCoNgZEfi7Dr_hMRYeBlul5gjZGepmqHcmhWK6CB32xuiXmZUjClg5cttQuQYRdjQaSyHiLtxuBWnH_AmaaYSam1uCTP-naIum63hC1vQDcP-E6oRz0bhbnGxSWBml0IrNVJHLtvjnsAy_VnEv41pe4FfKQJzktuMP6B9G8A1lxfMzkY9vUijidtiycNb2BRBW_8bVt=w1280",
  t4: G+"AMxu72tmdJsmkZXAc3quJhJhFr0XuQ4_w-NlGYPyedbcIp1mY3apYFS6U3zoLnhSrkf3o6vkqabGIABVFp5qL7QNeQ95LmtcpQgjOXkeWnyz7TAOJnEGfJno1w_12l6_saNdqaKdCUIoss-OLZpg29yszjwrMy7FzlE3cJ4P9RP5cyxUqB7_JXIpzlD5mkD4IjSuynH29XeEWVtVb1uSgbQ9Y78NaWh3WGTqn1uph4IH=w1280",
  comp: G+"AMxu72ueo5gKwzf868nVNTdRfxWvb83jmu6bUD6qQmwF8EE11CEOLmlxcik87809KaZLY1yS4tRx4PZH1HetdRrXam17v1LZT2-WO346_eT7A35Bh7_GAY3PvjzN-7-FyFZkTI5Ox_Nn0w-kra4gjJnStmaO2a3qcQeyGbZgFU51unB-HK_8ofHLJyOX3LoGFPVwz9HVqLSiyc33U-fdjQaJ8eUlWIZB46FdfZBFLLhcvf0=w1280",
  opt: G+"AMxu72voQLg4O4PblPVJfsT4PG-Rs93G1OMram4ImArewUbdoqHiEe8wf-QDwBbabFtNz4f0udQZvR5I_rDiyJp1i_5PkSZguaRQ5zMsHH0MS4FFZJnqtz-JtNgVd9hrAXcNg-2PgDMFAumL3sDtPBNBr_1HINrBQLWLZT1NJCRNTGBx55cMhpaeHGr69eEaHkpk9quUXh029jsNIjEHUXUk92oPs0ZA-fmnCHqxon_d=w1280",
  ml: G+"AMxu72sykLW88gd5_bsluJSXgS7MWs2ir53eUG3lVp33CeVLPQO2OL6uJas5CeoC95QA12W1Pon_1lKIy-q0LcGSqOP0G8LPIaimt7wMUK0rn-cNqyiO9nuj2JRXA6Tu5sK9fSuXASaZ8bmKGRbsqnbutR1uMZ1ajXOd-MlGnuSB1luw9xPSuqzxtLX8MMm7UY06RHDs2EaUm7CsVgIgAa4urnGpHdPqtwfQK59CElisQgY=w1280",
  ela: G+"AMxu72s3gmyeQg4DsVgQVB8fAauqk5QW2OuWEV8c9rG2tOLOAyhe-D-bMZUFCWLJ_CB4YeM4wqHJSjav-vpSUnXPQqagn8bPLNEGd_kqbezscFtNbtD6APhaytdGlM6b_6LQknDa2kEJhrtfr8B4wG8DwsnS-jh6k2JCLgoWgi0RFSXJO2Rlqv2hgqgV0IPOUZblDliT97DKQmxsS45fEr3DiVP2lTsDvE-Hq_xsRjzMuS0=w1280",
  g1: G+"AMxu72ssECELS1RP_Ku3UbvtQJbkl1-I1FCv1A2q5PX2PktpGNWzGnjRpla0C3fU6pnr4QipOzpLrXE0anofN90kPzthnkVtvnXBZ6XCP1riPug73UDhBtcktArnxVgg2aiMWVFRdm4DJ9G5T7bfHfJjcASRLPeRCkJ4xPi7ikrkaR3iqq2TfryQI5SRib-tOV43L97uE7BEzNRFE4EZhH2tB0RObB0enoXY9hCRGnpmzEM=w1280",
  g2: G+"AMxu72vKVMe-3ft0fszC-YQ7RybG9tU28Cg-_5WmAQuALgHMa4wEBMyN5sFp1VIrDJPG5L9QcSm992XOjpAA-zi0Mo0wxXmkOg4u9qJzTcNQ1_YtU-g9qL-thp_T0YxR2v-5B-ujFMkDrMoTEfBW4GocusDH3i8J_tixcZCBa8U-YBjQ5Fc8Lzq6T95fJxqUyI6DDZJejZsXKIfU4u4V9ym5l64qt-hh6eBPGllOD-BtDgo=w1280",
  g3: G+"AMxu72sdNCTvFRZOFrvpswU_lFuTsiRtm2hIu3FHexrQowI15VggE2raIrD25LFETaeGGPyUOAciE-ddlPFYdFDAFSKacQ8GihEqan5h0_UcKnCym_lVnNzPGvjwSjgG4UeAu19_SXnwxOMoG6q7zZGpxmZNf6vQg19Jbi6Ybppu_NTAb1JEBBRQpsg5vYr2WLV-HBGxr3HIF0zsGUusXeuth0GYVN2z27AggIhFnIqiv8c=w1280",
  g4: G+"AMxu72swBcM7frFHuI4RtKk28Jy-n7_uBIWUIFpFYSjGbnwzRgdUkTt44NVvrML4AfLjrbGyK3PafbqRs355FngDU6FtG9sr19zK2Yu9LayxWa78NFnRvAne6E4h4aL8ts8OdNRo-MD7goDgJuIUAWjlRO36upvQGICyaUEqPPIg0hFpNnsS1jewg5OF1sj7bGkUF1aUMvhwaWhSeWp2PAXNv54trC-DfxcSAJec91FDcjo=w1280"
};

/* Media types:
   { yt:"VIDEO_ID", caption }                       YouTube, loads only when clicked
   { img:"images/x.jpg", remote:GS.key, art, caption }  image with fallbacks
   { art:"impeller|campbell|code|lattice|contour|doc|rig" } drawn illustration */

const TABS = [
  { id:"overview", label:"Overview" },

  { id:"onyxleaf", label:"OnyxLeaf",
    head:{ title:"OnyxLeaf and Boxlytics", role:"Founder, engineering lead", org:"OnyxLeaf", when:"Nov 2025 – present", where:"Remote, part-time",
      lead:"I create software based on state-of-the-art research to bridge the gap between academia and industry.",
      tools:"Python, OpenSeesPy, Abaqus, MATLAB, ML surrogate modelling" },
    entries:[
      { id:"boxlytics", title:"Boxlytics: box strength prediction in under a second", when:"Live product",
        summary:"Boxlytics compares corrugated-box designs by predicted compression strength, material use and cost, so teams can screen options before physical testing. Typical predictions return in under a second, with about 98% agreement against full FEA.",
        media:{ img:"images/boxlytics-ui.jpg", art:"doc", caption:"Boxlytics interface" },
        bullets:[
          "Own the mechanics behind every prediction and coordinate with the software and business teams.",
          "Partner on technical product strategy and data-driven investor decks; mentor engineers in composite mechanics and experimental validation."
        ],
        flow:true,
        stepsTitle:"From research solver to product",
        steps:[
          { title:"Porting the research solver", text:"Updated physics models implemented using Python and open-source FEA solvers for data generation." },
          { title:"Generating the training data", text:"Large-scale FEA runs across board grades, flute types, box dimensions and conditions, each checked before it enters the dataset." },
          { title:"Mechanics-based surrogate models", text:"Features built from composite mechanics rather than raw inputs, so surrogates stay accurate across a wider range of designs." },
          { title:"Decisions for non-specialists", text:"Results shown as strength, material and cost trade-offs that procurement and packaging teams can act on." }
        ],
        links:[
          { label:"Open Boxlytics", href:"https://boxlytics.onyxleaf.co/" },
          { label:"onyxleaf.co", href:"https://onyxleaf.co/" },
          { label:"Product walkthrough", href:"https://www.youtube.com/watch?v=MQvWqcFG5Bc" },
          { label:"OnyxLeaf on YouTube", href:"https://www.youtube.com/@onyx-leaf" }
        ] }
    ],
    groups:[
      { title:"Manuscripts in preparation", papers:true,
        lead:"Ongoing papers that serve as foundation for Boxlytics.",
        entries:[
          { id:"ml-surrogates", title:"High-fidelity machine-learning surrogates for nonlinear corrugated box compression", when:"Manuscript in preparation",
            summary:"Machine learning models based on state-of-the-art literature based large-scale mechanics-based simulations for fast, accurate box compression prediction.",
            links:[ { label:"Preprint", href:"TODO:reports/ML_Surrogates_Preprint.pdf" } ] }
        ] }
    ] },

  { id:"research", label:"Research",
    head:{ title:"Research", lead:"Corrugated packaging mechanics, lattice damage models, and earlier energy research. The methods developed here underpin the software and analysis tools I ship in industry." },
    groups:[
      { title:"UM–SJTU Joint Institute", role:"Graduate Researcher", when:"Sep 2019 – Dec 2024", where:"Shanghai, China",
        lead:"A nonlinear lattice model that predicts how and where corrugated boxes fail, without resolving every sheet of paper. Experimental work (paper tensile, board four-point bending, box compression and impact to ASTM D685 / D790 / D642; UTM, NI-DAQ, LabVIEW) validated the models throughout.",
        tools:"Abaqus buckling and Riks, MATLAB meshing, Python post-processing, UTM, NI-DAQ, LabVIEW",
        entries:[
          { id:"thesis", title:"Box strength with creasing damage, via nonlinear orthotropic lattice models", when:"M.S. thesis, 2024. Advisor: Prof. Shane Johnson",
            summary:"About 90% strength accuracy against box compression tests, and about 98% agreement with high-fidelity shell models for calibrated multilayer boards.",
            media:{ yt:"UUrPsozc4bM", caption:"ASME IMECE 2022 conference presentation" },
            stepsTitle:"From board properties to full box prediction",
            steps:[
              { title:"Emulate nonlinear homogenized board properties", text:"A nonlinear orthotropic multilayer beam-lattice model stands in for corrugated board. Beam parameters are calibrated analytically by strain-energy equivalence, a bilinear fit and classical lamination theory, then checked against shell-element models in and out of plane.", media:{ img:"images/thesis-1-board-properties.jpg", remote:GS.t1, art:"lattice" } },
              { title:"Model creasing damage by local stiffness reduction", text:"Bending-driven failures such as creasing are captured by releasing moment at lattice nodes through connector elements once a failure threshold is reached. Axial compression tests confirm the damage patterns.", media:{ img:"images/thesis-2-creasing.jpg", remote:GS.t2, art:"lattice" } },
              { title:"Compute board-averaged failure strengths", text:"Analytical equations predict homogenized creasing failure limits, accounting for liner stress concentrations from local buckling and the stiffness mismatch at liner–fluting joints. Validated by four-point bending tests.", media:{ img:"images/thesis-3-failure-strengths.jpg", remote:GS.t3, art:"doc" } },
              { title:"Predict box compressive performance", text:"The pieces combine into a lattice box model with nonlinear panels, the creasing method, averaged failure limits and structural details such as load distribution. Validated by box compression tests (ASTM D642) on the UTM with NI-DAQ and LabVIEW.", media:{ img:"images/thesis-4-box-compression.jpg", remote:GS.t4, art:"rig" } }
            ],
            links:[
              { label:"ASME IMECE 2022 paper", href:"https://doi.org/10.1115/IMECE2022-96917" },
              { label:"Full thesis (PDF)", href:"TODO:reports/Tahir_MS_Thesis_2024.pdf" },
              { label:"Defense slides (PDF)", href:"TODO:reports/Tahir_Thesis_Defense.pdf" }
            ] }
        ] },
      { title:"NUST", role:"Undergraduate Researcher", org:"School of Mechanical & Manufacturing Engineering", when:"Jul 2017 – Jan 2019", where:"Islamabad, Pakistan",
        lead:"Energy research for Pakistan: where solar thermal power makes economic sense, and low-cost water purification for remote regions.",
        tools:"NREL System Advisor Model, techno-economic analysis, experimental data processing",
        entries:[
          { id:"csp", title:"Concentrated solar power in Pakistan", when:"2017 – 2019. First-authored journal paper",
            summary:"Techno-economic modelling of Linear Fresnel plants with the NREL System Advisor Model to assess where concentrated solar power could be viable in Pakistan. Published in the Journal of Cleaner Production and presented as a conference poster.",
            media:{ yt:"GOP2ovIe2BI", caption:"Research presentation" },
            team:"Advisor: Dr. Hafiz M. Abd-ur-Rehman. Collaborator: Muhammad Ahmad.",
            links:[
              { label:"Journal paper", href:"https://doi.org/10.1016/j.jclepro.2021.126125" },
              { label:"Conference letter (PDF)", href:"reports/Conference_Solar_Letter.pdf" },
              { label:"Research report (PDF)", href:"TODO:reports/NUST_SMME_Research_Report.pdf" }
            ] },
          { id:"desalination", title:"Decentralized solar water purification", when:"2018. Co-authored conference paper",
            summary:"Processed experimental data for a solar-powered desalination still aimed at remote regions, and co-authored the conference paper.",
            media:{ img:"images/proj-solar-still.jpg", art:"rig", caption:"Schematic of the modified solar still experimental setup" },
            links:[ { label:"IOP conference paper", href:"https://doi.org/10.1088/1755-1315/154/1/012004" } ] }
        ] }
    ] },

  { id:"industry", label:"Industry",
    head:{ title:"Industry", lead:"Production engineering for Halifax Fan UK (via Greybeard Solutions) — FEA and design for live orders — plus earlier industrial internships." },
    groups:[
      { title:"Halifax Fan UK (via Greybeard Solutions)", role:"Design & Analysis Engineer", org:"Greybeard Corporate Solutions", when:"Jan 2025 – present", where:"Islamabad, with UK, USA and China teams",
        lead:"I design bespoke centrifugal fans for live orders, and use FEA and testing to explain and fix vibration problems before they reach the field.",
        tools:"Autodesk Inventor, iLogic, ANSYS Mechanical, SAP Business ByDesign, Excel VBA",
        entries:[
          { id:"fan-design", title:"Production fan design and order delivery", when:"130+ designs, £1.2M+ order portfolio",
            media:{ img:"images/halifax-fan-design.jpg", art:"impeller", caption:"Bespoke fan arrangement in Autodesk Inventor" },
            bullets:[
              "Delivered 130+ centrifugal fan designs across UK, USA and China operations.",
              "Engineered bespoke fan arrangements and impeller configurations in Autodesk Inventor.",
              "Released manufacturing drawings, BOMs, PMs and production documentation through SAP Business ByDesign.",
              "Work with purchasing, production and clients to resolve post-release and aftermarket issues."
            ] },
          { id:"vibration", title:"Predicting impeller vibration with the University of Huddersfield", when:"Product R&D",
            summary:"An FEA-driven method to predict impeller dynamic response early enough to guide design decisions, checked against physical tests.",
            media:{ img:"images/halifax-campbell.jpg", art:"campbell", caption:"Campbell diagram: natural frequencies against running speed" },
            flow:true,
            stepsTitle:"From modal model to physical validation",
            steps:[
              { title:"Pre-stressed modal analysis", text:"Natural frequencies under centrifugal stiffening, mapped against running speed on Campbell diagrams in ANSYS Mechanical." },
              { title:"Uncertainty from manufacturing variation", text:"Stochastic material and geometric variations simulated to show how far real impellers can drift from the nominal model." },
              { title:"Validation by hammer testing", text:"On-site impact hammer tests to confirm the predicted modes and frequencies." },
              { title:"Controlled fatigue-crack rig", text:"Designed a cam–follower setup that starts controlled fatigue cracks, so performance after damage can be measured." }
            ],
            links:[ { label:"Method summary (PDF)", href:"TODO:reports/halifax-vibration-summary.pdf" } ] },
          { id:"qa-failures", title:"Finding the source of vibration failures in QA", when:"Failure investigation",
            media:{ img:"images/halifax-full-fan-fea.jpg", art:"contour", caption:"Full fan assembly FEA" },
            bullets:[
              "Ran full fan-assembly FEA to isolate the physical source of vibration failures seen during QA testing.",
              "Proposed simple, low-cost design changes based on the FEA results, avoiding delivery delays and field failures."
            ] },
          { id:"automation", title:"Design automation and documentation in live production", when:"Trilogy platform",
            media:{ img:"images/halifax-automation.jpg", art:"code", caption:"iLogic rules in the production CAD workflow" },
            bullets:[
              "Wrote iLogic rules and scripts for CAD automation, tested and debugged against real orders.",
              "Automated compliance documentation with Excel VBA."
            ] },
          { id:"team-training", title:"Team training in fan mechanics and FEA", when:"Internal training",
            media:{ img:"images/halifax-team-training.jpg", art:"doc", caption:"FEA and fan mechanics training sessions with the engineering team" },
            bullets:[
              "Delivered internal trainings on fan mechanics fundamentals for the design and analysis team.",
              "Introduced FEA fundamentals and their application to fan and impeller design.",
              "Covered vibration diagnosis, prediction and mitigation methods used on live production work."
            ] }
        ] },
      { title:"Earlier placements", compact:true,
        lead:"Industrial internships during undergraduate studies.",
        entries:[
          { id:"mari", title:"Mari Petroleum Company Limited", when:"Engineering Intern, Jun – Jul 2018",
            summary:"Industrial internship at Pakistan’s second-largest gas producer. Hands-on exposure to upstream operations, technical discourse and practical engineering work on site.",
            media:{ art:"doc" },
            links:[ { label:"Certificate (PDF)", href:"reports/Mari_Internship_Certificate.pdf" } ] },
          { id:"ses", title:"Scientific & Engineering Services Directorate (SES)", when:"Engineering Intern, Jul – Sep 2017",
            summary:"Six-week training in design and engineering of pressure vessels and heat exchangers, production and fabrication, welding processes (SMAW, GTAW, GMAW, SAW, laser), and non-destructive testing (PT, MT, RT, UT, ET).",
            media:{ art:"doc" },
            links:[ { label:"Certificate (PDF)", href:"reports/SES_Internship_Certificate.pdf" } ] }
        ] }
    ] },

  { id:"projects", label:"Projects",
    head:{ title:"Projects", lead:"Coursework, prototypes, software and volunteering. Research projects live on the Research tab." },
    groups:[
      { title:"Other sections", pointer:true,
        lead:"OnyxLeaf (product from research), full research details, and Halifax Fan / internships live on their own tabs.",
        links:[
          { label:"OnyxLeaf", href:"#onyxleaf" },
          { label:"Research", href:"#research" },
          { label:"Industry", href:"#industry" }
        ], entries:[] },
      { title:"Methods and coursework", compact:true, lead:"Graduate coursework at UM–SJTU JI.", entries:[
        { id:"composites", title:"Advanced composites", when:"Dec 2019",
          summary:"Controlled UV-curing setup for single-glass-roving composites; ASTM D790 three-point bending to extract modulus trends in MATLAB.",
          media:{ img:"images/proj-composites.jpg", remote:GS.comp, art:"rig" },
          team:"With Dr. Yaru Mo, Rui Chen.",
          links:[ { label:"Project page", href:"https://sites.google.com/view/saad-tahir/projects" } ] },
        { id:"optimization", title:"Engineering optimization", when:"Dec 2019",
          summary:"Reproduced an analytical model of a bioinspired tunable-stiffness mechanism and optimized it with fmincon, ε-constraint and NSGA-II.",
          media:{ img:"images/proj-optimization.jpg", remote:GS.opt, art:"doc" },
          team:"With Rui Chen.",
          links:[ { label:"Project page", href:"https://sites.google.com/view/saad-tahir/projects" } ] },
        { id:"machine-vision", title:"Machine vision for tile defects", when:"May 2020",
          summary:"Classified magnetic-tile surface defects with PCA/SVD and HOG features, benchmarking kNN, SVM and CNN.",
          media:{ img:"images/proj-machine-vision.jpg", remote:GS.ml, art:"doc" },
          team:"With Dr. Yaru Mo.",
          links:[ { label:"Project page", href:"https://sites.google.com/view/saad-tahir/projects" } ] },
        { id:"elasticity", title:"Elasticity solution for four-point bending", when:"May 2020",
          summary:"Derived an elasticity solution for four-point beam bending and validated it against DIC test results.",
          media:{ img:"images/proj-elasticity.jpg", remote:GS.ela, art:"contour" },
          team:"With Dr. Yaru Mo, Jing Li.",
          links:[ { label:"Project page", href:"https://sites.google.com/view/saad-tahir/projects" } ] }
      ] },
      { title:"Prototypes and volunteer", compact:true, lead:"Capstone, software and society roles.", entries:[
        { id:"turbine", title:"Hydrokinetic micro-turbine for low-head canals", when:"B.S. capstone, NUST, Oct 2018 – Apr 2019",
          summary:"Designed, manufactured and tested a helical vertical-axis micro hydrokinetic turbine for low-head, low-flow canals.",
          media:{ yt:"HNfvw05oOQ0", caption:"Capstone turbine testing" },
          team:"Advisor: Prof. M. Sajid. Team: Mazhar Abbas, Zain Ahmed.",
          links:[
            { label:"Project page", href:"https://sites.google.com/view/saad-tahir/projects" },
            { label:"Capstone report (PDF)", href:"TODO:reports/Capstone_Hydrokinetic_Turbine.pdf" }
          ] },
        { id:"database-app", title:"Database app for Fatima Enterprises", when:"Mar 2015",
          summary:"A stand-alone GUI application that moved a small business onto a relational database, for data management, invoicing and financial analysis.",
          media:{ img:"images/proj-app-screens.jpg", remote:GS.g1, art:"code", caption:"Input screens and output reports" },
          team:"Advisor: Mr. Sahir Masroor.",
          links:[ { label:"Project page", href:"https://sites.google.com/view/saad-tahir/projects" } ] },
        { id:"nsme", title:"NUST Society of Mechanical Engineers", when:"President, formerly Publications Chair, Mar 2017 – Mar 2019",
          summary:"Led 40+ members through technical workshops, mock recruitment drives and entrepreneurial competitions. Started a blog for the society's project resource catalogue.",
          media:{ img:"images/nsme.jpg", art:"doc" },
          links:[
            { label:"NSME publications blog", href:"https://nsmepublications.wordpress.com/" },
            { label:"Leadership letter (PDF)", href:"reports/NSME_Letter.pdf" }
          ] },
        { id:"solar-decathlon", title:"Solar Decathlon Middle East 2018", when:"Project Coordinator, Team BGreen, Sep 2017 – Feb 2018",
          summary:"Coordinated 20+ architecture and engineering graduates in the first Pakistani team selected for the competition, and proposed net metering and solar water heating for the house.",
          media:{ yt:"tbuAnnpqBrU", caption:"Team BGreen" },
          links:[
            { label:"BGreen letter (PDF)", href:"reports/BGreen_Solar_Decathlon_Letter.pdf" },
            { label:"Project page", href:"https://sites.google.com/view/saad-tahir/projects" }
          ] }
      ] }
    ] },

  { id:"publications", label:"Publications" },
  { id:"cv", label:"CV" },
  { id:"contact", label:"Contact" }
];

const OVERVIEW = {
  portrait:{ img:"images/portrait.jpg", remote:"https://sites.google.com/sitesv-images-rt/AMxu72vpy8s07_lX9GCZN-yQdJbBq9hGd4JexqIVsIEjdyahlWd-AZdX3GZFA5RYKDOcIVS8F4LiEjYSOlzTcLil9Ac6QY5scdC_5q0sSI6F5ub5RAiMggqJeNbC3-a9YSRDXPcrNQL9BKKjm31c2dcDa6HtgsDG481MphKDq7xyj0VnAdig5amW7c7TiVrez4RsSL9-6SXoYHTeb-msvOeiqFnNMU7VY5mDE0kzP1__D98=w1280" },
  statement:"I create software and analysis methods based on state-of-the-art research to bridge academia and industry.",
  sub:"Mechanical engineer, M.S. Solid Mechanics. For Halifax Fan UK via Greybeard Solutions, I apply FEA to production fan design. At OnyxLeaf I build simulation software for corrugated packaging grounded in peer-reviewed mechanics.",
  facts:[],
  selected:["thesis","boxlytics","vibration","csp","turbine","composites"],
  timeline:[
    { d:"2025 – now", t:"Design & Analysis Engineer", o:"Halifax Fan UK (via Greybeard Solutions)", go:"industry" },
    { d:"2025 – now", t:"Founder", o:"OnyxLeaf", go:"onyxleaf" },
    { d:"2019 – 2024", t:"Graduate Researcher", o:"UM–SJTU Joint Institute", go:"research/thesis" },
    { d:"2018", t:"Engineering Intern", o:"Mari Petroleum Company Limited", go:"industry/mari" },
    { d:"2017", t:"Engineering Intern", o:"SES Directorate", go:"industry/ses" },
    { d:"2017 – 2019", t:"Undergraduate Researcher", o:"SMME, NUST", go:"research/csp" }
  ],
  education:[
    { d:"2019 – 2024", t:"M.S. Mechanical Engineering, Solid Mechanics", o:"UM–SJTU Joint Institute · Shanghai." },
    { d:"2015 – 2019", t:"B.S. Mechanical Engineering", o:"NUST · Islamabad. CGPA 3.74/4.00." },
    { d:"2013 – 2015", t:"GCE A-Levels & O-Levels", o:"Beaconhouse / University of Cambridge. A-Levels 4 A*; O-Levels 7 A*." }
  ],
  tools:[
    ["FEA","Abaqus, ANSYS Mechanical, OpenSeesPy, Inventor Nastran. Static, Riks, buckling, modal and vibration."],
    ["Design","Autodesk Inventor with iLogic, SolidWorks, manufacturing drawings, SAP Business ByDesign."],
    ["Code","Python, MATLAB, Excel VBA. Machine learning and optimization."],
    ["Testing","ASTM D685, D790, D642. UTM, NI-DAQ, LabVIEW, hammer testing."]
  ]
};

const HONORS = [
  { d:"2019 – 2021", t:"Full Graduate Fellowship", o:"UM–SJTU Joint Institute" },
  { d:"2017", t:"NESCOM Fellowship", o:"1 of 3 in a cohort of 130, NUST" },
  { d:"2015 – 2019", t:"Dean’s Honors List", o:"Four consecutive merit awards, NUST" },
  { d:"2018", t:"GRE 322/340 · TOEFL iBT 112/120", o:"Quantitative 167, Verbal 155" },
  { d:"2015", t:"SAT Subject Tests 2400/2400", o:"Math II, Physics, Chemistry; NAT top 0.1%" }
];

const PUBS = [
  { y:"2022", cite:"Tahir, S., Johnson, S., et al. Creasing damage analysis in corrugated packages using beam lattice models with joint stiffness degradation.", venue:"ASME IMECE", href:"https://doi.org/10.1115/IMECE2022-96917" },
  { y:"2021", cite:"Tahir, S., Abd-ur-Rehman, H. M., et al. Techno-economic assessment of concentrated solar thermal power generation and potential barriers in Pakistan.", venue:"Journal of Cleaner Production", href:"https://doi.org/10.1016/j.jclepro.2021.126125" },
  { y:"2018", cite:"Abd-ur-Rehman, H. M., Shakir, S., Saqib, H., & Tahir, S. Decentralized and cost-effective solar water purification system.", venue:"IOP Conference Series: Earth and Environmental Science", href:"https://doi.org/10.1088/1755-1315/154/1/012004" }
];

const DOCS = [
  { n:"CV", s:"Current, PDF", href:"cv/Saad_Tahir_CV.pdf" },
  { n:"M.S. thesis", s:"UM–SJTU Joint Institute, 2024", href:"TODO:reports/Tahir_MS_Thesis_2024.pdf" },
  { n:"Mari Petroleum internship certificate", s:"Jun – Jul 2018", href:"reports/Mari_Internship_Certificate.pdf" },
  { n:"SES internship certificate", s:"Jul – Sep 2017", href:"reports/SES_Internship_Certificate.pdf" },
  { n:"NSME leadership letter", s:"President / Publications Chair", href:"reports/NSME_Letter.pdf" },
  { n:"Solar Decathlon / BGreen letter", s:"Project Coordinator, 2018", href:"reports/BGreen_Solar_Decathlon_Letter.pdf" },
  { n:"Solar conference letter", s:"NUST energy research", href:"reports/Conference_Solar_Letter.pdf" },
  { n:"NUST research report", s:"Solar thermal and desalination, 2017 – 2019", href:"TODO:reports/NUST_SMME_Research_Report.pdf" },
  { n:"Capstone report", s:"Hydrokinetic micro-turbine, 2019", href:"TODO:reports/Capstone_Hydrokinetic_Turbine.pdf" }
];

/* =====================================================================
   ENGINE: no need to edit below
   ===================================================================== */
const DRAFT = new URLSearchParams(location.search).has("draft");
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const isTodo = h => !h || h.startsWith("TODO:");
const todoPath = h => h.replace(/^TODO:/, "");
const extIcon = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 3H3v10h10v-3M9 3h4v4M13 3 7 9"/></svg>';
const allEntries = [];
TABS.forEach(t => { (t.entries||[]).forEach(e => allEntries.push([t.id,e])); (t.groups||[]).forEach(g => g.entries.forEach(e => allEntries.push([t.id,e]))); });
const visible = e => DRAFT || !e.draft;

/* ---- contour colours (the FEA legend) ---- */
const STOPS = [[0,[47,79,160]],[0.25,[44,154,192]],[0.5,[88,184,120]],[0.75,[230,194,74]],[1,[212,81,47]]];
function contour(v){ v=Math.max(0,Math.min(1,v)); for(let i=1;i<STOPS.length;i++){ if(v<=STOPS[i][0]){ const [a,ca]=STOPS[i-1],[b,cb]=STOPS[i],k=(v-a)/(b-a); return `rgb(${ca.map((x,j)=>Math.round(x+(cb[j]-x)*k)).join(",")})`; } } return "rgb(212,81,47)"; }

/* ---- beam lattice under top load (hero + tiles) ---- */
function latticeGeom(nx,ny,t){
  const nodes=[];
  for(let j=0;j<=ny;j++){ const row=[]; for(let i=0;i<=nx;i++){
    const u=i/nx, v=j/ny;
    const bulge = t*(0.16*Math.sin(Math.PI*v)*(u-0.5)*2 + 0.025*Math.sin(2*Math.PI*v)*Math.sin(Math.PI*u));
    const crease = t*0.05*Math.exp(-Math.pow((v-0.62)/0.07,2))*(u-0.5)*2;
    const dx = bulge+crease, dy = -0.075*v*t;
    row.push({u,v,dx,dy,m:Math.hypot(dx*1.1,dy*1.6)}); } nodes.push(row); }
  return nodes;
}
function buildLattice(svg, opt){
  const {nx,ny,x0,yb,W,H}=opt, NS="http://www.w3.org/2000/svg", beams=[];
  const g=document.createElementNS(NS,"g"); svg.appendChild(g);
  const add=(a,b,diag)=>{ const l=document.createElementNS(NS,"line"); l.setAttribute("stroke-width",diag?1:1.8); l.setAttribute("stroke-linecap","round"); if(diag) l.setAttribute("opacity",".55"); g.appendChild(l); beams.push({l,a,b}); };
  for(let j=0;j<=ny;j++) for(let i=0;i<=nx;i++){
    if(i<nx) add([i,j],[i+1,j]); if(j<ny) add([i,j],[i,j+1]);
    if(i<nx&&j<ny) add((i+j)%2?[i,j]:[i+1,j],(i+j)%2?[i+1,j+1]:[i,j+1],true);
  }
  return t=>{
    const N=latticeGeom(nx,ny,t); let max=0; N.forEach(r=>r.forEach(n=>max=Math.max(max,n.m))); max=Math.max(max,0.12);
    const P=([i,j])=>{ const n=N[j][i]; return [x0+W*(n.u+n.dx), yb-H*(n.v)*(1-0.075*t)]; };
    beams.forEach(({l,a,b})=>{ const p=P(a),q=P(b),m=(N[a[1]][a[0]].m+N[b[1]][b[0]].m)/2;
      l.setAttribute("x1",p[0].toFixed(1)); l.setAttribute("y1",p[1].toFixed(1)); l.setAttribute("x2",q[0].toFixed(1)); l.setAttribute("y2",q[1].toFixed(1));
      l.setAttribute("stroke", t<0.02? "var(--muted)" : contour((m/max)*Math.min(1,t*1.4))); });
    return yb-H*(1-0.075*t);
  };
}
function latticeTileSVG(){
  const NS="http://www.w3.org/2000/svg", s=document.createElementNS(NS,"svg"); s.setAttribute("viewBox","0 0 320 200"); s.setAttribute("aria-hidden","true");
  buildLattice(s,{nx:8,ny:5,x0:90,yb:180,W:140,H:160})(1); return s.outerHTML;
}

/* ---- drawn illustrations for missing images ---- */
const ART = {
  lattice: ()=>latticeTileSVG(),
  impeller: ()=>{ let s=`<svg viewBox="0 0 320 200" aria-hidden="true"><g transform="translate(160 100)"><circle r="82" class="a-stroke"/><circle r="74" class="a-stroke" stroke-dasharray="2 4"/><circle r="24" class="a-strong"/><circle r="7" class="a-fill"/>`;
    for(let k=0;k<12;k++) s+=`<path d="M24 0 Q48 26 78 12" class="a-strong" transform="rotate(${k*30})"/>`;
    return s+`</g></svg>`; },
  campbell: ()=>{ const X0=40,Y0=170,X1=300,Y1=20,Wd=X1-X0; let s=`<svg viewBox="0 0 320 200" aria-hidden="true"><path d="M${X0} ${Y1}V${Y0}H${X1}" class="a-stroke"/>`;
    const eo=[1,2,3,4], modes=[125,90,52];
    eo.forEach(e=>{ const sl=0.28*e, xe=Math.min(X1,X0+(Y0-Y1)/sl); s+=`<path d="M${X0} ${Y0}L${xe.toFixed(1)} ${(Y0-sl*(xe-X0)).toFixed(1)}" class="a-stroke" stroke-dasharray="4 3"/><text x="${(xe+3).toFixed(0)}" y="${(Y0-sl*(xe-X0)+3).toFixed(0)}" class="a-text">${e}×</text>`; });
    modes.forEach(y0=>{ s+=`<path d="M${X0} ${y0}L${X1} ${y0-8}" class="a-strong"/>`;
      eo.forEach(e=>{ const sl=0.28*e, dx=(Y0-y0)/(sl-8/Wd); if(dx>0&&dx<Wd){ const x=X0+dx,y=Y0-sl*dx; if(y>Y1) s+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.5" class="a-hot"/>`; } }); });
    return s+`<path d="M250 ${Y1}V${Y0}" stroke="var(--c4)" stroke-width="1.2" stroke-dasharray="2 3"/><text x="${X1-4}" y="${Y0+16}" class="a-text" text-anchor="end">Running speed</text><text x="${X0}" y="${Y1-6}" class="a-text">Frequency</text></svg>`; },
  contour: ()=>{ let s=`<svg viewBox="0 0 320 200" aria-hidden="true">`; for(let k=4;k>=0;k--){ s+=`<ellipse cx="${150+k*6}" cy="${100-k*3}" rx="${40+k*24}" ry="${22+k*15}" fill="${contour(1-k/4)}" opacity=".78"/>`; }
    return s+`</svg>`; },
  code: ()=>{ let s=`<svg viewBox="0 0 320 200" aria-hidden="true"><rect x="30" y="22" width="260" height="156" rx="6" class="a-stroke"/><path d="M30 40h260" class="a-stroke"/>`;
    const L=[[0,140],[1,180],[1,120],[2,150],[2,90],[1,60],[0,100],[1,170],[2,130]]; L.forEach(([ind,w],i)=>{ s+=`<rect x="${48+ind*16}" y="${52+i*13}" width="${w}" height="5" rx="2" fill="${i%4===0?"var(--c1)":"var(--rule)"}"/>`; });
    return s+`</svg>`; },
  rig: ()=>`<svg viewBox="0 0 320 200" aria-hidden="true"><rect x="70" y="18" width="180" height="12" rx="2" class="a-fill"/><path d="M160 30v14" class="a-strong"/><path d="M152 38l8 8 8-8" class="a-strong"/><path d="M110 54 Q104 110 110 166 H210 Q216 110 210 54Z" class="a-stroke"/><path d="M110 54h100M106 110 Q160 104 214 110" class="a-stroke" stroke-dasharray="3 3"/><rect x="70" y="166" width="180" height="12" rx="2" class="a-fill"/><text x="160" y="195" class="a-text" text-anchor="middle">Compression test</text></svg>`,
  doc: ()=>{ let s=`<svg viewBox="0 0 320 200" aria-hidden="true"><path d="M125 22h56l24 24v132h-80z" class="a-stroke"/><path d="M181 22v24h24" class="a-stroke"/>`; [70,90,110,130,150].forEach((y,i)=>s+=`<rect x="140" y="${y}" width="${[50,44,50,30,40][i]}" height="5" rx="2" class="a-bar"/>`);
    return s+`<rect x="140" y="56" width="26" height="5" rx="2" fill="var(--c1)"/></svg>`; }
};

function artFrame(kind, hint, extra=""){
  return `<figure class="frame art ${extra}">${(ART[kind]||ART.doc)()}${DRAFT&&hint?`<figcaption class="todo-hint">Add image: ${esc(hint)}</figcaption>`:""}</figure>`;
}
function mediaHTML(m, title, cover=false){
  if(!m) return artFrame("doc");
  if(m.yt){
    if(cover) return `<figure class="frame cover"><img src="https://i.ytimg.com/vi/${m.yt}/hqdefault.jpg" alt="" loading="lazy" data-nozoom></figure>`;
    return `<div><div class="yt"><button type="button" data-yt="${m.yt}" style="background-image:url('https://i.ytimg.com/vi/${m.yt}/hqdefault.jpg')" aria-label="Play video: ${esc(m.caption||title)}"><span class="play"></span></button></div>${m.caption?`<p class="cap">${esc(m.caption)}</p>`:""}</div>`;
  }
  if(m.img) return `<div><figure class="frame${cover?" cover":""}" data-art="${m.art||"doc"}" data-hint="${esc(m.img)}"><img src="${esc(m.img)}" data-remote="${esc(m.remote||"")}" alt="${esc(m.caption||title)}" loading="lazy" ${cover?"data-nozoom":""}></figure>${m.caption&&!cover?`<p class="cap">${esc(m.caption)}</p>`:""}</div>`;
  return artFrame(m.art);
}
function linksHTML(links){
  const items=(links||[]).map(l=>{
    if(isTodo(l.href)) return DRAFT?`<span class="todo">${esc(l.label)}: upload ${esc(todoPath(l.href))}</span>`:"";
    const ext=/^https?:/.test(l.href);
    return `<a href="${esc(l.href)}"${ext?' target="_blank" rel="noopener"':""}>${esc(l.label)}${ext?extIcon:""}</a>`;
  }).join("");
  return items.trim()?`<div class="links">${items}</div>`:"";
}
function stepsHTML(e){
  if(!e.steps) return "";
  const n=e.steps.length;
  if(e.flow){
    return `<details class="more" id="d-${e.id}" open>
      <summary>
        <span class="m-l">
          <span class="m-k">How it works</span>
          <span class="m-t">${esc(e.stepsTitle||(n+" steps"))}</span>
          <span class="m-prev">${e.steps.map((st,i)=>`<span><b>${String(i+1).padStart(2,"0")}</b>${esc(st.title)}</span>`).join("")}</span>
        </span>
        <span class="m-btn"><span class="m-open">View ${n} steps</span><span class="m-close">Hide steps</span></span>
      </summary>
      <ol class="flow">${e.steps.map(st=>`<li><h4>${esc(st.title)}</h4><p>${esc(st.text)}</p></li>`).join("")}</ol>
    </details>`;
  }
  return `<details class="more" id="d-${e.id}">
    <summary>
      <span class="m-l">
        <span class="m-k">How it works</span>
        <span class="m-t">${esc(e.stepsTitle||(n+" steps"))}</span>
        <span class="m-prev">${e.steps.map((st,i)=>`<span><b>${String(i+1).padStart(2,"0")}</b>${esc(st.title)}</span>`).join("")}</span>
      </span>
      <span class="m-btn"><span class="m-open">View ${n} steps</span><span class="m-close">Hide steps</span></span>
    </summary>
    <ol class="steps">${e.steps.map(st=>`<li><div><h4>${esc(st.title)}</h4><p>${esc(st.text)}</p></div>${mediaHTML(st.media,st.title)}</li>`).join("")}</ol>
  </details>`;
}
function entryHTML(e){
  return `<article class="entry" id="e-${e.id}">
    <div>
      <h3>${esc(e.title)}${e.draft?'<span class="draft-badge">Draft, hidden from visitors</span>':""}</h3>
      <div class="when">${esc(e.when||"")}</div>
      ${e.summary?`<p>${esc(e.summary)}</p>`:""}
      ${e.bullets?`<ul>${e.bullets.map(b=>`<li>${esc(b)}</li>`).join("")}</ul>`:""}
      ${e.team?`<p class="team">${esc(e.team)}</p>`:""}
      ${linksHTML(e.links)}
    </div>
    ${mediaHTML(e.media,e.title)}
    ${stepsHTML(e)}
  </article>`;
}
function cardHTML(e){
  return `<article class="card entry-card" id="e-${e.id}">${mediaHTML(e.media,e.title)}<h3>${esc(e.title)}</h3><div class="when">${esc(e.when||"")}</div>${e.summary?`<p>${esc(e.summary)}</p>`:""}${e.team?`<p class="team">${esc(e.team)}</p>`:""}${linksHTML(e.links)}</article>`;
}
function groupHeadHTML(g){
  const meta=[g.role&&`<b>${esc(g.role)}</b>`, g.org&&esc(g.org), g.when&&esc(g.when), g.where&&esc(g.where)].filter(Boolean);
  const big=!!(g.role||g.tools);
  return `<div class="ghead${big?" big":""}${g.pointer?" pointer":""}">
    <h2 class="group-title">${esc(g.title)}</h2>
    ${meta.length?`<div class="panel-meta">${meta.map(x=>`<span>${x}</span>`).join("")}</div>`:""}
    ${g.lead?`<p class="g-lead">${esc(g.lead)}</p>`:""}
    ${g.tools?`<ul class="tools" aria-label="Tools">${g.tools.split(/,\s*/).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}
    ${g.links?linksHTML(g.links):""}
  </div>`;
}
function headHTML(h){
  if(!h) return "";
  const meta=[h.role&&`<b>${esc(h.role)}</b>`, h.org&&esc(h.org), h.when&&esc(h.when), h.where&&esc(h.where)].filter(Boolean);
  return `<div class="panel-head"><h2>${esc(h.title)}</h2>${meta.length?`<div class="panel-meta">${meta.map(x=>`<span>${x}</span>`).join("")}</div>`:""}${h.lead?`<p class="lead">${esc(h.lead)}</p>`:""}${h.tools?`<ul class="tools" aria-label="Tools">${h.tools.split(/,\s*/).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}</div>`;
}

function overviewHTML(){
  const O=OVERVIEW;
  const sel=O.selected.map(id=>allEntries.find(([,e])=>e.id===id)).filter(Boolean).map(([tab,e])=>{
    const t=TABS.find(x=>x.id===tab);
    return `<a href="#${tab}/${e.id}">${mediaHTML(e.media,e.title,true)}<h3>${esc(e.title)}</h3><span class="where">${esc(t.label)}</span></a>`;
  }).join("");
  return `
  <section class="hero">
    <div>
      <span class="eyebrow">${esc(SITE.availabilityShort)}</span>
      <h1>Saad Tahir</h1>
      <p class="statement">${esc(O.statement)}</p>
      <p class="sub">${esc(O.sub)}</p>
      <div class="cta"><a class="btn solid" href="#research">View research</a><a class="btn" href="#industry">View industry work</a><a class="btn ghost" href="#contact">Contact</a></div>
    </div>
    <figure class="portrait" data-art="monogram" data-hint="${esc(O.portrait.img)}">
      <img src="${esc(O.portrait.img)}" data-remote="${esc(O.portrait.remote||"")}" alt="Portrait of Saad Tahir" data-nozoom>

    </figure>
  </section>
  ${O.facts.length?`<div class="facts">${O.facts.map(f=>`<div><b>${esc(f.n)}</b>${esc(f.l)}</div>`).join("")}</div>`:""}
  <div class="head-row"><h2 class="group-title">Selected work</h2><a href="#projects">All projects</a></div>
  <div class="sel">${sel}</div>
  <div class="two">
    <div><h2 class="group-title">Experience</h2><ul class="timeline">${O.timeline.map(x=>`<li><span class="d">${esc(x.d)}</span><span><a class="t" href="#${x.go}">${esc(x.t)}</a><span class="o">${esc(x.o)}</span></span></li>`).join("")}</ul></div>
    <div><h2 class="group-title">Education</h2><ul class="timeline">${O.education.map(x=>`<li><span class="d">${esc(x.d)}</span><span><span class="t">${esc(x.t)}</span><span class="o">${esc(x.o)}</span></span></li>`).join("")}</ul></div>
  </div>
  <h2 class="group-title">Tools and methods</h2>
  <ul class="timeline">${O.tools.map(([k,v])=>`<li><span class="d">${esc(k)}</span><span class="t" style="font-weight:400">${esc(v)}</span></li>`).join("")}</ul>`;
}

function publicationsHTML(){
  const docs=DOCS.filter(d=>DRAFT||!isTodo(d.href));
  return `<div class="panel-head"><h2>Publications and documents</h2><p class="lead">Peer-reviewed work on corrugated packaging mechanics and solar energy, plus the full reports behind this site.</p>${linksHTML([{label:"Google Scholar",href:"https://scholar.google.com/citations?user=DvhFY7IAAAAJ"},{label:"ResearchGate",href:"https://www.researchgate.net/profile/Saad-Tahir-3"}])}</div>
  <ul class="pubs">${PUBS.map(p=>`<li><span class="y">${esc(p.y)}</span><div><span class="c">${esc(p.cite)}</span><span class="venue">${esc(p.venue)}${p.href?` <a href="${esc(p.href)}" target="_blank" rel="noopener">${esc(p.href.replace("https://",""))}</a>`:""}</span></div></li>`).join("")}</ul>
  <h2 class="group-title">Documents</h2>
  <ul class="docs">${docs.map(d=>`<li><span><span class="dn">${esc(d.n)}</span><span class="ds">${esc(d.s)}</span></span>${isTodo(d.href)?`<span class="links"><span class="todo">Upload ${esc(todoPath(d.href))}</span></span>`:`<span class="links"><a href="${esc(d.href)}" target="_blank" rel="noopener">Open PDF</a></span>`}</li>`).join("")}</ul>`;
}

function cvHTML(){
  return `<div class="panel-head"><h2>CV</h2><p class="lead">A two-page summary of my experience, research and publications.</p>
    <div class="cta"><a class="btn solid" href="${esc(SITE.cv)}" download>Download PDF</a><a class="btn" href="${esc(SITE.cv)}" target="_blank" rel="noopener">Open in new tab</a></div></div>
  <div class="cv-frame"><iframe src="${esc(SITE.cv)}#view=FitH" title="Saad Tahir CV" loading="lazy"></iframe></div>
  <div class="two">
    <div><h2 class="group-title">Education</h2><ul class="timeline">${OVERVIEW.education.map(x=>`<li><span class="d">${esc(x.d)}</span><span><span class="t">${esc(x.t)}</span><span class="o">${esc(x.o)}</span></span></li>`).join("")}</ul></div>
    <div><h2 class="group-title">Honors</h2><ul class="timeline">${HONORS.map(x=>`<li><span class="d">${esc(x.d)}</span><span><span class="t">${esc(x.t)}</span>${x.o?`<span class="o">${esc(x.o)}</span>`:""}</span></li>`).join("")}</ul></div>
  </div>`;
}
function contactHTML(){
  const ic={
    Email:'<path d="M3 5h14v10H3z"/><path d="m3 6 7 5 7-5"/>',
    LinkedIn:'<rect x="3" y="3" width="14" height="14" rx="3"/><path d="M7 9v5M7 6.5v.01M10 14v-3a2 2 0 0 1 4 0v3M10 9v5"/>',
    "Google Scholar":'<path d="M10 3 2 8l8 5 8-5z"/><path d="M5 10v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4"/>',
    ResearchGate:'<circle cx="10" cy="10" r="7"/><path d="M8 7v6M8 7h2.5a1.8 1.8 0 0 1 0 3.6H8M10.5 10.6 12.5 13"/>',
    YouTube:'<rect x="2.5" y="5" width="15" height="10" rx="3"/><path d="m8.5 8 3.5 2-3.5 2z"/>',
    OnyxLeaf:'<path d="M4 16C4 9 9 4 16 4c0 7-5 12-12 12z"/><path d="M4 16 11 9"/>',
    GitHub:'<path d="M7 16c-3 1-3-1.5-4-2m8 4v-3c0-1 .3-1.5.8-2-2.8-.3-5-1.3-5-5.2 0-1 .4-2 1-2.7-.1-.3-.4-1.3.1-2.8 0 0 1-.3 3 1a10 10 0 0 1 5 0c2-1.3 3-1 3-1 .5 1.5.2 2.5.1 2.8.6.7 1 1.6 1 2.7 0 3.9-2.3 4.9-5 5.2.5.5.8 1.2.8 2.3V18"/>'
  };
  const items=[{label:"Email",href:"mailto:"+SITE.email,sub:"The fastest way to reach me"},...SITE.links.map(l=>({...l,sub:{LinkedIn:"Experience and recommendations","Google Scholar":"Publications and citations",ResearchGate:"Papers and research updates",YouTube:"Talks, tests and demos",OnyxLeaf:"My company",GitHub:"Code"}[l.label]||""}))]
    .filter(l=>DRAFT||!isTodo(l.href));
  return `<div class="panel-head"><h2>Let's work together</h2><p class="lead">${esc(SITE.availability)} Based in Islamabad, Pakistan.</p></div>
  <div class="contact-grid">${items.map(l=>{ const todo=isTodo(l.href), ext=/^https?:/.test(l.href);
    return `<a class="contact-card${l.label==="Email"?" primary":""}${todo?" todo":""}" href="${todo?"#":esc(l.href)}"${ext?' target="_blank" rel="noopener"':""}>
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ic[l.label]||ic.OnyxLeaf}</svg>
      <span><b>${esc(l.label)}</b><span>${todo?"Upload link: "+esc(todoPath(l.href)):esc(l.sub||"")}</span></span></a>`; }).join("")}</div>`;
}
function panelHTML(t){
  if(t.id==="overview") return overviewHTML();
  if(t.id==="publications") return publicationsHTML();
  if(t.id==="cv") return cvHTML();
  if(t.id==="contact") return contactHTML();
  let h=headHTML(t.head);
  if(t.entries) h+=t.entries.filter(visible).map(entryHTML).join("");
  if(t.groups) t.groups.forEach(g=>{ const es=g.entries.filter(visible); if(!es.length&&!g.pointer) return;
    const body=es.length?(g.papers?`<div class="papers">${es.map(e=>`<article class="paper" id="e-${e.id}"><div class="when">${esc(e.when||"")}</div><h3>${esc(e.title)}</h3>${e.summary?`<p>${esc(e.summary)}</p>`:""}${e.team?`<p class="team">${esc(e.team)}</p>`:""}${linksHTML(e.links)}</article>`).join("")}</div>`:g.compact?`<div class="cards">${es.map(cardHTML).join("")}</div>`:es.map(entryHTML).join("")):"";
    h+=`<section class="group">${groupHeadHTML(g)}${body}</section>`; });
  return h;
}

/* ---- render ---- */
const tablist=document.getElementById("tablist"), panels=document.getElementById("panels");
TABS.forEach((t,i)=>{
  tablist.insertAdjacentHTML("beforeend",`<button class="tab" role="tab" id="tab-${t.id}" aria-controls="p-${t.id}" aria-selected="false" tabindex="-1">${esc(t.label)}</button>`);
  panels.insertAdjacentHTML("beforeend",`<section class="panel" role="tabpanel" id="p-${t.id}" aria-labelledby="tab-${t.id}" tabindex="-1" hidden>${panelHTML(t)}</section>`);
});
document.getElementById("draftBar").hidden=!DRAFT;
document.getElementById("cvBtn").href=SITE.cv;
const bar=document.getElementById("bar"); addEventListener("scroll",()=>bar.classList.toggle("scrolled",scrollY>8),{passive:true});
document.getElementById("availFooter").textContent=SITE.availabilityShort;
document.getElementById("footLinks").innerHTML=linksHTML([{label:"Email",href:"mailto:"+SITE.email},...SITE.links]);
document.getElementById("year").textContent=new Date().getFullYear();

/* ---- image fallback chain: local → Google Sites copy → drawn illustration ---- */
document.addEventListener("error",ev=>{
  const img=ev.target; if(img.tagName!=="IMG") return;
  const fig=img.closest("figure.frame, figure.portrait"); if(!fig) return;
  const r=img.dataset.remote;
  if(r && !img.dataset.triedRemote){ img.dataset.triedRemote="1"; img.src=r; return; }
  const kind=fig.dataset.art||"doc", hint=fig.dataset.hint;
  if(kind==="monogram"){ img.remove(); fig.classList.add("mono"); fig.insertAdjacentHTML("afterbegin",`<span class="mono-ST">ST</span>${DRAFT?`<span class="todo-hint">Add image: ${esc(hint)}</span>`:""}`); return; }
  const cap=fig.nextElementSibling; if(cap&&cap.classList.contains("cap")) cap.remove();
  fig.outerHTML=artFrame(kind,hint,fig.classList.contains("cover")?"cover":"");
},true);

/* ---- YouTube: load the player only on click ---- */
document.addEventListener("click",ev=>{
  const b=ev.target.closest("button[data-yt]"); if(!b) return;
  const f=document.createElement("iframe");
  f.src=`https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1&rel=0`;
  f.title=b.getAttribute("aria-label"); f.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"; f.allowFullscreen=true;
  b.replaceWith(f);
});

/* ---- lightbox for figures ---- */
const lb=document.getElementById("lightbox");
document.addEventListener("click",ev=>{
  const img=ev.target.closest("figure.frame img"); if(!img||img.hasAttribute("data-nozoom")||!lb.showModal) return;
  document.getElementById("lbImg").src=img.currentSrc||img.src; document.getElementById("lbImg").alt=img.alt;
  document.getElementById("lbCap").textContent=img.alt; lb.showModal();
});
document.getElementById("lbClose").onclick=()=>lb.close();
lb.addEventListener("click",e=>{ if(e.target===lb) lb.close(); });

/* ---- tabs + deep links (#tab or #tab/entry) ---- */
const tabs=[...tablist.querySelectorAll(".tab")];
function activate(id, focusTab){
  if(!TABS.some(t=>t.id===id)) id="overview";
  tabs.forEach(b=>{ const on=b.id==="tab-"+id; b.setAttribute("aria-selected",on); b.tabIndex=on?0:-1; if(on){ b.scrollIntoView({block:"nearest",inline:"nearest"}); if(focusTab) b.focus(); } });
  document.querySelectorAll(".panel").forEach(p=>p.hidden=p.id!=="p-"+id);

}
function route(){
  const [tab,entry]=decodeURIComponent(location.hash.slice(1)).split("/");
  activate(tab||"overview");
  if(entry){
    const d=document.getElementById("d-"+entry); if(d) d.open=true;
    const el=document.getElementById("e-"+entry);
    if(el){ requestAnimationFrame(()=>{ el.scrollIntoView({block:"start"}); el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash"); }); }
  } else window.scrollTo(0,0);
}
tabs.forEach((b,i)=>{
  b.addEventListener("click",()=>{ location.hash=b.id.slice(4); });
  b.addEventListener("keydown",e=>{
    const k={ArrowRight:1,ArrowLeft:-1}[e.key]; let n=null;
    if(k) n=(i+k+tabs.length)%tabs.length; if(e.key==="Home") n=0; if(e.key==="End") n=tabs.length-1;
    if(n!==null){ e.preventDefault(); history.replaceState(null,"","#"+tabs[n].id.slice(4)); activate(tabs[n].id.slice(4),true); }
  });
});
window.addEventListener("hashchange",route);

/* ---- hero rig animation: plays once, replays on request ---- */
let rigUpdate=null, rigPlayed=false;
function startRig(force){
  const svg=document.getElementById("rigSvg"); if(!svg) return;
  if(!rigUpdate) rigUpdate=buildLattice(svg,{nx:9,ny:12,x0:75,yb:392,W:180,H:340});
  const platen=document.getElementById("platen"), arrow=document.getElementById("arrow");
  const set=t=>{ const top=rigUpdate(t); platen.setAttribute("y",(top-12).toFixed(1)); arrow.setAttribute("transform",`translate(0 ${(top-52).toFixed(1)})`); };
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduce){ set(1); return; }
  if(rigPlayed&&!force){ set(1); return; }
  rigPlayed=true; set(0);
  const T=1900, t0=performance.now(), ease=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;
  (function f(now){ const x=Math.min(1,(now-t0)/T); set(ease(x)); if(x<1) requestAnimationFrame(f); })(t0);
}
document.addEventListener("click",e=>{ if(e.target.id==="replay") startRig(true); });

route();
