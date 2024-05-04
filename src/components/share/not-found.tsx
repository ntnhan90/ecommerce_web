import { useNavigate } from "react-router-dom";

const NotFound = () =>{
    const navigate = useNavigate();
    return(
        <>
            <div onClick={() => navigate('/')}>
                BackHome
            </div>
        </>
    )
}

export default NotFound;