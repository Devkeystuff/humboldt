import { GetServerSideProps, NextPage } from "next";
import Terrain from "../../components/Terrain";
import HttpController from "../../controllers/HttpController";
import IResponseGetDesign from "../../types/ResponseGetDesign.type";

const Place: NextPage<IResponseGetDesign> = (props) => {
  return (
    <div>
      <Terrain elevation_img={""} texture_img={""} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { uuid } = context.query;
  const placeInfo: IResponseGetDesign = await HttpController.getPlace(uuid);

  if (!placeInfo) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      placeInfo,
    },
  };
};

export default Place;
