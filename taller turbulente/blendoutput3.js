hush()

osc(10, 0.25, 2) //
.rotate(0.7,1) //radian
//.scale(0.5,1,3) //x,y,z
.blend(o1,0.2)
.out(o0)

//shape(100,0.5,0.001)

//shape([3].fast(5),0.1,0.01)
shape([5,4,3,8,9].smooth(),0.1,0.01)
.rotate(1,-1)
//.kaleid()
//.diff(o0)
.mult(o0)
//.add( shape([3].fast(5),0.1,0.01))
.scrollY(12,-0.1)
.repeat(2,2,-0.5)
.diff(o1)
.out(o1)

//render(o1)
render(o1)
