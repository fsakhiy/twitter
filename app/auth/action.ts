"use server"

import CheckEmail from "@/pkg/checkEmail"
import {prisma} from "@/pkg/database"

interface LoginCredentials {
    email: string
    password: string
}

interface SignupCredentials {
    name: string
    email: string
    username: string
    password: string
}

interface Result {
    success: boolean,
    message: string
}


const LoginHandler = async ({email, password}: LoginCredentials): Promise<Result> => {
    let errors: string[] = []
        
    if (email === "") {
        errors.push("emails")
    }
    if (password === "") {
        errors.push("password")
    }
    
    let formattedStringLoop = "";

    for (let i = 0; i < errors.length; i++) {
        formattedStringLoop += errors[i];
        if (i < errors.length - 2) {
          formattedStringLoop += ", ";
        }
        if (i == errors.length - 2) {
          formattedStringLoop += " and ";
        }
    }
  
    formattedStringLoop += " are required";
    if (errors.length != 0) {
        const res: Result = {
            success: false,
            message: formattedStringLoop
        }
        return res
    } else {
        const emailStatus = CheckEmail(email)
        if (email === "" || !emailStatus) {
            // errors.push("emails")
            const res: Result = {
                success: false,
                message: "email is invalid"
            }
            return res
        } 
    
        const res: Result = {
            success: true,
            message: "signed in"
        }
        return res
    }
}

const SignupHandler = async ({email, password, username, name}: SignupCredentials): Promise<Result> => {
    let errors: string[] = []
        
    if (email === "") {
        errors.push("emails")
    }
    if (password === "") {
        errors.push("password")
    }
    if (username === "") {
        errors.push("username")
    }
    if (name === "") {
        errors.push("name")
    } 


    
    let formattedStringLoop = "";

    for (let i = 0; i < errors.length; i++) {
      formattedStringLoop += errors[i];
      if (i < errors.length - 2) {
        formattedStringLoop += ", ";
      }
      if (i == errors.length - 2) {
        formattedStringLoop += " and ";
      }
    }

    formattedStringLoop += " are required";
    if (errors.length != 0) {
        const res: Result = {
            success: false,
            message: formattedStringLoop
        }
        return res
    } else {
        const emailStatus = CheckEmail(email)
        if (email === "" || !emailStatus) {
            // errors.push("emails")
            const res: Result = {
                success: false,
                message: "email is invalid"
            }
            return res
        } 
    
        const res: Result = {
            success: true,
            message: "signed in"
        }
        return res
    }
}

export {LoginHandler, SignupHandler}