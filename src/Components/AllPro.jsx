import React,{useState} from 'react'
import data from './DataPro'
export default function AllPro() {

   const [noOfEle , setnoOfEle] =  useState(3);
   const loadMore =() =>{
    setnoOfEle(noOfEle+noOfEle);
   }
   const slice = data.cardDate.slice(0,noOfEle);
  return (
    <>   
      <section className='container'   style={{marginBottom:"40px"}}>
      <div className="main allProject">
          <h1 className="text-white ser-head  ">Our Projects</h1>
           <div className="row main  ">
                {slice.map((item,index)=>{
                  return(
                    
                    <div className="col-md-4  mt-5 card-tran">
                    <img
                      src={item.img} alt=""/>
                    <button className=" ml-2  btn btn-sm btn-success text-white w-100 ">{item.btn}</button>
                    <h3 className="text-white mt-2 ml-2">{item.title}</h3>
                  </div> 
                 
                  )
                })}
           </div> 
           </div>
               <button onClick={()=>loadMore()} className='btn btn-dark d-block w-100 mt-3'>Load More</button>
      </section>
  </>
  )
}
