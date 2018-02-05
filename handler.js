const generateResponse = require("serverless-nodejs-starter-dep");

export const hello = async (event, context, callback) => {
  const response = await generateResponse();
  
  callback(null, response);
};
