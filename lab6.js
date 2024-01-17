

    function fetchApiData() {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then((response) => response.json())
            .then((posts) => {
                posts.forEach(post => {
                    addCard(post);
                });
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }
    
    function addCard(post) {
        const template = document.getElementById("card-template").content.cloneNode(true);
        template.querySelector('.card-title').innerText = post.id;
        template.querySelector('.card-text').innerText = post.title;
        document.getElementById('card-list').appendChild(template);
    }
    
    // Call the function to fetch and display the data
    fetchApiData();