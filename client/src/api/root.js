import axios from 'axios';

export const baseURL = "http://localhost:5001/catering-client-admin-panel/us-central1/app"

export const validateUserJWTToken = async (token) => {
    try{
      const res = await axios.get(`${baseURL}/api/users/jwtVerification`, {
        headers : {Authorization : `Bearer ${token}`}
      });
      return res.data.data;
    }catch(err){
        console.error("Error validating JWT token : " , err)
        return null
    }
}