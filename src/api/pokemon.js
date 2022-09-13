import { API_URL } from "@env"

export async function getAllPokemonsApi(endpointUrl) {
    try {
        const url = `${API_URL}/pokemon?limit=20&offset=0`;
        const response = await fetch(endpointUrl || url);
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

export async function getPokemonById(id) {
    try {
        const url = `${API_URL}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json()
        return result;
    } catch (error) {
        throw error
    }
}