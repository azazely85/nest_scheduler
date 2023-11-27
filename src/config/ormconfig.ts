import { DataSource, DatabaseType} from 'typeorm'
import 'dotenv/config';
// @ts-ignore
export const typeOrmConfig: TypeOrmModuleOptions = {
  "type": process.env.DATABASE_TYPE as DatabaseType,
  "host": process.env.DATABASE_HOST,
  "port": Number(process.env.DATABASE_PORT),
  "username": process.env.DATABASE_USER,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_NAME,
  entities: ['./src/**/**.entity{.ts,.js}'],
  migrations: ['./src/migration/*.{ts, js}'],
  synchronize: false,
};
export default new DataSource(typeOrmConfig)