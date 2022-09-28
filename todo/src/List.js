import { useEffect, useState } from "react";

function List(params) {
    // var mylist = [
    //     {
    //         title: "title1",
    //         descrip: "descrip1"
    //     },
    //     {
    //         title: "title2",
    //         descrip: "descrip2"
    //     },
    //     {
    //         title: "title3",
    //         descrip: "descrip3"
    //     },
    //     {
    //         title: "title4",
    //         descrip: "descrip4"
    //     }
    // ];

    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch("http://localhost/sas-to-do-list/todo/php/crud.php?get_data=1", {
            method: "GET"
        }).then((res)=>{
            console.log(res);
            return res.json();
        }).then((data)=>{
            console.log(data);
            setItems(data);
        })
    }, [])


    return <div>
        {items.map((item) => {
            return <div key={item["id"]}>
                <h1>{item["title"]}</h1>
                <p>{item["descrip"]}</p>
            </div>
        })}
    </div>
}

export default List;