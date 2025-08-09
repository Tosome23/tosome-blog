const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"static": "/"});
  return {
    dir: { input: ".", includes: "layouts", data: "_data", output: "_site" }
 
  // 날짜 필터 (인자 없이 사용)
  eleventyConfig.addFilter("date", d =>
    DateTime.fromJSDate(d).toFormat("yyyy-LL-dd")
  );

  // posts 컬렉션: content/blog 아래 md 전부
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("content/blog/**/*.md");
  });

  return {
    dir: { input: ".", includes: "layouts", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md","njk","html"]
  };
};
