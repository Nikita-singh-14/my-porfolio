const hamburger= document.querySelector(".hamburger");
const navBar=document.querySelector(".nav-bar");
const boxes = document.querySelectorAll('.box');
const project=document.querySelectorAll('.project');
const photo = document.querySelector('.photo');



hamburger.onclick=function(){
  
  navBar.classList.toggle("active");
}




/*boxes.forEach(box => {
  box.addEventListener('mouseover', () => {
    box.style.transform = 'scale(1.1)';
    box.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.1)';
  });

  box.addEventListener('mouseout', () => {
    box.style.transform = 'scale(1)';
    box.style.boxShadow = 'none';
  });
});



project.forEach(project => {
  project.addEventListener('mouseover', () => {
    project.style.transform = 'scale(1.1)';
    project.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
  });

  project.addEventListener('mouseout', () => {
    project.style.transform = 'scale(1)';
    project.style.boxShadow = 'none';
  });
});


photo.addEventListener('mouseover', () => {
  photo.style.transform = 'scale(1.1)';
  photo.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
});

photo.addEventListener('mouseout', () => {
  photo.style.transform = 'scale(1)';
  photo.style.boxShadow = 'none';
});*/