import * as rssParser from 'react-native-rss-parser';

// List of Rss news field url
export const newsApiList = [
    'http://www.nasa.gov/rss/dyn/breaking_news.rss',
    'https://www.feedforall.com/sample.xml',
    'https://www.feedforall.com/sample-feed.xml'
  ]

// define function to get json format from url

export function getList(url: string): Promise<any> {
    return fetch(url)
        .then((response) => response.text())
        .then((responseData) => rssParser.parse(responseData))
        .then((rss: Object) => {
            return rss;
        });
}

export function getFormattedDate(published: string) {
    const date = new Date(published);
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return day + '/' + month + '/' + year + '  ' + date.getHours() + ':' + date.getMinutes();
}