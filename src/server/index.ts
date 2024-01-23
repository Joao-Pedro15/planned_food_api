import server from '../app'
const PORT = 3333

try {
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
} catch (error) {
  console.error(error, 'caiu aqui')
}

export default server 