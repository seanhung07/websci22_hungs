document.getElementById("search-input")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      getData()
    }
  });
async function getData(){
    let topic = document.getElementById("search-input").value;
    topic = topic.split(" ").join("")
    console.log(topic)
    const res = await axios.post(`http://hungs.work:9999/reddit?topic=${topic}`)
    const tw = await axios.post(`http://hungs.work:9999/result?topic=${topic}`)
    const news = await axios.post(`http://hungs.work:9999/news?topic=${topic}`)
    const text = document.getElementById('text')
    text.innerHTML=""
    for(let i = 0; i< res.data.length;i++){
        const tweetCard = document.createElement('div')
            tweetCard.className = 'col-sm-6 col-lg-4 mb-4'
            tweetCard.innerHTML =`
                    <div class="card p-3 bg-danger text-white h-100 animated fadeIn">
                        <figure class="p-3 mb-0">
                            <blockquote class="blockquote" id="text">
                                <p>${res.data[i].text}</p>
                            </blockquote>
                            <figcaption class="blockquote-footer mb-0 text-white">
                               Sentiment: <cite title="Source Title">${res.data[i].senData}</cite>
                            </figcaption>
                        </figure>
                    </div>`
            text.appendChild(tweetCard)
    }
    for(let i = 0; i< news.data.length;i++){
        const tweetCard = document.createElement('div')
            tweetCard.className = 'col-sm-6 col-lg-4 mb-4'
            tweetCard.innerHTML =`
                    <div class="card bg-secondary text-white p-3 h-100 animated fadeIn">
                        <figure class="p-3 mb-0">
                            <blockquote class="blockquote" id="text">
                                <p>${news.data[i].text}</p>
                            </blockquote>
                            <figcaption class="blockquote-footer mb-0 text-white">
                               Sentiment: <cite title="Source Title">${news.data[i].senData}</cite>
                            </figcaption>
                        </figure>
                    </div>`
            text.appendChild(tweetCard)
    }
    for(let i = 0; i< tw.data.length;i++){
        const tweetCard = document.createElement('div')
            tweetCard.className = 'col-sm-6 col-lg-4 mb-4'
            tweetCard.innerHTML =`
                    <div class="card bg-primary text-white p-3 h-100 animated fadeIn">
                        <figure class="p-3 mb-0">
                            <blockquote class="blockquote" id="text">
                                <p>${tw.data[i].text}</p>
                            </blockquote>
                            <figcaption class="blockquote-footer mb-0 text-white">
                               Sentiment: <cite title="Source Title">${tw.data[i].senData}</cite>
                            </figcaption>
                        </figure>
                    </div>`
            text.appendChild(tweetCard)
    }
    getTotal()
}
async function getTotal(){
    let ID = document.getElementById('data')
    const total = await axios.get(`http://hungs.work:9999/data`)
    Swal.fire({
        icon: 'info',
        title: 'Result',
        text: `Positive: ${total.data['pos']} Negative: ${total.data['neg']} neutral: ${total.data['neutral']}`,
        html: `<canvas id="myChart" width="400" height="400"></canvas>`
      })
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Positive','Negative','Neutral'],
        datasets: [{
            label: '# of Votes',
            data: [total.data['pos'],total.data['neg'],total.data['neutral']],
            backgroundColor: [
                'rgb(152,251,152)',
                'rgb(240,128,128)',
                'rgb(128,128,128)'
              ],
              hoverOffset: 4
            }]
    },
});
}
$(".animated").addClass("delay-1s");