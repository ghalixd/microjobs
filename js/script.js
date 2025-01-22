let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0"; 
    setTimeout(() => {
        preloader.style.display = "none"; 
    }, 500); 
});

 

const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    signupLink = document.querySelector(".sginup-link"),
    loginLink = document.querySelector(".login-link");


pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
            } else {
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            }
        });
    });
});

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".rpassword");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
            } else {
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            }
        });
    });
});


signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.add("show-signup");
    console.log("Signup form displayed");
});

loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.remove("show-signup");
    console.log("Login form displayed");
});
﻿


const jobs = [
    {   
        id : 1,
        title: "Home Cleaning Service",
        company: "Clean & Shine Co.",
        location: "Tunis, Tunisia",
        datePosted: "1 day ago",
        salary: "50 TND - 100 TND",
        type: "One-Time Task",
        shift: "Flexible",
        image: "images/icon-1.png"
    },
    {   
        id : 2,
        title: "Weekend Babysitter",
        company: "Tunisia Babysitters",
        location: "Sousse, Tunisia",
        datePosted: "3 days ago",
        salary: "20 TND/hour",
        type: "Part-Time",
        shift: "Evening Shift",
        image: "images/icon-2.png"
    },
    {
        id : 3,
        title: "Math Tutor for High School",
        company: "Bright Minds Tutors",
        location: "Ariana, Tunisia",
        datePosted: "4 days ago",
        salary: "30 TND/session",
        type: "Freelance",
        shift: "Evenings",
        image: "images/icon-3.png"
    },
    {
        id : 4,
        title: "Custom Furniture Assembler",
        company: "Crafty Hand Co.",
        location: "Monastir, Tunisia",
        datePosted: "5 days ago",
        salary: "100 TND/task",
        type: "One-Time Task",
        shift: "Day Shift",
        image: "images/icon-4.png"
    },
    {
        id : 5,
        title: "Gardening and Lawn Care",
        company: "Green Gardens",
        location: "Bizerte, Tunisia",
        datePosted: "6 days ago",
        salary: "80 TND/day",
        type: "Short-Term",
        shift: "Morning Shift",
        image: "images/icon-5.png"
    },
    {
        id : 6,
        title: "Event Setup Helper",
        company: "Event Assist Pro",
        location: "Tunis, Tunisia",
        datePosted: "2 days ago",
        salary: "50 TND/day",
        type: "Temporary",
        shift: "Morning Shift",
        image: "images/icon-6.png"
    },
    {
        id : 7,
        title: "Dog Walker",
        company: "Happy Paws Services",
        location: "Sfax, Tunisia",
        datePosted: "1 day ago",
        salary: "20 TND/hour",
        type: "Part-Time",
        shift: "Afternoon Shift",
        image: "images/icon-7.png"
    },
    {
        id : 8,
        title: "Content Creator",
        company: "Media Boost Tunisia",
        location: "Nabeul, Tunisia",
        datePosted: "3 days ago",
        salary: "30 TND/post",
        type: "Freelance",
        shift: "Remote-Jobs",
        image: "images/icon-8.png"
    },
    {
        id : 9,
        title: "Parcel Delivery Helper",
        company: "Quick Courier",
        location: "Gabès, Tunisia",
        datePosted: "5 days ago",
        salary: "10 TND/delivery",
        type: "Flexible",
        shift: "On-Demand",
        image: "images/icon-9.png"
    }
];
const productContainer = document.querySelector(".box-container");
const links1 = document.querySelectorAll("#date .items");
const links2 = document.querySelectorAll("#sal .items");

window.addEventListener("DOMContentLoaded", () => {
  displayJobsData(jobs); 
});

// Filter by date
links1.forEach((link) => {
  link.addEventListener("click", (e) => {
    const category = e.target.dataset.id;
    const filteredJobs = jobs.filter(job => job.datePosted === category);
    displayJobsData(filteredJobs);
  });
});

// Filter by salary
links2.forEach((link) => {
  link.addEventListener("click", (e) => {
    const category = e.target.dataset.id;
    const filteredJobs = jobs.filter(job => job.salary === category);
    displayJobsData(filteredJobs);
  });
});

// Display jobs dynamically
function displayJobsData(job) {
  let displayData = job.map(function(cat_items) {
    return `
      <div class="box">
        <div class="company">
          <img src="${cat_items.image}" alt="">
          <div>
            <h3>${cat_items.title}</h3>
            <span>${cat_items.datePosted}</span>
          </div>
        </div>
        <h3 class="job-title">${cat_items.title}</h3>
        <p class="location"><i class="fa fa-map-marker-alt"></i>
          <span>${cat_items.location}</span>
        </p>
        <div class="tags">
          <p><i class="fas fa-money-bill-wave"></i><span> ${cat_items.salary}</span></p>
          <p><i class="fas fa-briefcase"></i><span> ${cat_items.type}</span></p>  
          <p><i class="fas fa-clock"></i><span> ${cat_items.shift}</span></p>
        </div>
        <div class="flex-btn">
          <a href="view_job.html" class="btn">view details</a>
          <button type="submit" class="far fa-heart"></button>
        </div>
      </div>`;
  });
  displayData = displayData.join("");
  productContainer.innerHTML = displayData;
}

// Dropdown selection
document.querySelectorAll(".dropdown .items").forEach(item => {
  item.addEventListener("click", (e) => {
    const dropdown = e.target.closest(".dropdown");
    const output = dropdown.querySelector(".output");
    output.value = e.target.textContent;
    dropdown.querySelectorAll(".items").forEach(i => i.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// Close dropdowns when clicking outside
window.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".lists").forEach(list => (list.style.display = "none"));
  }
});




document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();
  
      // Get form data
      const formData = {
          name: document.querySelector('input[name="name"]').value.trim(),
          number: document.querySelector('input[name="number"]').value.trim(),
          email: document.querySelector('input[name="mail"]').value.trim(),
          role: document.querySelector('select[name="role"]').value,
          message: document.querySelector('textarea[name="message"]').value.trim()
      };
  
      // Additional validation
      if (!isValidEmail(formData.email)) {
          alert('Please enter a valid email address');
          return;
      }
  
      if (!isValidPhone(formData.number)) {
          alert('Please enter a valid phone number');
          return;
      }
  
      // Show loading state
      const submitBtn = document.querySelector('input[type="submit"]');
      const originalBtnText = submitBtn.value;
      submitBtn.value = 'Sending...';
      submitBtn.disabled = true;
  
      // Send email using EmailJS
      emailjs.send('service_xxxxxx', 'template_xxxxxx', { // Replace with your actual service and template IDs
          from_name: formData.name,
          phone_number: formData.number,
          from_email: formData.email,
          role: formData.role,
          message: formData.message,
          to_email: 'borichouket@gmail.com'
      })
      .then(function() {
          // Show success message
          alert('Thank you! Your message has been sent successfully.');
          
          // Reset form
          e.target.reset();
          
          // Reset button
          submitBtn.value = originalBtnText;
          submitBtn.disabled = false;
      })
      .catch(function(error) {
          // Show error message
          console.error('Failed to send email:', error);
          alert('Sorry, there was an error sending your message. Please try again later.');
          
          // Reset button
          submitBtn.value = originalBtnText;
          submitBtn.disabled = false;
      });
  });
  
  // Validation helper functions
  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
  
  function isValidPhone(phone) {
      const phoneRegex = /^\d{8,}$/; // Assumes minimum 8 digits
      return phoneRegex.test(phone);
  }
  
  // Add real-time validation feedback
  document.querySelectorAll('.input').forEach(input => {
      input.addEventListener('invalid', function(e) {
          e.preventDefault();
          this.classList.add('error');
      });
  
      input.addEventListener('input', function() {
          this.classList.remove('error');
          
          if (this.name === 'mail' && this.value) {
              if (!isValidEmail(this.value)) {
                  this.classList.add('error');
              }
          }
          
          if (this.name === 'number' && this.value) {
              if (!isValidPhone(this.value)) {
                  this.classList.add('error');
              }
          }
      });
  });
});

