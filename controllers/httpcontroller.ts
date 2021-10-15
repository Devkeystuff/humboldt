import PlaceInfo from "../types/placeinfo.type";
import http from "./http-common"

export default class HttpController {

    static async getPlace(uuid: string | string[] | undefined): Promise<PlaceInfo> {
        let response: PlaceInfo = null;
        try {
            if (typeof uuid === 'string') {
                const { data } = await http.get<PlaceInfo>("users/" + uuid)
                response = { id: data.id, name: data.name, phone: data.phone, email: data.email };
            }
        } catch (error) {
            console.log(error)
        }
        return response;
    }
}
