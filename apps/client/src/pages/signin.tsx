import { Signup } from "@repo/ui/index";
import axios from "axios";

//if this is the adminside app then onclick should be do a axios post req to admin route and if its the clientside then onclick do same req for client
const Signin = () => {
  async function hancleClick(email: string, password: string) {
    const response = await axios.post("/api/signin", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
  }
  return (
    <div>
      <Signup onClick={hancleClick} />
    </div>
  );
};

export default Signin;
