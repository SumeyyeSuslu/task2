"use strict";

var Outer = (function () {
    function Outer() {
		console.log("It arrived here");
        
    }
    Outer.prototype.print = function (par) {
	console.log(par);	
	};
	Outer.prototype.getlen= function (nodeAST) {
	return nodeAST.length;	
	};
    return Outer;
}());
module.exports = Outer;
