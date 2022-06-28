import React, { useEffect } from "react";
import { useLinkClickHandler, useParams } from "react-router-dom";
import styles from "./DoctorProfile.module.css"
import LineChart from "../../Chart/LineChart/Linechart/LineChart";
import List from "../../List/List";
import ProfileImage from "../../ProfileImage/ProfileImage";
import Shift from "../../Shift/Shift";
const DoctorProfile=(props)=>{
    const params=useParams();
    let id=params.id
    useEffect(()=>{
        // get request from database
        console.log(id);
    },[])
    console.log(params.id)
   
    const doctor=[
    {
        id:7,
        name:"Dr. Ashraful",
        degree:"MBBS FCPS FRCS",
        department:"orthopadics",
        image:"  https://images.unsplash.com/photo-1501705388883-4ed8a543392c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }]
    const shift={
        from:"12:20",
        to:"05:00"
    }
    let auth="admin"
    const header=[
        {name:"No."},
        {name:"Name"},
        {name:"Date"},
        {name:"Address"},
        {name:"Payment"}
    ]
    const list=[
        {
            id:1,
            name:"Shanto",
            date:"02/03/22",
            address:"Sherpur",
            payment:"$100"
        },
        {
            id:2,
            name:"Shanto",
            date:"02/03/22",
            address:"Sherpur",
            payment:"$100"
        },
        {
            id:3,
            name:"Shanto",
            date:"02/03/22",
            address:"Sherpur",
            payment:"$100"
        },
        {
            id:4,
            name:"Shanto",
            date:"02/03/22",
            address:"Sherpur",
            payment:"$100"
        },
        {
            id:5,
            name:"Shanto",
            date:"02/03/22",
            address:"Sherpur",
            payment:"$100"
        }

    ]
    return(
        <div className={styles.container}>
          <ProfileImage person={doctor}/>
            <div className={styles.chartContainer}>
                <div className={styles.chart}>
                    <LineChart label={"Patient"}/>
                </div>
                <Shift shift={shift} id={id}/>
            </div> 
            <div  className={styles.list}>
                <List list={list} header={header}/>
            </div>
        </div>
    )
}
export default DoctorProfile;
