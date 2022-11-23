export async function getApi(url) {
    const res = await fetch(url);
    const data = await res.json();
    const movieData = await data.results;
    return movieData
}