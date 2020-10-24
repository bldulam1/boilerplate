import { Context } from '../../models'
import { GraphQLResolveInfo } from 'graphql'
import { PHOTOS_TABLE } from './photos.schema'
import { Photo } from '../../datatypes/types'
import { knexClient } from '../../app.database'

export const createPhoto = async (
  _: void,
  args: Photo,
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  const res = await knexClient.table(PHOTOS_TABLE).insert(args)
  args.id = res.pop()
  return args
}

export const deletePhoto = async (
  _: void,
  args: { id: number },
  ctx: Context,
  info: GraphQLResolveInfo
) =>
  knexClient
    .table(PHOTOS_TABLE)
    .where('id', args.id)
    .del()

export const createPhotosTable = async (
  _: void,
  args: Photo,
  ctx: Context,
  info: GraphQLResolveInfo
) =>
  knexClient.schema.createTable(PHOTOS_TABLE, table => {
    table.increments('id')
    table.integer('albumId').unsigned()
    table.string('title', 100)
    table.string('url')
    table.string('thumbnailUrl')
  })
