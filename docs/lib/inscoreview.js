var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///<reference path="lib/inscore.d.ts"/>
//----------------------------------------------------------------------------
// INScore interface
//----------------------------------------------------------------------------
var INScore = /** @class */ (function () {
    function INScore() {
    }
    INScore.prototype.initialise = function () {
        return __awaiter(this, void 0, void 0, function () {
            var module;
            var _this = this;
            return __generator(this, function (_a) {
                module = INScoreModule();
                return [2 /*return*/, new Promise(function (success, failure) {
                        module['onRuntimeInitialized'] = function () {
                            _this.moduleInit(module);
                            success(_this);
                        };
                    })];
            });
        });
    };
    //------------------------------------------------------------------------
    // async initialization
    INScore.prototype.moduleInit = function (module) {
        this.fInscore = new module.INScoreAdapter();
        this.fJSGlue = new module.INScoreJSGlue();
        INScore.fObjects = new module.IObjectAdapter();
        inscore = this;
    };
    INScore.objects = function () { return INScore.fObjects; };
    //------------------------------------------------------------------------
    // INScore interface
    INScore.prototype.start = function () { this.fInscoreGlue = this.fInscore.start(0, 0, 0); };
    INScore.prototype.stop = function () { this.fInscore.stop(this.fInscoreGlue); };
    INScore.prototype.loadInscore = function (script, autoparse) {
        if (autoparse === void 0) { autoparse = false; }
        return this.fInscore.loadInscore(script, autoparse);
    };
    INScore.prototype.loadInscore2 = function (script) { return this.fInscore.loadInscore2(script); };
    INScore.prototype.postMessage = function (adr, msg) { this.fInscore.postMessage(adr, msg); };
    INScore.prototype.postMessageStr = function (adr, meth) { this.fInscore.postMessageStr(adr, meth); };
    INScore.prototype.postMessageStrI = function (adr, meth, val) { this.fInscore.postMessageStrI(adr, meth, val); };
    INScore.prototype.postMessageStrF = function (adr, meth, val) { this.fInscore.postMessageStrF(adr, meth, val); };
    INScore.prototype.postMessageStrStr = function (adr, meth, val) { this.fInscore.postMessageStrStr(adr, meth, val); };
    INScore.prototype.delayMessage = function (adr, msg) { this.fInscore.delayMessage(adr, msg); };
    INScore.prototype.newMessage = function () { return this.fInscore.newMessage(); };
    INScore.prototype.newMessageM = function (meth) { return this.fInscore.newMessageM(meth); };
    INScore.prototype.delMessage = function (msg) { return this.fInscore.delMessage(msg); };
    INScore.prototype.msgAddStr = function (msg, str) { return this.fInscore.msgAddStr(msg, str); };
    INScore.prototype.msgAddF = function (msg, val) { return this.fInscore.msgAddF(msg, val); };
    INScore.prototype.msgAddI = function (msg, val) { return this.fInscore.msgAddI(msg, val); };
    INScore.prototype.version = function () { return this.fInscore.version(); };
    INScore.prototype.versionStr = function () { return this.fInscore.versionStr(); };
    INScore.prototype.guidoversion = function () { return this.fInscore.guidoversion(); };
    INScore.prototype.musicxmlversion = function () { return this.fInscore.musicxmlversion(); };
    //------------------------------------------------------------------------
    // INScore glue interface
    INScore.prototype.getRate = function () { return this.fInscoreGlue.getRate(); };
    INScore.prototype.timeTask = function () { this.fInscoreGlue.timeTask(); };
    INScore.prototype.sorterTask = function () { this.fInscoreGlue.sorterTask(); };
    return INScore;
}());
var TPenStyle;
(function (TPenStyle) {
    TPenStyle[TPenStyle["kSolid"] = 0] = "kSolid";
    TPenStyle[TPenStyle["kDash"] = 1] = "kDash";
    TPenStyle[TPenStyle["kDot"] = 2] = "kDot";
    TPenStyle[TPenStyle["kDashDot"] = 3] = "kDashDot";
    TPenStyle[TPenStyle["kDashDotDot"] = 4] = "kDashDotDot";
})(TPenStyle || (TPenStyle = {}));
var TBrushStyle;
(function (TBrushStyle) {
    TBrushStyle[TBrushStyle["kDense1"] = 0] = "kDense1";
    TBrushStyle[TBrushStyle["kDense2"] = 1] = "kDense2";
    TBrushStyle[TBrushStyle["kDense3"] = 2] = "kDense3";
    TBrushStyle[TBrushStyle["kDense4"] = 3] = "kDense4";
    TBrushStyle[TBrushStyle["kDense5"] = 4] = "kDense5";
    TBrushStyle[TBrushStyle["kDense6"] = 5] = "kDense6";
    TBrushStyle[TBrushStyle["kDense7"] = 6] = "kDense7";
    TBrushStyle[TBrushStyle["kNoBrush"] = 7] = "kNoBrush";
    TBrushStyle[TBrushStyle["kBrushHor"] = 8] = "kBrushHor";
    TBrushStyle[TBrushStyle["kBrushVer"] = 9] = "kBrushVer";
    TBrushStyle[TBrushStyle["kCross"] = 10] = "kCross";
    TBrushStyle[TBrushStyle["kBDiag"] = 11] = "kBDiag";
    TBrushStyle[TBrushStyle["kFDiag"] = 12] = "kFDiag";
    TBrushStyle[TBrushStyle["kDiagCross"] = 13] = "kDiagCross";
})(TBrushStyle || (TBrushStyle = {}));
var ArrowHead;
(function (ArrowHead) {
    ArrowHead[ArrowHead["NONE"] = 0] = "NONE";
    ArrowHead[ArrowHead["TRIANGLE"] = 1] = "TRIANGLE";
    ArrowHead[ArrowHead["DIAMOND"] = 2] = "DIAMOND";
    ArrowHead[ArrowHead["DISK"] = 3] = "DISK";
})(ArrowHead || (ArrowHead = {}));
var Effect;
(function (Effect) {
    Effect[Effect["kNone"] = 0] = "kNone";
    Effect[Effect["kBlur"] = 1] = "kBlur";
    Effect[Effect["kColorize"] = 2] = "kColorize";
    Effect[Effect["kShadow"] = 3] = "kShadow";
})(Effect || (Effect = {}));
;
var Blurhint;
(function (Blurhint) {
    Blurhint[Blurhint["kPerformance"] = 0] = "kPerformance";
    Blurhint[Blurhint["kQuality"] = 1] = "kQuality";
    Blurhint[Blurhint["kAnimation"] = 2] = "kAnimation";
})(Blurhint || (Blurhint = {}));
;
var inscore = null;
///<reference path="lib/libINScore.d.ts"/>
///<reference path="lib/libINScore.d.ts"/>
///<reference path="inscore.ts"/>
///<reference path="interfaces.ts"/>
// events types
var kMouseEnterID = 1;
var kMouseLeaveID = 2;
var kMouseDownID = 3;
var kMouseUpID = 4;
var kMouseMoveID = 5;
var kMouseDClickID = 6;
//----------------------------------------------------------------------------
var JSObjectView = /** @class */ (function () {
    function JSObjectView(elt, parent, absolute) {
        if (absolute === void 0) { absolute = true; }
        this.fID = 0;
        this.fID = ++JSObjectView.fGlobalID; // create a unique identifier
        JSObjectView.fObjects[this.fID] = this; // store the div using its id
        this.fParent = parent;
        this.fElement = elt;
        this.fSyncManager = null;
        this.fIObject = 0;
        if (parent)
            parent.getElement().appendChild(elt);
        if (absolute)
            elt.style.position = "absolute";
        elt.addEventListener("dragenter", null);
        elt.addEventListener("dragleave", null);
    }
    JSObjectView.getObjectView = function (id) { return JSObjectView.fObjects[id]; };
    JSObjectView.prototype.setSyncManager = function (sync) { this.fSyncManager = sync; };
    JSObjectView.prototype.setIObject = function (id) { this.fIObject = id; };
    JSObjectView.prototype.getIObject = function () { return this.fIObject; };
    JSObjectView.prototype.toString = function () { return "JSObjectView"; };
    JSObjectView.prototype.getId = function () { return this.fID; };
    JSObjectView.prototype.getElement = function () { return this.fElement; };
    JSObjectView.prototype.getParent = function () { return this.fParent; };
    JSObjectView.prototype["delete"] = function () { JSObjectView.fObjects[this.fID] = null; };
    JSObjectView.prototype.parentWidth = function () {
        var elt = this.getElement().parentElement;
        return Math.min(elt.clientWidth, elt.clientHeight);
    };
    JSObjectView.prototype.parentHeight = function () {
        var elt = this.getElement().parentElement;
        return Math.min(elt.clientWidth, elt.clientHeight);
    };
    JSObjectView.prototype.updateSpecial = function (obj, oid) { return true; };
    JSObjectView.prototype.updateSpecific = function (obj) { };
    JSObjectView.prototype.getRatio = function () {
        var div = this.getElement();
        if (div && div.parentElement)
            return Math.min(div.clientWidth, div.offsetHeight) / Math.min(div.parentElement.offsetWidth, div.parentElement.offsetHeight);
        return 1;
    };
    JSObjectView.prototype.refresh = function (address) {
        inscore.delayMessage(address, inscore.newMessageM("refresh"));
    };
    //---------------------------------------------------------------------
    // update methods
    //---------------------------------------------------------------------
    JSObjectView.prototype.updateView = function (obj, oid, master, force, keepRatio) {
        if (keepRatio === void 0) { keepRatio = false; }
        if (obj.deleted() && this.getElement().parentNode) { // parent could be deleted
            this.getElement().parentNode.removeChild(this.getElement());
            this["delete"]();
            return;
        }
        if (this.fSyncManager && this.fSyncManager.updateSync(obj, oid))
            return; // object is synchronized, update is done
        if (obj.newData())
            if (!this.updateSpecial(obj, oid))
                return;
        var infos = obj.getUpdateInfos(master);
        if (keepRatio) {
            var r = this.getParent().getRatio();
            infos.position.scale /= r;
        }
        if (infos.updatecolor)
            this.updateColor(infos.color);
        if (infos.updatebrush)
            this.updatePenControl(infos.position.pen);
        this.updateSpecific(obj);
        if (infos.updatepos || infos.updatebrush || force)
            this.updatePosition(infos.position, this.getElement());
        if (infos.updateeffect)
            this.updateEffects(infos.effect);
        if (infos.updateevents || force)
            this.updateEvents(infos.events, obj.getOSCAddress());
        if (infos.showmap)
            gLog.log(this + " show map -> " + obj.getMaps().size());
    };
    JSObjectView.prototype.updateColor = function (color) {
        this.fElement.style.color = color.rgb;
        this.fElement.style.opacity = color.alpha.toString();
    };
    JSObjectView.prototype.updatePenControl = function (brush) {
        var elt = this.getElement();
        elt.style.border = brush.penWidth + "px " + JSObjectView.penStyle2Css(brush.penStyle) + " " + brush.penColor;
    };
    JSObjectView.prototype.getOrigin = function () {
        var div = this.getElement();
        return { x: div.offsetWidth / 2, y: div.offsetHeight / 2 };
    };
    JSObjectView.prototype.getPos = function (pos) {
        var ppos = this.getParent().getOrigin();
        var x = ppos.x + this.relative2SceneWidth(pos.x) - (this.getElement().offsetWidth * (1 + pos.xorigin * pos.scale) / 2);
        var y = ppos.y + this.relative2SceneHeight(pos.y) - (this.getElement().offsetHeight * (1 + pos.yorigin * pos.scale) / 2);
        return { x: x, y: y };
    };
    JSObjectView.prototype.updatePosition = function (pos, elt) {
        elt.style.visibility = (pos.hidden) ? "hidden" : "inherit";
        elt.style.transform = this.getTransform(pos);
        this.updateDimensions(pos);
        var p = this.getPos(pos);
        elt.style.left = p.x + "px";
        elt.style.top = p.y + "px";
        elt.style.zIndex = pos.zorder.toString();
    };
    JSObjectView.prototype.getTransform = function (pos) {
        var transform = "";
        if (pos.scale != 1)
            transform += "scale(" + pos.scale + "," + pos.scale + ") ";
        if (pos.xangle)
            transform += "rotateX(" + pos.xangle + "deg) ";
        if (pos.yangle)
            transform += "rotateY(" + pos.yangle + "deg) ";
        if (pos.zangle)
            transform += "rotateZ(" + pos.zangle + "deg) ";
        return transform;
    };
    JSObjectView.prototype.updateDimensions = function (pos) {
        var elt = this.getElement();
        elt.style.width = this.relative2SceneWidth(pos.width) + "px";
        elt.style.height = this.relative2SceneHeight(pos.height) + "px";
    };
    //------------------------------------------------------------------------------------
    // mouse events handlers and update
    JSObjectView.prototype.getPoints = function (event) {
        var div = this.getElement();
        var x = (event.offsetX / div.clientWidth * 2) - 1;
        var y = (event.offsetY / div.clientHeight * 2) - 1;
        var pdiv = div.parentElement;
        var r = pdiv.getBoundingClientRect();
        var sx = ((event.clientX - r.left) / pdiv.clientWidth * 2) - 1;
        var sy = ((event.clientY - r.top) / pdiv.clientHeight * 2) - 1;
        return { relative: { x: x, y: y }, obj: { x: event.offsetX, y: event.offsetY }, scene: { x: sx, y: sy } };
    };
    JSObjectView.prototype.accept = function (event, id) {
        if (id == kMouseLeaveID)
            return true;
        var div = this.getElement();
        return (event.offsetX >= 0) && (event.offsetY >= 0) && (event.offsetX <= div.clientWidth) && (event.offsetY <= div.clientHeight);
    };
    JSObjectView.prototype.notify = function (event, id, dest) {
        // event.stopImmediatePropagation();
        // event.preventDefault();
        if (!this.accept(event, id))
            return;
        if ((id == kMouseMoveID) && (event.buttons != 1))
            return; // ignore move event without mouse button
        var mevent = null;
        switch (id) {
            case kMouseEnterID:
                mevent = "mouseEnter";
                break;
            case kMouseLeaveID:
                mevent = "mouseLeave";
                break;
            case kMouseDownID:
                mevent = "mouseDown";
                break;
            case kMouseUpID:
                mevent = "mouseUp";
                break;
            case kMouseMoveID:
                mevent = "mouseMove";
                break;
            case kMouseDClickID:
                mevent = "doubleClick";
                break;
            default: return; // unexpected event
        }
        var msg = inscore.newMessageM("event");
        inscore.msgAddStr(msg, mevent);
        var p = this.getPoints(event);
        inscore.msgAddF(msg, p.relative.x);
        inscore.msgAddF(msg, p.relative.y);
        inscore.msgAddF(msg, p.obj.x);
        inscore.msgAddF(msg, p.obj.y);
        inscore.msgAddF(msg, p.scene.x);
        inscore.msgAddF(msg, p.scene.y);
        inscore.postMessage(dest, msg);
    };
    JSObjectView.prototype.updateEvents = function (events, dest) {
        var _this = this;
        var div = this.getElement();
        if (events.watchMouseEnter)
            div.onmouseenter = function (event) { _this.notify(event, kMouseEnterID, dest); };
        else
            div.onmouseenter = null;
        if (events.watchMouseLeave)
            div.onmouseleave = function (event) { _this.notify(event, kMouseLeaveID, dest); };
        else
            div.onmouseleave = null;
        if (events.watchMouseDown)
            div.onmousedown = function (event) { _this.notify(event, kMouseDownID, dest); };
        else
            div.onmousedown = null;
        if (events.watchMouseUp)
            div.onmouseup = function (event) { _this.notify(event, kMouseUpID, dest); };
        else
            div.onmouseup = null;
        if (events.watchMouseMove)
            div.onmousemove = function (event) { _this.notify(event, kMouseMoveID, dest); };
        else
            div.onmousemove = null;
        if (events.watchMouseDClick)
            div.ondblclick = function (event) { _this.notify(event, kMouseDClickID, dest); };
        else
            div.ondblclick = null;
    };
    //------------------------------------------------------------------------------------
    // update effects
    JSObjectView.prototype.updateEffects = function (effect) {
        var elt = this.getElement();
        switch (effect.type) {
            case Effect.kNone:
                this.removeEffect(elt);
                break;
            case Effect.kBlur:
                this.setBlur(elt, effect.blur.radius);
                break;
            case Effect.kColorize:
                console.log(this + ": colorize effect is not supported");
                break;
            case Effect.kShadow:
                this.setShadow(elt, effect.shadow);
                break;
        }
    };
    JSObjectView.prototype.removeEffect = function (elt) { this.setBlur(elt, 0); };
    JSObjectView.prototype.setBlur = function (elt, val) {
        elt.style.boxShadow = "0px 0px";
        elt.style.filter = "blur(" + val + "px)";
    };
    JSObjectView.prototype.setShadow = function (elt, val) {
        elt.setAttribute("filter", "drop-shadow(" + val.color + " " + val.xOffset + "px " + val.yOffset + "px " + val.blur + "px)");
    };
    //---------------------------------------------------------------------
    // conversions from inscore to scene space and reverse
    JSObjectView.prototype.relative2SceneX = function (x) { return this.parentWidth() * (x + 1.0) / 2.0; };
    JSObjectView.prototype.relative2SceneY = function (y) { return this.parentHeight() * (y + 1.0) / 2.0; };
    JSObjectView.prototype.relative2SceneWidth = function (width) { return this.parentWidth() * width / 2.0; };
    JSObjectView.prototype.relative2SceneHeight = function (height) { return this.parentHeight() * height / 2.0; };
    JSObjectView.prototype.scene2RelativeWidth = function (width) { return (width * 2.0) / this.parentWidth(); };
    JSObjectView.prototype.scene2RelativeHeight = function (height) { return (height * 2.0) / this.parentHeight(); };
    JSObjectView.prototype.scene2RelativeX = function (x) { return x / (this.parentWidth() / 2.0) - 1; };
    JSObjectView.prototype.scene2RelativeY = function (y) { return y / (this.parentHeight() / 2.0) - 1; };
    //---------------------------------------------------------------------
    // called to update object size on model side
    JSObjectView.prototype.updateObjectSize = function (objid, w, h) {
        var obj = INScore.objects().create(objid);
        var div = this.getElement();
        obj.updateWidth(this.scene2RelativeWidth(w));
        obj.updateHeight(this.scene2RelativeHeight(h));
        obj.updateViewBoundingRect(div.clientLeft, div.clientTop, w, h),
            INScore.objects().del(obj);
    };
    JSObjectView.prototype.updateObjectSizeSync = function (obj, w, h) {
        obj.updateWidth(this.scene2RelativeWidth(w));
        obj.updateHeight(this.scene2RelativeHeight(h));
    };
    //---------------------------------------------------------------------
    // utilities
    JSObjectView.prototype.debug = function (target, x, y, color) {
        var div = document.createElement('div');
        div.style.position = "absolute";
        div.style.left = x + "px";
        div.style.top = y + "px";
        div.style.width = 10 + "px";
        div.style.height = 10 + "px";
        div.style.background = color;
        if (target)
            target.appendChild(div);
        else
            document.body.appendChild(div);
    };
    JSObjectView.penStyle2Css = function (style) {
        var str = "solid";
        switch (style) {
            case INScoreModule.kDashDotStyle:
            case INScoreModule.kDashStyle:
                str = "dashed";
                break;
            case INScoreModule.kDashDotDotStyle:
            case INScoreModule.kDotStyle:
                str = "dotted";
                break;
        }
        return str;
    };
    //---------------------------------------------------------------------
    // Main update method
    // id  : the view id 
    // oid : the IObject id (actually a pointer stored as number)
    // forcepos : used to enforce updatePosition
    JSObjectView.updateObjectView = function (id, oid, forcepos) {
        var view = JSObjectView.fObjects[id];
        if (view) {
            view.setIObject(oid);
            try {
                var obj = INScore.objects().create(oid);
                view.updateView(obj, oid, 0, forcepos);
                INScore.objects().del(obj);
            }
            catch (error) {
                console.error(error);
            }
        }
    };
    JSObjectView.getVObject = function (id) { return JSObjectView.fObjects[id]; };
    JSObjectView.fGlobalID = 0;
    JSObjectView.fObjects = new Array();
    return JSObjectView;
}());
///<reference path="JSObjectView.ts"/>
var JSSvgBase = /** @class */ (function (_super) {
    __extends(JSSvgBase, _super);
    function JSSvgBase(parent) {
        var _this = _super.call(this, document.createElement('div'), parent) || this;
        _this.fSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        _this.fSVG.setAttribute('xmlns', "http://www.w3.org/2000/svg");
        _this.fSVG.setAttribute('xmlns:xlink', "http://www.w3.org/1999/xlink");
        _this.fSVG.setAttribute('version', "1.1");
        _this.getElement().appendChild(_this.fSVG);
        // setting line-height avoids offsets in positionning
        _this.getElement().style.lineHeight = "0";
        // prevent object to capture drag events
        _this.fSVG.addEventListener("dragenter", null);
        _this.fSVG.addEventListener("dragleave", null);
        return _this;
    }
    JSSvgBase.prototype.updateDimensions = function (pos) {
        var w = Math.max(1, this.relative2SceneWidth(pos.width));
        var h = Math.max(1, this.relative2SceneHeight(pos.height));
        this.updateSVGDimensions(w, h);
        var strokewidth = pos.pen.penWidth * 2;
        this.fSVG.style.width = (w + strokewidth) + "px";
        this.fSVG.style.height = (h + strokewidth) + "px";
        _super.prototype.updateDimensions.call(this, pos);
    };
    JSSvgBase.prototype.updateColor = function (color) {
        var target = this.getSVGTarget();
        target.style.fill = color.rgb;
        target.style.fillOpacity = color.alpha.toString();
    };
    JSSvgBase.prototype.updateRegularPen = function (pen) {
        _super.prototype.updatePenControl.call(this, pen);
    };
    JSSvgBase.prototype.updatePenControl = function (pen) {
        var elt = this.getSVGTarget();
        elt.style.strokeWidth = pen.penWidth.toString();
        elt.style.stroke = pen.penColor;
        elt.style.strokeDasharray = JSSvgBase.penStyle2Dash(pen.penStyle);
        if (pen.brushStyle == TBrushStyle.kNoBrush)
            elt.style.fill = "none";
        else {
            elt.style.fill = pen.color;
            elt.style.fillOpacity = pen.alpha.toString();
        }
    };
    JSSvgBase.prototype.getTranslate = function (pos) {
        return { x: pos.pen.penWidth, y: pos.pen.penWidth };
    };
    JSSvgBase.prototype.getPos = function (pos) {
        var tr = this.getTranslate(pos);
        this.getSVGTarget().style.transform = (tr.x || tr.y) ? "translate(" + tr.x + "px," + tr.y + "px)" : "";
        return _super.prototype.getPos.call(this, pos);
    };
    JSSvgBase.prototype.removeEffect = function (elt) { this.fSVG.setAttribute("filter", "blur(0px)"); };
    JSSvgBase.prototype.setBlur = function (elt, val) { this.fSVG.setAttribute("filter", "blur(" + val + "px)"); };
    JSSvgBase.prototype.setShadow = function (elt, val) {
        this.fSVG.setAttribute("filter", "drop-shadow(" + val.color + " " + val.xOffset + "px " + val.yOffset + "px " + val.blur + "px)");
    };
    JSSvgBase.penStyle2Dash = function (style) {
        switch (style) {
            case TPenStyle.kDash: return "5,5";
            case TPenStyle.kDot: return "2,2";
            case TPenStyle.kDashDot: return "5,2,2,2";
            case TPenStyle.kDashDotDot: return "5,2,2,2,2,2";
            default: return "";
        }
    };
    return JSSvgBase;
}(JSObjectView));
///<reference path="JSSVGBase.ts"/>
var JSArcView = /** @class */ (function (_super) {
    __extends(JSArcView, _super);
    function JSArcView(parent) {
        var _this = _super.call(this, parent) || this;
        _this.fArc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        _this.getElement().className = "inscore-arc";
        _this.fSVG.appendChild(_this.fArc);
        return _this;
    }
    JSArcView.prototype.clone = function (parent) { return new JSArcView(parent); };
    JSArcView.prototype.toString = function () { return "JSArcView"; };
    JSArcView.prototype.getSVGTarget = function () { return this.fArc; };
    JSArcView.prototype.updateSVGDimensions = function (w, h) { };
    JSArcView.prototype.updateSpecial = function (obj, objid) {
        var arc = obj.getArcInfos();
        var r1 = this.relative2SceneWidth(arc.width) / 2;
        var r2 = this.relative2SceneHeight(arc.height) / 2;
        if (!r1 || !r2)
            return false;
        var startAngle = JSArcView.normalize(arc.start);
        var range = JSArcView.clip(arc.range);
        var endAngle = JSArcView.normalize(startAngle + range);
        var startPoint = JSArcView.getPoint(r1, r2, startAngle);
        var endPoint = JSArcView.getPoint(r1, r2, endAngle);
        var path = JSArcView.getPath(range, startPoint, endPoint, r1, r2, arc.closed);
        this.fArc.setAttribute('d', path);
        return true;
    };
    // computes a point coordinates at a given angle
    JSArcView.getPoint = function (r1, r2, angle) {
        angle = (angle * Math.PI / 180);
        var x = r1 * (Math.cos(angle) + 1);
        var y = r2 * (-Math.sin(angle) + 1);
        return { x: x, y: y };
    };
    // gives the arc path string
    JSArcView.getPath = function (arcRange, start, end, rx, ry, close) {
        var flag = JSArcView.direction(arcRange);
        var arcStr = start.x + "," + start.y + " A " + rx + "," + ry + ", 0," + flag.sup + "," + flag.dir + " " + end.x + "," + end.y;
        if (close)
            return "M " + rx + "," + ry + " L " + arcStr + " Z ";
        else
            return "M " + arcStr;
    };
    // normalize the angle between 180 and - 180°
    JSArcView.normalize = function (angle) {
        if (angle > 180)
            return this.normalize(angle - 360);
        else if (angle < -180)
            return this.normalize(angle + 360);
        return angle;
    };
    JSArcView.clip = function (range) {
        if (range >= 360)
            return 359;
        if (range <= -360)
            return -359;
        return range;
    };
    // computes the arc directions: up or down, clockwise or counter clockwise
    JSArcView.direction = function (arcRange) {
        var dir = arcRange > 0 ? 0 : 1;
        arcRange = Math.abs(arcRange);
        var sup = arcRange >= 180 ? 1 : 0;
        return { sup: sup, dir: dir };
    };
    return JSArcView;
}(JSSvgBase));
///<reference path="JSObjectView.ts"/>
var JSAutoSize = /** @class */ (function (_super) {
    __extends(JSAutoSize, _super);
    function JSAutoSize(elt, parent) {
        var _this = _super.call(this, elt, parent) || this;
        _this.fSizeSynced = false;
        elt.style.height = "auto";
        elt.style.width = "auto";
        elt.addEventListener("dragenter", null);
        elt.addEventListener("dragleave", null);
        return _this;
    }
    JSAutoSize.prototype.updateSpecial = function (obj, objid) {
        return this.waitForSize(objid);
    };
    JSAutoSize.prototype.getAutoSize = function () {
        var elt = this.getElement();
        return { x: elt.clientWidth, y: elt.clientHeight };
    };
    JSAutoSize.prototype.waitForSize = function (objid) {
        var _this = this;
        if (!this.fSizeSynced) {
            var size = this.getAutoSize();
            if (!size.x || !size.y)
                setTimeout(function () { return _this.waitForSize(objid); }, 50);
            else {
                this.updateObjectSize(objid, size.x, size.y);
                this.fSizeSynced = true;
                JSObjectView.updateObjectView(this.getId(), objid, true);
            }
        }
        return this.fSizeSynced;
    };
    return JSAutoSize;
}(JSObjectView));
///<reference path="JSSVGBase.ts"/>
var JSCurveView = /** @class */ (function (_super) {
    __extends(JSCurveView, _super);
    // protected fStart: 	TPoint;
    // protected fEnd: 	TPoint;
    function JSCurveView(parent) {
        var _this = _super.call(this, parent) || this;
        _this.fCurve = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        _this.getElement().className = "inscore-curve";
        _this.fSVG.appendChild(_this.fCurve);
        return _this;
    }
    JSCurveView.prototype.clone = function (parent) { return new JSCurveView(parent); };
    JSCurveView.prototype.toString = function () { return "JSCurveView"; };
    JSCurveView.prototype.getSVGTarget = function () { return this.fCurve; };
    JSCurveView.prototype.updateSVGDimensions = function (w, h) { };
    JSCurveView.prototype.updateSpecial = function (obj, objid) {
        var curve = obj.getCurveInfos();
        var n = curve.size();
        for (var i = 0; i < (n - 7); i += 8) {
            var ps = this.relative2SceneCurve(curve.get(i), curve.get(i + 1), curve.get(i + 2), curve.get(i + 3), curve.get(i + 4), curve.get(i + 5), curve.get(i + 6), curve.get(i + 7));
            this.fCurve.setAttribute('d', "M" + ps[0] + "," + ps[1] + " C" + ps[2] + "," + ps[3] + " " + ps[4] + "," + ps[5] + " " + ps[6] + "," + ps[7]);
            // update object size
            var bb = this.fSVG.getBBox();
            -this.updateObjectSizeSync(obj, bb.width, bb.height);
        }
        return true;
    };
    JSCurveView.prototype.relative2SceneCurve = function (x1, y1, x2, y2, x3, y3, x4, y4) {
        var a1 = this.relative2SceneWidth(x1);
        var a2 = this.relative2SceneWidth(y1);
        var b1 = this.relative2SceneWidth(x2);
        var b2 = this.relative2SceneWidth(y2);
        var c1 = this.relative2SceneWidth(x3);
        var c2 = this.relative2SceneWidth(y3);
        var d1 = this.relative2SceneWidth(x4);
        var d2 = this.relative2SceneWidth(y4);
        var miny = Math.min(a2, d2);
        var minx = Math.min(a1, d1);
        return [a1 - minx, a2 - miny, b1 - minx, b2 - miny, c1 - minx, c2 - miny, d1 - minx, d2 - miny];
    };
    return JSCurveView;
}(JSSvgBase));
///<reference path="JSSVGBase.ts"/>
var JSEllipseView = /** @class */ (function (_super) {
    __extends(JSEllipseView, _super);
    function JSEllipseView(parent) {
        var _this = _super.call(this, parent) || this;
        _this.fEllipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        _this.getElement().className = "inscore-ellipse";
        _this.fSVG.appendChild(_this.fEllipse);
        return _this;
    }
    JSEllipseView.prototype.clone = function (parent) { return new JSEllipseView(parent); };
    JSEllipseView.prototype.getSVGTarget = function () { return this.fEllipse; };
    JSEllipseView.prototype.toString = function () { return "JSEllipseView"; };
    JSEllipseView.prototype.updateSVGDimensions = function (w, h) {
        var rx = w / 2;
        var ry = h / 2;
        this.fEllipse.setAttribute('cx', rx.toString());
        this.fEllipse.setAttribute('cy', ry.toString());
        this.fEllipse.setAttribute('rx', rx.toString());
        this.fEllipse.setAttribute('ry', ry.toString());
    };
    return JSEllipseView;
}(JSSvgBase));
///<reference path="lib/libGUIDOEngine.d.ts"/>
//----------------------------------------------------------------------------
// GUIDOEngine interface
//----------------------------------------------------------------------------
var GuidoEngine = /** @class */ (function () {
    function GuidoEngine() {
    }
    GuidoEngine.prototype.initialise = function () {
        return __awaiter(this, void 0, void 0, function () {
            var module;
            var _this = this;
            return __generator(this, function (_a) {
                module = GuidoModule();
                return [2 /*return*/, new Promise(function (success, failure) {
                        module['onRuntimeInitialized'] = function () {
                            _this.moduleInit(module);
                            success(_this);
                        };
                    })];
            });
        });
    };
    //------------------------------------------------------------------------
    // async initialization
    GuidoEngine.prototype.moduleInit = function (module) {
        this.fEngine = new module.GuidoEngineAdapter();
        this.fScoreMap = new module.GUIDOScoreMap();
        this.fPianoRoll = new module.GUIDOPianoRollAdapter();
        this.fFactory = new module.GUIDOFactoryAdapter();
        this.fEngine.init();
    };
    //------------------------------------------------------------------------
    // Guido Engine interface
    GuidoEngine.prototype.start = function () { this.fEngine.init(); };
    GuidoEngine.prototype.shutdown = function () { this.fEngine.shutdown(); };
    GuidoEngine.prototype.ar2gr = function (ar) { return this.fEngine.ar2gr(ar); };
    GuidoEngine.prototype.ar2grSettings = function (ar, settings) { return this.fEngine.ar2grSettings(ar, settings); };
    GuidoEngine.prototype.updateGR = function (gr) { return this.fEngine.updateGR(gr); };
    GuidoEngine.prototype.updateGRSettings = function (gr, settings) { return this.fEngine.updateGRSettings(gr, settings); };
    GuidoEngine.prototype.freeAR = function (ar) { this.fEngine.freeAR(ar); };
    GuidoEngine.prototype.freeGR = function (gr) { this.fEngine.freeGR(gr); };
    GuidoEngine.prototype.getDefaultLayoutSettings = function () { return this.fEngine.getDefaultLayoutSettings(); };
    GuidoEngine.prototype.resizePageToMusic = function (gr) { return this.fEngine.resizePageToMusic(gr); };
    GuidoEngine.prototype.getErrorString = function (errCode) { return this.fEngine.getErrorString(errCode); };
    GuidoEngine.prototype.showElement = function (gr, elt, status) { return this.fEngine.showElement(gr, elt, status); };
    GuidoEngine.prototype.countVoices = function (ar) { return this.fEngine.countVoices(ar); };
    GuidoEngine.prototype.getPageCount = function (gr) { return this.fEngine.getPageCount(gr); };
    GuidoEngine.prototype.getSystemCount = function (gr, page) { return this.fEngine.getSystemCount(gr, page); };
    GuidoEngine.prototype.duration = function (gr) { return this.fEngine.duration(gr); };
    GuidoEngine.prototype.findEventPage = function (gr, date) { return this.fEngine.findEventPage(gr, date); };
    GuidoEngine.prototype.findPageAt = function (gr, date) { return this.fEngine.findPageAt(gr, date); };
    GuidoEngine.prototype.getPageDate = function (gr, pageNum) { return this.fEngine.getPageDate(gr, pageNum); };
    GuidoEngine.prototype.gr2SVG = function (gr, page, embedFont, mappingMode) { return this.fEngine.gr2SVG(gr, page, embedFont, mappingMode); };
    GuidoEngine.prototype.gr2SVGColored = function (gr, page, r, g, b, embedFont) { return this.fEngine.gr2SVGColored(gr, page, r, g, b, embedFont); };
    GuidoEngine.prototype.abstractExport = function (gr, page) { return this.fEngine.abstractExport(gr, page); };
    GuidoEngine.prototype.binaryExport = function (gr, page) { return this.fEngine.binaryExport(gr, page); };
    GuidoEngine.prototype.jsExport = function (gr, page) { return this.fEngine.javascriptExport(gr, page); };
    GuidoEngine.prototype.setDefaultPageFormat = function (format) { this.fEngine.setDefaultPageFormat(format); };
    GuidoEngine.prototype.getDefaultPageFormat = function () { return this.fEngine.getDefaultPageFormat(); };
    GuidoEngine.prototype.setDrawBoundingBoxes = function (bmap) { this.fEngine.setDrawBoundingBoxes(bmap); };
    GuidoEngine.prototype.getDrawBoundingBoxes = function () { return this.fEngine.getDrawBoundingBoxes(); };
    GuidoEngine.prototype.getPageFormat = function (gr, page) { return this.fEngine.getPageFormat(gr, page); };
    GuidoEngine.prototype.unit2CM = function (val) { return this.fEngine.unit2CM(val); };
    GuidoEngine.prototype.cm2Unit = function (val) { return this.fEngine.cm2Unit(val); };
    GuidoEngine.prototype.unit2Inches = function (val) { return this.fEngine.unit2Inches(val); };
    GuidoEngine.prototype.inches2Unit = function (val) { return this.fEngine.inches2Unit(val); };
    GuidoEngine.prototype.getLineSpace = function () { return this.fEngine.getLineSpace(); };
    GuidoEngine.prototype.getVersion = function () { return this.fEngine.getVersion(); };
    GuidoEngine.prototype.getFloatVersion = function () { var v = this.fEngine.getVersion(); return parseFloat(v.major + "." + v.minor + v.sub); };
    GuidoEngine.prototype.getVersionStr = function () { return this.fEngine.getVersionStr(); };
    GuidoEngine.prototype.checkVersionNums = function (major, minor, sub) { return this.fEngine.checkVersionNums(major, minor, sub); };
    GuidoEngine.prototype.markVoice = function (ar, voicenum, date, duration, r, g, b) { return this.fEngine.markVoice(ar, voicenum, date, duration, r, g, b); };
    GuidoEngine.prototype.openParser = function () { return this.fEngine.openParser(); };
    GuidoEngine.prototype.closeParser = function (p) { return this.fEngine.closeParser(p); };
    GuidoEngine.prototype.file2AR = function (p, file) { return this.fEngine.file2AR(p, file); };
    GuidoEngine.prototype.string2AR = function (p, gmn) { return this.fEngine.string2AR(p, gmn); };
    GuidoEngine.prototype.parserGetErrorCode = function (p) { return this.fEngine.parserGetErrorCode(p); };
    GuidoEngine.prototype.openStream = function () { return this.fEngine.openStream(); };
    GuidoEngine.prototype.closeStream = function (s) { return this.fEngine.closeStream(s); };
    GuidoEngine.prototype.getStream = function (s) { return this.fEngine.getStream(s); };
    GuidoEngine.prototype.stream2AR = function (p, stream) { return this.fEngine.stream2AR(p, stream); };
    GuidoEngine.prototype.writeStream = function (s, str) { return this.fEngine.writeStream(s, str); };
    GuidoEngine.prototype.resetStream = function (s) { return this.fEngine.resetStream(s); };
    GuidoEngine.prototype.getParsingTime = function () { return this.fEngine.getParsingTime(); };
    GuidoEngine.prototype.getAR2GRTime = function () { return this.fEngine.getAR2GRTime(); };
    GuidoEngine.prototype.getOnDrawTime = function () { return this.fEngine.getOnDrawTime(); };
    //------------------------------------------------------------------------
    // Guido mappings interface
    GuidoEngine.prototype.getPageMap = function (gr, page, w, h) { return this.fScoreMap.getPageMap(gr, page, w, h); };
    GuidoEngine.prototype.getStaffMap = function (gr, page, w, h, staff) { return this.fScoreMap.getStaffMap(gr, page, w, h, staff); };
    GuidoEngine.prototype.getVoiceMap = function (gr, page, w, h, voice) { return this.fScoreMap.getVoiceMap(gr, page, w, h, voice); };
    GuidoEngine.prototype.getSystemMap = function (gr, page, w, h) { return this.fScoreMap.getSystemMap(gr, page, w, h); };
    GuidoEngine.prototype.getTime = function (date, map) { return this.fScoreMap.getTime(date, map); };
    GuidoEngine.prototype.getPoint = function (x, y, map) { return this.fScoreMap.getPoint(x, y, map); };
    GuidoEngine.prototype.getTimeMap = function (ar) { return this.fScoreMap.getTimeMap(ar); };
    GuidoEngine.prototype.getPianoRollMap = function (pr, width, height) { return this.fScoreMap.getPianoRollMap(pr, width, height); };
    //------------------------------------------------------------------------
    // Guido piano roll interface
    GuidoEngine.prototype.ar2PianoRoll = function (type, ar) { return this.fPianoRoll.ar2PianoRoll(type, ar); };
    GuidoEngine.prototype.destroyPianoRoll = function (pr) { return this.fPianoRoll.destroyPianoRoll(pr); };
    GuidoEngine.prototype.prSetLimits = function (pr, limits) { return this.fPianoRoll.setLimits(pr, limits); };
    GuidoEngine.prototype.prEnableKeyboard = function (pr, status) { return this.fPianoRoll.enableKeyboard(pr, status); };
    GuidoEngine.prototype.prGetKeyboardWidth = function (pr, height) { return this.fPianoRoll.getKeyboardWidth(pr, height); };
    GuidoEngine.prototype.prEnableAutoVoicesColoration = function (pr, status) { return this.fPianoRoll.enableAutoVoicesColoration(pr, status); };
    GuidoEngine.prototype.prSetVoiceColor = function (pr, voice, r, g, b, a) { return this.fPianoRoll.setRGBColorToVoice(pr, voice, r, g, b, a); };
    GuidoEngine.prototype.prSetVoiceNamedColor = function (pr, voice, c) { return this.fPianoRoll.setColorToVoice(pr, voice, c); };
    GuidoEngine.prototype.prRemoveVoiceColor = function (pr, voice) { return this.fPianoRoll.removeColorToVoice(pr, voice); };
    GuidoEngine.prototype.prEnableMeasureBars = function (pr, status) { return this.fPianoRoll.enableMeasureBars(pr, status); };
    GuidoEngine.prototype.prSetPitchLinesDisplayMode = function (pr, mode) { return this.fPianoRoll.setPitchLinesDisplayMode(pr, mode); };
    GuidoEngine.prototype.proll2svg = function (pr, w, h) { return this.fPianoRoll.svgExport(pr, w, h); };
    GuidoEngine.prototype.prGetMap = function (pr, width, height) { return this.fPianoRoll.getMap(pr, width, height); };
    GuidoEngine.prototype.prSvgExport = function (pr, width, height) { return this.fPianoRoll.svgExport(pr, width, height); };
    GuidoEngine.prototype.prJsExport = function (pr, width, height) { return this.fPianoRoll.javascriptExport(pr, width, height); };
    //------------------------------------------------------------------------
    // Guido factory interface
    GuidoEngine.prototype.openMusic = function () { return this.fFactory.openMusic(); };
    GuidoEngine.prototype.closeMusic = function () { return this.fFactory.closeMusic(); };
    GuidoEngine.prototype.openVoice = function () { return this.fFactory.openVoice(); };
    GuidoEngine.prototype.closeVoice = function () { return this.fFactory.closeVoice(); };
    GuidoEngine.prototype.openChord = function () { return this.fFactory.openChord(); };
    GuidoEngine.prototype.closeChord = function () { return this.fFactory.closeChord(); };
    GuidoEngine.prototype.insertCommata = function () { return this.fFactory.insertCommata(); };
    GuidoEngine.prototype.openEvent = function (name) { return this.fFactory.openEvent(name); };
    GuidoEngine.prototype.closeEvent = function () { return this.fFactory.closeEvent(); };
    GuidoEngine.prototype.addSharp = function () { return this.fFactory.addSharp(); };
    GuidoEngine.prototype.addFlat = function () { return this.fFactory.addFlat(); };
    GuidoEngine.prototype.setEventDots = function (dots) { return this.fFactory.setEventDots(dots); };
    GuidoEngine.prototype.setEventAccidentals = function (acc) { return this.fFactory.setEventAccidentals(acc); };
    GuidoEngine.prototype.setOctave = function (oct) { return this.fFactory.setOctave(oct); };
    GuidoEngine.prototype.setDuration = function (numerator, denominator) { return this.fFactory.setDuration(numerator, denominator); };
    GuidoEngine.prototype.openTag = function (name, tagID) { return this.fFactory.openTag(name, tagID); };
    GuidoEngine.prototype.openRangeTag = function (name, tagID) { return this.fFactory.openRangeTag(name, tagID); };
    GuidoEngine.prototype.endTag = function () { return this.fFactory.endTag(); };
    GuidoEngine.prototype.closeTag = function () { return this.fFactory.closeTag(); };
    GuidoEngine.prototype.addTagParameterString = function (val) { return this.fFactory.addTagParameterString(val); };
    GuidoEngine.prototype.addTagParameterInt = function (val) { return this.fFactory.addTagParameterInt(val); };
    GuidoEngine.prototype.addTagParameterFloat = function (val) { return this.fFactory.addTagParameterFloat(val); };
    GuidoEngine.prototype.setParameterName = function (name) { return this.fFactory.setParameterName(name); };
    GuidoEngine.prototype.setParameterUnit = function (unit) { return this.fFactory.setParameterUnit(unit); };
    return GuidoEngine;
}());
var GuidoMapping;
(function (GuidoMapping) {
    GuidoMapping[GuidoMapping["kNoMapping"] = 0] = "kNoMapping";
    GuidoMapping[GuidoMapping["kVoiceMapping"] = 1] = "kVoiceMapping";
    GuidoMapping[GuidoMapping["kStaffMapping"] = 2] = "kStaffMapping";
    GuidoMapping[GuidoMapping["kSystemMapping"] = 4] = "kSystemMapping";
})(GuidoMapping || (GuidoMapping = {}));
var GuidoErrCode;
(function (GuidoErrCode) {
    //! null is used to denote no error
    GuidoErrCode[GuidoErrCode["guidoNoErr"] = 0] = "guidoNoErr";
    //! error while parsing the Guido format
    GuidoErrCode[GuidoErrCode["guidoErrParse"] = -1] = "guidoErrParse";
    //! memory allocation error
    GuidoErrCode[GuidoErrCode["guidoErrMemory"] = -2] = "guidoErrMemory";
    //! error while reading or writing a file
    GuidoErrCode[GuidoErrCode["guidoErrFileAccess"] = -3] = "guidoErrFileAccess";
    //! the user cancelled the action
    GuidoErrCode[GuidoErrCode["guidoErrUserCancel"] = -4] = "guidoErrUserCancel";
    //! the music font is not available
    GuidoErrCode[GuidoErrCode["guidoErrNoMusicFont"] = -5] = "guidoErrNoMusicFont";
    //! the text font is not available
    GuidoErrCode[GuidoErrCode["guidoErrNoTextFont"] = -6] = "guidoErrNoTextFont";
    //! bad parameter used as argument
    GuidoErrCode[GuidoErrCode["guidoErrBadParameter"] = -7] = "guidoErrBadParameter";
    //! invalid handler used
    GuidoErrCode[GuidoErrCode["guidoErrInvalidHandle"] = -8] = "guidoErrInvalidHandle";
    //! required initialisation has not been performed
    GuidoErrCode[GuidoErrCode["guidoErrNotInitialized"] = -9] = "guidoErrNotInitialized";
    //! the action failed
    GuidoErrCode[GuidoErrCode["guidoErrActionFailed"] = -10] = "guidoErrActionFailed";
})(GuidoErrCode || (GuidoErrCode = {}));
var GuidoElementSelector;
(function (GuidoElementSelector) {
    GuidoElementSelector[GuidoElementSelector["kGuidoPage"] = 0] = "kGuidoPage";
    GuidoElementSelector[GuidoElementSelector["kGuidoSystem"] = 1] = "kGuidoSystem";
    GuidoElementSelector[GuidoElementSelector["kGuidoSystemSlice"] = 2] = "kGuidoSystemSlice";
    GuidoElementSelector[GuidoElementSelector["kGuidoStaff"] = 3] = "kGuidoStaff";
    /*kGuidoMeasure,*/
    GuidoElementSelector[GuidoElementSelector["kGuidoBar"] = 4] = "kGuidoBar";
    GuidoElementSelector[GuidoElementSelector["kGuidoEvent"] = 5] = "kGuidoEvent";
    GuidoElementSelector[GuidoElementSelector["kGuidoScoreElementEnd"] = 6] = "kGuidoScoreElementEnd";
})(GuidoElementSelector || (GuidoElementSelector = {}));
var GuidoElementType;
(function (GuidoElementType) {
    GuidoElementType[GuidoElementType["kNote"] = 1] = "kNote";
    GuidoElementType[GuidoElementType["kRest"] = 2] = "kRest";
    GuidoElementType[GuidoElementType["kEmpty"] = 3] = "kEmpty";
    GuidoElementType[GuidoElementType["kBar"] = 4] = "kBar";
    GuidoElementType[GuidoElementType["kRepeatBegin"] = 5] = "kRepeatBegin";
    GuidoElementType[GuidoElementType["kRepeatEnd"] = 6] = "kRepeatEnd";
    GuidoElementType[GuidoElementType["kStaff"] = 7] = "kStaff";
    GuidoElementType[GuidoElementType["kSystemSlice"] = 8] = "kSystemSlice";
    GuidoElementType[GuidoElementType["kSystem"] = 9] = "kSystem";
    GuidoElementType[GuidoElementType["kPage"] = 10] = "kPage";
})(GuidoElementType || (GuidoElementType = {}));
var PianoRollType;
(function (PianoRollType) {
    PianoRollType[PianoRollType["kSimplePianoRoll"] = 0] = "kSimplePianoRoll";
    PianoRollType[PianoRollType["kTrajectoryPianoRoll"] = 1] = "kTrajectoryPianoRoll";
})(PianoRollType || (PianoRollType = {}));
var PianoRollLineMode;
(function (PianoRollLineMode) {
    // pîano roll: pitch line display modes
    PianoRollLineMode[PianoRollLineMode["kPRCLine"] = 1] = "kPRCLine";
    PianoRollLineMode[PianoRollLineMode["kPRCSharpLine"] = 2] = "kPRCSharpLine";
    PianoRollLineMode[PianoRollLineMode["kPRDLine"] = 4] = "kPRDLine";
    PianoRollLineMode[PianoRollLineMode["kPRDSharpLine"] = 8] = "kPRDSharpLine";
    PianoRollLineMode[PianoRollLineMode["kPRELine"] = 16] = "kPRELine";
    PianoRollLineMode[PianoRollLineMode["kPRFLine"] = 32] = "kPRFLine";
    PianoRollLineMode[PianoRollLineMode["kPRFSharpLine"] = 64] = "kPRFSharpLine";
    PianoRollLineMode[PianoRollLineMode["kPRGLine"] = 128] = "kPRGLine";
    PianoRollLineMode[PianoRollLineMode["kPRGSharpLine"] = 256] = "kPRGSharpLine";
    PianoRollLineMode[PianoRollLineMode["kPRALine"] = 512] = "kPRALine";
    PianoRollLineMode[PianoRollLineMode["kPRASharpLine"] = 1024] = "kPRASharpLine";
    PianoRollLineMode[PianoRollLineMode["kPRBLine"] = 2048] = "kPRBLine";
    PianoRollLineMode[PianoRollLineMode["kPRAutoLines"] = 0] = "kPRAutoLines";
    PianoRollLineMode[PianoRollLineMode["kPRNoLine"] = -1] = "kPRNoLine";
})(PianoRollLineMode || (PianoRollLineMode = {}));
var TLog = /** @class */ (function () {
    function TLog() {
    }
    TLog.prototype.log = function (msg) {
        console.log(msg);
    };
    TLog.prototype.error = function (msg) {
        console.error(msg);
    };
    return TLog;
}());
///<reference path="JSSVGBase.ts"/>
///<reference path="guidoengine.ts"/>
///<reference path="TLog.ts"/>
var JSGMNView = /** @class */ (function (_super) {
    __extends(JSGMNView, _super);
    function JSGMNView(parent, guido) {
        var _this = _super.call(this, parent) || this;
        _this.fAR = null;
        _this.fGR = null;
        _this.fPage = 0;
        _this.getElement().className = "inscore-gmn";
        _this.fGuido = guido;
        _this.fGR = null;
        _this.fAR = null;
        if (guido)
            _this.fParser = guido.openParser();
        return _this;
    }
    JSGMNView.prototype.scanMap = function (name) {
        var n = name.match(/([a-z]+)(\d+)/);
        if (!n)
            return { name: "", index: 0 };
        return { name: n[1], index: parseInt(n[2]) };
    };
    JSGMNView.prototype.scanViewBox = function (vbox) {
        var n = vbox.match(/(\d+) (\d+) (\d+) (\d+)/);
        if (!n)
            return { width: 0, height: 0 };
        return { width: parseInt(n[3]), height: parseInt(n[4]) };
    };
    JSGMNView.prototype.clone = function (parent) { return new JSGMNView(parent, this.fGuido); };
    JSGMNView.prototype.getSVGTarget = function () { return this.fSVG; };
    JSGMNView.prototype.toString = function () { return "JSGMNView"; };
    JSGMNView.prototype.updateSVGDimensions = function (w, h) { };
    JSGMNView.prototype.guido = function () { return this.fGuido; };
    JSGMNView.prototype.ready = function () { return this.fGR != null; };
    JSGMNView.prototype["delete"] = function () {
        if (this.fGR) {
            this.fGuido.freeGR(this.fGR);
            this.fGuido.freeAR(this.fAR);
            this.fGR = null;
            this.fAR = null;
        }
        this.fGuido.closeParser(this.fParser);
        this.fParser = null;
        _super.prototype["delete"].call(this);
    };
    JSGMNView.prototype.updatePenControl = function (pen) { this.updateRegularPen(pen); };
    JSGMNView.prototype.parse = function (gmn) { return this.fGuido.string2AR(this.fParser, gmn); };
    JSGMNView.prototype.string2Ar = function (obj, gmn) { return this.parse(gmn); };
    JSGMNView.prototype.gmn2svg = function (obj, gmn, page) {
        var ar = this.string2Ar(obj, gmn);
        if (ar) {
            var gr = this.fGuido.ar2gr(ar);
            var svg = this.fGuido.gr2SVG(gr, page, false, 0);
            this.fSVG.innerHTML = svg;
            var innerSvg = this.fSVG.getElementsByTagName('svg');
            var viewbox = this.scanViewBox(innerSvg[0].getAttribute('viewBox'));
            this.updateObjectSizeSync(obj, viewbox.width, viewbox.height);
            obj.updateTime2TimeMap(this.fGuido.getTimeMap(ar));
            if (this.fGR) {
                this.fGuido.freeGR(this.fGR);
                this.fGuido.freeAR(this.fAR);
            }
            else {
                var address = obj.getOSCAddress();
                this.refresh(address);
            }
            this.fGR = gr;
            this.fAR = ar;
            this.fPage = page;
            return true;
        }
        else
            gLog.error(obj.getOSCAddress() + " failed to parse gmn code.");
        return false;
    };
    JSGMNView.prototype.updateSpecial = function (obj, oid) {
        var guido = obj.getGuidoInfos();
        if (this.fGuido)
            return this.gmn2svg(obj, guido.code, guido.page);
        else
            gLog.log("Guido engine is not available");
        return false;
    };
    // this method is called by the model to update the map synchronously
    JSGMNView.getMapping = function (mapname, id, oid) {
        var view = JSObjectView.getObjectView(id);
        if (view) {
            var obj = INScore.objects().create(oid);
            var w = view.getSVGTarget().clientWidth;
            var h = view.getSVGTarget().clientHeight;
            var map = view.getMap(mapname, w, h);
            obj.updateGraphic2TimeMap(mapname, map, w, h);
            INScore.objects().del(obj);
        }
    };
    JSGMNView.prototype.getMap = function (mapname, width, height) {
        if (mapname == "page")
            return this.fGuido.getPageMap(this.fGR, this.fPage, width, height);
        if (mapname == "system")
            return this.fGuido.getSystemMap(this.fGR, this.fPage, width, height);
        var m = this.scanMap(mapname);
        if (m.name == "staff")
            return this.fGuido.getStaffMap(this.fGR, this.fPage, width, height, m.index);
        else if (m.name == "voice")
            return this.fGuido.getVoiceMap(this.fGR, this.fPage, width, height, m.index);
        return null;
    };
    JSGMNView.prototype.updateColor = function (color) {
        var g = this.getFirstGroup(this.fSVG);
        if (g) {
            g.style.stroke = color.rgb;
            g.style.strokeOpacity = color.alpha.toString();
            g.style.fill = color.rgb;
            g.style.fillOpacity = color.alpha.toString();
        }
    };
    //------------------------------------------------------------------------------------
    // utilities
    // getFirstGroup(root: Node): SVGSVGElement {
    JSGMNView.prototype.getFirstGroup = function (root) {
        var g = root.getElementsByTagName('g');
        return g[0];
    };
    return JSGMNView;
}(JSSvgBase));
///<reference path="JSGMNView.ts"/>
var JSGMNStreamView = /** @class */ (function (_super) {
    __extends(JSGMNStreamView, _super);
    function JSGMNStreamView(parent, guido) {
        var _this = _super.call(this, parent, guido) || this;
        _this.fStream = null;
        if (guido)
            _this.fStream = guido.openStream();
        return _this;
    }
    JSGMNStreamView.prototype.clone = function (parent) { return new JSGMNStreamView(parent, this.guido()); };
    JSGMNStreamView.prototype["delete"] = function () {
        this.guido().closeStream(this.fStream);
        this.fStream = null;
        _super.prototype["delete"].call(this);
    };
    JSGMNStreamView.prototype.toString = function () { return "JSGMNStreamView"; };
    JSGMNStreamView.prototype.string2Ar = function (obj, gmn) { return this.guido().stream2AR(this.fParser, this.fStream); };
    JSGMNStreamView.prototype.updateSpecial = function (obj, oid) {
        if (!this.fStream)
            return false;
        var gmn = obj.getGuidoStream();
        if (gmn.reset)
            this.guido().resetStream(this.fStream);
        if (gmn.stream.length)
            this.guido().writeStream(this.fStream, gmn.stream);
        return _super.prototype.updateSpecial.call(this, obj, oid);
    };
    return JSGMNStreamView;
}(JSGMNView));
var TFileLoader = /** @class */ (function () {
    function TFileLoader() {
    }
    TFileLoader.getMusicXML = function (element) {
        if (element.nodeName == "score-partwise") {
            var content = '<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">\n';
            var version = element.getAttributeNode('version');
            content += version ? '<score-partwise version="' + version.textContent + '">' : '<score-partwise>';
            content += element.innerHTML;
            content += '</score-partwise>';
            return content;
        }
        console.error("unsupported MusicXML type " + element.nodeName);
        return null;
    };
    TFileLoader.getContent = function (obj) {
        var doc = obj.contentDocument;
        if (!doc)
            return null;
        var content = "";
        var element = doc.documentElement;
        switch (doc.contentType) {
            case "text/plain":
                content = element.innerText;
                break;
            case "text/html":
                content = element.innerHTML;
                break;
            case "image/svg+xml":
                content = element.innerHTML;
                break;
            case "text/xml":
                content = TFileLoader.getMusicXML(element);
                break;
            default:
                console.error("Unsupported content type " + doc.contentType);
                content = null;
        }
        obj.parentElement.removeChild(obj);
        return content;
    };
    TFileLoader.load = function (div, file) {
        var obj = document.createElement('object');
        obj.type = "text/plain";
        obj.data = file;
        obj.style.visibility = "hidden";
        div.appendChild(obj);
        return new Promise(function (resolve, failure) {
            obj.addEventListener("error", function () { console.error("can't open file " + file); });
            obj.addEventListener("load", function () {
                var content = TFileLoader.getContent(obj);
                resolve(content);
            });
        });
    };
    return TFileLoader;
}());
///<reference path="TFileLoader.ts"/>
var TFileBased = /** @class */ (function () {
    function TFileBased() {
        this.fContent = "";
    }
    TFileBased.prototype.getData = function (file, div, pending) {
        var _this = this;
        if (pending === void 0) { pending = null; }
        if (this.fContent == null)
            return true; // error while loading file, don't try again
        if (this.fContent.length)
            return true; // done - content is available
        TFileLoader.load(div, file).then(function (text) {
            _this.fContent = text;
            if (pending)
                pending();
        });
        return false;
    };
    TFileBased.prototype.get = function () {
        var content = "";
        if (this.fContent) {
            content = this.fContent;
            this.fContent = "";
        }
        return content;
    };
    return TFileBased;
}());
///<reference path="JSGMNView.ts"/>
///<reference path="TFileBased.ts"/>
var JSGMNfView = /** @class */ (function (_super) {
    __extends(JSGMNfView, _super);
    function JSGMNfView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fContent = new TFileBased;
        return _this;
    }
    JSGMNfView.prototype.toString = function () { return "JSGMNfView"; };
    JSGMNfView.prototype.updateSpecial = function (obj, oid) {
        var _this = this;
        var address = obj.getOSCAddress();
        var pending = function () { _this.refresh(address); };
        if (this.fContent.getData(obj.getFile(), this.getElement(), pending))
            return _super.prototype.updateSpecial.call(this, obj, oid);
        return false;
    };
    JSGMNfView.prototype.gmn2svg = function (obj, unused, page) {
        var gmn = this.fContent.get();
        if (gmn)
            return _super.prototype.gmn2svg.call(this, obj, gmn, page);
        return false;
    };
    return JSGMNfView;
}(JSGMNView));
///<reference path="JSAutoSize.ts"/>
var JSHtmlView = /** @class */ (function (_super) {
    __extends(JSHtmlView, _super);
    function JSHtmlView(parent) {
        var _this = _super.call(this, document.createElement('div'), parent) || this;
        _this.getElement().className = "inscore-html";
        return _this;
    }
    JSHtmlView.prototype.clone = function (parent) { return new JSHtmlView(parent); };
    JSHtmlView.prototype.toString = function () { return "JSHtmlView"; };
    // CSS weight are used as numbers
    JSHtmlView.fontWeight2Num = function (weight) {
        switch (weight) {
            case "normal": return "400";
            case "light": return "50";
            case "demibold": return "600";
            case "bold": return "800";
            case "black": return "1000";
            default: return "400";
        }
    };
    JSHtmlView.prototype.setFont = function (font) {
        var elt = this.getElement();
        elt.style.fontSize = font.size + "px";
        elt.style.fontFamily = font.family;
        elt.style.fontStyle = font.style;
        elt.style.fontWeight = JSHtmlView.fontWeight2Num(font.weight);
    };
    JSHtmlView.prototype.removeEffect = function (elt) {
        elt.style.filter = "blur(0px)";
        elt.style.textShadow = "0px 0px";
    };
    JSHtmlView.prototype.setBlur = function (elt, val) {
        elt.style.textShadow = "0px 0px";
        elt.style.filter = "blur(" + val + "px)";
    };
    JSHtmlView.prototype.setShadow = function (elt, val) {
        elt.style.filter = "blur(0px)";
        elt.style.textShadow = val.color + " " + val.xOffset + "px " + val.yOffset + "px " + val.blur + "px";
    };
    // don't update text dimensions
    JSHtmlView.prototype.updateDimensions = function (pos) { };
    JSHtmlView.prototype.updateSpecific = function (obj) {
        this.setFont(obj.getTextInfos());
    };
    JSHtmlView.prototype.getText = function (infos) { return infos.text; };
    JSHtmlView.prototype.updateSpecial = function (obj, objid) {
        var infos = obj.getTextInfos();
        this.getElement().innerHTML = this.getText(infos);
        this.setFont(infos);
        _super.prototype.updateSpecial.call(this, obj, objid);
        return true;
    };
    return JSHtmlView;
}(JSAutoSize));
///<reference path="JSHtmlView.ts"/>
///<reference path="TFileBased.ts"/>
var JSHtmlfView = /** @class */ (function (_super) {
    __extends(JSHtmlfView, _super);
    function JSHtmlfView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fContent = new TFileBased;
        return _this;
    }
    JSHtmlfView.prototype.toString = function () { return "JSHtmlfView"; };
    JSHtmlfView.prototype.updateSpecial = function (obj, oid) {
        var address = obj.getOSCAddress();
        var pending = function () { inscore.postMessageStr(address, "refresh"); };
        if (this.fContent.getData(obj.getFile(), this.getElement(), pending))
            return _super.prototype.updateSpecial.call(this, obj, oid);
        return false;
    };
    JSHtmlfView.prototype.getText = function (infos) {
        return this.fContent.get();
    };
    return JSHtmlfView;
}(JSHtmlView));
///<reference path="JSAutoSize.ts"/>
var JSImageView = /** @class */ (function (_super) {
    __extends(JSImageView, _super);
    function JSImageView(parent) {
        var _this = this;
        var div = document.createElement('div');
        var img = document.createElement('img');
        // an additional div to cope with synchronisation issue:
        // broswers don't support div in image div
        div.appendChild(img);
        _this = _super.call(this, div, parent) || this;
        _this.fImage = img;
        _this.getElement().className = "inscore-img";
        img.addEventListener("dragenter", null);
        img.addEventListener("dragleave", null);
        return _this;
    }
    JSImageView.prototype.clone = function (parent) { return new JSImageView(parent); };
    JSImageView.prototype.toString = function () { return "JSImageView"; };
    JSImageView.prototype.getAutoSize = function () {
        return { x: this.fImage.clientWidth, y: this.fImage.clientHeight };
    };
    JSImageView.prototype.updateSpecial = function (obj, objid) {
        this.fImage.src = obj.getFile();
        return _super.prototype.updateSpecial.call(this, obj, objid);
    };
    JSImageView.prototype.setShadow = function (elt, val) {
        this.fImage.style.boxShadow = val.xOffset + "px " + val.yOffset + "px " + val.blur + "px " + val.color;
    };
    return JSImageView;
}(JSAutoSize));
///<reference path="JSObjectView.ts"/>
var JSLayerView = /** @class */ (function (_super) {
    __extends(JSLayerView, _super);
    function JSLayerView(parent) {
        var _this = _super.call(this, document.createElement('div'), parent) || this;
        _this.getElement().className = "inscore-layer";
        return _this;
    }
    JSLayerView.prototype.clone = function (parent) { return new JSLayerView(parent); };
    JSLayerView.prototype.toString = function () { return "JSLayerView"; };
    return JSLayerView;
}(JSObjectView));
///<reference path="JSSVGBase.ts"/>
var JSLineView = /** @class */ (function (_super) {
    __extends(JSLineView, _super);
    function JSLineView(parent) {
        var _this = _super.call(this, parent) || this;
        _this.fLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        _this.getElement().className = "inscore-line";
        _this.fSVG.appendChild(_this.fLine);
        return _this;
    }
    JSLineView.prototype.clone = function (parent) { return new JSLineView(parent); };
    JSLineView.prototype.getSVGTarget = function () { return this.fLine; };
    JSLineView.prototype.toString = function () { return "JSLineView"; };
    JSLineView.prototype.updateSVGDimensions = function (w, h) { };
    JSLineView.prototype.getRatio = function () {
        var div = this.getElement();
        return Math.max(Math.min(div.clientWidth, div.clientHeight) / Math.min(div.parentElement.clientWidth, div.parentElement.clientHeight), 0.022);
    };
    JSLineView.prototype.updateSpecial = function (obj, objid) {
        var line = obj.getLineInfos();
        var x1 = this.relative2SceneWidth(line.x1);
        var y1 = this.relative2SceneHeight(line.y1);
        var x2 = this.relative2SceneWidth(line.x2);
        var y2 = this.relative2SceneHeight(line.y2);
        this.fLine.setAttribute('x1', x1.toString());
        this.fLine.setAttribute('x2', x2.toString());
        this.fLine.setAttribute('y1', y1.toString());
        this.fLine.setAttribute('y2', y2.toString());
        return true;
    };
    JSLineView.prototype.updatePenControl = function (pen) {
        var elt = this.getSVGTarget();
        elt.style.strokeWidth = pen.penWidth.toString();
        elt.style.stroke = pen.penColor;
        elt.style.strokeDasharray = JSSvgBase.penStyle2Dash(pen.penStyle);
        if (pen.brushStyle == TBrushStyle.kNoBrush)
            elt.style.fill = "none";
        else {
            elt.style.fill = pen.color;
            elt.style.fillOpacity = pen.alpha.toString();
        }
    };
    return JSLineView;
}(JSSvgBase));
///<reference path="JSGMNView.ts"/>
var JSPianoRollView = /** @class */ (function (_super) {
    __extends(JSPianoRollView, _super);
    function JSPianoRollView(parent, guido) {
        var _this = _super.call(this, parent, guido) || this;
        _this.getElement().className = "inscore-pianoroll";
        return _this;
    }
    JSPianoRollView.prototype.clone = function (parent) { return new JSPianoRollView(parent, this.guido()); };
    JSPianoRollView.prototype.toString = function () { return "JSPianoRollView"; };
    JSPianoRollView.prototype.date2string = function (date) { return date.num + "/" + date.denum; };
    JSPianoRollView.prototype.getGmn = function (proll) { return proll.code; };
    JSPianoRollView.prototype.proll2svg = function (obj, proll) {
        var ar = this.parse(this.getGmn(proll));
        if (ar) {
            var guido = this.guido();
            var pr = guido.ar2PianoRoll(PianoRollType.kSimplePianoRoll, ar);
            guido.prEnableKeyboard(pr, proll.keyboard);
            guido.prEnableMeasureBars(pr, proll.bars);
            guido.prEnableAutoVoicesColoration(pr, proll.autovoicecolor);
            var l = proll.limits;
            var limits = { startDate: { num: l.start.num, denom: l.start.denum },
                endDate: { num: l.end.num, denom: l.end.denum },
                lowPitch: l.lowpitch, highPitch: l.highpitch };
            guido.prSetLimits(pr, limits);
            var svg = this.guido().proll2svg(pr, 400, 200);
            this.fSVG.innerHTML = svg;
            this.guido().destroyPianoRoll(pr);
            this.guido().freeAR(ar);
            return true;
        }
        return false;
    };
    JSPianoRollView.prototype.updateSpecial = function (obj, oid) {
        var proll = obj.getPianorollInfos();
        if (this.guido()) {
            if (this.proll2svg(obj, proll)) {
                var bb = this.fSVG.getBBox();
                this.updateObjectSizeSync(obj, bb.width + bb.x, bb.height + bb.y);
                return true;
            }
        }
        else
            gLog.log("Guido engine is not available");
        return false;
    };
    return JSPianoRollView;
}(JSGMNView));
///<reference path="JSPianoRollView.ts"/>
///<reference path="TFileBased.ts"/>
var JSPianoRollfView = /** @class */ (function (_super) {
    __extends(JSPianoRollfView, _super);
    function JSPianoRollfView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fContent = new TFileBased;
        return _this;
    }
    JSPianoRollfView.prototype.toString = function () { return "JSPianoRollfView"; };
    JSPianoRollfView.prototype.updateSpecial = function (obj, oid) {
        var _this = this;
        var address = obj.getOSCAddress();
        var pending = function () { _this.refresh(address); };
        if (this.fContent.getData(obj.getFile(), this.getElement(), pending))
            return _super.prototype.updateSpecial.call(this, obj, oid);
        return false;
    };
    JSPianoRollfView.prototype.getGmn = function (proll) {
        var gmn = this.fContent.get();
        return (gmn) ? gmn : "";
    };
    return JSPianoRollfView;
}(JSPianoRollView));
///<reference path="JSSVGBase.ts"/>
var JSPolygonView = /** @class */ (function (_super) {
    __extends(JSPolygonView, _super);
    function JSPolygonView(parent) {
        var _this = _super.call(this, parent) || this;
        _this.fPolygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        _this.getElement().className = "inscore-polygon";
        _this.fSVG.appendChild(_this.fPolygon);
        return _this;
    }
    JSPolygonView.prototype.clone = function (parent) { return new JSPolygonView(parent); };
    JSPolygonView.prototype.toString = function () { return "JSPolygonView"; };
    JSPolygonView.prototype.getSVGTarget = function () { return this.fPolygon; };
    JSPolygonView.prototype.updateSVGDimensions = function (w, h) { };
    JSPolygonView.prototype.updateSpecial = function (obj, objid) {
        var points = obj.getPolygonInfos();
        var minx = 0x1fffffff;
        var miny = 0x1fffffff;
        var n = points.size();
        for (var i = 0; i < n; i++) {
            minx = Math.min(minx, points.get(i++));
            miny = Math.min(miny, points.get(i));
        }
        var strPoints = '';
        for (var i = 0; i < n; i++) {
            var x = this.relative2SceneWidth(points.get(i++) - minx);
            var y = this.relative2SceneWidth(points.get(i) - miny);
            strPoints += x + ',' + y + ' ';
        }
        this.fPolygon.setAttribute('points', strPoints);
        return true;
    };
    return JSPolygonView;
}(JSSvgBase));
///<reference path="JSSVGBase.ts"/>
var JSRectView = /** @class */ (function (_super) {
    __extends(JSRectView, _super);
    function JSRectView(parent) {
        var _this = _super.call(this, parent) || this;
        _this.fRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        _this.getElement().className = "inscore-rect";
        _this.fSVG.appendChild(_this.fRect);
        _this.fRect.addEventListener("dragenter", null);
        _this.fRect.addEventListener("dragleave", null);
        return _this;
    }
    JSRectView.prototype.clone = function (parent) { return new JSRectView(parent); };
    JSRectView.prototype.getSVGTarget = function () { return this.fRect; };
    JSRectView.prototype.toString = function () { return "JSRectView"; };
    JSRectView.prototype.updateSVGDimensions = function (w, h) {
        this.fRect.style.width = w + "px";
        this.fRect.style.height = h + "px";
    };
    JSRectView.prototype.updateSpecific = function (obj) {
        var radius = obj.getRadius();
        this.fRect.setAttribute('rx', radius.x.toString());
        this.fRect.setAttribute('ry', radius.y.toString());
    };
    return JSRectView;
}(JSSvgBase));
///<reference path="JSSVGBase.ts"/>
var JSSVGView = /** @class */ (function (_super) {
    __extends(JSSVGView, _super);
    function JSSVGView(parent) {
        var _this = _super.call(this, parent) || this;
        _this.getElement().className = "inscore-svg";
        return _this;
    }
    JSSVGView.prototype.clone = function (parent) { return new JSSVGView(parent); };
    JSSVGView.prototype.toString = function () { return "JSSVGView"; };
    JSSVGView.prototype.getSVGTarget = function () { return this.fSVG; };
    JSSVGView.prototype.updateSVGDimensions = function (w, h) { };
    JSSVGView.prototype.updatePenControl = function (pen) { this.updateRegularPen(pen); };
    JSSVGView.prototype.getSvg = function (obj) { return obj.getSVGInfos(); };
    JSSVGView.prototype.updateSpecial = function (obj, oid) {
        var svg = this.getSvg(obj);
        this.fSVG.innerHTML = svg;
        var bb = this.fSVG.getBBox();
        this.updateObjectSizeSync(obj, bb.width + bb.x, bb.height + bb.y);
        return true;
    };
    return JSSVGView;
}(JSSvgBase));
///<reference path="JSSVGView.ts"/>
///<reference path="TFileBased.ts"/>
var JSSVGfView = /** @class */ (function (_super) {
    __extends(JSSVGfView, _super);
    function JSSVGfView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fContent = new TFileBased;
        return _this;
    }
    JSSVGfView.prototype.toString = function () { return "JSSVGfView"; };
    JSSVGfView.prototype.getSvg = function (obj) {
        var svg = this.fContent.get();
        return svg ? svg : "";
    };
    JSSVGfView.prototype.updateSpecial = function (obj, oid) {
        var _this = this;
        var address = obj.getOSCAddress();
        var pending = function () { _this.refresh(address); };
        if (this.fContent.getData(obj.getFile(), this.getElement(), pending))
            return _super.prototype.updateSpecial.call(this, obj, oid);
        return false;
    };
    return JSSVGfView;
}(JSSVGView));
///<reference path="JSObjectView.ts"/>
//----------------------------------------------------------------------------
var JSSceneView = /** @class */ (function (_super) {
    __extends(JSSceneView, _super);
    function JSSceneView(id, objid) {
        var _this = this;
        var div = document.getElementById(id);
        var style = window.getComputedStyle(div, null);
        var absolute = style.position == "absolute";
        _this = _super.call(this, div, null, absolute) || this;
        _this.fAbsolutePos = absolute;
        _this.updateObjectSize(objid, div.clientWidth, div.clientHeight);
        // for a yet unknown reason, removing the next line result in incorrect
        // children positionning (like if position becomes relative to the window)
        div.style.filter = "blur(0px)";
        return _this;
    }
    JSSceneView.prototype.clone = function (parent) { return null; };
    JSSceneView.prototype.toString = function () { return "JSSceneView"; };
    JSSceneView.prototype.parentWidth = function () { return this.getElement().parentElement.offsetWidth; };
    JSSceneView.prototype.parentHeight = function () { return this.getElement().parentElement.offsetHeight; };
    JSSceneView.prototype.updatePosition = function (pos, elt) {
        if (this.fAbsolutePos) {
            _super.prototype.updatePosition.call(this, pos, elt);
        }
        else {
            elt.style.visibility = (pos.hidden) ? "hidden" : "inherit";
            elt.style.transform = this.getTransform(pos);
        }
    };
    JSSceneView.prototype.updateColor = function (color) {
        var div = this.getElement();
        div.style.background = color.rgb;
        div.style.opacity = color.alpha.toString();
    };
    return JSSceneView;
}(JSObjectView));
///<reference path="JSHtmlView.ts"/>
var JSTextView = /** @class */ (function (_super) {
    __extends(JSTextView, _super);
    function JSTextView(parent) {
        var _this = _super.call(this, parent) || this;
        _this.getElement().className = "inscore-txt";
        return _this;
    }
    JSTextView.prototype.clone = function (parent) { return new JSTextView(parent); };
    JSTextView.prototype.toString = function () { return "JSTextView"; };
    JSTextView.prototype.getText = function (infos) {
        return infos.text.replace(/\r?\n'/g, "<br />");
    };
    return JSTextView;
}(JSHtmlView));
///<reference path="JSTextView.ts"/>
///<reference path="TFileBased.ts"/>
var JSTextfView = /** @class */ (function (_super) {
    __extends(JSTextfView, _super);
    function JSTextfView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fContent = new TFileBased;
        return _this;
    }
    JSTextfView.prototype.toString = function () { return "JSTextfView"; };
    JSTextfView.prototype.updateSpecial = function (obj, oid) {
        var _this = this;
        var address = obj.getOSCAddress();
        var pending = function () { _this.refresh(address); };
        if (this.fContent.getData(obj.getFile(), this.getElement(), pending))
            return _super.prototype.updateSpecial.call(this, obj, oid);
        return false;
    };
    JSTextfView.prototype.getText = function (infos) {
        var text = this.fContent.get();
        return text ? text.replace(/\r?\n'/g, "<br />") : "";
    };
    return JSTextfView;
}(JSTextView));
///<reference path="JSAutoSize.ts"/>
var JSVideoView = /** @class */ (function (_super) {
    __extends(JSVideoView, _super);
    function JSVideoView(parent) {
        var _this = this;
        var video = document.createElement('video');
        _this = _super.call(this, video, parent) || this;
        _this.fVideo = video;
        _this.fFile = "";
        _this.getElement().className = "inscore-video";
        return _this;
    }
    JSVideoView.prototype.clone = function (parent) { return new JSVideoView(parent); };
    JSVideoView.prototype.updateSpecial = function (obj, objid) {
        this.fVideo.src = obj.getFile();
        return _super.prototype.updateSpecial.call(this, obj, objid);
    };
    JSVideoView.prototype.setShadow = function (elt, val) {
        this.fVideo.style.filter = "drop-shadow(" + val.color + " " + val.xOffset + "px " + val.yOffset + "px " + val.blur + "px)";
    };
    // setShadow (params: Array<number>): void {
    // 	let color = new IColor( params.slice(2,6) );
    // 	this.getHtml().style.filter = "drop-shadow(" + color.getCSSRGBAString() + " "+ params[0] +"px " + params[1] +"px " + params[6] +"px)";
    // }
    JSVideoView.prototype.updateSpecific = function (obj) {
        var media = obj.getMediaInfos();
        if (media.playing)
            this.fVideo.play();
        else
            this.fVideo.pause();
        this.fVideo.volume = media.volume;
        if (media.rate >= 0)
            this.fVideo.playbackRate = media.rate;
        if (media.mdate >= 0)
            this.fVideo.currentTime = media.mdate;
        // video.fMLS       = this.fVideo.duration * 1000;
        // video.fVDuration = this.fVideo.duration / this.fVideo.playbackRate;
        return true;
    };
    return JSVideoView;
}(JSAutoSize));
///<reference path="lib/libmusicxml.d.ts"/>
//----------------------------------------------------------------------------
// the libMusicXML interface
//----------------------------------------------------------------------------
var libmusicxml = /** @class */ (function () {
    function libmusicxml() {
    }
    libmusicxml.prototype.initialise = function () {
        return __awaiter(this, void 0, void 0, function () {
            var module;
            var _this = this;
            return __generator(this, function (_a) {
                module = MusicXMLModule();
                return [2 /*return*/, new Promise(function (success, failure) {
                        module['onRuntimeInitialized'] = function () {
                            _this.fLibrary = new module.libMusicXMLAdapter();
                            // this.moduleInit (module);
                            success(_this);
                        };
                    })];
            });
        });
    };
    //------------------------------------------------------------------------
    // async initialization
    // moduleInit ( module ) {
    // 	this.fLibrary = new module.libMusicXMLAdapter();
    // }
    //------------------------------------------------------------------------
    // libMusicXML interface
    libmusicxml.prototype.libVersion = function () { return this.fLibrary.libVersion(); };
    libmusicxml.prototype.libVersionStr = function () { return this.fLibrary.libVersionStr(); };
    libmusicxml.prototype.musicxml2guidoVersion = function () { return this.fLibrary.musicxml2guidoVersion(); };
    libmusicxml.prototype.musicxml2guidoVersionStr = function () { return this.fLibrary.musicxml2guidoVersionStr(); };
    libmusicxml.prototype.string2guido = function (xml, genBars) { return this.fLibrary.string2guido(xml, genBars); };
    libmusicxml.prototype.xmlStringTranspose = function (xml, interval) { return this.fLibrary.xmlStringTranspose(xml, interval); };
    return libmusicxml;
}());
///<reference path="JSGMNView.ts"/>
///<reference path="libmusicxml.ts"/>
///<reference path="TLog.ts"/>
var JSXMLView = /** @class */ (function (_super) {
    __extends(JSXMLView, _super);
    function JSXMLView(parent, xmllib, guido) {
        var _this = _super.call(this, parent, guido) || this;
        _this.getElement().className = "inscore-gmn";
        _this.fXMLLib = xmllib;
        return _this;
    }
    JSXMLView.prototype.clone = function (parent) { return new JSXMLView(parent, this.fXMLLib, this.guido()); };
    JSXMLView.prototype.toString = function () { return "JSXMLView"; };
    JSXMLView.prototype.getXml = function (xml) { return xml.code; };
    JSXMLView.prototype.updateSpecial = function (obj, oid) {
        if (this.fXMLLib) {
            var xml = obj.getXMLInfos();
            var content = this.fXMLLib.string2guido(this.getXml(xml), true);
            return content.length ? this.gmn2svg(obj, content, xml.page) : false;
        }
        else
            gLog.log("libMusicXML is not available");
        return false;
    };
    return JSXMLView;
}(JSGMNView));
///<reference path="JSXMLView.ts"/>
///<reference path="TFileBased.ts"/>
var JSXMLfView = /** @class */ (function (_super) {
    __extends(JSXMLfView, _super);
    function JSXMLfView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fContent = new TFileBased;
        return _this;
    }
    JSXMLfView.prototype.toString = function () { return "JSXMLfView"; };
    JSXMLfView.prototype.updateSpecial = function (obj, oid) {
        var _this = this;
        var address = obj.getOSCAddress();
        var pending = function () { _this.refresh(address); };
        if (this.fContent.getData(obj.getFile(), this.getElement(), pending))
            return _super.prototype.updateSpecial.call(this, obj, oid);
        return false;
    };
    JSXMLfView.prototype.getXml = function (unused) {
        var xml = this.fContent.get();
        return xml ? xml : "";
    };
    return JSXMLfView;
}(JSXMLView));
///<reference path="JSObjectView.ts"/>
///<reference path="interfaces.ts"/>
var TMaster = /** @class */ (function () {
    function TMaster(m, s) {
        this.fMaster = m;
        this.fSlave = s;
        this.fClone = s.clone(m);
        m.getElement().appendChild(this.fClone.getElement());
    }
    TMaster.prototype.master = function () { return this.fMaster; };
    TMaster.prototype.slave = function () { return this.fClone; };
    TMaster.prototype.unsync = function () {
        this.master().getElement().removeChild(this.fClone.getElement());
        this.fClone["delete"]();
    };
    return TMaster;
}());
var TSyncManager = /** @class */ (function () {
    function TSyncManager(obj) {
        this.fSync = new Array();
        this.fRemoveChild = true;
        this.fTarget = obj;
    }
    TSyncManager.prototype.toString = function () { return "TSyncManager"; };
    TSyncManager.prototype.updateSync = function (obj, oid) {
        var _this = this;
        var m = obj.getMasters();
        var n = m.size() + this.countMasters();
        if (!n)
            return false;
        var masters = this.masters2Objects(m);
        var removed = this.obsolete(masters);
        var newmasters = this.newSync(masters);
        if (this.fRemoveChild) {
            this.fTarget.getParent().getElement().removeChild(this.fTarget.getElement());
            this.fRemoveChild = false;
        }
        removed.forEach(function (element, index) { _this.remove(index); });
        newmasters.forEach(function (element, index) { _this.add(element); });
        // the sync list is now updated
        var updated = 0;
        this.fSync.forEach(function (m, index) {
            if (m) {
                m.slave().updateView(obj, oid, m.master().getIObject(), false, true);
                updated++;
            }
        });
        if (updated)
            return true;
        this.fSync = [];
        this.fTarget.getParent().getElement().appendChild(this.fTarget.getElement());
        this.fRemoveChild = true;
        return false;
    };
    //-----------------------------------------------------------------------
    // table utilities
    //-----------------------------------------------------------------------
    // convert a vector of identifiers into a table of JSObjectView (masters)
    TSyncManager.prototype.masters2Objects = function (vec) {
        var m = new Array();
        for (var i = 0; i < vec.size(); i++) {
            var id = vec.get(i);
            m[id] = JSObjectView.getVObject(id);
        }
        return m;
    };
    TSyncManager.prototype.countMasters = function () {
        var count = 0;
        this.fSync.forEach(function (element, index) {
            if (element)
                count++;
        });
        return count;
    };
    TSyncManager.prototype.add = function (obj) {
        var m = new TMaster(obj, this.fTarget);
        this.fSync[obj.getId()] = m;
    };
    TSyncManager.prototype.remove = function (index) {
        var master = this.fSync[index];
        master.unsync();
        this.fSync[index] = null;
    };
    // give a table of the objects not sync list
    TSyncManager.prototype.newSync = function (objs) {
        var _this = this;
        var out = new Array();
        objs.forEach(function (element, index) {
            if (!_this.fSync[index])
                out.push(objs[index]);
        });
        return out;
    };
    // give a table of obsolete masters in sync list
    TSyncManager.prototype.obsolete = function (f) {
        var _this = this;
        var out = new Array();
        this.fSync.forEach(function (element, index) {
            var current = _this.fSync[index];
            if (!f[index] && current)
                out[index] = current;
        });
        return out;
    };
    return TSyncManager;
}());
///<reference path="guidoengine.ts"/>
///<reference path="libmusicxml.ts"/>
///<reference path="TLog.ts"/>
//----------------------------------------------------------------------------
var libraries = /** @class */ (function () {
    function libraries() {
        this.fGuido = new GuidoEngine;
        this.fXMLLib = new libmusicxml;
    }
    libraries.prototype.initialise = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.guidoinit().then(function () { return _this.xmlinit(); })];
            });
        });
    };
    libraries.prototype.guidoinit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (success, failure) {
                        _this.fGuido.initialise().then(function () {
                            gLog.log("GuidoEngine version " + _this.fGuido.getFloatVersion());
                            success(_this);
                        }, function () { _this.fGuido = null; success(_this); });
                    })];
            });
        });
    };
    libraries.prototype.xmlinit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (success, failure) {
                        _this.fXMLLib.initialise().then(function () {
                            gLog.log("libMusicXML version " + _this.fXMLLib.libVersionStr());
                            success(_this);
                        }, function () { _this.fXMLLib = null; success(_this); });
                    })];
            });
        });
    };
    libraries.prototype.guido = function () { return this.fGuido; };
    libraries.prototype.xmllib = function () { return this.fXMLLib; };
    return libraries;
}());
var inscorelibs = new libraries();
///<reference path="JSObjectView.ts"/>
///<reference path="JSTextView.ts"/>
///<reference path="JSTextfView.ts"/>
///<reference path="JSHtmlfView.ts"/>
///<reference path="JSSceneView.ts"/>
///<reference path="JSRectView.ts"/>
///<reference path="JSEllipseView.ts"/>
///<reference path="JSLineView.ts"/>
///<reference path="JSImageView.ts"/>
///<reference path="JSArcView.ts"/>
///<reference path="JSPolygonView.ts"/>
///<reference path="JSCurveView.ts"/>
///<reference path="JSGMNView.ts"/>
///<reference path="JSGMNfView.ts"/>
///<reference path="JSGMNStreamView.ts"/>
///<reference path="JSXMLView.ts"/>
///<reference path="JSXMLfView.ts"/>
///<reference path="JSSVGView.ts"/>
///<reference path="JSPianorollView.ts"/>
///<reference path="JSPianorollfView.ts"/>
///<reference path="JSLayerView.ts"/>
///<reference path="JSSVGfView.ts"/>
///<reference path="JSVideoView.ts"/>
///<reference path="TSyncManager.ts"/>
///<reference path="TLog.ts"/>
///<reference path="libraries.ts"/>
//----------------------------------------------------------------------------
var JSViewFactory = /** @class */ (function () {
    function JSViewFactory() {
    }
    JSViewFactory.createScene = function (id, objid) {
        var scene = new JSSceneView(id, objid);
        return scene.getId();
    };
    JSViewFactory.create = function (parentid, type, objid) {
        var parent = JSObjectView.getVObject(parentid);
        var view = null;
        switch (type) {
            case "arc":
                view = new JSArcView(parent);
                break;
            case "curve":
                view = new JSCurveView(parent);
                break;
            case "ellipse":
                view = new JSEllipseView(parent);
                break;
            case "gmn":
                view = new JSGMNView(parent, inscorelibs.guido());
                break;
            case "gmnf":
                view = new JSGMNfView(parent, inscorelibs.guido());
                break;
            case "gmnstream":
                view = new JSGMNStreamView(parent, inscorelibs.guido());
                break;
            case "html":
                view = new JSHtmlView(parent);
                break;
            case "htmlf":
                view = new JSHtmlfView(parent);
                break;
            case "img":
                view = new JSImageView(parent);
                break;
            case "layer":
                view = new JSLayerView(parent);
                break;
            case "line":
                view = new JSLineView(parent);
                break;
            case "musicxml":
                view = new JSXMLView(parent, inscorelibs.xmllib(), inscorelibs.guido());
                break;
            case "musicxmlf":
                view = new JSXMLfView(parent, inscorelibs.xmllib(), inscorelibs.guido());
                break;
            case "pianoroll":
                view = new JSPianoRollView(parent, inscorelibs.guido());
                break;
            case "pianorollf":
                view = new JSPianoRollfView(parent, inscorelibs.guido());
                break;
            case "polygon":
                view = new JSPolygonView(parent);
                break;
            case "rect":
                view = new JSRectView(parent);
                break;
            case "svg":
                view = new JSSVGView(parent);
                break;
            case "svgf":
                view = new JSSVGfView(parent);
                break;
            case "txt":
                view = new JSTextView(parent);
                break;
            case "txtf":
                view = new JSTextfView(parent);
                break;
            case "video":
                view = new JSVideoView(parent);
                break;
            case "audio":
            case "fileWatcher":
            case "graph":
            case "fastgraph":
            case "radialgraph":
            case "grid":
            case "pianorollstream":
            case "memimg":
            case "sig":
            case "signode":
                gLog.log("Type " + type + " is not yet supported");
                break;
            default:
                gLog.error("JSViewFactory::create unknown type " + type);
        }
        if (view) {
            view.setSyncManager(new TSyncManager(view));
            return view.getId();
        }
        return 0;
    };
    return JSViewFactory;
}());
var inscorefactory = new JSViewFactory();
///<reference path="inscore.ts"/>
///<reference path="libraries.ts"/>
///<reference path="TLog.ts"/>
//----------------------------------------------------------------------------
var INScoreGlue = /** @class */ (function () {
    function INScoreGlue() {
        this.fTimeTask = 0;
        this.fSorterTask = 0;
        this.fInscore = new INScore;
    }
    //------------------------------------------------------------------------
    // initialization
    INScoreGlue.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (success, failure) {
                        _this.fInscore.initialise().then(function () {
                            _this.fInscore.start();
                            inscorelibs.initialise().then(function () { _this.initialise(); success(_this); });
                        });
                    })];
            });
        });
    };
    INScoreGlue.prototype.initialise = function () {
        var _this = this;
        this.fTimeTask = window.setInterval(function () { _this.fInscore.timeTask(); }, this.fInscore.getRate());
        this.fSorterTask = window.setInterval(function () { _this.fInscore.sorterTask(); }, 1);
    };
    return INScoreGlue;
}());
var gGlue = new INScoreGlue();
var gLog = new TLog();
