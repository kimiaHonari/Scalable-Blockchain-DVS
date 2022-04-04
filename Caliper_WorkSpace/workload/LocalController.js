
'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class MyWorkload extends WorkloadModuleBase {
    constructor() {
        super();
this.txIndex=0;
    }
    
    
    
    async submitTransaction() {
        this.txIndex=this.txIndex+1;
        
        //const contractId =
           // this.roundArguments.contractIds[this.txIndex % this.roundArguments.contractIds.length];
        //const shardId = parseInt(contractId[contractId.length - 1]);
       const assetID = `${this.workerIndex}_${this.txIndex}_order11`;
       const group=this.roundArguments.assets[this.txIndex % this.roundArguments.assets.length];
       if(group==1){

            const request = {
                contractId: 'VSIContract3',
                contractFunction: 'ComputeVSI',
                invokerIdentity: '_Org3MSP_admin3',
                contractArguments: ['[[2,2,21.7,12.7,0,0,1,1,-1.4415025249117361,135,1,1.1,0.95],[3,1,52.8,26.4,0,0,1,0.955603476323553,-4.1959278990160831,135,1,1.05,0.95],[4,1,7.6,1.6,0,0,1,0.96324097258088537,-3.9596463816485765,135,1,1.05,0.95],[5,1,0,0,0,0.19,1,0.97707522391469337,-3.3470262374571766,135,1,1.05,0.95],[6,4,0,0,0,0,1,0.96178919114299111,-4.20043551528352,135,1,1.05,0.95],[7,4,22.8,10.9,0,0,1,0.9581800771730915,-4.41159005292343,135,1,1.05,0.95],[12,4,11.2,7.5,0,0,2,0.98098369675755892,-3.589171274733264,135,1,1.05,0.95]]','[[1,2,0.02,0.06,0.03,130,130,130,0,0,1,-360,360,37.892701775628446,-13.603450471485523,-37.576231703393937,11.552860688188796],[1,3,0.05,0.19,0.02,130,130,130,0,0,1,-360,360,40.498682068591194,13.05710836120193,-39.5798092962055,-11.478569830097891],[2,4,0.06,0.17,0.02,65,65,65,0,0,1,-360,360,29.09499221580154,10.901280889327129,-28.502096780495012,-11.149243660550429],[3,4,0.01,0.04,0,130,130,130,0,0,1,-360,360,-13.220190344120782,-14.921429805455816,13.263711158074884,15.09551306127222],[2,5,0.05,0.2,0.02,130,130,130,0,0,1,-360,360,18.049656141959197,6.2201280240196857,-17.860695974196108,-7.418963346155226],[2,6,0.06,0.18,0.02,65,65,65,0,0,1,-360,360,29.701583143932602,10.947041402812028,-29.086633640210742,-11.027231339845914],[4,6,0.01,0.04,0,90,90,90,0,0,1,-360,360,9.9883253143900887,1.0194098793544377,-9.97746066304857,-0.97595127398835746],[5,7,0.05,0.12,0.01,70,70,70,0,0,1,-360,360,17.860695830812055,7.6003519067629508,-17.65944769402148,-8.0537489052052589],[4,12,0,0.26,0,65,65,65,0,0,1,-360,360,-2.3499399401835603,-6.5656791024588061,2.3499399401835603,6.7019524535244068]]','[2,0,2,2,2]',1,0.915,assetID],
                readOnly: false,
                timeout:60
            };

            await this.sutAdapter.sendRequests(request);

       } 
       if(group==2){


            const request = {
                contractId: 'VSIContract2',
                contractFunction: 'ComputeVSI',
                invokerIdentity: 'admin1',
                contractArguments: ['[[6,1,0,0,0,0,1,0.97222520186961325,-2.7235315897431769,135,1,1.05,0.95],[7,1,22.8,10.9,0,0,1,0.96659605002793259,-3.0559554712865582,135,1,1.05,0.95],[8,1,30,30,0,0,1,0.95956303570084267,-3.2099018499828591,135,1,1.05,0.95],[9,1,0,0,0,0,1,0.98019395918465024,-3.5557432697265252,135,1,1.05,0.95],[11,1,0,0,0,0,1,0.98019395918465024,-3.5557432697265252,135,1,1.05,0.95],[22,2,0,0,0,0,3,0.99999999999999978,-4.0614486755405119,135,1,1.1,0.95],[23,2,3.2,1.6,0,0,2,0.99999999999999978,-2.3197095955919358,135,1,1.1,0.95],[24,1,8.7,6.7,0,0.04,3,0.98853005707079977,-3.5240150948940592,135,1,1.05,0.95],[25,1,0,0,0,0,3,0.990132553141637,-3.1875429773877504,135,1,1.05,0.95],[26,1,3.5,2.3,0,0,3,0.97211030662411857,-3.6369761771674214,135,1,1.05,0.95],[27,2,0,0,0,0,3,1,-2.698259188076721,135,1,1.1,0.95],[28,1,0,0,0,0,1,0.973126515079628,-2.8821354775822017,135,1,1.05,0.95],[29,1,2.4,0.9,0,0,3,0.94982658634213324,-4.12125505705183,135,1,1.05,0.95],[30,1,17.4,13.4,0,0,3,0.90648348841821258,-5.2094676804320619,135,1,1.05,0.95],[2,4,21.7,12.7,0,0,1,0.99999999999999989,-0.61319624620201285,135,1,1.1,0.95],[4,4,7.6,1.6,0,0,1,0.97932506767209648,-2.1698404612817717,135,1,1.05,0.95],[5,4,0,0,0,0.19,1,0.98203128396110251,-2.1877002606666807,135,1,1.05,0.95],[10,4,5.8,2,0,0,3,0.98444957664905952,-3.9862395575030432,135,1,1.05,0.95],[15,4,8.2,2.5,0,0,2,0.98028194332033447,-2.9198000957742836,135,1,1.05,0.95],[21,4,17.5,11.2,0,0,3,0.99340369542052853,-4.1442700819783891,135,1,1.05,0.95]]','[[2,6,0.06,0.18,0.02,65,65,65,0,0,1,-360,360,22.639629303736218,7.2502307008235718,-22.291257830759761,-8.1503381250445059],[4,6,0.01,0.04,0,90,90,90,0,0,1,-360,360,25.765453457535049,11.052473109714809,-25.683498070045246,-10.724651559755593],[5,7,0.05,0.12,0.01,70,70,70,0,0,1,-360,360,14.730288938551581,6.1025796548280615,-14.595311455515231,-6.7279803788448],[6,7,0.03,0.08,0.01,130,130,130,0,0,1,-360,360,8.2307108894488472,3.3016476575199869,-8.2046885444845419,-4.1720196211553278],[6,8,0.01,0.04,0,32,32,32,0,0,1,-360,360,25.894565055621054,24.386581807552865,-25.760709296695804,-23.85115877185185],[6,9,0,0.21,0,65,65,65,0,0,1,-360,360,6.5910636434885292,-3.6413829105592121,-6.5910636434885292,3.767357314045455],[6,10,0,0.56,0,32,32,32,0,0,1,-360,360,3.7663220819934473,-2.0807902346052636,-3.7663220819934464,2.1904822321987276],[9,11,0,0.21,0,65,65,65,0,0,1,-360,360,0,0,0,0],[9,10,0,0.11,0,65,65,65,0,0,1,-360,360,6.5910636434885319,-3.7673573140455421,-6.5910636434885319,3.8333439063478614],[10,22,0.07,0.15,0,32,32,32,0,0,1,-360,360,-3.2033140372664226,-8.7102931565771353,3.2655251100795173,8.8436025983194817],[21,22,0.01,0.02,0,32,32,32,0,0,1,-360,360,-18.847393921770419,-23.335080503424184,18.938567799997781,23.517428259878919],[15,23,0.1,0.2,0,16,16,16,0,0,1,-360,360,-7.9618375166208288,-5.6568258536792859,8.06110414705064,5.8553591145389081],[22,24,0.12,0.18,0,16,16,16,0,0,1,-360,360,-0.61409291007743594,6.8057453221698623,0.67012724546836855,-6.7216938190834616],[23,24,0.13,0.27,0,16,16,16,0,0,1,-360,360,7.938895852949333,0.50656954016639366,-7.8566283688674323,-0.33570630399629203],[24,25,0.19,0.33,0,16,16,16,0,0,1,-360,360,-1.5134988766008857,0.39648779002913442,1.5182584082440003,-0.38822123507004119],[25,26,0.25,0.38,0,16,16,16,0,0,1,-360,360,3.5464021925977285,2.3705313327485449,-3.5000000000000115,-2.3000000000000154],[25,27,0.11,0.21,0,16,16,16,0,0,1,-360,360,-5.0646606008416937,-1.9823100976782637,5.0978507476095078,2.04567310514409],[28,27,0,0.4,0,65,65,65,0,0,1,-360,360,-0.78074941637682771,-6.53657237234478,0.78074941637682771,6.7196240398998723],[27,29,0.22,0.42,0,16,16,16,0,0,1,-360,360,9.3457811489198317,7.1203853562509,-9.0420854205287942,-6.5406026020498249],[27,30,0.32,0.6,0,16,16,16,0,0,1,-360,360,11.685618687093786,9.4988425997425985,-10.9599172636223,-8.1381524307335589],[29,30,0.24,0.45,0,16,16,16,0,0,1,-360,360,6.642085420528776,5.64060260204984,-6.4400827363775974,-5.2618475692663775],[8,28,0.06,0.2,0.02,32,32,32,0,0,1,-360,360,-4.2392907033043272,-6.1488412281483145,4.2688126283933432,4.3795112112773449],[6,28,0.02,0.06,0.01,32,32,32,0,0,1,-360,360,3.492094230253135,-3.0910666351082763,-3.4880632120166419,2.1570611610669665]]','[2,2,2,2,2,2,2,2,2,2,2,2,2,0]',2,0.765,assetID],
                readOnly: false,
                timeout:60
            };

            await this.sutAdapter.sendRequests(request);
    }
        
       if(group==3){

            const request = {
                contractId: 'VSIContract4',
                contractFunction: 'ComputeVSI',
                invokerIdentity: '_Org5MSP_admin5',
                contractArguments: ['[[10,1,5.8,2,0,0,3,0.98410378296574152,-5.2411089507472406,135,1,1.05,0.95],[12,1,11.2,7.5,0,0,2,0.98024478174167518,-4.1818514383936183,135,1,1.05,0.95],[13,2,0,0,0,0,2,0.99999999999999989,-1.1527055740085281,135,1,1.1,0.95],[14,1,24.8,6.4,0,0,2,0.94727753138928572,-6.2477582891799868,135,1,1.05,0.95],[15,1,8.2,2.5,0,0,2,0.97331371544601186,-5.2586805618976715,135,1,1.05,0.95],[16,1,3.5,1.8,0,0,2,0.97448446437938663,-4.9618964036486117,135,1,1.05,0.95],[17,1,9,5.8,0,0,2,0.9758723389410292,-5.3918888023234937,135,1,1.05,0.95],[18,1,3.2,0.9,0,0,2,0.96411450872926741,-6.0541076927329867,135,1,1.05,0.95],[19,1,9.5,3.4,0,0,2,0.96227698214296309,-6.3084884447951106,135,1,1.05,0.95],[20,1,2.2,0.7,0,0,2,0.96680918466055776,-6.0982230317331734,135,1,1.05,0.95],[21,1,17.5,11.2,0,0,3,0.99332577190646809,-5.4023030346708492,135,1,1.05,0.95],[4,4,7.6,1.6,0,0,1,0.97664396741896331,-2.7751041996271932,135,1,1.05,0.95],[6,4,0,0,0,0,1,0.97017079233555337,-3.2907116022377809,135,1,1.05,0.95],[9,4,0,0,0,0,1,0.979186897875691,-4.576946594950468,135,1,1.05,0.95],[22,4,0,0,0,0,3,1,-5.3206321172493514,135,1,1.1,0.95],[23,4,3.2,1.6,0,0,2,0.99999999999999989,-4.2944814592929239,135,1,1.1,0.95]]','[[6,10,0,0.56,0,32,32,32,0,0,1,-360,360,5.8025335064877535,-2.3150468168189891,-5.8025335064877535,2.5472548521967395],[9,10,0,0.11,0,65,65,65,0,0,1,-360,360,10.154433687240193,-4.3180083019703819,-10.154433687240191,4.4576959489973076],[4,12,0,0.26,0,65,65,65,0,0,1,-360,360,9.0395594958218339,-1.2416052640401551,-9.0395594958218339,1.4685459036257149],[12,13,0,0.14,0,65,65,65,0,0,1,-360,360,-36.999999973745794,-12.853810461923695,36.999999973745787,15.089166586801712],[12,14,0.12,0.26,0,32,32,32,0,0,1,-360,360,15.431153326704816,5.5392838113830614,-15.095455793073837,-4.811939155182607],[12,15,0.07,0.13,0,32,32,32,0,0,1,-360,360,12.928051542925752,-1.6053824772780116,-12.804416687927429,1.8349900651320421],[12,16,0.09,0.2,0,32,32,32,0,0,1,-360,360,6.4803544723288269,-0.0486364100721377,-6.4410179992707759,0.13605079464558142],[14,15,0.22,0.2,0,16,16,16,0,0,1,-360,360,-9.7045438295237343,-1.5880608146345732,9.9416239655164542,1.8035882109915886],[16,17,0.08,0.19,0,16,16,16,0,0,1,-360,360,2.9410180169425639,-1.936050796274515,-2.9305735191129365,1.9608564786198792],[15,18,0.11,0.22,0,16,16,16,0,0,1,-360,360,6.3814897092060257,0.92022853853520981,-6.3332205825215144,-0.82369028516618947],[18,19,0.06,0.13,0,16,16,16,0,0,1,-360,360,3.1332205979826973,-0.076309717063065358,-3.126879952195273,0.090047782935817347],[19,20,0.03,0.07,0,32,32,32,0,0,1,-360,360,-6.3731199950659327,-3.4900477929605103,6.3902253095450776,3.5299601934118492],[10,20,0.09,0.21,0,32,32,32,0,0,1,-360,360,8.6785042561350956,4.4359443411125019,-8.5902253267825177,-4.229960172623155],[10,17,0.03,0.08,0,32,32,32,0,0,1,-360,360,6.10000488580761,7.8423989336135227,-6.06942646607427,-7.7608564809912846],[10,21,0.03,0.07,0,32,32,32,0,0,1,-360,360,-1.3730056862703182,-12.370891263489666,1.4209965339166286,12.482869907997724],[10,22,0.07,0.15,0,32,32,32,0,0,1,-360,360,-3.2485361875178351,-8.9124027386655325,3.3135762721151507,9.051774348516922],[21,22,0.01,0.02,0,32,32,32,0,0,1,-360,360,-18.920996513185816,-23.682869909974844,19.014123712770811,23.86912430914483],[15,23,0.1,0.2,0,16,16,16,0,0,1,-360,360,-11.718696930336572,-7.058806739501061,11.916255031537014,7.45392294190195]]','[2,2,2,0,2,2,2,2,2,2,2]',3,0.846,assetID],
                readOnly: false,
                timeout:60
            };

            await this.sutAdapter.sendRequests(request);

       }
    }
    

  
}

function createWorkloadModule() {
    return new MyWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;

