"use client";
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './globals.css'
import Link from 'next/link';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const mail = <FontAwesomeIcon icon={faEnvelope} />
const phone = <FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} />
const website = <FontAwesomeIcon icon={faGlobe}  />

const endpoint = 'https://jsonplaceholder.typicode.com/users'

const App = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        (async () => {
            var data = await fetch(endpoint)
                .then(res => res.json())
            
            data = data.sort((a: { name: number; }, b: { name: number; }) => {
                if (a.name < b.name) {
                  return -1;
                 }
            });

            setUsers(data)
        })()
    }, [])
    

    return (
        <div className='whole'>
        <header data-role="Header" className="home-header">
            <div className="contacts">Contacts</div>
        </header>
    <div className='table'>
      <table>
          <thead>
              <tr>
                  <th>Names</th>
              </tr>
          </thead>
          <tbody>
              {users.map(user => (
                  <tr key={(user as any).id}>
                        <td>
                            <div className='name'><Link href={{pathname: "/detailed", query: { search: (user as any).id },}}>{(user as any).name}</Link>
                            <a href={`https://${(user as any).website}`} target='_blank' className='website'>{website}</a>
                            <a href={`mailto:${(user as any).email}`} className='mail'>{mail}</a>
                            <a href={`tel:${(user as any).phone}`} className='phone'>{phone}</a>
                            </div>
                            
                        </td>
                        <td>
                            
                        </td>
                  </tr>
              ))}
          </tbody>
      </table>
      </div>
      </div>
  )
}

export default App