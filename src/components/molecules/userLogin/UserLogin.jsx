import React from 'react'
import style from './UserLogin.module.css'

function UserLogin({logOut}) {
  return (
    <div className={style.containerUserLogin}>
        <h3>Hi, Orlando</h3>
        <button onClick={()=>logOut()}>Log Out</button>
    </div>
  )
}

export default UserLogin