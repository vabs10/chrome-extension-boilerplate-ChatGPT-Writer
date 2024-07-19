import React from "react"

const SenderChat = ({ message }) => {
  return (
    <div className="flex justify-end mb-4">
      <div className="bg-blue-500 text-white p-4 rounded-lg max-w-xs">
        {message}
      </div>
    </div>
  )
}
const ReceiverChat = ({ message }) => {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-gray-300 text-black p-4 rounded-lg max-w-xs">
        {message}
      </div>
    </div>
  )
}

const ChatBox = ({ chats }) => {
  return (
    <div className="p-4">
      {chats.map((chat, index) => (
        <div key={index}>
          {chat.prompt && <SenderChat message={chat.prompt.msg} />}
          {chat.reply && <ReceiverChat message={chat.reply.msg} />}
        </div>
      ))}
    </div>
  )
}

export default ChatBox
