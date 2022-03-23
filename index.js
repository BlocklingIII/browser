let button = document.getElementById('search');

button.addEventListener('click', search());

function search() 
{
    let research = document.getElementById('resarch').value;
    if (research = "google.com")
    {
        let iframe = document.createElement('iframe');
        iframe.src = "google.com";
        iframe.width = "400";
        iframe.height = "400";
        iframe.frameBorder = "0";
        loadSubscribe.appendChild(iframe);
    }
}