import { serverHttp } from "./app"

serverHttp.listen(3333, () => {
  console.log('☕ HTTP running 3333')
})
