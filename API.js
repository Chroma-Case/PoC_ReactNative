export default class Auth {
    constructor() {
        this.auth_code = undefined;
        this.acces_token = undefined;
        this.refresh_token = undefined;
    }

    static redirect_uri = 'exp://127.0.0.1:19000'
}