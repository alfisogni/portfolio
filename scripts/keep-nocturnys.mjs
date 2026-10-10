import { cpSync, existsSync } from "node:fs"

if (existsSync("Nocturnys")) {
  cpSync("Nocturnys", "dist/Nocturnys", { recursive: true })
}
