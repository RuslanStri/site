let arrOfRadio = document.getElementsByName("radio");
let HeroPage = document.querySelector('.wrapper6:nth-child(3)');
let HeroPageTitlle = document.querySelector('.wrapper6:nth-child(3) h1');
let HeroPageText = document.querySelector('.wrapper6:nth-child(3) p');
let HeroPageButton = document.querySelector('.wrapper6:nth-child(3) input');
let heroImg = document.querySelector('.heroImg');

let opa = 0;

for (let i=0; i<arrOfRadio.length; i++)
	arrOfRadio[i].addEventListener("click", sliderRadio);


function sliderRadio () {
	heroImg.style.opacity = '0';
	opa = +this.getAttribute("id") +1;
	HeroPage.style.backgroundImage = "url(images/Hero" + ( (+this.getAttribute("id")) +1)+ "BG.jpg)";
	
	//heroImg.setAttribute("src", "images/Hero" + ((+this.getAttribute("id"))+1) + ".png");
	HeroPage.setAttribute("data-imgnubmer", (+this.getAttribute("id")) +1);


	switch (+this.getAttribute("id") +1) {
		case 1:
			HeroPageTitlle.innerHTML = "Fruit pie";
			HeroPageTitlle.style.color = "#854a4b";
			HeroPageButton.setAttribute("class", "first");
			HeroPageText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra semper tortor, vitae pulvinar mauris aliquam scelerisque. Aliquam erat volutpat. Nullam id scelerisque orci. Integer et pharetra quam. Duis ac scelerisque enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.";
			break;
		case 2:
			HeroPageTitlle.innerHTML = "Bananas Foster Ice Cream Cake";
			HeroPageTitlle.style.color = "#921026";
			HeroPageButton.setAttribute("class", "second");
			HeroPageText.innerHTML = "If you're looking for decadence, look no further — you've found the Holy Grail of desserts. Honestly, this cake makes us wonder why Bananas Foster hasn't always been served on top of ice cream cake.";
			break;
		case 3:
			HeroPageTitlle.innerHTML = "Ravioli with seafood";
			HeroPageTitlle.style.color = "#e1c574";
			HeroPageButton.setAttribute("class", "third");
			HeroPageText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor molestie enim, et suscipit lacus mollis in. Mauris eget nulla non enim eleifend porttitor vitae et ante. In volutpat, mauris sit amet molestie posuere, eros neque viverra est, eget porttitor orci ipsum eu nulla.";
			break;
		default:
			HeroPageTitlle.innerHTML = "Please reload the page.";
			HeroPageText.innerHTML = "";
			break;
	}

	window.setTimeout(opacity,1200);
}


function opacity () {
	heroImg.style.opacity = '1';
	heroImg.setAttribute("src", "images/Hero" + opa + ".png");
	
}


function changeRadio (arg) {
	for (let i=0; i<arrOfRadio.length; i++)
		if (i == (arg-1) ) arrOfRadio[i].checked = true;
			else arrOfRadio[i].checked = false;
}

