window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "shuffle_on": true,
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Margaux Llc",
      "url": "./commercials/en-GB/aetheric-telecommunications/margaux-llc/16741594812570/commercial.mp3",
      "artist": "Aetheric Telecommunications",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Branson Hart",
      "url": "./commercials/en-GB/industrial-steam-boiler-services/branson-hart/16741593537370/commercial.mp3",
      "artist": "Industrial Steam Boiler Services",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Coleman Erwin And Chandler",
      "url": "./commercials/en-GB/clockwork-toy-repair-shop/coleman-erwin-and-chandler/16741597872510/commercial.mp3",
      "artist": "Clockwork Toy Repair Shop",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Redman Llc",
      "url": "./commercials/en-GB/electro-magnetic-research/redman-llc/16741597527050/commercial.mp3",
      "artist": "Electro Magnetic Research",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Hayes Barrymore",
      "url": "./commercials/en-GB/automaton-construction/hayes-barrymore/16741593896540/commercial.mp3",
      "artist": "Automaton Construction",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Sena Knight And Burton",
      "url": "./commercials/en-GB/atmospheric-refineries/sena-knight-and-burton/16741586952800/commercial.mp3",
      "artist": "Atmospheric Refineries",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Sherman Group",
      "url": "./commercials/en-GB/steam-powered-mining-machinery/sherman-group/16741597097020/commercial.mp3",
      "artist": "Steam Powered Mining Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Freeman Warren And Crain",
      "url": "./commercials/en-GB/electro-magnetic-engineering/freeman-warren-and-crain/16741585808540/commercial.mp3",
      "artist": "Electro Magnetic Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Sherman Morris And Donovan",
      "url": "./commercials/en-GB/clockwork-repair-service/sherman-morris-and-donovan/16741595895940/commercial.mp3",
      "artist": "Clockwork Repair Service",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Farley Clay And Chester",
      "url": "./commercials/en-GB/robotic-butler-services/farley-clay-and-chester/16741586100770/commercial.mp3",
      "artist": "Robotic Butler Services",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Marcus Eaton And Yale",
      "url": "./commercials/en-GB/aetheric-telegraphy-network-maintenance/marcus-eaton-and-yale/16741596624610/commercial.mp3",
      "artist": "Aetheric Telegraphy Network Maintenance",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Ambrose And Sons",
      "url": "./commercials/en-GB/steam-powered-automobile-repair/ambrose-and-sons/16741597476310/commercial.mp3",
      "artist": "Steam Powered Automobile Repair",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Huey Leo",
      "url": "./commercials/en-GB/perpetual-motion-device-design/huey-leo/16741598061450/commercial.mp3",
      "artist": "Perpetual Motion Device Design",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Brogan Darcy",
      "url": "./commercials/en-GB/steam-powered-manufacturing-plants/brogan-darcy/16741593063630/commercial.mp3",
      "artist": "Steam Powered Manufacturing Plants",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Ashby Valentin",
      "url": "./commercials/en-GB/robot-programming-school/ashby-valentin/16741585607350/commercial.mp3",
      "artist": "Robot Programming School",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Morris Co",
      "url": "./commercials/en-GB/automated-factory-maintenance/morris-co/16741589845250/commercial.mp3",
      "artist": "Automated Factory Maintenance",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Columbus Dewey",
      "url": "./commercials/en-GB/steam-powered-automated-carriage/columbus-dewey/16741595123000/commercial.mp3",
      "artist": "Steam Powered Automated Carriage",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Aspall Bankhead",
      "url": "./commercials/en-GB/time-machine-repair/aspall-bankhead/16741591113950/commercial.mp3",
      "artist": "Time Machine Repair",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Everly Rudolph",
      "url": "./commercials/en-GB/hot-air-balloon-rentals/everly-rudolph/16741588444890/commercial.mp3",
      "artist": "Hot Air Balloon Rentals",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Benedict Titus And Chase",
      "url": "./commercials/en-GB/robot-programming-school/benedict-titus-and-chase/16741595028450/commercial.mp3",
      "artist": "Robot Programming School",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Benton And Sons",
      "url": "./commercials/en-GB/clock-tower-restoration/benton-and-sons/16741589218370/commercial.mp3",
      "artist": "Clock Tower Restoration",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Arbuckle Parker",
      "url": "./commercials/en-GB/gyrocopter-repair/arbuckle-parker/16741592682930/commercial.mp3",
      "artist": "Gyrocopter Repair",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Pryor Faucher And Berton",
      "url": "./commercials/en-GB/clockwork-toy-makers/pryor-faucher-and-berton/16741596307610/commercial.mp3",
      "artist": "Clockwork Toy Makers",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Emmett Co",
      "url": "./commercials/en-GB/steam-powered-printing-presses/emmett-co/16741584399400/commercial.mp3",
      "artist": "Steam Powered Printing Presses",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Royce Inc",
      "url": "./commercials/en-GB/airship-pilotry-school/royce-inc/16741593120470/commercial.mp3",
      "artist": "Airship Pilotry School",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Luna Wilkes And Elliott",
      "url": "./commercials/en-GB/robotic-butler-services/luna-wilkes-and-elliott/16741591210480/commercial.mp3",
      "artist": "Robotic Butler Services",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Grace Ltd",
      "url": "./commercials/en-GB/steam-powered-windmill/grace-ltd/16741588555500/commercial.mp3",
      "artist": "Steam Powered Windmill",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Rizzo Group",
      "url": "./commercials/en-GB/diesel-powered-locomotive/rizzo-group/16741594579750/commercial.mp3",
      "artist": "Diesel Powered Locomotive",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "May Walton And Birch",
      "url": "./commercials/en-GB/gadgetry-manufacturing/may-walton-and-birch/16741585861040/commercial.mp3",
      "artist": "Gadgetry Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Leigh And Sons",
      "url": "./commercials/en-GB/quantum-mechanics-institute/leigh-and-sons/16741585292460/commercial.mp3",
      "artist": "Quantum Mechanics Institute",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Marx Robinson And Coulson",
      "url": "./commercials/en-GB/gadgetry-manufacturing/marx-robinson-and-coulson/16741584211490/commercial.mp3",
      "artist": "Gadgetry Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Wilhelm Isaac And Emery",
      "url": "./commercials/en-GB/copper-wire-installation/wilhelm-isaac-and-emery/16741584752320/commercial.mp3",
      "artist": "Copper Wire Installation",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Stetson Obadiah And Montague",
      "url": "./commercials/en-GB/airship-manufacturing/stetson-obadiah-and-montague/16741587898510/commercial.mp3",
      "artist": "Airship Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Sampson Leopold And Whitaker",
      "url": "./commercials/en-GB/etheric-telegraphy/sampson-leopold-and-whitaker/16741591282780/commercial.mp3",
      "artist": "Etheric Telegraphy",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Wesley Orlando And Clarence",
      "url": "./commercials/en-GB/clockwork-game/wesley-orlando-and-clarence/16741588155540/commercial.mp3",
      "artist": "Clockwork Game",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Wyatt Co",
      "url": "./commercials/en-GB/animatronic-servant-installation/wyatt-co/16741594675550/commercial.mp3",
      "artist": "Animatronic Servant Installation",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Mortimer Baxter And Chauncey",
      "url": "./commercials/en-GB/steam-powered-automated-carriage/mortimer-baxter-and-chauncey/16741584850480/commercial.mp3",
      "artist": "Steam Powered Automated Carriage",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Emmett Ferguson",
      "url": "./commercials/en-GB/steam-powered-computing-machines/emmett-ferguson/16741586848000/commercial.mp3",
      "artist": "Steam Powered Computing Machines",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Monroe Group",
      "url": "./commercials/en-GB/hot-water-supply/monroe-group/16741598015130/commercial.mp3",
      "artist": "Hot Water Supply",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Elliott Ernst",
      "url": "./commercials/en-GB/clock-tower-design-construction/elliott-ernst/16741591512970/commercial.mp3",
      "artist": "Clock Tower Design Construction",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Rizzo Inc",
      "url": "./commercials/en-GB/steam-powered-engines/rizzo-inc/16741589137960/commercial.mp3",
      "artist": "Steam Powered Engines",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Benedict Corbin",
      "url": "./commercials/en-GB/steam-powered-locomotive/benedict-corbin/16741590386020/commercial.mp3",
      "artist": "Steam Powered Locomotive",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Stanton Roe",
      "url": "./commercials/en-GB/aetheric-energy-delivery-services/stanton-roe/16741598456370/commercial.mp3",
      "artist": "Aetheric Energy Delivery Services",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Hester Worsley",
      "url": "./commercials/en-GB/tesla-coil-design-construction/hester-worsley/16741596252860/commercial.mp3",
      "artist": "Tesla Coil Design Construction",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Holbrook Group",
      "url": "./commercials/en-GB/inventor-s-workshop/holbrook-group/16741596458090/commercial.mp3",
      "artist": "Inventor S Workshop",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Hemingway Co",
      "url": "./commercials/en-GB/steam-powered-computing-machines/hemingway-co/16741593839750/commercial.mp3",
      "artist": "Steam Powered Computing Machines",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Foster Wellington",
      "url": "./commercials/en-GB/diesel-powered-locomotive/foster-wellington/16741594455250/commercial.mp3",
      "artist": "Diesel Powered Locomotive",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Dayton Abel",
      "url": "./commercials/en-GB/ornithopter-factory/dayton-abel/16741588829920/commercial.mp3",
      "artist": "Ornithopter Factory",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Raymond Wynn",
      "url": "./commercials/en-GB/steam-powered-automated-carriage/raymond-wynn/16741584482510/commercial.mp3",
      "artist": "Steam Powered Automated Carriage",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Verity Orleans And Fairfax",
      "url": "./commercials/en-GB/mechanical-servant-creation/verity-orleans-and-fairfax/16741590270020/commercial.mp3",
      "artist": "Mechanical Servant Creation",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Garson Shelton And Rosario",
      "url": "./commercials/en-GB/automated-clock-making/garson-shelton-and-rosario/16741592580920/commercial.mp3",
      "artist": "Automated Clock Making",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Wilhelm And Sons",
      "url": "./commercials/en-GB/automated-hat-making/wilhelm-and-sons/16741587374740/commercial.mp3",
      "artist": "Automated Hat Making",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Kingston Llc",
      "url": "./commercials/en-GB/clock-tower-restoration/kingston-llc/16741587714850/commercial.mp3",
      "artist": "Clock Tower Restoration",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Allerton Ltd",
      "url": "./commercials/en-GB/etheric-telegraphy/allerton-ltd/16741585648220/commercial.mp3",
      "artist": "Etheric Telegraphy",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Welch And Sons",
      "url": "./commercials/en-GB/steam-powered-industrial-refrigeration/welch-and-sons/16741596724080/commercial.mp3",
      "artist": "Steam Powered Industrial Refrigeration",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Lamont Carlton And Franklin",
      "url": "./commercials/en-GB/machine-shops/lamont-carlton-and-franklin/16741589505750/commercial.mp3",
      "artist": "Machine Shops",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Sanford Bernard",
      "url": "./commercials/en-GB/aetheric-imaging/sanford-bernard/16741597648490/commercial.mp3",
      "artist": "Aetheric Imaging",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Montague Pierce And Elliot",
      "url": "./commercials/en-GB/jet-powered-automobile/montague-pierce-and-elliot/16741587202290/commercial.mp3",
      "artist": "Jet Powered Automobile",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Cleveland Melvin",
      "url": "./commercials/en-GB/animatronic-maintenance-repair/cleveland-melvin/16741594253740/commercial.mp3",
      "artist": "Animatronic Maintenance Repair",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Columbus Co",
      "url": "./commercials/en-GB/steam-powered-railway-construction/columbus-co/16741597695880/commercial.mp3",
      "artist": "Steam Powered Railway Construction",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Howard Inc",
      "url": "./commercials/en-GB/steam-powered-printing-presses/howard-inc/16741586244690/commercial.mp3",
      "artist": "Steam Powered Printing Presses",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Benedict Sawyer",
      "url": "./commercials/en-GB/etheric-telegraphy/benedict-sawyer/16741598364180/commercial.mp3",
      "artist": "Etheric Telegraphy",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Noble Hardin",
      "url": "./commercials/en-GB/gadgetry-manufacturing/noble-hardin/16741597742680/commercial.mp3",
      "artist": "Gadgetry Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Dalton Ashby And Fenwick",
      "url": "./commercials/en-GB/flying-machine-parts-store/dalton-ashby-and-fenwick/16741586669380/commercial.mp3",
      "artist": "Flying Machine Parts Store",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Lloyd Wilkes And Holbrook",
      "url": "./commercials/en-GB/gadget-refurbishment/lloyd-wilkes-and-holbrook/16741592383900/commercial.mp3",
      "artist": "Gadget Refurbishment",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Furman Ltd",
      "url": "./commercials/en-GB/robotic-butler-services/furman-ltd/16741593484650/commercial.mp3",
      "artist": "Robotic Butler Services",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Walter Johnson And Aragon",
      "url": "./commercials/en-GB/nautical-submarine-design/walter-johnson-and-aragon/16741592529560/commercial.mp3",
      "artist": "Nautical Submarine Design",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Dexter Solomon And Justice",
      "url": "./commercials/en-GB/aetheric-energy-delivery-services/dexter-solomon-and-justice/16741595443260/commercial.mp3",
      "artist": "Aetheric Energy Delivery Services",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Gray Sherman And Tiberius",
      "url": "./commercials/en-GB/zeppelin-parts/gray-sherman-and-tiberius/16741588730780/commercial.mp3",
      "artist": "Zeppelin Parts",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Rizzo Garfield",
      "url": "./commercials/en-GB/clockwork-musical-instrument-design/rizzo-garfield/16741586735390/commercial.mp3",
      "artist": "Clockwork Musical Instrument Design",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Nelson Moss And Ellsworth",
      "url": "./commercials/en-GB/biomechanical-engineering/nelson-moss-and-ellsworth/16741585953360/commercial.mp3",
      "artist": "Biomechanical Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Rothschild Llc",
      "url": "./commercials/en-GB/underwater-exploration-instruments/rothschild-llc/16741586424520/commercial.mp3",
      "artist": "Underwater Exploration Instruments",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Ferdinand Co",
      "url": "./commercials/en-GB/automated-clock-making/ferdinand-co/16741594773720/commercial.mp3",
      "artist": "Automated Clock Making",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Everly Leonard",
      "url": "./commercials/en-GB/steam-powered-transportation/everly-leonard/16741596158530/commercial.mp3",
      "artist": "Steam Powered Transportation",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Doherty Early",
      "url": "./commercials/en-GB/clockwork-toy-repair-shop/doherty-early/16741597050920/commercial.mp3",
      "artist": "Clockwork Toy Repair Shop",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Merrill Marcus",
      "url": "./commercials/en-GB/steam-powered-barge/merrill-marcus/16741587455620/commercial.mp3",
      "artist": "Steam Powered Barge",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Burrell Dior And Barney",
      "url": "./commercials/en-GB/airship-commuter-services/burrell-dior-and-barney/16741585907730/commercial.mp3",
      "artist": "Airship Commuter Services",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Everly Huey",
      "url": "./commercials/en-GB/airship-racing-league/everly-huey/16741591561160/commercial.mp3",
      "artist": "Airship Racing League",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Dekker Llc",
      "url": "./commercials/en-GB/steam-driven-automobile-manufacturing/dekker-llc/16741586010760/commercial.mp3",
      "artist": "Steam Driven Automobile Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Balliol Bradford And Calthorpe",
      "url": "./commercials/en-GB/steam-powered-taxidermy/balliol-bradford-and-calthorpe/16741584697410/commercial.mp3",
      "artist": "Steam Powered Taxidermy",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Murry Madison",
      "url": "./commercials/en-GB/clockwork-mechanic/murry-madison/16741597922410/commercial.mp3",
      "artist": "Clockwork Mechanic",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Rose Wyatt",
      "url": "./commercials/en-GB/flying-machine-parts/rose-wyatt/16741591709720/commercial.mp3",
      "artist": "Flying Machine Parts",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Ferdinand Greer",
      "url": "./commercials/en-GB/gadget-refurbishment/ferdinand-greer/16741588911580/commercial.mp3",
      "artist": "Gadget Refurbishment",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Godwin Kinsey",
      "url": "./commercials/en-GB/flying-machine-parts-store/godwin-kinsey/16741598671480/commercial.mp3",
      "artist": "Flying Machine Parts Store",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Ely Stuart",
      "url": "./commercials/en-GB/automaton-construction/ely-stuart/16741594903640/commercial.mp3",
      "artist": "Automaton Construction",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Hobson Furman",
      "url": "./commercials/en-GB/etheric-radio-broadcasting-stations/hobson-furman/16741584043760/commercial.mp3",
      "artist": "Etheric Radio Broadcasting Stations",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Christian Llc",
      "url": "./commercials/en-GB/electro-magnetic-wave-research/christian-llc/16741587655560/commercial.mp3",
      "artist": "Electro Magnetic Wave Research",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Colson Inc",
      "url": "./commercials/en-GB/automated-garbage-collection/colson-inc/16741595787830/commercial.mp3",
      "artist": "Automated Garbage Collection",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Merton Brando And Penn",
      "url": "./commercials/en-GB/hot-air-ballooning-entertainment-services/merton-brando-and-penn/16741589760910/commercial.mp3",
      "artist": "Hot Air Ballooning Entertainment Services",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Mercer And Sons",
      "url": "./commercials/en-GB/flying-machine-innovations/mercer-and-sons/16741595841780/commercial.mp3",
      "artist": "Flying Machine Innovations",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Samson Group",
      "url": "./commercials/en-GB/clockwork-toy/samson-group/16741587325340/commercial.mp3",
      "artist": "Clockwork Toy",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Porter Booker And Leigh",
      "url": "./commercials/en-GB/flying-machine-parts/porter-booker-and-leigh/16741595612310/commercial.mp3",
      "artist": "Flying Machine Parts",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Pemberton Inc",
      "url": "./commercials/en-GB/steam-powered-machinists/pemberton-inc/16741586906400/commercial.mp3",
      "artist": "Steam Powered Machinists",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Evans Ward",
      "url": "./commercials/en-GB/robot-programming-school/evans-ward/16741592764610/commercial.mp3",
      "artist": "Robot Programming School",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Lloyd Kellogg",
      "url": "./commercials/en-GB/zeppelin-refurbishment/lloyd-kellogg/16741588213310/commercial.mp3",
      "artist": "Zeppelin Refurbishment",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Walton Asquith And Maynard",
      "url": "./commercials/en-GB/diesel-powered-locomotive/walton-asquith-and-maynard/16741593325540/commercial.mp3",
      "artist": "Diesel Powered Locomotive",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Todd Ludwig",
      "url": "./commercials/en-GB/airship-navigation/todd-ludwig/16741590119800/commercial.mp3",
      "artist": "Airship Navigation",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Richard Cleveland And Astor",
      "url": "./commercials/en-GB/steam-powered-windmill/richard-cleveland-and-astor/16741585197030/commercial.mp3",
      "artist": "Steam Powered Windmill",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Sage Isaiah And March",
      "url": "./commercials/en-GB/aetheric-telegraphy-signal-maintenance/sage-isaiah-and-march/16741590441980/commercial.mp3",
      "artist": "Aetheric Telegraphy Signal Maintenance",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Villiers Yardley And Leo",
      "url": "./commercials/en-GB/steam-powered-mining-machinery/villiers-yardley-and-leo/16741595729070/commercial.mp3",
      "artist": "Steam Powered Mining Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Forbes Newton",
      "url": "./commercials/en-GB/quantum-computing/forbes-newton/16741592824490/commercial.mp3",
      "artist": "Quantum Computing",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Birch Early",
      "url": "./commercials/en-GB/electric-telegraph/birch-early/16741585762940/commercial.mp3",
      "artist": "Electric Telegraph",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Draper Kirby And Kellogg",
      "url": "./commercials/en-GB/gilded-cogsmithing/draper-kirby-and-kellogg/16741586049990/commercial.mp3",
      "artist": "Gilded Cogsmithing",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Emmett Group",
      "url": "./commercials/en-GB/steam-powered-computing-machines/emmett-group/16741597575630/commercial.mp3",
      "artist": "Steam Powered Computing Machines",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Harrison Palmer",
      "url": "./commercials/en-GB/aetheric-airship-construction/harrison-palmer/16741594967330/commercial.mp3",
      "artist": "Aetheric Airship Construction",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Roland Augustine And Yves",
      "url": "./commercials/en-GB/steam-powered-textile-weaving/roland-augustine-and-yves/16741589656210/commercial.mp3",
      "artist": "Steam Powered Textile Weaving",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Halen Ltd",
      "url": "./commercials/en-GB/automated-steam-powered-furniture-assembly/halen-ltd/16741591667580/commercial.mp3",
      "artist": "Automated Steam Powered Furniture Assembly",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Angelo Waldorf",
      "url": "./commercials/en-GB/clockwork-game/angelo-waldorf/16741584802420/commercial.mp3",
      "artist": "Clockwork Game",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Lawrence Lancaster And Abrahams",
      "url": "./commercials/en-GB/steam-powered-windmill/lawrence-lancaster-and-abrahams/16741584905390/commercial.mp3",
      "artist": "Steam Powered Windmill",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Pollack Co",
      "url": "./commercials/en-GB/x-ray-imaging/pollack-co/16741589292280/commercial.mp3",
      "artist": "X Ray Imaging",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Chance Fenwick And Murry",
      "url": "./commercials/en-GB/steam-powered-locomotive/chance-fenwick-and-murry/16741587556070/commercial.mp3",
      "artist": "Steam Powered Locomotive",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Justice Cosgrove And Hilliard",
      "url": "./commercials/en-GB/clockwork-watch-makers/justice-cosgrove-and-hilliard/16741587154590/commercial.mp3",
      "artist": "Clockwork Watch Makers",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Yale Ltd",
      "url": "./commercials/en-GB/tesla-coil-installation-repair/yale-ltd/16741598405500/commercial.mp3",
      "artist": "Tesla Coil Installation Repair",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Grover Roe And Brogan",
      "url": "./commercials/en-GB/etheric-radio/grover-roe-and-brogan/16741587504390/commercial.mp3",
      "artist": "Etheric Radio",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Roscoe Bergman",
      "url": "./commercials/en-GB/time-travel/roscoe-bergman/16741596105600/commercial.mp3",
      "artist": "Time Travel",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Overton Herbert And Redman",
      "url": "./commercials/en-GB/quantum-computing/overton-herbert-and-redman/16741594152180/commercial.mp3",
      "artist": "Quantum Computing",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Dixon Flynn",
      "url": "./commercials/en-GB/nautical-airship-design/dixon-flynn/16741587975670/commercial.mp3",
      "artist": "Nautical Airship Design",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Marcus Inc",
      "url": "./commercials/en-GB/etheric-radio-broadcasting-stations/marcus-inc/16741598254720/commercial.mp3",
      "artist": "Etheric Radio Broadcasting Stations",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Worthy Murray",
      "url": "./commercials/en-GB/robot-programming-school/worthy-murray/16741588499440/commercial.mp3",
      "artist": "Robot Programming School",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Ward Ltd",
      "url": "./commercials/en-GB/steamboat-constructors/ward-ltd/16741593591840/commercial.mp3",
      "artist": "Steamboat Constructors",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Jobe Barclay And Neville",
      "url": "./commercials/en-GB/automaton-construction/jobe-barclay-and-neville/16741595521390/commercial.mp3",
      "artist": "Automaton Construction",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Chase Crawford",
      "url": "./commercials/en-GB/hot-water-supply/chase-crawford/16741587049180/commercial.mp3",
      "artist": "Hot Water Supply",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Page Co",
      "url": "./commercials/en-GB/steam-powered-industrial-boilers/page-co/16741591370330/commercial.mp3",
      "artist": "Steam Powered Industrial Boilers",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Maynard Ltd",
      "url": "./commercials/en-GB/clockwork-toy-makers/maynard-ltd/16741589346300/commercial.mp3",
      "artist": "Clockwork Toy Makers",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Redman Clemency",
      "url": "./commercials/en-GB/airship-maintenance-technicians/redman-clemency/16741597301590/commercial.mp3",
      "artist": "Airship Maintenance Technicians",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Argyle And Sons",
      "url": "./commercials/en-GB/steam-powered-engines/argyle-and-sons/16741595076850/commercial.mp3",
      "artist": "Steam Powered Engines",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Cosgrove Leigh",
      "url": "./commercials/en-GB/clockwork-toy-makers/cosgrove-leigh/16741585476530/commercial.mp3",
      "artist": "Clockwork Toy Makers",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Lombard Inc",
      "url": "./commercials/en-GB/aetheric-energy-generators/lombard-inc/16741589441530/commercial.mp3",
      "artist": "Aetheric Energy Generators",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Dayton Inc",
      "url": "./commercials/en-GB/gadget-refurbishment/dayton-inc/16741595956420/commercial.mp3",
      "artist": "Gadget Refurbishment",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Bamford Bruce",
      "url": "./commercials/en-GB/gilded-cogsmithing/bamford-bruce/16741589603240/commercial.mp3",
      "artist": "Gilded Cogsmithing",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Friedrich March",
      "url": "./commercials/en-GB/diesel-powered-generator-services/friedrich-march/16741586544140/commercial.mp3",
      "artist": "Diesel Powered Generator Services",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Jasper Tiberius And Champagne",
      "url": "./commercials/en-GB/vacuum-tube-manufacturing/jasper-tiberius-and-champagne/16741590079010/commercial.mp3",
      "artist": "Vacuum Tube Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Woodrow Humphrey And Campbell",
      "url": "./commercials/en-GB/aetheric-telegraphy-signal-maintenance/woodrow-humphrey-and-campbell/16741595192320/commercial.mp3",
      "artist": "Aetheric Telegraphy Signal Maintenance",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Pendleton Quinn And Hendry",
      "url": "./commercials/en-GB/steampunk-armchair-design/pendleton-quinn-and-hendry/16741587282200/commercial.mp3",
      "artist": "Steampunk Armchair Design",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Hayward Brennan",
      "url": "./commercials/en-GB/airship-pilotry-school/hayward-brennan/16741597792910/commercial.mp3",
      "artist": "Airship Pilotry School",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Royal Miranda And Bergman",
      "url": "./commercials/en-GB/clockwork-toy-makers/royal-miranda-and-bergman/16741598201900/commercial.mp3",
      "artist": "Clockwork Toy Makers",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Vaughn Ltd",
      "url": "./commercials/en-GB/clockwork-toy-repair-shop/vaughn-ltd/16741595305440/commercial.mp3",
      "artist": "Clockwork Toy Repair Shop",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Riley Easton",
      "url": "./commercials/en-GB/atmospheric-refineries/riley-easton/16741588092380/commercial.mp3",
      "artist": "Atmospheric Refineries",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Carrington Tiberius",
      "url": "./commercials/en-GB/x-ray-vision/carrington-tiberius/16741588602370/commercial.mp3",
      "artist": "X Ray Vision",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Edwards Obadiah And Harper",
      "url": "./commercials/en-GB/gadget-refurbishment/edwards-obadiah-and-harper/16741596013160/commercial.mp3",
      "artist": "Gadget Refurbishment",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Tiberius Rutherford",
      "url": "./commercials/en-GB/steampunk-armaments/tiberius-rutherford/16741596202820/commercial.mp3",
      "artist": "Steampunk Armaments",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Algernon Llc",
      "url": "./commercials/en-GB/clockwork-toy-makers/algernon-llc/16741584957440/commercial.mp3",
      "artist": "Clockwork Toy Makers",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Temple Llc",
      "url": "./commercials/en-GB/experimental-chemistry-works/temple-llc/16741588279170/commercial.mp3",
      "artist": "Experimental Chemistry Works",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Park Marshall And Cotton",
      "url": "./commercials/en-GB/aetheric-radio-broadcasting-network/park-marshall-and-cotton/16741596051780/commercial.mp3",
      "artist": "Aetheric Radio Broadcasting Network",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Quill Sylvester And Beaumont",
      "url": "./commercials/en-GB/mechanical-servant-creation/quill-sylvester-and-beaumont/16741591618950/commercial.mp3",
      "artist": "Mechanical Servant Creation",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Elton Stanton And Troy",
      "url": "./commercials/en-GB/hot-air-ballooning-entertainment-services/elton-stanton-and-troy/16741587815780/commercial.mp3",
      "artist": "Hot Air Ballooning Entertainment Services",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Harding Raynor And Aragon",
      "url": "./commercials/en-GB/biomechanical-prosthetics/harding-raynor-and-aragon/16741588676570/commercial.mp3",
      "artist": "Biomechanical Prosthetics",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Joy Hayward And Ferdinand",
      "url": "./commercials/en-GB/clockwork-toy/joy-hayward-and-ferdinand/16741598520230/commercial.mp3",
      "artist": "Clockwork Toy",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Hayden Inc",
      "url": "./commercials/en-GB/coal-powered-generator/hayden-inc/16741593273750/commercial.mp3",
      "artist": "Coal Powered Generator",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Rothschild And Sons",
      "url": "./commercials/en-GB/copper-wire-supplier/rothschild-and-sons/16741594858970/commercial.mp3",
      "artist": "Copper Wire Supplier",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Marquess Dexter And Sampson",
      "url": "./commercials/en-GB/airship-commuter-services/marquess-dexter-and-sampson/16741595260080/commercial.mp3",
      "artist": "Airship Commuter Services",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Berenguer Caldwell And Thane",
      "url": "./commercials/en-GB/aetheric-energy-conversion/berenguer-caldwell-and-thane/16741598617610/commercial.mp3",
      "artist": "Aetheric Energy Conversion",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Chauncey Alfonso",
      "url": "./commercials/en-GB/machine-shops/chauncey-alfonso/16741584303280/commercial.mp3",
      "artist": "Machine Shops",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Gable Irvin And Lasalle",
      "url": "./commercials/en-GB/steam-powered-automobile-repair/gable-irvin-and-lasalle/16741584646540/commercial.mp3",
      "artist": "Steam Powered Automobile Repair",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Crawford Sena",
      "url": "./commercials/en-GB/steam-powered-railway-construction/crawford-sena/16741592110060/commercial.mp3",
      "artist": "Steam Powered Railway Construction",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Jamieson Stanton And Presley",
      "url": "./commercials/en-GB/coal-powered-generator/jamieson-stanton-and-presley/16741592206680/commercial.mp3",
      "artist": "Coal Powered Generator",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Jermyn And Sons",
      "url": "./commercials/en-GB/steam-powered-mechanical-musicians/jermyn-and-sons/16741597208390/commercial.mp3",
      "artist": "Steam Powered Mechanical Musicians",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Milford Niles",
      "url": "./commercials/en-GB/copper-wire-emporium/milford-niles/16741585390620/commercial.mp3",
      "artist": "Copper Wire Emporium",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Hunt Saville",
      "url": "./commercials/en-GB/automated-hat-making/hunt-saville/16741596818890/commercial.mp3",
      "artist": "Automated Hat Making",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Milford Inc",
      "url": "./commercials/en-GB/ornithopter-maintenance-repair/milford-inc/16741594366980/commercial.mp3",
      "artist": "Ornithopter Maintenance Repair",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Roscoe Eastwood And Darcy",
      "url": "./commercials/en-GB/steam-powered-railway-construction/roscoe-eastwood-and-darcy/16741597160890/commercial.mp3",
      "artist": "Steam Powered Railway Construction",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Aitken Inc",
      "url": "./commercials/en-GB/vacuum-tube-manufacturing/aitken-inc/16741585700520/commercial.mp3",
      "artist": "Vacuum Tube Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Knight Inc",
      "url": "./commercials/en-GB/aetheric-radio-broadcasting-network/knight-inc/16741592428840/commercial.mp3",
      "artist": "Aetheric Radio Broadcasting Network",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Bronson Byron And Ruby",
      "url": "./commercials/en-GB/clockwork-watch-makers/bronson-byron-and-ruby/16741596915170/commercial.mp3",
      "artist": "Clockwork Watch Makers",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Ashby And Sons",
      "url": "./commercials/en-GB/hot-air-balloon-rentals/ashby-and-sons/16741586316880/commercial.mp3",
      "artist": "Hot Air Balloon Rentals",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Marmaduke Edmond And Dayton",
      "url": "./commercials/en-GB/ornithopter-factory/marmaduke-edmond-and-dayton/16741592015300/commercial.mp3",
      "artist": "Ornithopter Factory",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Boyd Lambton",
      "url": "./commercials/en-GB/etheric-radio-broadcasting-stations/boyd-lambton/16741587105970/commercial.mp3",
      "artist": "Etheric Radio Broadcasting Stations",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Lane Bedford And Sullivan",
      "url": "./commercials/en-GB/electro-magnetic-research/lane-bedford-and-sullivan/16741589072870/commercial.mp3",
      "artist": "Electro Magnetic Research",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Valentin Rider And Otto",
      "url": "./commercials/en-GB/dirigible-merchant-shipping/valentin-rider-and-otto/16741593183650/commercial.mp3",
      "artist": "Dirigible Merchant Shipping",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Thurston Orleans",
      "url": "./commercials/en-GB/steam-powered-automobile-repair/thurston-orleans/16741586486140/commercial.mp3",
      "artist": "Steam Powered Automobile Repair",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Lysander Snowdon And Quincy",
      "url": "./commercials/en-GB/animatronic-entertainment/lysander-snowdon-and-quincy/16741586616740/commercial.mp3",
      "artist": "Animatronic Entertainment",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Elton Dalton",
      "url": "./commercials/en-GB/steam-powered-machinists/elton-dalton/16741586369990/commercial.mp3",
      "artist": "Steam Powered Machinists",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Levy Inc",
      "url": "./commercials/en-GB/factory-of-clanking-contraptions/levy-inc/16741596360310/commercial.mp3",
      "artist": "Factory Of Clanking Contraptions",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Hopkins Columbus And Edmonds",
      "url": "./commercials/en-GB/perpetual-motion-device-design/hopkins-columbus-and-edmonds/16741584118700/commercial.mp3",
      "artist": "Perpetual Motion Device Design",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Morrissey And Sons",
      "url": "./commercials/en-GB/nautical-airship-design/morrissey-and-sons/16741591924860/commercial.mp3",
      "artist": "Nautical Airship Design",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Dorsey Tom And Florence",
      "url": "./commercials/en-GB/hot-air-ballooning-tours/dorsey-tom-and-florence/16741593671810/commercial.mp3",
      "artist": "Hot Air Ballooning Tours",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Dewinters Co",
      "url": "./commercials/en-GB/steam-powered-locomotive/dewinters-co/16741589003000/commercial.mp3",
      "artist": "Steam Powered Locomotive",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Norman Bamford",
      "url": "./commercials/en-GB/railcar-manufacturering/norman-bamford/16741584555740/commercial.mp3",
      "artist": "Railcar Manufacturering",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Innovation And Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-innovation-and-advertising-come-together.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Future Of Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-future-of-advertising-is-now.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Power Of AI",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-power-of-ai-technology-meets-the-world-of-advertising.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Technology Leads",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-leads-the-way-in-advertisemen.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Meets Advertising",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-meets-advertising-excellence.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    }
  ]
});

