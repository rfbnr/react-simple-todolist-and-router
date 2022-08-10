
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const checkLogin = true;

        if (checkLogin) {
            navigate("/dashboard");
        }

    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="username"/>
            <input type="password" name="password" />
            <button>Submit</button>
        </form>
    )
}

export default Login;
