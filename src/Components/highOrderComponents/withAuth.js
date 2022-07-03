import useAuth from "../../CustomHooks/useAuth";

export default function WithAuth({ children }) {
  return useAuth() && children;
}
