
import {rootApi} from "./root.api.js"


export const productAllGetApi = async () => {
    try{
        const response = await rootApi.get("http://localhost:3001/product")
        return response.data
    }
    catch(error){
        return error
    }
}


export const productGetApi = async (id) => {
    try{
        const response = await rootApi.get(`/product/${id}`)
        return response.data
    }
    catch(error){
        return error
    }
}

export const productPostApi = async (dataObj) => {
    try{
        const response = await rootApi.post("/product",dataObj)
        return response.data
    }
    catch(error){
        return error
    }
}

export const productPutApi = async (dataObj) => {
    try{
        const response = await rootApi.put(`/product/${dataObj.id}`,dataObj)
        return response.data
    }
    catch(error){
        return error
    }
}

export const productDeleteApi = async (id) => {
    try{
        await rootApi.delete(`/product/${id}`)
        return id
    }
    catch(error){
        return error
        //sdsdfsdf
    }
}