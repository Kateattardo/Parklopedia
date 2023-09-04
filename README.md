PARKLOPEDIA
Do you love spending a day in the park?  Enjoy Parklopedia, this app allows you to view and comment on parks in your area.  With timestamped user updates you can plan your day better weather your having a picnic, bbg, game of softball or just a good spot to ready with your furry friends.

Technologies used:
HTML
CSS
Javascript
Expresss
MongoDB
Google Oauth
Mongoose
EJS

## User Stories

### Ice Box 

### Current MVP

### Completed
 - As a user I want the ability to log into the app using Oauth authentication so I don't have to create another username and password.


 -As a user I want to rate by number my local parks based on personal experience so others can have a more enjoyable experience.

 -As a user I want the ability to leave comments about my local parks.

 -As a user I want to ability to delete my comments.

 -As a user I want to see timestamp reviews from other user based most recent park conditions.

 -As a user I want to be able to review specific dog runs in the park.

 -As a user I want to be able to review specific playgrounds in the park.

  -As a user I want to be able to make comments on current landscaping/construction projects going on so other users can plan accordingly.

   -As a user I want to review public restrooms in the park.

 -As a user I want to be able to review specific areas of the park if the park is larger then a few blocks.

 -As a user I want to be able to get info on park sculptures and landmakrks.


 -As a user I want to be able to make time stamped comments on current sport events going on so other users can plan accordingly.

 -As a user I want to be able to make time stamped comments on current bbq facilites being used so other users can plan accordingly.

 -As a user I want to be able to make time stamped comments on current picnic events going on so other users can plan accordingly.

 -As a user I want to be able to make time stamped comments on current ceremonies taking place such as weddings and quinceneras so other users can plan accordingly.

 -As a user I want to be able to make time stamped comments on local vendors locations so other users can plan accordingly.

  -As a user I want to be able to get time stamped notifications about missing pets and children.
 
 ### Wireframes
 ![Wireframes 1 & 2](images/WF%201&2-1.jpg)
 ![Wireframes 3](images/WF%203.jpg)

 ### Entity Relationship Diagrams
 ![ERD](images/IMG_7475.jpg)

 ### Restful Routes/ CRUD Mapping

 HTTP Method<br>(Verb) | Path/Endpoint/URI  | CRUD Operation | Typical<br>Controller Action | Has Data<br>Payload
-----------|------------------|------------------|:---:|:---:
GET     | /parks          | Read all __parks_ | index | No
GET     | /parks/:iD      | Read a specific _parksId_ | show | No
POST    | /parks/parkiD   | Create a new parks/parkId/|create | Yes
PUT     | /parks/:parkiD  | Update specified _park_  | update | Yes
DELETE  | /parks/:parkiD | Delete specified _post_ | delete | No

### Routing for Related Resources (One:Many & Many:Many Relationships)

HTTP Method<br>(Verb) | Path/Endpoint/URI  | CRUD Operation<br>or Purpose | Note
-----------|------------------|------------------|:---:
GET     | /parks/:parkiD/show-more-comments | Read all _comments_ for a _post_ |No payload
GET     | /parks/:parkiD/add-comment/new | n/a (Non-RESTful) |OPTIONALLY display a dedicated form used to create a nested resource 
POST     | /parks/:parkiD/submit-reviews| Create a _comment_ for a _post_ (1:M) | Needs Payload

