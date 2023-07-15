import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { Trans, useTranslation } from "react-i18next";

export default function Home({}): JSX.Element {
  const appId = "1234567890";

  return (
    <Trans i18nKey={"test"}>
      Hello
      <span className="font-medium">{{ id: appId }}</span>.
    </Trans>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
