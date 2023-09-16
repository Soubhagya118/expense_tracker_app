import React from 'react'

const Notification = (props) => {
  // alert(props.title)
  let style;
  if(props.title=='Sucess!'){
style='left-0 right-0 top-0 w-full bg-green-700 flex justify-around';
  }else if(props.title=='pending!'){
    style='left-0 right-0 top-0 w-full bg-blue-700 flex justify-around';

  }else if(props.title=='Error!'){
    style='left-0 right-0 top-0 w-full bg-red-700 flex justify-around';

  }
  return (
    <div className={style}>
      <h1>{props.title}</h1>
      <h1>{props.status}</h1>
      <p>{props.message}</p>
    </div>
  )
}

export default Notification
