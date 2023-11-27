import { DataSource } from 'typeorm'

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'scheduler',
  entities: ['./src/**/**.entity{.ts,.js}'],
  migrations: ['./src/migration/*.{ts, js}'],
  synchronize: true,
})