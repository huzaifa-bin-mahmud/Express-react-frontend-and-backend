import axios from "axios";
import { useEffect, useState } from "react";

const AllStudent = () => {
  const [std, setStd] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/all-student")
      .then((res) => {
        console.log("Data from server:", res.data);
        setStd(res.data);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-5 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      {std.map((s) => (
        <div key={s.id} className=" border rounded p-4 ">{s.name}</div>
      ))}
    </div>
  );
};

export default AllStudent;
