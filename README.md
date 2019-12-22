# Athenaum Media Library (22Dec19)

  Athenaum Media Library is a web based application to store, view, and share media libraries such as movies, music and tv shows. The idea is that each registered user has an individual collection of media that is stored in their personal profile. They can add/delete or update movies in their collection and can view the media libraries of other users but cannot add/delete or update their collections. Future iterations of this application would include the use of predictive forms allowing for easier inputting of media and the use of scraper APIs to automatically load movie information instead of having to input it manually. Furthermore, a favoriting and rating system would also be implemented based on the overall rating of a media item based on number of input from other users on a particular media item (whether it is in their collection or not). 

## Startup:

Run 'npm install' in main directory and either server or backend directories.

Run `ng serve` for a dev server in main directory. 

Possible Options to start backend server:
  1) Run node app2.js in server directory
  2) Run index.js in server directory
  3) Run index.js in backend directory

## Known Issues:

Database Issues:
Although able to connect and store/retrieve/update information in the database manually (through the use of JS files), am unable to perform CRUD operations to the server from the main application. Known issues concerning database:
  1) CORS causes a Cross-Origin Request Blocked error when attempting to write to the database. It does not like that the server and user interface are hosted on the same machine.
  2) When attempting to manually connect to the database, TypeScript has errors with the parsing of information by Mongoose into MongoDB.

Bloat:
Due to the numerous attempts at connecting the database to the main application, there are a large number of excessive routes, services, and models that do nothing. The majority of them work in theory but they cannot be tested due to the database issues. Many of them have been commented out but still exist in the code framework and due to the large array of ways to connect to MongoDB, there is an enormous amount of bloat caused when running npm install. 

## Recommended Improvements:

Time allowing, would begin again from scratch and just replicate necessary information from components into new project and elminiate the number of issues caused from attempting to connect to the database. Would establish a clean slate template from which to create future versions on instead of cobbling together pieces as was attempted here. This would help eliminiate the bloat seen in this project and allow for better avoidance of issues caused between multiple attempts at creating the database link.


## Testing:

Testing was attempted and was able to verify through testing that the application and componentes were built but due to the large number of erroneous code throughout the project, many of the initial tests failed. This is again due to the various attempts at connecting the main application to the database. Again, in future attempts at this project, would create a clean template starting point to work from instead of attempting various methods from the same project framework. This would help eliminate the large issues of code failures throughout the project and make it easier to identify the areas that were causing the issues instead of the current state of the project as a whole.
