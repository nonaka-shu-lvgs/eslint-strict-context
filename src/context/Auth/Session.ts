// このimportは他コンテキストからしているのでエラーになる
import * as Message from "../Message";
// このimportは他コンテキストからしているのでエラーになる
import {put} from "../Storage/FileSystem"; // eslint-disable-line @typescript-eslint/no-unused-vars
// これは他コンテキストからはimportはしてないのでエラーにならない
import {Stream} from "../../lib/Stream"; // eslint-disable-line @typescript-eslint/no-unused-vars

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createSession() {
    // eslint-disable-next-line
    const key = Message.ModuleName;
    // eslint-disable-next-line
    const secretKey = "hmm... is it wrong?";
}
