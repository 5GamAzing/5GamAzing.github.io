var money = 0;
var monpersec = 0;

function calcmonpersec(){
	monpersec = cursors;
	monpersec = monpersec + (stocks * 5);
}

function moneyClick(number){
    money = money + number;
	document.getElementById("money").innerHTML = money;
	calcmonpersec();
	document.getElementById("monpersec").innerHTML = monpersec;
};

var monperclick = 1;

function moneyplayerClick(){
	moneyClick(monperclick);
}

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(money >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	money = money - cursorCost;                          //removes the money spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('money').innerHTML = money;  //updates the number of money for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var stocks = 0;

function buyStock(){
    var stockCost = Math.floor(250 * Math.pow(1.1,stocks));     //works out the cost of this cursor
    if(money >= stockCost){                                   //checks that the player can afford the cursor
        stocks = stocks + 1;                                   //increases number of cursors
    	money = money - stockCost;                          //removes the money spent
        document.getElementById('stocks').innerHTML = stocks;  //updates the number of cursors for the user
        document.getElementById('money').innerHTML = money;  //updates the number of money for the user
    };
    var nextCost = Math.floor(250 * Math.pow(1.1,stocks));       //works out the cost of the next cursor
    document.getElementById('stockCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	moneyClick(cursors);
}, 1000);

window.setInterval(function(){
	moneyClick(stocks);
}, 200);