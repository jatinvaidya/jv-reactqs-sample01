import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const {
        loginWithRedirect
    } = useAuth0();
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const organization = params.get('organization');
    const invitation = params.get('invitation');
    console.info(`window.location.href: ${window.location.href}`);
    if (organization && invitation) {
        loginWithRedirect({
            organization,
            invitation
        });
    } else {
        loginWithRedirect();
    }
    return null;
};

export default Login;
