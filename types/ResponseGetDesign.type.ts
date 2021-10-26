export default interface IResponseGetDesign {
    design_id: number;
    design_uuid: number;
    title: string;
    description: string;
    edition_title: string;
    edition_desc: string;
    qr_code_img: string;
    elevation_map_img: string;
    lines_design_img: string;
    is_success: boolean;
    error_code: number;
    error_desc: string;
}