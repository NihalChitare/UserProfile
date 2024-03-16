const saveUserProfile=(userProfile)=>{
    localStorage.setItem('userProfile',JSON.stringify(userProfile));
}
const loadUserProfile=()=>{
    const userProfile=localStorage.getItem('userProfile');
    return JSON.parse(userProfile);
}

export { loadUserProfile, saveUserProfile };
