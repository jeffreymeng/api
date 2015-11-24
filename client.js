function addCDN(url, type, location) {
	if (jQuery === undefined) {
		throw "jeffrey api requires jQuery"
	}
	if (location === undefined) {
		var newlocation = "head"
	} else {
		var newlocation = location
	}
	if (type === "js" || type === "javascript" || type === "JavaScript") {
		var cdn = '<script src="' + url + '"></script>'
	} else if (type === "css" || type === "CSS") {
		var cdn = '<link rel="stylesheet" href="' + url '" type="text/css">'
	} else {
		throw "please specify a file type(js or css)"
	}

	if (cdn != undefined) {
		$(newlocation).prepend(cdn)
	}
}
