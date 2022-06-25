const portfolioData = [
    {
        title: 'Imperator', 
        description: `This is my first application using TypeScript and MongoDB.  Imperator 
        is an internal tool to easily see client information in one place. With this 
        dashboard you can automate internal processes such as extending trails, following up 
        emails to canceled clients, discount offers, resetting passwords, updating client info, 
        GDPR for company’s data, and display information from various APIs. This was a group 
        project for Aurelius Labs completed fully remotely in a two-week sprint.`, 
        githubLink: 'https://github.com/korchard/imperator',
        demoLink: 'https://enigmatic-falls-21406.herokuapp.com/', 
        image: '../images/imperator.png'
    }, 
    {
        title: `Towanda's Gallipot`, 
        description: `This is my first application using authentication. It is a functioning 
        e-commerce site. Towanda's Gallipot is an herbalist's apothecary. This site is the 
        business page for Steph Peltier, as well as her virtual store. She is able to share 
        information about herself, herbalism, her services, and products. Users are able to 
        contact her, make appointments with her via email, and order items she has cultivated.`, 
        githubLink: 'https://github.com/korchard/towandas-gallipot',
        demoLink: '../videos/towandasGallipot.mp4', 
        image: '../images/towandasGallipot.png'
    }, 
    {
        title: 'HB-Oh No', 
        description: `This is an application that demonstrates the use of react-redux, 
        joining databases, and working with redux-sagas. The example topic is movies. The application 
        allows the user to click on movie details, edit the movie title, category, or details, or add
        a movie.`, 
        githubLink: 'https://github.com/korchard/movie-sagas',
        demoLink: 'https://stark-harbor-52102.herokuapp.com/#/', 
        image: '../images/hbOhNo.png'
    }, 
    {
        title: 'Feedback Survey', 
        description: `This application is my introduction to working with redux. This is a feedback 
        survey that allows the user to provide a 1 - 5 scaled answer to the questions. They are 
        able to go back and re-submit their answers if they choose to change an answer before 
        submitting the completed survey. There is an admin view that accessible, which displays 
        all of the completed feedback surveys. Admin may flag feedback for future review.`, 
        githubLink: 'https://github.com/korchard/redux-feedback-loop',
        demoLink: 'None', 
        image: '../images/feedbackSurvey.png'
    }, 
    {
        title: 'Photo Gallery', 
        description: `My first react application. This is a photo gallery of my life. It displays 
        images from past to present. When an image is clicked, it flips over and the description of 
        the life event is shared. A user may click the heart button to like the life event and the 
        'x' will remove the event from the gallery. New images and descriptions can be added to the 
        gallery through the input boxes below the header and this will be stored in a database.`, 
        githubLink: 'https://github.com/korchard/react-gallery',
        demoLink: 'https://thawing-everglades-03036.herokuapp.com/', 
        image: '../images/photoGallery.png'
    }, 
    {
        title: 'Pet Hotel', 
        description: `This is my first application using Python. This group project uses javaScript
        on the front end and Python/Flask on the backend. Users can input their 
        name, pet's name, breed, and color. Once the pet is added, their information will be 
        displayed and stored on the DOM and in a databse. You can toggle the check-in or out 
        status of the pet by clicking the 'Check In' button and the date of check-in will be 
        displayed. If the 'Check Out' button is pressed, it will display the check-out date. 
        After the pet has left the hotel one can delete the pet's information.`, 
        githubLink: 'https://github.com/korchard/vatti-pet-hotel',
        demoLink: 'None', 
        image: '../images/petHotel.png'
    }, 
    {
        title: 'ToDo Tracker', 
        description: `This is my first CRUD full stack application. This is a 'TO DO' application 
        that allows the user to create a task, which is added and stored in a database. There 
        are options to check the task as completed, to uncheck it, and delete it from the list.`, 
        githubLink: 'https://github.com/korchard/weekend-sql-to-do-list-',
        demoLink: 'https://damp-ravine-95162.herokuapp.com/', 
        image: '../images/toDoTracker.png'
    }, 
]; 

module.exports = portfolioData; 