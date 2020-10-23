import { Context } from '../../models'
import { GraphQLResolveInfo } from 'graphql'
import { PHOTOS_TABLE } from '.'
import { Photo } from '../../datatypes/types'
import { knexClient } from '../../app.database'

export async function getPhotos() {
  return knexClient
    .table(PHOTOS_TABLE)
    .select('*')
    .limit(1)
}

export async function getPhoto(
  _: void,
  args: { id: number },
  ctx: Context,
  info: GraphQLResolveInfo
) {
  const res = await knexClient
    .table(PHOTOS_TABLE)
    .where('id', args.id)
    .select('*')
    .limit(1)

  return res.pop()
}
