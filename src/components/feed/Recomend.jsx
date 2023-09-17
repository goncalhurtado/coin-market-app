import React, { useEffect, useState } from "react";
import UserFollow from "./UserFollow";
import { getUser } from "../../helpers/feedHelpers/getUser";

const Recomend = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let users1 = await getUser(4);
        setUsers(users1);
      } catch (error) {
        console.error("error", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="card card-primary mt-3 pt-3 pb-3">
      <h6 className="text-start ms-3 ">Cuentas recomendadas</h6>
      <ul className="m-0 p-0 text-start">
        {users.map((data) => {
          return <UserFollow userData={data} key={data.id} />;
        })}
      </ul>
    </div>
  );
};

export default Recomend;
