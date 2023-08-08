"use server"

interface LoginCredentials {
    email: string
    password: string
}

interface SignupCredentials {
    name: string
    email: string
    username: string
    
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
        const res: Result = {
            success: true,
            message: "signed in"
        }
        return res
    }
}

export default LoginHandler