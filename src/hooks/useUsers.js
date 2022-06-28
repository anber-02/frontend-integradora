import React, { useState, useEffect } from 'react'

// const API = 'http://localhost:3002/'
const API = 'http://192.168.31.120:3002/'
// const API = 'http://192.168.181.227:3002/'
// 192.168.31.120

export default function getUsers () {
  const [users, setUsers] = useState(null)
  const [refreshing, setRefreshing] = useState(false)

  const fetchUsers = async () => {
    // objeto global
    const response = await globalThis.fetch(`${API}userrr`)
    const data = await response.json()
    console.log(data)
    if (Array.isArray(data)) {
      const user = data.map(user => {
        const { email, contrasennia } = user
        console.log(`email: ${email}, password: ${contrasennia}`)
        return { email, contrasennia }
      })
      console.log(user[0], 'es un objeto')
    }
    console.log('hhhhhhhhola')
    setUsers(data)
  }

  useEffect(function () {
    fetchUsers()
    return () => {
      setUsers({}) // This worked for me
    }
  }, [])

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await fetchUsers()
    setRefreshing(false)
  })

  return { users, onRefresh, refreshing }
}

// const API = "http://192.168.187.227:3002/";
// const API = "http://192.168.31.119:3002/";
// 192.168.181.227
// 192.168.56.1
