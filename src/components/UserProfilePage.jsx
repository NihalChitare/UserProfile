
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ConstantUserDetails from "./ConstantUserDetails.json";
import "./UserInformation.css";

const UserProfilePage = () => {


  const [userData, setUserData] = useState({
    name: '',
    age: '',
    gender: '',
    location: '',
    interest1: '',
    interest2: '',
    email: '',
    username: '',
    displayName: '',
    avatarURI: ''
  });
  


  const fetchUserLocation = async () => {
    let key='de5fdf16d46d433397cfc7788a83123e&ip_address=2401:4900:4e5a:8ead:f5:430b:b1fa:bc49'
    
    try {
      const response = await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${key}`);
      setUserData(prevState => ({
        ...prevState,
        location:response.data.city,


      }));
    } catch (error) {
      console.error('Error fetching user location:', error);
    }
  };

  const fetchUserInfo = async () => {
    try {


      const response = await axios.get('https://api-staging-0.gotartifact.com/v2/users/me', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${'eyJhbGciOiJSUzI1NiIsImtpZCI6IjdjZjdmODcyNzA5MWU0Yzc3YWE5OTVkYjYwNzQzYjdkZDJiYjcwYjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYWR0ZXN0LTk2YWJlIiwiYXVkIjoiYWR0ZXN0LTk2YWJlIiwiYXV0aF90aW1lIjoxNzA1NjA2NDE1LCJ1c2VyX2lkIjoiczFINTJ6OTNFcmJPaGV0SGhIMEE3ZUxCOElqMiIsInN1YiI6InMxSDUyejkzRXJiT2hldEhoSDBBN2VMQjhJajIiLCJpYXQiOjE3MDU2MDY0MTUsImV4cCI6MTcwNTYxMDAxNSwiZW1haWwiOiJucG1AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5wbUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.jT9vIRl9yLgOcEvGfenfTygx1bOG4DYvhgJkbXFabQ6soDjlWRVUW2yWN_BmRlwMN8zoG04EMNrDKA18EB_5fFFjnKfl5VryibI4R3_K6afXYLQr-35EzVuU1LtjgmwAQ3xIQA1nkW58KVIE7mJiI9XS3lZjTGJ66XLyZHmOsvqreZiU32p6LxoujGRmLnl2Ha8Kwkb9CM_uOzPNkgQiPQG5wDnn_P9BJUx0DGljdA60D3_2JPuMuFYBMlD7o1SnVMKdomqlF2NeQf9wysp5uUklAfBblPURLf0bZ0Ohi7nGKr6iQUvq8rUjFdCSfcGuRmWFWDUj_yE0vVeXenZa5A'}`
        }
      }
      );
      console.log("response111111",response);
      if (response.status !== 200) {
  
      const { email, username, display_name, avatar_uri } = ConstantUserDetails.profile;
      setUserData(prevState => ({
        ...prevState,
        email,
        username,
        displayName: display_name,
        avatarURI: avatar_uri
      }));
      console.log(avatar_uri);
    } else {
      throw new Error('Failed to fetch data');
    }
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };
  const handleInputChange = (field, value) => {
    setUserData(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(userData));
  };

  const loadStoredData = () => {
    const storedData = localStorage.getItem('userProfile');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  };

  useEffect(() => {
    fetchUserLocation();
    fetchUserInfo();
    loadStoredData();
  }, []);
  const direct_avatar_uri=ConstantUserDetails.profile.avatar_uri
  console.log("userData",direct_avatar_uri);
  return (
    <div className="loginSignUp">
      <div className="loginSignUp-container">
     <h1>User Profile</h1>
        <div className="loginSignUp-fields">
      <form onSubmit={handleSubmit}>
        <label className='label'>Name:</label>
        <input type="text" value={userData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder='Name'/>
        <br/>
        <label>Age:</label>
        <input type="text" value={userData.age} onChange={(e) => handleInputChange('age', e.target.value)} placeholder='Age' />
        <br/>
        <label>Gender:</label>
        <input type="text" value={userData.gender} onChange={(e) => handleInputChange('gender', e.target.value)} placeholder='Gender' />
        <label>Location:</label>
        <input type="text" value={userData.location} onChange={(e) => handleInputChange('location', e.target.value)} disabled={userData.location} placeholder='Location'/>
        <label>Interest1:</label>
        <input type="text" value={userData.interest1} onChange={(e) => handleInputChange('interest1', e.target.value)} placeholder='Interest1'/>
        <label>Interest2:</label>
        <input type="text" value={userData.interest2} onChange={(e) => handleInputChange('interest2', e.target.value)} placeholder='Interest2'/>
        <label>email:</label>
        <input type="text" value={userData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder='Email'/>
        <label>UserName:</label>
        <input type="text" value={userData.username} onChange={(e) => handleInputChange('username', e.target.value)} placeholder='UserName'/>
        <label>DisplayName:</label>
        <input type="text" value={userData.displayName} onChange={(e) => handleInputChange('displayName', e.target.value)} placeholder='DisplayName'/>
        <label>AvatarUri:</label>
        <input type="text" value={userData.avatarURI} onChange={(e) => handleInputChange('avatarURI', e.target.value)} placeholder='AvatarUri'/>
        <button type="submit">Save</button>

      </form>
      </div>
        </div>
      <div>
        <p>Name: {userData.name}</p>
        <p>Age: {userData.age}</p>
        <p>Gender: {userData.gender}</p>
        <p>Location: {userData.location}</p>
        <p>Interest1: {userData.interest1}</p>
        <p>Interest2: {userData.interest2}</p>
        <p>Email: {userData.email}</p>
        <p>UserName: {userData.username}</p>
        <p>DisplayName: {userData.displayName}</p>
        <p >AvatarUri:{<img style={{boxSizing:"10px"}} src={direct_avatar_uri} />} </p>
        
     </div>
     {/* <Location/> */}
    </div>
  );
};

export default UserProfilePage;
