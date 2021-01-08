import { CatLogClient } from "./stub/log_grpc_web_pb"
import {} from "./stub/log_pb"


const client = new CatLogClient('http://localhost:50055');

export default client