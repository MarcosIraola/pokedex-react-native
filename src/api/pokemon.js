import { API_URL } from "@env"

export async function getPokemons() {

    // const url = `${API_URL}/pokemon?limit=20&offset=0`;
    // const options = {
    //     method: 'GET',
    //     headers: {"Content-type": "application/json"},
    // };
    // fetch(url, options)
    //     .then(response => response.json())
    //     .then(payload => {
    //         return payload;
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })

    try {
        const url = `${API_URL}/pokemon?limit=20&offset=0`;
        const response = await fetch(url);
        const result = await response.json()
        return result;

    } catch (error) {
        throw error;
    }
}