{
    //
    type Circle = {
        shape: string;
        radius: number
    }
    type Rectangle = {
        shape: string;
        width: number;
        height: number;
    }
    type Shape = Circle | Rectangle;
    const calculateShapeArea = (obj: Shape):number => {
        if('radius' in obj){
            return Math.PI*obj?.radius*obj?.radius
        }else{
            return obj?.height*obj?.width;
        }
    }

    // const circleArea = calculateShapeArea({shape: 'circle', radius: 5})
    // const rectangleArea = calculateShapeArea({shape: 'rectangle', width: 4, height:6})
    // console.log(rectangleArea)
    //
}