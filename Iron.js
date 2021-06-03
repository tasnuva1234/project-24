class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the iron
	    var options={			
			restitution:0.8,
			density:30,
			friction:3
		}

		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height,options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			stroke("black");
			fill("black");
            rect(0,0,this.width,this.height)
			pop()
	}

}