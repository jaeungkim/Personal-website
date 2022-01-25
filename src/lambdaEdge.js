var https = require("https");
var $url = require("url");
("use strict");
exports.handler = function (event, context, callback) {
  console.log("loading script....");
  const cf = event.Records[0].cf;
  const request = cf.request;
  const response = cf.response;
  const userAgent = request.headers["user-agent"][0].value;
  const webHost = "https://www.jaeungkim.ca";
  let indexData = "";
  function done(error, data) {
    if (data) {
      response.status = 200;
      response.statusDescription = "OK";
      response.body = data;
      response.headers = {
        ...response.headers,
        "Cache-control": [
          {
            key: "Cache-control",
            value: "public,max-age=86400",
          },
        ],
        "content-type": [
          {
            key: "Content-Type",
            value: "text/html",
          },
        ],
      };
      callback(null, response);
    } else {
      console.log("done: error");
      callback(null, { statusCode: "400", body: "Function error" });
    }
  }
  function replaceMetaData(indexData, webHost, path, queryStr) {
    var url = `${webHost + path}${queryStr ? "?" + queryStr : ""}`;
    const htmlCode = `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta http-equiv=“Content-Type” content=“text/html; charset=utf-8”/>
              <title>Inject social sharing tags test test</title>
              <base href=“/” />
              <meta name=“description” content=“This is a test for attaching og tags on sharing the referral links to social media”>
              <!-- Facebook Meta Tags -->
              <meta property="og:type" content="website" />
              <meta property="og:title" content="OG tags sharing test" />
              <meta property="og:description" content="This is a test for attaching og tags on sharing the referral links to social media" />
              <meta property="og:image" content="https://www.jaeungkim.ca/src/assets/images/blog.jpg"/>
              <meta
              property="og:url"
              content="${url}"
              />
              <!-- Twitter Meta Tags -->
              <meta name="twitter:card" content="summary_large_image">
              <meta property="twitter:domain" content=“jaeungkim.ca”>
              <meta property="twitter:url" content="${url}">
              <meta name="twitter:title" content="OG tags sharing test">
              <meta name="twitter:description" content="This is a test for attaching og tags on sharing the referral links to social media">
              <meta name="twitter:image" content="https://jaeungkim.ca/src/assets/images/blog.jpg">
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
              <div>welcome</div>
            </body>
          </html>`;
    done(null, htmlCode);
  }
  let checkUserAgent = 0;
  // user agent is known social bot
  if (
    userAgent.match(
      /baiduspider|twitterbot|Whatsapp|facebookexternalhit|googlebot|bingbot|yandex|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator/i
    )
  ) {
    checkUserAgent = 1;
  }
  // rendered page is requested by special query string
  if (request.querystring.match(/_escaped_fragment_/)) {
    checkUserAgent = 1;
  }
  // request targets non-html files
  if (
    request.uri.match(
      /\.(js|css|xml|less|png|jpg|jpeg|gif|pdf|doc|txt|ico|rss|zip|mp3|rar|exe|wmv|doc|avi|ppt|mpg|mpeg|tif|wav|mov|psd|ai|xls|mp4|m4a|swf|dat|dmg|iso|flv|m4v|torrent|ttf|woff|svg|eot)/i
    )
  ) {
    checkUserAgent = 0;
  }
  if (checkUserAgent === 1) {
    if (request.uri.startsWith("/blog")) {
      let queryStr = request.querystring;
      replaceMetaData(indexData, webHost, request.uri, queryStr);
    } else {
      callback(null, response);
    }
  } else {
    callback(null, response);
  }
};
