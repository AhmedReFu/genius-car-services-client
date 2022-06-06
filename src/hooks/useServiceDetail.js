import { useEffect, useState } from "react";

const useServiceDetail = serviceId => {

    const [service, setServices] = useState({});
    useEffect(() => {
        const url = `https://quiet-earth-49744.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [serviceId]);
    return [service];
}
export default useServiceDetail;