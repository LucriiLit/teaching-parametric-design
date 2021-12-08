// importing jscad functions
const jscad = require('@jscad/modeling')

// creating shortcuts
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;


// this is where we draw our shapes
const main = () => {

    // Erstellen eines Arrays und einer Variablen mit definierten Properties (hier waren Mal Werte)
    const shapes = [];
    
    // Schlaufe für das mehrfache Erstellen des Cubes mit den oben definierten Properties
    for (let c = 1; c < 20; c += 1) {
      shapes.push( 
        translate([0, 0, c + 10], 
          cylinder({ height: 1, radius: 20 - c, segments: 5 + c * 2 
          })
        ) 
      );
    }



  // when we are done we return one shape or an array of shapes
  return [
    shapes
  ];
};

// this lets javascript know what to execute once we import this
module.exports = { main };