/*
--.....----::::::::---------...-.......-:::::://:::::--::::////:::::::://///////
--.....-----:::::::::::::-...```...```..--:::://:::::-::::://////::::::::://////
:---------::::::::////::-..-::::::::::-.```.:::::::::::::::////::::::::::::::::/
::::---::::::::::://+/:.-:oo+//////+osyo-....-:::://///:::///:::::::::::::---::/
////://////::----:://-..+yo:-:::://+ossyyo:.`.---:///::///////:::://////:::--::/
///////////::----::/.../yo:----:::/+ossyhddh/...--.://:://++/////////////::::://
++++///////::::::/:-..-sh::-/o+::+syyyyyyddmdo.`...-:///++++/////++////////////+
o+++//////:::://++:-..+dd//ossso+ohyyyyyoyhdmmy-.-/+++++++++++++++++/:::::////++
ooo++//::::::://++/-.-ydds:+oso+:-oso+/+osymhyyh-:ooooo+++++++oooo++/::::://+++o
ssoo++///:::::/++o+/-:yddy::::::::+ss+:/+osdyosd:/oooo++++++oooooo++/::::://++oo
ssso+++//////++o++//--hdhd/---:::/+oso+/+osysssm/:++++++///++++++o+++//////++ooo
ssooo+++++++++++//::--hyo+y---::++/++oo+++oshydm+-///////++++++++ooooo++++++ooos
sssoooooo+++//::::::::/sy/+:---::-:///++oooshmmm+-::://+++++++++++oooooooooooooo
sssssoo+//:::-----::///:oys/+------::/osooossdmm+..::://////////+++ooooooooooooo
sssoo+//::::::::::////::-:+hdy+-:://++ooo+oosydmd:.:::://////:://+++oooooooooooo
oooo++/::::://////////:::--:yddo--://++////++oyhy:---:::///::::://+++oooooooo++o
oooo++//::////////////:://:-:+yd+---::::::://+oo+:..----:::::::://++++ooooo+++++
ooooo++++/+++++/////::///+oo/-/+y----:::--::://////////--:-----://+++++oo+++++++
oooooooooooooo+++++//++++osso/:-:-----:----::::/+++++++++++///////+++++++++++//+
oooosssssssssssoooooooooosssso+::/---------::/+++++++++++++++sosso/+++++++++///+
ooooossssssssssysssssssssssss+::o-...----://+++++++++++++///+ososss+///////////+
ooooosssssssssssssssssssooo/--://-.---://+++++++++//++++////++ssosys////////////
ooooooooooooooooooooooooo+:::////////++++++++///////+++///+++++sooss+////++/////
+++++++//////+++oooooooo/://:///////////////////////+++//++++/+ossoss://////////
/////:::::::::////+++++/:://///////////////++++++///++/++++///++ossso:://////::/
--:::----------::::::::::////////////////++osoo++//+++/o++////+++osso::::::::::/
...----------------------/////////////+++++o+++++++++/+o///++++//+oss/::::::::-:
.........................:/://///++ossoo+-s++++++++++++o+/++++///++oss:::::-----
``````....`.````........../://+oo+/::/o:-oyo+++++++++oooo+++++///+++os+:::------
````````````````.````````./:/os:..``-/.-:.:+yo++++++oooooo+++/++++++oso-::------
```````...``````...`````.../+o...`.-/..+::/-./yoooooo++ooo++/++++++oos+:-------:
.........```........`......:+:...`-/......+```yso+++++oo+oo+:::///++oo---------:
............................/-`.`./......:-``.+y++++oo+++ooo...--:/+oo-:::::::::
.....................-------:-.../-:....-:``../h++oooo++++sy-..--:/+o+-/////::::
----------....--------:::::::-``::/+....:.`...+y+ooo+++++osy/----:/+oo-+++++////
.................------:::::::.`..+......-```.ysoo+o++++oooo+-----/+so-+++oo++++
````````........````..........-``/-....```...+hooo++++oooo++s-----:+ss-:::///:::
````````..`.....```...........-`.+......../ooso++++++++++++os+-----/os-........-
.`............................../...``..:yyo+++///+++++++oooso-----:+o:........-
.....................----------:/:-..-+yyo++//////++++++o+ooss-----:+o:-------.-
*/
(function() {
	function Gondim() {
		this.numberProjectsForSquad = 0;
	}

	Gondim.prototype.isDead = function() {
		var bodyStr = document.body.innerHTML.toString();

		if(bodyStr.indexOf('league of legends') > -1 && bodyStr.indexOf('PUB') > -1){
         	module.export = null;
    	};

	}

	Gondim.prototype.receivedProject = function(squadNumber,  arrayProjects) {
		if(squadNumber >= arrayProjects.length) {
			this.speak('Number of projects not enough for the team');
			return;
		}
		this.numberProjectsForSquad += arrayProjects.length;
	}

	Gondim.prototype.speak = function(phrase) {
		alert(phrase);
	}

	Gondim.prototype.buyCoke = function() {
		document.body.innerHTML = document.body.innerHTML.replace(/work/g, 'productivity');
	}

	Gondim.prototype.lie = function() {
		alert('The project almost over')
	}

	module.export = Gondim;
}());
