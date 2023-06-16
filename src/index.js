import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const inputTa = document.querySelector("textarea");
inputTa.addEventListener("keyup", textAnalyzer);
function textAnalyzer(){
  const inputTeAn = document.querySelector("textarea").value;
  const wordCount = analyzer.getWordCount(inputTeAn);
  document.getElementById("wordCount1").innerHTML = wordCount;

  const charaCount = analyzer.getCharacterCount(inputTeAn);
  document.getElementById("charact").innerHTML = charaCount;

  const charaCountExSpac = analyzer.getCharacterCountExcludingSpaces(inputTeAn);
  document.getElementById("charaExSp").innerHTML = charaCountExSpac;

  const averageWordLength = analyzer.getAverageWordLength(inputTeAn);
  document.getElementById("avWoLe").innerHTML = averageWordLength;

  const numberCount = analyzer.getNumberCount(inputTeAn);
  document.getElementById("numbers").innerHTML = numberCount; 

  const numberSum = analyzer.getNumberSum(inputTeAn);
  document.querySelector("#nuSum").innerHTML = numberSum;
}

const resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener("click", resetAnalyzer);
function resetAnalyzer(){
  document.querySelector('textarea[name="user-input"]').value = "";
  document.querySelector("#wordCount1").innerHTML = "0";
  document.querySelector("#charact").innerHTML = "0";
  document.querySelector("#charaExSp").innerHTML = "0";
  document.querySelector("#avWoLe").innerHTML = "0";
  document.querySelector("#numbers").innerHTML = "0";
  document.querySelector("#nuSum").innerHTML = "0";
  return resetAnalyzer
}

