var arrLang = {
	"PL" : {
		"navBar1" : "Start",
		"navBar2" : "O mnie",
		"navBar3" : "Umiejętności",
		"navBar4" : "Projekty",
		"navBar5" : "Kontakt"
	},
	"EN" : {
		"navBar1" : "Start",
		"navBar2" : "About",
		"navBar3" : "Skills",
		"navBar4" : "Projects",
		"navBar5" : "Contact"
	}
};



function changeLanguage()
{
	if (document.getElementById("flag").getAttribute("sLang") == "PL")
	{
		document.getElementById("flag").setAttribute("sLang", "EN");
		document.getElementById("flag").src = "img/EN.jpg";
	}
	else
	{
		document.getElementById("flag").setAttribute("sLang", "PL");
		document.getElementById("flag").src = "img/PL.jpg";
	}
	
	var list = document.getElementsByClassName("lang");
	for (i = 0; i < list.length; i++) {
		list[i].innerHTML = arrLang[document.getElementById("flag").getAttribute("sLang")][list[i].getAttribute("key")];
	}
}