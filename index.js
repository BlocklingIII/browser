let button = document.getElementById('search');
let canvas = document.getElementById('canvas');
let search_bar = document.getElementById('search-bar');

function search() 
{
    let research = document.getElementById('resarch').value;
    search_bar.innerHTML = "<h1>" + research + "</h1>";
    if (research = "google.com")
    {
        let iframe = document.createElement('iframe');
        iframe.src = "google.com";
        iframe.width = "400";
        iframe.height = "400";
        iframe.frameBorder = "0";
        iframe.style.border = "none";
        iframe.style.background ="black";
        canvas.appendChild(iframe);
    }
}