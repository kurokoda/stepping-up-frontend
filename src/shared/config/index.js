export default {
  API_BASE_URL  : process.env.REACT_APP_REACT_WEB_EXPRESS_API_BASE_URL || 'https://react-web-express.herokuapp.com',
  SHOW_DEV_TOOLS: process.env.REACT_APP_REACT_WEB_EXPRESS_SHOW_DEV_TOOLS || false,
  API_TYPE      : process.env.API_TYPE || 'mongoose',
};