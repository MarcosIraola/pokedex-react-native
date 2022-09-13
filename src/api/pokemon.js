import { API_URL } from "@env"

export async function getAllPokemonsApi() {
    try {
        const url = `${API_URL}/pokemon?limit=20&offset=0`;
        const response = await fetch(url);
        const result = await response.json()
        return result;

    } catch (error) {
        throw error;
    }
}

export async function getPokemonByUrlApi(url) {
    try {
        const response = await fetch(url);
        const result = await response.json()
        return result;

    } catch (error) {
        throw error
    }
}