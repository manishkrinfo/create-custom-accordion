const ourItemDiv = document.getElementsByClassName('item');
const openIcons = document.getElementsByClassName('iconOpen');
const closeOpen = document.getElementsByClassName('iconClose');

//console.log(ourItemDiv);

for(let i=0; i < ourItemDiv.length; i++) {

    closeOpen[i].style.display = "none";

    ourItemDiv[i].addEventListener('click', () => {
        const result = ourItemDiv[i].classList.toggle("active");
        if(result) {
            closeOpen[i].style.display = "block";
            openIcons[i].style.display = "none";
        }  else {            
            closeOpen[i].style.display = "none";
            openIcons[i].style.display = "block";
        }
    })
}