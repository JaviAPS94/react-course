import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID fqOjVIWQfZe36_KwuWkKy-QqMv-oS7XwFF8PDloY1ec'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImages;