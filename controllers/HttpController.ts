import http from "./http-common"
import IRequestGetDesign from "../types/RequestGetDesign.type";
import IResponseGetDesign from "../types/ResponseGetDesign.type";
import IRequestCreateDesign from "../types/RequestCreateDesign.type";
import IResponseCreateDesign from "../types/ResponseCreateDesign.type";

export default class HttpController {
  static getPlace = async (uuid: string | string[] | undefined): Promise<IResponseGetDesign> => {
    let response: IResponseGetDesign = null;
    try {
      if (typeof uuid === 'string') {
        const params: IRequestGetDesign = {
          design_uuid: uuid,
          api_key: process.env.NEXT_PUBLIC_API_KEY
        }
        const { data } = await http.post<IResponseGetDesign>(`${process.env.NEXT_PUBLIC_HOST}/get_design?design_uuid=${params.design_uuid}&api_key=${params.api_key}`)
        response = data;
      }
    } catch (exc) {
      console.log(exc)
    }
    return response;
  }

  static generateDesign = async (design: IRequestCreateDesign): Promise<IResponseCreateDesign> => {
    let response: IResponseCreateDesign = null;
    try {
      console.log(design)
      const url = `${process.env.NEXT_PUBLIC_HOST}/generate_design?title=${design.title}&description=${design.description}&south=${design.south}&north=${design.north}&west=${design.west}&east=${design.east}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
      const { data } = await http.post<IResponseCreateDesign>(url);
      response = data;
      console.log(data)
    } catch (exc) {
      console.log(exc);
    }
    return response
  }
}
