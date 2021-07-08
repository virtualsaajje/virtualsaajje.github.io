const joinBtn = document.querySelector("button");
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
	var fType = getUrlVars()["uname"];
	if(fType){
		window.open(`https://us04web.zoom.us/j/76805975364?pwd=bDA1OUFPeHJLNzA4NFJ3OGlIV2ZEUT09&uname=${fType}`);
	}else{
		window.open(`https://us04web.zoom.us/j/76805975364?pwd=bDA1OUFPeHJLNzA4NFJ3OGlIV2ZEUT09`);
	}
});
