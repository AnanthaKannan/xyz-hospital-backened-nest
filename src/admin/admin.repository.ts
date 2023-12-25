import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminRepository {
  findOne(id: string) {
    if (id === 'test') return null;
    return { id: id, name: 'kannan' };
  }

  findAll() {
    return [
      { id: 1, name: 'sree' },
      { id: 2, name: 'ananth' },
    ];
  }

  create(body: any) {
    return body;
  }
}
