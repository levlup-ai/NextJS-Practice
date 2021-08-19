import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const errorPage = () => {
    const route = useRouter();
    useEffect(()=> {
        setTimeout(() => {
            route.push("/")
        }, 3000);
        
    },);
    return (
        <div>
            <h1>Page not found!</h1>
        </div>
    );
}

export default errorPage;