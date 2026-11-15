import "dotenv/config"; // oxlint-disable-line no-unassigned-import

type Config = {
  SITE_URL: string;
  SITE_TITLE: string;
  SITE_DESCRIPTION?: string;
};

const loadConfig = (): Config => {
  const {
    SITE_URL = "http://localhost:4321",
    SITE_TITLE = "understory",
    SITE_DESCRIPTION,
  } = process.env;

  return { SITE_URL, SITE_TITLE, SITE_DESCRIPTION };
};

export default loadConfig();
