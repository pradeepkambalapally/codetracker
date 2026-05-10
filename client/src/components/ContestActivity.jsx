const ContestActivity = () => {
    return (
                <div className="bg-white p-6 rounded-xl shadow mt-8">

  <h2 className="text-2xl font-bold mb-4">
    Recent Contest Activity
  </h2>

  <div className="space-y-4">

    <div className="flex items-center justify-between border-b pb-4">

      <div>
        <h3 className="font-semibold">
          Codeforces Round 1000
        </h3>

        <p className="text-gray-500 text-sm">
          Rank: 120
        </p>
      </div>

      <div className="text-green-500 font-bold">
        +52
      </div>

    </div>

    <div className="flex items-center justify-between border-b pb-4">

      <div>
        <h3 className="font-semibold">
          Codeforces Round 999
        </h3>

        <p className="text-gray-500 text-sm">
          Rank: 240
        </p>
      </div>

      <div className="text-red-500 font-bold">
        -18
      </div>

    </div>

  </div>

</div>
    )
}

export default ContestActivity;