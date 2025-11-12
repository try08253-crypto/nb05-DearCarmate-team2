export type ExceptionInfoType = {
  statusCode: number,
  message?: string
}

export class BusinessException extends Error {
  statusCode;

  constructor({
    info,
    message,
  }: {
    info?: ExceptionInfoType;
    message?: string;
  }) {

    let finalMessage = message ?? info?.message ?? "알 수 없는 에러입니다.";
    super(finalMessage);

    this.statusCode = info?.statusCode ?? 500;
   
    Object.setPrototypeOf(this, BusinessException.prototype); // 프로토타입 체인 깨짐 방지
  }
}