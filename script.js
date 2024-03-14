document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');
  
    heading.addEventListener('click', function() {
      alert('You clicked the heading!');
    });
  
    heading.addEventListener('mouseover', function() {
      this.style.color = 'red';
    });
  
    heading.addEventListener('mouseout', function() {
      this.style.color = 'black';
    });
  });