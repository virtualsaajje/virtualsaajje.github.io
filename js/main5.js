const joinBtn = document.querySelector("button");
const uname = getUrlVars()["uname"].replaceAll("%20"," ");
const name = document.getElementById("name");
if(uname){
	name.textContent = uname;
}else{
	name.textContent = "Everyone"
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
}

joinBtn.addEventListener("click", () => {
	alert("testing");
	if(uname){
		window.open(`https://us04web.zoom.us/j/76805975364?pwd=bDA1OUFPeHJLNzA4NFJ3OGlIV2ZEUT09&uname=${uname}`);
	}else{
		window.open(`https://us04web.zoom.us/j/76805975364?pwd=bDA1OUFPeHJLNzA4NFJ3OGlIV2ZEUT09`);
	}
});
