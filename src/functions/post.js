const compat = require("next-aws-lambda");
const page = require("./pages/post");

exports.handler = (event, context, callback) => {
  console.log("[render] ", event.path)
  event.requestContext = {}
  compat(page)(event, context, callback)
};