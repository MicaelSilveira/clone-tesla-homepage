import type { NextPage } from "next";
import Head from "next/head";
import DefaultOverlay from "../src/Components/DefaultOverlay/DefaultOverlay";
import ModelSection from "../src/Components/Model/ModelSection/ModelSection";
import ModelWrapper from "../src/Components/Model/ModelWrapper/ModelWrapper";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const models = [
    "Model one",
    "Model Two",
    "Model Three",
    "Model Four",
    "Model Five",
    "Model Six",
    "Model Seven",
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Kesla - homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModelWrapper>
        <div>
          {models.map((model) => (
            <ModelSection
              key={model}
              modelName={model}
              overlayNode={
                <DefaultOverlay
                  label={model}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
      </ModelWrapper>
    </div>
  );
};

export default Home;
