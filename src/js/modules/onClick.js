export function addActiveClass(elements) {
	for (var i = 0; i < elements.length; i++) {
		document.getElementById(elements[i]).classList.toggle("active")
	}
}
export function slider()
{
	let sliderItems = document.getElementsByClassName("feeback__card");
	for (var i = 0; i < sliderItems.length; i++) {
		let index = sliderItems[i].classList[1].slice(sliderItems[i].classList[1].length - 1, sliderItems[i].classList[1].length);
		sliderItems[i].classList.remove("card_" + index);
		if (index == 0) 
		{	
			sliderItems[i].classList.add("card_" + (sliderItems.length - 1));
		}
		else 
		{
			sliderItems[i].classList.add("card_" + (index - 1));
		}
	}
}

export function sliderLeft()
{
	let sliderItems = document.getElementsByClassName("feeback__card");
	for (var i = 0; i < sliderItems.length; i++) {
		let index = sliderItems[i].classList[1].slice(sliderItems[i].classList[1].length - 1, sliderItems[i].classList[1].length) * 1;
		sliderItems[i].classList.remove("card_" + index);
		if (index == sliderItems.length - 1) 
		{	
			sliderItems[i].classList.add("card_" + 0);
		}
		else 
		{
			sliderItems[i].classList.add("card_" + (index + 1));
		}
	}
}
