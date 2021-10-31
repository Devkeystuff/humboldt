import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import Terrain from "../../components/Terrain";
import HttpController from "../../controllers/HttpController";
import IResponseGetDesign from "../../types/ResponseGetDesign.type";

const Place: NextPage<IResponseGetDesign> = (props) => {
  useEffect(() => {
    console.log(props);
  });
  return (
    <div>
      <Terrain
        elevation_img={props.elevation_map_img}
        texture_img={"/mountains.png"}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { uuid } = context.query;
  // const placeInfo: IResponseGetDesign = await HttpController.getPlace(uuid);
  const { data } = await axios.post(
    `http://localhost:8000/get_design?design_uuid=${uuid}&api_key=3c857823-ba57-43c9-8a03-70d3d618bef0`
  );

  // if (!placeInfo) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }
  // console.log(placeInfo);

  return {
    props: {
      data,
    },
  };
};

export default Place;
