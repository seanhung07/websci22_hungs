![free](https://github.com/seanhung07/websci22_hungs/blob/master/lab6/lab6.png)

Stack: \

Backend: Nodejs \
Frontend: Angular/Material-UI \
Database: MongoDB

How to start the project:

go to backend folder and run node server.js and you can check the website on http://localhost:3000


In the lab 6 i create a new database collection named "check". I get the data from Nes_API, Twitter API, and Reddit json file. I writed a ETL pipeline to
make all the data have same schema, which have a text and a sentiment data. At the top of the page you can see there's a button called get news, it will get the
data from http://localhost:3000/news api endpoint, and it will read all the data from news_api, twiitter api, and reddit json file, then it will compare with the
database to see if there is duplicate data, if not it will add it to the database, else it will ignore it. After the page will refresh and the frontend will 
request to database to get all the data. You can use GET, POST, PUT, DELETE function by clicking different icon, trashcan stands for DELETE, pencil stands for 
PUT, and the add news button at the top right stands for POST.
