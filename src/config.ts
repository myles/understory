import "dotenv/config"; // oxlint-disable-line no-unassigned-import

type Config = {
  SITE_URL: string;
  SITE_TITLE: string;
  SITE_DESCRIPTION?: string;
};

const loadConfig = (): Config => {
  const {
    UNDERSTORY_SITE_URL = "http://localhost:4321",
    UNDERSTORY_SITE_TITLE = "understory",
    UNDERSTORY_SITE_DESCRIPTION,
  } = process.env;

  return {
    SITE_URL: UNDERSTORY_SITE_URL,
    SITE_TITLE: UNDERSTORY_SITE_TITLE,
    SITE_DESCRIPTION: UNDERSTORY_SITE_DESCRIPTION,
  };
};

export default loadConfig();
