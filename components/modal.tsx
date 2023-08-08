import { ReactNode, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Toaster } from 'react-hot-toast'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    title: string
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children, title}) => {
    if(!isOpen) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <Toaster />
          <div className="absolute inset-0 backdrop-blur-md backdrop-filter bg-opacity-50 bg-gray-800" onClick={onClose}></div>
            <div className="bg-neutral-950 p-10 rounded-xl shadow-xl z-10 w-full max-w-lg gap-16">
                {/* <div className='right-0'><CloseIcon /></div> */}
                <div className='items-center flex flex-row w-full justify-between'>
                    <div className='font-bold text-3xl'>{title}</div>
                    <button onClick={onClose}><p className='sr-only'>a</p><CloseIcon /></button>
                </div>
                
                <div className='mt-10'>
                    {children}
                </div>
                
                {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>
                Close
                </button> */}
            </div>
        </div>
    )
}

export default Modal