// $(".info-item .btn").click(function(){
//     $(".container").toggleClass("log-in");
//   });
//   $(".container-form .btn").click(function(){
//     $(".container").addClass("active");
//   });


// Get all the info-item buttons
const infoItemButtons = document.querySelectorAll('.info-item .btn');
// Add a click event listener to each button
infoItemButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Toggle the log-in class on the container element
    document.querySelector('.container').classList.toggle('log-in');
  });
});

// Get all the container-form buttons
const containerFormButtons = document.querySelectorAll('.container-form .btn');
// Add a click event listener to each button
containerFormButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Add the active class to the container element
    document.querySelector('.container').classList.add('active');
  });
});
