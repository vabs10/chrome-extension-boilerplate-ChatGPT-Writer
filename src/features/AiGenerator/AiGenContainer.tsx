import React, { useState } from "react"
import { insertFuction } from "~utility/InsertMessageHoook"
import ChatBox from "./AiChat"
import AiInputForm from "./AiInputForm"


const AiGenContainer = ({
  anchor,
  closeFunction
}: {
  anchor: any
  closeFunction: () => void
}) => {
  const [chat, setChat] = useState({
    prompt: {
      msg: ""
    },
    reply: {
      msg: ""
    }
  })

  function apiCall(e) {
    setChat((prev: any) => {
      return {
        ...prev,
        prompt: { msg: e },
        reply: {
          msg: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
        }
      }
    })
    console.log(e)
  }

  function insetFunction() {
    insertFuction(anchor, chat?.reply?.msg)
    closeFunction()
  }

  return (
    <div>
      {chat?.reply?.msg !== "" && <ChatBox chats={[chat]} />}
      <AiInputForm
        prompt={chat?.prompt?.msg ?? ""}
        setPrompt={(e) => apiCall(e)}
        response={chat?.reply?.msg ?? ""}
        insetFunction={() => insetFunction()}
      />
    </div>
  )
}

export default AiGenContainer
