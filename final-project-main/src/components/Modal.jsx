const Modal = (isModelOpen, setIsModelOpen, childern) => {
    if(!isModelOpen) return null;
    return(
        <div className="fixed insert-0 bg-gray-800 bg-opacity-75 flex items-center justify-center ">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <button className="absolute top-4 right-4 text-gray-300 text-3xl" onClick={() => setIsModelOpen(false)}>
                    &times;
                </button>
               {childern}
            </div>
        </div>
    )
}

export default Modal