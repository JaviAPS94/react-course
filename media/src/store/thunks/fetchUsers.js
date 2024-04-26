import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk(
    "users/fetch",
    async () => {
        const response = await axios.get("http://localhost:5000/users");
        await pause(900)
        return response.data;
    }
);

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

export { fetchUsers }