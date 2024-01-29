import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createData = createAsyncThunk("createData", async (data, { rejectWithValue }) => {
    const response = await fetch("https://65b7cddb46324d531d558d45.mockapi.io/curd", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

//read action
export const showData = createAsyncThunk("showData", async (data, { rejectWithValue }) => {
    const response = await fetch("https://65b7cddb46324d531d558d45.mockapi.io/curd");

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

//update action
export const updateData = createAsyncThunk("updateData", async (data, { rejectWithValue }) => {
    const response = await fetch(`https://65b7cddb46324d531d558d45.mockapi.io/curd/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

//delete action
export const deleteData = createAsyncThunk("deleteData", async (id, { rejectWithValue }) => {
    const response = await fetch(`https://65b7cddb46324d531d558d45.mockapi.io/curd/${id}`, {
        method: "DELETE"
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const imageDetail = createSlice({
    name: "imageDetail",
    initialState: {
        images: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        // createData action promises
        builder.addCase(createData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createData.fulfilled, (state, action) => {
            state.loading = false;
            state.images.push(action.payload);
        });
        builder.addCase(createData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });


        // readData action promises
        builder.addCase(showData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(showData.fulfilled, (state, action) => {
            state.loading = false;
            state.images = action.payload;
        });
        builder.addCase(showData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });


        // updateData action promises
        builder.addCase(updateData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateData.fulfilled, (state, action) => {
            state.loading = false;
            state.images = state.images.map((e) =>
                e.id === action.payload.id ? action.payload : e
            );
        });
        builder.addCase(updateData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });


        // deleteData action promises
        builder.addCase(deleteData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {
                state.images = state.images.filter((e) => e.id !== id);
            }
        });
        builder.addCase(deleteData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export default imageDetail.reducer