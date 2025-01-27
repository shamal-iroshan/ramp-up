import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database.config';
import { StudentModule } from './student/student.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    DatabaseModule,
    StudentModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: process.env.NODE_ENV !== 'production',
    }),
  ],
})
export class AppModule {}
