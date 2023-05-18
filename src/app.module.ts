import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { MongooseModule } from "@nestjs/mongoose";

import { TaskModule } from "./modules/task/task.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://courses:courses@courses.shrxl5n.mongodb.net/nestjs_todo"),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true
    }),
    TaskModule
  ]
})
export class AppModule {}
