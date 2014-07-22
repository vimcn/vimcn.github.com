exports = module.exports = {
  "sitename": "Vim 中文计划",
  "source": "content",
  "output": "_site",
  "theme": "theme",
  "permalink": "{{directory}}/{{filename}}",
  "navigation":[
    { "link":"/spec.html", "title":"翻译规范 & 约定" },
    { "link":"/usage.html", "title":"安装 & 使用" },
    { "link":"https://github.com/vimcn/vimcn.github.com/wiki/PLAN", "title":"翻译计划" }
  ],
  "google": {
    "id": "UA-15922433-1",
    "domain": "vimcn.github.io"
  },
  "github": "https://github.com/vimcn",
  "writers": [
    "nico.PageWriter",
    "nico.PostWriter",
    "nico.FileWriter",
    "nico.StaticWriter"
  ]
}


exports.filters = {
  fixlink: function(html) {
    // format permalink, ends without .html
    html = html.replace(/(href="[^"]+)\.md(">)/ig, "$1$2");
    return html;
  }
}
