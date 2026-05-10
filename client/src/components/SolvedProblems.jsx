

const SolvedProblems = ({ problems }) => {
    return (
                <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-2xl font-bold mb-4">
               Recent Solved Problems
            </h2>

             <table className="w-full">

             <thead>
            <tr className="text-left border-b">

            <th className="py-3">Problem</th>

            <th className="py-3">Rating</th>

            <th className="py-3">Tags</th>

           <th className="py-3">Solved At</th>

      </tr>
    </thead>

    <tbody>

      {
        problems.map((problem, index) => (
            <tr key={index} className="border-b">

        <td className="py-3">
          {problem.problemName}
        </td>

        <td className="py-3">
          {problem.rating}
        </td>

        <td className="py-3">
          {problem.tags.join(", ")}
        </td>

        <td className="py-3">
          {problem.solvedAt}
        </td>

      </tr>
        ))
      }

     

    </tbody>

  </table>

</div>
    )
}

export default SolvedProblems;