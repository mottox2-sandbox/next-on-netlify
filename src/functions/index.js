const compat = require("next-aws-lambda");
const page = require("./pages/index");

exports.handler = (event, context, callback) => {
  console.log("[render] ", event.path)
  event.requestContext = {}
  const compatPage = compat(page)
  compatPage(event, context, callback)
};