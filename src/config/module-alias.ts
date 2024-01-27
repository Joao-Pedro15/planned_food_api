import { addAlias } from "module-alias";
import { resolve } from "path";
import { access } from 'fs/promises'

addAlias("@", resolve(process.env.TS_NODE_ENV !== undefined ? "dist" : "src"));