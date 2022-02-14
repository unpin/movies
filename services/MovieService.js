const API_KEY = '5638ebb21c521013187c082c04fd7051';

export async function discoverPopular() {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
    );

    if (response.status >= 400) {
        throw new Error('Something went wrong. Try again later.');
    }
    return response.json();
}

export async function searchByTitle(title) {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?page=1&query=${title}&sort_by=popularity.desc&api_key=${API_KEY}`
    );

    if (response.status >= 400) {
        throw new Error('Something went wrong. Try again later.');
    }
    return response.json();
}
