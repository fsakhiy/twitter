import Modal from "@/components/modal"
import {ChangeEvent, useState} from 'react'
import LoginIcon from '@mui/icons-material/Login'
import { SignupHandler } from "@/app/auth/action"
import toast, { Toaster } from "react-hot-toast"
import CheckEmail from "@/pkg/checkEmail"

interface Modal {
    isOpen: boolean
    onClose: () => void
}

interface StateType {
    name: string,
    username: string,
    email: string,
    password: string
}

const SignupModal: React.FC<Modal> = ({isOpen, onClose}) => {
    const [value, setValue] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
    })

    const [validation, setValidation] = useState({
        nameValidation: false,
        usernameValidation: false,
        emailValidation: false,
        passwordValidation: false,
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setValue((prevValue) => ({
            ...prevValue,
            [name]: value,
        }))

        if (name === 'name') {
            updateValidation('name', value.trim().toLowerCase() === '');
        } else if (name === 'username') {
            updateValidation('username', value.trim().toLowerCase() === '');
        } else if (name === 'email') {       
            updateValidation('email', value.trim().toLowerCase() === '');
        } else if (name === 'password') {
            updateValidation('password', value.trim().toLowerCase() === '');
        }       
    }

    const updateValidation = (field: keyof StateType, isValid: boolean) => {
        setValidation((prevValidation) => ({
            ...prevValidation,
            [`${field}Validation`]: isValid
        }))
    }

    const signup = async () => {
        const loading = toast.loading('Signing you up');
        
        const emailStatus = CheckEmail(value.email)
        if (!emailStatus) {
            updateValidation('email', true)
        } 

        if(value.name == '') {
            updateValidation('name', value.name.trim().toLocaleLowerCase() === '')
        } 
        if(value.username == '') {
            updateValidation('username', value.username.trim().toLocaleLowerCase() === '')
        } 
        if(value.email == '') {
            updateValidation('email', value.email.trim().toLocaleLowerCase() === '')
        } 
        if(value.password == '') {
            updateValidation('password', value.password.trim().toLocaleLowerCase() === '')
        } 
                
        // Continue with signup process
        const status = await SignupHandler(value);
        if (!status.success) {
          toast.error(status.message, { id: loading });
        } else {
          toast.success(status.message, { id: loading });
        }
      };
      
    
    
    if(!isOpen) return null
    
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Signup">
            <div className="flex flex-col gap-10 ">
            {/* <Toaster /> */}
                <div className="flex flex-col gap-5">
                    {/* <input className="p-5 outline-none border-2 rounded-xl border-white bg-neutral-950 focus:border-blue-500 transition-all" value={name} onChange={handleSetName} type="text" name="name" id="name" placeholder="name" /> */}
                    <input className={`p-5 outline-none border rounded-xl  bg-neutral-950 ${validation.nameValidation ? `border-red-500` : `border-neutral-300`} focus:border-blue-500 transition-all`} value={value.name} onChange={handleInputChange} type="text" name="name" id="name" placeholder="name" />
                    {/* <span>name is required</span> */}
                    <input className={`p-5 outline-none border rounded-xl ${validation.usernameValidation ? `border-red-500` : `border-neutral-300`} bg-neutral-950 focus:border-blue-500 transition-all` }value={value.username} onChange={handleInputChange} type="text" name="username" id="username" placeholder="username" />
                    <input className={`p-5 outline-none border rounded-xl ${validation.emailValidation ? `border-red-500` : `border-neutral-300`} bg-neutral-950 focus:border-blue-500 transition-all` } value={value.email} onChange={handleInputChange} type="email" name="email" id="email" placeholder="email" />
                    <input className={`p-5 outline-none border rounded-xl ${validation.passwordValidation ? `border-red-500` : `border-neutral-300`} bg-neutral-950 focus:border-blue-500 transition-all` } value={value.password} onChange={handleInputChange} type="password" name="password" id="password" placeholder="password" />
                </div>
                <div className="w-full rounded-full shadow-xl bg-blue-500 hover:bg-blue-300 text-white font-bold text-2xl p-5 transition-color">
                    <button onClick={signup} className="space-between flex flex-row items-center w-full">
                        <div className="flex w-full items-center">
                            <span className="flex-grow">Sign Up </span>
                            <LoginIcon />
                        </div>
                    </button>
                </div>
            </div>

        </Modal>
    )
}

export default SignupModal 