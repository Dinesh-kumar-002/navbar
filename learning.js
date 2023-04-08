function openMenu(){
	let menu=document.getElementById("menu-icon");
	let list=document.getElementsByTagName("ul");
	if(list[0].style.display === "none"){
		list[0].style.display="block";
		menu.style.left="85%"
		menu.style.color="white"
		menu.innerHTML="X";
	}
	else{
		list[0].style.display="none";
		
		menu.style.color="black"
		menu.innerHTML="| | |";
	}
	
	
}