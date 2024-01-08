import { GoogleLogin } from "react-google-login";


const clientId = "72464211646-0hiu8ls489tmfvm6dqcn8ut4323hrith.apps.googleusercontent.com"
function Login(){
    const onSuccess = (res) =>{
        
        alert('Login Success:')
        return(<div>
            
        </div>)
    }
    const onFailure = (res) =>{
        console.log('Login Failed:', res);
    }
    return(
        <div id="signinButton">
            <GoogleLogin
            clientId = {clientId}
            buttonText = "Sign in with Google"
            onSuccess = {onSuccess}
            cookiePolicy = {'single_host_origin'}
            isSignedIn = {true} />
        </div>
        )

}

export default Login;