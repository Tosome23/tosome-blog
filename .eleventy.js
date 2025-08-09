const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // 업로드 폴더 그대로 복사
  eleventyConfig.addPassthroughCopy({"static": "uploads"});

  // 날짜 필터
  eleventyConfig.addFilter("date", d => DateTime.fromJSDate(d).toFormat("yyyy-LL-dd"));

  // 📌 posts 컬렉션 강제 등록
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("content/blog/**/*.md");
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
