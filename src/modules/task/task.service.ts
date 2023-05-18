import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Task, TaskInput, TaskUpdateInput } from "./task.schema";
import { Model } from "mongoose";

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private readonly Task: Model<Task>) {}

  async create(input: TaskInput) {
    return new this.Task(input).save();
  }
  async update(input: TaskUpdateInput) {
    return this.Task.findByIdAndUpdate(input._id, input, { new: true });
  }

  async delete(_id: string) {
    return this.Task.findByIdAndUpdate(_id, { deletedAt: new Date() }, { new: true });
  }

  async getList() {
    return await this.Task.find({ $or: [{ deletedAt: { $exists: false } }] });
  }

  async getDetail(_id: string) {
    return await this.Task.findById(_id);
  }
}
