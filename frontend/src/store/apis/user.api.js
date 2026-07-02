import {rootApi} from "./root.api.js"

export const userAllGetApi = async ()=>{
    try{
        const response = await rootApi.get("/users")
        return response.data
    }catch(error){
        throw error
    }
}
export const userLoginApi = async (loginUser) => {

    try {

        const response = await rootApi.post(
            "/auth/login",
            {
                username: loginUser.username,
                password: loginUser.password,
            }
        );

        return response.data;

    } catch (error) {

        throw new Error(
            error.response?.data?.detail ??
            "로그인에 실패했습니다."
        );

    }

};

export const currentUserApi = async () => {
    try {
        const response = await rootApi.get("/auth/me");
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.detail ??
            "사용자 정보를 불러오지 못했습니다."
        );
    }
};



export const userRegisterApi = async (userObj)=>{
    try{
        const checkResponse = await rootApi.get(`/users?name=${userObj.username}`)
        const users = checkResponse.data
        if(users.length){
            throw new Error("이미 존재하는 사용자입니다.")
        }
        const response = await rootApi.post(`/users`, userObj)
        return response.data
    }catch(error){
        throw error
    }
}



