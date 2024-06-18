import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      // Здесь вы можете передать параметры конструктора, например, для логирования
      log: ['query', 'info', `warn`, `error`],
    });
  }

  async onModuleInit() {
    await this.$connect(); // Подключаемся к базе данных при инициализации модуля
  }

  async onModuleDestroy() {
    await this.$disconnect(); // Отключаемся от базы данных при уничтожении модуля
  }

  // Здесь вы можете добавить любые дополнительные методы, которые хотели бы использовать для взаимодействия с базой данных
  // Например, методы для выполнения определенных запросов к базе данных
}
