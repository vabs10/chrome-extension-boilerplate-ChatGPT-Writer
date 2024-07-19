import React, { useState, type ChangeEvent, type FormEvent } from "react"
import GenerateIcon from "./Asset/generate.svg"
import insertIcon from "./Asset/insert.svg"
import RegeneRateIcon from "./Asset/regenerate.svg"

interface AiInputFormProps {
  prompt: string
  setPrompt: (prompt: string) => void
  response?: string
  insetFunction?: () => void
}

const AiInputForm: React.FC<AiInputFormProps> = ({
  prompt,
  setPrompt,
  response = "",
  insetFunction
}) => {
  const [state, setState] = useState<string>(prompt)

  const submitFunction = (event: FormEvent) => {
    event.preventDefault()
    setPrompt(state)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value)
  }

  return (
    <form className="flex flex-col max-w-lg mx-auto" onSubmit={submitFunction}>
      <input
        type="text"
        placeholder="Your prompt"
        className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
        value={state}
        onChange={handleChange}
      />
      <div className="flex justify-end mt-6 gap-2">
        {response !== "" && (
          <button
            type="submit"
            className={`bg-gray-200  border-1 border-gray-700 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-700 hover:text-white  focus:outline-none flex items-center justify-center space-x-2`}
            onClick={() => insetFunction()}>
            <img
              src={insertIcon}
              className="inline w-[1.5rem] h-[1.5rem] "
              alt="icon"
            />
            <span className="text-[1.5rem]">Insert</span>
          </button>
        )}
        <button
          type="submit"
          className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none flex items-center justify-center space-x-2`}>
          <img
            src={response !== "" ? RegeneRateIcon : GenerateIcon}
            className="inline w-[1.5rem] h-[1.5rem]"
            alt="icon"
          />
          <span className="text-[1.5rem]">
            {response !== "" ? "Regenerate" : "Generate"}
          </span>
        </button>
      </div>
    </form>
  )
}

export default AiInputForm
