import React, { type ReactNode } from "react"

interface ModalProps {
  open: boolean
  onClose: () => void
  children?: ReactNode
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors duration-300 ${open ? "visible bg-black/50" : "invisible"}`}>
      <div
        className={`bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"} mx-auto max-w-lg w-[870px]`}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
