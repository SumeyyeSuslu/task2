//moriscript
var SymbolicExecution = require('./symbolic-execution');
module.exports = function (babel) {
	var t = babel.types;
	var solver = { name: "z3", path: "/usr/bin/z3", tmpPath: "/home/sumeyye/Desktop/task2/tmp" };
	var parameters = {
		x: { 'type': "Int" }, y: { 'type': "Int" }
	};
	var symExec = new SymbolicExecution(parameters, solver);

	return {
		visitor: {
			IfStatement: function (path) {
				var check_SAT = symExec.solvePathConstraint(path.node.test);
				if (check_SAT.err) {
					var errorMessage = (check_SAT.err instanceof Error)
						? check_SAT.err.message
						: 'Uknown error';
					symExec.response.errors.push(errorMessage);
					console.log('error '+ check_SAT.err.message);

					/*if (symExec.response.length > 0) {
						for (var i = 0; i < symExec.response.length; i++) {
							console.log(symExec.response.errors[i]);
						}
					}*/
				}
				else {
					if (!check_SAT.res.isSAT) { // test unsatisfied, 
						console.log('test unsatisfied');
						if (path.node.alternate != null) {
							path.replaceWith(path.node.alternate);

						} else
							path.remove();

					}
					console.log('test satisfied');

				}


			}




		}

	};

};
