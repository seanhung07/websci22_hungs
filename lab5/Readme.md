![free](https://github.com/seanhung07/websci22_hungs/blob/master/lab5/lab5_1.png)

Stack: \

Backend: Nodejs \
Frontend: Angular/Material-UI \
Database: MongoDB

How to start the project:

go to backend folder and run node server.js and you can check the website on http://localhost:3000


In Lab 5, I redesigned my backend structure, instead of putting all the routes in the ```server.js``` folder, I created a folder called routes which contains all the routes and contains all four HTTP verbs: GET, POST, PUT, and DELETE. Also, I added status codes and errors while executing all HTTP verbs, it allows me to debug easily, the error that I faced only is the promise issus, i found out you will need to do async await not only getting data but also deleting, PUT, and also POST. For the frontend, instead of using bootstrap, I choose to implement material ui to have best practice for my final project. You can press the right corner to add new News title, you will need to enter text and also the sentiment score, I had implment validation check, after filled out the form you can click "save" it will send the POST request to database and the page will refresh automatically. If you want to change the title or sentiment data of the post you can click the edit button , which will send the PUT request after you update the data, and you can click delete button if you want to get rid of the post, it will send DELETE request. I didn't implment GET specific id part since getting specific id is not really useful for my application. However you can try ```GET http://localhost:3000/db/623d24d47385c33192acf189``` to get the sample data. I also add the filter that you can search word from specific post and also sort by the text of sentiment data.
 
