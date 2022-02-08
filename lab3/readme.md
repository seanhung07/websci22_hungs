 # AFINN-based Sentiment Analysis With Twitter, Reddit, and News_API
 URL: http://sentiment.hungs.work </br>
 The website will be a little complicate to setup, the backend should be fine but my frontend include JQuery also need a server to run, to make it easy, therefore I , host my website on my server.
 ![free](https://github.com/seanhung07/AFINN-based_Sentiment_Analysis_Reddit_Twitter_News/blob/master/1.png)
 ![free](https://github.com/seanhung07/AFINN-based_Sentiment_Analysis_Reddit_Twitter_News/blob/master/2.png)

Main API: Twitter API
Support Data: News_API, Reddit JSON file

.env is only for this class(there's my twitter bareer token and news api)

The website I make is based on the latest data from twitter, reddit and news to determine the sentiment of the current topic. You can search any topic on the site, for example, if you search the cryptocurrency market, the page will display data in three parts, reddit's data on a red background, news_api on a gray background, and twitter on a blue-black background. In this lab, the first problem I encountered was passing the search data entered by the user to my backend, at first I used a GET request, however, I found that I should use a POST request instead of a GET request to get the body data. Later, I found out that I only need to get the data from the query, so using GET request would also work in this case. After requesting the data from twitter, since there is too much noise, I implement regex to filter useless symbol. Since, I'm working on determining current topic's sentiment, including one data set won't be too accurate, so I also includes reddit and news title. I use the AFINN table to calculate sentiment values. After searching you will see an alert pop up, the alert is SweetAlert2 and the chart is from chartjs. The hardest part is to setup on my server, I learned how to set up subdomain and run backend at the background forever, I planned to keep developing this website, so I would like to hear back some feeback on how am i going to design this website!
