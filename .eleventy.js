const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // static 폴더를 사이트 루트로 복사
  eleventyConfig.addPassthroughCopy({"static/style.css": "style.css"});

  eleventyConfig.addFilter("date", d =>
    DateTime.fromJSDate(d).toFormat("yyyy-LL-dd")
  );

  return {
    dir: { input: ".", includes: "layouts", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md","njk","html"]
  };
};
