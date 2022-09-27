import {React, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'

function User() {

  const params = useParams()
  const {user, getUser} = useContext(GithubContext)

  useEffect(() => {
    getUser(params.login)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>{user.login}</div>
  )
}

export default User