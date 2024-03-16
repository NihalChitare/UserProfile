React Web Application: User Profile and Interest Fields
This project is a React web application designed to manage user profiles and interest fields. It incorporates features such as dynamic page rendering, form handling, local storage interaction, and API integration.

Designing React Pages
User Profile Page
Dynamically populate fields from a JSON file locally.
Fields: Name, Age, Gender, Location, Interest 1, Interest 2, Email, Username, Display name, Avatar URI.
Implement API calls to auto-fill the user's location and retrieve user information.
Fields: Location, Email, Username, Display name, Avatar URI.
Functionality
Local Storage Interaction
Store user profile states in local storage.
Load stored data upon page refresh.
Load & Read JSON
Read a JSON file from local storage.
Display static information on the page.
API Integration #1: Populate User Location
Interact with geolocation endpoints (e.g., Abstract API).
Enable fetching and updating of user location.
API Integration #2: Populate User Information
Interact with the API endpoint (e.g., GotArtifact API).
Fetch and display user email, username, display name & avatar URI.
Example response provided for integration.
Submission Instructions
GitHub Repository
Submit the React app source code on GitHub.
Include a README.md file documenting the steps taken to design React pages and outlining the functionality of the application.
Steps to Design React Pages
Set Up React App

Initialize a new React project using create-react-app.
Set up project structure and necessary dependencies.
Create User Profile Page

Design the layout for the user profile page.
Implement form components for user input fields.
Implement Local Storage Interaction

Set up functions to save user input to local storage.
Retrieve stored data and populate fields upon page load.
Load & Read JSON

Develop functionality to read a JSON file from local storage.
Display static information from JSON on the page.
Integrate API for User Location

Implement API calls to fetch user location.
Enable user override if necessary.
Integrate API for User Information

Set up API requests to retrieve user details.
Display fetched information on the user profile page.
Testing and Debugging

Test the application thoroughly to ensure all features are functioning correctly.
Debug any errors or issues encountered during testing.
Documentation and Submission

Write a README.md file documenting the project, including setup instructions and functionality overview.
Upload the project to a GitHub repository and submit the repository link for evaluation.
Estimated Time
The estimated time for completing this project is X hours.

Additional Notes
Make sure to handle error cases gracefully, such as failed API requests or missing local storage data.
Follow best practices for React development, including component-based architecture and state management.
Ensure the application is responsive and accessible for a seamless user experience across devices.
