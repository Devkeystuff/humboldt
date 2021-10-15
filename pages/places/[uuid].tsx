import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import httpController from "../../controllers/httpcontroller";
import PlaceInfo from "../../types/placeinfo.type";


const Place: NextPage = ({ placeInfo }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            <p>Id: {placeInfo.id}</p>
            <p>{placeInfo.name}</p>
            <p>{placeInfo.phone}</p>
            <p>{placeInfo.email}</p>
        </div>);
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { uuid } = context.query;
    const placeInfo: PlaceInfo = await httpController.getPlace(uuid);

    if (!placeInfo) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {
            placeInfo
        },
    };
}


export default Place;