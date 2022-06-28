import React from 'react'
// ARCHIVOS MIOS CREADOS
import UsersList from '../../components/Users'
// import Layout from "../../components/Layout";
// hooks creados
import useUsers from '../../hooks/useUsers'
import useInfoDogs from '../../hooks/useInfoDogs'

export default function Home () {
  const { dogs, onRefresh, refreshing } = useInfoDogs()
  return (
    <UsersList users={dogs} onRefresh={onRefresh} refreshing={refreshing} />
  )
}
