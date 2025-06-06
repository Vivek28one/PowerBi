import { Home, Truck, Clipboard, Logs, LogOut } from 'lucide-react'

export const data = {
    navMain: [
        {
            title: "Home",
            url: "/",
            icon: Home
        },
        {
            title: "Supplier",
            url: "/supplier",
            icon: Truck
        },
        {
            title: "Settings",
            url: "#",
            icon: Clipboard
        },

        {
            title: "Menu",
            url: "#",
            icon: Logs
        },
    ],
    navSecondary: [
        {
            title: "Logout",
            url: "#",
            icon: LogOut
        },
    ],
}

export const loginUrl = "https://login.28one-dev.com/2e410f86-1e25-4cc5-85fb-09829361437d/oauth2/v2.0/authorize?p=B2C_1A_SIGNUP_SIGNIN&client_id=fe063829-cdff-4c82-aa6d-bbde5b316b26&nonce=defaultNonce&scope=openid&response_type=id_token&prompt=login"
