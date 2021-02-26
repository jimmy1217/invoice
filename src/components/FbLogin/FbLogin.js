import { useEffect } from 'react'
import { checkLoginState, testAPI, MyFBLogin, FBLogout, Del_FB_App, statusChangeCallback } from './actions'


const FbLogin = () => {
    useEffect(() => {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '135408438457379',
                cookie: true,
                xfbml: true,
                version: 'v10.0'
            });
            FB.AppEvents.logPageView();
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        console.log('did mounts')
    }, [])
    return <>
        <div id="status"></div>
        <div onClick={() => {
            FB.getLoginStatus(function (response) {
                statusChangeCallback(response);
            });
        }}>check status</div>
        <div onClick={() => { checkLoginState() }}>checkLoginState</div>
        <div onClick={() => { testAPI() }}>test api</div>
        <div onClick={() => { MyFBLogin() }}>my fb login</div>
        <div onClick={() => { FBLogout() }}>FB logout</div>
        <div onClick={() => { Del_FB_App() }}>unbind fb</div>
    </>
}

export default FbLogin