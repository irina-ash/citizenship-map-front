const isDev = process.env.REACT_APP_ENV === "develop";

export const HUB_URL = `api.hub${isDev ? '.stage' : ''}.somedomain.com`;
export const PROTOCOL = "https://";
export const WEB_API = `${PROTOCOL}${HUB_URL}/api`;

export const CITIZEN_API = `${process.env.REACT_APP_CITIZEN_API}/api`;
