
const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

    <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <h1 className="text-4xl font-bold mb-6 text-center">
            Create an account
        </h1>

        <form className="space-y-4">

            <div>
                <label htmlFor="name">Name</label>

                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full border p-3 rounded-lg"
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>

                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full border p-3 rounded-lg"
                />
            </div>
            <div>
                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
                    Create Account
                </button>
            </div>

        </form>

    </div>

</div>
    )
}

export default Register;