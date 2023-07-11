import { Prisma } from "@prisma/client";
import * as bcrypt from "bcryptjs";

export const encryptPassword = (password: string): string => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
export const verifyPassword = (password: string, encrypted: string): boolean => bcrypt.compareSync(password, encrypted);

function encryptUserPassword(data: { password?: string | { set?: string } }) {
  if (typeof data.password === "object" && data.password.set) {
    data.password.set = encryptPassword(data.password.set);
  } else if (typeof data.password === "string") {
    data.password = encryptPassword(data.password);
  }
  return data;
}

export default Prisma.defineExtension({
  name: "user-password",
  query: {
    user: {
      $allOperations({ operation, args, query }) {
        switch (operation) {
          case "create":
          case "update":
          case "updateMany":
            encryptUserPassword(args.data);
            break;
          case "upsert":
            encryptUserPassword(args.create);
            encryptUserPassword(args.update);
            break;
        }
        return query(args);
      },
    },
  },
  result: {
    user: {
      verifyPassword: {
        needs: { password: true },
        compute(user) {
          return (password: string) => verifyPassword(password, user.password);
        },
      },
    },
  },
});
