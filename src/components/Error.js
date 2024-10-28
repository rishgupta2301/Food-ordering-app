import {useRouteError} from "react-router-dom"

const Error = () => {

    const err = useRouteError();
    console.log(err)

    return(
        <div>
            Oops!! Something went wrong!
            <h5>{err.status + " : " + err.statusText}</h5>
        </div>
    )
}

export default Error