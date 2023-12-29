import { ExceptionFilter, Catch, ArgumentsHost, Logger } from '@nestjs/common';

@Catch()
export class ErrorFilter implements ExceptionFilter {
  private readonly logger = new Logger('ErrorFilter');

  catch(error: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    this.logger.error(`Error in ${request.method} ${request.url}`, error.stack);
    console.log(error.stack, request.url);
    response.status(500).json({
      statusCode: 500,
      message: 'Internal Server Error',
    });
  }
}
