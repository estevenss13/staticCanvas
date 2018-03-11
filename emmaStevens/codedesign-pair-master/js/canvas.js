/*This is going to be the canvas JS */

// Define Canvas Variable
var canvas = document.getElementById('canvas');
// Define context as ctx
var ctx = canvas.getContext('2d');


//Line Spacing variable
var ls = 22.5
    //R2d2 height
var r2h = 150
    //r2d2 width
var r2w = 157

r2d2(ctx, 250, 250);

//Body function
function r2d2(ctx, x, y) {
    //main body fucntion call
    body(ctx, x, y, r2w, r2h);
    lines(ctx, x, y);
    slines(ctx, x, y);
    detail(ctx, x, y);
    //head
    head(ctx, x, y);


    //RollyLegs
    leg(ctx, x, y); //left leg
    leg(ctx, x + ls * 6, y); ///right leg



    //Main Body Function
    function body(ctx, x, y, w, h) {

        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.stroke();
        ctx.closePath();

    }

    function lines(ctx, x, y) {
        //lineOne
        ctx.beginPath();
        ctx.moveTo(x + ls, y);
        ctx.lineTo(x + ls, y + r2h);
        ctx.stroke();
        ctx.closePath();

        //lineTwo
        ctx.beginPath();
        ctx.moveTo(x + ls * 2, y);
        ctx.lineTo(x + ls * 2, y + r2h);
        ctx.stroke();
        ctx.closePath();

        //lineThree
        ctx.beginPath();
        ctx.moveTo(x + ls * 3, y + 50);
        ctx.lineTo(x + ls * 3, y + r2h);
        ctx.stroke();
        ctx.closePath();

        //lineFour
        ctx.beginPath();
        ctx.moveTo(x + ls * 4, y + 50);
        ctx.lineTo(x + ls * 4, y + r2h);
        ctx.stroke();
        ctx.closePath();

        //lineFive
        ctx.beginPath();
        ctx.moveTo(x + ls * 5, y);
        ctx.lineTo(x + ls * 5, y + r2h);
        ctx.stroke();
        ctx.closePath();

        //lineSix
        ctx.beginPath();
        ctx.moveTo(x + ls * 6, y);
        ctx.lineTo(x + ls * 6, y + r2h);
        ctx.stroke();
        ctx.closePath();
    }

    function slines(ctx, x, y) {
        //sidewaysLines
        ///////////////////////
        //sidewaysLine1
        ctx.beginPath();
        ctx.moveTo(x + ls * 0, y + 65);
        ctx.lineTo(x + ls * 1, y + 65);
        ctx.stroke();
        ctx.closePath();

        //sidewaysLine2
        ctx.beginPath();
        ctx.moveTo(x + ls * 7, y + 65);
        ctx.lineTo(x + ls * 6, y + 65);
        ctx.stroke();
        ctx.closePath();

        //upperSidewaysline
        ctx.beginPath();
        ctx.moveTo(x + ls * 2, y + 49);
        ctx.lineTo(x + ls * 5, y + 49);
        ctx.stroke();
        ctx.closePath();

        //furtherUppersidewaysLine
        ctx.beginPath();
        ctx.moveTo(x + ls * 2, y + 24);
        ctx.lineTo(x + ls * 5, y + 24);
        ctx.stroke();
        ctx.closePath();

        //twoBlockedsidewaysLine
        ctx.beginPath();
        ctx.moveTo(x + ls * 2, y + 80);
        ctx.lineTo(x + ls * 4, y + 80);
        ctx.stroke();
        ctx.closePath();

        //lowestLine
        ctx.beginPath();
        ctx.moveTo(x + ls * 1, y + 124);
        ctx.lineTo(x + ls * 6, y + 124);
        ctx.stroke();
        ctx.closePath();



        //nextUp
        ctx.beginPath();
        ctx.moveTo(x + ls * 1, y + 114);
        ctx.lineTo(x + ls * 6, y + 114);
        ctx.stroke();
        ctx.closePath();
    }
    //circles and retangles making screens and nobs
    function detail(ctx, x, y) {

        //detail boxes and circles
        dbc(ctx, x, y);
        //detail lines calls
        dlines(ctx, x, y);



        function dbc(ctx, x, y) {
            //upperRectangle
            ctx.beginPath();
            ctx.fillStyle = "#0d4a86";
            ctx.fillRect(x + 67.5, y + 7, 40, 10);
            ctx.stroke();
            ctx.closePath();

            //lowerRectangle
            ctx.beginPath();
            ctx.fillStyle = "#0d4a86";
            ctx.fillRect(x + 52, y + 31, 40, 10);
            ctx.stroke();
            ctx.closePath();

            //lowerSquare
            ctx.beginPath();
            ctx.fillStyle = "#0d4a86";
            ctx.fillRect(x + 97, y + 31, 10, 10);
            ctx.stroke();
            ctx.closePath();

            //upperSquare
            ctx.beginPath();
            ctx.fillStyle = "#0d4a86";
            ctx.fillRect(x + 52, y + 7, 10, 10);
            ctx.stroke();
            ctx.closePath();

            //topCircle
            ctx.beginPath();
            ctx.arc(x + 78, y + 65, 8, 0, 2 * Math.PI);
            ctx.fillStyle = "#f2f2f2";
            ctx.fill();


            //middleCircle
            ctx.beginPath();
            ctx.arc(x + 78, y + 97, 8, 0, 2 * Math.PI);
            ctx.fillStyle = "#f2f2f2";
            ctx.fill();

            //endCircle
            ctx.beginPath();
            ctx.arc(x + 78, y + 138, 8, 0, 2 * Math.PI);
            ctx.fillStyle = "#f2f2f2";
            ctx.fill();
        }

        ///Detail Lines
        function dlines(ctx, x, y) {
            //signOne
            ctx.beginPath();
            ctx.moveTo(x + 85, y + 66);
            ctx.lineTo(x + 70, y + 66);
            ctx.stroke();
            ctx.closePath();

            //signTwo
            ctx.beginPath();
            ctx.moveTo(x + 85, y + 69);
            ctx.lineTo(x + 70, y + 69);
            ctx.stroke();
            ctx.closePath();

            //signThree
            ctx.beginPath();
            ctx.moveTo(x + 75, y + 89);
            ctx.lineTo(x + 75, y + 105);
            ctx.stroke();
            ctx.closePath();

            //signFour
            ctx.beginPath();
            ctx.moveTo(x + 80, y + 89);
            ctx.lineTo(x + 80, y + 105);
            ctx.stroke();
            ctx.closePath();

            //signFive
            ctx.beginPath();
            ctx.moveTo(x + 75, y + 130);
            ctx.lineTo(x + 75, y + 145);
            ctx.stroke();
            ctx.closePath();

            //signSix
            ctx.beginPath();
            ctx.moveTo(x + 80, y + 130);
            ctx.lineTo(x + 80, y + 145);
            ctx.stroke();
            ctx.closePath();

            //horizontalLine
            ctx.beginPath();
            ctx.moveTo(x + 65, y + 90);
            ctx.lineTo(x + 45, y + 90);
            ctx.stroke();
            ctx.closePath();

            //horizontalLine2
            ctx.beginPath();
            ctx.moveTo(x + 67, y + 95);
            ctx.lineTo(x + 45, y + 95);
            ctx.stroke();
            ctx.closePath();

            //horizontalLine3
            ctx.beginPath();
            ctx.moveTo(x + 65, y + 100);
            ctx.lineTo(x + 45, y + 100);
            ctx.stroke();
            ctx.closePath();

            //horizontalLine4
            ctx.beginPath();
            ctx.moveTo(x + 68, y + 105);
            ctx.lineTo(x + 45, y + 105);
            ctx.stroke();
            ctx.closePath();

        }
    }





    //Leg function
    function leg(ctx, x, y) {

        ctx.beginPath();
        ctx.moveTo(x, y + r2h);
        ctx.lineTo(x - ls, y + r2h + 30); //left wall
        ctx.lineTo(x + 21 * 2, y + r2h + 30); //bottom
        ctx.lineTo(x + ls, y + r2h); // right wall
        ctx.stroke();
        ctx.closePath();




    }


    function head(ctx, x, y) {

        ///Function calls
        hcone(ctx, x, y);
        dline(ctx, x, y);
        details(ctx, x, y);


        ///HEAD
        function hcone(ctx, x, y) {
            ctx.beginPath();

            ctx.moveTo(x + ls * 6.6, y);
            ctx.arc(x + ls * 3.5, y, 70, 0, Math.PI, true); // Circle
            ctx.stroke();
            ctx.closePath();
        }

        //detail Lines
        function dline(ctx, x, y) {
            ctx.beginPath();
            //Horizontal Line top
            ctx.moveTo(x + 10, y - 15);
            ctx.lineTo(x + ls * 6.55, y - 15);
            //Horizontal Line bottom
            ctx.moveTo(x + ls + 2, y - 45);
            ctx.lineTo(x + ls * 5.9, y - 45);
            //Vertical Line left top
            ctx.moveTo(x + ls * 2.5, y - 67);
            ctx.lineTo(x + ls * 2.5, y - 45);
            //Vertical Line right top
            ctx.moveTo(x + ls * 4.5, y - 67);
            ctx.lineTo(x + ls * 4.5, y - 45);

            //Vertical Line left bottom
            ctx.moveTo(x + ls * 1.5, y - 15);
            ctx.lineTo(x + ls * 1.5, y);

            //Vertical Line right bottom
            ctx.moveTo(x + ls * 5.5, y - 15);
            ctx.lineTo(x + ls * 5.5, y);

            ctx.stroke();
            ctx.closePath();

        }

        //details in example circles and squares on teh head
        function details(ctx, x, y) {

            ctx.beginPath();
            ctx.fillStyle = "#0d4a86";
            ctx.fillRect(x + ls * 2.2, y - 39, r2w / 2.75, r2h / 8); // Eye background
            ctx.fillStyle = "#0d4a86";
            ctx.fillRect(x + ls * 2.5, y - 11, r2w / 3.6, r2h / 20); //bottom disc slot

            /// Black Eye
            ctx.beginPath();
            ctx.moveTo(x + ls * 3.75, y - 30);
            ctx.arc(x + ls * 3.45, y - 29.5, 7, 0, Math.PI * 2, true); // Eye
            ctx.fillStyle = "black";
            ctx.fill();

            ///Red Eye
            ctx.beginPath();
            ctx.moveTo(x + ls * 5.15, y - 7.5);
            ctx.arc(x + ls * 5, y - 7.5, 4, 0, Math.PI * 2, true); // Eye 2
            ctx.fillStyle = "red";
            ctx.fill();





        }

    }



}


//moveTo- wHeRe YoU pUt YoUr PeN dOwN
/////////////////
//   <!-- X = to go left - minus
// X = to go right - add
// Y - to go up - minus
// Y - to go down - add-- - >
///////////////////
