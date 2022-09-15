const sb = document.getElementById('search-button');

sb.addEventListener('click', e => {
    e.preventDefault();
    const searchInput = document.querySelector('#search-input').value;
    const url = `https://api.jikan.moe/v4/anime?q=${searchInput}&sfw`;
    const searchResultSection = document.getElementById('search-results');
    // fetch
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not fetch');
            }

            return response.json();
        })
        .then(json => {
            const results = json.data;
            let output = '';
            results.forEach((result, i) => {
                const thumbnail = result.images.jpg.large_image_url;
                const title = result.title_english;
                const id = result.mal_id;

                const markup = `<div id="result_${id}">
                    <img src="${thumbnail}" />
                    <h3>${title}</h3>

                    </div>`
                output += markup;
            });

            console.log('searchResultSection:', searchResultSection);
            searchResultSection.innerHTML = output;
        })
        .catch(err => {
            console.error(err);
        });
});

