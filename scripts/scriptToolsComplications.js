document.querySelector("#easy").addEventListener("click", change);
document.querySelector("#middle").addEventListener("click", change);
document.querySelector("#long").addEventListener("click", change);

let arrOfImg = document.querySelectorAll(".complication img");

let arrEasy = ["Recipe1.png", "Recipe2.png", "Recipe3.png"];
let arrMiddle = ["Dop1.jpg", "Dop2.jpg", "Dop3.jpg"];
let arrLong = ["Hero1.png", "Hero2.png", "Hero3.png"];


function change() {

	if (this.getAttribute("id") == "easy"){
		for (let i=0;i<arrOfImg.length;i++) 
			arrOfImg[i].setAttribute("src", "images/" + arrEasy[i]);

		this.setAttribute("class","selected");
		document.querySelector("#middle").setAttribute("class","");
		document.querySelector("#long").setAttribute("class","");
	}
	
	

	if (this.getAttribute("id") == "middle"){
		for (let i=0;i<arrOfImg.length;i++) 
			arrOfImg[i].setAttribute("src", "images/" + arrMiddle[i]);

		this.setAttribute("class","selected");
		document.querySelector("#easy").setAttribute("class","");
		document.querySelector("#long").setAttribute("class","");
	}

	

	if (this.getAttribute("id") == "long"){
		for (let i=0;i<arrOfImg.length;i++) 
			arrOfImg[i].setAttribute("src", "images/" + arrLong[i]);

		this.setAttribute("class","selected");
		document.querySelector("#middle").setAttribute("class","");
		document.querySelector("#easy").setAttribute("class","");
	}
}