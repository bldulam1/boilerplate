import { knexClient } from '../../app.database'

export default async function() {
  return knexClient.table('users').select('*')
}
