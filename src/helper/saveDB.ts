import { cookies } from "next/headers";

export const SaveDB = (token: any, account: any) => {
  console.log("save db", { token, account });
  cookies().set('pruebaJEy','si funciona')
};
