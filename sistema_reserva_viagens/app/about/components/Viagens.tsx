'use client'
import React, {useState, useEffect} from "react";


const Viagens =  () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);
    return (
        <div>
            {data.map((i: any) => (
                <p key={i.id}>{ i.title}</p>
            ))}
        </div>
    );
};
 
export default Viagens;