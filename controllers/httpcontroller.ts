import PlaceInfo from "../types/placeinfo.type";
import http from "./http-common"
import { LatLngBounds } from "leaflet";

export default class HttpController {
  static getPlace = async (uuid: string | string[] | undefined): Promise<PlaceInfo> => {
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

  static getElevationMap = async (bounds: LatLngBounds): Promise<ArrayBuffer> => {
    let response = null;
    try {
      console.log(bounds)
      const res = await http.post('http://localhost:8000/get_elevation_map/', {
        params: {
          south: 21.577287273637065,
          north: 21.54391272636294,
          west: 57.398393216059176,
          east: 57.3804067839408
        }
      })

      // console.log(file);
      // response = data;
      // console.log(data.byteLength);
    } catch (error) {
      // console.log(error)
    }
    return response
  }
}
