
function getReceipt() {
	select = "<h3>You Ordered:</h3>";   
	price = "<h3> Item Price: </h3>"; 
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			select = select+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		price = price+sizeTotal+"<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		price = price+sizeTotal+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		price = price+sizeTotal+"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
		price = price+sizeTotal+"<br>";
	}
	runningTotal = sizeTotal;
	getMeat(runningTotal,select,price); 
};	

function getMeat(runningTotal,select,price) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < selectedMeat.length; j++) {
			select = select+selectedMeat[j]+"<br>";
			if (meatCount <= 1) {
				price = price + 0 + "<br>";
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				price = price + 1 + "<br>";
				meatCount = meatCount - 1;
			} else {
				price = price + 1 + "<br>";
				meatCount = meatCount - 1;
			}
	}
	getVeggie(runningTotal,select,price);
};

function getVeggie(runningTotal,select,price) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("Veggies");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			selectedVeggie.push(veggieArray[j].value);
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount >= 2) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	for (var j = 0; j < selectedVeggie.length; j++) {
			select = select+selectedVeggie[j]+"<br>";
			if (veggieCount <= 1) {
				price = price + 0 + "<br>";
				veggieCount = veggieCount - 1;
			} else if (veggieCount == 2) {
				price = price + 1 + "<br>";
				veggieCount = veggieCount - 1;
			} else {
				price = price + 1 + "<br>";
				veggieCount = veggieCount - 1;
			}
	}
	getCheese(runningTotal,select,price);
};

function getCheese(runningTotal,select,price) {
	var cheeseTotal = 0;
	var selectedCheese;
	var cheeseArray = document.getElementsByClassName("Cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
			select = select + selectedCheese + "<br>";
		}
		if (selectedCheese === "Extra Cheese") {
			cheeseTotal = 3;
		}
	}
	runningTotal = (runningTotal + cheeseTotal);
	price = price + cheeseTotal + "<br>";
	getSauce(runningTotal,select,price);
};

function getSauce(runningTotal,select,price) {
	var sauceArray = document.getElementsByClassName("Sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			select = select + selectedSauce +"<br>";
		}
	}
	price = price + 0 + "<br>";
	getCrust(runningTotal,select,price)
};

function getCrust(runningTotal,select,price) {
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementsByClassName("Crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			select = select + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	runningTotal = (runningTotal + crustTotal);
	price = price + crustTotal + "<br>";
	document.getElementById("cart").style.opacity=1;
	document.getElementById("Items").innerHTML=select;
	document.getElementById("ItemPrice").innerHTML=price;
	document.getElementById("Total").innerHTML = "<br><h3></br> Total Price:$"+runningTotal+".00"+"</h3>";
};

function clearAll() {
	document.getElementById("frmMenu").reset();
	document.getElementById("cart").style.opacity=0;
};