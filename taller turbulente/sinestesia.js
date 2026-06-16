hush()

a.setBins(6) // amount of bins (bands) to separate the audio spectrum
a.setSmooth(0.5) // audio reactivity smoothness from 0 to 1, uses linear interpolation
a.setScale(10)    // loudness upper limit (maps to 0)
a.setCutoff(0.3)   // loudness from which to start listening to (maps to 0)
a.show()

bpm=10
//noise(5)
//noise(5+()=>a.fft[0]*1.9,()=>a.fft[5]*0.100)
noise(()=>a.fft[0]*9)
//osc(()=>a.fft[1]*100)
//osc(10)
  .color(()=>a.fft[0]*3,()=>a.fft[1],()=>a.fft[5])
	.modulate(o0,()=>a.fft[1]*0.1) // listening to the 2nd band
	.modulateRepeatX(o0,()=>a.fft[0],-0.05) // listening to the 2nd band
    .modulateRepeatY(o0,()=>a.fft[0],0.05) // listening to the 2nd band
	.out()
render(o0)
