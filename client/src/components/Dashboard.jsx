import { useEffect, useState } from "react";
import axios from "axios";
import SolvedProblems from "./SolvedProblems";
import Card from "./Card";
import ContestActivity from "./ContestActivity";

const Dashboard = () => {

    const [problems, setProblems] = useState([]);

    useEffect(() => {

        const fetchProblems = async () => {

            try {

                const response = await axios.get(
                    "http://localhost:3000/api/users/codeforces",
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );

                setProblems(response.data.submissions);

            } catch (error) {
                console.error("Error fetching problems:", error);
            }
        };

        fetchProblems();

    }, []);

    return (
        <div className="flex-1 bg-gray-100 min-h-screen p-6">
            <Card problems={problems} />
            <SolvedProblems problems={problems} />
            <ContestActivity />
        </div>
    );
};

export default Dashboard;