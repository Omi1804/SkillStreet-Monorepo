import { Signup } from "@repo/ui/index";
import axios from "axios";

//if this is the adminside app then onclick should be do a axios post req to admin route and if its the clientside then onclick do same req for client
const Signin = () => {
  async function hancleClick(email: string, password: string) {
    try {
      const response = await axios.post("/api/signin", {
        email,
        password,
      });
      const data = await response.data;

      console.log(data);

      if (data.message === "Admin created successfully") {
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Signup onClick={hancleClick} />
    </div>
  );
};

export default Signin;
