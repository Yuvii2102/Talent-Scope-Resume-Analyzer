function analyzeResume()
{

let resume = document.getElementById("resume").value.toLowerCase();
let job = document.getElementById("job").value.toLowerCase();

if(resume.length==0 || job.length==0)
{
alert("Please paste both Resume and Job Description");
return;
}

let jobWords = job.split(/\W+/);

let uniqueWords = [...new Set(jobWords)];

let matchCount = 0;
let missing = [];

uniqueWords.forEach(word => 
{

if(resume.includes(word)){
matchCount++;
}else{
missing.push(word);
}

});

let score = (matchCount / uniqueWords.length) * 100;

score = score.toFixed(2);

/* Score color logic */

let scoreClass="bad";

if(score >= 70){
scoreClass="good";
}
else if(score >= 40){
scoreClass="medium";
}

document.getElementById("output").innerHTML =

"<div class='"+scoreClass+"'>ATS Score: "+score+"%</div>" +

"<p><b>Matched Keywords:</b> "+matchCount+"</p>" +

"<p><b>Total Keywords:</b> "+uniqueWords.length+"</p>" +

"<p><b>Missing Keywords:</b></p>" +

"<p class='missing'>"+missing.slice(0,10).join(", ")+"</p>";

}
