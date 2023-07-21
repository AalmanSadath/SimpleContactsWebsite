'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const mail = <FontAwesomeIcon icon={faEnvelope} />
const phone = <FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} />
const website = <FontAwesomeIcon icon={faGlobe}  />
const person = <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} />


const endpoint = 'https://jsonplaceholder.typicode.com/users'

const Details = () => {
  const query = useSearchParams();
  const [users, setUsers] = useState([])
  useEffect(() => {
      (async () => {
          var data = await fetch(endpoint)
              .then(res => res.json())

          setUsers(data)
      })()
  }, [])
  
  const id = query.get('search')
  const user = users.filter(
    function (idNum){
      return(
        idNum.id == id
      )
    }
  )
  const userObj=user[0] || 0
  console.log(user)

  return (
      <div className='whole'>
      <header data-role="Header" className="home-header">
          <div className="contacts">Contacts</div>
      </header>
  <div className='table'>
    <table>
        <thead>
            <tr>
            </tr>
        </thead>
        <tbody>
                <tr key={userObj.name}>
                      <td>
                          <div className='name'>{person} {userObj.name}
                          </div>
                      </td>
                      <td>
                      </td>
                </tr>
                <tr key={userObj.phone}>
                      <td>
                          <div className='name'>{phone} <a href={`tel:${userObj.phone}`} >{userObj.phone}</a>
                          </div>
                      </td>
                      <td>
                      </td>
                </tr>
                <tr key={userObj.email}>
                      <td>
                          <div className='name'>{mail} <a href={`mailto:${userObj.email}`}>{userObj.email}</a>
                          </div>
                      </td>
                      <td>
                      </td>
                </tr>
                <tr key={userObj.website}>
                      <td>
                          <div className='name'>{website} <a href={`https://${userObj.website}`}>{userObj.website}</a>
                          </div>
                      </td>
                      <td>
                      </td>
                </tr>
            
        </tbody>
    </table>
    </div>
    </div>
)
}

export default Details