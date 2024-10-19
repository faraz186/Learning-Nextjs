async function getUsers(id)
{
    let data = await fetch(`http://localhost:3000/api/users/${id}`);   
    data = await data.json();
    return data.result;   
}

export default async function Page({params})   
{
    const users = await getUsers(params.userid);

    return(
        <div>  
            <h1>User Details..</h1>
            <h4>Name: {users.name}</h4>   
            <h4>Age: {users.age}</h4>  
            <h4>Email: {users.email}</h4>
        </div>
    )
}
