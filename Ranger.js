autowatch = 1;
outlets = 3;

mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

var m = mgraphics;
var jsui_width = box.rect[2] - box.rect[0];
var jsui_height = box.rect[3] - box.rect[1];

var md = jsui_height;
var slider = 0;
var vto = 1.;
var vfrom = 0.;

var RGBA = [1.,1.,1.,1.];
declareattribute("RGBA", null, null, 1);

function loadbang() {
	md = jsui_height;
	slider = 0;
	
	vfrom = md / jsui_height;
    outlet(1, 1. - vfrom);

		
	vto = slider / jsui_height;
	
	if (vto > vfrom) {
		outlet(0, 1. - vto);
		outlet(1, 1. - vfrom);
	}
		else {
    	outlet(0, 1. - vfrom);
		outlet(1, 1. - vto);
		}
	
	outlet(2, [md, slider]);	
	
    m.redraw();
	
	
}



function onclick(x, y) {
	md = y;
	
	
	vfrom = md / jsui_height;
    outlet(1, 1. - vfrom);
	}
	

function ondrag(x, y) {
	
    slider = y;

	if (slider > jsui_height) {
		slider = jsui_height;
		}
		
	if (slider < 0) {
		slider = 0;
		}
		
		vto = slider / jsui_height;
		
	if (vto > vfrom) {
		outlet(0, 1. - vto);
		outlet(1, 1. - vfrom);
	}
		else {
    	outlet(0, 1. - vfrom);
		outlet(1, 1. - vto);
		}
	
	outlet(2, [md, slider]);
    m.redraw();
}

function recall(from, to) {
	
	md = from;
	slider = to;
	
	vfrom = md / jsui_height;
    outlet(1, 1. - vfrom);

		
	vto = slider / jsui_height;
		
	if (vto > vfrom) {
		outlet(0, 1. - vto);
		outlet(1, 1. - vfrom);
	}
		else {
    	outlet(0, 1. - vfrom);
		outlet(1, 1. - vto);
		}
	
	outlet(2, [md, slider]);
    m.redraw();
		
}




function paint() {
    m.set_source_rgba(RGBA[0],RGBA[1],RGBA[2],RGBA[3]);
    m.rectangle(0, md, jsui_width, slider - md);
    m.fill();
}

function onresize() {
    jsui_width = box.rect[2] - box.rect[0];
    jsui_height = box.rect[3] - box.rect[1];
}
