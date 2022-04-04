import { useEffect, useState } from "react";

const useProduct = () => {
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        fetch('analysis.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])
    return chartData;
}

export default useProduct;