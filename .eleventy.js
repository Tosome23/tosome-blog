const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // static, images 폴더 그대로 복사
  eleventyConfig.addPassthroughCopy({"static/style.css": "style.css"});
  eleventyConfig.addPassthroughCopy({"images": "images"});

  // 날짜 필터
  eleventyConfig.addFilter("date", d =>
    DateTime.fromJSDate(d).toFormat("yyyy-MM-dd")
  );

  // posts 컬렉션
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob("content/blog/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "layouts",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md","njk","html"]
  };
};
