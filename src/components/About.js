import { Outlet } from "react-router-dom"

const About = ()  => {
    return(
        <>
        <h1>
            About Us Page!!
        </h1>
        <Outlet /> {/* this outlet is being used as the profile page is the children of about page which is 
        there in the config file in  App.j*/}
        </>
    )
}

export default About