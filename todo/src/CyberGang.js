import { useEffect, useState } from "react";

function CyberGang() {
    const [List, SetList] = useState([]);

    useEffect(() => {
        fetch("http://localhost/sas-to-do-list/todo/php/crud.php?get_data=1")
            .then((response) => {
                console.log(response);
                return response.json();
            }).then((data) => {
                console.log(data);
                SetList(data);
            })
    }, []);

    return <ul>
        {List.map((item) => {
            return <>
                <h2>{item.title}</h2>
                <p>{item.descrip}</p>
            </>
        })}
    </ul>
}

export default CyberGang;