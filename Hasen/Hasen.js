let Jaeger1 = document.getElementById("Hase1Input")
let Jaeger2 = document.getElementById("Hase2Input")
let Jaeger3 = document.getElementById("Hase3Input")
let ToteHasen = document.getElementById("Tote Hasen")
min = 1;
max = 6;
var e1 = Math.floor(Math.random() * (max - min))
e2 = Math.floor(Math.random() * (max - min))
e3 = Math.floor(Math.random() * (max - min))
Jaeger1 = e1;
Jaeger2 = e2
Jaeger3 = e3

let Dreitot = () =>
{
if (e1 = e2 = e3)
   document.close()
}


