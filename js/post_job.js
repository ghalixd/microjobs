document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('post-job-form');
    
    if (!form) {
        console.error('Form not found!');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Collect the data using the correct field names from your HTML
        const newJob = {
            id: Date.now(),
            title: form.title.value,         // matches name="title"
            company: form.company.value,      // matches name="company"
            location: form.location.value,    // matches name="location"
            datePosted: "Just now",
            salary: form.salary.value,        // matches name="salary"
            type: form.type.value,           // matches name="type"
            shift: form.shift.value,         // matches name="shift"
            category: form.category.value,    // matches name="category"
            description: form.description.value // added description field
        };

        try {
            // Save the new job to local storage
            let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
            jobs.push(newJob);
            localStorage.setItem('jobs', JSON.stringify(jobs));

            // Log success
            console.log('New job added:', newJob);
            console.log('All jobs:', jobs);

            // Show success message
            alert('Job posted successfully!');

            // Redirect to jobs page
            window.location.href = 'jobs.html';
        } catch (error) {
            console.error('Error saving job:', error);
            alert('Error saving job. Please try again.');
        }
    });
});