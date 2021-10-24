export default interface IResponseGetDesign {
    design_id: number;
    design_uuid: number;
    title: string;
    description: string;
    qr_code_img: string;
    elevation_map_img: string;
    normal_map_img?: string;
    is_success: boolean;
    error_code: number;
    error_desc: string;
}