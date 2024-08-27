import { genSaltSync } from "bcryptjs";

export const salt = genSaltSync(13);
