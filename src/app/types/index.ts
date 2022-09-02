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