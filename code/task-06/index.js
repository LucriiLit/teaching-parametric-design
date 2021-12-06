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
      center: [0, 7]
    });



    // genestete Eigenschaften (extrudieren, transformieren, rotieren)
    const rotateTransformedExtrudeShape = 
      extrudeRectangular({
        height: 100,
        twistAngle: Math.PI * 4,
        twistSteps: 8
      },
      
        translate(
          [0, 0, 0],
          circleShape,
          
          rotate(
            [0, Math.PI*2, 0],
            circleShape,
            
    ), ), circleShape);


    const circleShape3 = [];


    for (let c = 1; c < 6; c += 1) {
      circleShape3.push ( 
        translate([20 + 2 * c, 2 * c, 0], 
          cuboid({ size: [10,10,10 * c] }
      )));
    }
    





    // //extrudierungsschlaufe just 4 fun
    // const circleShape2 = [];

    // // 
    // for (let c = 1; c < 11; c += 1) {
    //   circleShape2.push( 
    //     translate([c * 60, 0, 0], 
    //       extrudeRectangular({ height: 100, twistAngle: Math.PI * c, twistSteps: 40 },
    //         circle({ radius: c, segments: c + 2, center: [c, c] }
    //   ))));
    // }



    const colorObject = colorize(
      colorNameToRgb('lightblue'),
      circleShape,
    );


  // when we are done we return one shape or an array of shapes
  return [circleShape3];
};

// this lets javascript know what to execute once we import this
module.exports = { main };



