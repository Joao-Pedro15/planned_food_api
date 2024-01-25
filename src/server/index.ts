import server from '..'
const PORT = process.env.PORT || 8080

try {
 server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
} catch (error) {
 console.error(error, 'caiu aqui')
}

export default server 