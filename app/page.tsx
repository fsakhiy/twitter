"use client"
import { useState, ChangeEvent } from "react"
import Modal from "@/components/modal"
import toast, { Toaster } from "react-hot-toast"
import LoginIcon from '@mui/icons-material/Login';

const HomePage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSetName = (e: ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }
  const handleSetEmail = (e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }
  const handleSetPassword = (e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }

  const isEmailValid = (email: string): boolean => {
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  const handleLogin = () => {
    const loading = toast.loading("signing you in...")
    
    if(name === "" || email === "" || password === "") {
      toast.error("please fill all required fields", {id: loading})
      return
    }
    
    if (!isEmailValid(email)) {
      toast.error("email is not valid", {id: loading})
      return
    }

    if(name === "twitter" && email === "test@twitter.com" && password === "12345678") {
      toast.success("logged in!", {id:loading})
    } else {
      toast.error("invalid credentials", {id: loading})    
    }
  }
  
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 p-5 justify-center items-center min-h-screen bg-neutral-950 text-white">
      <Toaster />
      <div className="text-4xl border-white border-b-4 w-full lg:border-none lg:text-7xl font-bold items-center lg:items-end basis-1/2">
        <h1 className="lg:text-right text-center">
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
            <button className="rounded-full p-3 bg-white border text-black hover:bg-neutral-300 transition-all font-bold text-xl">Create an account</button>
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
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Sign in">
        <div className="flex flex-col gap-10 ">
          {/* <div className="font-bold text-3xl">
            Signup
          </div> */}
          <div className="flex flex-col gap-5">
            <input className="p-5 outline-none border-2 rounded-xl border-white bg-neutral-950 focus:border-blue-500 transition-all" value={name} onChange={handleSetName} type="text" name="name" id="name" placeholder="name" />
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