import { GetServerSideProps, NextPage } from "next";
import HttpController from "../../controllers/HttpController";
import PlaceInfo from "../../types/placeinfo.type";

const Place: NextPage<PlaceInfo> = (props) => {
  return <div></div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { uuid } = context.query;
  const placeInfo: PlaceInfo = await HttpController.getPlace(uuid);

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
