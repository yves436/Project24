class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options={
		restitution: 0.8,
		friction : 0.9,
		density : 12
	}
		this.width=width;
		this.height=height;
		this.body=Bodies.rectangle(x, y, width,height, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
            var angle=this.body.angle
			push()
			translate(stonepos.x, stonepos.y);
            rotate (angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("pink");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height);

			pop()
	}

}