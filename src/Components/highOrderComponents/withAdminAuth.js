import useAdminAuth from "../../CustomHooks/useAdminAuth";

export default function WithAdminAuth({ children }) {
  return useAdminAuth() && children;
}
