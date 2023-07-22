'use client';
import Link from 'next/link'
import { Metadata } from 'next'
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
        (idNum as any).id == id
      )
    }
  )
  const userObj=user[0] || 0

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
                <tr key={(userObj as any).name}>
                      <td>
                          <div className='name'>{person} {(userObj as any).name}
                          </div>
                      </td>
                      <td>
                      </td>
                </tr>
                <tr key={(userObj as any).phone}>
                      <td>
                          <div className='name'>{phone} <a href={`tel:${(userObj as any).phone}`} >{(userObj as any).phone}</a>
                          </div>
                      </td>
                      <td>
                      </td>
                </tr>
                <tr key={(userObj as any).email}>
                      <td>
                          <div className='name'>{mail} <a href={`mailto:${(userObj as any).email}`}>{(userObj as any).email}</a>
                          </div>
                      </td>
                      <td>
                      </td>
                </tr>
                <tr key={(userObj as any).website}>
                      <td>
                          <div className='name'>{website} <a href={`https://${(userObj as any).website}`} target='_blank'>{(userObj as any).website}</a>
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

export const metadata: Metadata = {
  title: 'Contacts',
  description: '...',
}

