hush()

bpm=10
osc(10, 0.25, 2) //
.rotate(0.7,1) //radian
.scale(0.5,1,3) //x,y,z
.blend(o1,0.2)
.out(o0)

//shape(100,0.5,0.001)

//shape([3].fast(5),0.1,0.01)
shape([5,4,3,8,9].fit(-0.2,0.2).smooth(),0.1,0.01)
.rotate(1,-1)
//.kaleid()
//.diff(o0)
.mult(o0)
.add( shape([3].fast(5),0.1,0.01))
.scrollY(12,-0.1)
.repeat(5,2,-0.5)
.diff(o1)

.out(o1)


render(o0)
render(o1)
render(o2)
render(o3)

render()



s0.initCam()
src(s0)
//.blend(o1,0.1)
.scrollY(12,-0.1)
//.repeat(2,2,-0.5)
  .modulate(o2).scrollX(1,.2)
//.modulate(o2,1)
//.mask(o0,0.5)
.sub(o0,0.3)
//.kaleid(10)
.pixelate([100,200].smooth(),200)
.brightness(0.2)
//.contrast(0.1)
//.luma() //luminancia - lo negro transparente
//.color(1,[1,2,3,4,5,6],0)
.out(o2)


//s1.initVideo("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWpmN2E0bTd3ZzV2dGI4a2w2MzVueWx0NTd3Mnl6OHFrbG84c3RlcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/33zX3zllJBGY8/giphy.mp4")
s1.initVideo("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmhsczlweXF6emtncmJ6OGxveWV1dzQ1cTM4Z3N5NGF6M2d4MnZnMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2GrNmaGsI2ybu/giphy.mp4")
src(s1)
.blend(o2,0.7)
.scale(() => Math.sin(time)*2)
//.contrast(0.3)
.out(o3)