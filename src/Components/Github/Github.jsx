import React,{useState,useEffect} from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/torvalds")
        .then((response) => response.json())
        .then((data)=>setData(data))
    }, [])
  return (  
    <div className='bg-gray-500 text-3xl text-white p-4'>
      Github Followers : {data.followers}
      <div className='flex p-4 m-3 justify-center'>
        <img src={data.avatar_url} alt="Github Picture" className='m-3 rounded-3xl' />
      </div>
    </div>
  )
}

export default Github


