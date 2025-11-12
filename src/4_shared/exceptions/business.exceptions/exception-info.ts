export enum BusinessExceptionType {
  EMPLOYEENUMBER_TOO_LONG,

}

export const BusinessExceptionTable: Record<BusinessExceptionType, {statusCode: number, message: string}> = {
  [BusinessExceptionType.EMPLOYEENUMBER_TOO_LONG]: {
    statusCode: 404,
    message: "비밀번호가 너무 깁니다.",
  },
}