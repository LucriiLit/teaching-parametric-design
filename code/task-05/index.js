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
    const coolerCyli = translate([0, 0, -20], cylinder({ radius: 3 }));
    const coolerCyli2 = translate([0, 0, -17.5], cylinder({ radius: 5 }));
    const coolerBla = cuboid({ size: [25, 25, 1] });
    const coolerBla2 = translate([0, 0, 2.5], cuboid({ size: [27, 27, 2] }));


    // Erstellen eines Arrays in den ein Cylinder mit speziellen Werten gepusht wird
    const objects = [];
    objects.push( translate([0, 0, -9], cylinder({ radius: 8, segments: 7 })) );
    objects.push( translate([0, 0, -6], cylinder({ radius: 10, segments: 7 })) );

    // Erstellen eines Arrays und einer Variablen mit definierten Properties (hier waren Mal Werte)
    const shapes = [];
    
    // Schlaufe für das mehrfache Erstellen des Cubes mit den oben definierten Properties
    for (let c = 0; c < 10; c += 1) {
      shapes.push( translate([0, 0, c * 14 + 15], roundedCuboid({ size: [10 - c, 10 - c, 10 - c], roundRadius: 1 - c/10 + 0.1,  segments: 4, center: [0, 0, 0] })) );
      shapes.push( translate([0, 5 - c/2, c * 14 + 15], roundedCuboid({ size: [5 - c/2, 5 - c/2, 5 - c/2], roundRadius: 1 - c/10,  segments: 4, center: [0, 0, 0] })) );
      shapes.push( translate([0, -5 + c/2, c * 14 + 15], roundedCuboid({ size: [5 - c/2, 5 - c/2, 5 - c/2], roundRadius: 1 - c/10,  segments: 4, center: [0, 0, 0] })) );
      shapes.push( translate([+5 - c/2, 0, c * 14 + 15], roundedCuboid({ size: [5 - c/2, 5 - c/2, 5 - c/2], roundRadius: 1 - c/10,  segments: 4, center: [0, 0, 0] })) );
      shapes.push( translate([-5 + c/2, 0, c * 14 + 15], roundedCuboid({ size: [5 - c/2, 5 - c/2, 5 - c/2], roundRadius: 1 - c/10,  segments: 4, center: [0, 0, 0] })) );

      // shapes.push( translate([0, 0, c * 14 + 15], cuboid({ size: [18 - c*1.5, 18 - c*1.5, 1 - c/10], center: [0, 0, 0] })) ); //cuboid({ size: [1, 2, 3] })
      // shapes.push( translate([0, 0, c * 14 + 15], roundedCuboid({ size: [18 - c*1.5, 18 - c*1.5, 1 - c/10], roundRadius: 0.04, segments: 16, center: [0, 0, 0] })) ); //cuboid({ size: [1, 2, 3] })
      // shapes.push( translate([0, 0, c * 14 + 15], cylinder({ start: [0, 0, 0], end: [0, 0, 0.1], radius: 10-c, segments: 32, center: [0, 0, 0] })) ); //cuboid({ size: [1, 2, 3] })

      // cylinder({ start: [0, 0, 0], end: [3, 3, 10], radius: 1 }),

      // shapes.push( translate([0, 0, c * 14 + 15], arc({ radius: 14 - c + 1, startAngle: 0, endAngle: Math.PI * 2, segments: 32 })) );
      shapes.push( translate([0, 0, c * 14 + 15], torus({ innerRadius: 0.8, outerRadius: 13-c, innerSegments: 3, outerSegments: 32, innerRotation: 0 })) );
      shapes.push( translate([0, 0, c * 14 + 15], torus({ innerRadius: 0.1, outerRadius: 16-c*1.2, innerSegments: 3, outerSegments: 32, innerRotation: 0 })) );
      


    }



  // when we are done we return one shape or an array of shapes
  return [
    coolerCyli,
    coolerCyli2,
    coolerBla,
    coolerBla2,
    objects,
    shapes
  ];
};

// this lets javascript know what to execute once we import this
module.exports = { main };



