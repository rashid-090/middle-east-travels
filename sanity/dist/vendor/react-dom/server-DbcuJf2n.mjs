import Tt from "react";
import wt from "react-dom";
var Ai = {};
var Sr = Tt, Et = wt;
function g(n) {
  var l = "https://react.dev/errors/" + n;
  if (1 < arguments.length) {
    l += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var e = 2; e < arguments.length; e++)
      l += "&args[]=" + encodeURIComponent(arguments[e]);
  }
  return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Lr = /* @__PURE__ */ Symbol.for("react.transitional.element"), Nr = /* @__PURE__ */ Symbol.for("react.portal"), Dr = /* @__PURE__ */ Symbol.for("react.fragment"), zr = /* @__PURE__ */ Symbol.for("react.strict_mode"), Hr = /* @__PURE__ */ Symbol.for("react.profiler"), Br = /* @__PURE__ */ Symbol.for("react.consumer"), Xe = /* @__PURE__ */ Symbol.for("react.context"), Ci = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ze = /* @__PURE__ */ Symbol.for("react.suspense"), Fi = /* @__PURE__ */ Symbol.for("react.suspense_list"), Mi = /* @__PURE__ */ Symbol.for("react.memo"), Qe = /* @__PURE__ */ Symbol.for("react.lazy"), Pt = /* @__PURE__ */ Symbol.for("react.scope"), Wr = /* @__PURE__ */ Symbol.for("react.activity"), xt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Rt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ki = /* @__PURE__ */ Symbol.for("react.view_transition"), Ve = /* @__PURE__ */ Symbol.for("react.recoverable"), er = Symbol.iterator;
function Ur(n) {
  return n === null || typeof n != "object" ? null : (n = er && n[er] || n["@@iterator"], typeof n == "function" ? n : null);
}
var At = /* @__PURE__ */ Symbol.for("react.optimistic_key"), Oe = Array.isArray;
function ir(n, l) {
  var e = n.length & 3, i = n.length - e, r = l;
  for (l = 0; l < i; ) {
    var t = n.charCodeAt(l) & 255 | (n.charCodeAt(++l) & 255) << 8 | (n.charCodeAt(++l) & 255) << 16 | (n.charCodeAt(++l) & 255) << 24;
    ++l, t = 3432918353 * (t & 65535) + ((3432918353 * (t >>> 16) & 65535) << 16) & 4294967295, t = t << 15 | t >>> 17, t = 461845907 * (t & 65535) + ((461845907 * (t >>> 16) & 65535) << 16) & 4294967295, r ^= t, r = r << 13 | r >>> 19, r = 5 * (r & 65535) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295, r = (r & 65535) + 27492 + (((r >>> 16) + 58964 & 65535) << 16);
  }
  switch (t = 0, e) {
    case 3:
      t ^= (n.charCodeAt(l + 2) & 255) << 16;
    case 2:
      t ^= (n.charCodeAt(l + 1) & 255) << 8;
    case 1:
      t ^= n.charCodeAt(l) & 255, t = 3432918353 * (t & 65535) + ((3432918353 * (t >>> 16) & 65535) << 16) & 4294967295, t = t << 15 | t >>> 17, r ^= 461845907 * (t & 65535) + ((461845907 * (t >>> 16) & 65535) << 16) & 4294967295;
  }
  return r ^= n.length, r ^= r >>> 16, r = 2246822507 * (r & 65535) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 13, r = 3266489909 * (r & 65535) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, (r ^ r >>> 16) >>> 0;
}
var ln = Object.assign, O = Object.prototype.hasOwnProperty, Ct = RegExp(
  "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
), rr = {}, tr = {};
function Oi(n) {
  return O.call(tr, n) ? !0 : O.call(rr, n) ? !1 : Ct.test(n) ? tr[n] = !0 : (rr[n] = !0, !1);
}
var Ft = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
), Mt = /* @__PURE__ */ new Map([
  ["acceptCharset", "accept-charset"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
  ["crossOrigin", "crossorigin"],
  ["accentHeight", "accent-height"],
  ["alignmentBaseline", "alignment-baseline"],
  ["arabicForm", "arabic-form"],
  ["baselineShift", "baseline-shift"],
  ["capHeight", "cap-height"],
  ["clipPath", "clip-path"],
  ["clipRule", "clip-rule"],
  ["colorInterpolation", "color-interpolation"],
  ["colorInterpolationFilters", "color-interpolation-filters"],
  ["colorProfile", "color-profile"],
  ["colorRendering", "color-rendering"],
  ["dominantBaseline", "dominant-baseline"],
  ["enableBackground", "enable-background"],
  ["fillOpacity", "fill-opacity"],
  ["fillRule", "fill-rule"],
  ["floodColor", "flood-color"],
  ["floodOpacity", "flood-opacity"],
  ["fontFamily", "font-family"],
  ["fontSize", "font-size"],
  ["fontSizeAdjust", "font-size-adjust"],
  ["fontStretch", "font-stretch"],
  ["fontStyle", "font-style"],
  ["fontVariant", "font-variant"],
  ["fontWeight", "font-weight"],
  ["glyphName", "glyph-name"],
  ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
  ["glyphOrientationVertical", "glyph-orientation-vertical"],
  ["horizAdvX", "horiz-adv-x"],
  ["horizOriginX", "horiz-origin-x"],
  ["imageRendering", "image-rendering"],
  ["letterSpacing", "letter-spacing"],
  ["lightingColor", "lighting-color"],
  ["markerEnd", "marker-end"],
  ["markerMid", "marker-mid"],
  ["markerStart", "marker-start"],
  ["maskType", "mask-type"],
  ["overlinePosition", "overline-position"],
  ["overlineThickness", "overline-thickness"],
  ["paintOrder", "paint-order"],
  ["panose-1", "panose-1"],
  ["pointerEvents", "pointer-events"],
  ["renderingIntent", "rendering-intent"],
  ["shapeRendering", "shape-rendering"],
  ["stopColor", "stop-color"],
  ["stopOpacity", "stop-opacity"],
  ["strikethroughPosition", "strikethrough-position"],
  ["strikethroughThickness", "strikethrough-thickness"],
  ["strokeDasharray", "stroke-dasharray"],
  ["strokeDashoffset", "stroke-dashoffset"],
  ["strokeLinecap", "stroke-linecap"],
  ["strokeLinejoin", "stroke-linejoin"],
  ["strokeMiterlimit", "stroke-miterlimit"],
  ["strokeOpacity", "stroke-opacity"],
  ["strokeWidth", "stroke-width"],
  ["textAnchor", "text-anchor"],
  ["textDecoration", "text-decoration"],
  ["textRendering", "text-rendering"],
  ["transformOrigin", "transform-origin"],
  ["underlinePosition", "underline-position"],
  ["underlineThickness", "underline-thickness"],
  ["unicodeBidi", "unicode-bidi"],
  ["unicodeRange", "unicode-range"],
  ["unitsPerEm", "units-per-em"],
  ["vAlphabetic", "v-alphabetic"],
  ["vHanging", "v-hanging"],
  ["vIdeographic", "v-ideographic"],
  ["vMathematical", "v-mathematical"],
  ["vectorEffect", "vector-effect"],
  ["vertAdvY", "vert-adv-y"],
  ["vertOriginX", "vert-origin-x"],
  ["vertOriginY", "vert-origin-y"],
  ["wordSpacing", "word-spacing"],
  ["writingMode", "writing-mode"],
  ["xmlnsXlink", "xmlns:xlink"],
  ["xHeight", "x-height"]
]), kt = /["'&<>]/;
function T(n) {
  if (typeof n == "boolean" || typeof n == "number" || typeof n == "bigint")
    return "" + n;
  n = "" + n;
  var l = kt.exec(n);
  if (l) {
    var e = "", i, r = 0;
    for (i = l.index; i < n.length; i++) {
      switch (n.charCodeAt(i)) {
        case 34:
          l = "&quot;";
          break;
        case 38:
          l = "&amp;";
          break;
        case 39:
          l = "&#x27;";
          break;
        case 60:
          l = "&lt;";
          break;
        case 62:
          l = "&gt;";
          break;
        default:
          continue;
      }
      r !== i && (e += n.slice(r, i)), r = i + 1, e += l;
    }
    n = r !== i ? e + n.slice(r, i) : e;
  }
  return n;
}
var Ot = /([A-Z])/g, It = /^ms-/, _t = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Kl(n) {
  return _t.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
}
var Cl = Sr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Yr = Et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, St = {
  pending: !1,
  data: null,
  method: null,
  action: null
}, Mn = Yr.d;
Yr.d = {
  f: Mn.f,
  r: Mn.r,
  D: mt,
  C: qt,
  L: jt,
  m: $t,
  X: la,
  S: na,
  M: ea
};
var cn = [], kl = null, Gr = /(<\/|<)(s)(cript)/gi;
function Xr(n, l, e, i) {
  return "" + l + (e === "s" ? "\\u0073" : "\\u0053") + i;
}
function Lt(n, l, e, i, r) {
  return {
    idPrefix: n === void 0 ? "" : n,
    nextFormID: 0,
    streamingFormat: 0,
    bootstrapScriptContent: e,
    bootstrapScripts: i,
    bootstrapModules: r,
    instructions: 0,
    hasBody: !1,
    hasHtml: !1,
    unknownResources: {},
    dnsResources: {},
    connectResources: { default: {}, anonymous: {}, credentials: {} },
    imageResources: {},
    styleResources: {},
    scriptResources: {},
    moduleUnknownResources: {},
    moduleScriptResources: {}
  };
}
function Q(n, l, e, i) {
  return {
    insertionMode: n,
    selectedValue: l,
    tagScope: e,
    viewTransition: i
  };
}
function ar(n, l, e) {
  var i = n.tagScope & -25;
  switch (l) {
    case "noscript":
      return Q(2, null, i | 1, null);
    case "select":
      return Q(
        2,
        e.value != null ? e.value : e.defaultValue,
        i,
        null
      );
    case "svg":
      return Q(4, null, i, null);
    case "picture":
      return Q(2, null, i | 2, null);
    case "math":
      return Q(5, null, i, null);
    case "foreignObject":
      return Q(2, null, i, null);
    case "table":
      return Q(6, null, i, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return Q(7, null, i, null);
    case "colgroup":
      return Q(9, null, i, null);
    case "tr":
      return Q(8, null, i, null);
    case "head":
      if (2 > n.insertionMode)
        return Q(3, null, i, null);
      break;
    case "html":
      if (n.insertionMode === 0)
        return Q(1, null, i, null);
  }
  return 6 <= n.insertionMode || 2 > n.insertionMode ? Q(2, null, i, null) : n.viewTransition !== null || n.tagScope !== i ? Q(
    n.insertionMode,
    n.selectedValue,
    i,
    null
  ) : n;
}
function Zr(n) {
  return n === null ? null : {
    update: n.update,
    enter: "none",
    exit: "none",
    share: n.update,
    parentEnter: "none",
    parentExit: "none",
    name: n.autoName,
    autoName: n.autoName,
    nameIdx: 0
  };
}
function vi(n, l) {
  return l.tagScope & 32 && (n.instructions |= 128), Q(
    l.insertionMode,
    l.selectedValue,
    l.tagScope | 12,
    Zr(l.viewTransition)
  );
}
function xe(n, l) {
  n = Zr(l.viewTransition);
  var e = l.tagScope | 16;
  return n !== null && n.share !== "none" && (e |= 64), Q(
    l.insertionMode,
    l.selectedValue,
    e,
    n
  );
}
function Qr(n, l, e) {
  return n = "_" + n.idPrefix + "R_" + l, 0 < e && (n += "H" + e.toString(32)), n + "_";
}
function tn(n, l) {
  l = l.viewTransition, l !== null && (l.name !== "auto" && (N(
    n,
    "vt-name",
    l.nameIdx === 0 ? l.name : l.name + "_" + l.nameIdx
  ), l.nameIdx++), N(n, "vt-update", l.update), l.enter !== "none" && N(n, "vt-enter", l.enter), l.exit !== "none" && N(n, "vt-exit", l.exit), l.share !== "none" && N(n, "vt-share", l.share));
}
var fr = /* @__PURE__ */ new Map();
function Vr(n, l) {
  if (typeof l != "object") throw Error(g(62));
  var e = !0, i;
  for (i in l)
    if (O.call(l, i)) {
      var r = l[i];
      if (r != null && typeof r != "boolean" && r !== "") {
        if (i.indexOf("--") === 0) {
          var t = T(i);
          r = T(("" + r).trim());
        } else
          t = fr.get(i), t === void 0 && (t = T(
            i.replace(Ot, "-$1").toLowerCase().replace(It, "-ms-")
          ), fr.set(i, t)), r = typeof r == "number" ? r === 0 || Ft.has(i) ? "" + r : r + "px" : T(("" + r).trim());
        e ? (e = !1, n.push(' style="', t, ":", r)) : n.push(";", t, ":", r);
      }
    }
  e || n.push('"');
}
function gi(n, l, e) {
  e && typeof e != "function" && typeof e != "symbol" && n.push(" ", l, '=""');
}
function N(n, l, e) {
  typeof e != "function" && typeof e != "symbol" && typeof e != "boolean" && n.push(" ", l, '="', T(e), '"');
}
var Jr = T(
  "javascript:throw new Error('React form unexpectedly submitted.')"
);
function ui(n, l) {
  this.push('<input type="hidden"'), Kr(n), N(this, "name", l), N(this, "value", n), this.push("/>");
}
function Kr(n) {
  if (typeof n != "string") throw Error(g(480));
}
function pr(n, l) {
  if (typeof l.$$FORM_ACTION == "function") {
    var e = n.nextFormID++;
    n = n.idPrefix + e;
    try {
      var i = l.$$FORM_ACTION(n);
      if (i) {
        var r = i.data;
        r?.forEach(Kr);
      }
      return i;
    } catch (t) {
      if (typeof t == "object" && t !== null && typeof t.then == "function")
        throw t;
    }
  }
  return null;
}
function ur(n, l, e, i, r, t, a, u) {
  var f = null;
  if (typeof i == "function") {
    var h = pr(l, i);
    h !== null ? (u = h.name, i = h.action || "", r = h.encType, t = h.method, a = h.target, f = h.data) : (n.push(" ", "formAction", '="', Jr, '"'), a = t = r = i = u = null, mr(l, e));
  }
  return u != null && x(n, "name", u), i != null && x(n, "formAction", i), r != null && x(n, "formEncType", r), t != null && x(n, "formMethod", t), a != null && x(n, "formTarget", a), f;
}
function x(n, l, e) {
  switch (l) {
    case "className":
      N(n, "class", e);
      break;
    case "tabIndex":
      N(n, "tabindex", e);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      N(n, l, e);
      break;
    case "style":
      Vr(n, e);
      break;
    case "src":
    case "href":
      if (e === "") break;
    case "action":
    case "formAction":
      if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean")
        break;
      e = Kl("" + e), n.push(" ", l, '="', T(e), '"');
      break;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "ref":
      break;
    case "autoFocus":
    case "multiple":
    case "muted":
      gi(n, l.toLowerCase(), e);
      break;
    case "xlinkHref":
      if (typeof e == "function" || typeof e == "symbol" || typeof e == "boolean")
        break;
      e = Kl("" + e), n.push(" ", "xlink:href", '="', T(e), '"');
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      typeof e != "function" && typeof e != "symbol" && n.push(" ", l, '="', T(e), '"');
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "credentialless":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      e && typeof e != "function" && typeof e != "symbol" && n.push(" ", l, '=""');
      break;
    case "capture":
    case "download":
      e === !0 ? n.push(" ", l, '=""') : e !== !1 && typeof e != "function" && typeof e != "symbol" && n.push(" ", l, '="', T(e), '"');
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e && n.push(" ", l, '="', T(e), '"');
      break;
    case "rowSpan":
    case "start":
      typeof e == "function" || typeof e == "symbol" || isNaN(e) || n.push(" ", l, '="', T(e), '"');
      break;
    case "xlinkActuate":
      N(n, "xlink:actuate", e);
      break;
    case "xlinkArcrole":
      N(n, "xlink:arcrole", e);
      break;
    case "xlinkRole":
      N(n, "xlink:role", e);
      break;
    case "xlinkShow":
      N(n, "xlink:show", e);
      break;
    case "xlinkTitle":
      N(n, "xlink:title", e);
      break;
    case "xlinkType":
      N(n, "xlink:type", e);
      break;
    case "xmlBase":
      N(n, "xml:base", e);
      break;
    case "xmlLang":
      N(n, "xml:lang", e);
      break;
    case "xmlSpace":
      N(n, "xml:space", e);
      break;
    default:
      if ((!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Mt.get(l) || l, Oi(l))) {
        switch (typeof e) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            var i = l.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") return;
        }
        n.push(" ", l, '="', T(e), '"');
      }
  }
}
function an(n, l, e) {
  if (l != null) {
    if (e != null) throw Error(g(60));
    if (typeof l != "object" || !("__html" in l))
      throw Error(g(61));
    l = l.__html, l != null && n.push("" + l);
  }
}
function Nt(n) {
  var l = "";
  return Sr.Children.forEach(n, function(e) {
    e != null && (l += e);
  }), l;
}
function mr(n, l) {
  if ((n.instructions & 16) === 0) {
    n.instructions |= 16;
    var e = l.preamble, i = l.bootstrapChunks;
    (e.htmlChunks || e.headChunks) && i.length === 0 ? (i.push(l.startInlineScript), Re(i, n), i.push(
      ">",
      `addEventListener("submit",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute("formAction");null!=f&&(c=f,e=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});`,
      "<\/script>"
    )) : i.unshift(
      l.startInlineScript,
      ">",
      `addEventListener("submit",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute("formAction");null!=f&&(c=f,e=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});`,
      "<\/script>"
    );
  }
}
function p(n, l) {
  n.push(B("link"));
  for (var e in l)
    if (O.call(l, e)) {
      var i = l[e];
      if (i != null)
        switch (e) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(g(399, "link"));
          default:
            x(n, e, i);
        }
    }
  return n.push("/>"), null;
}
var hr = /(<\/|<)(s)(tyle)/gi;
function cr(n, l, e, i) {
  return "" + l + (e === "s" ? "\\73 " : "\\53 ") + i;
}
function Fl(n, l, e, i) {
  n.push(B(e));
  for (var r in l)
    if (O.call(l, r)) {
      var t = l[r];
      if (t != null)
        switch (r) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(g(399, e));
          default:
            x(n, r, t);
        }
    }
  return tn(n, i), n.push("/>"), null;
}
function or(n, l) {
  n.push(B("title"));
  var e = null, i = null, r;
  for (r in l)
    if (O.call(l, r)) {
      var t = l[r];
      if (t != null)
        switch (r) {
          case "children":
            e = t;
            break;
          case "dangerouslySetInnerHTML":
            i = t;
            break;
          default:
            x(n, r, t);
        }
    }
  return n.push(">"), l = Array.isArray(e) ? 2 > e.length ? e[0] : null : e, typeof l != "function" && typeof l != "symbol" && l !== null && l !== void 0 && n.push(T("" + l)), an(n, i, e), n.push(tl("title")), null;
}
function Ie(n, l) {
  n.push(B("script"));
  var e = null, i = null, r;
  for (r in l)
    if (O.call(l, r)) {
      var t = l[r];
      if (t != null)
        switch (r) {
          case "children":
            e = t;
            break;
          case "dangerouslySetInnerHTML":
            i = t;
            break;
          default:
            x(n, r, t);
        }
    }
  return n.push(">"), an(n, i, e), typeof e == "string" && n.push(("" + e).replace(Gr, Xr)), n.push(tl("script")), null;
}
function hi(n, l, e, i) {
  n.push(B(e));
  var r = e = null, t;
  for (t in l)
    if (O.call(l, t)) {
      var a = l[t];
      if (a != null)
        switch (t) {
          case "children":
            e = a;
            break;
          case "dangerouslySetInnerHTML":
            r = a;
            break;
          default:
            x(n, t, a);
        }
    }
  return tn(n, i), n.push(">"), an(n, r, e), e;
}
function we(n, l, e, i) {
  n.push(B(e));
  var r = e = null, t;
  for (t in l)
    if (O.call(l, t)) {
      var a = l[t];
      if (a != null)
        switch (t) {
          case "children":
            e = a;
            break;
          case "dangerouslySetInnerHTML":
            r = a;
            break;
          default:
            x(n, t, a);
        }
    }
  return tn(n, i), n.push(">"), an(n, r, e), typeof e == "string" ? (n.push(T(e)), null) : e;
}
var Dt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, dr = /* @__PURE__ */ new Map();
function B(n) {
  var l = dr.get(n);
  if (l === void 0) {
    if (!Dt.test(n))
      throw Error(g(65, n));
    l = "<" + n, dr.set(n, l);
  }
  return l;
}
function zt(n, l, e, i, r, t, a, u, f) {
  switch (l) {
    case "div":
    case "span":
    case "svg":
    case "path":
      break;
    case "a":
      n.push(B("a"));
      var h = null, c = null, o;
      for (o in e)
        if (O.call(e, o)) {
          var v = e[o];
          if (v != null)
            switch (o) {
              case "children":
                h = v;
                break;
              case "dangerouslySetInnerHTML":
                c = v;
                break;
              case "href":
                v === "" ? N(n, "href", "") : x(n, o, v);
                break;
              default:
                x(n, o, v);
            }
        }
      if (tn(n, u), n.push(">"), an(n, c, h), typeof h == "string") {
        n.push(T(h));
        var d = null;
      } else d = h;
      return d;
    case "g":
    case "p":
    case "li":
      break;
    case "select":
      n.push(B("select"));
      var s = null, b = null, R;
      for (R in e)
        if (O.call(e, R)) {
          var E = e[R];
          if (E != null)
            switch (R) {
              case "children":
                s = E;
                break;
              case "dangerouslySetInnerHTML":
                b = E;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                x(
                  n,
                  R,
                  E
                );
            }
        }
      return tn(n, u), n.push(">"), an(n, b, s), s;
    case "option":
      var A = u.selectedValue;
      n.push(B("option"));
      var D = null, _ = null, y = null, P = null, M;
      for (M in e)
        if (O.call(e, M)) {
          var en = e[M];
          if (en != null)
            switch (M) {
              case "children":
                D = en;
                break;
              case "selected":
                y = en;
                break;
              case "dangerouslySetInnerHTML":
                P = en;
                break;
              case "value":
                _ = en;
              default:
                x(
                  n,
                  M,
                  en
                );
            }
        }
      if (A != null) {
        var w = _ !== null ? "" + _ : Nt(D);
        if (Oe(A)) {
          for (var S = 0; S < A.length; S++)
            if ("" + A[S] === w) {
              n.push(' selected=""');
              break;
            }
        } else
          "" + A === w && n.push(' selected=""');
      } else y && n.push(' selected=""');
      return n.push(">"), an(n, P, D), D;
    case "textarea":
      n.push(B("textarea"));
      var L = null, U = null, k = null, $;
      for ($ in e)
        if (O.call(e, $)) {
          var z = e[$];
          if (z != null)
            switch ($) {
              case "children":
                k = z;
                break;
              case "value":
                L = z;
                break;
              case "defaultValue":
                U = z;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(g(91));
              default:
                x(
                  n,
                  $,
                  z
                );
            }
        }
      if (L === null && U !== null && (L = U), tn(n, u), n.push(">"), k != null) {
        if (L != null) throw Error(g(92));
        if (Oe(k)) {
          if (1 < k.length)
            throw Error(g(93));
          L = "" + k[0];
        }
        L = "" + k;
      }
      return typeof L == "string" && L[0] === `
` && n.push(`
`), L !== null && n.push(T("" + L)), null;
    case "input":
      n.push(B("input"));
      var On = null, rn = null, H = null, Zn = null, G = null, yn = null, X = null, un = null, on = null, Tn;
      for (Tn in e)
        if (O.call(e, Tn)) {
          var I = e[Tn];
          if (I != null)
            switch (Tn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(g(399, "input"));
              case "name":
                On = I;
                break;
              case "formAction":
                rn = I;
                break;
              case "formEncType":
                H = I;
                break;
              case "formMethod":
                Zn = I;
                break;
              case "formTarget":
                G = I;
                break;
              case "defaultChecked":
                on = I;
                break;
              case "defaultValue":
                X = I;
                break;
              case "checked":
                un = I;
                break;
              case "value":
                yn = I;
                break;
              default:
                x(
                  n,
                  Tn,
                  I
                );
            }
        }
      var Rn = ur(
        n,
        i,
        r,
        rn,
        H,
        Zn,
        G,
        On
      );
      return un !== null ? gi(n, "checked", un) : on !== null && gi(n, "checked", on), yn !== null ? x(n, "value", yn) : X !== null && x(n, "value", X), tn(n, u), n.push("/>"), Rn?.forEach(ui, n), null;
    case "button":
      n.push(B("button"));
      var Qn = null, wn = null, In = null, _l = null, dl = null, sl = null, ae = null, En;
      for (En in e)
        if (O.call(e, En)) {
          var J = e[En];
          if (J != null)
            switch (En) {
              case "children":
                Qn = J;
                break;
              case "dangerouslySetInnerHTML":
                wn = J;
                break;
              case "name":
                In = J;
                break;
              case "formAction":
                _l = J;
                break;
              case "formEncType":
                dl = J;
                break;
              case "formMethod":
                sl = J;
                break;
              case "formTarget":
                ae = J;
                break;
              default:
                x(
                  n,
                  En,
                  J
                );
            }
        }
      var fe = ur(
        n,
        i,
        r,
        _l,
        dl,
        sl,
        ae,
        In
      );
      if (tn(n, u), n.push(">"), fe?.forEach(ui, n), an(n, wn, Qn), typeof Qn == "string") {
        n.push(T(Qn));
        var Sl = null;
      } else Sl = Qn;
      return Sl;
    case "form":
      n.push(B("form"));
      var Vn = null, ue = null, An = null, _n = null, Jn = null, Sn = null, Kn;
      for (Kn in e)
        if (O.call(e, Kn)) {
          var Pn = e[Kn];
          if (Pn != null)
            switch (Kn) {
              case "children":
                Vn = Pn;
                break;
              case "dangerouslySetInnerHTML":
                ue = Pn;
                break;
              case "action":
                An = Pn;
                break;
              case "encType":
                _n = Pn;
                break;
              case "method":
                Jn = Pn;
                break;
              case "target":
                Sn = Pn;
                break;
              default:
                x(
                  n,
                  Kn,
                  Pn
                );
            }
        }
      var vl = null, Ln = null;
      if (typeof An == "function") {
        var q = pr(
          i,
          An
        );
        q !== null ? (An = q.action || "", _n = q.encType, Jn = q.method, Sn = q.target, vl = q.data, Ln = q.name) : (n.push(
          " ",
          "action",
          '="',
          Jr,
          '"'
        ), Sn = Jn = _n = An = null, mr(i, r));
      }
      if (An != null && x(n, "action", An), _n != null && x(n, "encType", _n), Jn != null && x(n, "method", Jn), Sn != null && x(n, "target", Sn), tn(n, u), n.push(">"), Ln !== null && (n.push('<input type="hidden"'), N(n, "name", Ln), n.push("/>"), vl?.forEach(ui, n)), an(n, ue, Vn), typeof Vn == "string") {
        n.push(T(Vn));
        var Ll = null;
      } else Ll = Vn;
      return Ll;
    case "menuitem":
      n.push(B("menuitem"));
      for (var pn in e)
        if (O.call(e, pn)) {
          var he = e[pn];
          if (he != null)
            switch (pn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(g(400));
              default:
                x(
                  n,
                  pn,
                  he
                );
            }
        }
      return tn(n, u), n.push(">"), null;
    case "object":
      n.push(B("object"));
      var dn = null, Nl = null, Nn;
      for (Nn in e)
        if (O.call(e, Nn)) {
          var Dn = e[Nn];
          if (Dn != null)
            switch (Nn) {
              case "children":
                dn = Dn;
                break;
              case "dangerouslySetInnerHTML":
                Nl = Dn;
                break;
              case "data":
                var C = Kl("" + Dn);
                if (C === "") break;
                n.push(
                  " ",
                  "data",
                  '="',
                  T(C),
                  '"'
                );
                break;
              default:
                x(
                  n,
                  Nn,
                  Dn
                );
            }
        }
      if (tn(n, u), n.push(">"), an(n, Nl, dn), typeof dn == "string") {
        n.push(T(dn));
        var sn = null;
      } else sn = dn;
      return sn;
    case "title":
      var hn = u.tagScope & 1, Dl = u.tagScope & 4;
      if (u.insertionMode === 4 || hn || e.itemProp != null)
        var gl = or(
          n,
          e
        );
      else
        Dl ? gl = null : (or(r.hoistableChunks, e), gl = void 0);
      return gl;
    case "link":
      var bl = u.tagScope & 1, ce = u.tagScope & 4, oe = e.rel, vn = e.href, yl = e.precedence;
      if (u.insertionMode === 4 || bl || e.itemProp != null || typeof oe != "string" || typeof vn != "string" || vn === "") {
        p(n, e);
        var mn = null;
      } else if (e.rel === "stylesheet")
        if (typeof yl != "string" || e.disabled != null || e.onLoad || e.onError)
          mn = p(
            n,
            e
          );
        else {
          var Cn = r.styles.get(yl), zn = i.styleResources.hasOwnProperty(vn) ? i.styleResources[vn] : void 0;
          if (zn !== null) {
            i.styleResources[vn] = null, Cn || (Cn = {
              precedence: T(yl),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, r.styles.set(yl, Cn));
            var Hn = {
              state: 0,
              props: ln({}, e, {
                "data-precedence": e.precedence,
                precedence: null
              })
            };
            if (zn) {
              zn.length === 2 && pl(Hn.props, zn);
              var zl = r.preloads.stylesheets.get(vn);
              zl && 0 < zl.length ? zl.length = 0 : Hn.state = 1;
            }
            Cn.sheets.set(vn, Hn), a && a.stylesheets.add(Hn);
          } else if (Cn) {
            var de = Cn.sheets.get(vn);
            de && a && a.stylesheets.add(de);
          }
          f && n.push("<!-- -->"), mn = null;
        }
      else
        e.onLoad || e.onError ? mn = p(
          n,
          e
        ) : (f && n.push("<!-- -->"), mn = ce ? null : p(r.hoistableChunks, e));
      return mn;
    case "script":
      var je = u.tagScope & 1, Tl = e.async;
      if (typeof e.src != "string" || !e.src || !Tl || typeof Tl == "function" || typeof Tl == "symbol" || e.onLoad || e.onError || u.insertionMode === 4 || je || e.itemProp != null)
        var se = Ie(
          n,
          e
        );
      else {
        var Bn = e.src;
        if (e.type === "module")
          var qn = i.moduleScriptResources, jn = r.preloads.moduleScripts;
        else
          qn = i.scriptResources, jn = r.preloads.scripts;
        var wl = qn.hasOwnProperty(Bn) ? qn[Bn] : void 0;
        if (wl !== null) {
          qn[Bn] = null;
          var Hl = e;
          if (wl) {
            wl.length === 2 && (Hl = ln({}, e), pl(Hl, wl));
            var ve = jn.get(Bn);
            ve && (ve.length = 0);
          }
          var ge = [];
          r.scripts.add(ge), Ie(ge, Hl);
        }
        f && n.push("<!-- -->"), se = null;
      }
      return se;
    case "style":
      var $e = u.tagScope & 1, El = e.precedence, xn = e.href, vt = e.nonce;
      if (u.insertionMode === 4 || $e || e.itemProp != null || typeof El != "string" || typeof xn != "string" || xn === "") {
        n.push(B("style"));
        var Pl = null, Xi = null, Bl;
        for (Bl in e)
          if (O.call(e, Bl)) {
            var be = e[Bl];
            if (be != null)
              switch (Bl) {
                case "children":
                  Pl = be;
                  break;
                case "dangerouslySetInnerHTML":
                  Xi = be;
                  break;
                default:
                  x(
                    n,
                    Bl,
                    be
                  );
              }
          }
        n.push(">");
        var Wl = Array.isArray(Pl) ? 2 > Pl.length ? Pl[0] : null : Pl;
        typeof Wl != "function" && typeof Wl != "symbol" && Wl !== null && Wl !== void 0 && n.push(("" + Wl).replace(hr, cr)), an(n, Xi, Pl), n.push(tl("style"));
        var Zi = null;
      } else {
        var $n = r.styles.get(El);
        if ((i.styleResources.hasOwnProperty(xn) ? i.styleResources[xn] : void 0) !== null) {
          i.styleResources[xn] = null, $n || ($n = {
            precedence: T(El),
            rules: [],
            hrefs: [],
            sheets: /* @__PURE__ */ new Map()
          }, r.styles.set(El, $n));
          var Qi = r.nonce.style;
          if (!Qi || Qi === vt) {
            $n.hrefs.push(T(xn));
            var Vi = $n.rules, xl = null, Ji = null, ye;
            for (ye in e)
              if (O.call(e, ye)) {
                var ni = e[ye];
                if (ni != null)
                  switch (ye) {
                    case "children":
                      xl = ni;
                      break;
                    case "dangerouslySetInnerHTML":
                      Ji = ni;
                  }
              }
            var Ul = Array.isArray(xl) ? 2 > xl.length ? xl[0] : null : xl;
            typeof Ul != "function" && typeof Ul != "symbol" && Ul !== null && Ul !== void 0 && Vi.push(
              ("" + Ul).replace(hr, cr)
            ), an(Vi, Ji, xl);
          }
        }
        $n && a && a.styles.add($n), f && n.push("<!-- -->"), Zi = void 0;
      }
      return Zi;
    case "meta":
      var gt = u.tagScope & 1, bt = u.tagScope & 4;
      if (u.insertionMode === 4 || gt || e.itemProp != null)
        var Ki = Fl(
          n,
          e,
          "meta",
          u
        );
      else
        f && n.push("<!-- -->"), Ki = bt ? null : typeof e.charSet == "string" ? Fl(
          r.charsetChunks,
          e,
          "meta",
          u
        ) : e.name === "viewport" ? Fl(
          r.viewportChunks,
          e,
          "meta",
          u
        ) : Fl(
          r.hoistableChunks,
          e,
          "meta",
          u
        );
      return Ki;
    case "listing":
    case "pre":
      n.push(B(l));
      var Yl = null, Gl = null, Xl;
      for (Xl in e)
        if (O.call(e, Xl)) {
          var Te = e[Xl];
          if (Te != null)
            switch (Xl) {
              case "children":
                Yl = Te;
                break;
              case "dangerouslySetInnerHTML":
                Gl = Te;
                break;
              default:
                x(
                  n,
                  Xl,
                  Te
                );
            }
        }
      if (tn(n, u), n.push(">"), Gl != null) {
        if (Yl != null) throw Error(g(60));
        if (typeof Gl != "object" || !("__html" in Gl))
          throw Error(g(61));
        var nl = Gl.__html;
        nl != null && (typeof nl == "string" && 0 < nl.length && nl[0] === `
` ? n.push(`
`, nl) : n.push("" + nl));
      }
      return typeof Yl == "string" && Yl[0] === `
` && n.push(`
`), Yl;
    case "img":
      var yt = u.tagScope & 3, K = e.src, Z = e.srcSet;
      if (!(e.loading === "lazy" || !K && !Z || typeof K != "string" && K != null || typeof Z != "string" && Z != null || e.fetchPriority === "low" || yt) && (typeof K != "string" || K[4] !== ":" || K[0] !== "d" && K[0] !== "D" || K[1] !== "a" && K[1] !== "A" || K[2] !== "t" && K[2] !== "T" || K[3] !== "a" && K[3] !== "A") && (typeof Z != "string" || Z[4] !== ":" || Z[0] !== "d" && Z[0] !== "D" || Z[1] !== "a" && Z[1] !== "A" || Z[2] !== "t" && Z[2] !== "T" || Z[3] !== "a" && Z[3] !== "A")) {
        a !== null && u.tagScope & 64 && (a.suspenseyImages = !0);
        var pi = typeof e.sizes == "string" ? e.sizes : void 0, Rl = Z ? Z + `
` + (pi || "") : K, li = r.preloads.images, ll = li.get(Rl);
        if (ll)
          (e.fetchPriority === "high" || 10 > r.highImagePreloads.size) && (li.delete(Rl), r.highImagePreloads.add(ll));
        else if (!i.imageResources.hasOwnProperty(Rl)) {
          i.imageResources[Rl] = cn;
          var ei = e.crossOrigin, mi = typeof ei == "string" ? ei === "use-credentials" ? ei : "" : void 0, el = r.headers, ii;
          el && 0 < el.remainingCapacity && typeof e.srcSet != "string" && (e.fetchPriority === "high" || 500 > el.highImagePreloads.length) && (ii = Se(K, "image", {
            imageSrcSet: e.srcSet,
            imageSizes: e.sizes,
            crossOrigin: mi,
            integrity: e.integrity,
            nonce: e.nonce,
            type: e.type,
            fetchPriority: e.fetchPriority,
            referrerPolicy: e.referrerPolicy
          }), 0 <= (el.remainingCapacity -= ii.length + 2)) ? (r.resets.image[Rl] = cn, el.highImagePreloads && (el.highImagePreloads += ", "), el.highImagePreloads += ii) : (ll = [], p(ll, {
            rel: "preload",
            as: "image",
            href: Z ? void 0 : K,
            imageSrcSet: Z,
            imageSizes: pi,
            crossOrigin: mi,
            integrity: e.integrity,
            type: e.type,
            fetchPriority: e.fetchPriority,
            referrerPolicy: e.referrerPolicy
          }), e.fetchPriority === "high" || 10 > r.highImagePreloads.size ? r.highImagePreloads.add(ll) : (r.bulkPreloads.add(ll), li.set(Rl, ll)));
        }
      }
      return Fl(n, e, "img", u);
    case "base":
    case "area":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "param":
    case "source":
    case "track":
    case "wbr":
      return Fl(n, e, l, u);
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      break;
    case "head":
      if (2 > u.insertionMode) {
        var ri = t || r.preamble;
        if (ri.headChunks)
          throw Error(g(545, "`<head>`"));
        t !== null && n.push("<!--head-->"), ri.headChunks = [];
        var qi = hi(
          ri.headChunks,
          e,
          "head",
          u
        );
      } else
        qi = we(
          n,
          e,
          "head",
          u
        );
      return qi;
    case "body":
      if (2 > u.insertionMode) {
        var ti = t || r.preamble;
        if (ti.bodyChunks)
          throw Error(g(545, "`<body>`"));
        t !== null && n.push("<!--body-->"), ti.bodyChunks = [];
        var ji = hi(
          ti.bodyChunks,
          e,
          "body",
          u
        );
      } else
        ji = we(
          n,
          e,
          "body",
          u
        );
      return ji;
    case "html":
      if (u.insertionMode === 0) {
        var ai = t || r.preamble;
        if (ai.htmlChunks)
          throw Error(g(545, "`<html>`"));
        t !== null && n.push("<!--html-->"), ai.htmlChunks = [""];
        var $i = hi(
          ai.htmlChunks,
          e,
          "html",
          u
        );
      } else
        $i = we(
          n,
          e,
          "html",
          u
        );
      return $i;
    default:
      if (l.indexOf("-") !== -1) {
        n.push(B(l));
        var fi = null, nr = null, Al;
        for (Al in e)
          if (O.call(e, Al)) {
            var gn = e[Al];
            if (gn != null) {
              var lr = Al;
              switch (Al) {
                case "children":
                  fi = gn;
                  break;
                case "dangerouslySetInnerHTML":
                  nr = gn;
                  break;
                case "style":
                  Vr(n, gn);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "ref":
                  break;
                case "className":
                  lr = "class";
                default:
                  if (Oi(Al) && typeof gn != "function" && typeof gn != "symbol" && gn !== !1) {
                    if (gn === !0) gn = "";
                    else if (typeof gn == "object") continue;
                    n.push(
                      " ",
                      lr,
                      '="',
                      T(gn),
                      '"'
                    );
                  }
              }
            }
          }
        return tn(n, u), n.push(">"), an(n, nr, fi), fi;
      }
  }
  return we(n, e, l, u);
}
var sr = /* @__PURE__ */ new Map();
function tl(n) {
  var l = sr.get(n);
  return l === void 0 && (l = "</" + n + ">", sr.set(n, l)), l;
}
function vr(n, l) {
  n = n.preamble, n.htmlChunks === null && l.htmlChunks && (n.htmlChunks = l.htmlChunks), n.headChunks === null && l.headChunks && (n.headChunks = l.headChunks), n.bodyChunks === null && l.bodyChunks && (n.bodyChunks = l.bodyChunks);
}
function qr(n, l) {
  l = l.bootstrapChunks;
  for (var e = 0; e < l.length - 1; e++)
    n.push(l[e]);
  return e < l.length ? (e = l[e], l.length = 0, n.push(e)) : !0;
}
function gr(n, l, e) {
  if (n.push('<!--$?--><template id="'), e === null) throw Error(g(395));
  return n.push(l.boundaryPrefix), l = e.toString(16), n.push(l), n.push('"></template>');
}
function Ht(n, l, e, i) {
  switch (e.insertionMode) {
    case 0:
    case 1:
    case 3:
    case 2:
      return n.push('<div hidden id="'), n.push(l.segmentPrefix), l = i.toString(16), n.push(l), n.push('">');
    case 4:
      return n.push('<svg aria-hidden="true" style="display:none" id="'), n.push(l.segmentPrefix), l = i.toString(16), n.push(l), n.push('">');
    case 5:
      return n.push('<math aria-hidden="true" style="display:none" id="'), n.push(l.segmentPrefix), l = i.toString(16), n.push(l), n.push('">');
    case 6:
      return n.push('<table hidden id="'), n.push(l.segmentPrefix), l = i.toString(16), n.push(l), n.push('">');
    case 7:
      return n.push('<table hidden><tbody id="'), n.push(l.segmentPrefix), l = i.toString(16), n.push(l), n.push('">');
    case 8:
      return n.push('<table hidden><tr id="'), n.push(l.segmentPrefix), l = i.toString(16), n.push(l), n.push('">');
    case 9:
      return n.push('<table hidden><colgroup id="'), n.push(l.segmentPrefix), l = i.toString(16), n.push(l), n.push('">');
    default:
      throw Error(g(397));
  }
}
function Bt(n, l) {
  switch (l.insertionMode) {
    case 0:
    case 1:
    case 3:
    case 2:
      return n.push("</div>");
    case 4:
      return n.push("</svg>");
    case 5:
      return n.push("</math>");
    case 6:
      return n.push("</table>");
    case 7:
      return n.push("</tbody></table>");
    case 8:
      return n.push("</tr></table>");
    case 9:
      return n.push("</colgroup></table>");
    default:
      throw Error(g(397));
  }
}
var Wt = /[<\u2028\u2029]/g;
function Ut(n) {
  return JSON.stringify(n).replace(
    Wt,
    function(l) {
      switch (l) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
  );
}
var Yt = /[&><\u2028\u2029]/g;
function Vl(n) {
  return JSON.stringify(n).replace(
    Yt,
    function(l) {
      switch (l) {
        case "&":
          return "\\u0026";
        case ">":
          return "\\u003e";
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
  );
}
var _e = !1, bi = !0;
function Gt(n) {
  var l = n.rules, e = n.hrefs, i = 0;
  if (e.length) {
    for (this.push(kl.startInlineStyle), this.push(' media="not all" data-precedence="'), this.push(n.precedence), this.push('" data-href="'); i < e.length - 1; i++)
      this.push(e[i]), this.push(" ");
    for (this.push(e[i]), this.push('">'), i = 0; i < l.length; i++) this.push(l[i]);
    bi = this.push("</style>"), _e = !0, l.length = 0, e.length = 0;
  }
}
function Xt(n) {
  return n.state !== 2 ? _e = !0 : !1;
}
function jr(n, l, e) {
  return _e = !1, bi = !0, kl = e, l.styles.forEach(Gt, n), kl = null, l.stylesheets.forEach(Xt), _e && (e.stylesToHoist = !0), bi;
}
function bn(n) {
  for (var l = 0; l < n.length; l++) this.push(n[l]);
  n.length = 0;
}
var Un = [];
function Zt(n) {
  p(Un, n.props);
  for (var l = 0; l < Un.length; l++)
    this.push(Un[l]);
  Un.length = 0, n.state = 2;
}
function Qt(n) {
  var l = 0 < n.sheets.size;
  n.sheets.forEach(Zt, this), n.sheets.clear();
  var e = n.rules, i = n.hrefs;
  if (!l || i.length) {
    if (this.push(kl.startInlineStyle), this.push(' data-precedence="'), this.push(n.precedence), n = 0, i.length) {
      for (this.push('" data-href="'); n < i.length - 1; n++)
        this.push(i[n]), this.push(" ");
      this.push(i[n]);
    }
    for (this.push('">'), n = 0; n < e.length; n++)
      this.push(e[n]);
    this.push("</style>"), e.length = 0, i.length = 0;
  }
}
function Vt(n) {
  if (n.state === 0) {
    n.state = 1;
    var l = n.props;
    for (p(Un, {
      rel: "preload",
      as: "style",
      href: n.props.href,
      crossOrigin: l.crossOrigin,
      fetchPriority: l.fetchPriority,
      integrity: l.integrity,
      media: l.media,
      hrefLang: l.hrefLang,
      referrerPolicy: l.referrerPolicy
    }), n = 0; n < Un.length; n++)
      this.push(Un[n]);
    Un.length = 0;
  }
}
function Jt(n) {
  n.sheets.forEach(Vt, this), n.sheets.clear();
}
function Re(n, l) {
  (l.instructions & 32) === 0 && (l.instructions |= 32, n.push(
    ' id="',
    T("_" + l.idPrefix + "R_"),
    '"'
  ));
}
function Kt(n, l) {
  n.push("[");
  var e = "[";
  l.stylesheets.forEach(function(i) {
    if (i.state !== 2)
      if (i.state === 3)
        n.push(e), i = Vl(
          "" + i.props.href
        ), n.push(i), n.push("]"), e = ",[";
      else {
        n.push(e);
        var r = i.props["data-precedence"], t = i.props, a = Kl("" + i.props.href);
        a = Vl(a), n.push(a), r = "" + r, n.push(","), r = Vl(r), n.push(r);
        for (var u in t)
          if (O.call(t, u) && (r = t[u], r != null))
            switch (u) {
              case "href":
              case "rel":
              case "precedence":
              case "data-precedence":
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(g(399, "link"));
              default:
                pt(
                  n,
                  u,
                  r
                );
            }
        n.push("]"), e = ",[", i.state = 3;
      }
  }), n.push("]");
}
function pt(n, l, e) {
  var i = l.toLowerCase();
  switch (typeof e) {
    case "function":
    case "symbol":
      return;
  }
  switch (l) {
    case "innerHTML":
    case "dangerouslySetInnerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "style":
    case "ref":
      return;
    case "className":
      i = "class", l = "" + e;
      break;
    case "hidden":
      if (e === !1) return;
      l = "";
      break;
    case "src":
    case "href":
      e = Kl(e), l = "" + e;
      break;
    default:
      if (2 < l.length && (l[0] === "o" || l[0] === "O") && (l[1] === "n" || l[1] === "N") || !Oi(l))
        return;
      l = "" + e;
  }
  n.push(","), i = Vl(i), n.push(i), n.push(","), i = Vl(l), n.push(i);
}
function yi() {
  return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set(), suspenseyImages: !1 };
}
function mt(n) {
  var l = V || null;
  if (l) {
    var e = l.resumableState, i = l.renderState;
    if (typeof n == "string" && n) {
      if (!e.dnsResources.hasOwnProperty(n)) {
        e.dnsResources[n] = null, e = i.headers;
        var r, t;
        (t = e && 0 < e.remainingCapacity) && (t = (r = "<" + ("" + n).replace(
          Ii,
          _i
        ) + ">; rel=dns-prefetch", 0 <= (e.remainingCapacity -= r.length + 2))), t ? (i.resets.dns[n] = null, e.preconnects && (e.preconnects += ", "), e.preconnects += r) : (r = [], p(r, { href: n, rel: "dns-prefetch" }), i.preconnects.add(r));
      }
      ol(l);
    }
  } else Mn.D(n);
}
function qt(n, l) {
  var e = V || null;
  if (e) {
    var i = e.resumableState, r = e.renderState;
    if (typeof n == "string" && n) {
      var t = l === "use-credentials" ? "credentials" : typeof l == "string" ? "anonymous" : "default";
      if (!i.connectResources[t].hasOwnProperty(n)) {
        i.connectResources[t][n] = null, i = r.headers;
        var a, u;
        if (u = i && 0 < i.remainingCapacity) {
          if (u = "<" + ("" + n).replace(
            Ii,
            _i
          ) + ">; rel=preconnect", typeof l == "string") {
            var f = ("" + l).replace(
              Ti,
              wi
            );
            u += '; crossorigin="' + f + '"';
          }
          u = (a = u, 0 <= (i.remainingCapacity -= a.length + 2));
        }
        u ? (r.resets.connect[t][n] = null, i.preconnects && (i.preconnects += ", "), i.preconnects += a) : (t = [], p(t, {
          rel: "preconnect",
          href: n,
          crossOrigin: l
        }), r.preconnects.add(t));
      }
      ol(e);
    }
  } else Mn.C(n, l);
}
function jt(n, l, e) {
  var i = V || null;
  if (i) {
    var r = i.resumableState, t = i.renderState;
    if (l && n) {
      switch (l) {
        case "image":
          if (e)
            var a = e.imageSrcSet, u = e.imageSizes, f = e.fetchPriority;
          var h = a ? a + `
` + (u || "") : n;
          if (r.imageResources.hasOwnProperty(h)) return;
          r.imageResources[h] = cn, r = t.headers;
          var c;
          r && 0 < r.remainingCapacity && typeof a != "string" && f === "high" && (c = Se(n, l, e), 0 <= (r.remainingCapacity -= c.length + 2)) ? (t.resets.image[h] = cn, r.highImagePreloads && (r.highImagePreloads += ", "), r.highImagePreloads += c) : (r = [], p(
            r,
            ln(
              { rel: "preload", href: a ? void 0 : n, as: l },
              e
            )
          ), f === "high" ? t.highImagePreloads.add(r) : (t.bulkPreloads.add(r), t.preloads.images.set(h, r)));
          break;
        case "style":
          if (r.styleResources.hasOwnProperty(n)) return;
          a = [], p(
            a,
            ln({ rel: "preload", href: n, as: l }, e)
          ), r.styleResources[n] = !e || typeof e.crossOrigin != "string" && typeof e.integrity != "string" ? cn : [e.crossOrigin, e.integrity], t.preloads.stylesheets.set(n, a), t.bulkPreloads.add(a);
          break;
        case "script":
          if (r.scriptResources.hasOwnProperty(n)) return;
          a = [], t.preloads.scripts.set(n, a), t.bulkPreloads.add(a), p(
            a,
            ln({ rel: "preload", href: n, as: l }, e)
          ), r.scriptResources[n] = !e || typeof e.crossOrigin != "string" && typeof e.integrity != "string" ? cn : [e.crossOrigin, e.integrity];
          break;
        default:
          if (r.unknownResources.hasOwnProperty(l)) {
            if (a = r.unknownResources[l], a.hasOwnProperty(n))
              return;
          } else
            a = {}, r.unknownResources[l] = a;
          a[n] = cn, (r = t.headers) && 0 < r.remainingCapacity && l === "font" && (h = Se(n, l, e), 0 <= (r.remainingCapacity -= h.length + 2)) ? (t.resets.font[n] = cn, r.fontPreloads && (r.fontPreloads += ", "), r.fontPreloads += h) : (r = [], n = ln({ rel: "preload", href: n, as: l }, e), p(r, n), l) === "font" ? t.fontPreloads.add(r) : t.bulkPreloads.add(r);
      }
      ol(i);
    }
  } else Mn.L(n, l, e);
}
function $t(n, l) {
  var e = V || null;
  if (e) {
    var i = e.resumableState, r = e.renderState;
    if (n) {
      var t = l && typeof l.as == "string" ? l.as : "script";
      switch (t) {
        case "script":
          if (i.moduleScriptResources.hasOwnProperty(n)) return;
          t = [], i.moduleScriptResources[n] = !l || typeof l.crossOrigin != "string" && typeof l.integrity != "string" ? cn : [l.crossOrigin, l.integrity], r.preloads.moduleScripts.set(n, t);
          break;
        default:
          if (i.moduleUnknownResources.hasOwnProperty(t)) {
            var a = i.moduleUnknownResources[t];
            if (a.hasOwnProperty(n)) return;
          } else
            a = {}, i.moduleUnknownResources[t] = a;
          t = [], a[n] = cn;
      }
      p(t, ln({ rel: "modulepreload", href: n }, l)), r.bulkPreloads.add(t), ol(e);
    }
  } else Mn.m(n, l);
}
function na(n, l, e) {
  var i = V || null;
  if (i) {
    var r = i.resumableState, t = i.renderState;
    if (n) {
      l = l || "default";
      var a = t.styles.get(l), u = r.styleResources.hasOwnProperty(n) ? r.styleResources[n] : void 0;
      u !== null && (r.styleResources[n] = null, a || (a = {
        precedence: T(l),
        rules: [],
        hrefs: [],
        sheets: /* @__PURE__ */ new Map()
      }, t.styles.set(l, a)), l = {
        state: 0,
        props: ln(
          { rel: "stylesheet", href: n, "data-precedence": l },
          e
        )
      }, u && (u.length === 2 && pl(l.props, u), (t = t.preloads.stylesheets.get(n)) && 0 < t.length ? t.length = 0 : l.state = 1), a.sheets.set(n, l), ol(i));
    }
  } else Mn.S(n, l, e);
}
function la(n, l) {
  var e = V || null;
  if (e) {
    var i = e.resumableState, r = e.renderState;
    if (n) {
      var t = i.scriptResources.hasOwnProperty(n) ? i.scriptResources[n] : void 0;
      t !== null && (i.scriptResources[n] = null, l = ln({ src: n, async: !0 }, l), t && (t.length === 2 && pl(l, t), n = r.preloads.scripts.get(n)) && (n.length = 0), n = [], r.scripts.add(n), Ie(n, l), ol(e));
    }
  } else Mn.X(n, l);
}
function ea(n, l) {
  var e = V || null;
  if (e) {
    var i = e.resumableState, r = e.renderState;
    if (n) {
      var t = i.moduleScriptResources.hasOwnProperty(
        n
      ) ? i.moduleScriptResources[n] : void 0;
      t !== null && (i.moduleScriptResources[n] = null, l = ln({ src: n, type: "module", async: !0 }, l), t && (t.length === 2 && pl(l, t), n = r.preloads.moduleScripts.get(n)) && (n.length = 0), n = [], r.scripts.add(n), Ie(n, l), ol(e));
    }
  } else Mn.M(n, l);
}
function pl(n, l) {
  n.crossOrigin == null && (n.crossOrigin = l[0]), n.integrity == null && (n.integrity = l[1]);
}
function Se(n, l, e) {
  n = ("" + n).replace(
    Ii,
    _i
  ), l = ("" + l).replace(
    Ti,
    wi
  ), l = "<" + n + '>; rel=preload; as="' + l + '"';
  for (var i in e)
    O.call(e, i) && (n = e[i], typeof n == "string" && (l += "; " + i.toLowerCase() + '="' + ("" + n).replace(
      Ti,
      wi
    ) + '"'));
  return l;
}
var Ii = /[<>\r\n]/g;
function _i(n) {
  switch (n) {
    case "<":
      return "%3C";
    case ">":
      return "%3E";
    case `
`:
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error(
        "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
      );
  }
}
var Ti = /["';,\r\n]/g;
function wi(n) {
  switch (n) {
    case '"':
      return "%22";
    case "'":
      return "%27";
    case ";":
      return "%3B";
    case ",":
      return "%2C";
    case `
`:
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error(
        "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
      );
  }
}
function ia(n) {
  this.styles.add(n);
}
function ra(n) {
  this.stylesheets.add(n);
}
function Ol(n, l) {
  l.styles.forEach(ia, n), l.stylesheets.forEach(ra, n), l.suspenseyImages && (n.suspenseyImages = !0);
}
function ta(n, l) {
  var e = n.idPrefix, i = [], r = n.bootstrapScriptContent, t = n.bootstrapScripts, a = n.bootstrapModules;
  r !== void 0 && (i.push("<script"), Re(i, n), i.push(
    ">",
    ("" + r).replace(Gr, Xr),
    "<\/script>"
  )), r = e + "P:";
  var u = e + "S:";
  e += "B:";
  var f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), b = {
    images: /* @__PURE__ */ new Map(),
    stylesheets: /* @__PURE__ */ new Map(),
    scripts: /* @__PURE__ */ new Map(),
    moduleScripts: /* @__PURE__ */ new Map()
  };
  if (t !== void 0)
    for (var R = 0; R < t.length; R++) {
      var E = t[R], A, D = void 0, _ = void 0, y = {
        rel: "preload",
        as: "script",
        fetchPriority: "low",
        nonce: void 0
      };
      typeof E == "string" ? y.href = A = E : (y.href = A = E.src, y.integrity = _ = typeof E.integrity == "string" ? E.integrity : void 0, y.crossOrigin = D = typeof E == "string" || E.crossOrigin == null ? void 0 : E.crossOrigin === "use-credentials" ? "use-credentials" : ""), E = n;
      var P = A;
      E.scriptResources[P] = null, E.moduleScriptResources[P] = null, E = [], p(E, y), v.add(E), i.push('<script src="', T(A), '"'), typeof _ == "string" && i.push(
        ' integrity="',
        T(_),
        '"'
      ), typeof D == "string" && i.push(
        ' crossorigin="',
        T(D),
        '"'
      ), Re(i, n), i.push(' async=""><\/script>');
    }
  if (a !== void 0)
    for (t = 0; t < a.length; t++)
      y = a[t], D = A = void 0, _ = {
        rel: "modulepreload",
        fetchPriority: "low",
        nonce: void 0
      }, typeof y == "string" ? _.href = R = y : (_.href = R = y.src, _.integrity = D = typeof y.integrity == "string" ? y.integrity : void 0, _.crossOrigin = A = typeof y == "string" || y.crossOrigin == null ? void 0 : y.crossOrigin === "use-credentials" ? "use-credentials" : ""), y = n, E = R, y.scriptResources[E] = null, y.moduleScriptResources[E] = null, y = [], p(y, _), v.add(y), i.push(
        '<script type="module" src="',
        T(R),
        '"'
      ), typeof D == "string" && i.push(
        ' integrity="',
        T(D),
        '"'
      ), typeof A == "string" && i.push(
        ' crossorigin="',
        T(A),
        '"'
      ), Re(i, n), i.push(' async=""><\/script>');
  return {
    placeholderPrefix: r,
    segmentPrefix: u,
    boundaryPrefix: e,
    startInlineScript: "<script",
    startInlineStyle: "<style",
    preamble: { htmlChunks: null, headChunks: null, bodyChunks: null },
    externalRuntimeScript: null,
    bootstrapChunks: i,
    importMapChunks: [],
    onHeaders: void 0,
    headers: null,
    resets: {
      font: {},
      dns: {},
      connect: { default: {}, anonymous: {}, credentials: {} },
      image: {},
      style: {}
    },
    charsetChunks: [],
    viewportChunks: [],
    hoistableChunks: [],
    preconnects: f,
    fontPreloads: h,
    highImagePreloads: c,
    styles: o,
    bootstrapScripts: v,
    scripts: d,
    bulkPreloads: s,
    preloads: b,
    nonce: { script: void 0, style: void 0 },
    stylesToHoist: !1,
    generateStaticMarkup: l
  };
}
function br(n, l, e, i) {
  return e.generateStaticMarkup ? (n.push(T(l)), !1) : (l === "" ? n = i : (i && n.push("<!-- -->"), n.push(T(l)), n = !0), n);
}
function Jl(n, l, e, i) {
  l.generateStaticMarkup || e && i && n.push("<!-- -->");
}
var aa = Function.prototype.bind, fa = /* @__PURE__ */ Symbol.for("react.client.reference");
function Le(n) {
  if (n == null) return null;
  if (typeof n == "function")
    return n.$$typeof === fa ? null : n.displayName || n.name || null;
  if (typeof n == "string") return n;
  switch (n) {
    case Dr:
      return "Fragment";
    case Hr:
      return "Profiler";
    case zr:
      return "StrictMode";
    case Ze:
      return "Suspense";
    case Fi:
      return "SuspenseList";
    case Wr:
      return "Activity";
    case ki:
      return "ViewTransition";
  }
  if (typeof n == "object")
    switch (n.$$typeof) {
      case Nr:
        return "Portal";
      case Xe:
        return n.displayName || "Context";
      case Br:
        return (n._context.displayName || "Context") + ".Consumer";
      case Ci:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Mi:
        return l = n.displayName || null, l !== null ? l : Le(n.type) || "Memo";
      case Qe:
        l = n._payload, n = n._init;
        try {
          return Le(n(l));
        } catch {
        }
    }
  return null;
}
var yr = {}, rl = null;
function Je(n, l) {
  if (n !== l) {
    n.context._currentValue2 = n.parentValue, n = n.parent;
    var e = l.parent;
    if (n === null) {
      if (e !== null) throw Error(g(401));
    } else {
      if (e === null) throw Error(g(401));
      Je(n, e);
    }
    l.context._currentValue2 = l.value;
  }
}
function $r(n) {
  n.context._currentValue2 = n.parentValue, n = n.parent, n !== null && $r(n);
}
function nt(n) {
  var l = n.parent;
  l !== null && nt(l), n.context._currentValue2 = n.value;
}
function lt(n, l) {
  if (n.context._currentValue2 = n.parentValue, n = n.parent, n === null) throw Error(g(402));
  n.depth === l.depth ? Je(n, l) : lt(n, l);
}
function et(n, l) {
  var e = l.parent;
  if (e === null) throw Error(g(402));
  n.depth === e.depth ? Je(n, e) : et(n, e), l.context._currentValue2 = l.value;
}
function Wn(n) {
  var l = rl;
  l !== n && (l === null ? nt(n) : n === null ? $r(l) : l.depth === n.depth ? Je(l, n) : l.depth > n.depth ? lt(l, n) : et(l, n), rl = n);
}
var Tr = {
  enqueueSetState: function(n, l) {
    n = n._reactInternals, n.queue !== null && n.queue.push(l);
  },
  enqueueReplaceState: function(n, l) {
    n = n._reactInternals, n.replace = !0, n.queue = [l];
  },
  enqueueForceUpdate: function() {
  }
}, ua = { id: 1, overflow: "" };
function it(n) {
  var l = n.overflow;
  return n = n.id, (n & ~(1 << 32 - Ae(n) - 1)).toString(32) + l;
}
function Yn(n, l, e) {
  var i = n.id;
  n = n.overflow;
  var r = 32 - Ae(i) - 1;
  i &= ~(1 << r), e += 1;
  var t = 32 - Ae(l) + r;
  if (30 < t) {
    var a = r - r % 5;
    return t = (i & (1 << a) - 1).toString(32), i >>= a, r -= a, {
      id: 1 << 32 - Ae(l) + r | e << r | i,
      overflow: t + n
    };
  }
  return {
    id: 1 << t | e << r | i,
    overflow: n
  };
}
var Ae = Math.clz32 ? Math.clz32 : oa, ha = Math.log, ca = Math.LN2;
function oa(n) {
  return n >>>= 0, n === 0 ? 32 : 31 - (ha(n) / ca | 0) | 0;
}
function nn() {
}
var j = Error(g(460));
function da(n, l, e) {
  switch (e = n[e], e === void 0 ? n.push(l) : e !== l && (l.then(nn, nn), l = e), l.status) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw n = l.reason, n === void 0 && !("reason" in l) ? Error(g(600)) : n;
    default:
      switch (typeof l.status == "string" ? l.then(nn, nn) : (n = l, n.status = "pending", n.then(
        function(i) {
          if (l.status === "pending") {
            var r = l;
            r.status = "fulfilled", r.value = i;
          }
        },
        function(i) {
          if (l.status === "pending") {
            var r = l;
            r.status = "rejected", r.reason = i;
          }
        }
      )), l.status) {
        case "fulfilled":
          return l.value;
        case "rejected":
          throw l.reason;
      }
      throw Ce = l, j;
  }
}
var Ce = null;
function Ne() {
  if (Ce === null) throw Error(g(459));
  var n = Ce;
  return Ce = null, n;
}
function sa(n, l) {
  return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
}
var va = typeof Object.is == "function" ? Object.is : sa, kn = null, Si = null, Li = null, Ni = null, Fe = null, F = null, Zl = !1, De = !1, ml = 0, ql = 0, jl = -1, ze = 0, Ml = null;
function rt(n) {
  if (n = n._reason, typeof n == "function")
    try {
      var l = n();
    } catch {
      l = "The reason for browser-only rendering could not be determined because its initializer threw.";
    }
  else l = n;
  return l = Error(
    g(603),
    n === void 0 ? void 0 : { cause: l }
  ), Object.defineProperty(l, Ve, {
    value: !0
  }), l;
}
function Ke(n) {
  return typeof n != "object" || n === null ? !1 : n[Ve] === !0;
}
function Di(n) {
  var l = Error(
    g(604),
    O.call(n, "cause") ? { cause: n.cause } : void 0
  );
  if (n = n.stack, n !== void 0) {
    var e = n.indexOf(`
`);
    l.stack = l.name + ": " + l.message + (e === -1 ? "" : n.slice(e));
  } else l.stack = void 0;
  return l;
}
var Gn = null, pe = 0;
function Fn() {
  if (kn === null)
    throw Error(g(321));
  return kn;
}
function wr() {
  if (0 < pe) throw Error(g(312));
  return { memoizedState: null, queue: null, next: null };
}
function zi() {
  return F === null ? Fe === null ? (Zl = !1, Fe = F = wr()) : (Zl = !0, F = Fe) : F.next === null ? (Zl = !1, F = F.next = wr()) : (Zl = !0, F = F.next), F;
}
function Xn() {
  var n = Ml;
  return Ml = null, n;
}
function $l() {
  Ni = Li = Si = kn = null, De = !1, Fe = null, pe = 0, F = Gn = null;
}
function tt(n, l) {
  return typeof l == "function" ? l(n) : l;
}
function Er(n, l, e) {
  if (kn = Fn(), F = zi(), Zl) {
    var i = F.queue;
    if (l = i.dispatch, Gn !== null && (e = Gn.get(i), e !== void 0)) {
      Gn.delete(i), i = F.memoizedState;
      do
        i = n(i, e.action), e = e.next;
      while (e !== null);
      return F.memoizedState = i, [i, l];
    }
    return [F.memoizedState, l];
  }
  return n = n === tt ? typeof l == "function" ? l() : l : e !== void 0 ? e(l) : l, F.memoizedState = n, n = F.queue = { last: null, dispatch: null }, n = n.dispatch = ga.bind(
    null,
    kn,
    n
  ), [F.memoizedState, n];
}
function Pr(n, l) {
  if (kn = Fn(), F = zi(), l = l === void 0 ? null : l, F !== null) {
    var e = F.memoizedState;
    if (e !== null && l !== null) {
      var i = e[1];
      n: if (i === null) i = !1;
      else {
        for (var r = 0; r < i.length && r < l.length; r++)
          if (!va(l[r], i[r])) {
            i = !1;
            break n;
          }
        i = !0;
      }
      if (i) return e[0];
    }
  }
  return n = n(), F.memoizedState = [n, l], n;
}
function ga(n, l, e) {
  if (25 <= pe) throw Error(g(301));
  if (n === kn)
    if (De = !0, n = { action: e, next: null }, Gn === null && (Gn = /* @__PURE__ */ new Map()), e = Gn.get(l), e === void 0)
      Gn.set(l, n);
    else {
      for (l = e; l.next !== null; ) l = l.next;
      l.next = n;
    }
}
function ba() {
  throw Error(g(440));
}
function ya() {
  throw Error(g(394));
}
function Ta() {
  throw Error(g(479));
}
function xr(n, l, e) {
  Fn();
  var i = ql++, r = Li;
  if (typeof n.$$FORM_ACTION == "function") {
    var t = null, a = Ni;
    r = r.formState;
    var u = n.$$IS_SIGNATURE_EQUAL;
    if (r !== null && typeof u == "function") {
      var f = r[1];
      u.call(n, r[2], r[3]) && (t = e !== void 0 ? "p" + e : "k" + ir(
        JSON.stringify([a, null, i]),
        0
      ), f === t && (jl = i, l = r[0]));
    }
    var h = n.bind(null, l);
    return n = function(o) {
      h(o);
    }, typeof h.$$FORM_ACTION == "function" && (n.$$FORM_ACTION = function(o) {
      o = h.$$FORM_ACTION(o), e !== void 0 && (e += "", o.action = e);
      var v = o.data;
      return v && (t === null && (t = e !== void 0 ? "p" + e : "k" + ir(
        JSON.stringify([
          a,
          null,
          i
        ]),
        0
      )), v.append("$ACTION_KEY", t)), o;
    }), [l, n, !1];
  }
  var c = n.bind(null, l);
  return [
    l,
    function(o) {
      c(o);
    },
    !1
  ];
}
function at(n) {
  var l = ze;
  return ze += 1, Ml === null && (Ml = []), da(Ml, n, l);
}
function wa() {
  throw Error(g(393));
}
var Rr = {
  readContext: function(n) {
    return n._currentValue2;
  },
  use: function(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return at(n);
      if (n.$$typeof === Ve)
        throw rt(n);
      if (n.$$typeof === Xe)
        return n._currentValue2;
    }
    throw Error(g(438, String(n)));
  },
  useContext: function(n) {
    return Fn(), n._currentValue2;
  },
  useMemo: Pr,
  useReducer: Er,
  useRef: function(n) {
    kn = Fn(), F = zi();
    var l = F.memoizedState;
    return l === null ? (n = { current: n }, F.memoizedState = n) : l;
  },
  useState: function(n) {
    return Er(tt, n);
  },
  useInsertionEffect: nn,
  useLayoutEffect: nn,
  useCallback: function(n, l) {
    return Pr(function() {
      return n;
    }, l);
  },
  useImperativeHandle: nn,
  useEffect: nn,
  useDebugValue: nn,
  useDeferredValue: function(n, l) {
    return Fn(), l !== void 0 ? l : n;
  },
  useTransition: function() {
    return Fn(), [!1, ya];
  },
  useId: function() {
    var n = it(Si.treeContext), l = Me;
    if (l === null) throw Error(g(404));
    var e = ml++;
    return Qr(l, n, e);
  },
  useSyncExternalStore: function(n, l, e) {
    if (e === void 0)
      throw Error(g(407));
    return e();
  },
  useOptimistic: function(n) {
    return Fn(), [n, Ta];
  },
  useActionState: xr,
  useFormState: xr,
  useHostTransitionStatus: function() {
    return Fn(), St;
  },
  useMemoCache: function(n) {
    for (var l = Array(n), e = 0; e < n; e++)
      l[e] = Rt;
    return l;
  },
  useCacheRefresh: function() {
    return wa;
  },
  useEffectEvent: function() {
    return ba;
  }
}, Me = null, Ea = {
  getCacheForType: function() {
    throw Error(g(248));
  },
  cacheSignal: function() {
    throw Error(g(248));
  }
}, ci, Ar;
function il(n) {
  if (ci === void 0)
    try {
      throw Error();
    } catch (e) {
      var l = e.stack.trim().match(/\n( *(at )?)/);
      ci = l && l[1] || "", Ar = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
  return `
` + ci + n + Ar;
}
var oi = !1;
function Ee(n, l) {
  if (!n || oi) return "";
  oi = !0;
  var e = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var i = {
      DetermineComponentFrameRoot: function() {
        try {
          if (l) {
            var o = function() {
              throw Error();
            };
            if (Object.defineProperty(o.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(o, []);
              } catch (s) {
                var v = s;
              }
              Reflect.construct(n, [], o);
            } else {
              try {
                o.call();
              } catch (s) {
                v = s;
              }
              o = !1;
              try {
                var d = Object.getOwnPropertyDescriptor(
                  n.prototype,
                  "props"
                );
                Object.defineProperty(n.prototype, "props", {
                  configurable: !0,
                  set: function() {
                    throw Error();
                  }
                }), o = !0, new n();
              } finally {
                o && (d !== void 0 ? Object.defineProperty(n.prototype, "props", d) : delete n.prototype.props);
              }
            }
          } else {
            try {
              throw Error();
            } catch (s) {
              v = s;
            }
            (o = n()) && typeof o.catch == "function" && o.catch(function() {
            });
          }
        } catch (s) {
          if (s && v && typeof s.stack == "string")
            return [s.stack, v.stack];
        }
        return [null, null];
      }
    };
    i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var r = Object.getOwnPropertyDescriptor(
      i.DetermineComponentFrameRoot,
      "name"
    );
    r && r.configurable && Object.defineProperty(
      i.DetermineComponentFrameRoot,
      "name",
      { value: "DetermineComponentFrameRoot" }
    );
    var t = i.DetermineComponentFrameRoot(), a = t[0], u = t[1];
    if (a && u) {
      var f = a.split(`
`), h = u.split(`
`);
      for (r = i = 0; i < f.length && !f[i].includes("DetermineComponentFrameRoot"); )
        i++;
      for (; r < h.length && !h[r].includes(
        "DetermineComponentFrameRoot"
      ); )
        r++;
      if (i === f.length || r === h.length)
        for (i = f.length - 1, r = h.length - 1; 1 <= i && 0 <= r && f[i] !== h[r]; )
          r--;
      for (; 1 <= i && 0 <= r; i--, r--)
        if (f[i] !== h[r]) {
          if (i !== 1 || r !== 1)
            do
              if (i--, r--, 0 > r || f[i] !== h[r]) {
                var c = `
` + f[i].replace(" at new ", " at ");
                return n.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", n.displayName)), c;
              }
            while (1 <= i && 0 <= r);
          break;
        }
    }
  } finally {
    oi = !1, Error.prepareStackTrace = e;
  }
  return (e = n ? n.displayName || n.name : "") ? il(e) : "";
}
function ft(n) {
  if (typeof n == "string") return il(n);
  if (typeof n == "function")
    return n.prototype && n.prototype.isReactComponent ? Ee(n, !0) : Ee(n, !1);
  if (typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case Ci:
        return Ee(n.render, !1);
      case Mi:
        return Ee(n.type, !1);
      case Qe:
        var l = n, e = l._payload;
        l = l._init;
        try {
          n = l(e);
        } catch {
          return il("Lazy");
        }
        return ft(n);
    }
    if (typeof n.name == "string") {
      n: {
        e = n.name, l = n.env;
        var i = n.debugLocation;
        if (i != null && (n = Error.prepareStackTrace, Error.prepareStackTrace = void 0, i = i.stack, Error.prepareStackTrace = n, i.startsWith(`Error: react-stack-top-frame
`) && (i = i.slice(29)), n = i.indexOf(`
`), n !== -1 && (i = i.slice(n + 1)), n = i.indexOf("react_stack_bottom_frame"), n !== -1 && (n = i.lastIndexOf(`
`, n)), n = n !== -1 ? i = i.slice(0, n) : "", i = n.lastIndexOf(`
`), n = i === -1 ? n : n.slice(i + 1), n.indexOf(e) !== -1)) {
          e = `
` + n;
          break n;
        }
        e = il(
          e + (l ? " [" + l + "]" : "")
        );
      }
      return e;
    }
  }
  switch (n) {
    case Fi:
      return il("SuspenseList");
    case Ze:
      return il("Suspense");
    case ki:
      return il("ViewTransition");
  }
  return "";
}
function Il(n, l) {
  return (500 < l.byteSize || l.defer) && l.preamble === null;
}
function Pa(n) {
  if (typeof n == "object" && n !== null && typeof n.environmentName == "string") {
    var l = n.environmentName;
    n = [n].slice(0), typeof n[0] == "string" ? n.splice(
      0,
      1,
      "[%s] " + n[0],
      " " + l + " "
    ) : n.splice(0, 0, "[%s]", " " + l + " "), n.unshift(console), l = aa.apply(console.error, n), l();
  } else console.error(n);
  return null;
}
function xa(n, l, e, i, r, t, a, u, f, h, c) {
  var o = /* @__PURE__ */ new Set();
  this.destination = null, this.flushScheduled = !1, this.resumableState = n, this.renderState = l, this.rootFormatContext = e, this.progressiveChunkSize = i === void 0 ? 12800 : i, this.status = 10, this.fatalError = null, this.aborted = !1, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = o, this.pingedTasks = [], this.currentTask = null, this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.postponedState = this.trackedPostpones = null, this.onError = r === void 0 ? Pa : r, this.onBrowserBailout = t === void 0 ? nn : t, this.onAllReady = a === void 0 ? nn : a, this.onShellReady = u === void 0 ? nn : u, this.onShellError = f === void 0 ? nn : f, this.onFatalError = h === void 0 ? nn : h, this.renderLifetimeController = null, this.formState = c === void 0 ? null : c;
}
function Ra(n, l, e, i, r, t, a, u, f, h, c, o) {
  return l = new xa(
    l,
    e,
    i,
    r,
    t,
    a,
    u,
    f,
    h,
    c,
    o
  ), e = al(
    l,
    0,
    null,
    i,
    !1,
    !1
  ), e.parentFlushed = !0, n = Be(
    l,
    null,
    n,
    -1,
    null,
    e,
    null,
    null,
    l.abortableTasks,
    null,
    i,
    null,
    ua,
    null,
    null
  ), ne(n), l.pingedTasks.push(n), l;
}
var V = null;
function He(n, l) {
  n.pingedTasks.push(l), n.pingedTasks.length === 1 && (n.flushScheduled = n.destination !== null, ct(n));
}
function Hi(n, l, e, i, r) {
  return e = {
    status: 0,
    rootSegmentID: -1,
    parentFlushed: !1,
    pendingTasks: 0,
    row: l,
    completedSegments: [],
    byteSize: 0,
    defer: r,
    fallbackAbortableTasks: e,
    errorDigest: null,
    contentState: yi(),
    fallbackState: yi(),
    preamble: i,
    tracked: null
  }, l !== null && (l.pendingTasks++, i = l.boundaries, i !== null && (n.allPendingTasks++, e.pendingTasks++, i.push(e)), n = l.inheritedHoistables, n !== null && Ol(e.contentState, n)), e;
}
function Be(n, l, e, i, r, t, a, u, f, h, c, o, v, d, s) {
  n.allPendingTasks++, r === null ? n.pendingRootTasks++ : r.pendingTasks++, d !== null && d.pendingTasks++;
  var b = {
    replay: null,
    node: e,
    childIndex: i,
    ping: {
      resolve: function() {
        return He(n, b);
      },
      reject: function(R) {
        n.aborted ? b.abortSet.delete(b) && hl(b, n, R) : He(n, b);
      }
    },
    blockedBoundary: r,
    blockedSegment: t,
    blockedPreamble: a,
    hoistableState: u,
    abortSet: f,
    keyPath: h,
    formatContext: c,
    context: o,
    treeContext: v,
    row: d,
    componentStack: s,
    thenableState: l
  };
  return f.add(b), b;
}
function ut(n, l, e, i, r, t, a, u, f, h, c, o, v, d) {
  n.allPendingTasks++, t === null ? n.pendingRootTasks++ : t.pendingTasks++, v !== null && v.pendingTasks++, e.pendingTasks++;
  var s = {
    replay: e,
    node: i,
    childIndex: r,
    ping: {
      resolve: function() {
        return He(n, s);
      },
      reject: function(b) {
        n.aborted ? s.abortSet.delete(s) && hl(s, n, b) : He(n, s);
      }
    },
    blockedBoundary: t,
    blockedSegment: null,
    blockedPreamble: null,
    hoistableState: a,
    abortSet: u,
    keyPath: f,
    formatContext: h,
    context: c,
    treeContext: o,
    row: v,
    componentStack: d,
    thenableState: l
  };
  return u.add(s), s;
}
function al(n, l, e, i, r, t) {
  return {
    status: 0,
    parentFlushed: !1,
    id: -1,
    index: l,
    chunks: [],
    children: [],
    preambleChildren: [],
    parentFormatContext: i,
    boundary: e,
    lastPushedText: r,
    textEmbedded: t
  };
}
function ne(n) {
  var l = n.node;
  typeof l == "object" && l !== null && l.$$typeof === Lr && (n.componentStack = { parent: n.componentStack, type: l.type });
}
function Ei(n) {
  return n === null ? null : { parent: n.parent, type: "Suspense Fallback" };
}
function ul(n) {
  var l = {};
  return n && Object.defineProperty(l, "componentStack", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      try {
        var e = "", i = n;
        do
          e += ft(i.type), i = i.parent;
        while (i);
        var r = e;
      } catch (t) {
        r = `
Error generating stack: ` + t.message + `
` + t.stack;
      }
      return Object.defineProperty(l, "componentStack", {
        value: r
      }), r;
    }
  }), l;
}
function Y(n, l, e) {
  if (Ke(l))
    return n = n.onBrowserBailout, n(l, e), "";
  if (n = n.onError, l = n(l, e), l == null || typeof l == "string")
    return l === "" ? void 0 : l;
}
function fl(n, l) {
  var e = n.onShellError, i = n.onFatalError;
  n.pendingRootTasks !== 0 && e(l), i(l), Gi(n), n.destination !== null ? (n.status = 13, n.destination.destroy(l)) : (n.status = 12, n.aborted || (n.fatalError = l));
}
function m(n, l) {
  Bi(n, l.next, l.hoistables);
}
function Bi(n, l, e) {
  for (; l !== null; ) {
    e !== null && (Ol(l.hoistables, e), l.inheritedHoistables = e);
    var i = l.boundaries;
    if (i !== null) {
      l.boundaries = null;
      for (var r = 0; r < i.length; r++) {
        var t = i[r];
        e !== null && Ol(t.contentState, e), cl(n, t, null, null);
      }
    }
    if (l.pendingTasks--, 0 < l.pendingTasks) break;
    e = l.hoistables, l = l.next;
  }
}
function Pi(n, l) {
  var e = l.boundaries;
  if (e !== null && l.pendingTasks === e.length) {
    for (var i = !0, r = 0; r < e.length; r++) {
      var t = e[r];
      if (t.pendingTasks !== 1 || t.parentFlushed || Il(n, t)) {
        i = !1;
        break;
      }
    }
    i && Bi(n, l, l.hoistables);
  }
}
function Ql(n) {
  var l = {
    pendingTasks: 1,
    boundaries: null,
    hoistables: yi(),
    inheritedHoistables: null,
    together: !1,
    next: null
  };
  return n !== null && 0 < n.pendingTasks && (l.pendingTasks++, l.boundaries = [], n.next = l), l;
}
function Cr(n, l, e, i, r) {
  var t = l.keyPath, a = l.treeContext, u = l.row;
  l.keyPath = e, e = i.length;
  var f = null;
  if (l.replay !== null) {
    var h = l.replay.slots;
    if (h !== null && typeof h == "object")
      for (var c = 0; c < e; c++) {
        var o = r !== "backwards" && r !== "unstable_legacy-backwards" ? c : e - 1 - c, v = i[o];
        l.row = f = Ql(
          f
        ), l.treeContext = Yn(a, e, o);
        var d = h[o];
        typeof d == "number" ? (me(n, l, d, v, o), delete h[o]) : W(n, l, v, o), --f.pendingTasks === 0 && m(n, f);
      }
    else
      for (h = 0; h < e; h++)
        c = r !== "backwards" && r !== "unstable_legacy-backwards" ? h : e - 1 - h, o = i[c], l.row = f = Ql(f), l.treeContext = Yn(a, e, c), W(n, l, o, c), --f.pendingTasks === 0 && m(n, f);
  } else if (r !== "backwards" && r !== "unstable_legacy-backwards")
    for (r = 0; r < e; r++)
      h = i[r], l.row = f = Ql(f), l.treeContext = Yn(
        a,
        e,
        r
      ), W(n, l, h, r), --f.pendingTasks === 0 && m(n, f);
  else {
    for (h = l.blockedSegment, c = h.children.length, o = h.chunks.length, v = 0; v < e; v++) {
      d = r === "unstable_legacy-backwards" ? e - 1 - v : v;
      var s = i[d];
      l.row = f = Ql(
        f
      ), l.treeContext = Yn(
        a,
        e,
        d
      );
      var b = al(
        n,
        o,
        null,
        l.formatContext,
        d === 0 ? h.lastPushedText : !0,
        !0
      );
      h.children.splice(c, 0, b), l.blockedSegment = b;
      try {
        W(n, l, s, d), Jl(
          b.chunks,
          n.renderState,
          b.lastPushedText,
          b.textEmbedded
        ), b.status = 1, --f.pendingTasks === 0 && m(n, f);
      } catch (R) {
        throw b.status = n.aborted ? 3 : 4, R;
      }
    }
    l.blockedSegment = h, h.lastPushedText = !1;
  }
  u !== null && f !== null && 0 < f.pendingTasks && (u.pendingTasks++, f.next = u), l.treeContext = a, l.row = u, l.keyPath = t;
}
function Fr(n, l, e, i, r, t) {
  var a = l.thenableState;
  for (l.thenableState = null, kn = {}, Si = l, Li = n, Ni = e, ql = ml = 0, jl = -1, ze = 0, Ml = a, n = i(r, t); De; )
    De = !1, ql = ml = 0, jl = -1, ze = 0, pe += 1, F = null, n = i(r, t);
  return $l(), n;
}
function Mr(n, l, e, i, r, t, a) {
  var u = !1;
  if (t !== 0 && n.formState !== null) {
    var f = l.blockedSegment;
    if (f !== null) {
      u = !0, f = f.chunks;
      for (var h = 0; h < t; h++)
        h === a ? f.push("<!--F!-->") : f.push("<!--F-->");
    }
  }
  t = l.keyPath, l.keyPath = e, r ? (e = l.treeContext, l.treeContext = Yn(e, 1, 0), W(n, l, i, -1), l.treeContext = e) : u ? W(n, l, i, -1) : fn(n, l, i, -1), l.keyPath = t;
}
function We(n, l, e, i, r, t) {
  if (typeof i == "function")
    if (i.prototype && i.prototype.isReactComponent) {
      var a = r;
      if ("ref" in r) {
        a = {};
        for (var u in r)
          u !== "ref" && (a[u] = r[u]);
      }
      var f = i.defaultProps;
      if (f) {
        a === r && (a = ln({}, a, r));
        for (var h in f)
          a[h] === void 0 && (a[h] = f[h]);
      }
      var c = a, o = yr, v = i.contextType;
      typeof v == "object" && v !== null && (o = v._currentValue2);
      var d = new i(
        c,
        o
      ), s = d.state !== void 0 ? d.state : null;
      d.updater = Tr, d.props = c, d.state = s;
      var b = { queue: [], replace: !1 };
      d._reactInternals = b;
      var R = i.contextType;
      d.context = typeof R == "object" && R !== null ? R._currentValue2 : yr;
      var E = i.getDerivedStateFromProps;
      if (typeof E == "function") {
        var A = E(
          c,
          s
        ), D = A == null ? s : ln({}, s, A);
        d.state = D;
      }
      if (typeof i.getDerivedStateFromProps != "function" && typeof d.getSnapshotBeforeUpdate != "function" && (typeof d.UNSAFE_componentWillMount == "function" || typeof d.componentWillMount == "function")) {
        var _ = d.state;
        if (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), _ !== d.state && Tr.enqueueReplaceState(
          d,
          d.state,
          null
        ), b.queue !== null && 0 < b.queue.length) {
          var y = b.queue, P = b.replace;
          if (b.queue = null, b.replace = !1, P && y.length === 1)
            d.state = y[0];
          else {
            for (var M = P ? y[0] : d.state, en = !0, w = P ? 1 : 0; w < y.length; w++) {
              var S = y[w], L = typeof S == "function" ? S.call(
                d,
                M,
                c,
                void 0
              ) : S;
              L != null && (en ? (en = !1, M = ln({}, M, L)) : ln(M, L));
            }
            d.state = M;
          }
        } else b.queue = null;
      }
      var U = d.render();
      if (n.aborted) throw null;
      var k = l.keyPath;
      l.keyPath = e, fn(n, l, U, -1), l.keyPath = k;
    } else {
      var $ = Fr(n, l, e, i, r, void 0);
      if (n.aborted) throw null;
      Mr(
        n,
        l,
        e,
        $,
        ml !== 0,
        ql,
        jl
      );
    }
  else if (typeof i == "string") {
    var z = l.blockedSegment;
    if (z === null) {
      var On = r.children, rn = l.formatContext, H = l.keyPath;
      l.formatContext = ar(rn, i, r), l.keyPath = e, W(n, l, On, -1), l.formatContext = rn, l.keyPath = H;
    } else {
      var Zn = zt(
        z.chunks,
        i,
        r,
        n.resumableState,
        n.renderState,
        l.blockedPreamble,
        l.hoistableState,
        l.formatContext,
        z.lastPushedText
      );
      z.lastPushedText = !1;
      var G = l.formatContext, yn = l.keyPath;
      if (l.keyPath = e, (l.formatContext = ar(
        G,
        i,
        r
      )).insertionMode === 3) {
        var X = al(
          n,
          0,
          null,
          l.formatContext,
          !1,
          !1
        );
        z.preambleChildren.push(X), l.blockedSegment = X;
        try {
          W(n, l, Zn, -1), Jl(
            X.chunks,
            n.renderState,
            X.lastPushedText,
            X.textEmbedded
          ), X.status = 1;
        } finally {
          l.blockedSegment = z;
        }
      } else W(n, l, Zn, -1);
      l.formatContext = G, l.keyPath = yn;
      n: {
        var un = z.chunks, on = n.resumableState;
        switch (i) {
          case "title":
          case "style":
          case "script":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break n;
          case "body":
            if (1 >= G.insertionMode) {
              on.hasBody = !0;
              break n;
            }
            break;
          case "html":
            if (G.insertionMode === 0) {
              on.hasHtml = !0;
              break n;
            }
            break;
          case "head":
            if (1 >= G.insertionMode) break n;
        }
        un.push(tl(i));
      }
      z.lastPushedText = !1;
    }
  } else {
    switch (i) {
      case xt:
      case zr:
      case Hr:
      case Dr:
        var Tn = l.keyPath;
        l.keyPath = e, fn(n, l, r.children, -1), l.keyPath = Tn;
        return;
      case Wr:
        var I = l.blockedSegment;
        if (I === null) {
          if (r.mode !== "hidden") {
            var Rn = l.keyPath;
            l.keyPath = e, W(n, l, r.children, -1), l.keyPath = Rn;
          }
        } else if (r.mode !== "hidden") {
          n.renderState.generateStaticMarkup || I.chunks.push("<!--&-->"), I.lastPushedText = !1;
          var Qn = l.keyPath;
          l.keyPath = e, W(n, l, r.children, -1), l.keyPath = Qn, n.renderState.generateStaticMarkup || I.chunks.push("<!--/&-->"), I.lastPushedText = !1;
        }
        return;
      case Fi:
        n: {
          var wn = r.children, In = r.revealOrder;
          if (In !== "independent" && In !== "together") {
            if (Oe(wn)) {
              Cr(
                n,
                l,
                e,
                wn,
                In
              );
              break n;
            }
            var _l = Ur(wn);
            if (_l) {
              var dl = _l.call(wn);
              if (dl) {
                var sl = dl.next();
                if (!sl.done) {
                  do
                    sl = dl.next();
                  while (!sl.done);
                  Cr(
                    n,
                    l,
                    e,
                    wn,
                    In
                  );
                }
                break n;
              }
            }
          }
          if (In === "together") {
            var ae = l.keyPath, En = l.row, J = l.row = Ql(null);
            J.boundaries = [], J.together = !0, l.keyPath = e, fn(n, l, wn, -1), --J.pendingTasks === 0 && m(n, J), l.keyPath = ae, l.row = En, En !== null && 0 < J.pendingTasks && (En.pendingTasks++, J.next = En);
          } else {
            var fe = l.keyPath;
            l.keyPath = e, fn(n, l, wn, -1), l.keyPath = fe;
          }
        }
        return;
      case ki:
        var Sl = l.formatContext, Vn = l.keyPath, ue = n.resumableState;
        if (r.name == null || r.name === "auto") {
          var An = it(l.treeContext);
          Qr(ue, An, 0);
        }
        if (l.formatContext = Sl, l.keyPath = e, r.name != null && r.name !== "auto")
          fn(n, l, r.children, -1);
        else {
          var _n = l.treeContext;
          l.treeContext = Yn(_n, 1, 0), W(n, l, r.children, -1), l.treeContext = _n;
        }
        l.formatContext = Sl, l.keyPath = Vn;
        return;
      case Pt:
        throw Error(g(343));
      case Ze:
        n: if (l.replay !== null) {
          var Jn = l.keyPath, Sn = l.formatContext, Kn = l.row;
          l.keyPath = e, l.formatContext = xe(
            n.resumableState,
            Sn
          ), l.row = null;
          var Pn = r.children;
          try {
            W(n, l, Pn, -1);
          } finally {
            l.keyPath = Jn, l.formatContext = Sn, l.row = Kn;
          }
        } else {
          var vl = l.keyPath, Ln = l.formatContext, q = l.row, Ll = l.blockedBoundary, pn = l.blockedPreamble, he = l.hoistableState, dn = l.blockedSegment, Nl = r.fallback, Nn = r.children, Dn = /* @__PURE__ */ new Set(), C = Hi(
            n,
            l.row,
            Dn,
            null,
            !1
          ), sn = al(
            n,
            dn.chunks.length,
            C,
            l.formatContext,
            !1,
            !1
          );
          dn.children.push(sn), dn.lastPushedText = !1;
          var hn = al(
            n,
            0,
            null,
            l.formatContext,
            !1,
            !1
          );
          hn.parentFlushed = !0;
          var Dl = n.trackedPostpones;
          if (Dl !== null) {
            var gl = l.componentStack, bl = [e[0], "Suspense Fallback", e[2]];
            if (Dl !== null) {
              var ce = [
                bl[1],
                bl[2],
                [],
                null
              ];
              Dl.workingMap.set(
                bl,
                ce
              ), C.tracked = {
                contentKeyPath: e,
                fallbackNode: ce
              };
            }
            l.blockedSegment = sn, l.blockedPreamble = C.preamble === null ? null : C.preamble.fallback, l.keyPath = bl, l.formatContext = vi(
              n.resumableState,
              Ln
            ), l.componentStack = Ei(
              gl
            );
            try {
              W(n, l, Nl, -1), Jl(
                sn.chunks,
                n.renderState,
                sn.lastPushedText,
                sn.textEmbedded
              ), sn.status = 1;
            } catch (xn) {
              throw sn.status = n.aborted ? 3 : 4, xn;
            } finally {
              l.blockedSegment = dn, l.blockedPreamble = pn, l.keyPath = vl, l.formatContext = Ln;
            }
            var oe = Be(
              n,
              null,
              Nn,
              -1,
              C,
              hn,
              C.preamble === null ? null : C.preamble.content,
              C.contentState,
              l.abortSet,
              e,
              xe(
                n.resumableState,
                l.formatContext
              ),
              l.context,
              l.treeContext,
              null,
              gl
            );
            ne(oe), n.pingedTasks.push(oe);
          } else {
            l.blockedBoundary = C, l.blockedPreamble = C.preamble === null ? null : C.preamble.content, l.hoistableState = C.contentState, l.blockedSegment = hn, l.keyPath = e, l.formatContext = xe(
              n.resumableState,
              Ln
            ), l.row = null;
            try {
              if (W(n, l, Nn, -1), Jl(
                hn.chunks,
                n.renderState,
                hn.lastPushedText,
                hn.textEmbedded
              ), hn.status = 1, le(C, hn), C.pendingTasks === 0 && C.status === 0) {
                if (C.status = 1, !Il(n, C)) {
                  q !== null && --q.pendingTasks === 0 && m(n, q), n.pendingRootTasks === 0 && l.blockedPreamble && te(n);
                  break n;
                }
              } else
                q !== null && q.together && Pi(n, q);
            } catch (xn) {
              if (C.status = 4, n.aborted) {
                hn.status = 3;
                var vn = n.fatalError;
              } else hn.status = 4, vn = xn;
              var yl = ul(l.componentStack), mn = Y(n, vn, yl);
              C.errorDigest = mn, Wi(n, C);
            } finally {
              l.blockedBoundary = Ll, l.blockedPreamble = pn, l.hoistableState = he, l.blockedSegment = dn, l.keyPath = vl, l.formatContext = Ln, l.row = q;
            }
            var Cn = Be(
              n,
              null,
              Nl,
              -1,
              Ll,
              sn,
              C.preamble === null ? null : C.preamble.fallback,
              C.fallbackState,
              Dn,
              [e[0], "Suspense Fallback", e[2]],
              vi(
                n.resumableState,
                l.formatContext
              ),
              l.context,
              l.treeContext,
              l.row,
              Ei(
                l.componentStack
              )
            );
            ne(Cn), n.pingedTasks.push(Cn);
          }
        }
        return;
    }
    if (typeof i == "object" && i !== null)
      switch (i.$$typeof) {
        case Ci:
          if ("ref" in r) {
            var zn = {};
            for (var Hn in r)
              Hn !== "ref" && (zn[Hn] = r[Hn]);
          } else zn = r;
          var zl = Fr(
            n,
            l,
            e,
            i.render,
            zn,
            t
          );
          Mr(
            n,
            l,
            e,
            zl,
            ml !== 0,
            ql,
            jl
          );
          return;
        case Mi:
          We(n, l, e, i.type, r, t);
          return;
        case Xe:
          var de = r.children, je = l.keyPath, Tl = r.value, se = i._currentValue2;
          i._currentValue2 = Tl;
          var Bn = rl, qn = {
            parent: Bn,
            depth: Bn === null ? 0 : Bn.depth + 1,
            context: i,
            parentValue: se,
            value: Tl
          };
          rl = qn, l.context = qn, l.keyPath = e, fn(n, l, de, -1);
          var jn = rl;
          if (jn === null) throw Error(g(403));
          jn.context._currentValue2 = jn.parentValue;
          var wl = rl = jn.parent;
          l.context = wl, l.keyPath = je;
          return;
        case Br:
          var Hl = r.children, ve = Hl(i._context._currentValue2), ge = l.keyPath;
          l.keyPath = e, fn(n, l, ve, -1), l.keyPath = ge;
          return;
        case Qe:
          var $e = i._init, El = $e(i._payload);
          if (n.aborted) throw null;
          We(n, l, e, El, r, t);
          return;
      }
    throw Error(
      g(130, i == null ? i : typeof i, "")
    );
  }
}
function me(n, l, e, i, r) {
  var t = l.replay, a = l.blockedBoundary, u = al(
    n,
    0,
    null,
    l.formatContext,
    !1,
    !1
  );
  u.id = e, u.parentFlushed = !0;
  try {
    l.replay = null, l.blockedSegment = u, W(n, l, i, r), u.status = 1, a === null ? n.completedRootSegment = u : (le(a, u), a.parentFlushed && n.partialBoundaries.push(a));
  } finally {
    l.replay = t, l.blockedSegment = null;
  }
}
function fn(n, l, e, i) {
  l.replay !== null && typeof l.replay.slots == "number" ? me(n, l, l.replay.slots, e, i) : (l.node = e, l.childIndex = i, e = l.componentStack, ne(l), xi(n, l), l.componentStack = e);
}
function xi(n, l) {
  var e = l.node, i = l.childIndex;
  if (e !== null) {
    if (typeof e == "object") {
      switch (e.$$typeof) {
        case Lr:
          var r = e.type, t = e.key, a = e.props;
          e = a.ref;
          var u = e !== void 0 ? e : null, f = Le(r), h = t == null || t === At ? i === -1 ? 0 : i : t;
          if (t = [l.keyPath, f, h], l.replay !== null)
            n: {
              var c = l.replay;
              for (i = c.nodes, e = 0; e < i.length; e++) {
                var o = i[e];
                if (h === o[1]) {
                  if (o.length === 4) {
                    if (f !== null && f !== o[0])
                      throw Error(
                        g(490, o[0], f)
                      );
                    var v = o[2], d = o[3], s = l.node;
                    l.replay = {
                      nodes: v,
                      slots: d,
                      pendingTasks: 1
                    };
                    try {
                      if (We(n, l, t, r, a, u), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
                        throw Error(g(488));
                      l.replay.pendingTasks--;
                    } catch (M) {
                      if (typeof M == "object" && M !== null && (M === j || typeof M.then == "function" || M.message === "Maximum call stack size exceeded"))
                        throw l.node === s ? l.replay = c : i.splice(e, 1), M;
                      l.replay.pendingTasks--, t = ul(l.componentStack), s = n, a = l.blockedBoundary, n = n.aborted ? n.fatalError : M, t = Y(s, n, t), re(
                        s,
                        a,
                        v,
                        d,
                        n,
                        t
                      );
                    }
                    l.replay = c;
                  } else {
                    if (r !== Ze)
                      throw Error(
                        g(
                          490,
                          "Suspense",
                          Le(r) || "Unknown"
                        )
                      );
                    l: {
                      c = o[5], r = o[2], u = o[3], f = o[4] === null ? [] : o[4][2], o = o[4] === null ? null : o[4][3], h = l.keyPath;
                      var b = l.formatContext, R = l.row, E = l.replay, A = l.blockedBoundary, D = l.hoistableState, _ = a.children;
                      a = a.fallback;
                      var y = /* @__PURE__ */ new Set(), P = Hi(
                        n,
                        l.row,
                        y,
                        null,
                        !1
                      );
                      P.parentFlushed = !0, P.rootSegmentID = c, l.blockedBoundary = P, l.hoistableState = P.contentState, l.keyPath = t, l.formatContext = xe(
                        n.resumableState,
                        b
                      ), l.row = null, l.replay = {
                        nodes: r,
                        slots: u,
                        pendingTasks: 1
                      };
                      try {
                        if (W(n, l, _, -1), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
                          throw Error(g(488));
                        if (l.replay.pendingTasks--, P.pendingTasks === 0 && P.status === 0) {
                          P.status = 1, n.completedBoundaries.push(P);
                          break l;
                        }
                      } catch (M) {
                        P.status = 4, v = n.aborted ? n.fatalError : M, d = ul(l.componentStack), s = Y(
                          n,
                          v,
                          d
                        ), P.errorDigest = s, l.replay.pendingTasks--, n.clientRenderedBoundaries.push(
                          P
                        );
                      } finally {
                        l.blockedBoundary = A, l.hoistableState = D, l.replay = E, l.keyPath = h, l.formatContext = b, l.row = R;
                      }
                      v = ut(
                        n,
                        null,
                        { nodes: f, slots: o, pendingTasks: 0 },
                        a,
                        -1,
                        A,
                        P.fallbackState,
                        y,
                        [t[0], "Suspense Fallback", t[2]],
                        vi(
                          n.resumableState,
                          l.formatContext
                        ),
                        l.context,
                        l.treeContext,
                        l.row,
                        Ei(
                          l.componentStack
                        )
                      ), ne(v), n.pingedTasks.push(v);
                    }
                  }
                  i.splice(e, 1);
                  break n;
                }
              }
            }
          else We(n, l, t, r, a, u);
          return;
        case Nr:
          throw Error(g(257));
        case Qe:
          if (v = e._init, e = v(e._payload), n.aborted) throw null;
          fn(n, l, e, i);
          return;
      }
      if (Oe(e)) {
        Ri(n, l, e, i);
        return;
      }
      if ((v = Ur(e)) && (v = v.call(e))) {
        if (e = v.next(), !e.done) {
          d = [];
          do
            d.push(e.value), e = v.next();
          while (!e.done);
          Ri(n, l, d, i);
        }
        return;
      }
      if (typeof e.then == "function")
        return l.thenableState = null, fn(n, l, at(e), i);
      if (e.$$typeof === Xe)
        return fn(
          n,
          l,
          e._currentValue2,
          i
        );
      throw i = Object.prototype.toString.call(e), Error(
        g(
          31,
          i === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : i
        )
      );
    }
    typeof e == "string" ? (i = l.blockedSegment, i !== null && (i.lastPushedText = br(
      i.chunks,
      e,
      n.renderState,
      i.lastPushedText
    ))) : (typeof e == "number" || typeof e == "bigint") && (i = l.blockedSegment, i !== null && (i.lastPushedText = br(
      i.chunks,
      "" + e,
      n.renderState,
      i.lastPushedText
    )));
  }
}
function Ri(n, l, e, i) {
  var r = l.keyPath;
  if (i !== -1 && (l.keyPath = [l.keyPath, "Fragment", i], l.replay !== null)) {
    for (var t = l.replay, a = t.nodes, u = 0; u < a.length; u++) {
      var f = a[u];
      if (f[1] === i) {
        i = f[2], f = f[3], l.replay = { nodes: i, slots: f, pendingTasks: 1 };
        try {
          if (Ri(n, l, e, -1), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
            throw Error(g(488));
          l.replay.pendingTasks--;
        } catch (o) {
          if (typeof o == "object" && o !== null && (o === j || typeof o.then == "function"))
            throw o;
          l.replay.pendingTasks--;
          var h = ul(l.componentStack);
          e = n;
          var c = l.blockedBoundary;
          n = n.aborted ? n.fatalError : o, h = Y(e, n, h), re(
            e,
            c,
            i,
            f,
            n,
            h
          );
        }
        l.replay = t, a.splice(u, 1);
        break;
      }
    }
    l.keyPath = r;
    return;
  }
  if (t = l.treeContext, a = e.length, l.replay !== null && (u = l.replay.slots, u !== null && typeof u == "object")) {
    for (i = 0; i < a; i++)
      f = e[i], l.treeContext = Yn(t, a, i), c = u[i], typeof c == "number" ? (me(n, l, c, f, i), delete u[i]) : W(n, l, f, i);
    l.treeContext = t, l.keyPath = r;
    return;
  }
  for (u = 0; u < a; u++)
    i = e[u], l.treeContext = Yn(t, a, u), W(n, l, i, u);
  l.treeContext = t, l.keyPath = r;
}
function ht(n, l, e) {
  e.status = 5, e.rootSegmentID = n.nextSegmentId++;
  var i = e.tracked;
  if (i === null || (n = i.contentKeyPath, n === null)) throw Error(g(486));
  i = i.fallbackNode;
  var r = [], t = l.workingMap.get(n);
  return t === void 0 ? (e = [
    n[1],
    n[2],
    r,
    null,
    i,
    e.rootSegmentID
  ], l.workingMap.set(n, e), Ge(e, n[0], l), e) : (t[4] = i, t[5] = e.rootSegmentID, t);
}
function kr(n, l, e, i) {
  i.status = 5;
  var r = e.keyPath, t = e.blockedBoundary;
  if (t === null)
    i.id = n.nextSegmentId++, l.rootSlots = i.id, n.completedRootSegment !== null && (n.completedRootSegment.status = 5);
  else {
    if (t !== null && t.status === 0) {
      var a = ht(
        n,
        l,
        t
      );
      if (t.tracked !== null && t.tracked.contentKeyPath === r && e.childIndex === -1) {
        i.id === -1 && (i.id = i.parentFlushed ? t.rootSegmentID : n.nextSegmentId++), a[3] = i.id;
        return;
      }
    }
    if (i.id === -1 && (i.id = i.parentFlushed && t !== null ? t.rootSegmentID : n.nextSegmentId++), e.childIndex === -1)
      r === null ? l.rootSlots = i.id : (e = l.workingMap.get(r), e === void 0 ? (e = [r[1], r[2], [], i.id], Ge(e, r[0], l)) : e[3] = i.id);
    else {
      if (r === null) {
        if (n = l.rootSlots, n === null)
          n = l.rootSlots = {};
        else if (typeof n == "number")
          throw Error(g(491));
      } else if (t = l.workingMap, a = t.get(r), a === void 0)
        n = {}, a = [r[1], r[2], [], n], t.set(r, a), Ge(a, r[0], l);
      else if (n = a[3], n === null)
        n = a[3] = {};
      else if (typeof n == "number")
        throw Error(g(491));
      n[e.childIndex] = i.id;
    }
  }
}
function Wi(n, l) {
  n = n.trackedPostpones, n !== null && (l = l.tracked, l !== null && (l = l.contentKeyPath, l !== null && (n = n.workingMap.get(l), n !== void 0 && (n.length = 4, n[2] = [], n[3] = null))));
}
function Or(n, l, e) {
  return ut(
    n,
    e,
    l.replay,
    l.node,
    l.childIndex,
    l.blockedBoundary,
    l.hoistableState,
    l.abortSet,
    l.keyPath,
    l.formatContext,
    l.context,
    l.treeContext,
    l.row,
    l.componentStack
  );
}
function Ir(n, l, e) {
  var i = l.blockedSegment, r = al(
    n,
    i.chunks.length,
    null,
    l.formatContext,
    i.lastPushedText,
    !0
  );
  return i.children.push(r), i.lastPushedText = !1, Be(
    n,
    e,
    l.node,
    l.childIndex,
    l.blockedBoundary,
    r,
    l.blockedPreamble,
    l.hoistableState,
    l.abortSet,
    l.keyPath,
    l.formatContext,
    l.context,
    l.treeContext,
    l.row,
    l.componentStack
  );
}
function W(n, l, e, i) {
  var r = l.formatContext, t = l.context, a = l.keyPath, u = l.treeContext, f = l.componentStack, h = l.blockedSegment;
  if (h === null) {
    h = l.replay;
    try {
      return fn(n, l, e, i);
    } catch (v) {
      if ($l(), e = v === j ? Ne() : v, !n.aborted && typeof e == "object" && e !== null) {
        if (typeof e.then == "function") {
          i = v === j ? Xn() : null, n = Or(n, l, i).ping, e.then(n.resolve, n.reject), l.formatContext = r, l.context = t, l.keyPath = a, l.treeContext = u, l.componentStack = f, l.replay = h, Wn(t);
          return;
        }
        if (e.message === "Maximum call stack size exceeded") {
          e = v === j ? Xn() : null, e = Or(n, l, e), n.pingedTasks.push(e), l.formatContext = r, l.context = t, l.keyPath = a, l.treeContext = u, l.componentStack = f, l.replay = h, Wn(t);
          return;
        }
      }
    }
  } else {
    var c = h.children.length, o = h.chunks.length;
    try {
      return fn(n, l, e, i);
    } catch (v) {
      if ($l(), h.children.length = c, h.chunks.length = o, e = v === j ? Ne() : v, !n.aborted && typeof e == "object" && e !== null) {
        if (typeof e.then == "function") {
          h = e, e = v === j ? Xn() : null, n = Ir(n, l, e).ping, h.then(n.resolve, n.reject), l.formatContext = r, l.context = t, l.keyPath = a, l.treeContext = u, l.componentStack = f, Wn(t);
          return;
        }
        if (e.message === "Maximum call stack size exceeded") {
          h = v === j ? Xn() : null, h = Ir(n, l, h), n.pingedTasks.push(h), l.formatContext = r, l.context = t, l.keyPath = a, l.treeContext = u, l.componentStack = f, Wn(t);
          return;
        }
      }
    }
  }
  throw l.formatContext = r, l.context = t, l.keyPath = a, l.treeContext = u, Wn(t), e;
}
function Aa(n) {
  var l = n.blockedBoundary, e = n.blockedSegment;
  e !== null && (e.status = 3, cl(this, l, n.row, e));
}
function re(n, l, e, i, r, t) {
  for (var a = 0; a < e.length; a++) {
    var u = e[a];
    if (u.length === 4)
      re(
        n,
        l,
        u[2],
        u[3],
        r,
        t
      );
    else {
      u = u[5];
      var f = n, h = t, c = Hi(
        f,
        null,
        /* @__PURE__ */ new Set(),
        null,
        !1
      );
      c.parentFlushed = !0, c.rootSegmentID = u, c.status = 4, c.errorDigest = h, c.parentFlushed && f.clientRenderedBoundaries.push(c);
    }
  }
  if (e.length = 0, i !== null) {
    if (l === null) throw Error(g(487));
    if (l.status !== 4 && (l.status = 4, l.errorDigest = t, l.parentFlushed && n.clientRenderedBoundaries.push(l)), typeof i == "object") for (var o in i) delete i[o];
  }
}
function Ue(n, l) {
  if (n !== l.currentTask) {
    var e = n.blockedBoundary;
    n = n.blockedSegment, n !== null && (n.status = 3), e !== null && e.fallbackAbortableTasks.forEach(function(i) {
      return Ue(i, l);
    });
  }
}
function hl(n, l, e) {
  if (n !== l.currentTask) {
    var i = n.blockedBoundary, r = n.blockedSegment;
    if (r === null || r.status === 3) {
      var t = ul(n.componentStack), a = Ke(e);
      if (i === null) {
        if (i = n.replay, i === null) {
          a || l.trackedPostpones === null || r === null ? a ? (n = Di(e), Y(l, n, t), l.status !== 12 && l.status !== 13 && fl(l, n)) : (Y(l, e, t), l.status !== 12 && l.status !== 13 && fl(l, e)) : (i = l.trackedPostpones, Y(l, e, t), kr(l, i, n, r), cl(l, null, n.row, r));
          return;
        }
        l.status !== 12 && l.status !== 13 && (i.pendingTasks--, i.pendingTasks === 0 && 0 < i.nodes.length && (t = Y(l, e, t), re(
          l,
          null,
          i.nodes,
          i.slots,
          e,
          t
        )), l.pendingRootTasks--, l.pendingRootTasks === 0 && Yi(l));
      } else {
        var u = l.trackedPostpones;
        if (i.status !== 4) {
          if (!a && u !== null && r !== null)
            return Y(l, e, t), kr(l, u, n, r), i.fallbackAbortableTasks.forEach(function(f) {
              return hl(f, l, e);
            }), i.fallbackAbortableTasks.clear(), cl(l, i, n.row, r);
          i.status = 4, t = Y(l, e, t), i.errorDigest = t, Wi(l, i), i.parentFlushed && l.clientRenderedBoundaries.push(i);
        }
        i.pendingTasks--, t = i.row, t !== null && --t.pendingTasks === 0 && m(l, t), i.fallbackAbortableTasks.forEach(function(f) {
          return hl(f, l, e);
        }), i.fallbackAbortableTasks.clear();
      }
      n = n.row, n !== null && --n.pendingTasks === 0 && m(l, n), l.allPendingTasks--, l.allPendingTasks === 0 && Ye(l);
    }
  }
}
function Ui(n, l) {
  try {
    var e = n.renderState, i = e.onHeaders;
    if (i) {
      var r = e.headers;
      if (r) {
        e.headers = null;
        var t = r.preconnects;
        if (r.fontPreloads && (t && (t += ", "), t += r.fontPreloads), r.highImagePreloads && (t && (t += ", "), t += r.highImagePreloads), !l) {
          var a = e.styles.values(), u = a.next();
          n: for (; 0 < r.remainingCapacity && !u.done; u = a.next())
            for (var f = u.value.sheets.values(), h = f.next(); 0 < r.remainingCapacity && !h.done; h = f.next()) {
              var c = h.value, o = c.props, v = o.href, d = c.props, s = Se(d.href, "style", {
                crossOrigin: d.crossOrigin,
                integrity: d.integrity,
                nonce: d.nonce,
                type: d.type,
                fetchPriority: d.fetchPriority,
                referrerPolicy: d.referrerPolicy,
                media: d.media
              });
              if (0 <= (r.remainingCapacity -= s.length + 2))
                e.resets.style[v] = cn, t && (t += ", "), t += s, e.resets.style[v] = typeof o.crossOrigin == "string" || typeof o.integrity == "string" ? [o.crossOrigin, o.integrity] : cn;
              else break n;
            }
        }
        i(t ? { Link: t } : {});
      }
    }
  } catch (b) {
    Y(n, b, {});
  }
}
function Yi(n) {
  n.trackedPostpones === null && Ui(n, !0), n.trackedPostpones === null && te(n), n = n.onShellReady, n();
}
function Ye(n) {
  Ui(
    n,
    n.trackedPostpones === null ? !0 : n.completedRootSegment === null || n.completedRootSegment.status !== 5
  ), te(n), n = n.onAllReady, n();
}
function le(n, l) {
  if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null && l.children[0].id === -1) {
    var e = l.children[0];
    e.id = l.id, e.parentFlushed = !0, e.status !== 1 && e.status !== 3 && e.status !== 4 || le(n, e);
  } else n.completedSegments.push(l);
}
function cl(n, l, e, i) {
  if (e !== null && (--e.pendingTasks === 0 ? m(n, e) : e.together && Pi(n, e)), n.allPendingTasks--, l === null) {
    if (i !== null && i.parentFlushed) {
      if (n.completedRootSegment !== null)
        throw Error(g(389));
      n.completedRootSegment = i;
    }
    n.pendingRootTasks--, n.pendingRootTasks === 0 && Yi(n);
  } else if (l.pendingTasks--, l.status !== 4)
    if (l.pendingTasks === 0) {
      if (l.status === 0 && (l.status = 1), i !== null && i.parentFlushed && (i.status === 1 || i.status === 3) && le(l, i), l.parentFlushed && n.completedBoundaries.push(l), l.status === 1)
        e = l.row, e !== null && Ol(e.hoistables, l.contentState), Il(n, l) || (n.allPendingTasks++, l.fallbackAbortableTasks.forEach(Aa, n), l.fallbackAbortableTasks.clear(), e !== null && --e.pendingTasks === 0 && m(n, e), n.allPendingTasks--), n.pendingRootTasks === 0 && n.trackedPostpones === null && l.preamble !== null && te(n);
      else if (l.status === 5 && (l = l.row, l !== null)) {
        if (n.trackedPostpones !== null) {
          e = n.trackedPostpones;
          var r = l.next;
          if (r !== null && (i = r.boundaries, i !== null))
            for (r.boundaries = null, r = 0; r < i.length; r++) {
              var t = i[r];
              ht(n, e, t), cl(n, t, null, null);
            }
        }
        n.allPendingTasks++, --l.pendingTasks === 0 && m(n, l), n.allPendingTasks--;
      }
    } else
      i === null || !i.parentFlushed || i.status !== 1 && i.status !== 3 || (le(l, i), l.completedSegments.length === 1 && l.parentFlushed && n.partialBoundaries.push(l)), l = l.row, l !== null && l.together && Pi(n, l);
  n.allPendingTasks === 0 && Ye(n);
}
function ct(n) {
  if (!(n.aborted || 11 < n.status)) {
    var l = rl, e = Cl.H;
    Cl.H = Rr;
    var i = Cl.A;
    Cl.A = Ea;
    var r = V;
    V = n;
    var t = Me;
    Me = n.resumableState;
    try {
      var a = n.pingedTasks, u;
      for (u = 0; u < a.length; u++) {
        var f = a[u], h = n, c = f.blockedSegment;
        if (c === null) {
          n:
            if (f.replay.pendingTasks !== 0) {
              var o = h.currentTask;
              h.currentTask = f, Wn(f.context);
              var v = f.node;
              try {
                if (typeof f.replay.slots == "number" ? me(
                  h,
                  f,
                  f.replay.slots,
                  f.node,
                  f.childIndex
                ) : xi(h, f), f.replay.pendingTasks === 1 && 0 < f.replay.nodes.length)
                  throw Error(g(488));
                f.replay.pendingTasks--, f.abortSet.delete(f), cl(h, f.blockedBoundary, f.row, null);
              } catch (H) {
                $l();
                var d = H === j ? Ne() : H;
                if (h.aborted) {
                  H === j && (f.thenableState = Xn()), h.currentTask = o;
                  var s = h;
                  Ue(f, s), f.abortSet.delete(f), hl(
                    f,
                    s,
                    s.fatalError
                  );
                } else {
                  if (typeof d == "object" && d !== null) {
                    if (typeof d.then == "function") {
                      var b = f.ping;
                      d.then(b.resolve, b.reject), f.thenableState = H === j ? Xn() : null;
                      break n;
                    }
                    if (d.message === "Maximum call stack size exceeded" && f.node !== v) {
                      f.thenableState = null, h.pingedTasks.push(f);
                      break n;
                    }
                  }
                  f.replay.pendingTasks--, f.abortSet.delete(f);
                  var R = ul(f.componentStack);
                  s = h;
                  var E = f.blockedBoundary, A = h.aborted ? h.fatalError : d, D = f.replay.nodes, _ = f.replay.slots, y = Y(
                    s,
                    A,
                    R
                  );
                  re(
                    s,
                    E,
                    D,
                    _,
                    A,
                    y
                  ), h.pendingRootTasks--, h.pendingRootTasks === 0 && Yi(h), h.allPendingTasks--, h.allPendingTasks === 0 && Ye(h);
                }
              } finally {
                h.currentTask = o;
              }
            }
        } else
          n: if (s = c, s.status === 0) {
            var P = h.currentTask;
            h.currentTask = f, Wn(f.context);
            var M = s.children.length, en = s.chunks.length, w = f.node;
            try {
              xi(h, f), Jl(
                s.chunks,
                h.renderState,
                s.lastPushedText,
                s.textEmbedded
              ), f.abortSet.delete(f), s.status = 1, cl(
                h,
                f.blockedBoundary,
                f.row,
                s
              );
            } catch (H) {
              $l(), s.children.length = M, s.chunks.length = en;
              var S = H === j ? Ne() : H;
              if (h.aborted)
                H === j && (f.thenableState = Xn()), h.currentTask = P, s = h, Ue(f, s), f.abortSet.delete(f), hl(
                  f,
                  s,
                  s.fatalError
                );
              else {
                if (typeof S == "object" && S !== null) {
                  if (typeof S.then == "function") {
                    s.status = 0, f.thenableState = H === j ? Xn() : null;
                    var L = f.ping;
                    S.then(
                      L.resolve,
                      L.reject
                    );
                    break n;
                  }
                  if (S.message === "Maximum call stack size exceeded" && f.node !== w) {
                    s.status = 0, f.thenableState = null, h.pingedTasks.push(f);
                    break n;
                  }
                }
                var U = ul(f.componentStack);
                f.abortSet.delete(f), s.status = 4;
                var k = f.blockedBoundary, $ = f.row;
                if ($ !== null && --$.pendingTasks === 0 && m(h, $), h.allPendingTasks--, k === null)
                  if (Ke(S)) {
                    var z = Di(S);
                    Y(
                      h,
                      z,
                      U
                    ), fl(h, z);
                  } else
                    Y(
                      h,
                      S,
                      U
                    ), fl(h, S);
                else {
                  var On = Y(
                    h,
                    S,
                    U
                  );
                  if (k.pendingTasks--, k.status !== 4) {
                    k.status = 4, k.errorDigest = On, Wi(h, k);
                    var rn = k.row;
                    rn !== null && (h.allPendingTasks++, --rn.pendingTasks === 0 && m(h, rn), h.allPendingTasks--), k.parentFlushed && h.clientRenderedBoundaries.push(k), h.pendingRootTasks === 0 && h.trackedPostpones === null && k.preamble !== null && te(h);
                  }
                  h.allPendingTasks === 0 && Ye(h);
                }
              }
            } finally {
              h.currentTask = P;
            }
          }
      }
      a.splice(0, u), n.destination !== null && qe(n, n.destination);
    } catch (H) {
      Y(n, H, {}), fl(n, H);
    } finally {
      Me = t, Cl.H = e, Cl.A = i, e === Rr && Wn(l), V = r;
    }
  }
}
function di(n, l, e) {
  l.preambleChildren.length && e.push(l.preambleChildren);
  for (var i = !1, r = 0; r < l.children.length; r++)
    i = ot(
      n,
      l.children[r],
      e
    ) || i;
  return i;
}
function ot(n, l, e) {
  var i = l.boundary;
  if (i === null)
    return di(
      n,
      l,
      e
    );
  var r = i.preamble;
  if (r === null) return !1;
  switch (i.status) {
    case 1:
      if (vr(n.renderState, r.content), n.byteSize += i.byteSize, l = i.completedSegments[0], !l) throw Error(g(391));
      return di(
        n,
        l,
        e
      );
    case 5:
      if (n.trackedPostpones !== null) return !0;
    case 4:
      if (l.status === 1)
        return vr(n.renderState, r.fallback), di(
          n,
          l,
          e
        );
    default:
      return !0;
  }
}
function te(n) {
  if (n.completedRootSegment && n.completedPreambleSegments === null) {
    var l = [], e = n.byteSize, i = ot(
      n,
      n.completedRootSegment,
      l
    ), r = n.renderState.preamble;
    i === !1 || r.headChunks && r.bodyChunks ? n.completedPreambleSegments = l : n.byteSize = e;
  }
}
function Pe(n, l, e, i) {
  switch (e.parentFlushed = !0, e.status) {
    case 0:
      e.id = n.nextSegmentId++;
    case 5:
      return i = e.id, e.lastPushedText = !1, e.textEmbedded = !1, n = n.renderState, l.push('<template id="'), l.push(n.placeholderPrefix), n = i.toString(16), l.push(n), l.push('"></template>');
    case 1:
      e.status = 2;
      var r = !0, t = e.chunks, a = 0;
      e = e.children;
      for (var u = 0; u < e.length; u++) {
        for (r = e[u]; a < r.index; a++)
          l.push(t[a]);
        r = ie(n, l, r, i);
      }
      for (; a < t.length - 1; a++)
        l.push(t[a]);
      return a < t.length && (r = l.push(t[a])), r;
    case 3:
      return !0;
    default:
      throw Error(g(390));
  }
}
var ee = 0;
function ie(n, l, e, i) {
  var r = e.boundary;
  if (r === null)
    return Pe(n, l, e, i);
  if (e.boundary = null, r.parentFlushed = !0, r.status === 4) {
    var t = r.row;
    return t !== null && --t.pendingTasks === 0 && m(n, t), n.renderState.generateStaticMarkup || (r = r.errorDigest, l.push("<!--$!-->"), l.push("<template"), r != null && (l.push(' data-dgst="'), r = T(r), l.push(r), l.push('"')), l.push("></template>")), Pe(n, l, e, i), n = n.renderState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
  }
  if (r.status !== 1)
    return r.status === 0 && (r.rootSegmentID = n.nextSegmentId++), 0 < r.completedSegments.length && n.partialBoundaries.push(r), gr(
      l,
      n.renderState,
      r.rootSegmentID
    ), i && Ol(i, r.fallbackState), Pe(n, l, e, i), l.push("<!--/$-->");
  if (!ke && Il(n, r) && (ee + r.byteSize > n.progressiveChunkSize || r.defer))
    return r.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(r), gr(
      l,
      n.renderState,
      r.rootSegmentID
    ), Pe(n, l, e, i), l.push("<!--/$-->");
  if (ee += r.byteSize, i && Ol(i, r.contentState), e = r.row, e !== null && Il(n, r) && --e.pendingTasks === 0 && m(n, e), n.renderState.generateStaticMarkup || l.push("<!--$-->"), e = r.completedSegments, e.length !== 1) throw Error(g(391));
  return ie(n, l, e[0], i), n = n.renderState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
}
function si(n, l, e, i) {
  return Ht(
    l,
    n.renderState,
    e.parentFormatContext,
    e.id
  ), ie(n, l, e, i), Bt(l, e.parentFormatContext);
}
function _r(n, l, e) {
  ee = e.byteSize;
  for (var i = e.completedSegments, r = 0; r < i.length; r++)
    dt(
      n,
      l,
      e,
      i[r]
    );
  i.length = 0, i = e.row, i !== null && Il(n, e) && --i.pendingTasks === 0 && m(n, i), jr(
    l,
    e.contentState,
    n.renderState
  ), i = n.resumableState, n = n.renderState, r = e.rootSegmentID, e = e.contentState;
  var t = n.stylesToHoist, a = (i.instructions & 128) !== 0;
  return n.stylesToHoist = !1, l.push(n.startInlineScript), l.push(">"), t ? ((i.instructions & 4) === 0 && (i.instructions |= 4, l.push(
    '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'
  )), (i.instructions & 2) === 0 && (i.instructions |= 2, l.push(
    `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`
  )), a && (i.instructions & 256) === 0 && (i.instructions |= 256, l.push(
    `$RV=function(B,g){function h(a,c){var e=a.getAttribute(c);e&&(c=a.style,l.push(a,c.viewTransitionName,c.viewTransitionClass),"auto"!==e&&(c.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+N++ +"_"),a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,c.viewTransitionName=a,C=!0)}var C=!1,N=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var k=g[f].querySelectorAll("[vt-share]"),d=0;d<k.length;d++){var b=k[d];m.set(b.getAttribute("vt-name"),b)}var u=[];for(k=0;k<g.length;k+=2){var D=g[k],x=D.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){b=D;for(f=0;b;){if(8===b.nodeType){var t=b.data;if("/$"===t)if(0===f)break;else f--;else"$"!==t&&"$?"!==t&&"$~"!==t&&"$!"!==t||f++}else if(1===b.nodeType){d=b;var E=d.getAttribute("vt-name"),y=m.get(E);h(d,y?"vt-share":"vt-exit");y&&(h(y,"vt-share"),m.set(E,null));for(var F=d.querySelectorAll("[vt-share]"),
z=0;z<F.length;z++){var G=F[z],H=G.getAttribute("vt-name"),I=m.get(H);I&&(h(G,"vt-share"),h(I,"vt-share"),m.set(H,null))}var J=d.querySelectorAll("[vt-parent-exit]");for(d=0;d<J.length;d++)h(J[d],"vt-parent-exit")}b=b.nextSibling}for(var K=g[k+1],n=K.firstElementChild;n;){null!==m.get(n.getAttribute("vt-name"))&&h(n,"vt-enter");var L=n.querySelectorAll("[vt-parent-enter]");for(b=0;b<L.length;b++)h(L[b],"vt-parent-enter");n=n.nextElementSibling}b=x;do for(var p=b.firstElementChild;p;){var M=p.getAttribute("vt-update");
M&&"none"!==M&&!l.includes(p)&&h(p,"vt-update");p=p.nextElementSibling}while((b=b.parentNode)&&1===b.nodeType&&"none"!==b.getAttribute("vt-update"));u.push.apply(u,K.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(C){var A=document.__reactViewTransition=document.startViewTransition({update:function(){B(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],c={},e=0;e<u.length;c={g:c.g},e++)if(c.g=u[e],!c.g.complete){var q=c.g.getBoundingClientRect();0<q.bottom&&0<q.right&&
q.top<window.innerHeight&&q.left<window.innerWidth&&(q=new Promise(function(w){return function(r){w.g.addEventListener("load",r);w.g.addEventListener("error",r)}}(c)),a.push(q))}return Promise.race([Promise.all(a),new Promise(function(w){var r=performance.now();setTimeout(w,2300>r&&2E3<r?2300-r:500)})])},types:[]});A.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var c=l[a],e=c.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===c.getAttribute("style")&&c.removeAttribute("style")}});
A.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);`
  )), (i.instructions & 8) === 0 ? (i.instructions |= 8, l.push(
    `$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`
  )) : l.push('$RR("')) : ((i.instructions & 2) === 0 && (i.instructions |= 2, l.push(
    `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`
  )), a && (i.instructions & 256) === 0 && (i.instructions |= 256, l.push(
    `$RV=function(B,g){function h(a,c){var e=a.getAttribute(c);e&&(c=a.style,l.push(a,c.viewTransitionName,c.viewTransitionClass),"auto"!==e&&(c.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+N++ +"_"),a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,c.viewTransitionName=a,C=!0)}var C=!1,N=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var k=g[f].querySelectorAll("[vt-share]"),d=0;d<k.length;d++){var b=k[d];m.set(b.getAttribute("vt-name"),b)}var u=[];for(k=0;k<g.length;k+=2){var D=g[k],x=D.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){b=D;for(f=0;b;){if(8===b.nodeType){var t=b.data;if("/$"===t)if(0===f)break;else f--;else"$"!==t&&"$?"!==t&&"$~"!==t&&"$!"!==t||f++}else if(1===b.nodeType){d=b;var E=d.getAttribute("vt-name"),y=m.get(E);h(d,y?"vt-share":"vt-exit");y&&(h(y,"vt-share"),m.set(E,null));for(var F=d.querySelectorAll("[vt-share]"),
z=0;z<F.length;z++){var G=F[z],H=G.getAttribute("vt-name"),I=m.get(H);I&&(h(G,"vt-share"),h(I,"vt-share"),m.set(H,null))}var J=d.querySelectorAll("[vt-parent-exit]");for(d=0;d<J.length;d++)h(J[d],"vt-parent-exit")}b=b.nextSibling}for(var K=g[k+1],n=K.firstElementChild;n;){null!==m.get(n.getAttribute("vt-name"))&&h(n,"vt-enter");var L=n.querySelectorAll("[vt-parent-enter]");for(b=0;b<L.length;b++)h(L[b],"vt-parent-enter");n=n.nextElementSibling}b=x;do for(var p=b.firstElementChild;p;){var M=p.getAttribute("vt-update");
M&&"none"!==M&&!l.includes(p)&&h(p,"vt-update");p=p.nextElementSibling}while((b=b.parentNode)&&1===b.nodeType&&"none"!==b.getAttribute("vt-update"));u.push.apply(u,K.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(C){var A=document.__reactViewTransition=document.startViewTransition({update:function(){B(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],c={},e=0;e<u.length;c={g:c.g},e++)if(c.g=u[e],!c.g.complete){var q=c.g.getBoundingClientRect();0<q.bottom&&0<q.right&&
q.top<window.innerHeight&&q.left<window.innerWidth&&(q=new Promise(function(w){return function(r){w.g.addEventListener("load",r);w.g.addEventListener("error",r)}}(c)),a.push(q))}return Promise.race([Promise.all(a),new Promise(function(w){var r=performance.now();setTimeout(w,2300>r&&2E3<r?2300-r:500)})])},types:[]});A.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var c=l[a],e=c.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===c.getAttribute("style")&&c.removeAttribute("style")}});
A.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);`
  )), l.push('$RC("')), i = r.toString(16), l.push(n.boundaryPrefix), l.push(i), l.push('","'), l.push(n.segmentPrefix), l.push(i), t ? (l.push('",'), Kt(l, e)) : l.push('"'), e = l.push(")<\/script>"), qr(l, n) && e;
}
function dt(n, l, e, i) {
  if (i.status === 2) return !0;
  var r = e.contentState, t = i.id;
  if (t === -1) {
    if ((i.id = e.rootSegmentID) === -1)
      throw Error(g(392));
    return si(n, l, i, r);
  }
  return t === e.rootSegmentID ? si(n, l, i, r) : (si(n, l, i, r), e = n.resumableState, n = n.renderState, l.push(n.startInlineScript), l.push(">"), (e.instructions & 1) === 0 ? (e.instructions |= 1, l.push(
    '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
  )) : l.push('$RS("'), l.push(n.segmentPrefix), t = t.toString(16), l.push(t), l.push('","'), l.push(n.placeholderPrefix), l.push(t), l = l.push('")<\/script>'), l);
}
var ke = !1;
function qe(n, l) {
  try {
    if (!(0 < n.pendingRootTasks)) {
      var e, i = n.completedRootSegment;
      if (i !== null) {
        if (i.status === 5) return;
        var r = n.completedPreambleSegments;
        if (r === null) return;
        ee = n.byteSize;
        var t = n.resumableState, a = n.renderState, u = a.preamble, f = u.htmlChunks, h = u.headChunks, c;
        if (f) {
          for (c = 0; c < f.length; c++)
            l.push(f[c]);
          if (h)
            for (c = 0; c < h.length; c++)
              l.push(h[c]);
          else {
            var o = B("head");
            l.push(o), l.push(">");
          }
        } else if (h)
          for (c = 0; c < h.length; c++)
            l.push(h[c]);
        var v = a.charsetChunks;
        for (c = 0; c < v.length; c++)
          l.push(v[c]);
        v.length = 0, a.preconnects.forEach(bn, l), a.preconnects.clear();
        var d = a.viewportChunks;
        for (c = 0; c < d.length; c++)
          l.push(d[c]);
        d.length = 0, a.fontPreloads.forEach(bn, l), a.fontPreloads.clear(), a.highImagePreloads.forEach(bn, l), a.highImagePreloads.clear(), kl = a, a.styles.forEach(Qt, l), kl = null;
        var s = a.importMapChunks;
        for (c = 0; c < s.length; c++)
          l.push(s[c]);
        s.length = 0, a.bootstrapScripts.forEach(bn, l), a.scripts.forEach(bn, l), a.scripts.clear(), a.bulkPreloads.forEach(bn, l), a.bulkPreloads.clear(), t.instructions |= 32;
        var b = a.hoistableChunks;
        for (c = 0; c < b.length; c++)
          l.push(b[c]);
        for (t = b.length = 0; t < r.length; t++) {
          var R = r[t];
          for (a = 0; a < R.length; a++)
            ie(n, l, R[a], null);
        }
        var E = n.renderState.preamble, A = E.headChunks;
        if (E.htmlChunks || A) {
          var D = tl("head");
          l.push(D);
        }
        var _ = E.bodyChunks;
        if (_)
          for (r = 0; r < _.length; r++)
            l.push(_[r]);
        ie(n, l, i, null), n.completedRootSegment = null;
        var y = n.renderState;
        if (n.allPendingTasks !== 0 || n.clientRenderedBoundaries.length !== 0 || n.completedBoundaries.length !== 0 || n.trackedPostpones !== null && (n.trackedPostpones.rootNodes.length !== 0 || n.trackedPostpones.rootSlots !== null)) {
          var P = n.resumableState;
          if ((P.instructions & 64) === 0) {
            if (P.instructions |= 64, l.push(y.startInlineScript), (P.instructions & 32) === 0) {
              P.instructions |= 32;
              var M = "_" + P.idPrefix + "R_";
              l.push(' id="');
              var en = T(M);
              l.push(en), l.push('"');
            }
            l.push(">"), l.push(
              "requestAnimationFrame(function(){$RT=performance.now()});"
            ), l.push("<\/script>");
          }
        }
        qr(l, y);
      }
      var w = n.renderState;
      i = 0;
      var S = w.viewportChunks;
      for (i = 0; i < S.length; i++)
        l.push(S[i]);
      S.length = 0, w.preconnects.forEach(bn, l), w.preconnects.clear(), w.fontPreloads.forEach(bn, l), w.fontPreloads.clear(), w.highImagePreloads.forEach(
        bn,
        l
      ), w.highImagePreloads.clear(), w.styles.forEach(Jt, l), w.scripts.forEach(bn, l), w.scripts.clear(), w.bulkPreloads.forEach(bn, l), w.bulkPreloads.clear();
      var L = w.hoistableChunks;
      for (i = 0; i < L.length; i++)
        l.push(L[i]);
      L.length = 0;
      var U = n.clientRenderedBoundaries;
      for (e = 0; e < U.length; e++) {
        var k = U[e];
        w = l;
        var $ = n.resumableState, z = n.renderState, On = k.rootSegmentID, rn = k.errorDigest;
        w.push(z.startInlineScript), w.push(">"), ($.instructions & 4) === 0 ? ($.instructions |= 4, w.push(
          '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
        )) : w.push('$RX("'), w.push(z.boundaryPrefix);
        var H = On.toString(16);
        if (w.push(H), w.push('"'), rn != null)
          if (w.push(","), rn == null)
            w.push("null");
          else {
            var Zn = Ut(rn);
            w.push(Zn);
          }
        var G = w.push(")<\/script>");
        if (!G) {
          n.destination = null, e++, U.splice(0, e);
          return;
        }
      }
      U.splice(0, e);
      var yn = n.completedBoundaries;
      for (e = 0; e < yn.length; e++)
        if (!_r(n, l, yn[e])) {
          n.destination = null, e++, yn.splice(0, e);
          return;
        }
      yn.splice(0, e), ke = !0;
      var X = n.partialBoundaries;
      for (e = 0; e < X.length; e++) {
        var un = X[e];
        n: {
          U = n, k = l, ee = un.byteSize;
          var on = un.completedSegments;
          for (G = 0; G < on.length; G++)
            if (!dt(
              U,
              k,
              un,
              on[G]
            )) {
              G++, on.splice(0, G);
              var Tn = !1;
              break n;
            }
          on.splice(0, G);
          var I = un.row;
          I !== null && I.together && un.pendingTasks === 1 && (I.pendingTasks === 1 ? Bi(
            U,
            I,
            I.hoistables
          ) : I.pendingTasks--), Tn = jr(
            k,
            un.contentState,
            U.renderState
          );
        }
        if (!Tn) {
          n.destination = null, e++, X.splice(0, e);
          return;
        }
      }
      X.splice(0, e), ke = !1;
      var Rn = n.completedBoundaries;
      for (e = 0; e < Rn.length; e++)
        if (!_r(n, l, Rn[e])) {
          n.destination = null, e++, Rn.splice(0, e);
          return;
        }
      Rn.splice(0, e);
    }
  } finally {
    ke = !1, e = n.postponedState, e !== null && (e.nextSegmentId = n.nextSegmentId), n.allPendingTasks === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && (n.flushScheduled = !1, e = n.resumableState, e.hasBody && (X = tl("body"), l.push(X)), e.hasHtml && (e = tl("html"), l.push(e)), Gi(n), n.status = 13, l.push(null), n.destination = null);
  }
}
function ol(n) {
  if (n.flushScheduled === !1 && n.pingedTasks.length === 0 && n.destination !== null) {
    n.flushScheduled = !0;
    var l = n.destination;
    l ? qe(n, l) : n.flushScheduled = !1;
  }
}
function Ca(n, l) {
  if (n.status === 12)
    n.status = 13, n = n.fatalError, Ke(n) && (n = Di(n)), l.destroy(n);
  else if (n.status !== 13 && n.destination === null) {
    n.destination = l;
    try {
      qe(n, l);
    } catch (e) {
      Y(n, e, {}), fl(n, e);
    }
  }
}
function Fa(n, l) {
  try {
    if (0 < l.size) {
      var e = n.fatalError;
      l.forEach(function(i) {
        return hl(i, n, e);
      }), l.clear();
    }
    n.destination !== null && qe(n, n.destination);
  } catch (i) {
    Y(n, i, {}), fl(n, i);
  }
}
function Gi(n) {
  n = n.renderLifetimeController, n !== null && n.abort("The render ended.");
}
function Ma(n, l) {
  if (!(n.aborted || n.status !== 11 && n.status !== 10)) {
    Gi(n);
    var e = typeof l == "object" && l !== null && l.$$typeof === Ve;
    n.aborted = !0, l = e ? rt(l) : l === void 0 ? Error(g(432)) : typeof l == "object" && l !== null && typeof l.then == "function" ? Error(g(530)) : l, n.fatalError = l, l = n.abortableTasks, l.forEach(function(i) {
      return Ue(i, n);
    }), Fa(n, l);
  }
}
function Ge(n, l, e) {
  if (l === null) e.rootNodes.push(n);
  else {
    var i = e.workingMap, r = i.get(l);
    r === void 0 && (r = [l[1], l[2], [], null], i.set(l, r), Ge(r, l[0], e)), r[2].push(n);
  }
}
function ka() {
}
function st(n, l, e, i) {
  var r = !1, t = null, a = "", u = !1;
  if (l = Lt(l ? l.identifierPrefix : void 0), n = Ra(
    n,
    l,
    ta(l, e),
    Q(0, null, 0, null),
    1 / 0,
    ka,
    void 0,
    void 0,
    function() {
      u = !0;
    },
    void 0,
    void 0,
    void 0
  ), n.flushScheduled = n.destination !== null, ct(n), n.status === 10 && (n.status = 11), n.trackedPostpones === null && Ui(n, n.pendingRootTasks === 0), Ma(n, i), Ca(n, {
    push: function(f) {
      return f !== null && (a += f), !0;
    },
    destroy: function(f) {
      r = !0, t = f;
    }
  }), r && t !== i) throw t;
  if (!u) throw Error(g(426));
  return a;
}
var _a = Ai.renderToStaticMarkup = function(n, l) {
  return st(
    n,
    l,
    !0,
    'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
  );
}, Sa = Ai.renderToString = function(n, l) {
  return st(
    n,
    l,
    !1,
    'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
  );
}, La = Ai.version = "19.3.0";
export {
  Ai as default,
  _a as renderToStaticMarkup,
  Sa as renderToString,
  La as version
};
