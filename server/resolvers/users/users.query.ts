import { knexClient } from '../../app.database'

export const getUsers = () => knexClient.table('users').select('*')
