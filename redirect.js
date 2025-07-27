import { Redirecionar } from "./common/userActions.js";

const code = location.pathname.replace("/", "");
Redirecionar(code);