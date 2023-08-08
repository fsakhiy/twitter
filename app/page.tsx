"use client"
import { useState, ChangeEvent } from "react"
import Modal from "@/components/modal"
import toast, { Toaster } from "react-hot-toast"
import LoginIcon from '@mui/icons-material/Login';
import {LoginHandler} from '@/app/auth/action'
import SignupModal from "@/components/signupModal";

const HomePage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  // const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openSignup = () => {
    setIsSignupOpen(true)
  }

  const closeSignup = () => {
    setIsSignupOpen(false)
  }

  // const handleSetName = (e: ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }
  const handleSetEmail = (e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }
  const handleSetPassword = (e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }

  const isEmailValid = (email: string): boolean => {
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  const handleLogin = async () => {
    const loading = toast.loading("signing you in...")
    
    const status = await LoginHandler({email, password})
    if(!status.success) {
      toast.error(status.message, {id: loading})
    } else {
      toast.success(status.message, {id: loading})
    }

    
  }
  
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 p-5 justify-center items-center min-h-screen bg-neutral-950 text-white">
      <Toaster />
      <div className="text-4xl border-white border-b-4 w-full lg:border-none lg:text-7xl font-bold basis-1/2">
        <h1 className="lg:text-center text-left">
          twitter
        </h1>
      </div>
      <div className="flex flex-col gap-10 w-full items-center lg:items-start basis-1/2">
        <div>
          <h1 className="text-6xl font-bold">Happening now</h1>
        </div>
        <div className="flex flex-col w-full items-center lg:items-start">
          <h2 className="text-3xl font-bold">Join today.</h2>
          <br />
          <div className="flex flex-col gap-5 w-full max-w-md">
            <button className="rounded-full p-3 bg-white border text-black hover:bg-neutral-300 transition-all font-bold text-xl">Sign up with google</button>
            <button className="rounded-full p-3 bg-white border text-black hover:bg-neutral-300 transition-all font-bold text-xl">Sign up with apple</button> 
            <button onClick={openSignup} className="rounded-full p-3 bg-white border text-black hover:bg-neutral-300 transition-all font-bold text-xl">Create an account</button>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-lg font-semibold w-full items-center lg:items-start">
          <div>
            <h2>Already have an account?</h2>
          </div>
          <div className="flex flex-col w-full max-w-md">
            <button onClick={openModal} className="rounded-full p-3 bg-black border text-blue-400 hover:bg-neutral-900 transition-all font-bold text-xl">Sign in</button>
          </div>
        </div>
      </div>

      <SignupModal isOpen={isSignupOpen} onClose={closeSignup} />

      {/* </SignupModal> */}
      
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Sign in">
        <div className="flex flex-col gap-10 ">
          {/* <div className="font-bold text-3xl">
            Signup
          </div> */}
          <div className="flex flex-col gap-5">
            {/* <input className="p-5 outline-none border-2 rounded-xl border-white bg-neutral-950 focus:border-blue-500 transition-all" value={name} onChange={handleSetName} type="text" name="name" id="name" placeholder="name" /> */}
            <input className="p-5 outline-none border-2 rounded-xl border-white bg-neutral-950 focus:border-blue-500 transition-all" value={email} onChange={handleSetEmail } type="email" name="email" id="email" placeholder="email" />
            <input className="p-5 outline-none border-2 rounded-xl border-white bg-neutral-950 focus:border-blue-500 transition-all" value={password} onChange={handleSetPassword} type="password" name="password" id="password" placeholder="password" />
          </div>
          <div className="w-full rounded-full shadow-xl bg-blue-500 hover:bg-blue-300 text-white font-bold text-2xl p-5 transition-color">
            <button onClick={handleLogin} className="space-between flex flex-row items-center w-full">
              <div className="flex w-full items-center">
                <span className="flex-grow">Sign in</span>
                <LoginIcon />
              </div>
            </button>
          </div>

        </div>
      </Modal>
    </div>
  )
}

export default HomePage