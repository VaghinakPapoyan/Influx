export default function iSeeYou()
{
    let elements = [...document.getElementsByClassName("no-visible"), ...document.getElementsByClassName("visible")];
    for(let i = 0; i < elements.length; i++)
    {
        const elementsPos = elements[i].getBoundingClientRect();
        if(elementsPos.y - window.innerHeight + elements[i].offsetHeight / 2 < 0)
        {
            elements[i].classList.remove("no-visible")
            elements[i].classList.add("visible")
        }
        else
        {
            elements[i].classList.remove("visible")
            elements[i].classList.add("no-visible")
        }
    }
}