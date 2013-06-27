function shapeWrapper(lineHeight,Xs) {
    var out = '';
    Xvalues = Xs.split('|');
    for(i=0; i < Xvalues.length; i++) {
        parts = Xvalues[i].split(',');
        out += '<div style="float:left;clear:left;height:'+lineHeight+'px;width:'+ parts[1]+'px"></div>';
        out += '<div style="float:right;clear:right;height:'+lineHeight+'px;width:'+ parts[2]+'px"></div>';
    }
    document.write(out);
}

function circleWrapper(lineHeight, radius) {
    var out = '';
    var y = 0;
    while (y < 2*radius) {
        var length = radius-y;
        var width = radius - Math.sqrt(radius*radius - length*length);
        out += '<div style="float:left;clear:left;height:'+lineHeight+'px;width:'+ width +'px"></div>';
        out += '<div style="float:right;clear:right;height:'+lineHeight+'px;width:'+ width +'px"></div>';
        y += lineHeight
    }
    document.write(out);
}
