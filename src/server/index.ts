import server from '../app'
const PORT = process.env.PORT

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

export default server 