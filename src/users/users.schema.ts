import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

//prototyp uzytkownika w bazie danych
export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
