import Modal from "@/components/modal"
import {ChangeEvent, useState} from 'react'
import LoginIcon from '@mui/icons-material/Login'
import { LoginHandler } from "@/app/auth/action"
import toast from "react-hot-toast"
import CheckEmail from "@/pkg/checkEmail"

interface Modal {
    isOpen: boolean
    onClose: () => void
}

interface StateType {
    email: string,
    password: string
}

const LoginModal: React.FC<Modal> = ({isOpen, onClose}) => {
    const [value, setValue] = useState({
        email: '',
        password: '',
    })

    const [validation, setValidation] = useState({
        emailValidation: false,
        passwordValidation: false,
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setValue((prevValue) => ({
            ...prevValue,
            [name]: value,
        }))

        if (name === 'email') {       
            updateValidation('email', value.trim().toLowerCase() === '');
        }
        if (name === 'password') {
            updateValidation('password', value.trim().toLowerCase() === '');
        }       
    }

    const updateValidation = (field: keyof StateType, isValid: boolean) => {
        setValidation((prevValidation) => ({
            ...prevValidation,
            [`${field}Validation`]: isValid
        }))
    }

    const login = async () => {
        const loading = toast.loading('logging you in', {style: {
            borderRadius: '10px',
            background: '#262626',
            color: '#fff'
        }});
        
        const emailStatus = CheckEmail(value.email)
        if (!emailStatus) {
            updateValidation('email', true)
        } 

        if(value.email == '') {
            updateValidation('email', value.email.trim().toLocaleLowerCase() === '')
        } 
        if(value.password == '') {
            updateValidation('password', value.password.trim().toLocaleLowerCase() === '')
        } 
                
        // Continue with signup process
        const status = await LoginHandler(value);
        if (!status.success) {
          toast.error(status.message, { id: loading });
        } else {
          toast.success(status.message, { id: loading });
        }
      };
      
    
    
    if(!isOpen) return null
    
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Login">
            <div className="flex flex-col gap-10 ">
                <div className="flex flex-col gap-5">
                    <input className={`p-5 outline-none border rounded-xl ${validation.emailValidation ? `border-red-500` : `border-neutral-300`} bg-neutral-950 focus:border-blue-500 transition-all` } value={value.email} onChange={handleInputChange} type="email" name="email" id="email" placeholder="email" />
                    <input className={`p-5 outline-none border rounded-xl ${validation.passwordValidation ? `border-red-500` : `border-neutral-300`} bg-neutral-950 focus:border-blue-500 transition-all` } value={value.password} onChange={handleInputChange} type="password" name="password" id="password" placeholder="password" />
                </div>
                <div className="w-full rounded-full shadow-xl bg-blue-500 hover:bg-blue-300 text-white font-bold text-2xl p-5 transition-color">
                    <button onClick={login} className="space-between flex flex-row items-center w-full">
                        <div className="flex w-full items-center">
                            <span className="flex-grow">Login </span>
                            <LoginIcon />
                        </div>
                    </button>
                </div>
            </div>

        </Modal>
    )
}

export default LoginModal