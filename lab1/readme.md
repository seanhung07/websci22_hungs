URL: https://seanhung07.github.io/websci22_hungs/lab1/
# LAB 1
## Nasdaq News Ticker
 ![free](https://github.com/seanhung07/websci22_hungs/blob/main/lab1/1.png)
 
 Website structure:
 - data.json
 - index.js
 - index.css
 - index.html
 
 The data is scraped from [Nasdaq RSS feeds](https://www.nasdaq.com/nasdaq-RSS-Feeds), focusing on various topics including stocks and options, cryptocurrency, etc. The framework I used was bootstrap and used ajax to read the data from data.json. The Nasdaq logo at the top navbar is an SVG file instead of png/jpeg, which I learned from last semester. The most difficult part of making this website is refreshing the post in each box. I didn't use bootstrap's carousel slide show; I used jquery to implement it. The key point that keeps refreshing is using setInterval; therefore, it will keep refreshing every 3 seconds. However, here I faced another issue, when I append the data in the id tag, the data will keep stacking, and the page will be extremely long. The way that I solved it is to use ``` document.getELementById("first").innerHTML = "" ``` which will make the element become blank so it won't stack it together again. Also, I set different global variable from different section Additionally, I had add animation that every post will fadeIn. The second problem that I had faced was making previous buttom, the jqery won't work when you use appendTo since the function will only run when document is ready, after searching up I found out I can implement ``` event.preventDefault()``` that you don't neeed to wait for document to be ready. Although this lab is mainly reviewing previous semester material however I still learn a lot form it.
