import {React,Component, useState,useEffect} from 'react'
import { Spin, Alert } from 'antd';

const SeriesList = () =>{
    const [isloading,setisloading] = useState(true)
    const [series, setSeries] = useState([]);
    const getSeries = async() =>{
        const url = "http://www.omdbapi.com/?s=Sherlock&apikey=ebe923f6"

        const response = await fetch(url);
        const responseJson = await  await response.json();

        console.log(responseJson);
        setSeries(responseJson.Search);
        setisloading(false)
    }
    useEffect(()=>{
        getSeries();
    },[]);

        if(isloading){
            return <Spin tip="Loading...">
            <Alert
              message="Loading"
              description="Coming soon"
              type="info"
            />
          </Spin>
        }else{
            return (
                series.map((series,index) =>(
                    <div style = {{float:'left', margin:'20px'}}>
                        <img src = {series.Poster} alt = 'series'></img>
                    </div>

                ))
            )
        }
}
export default SeriesList;