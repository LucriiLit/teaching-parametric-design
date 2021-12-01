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

    // Erstellen von 2 Variablen (const) die einen Cylinder und ein Quader zugeshrieben bekommen
    const coolerCyli = translate([0, 0, -20], cylinder({ radius: 10 }));
    const coolerBla = cuboid({ size: [100, 100, 1] });

    // Erstellen eines Arrays in den ein Cylinder mit speziellen Werten gepusht wird
    const objects = [];
    objects.push( translate([0, 0, -10], cylinder({ radius: 20, segments: 7 })) );

    // Erstellen eines Arrays und einer Variablen mit definierten Properties
    const shapes = [];
    
    // Schlaufe für das mehrfache Erstellen des Cubes mit den oben definierten Properties
    for (let c = 0; c < 10; c += 1) {
      shapes.push( translate([0, 0, c * 14 + 15], cube({ size: 10 - c, center: [0, 0, 0] })) );
    }

  // when we are done we return one shape or an array of shapes
  return [
    objects,
  ];
};

// this lets javascript know what to execute once we import this
module.exports = { main };



