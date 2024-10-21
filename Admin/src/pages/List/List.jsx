import React, { useEffect, useState } from 'react'
import "./List.css"

const List = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch data from API
  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("http://localhost:5000/api/food/list")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const dataRes = await response.json()
      setData(dataRes.data)
    } catch (error) {
      console.error("Fetching error:", error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const DeleteData = async(_ids)=>{
    try {
      const Del = await fetch("http://localhost:5000/api/food/remove",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({id:_ids}),
        }
      )
      if (!Del.ok) {
        console.log("there was an error");
      }else{
        window.location.reload()
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData()  
  }, [])
  
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <div className="head">
        <p>S.No</p>
        <p>Image</p>
        <p>Name</p>
        <p>Price</p>
        <p>Category</p>
        <p>Action</p>
      </div>
      <hr />
      <div className="FetchedData">
        {data.map((item, index) => (
          <div key={item.id || index} className='items'>
            <p>{index + 1}</p>
            <img src={`http://localhost:5000/images/${item.image}`} alt={item.name} className='imgs' />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <p style={{cursor:"pointer"}} onClick={()=>{DeleteData(item._id)}}>X</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List