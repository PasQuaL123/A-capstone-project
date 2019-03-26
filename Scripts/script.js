function ChangeImg(){ //this function changes image on the home screen
	var iNum = 1 + Math.floor(Math.random() * 3); //random between 1 and 3
	var sSrc = "Res\\Images\\dubai"+iNum.toString()+".jpg";
	document.getElementById("frontimg").src=sSrc;
}

setInterval(ChangeImg, 5000); //5 seconds

//object to store package information
function TypeOfPackage(Package_Name, Included_Cities, Num_Days, Num_Ppl, Price){
	this.Package_Name=Package_Name;
	this.Included_Cities=Included_Cities;
	this.Num_Days=Num_Days;
	this.Num_Ppl=Num_Ppl;
	this.Price=Price;
}


if (JSON.parse(localStorage.getItem("obj_data")) === null){
	var arrItemsInCart = [];
	localStorage.setItem("obj_data", JSON.stringify(arrItemsInCart));
}

if (localStorage.getItem("num_data")===null){
	var iNumItemsInCart = 0;
	localStorage.setItem("num_data", 0);
} 

var arrItemsInCart = JSON.parse(localStorage.getItem("obj_data"));
var iNumItemsInCart = localStorage.getItem("num_data");

function AddToCart(Btn_ID){

	switch(Btn_ID)
	{
		case "btnusa" : {
			var iNum = parseInt(prompt("How many people would you like to book for?"));
			arrItemsInCart[iNumItemsInCart] = new TypeOfPackage("USA Package", "New York, Las Vegas, California", 9, iNum, 20000);
			iNumItemsInCart++;
			localStorage.setItem("obj_data", JSON.stringify(arrItemsInCart));
			localStorage.setItem("num_data", iNumItemsInCart);
		} break; 

		case "btncanada" : {
			var iNum = parseInt(prompt("How many people would you like to book for?"));
			arrItemsInCart[iNumItemsInCart] = new TypeOfPackage("Canada Package", "Nova Scotia, Torronto, Vancouver", 9, iNum, 15999);
			iNumItemsInCart++;
			localStorage.setItem("obj_data", JSON.stringify(arrItemsInCart));
			localStorage.setItem("num_data", iNumItemsInCart);
		} break;

		case "btntanzania" : {
			var iNum = parseInt(prompt("How many people would you like to book for?"));
			arrItemsInCart[iNumItemsInCart] = new TypeOfPackage("Tanzania Package", "Dar es Salaam, Mwenza, Zanzibar City", 9, iNum, 6000);
			iNumItemsInCart++;
			localStorage.setItem("obj_data", JSON.stringify(arrItemsInCart));
			localStorage.setItem("num_data", iNumItemsInCart);
		} break;

		case "btnengland" : {
			var iNum = parseInt(prompt("How many people would you like to book for?"));
			arrItemsInCart[iNumItemsInCart] = new TypeOfPackage("England Package", "London, Manchester, Liverpool", iNum, 9, 8000);
			iNumItemsInCart++;
			localStorage.setItem("obj_data", JSON.stringify(arrItemsInCart));
			localStorage.setItem("num_data", iNumItemsInCart);
		} break;

		case "btngermany" : {
			var iNum = parseInt(prompt("How many people would you like to book for?"));
			arrItemsInCart[iNumItemsInCart] = new TypeOfPackage("Germany Package", "Berlin, Munich, Hamburg, Frankfurt, Stuttgart", 19, iNum, 32999);
			iNumItemsInCart++;
			localStorage.setItem("obj_data", JSON.stringify(arrItemsInCart));
			localStorage.setItem("num_data", iNumItemsInCart);
		} break;

		case "btndubai" : {
			var iNum = parseInt(prompt("How many people would you like to book for?"));
			arrItemsInCart[iNumItemsInCart] = new TypeOfPackage("Dubai Package", "Dubai", 7, iNum, 9999);
			iNumItemsInCart++;
			localStorage.setItem("obj_data", JSON.stringify(arrItemsInCart));
			localStorage.setItem("num_data", iNumItemsInCart);
		} break;

	} //end swithc

	QuickPrice();

}// end

function QuickPrice(){
	var iLength = arrItemsInCart.length;
	var dPrice = 0;

	for (var iLoop = 0; iLoop < iLength; iLoop++){
		dPrice += arrItemsInCart[iLoop].Num_Ppl * arrItemsInCart[iLoop].Price;
	}

	alert("Cart Total is: ZAR " + dPrice + " Excl. VAT. VAT is added on checkout")
}

function ShowItems(){
	var sText = "";
	var dPrice = 0;
	for (var iLoop = 0; iLoop < iNumItemsInCart; iLoop++){
		sText += "Package: " + (iLoop+1) + "<br />";
		sText += "Package Name: " + arrItemsInCart[iLoop].Package_Name + "<br />" ; 
		sText += "Included Cities: " + arrItemsInCart[iLoop].Included_Cities + "<br />";
		sText += "Duration of Trip " + arrItemsInCart[iLoop].Num_Days + " days" + "<br />";
		sText += "Number Of Travellers: " + arrItemsInCart[iLoop].Num_Ppl + "<br />" ;
		sText += "Price Excl VAT: ZAR " + (arrItemsInCart[iLoop].Price * arrItemsInCart[iLoop].Num_Ppl) + "<br />";
		dPrice += (arrItemsInCart[iLoop].Price * arrItemsInCart[iLoop].Num_Ppl);
		sText += "** End Of Package **" + "<br />" ;
	}

	document.getElementById("items_in_cart").innerHTML=sText;
	dPrice = (dPrice + (dPrice * 0.15)).toFixed(2);
	dPrice_Global = dPrice;
	document.getElementById("PriceAlert").innerHTML="Price Including VAT: ZAR " + dPrice;

} //end func

function ClearCart(){

	if (confirm("Do You Want To Clear The Cart?")){
		var arrItemsInCart = [];
		localStorage.setItem("obj_data", JSON.stringify(arrItemsInCart));
		var iNumItemsInCart = 0;
		localStorage.setItem("num_data", 0);
		alert("Successfull!")
	} else {
		alert("Cart Was Not Cleared")
	}

	location.reload();

} //end func

var dPrice_Global = 0;

function Coupons(){
	if (document.getElementById("code").value === "opening-special-5")
	{
		var dNewPrice = 0;
		dNewPrice = (dPrice_Global - (dPrice_Global * 0.05)).toFixed(2);
		document.getElementById("alertcoupon").innerHTML="Coupon Successfull, New Price: " + dNewPrice;
	} else {
		document.getElementById("alertcoupon").innerHTML = "Invalid Coupon!"
	}
}//end

function DeleteStorage(){
	localStorage.clear();
}

function GenOrder(){
	alert(now.getFullYear())
}