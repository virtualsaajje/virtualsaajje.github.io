const joinBtn = document.querySelector("button");
const uname = getUrlVars()["uname"];
const name = document.getElementById("name");
if(uname){
	name.textContent = uname.replaceAll("%20"," ");
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
	alert("Please rename yourself to INDEX_NO__NAME_WITH_INITIALS if it is different.");
	if(uname){
		window.open(`https://learn.zoom.us/j/61522408987?pwd=bEg5clZ5RGpWNmh2TFN1S2piZGZ3dz09&uname=${uname}`);
	}else{
		window.open(`https://learn.zoom.us/j/61522408987?pwd=bEg5clZ5RGpWNmh2TFN1S2piZGZ3dz09`);
	}
});
