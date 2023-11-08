var canvas = new fabric.Canvas("myCanvas");
// Create canvas variable

//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}else{
	
		if(keyPressed == '87')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '83')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '65')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '68')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(ball_y >=0)
		{
		   ball_y = ball_y - block_image_height;
		   canvas.remove(ball_obj);
		   new_image();
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ball_y <=450)
		 {
			ball_y = ball_y + block_image_height;
			canvas.remove(ball_obj);
			new_image();
		 }
	}

	function left()
	{
	
			// Write a code to move ball left side.
			if(ball_x >=0)
		 {
			ball_x = ball_x - block_image_height;
			canvas.remove(ball_obj);
			new_image();
		}

	}
	function right()
	{
			// Write a code to move ball right side.
			if(ball_x <=1100)
		 {
			ball_x = ball_x + block_image_height;
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

