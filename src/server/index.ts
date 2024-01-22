import server from '../app'
const PORT = 8080

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

export default server 