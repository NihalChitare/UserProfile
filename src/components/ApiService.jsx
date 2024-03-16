import axios from "axios";



const fetchUserInfo= async (props)=>{
    try {
        const response=await axios.get('https://api-staging-0.gotartifact.com/v2/users/me',{
            headers:{
                Authorization: `Bearer ${props.token}`
            }
        })
        
    } catch (error) {
        console.log('Error fetching user Info',error);
        return {};
    }
}

export { fetchUserInfo };
