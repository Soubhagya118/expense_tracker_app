import React,{useCallback, useEffect, useRef, useState} from 'react'

const Expanses = () => {
    const inputMoney =useRef();
    const inputCat=useRef();
    const inputDes= useRef();
    const [expanseData,setExpanseData] =useState([]);



const getData=useCallback( async()=>{
  
fetch('https://expensetrackerapp-ca61f-default-rtdb.firebaseio.com/expense.json',{
  method:'GET',
  headers:{
    'Content-Type':'application/json'
  }
}).then(res=>{
  if(!res.ok){
    alert('...error occur in get request');
    throw new Error('...error occur in get request')
  }
  return res.json();
}).then(data=>{
  const dataList=[];
  for(const key in data){
    dataList.push({
      id:key,
      money:data[key].money,
      description:data[key].description,
      catagorey:data[key].catagorey
    })
  }
  setExpanseData([...dataList]);

  console.log("expense tracker get data",dataList);
}).catch(err=>{
  console.log(err.message);
})

},[])


    const expenseHandler=async(e)=>{
        e.preventDefault();
        const money1=inputMoney.current.value;
        const inputCat1 = inputCat.current.value;
        const inputDes1=inputDes.current.value;


fetch('https://expensetrackerapp-ca61f-default-rtdb.firebaseio.com/expense.json',{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify({
    money:money1,
    description:inputDes1,
    catagorey:inputCat1
  })
}).then(res=>{
  if(!res.ok){
    alert('...error occur in post request');
    throw new Error('...error occur in post request')
  }
  return res.json();
}).then(data=>{
  console.log("expense tracker post data",data);
  getData();
}).catch(err=>{
  console.log(err.message);
})
};

useEffect(()=>{
  getData()
},[]);

  return (
    <section className='w-xl justify-center my-5'>
      <form onSubmit={expenseHandler} className='flex justify-center flex-col w-60 m-auto gap-3 border-2 border-black-30 p-5 shadow-xl'>
        <label htmlFor='money'>Money Spent:-</label>
        <input type='number' name='money' id='money' className='border-2 border-blue-300 rounded-md' ref={inputMoney} required/>

        <label htmlFor='des'>Expanse description:-</label>
        <input type='text' id='des' name='des' className='border-2 border-blue-300 h-20 rounded-md' ref={inputDes} required/>

        <div className='flex justify-between'>
        <label htmlFor='cata'>Catagorey:-</label>
    
        <select name='cata' className='border-2 border-blue-400 rounded-md' ref={inputCat}>
            <option value='Food'>Food</option>
            <option value='Petrol'>Petrol</option>
            <option value='Salary'>Salary</option>
        </select>
        </div>
        <button className='border-2 border-blue-900 bg-blue-900 text-white rounded-xl hover:bg-white hover:text-blue-900'>submit</button>
      </form>
      <div className='w-auto m-auto'>
      <ul className='m-auto'>
      {/* {console.log("exx",expanseData)} */}
      {expanseData?.map((e)=><li key={e.id} className='flex gap-5 border-2 border-blue-100 m-auto'>

        <p>money:- {e.money}</p>
        <p>description:- {e.description}</p>
        <p>catagorey:- {e.catagorey}</p>

      </li>)}
      </ul>
       
      </div>
    </section>
  )
}

export default Expanses
