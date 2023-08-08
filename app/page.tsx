const HomePage = () => {
  return (
    <div className="flex flex-col gap-10 xl:flex-row xl:gap-20 p-5 justify-center items-center min-h-screen bg-neutral-950 text-white">
      <div className="text-7xl font-bold">
        twitter
      </div>
      <div className="flex flex-col gap-10 max-w-lg">
        <div>
          <h1 className="text-6xl font-bold">Happening now</h1>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Join today.</h2>
          <br />
          <div className="flex flex-col gap-5 w-full max-w-sm">
            {/* <button className="rounded-full p-3 bg-white border text-black hover:bg-neutral-300 transition-all font-bold text-xl">Sign up with google</button> */}
            {/* <button className="rounded-full p-3 bg-white border text-black hover:bg-neutral-300 transition-all font-bold text-xl">Sign up with apple</button> */}
            <button className="rounded-full p-3 bg-white border text-black hover:bg-neutral-300 transition-all font-bold text-xl">Create an account</button>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-lg font-semibold">
          <div>
            <h2>Already have an account?</h2>
          </div>
          <div className="flex flex-col w-full max-w-sm">
            <button className="rounded-full p-3 bg-black border text-blue-400 hover:bg-neutral-900 transition-all font-bold text-xl">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage