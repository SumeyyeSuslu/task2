//moriscript

var Outer = require('./outer');
module.exports = function (babel) {
  var t = babel.types;
	var out = new Outer();
  function moriMethod(name) {
    const expr = t.memberExpression(t.identifier('mori'), t.identifier(name));
    expr.isClean = true;
    return expr;
}
  return {
    visitor: {
		
      ArrayExpression: function (path) {
		var count = out.getlen(path.node.elements);
		out.print(count);
        path.replaceWith(
          t.callExpression(
            t.memberExpression(t.identifier('mori'), t.identifier('vector')),
            path.node.elements
          )
        );

      },
		IfStatement: function (path) {
				
				if(path.node.alternate!=null)				
				path.replaceWith( path.node.alternate);
				else
					path.remove();
			  },
      ObjectExpression: function (path) {
        var props = [];

        path.node.properties.forEach(function (prop) {
          props.push(
            t.stringLiteral(prop.key.name),
            prop.value
          );
        });

        path.replaceWith(
          t.callExpression(
            t.memberExpression(t.identifier('mori'), t.identifier('hashMap')),
            props
          )
        );
      },
      AssignmentExpression: function(path) {
        var lhs = path.node.left;
        var rhs = path.node.right;
      
        if(t.isMemberExpression(lhs)) {
          if(t.isIdentifier(lhs.property)) {
            lhs.property = t.stringLiteral(lhs.property.name);
          }
      
          path.replaceWith(
            t.callExpression(
              moriMethod('assoc'),
              [lhs.object, lhs.property, rhs]
            )
          );
        }
      }
      


    }

  };

};
