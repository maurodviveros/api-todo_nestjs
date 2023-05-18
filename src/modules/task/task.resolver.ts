import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Task, TaskInput, TaskUpdateInput } from "./task.schema";
import { TaskService } from "./task.service";

@Resolver()
export class TaskResolver {
  constructor(private readonly Task: TaskService) {}
  @Query(() => [Task])
  task_getList() {
    return this.Task.getList();
  }

  @Query(() => Task)
  task_getDetail(@Args("_id") _id: string) {
    return this.Task.getDetail(_id);
  }

  @Mutation(() => Task)
  task_create(@Args("input") input: TaskInput) {
    return this.Task.create(input);
  }

  @Mutation(() => Task)
  task_update(@Args("input") input: TaskUpdateInput) {
    return this.Task.update(input);
  }

  @Mutation(() => Task)
  task_delete(@Args("_id") _id: string) {
    return this.Task.delete(_id);
  }
}
