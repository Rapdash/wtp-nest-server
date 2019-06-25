import * as joi from 'joi';
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: Object) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = joi.validate(value, this.schema);
    if (error) {
      throw new BadRequestException('Validation Failed');
    }
    return value;
  }
}
