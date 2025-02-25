import { useBoundStore } from "@/store";

export function doLogin(accessToken: string) {
    useBoundStore.setState({
        accessToken,
    });
}

export function doLogout() {
    useBoundStore.setState({
        accessToken: '',
    });
}