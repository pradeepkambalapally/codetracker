
const ErrorMessage = ({error}) => {
    
    return (
        <div className="flex-1 min-h-screen bg-slate-100 flex items-center justify-center p-6">

            <div className="bg-white border border-red-200 text-red-500 px-8 py-6 rounded-3xl shadow-sm text-lg font-semibold">

                {error}

            </div>

        </div>
    )
}

export default ErrorMessage;