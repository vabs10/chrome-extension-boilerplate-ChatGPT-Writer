import React, { useState } from "react"
import AiGenContainer from "./AiGenerator/AiGenContainer"
import Modal from "./Modal/Modal"
import { TriggerButton } from "./TriggerButton"

const Layout = ({ anchor }) => {
  const [openMoadal, setopenMoadal] = useState(false)

  return (
    <div>
      <TriggerButton action={setopenMoadal} />
      <Modal open={openMoadal} onClose={() => setopenMoadal(false)}>
        <AiGenContainer
          anchor={anchor}
          closeFunction={() => setopenMoadal(false)}
        />
      </Modal>
    </div>
  )
}

export default Layout
