import { User } from "@prisma/client";
import { PrismaRepository } from "../PrismaRepository";

export class PrismaUser extends PrismaRepository<User, string> {}
