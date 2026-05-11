const Loading = () => {
    return (
        <div className="flex-1 bg-gray-100 min-h-screen flex flex-col items-center justify-center">

            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

            <p className="mt-4 text-gray-600 text-lg font-medium">
                Loading Dashboard...
            </p>

        </div>
    );
};

export default Loading;