import "normalize.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import "./../src/css/global.css"
import Head from 'next/head'

if (process.browser) {
    window.fbAsyncInit = function () {
        FB.init({
            appId: '{app-id}',
            cookie: true,                     // Enable cookies to allow the server to access the session.
            xfbml: true,                     // Parse social plugins on this webpage.
            version: '{api-version}'           // Use this Graph API version for this call.
        });
        FB.getLoginStatus(function (response) {   // Called after the JS SDK has been initialized.
            statusChangeCallback(response);        // Returns the login status.
        });
    };
}

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
    FB.api('/me', function (response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
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



                <Component {...pageProps} />
            </div>

        </div>
    )
}

export default MyApp