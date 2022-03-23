let button = document.getElementById('search');
let canvas = document.getElementById('canvas');

button.onclick = function search() 
{
    let research = document.getElementById('resarch').value;
    if (research = "google.com")
    {
        let iframe = document.createElement('iframe');
        iframe.src = "google.com";
        iframe.width = "400";
        iframe.height = "400";
        iframe.frameBorder = "0";
        canvas.appendChild(iframe);
    }
}