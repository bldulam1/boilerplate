import {
  createPhoto,
  createPhotosTable,
  deletePhoto,
} from './resolvers/photos/photos.mutation'
import { getPhoto, getPhotos } from './resolvers/photos/photos.queries'

import { IResolvers } from 'graphql-tools'
import { createUser } from './resolvers/users/users.mutation'
import { getUsers } from './resolvers/users/users.query'

const resolverMap: IResolvers = {
  Query: {
    users: getUsers,
    photos: getPhotos,
    photo: getPhoto,
  },
  Mutation: {
    createUser,
    createPhoto,
    createPhotosTable,
    deletePhoto,
  },
}

export default resolverMap
