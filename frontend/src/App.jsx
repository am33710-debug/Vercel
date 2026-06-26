import React,{useState,useEffect} from 'react';


function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}`);
      const resData = await res.json();
      if (resData)
        setData(resData);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return(
    <div id='app'>
      <h1>Connecting to Vercel</h1>
      <div id='data-container' style={{
        display: "flex",
        flexDirection: "column",
      }}>

        {data && data.map((d) => <span key={d.id}>
            {d.id}, {d.name}
          </span>)}
      </div>
    </div>
  )
}

export default App;