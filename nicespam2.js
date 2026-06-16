https://nervousdata.com/wiese/txt_phydra.html

hush()
height = window.innerHeight*0.07


p5 = new P5();
spam = p5.loadStrings("https://s3.eu-west-1.amazonaws.com/www.puntociego.es/nicespam.txt");

p5.draw = () => {
  p5.background(230,240,230);
  p5.fill(0,0,0);
  p5.textSize(height*1.5);
  p5.textLeading(height * 1.5);
  p5.textFont("arial");
  
  // spam = p5.loadStrings("file:///tmp/nicespam.txt");
  //p5.text(Math.ceil(time/10)%200, p5.windowWidth/2+20, p5.windowHeight/2+20, p5.windowWidth, p5.windowHeight);
  
  p5.text(spam[Math.ceil(time/10)%200], p5.windowWidth/8, p5.windowHeight/2, p5.windowWidth, p5.windowHeight);
  //p5.text("caballo corazón", p5.windowWidth/4, p5.windowHeight/4, p5.windowWidth, p5.windowHeight);
  //selected=spam[Math.ceil(time/10)%200]
  //p5.text(selected.charAt(0), p5.windowWidth/4, p5.windowHeight/4, p5.windowWidth, p5.windowHeight);
  
  //p5.text(Math.ceil(Math.random()*1000%200), p5.windowWidth/2, p5.windowHeight/2, p5.windowWidth, p5.windowHeight);
  //p5.text(spam[1], p5.windowWidth*0.04, 30, p5.windowWidth, p5.windowHeight);
  //p5.text(spam[Math.ceil(time)%200], p5.windowWidth*0.04, 30, p5.windowWidth, p5.windowHeight);
} // Charles Babbage

p5.hide();

s0.init({ src: p5.canvas });

mill = () => osc(22,0.02,0).posterize(8).thresh(0.5)
text = () => src(s0)
text()
.scrollX(0.1,0.011)
.scrollY(0.1,0.011)
.mask(mill())
.add(text().scrollX(0.1,0.012).mask(mill().invert(1)))
//.layer(src(o0).mask(mill().diff(mill().rotate(Math.PI*0.25)).scale(0.75),0.01))
//.layer(src(o1).mask(mill().diff(mill().rotate(Math.PI*0.25)).scale(0.75),0.01))
.layer(src(o2).mask(mill().diff(mill().rotate(Math.PI*0.25)).scale(0.75),0.01))
.add(gradient([10,2,4].smooth()))
  .out(o0);

//gradient([1,2,4]).out(o0)

src(o0).modulate(noise(0.1, 0.1))
//.blend(o0,0.2)
.modulateRepeatY(osc(10), 4.0, ({time}) => Math.sin(time) / 10)
.kaleid(3)
//rotate(0.01,0.1)
.kaleid(2)
.rotate( () => time%360)
.scrollY(0.1)
  .out(o1)

s2.init({ src: p5.canvas });
text2 = () => src(s2)
text2()
.blend(o0,0.3)
.blend(o1,0.6)
//.blend(o2,0.1)
//.blend(o2,0.6)
  .out(o2);


render()
render(o2)
