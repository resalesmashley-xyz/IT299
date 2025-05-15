// script.js

document.addEventListener('DOMContentLoaded', function() {
    const directorySearchButton = document.getElementById('directory-search-button');
    const searchTermInput = document.getElementById('search-term');
    const resourceCategorySelect = document.getElementById('resource-category');
    const resourceList = document.getElementById('resource-list');
    const assistanceRequestForm = document.getElementById('assistance-request-form');
    const requestConfirmation = document.getElementById('request-confirmation');
    const generateReportButton = document.getElementById('generate-report-button');
    const reportOutput = document.getElementById('report-output');
    const adminLink = document.getElementById("admin-link");

    //Simulate Authentication - In a real system this would check login credentials
    const isAuthenticated = true;  //Hardcoded!
    if(isAuthenticated) {
        adminLink.style.display = "inline";  //Show the Admin link
    }

    //Mock Data. Replace this with real API calls
    const allResources = [
        { name: "Local Food Bank", category: "food", description: "Provides food assistance to families in need.", location: "Anytown" },
        { name: "Community Shelter", category: "shelter", description: "Offers temporary shelter and support services.", location: "Anytown" },
        { name: "City Healthcare Clinic", category: "healthcare", description: "Provides affordable healthcare services to the community.", location: "Anytown" },
        { name: "National Legal Aid", category: "legal", description: "A nationwide network of non-profit legal aid programs.", location: "National" },
        { name: "State Financial Aid", category: "financial", description: "Information and resources for state-funded financial assistance programs.", location: "Statewide" },

    ];

    directorySearchButton.addEventListener('click', function() {
        const searchTerm = searchTermInput.value.toLowerCase();
        const selectedCategory = resourceCategorySelect.value;

        const filteredResources = allResources.filter(resource => {
            const matchesSearch = searchTerm === '' || resource.name.toLowerCase().includes(searchTerm) || resource.description.toLowerCase().includes(searchTerm) || resource.location.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === '' || resource.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        displayResources(filteredResources);
    });

    assistanceRequestForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // In a real app, submit the form data to a server.

        // For this example, just show a confirmation message:
        assistanceRequestForm.style.display = 'none';
        requestConfirmation.style.display = 'block';
    });

    generateReportButton.addEventListener('click', function() {
        // In a real app, fetch report data from a server.
        const reportData = {
            totalUsers: 1234,
            requestsThisMonth: 567,
            popularCategories: ["food", "shelter", "healthcare"]
        };

        displayReport(reportData);
    });

    function displayResources(resources) {
        resourceList.innerHTML = ''; // Clear previous results

        if (resources.length === 0) {
            resourceList.innerHTML = '<li>No resources found.</li>';
            return;
        }

        resources.forEach(resource => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${resource.name}</strong> (${resource.category})<br>${resource.description}<br>Location: ${resource.location}`;
            resourceList.appendChild(listItem);
        });
    }

    function displayReport(reportData) {
        reportOutput.innerHTML = `
            <p>Total Users: ${reportData.totalUsers}</p>
            <p>Requests This Month: ${reportData.requestsThisMonth}</p>
            <p>Popular Categories: ${reportData.popularCategories.join(', ')}</p>
        `;
    }
});