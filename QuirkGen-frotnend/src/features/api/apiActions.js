import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "./api";

export const fetchCombinedData = createAsyncThunk(
    'data/fetchCombinedData',
    async({text,user,companyName,companyDesc,motivation}) => {
        console.log(text,user,companyName,companyDesc,motivation);
        const combinedData = await fetchData({text,user,companyName,companyDesc,motivation})
        return combinedData
    }
)