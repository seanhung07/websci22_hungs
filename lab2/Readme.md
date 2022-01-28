URL: https://seanhung07.github.io/websci22_hungs/lab2/
# LAB 2
## OpenWeather API Sean's Weather APP
 ![free](https://github.com/seanhung07/websci22_hungs/blob/main/lab2/lab2.png)
 Background Source: https://unsplash.com/backgrounds
 
 Website Structure:
 - index.css
 - index.js
 - index.html
 - background.jpg

The Weather app is designed to be easy to use and search for current weather data for various countries and US states. When you get into the page the website will ask for your geolocation access (click allow!) it will shows up your current location weather data. In this weather app, I add a autocomplete functionality that includes 220 countries and all the states in the US. Additionally, I add the animation, when you move your mouse pointer on the cards it will hover. The backgroud image is come from unsplash (free high quility image background). They had provided the [unsplah api documentation](https://unsplash.com/documentation#getting-started), you will need ti request a apikey, however you can also access the picture through this [link](https://source.unsplash.com/random/?weather).I originally planned to use the API, but the disadvantage of the API is that it can only make 50 requests per hour, which is not convenient for development, so I choose to download the images. In the card it will show both Fahrenheit and Celsius, I just ask for Fahrenheit and calculate Celsius.

The second API I checked was the binance exchange API, a very useful API that might help with our term project, the API provides prices (open, high, low, close) that can be used to draw Japanese candles ) Also, for exchanges, I found that they usually use WSS (websocket protocol) to get real-time data, it's too heavy for the server to use http requests per second to get real-time data.

The third API I checked is the Coinkecgo API, we can get different cryptocurrency icon descriptions and their current prices, however, this api doesn't contain real-time data, they update their price data around 5 seconds, so if I use this API as simulate crypto market trading is not a good idea, another disadvantage is that they don't have enough crypto data, it only contains data for hundreds of coins.

autocomple source: W3school

I also found a github repository with many public APIs that can be used.
https://github.com/public-apis/public-apis
