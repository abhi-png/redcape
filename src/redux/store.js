import { configureStore } from '@reduxjs/toolkit'
import imageDetail from './apislice/imageDataSlice'

export const store = configureStore({
    reducer: {
        image: imageDetail,
    },
})