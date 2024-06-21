export const checkValidation = (email,password)=>{

    const emailRes = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    
    const passRes = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    
    if(!emailRes) return "Email is Required"
    
    if(!passRes) return "Password is Required"
    
    return null
    }