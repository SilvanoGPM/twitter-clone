const $tweetContainer = document.querySelector('[data-js="tweets"]');

const tweets = [
  {
    description: '',
    time: '7 min',
    image: './assets/gatos_tweet1.jpg',
    page: {
      name: 'gatos fazendo gatices',
      id: 'gatinarios',
      image: './assets/gatos_avatar.jpg'
    },
    metrics: {
      comments: 5,
      likes: 188,
      retweets: 1800,
    },
  },

  {
    description: 'tá me olhando assim por que parça???????',
    time: '7 min',
    image: './assets/gatos_tweet2.jpg',
    page: {
      name: 'gatos fazendo gatices',
      id: 'gatinarios',
      image: './assets/gatos_avatar.jpg'
    },
    metrics: {
      comments: 12,
      likes: 424,
      retweets: 1250,
    },
  },

  {
    description: '5 sachês e pode passar',
    time: '7 min',
    image: './assets/gatos_tweet3.jpg',
    page: {
      name: 'gatos fazendo gatices',
      id: 'gatinarios',
      image: './assets/gatos_avatar.jpg'
    },
    metrics: {
      comments: 545,
      likes: 216,
      retweets: 14814,
    },
  },
];

function getDescription(description) {
  return description ? (
    `
      <p class="tweet__comment">
        ${description}
      </p>
    `
  ) : "";
}

function formatMetric(metric) {
  return metric < 1000 ? metric : `${(metric / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} mil`;
}

function getTweetsHTML() {
  const mappedTweets = tweets.map(({ description, image, metrics, page, time }) => {

    return `\
      <div class="tweet">
        <div class="tweet__more">
          <i class="fas fa-ellipsis-h"></i>
        </div>

        <div class="info">
          <figure class="user">
            <img alt="User Avatar" src="${page.image}" />
          </figure>

          <div>
            <div class="tweet__content">
              <div class="posted">
                <div class="posted__title">
                  <h3 class="tweet__username">${page.name}</h3>
                  <p class="tweet__user_id">@${page.id}</p>
                </div>
                <p>· <span class="tweet__time">${time}</span></p>
              </div>

              ${getDescription(description)}

              <figure>
                <img alt="Tweet" src="${image}" />
              </figure>
            </div>

            <div class="tweet__actions">
              <div class="tweet__action">
                <i class="far fa-comment"></i>
                <span>${formatMetric(metrics.likes)}</span>
              </div>

              <div class="tweet__action">
                <i class="far fa-heart"></i>
                <span>${formatMetric(metrics.comments)}</span>
              </div>

              <div class="tweet__action">
                <i class="fas fa-retweet"></i>
                <span>${formatMetric(metrics.retweets)}</span>
              </div>

              <div class="tweet__action">
                <i class="fas fa-share-alt"></i>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

  });

  return mappedTweets.join(' ');
}

$tweetContainer.innerHTML += getTweetsHTML();
