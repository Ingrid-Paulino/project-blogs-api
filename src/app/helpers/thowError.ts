// export const throwError = (
//   name: string,
//   defaultMessage = '',
// ) => (message = defaultMessage) => {
//   const error = new Error(message);
//   error.name = name;
//   throw error;
// };

// export const UnauthorizedError = throwError(
//   'UnauthorizedError',
//   'Invalid fields/400',
// );
// export const InvalidToken = throwError(
//   'InvalidToken',
//   'Invalid Token/401/token',
// );
// export const TokenNotFound = throwError(
//   'TokenNotFound',
//   'Token not found/401/token',
// );
// export const ExpiredOrInvalidToken = throwError(
//   'expiredOrInvalidToken',
//   'Expired or invalid token/401/token',
// );