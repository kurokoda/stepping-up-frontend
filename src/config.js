export default {
  API_BASE_URL  : process.env.REACT_APP_REACT_WEB_EXPRESS_API_BASE_URL || 'http://localhost:5000',
  SHOW_DEV_TOOLS: process.env.REACT_APP_REACT_WEB_EXPRESS_SHOW_DEV_TOOLS || false,
  API_TYPE      : process.env.API_TYPE || 'mongoose',
};
