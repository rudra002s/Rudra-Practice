function createCard(title,channelName,views,monthsOld,duration,thumbnail){
    let HTML=`
    <div class="card">
            <h3>"${title}</h3>
            <p>${channelName}</p>
            <p>${views}</p>
            <p>${monthsOld}</p>
            <span>${duration}</span>
            <img src="${thumbnail}>
        </div>
    `
    document.querySelector(".container").insertAdjacentHTML("beforeend",HTML)
}
createCard("Installing VS Code & How Website Works | Sigma Web Development Course - Tutorial #1","CodeWithHarry","6.8M","September 26, 2023","31:19","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA")