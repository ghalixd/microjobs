document.addEventListener('DOMContentLoaded', function() {
    const jobsContainer = document.getElementById("jobs");
    
    if (!jobsContainer) {
        console.error("Could not find element with id 'jobs'");
        return;
    }
    
    function renderJobs(jobsList) {
        jobsContainer.innerHTML = "";
        jobsList.forEach((job) => {
            const jobHTML = `
                <div class="box" data-job-id="${job.id}">
                    <div class="company">
                        
                        <div>
                            <h3>${job.company}</h3>
                            <span>${job.datePosted}</span>
                        </div>
                    </div>
                    <h3 class="job-title">${job.title}</h3>
                    <p class="location"><i class="fas fa-map-marker-alt"></i><span>${job.location}</span></p>
                    <div class="tags">
                        <p><i class="fas fa-money-bill-wave"></i><span>${job.salary}</span></p>
                        <p><i class="fas fa-briefcase"></i><span>${job.type}</span></p>
                        <p><i class="fas fa-clock"></i><span>${job.shift}</span></p>
                    </div>
                    <div class="flex-btn">
                        <a href="view_job.html" class="btn">View Details</a>
                        <button onclick="deleteJob('${job.id}')" class="btn_delete_btn">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                        <button type="button" class="far fa-heart"></button>
                    </div>
                </div>
            `;
            jobsContainer.innerHTML += jobHTML;
        });

        // Update job count
        const jobCount = document.getElementById('job-count');
        if (jobCount) {
            jobCount.textContent = jobsList.length;
        }
    }
    
    // Add delete function to global scope
    window.deleteJob = function(jobId) {
        if (!confirm('Are you sure you want to delete this job?')) {
            return;
        }

        let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
        jobs = jobs.filter(job => job.id !== jobId);
        localStorage.setItem('jobs', JSON.stringify(jobs));
        renderJobs(jobs);
        alert('Job deleted successfully!');
    };
    
    // Load jobs from local storage
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    
    // Filter functionality
    function filterJobs(title = '', location = '', salary = '', type = '') {
        const filteredJobs = jobs.filter((job) => {
            const matchesTitle = !title || job.title.toLowerCase().includes(title.toLowerCase());
            const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
            const matchesSalary = !salary || job.salary === salary;
            const matchesType = !type || job.type.toLowerCase() === type.toLowerCase();
            
            return matchesTitle && matchesLocation && matchesSalary && matchesType;
        });
        
        renderJobs(filteredJobs);
    }

    // Handle filter form submission
    const filterForm = document.getElementById("filter-form");
    if (filterForm) {
        filterForm.addEventListener("submit", (event) => {
            event.preventDefault();
            filterJobs(
                event.target.title.value,
                event.target.location.value,
                event.target.salary.value,
                event.target.type.value
            );
        });
    }

    // Check for URL parameters and apply them
    const urlParams = new URLSearchParams(window.location.search);
    const searchTitle = urlParams.get('title');
    const searchLocation = urlParams.get('location');
    
    if (searchTitle || searchLocation) {
        // Fill the filter form
        if (searchTitle && filterForm) {
            filterForm.querySelector('input[name="title"]').value = searchTitle;
        }
        if (searchLocation && filterForm) {
            filterForm.querySelector('input[name="location"]').value = searchLocation;
        }
        
        // Apply the filter
        filterJobs(searchTitle || '', searchLocation || '', '', '');
    } else {
        // If no search parameters, show all jobs
        renderJobs(jobs);
    }
});