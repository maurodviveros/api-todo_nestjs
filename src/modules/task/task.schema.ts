import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Document } from "mongoose";

@Schema()
@ObjectType()
export class Task {
  @Field(() => String)
  _id: string;

  @Prop()
  @Field(() => String)
  title: string;

  @Prop()
  @Field(() => String)
  description: string;

  @Prop()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}

@InputType()
export class TaskInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;
}

@InputType()
export class TaskUpdateInput {
  @Field(() => String)
  _id: string;

  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  description: string;
}

export type BlogDocument = Task & Document;
export const TaskSchema = SchemaFactory.createForClass(Task);
