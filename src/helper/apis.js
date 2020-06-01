import { $request } from "../helper";
const BASEURL = "http://ballot.tiger.wizmacau.com/admintools";
const BASEPATH = "/api";

export default {
    // 初始化
    init(params = {}) {
        return $request.get(
            `${BASEURL}${BASEPATH}/entity/bidder/list`,
            params
        )
    }
}