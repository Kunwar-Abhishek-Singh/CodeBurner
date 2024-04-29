import { Apifetchrequest } from "./Apirequest";
import { Backend_Url } from "./BackendUrl";

export const Askmeapi= async(data,header)=>{
    return await Apifetchrequest("POST",`${Backend_Url}askme`, data, header);
}

export const registration_otp = async(data)=>{
    return await Apifetchrequest("POST", `${Backend_Url}signup_otp_with_mobile`, data)

}

export const OtpVerify = async(data)=>{
    return await Apifetchrequest("POST",`${Backend_Url}otpverify`,data)
}

export const forgot_pwd_otpVerify = async(data)=>{
    return await Apifetchrequest("POST",`${Backend_Url}forgot_pwd_otp_verify`,data)
}

export const updatePassword = async(data)=>{
    return await Apifetchrequest("POST",`${Backend_Url}updatepassword`, data)
}

export const get_registration_otp = async()=>{
    return await Apifetchrequest("GET", `${Backend_Url}signup_otp_with_mobile`)
}

export const register_student_data = async (data, header) => {
    return await Apifetchrequest("POST", `${Backend_Url}signup`, data , header);
}

export const signin_student_data = async (data)=>{
    return await Apifetchrequest("POST", `${Backend_Url}signin`, data)
}

export const signout_student_data = async (data)=>{
    return await Apifetchrequest("POST", `${Backend_Url}signout`, data)
}

export const jwt_Authenticate = async(data)=>{
    return await Apifetchrequest("POST", `${Backend_Url}jwt_authenticate`, data)
}

export const get_single_user_regs_data = async(email)=>{
    return await Apifetchrequest("GET",`${Backend_Url}getsingleuser/${email}`)
}

export const get_regs_details = async()=>{
    return await Apifetchrequest("GET", `${Backend_Url}get_regs_details`)
}

