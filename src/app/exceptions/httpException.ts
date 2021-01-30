import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(httpStatus: number, message: any) {
    super(
      {
        status: httpStatus,
        message,
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
  constructor(message: any) {
    super(HttpStatus.NOT_FOUND, message);
  }
}

export class BadRequestException extends CustomException {
  constructor(message: any) {
    super(HttpStatus.BAD_REQUEST, message);
  }
}

export class UnauthorizedException extends CustomException {
  constructor(message: any) {
    super(HttpStatus.UNAUTHORIZED, message);
  }
}

export class ForbiddenException extends CustomException {
  constructor(message: any) {
    super(HttpStatus.FORBIDDEN, message);
  }
}

export class NotAcceptableException extends CustomException {
  constructor(message: any) {
    super(HttpStatus.NOT_ACCEPTABLE, message);
  }
}

export class RequestTimeoutException extends CustomException {
  constructor(message: any) {
    super(HttpStatus.REQUEST_TIMEOUT, message);
  }
}

export class ConflictException extends CustomException {
  constructor(message: any) {
    super(HttpStatus.CONFLICT, message);
  }
}

export class HttpVersionNotSupportedException extends CustomException {
  constructor(message: any) {
    super(HttpStatus.HTTP_VERSION_NOT_SUPPORTED, message);
  }
}

export class BadGatewayException extends CustomException {
  constructor(message: any) {
    super(HttpStatus.BAD_GATEWAY, message);
  }
}

export class ServiceUnavailableException extends CustomException {
  constructor(message: any) {
    super(HttpStatus.SERVICE_UNAVAILABLE, message);
  }
}

export class InternalServerErrorException extends CustomException {
  constructor(message: any) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, message);
  }
}
