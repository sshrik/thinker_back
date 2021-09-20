import ErrorHandler from '../lib/error';

export const DbError = new ErrorHandler("DB_ERROR", "DB에 에러가 발생했습니다.", 500);
export const NoDataError = new ErrorHandler("NO_DATA_ERROR", "데이터가 없습니다.", 404);