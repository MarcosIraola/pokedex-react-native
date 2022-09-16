import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from 'lodash';
import { FAVORITE_STORAGE } from "../utils/userDB";

export async function getPokemonFavorites() {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response || `[]`);
    } catch (error) {
        throw(error)
    }
}

export async function addPokemonToFavorite (id) {
    try {
        const favorites = await getPokemonFavorites();
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        throw(error)
    }

}

export async function isPokemonFavorite(id) {
    try {
        const response = await getPokemonFavorites();
        return includes(response, id)
    } catch (error) {
        throw error
    }
}