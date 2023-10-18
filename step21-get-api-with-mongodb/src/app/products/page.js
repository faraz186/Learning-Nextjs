const getProducts = async ()=>{
    let data = await fetch("https://localhost:3000/api/products");
    data = await data.json();
    if(data.sucess){
        return data.result
    }
    else{
        return {success:false}
    }
}

export default async function Page()
{
    const products = await getProducts();
    return(
        <>
            <h1>Product Page</h1>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Company</td>
                        <td>Category</td>

                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((item)=>{
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.color}</td>
                                <td>{item.company}</td>
                                <td>{item.category}</td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}