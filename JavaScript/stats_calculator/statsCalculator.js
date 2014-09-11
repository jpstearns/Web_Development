/*
*@author:	jpStearns
*@since:	August 10th, 2014
*@email:	jstearns@ccri.edu
*			https://www.gitHub.com/jpStearns

Statistics Calculator javaScript source code
*/
function calculate(){

	//grab input from user
	var textbox0 = document.getElementById("textbox0");
	var textbox1 = document.getElementById("textbox1");
	var textbox2 = document.getElementById("textbox2");
	var textbox3 = document.getElementById("textbox3");
	
	var test1 = parseFloat(textbox0.value);
	var test2 = parseFloat(textbox1.value);
	var test3 = parseFloat(textbox2.value);
	var test4 = parseFloat(textbox3.value);
	
	//Store the test scores in an Array and sort ascending
	var grades = new Array(test1, test2, test3, test4);
	grades.sort(function(a,b){return b-a});
	console.log(grades[0], grades[1], grades[2], grades[3]);
	
	//Listen to the Radio Buttons
	var  radDrop0 = document.getElementById("radDrop0");
	var  radDrop1 = document.getElementById("radDrop1");
	var  radDrop2 = document.getElementById("radDrop2");
	
	if (radDrop0.checked){
		findAverage(grades);
	}
	if (radDrop1.checked){
		var drop2 = new Array(grades[0], grades[1], grades[2])
		findAverage(drop2);
	}
	if (radDrop2.checked)
		var drop2 = new Array(grades[0], grades[1]);
		findAverage(drop2)
	
	function findAverage(scores){
		var min = Math.min.apply(null, scores);
		var max = Math.max.apply(null, scores);
	
		var sum = 0;
		for(var i=0; i<scores.length; i++){
			sum += parseInt(scores[i]);
		}

		//Calculate the Average and assign a LetterGrade 
		var average = sum/scores.length;
		var letterGrade = ""
		if(average<60){
			letterGrade="F";
		}
		else if(average<70){
			letterGrade="D"
		}
		else if(average<80){
			letterGrade="C"
		}
		else if(average<90){
			letterGrade="B"
		}
		else
			letterGrade = "A"
		
		//Listen to the Checkboxes
		var chkAvg = document.getElementById("chkAvg");
		var chkMax = document.getElementById("chkMax");
		var chkMin = document.getElementById("chkMin");
		var chkLetterGrade = document.getElementById("chkLetterGrade");
	
		var result = "";
		if(chkAvg.checked){
			result += "Average "+average.toFixed(2)+"\n";
		}
		if(chkMax.checked){
			result += "Max "+max+"\n";
		}
		if(chkMin.checked){
			result += "Min "+min+"\n";
		}
		if(chkLetterGrade.checked){
			result += "Letter Grade: " +letterGrade+"\n";
		}	
		
		alert(result);
	}//end findAverage

}//end calculate()