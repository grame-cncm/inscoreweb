#################################################################
#
# INScore Web Editor Makefile
# (c) GRAME-CNCM 2020-2021
#
#################################################################

MAKE ?= make

# define inscore project location (will be useless when published to npm)
INSCOREJS ?=  node_modules/@grame/inscorejs

# define modules dependencies
GUIDONODE := node_modules/@grame/guidolib
LXMLNODE  := node_modules/@grame/libmusicxml
FAUSTNODE := node_modules/@grame/libfaust

# define the web site folders
DIST := docs
FONTDIR := $(DIST)/font
CSSDIR  := $(DIST)/css
LIBDIR  := $(DIST)/lib

# define code mirror embedded resources (css and themes)
CM := lib/codemirror.css theme/abcdef.css theme/ambiance.css theme/bespin.css theme/blackboard.css theme/cobalt.css theme/colorforth.css theme/dracula.css theme/duotone-dark.css theme/duotone-light.css theme/eclipse.css theme/elegant.css theme/erlang-dark.css theme/hopscotch.css theme/icecoder.css theme/isotope.css theme/lesser-dark.css theme/liquibyte.css theme/material.css theme/mbo.css theme/mdn-like.css theme/midnight.css theme/monokai.css theme/neat.css theme/neo.css theme/night.css theme/panda-syntax.css theme/paraiso-dark.css theme/paraiso-light.css theme/pastel-on-dark.css theme/railscasts.css theme/rubyblue.css theme/seti.css theme/solarized.css theme/the-matrix.css theme/tomorrow-night-bright.css theme/tomorrow-night-eighties.css theme/ttcn.css theme/twilight.css theme/vibrant-ink.css theme/xq-dark.css theme/xq-light.css theme/yeti.css theme/zenburn.css
CMFILES  := $(CM:%=node_modules/codemirror/%)

# required typescript resources 
GUIDOTS := guidoengine.ts libGUIDOEngine.d.ts
LXMLTS  := libmusicxml.ts libmusicxml.d.ts

# define the typescript sources location and files
TSFOLDER := src
TSLIB	 := $(TSFOLDER)/lib
TSFILES := $(wildcard $(TSFOLDER)/*.ts) $(wildcard $(TSFOLDER)/*.js)

# required javascript resources
EXTJS    := node_modules/jquery/dist/jquery.min.js node_modules/bootstrap/dist/js/bootstrap.min.js node_modules/codemirror/lib/codemirror.js
CSS      := $(CSSDIR)/codemirror.min.css $(CSSDIR)/bootstrap.min.css

.PHONY: examples

all:
	$(MAKE) examples
	$(MAKE) ts
	$(MAKE) libs
	$(MAKE) font
	$(MAKE) css
	$(MAKE) readme
	git checkout $(DIST)/CNAME

test : 
	@echo $(TSFILES)



###########################################################################
help:
	@echo "============================================================"
	@echo "               INScore Online Editor Makefile"
	@echo "============================================================"
	@echo "Available targets are:"
	@echo "  all (default): generates the site into $(DIST)"
	@echo "========== Development targets"
	@echo "  ts           : build the typescript version"
	@echo "  examples     : scan the $(DIST)/examples folder to generate the examples.json file"
	@echo "  clean        : remove the minified files"
	@echo "========== Deployment targets"
	@echo "  libs         : update wasm libs in $(DIST)/lib folder from nodes_modules"
	@echo "  font         : copy the guidofonts in $(DIST)/font from guido nodes module"
	@echo "  css          : generates minified version of css files"
	@echo "  deplibs      : build an archive with all the dependent libraries named using sha"
	@echo "  readme       : generates README.html from README.md"


###########################################################################
ts : $(TSLIB) $(DIST)/inscoreEditor.js

$(DIST)/inscoreEditor.js : $(TSFILES)
	cd $(TSFOLDER) && tsc

deplibs: TMPNAME := __tmp__
deplibs:
	[ -d $(TMPNAME) ] || mkdir $(TMPNAME)
	cp docs/lib/lib* docs/lib/FaustLibrary.js $(TMPNAME)
	cp node_modules/@grame/inscorejs/INScoreJS.js $(TMPNAME)
	cp -r node_modules/@grame/inscorejs/fonts $(TMPNAME)
	$(MAKE) deparch FOLDER=$(TMPNAME)

deparch: ARCHNAME = $(shell shasum $(FOLDER) | sed 's/ ..*//')
deparch:
	@echo Building archive $(ARCHNAME)
	mv $(FOLDER) $(ARCHNAME)
	tar czf $(ARCHNAME).tgz $(ARCHNAME)
	echo "var gLibsHref = \"https://berio.grame.fr/jslibs/"$(ARCHNAME)"\"" > src/href.ts

libs: $(LIBDIR) 
	cp $(INSCOREJS)/libINScore.js 		$(LIBDIR)
	cp $(INSCOREJS)/libINScore.wasm 	$(LIBDIR)
	cp $(INSCOREJS)/dev/inscoreview.js	$(LIBDIR)
	cp $(GUIDONODE)/libGUIDOEngine.js 	$(LIBDIR)
	cp $(GUIDONODE)/libGUIDOEngine.wasm	$(LIBDIR)
	cp $(LXMLNODE)/libmusicxml.js   	$(LIBDIR)
	cp $(LXMLNODE)/libmusicxml.wasm 	$(LIBDIR)
	cp $(FAUSTNODE)/libfaust-wasm.js 	$(LIBDIR)
	cp $(FAUSTNODE)/libfaust-wasm.wasm 	$(LIBDIR)
	cp $(FAUSTNODE)/FaustLibrary.js 	$(LIBDIR)
	cp $(FAUSTNODE)/libfaust-wasm.data 	$(DIST)
	cp $(EXTJS)  $(LIBDIR)

$(TSLIB):
	mkdir $(TSLIB)

$(LIBDIR):
	mkdir $(LIBDIR)

font:  $(FONTDIR)
	cp $(GUIDONODE)/guido2-webfont/guido2-webfont.woff* $(FONTDIR)
	cp $(GUIDONODE)/guido2-webfont/stylesheet.css $(FONTDIR)
	
css: $(CSS)

$(FONTDIR):
	mkdir $(FONTDIR)

readme:
	$(MAKE) README.html

README.html : README.md
	echo "<!DOCTYPE html><html><xmp>" > README.html
	cat README.md  >> README.html
	echo "</xmp> <script src=http://strapdownjs.com/v/0.2/strapdown.js></script> </html>"  >> README.html

examples:
	cd $(DIST) && node ../scripts/listEx.js

###########################################################################
clean:
	rm -rf $(FONTDIR)
	rm -f  $(CSS) $(CSSDIR)/bootstrap.min.css.map
	rm -f $(DIST)/inscoreEditor.js
	rm -f $(LIBDIR)/libGUIDOEngine.* $(LIBDIR)/libmusicxml.*
	rm -f $(DIST)/examples.json


###########################################################################
$(CSSDIR)/codemirror.min.css : $(CMFILES)
	node node_modules/.bin/minify $(CMFILES) > $@ || (rm $@s ; false)

$(CSSDIR)/bootstrap.min.css:
	cp node_modules/bootstrap/dist/css/bootstrap.min.css* $(DIST)/css/ 
