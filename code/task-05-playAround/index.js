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

    const circleShape = circle({
      radius: 20,
      segments: 100,
      center: [0, 30]
    });

    const extrudeShape = extrudeRectangular({
      height: 200,
      twistAngle: Math.PI * 9,
      twistSteps: 13
    }, circleShape);

    // for (let c = 0; c < 10; c += 1) {
    //   shapes.push( translate([0, 0, c * 14 + 15], cube({ size: 10 - c, center: [0, 0, 0] })) );
    // }



  // when we are done we return one shape or an array of shapes
  return extrudeShape;
};

// this lets javascript know what to execute once we import this
module.exports = { main };



