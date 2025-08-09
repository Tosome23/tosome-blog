const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // static 폴더를 사이트 루트로 복사
  eleventyConfig.addPassthroughCopy({"static/style.css": "style.css"});
  eleventyConfig.addPassthroughCopy({ "images": "images" });

  // 날짜 포맷 필터
  eleventyConfig.addFilter("date", d =>
    DateTime.fromJSDate(d).toFormat("yyyy-LL-dd")
  );

  // 블로그 포스트 컬렉션
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
