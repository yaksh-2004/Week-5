import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-5 text-center text-white">
        Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">

          <Button variant="primary text-center m-auto" onClick={handleLogout} >
            Log out
          </Button>

      </div>
    </>
  );
};

export default Home;