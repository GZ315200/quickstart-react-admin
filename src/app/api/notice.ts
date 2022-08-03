import { noiceCount } from "utils/api";
import { request } from "utils/request";


export const getNoiceCount = () =>  request({ url: noiceCount, method: 'POST' });