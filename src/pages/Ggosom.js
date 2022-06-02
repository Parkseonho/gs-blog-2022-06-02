import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const Ggosom = () => {
  return (
    <Layout pageTitle="Ggosom Page">
      <p>🐈현재페이지는 꼬솜이 소개 페이지입니다.🐈</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/rd_gs2.jpg"
      />
    </Layout>
  );
};

export default Ggosom;
