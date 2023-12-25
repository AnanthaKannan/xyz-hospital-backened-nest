import { Injectable } from '@nestjs/common';
import { AdminRepository } from './admin.repository';

@Injectable()
export class AdminService {
  constructor(public adminRep: AdminRepository) {}

  findOne(id: string) {
    return this.adminRep.findOne(id);
  }

  findAll() {
    return this.adminRep.findAll();
  }

  create(body: any) {
    return this.adminRep.create(body);
  }
}
