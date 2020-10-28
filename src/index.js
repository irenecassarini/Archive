var tracklist1 = "MarieRoseLAB - A3, <br> Giek_1 - Ascending <br>  Turian - Sacrifice <br>  M.E.S.H. - Kalimbopolis <br> Nicolas Gaunin - Vavau <br>  Nyakinyua - Rise <br> Varg - (+46) Placing My IPhone X Facing Up To See When U Answer My Texts <br> Toxe - Let Me Thru <br>  WULFFLUW XICV - Cachaos ft Santa Muerte <br> Drippin - Waterfall<br> Air Max ’97 - Hounded<br>M.E.S.H. - Damaged merc<br> Laurel Halo & Hodge - Tru <br> Djrum - Untitled 9<br>  Sumorai - Unreal"
var tracklist2 = "Hank Williams - Lost Highway <br> Hecq - IV <br> David Eugene <br> Edwards and Alexander Hacke - Lily <br> Body Sculptures - On the Flowers Face <br> The Bug & Earth - American Dream <br> Surachai - An Abandoned Throne in the Hall of Extinction <br> Dirty Beaches - Lone Runner <br> Ben Frost - Sleeping Beauty <br> Rick de Greef - Redgld black <br> Rick de Greef - Hersenmist <br> Rick de Greef - Zand <br> Rick de Greef - Outro (Uit de tijd gekomen) <br> Emptyset - Function: Vulgar Display of Power (Roly Porter Variation) <br> asmsorod - forbidden daughter of god <br> VHK - Nincsen távol <br> Lustmord - Andras Sodom <br> Hoyt axton - Blue Prelude"
var tracklist3 = "333coconutz - a thin paper sleeve where my pencil dance as tears fall on your body <br> SSIEGE - Nuovo eden [unreleased] <br> SSIEGE - Hold you [unreleased] <br> jjjacob - Particulates <br> Peder Mannerfelt - Perspectives <br> Second Woman - I E/P <br> Kowton - Pea Soup <br> Lēvo - Mbombo <br> Lokane - In the trap Nervous Horizon <br> Air Max 97 - Fruit Crush <br> Habib1 - QUINCENERA <br> Dehousy - Gates <br> K A D A H N / E L A D A I R - New Vision <br> Bonfire <br> NKISI - Kill <br> Ziùr - Cipher <br> Lorenzo Senni - One life, One chance"
var tracklist4 = "Réelle - 11.okt.2018 <br> Arca - EN <br>Arca - Sad Bitch <br> Sissel Wincent - Still Undetermined  <br> Weightausend - Seq Blood <br>Katatonic Silentio - Fire <br>Shcuro & ViL - Fuck <br>Elysia Crampton - Oscollo (drums only version) <br> Murlo - Furnace <br>Cryptolect - Punished <br> LUKANN - Home <br> CORIN - Elevate <br>Voiron - Hardchore <br>SOPHIE - Reason Why ft. Kim Petras <br>SHODAN - TEARS <br> Gabber Modus Operandi - Sangkakala III <br> Kamixlo - Mi Sabor (Estoc remix) <br> Laura Grabb - Ion Spot <br> HAJ300 - lat mig <br> Lotic - Damsel in Distress (excerpt)"
var tracklist5 = "DJ Logic ft. DJ plead - NA <br>Geeneus ft. Katy B - As I <br>Dinamarca - Nicole <br>DJ Logic - Precision <br>Kelela - Turn to dust (leonce remix) <br>Husn hai suhana (Coolie No.1) <br>Emo kid - Enkwarini <br>Sho madjozi - John cena <br>DOT - Ubiza wethu <br>Jumping back slash - Untitled darknezz <br>Cazeria cazador - En la noche estas sol@ <br>Ahadadream - Rosalia drum dub <br>Habibi boi - Amizade falsa <br>Lawd knows - Fantasy bootleg <br>Fatima al qadiri - galby <br>Vanyfox - Good day <br>Fatty fever - Hermy <br>Danifox - Para voce tania <br>SHE spells doom - Moments remix (S.S.D. passion fruit mix)"


function handleSound(){
   window.location = 'soundextremism.html';
}

function handleMixes(){
   window.location = 'mixes.html';
}

function handleLiveShows(){
   window.location = 'liveshows.html';
}

function handleHome(){
   window.location = 'home.html';
}

function myFunction1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
  document.querySelector("#myPopup1").innerHTML = `${tracklist1}`
}

function myFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
  document.querySelector("#myPopup2").innerHTML = `${tracklist2}`
}

function myFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
  document.querySelector("#myPopup3").innerHTML = `${tracklist3}`
}

function myFunction4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
  document.querySelector("#myPopup4").innerHTML = `${tracklist4}`
}

function myFunction5() {
  var popup = document.getElementById("myPopup5");
  popup.classList.toggle("show");
  document.querySelector("#myPopup5").innerHTML = `${tracklist5}`
}

document.querySelector("#SoundExtremism").addEventListener("click", handleSound);
document.querySelector("#mixes").addEventListener("click", handleMixes);
document.querySelector("#liveshows").addEventListener("click", handleLiveShows);
document.querySelector("#archive").addEventListener("click", handleHome) 