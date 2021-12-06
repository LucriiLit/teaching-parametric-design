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




    const circleShape3 = 
     translate([20, 0, 50], 
          cuboid({ size: [10,10,100] }
    ));

    

    const unionShape = subtract([rotateTransformedExtrudeShape, circleShape3]);




    //extrudierungsschlaufe just 4 fun
    const circleShape2 = [];

    // 
    for (let c = 1; c < 11; c += 1) {
      circleShape2.push( 
        translate([c * 60, 0, 0], 
          extrudeRectangular({ height: 100, twistAngle: Math.PI * c, twistSteps: 40 },
            circle({ radius: c, segments: c + 2, center: [c, c] }
      ))));
    }



    const colorObject = colorize(
      colorNameToRgb('lightblue'),
      rotateTransformedExtrudeShape, circleShape2,
    );


  // when we are done we return one shape or an array of shapes
  return [rotateTransformedExtrudeShape, unionShape];
};

// this lets javascript know what to execute once we import this
module.exports = { main };



