export class Hit{
    constructor(player,x,y){
        this.player=player;
        this.direction=player.direction;
        this.x=x+player.width*0.6;
        this.y=y+player.height*0.35;
        this.width=100;
        this.height=90;
        this.speedX=3;
        this.speedY=0;
        this.color='rgba(0,0,0,0.5)'
        this.HitDeletion=false;
        this.size=Math.random()*10+10;
        this.zoom=0.7;
        this.angel=0;
        this.turn=Math.random()*0.2-0.1;
        this.image=document.getElementById('hitfire');
    }
    update(){
        this.angel+=this.turn;
        this.x+=(this.speedX+this.player.maxSpeed)*this.direction;
        //this.x+=this.speedX*this.direction;
        this.y+=Math.sin(this.angel);
        this.size*=0.95;
        if(this.size<0.1) this.HitDeletion=true;
    }
    draw(context){
        context.drawImage(this.image,0,0,this.width,this.height,this.x,this.y,this.width*this.zoom,this.height*this.zoom);
        /*context.beginPath();
        context.arc(this.x,this.y,this.size,0,Math.PI*2);
        context.fillStyle=this.color;
        context.fill();*/
    }
}