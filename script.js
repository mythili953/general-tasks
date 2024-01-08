document.addEventListener('DOMContentLoaded', () => {
    const dogImage = document.querySelector('.dog-image');
    
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const dogImageUrl = data[0].url;
            dogImage.src = dogImageUrl;
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });
});