import { ApiUri } from "./variables";

export const refreshToken = async () => {
    try {
        const response = await axios.post(`${ApiUri}/auth/refresh-token`);
        await AsyncStorage.setItem('toke', response.data.token);
    } catch (error) {
        console.error("Error refreshing token:", error);
    }
};
