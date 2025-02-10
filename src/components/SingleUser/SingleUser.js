import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
import { useGetSingleUserQuery, useUpdateUserMutation } from "./SingleUserSlice";
import { useDeleteUserMutation } from "./SingleUser";

export default function SingleBook(selectedUserId, setSelectedUserId) {
    const {id} = useParams();
    const {data, isSuccess, isLoading} = useGetSingleUserQuery(id);
    const [user, setUser] = useState([]);
    // const navigate = useNavigate();
    const [deleteUser] = useDeleteUserMutation(); 

    useEffect(() => {
        if(isSuccess) {
            setUser(data.user);
        }
    },[data]);

    const removeUser = async () =>{
        try{
            const token  = localStorage.getItem("token");
            const response = await deleteUser({id, token});
            // navigate("/account")
        }catch(error){
            console.error(error);
        }
    };




    let $details;
// No Book Selected
    if(!selectedUserId){
        $details = <p>Please select a user to see more details.</p>
    }
// A book has been selected, but results have not yet returned from the API
else if (isLoading) {
    $details = <p>Loading User information...</p>
}
// Display Book Selected
else{
    $details =(
        <>
        {/* <h3>
            {book.title} by {book.author}
        </h3>
        Description: <h4>{book.description}</h4>
        <h4> {book.available}</h4>
        <figure>
            <img src={book.coverimage} alt={book.name} />
        </figure> */}
    <div className="book">
        <button type="button" className="btn btn-primary " onClick={() => removeUser(user.id)}> Checkout </button>
        </div>  
        </>
    );
}
return(
    <aside>
        <h2>Selected User:</h2>
        {$details}
    </aside>
)

}