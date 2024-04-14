document.addEventListener('DOMContentLoaded', function () {
    // Trending Movies data
    const trendingMoviesData = [
        {
            title: "Inception",
            poster: "https://via.placeholder.com/300/FF5733/FFFFFF?text=Inception",
            description: "A thief who enters the dreams of others to steal their secrets."
        },
        {
            title: "The Matrix",
            poster: "https://via.placeholder.com/300/3498DB/FFFFFF?text=The+Matrix",
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
        },
        {
            title: "Avatar",
            poster: "https://via.placeholder.com/300/2ECC71/FFFFFF?text=Avatar",
            description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
        },
        {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            poster: "https://via.placeholder.com/300/9B59B6/FFFFFF?text=LOTR",
            description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
        },
        {
            title: "The Office",
            poster: "https://via.placeholder.com/300/F39C12/FFFFFF?text=The+Office",
            description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium."
        }
    ];

    // Trending Series data
    const trendingSeriesData = [
        {
            title: "Stranger Things",
            poster: "https://via.placeholder.com/300/E74C3C/FFFFFF?text=Stranger+Things",
            description: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces to get him back."
        },
        {
            title: "Breaking Bad",
            poster: "https://via.placeholder.com/300/34495E/FFFFFF?text=Breaking+Bad",
            description: "A high school chemistry teacher turned methamphetamine manufacturer."
        },
        {
            title: "Game of Thrones",
            poster: "https://via.placeholder.com/300/2980B9/FFFFFF?text=Game+of+Thrones",
            description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
        },
        {
            title: "Friends",
            poster: "https://via.placeholder.com/300/16A085/FFFFFF?text=Friends",
            description: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan."
        },
        {
            title: "The Mandalorian",
            poster: "https://via.placeholder.com/300/27AE60/FFFFFF?text=The+Mandalorian",
            description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic."
        }
    ];

    // Recommended Content data
    const recommendedContentData = [
        {
            title: "The Shawshank Redemption",
            poster: "https://via.placeholder.com/300/C0392B/FFFFFF?text=Shawshank+Redemption",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
        },
        {
            title: "The Dark Knight",
            poster: "https://via.placeholder.com/300/8E44AD/FFFFFF?text=The+Dark+Knight",
            description: "When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
        },
        {
            title: "Pulp Fiction",
            poster: "https://via.placeholder.com/300/1ABC9C/FFFFFF?text=Pulp+Fiction",
            description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
        },
        {
            title: "The Godfather",
            poster: "https://via.placeholder.com/300/3498DB/FFFFFF?text=The+Godfather",
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
        },
        {
            title: "Forrest Gump",
            poster: "https://via.placeholder.com/300/F1C40F/FFFFFF?text=Forrest+Gump",
            description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
        }
    ];


    // Function to render carousel items
    function renderCarouselItems(data, indicatorsId, innerId) {
        const carouselIndicators = document.getElementById(indicatorsId);
        const carouselInner = document.getElementById(innerId);

        data.forEach((item, index) => {
            const indicator = `<li data-target="#${innerId}" data-slide-to="${index}"${index === 0 ? ' class="active"' : ''}></li>`;
            carouselIndicators.insertAdjacentHTML('beforeend', indicator);

            const carouselItem = `
            <div class="carousel-item${index === 0 ? ' active' : ''}">
                <img src="${item.poster}" class="d-block w-100" alt="${item.title}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${item.title}</h5>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
            carouselInner.insertAdjacentHTML('beforeend', carouselItem);
        });
    }

    // Call the function to render carousel items for each section
    renderCarouselItems(trendingMoviesData, 'trending-movies-indicators', 'trending-movies-inner');
    renderCarouselItems(trendingSeriesData, 'trending-series-indicators', 'trending-series-inner');
    renderCarouselItems(recommendedContentData, 'recommended-content-indicators', 'recommended-content-inner');

});
