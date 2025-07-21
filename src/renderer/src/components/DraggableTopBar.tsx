export const DraggableTopBar = () => {
  const isMac = window.context.platform === 'darwin'
  const closeFn = async () => {
    await window.context.exit()
  }
  const minimizeFn = async () => {
    await window.context.minimize()
  }
  const maximizeFn = async () => {
    await window.context.maximize()
  }

  return (
    <header className="absolute inset-0 h-8 flex flex-row">
      <div className="float-start h-full w-[250px] flex flex-row gap-[10px] items-center">
        {!isMac && (
          <div
            id="winActions"
            className="flex flex-row gap-[5px] pl-[10px] pr-[10px] h-full w-[66px] items-center"
          >
            <div
              onClick={closeFn}
              className="cursor-pointer flex h-[12px] w-[12px] items-center justify-center rounded-full bg-red-700 hover:bg-red-500"
            ></div>
            <div
              onClick={maximizeFn}
              className="cursor-pointer flex h-[12px] w-[12px] items-center justify-center rounded-full bg-yellow-700 hover:bg-yellow-500"
            ></div>
            <div
              onClick={minimizeFn}
              className="cursor-pointer flex h-[12px] w-[12px] items-center justify-center rounded-full bg-green-700 hover:bg-green-500"
            ></div>
          </div>
        )}
        <div className="flex items-center justify-center"></div>
      </div>
    </header>
  )
}
