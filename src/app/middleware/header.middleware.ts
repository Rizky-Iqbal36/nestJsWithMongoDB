import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';

import { ForbiddenException } from '../exceptions/httpException';

export class HeaderMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    Joi.object({
      'accept-language': Joi.string(),
      date: Joi.date().iso().required(),
      'x-coordinate': Joi.string()
        .required()
        .custom((value) => {
          const latlon: string[] = value.split(',');
          if (
            latlon.every((ele: any) => typeof parseInt(ele) === 'number') &&
            latlon.length === 2
          )
            return value;
          throw new Error(
            'value is not proper comma separated latitude,longitude',
          );
        }),
      'x-device': Joi.string().required(),
      'x-trace-id': Joi.string().uuid().required(),
    })
      .unknown()
      .validateAsync(req.headers)
      .then(() => {
        next();
      })
      .catch((error) =>
        next(new ForbiddenException('INVALID_HEADERS', { joiError: error })),
      );
  }
}
