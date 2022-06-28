// const API = 'http://192.168.187.227:3002/'
// const API = 'http://localhost:3002/'
const API = 'http://192.168.31.120:3002/'
// const API = 'http://192.168.31.119:3002/'

export default async function createUser (newUser) {
  //  console.log(newUser, "desde create users hooks")
  // objeto global
  try {
    const response = await globalThis.fetch(`${API}users`, {
      method: 'post',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })
    // console.log(response.json() + 'vamos perra')
    return await response.json()
  } catch (err) {
    console.log(err)
    // console.log(err.message() + '  nose adasdas')
  }
}

// const API = "http://192.168.187.227:3002/";
// const API = "http://192.168.31.119:3002/";
