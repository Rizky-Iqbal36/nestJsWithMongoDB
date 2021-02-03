import { HttpException, HttpStatus } from '@nestjs/common';
import locales from '../i18n/translation';

export class CustomException extends HttpException {
  constructor(httpStatus: number, flag: string, message: any) {
    super(
      {
        flag: flag,
        ...(message.joiError
          ? { details: message.joiError.details }
          : {
              message: message.str
                ? locales(message.msg, message.str)
                : locales(message),
            }),
      },
      httpStatus,
    );
  }
}

export class SuccessResponse extends HttpException {
  constructor(obj: any) {
    super(obj, HttpStatus.OK);
  }
}

export class NotFoundException extends CustomException {
  constructor(flag: any, message: any) {
    super(HttpStatus.NOT_FOUND, flag, message);
  }
}

export class BadRequestException extends CustomException {
  constructor(flag: any, message: any) {
    super(HttpStatus.BAD_REQUEST, flag, message);
  }
}

export class UnauthorizedException extends CustomException {
  constructor(flag: any, message: any) {
    super(HttpStatus.UNAUTHORIZED, flag, message);
  }
}

export class ForbiddenException extends CustomException {
  constructor(flag: any, message: any) {
    super(HttpStatus.FORBIDDEN, flag, message);
  }
}

export class NotAcceptableException extends CustomException {
  constructor(flag: any, message: any) {
    super(HttpStatus.NOT_ACCEPTABLE, flag, message);
  }
}

export class RequestTimeoutException extends CustomException {
  constructor(flag: any, message: any) {
    super(HttpStatus.REQUEST_TIMEOUT, flag, message);
  }
}

export class ConflictException extends CustomException {
  constructor(flag: any, message: any) {
    super(HttpStatus.CONFLICT, flag, message);
  }
}

export class HttpVersionNotSupportedException extends CustomException {
  constructor(flag: any, message: any) {
    super(HttpStatus.HTTP_VERSION_NOT_SUPPORTED, flag, message);
  }
}

export class BadGatewayException extends CustomException {
  constructor(flag: any, message: any) {
    super(HttpStatus.BAD_GATEWAY, flag, message);
  }
}

export class ServiceUnavailableException extends CustomException {
  constructor(flag: any, message: any) {
    super(HttpStatus.SERVICE_UNAVAILABLE, flag, message);
  }
}

export class InternalServerErrorException extends CustomException {
  constructor(flag: any, message: any) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, flag, message);
  }
}
