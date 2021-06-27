class Auth {
    constructor() {
        this.authenticated = false
    }

    component() {
        this.setState( { authenticated: JSON.parse(localStorage.getItem("auth")) } )
    }

    login(callback) {
        this.authenticated = true;
        localStorage.setItem("auth","true")
        callback();
    }

    logout(callback) {
        this.authenticated = false;
        callback();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();