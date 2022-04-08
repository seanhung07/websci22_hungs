![free](https://github.com/seanhung07/websci22_hungs/blob/master/lab7/lab7.png)

Stack: 

Backend: Nodejs \
Frontend: Angular/Material-UI \
Graph: D3.js
Database: MongoDB

How to start the project:

go to backend folder and run node server.js and you can check the website on http://localhost:3000


Initially, I decided to use d3 to make a word cloud. However, I cannot find enough information and the d3-cloud in d3 angular node_modules. Therefore, I brainstormed
what kind of graph would be helpful with the data that I had in Mongodb (text and Sentiment data). I calculate the positive, negative, and neutral 
in that text. By getting those data, I can categorize the current market's sentiment. Additionally, I also calculate the amount of each sentiment category. Then I choose 
a bar graph and pie graph to display those data. I preprocessed all the data in the backend to get the data and made a new API endpoint with d3 JSON format. As you can
see from the graph, the market is currently positive from the pie chart. However, if we take a look at a bar graph, we can know there are still many people who
remain neutral. 

I am currently finding a new library to finish my word cloud feature by getting the cryptocurrency category from Reddit, Twitter, and news titles. We can
analyze which crypto is currently popular, then we can filter out specific crypto to trade.
