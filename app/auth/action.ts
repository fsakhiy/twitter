"use server"

import CheckEmail from "@/pkg/checkEmail"

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

interface NewResult {
    success: boolean
    message: string
    fields: string[]
}

const LoginHandler = async ({email, password}: LoginCredentials): Promise<NewResult> => {
    let errors: string[] = []
    const emailStatus = CheckEmail(email)
    if (email === "" || !emailStatus) {
        errors.push("emails")
    } 
    if (password === "") {
        errors.push("password")
    }

    if(errors.length > 0) {
        const res: NewResult = {
            success: false,
            message: "data invalid",
            fields: errors
        }
        return res
    } else {
        const res: NewResult = {
            success: true,
            message: "sucess",
            fields: []
        }
        return res
    }

    // if(!emailStatus)

    // let formattedStringLoop = "";
    
    // for (let i = 0; i < errors.length; i++) {
    //     formattedStringLoop += errors[i];
    //     if (i < errors.length - 1) {
    //         formattedStringLoop += " & ";
    //     }
    // }
    
    
    // formattedStringLoop += " are required";
    // if (errors.length != 0) {
    //     const res: Result = {
    //         success: false,
    //         message: formattedStringLoop
    //     }
    //     return res
    // } else {
    //     const emailStatus = CheckEmail(email)
    //     if(!emailStatus) {
    //         const res: Result = {
    //             success: false,
    //             message: "email is not valid"
    //         }
    //         return res
    //     }
    //     const res: Result = {
    //         success: true,
    //         message: "signed in"
    //     }
    //     return res
    // }
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
      if (i < errors.length - 1) {
        formattedStringLoop += " & ";
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