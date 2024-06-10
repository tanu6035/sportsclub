import {useForm} from "react-hook-form";
import {useEffect,useState} from "react";
import Banner from "../../components/Banner.jsx";
function Category(){
    const {
        register,
        handleSubmit
    }= useForm()

    async function onSubmit(data){
        console.log(data)
        let response= await fetch("http://localhost:5000/category",{
            method: 'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(data)
        })
        response = await response.json()
        console.log(response)

        if(response.error !=""){        // refreshing after insertion so to show data into table
            alert(response.error)
        }else{
            ReadCategory();
        }
    }

    const [category,setCategory]= useState([]);
    async function ReadCategory(){
        let url="http://localhost:5000/category";
        let response =await fetch(url);
        response =await response.json();
        console.log(response)
        if(response.error !=""){
            alert(response.error)
        }else{
            setCategory(response.records)
        }
    }

    useEffect(()=>{
        ReadCategory();
    },[]);

    async function DeleteCategory(id){
        let url =`http://localhost:5000/category/${id}`;
        let response = await fetch(url,{method:"DELETE"});
        response=await response.json()
        console.log(response)
        if(response.error != "")
        {
            alert(response.error)
        }else{
            ReadCategory();
        }
    }
    return(
        <>
            <Banner pageTitle="category"></Banner>
            <div >
                <h1>Category</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("categoryName", {required: "This field is required"})}/>
                    <button>Add Category</button>
                </form>
                <br/>
                <div>
                    <table border="1">
                        <thead>
                        <th>SR. No</th>
                        <th>Category Name</th>
                        <th>Delete</th>
                        </thead>
                        <tbody>
                        {category.map((value, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.categoryName}</td>
                                <td>
                                    <button type="botton" onClick={() => DeleteCategory(value.id)}>Delete</button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Category;