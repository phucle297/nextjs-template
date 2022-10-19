import { nanoid } from "nanoid";

export default class HttpErrorResponseModel {
    id = nanoid();
    status = 0;
    message = '';
    errors = [];
    url = '';
    raw = null;
}
