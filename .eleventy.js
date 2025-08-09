const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"static": "uploads"});
  eleventyConfig.addFilter("date", d => DateTime.fromJSDate(d).toFormat("yyyy-LL-dd"));
  return {
    dir: { input: ".", includes: "layouts", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md","njk","html"]
  };
};
