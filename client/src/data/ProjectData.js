const projects = [
  {
    name: "Raining Cats and Dogs",
    id: "#RainingCatsAndDogs",
    description:
      "This is an e-commerce site that allows users to create an account, update their user information, view pictures of dogs and cats for sale, add and delete items from a cart, and finally purchase said items. It was created using the MERN Stack with GraphQL and Stripe integration in order to process payments.",
    languages: "Node.js, Mongoose, GraphQl, Stripe",
    image: "./images/RainingCatsAndDogs.png",
    github: "https://github.com/ccroberts1/project3",
    deployed: "https://raining-cats-and-dogs.herokuapp.com/",
  },
  {
    name: "HappyCamper",
    id: "#HappyCamper",
    description:
      "Created using Handlebars.js, MySQL, and Bulma Framework, this application will find all National Park Campgrounds in Colorado and display information for them. You've decided the weather is too bad in the area to go camping? Check out a list of our favorite outdoor adventure books, and see if something catches your eye!",
    languages: "Node.js, MySQL",
    image: "./images/HappyCamper.png",
    github: "https://github.com/afarr002/TrailTrack",
    deployed: "https://floating-shelf-98484.herokuapp.com/",
  },
  {
    name: "FeedMe",
    id: "#FeedMe",
    description:
      "FeedMe is a web application that takes user input of existing ingredients in their home and points them to possible recipes by utilizing the Spoonacular API, thus allowing the user to limit food waste and unnecessary trips to the grocery store.",
    languages: "JavaScript, API",
    image: "./images/FeedMe.png",
    github: "https://github.com/KerryEames-Vris/ClassProject1-FeedMe",
    deployed:
      "https://kerryeames-vris.github.io/ClassProject1-FeedMe/index.html",
  },
  {
    name: "TextEditor",
    id: "#TextEditor",
    description:
      "This was a homework assignment for the DU Coding Bootcamp that required me to take an existing text editor app and add functionality for it to work as a PWA and function offline. This was done by implementing methods for storing and getting data from an IndexedDB database using the idb package, registering a service worker, and creating a manifest.json file.",
    languages: "JavaScript",
    image: "./images/JATE.png",
    github: "https://github.com/chighum/Homework19-TextEditor",
    deployed: "https://text-editor-cjh.herokuapp.com/",
  },
];

export default projects;
