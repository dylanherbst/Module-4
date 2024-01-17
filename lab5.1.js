let news = [
    { id: 1, title: 'Election Results',
    content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success',
    content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning',
    content: "Residents should prepare..." }
    ];

    // const cards = [
    //     { title: 'Audi', description: 'Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany.' },
    //     { title: 'Mercedes-Benz', description: 'Mercedes-Benz, commonly referred to as Mercedes, is a German luxury automotive brand.' },
    //     { title: 'BMW', description: 'Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.' }
    // ];
    function addCard(card) {
        const template = document.getElementById("card-template").content.cloneNode(true);
        template.querySelector('.card-title').innerText = card.title;
        template.querySelector('.card-text').innerText = card.content;
        document.querySelector('#news-list').appendChild(template);
    }
    if ('content' in document.createElement('template')) {
        news.forEach((card) => {
            addCard(card);
        })
    }


    
    function updateNews() {
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = ''; 
    
        news.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
            newsContainer.appendChild(newsItem);
        });
    }
    
    
    updateNews();

    setInterval(updateNews, 5000);