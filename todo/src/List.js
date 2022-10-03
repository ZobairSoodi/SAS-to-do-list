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


    return <div className="list_cont">
        {items.map((item) => {
            return <div className="list_div" key={item["id"]}>
                <input type="text" disabled={true} className="title" defaultValue={item["title"]}/>
                <input type="text" disabled={true} className="descrip" defaultValue={item["descrip"]}/>
                <select disabled={true} >
                    <option value="0">doing</option>
                    <option value="1">done</option>
                </select>
                <input type="button" idvalue={item["id"]} defaultValue="Edit" onClick={(e)=>{
                    var btn = e.target;
                    var title = btn.parentElement.children[0];
                    var descrip = btn.parentElement.children[1];
                    var state = btn.parentElement.children[2];
                    if(btn.defaultValue === "Edit"){
                        btn.defaultValue = "Save";
                        title.removeAttribute("disabled");
                        descrip.removeAttribute("disabled");
                        state.removeAttribute("disabled");
                    }
                    else{
                        btn.defaultValue = "Edit";
                        title.setAttribute("disabled", true);
                        descrip.setAttribute("disabled", true);
                        state.setAttribute("disabled", true);
                        var id = btn.getAttribute("idvalue");
                        var form = new FormData();
                        form.append("title", title.value);
                        form.append("descrip", descrip.value);
                        form.append("descrip", descrip.value);
                        form.append("state", state.value);
                        form.append("id", id);
                        form.append("edit","edit");
                        fetch("http://localhost/sas-to-do-list/todo/php/crud.php",{
                            method:"POST",
                            body: form
                        }).then((response)=>{
                            console.log(response);
                            return response.text();
                        }).then((data)=>{
                            console.log(data);
                        })
                    }
                }}/>

            </div>
        })}
    </div>
}

export default List;