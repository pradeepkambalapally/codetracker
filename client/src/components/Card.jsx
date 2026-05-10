

const Card = ({problems}) => {
    return (
        <>
                   <div className="grid grid-cols-4 gap-4 mb-8">

            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-gray-500">Total Solved</h2>
                <p className="text-3xl font-bold">{problems.length}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-gray-500">Contests Attended</h2>
                <p className="text-3xl font-bold">0</p>
            </div>

             <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-gray-500">Highest Rating</h2>
                <p className="text-3xl font-bold">Unrated</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-gray-500">Current Streak</h2>
                <p className="text-3xl font-bold">5 days</p>
            </div>


        </div>
        </>
    )
}


export default Card;