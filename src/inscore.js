// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE
// adapted to inscore lang

(function(mod) {
  if (typeof exports == "object" && typeof module == "object")
    mod(require("../node_modules/codemirror/lib/codemirror"));
  else if (typeof define == "function" && define.amd)
    define(["../node_modules/codemirror/lib/codemirror"], mod);
  else
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

var keywords = ["absolutexy", "accept", "alias", "alpha", "angle", "animate", "animated", "arrows", "autoscale", "autoVoicesColoration", "blue", "brightness", "browse", "brushStyle", "calibrate", "cancel", "clear", "clipPitch", "clipTime", "clock", "close", "color", "columns", "compatibility", "connect", "count", "dalpha", "dangle", "date", "dblue", "dbrightness", "dcolor", "ddate", "dduration", "debug", "default", "defaultShow", "del", "dgreen", "dhsb", "dhue", "dimension", "disconnect", "dpage", "drange", "dred", "drotatex", "drotatey", "drotatez", "dsaturation", "dscale", "dshear", "dstart", "dtempo", "duration", "durClock", "dx", "dxorigin", "dy", "dyorigin", "dz", "edit", "effect", "end", "error", "errport", "eval", "event", "export", "exportAll", "expr", "follow", "fontFamily", "fontSize", "fontStyle", "fontWeight", "foreground", "forward", "frame", "frameless", "fullscreen", "get", "green", "guido-version", "hasZ", "height", "hello", "hsb", "hue", "in", "keyboard", "learn", "level", "likelihoodthreshold", "likelihoodwindow", "load", "lock", "map+", "map", "mapf", "max", "measureBars", "mls", "mode", "mouse", "musicxml-version", "name", "new", "opengl", "order", "osc", "out", "outport", "page", "pageCount", "pageFormat", "path", "penAlpha", "penColor", "pendAlpha", "penStyle", "penWidth", "pitchLines", "play", "pop", "port", "preprocess", "push", "quit", "radius", "range", "rate", "rcount", "read", "red", "reject", "require", "reset", "resetBench", "rootPath", "rotatex", "rotatey", "rotatez", "rows", "run", "saturation", "save", "scale", "set", "shear", "show", "size", "smooth", "stack", "start", "status", "stop", "success", "systemCount", "tempo", "ticks", "time", "tolerance", "vdate", "vduration", "version", "videoMap", "videoMapf", "voiceColor", "volume", "watch+", "watch", "width", "windowOpacity", "wrap", "write", "writeBench", "x", "xborder", "xorigin", "y", "yborder", "yorigin", "z"];

CodeMirror.registerHelper("hint", "inscore", keywords);

CodeMirror.defineMode("inscore", function () {
  var addr_regex = /\/ITL[-_a-zA-Z0-9\/\[\]{}*]*/;
  var var_regex = /\$[a-zA-Z0-9\/]*/;
  var msg_var_regex = /\$([^)]*)/;
  var methods_regex = /autoVoicesColoration|likelihoodthreshold|likelihoodwindow|musicxml-version|compatibility|guido-version|windowOpacity|dbrightness|defaultShow|dsaturation|measureBars|systemCount|absolutexy|brightness|brushStyle|disconnect|fontFamily|fontWeight|foreground|fullscreen|pageFormat|pitchLines|preprocess|resetBench|saturation|voiceColor|writeBench|autoscale|calibrate|clipPitch|dduration|dimension|exportAll|fontStyle|frameless|pageCount|pendAlpha|tolerance|vduration|videoMapf|animated|clipTime|drotatex|drotatey|drotatez|duration|durClock|dxorigin|dyorigin|fontSize|keyboard|penAlpha|penColor|penStyle|penWidth|rootPath|videoMap|animate|columns|connect|default|errport|forward|outport|require|rotatex|rotatey|rotatez|success|version|xborder|xorigin|yborder|yorigin|accept|arrows|browse|cancel|dalpha|dangle|dcolor|dgreen|drange|dscale|dshear|dstart|dtempo|effect|export|follow|height|opengl|radius|rcount|reject|smooth|status|volume|watch+|alias|alpha|angle|clear|clock|close|color|count|dblue|ddate|debug|dpage|error|event|frame|green|hello|learn|level|mouse|order|range|reset|scale|shear|stack|start|tempo|ticks|vdate|watch|width|write|blue|date|dhsb|dhue|dred|edit|eval|expr|hasZ|load|lock|map+|mapf|mode|name|page|path|play|port|push|quit|rate|read|rows|save|show|size|stop|time|wrap|del|end|get|hsb|hue|map|max|mls|new|osc|out|pop|red|run|set|dx|dy|dz|in|x|y|z/;
  var def_regex = /[a-zA-Z]+[ \t]*=..*;/;
  var num_regex = /-{0,1}[0-9]+\.{0,1}[0-9]*/;
  

  function tokenize(stream, state) {

    if (!state.inComment && !state.inString && stream.match(def_regex, true))
		return 'def';

    if (!state.inComment && !state.inString && stream.match(num_regex, true))
		return 'number';

    if (!state.inComment && !state.inString)
    	if (stream.match(msg_var_regex, true) || stream.match(var_regex, true))
		return 'variable';

    if (!state.inComment && !state.inString && stream.match(addr_regex, true))
		return 'special';

    if (!state.inComment && !state.inString && stream.match("__END__", true)) {
      state.inComment = true;
      return 'comment';
    }

    if (!state.inComment && !state.inString && stream.match(methods_regex, true))
		return 'keyword';

    var ch = stream.next();

    if (state.inComment) {
      	stream.skipToEnd();
	    return 'comment';
    }
    else if (!state.inString && (ch == "#")) {
      	stream.skipToEnd();
	    return 'comment';
    }

    if (state.inString) {
      if (state.inDString && (ch == '"')) {
      	state.inString = state.inDString = false;
      }
      if (state.inSString && (ch == "'")) {
      	state.inString = state.inSString = false;
      }
      return 'string';
    }
    else if (ch == '"') {
      state.inString = state.inDString = true;
      return "string";
    }
    else if (ch == "'") {
      state.inString = state.inSString = true;
      return "string";
    }
    
    stream.eatWhile(/[\w-]/);
    return null;
  }
  return {
    startState: function () {
      var state = {};
      state.inComment = false;
      state.inString = false;
      state.inDString = false;
      state.inSString = false;
      return state;
    },
    token: function (stream, state) {
      if (stream.eatSpace()) return null;
      return tokenize(stream, state);
    }
  };
});

CodeMirror.defineMIME("text/inscore", "inscore");

});
