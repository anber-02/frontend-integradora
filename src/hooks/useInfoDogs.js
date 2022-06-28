import React, { useState, useEffect } from 'react'

// const API = 'http://localhost:3002/'
const API = 'http://192.168.31.120:3002/'
// const API = 'http://192.168.181.227:3002/'
// 192.168.31.120

export default function useInfoDogs () {
  const [dogs, setDogs] = useState(null)
  const [refreshing, setRefreshing] = useState(false)

  const fetchDogs = async () => {
    // objeto global
    const response = await globalThis.fetch(`${API}perros`)
    const data = await response.json()
    console.log('hhhhhhhhola')
    setDogs(data)
  }

  useEffect(function () {
    fetchDogs()
    return () => {
      setDogs({}) // This worked for me
    }
  }, [])

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await fetchDogs()
    setRefreshing(false)
  })

  return { dogs, onRefresh, refreshing }
}

// const API = "http://192.168.187.227:3002/";
// const API = "http://192.168.31.119:3002/";
// 192.168.181.227
// 192.168.56.1
