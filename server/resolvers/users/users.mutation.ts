import { Context } from '../../models'
import { GraphQLResolveInfo } from 'graphql'
import { User } from '../../datatypes/types'
import { knexClient } from '../../app.database'

const USERS_TABLE = 'users'

export const createUser = async (
  _: void,
  args: User,
  ctx: Context,
  info: GraphQLResolveInfo
) => knexClient.table(USERS_TABLE).insert(args)
