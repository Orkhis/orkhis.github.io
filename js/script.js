// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");
if (htmlProgress && htmlValue) {
  let htmlStartValue = 0,
    htmlEndValue = 90,
    htmlspeed = 30;
  let progresshtml = setInterval(() => {
    htmlStartValue++;
    htmlValue.textContent = `${htmlStartValue}%`;
    htmlProgress.style.background = `conic-gradient(#fca61f ${
      htmlStartValue * 3.6
    }deg, #ededed 0deg)`;
    if (htmlStartValue == htmlEndValue) clearInterval(progresshtml);
  }, htmlspeed);
}

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");
if (javascriptProgress && javascriptValue) {
  let javascriptStartValue = 0,
    javascriptEndValue = 75,
    jsspeed = 30;
  let progressjs = setInterval(() => {
    javascriptStartValue++;
    javascriptValue.textContent = `${javascriptStartValue}%`;
    javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
      javascriptStartValue * 3.6
    }deg, #ededed 0deg)`;
    if (javascriptStartValue == javascriptEndValue) clearInterval(progressjs);
  }, jsspeed);
}

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");
if (phpProgress && phpValue) {
  let phpStartValue = 0,
    phpEndValue = 80,
    phpspeed = 30;
  let progressphp = setInterval(() => {
    phpStartValue++;
    phpValue.textContent = `${phpStartValue}%`;
    phpProgress.style.background = `conic-gradient(#20c997 ${
      phpStartValue * 3.6
    }deg, #ededed 0deg)`;
    if (phpStartValue == phpEndValue) clearInterval(progressphp);
  }, phpspeed);
}

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");
if (reactProgress && reactValue) {
  let reactStartValue = 0,
    reactEndValue = 30,
    rjsspeed = 30;
  let progressreact = setInterval(() => {
    reactStartValue++;
    reactValue.textContent = `${reactStartValue}%`;
    reactProgress.style.background = `conic-gradient(#3f396d ${
      reactStartValue * 3.6
    }deg, #ededed 0deg)`;
    if (reactStartValue == reactEndValue) clearInterval(progressreact);
  }, rjsspeed);
}

// python progress circular bar
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress");
if (pythonProgress && pythonValue) {
  let pythonStart = 0,
    pythonEnd = 80,
    pythonspeed = 30;
  let progressPython = setInterval(() => {
    pythonStart++;
    pythonValue.textContent = `${pythonStart}%`;
    pythonProgress.style.background = `conic-gradient(#fca61f ${
      pythonStart * 3.6
    }deg, #ededed 0deg)`;
    if (pythonStart == pythonEnd) clearInterval(progressPython);
  }, pythonspeed);
}

// java progress circular bar
let javaProgress = document.querySelector(".java"),
  javaValue = document.querySelector(".java-progress");
if (javaProgress && javaValue) {
  let javaStart = 0,
    javaEnd = 90,
    javaspeed = 30;
  let progressJava = setInterval(() => {
    javaStart++;
    javaValue.textContent = `${javaStart}%`;
    javaProgress.style.background = `conic-gradient(#7d2ae8 ${
      javaStart * 3.6
    }deg, #ededed 0deg)`;
    if (javaStart == javaEnd) clearInterval(progressJava);
  }, javaspeed);
}

// c++ progress circular bar
let cplusplusProgress = document.querySelector(".cplusplus"),
  cplusplusValue = document.querySelector(".cplusplus-progress");
if (cplusplusProgress && cplusplusValue) {
  let cppStart = 0,
    cppEnd = 75,
    cppspeed = 30;
  let progressCpp = setInterval(() => {
    cppStart++;
    cplusplusValue.textContent = `${cppStart}%`;
    cplusplusProgress.style.background = `conic-gradient(#20c997 ${
      cppStart * 3.6
    }deg, #ededed 0deg)`;
    if (cppStart == cppEnd) clearInterval(progressCpp);
  }, cppspeed);
}

// sql progress circular bar
let sqlProgress = document.querySelector(".sql"),
  sqlValue = document.querySelector(".sql-progress");
if (sqlProgress && sqlValue) {
  let sqlStart = 0,
    sqlEnd = 70,
    sqlspeed = 30;
  let progressSql = setInterval(() => {
    sqlStart++;
    sqlValue.textContent = `${sqlStart}%`;
    sqlProgress.style.background = `conic-gradient(#3f396d ${
      sqlStart * 3.6
    }deg, #ededed 0deg)`;
    if (sqlStart == sqlEnd) clearInterval(progressSql);
  }, sqlspeed);
}

// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});

// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 

// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});