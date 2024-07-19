import icon from '../features/AiGenerator/Asset/icon.svg'

export const TriggerButton = ({ action }) => {
  return (
    <button
      type="button"
      className="flex absolute top-[7rem] right-20 items-center justify-center w-[32px] h-[32px] bg-white rounded-[105px]  shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]  "
      onClick={() => action(true)}>
    <img src={icon} />
    </button>
  )
}
