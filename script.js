const themeSelect = document.getElementById("themeSelect");
const templateSelect = document.getElementById("templateSelect");
const colorSelect = document.getElementById("colorSelect");
const layoutSelect = document.getElementById("layoutSelect");

themeSelect.addEventListener("change", ()=>{ document.body.className=themeSelect.value; });
templateSelect.addEventListener("change", ()=>{ document.getElementById("resumeSection").className=`resume-section ${templateSelect.value} ${layoutSelect.value}`; });
colorSelect.addEventListener("change", ()=>{ document.documentElement.style.setProperty('--primary-color', colorSelect.value); });
layoutSelect.addEventListener("change", ()=>{ 
  const rs=document.getElementById("resumeSection"); 
  layoutSelect.value==="double"?rs.classList.add("double-column"):rs.classList.remove("double-column"); 
});

let sectionOrder=["Skills","Education","Experience","Projects"];

function generateResume(){
  const name=document.getElementById("name").value;
  const profession=document.getElementById("profession").value;
  const email=document.getElementById("email").value;
  const phone=document.getElementById("phone").value;
  const linkedin=document.getElementById("linkedin").value;
  const website=document.getElementById("website").value;
  const skills=document.getElementById("skills").value.split(',');
  const education=document.getElementById("education").value;
  const experience=document.getElementById("experience").value;
