import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { MongooseModule } from "@nestjs/mongoose";
import { AppResolver } from "./app.resolver";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://courses:courses@courses.shrxl5n.mongodb.net/nestjs_todo",
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
    }),
  ],
  providers: [AppResolver],
})
export class AppModule {}
