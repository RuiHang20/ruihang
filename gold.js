var canvas = document.getElementsByTagName('canvas')[0];
canvas.width = 990;
canvas.height = 550;
var ctx = canvas.getContext('2d');
var timer_update;
var game_end = false;
var game_pause = false;
var players = [];
var semut_arr = [];
var ketam_arr = [];
var siput_arr = [];
var katak_arr = [];
var arnab_arr = [];
var cicak_arr = [];
var stone_arr = [];
var mystery_arr = [];
var bomb_arr = [];
var flypig_arr = [];
var flyketam_arr = [];
var flysiput_arr = [];
var flykatak_arr = [];
var flyarnab_arr = [];
var flycicak_arr = [];
var diamond_arr = [];
var clock_arr = [];
var price = [];
var goal = 200;
var level = 1;
var level = 2;
var level = 3;
var level = 4;
var level = 5;
var level = 6;
var mode;
var in_shop = false;
var time_limit;
var time_all = 120;
var total_money = 0;
var pause_num = 0;
var pause_time = 0;
var timer_pause_animation;
var x_explode;
var y_explode;
var explodeRatius;
var isExploding = false;
var money_size = 20;
var money_status = 0;
var money_value = 0;
var money_pos_x = 700;
var money_pos_y = 30;
var catching_object = 0;
var catching_object1 = 0;
var isBombing_arr = [];
var name = document.getElementById('name');
var mapCanvas = document.getElementById('mapCanvas');
var gameLines = document.getElementById('gameLines');
var gameBoard = document.getElementById('gameBoard');
var gameStart = document.getElementById('gameStart');
var gameHelp = document.getElementById('gameHelp');
var gameQuit = document.getElementById('gameQuit');
var gameMode = document.getElementById('gameMode');
var semutLevel = document.getElementById('semutLevel');
var ketamLevel = document.getElementById('ketamLevel');
var siputLevel = document.getElementById('siputLevel');
var katakLevel = document.getElementById('katakLevel');
var arnabLevel = document.getElementById('arnabLevel');
var cicakLevel = document.getElementById('cicakLevel');
var back_exit = document.getElementById('back_exit');
var back = document.getElementById('back');
var nextLevel = document.getElementById('nextLevel');
var gameLoseBoard = document.getElementById('gameLoseBoard');
var gameLose = document.getElementById('gameLose');
var score = document.getElementById('score');
var restart = document.getElementById('restart');
var nextLevel = document.getElementById('nextLevel');
var key_S = document.getElementById('key_S');
var exit_level = document.getElementById('exit_level');
var pause = document.getElementById('pause');
var pause_animation = document.getElementById('pause_animation');
var money = document.getElementById('money');
var bg = document.getElementById('bg');

var BGM = document.getElementById('BGM');
var intro = document.getElementById('intro');
var deathAudio = document.getElementById('death');
var winnerAudio = document.getElementById('winner');
var explodeAudio = document.getElementById('explode');
var cursor = document.getElementById('cursor');
var se = document.getElementById('se');
var ke = document.getElementById('ke');
var si = document.getElementById('si');
var ka = document.getElementById('ka');
var ar = document.getElementById('ar');
var ci = document.getElementById('ci');
var mut = document.getElementById('mut');
var tam = document.getElementById('tam');
var put = document.getElementById('put');
var tak = document.getElementById('tak');
var nab = document.getElementById('nab');
var cak = document.getElementById('cak');

var grid_container_in_level_menu = document.getElementById('testgrid');

function init() {   //初始化函数
    // gameBoard.style.left = ((window.innerWidth - 720) / 2).toString() + 'px';
    // gameBoard.style.top = ((window.innerHeight - 510) / 2).toString() + 'px';
    intro.play();
    time_all = 120;
    players.splice(0, players.length);
    key_S.style.display = "none";
    //key_W.style.left = 180;
    gameLoseBoard.style.display = "none";
    gameLose.style.display = "none";
    score.style.display = "none";
    restart.style.display = "none";
    nextLevel.style.display = "none";
    nextLevel.style.display = 'none';
    canvas.style.display = "none";
    exit_level.style.display = "none";
    pause.style.display = "none";
    pause_animation.style.display = "none";
    money.style.display = "none";
	grid_container_in_level_menu.style.display = "none";
    //  key_W.style.left = canvas.width/2;
    bg.style.backgroundImage = "url(img/open.jpg)"
    bg.style.opacity = 0.9;
    //   gameBoard.style.backgroundColor = '#8D8DD4';
    gameWords.style.lineHeight = '450px';
    gameWords.style.fontSize = 70;
    gameWords.style.color = "#fff200";
    gameWords.innerHTML = '<h2>SELAMAT DATANG KE DUNIA HAIWAN</h2>';
    gameWords.style.display = 'block';
    setTimeout('openWords()', 500);     //开场文字
}
function openWords() {
    gameWords.style.opacity = 0.9;
    setTimeout('closeWords()', 1500);     //关闭开场文字
}
function closeWords() {
    gameWords.style.opacity = 0;
    setTimeout('closeWordsWait()', 800);    //显示主界面
}
function closeWordsWait() {
    var name = document.getElementById('name');
    name.style.display = 'block';
    gameStart.style.display = 'block';
    gameHelp.style.display = 'block';
    gameQuit.style.display = 'block';
    gameWords.style.lineHeight = '450px';
    gameWords.style.display = 'none';
    name.style.opacity = 0;
    gameStart.style.opacity = 0;
    gameHelp.style.opacity = 0;
    gameQuit.style.opacity = 0;
    setTimeout('setgameBoard()', 1000);
}
function setgameBoard() {          //打开游戏面板
    var name = document.getElementById('name');
    name.style.opacity = 1;
    gameStart.style.opacity = 1;
    gameHelp.style.opacity = 1;
    gameQuit.style.opacity = 1;
}
gameStart.onclick = function () {
    cursor.play();
    var name = document.getElementById('name');
	grid_container_in_level_menu.style.display = "grid";
    name.style.display = 'none';
    gameStart.style.display = 'none';
    gameHelp.style.display = 'none';
    gameQuit.style.display = 'none';
    semutLevel.style.display = 'block';
    ketamLevel.style.display = 'block';
    siputLevel.style.display = 'block';
    katakLevel.style.display = 'block';
    arnabLevel.style.display = 'block';
    cicakLevel.style.display = 'block';
    name.style.display = 'block';
    name.style.opacity = 0;
    semutLevel.style.opacity = 0;
    ketamLevel.style.opacity = 0; 
    siputLevel.style.opacity = 0;
    katakLevel.style.opacity = 0;
    arnabLevel.style.opacity = 0;
    cicakLevel.style.opacity = 0;
	grid_container_in_level_menu.style.opacity = 0;
    setTimeout('chooseModeBoard()', 1000);

}
function chooseModeBoard() {        //模式选择面板
    var name = document.getElementById('name');
    name.style.opacity = 1;
    semutLevel.style.opacity = 1;
    ketamLevel.style.opacity = 1;
    siputLevel.style.opacity = 1;
    katakLevel.style.opacity = 1;
    arnabLevel.style.opacity = 1;
    cicakLevel.style.opacity = 1;
	grid_container_in_level_menu.style.opacity = 1;
    mapCanvas.style.display = 'none';
    gameWords.style.lineHeight = '450px';
    gameWords.style.display = 'none';


}

function hideChooseLevelBoard()
{
	var name = document.getElementById('name');
	var grid_container_in_level_menu = document.getElementById('testgrid');
	
    name.style.display = 'none';
    semutLevel.style.display = 'none';
    ketamLevel.style.display = 'none';
    siputLevel.style.display = 'none';
    katakLevel.style.display = 'none';
    arnabLevel.style.display = 'none';
    cicakLevel.style.display = 'none';
	grid_container_in_level_menu.style.display = 'none';
	intro.pause();
}

semutLevel.onclick = function () {
    cursor.play();
    hideChooseLevelBoard();
    mode = 0;
    initGameSemut();
}
ketamLevel.onclick = function () {
    cursor.play();
    hideChooseLevelBoard();
    mode = 0;
    initGameKetam();
}
siputLevel.onclick = function () {
    cursor.play();
    hideChooseLevelBoard();
    mode = 0;
    initGameSiput();
}
katakLevel.onclick = function () {
    cursor.play();
    hideChooseLevelBoard();
    mode = 0;
    initGameKatak();
}
arnabLevel.onclick = function () {
    cursor.play();
    hideChooseLevelBoard();
    mode = 0;
    initGameArnab();
}
cicakLevel.onclick = function () {
    cursor.play();
    hideChooseLevelBoard();
    mode = 0;
    initGameCicak();
}
back_exit.onclick = function () {
    cursor.play();
    hideChooseLevelBoard();
    clearCanvas();
    gameLoseBoard.style.display = "none";
    gameLose.style.display = "none";
    score.style.display = "none";
    init();
}
pairMode.onclick = function () {
    var name = document.getElementById('name');
    name.style.display = 'none';
    singleMode.style.display = 'none';
    pairMode.style.display = 'none';
    mode = 1;
    initGameGradient();
    intro.pause();
}
gameHelp.onclick = function () {
    cursor.play();
    var name = document.getElementById('name');
    gameWords.style.lineHeight = '100px';
    gameWords.innerHTML = '<h2>TUTORIAL<h2><video src="video.mp4" controls width="640" height="360"></video> <div id = "back" style = "position: relative; ">Balik</div>';
    gameWords.style.display = 'block';
    gameWords.style.opacity = 1;
    name.style.display = 'none';
    gameStart.style.display = 'none';
    gameHelp.style.display = 'none';
    gameQuit.style.display = 'none';

    var gameBack = document.getElementById('back');
    gameBack.onclick = function () {
        cursor.play();
        closeWordsWait();
    }
    gameBack.onmousemove = moveTo;
    gameBack.onmouseleave = leaveFrom;
}
gameQuit.onclick = function () {
    cursor.play();
    window.close();
}

function initGameSemut() {
    gameWords.style.display = 'none';
    mapCanvas.style.display = 'block';
    gameLines.style.display = 'block';
    exit_level.style.display = "block";
    pause.style.display = "block";
    key_S.style.display = "block";
    key_S.innerHTML = "Tangkap";

    exit_level.style.opacity = 0;
    pause.style.opacity = 0;
    key_S.style.opacity = 0;
    //    mapCanvas.style.backgroundColor = '#lightgreen';
    //    gameBoard.style.backgroundColor = '#8D8DD4';
    mapCanvas.style.opacity = 0;

    setTimeout("initGameS()", 500);
}
function initGameS() {
    setTimeout('BGM.play()', 1000);
    mapCanvas.style.opacity = 1;
    key_S.style.opacity = 1;
    exit_level.style.opacity = 1;
    pause.style.opacity = 1;
    if (mode == 0)
        players.push(new player(0));
    else {
        for (var i = 0; i < 2; i++)
            players.push(new player(i));
    }
    level = 2;
    total_money = 0;
    createLevel(level);
    // timer_update = setInterval(timeUpdate, 100);
}
function initGameKetam() {
    gameWords.style.display = 'none';
    mapCanvas.style.display = 'block';
    gameLines.style.display = 'block';
    exit_level.style.display = "block";
    pause.style.display = "block";
    key_S.style.display = "block";
    key_S.innerHTML = "Tangkap";

    exit_level.style.opacity = 0;
    pause.style.opacity = 0;
    key_S.style.opacity = 0;
    //    mapCanvas.style.backgroundColor = '#lightgreen';
    //    gameBoard.style.backgroundColor = '#8D8DD4';
    mapCanvas.style.opacity = 0;

    setTimeout("initGameK()", 500);
}
function initGameK() {
    setTimeout('BGM.play()', 1000);
    mapCanvas.style.opacity = 1;
    key_S.style.opacity = 1;
    exit_level.style.opacity = 1;
    pause.style.opacity = 1;
    if (mode == 0)
        players.push(new player(0));
    else {
        for (var i = 0; i < 2; i++)
            players.push(new player(i));
    }
    level = 3;
    total_money = 0;
    createLevel(level);
    // timer_update = setInterval(timeUpdate, 100);
}
function initGameSiput() {
    gameWords.style.display = 'none';
    mapCanvas.style.display = 'block';
    gameLines.style.display = 'block';
    exit_level.style.display = "block";
    pause.style.display = "block";
    key_S.style.display = "block";
    key_S.innerHTML = "Tangkap";

    exit_level.style.opacity = 0;
    pause.style.opacity = 0;
    key_S.style.opacity = 0;
    //    mapCanvas.style.backgroundColor = '#lightgreen';
    //    gameBoard.style.backgroundColor = '#8D8DD4';
    mapCanvas.style.opacity = 0;

    setTimeout("initGameSi()", 500);
}
function initGameSi() {
    setTimeout('BGM.play()', 1000);
    mapCanvas.style.opacity = 1;
    key_S.style.opacity = 1;
    exit_level.style.opacity = 1;
    pause.style.opacity = 1;
    if (mode == 0)
        players.push(new player(0));
    else {
        for (var i = 0; i < 2; i++)
            players.push(new player(i));
    }
    level = 1;
    total_money = 0;
    createLevel(level);
    // timer_update = setInterval(timeUpdate, 100);
}
function initGameKatak() {
    gameWords.style.display = 'none';
    mapCanvas.style.display = 'block';
    gameLines.style.display = 'block';
    exit_level.style.display = "block";
    pause.style.display = "block";
    key_S.style.display = "block";
    key_S.innerHTML = "Tangkap";

    exit_level.style.opacity = 0;
    pause.style.opacity = 0;
    key_S.style.opacity = 0;
    //    mapCanvas.style.backgroundColor = '#lightgreen';
    //    gameBoard.style.backgroundColor = '#8D8DD4';
    mapCanvas.style.opacity = 0;

    setTimeout("initGameKa()", 500);
}
function initGameKa() {
    setTimeout('BGM.play()', 1000);
    mapCanvas.style.opacity = 1;
    key_S.style.opacity = 1;
    exit_level.style.opacity = 1;
    pause.style.opacity = 1;
    if (mode == 0)
        players.push(new player(0));
    else {
        for (var i = 0; i < 2; i++)
            players.push(new player(i));
    }
    level = 4;
    total_money = 0;
    createLevel(level);
    // timer_update = setInterval(timeUpdate, 100);
}
function initGameArnab() {
    gameWords.style.display = 'none';
    mapCanvas.style.display = 'block';
    gameLines.style.display = 'block';
    exit_level.style.display = "block";
    pause.style.display = "block";
    key_S.style.display = "block";
    key_S.innerHTML = "Tangkap";

    exit_level.style.opacity = 0;
    pause.style.opacity = 0;
    key_S.style.opacity = 0;
    //    mapCanvas.style.backgroundColor = '#lightgreen';
    //    gameBoard.style.backgroundColor = '#8D8DD4';
    mapCanvas.style.opacity = 0;

    setTimeout("initGameA()", 500);
}
function initGameA() {
    setTimeout('BGM.play()', 1000);
    mapCanvas.style.opacity = 1;
    key_S.style.opacity = 1;
    exit_level.style.opacity = 1;
    pause.style.opacity = 1;
    if (mode == 0)
        players.push(new player(0));
    else {
        for (var i = 0; i < 2; i++)
            players.push(new player(i));
    }
    level = 6;
    total_money = 0;
    createLevel(level);
    // timer_update = setInterval(timeUpdate, 100);
}
function initGameCicak() {
    gameWords.style.display = 'none';
    mapCanvas.style.display = 'block';
    gameLines.style.display = 'block';
    exit_level.style.display = "block";
    pause.style.display = "block";
    key_S.style.display = "block";
    key_S.innerHTML = "Tangkap";

    exit_level.style.opacity = 0;
    pause.style.opacity = 0;
    key_S.style.opacity = 0;
    //    mapCanvas.style.backgroundColor = '#lightgreen';
    //    gameBoard.style.backgroundColor = '#8D8DD4';
    mapCanvas.style.opacity = 0;

    setTimeout("initGameC()", 500);
}
function initGameC() {
    setTimeout('BGM.play()', 1000);
    mapCanvas.style.opacity = 1;
    key_S.style.opacity = 1;
    exit_level.style.opacity = 1;
    pause.style.opacity = 1;
    if (mode == 0)
        players.push(new player(0));
    else {
        for (var i = 0; i < 2; i++)
            players.push(new player(i));
    }
    level = 5;
    total_money = 0;
    createLevel(level);
    // timer_update = setInterval(timeUpdate, 100);
}
function createLevel(level) {
    BGM.play();
    mapCanvas.style.opacity = 1;
    key_S.style.opacity = 1;
    exit_level.style.opacity = 1;
    pause.style.opacity = 1;
    pause_num = 0;
    timer_update = setInterval(timeUpdate, 100);
    for (var i = 0; i < players.length; i++) {
        players[i].hook.status = 0;
        if (players[i].hook.object) {
            players[i].hook.object.x = 100;
            players[i].hook.object.y = 100;
            players[i].hook.object.moveSpeed = 0;
            players[i].hook.object = 0;
        }
        players[i].hook.x = players[i].x + players[i].width / 2;
        players[i].hook.y = 130;
        players[i].hook.angle = 10;
        players[i].hook.rotateSpeed = -5;
        if (players[0].enhanceStrength)
            players[i].hook.moveSpeed = 20;
        else players[i].hook.moveSpeed = 10;
    }
    switch (level) {
        case 2: {
            bg.style.backgroundImage = "url(img/bg1.jpg)";
            goal = 500;
            semut_arr.splice(0, semut_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flypig_arr.splice(0, flypig_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            stone_arr.push(new stone(500, 250, 2));
            stone_arr.push(new stone(600, 200, 2));
            flypig_arr.push(new flypig(500, 400, 300, 300, 0));
            flypig_arr.push(new flypig(600, 800, 250, 250, 2));
            flypig_arr.push(new flypig(600, 700, 300, 300, 1));
            flypig_arr.push(new flypig(100, 350, 300, 300, 0));
            flypig_arr.push(new flypig(100, 800, 450, 450, 1));
            flypig_arr.push(new flypig(100, 420, 250, 250, 0));
            flypig_arr.push(new flypig(550, 800, 400, 400, 2));
            flypig_arr.push(new flypig(200, 450, 400, 400, 2));
            flypig_arr.push(new flypig(450, 700, 350, 350, 2));
            flypig_arr.push(new flypig(150, 350, 350, 350, 2));
        }
            break;
        case 3: {
            bg.style.backgroundImage = "url(img/bg2.png)";
            goal = 500;
            ketam_arr.splice(0, ketam_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flyketam_arr.splice(0, flyketam_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            stone_arr.push(new stone(500, 250, 2));
            stone_arr.push(new stone(600, 200, 2));
            flyketam_arr.push(new flyketam(500, 400, 300, 300, 0));
            flyketam_arr.push(new flyketam(600, 800, 250, 250, 2));
            flyketam_arr.push(new flyketam(600, 700, 300, 300, 1));
            flyketam_arr.push(new flyketam(100, 350, 300, 300, 0));
            flyketam_arr.push(new flyketam(100, 800, 450, 450, 1));
            flyketam_arr.push(new flyketam(100, 420, 250, 250, 0));
            flyketam_arr.push(new flyketam(550, 800, 400, 400, 2));
            flyketam_arr.push(new flyketam(200, 450, 400, 400, 2));
            flyketam_arr.push(new flyketam(450, 700, 350, 350, 2));
            flyketam_arr.push(new flyketam(150, 350, 350, 350, 2));
        }
            break;
        case 1: {
            bg.style.backgroundImage = "url(img/bg3.png)";
            goal = 500;
            siput_arr.splice(0, siput_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flysiput_arr.splice(0, flysiput_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            stone_arr.push(new stone(500, 250, 2));
            flysiput_arr.push(new flysiput(500, 400, 300, 300, 0));
            flysiput_arr.push(new flysiput(600, 800, 250, 250, 2));
            flysiput_arr.push(new flysiput(600, 700, 300, 300, 1));
            flysiput_arr.push(new flysiput(100, 350, 300, 300, 0));
            flysiput_arr.push(new flysiput(100, 800, 450, 450, 1));
            flysiput_arr.push(new flysiput(100, 420, 250, 250, 0));
            flysiput_arr.push(new flysiput(550, 800, 400, 400, 2));
            flysiput_arr.push(new flysiput(200, 450, 400, 400, 2));
            flysiput_arr.push(new flysiput(450, 700, 350, 350, 2));
            flysiput_arr.push(new flysiput(150, 350, 350, 350, 2));
        }
            break;
        case 4: {
            bg.style.backgroundImage = "url(img/bg4.jpg)";
            goal = 500;
            katak_arr.splice(0, katak_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flykatak_arr.splice(0,  flykatak_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            stone_arr.push(new stone(500, 250, 2));
            stone_arr.push(new stone(600, 200, 2));
            flykatak_arr.push(new flykatak(500, 400, 300, 300, 0));
            flykatak_arr.push(new flykatak(600, 800, 250, 250, 2));
            flykatak_arr.push(new flykatak(600, 700, 300, 300, 1));
            flykatak_arr.push(new flykatak(100, 350, 300, 300, 0));
            flykatak_arr.push(new flykatak(100, 800, 450, 450, 1));
            flykatak_arr.push(new flykatak(100, 420, 250, 250, 0));
            flykatak_arr.push(new flykatak(550, 800, 400, 400, 2));
            flykatak_arr.push(new flykatak(200, 450, 400, 400, 2));
            flykatak_arr.push(new flykatak(450, 700, 350, 350, 2));
            flykatak_arr.push(new flykatak(150, 350, 350, 350, 2));
        }
            break;
        case 6: {
            bg.style.backgroundImage = "url(img/bg5.jpg)";
            goal = 500;
            arnab_arr.splice(0, arnab_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flyarnab_arr.splice(0, flyarnab_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            stone_arr.push(new stone(500, 250, 2));
            stone_arr.push(new stone(600, 200, 2));
            flyarnab_arr.push(new flyarnab(500, 400, 300, 300, 0));
            flyarnab_arr.push(new flyarnab(600, 800, 250, 250, 2));
            flyarnab_arr.push(new flyarnab(600, 700, 300, 300, 1));
            flyarnab_arr.push(new flyarnab(100, 350, 300, 300, 0));
            flyarnab_arr.push(new flyarnab(100, 800, 450, 450, 1));
            flyarnab_arr.push(new flyarnab(100, 420, 250, 250, 0));
            flyarnab_arr.push(new flyarnab(550, 800, 400, 400, 2));
            flyarnab_arr.push(new flyarnab(200, 450, 400, 400, 2));
            flyarnab_arr.push(new flyarnab(450, 700, 350, 350, 2));
            flyarnab_arr.push(new flyarnab(150, 350, 350, 350, 2));
        }
            break;
        case 5: {
            bg.style.backgroundImage = "url(img/bg6.png)";
            goal = 500;
            cicak_arr.splice(0, cicak_arr.length);
            stone_arr.splice(0, stone_arr.length);
            mystery_arr.splice(0, mystery_arr.length);
            bomb_arr.splice(0, bomb_arr.length);
            flycicak_arr.splice(0, flycicak_arr.length);
            diamond_arr.splice(0, diamond_arr.length);
            clock_arr.splice(0, clock_arr.length);
            stone_arr.push(new stone(500, 250, 2));
            stone_arr.push(new stone(600, 200, 2));
            flycicak_arr.push(new flycicak(500, 400, 300, 300, 0));
            flycicak_arr.push(new flycicak(600, 800, 250, 250, 2));
            flycicak_arr.push(new flycicak(600, 700, 300, 300, 1));
            flycicak_arr.push(new flycicak(100, 350, 300, 300, 0));
            flycicak_arr.push(new flycicak(100, 800, 450, 450, 1));
            flycicak_arr.push(new flycicak(100, 420, 250, 250, 0));
            flycicak_arr.push(new flycicak(550, 800, 400, 400, 2));
            flycicak_arr.push(new flycicak(200, 450, 400, 400, 2));
            flycicak_arr.push(new flycicak(450, 700, 350, 350, 2));
            flycicak_arr.push(new flycicak(150, 350, 350, 350, 2));
        }
            break;
    }
    key_S.onclick = function () {
        if (!game_end && !game_pause) {
            if (players[0].hook.status == 0) {
                players[0].hook.status = 1;
                timeUpdate();
		    }
        }
        if (level == 1) {
            si.play();
        } else if (level == 2) {
            se.play();
        } else if (level == 3) {
            ke.play();
        }  else if (level == 4) {
            ka.play();
        } else if (level == 5) {
            ci.play();
        } else {
            ar.play();
        }
    }
    window.onkeydown = function (e) {
        if (!game_end && !game_pause) {
            var keyID = e.keyCode ? e.keyCode : e.which;
			/*
            if (keyID === 38) {// up arrow
                if (mode == 1) {
                    if (players[0].bomb_num && players[1].hook.object != 0) {
                        players[1].hook.status = 1;
                        players[1].hook.object.owner = 0;
                        x_explode = players[1].hook.x;
                        y_explode = players[1].hook.y;
                        draw_explode();
                        players[1].hook.object.x = 100;
                        players[1].hook.object.y = 100;
                        players[1].hook.object.moveSpeed = 0;
                        players[1].hook.object = 0;
                        if (players[0].enhanceStrength)
                            players[1].hook.moveSpeed = -20;
                        else players[1].hook.moveSpeed = -10;
                        players[0].bomb_num--;
                        timeUpdate();
                        explodeAudio.play();
                    }
                }
                else {
                    if (players[0].bomb_num && players[0].hook.object != 0) {
                        players[0].hook.status = 1;
                        players[0].hook.object.owner = 0;
                        x_explode = players[0].hook.x;
                        y_explode = players[0].hook.y;
                        draw_explode();
                        players[0].hook.object.x = 100;
                        players[0].hook.object.y = 100;
                        players[0].hook.object.moveSpeed = 0;
                        players[0].hook.object = 0;
                        if (players[0].enhanceStrength)
                            players[0].hook.moveSpeed = -20;
                        else players[0].hook.moveSpeed = -10;
                        players[0].bomb_num--;
                        timeUpdate();
                        explodeAudio.play();
                    }
                }
                e.preventDefault();
            }
            if (keyID === 87) { // W

                if (players[0].bomb_num && players[0].hook.object != 0) {

                    players[0].hook.status = 1;
                    players[0].hook.object.owner = 0;
                    x_explode = players[0].hook.x;
                    y_explode = players[0].hook.y;
                    draw_explode();
                    players[0].hook.object.x = 100;
                    players[0].hook.object.y = 100;
                    players[0].hook.object.moveSpeed = 0;
                    players[0].hook.object = 0;
                    if (players[0].enhanceStrength)
                        players[0].hook.moveSpeed = -20;
                    else players[0].hook.moveSpeed = -10;
                    timeUpdate();
                    players[0].bomb_num--;
                    explodeAudio.play();
                }

                e.preventDefault();
            }
			*/
            
			if (keyID === 40) { // down arrow
                if (mode == 1) 
				{
                    if (players[1].hook.status == 0) {
                        players[1].hook.status = 1;
                        timeUpdate();
                        e.preventDefault();
                    }
                } else {
                    if (players[0].hook.status == 0) {
                        players[0].hook.status = 1;
                        timeUpdate();
                        e.preventDefault();
						play_kv_sound(level);
                    }
                }
            }
            if (keyID === 83) { // S
                if (players[0].hook.status == 0) {
                    players[0].hook.status = 1;
					console.log(" >>>>> level " + level);
                    timeUpdate();
                    e.preventDefault();
					play_kv_sound(level);
                }

            }
        }
    }
    exit_level.onclick = function () {
        if (!game_pause) {
            check_money();
        }
    }
    pause.onclick = function () {
        cursor.play();
        pause_num++;
        game_pause = true;
        if (pause_num % 2 == 1) pauseGame();
        else continueGame();
    }
    // gameBoard.style.backgroundColor = mapCanvas.style.backgroundColor;
    time_limit = setInterval(function () {
        time_all--;
    }, 1000);

}
function play_kv_sound(int_level)
{
	if(int_level == 1)
	{
		se.play();
	}

	else if(int_level == 2)
	{
		ke.play();
	}

	else if(int_level == 3)
	{
		si.play();
	}

	else if(int_level == 4)
	{
		ka.play();
	}

	else if(int_level == 5)
	{
		ar.play();
	}

	else
	{
		ci.play();
	}
}
function pauseGame() {
    clearInterval(timer_update);
    clearInterval(time_limit);
    pause.innerHTML = "▷";
    pause_animation.style.display = "block";
    pause_animation.style.opacity = 0;
    pause_time = 0;
    BGM.pause();
    timer_pause_animation = setInterval(pauseGameAnimation, 1000);

}
function pauseGameAnimation() {
    pause_time++;

    if (pause_time % 2 == 1) pause_animation.style.opacity = 0.8;
    else pause_animation.style.opacity = 0;
}
function continueGame() {
    game_pause = false;
    pause.innerHTML = "‖";
    BGM.play();
    clearInterval(timer_pause_animation);
    pause_animation.style.display = "none";
    timer_update = setInterval(timeUpdate, 100);
    time_limit = setInterval(function () {
        time_all--;
    }, 1000);
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function draw_all() {
    if (!in_shop) {
        clearCanvas();
        for (var i = 0; i < semut_arr.length; i++)
            if (semut_arr[i].owner == 0)
                semut_arr[i].draw();
        for (var i = 0; i < ketam_arr.length; i++)
            if (ketam_arr[i].owner == 0)
                ketam_arr[i].draw();     
        for (var i = 0; i < siput_arr.length; i++)
            if (siput_arr[i].owner == 0)
                siput_arr[i].draw();
        for (var i = 0; i < katak_arr.length; i++)
            if (katak_arr[i].owner == 0)
                katak_arr[i].draw();
        for (var i = 0; i < arnab_arr.length; i++)
            if (arnab_arr[i].owner == 0)
                arnab_arr[i].draw();
        for (var i = 0; i < cicak_arr.length; i++)
            if (cicak_arr[i].owner == 0)
                cicak_arr[i].draw();   
        for (var i = 0; i < mystery_arr.length; i++)
            if (mystery_arr[i].owner == 0)
                mystery_arr[i].draw();
        for (var i = 0; i < stone_arr.length; i++)
            if (stone_arr[i].owner == 0)
                stone_arr[i].draw();
        for (var i = 0; i < bomb_arr.length; i++)
            if (bomb_arr[i].owner == 0)
                bomb_arr[i].draw();
        for (var i = 0; i < flypig_arr.length; i++)
            if (flypig_arr[i].owner == 0)
                flypig_arr[i].draw();
        for (var i = 0; i < flyketam_arr.length; i++)
            if (flyketam_arr[i].owner == 0)
                flyketam_arr[i].draw();
        for (var i = 0; i < flysiput_arr.length; i++)
            if (flysiput_arr[i].owner == 0)
                flysiput_arr[i].draw();
        for (var i = 0; i < flykatak_arr.length; i++)
            if (flykatak_arr[i].owner == 0)
                flykatak_arr[i].draw();
        for (var i = 0; i < flyarnab_arr.length; i++)
            if (flyarnab_arr[i].owner == 0)
                flyarnab_arr[i].draw();
        for (var i = 0; i < flycicak_arr.length; i++)
            if (flycicak_arr[i].owner == 0)
                flycicak_arr[i].draw();
        for (var i = 0; i < clock_arr.length; i++)
            if (clock_arr[i].owner == 0)
                clock_arr[i].draw();
        for (var i = 0; i < diamond_arr.length; i++)
            if (diamond_arr[i].owner == 0)
                diamond_arr[i].draw();
        for (var i = 0; i < players.length; i++) {
            players[i].draw();
            
            if (players[i].hook.object) {
                players[i].hook.object.draw();
            }
            players[i].hook.draw();
        }
        draw_score();
        draw_bomb();
        draw_time_limit();

        if (isExploding == true) {
            explodeRatius += 5;

            var bombExplode = new Image();
            bombExplode.src = "img/bombExplode.png";
            ctx.drawImage(bombExplode, x_explode - 30, y_explode - 30, explodeRatius, explodeRatius);
        }
        for (var i = 0; i < bomb_arr.length; i++) {
            if (bomb_arr[i].isExploding == true) {
                //console.log(bomb_arr[i]);
                bomb_arr[i].explodeRatiusPic += 5;
                var bombExplode = new Image();
                bombExplode.src = "img/bombExplode.png";
                ctx.drawImage(bombExplode, bomb_arr[i].x - 30, bomb_arr[i].y - 30, bomb_arr[i].explodeRatiusPic, bomb_arr[i].explodeRatiusPic);
            }
        }
        for (var i = 0; i < players.length; i++)
            if (players[i].hook.money_status != 0) {
                console.log(players[i].hook.money_status);
                if (players[i].hook.money_status == 1) {
                    players[i].hook.money_size += 2;
                    players[i].hook.money_pos_x -= 9;
                    players[i].hook.money_pos_y -= 5;
                    ctx.fillStyle = "black";
                    ctx.font = "bold " + players[i].hook.money_size.toString() + "px ppFont";
                    ctx.fillText('$' + players[i].hook.money_value.toString(), players[i].hook.money_pos_x, players[i].hook.money_pos_y);
                } else if (players[i].hook.money_status == 3) {
                    players[i].hook.money_size -= 2;
                    players[i].hook.money_pos_x -= 8;
                    players[i].hook.money_pos_y -= 5;
                    ctx.fillStyle = "black";
                    ctx.font = "bold " + players[i].hook.money_size.toString() + "px ppFont";
                    ctx.fillText('$' + players[i].hook.money_value.toString(), players[i].hook.money_pos_x, players[i].hook.money_pos_y);
                } else if (players[i].hook.money_status == 2) {
                    ctx.fillStyle = "black";
                    ctx.font = "bold " + players[i].hook.money_size.toString() + "px ppFont";
                    ctx.fillText('$' + players[i].hook.money_value.toString(), players[i].hook.money_pos_x, players[i].hook.money_pos_y);
                }
            }
    }
    else {
        enterShopGradient();
    }
}
function draw_explode() {
    explodeRatius = 10;
    isExploding = true;
    setTimeout("close_timer_explode()", 1000);
}
function close_timer_explode() {
    isExploding = false;
}
function draw_bomb() {
    var crackerImg = new Image();
    crackerImg.src = "img/cracker.png";
    if (players[0].bomb_num > 0) {
        for (var i = 0; i < players[0].bomb_num; i++) {
            ctx.drawImage(crackerImg, canvas.width / 2 + 100 + 28 * i - 10, 50, 28, 40);
        }
    }
}
function draw_time_limit() {

    ctx.fillStyle = "Orange";
    ctx.font = "bold 20px ppFont";  
    ctx.lineWidth = 4; // Adjust the outline thickness as desired
    ctx.strokeStyle = "black"; 
    ctx.strokeText("Masa :", 700, 40);
    ctx.strokeText(time_all.toString(), 800, 40);
    ctx.strokeText("Tahap :", 700, 80);
    ctx.strokeText(level.toString(), 800, 80);

    ctx.fillText("Masa :", 700, 40);
    ctx.fillText(time_all.toString(), 800, 40);
    ctx.fillText("Tahap :", 700, 80);
    ctx.fillText(level.toString(), 800, 80);
}
function draw_score() {
    ctx.fillStyle = "Orange";
    ctx.font = "bold 20px ppFont";
    ctx.lineWidth = 4; // Adjust the outline thickness as desired
    ctx.strokeStyle = "black"; 
    
    //total_money = 0;
    //for (var i = 0; i < players.length; i++)
    //    total_money += players[i].money;
    ctx.strokeText("Markah : ", 10, 40);
    ctx.strokeText(' : ' + total_money.toString(), 100, 40);
    ctx.strokeText("Sasaran Markah : ", 10, 80);
    ctx.strokeText('' + goal.toString(), 240, 80);

    ctx.fillText("Markah : ", 10, 40);
    ctx.fillText(' : ' + total_money.toString(), 100, 40);
    ctx.fillText("Sasaran Markah : ", 10, 80);
    ctx.fillText('' + goal.toString(), 240, 80);
}
function check_all() {
    if (time_all == 0) check_money();
    for (var i = 0; i < players.length; i++) {
        players[i].hook.check();
    }
    check_hook_catch_object();
}
function check_money() {
    clearInterval(time_limit);
    for (var i = 0; i < players.length; i++)
        if (players[i].hook.money_status == 0) {
            if (total_money >= goal) {
                endCanvass();
            }
            else {
                endCanvas();
            }
        }
}
function check_hook_catch_object() {
    for (var i = 0; i < semut_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((semut_arr[i].x - players[j].hook.x) * (semut_arr[i].x - players[j].hook.x) +
                (semut_arr[i].y - players[j].hook.y) * (semut_arr[i].y - players[j].hook.y)) < semut_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && semut_arr[i].owner == 0) {
                semut_arr[i].x = players[j].hook.x + semut_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                semut_arr[i].y = players[j].hook.y + semut_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = semut_arr[i];
                semut_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * 5;
                mut.play();
            }
        }
    }
    for (var i = 0; i < ketam_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((ketam_arr[i].x - players[j].hook.x) * (ketam_arr[i].x - players[j].hook.x) +
                (ketam_arr[i].y - players[j].hook.y) * (ketam_arr[i].y - players[j].hook.y)) < ketam_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && ketam_arr[i].owner == 0) {
                ketam_arr[i].x = players[j].hook.x + ketam_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                ketam_arr[i].y = players[j].hook.y + ketam_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = ketam_arr[i];
                ketam_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * 5;
                tam.play();
            }
        }
    }
    for (var i = 0; i < siput_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((siput_arr[i].x - players[j].hook.x) * (siput_arr[i].x - players[j].hook.x) +
                (siput_arr[i].y - players[j].hook.y) * (siput_arr[i].y - players[j].hook.y)) < siput_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && siput_arr[i].owner == 0) {
                siput_arr[i].x = players[j].hook.x + siput_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                siput_arr[i].y = players[j].hook.y + siput_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = siput_arr[i];
                siput_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * 5;
                put.play();
            }
        }
    }
    for (var i = 0; i < katak_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((katak_arr[i].x - players[j].hook.x) * (katak_arr[i].x - players[j].hook.x) +
                (katak_arr[i].y - players[j].hook.y) * (katak_arr[i].y - players[j].hook.y)) < katak_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && katak_arr[i].owner == 0) {
                katak_arr[i].x = players[j].hook.x + katak_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                katak_arr[i].y = players[j].hook.y + katak_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = katak_arr[i];
                katak_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * 5;
                tak.play();
            }
        }
    }
    for (var i = 0; i < arnab_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((arnab_arr[i].x - players[j].hook.x) * (arnab_arr[i].x - players[j].hook.x) +
                (arnab_arr[i].y - players[j].hook.y) * (arnab_arr[i].y - players[j].hook.y)) < arnab_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && arnab_arr[i].owner == 0) {
                arnab_arr[i].x = players[j].hook.x + arnab_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                arnab_arr[i].y = players[j].hook.y + arnab_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = arnab_arr[i];
                arnab_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * 5;
                nab.play();
            }
        }
    }
    for (var i = 0; i < cicak_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((cicak_arr[i].x - players[j].hook.x) * (cicak_arr[i].x - players[j].hook.x) +
                (cicak_arr[i].y - players[j].hook.y) * (cicak_arr[i].y - players[j].hook.y)) < cicak_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && cicak_arr[i].owner == 0) {
                cicak_arr[i].x = players[j].hook.x + cicak_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                cicak_arr[i].y = players[j].hook.y + cicak_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = cicak_arr[i];
                cicak_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * 5;
                cak.play();
            }
        }
    }
    for (var i = 0; i < stone_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((stone_arr[i].x - players[j].hook.x) * (stone_arr[i].x - players[j].hook.x) +
                (stone_arr[i].y - players[j].hook.y) * (stone_arr[i].y - players[j].hook.y)) < stone_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && stone_arr[i].owner == 0) {
                stone_arr[i].x = players[j].hook.x + stone_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                stone_arr[i].y = players[j].hook.y + stone_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = stone_arr[i];
                stone_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * stone_arr[i].speed;
            }
        }
    }
    for (var i = 0; i < mystery_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((mystery_arr[i].x - players[j].hook.x) * (mystery_arr[i].x - players[j].hook.x) +
                (mystery_arr[i].y - players[j].hook.y) * (mystery_arr[i].y - players[j].hook.y)) < mystery_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && mystery_arr[i].owner == 0) {
                mystery_arr[i].x = players[j].hook.x + mystery_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                mystery_arr[i].y = players[j].hook.y + mystery_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = mystery_arr[i];
                mystery_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * mystery_arr[i].speed;
				
            }
        }
    }
    for (var i = 0; i < bomb_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((bomb_arr[i].x - players[j].hook.x) * (bomb_arr[i].x - players[j].hook.x) +
                (bomb_arr[i].y - players[j].hook.y) * (bomb_arr[i].y - players[j].hook.y)) < bomb_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && bomb_arr[i].owner == 0) {
                bomb_arr[i].x = players[j].hook.x + bomb_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                bomb_arr[i].y = players[j].hook.y + bomb_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = bomb_arr[i];
                bomb_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * bomb_arr[i].speed;
                bomb_arr[i].explode();

            }
        }
    }
    for (var i = 0; i < flypig_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((flypig_arr[i].x - players[j].hook.x) * (flypig_arr[i].x - players[j].hook.x) +
                (flypig_arr[i].y - players[j].hook.y) * (flypig_arr[i].y - players[j].hook.y)) < flypig_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && flypig_arr[i].owner == 0) {
                flypig_arr[i].x = players[j].hook.x + flypig_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                flypig_arr[i].y = players[j].hook.y + flypig_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = flypig_arr[i];
                flypig_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * 6;
                mut.play();
                console.log(" >>>>> Before: " + semut_arr);
                semut_arr.push(new semut(350, 100, 2));
                console.log(" >>>>> After: " + semut_arr);
                
                var remove_semut_countdown = setTimeout(remove_semut_and_timeout, 2500);
                function remove_semut_and_timeout()
                {
                    semut_arr.pop();
                    clearTimeout(remove_semut_countdown);
                }
                console.log(" >>>>> After Remove: " + semut_arr);
            }
        }
    }
    for (var i = 0; i < flyketam_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((flyketam_arr[i].x - players[j].hook.x) * (flyketam_arr[i].x - players[j].hook.x) +
                (flyketam_arr[i].y - players[j].hook.y) * (flyketam_arr[i].y - players[j].hook.y)) < flyketam_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && flyketam_arr[i].owner == 0) {
                flyketam_arr[i].x = players[j].hook.x + flyketam_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                flyketam_arr[i].y = players[j].hook.y + flyketam_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = flyketam_arr[i];
                flyketam_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * 6;
                tam.play();
                console.log(" >>>>> Before: " + ketam_arr);
                ketam_arr.push(new ketam(350, 100, 2));
                console.log(" >>>>> After: " + ketam_arr);
                
                var remove_ketam_countdown = setTimeout(remove_ketam_and_timeout, 2500);
                function remove_ketam_and_timeout()
                {
                    ketam_arr.pop();
                    clearTimeout(remove_ketam_countdown);
                }
                console.log(" >>>>> After Remove: " + ketam_arr);
            }
        }
    }
    for (var i = 0; i < flysiput_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((flysiput_arr[i].x - players[j].hook.x) * (flysiput_arr[i].x - players[j].hook.x) +
                (flysiput_arr[i].y - players[j].hook.y) * (flysiput_arr[i].y - players[j].hook.y)) < flysiput_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && flysiput_arr[i].owner == 0) {
                flysiput_arr[i].x = players[j].hook.x + flysiput_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                flysiput_arr[i].y = players[j].hook.y + flysiput_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = flysiput_arr[i];
                flysiput_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * 6;
                put.play();
                console.log(" >>>>> Before: " + siput_arr);
                siput_arr.push(new siput(350, 100, 2));
                console.log(" >>>>> After: " + siput_arr);
                
                var remove_siput_countdown = setTimeout(remove_siput_and_timeout, 2500);
                function remove_siput_and_timeout()
                {
                    siput_arr.pop();
                    clearTimeout(remove_siput_countdown);
                }
                console.log(" >>>>> After Remove: " + siput_arr);
            }
        }
    }
    for (var i = 0; i < flykatak_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((flykatak_arr[i].x - players[j].hook.x) * (flykatak_arr[i].x - players[j].hook.x) +
                (flykatak_arr[i].y - players[j].hook.y) * (flykatak_arr[i].y - players[j].hook.y)) < flykatak_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && flykatak_arr[i].owner == 0) {
                flykatak_arr[i].x = players[j].hook.x + flykatak_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                flykatak_arr[i].y = players[j].hook.y + flykatak_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = flykatak_arr[i];
                flykatak_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * 6;
                tak.play();
                console.log(" >>>>> Before: " + katak_arr);
                katak_arr.push(new katak(350, 100, 2));
                console.log(" >>>>> After: " + katak_arr);
                
                var remove_katak_countdown = setTimeout(remove_katak_and_timeout, 2500);
                function remove_katak_and_timeout()
                {
                    katak_arr.pop();
                    clearTimeout(remove_katak_countdown);
                }
                console.log(" >>>>> After Remove: " + katak_arr);
            }
        }
    }
    for (var i = 0; i < flyarnab_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((flyarnab_arr[i].x - players[j].hook.x) * (flyarnab_arr[i].x - players[j].hook.x) +
                (flyarnab_arr[i].y - players[j].hook.y) * (flyarnab_arr[i].y - players[j].hook.y)) < flyarnab_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && flyarnab_arr[i].owner == 0) {
                flyarnab_arr[i].x = players[j].hook.x + flyarnab_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                flyarnab_arr[i].y = players[j].hook.y + flyarnab_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = flyarnab_arr[i];
                flyarnab_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * 6;
                nab.play();
                console.log(" >>>>> Before: " + arnab_arr);
                arnab_arr.push(new arnab(350, 100, 2));
                console.log(" >>>>> After: " + arnab_arr);
                
                var remove_arnab_countdown = setTimeout(remove_arnab_and_timeout, 2500);
                function remove_arnab_and_timeout()
                {
                    arnab_arr.pop();
                    clearTimeout(remove_arnab_countdown);
                }
                console.log(" >>>>> After Remove: " + arnab_arr);
            }
        }
    }
    for (var i = 0; i < flycicak_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((flycicak_arr[i].x - players[j].hook.x) * (flycicak_arr[i].x - players[j].hook.x) +
                (flycicak_arr[i].y - players[j].hook.y) * (flycicak_arr[i].y - players[j].hook.y)) < flycicak_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && flycicak_arr[i].owner == 0) {
                flycicak_arr[i].x = players[j].hook.x + flycicak_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                flycicak_arr[i].y = players[j].hook.y + flycicak_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = flycicak_arr[i];
                flycicak_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * 6;
                cak.play();
                console.log(" >>>>> Before: " + cicak_arr);
                cicak_arr.push(new cicak(350, 100, 2));
                console.log(" >>>>> After: " + cicak_arr);
                
                var remove_cicak_countdown = setTimeout(remove_cicak_and_timeout, 2500);
                function remove_cicak_and_timeout()
                {
                    cicak_arr.pop();
                    clearTimeout(remove_cicak_countdown);
                }
                console.log(" >>>>> After Remove: " + cicak_arr);
            }
        }
    }
    for (var i = 0; i < diamond_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((diamond_arr[i].x - players[j].hook.x) * (diamond_arr[i].x - players[j].hook.x) +
                (diamond_arr[i].y - players[j].hook.y) * (diamond_arr[i].y - players[j].hook.y)) < diamond_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && diamond_arr[i].owner == 0) {
                diamond_arr[i].x = players[j].hook.x + diamond_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                diamond_arr[i].y = players[j].hook.y + diamond_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = diamond_arr[i];
                diamond_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * diamond_arr[i].speed;
               
            }
        }
    }
    for (var i = 0; i < clock_arr.length; i++) {
        for (var j = 0; j < players.length; j++) {
            if (Math.sqrt((clock_arr[i].x - players[j].hook.x) * (clock_arr[i].x - players[j].hook.x) +
                (clock_arr[i].y - players[j].hook.y) * (clock_arr[i].y - players[j].hook.y)) < clock_arr[i].r
                && players[j].hook.status == 1 && players[j].hook.moveSpeed > 0 && clock_arr[i].owner == 0) {
                clock_arr[i].x = players[j].hook.x + clock_arr[i].r * Math.cos((players[j].hook.angle) * Math.PI / 180);
                clock_arr[i].y = players[j].hook.y + clock_arr[i].r * Math.sin((players[j].hook.angle) * Math.PI / 180);
                players[j].hook.status = 2;
                players[j].hook.object = clock_arr[i];
                clock_arr[i].owner = players[j].hook;
                players[j].hook.moveSpeed = -players[j].hook.moveSpeed * clock_arr[i].speed;
            }
        }
    }
}
function drawEnd() {
    BGM.pause();
    deathAudio.play();
    mapCanvas.style.opacity = 0.5;
    key_S.style.opacity = 0.5;
    exit_level.style.opacity = 0.5;
    pause.style.opacity = 0.5;
    gameLoseBoard.style.display = "block";
    gameLoseBoard.style.color = "white";
    gameLose.style.display = "block";
    gameLose.style.color = "orange";
    score.style.display = "block";
    score.innerHTML = "Markah : " + total_money.toString() + "<br><br>" + "Sasaran Markah : " + goal.toString();
    score.style.color = "yellow";
    restart.style.display = "block";
    restart.style.color = "orange";
    restart.onclick = function () {
        cursor.play();
        clearCanvas();
        gameLoseBoard.style.display = "none";
        gameLose.style.display = "none";
        score.style.display = "none";
        restart.style.display = "none";
        init();
    }
    
    
    window.onkeydown = function (e) {

        var keyID = e.keyCode ? e.keyCode : e.which;
        if (keyID === 13 || keyID === 32) { // space and enter  
            clearCanvas();
            init();

            e.preventDefault();
        }
    }
    // mapCanvas.style.display = "none";
}
function drawEnds() {
    BGM.pause();
    winnerAudio.play();
    mapCanvas.style.opacity = 0.5;
    key_S.style.opacity = 0.5;
    exit_level.style.opacity = 0.5;
    pause.style.opacity = 0.5;
    gameLoseBoard.style.display = "block";
    gameLoseBoard.style.color = "white";
    gameLose.style.display = "block";
    gameLose.style.color = "orange";
    score.style.display = "block";
    score.innerHTML = "Markah : " + total_money.toString() + "<br><br>" + "Sasaran Markah : " + goal.toString();
    score.style.color = "yellow";
    restart.style.display = "block";
    restart.style.color = "orange";
    restart.onclick = function () {
        cursor.play();
        clearCanvas();
        gameLoseBoard.style.display = "none";
        gameLose.style.display = "none";
        score.style.display = "none";
        restart.style.display = "none";
        init();
    }
    

    window.onkeydown = function (e) {

        var keyID = e.keyCode ? e.keyCode : e.which;
        if (keyID === 13 || keyID === 32) { // space and enter  
            clearCanvas();
            init();

            e.preventDefault();
        }
    }
    // mapCanvas.style.display = "none";
}
function endCanvas() {
    clearInterval(timer_update);
    drawEnd();
    semut_arr.splice(0, semut_arr.length);
    ketam_arr.splice(0, ketam_arr.length);
    siput_arr.splice(0, siput_arr.length);
    katak_arr.splice(0, katak_arr.length);
    arnab_arr.splice(0, arnab_arr.length);
    cicak_arr.splice(0, cicak_arr.length);
    stone_arr.splice(0, stone_arr.length);
    mystery_arr.splice(0, mystery_arr.length);
    bomb_arr.splice(0, bomb_arr.length);
    flypig_arr.splice(0, flypig_arr.length);
    flyketam_arr.splice(0, flyketam_arr.length);
    flysiput_arr.splice(0, flysiput_arr.length);
    flykatak_arr.splice(0, flykatak_arr.length);
    flyarnab_arr.splice(0, flyarnab_arr.length);
    flycicak_arr.splice(0, flycicak_arr.length);
    diamond_arr.splice(0, diamond_arr.length);
    clock_arr.splice(0, clock_arr.length);
    players.splice(0, players.length);
}
function endCanvass() {
    clearInterval(timer_update);
    drawEnds();
    semut_arr.splice(0, semut_arr.length);
    ketam_arr.splice(0, ketam_arr.length);
    siput_arr.splice(0, siput_arr.length);
    katak_arr.splice(0, katak_arr.length);
    arnab_arr.splice(0, arnab_arr.length);
    cicak_arr.splice(0, cicak_arr.length);
    stone_arr.splice(0, stone_arr.length);
    mystery_arr.splice(0, mystery_arr.length);
    bomb_arr.splice(0, bomb_arr.length);
    flypig_arr.splice(0, flypig_arr.length);
    flyketam_arr.splice(0, flyketam_arr.length);
    flysiput_arr.splice(0, flysiput_arr.length);
    flykatak_arr.splice(0, flykatak_arr.length);
    flyarnab_arr.splice(0, flyarnab_arr.length);
    flycicak_arr.splice(0, flycicak_arr.length);
    diamond_arr.splice(0, diamond_arr.length);
    clock_arr.splice(0, clock_arr.length);
    players.splice(0, players.length);
}
function enterShopGradient() {
    clearInterval(timer_update);
    mapCanvas.style.opacity = 0;
    gameBoard.style.opacity = 0;
    key_S.style.opacity = 0;
    exit_level.style.opacity = 0;
    pause.style.opacity = 0;
    setTimeout("enterShopGradient1()", 1000);
}
function enterShopGradient1() {
    clearCanvas();
    mapCanvas.style.display = "none";
    key_S.style.display = "none";
    exit_level.style.display = "none";
    pause.style.display = "none";
    for (var i = 0; i < 5; i++)
        price[i] = parseInt(Math.random() * 400 + 5);
    nextLevel.style.display = "block";
    money.style.display = "block";
    money.style.opacity = 0;
    nextLevel.style.opacity = 0;
    shopLine.style.opacity = 0;

    gameLines.style.display = 'none';
    shopLine.style.display = 'block';

    money.style.display = 'block';
    setTimeout("enterShop()", 1000);
}
function enterShop() {//商店
    BGM.pause();
    gameBoard.style.opacity = 1;
    bg.style.backgroundImage = "url(img/shop.jpg)";
    // gameBoard.style.backgroundColor = '#8D8DD4';
    nextLevel.style.opacity = 1;
    money.style.opacity = 1;
    shopLine.style.opacity = 1;
    money.innerHTML = "Current wealth is：$ " + total_money;

    
}
function timeUpdate() {
    draw_all();
    check_all();
}
function semut(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    switch (size) {
        case 1: {
            //this.r = canvas.width / 40;
            this.r = 20;
            this.value = 500;
        }
            break;
        case 2: {
            //this.r = canvas.width / 40;
            this.r = 25;
            this.value = 1000;
        }
            break;
        case 3: {
            this.r = 45;
            this.value = 2500;
        }
            break;
    }
    this.speed = 40 / this.value;
    this.owner = 0;

    this.moveSpeed = 0;
    this.init();
}
semut.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var semutImg = new Image();
        semutImg.src = "img/semut.png";
        if (this.size == 1)
            ctx.drawImage(semutImg, this.x - 30, this.y - 35, 50, 50);
        else if (this.size == 2)
            ctx.drawImage(semutImg, this.x - 45, this.y - 50, 90, 90);
        else if (this.size == 3)
            ctx.drawImage(semutImg, this.x - 80, this.y - 85, 150, 150);
    },
}
function ketam(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    switch (size) {
        case 1: {
            //this.r = canvas.width / 40;
            this.r = 20;
            this.value = 500;
        }
            break;
        case 2: {
            //this.r = canvas.width / 40;
            this.r = 25;
            this.value = 1000;
        }
            break;
        case 3: {
            this.r = 45;
            this.value = 2500;
        }
            break;
    }
    this.speed = 40 / this.value;
    this.owner = 0;

    this.moveSpeed = 0;
    this.init();
}
ketam.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var ketamImg = new Image();
        ketamImg.src = "img/ketam.png";
        if (this.size == 1)
            ctx.drawImage(ketamImg, this.x - 30, this.y - 35, 50, 50);
        else if (this.size == 2)
            ctx.drawImage(ketamImg, this.x - 45, this.y - 50, 90, 90);
        else if (this.size == 3)
            ctx.drawImage(ketamImg, this.x - 80, this.y - 85, 150, 150);
    },
}
function siput(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    switch (size) {
        case 1: {
            //this.r = canvas.width / 40;
            this.r = 20;
            this.value = 500;
        }
            break;
        case 2: {
            //this.r = canvas.width / 40;
            this.r = 25;
            this.value = 1000;
        }
            break;
        case 3: {
            this.r = 45;
            this.value = 2500;
        }
            break;
    }
    this.speed = 40 / this.value;
    this.owner = 0;

    this.moveSpeed = 0;
    this.init();
}
siput.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var siputImg = new Image();
        siputImg.src = "img/siput.png";
        if (this.size == 1)
            ctx.drawImage(siputImg, this.x - 30, this.y - 35, 50, 50);
        else if (this.size == 2)
            ctx.drawImage(siputImg, this.x - 45, this.y - 50, 90, 90);
        else if (this.size == 3)
            ctx.drawImage(siputImg, this.x - 80, this.y - 85, 150, 150);
    },
}
function katak(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    switch (size) {
        case 1: {
            //this.r = canvas.width / 40;
            this.r = 20;
            this.value = 500;
        }
            break;
        case 2: {
            //this.r = canvas.width / 40;
            this.r = 25;
            this.value = 1000;
        }
            break;
        case 3: {
            this.r = 45;
            this.value = 2500;
        }
            break;
    }
    this.speed = 40 / this.value;
    this.owner = 0;

    this.moveSpeed = 0;
    this.init();
}
katak.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var katakImg = new Image();
        katakImg.src = "img/KATAKTEXT.png";
        if (this.size == 1)
            ctx.drawImage(katakImg, this.x - 30, this.y - 35, 50, 50);
        else if (this.size == 2)
            ctx.drawImage(katakImg, this.x - 45, this.y - 50, 90, 90);
        else if (this.size == 3)
            ctx.drawImage(katakImg, this.x - 80, this.y - 85, 150, 150);
    },
}
function arnab(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    switch (size) {
        case 1: {
            //this.r = canvas.width / 40;
            this.r = 20;
            this.value = 500;
        }
            break;
        case 2: {
            //this.r = canvas.width / 40;
            this.r = 25;
            this.value = 1000;
        }
            break;
        case 3: {
            this.r = 45;
            this.value = 2500;
        }
            break;
    }
    this.speed = 40 / this.value;
    this.owner = 0;

    this.moveSpeed = 0;
    this.init();
}
arnab.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var arnabImg = new Image();
        arnabImg.src = "img/arnab.png";
        if (this.size == 1)
            ctx.drawImage(arnabImg, this.x - 30, this.y - 35, 50, 50);
        else if (this.size == 2)
            ctx.drawImage(arnabImg, this.x - 45, this.y - 50, 90, 90);
        else if (this.size == 3)
            ctx.drawImage(arnabImg, this.x - 80, this.y - 85, 150, 150);
    },
}
function cicak(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    switch (size) {
        case 1: {
            //this.r = canvas.width / 40;
            this.r = 20;
            this.value = 500;
        }
            break;
        case 2: {
            //this.r = canvas.width / 40;
            this.r = 25;
            this.value = 1000;
        }
            break;
        case 3: {
            this.r = 45;
            this.value = 2500;
        }
            break;
    }
    this.speed = 40 / this.value;
    this.owner = 0;

    this.moveSpeed = 0;
    this.init();
}
cicak.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var cicakImg = new Image();
        cicakImg.src = "img/CICAKTEXT.png";
        if (this.size == 1)
            ctx.drawImage(cicakImg, this.x - 30, this.y - 35, 50, 50);
        else if (this.size == 2)
            ctx.drawImage(cicakImg, this.x - 45, this.y - 50, 90, 90);
        else if (this.size == 3)
            ctx.drawImage(cicakImg, this.x - 80, this.y - 85, 150, 150);
    },
}
function stone(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    switch (size) {
        case 1: {
            this.r = 15;
            this.value = 10;
        }
            break;
        case 2: {
            this.r = 25;
            this.value = 20;
        }
            break;
    }
    this.speed = 3 / this.value;
    if (players[0].addStoneValue) this.value = this.value * 2;
    this.moveSpeed = 0;
    this.owner = 0;
    this.init();
}

stone.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var stoneImg = new Image();
        stoneImg.src = "img/stone.png";
        if (this.size == 1)
            ctx.drawImage(stoneImg, this.x - 15, this.y - 20, 30, 30);
        if (this.size == 2)
            ctx.drawImage(stoneImg, this.x - 30, this.y - 25, 60, 60);
    },
}
function diamond(x, y) {
    this.x = x;
    this.y = y;
    this.r = 25;
    if (players[0].addDiamondValue) this.value = 900;
    else this.value = 600;
    this.speed = 2;
    this.moveSpeed = 0;
    this.owner = 0;
    this.init();
}

diamond.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var diamondImg = new Image();
        diamondImg.src = "img/diamond.png";
        ctx.drawImage(diamondImg, this.x - 20, this.y - 20, 40, 40);
    },
}
function clock(x, y) {
    this.x = x;
    this.y = y;
    this.r = 25;
    this.value = -1;
    this.speed = 2;
    this.moveSpeed = 0;
    this.timeAdd = 10;
    this.owner = 0;
    this.color = "lightcoral";
    this.init();
}
clock.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var clkImg = new Image();
        clkImg.src = "img/clock.png";
        ctx.drawImage(clkImg, this.x - 25, this.y - 25, 50, 50);
    },
}
function mystery(x, y, size) {//神秘物品包
    this.x = x;
    this.y = y;
    this.r = 25;
    this.moveSpeed = 0;
    if (players[0].fourLeaf) {
        if (size < 3) size += 2;
    }
    switch (size) {
        case 1: {
            this.value = 200;
        }
            break;
        case 2: {
            this.value = 400;
        }
            break;
        case 3: {
            this.value = 600;
        }
            break;
        case 4: {
            this.value = 800;
        }
            break;
        case 5: {
            this.value = 1;
        }
            break;
    }
    this.speed = (Math.random(5)+1) * 0.8;
    this.owner = 0;
    this.color = "#c3723b";//屎黄色
    this.init();
	
}
mystery.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) this.moveSpeed = this.owner.moveSpeed;
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var mysteryImg = new Image();
        mysteryImg.src = "img/mystery.png";
        ctx.drawImage(mysteryImg, this.x - 25, this.y - 30, 60, 60);

    },
}
function bomb(x, y) {
    this.x = x;
    this.y = y;
    this.r = 25;
    this.explodeRatius = 200;
    this.value = 1;
    this.speed = 1;
    this.moveSpeed = 0;
    this.owner = 0;
    this.color = "black";
    this.canExplode = false;
    this.isExplode = false;
    this.explodeRatiusPic = 10;
    this.init();
}
bomb.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) {
            this.moveSpeed = this.owner.moveSpeed;

        }
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        var bombImg = new Image();
        bombImg.src = "img/bomb.png";
        var bombImgExplode = new Image();
        bombImgExplode.src = "img/bomb_remain.png";
        if (this.isExplode == true) {
            ctx.drawImage(bombImgExplode, this.x - 30, this.y - 30, 60, 60);
        } else ctx.drawImage(bombImg, this.x - 30, this.y - 30, 60, 60);
        // ctx.beginPath();
        // ctx.fillStyle = this.color;
        // ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        // ctx.fill();
    },
    explode: function () {
        if (this.owner != 0 || this.canExplode == true) {
            this.isExplode = true;
            this.canExplode = false;
            x_explode = this.x;
            y_explode = this.y;
            this.draw_explode();
            explodeAudio.play();
            for (var i = 0; i < gold_arr.length; i++) {
                if (Math.sqrt((gold_arr[i].x - this.x) * (gold_arr[i].x - this.x) +
                    (gold_arr[i].y - this.y) * (gold_arr[i].y - this.y)) < this.explodeRatius && gold_arr[i].owner == 0) {
                    gold_arr[i].x = 100;
                    gold_arr[i].y = 100;
                    gold_arr[i].moveSpeed = 0;
                    gold_arr[i].owner = 0;
                }
            }
            for (var i = 0; i < stone_arr.length; i++) {
                if (Math.sqrt((stone_arr[i].x - this.x) * (stone_arr[i].x - this.x) +
                    (stone_arr[i].y - this.y) * (stone_arr[i].y - this.y)) < this.explodeRatius && stone_arr[i].owner == 0) {
                    stone_arr[i].x = 100;
                    stone_arr[i].y = 100;
                    stone_arr[i].moveSpeed = 0;
                    stone_arr[i].owner = 0;
                }
            }
            for (var i = 0; i < diamond_arr.length; i++) {
                if (Math.sqrt((diamond_arr[i].x - this.x) * (diamond_arr[i].x - this.x) +
                    (diamond_arr[i].y - this.y) * (diamond_arr[i].y - this.y)) < this.explodeRatius && diamond_arr[i].owner == 0) {
                    diamond_arr[i].x = 100;
                    diamond_arr[i].y = 100;
                    diamond_arr[i].moveSpeed = 0;
                    diamond_arr[i].owner = 0;
                }
            }
            for (var i = 0; i < clock_arr.length; i++) {
                if (Math.sqrt((clock_arr[i].x - this.x) * (clock_arr[i].x - this.x) +
                    (clock_arr[i].y - this.y) * (clock_arr[i].y - this.y)) < this.explodeRatius && clock_arr[i].owner == 0) {
                    clock_arr[i].x = 100;
                    clock_arr[i].y = 100;
                    clock_arr[i].moveSpeed = 0;
                    clock_arr[i].owner = 0;
                }
            }
            for (var i = 0; i < flypig_arr.length; i++) {
                if (Math.sqrt((flypig_arr[i].x - this.x) * (flypig_arr[i].x - this.x) +
                    (flypig_arr[i].y - this.y) * (flypig_arr[i].y - this.y)) < this.explodeRatius && flypig_arr[i].owner == 0) {
                    flypig_arr[i].x = 100;
                    flypig_arr[i].y = 100;
                    flypig_arr[i].moveSpeed = 0;
                    flypig_arr[i].owner = 0;
                }
            }
            for (var i = 0; i < mystery_arr.length; i++) {
                if (Math.sqrt((mystery_arr[i].x - this.x) * (mystery_arr[i].x - this.x) +
                    (mystery_arr[i].y - this.y) * (mystery_arr[i].y - this.y)) < this.explodeRatius && mystery_arr[i].owner == 0) {
                    mystery_arr[i].x = 100;
                    mystery_arr[i].y = 100;
                    mystery_arr[i].moveSpeed = 0;
                    mystery_arr[i].owner = 0;
                }
            }
            for (var i = 0; i < bomb_arr.length; i++) {
                if (Math.sqrt((bomb_arr[i].x - this.x) * (bomb_arr[i].x - this.x) +
                    (bomb_arr[i].y - this.y) * (bomb_arr[i].y - this.y)) < this.explodeRatius && bomb_arr[i] != this && bomb_arr[i].owner == 0) {
                    bomb_arr[i].canExplode = true;
                    bomb_arr[i].explode();

                }
            }
        }
    },
    draw_explode: function () {
        this.explodeRatiusPic = 10;
        this.isExploding = true;
        isBombing_arr.push(this);
        bombStop1();
        function bombStop1() {
            var i = 0;
            function bombStop() {
                for (i = 0; i < isBombing_arr.length; i++) {
                    isBombing_arr[i].close_timer_explode();
                }
            }
            setTimeout(bombStop, 500);
        }
    },
    close_timer_explode: function () {
        this.isExploding = false;
        if (this.owner == 0) {
            this.x = 100;
            this.y = 100;
            this.moveSpeed = 0;
            this.owner = 0;
        }
        console.log(this);

    }
}
function flypig(beginx, endx, beginy, endy, diamond,) {
    this.beginx = beginx;
    this.beginy = beginy;
    this.endx = endx;
    this.endy = endy;
    this.disx = beginx - endx;
    this.disy = beginy - endy;
    this.dis = Math.sqrt(this.disx * this.disx + this.disy * this.disy);
    this.x = this.beginx;
    this.y = this.beginy;
    this.r = 25;
    if (diamond == 1) {
        if (players[0].addDiamondValue) this.value = 902;
        else this.value = 702;
    }
    else this.value = 500;
    this.diamond = diamond;
    this.speed = 1;
    this.moveSpeed = 0;
    this.flySpeed = 4;
    this.owner = 0;
    this.color = "green";
    this.init();
}
flypig.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) {
            this.flySpeed = 0;
            this.moveSpeed = this.owner.moveSpeed;
        }
        else {
            if (Math.abs(this.x - this.beginx) > Math.abs(this.disx) ||
                Math.abs(this.x - this.endx) > Math.abs(this.disx) ||
                Math.abs(this.y - this.beginy) > Math.abs(this.disy) ||
                Math.abs(this.y - this.endy) > Math.abs(this.disy)) {
                this.flySpeed = -this.flySpeed;
            }
        }
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        if (this.flySpeed) {
            this.x += this.flySpeed * (-this.disx / this.dis);
            this.y += this.flySpeed * (-this.disy / this.dis);
        }
        var flypigImg = new Image();
        flypigImg.src = "img/flypig.png";
        ctx.drawImage(flypigImg, this.x - 30, this.y - 25, 60, 50);
        if (this.diamond == 1) {
            var diaImg = new Image();
            diaImg.src = "img/diamond.png";
            ctx.drawImage(diaImg, this.x + 15, this.y - 15, 20, 20);
        }

    },
}
function flyketam(beginx, endx, beginy, endy, diamond) {
    this.beginx = beginx;
    this.beginy = beginy;
    this.endx = endx;
    this.endy = endy;
    this.disx = beginx - endx;
    this.disy = beginy - endy;
    this.dis = Math.sqrt(this.disx * this.disx + this.disy * this.disy);
    this.x = this.beginx;
    this.y = this.beginy;
    this.r = 25;
    if (diamond == 1) {
        if (players[0].addDiamondValue) this.value = 902;
        else this.value = 702;
    }
    else this.value = 500;
    this.diamond = diamond;
    this.speed = 1;
    this.moveSpeed = 0;
    this.flySpeed = 6;
    this.owner = 0;
    this.color = "green";
    this.init();
}
flyketam.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) {
            this.flySpeed = 0;
            this.moveSpeed = this.owner.moveSpeed;
        }
        else {
            if (Math.abs(this.x - this.beginx) > Math.abs(this.disx) ||
                Math.abs(this.x - this.endx) > Math.abs(this.disx) ||
                Math.abs(this.y - this.beginy) > Math.abs(this.disy) ||
                Math.abs(this.y - this.endy) > Math.abs(this.disy)) {
                this.flySpeed = -this.flySpeed;
            }
        }
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        if (this.flySpeed) {
            this.x += this.flySpeed * (-this.disx / this.dis);
            this.y += this.flySpeed * (-this.disy / this.dis);
        }
        var flyketamImg = new Image();
        flyketamImg.src = "img/flyketam.png";
        ctx.drawImage(flyketamImg, this.x - 30, this.y - 25, 60, 50);
        if (this.diamond == 1) {
            var diaImg = new Image();
            diaImg.src = "img/diamond.png";
            ctx.drawImage(diaImg, this.x + 15, this.y - 15, 20, 20);
        }

    },
}
function flysiput(beginx, endx, beginy, endy, diamond) {
    this.beginx = beginx;
    this.beginy = beginy;
    this.endx = endx;
    this.endy = endy;
    this.disx = beginx - endx;
    this.disy = beginy - endy;
    this.dis = Math.sqrt(this.disx * this.disx + this.disy * this.disy);
    this.x = this.beginx;
    this.y = this.beginy;
    this.r = 25;
    if (diamond == 1) {
        if (players[0].addDiamondValue) this.value = 902;
        else this.value = 702;
    }
    else this.value = 500;
    this.diamond = diamond;
    this.speed = 1;
    this.moveSpeed = 0;
    this.flySpeed = 2;
    this.owner = 0;
    this.color = "green";
    this.init();
}
flysiput.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) {
            this.flySpeed = 0;
            this.moveSpeed = this.owner.moveSpeed;
        }
        else {
            if (Math.abs(this.x - this.beginx) > Math.abs(this.disx) ||
                Math.abs(this.x - this.endx) > Math.abs(this.disx) ||
                Math.abs(this.y - this.beginy) > Math.abs(this.disy) ||
                Math.abs(this.y - this.endy) > Math.abs(this.disy)) {
                this.flySpeed = -this.flySpeed;
            }
        }
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        if (this.flySpeed) {
            this.x += this.flySpeed * (-this.disx / this.dis);
            this.y += this.flySpeed * (-this.disy / this.dis);
        }
        var flysiputImg = new Image();
        flysiputImg.src = "img/flysiput.png";
        ctx.drawImage(flysiputImg, this.x - 30, this.y - 25, 60, 50);
        if (this.diamond == 1) {
            var diaImg = new Image();
            diaImg.src = "img/diamond.png";
            ctx.drawImage(diaImg, this.x + 15, this.y - 15, 20, 20);
        }

    },
}
function flykatak(beginx, endx, beginy, endy, diamond) {
    this.beginx = beginx;
    this.beginy = beginy;
    this.endx = endx;
    this.endy = endy;
    this.disx = beginx - endx;
    this.disy = beginy - endy;
    this.dis = Math.sqrt(this.disx * this.disx + this.disy * this.disy);
    this.x = this.beginx;
    this.y = this.beginy;
    this.r = 25;
    if (diamond == 1) {
        if (players[0].addDiamondValue) this.value = 902;
        else this.value = 702;
    }
    else this.value = 500;
    this.diamond = diamond;
    this.speed = 1;
    this.moveSpeed = 0;
    this.flySpeed = 8;
    this.owner = 0;
    this.color = "green";
    this.init();
}
flykatak.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) {
            this.flySpeed = 0;
            this.moveSpeed = this.owner.moveSpeed;
        }
        else {
            if (Math.abs(this.x - this.beginx) > Math.abs(this.disx) ||
                Math.abs(this.x - this.endx) > Math.abs(this.disx) ||
                Math.abs(this.y - this.beginy) > Math.abs(this.disy) ||
                Math.abs(this.y - this.endy) > Math.abs(this.disy)) {
                this.flySpeed = -this.flySpeed;
            }
        }
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        if (this.flySpeed) {
            this.x += this.flySpeed * (-this.disx / this.dis);
            this.y += this.flySpeed * (-this.disy / this.dis);
        }
        var flykatakImg = new Image();
        flykatakImg.src = "img/flykatak.png";
        ctx.drawImage(flykatakImg, this.x - 30, this.y - 25, 60, 50);
        if (this.diamond == 1) {
            var diaImg = new Image();
            diaImg.src = "img/diamond.png";
            ctx.drawImage(diaImg, this.x + 15, this.y - 15, 20, 20);
        }

    },
}
function flyarnab(beginx, endx, beginy, endy, diamond) {
    this.beginx = beginx;
    this.beginy = beginy;
    this.endx = endx;
    this.endy = endy;
    this.disx = beginx - endx;
    this.disy = beginy - endy;
    this.dis = Math.sqrt(this.disx * this.disx + this.disy * this.disy);
    this.x = this.beginx;
    this.y = this.beginy;
    this.r = 25;
    if (diamond == 1) {
        if (players[0].addDiamondValue) this.value = 902;
        else this.value = 702;
    }
    else this.value = 500;
    this.diamond = diamond;
    this.speed = 1;
    this.moveSpeed = 0;
    this.flySpeed = 12;
    this.owner = 0;
    this.color = "green";
    this.init();
}
flyarnab.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) {
            this.flySpeed = 0;
            this.moveSpeed = this.owner.moveSpeed;
        }
        else {
            if (Math.abs(this.x - this.beginx) > Math.abs(this.disx) ||
                Math.abs(this.x - this.endx) > Math.abs(this.disx) ||
                Math.abs(this.y - this.beginy) > Math.abs(this.disy) ||
                Math.abs(this.y - this.endy) > Math.abs(this.disy)) {
                this.flySpeed = -this.flySpeed;
            }
        }
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        if (this.flySpeed) {
            this.x += this.flySpeed * (-this.disx / this.dis);
            this.y += this.flySpeed * (-this.disy / this.dis);
        }
        var flyarnabImg = new Image();
        flyarnabImg.src = "img/flyarnab.png";
        ctx.drawImage(flyarnabImg, this.x - 30, this.y - 25, 60, 50);
        if (this.diamond == 1) {
            var diaImg = new Image();
            diaImg.src = "img/diamond.png";
            ctx.drawImage(diaImg, this.x + 15, this.y - 15, 20, 20);
        }

    },
}
function flycicak(beginx, endx, beginy, endy, diamond) {
    this.beginx = beginx;
    this.beginy = beginy;
    this.endx = endx;
    this.endy = endy;
    this.disx = beginx - endx;
    this.disy = beginy - endy;
    this.dis = Math.sqrt(this.disx * this.disx + this.disy * this.disy);
    this.x = this.beginx;
    this.y = this.beginy;
    this.r = 25;
    if (diamond == 1) {
        if (players[0].addDiamondValue) this.value = 902;
        else this.value = 702;
    }
    else this.value = 500;
    this.diamond = diamond;
    this.speed = 1;
    this.moveSpeed = 0;
    this.flySpeed = 10;
    this.owner = 0;
    this.color = "green";
    this.init();
}
flycicak.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        if (this.owner != 0) {
            this.flySpeed = 0;
            this.moveSpeed = this.owner.moveSpeed;
        }
        else {
            if (Math.abs(this.x - this.beginx) > Math.abs(this.disx) ||
                Math.abs(this.x - this.endx) > Math.abs(this.disx) ||
                Math.abs(this.y - this.beginy) > Math.abs(this.disy) ||
                Math.abs(this.y - this.endy) > Math.abs(this.disy)) {
                this.flySpeed = -this.flySpeed;
            }
        }
        if (this.moveSpeed) {
            this.x += this.moveSpeed * Math.cos((this.owner.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.owner.angle) * Math.PI / 180);
        }
        if (this.flySpeed) {
            this.x += this.flySpeed * (-this.disx / this.dis);
            this.y += this.flySpeed * (-this.disy / this.dis);
        }
        var flycicakImg = new Image();
        flycicakImg.src = "img/flycicak.png";
        ctx.drawImage(flycicakImg, this.x - 30, this.y - 25, 60, 50);
        if (this.diamond == 1) {
            var diaImg = new Image();
            diaImg.src = "img/diamond.png";
            ctx.drawImage(diaImg, this.x + 15, this.y - 15, 20, 20);
        }

    },
}
function player(num) {
    if (mode == 0) this.x = canvas.width / 2 - 25;
    else {
        this.x = canvas.width / 2 - 75 + 100 * num;
    }
    this.y = 35;
    this.width = 90;
    this.height = 90;
    this.money = 0;
    this.color = "blue";
    this.hook = new hook(this.x + this.width / 2);
    this.hook.owner = this;
    this.hook.init();
    this.init();
}
player.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {
        var playerImg = new Image();
        playerImg.src = "img/player.png";
        ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);

    },

}
function hook(x) {
    this.x = x;
    this.y = 250;
    this.angle = 0;
    this.object = 0;
    this.status = 0;
    this.length = 0;
    this.moveSpeed = 10;
    this.rotateSpeed = 5;
    this.r = 10;
    this.maxLength = 500;
    this.color = "black";
    this.owner = 0;
    this.money_status = 0;
    this.money_size = 20;
    this.money_pos_x = 0;
    this.money_pos_y = 0;
    this.money_value = 0;
    //this.init();
}
hook.prototype = {
    init: function () {
        this.draw();
    },
    draw: function () {

        if (this.status == 0) {
            ctx.beginPath();


            //ctx.stroke();
            if (this.angle <= 10 || this.angle >= 170) this.rotateSpeed = -this.rotateSpeed;
            this.angle += this.rotateSpeed;
            //console.log(this.angle);
            ctx.save();
            ctx.translate(this.owner.x + this.owner.width / 2, this.owner.y + this.owner.height);
            ctx.rotate(this.rotateSpeed * Math.PI / 180);
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(0, 0);
            this.x = 30 * Math.cos(this.angle * Math.PI / 180);
            this.y = 30 * Math.sin(this.angle * Math.PI / 180);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.arc(this.x + this.r * Math.cos((this.angle) * Math.PI / 180), this.y + this.r * Math.sin((this.angle) * Math.PI / 180), this.r,
               (90 + this.angle) * Math.PI / 180, (270 + this.angle) * Math.PI / 180);
            ctx.stroke();
            ctx.restore();
            this.x += this.owner.x + this.owner.width / 2;
            this.y += this.owner.y + this.owner.height;
        }
        else if (this.status == 1) {
            this.x += this.moveSpeed * Math.cos((this.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.angle) * Math.PI / 180);
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = "red";
            ctx.moveTo(this.owner.x + this.owner.width / 2, this.owner.y + this.owner.height);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.arc(this.x + this.r * Math.cos((this.angle) * Math.PI / 180), this.y + this.r * Math.sin((this.angle) * Math.PI / 180),
                    this.r, (this.angle + 90) * Math.PI / 180, (this.angle - 90) * Math.PI / 180);
            ctx.stroke();
        }
        else if (this.status == 2) {
            this.x += this.moveSpeed * Math.cos((this.angle) * Math.PI / 180);
            this.y += this.moveSpeed * Math.sin((this.angle) * Math.PI / 180);
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = "red";
            ctx.beginPath();

            ctx.moveTo(this.owner.x + this.owner.width / 2, this.owner.y + this.owner.height);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.arc(this.x + this.r * Math.cos((this.angle) * Math.PI / 180), this.y + this.r * Math.sin((this.angle) * Math.PI / 180),
                    this.r, (this.angle + 90) * Math.PI / 180, (this.angle - 90) * Math.PI / 180);
            ctx.stroke();
        }
    },
    check: function () {
        this.length = Math.sqrt((this.x - this.owner.x) * (this.x - this.owner.x) +
            (this.y - this.owner.y) * (this.y - this.owner.y));
        if (this.length >= this.maxLength && this.status == 1) {
            this.moveSpeed = -this.moveSpeed;
        }
        if ((this.y - this.owner.y - this.owner.height) < 30
            && this.status != 0 && this.moveSpeed < 0) {

            if (this.status == 2) {
                if (this.object.value == -1) {
                    time_all += this.object.timeAdd;
                    this.object.x = 100;
                    this.object.y = 100;
                    this.object.owner = 0;
                    this.object.moveSpeed = 0;
                    this.object = 0;
                    this.status = 0;
                    if (players[0].enhanceStrength) this.moveSpeed = 20;
                    else this.moveSpeed = 10;
                }
                else {
                    this.money_value = this.object.value;
                    if (mode == 0)
                        catching_object = this;
                    else {
                        if (this == players[0].hook) catching_object = this;
                        else catching_object1 = this;
                    }
                    this.draw_add_money();
                    this.moveSpeed = 0;
                }
                
            }
            else {
                this.status = 0;
                if (players[0].enhanceStrength) this.moveSpeed = 20;
                else this.moveSpeed = 10;
            }
        }
    },
    draw_add_money: function () {
        this.money_status = 1;
        this.money_size = 20;

        if (mode == 0) {
            this.money_pos_x = 630;
            this.money_pos_y = 105;
            setTimeout("catching_object.money_move_in()", 1000);
        }
        else {
            if (this == players[0].hook) {
                this.money_pos_x = 440;
                this.money_pos_y = 105;
                setTimeout("catching_object.money_move_in()", 1000);
            }
            else {
                this.money_pos_x = 670;
                this.money_pos_y = 105;
                setTimeout("catching_object1.money_move_in()", 1000);
            }
        }

    },
    money_move_in: function () {
        this.money_status = 2;
        if (mode == 0)
            setTimeout("catching_object.money_stop()", 1000);
        else {
            if (this == players[0].hook) setTimeout("catching_object.money_stop()", 1000);
            else setTimeout("catching_object1.money_stop()", 1000);
        }
    },
    money_stop: function () {
        this.money_status = 3;

        if (mode == 0) {
            catching_object.object.moveSpeed = 0;
            catching_object.object.x = 100;
            catching_object.object.y = 100;
            catching_object.status = 0;
            catching_object.object.owner.object = 0;
            if (players[0].enhanceStrength) catching_object.moveSpeed = 20;
            else catching_object.moveSpeed = 10;
            catching_object.object.owner = 0;
            setTimeout("catching_object.money_move_out()", 1000);
        }
        else {
            if (this == players[0].hook) {
                catching_object.object.moveSpeed = 0;
                catching_object.object.x = 100;
                catching_object.object.y = 100;
                catching_object.status = 0;
                catching_object.object.owner = 0;
                catching_object.object = 0;
                if (players[0].enhanceStrength) catching_object.moveSpeed = 20;
                else catching_object.moveSpeed = 10;

                setTimeout("catching_object.money_move_out()", 1000);
            }
            else {
                catching_object1.object.moveSpeed = 0;
                catching_object1.object.x = 100;
                catching_object1.object.y = 100;
                catching_object1.status = 0;
                catching_object1.object.owner = 0;
                catching_object1.object = 0;
                if (players[0].enhanceStrength) catching_object1.moveSpeed = 20;
                else catching_object1.moveSpeed = 10;

                setTimeout("catching_object1.money_move_out()", 1000);
            }
        }
    },
    money_move_out: function () {
        this.money_status = 0;
        total_money += this.money_value;
    },
}

init();