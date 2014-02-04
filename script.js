function Day (day, hours){
	this.day = day;
	this.hours = hours;
}

var week1, week2;


String.prototype.killWhiteSpace = function() {
    return this.replace(/\s/g, '');
};

function parseHours(hours){
	console.log(hours);
	var array = hours.match(/[^\s]+/g);
	console.log(array[0])
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

