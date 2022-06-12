let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
	let theme = document.getElementById("theme");

	if (theme.getAttribute("href") == "site_css.css") {
		theme.href = "black.css";
	} else {
		theme.href = "site_css.css";
	}
}