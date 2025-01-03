import { createSlice } from "@reduxjs/toolkit";

const isTokenPresentInCookies = () => {
    const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token="'));
    return !!token
}

const loadUserFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('user');
        if (serializedState === null) {
            return { user: JSON.parse(serializedState) }
        }
    } catch (error) {
        return { user: null }
    }
}

const initialState = loadUserFromLocalStorage();
const authSlice = createSlice({
    name: "auth",
})