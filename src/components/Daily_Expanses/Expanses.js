import React,{useRef, useState} from 'react'

const Expanses = () => {
    const inputMoney =useRef();
    const inputCat=useRef();
    const inputDes= useRef();
    const [expanseData,setExpanseData] =useState([]);

    const expenseHandler=(e)=>{
        e.preventDefault();
        const money1=inputMoney.current.value;
        const inputCat1 = inputCat.current.value;
        const inputDes1=inputDes.current.value;

console.log("expanses data",money1,inputCat1,inputDes1);
setExpanseData([...expanseData,{
    money:money1,
    description:inputDes1,
    catagorey:inputCat1,
    id:Math.random()
}])
    };

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
      {console.log("exx",expanseData)}
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
