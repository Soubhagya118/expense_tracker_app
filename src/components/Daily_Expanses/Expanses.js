import React,{useCallback, useEffect, useRef, useState} from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addItemReducerFn } from '../../redux/expenseSlice';
import {isThemeReducerFn} from '../../redux/themeSlice';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import CartButton from './CartButton';

const Expanses = (props) => {
  const itemsList = useSelector(state=>state.expenses?.totalAmount);
//  console.log(" totalAmount",itemsList);
const themeChk= useSelector(state=>state.theme?.isTheme);

  const dispatch =useDispatch()

    const inputMoney =useRef();
    const inputCat=useRef();
    const inputDes= useRef();
    const [expanseData,setExpanseData] =useState([]);
    const [premium,setPremium]=useState(false)
    console.log(expanseData)
const [edit,setEdit]=useState(false);


const getData=useCallback(async()=>{
  
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
  dispatch(addItemReducerFn([...dataList]))
  console.log("expense tracker get redux data",itemsList);
}).catch(err=>{
  console.log(err.message);
})

},[]);


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
// console.log("disp data",data.name)
  //const theID=data.name;
  //dispatch(addItemReducerFn({id:theID,money:money1,description:inputDes1,catagorey:inputCat1}));
  //console.log("expense post data",data )
   getData();
}).catch(err=>{
  console.log(err.message);
})
};

// ==================================================================================delete=================================================

const deleteData=(id)=>{
  console.log("dletefn",id);
  // dispatch(removeItemReducerFn(id))
  fetch(`https://expensetrackerapp-ca61f-default-rtdb.firebaseio.com/expense/${id}.json`,{
    method:'DELETE',
    headers:{
      'Content-Type':'application/json'
    }
  }).then(res=>{
    if(!res.ok){
      alert('........Error in Delete Request');
      throw new Error('........Error in Delete Request');
    }
    return res.json();
  }).then(data=>{
    console.log(data);
    getData();
  }).catch(err=>{
    console.log(err.message)
  })
}
// =====================================================================================edit function============================
const editData=async(id)=>{
  setEdit(true);
  const money1=inputMoney.current.value;
  const inputCat1 = inputCat.current.value;
  const inputDes1=inputDes.current.value;


fetch(`https://expensetrackerapp-ca61f-default-rtdb.firebaseio.com/expense/${id}.json`,{
method:'PUT',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify({
  id:id,
money:money1,
description:inputDes1,
catagorey:inputCat1
})
}).then(res=>{
if(!res.ok){
alert('...error occur in PUT request');
throw new Error('...error occur in PUT request')
}
return res.json();
}).then(data=>{
console.log("expense tracker PUT data",data);
getData();
}).catch(err=>{
console.log(err.message);
})
};

useEffect(()=>{
  getData()
},[]);

const activatePremiumHandler=()=>{
  setPremium(true);
}
// ===================================================download file=====================
const headers=[
  {label:'money',key:'money'},
  {label:'description',key:'description'},
  {label:'catagorey',key:'catagorey'}
]
  return (
    <section  className='w-xl justify-center my-5 '>
      <form onSubmit={expenseHandler} className='flex justify-center flex-col w-60 m-auto gap-2 border-2 border-black-30 p-5 shadow-xl'>
        <label htmlFor='money'>Money Spent:-</label>
        <input type='number' name='money' id='money' className='border-2 border-blue-300 rounded-md' ref={inputMoney} required/>

        <label htmlFor='des'>Expanse description:-</label>
        <input type='text' id='des' name='des' className='border-2 border-blue-300 h-10 rounded-md' ref={inputDes} required/>

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
      <div className='w-auto m-auto my-10'>
      <ul className='m-auto mx-4  h-48 overflow-auto'>
      {/* {console.log("exx",expanseData)} */}
      {expanseData?.map((ele)=><li key={ele?.id} className=' flex gap-5 border-2 border-blue-100 m-auto justify-between mt-3'>

      <div className='text-start ml-2 pl-10 flex-1'>
      <p >money:- {ele?.money}</p>

      </div>
      <div className='text-start flex-1'>
      <p  className='text-start'>description:- {ele?.description}</p>

      </div>
      <div className='text-start'>
      <p className='text-start'>catagorey:- {ele?.catagorey}</p>

      </div>

        <button className='' onClick={()=>editData(ele?.id)}><FaEdit/></button>
        <button className='' onClick={()=> deleteData(ele?.id)}> <FaTrash/> </button>
        <CartButton {...ele} isCartHandler={props.isCartHandler}/>
      </li>)}
{/* <button>a</button> */}
      </ul>
      {(itemsList>=10000) ?<button onClick={activatePremiumHandler} className='bg-green-900 text-white border-2 border-green-900 mx-4 my-2 p-1'>Active Premium</button>:''}
      {premium && <>
        
<label className="mt-2 relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" onClick={()=>dispatch(isThemeReducerFn(!themeChk))} />
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
</label>

      </>}
      {premium && <CSVLink data={expanseData} headers={headers}filename={"file.csv"} className='ml-4 border-2 border-blue-300 p-1'>Download file</CSVLink>}
      </div>
    </section>
  )
}

export default Expanses
