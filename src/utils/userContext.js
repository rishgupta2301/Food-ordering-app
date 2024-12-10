import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Dummy Name",
        email:"dummy@gmail.com"
    }
})

UserContext.displayName="UserContext"; // so this name can be tracked by the react-dev-tools

export default UserContext;