const videoCardContainer = document.querySelector('.video-container');

let api_key="your apii kry";
let video_http ="https://www.googleapis.com/youtube/v3/videos?";
let channel_http="https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http+ new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    
}))
.then(res=> res.json())
.then(data=>{
    data.items.forEach(item=>{
        getChannelIcon(item);
    })
})
.catch(err=>console.log(err));
const getChannelIcon = (video_data)=>{
    fetch(chennel_http+ new URLSearchParams({
        key: api_key,
        part:'snippet',
        id: video_data.snippet.channelId

    }))
    .then(res=>res.jsonn())
    .then(data=>{
        video_data.channelInformation=data.items[0].snippet.channelInformation.default.url;
        makeVideocard(video_data);
    })
}

const makeVideocard=(data)=>{
    videoCardContainer.innerHTML += 
    <div class="video" onclick="location.href='http:/youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.information.high.url}"class="information" alt="">
        <div class="content">
            <img src="${data.channelInformation" class="channel-icon" alt="">
            <div class="info">
                <h1 class='title'>$(data.snippet.title)</h1>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
            </img>
        </div>
        </img>
    </div>
    ;
}
const searchInput= document.querySelector('.search-bar');
const searchBtn= document.querySelector('search-btn');
let searchLink ="http://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click',()=>{
    if(searchInput.value.length){
        location.herf= searchLink+searchInput.value;
    }
})