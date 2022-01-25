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



    const extrudeShape = [];

    for (let p = 1; p < 16; p += 1) {

      const circleShape = circle({
        radius: 16 - p,
        segments: 50,
        center: [0, 7]
      });
  
      extrudeShape.push (
        translate([-p*2, p*2, 0],
          extrudeRectangular({
            height: p * 10,
            twistAngle: Math.PI * 5,
            twistSteps: 9
          }, circleShape),
        )
      );
    }

    // for (let c = 0; c < 10; c += 1) {
    //   shapes.push( translate([0, 0, c * 14 + 15], cube({ size: 10 - c, center: [0, 0, 0] })) );
    // }



  // when we are done we return one shape or an array of shapes
  return extrudeShape;
};

// this lets javascript know what to execute once we import this
module.exports = { main };



