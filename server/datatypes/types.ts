export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};


export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['Int']>;
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  location: Scalars['String'];
  department: Scalars['String'];
  is_admin: Scalars['Boolean'];
  register_date: Scalars['Date'];
};

export type Photo = {
  __typename?: 'Photo';
  id?: Maybe<Scalars['Int']>;
  albumId: Scalars['Int'];
  title: Scalars['String'];
  url: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};

export type ResultSetHeader = {
  __typename?: 'ResultSetHeader';
  fieldCount?: Maybe<Scalars['Int']>;
  affectedRows?: Maybe<Scalars['Int']>;
  insertId?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  serverStatus?: Maybe<Scalars['Int']>;
  warningStatus?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  createPhotosTable: Scalars['String'];
  createPhoto: Photo;
  deletePhoto?: Maybe<ResultSetHeader>;
};


export type MutationCreateUserArgs = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  location: Scalars['String'];
  department: Scalars['String'];
  is_admin: Scalars['Boolean'];
  register_date: Scalars['Date'];
};


export type MutationCreatePhotoArgs = {
  albumId: Scalars['Int'];
  title: Scalars['String'];
  url: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};


export type MutationDeletePhotoArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  users: Array<Maybe<User>>;
  photos: Array<Maybe<Photo>>;
  photo?: Maybe<Photo>;
};


export type QueryPhotoArgs = {
  id?: Maybe<Scalars['Int']>;
};
