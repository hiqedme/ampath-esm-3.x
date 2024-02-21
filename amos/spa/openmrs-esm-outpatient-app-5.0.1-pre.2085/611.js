(globalThis.webpackChunk_openmrs_esm_outpatient_app=globalThis.webpackChunk_openmrs_esm_outpatient_app||[]).push([[611],{4611:(e,t,A)=>{"use strict";A.r(t),A.d(t,{addPatientToQueue:()=>g,addProviderToRoomModal:()=>S,addQueueEntryWidget:()=>k,addVisitToQueueModal:()=>L,appointmentsList:()=>y,clearAllQueueEntries:()=>v,editQueueEntryStatusModal:()=>U,homeDashboard:()=>b,importTranslation:()=>p,outpatientSideNav:()=>_,patientInfoBannerSlot:()=>T,previousVisitSummaryWidget:()=>P,queueList:()=>m,removeQueueEntry:()=>C,serviceQueuesDashboardLink:()=>h,startupApp:()=>q,transitionQueueEntryStatusModal:()=>N});var i=A(2870);const n={formUuid:{_type:i.Type.UUID,_default:"a000cb34-9ec1-4344-a1c8-f692232f6edd"},encounterTypeUuid:{_type:i.Type.UUID,_default:"67a71486-1a54-468f-ac3e-7091a9a79584"}},a={bmiUnit:{_type:i.Type.String,_default:"kg / m²"}};var u={concepts:{priorityConceptSetUuid:{_type:i.Type.ConceptUuid,_default:"78063dec-b6d8-40c1-9483-dd4d3c3ca434"},defaultPriorityConceptUuid:{_type:i.Type.ConceptUuid,_description:"The UUID of the default priority for the queues eg Not urgent.",_default:"f4620bfa-3625-4883-bd3f-84c2cce14470"},emergencyPriorityConceptUuid:{_type:i.Type.ConceptUuid,_description:"The UUID of the priority with the highest sort weight for the queues eg Emergency.",_default:"04f6f7e0-e3cb-4e13-a133-4479f759574e"},serviceConceptSetUuid:{_type:i.Type.ConceptUuid,_default:"a8f3f64a-11d5-4a09-b0fb-c8118fa349f3"},statusConceptSetUuid:{_type:i.Type.ConceptUuid,_default:"d60ffa60-fca6-4c60-aea9-a79469ae65c7"},defaultStatusConceptUuid:{_type:i.Type.ConceptUuid,_description:"The UUID of the default status for the queues eg Waiting.",_default:"51ae5e4d-b72b-4912-bf31-a17efb690aeb"},defaultTransitionStatus:{_type:i.Type.ConceptUuid,_description:"The UUID of the default status for attending a service in the queues eg In Service.",_default:"ca7494ae-437f-4fd0-8aae-b88b9a2ba47d"},visitQueueNumberAttributeUuid:{_type:i.Type.ConceptUuid,_description:"The UUID of the visit attribute that contains the visit queue number.",_default:"c61ce16f-272a-41e7-9924-4c555d0932c5"},systolicBloodPressureUuid:{_type:i.Type.ConceptUuid,_default:"5085AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},diastolicBloodPressureUuid:{_type:i.Type.ConceptUuid,_default:"5086AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},pulseUuid:{_type:i.Type.ConceptUuid,_default:"5087AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},temperatureUuid:{_type:i.Type.ConceptUuid,_default:"5088AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},oxygenSaturationUuid:{_type:i.Type.ConceptUuid,_default:"5092AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},heightUuid:{_type:i.Type.ConceptUuid,_default:"5090AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},weightUuid:{_type:i.Type.ConceptUuid,_default:"5089AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},respiratoryRateUuid:{_type:i.Type.ConceptUuid,_default:"5242AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},generalPatientNoteUuid:{_type:i.Type.ConceptUuid,_default:"165095AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},midUpperArmCircumferenceUuid:{_type:i.Type.ConceptUuid,_default:"1343AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},historicalObsConceptUuid:{_type:i.Type.Array,_description:"The Uuids of the obs that are displayed on the previous visit modal",_default:["161643AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"]}},contactAttributeType:{_type:i.Type.UUID,_description:"The Uuids of person attribute-type that captures contact information `e.g Next of kin contact details`",_default:[]},vitals:n,biometrics:a,showQueueTableTab:{_type:i.Type.Boolean,_default:!1,_description:"Disable outpatient table tabs"},appointmentStatuses:{_type:i.Type.Array,_description:"Configurable appointment status (status of appointments)",_default:["Requested","Scheduled","CheckedIn","Completed","Cancelled","Missed"]},defaultIdentifierTypes:{_type:i.Type.Array,_element:{_type:i.Type.String},_description:"The identifier types to be display on all patient search result page",_default:["05ee9cf4-7242-4a17-b4d4-00f707265c8a","f85081e2-b4be-4e48-b3a4-7994b69bb101"]},showRecommendedVisitTypeTab:{_type:i.Type.Boolean,_description:"Whether start visit form should display recommended visit type tab. Requires `visitTypeResourceUrl`",_default:!1},customPatientChartUrl:{_type:i.Type.String,_default:"",_description:"Custom URL to load patient chart"},customPatientIdUrl:{_type:i.Type.String,_default:"",_description:"Custom URL to fetch patient with id"},defaultFacilityUrl:{_type:i.Type.String,_default:"/ws/rest/v1/kenyaemr/default-facility",_description:"Custom URL to load default facility if it is not in the session"},customPatientChartText:{_type:i.Type.String,_default:"",_description:"Custom label for patient chart button"}},o=A(5206),r=A.n(o),d=A(8744);function s(e){var t=e.dashboardLinkConfig,A=t.name,n=t.title,a=(0,d.useLocation)(),u="".concat(window.spaBase,"/home"),s=(0,o.useMemo)((function(){var e=a.pathname.split("/home"),t=e[e.length-1];return decodeURIComponent(t)}),[a.pathname]);return r().createElement(i.ConfigurableLink,{to:"".concat(u,"/").concat(A),className:"cds--side-nav__link ".concat(s.match(A)&&"active-left-nav-link")},n)}var c,p=A(3979),l="@openmrs/esm-outpatient-app",f={featureName:"outpatient",moduleName:l},y=(0,i.getAsyncLifecycle)((function(){return Promise.all([A.e(670),A.e(924),A.e(176),A.e(121)]).then(A.bind(A,1121))}),f),m=(0,i.getAsyncLifecycle)((function(){return Promise.all([A.e(670),A.e(252),A.e(924),A.e(53),A.e(176),A.e(521)]).then(A.bind(A,9521))}),f),_=(0,i.getAsyncLifecycle)((function(){return A.e(242).then(A.bind(A,7242))}),f),h=(0,i.getSyncLifecycle)((c={name:"service-queues",slot:"service-queues-dashboard-slot",title:"Service queues"},function(){return r().createElement(d.BrowserRouter,null,r().createElement(s,{dashboardLinkConfig:c}))}),f),b=(0,i.getAsyncLifecycle)((function(){return Promise.all([A.e(670),A.e(252),A.e(457),A.e(766),A.e(364),A.e(924),A.e(53),A.e(330),A.e(308),A.e(227)]).then(A.bind(A,2227))}),f),U=(0,i.getAsyncLifecycle)((function(){return Promise.all([A.e(670),A.e(252),A.e(924),A.e(53),A.e(328)]).then(A.bind(A,328))}),{featureName:"edit queue status",moduleName:l}),T=(0,i.getAsyncLifecycle)((function(){return Promise.all([A.e(670),A.e(924),A.e(764)]).then(A.bind(A,2764))}),{featureName:"patient info slot",moduleName:l}),g=(0,i.getAsyncLifecycle)((function(){return Promise.all([A.e(670),A.e(252),A.e(457),A.e(766),A.e(924),A.e(53),A.e(308)]).then(A.bind(A,3308))}),{featureName:"patient info slot",moduleName:l}),C=(0,i.getAsyncLifecycle)((function(){return Promise.all([A.e(670),A.e(252),A.e(457),A.e(924),A.e(53),A.e(733)]).then(A.bind(A,8733))}),{featureName:"remove queue entry and end visit",moduleName:l}),v=(0,i.getAsyncLifecycle)((function(){return Promise.all([A.e(670),A.e(252),A.e(924),A.e(53),A.e(86)]).then(A.bind(A,4086))}),{featureName:"clear all queue entries and end visits",moduleName:l}),L=(0,i.getAsyncLifecycle)((function(){return Promise.all([A.e(670),A.e(252),A.e(924),A.e(53),A.e(981)]).then(A.bind(A,1981))}),{featureName:"add visit to queue",moduleName:l}),N=(0,i.getAsyncLifecycle)((function(){return Promise.all([A.e(670),A.e(252),A.e(924),A.e(53),A.e(425)]).then(A.bind(A,6425))}),{featureName:"transition queue status",moduleName:l}),P=(0,i.getAsyncLifecycle)((function(){return Promise.all([A.e(670),A.e(924),A.e(330),A.e(644)]).then(A.bind(A,1330))}),f),S=(0,i.getAsyncLifecycle)((function(){return Promise.all([A.e(670),A.e(252),A.e(924),A.e(53),A.e(616)]).then(A.bind(A,6616))}),{featureName:"add provider queue room",moduleName:l}),k=(0,i.getAsyncLifecycle)((function(){return Promise.all([A.e(670),A.e(252),A.e(924),A.e(53),A.e(286)]).then(A.bind(A,4286))}),f);function q(){(0,i.registerBreadcrumbs)([]),(0,i.defineConfigSchema)(l,u)}},3979:(e,t,A)=>{var i={"./am.json":[8788,788],"./en.json":[3574,574],"./es.json":[8319,319],"./fr.json":[2757,757],"./he.json":[5833,833],"./km.json":[7807,807]};function n(e){if(!A.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],n=t[0];return A.e(t[1]).then((()=>A(n)))}n.keys=()=>Object.keys(i),n.id=3979,e.exports=n}}]);