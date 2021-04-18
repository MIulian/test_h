const db = require('../db')

;(async () => {
  try {
    await db('users').insert({ name: 'Iulian Morosan', role: 'internal'})
    await db('users').insert({ name: 'Ana Morosan', role:'external' })
    console.log('Added users!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()