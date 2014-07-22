
# Vim 中文计划

----

这是个业余的兴趣项目，主要是由各个成员翻译自己熟悉、喜爱推荐的优秀脚本的帮助文档，
也可以附上介绍，和一些小技巧之类。

欢迎有兴趣的朋友加入翻译或推荐脚本。参加方法：(建议使用自己的Gmail)
邮件你的 github id 到 `hotoo.cn+vimdocs[AT]gmail.com`

Vim Script 即 Vim 脚本，又称 Vim 插件(Plugin)，以下统称“脚本”。

* [项目源码](https://github.com/vimcn)
* [翻译规范 & 约定](spec.md)
* [安装 & 使用](usage.md)
* [翻译计划](https://github.com/vimcn/vimcn.github.com/wiki/PLAN)

## 广告

* [Vim 资料收集](http://wiki.hotoo.me/Vim.html)
* [欢迎加入 Vim 的 Gtalk 群](http://blog.hotoo.me/Gtalk-group-for-Vim.html)


## 项目

<style>
.description{
  color: #999;
}
</style>
<div id="github-projects"></div>


<script src="http://ajax.microsoft.com/ajax/jquery/jquery-1.4.2.min.js" type="text/javascript"></script>
<script type="text/javascript">
  jQuery.githubUser = function(username, callback) {
    jQuery.getJSON("https://api.github.com/orgs/" + username + "/repos?callback=?", callback);
  }

  jQuery.fn.loadRepositories = function(username) {
    this.html("<span>Querying GitHub for repositories...</span>");

    var target = this;
    $.githubUser(username, function(data) {
      var repos = data.data;
      sortByNumberOfWatchers(repos);

      var list = $('<ul/>');
      target.empty().append(list);
      $(repos).each(function() {
        list.append('<li><a href="'+ this.html_url +'">' + this.name + '</a>');
        list.append('<p class="description">' + this.description + '</p></li>');
      });
    });

    function sortByNumberOfWatchers(repos) {
      repos.sort(function(a,b) {
        return b.watchers - a.watchers;
      });
    }
  };

  $(function() {
    $("#github-projects").loadRepositories("vimcn");
  });
</script>
