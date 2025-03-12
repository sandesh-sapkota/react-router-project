import React, {useEffect, useState} from 'react'

function Github() {
    const [username, setUsername] = useState("");
    const [data, setData] = useState({});

    const fetchGithubData = (user) =>{
        if(!user) return;
        fetch(`https://api.github.com/users/${user}`)
        .then(response=> response.json())
        .then(data=> setData(data))
        .catch(error => console.error("Error fetching data:", error));
        
    }

    const handleInputChange = (e) =>{
        setUsername(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetchGithubData(username);
    }
 

    
  return (
    <>
    <div className='text-center m-3 bg-gray-600 text-white text-3xl p-5'>
       <form>
       <label htmlFor="git-name">Github Login Name:</label>
        <input type="text" placeholder='Enter GitHub Username' name="git-name" id="git-name" className='bg-white text-black my-2 sm:my-0 text-xl h-13 px-2 max-w-65 sm:max-w-75 lg:max-w-90 mx-0 sm:mx-2 rounded-xl' value={username}
        onChange={handleInputChange}
        />
          <button type="submit" className="cursor-pointer  bg-blue-600 my-2 text-white hover:bg-blue-700 px-4 py-2 ml-2 text-xl rounded-2xl"  
          onClick={handleSubmit}>
            Fetch Data
          </button>
       </form>
    </div>
    <div className='text-center m-3 bg-pink-600 text-white text-3xl p-5'>Github Full Name: {data.name}
        <img src={data.avatar_url} alt="Github profile picture" />
    </div>
    <div className='text-center m-3 bg-orange-600 text-white text-3xl p-5'>Github Id created Date: {data.created_at}</div>
    <div className='text-center m-3 bg-yellow-600 text-white text-3xl p-5'>Github Followers: {data.followers} </div>
    <div className='text-center m-3 bg-green-600 text-white text-3xl p-5'>Github Following: {data.following} </div>
    </>
  )
}

export default Github