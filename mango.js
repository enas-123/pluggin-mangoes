class Mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1
					}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/mango.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			// rectMode(CENTER)
			//rotate(this.body.angle)
			fill(255,190,255)
			//imageMode(CENTER);
			strokeWeight(3)
			stroke("black")			
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}