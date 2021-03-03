import { useEffect, useState, Component } from 'react'

export function checkLoginState(fn) {               // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function (response) {   // See the onlogin handler
        fn(response);
    });
}


function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
        getProfile();
    } else {                                 // Not logged into your webpage or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this webpage.';
    }
}




export function getProfile(fn) {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', "GET", { fields: 'last_name,first_name,name,email' }, fn);
}

export function FBLogout() {
    FB.logout(function (response) {
        console.log(response)
        // user is now logged out
    });
}

export function FBLogin() {
    FB.getLoginStatus(function (res) {
        console.log(`status:${res.status}`);//Debug
        if (res.status === "connected") {
            let userID = res["authResponse"]["userID"];
            console.log("用戶已授權您的App，用戶須先revoke撤除App後才能再重新授權你的App");
            console.log(`已授權App登入FB 的 userID:${userID}`);
            getProfile();
        } else if (res.status === 'not_authorized' || res.status === "unknown") {
            //App未授權或用戶登出FB網站才讓用戶執行登入動作
            FB.login(function (response) {

                //console.log(response); //debug用
                if (response.status === 'connected') {
                    //user已登入FB
                    //抓userID
                    let userID = response["authResponse"]["userID"];
                    console.log(`已授權App登入FB 的 userID:${userID}`);
                    getProfile();

                } else {
                    // user FB取消授權
                    alert("Facebook帳號無法登入");
                }
                //"public_profile"可省略，仍然可以取得name、userID
            }, { scope: 'email' });
        }
    });
}

export function fb_login() {
    FB.login(function (response) {
        if (response.status === 'connected') {
            let userID = response["authResponse"]["userID"];
            console.log(`已授權App登入FB 的 userID:${userID}`);
            getProfile();

        } else {
            // user FB取消授權
            alert("Facebook帳號無法登入");
        }
        //"public_profile"可省略，仍然可以取得name、userID
    }, { scope: 'email' });
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
class FbLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connectStatus: false,
            name: '',
            email: '',
            id: '',
        }
    }
    componentDidMount() {
        this.initFbSDK()
        this.init();
    }

    initFbSDK = () => {
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
    }

    init = async () => {
        this.checkStatus()
            .then((res) => {
                this.setState({ connectStatus: res.status }, () => {
                    this.getProfile()
                        .then(profileRes => {
                            console.log(profileRes)
                        })
                        .catch(profileErr => {
                            console.log('get profile error')
                        })
                })
            })
            .catch(err => {
                this.setState({ connectStatus: err.status })
                console.log(err)
                console.log('disconnect')
            })
    }

    fbLogin = () => {
        return new Promise((resolve, reject) => {
            FB.login((response) => {
                response.status === 'connected' ? resolve(response) : reject(response);
            }, { scope: 'email' });
        });
    }

    fbLogout = () => {
        return new Promise((resolve, reject) => {
            FB.logout((response) => {
                response.authResponse ? resolve(response) : reject(response);
            });
        });
    }

    checkStatus = () => {
        return new Promise((resolve, reject) => {
            FB.getLoginStatus((response) => {
                response.status === 'connected' ? resolve(response) : reject(response);
            });
        });
    }



    getProfile = () => {
        return new Promise((resolve, reject) => {
            FB.api('/me', "GET", { fields: 'first_name, last_name, email' },
                response => response.error ? reject(response) : resolve(response)
            );
        });
    }



    getStatus = async () => {
        try {
            const res = await this.checkStatus()
            console.log(res)
        } catch (error) {
            console.log(`catch getStatus`, error)
        }

    }
    login = async () => {
        try {
            const res = await this.fbLogin()
            this.setState({ connectStatus: res.status })
            console.log(res)
        } catch (error) {
            this.setState({ connectStatus: error.status })
            console.log(`catch login`, error)
        }

    }
    logout = async () => {
        try {
            const res = await this.fbLogout();
            this.setState({ connectStatus: res.status })
            console.log(res)
        } catch (error) {
            this.setState({ connectStatus: error.status })
            console.log(`catch logout`, error)
        }

    }

    render() {
        const { connectStatus } = this.state;
        console.log(connectStatus)
        return (
            <>
                {connectStatus === 'not_authorized' || connectStatus === 'unknown' && <p onClick={this.login}>Facebook Login</p>}
                <p onClick={this.getStatus}>Check Status</p>
                {connectStatus === 'connected' && <p onClick={this.logout}>Log Out</p>}
                {<p>Log Out</p> && <p>Unbind Facebook</p>}
            </>
        );
    }
}



// const FbLogin = () => {
//     const [connect, setConnect] = useState(false)
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [id, setId] = useState('')

//     useEffect(() => {
//         window.fbAsyncInit = function () {
//             FB.init({
//                 appId: '135408438457379',
//                 cookie: true,
//                 xfbml: true,
//                 version: 'v10.0'
//             });
//             FB.AppEvents.logPageView();
//         };

//         (function (d, s, id) {
//             var js, fjs = d.getElementsByTagName(s)[0];
//             if (d.getElementById(id)) { return; }
//             js = d.createElement(s); js.id = id;
//             js.src = "https://connect.facebook.net/en_US/sdk.js";
//             fjs.parentNode.insertBefore(js, fjs);
//         }(document, 'script', 'facebook-jssdk'));
//         console.log('did mounts')

//         checkLoginState((res) => {
//             setConnect(res.status)
//             if (res.status === 'connected') {
//                 getProfile(function (response) {
//                     setEmail(response.email)
//                     setName(response.name)
//                     console.log('Successful login for: ' + response.name);
//                     console.log(`res`, response)
//                 })
//             }
//         })



//     }, [])
//     return <>
//         <div id="status"></div>
//         <div onClick={() => {
//             // FB.getLoginStatus(function (response) {
//             //     statusChangeCallback(response);
//             // });
//         }}>check status</div>


//         <div onClick={() => { checkLoginState() }}>checkLoginState</div>
//         <div onClick={() => { testAPI() }}>test api</div>


//         <div onClick={() => { Del_FB_App() }}>unbind fb</div>

//         <hr />
//         <div>connect:{String(connect)}</div>
//         <div>name:{name}</div>
//         <div>email:{email}</div>
//         <div>id:{id}</div>
//         <br />
//         {connect !== 'connected'
//             ? <div onClick={() => { FBLogin() }}>my fb login</div>
//             : <div onClick={() => { FBLogout() }}>FB logout</div>
//         }

//     </>
// }

export default FbLogin