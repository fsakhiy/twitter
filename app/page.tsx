"use client"
import { useState} from "react"
import { Toaster } from "react-hot-toast"
import SignupModal from "@/components/signupModal";
import LoginModal from "@/components/loginModal";

const HomePage = () => {

  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  const openLogin = () => {
    setIsLoginOpen(true)
  }

  const closeLogin = () => {
    setIsLoginOpen(false)
  }

  const openSignup = () => {
    setIsSignupOpen(true)
  }

  const closeSignup = () => {
    setIsSignupOpen(false)
  }
 
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 p-5 justify-center items-center min-h-screen bg-neutral-950 text-white">
      <div className="text-4xl border-white border-b-4 w-full lg:border-none lg:text-7xl font-bold basis-1/2">
        <h1 className="lg:text-center text-left">
          twitter
        </h1>
      </div>
      <div className="flex flex-col gap-10 w-full items-center lg:items-start basis-1/2">
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold">Happening now</h1>
        </div>
        <div className="flex flex-col w-full items-center lg:items-start">
          <h2 className="text-2xl lg:text-3xl font-bold">Join today.</h2>
          <br />
          <div className="flex flex-col gap-5 w-full max-w-md">
            <button className="rounded-full p-2 lg:p-3 bg-white border text-black hover:bg-neutral-300 transition-all font-bold text-xl">Sign up with google</button>
            <button className="rounded-full p-2 lg:p-3 bg-white border text-black hover:bg-neutral-300 transition-all font-bold text-xl">Sign up with apple</button> 
            <button onClick={openSignup} className="rounded-full p-2 lg:p-3 bg-white border text-black hover:bg-neutral-300 transition-all font-bold text-xl">Create an account</button>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-lg font-semibold w-full items-center lg:items-start">
          <div>
            <h2>Already have an account?</h2>
          </div>
          <div className="flex flex-col w-full max-w-md">
            <button onClick={openLogin} className="rounded-full p-3 bg-black border text-blue-400 hover:bg-neutral-900 transition-all font-bold text-xl">Sign in</button>
          </div>
        </div>
      </div>

      <SignupModal isOpen={isSignupOpen} onClose={closeSignup} />
      <LoginModal isOpen={isLoginOpen} onClose={closeLogin} />
      
      <Toaster />
    </div>
  )
}

export default HomePage