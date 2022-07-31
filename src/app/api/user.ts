import { userLogin } from "utils/api";
import { request } from "utils/request";


export const login = (req) =>  request({ url: userLogin, data: req, method: 'POST' });