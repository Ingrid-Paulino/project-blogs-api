export type Indexable = {
  id: number
};

// usar isso
// Indexable & --> significa que ele é do tipo Indexable e outras coisas
// export type Entity = Indexable & {
//   createdAt: Date
//   updatedAt?: Date
// deletedAt
// }

export type TLogin = {
  email: string,
  password: string,
};

export type TUser = {
  displayName: string,
  email: string,
  password: string,
  image: string,
};

export type DecodeData = {
  data: {
    email: string,
  }
};

export type TCategoryWithName = {
  name: string,
};

export type TCategory = Indexable & TCategoryWithName;