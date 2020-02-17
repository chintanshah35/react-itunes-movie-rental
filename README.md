## Steps to Start

Unzip into directory itunes-movie-search
Move to itunes-movie-search Directory
Run npm install
Run npm start

and go to `localhost:3000`

#########   Answers to Extension Question:   ################

#1) The outline of the code:

The app is divided into 5 components App, Header, Main, MovieList, MovieCard and Message component.

On start App component is loaded which will call the Header and the Main components which are its child components respectively.

Header is where search input is there. The search input is tied to onkeyup event which emits the search event on keyup.

In the Main Component, using the emmiter, an async call back function is passed to getSearchResults.

The output of getSearchResult is stored in state in json format.

Based on the status message and data, Movielist is triggered which will inturn display each of the MovieCards with respective details.

