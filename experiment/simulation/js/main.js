var mto=0.5;
var menu_score = 0;
var naoh = 25;
var sand = 50;
function dispmenu(val)
{
   val.classList.toggle("change");
  menu_score = menu_score+1;
  if(menu_score==1)
  {
    document.getElementById("navbar").setAttribute("style","display:block");
    document.getElementById("simulation-cont").setAttribute("style","opacity:0.5");
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:1");
    menu_score=-1;
    document.body.style.backgroundColor="black";
  }
  else
    {
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:10");
         document.body.style.backgroundColor="white";
          document.getElementById("simulation-cont").setAttribute("style","opacity:01");
      document.getElementById("navbar").setAttribute("style","display:none");
	  }
}

function specimenTube()
{
	document.getElementById("simulation").innerHTML="<img src='images/tube.gif' width='30%'>";
	document.getElementById("specimenTube").style.display = "none";
	setTimeout(() => {
	document.getElementById("sandInTube").style.display = "block";
	}, 2500);
}

function sandInTube()
{
	document.getElementById("simulation").innerHTML="<img src='images/sandInTube.gif' width='50%'>";
	document.getElementById("sandInTube").style.display = "none";
	setTimeout(() => {
	document.getElementById("sandRammer").style.display = "block";
	}, 8500);
}

function sandRammer()
{
	document.getElementById("simulation").innerHTML="<img src='images/sRammer.gif' width='45%'>";
	document.getElementById("sandRammer").style.display = "none";
	setTimeout(() => {
	document.getElementById("sandFilledTube").style.display = "block";
	}, 8500);
}

function sandFilledTube()
{
	document.getElementById("simulation").innerHTML="<img src='images/sRammerTube.gif' width='30%'>";
	document.getElementById("sandFilledTube").style.display = "none";
	setTimeout(() => {
	document.getElementById("rammingCam").style.display = "block";
	}, 5000);
}

function rammingOperation()
{
	document.getElementById("simulation").innerHTML="<img src='images/ramming3Time.gif' width='25%'>";
	document.getElementById("rammingCam").style.display = "none";
	setTimeout(() => {
	document.getElementById("parameters").style.display = "block";
	}, 14000);
}

function parameters()
{
	document.getElementById("simulation").innerHTML="<img src='images/diameter.jpg' width='60%'>";
	document.getElementById("parameters").style.display = "none";
	setTimeout(() => {
	document.getElementById("permeabilityMeter").style.display = "block";
	}, 500);
}

function permeabilityMeter()
{
	document.getElementById("simulation").innerHTML="<img src='images/permeabilityMeter.gif' width='70%'>";
	document.getElementById("permeabilityMeter").style.display = "none";
	setTimeout(() => {
	document.getElementById("dPosition").style.display = "block";
	}, 9500);
}

function dPosition()
{
	document.getElementById("simulation").innerHTML="<img src='images/dPosition.gif' width='80%'>";
	document.getElementById("dPosition").style.display = "none";
	setTimeout(() => {
	document.getElementById("water").style.display = "block";
	}, 3000);
}

function water()
{
	document.getElementById("simulation").innerHTML="<img src='images/pourWater.gif' width='55%'>";
	document.getElementById("water").style.display = "none";
	setTimeout(() => {
	document.getElementById("oPosition").style.display = "block";
	}, 19000);
}

function oPosition()
{
	document.getElementById("simulation").innerHTML="<img src='images/oPosition.gif' width='80%'>";
	document.getElementById("oPosition").style.display = "none";
	setTimeout(() => {
	document.getElementById("manometer").style.display = "block";
	}, 8000);
}

function manometer()
{
	document.getElementById("simulation").innerHTML="<img src='images/initialReading.gif' width='80%'>";
	document.getElementById("manometer").style.display = "none";
	setTimeout(() => {
	document.getElementById("rubberBoss").style.display = "block";
	}, 4000);
}

function rubberBoss()
{
	document.getElementById("simulation").innerHTML="<img src='images/rubberBoss.gif' width='70%'>";
	document.getElementById("rubberBoss").style.display = "none";
	setTimeout(() => {
	document.getElementById("pPosition").style.display = "block";
	}, 7000);
}

function pPosition()
{
	document.getElementById("simulation").innerHTML="<img src='images/pPosition.gif' width='80%'>";
	document.getElementById("pPosition").style.display = "none";
	setTimeout(() => {
	document.getElementById("stopWatch").style.display = "block";
	}, 6000);
}

function stopWatch()
{
	document.getElementById("simulation").innerHTML="<img src='images/airTank.gif' width='80%'>";
	document.getElementById("stopWatch").style.display = "none";
	setTimeout(() => {
	document.getElementById("reading").style.display = "block";
	}, 9000);
}

function reading()
{
	document.getElementById("simulation").innerHTML="<img src='images/reading.gif' width='85%'>";
	document.getElementById("reading").style.display = "none";
	setTimeout(() => {
	document.getElementById("chart").style.display = "block";
	}, 3000);
}

function chart()
{
	document.getElementById("simulation").innerHTML="<img src='images/chart.gif' width='80%'>";
	document.getElementById("chart").style.display = "none";
	setTimeout(() => {
	document.getElementById("result").style.display = "block";
	}, 4000);
}

function result()
{
	document.getElementById("simulation").style.display = "none";
	document.getElementById("result").style.display = "none";
	document.getElementById("observations").style.display = "block";
}

function resetfun()
{
	alert("Simulation will get restart.");
	location.reload();
}