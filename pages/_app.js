import "normalize.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import "./../src/css/global.css"
import Head from 'next/head'

function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
        testAPI();
    } else {                                 // Not logged into your webpage or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this webpage.';
    }
}

function checkLoginState() {               // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function (response) {   // See the onlogin handler
        statusChangeCallback(response);
    });
}


function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', "GET", { fields: 'last_name,first_name,name,email' }, function (response) {
        console.log('Successful login for: ' + response.name);
        console.log(`res`, response)
        document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
    });
}

function FBLogout() {
    FB.logout(function (response) {
        console.log(response)
        // user is now logged out
    });
}

function MyFBLogin() {
    FB.getLoginStatus(function (res) {
        console.log(`status:${res.status}`);//Debug
        if (res.status === "connected") {
            let userID = res["authResponse"]["userID"];
            console.log("用戶已授權您的App，用戶須先revoke撤除App後才能再重新授權你的App");
            console.log(`已授權App登入FB 的 userID:${userID}`);
            testAPI();
        } else if (res.status === 'not_authorized' || res.status === "unknown") {
            //App未授權或用戶登出FB網站才讓用戶執行登入動作
            FB.login(function (response) {

                //console.log(response); //debug用
                if (response.status === 'connected') {
                    //user已登入FB
                    //抓userID
                    let userID = response["authResponse"]["userID"];
                    console.log(`已授權App登入FB 的 userID:${userID}`);
                    testAPI();

                } else {
                    // user FB取消授權
                    alert("Facebook帳號無法登入");
                }
                //"public_profile"可省略，仍然可以取得name、userID
            }, { scope: 'email' });
        }
    });
}

function Del_FB_App() {
    FB.getLoginStatus(function (response) {//取得目前user是否登入FB網站
        //debug用
        console.log(response);
        if (response.status === 'connected') {
            //抓userID
            //let userID = response["authResponse"]["userID"];
            FB.api("/me/permissions", "DELETE", function (response) {
                console.log("刪除結果");
                console.log(response); //gives true on app delete success
                //最後一個參數傳遞true避免cache
                FB.getLoginStatus(function (res) { }, true);//強制刷新cache避免login status下次誤判

            });

        } else {
            console.log("無法刪除FB App");
        }
    });

}


function MyApp({ Component, pageProps }) {

    return (
        <div>
            <Head>
                <title>Invoice</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#00aba9" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <script async defer crossorigin="anonymous" src="https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v10.0&appId=135408438457379" nonce="HlDwQEUp"></script>
            </Head>
            <div>
                <div id="fb-root"></div>
                <div className="fb-login-button"
                    data-width=""
                    data-size="large"
                    data-button-type="continue_with"
                    data-layout="rounded"
                    data-auto-logout-link="true"
                    data-use-continue-as="false">
                </div>
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
                <Component {...pageProps} />
            </div>

        </div>
    )
}

export default MyApp