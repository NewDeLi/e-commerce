import { useContext, useEffect } from "react";
import { AuthContext } from "../Context Api/AuthContext";
import checkUserIsAdmn from "../Components/Utils/checkUserAdmin";
import { useNavigate } from "react-router-dom";

export default function useAdminAuth() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkUserIsAdmn(currentUser)) {
      navigate("/login");
    }
  }, [currentUser]);

  return currentUser;
}
