import { useEffect, useState, Component } from 'react'
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
    }

    initFbSDK = () => {
        window.fbAsyncInit = () => {
            FB.init({
                appId: '135408438457379',
                cookie: true,
                xfbml: true,
                version: 'v10.0'
            });
            FB.AppEvents.logPageView();
            this.init()
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
        this._checkStatus()
            .then((res) => {
                this.setState({ connectStatus: res.status }, () => {
                    this._getProfile()
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

    _fbLogin = () => {
        return new Promise((resolve, reject) => {
            FB.login((response) => {
                response.status === 'connected' ? resolve(response) : reject(response);
            }, { scope: 'email' });
        });
    }

    _fbLogout = () => {
        return new Promise((resolve, reject) => {
            FB.logout((response) => {
                response.authResponse ? resolve(response) : reject(response);
            });
        });
    }

    _checkStatus = () => {
        return new Promise((resolve, reject) => {
            FB.getLoginStatus((response) => {
                response.status === 'connected' ? resolve(response) : reject(response);
            });
        });
    }

    _fbUnbind = () => {
        return new Promise((resolve, reject) => {
            FB.api("/me/permissions", "DELETE", (response) => {
                // response.success ? resolve(response) : reject(response)
                //最後一個參數傳遞true避免cache
                FB.getLoginStatus(function (res) {
                    response.status === 'connected' ? resolve(res) : reject(res);
                }, true);//強制刷新cache避免login status下次誤判
            });
        });
    }

    _getProfile = () => {
        return new Promise((resolve, reject) => {
            FB.api('/me', "GET", { fields: 'first_name, last_name, email' },
                response => response.error ? reject(response) : resolve(response)
            );
        });
    }

    getStatus = async () => {
        try {
            const res = await this._checkStatus()
            console.log(res)
        } catch (error) {
            console.log(`catch getStatus`, error)
        }

    }
    login = async () => {
        try {
            const res = await this._fbLogin()
            this.setState({ connectStatus: res.status })
            console.log(res)
        } catch (error) {
            this.setState({ connectStatus: error.status })
            console.log(`catch login`, error)
        }

    }
    logout = async () => {
        try {
            const res = await this._fbLogout();
            this.setState({ connectStatus: res.status })
            console.log(res)
        } catch (error) {
            this.setState({ connectStatus: error.status })
            console.log(`catch logout`, error)
        }

    }
    unbind = async () => {
        console.log('click unbind')
        try {
            const res = await this._fbUnbind()
            this.setState({ connectStatus: res.status })
            console.log(res)
        } catch (error) {
            this.setState({ connectStatus: error.status })
            console.log(`unbind error`, error)
        }
    }

    render() {
        const { connectStatus } = this.state;
        const isConnect = connectStatus === 'connected';
        const isLogout = connectStatus === 'not_authorized' || connectStatus === 'unknown';
        return (
            <>
                {isLogout && <p onClick={this.login}>Facebook Login</p>}
                <p onClick={this.getStatus}>Check Status</p>
                {isConnect && <p onClick={this.logout}>Log Out</p>}
                {isConnect && <p onClick={this.unbind}>Unbind Facebook</p>}
            </>
        );
    }
}

export default FbLogin