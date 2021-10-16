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
      const params = {
        mode: "no-cors",
        params: {
          demtype: "SRTMGL3",
          south: bounds.getSouth(),
          north: bounds.getNorth(),
          west: bounds.getWest(),
          east: bounds.getEast()
        }
      }
      const { data } = await http.get<ArrayBuffer>("https://portal.opentopography.org/API/globaldem", params)
      response = data;
      console.log(data.byteLength);
    } catch (error) {
      console.log(error)
    }
    return response
  }
}
