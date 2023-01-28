import { listenerAdded } from 'emittery'
import Link from 'next/link'

export default function Infomation() {
  const user = {
    name: "Ricardo",
    age: "21",
    city:"Teresina"
  }
  return(
    <>
      <div>
        <ul>
          <li>name: {user.name}</li>
          <li>age: {user.age}</li>
          <li>city: {user.city}</li>
        </ul>
      </div>
      <div>
        <Link class="link" href="/about">click</Link>
      </div>
    </>
  )
}