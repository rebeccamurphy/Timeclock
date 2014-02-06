function Day (day, hours){
	this.day = day;
	this.hours = hours;
}

var week1 =[], week2=[];


String.prototype.killWhiteSpace = function() {
    return this.replace(/\s/g, '');
};

function parseHours(hours){
	console.log(hours);
	var end = 0, start=0;
	var inTime, outTime;
	//while (hours.indexOf("OUT:", end))
	//first in
	start = hours.indexOf("IN:")
	end = hours.indexOf("OUT:")
	inTime = hours.substring(start+3, end);
	start = hours.indexOf("OUT:", end);
	end = hours.indexOf("IN:", start);

	if (end!=-1)
		outTime = hours.substring(start+4, end);
	else 
		outTime = hours.substring(start+4);
	
	
	console.log(inTime);
	console.log(outTime);
}

function readHours(evt) {
    //Retrieve the first (and only!) File from the FileList object
    //corresponds to the choose file for solution
    var f = evt.target.files[0]; 

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
        var contents = e.target.result;
        text = contents;
        parseHours(text);
      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }
  }

function addfile(){
  //attaches the functions defined in initGL to the buttons. 
  var doc = document.getElementById('fileHours');
  doc.addEventListener('change', readHours, false);

}

