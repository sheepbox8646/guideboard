import { exit1 } from "~/resources/exit/exit1"

export default defineEventHandler(async (event) => {
  const { serial, title, subtitle, size = 450 } = getQuery(event) as {
    serial: string
    title: string
    subtitle: string
    size: number
  }

  return exit1({ serial, title, subtitle, size })
})