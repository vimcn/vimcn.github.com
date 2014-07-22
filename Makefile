
watch:
	@nico server --watch
build:
	@nico build
publish: clear build
	@ghp-import -b master _site
	@git push origin master
clear:
	@rm -rf _site
