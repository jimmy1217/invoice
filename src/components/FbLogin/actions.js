export function checkLoginState(fn) {               // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function (response) {   // See the onlogin handler
        fn(response);
    });
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




export function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', "GET", { fields: 'last_name,first_name,name,email' }, function (response) {
        console.log('Successful login for: ' + response.name);
        console.log(`res`, response)
        document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
    });
}

export function FBLogout() {
    FB.logout(function (response) {
        console.log(response)
        // user is now logged out
    });
}

export function MyFBLogin() {
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

export function Del_FB_App() {
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
