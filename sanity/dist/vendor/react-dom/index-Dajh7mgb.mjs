import s from "react";
var n = {};
var o = s;
function l(e) {
  var r = "https://react.dev/errors/" + e;
  if (1 < arguments.length) {
    r += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var t = 2; t < arguments.length; t++)
      r += "&args[]=" + encodeURIComponent(arguments[t]);
  }
  return "Minified React error #" + e + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function f() {
}
var i = {
  d: {
    f,
    r: function() {
      throw Error(l(522));
    },
    D: f,
    C: f,
    L: f,
    m: f,
    X: f,
    S: f,
    M: f
  },
  p: 0,
  findDOMNode: null
}, v = /* @__PURE__ */ Symbol.for("react.portal"), _ = /* @__PURE__ */ Symbol.for("react.recoverable"), d = /* @__PURE__ */ Symbol.for("react.optimistic_key");
function m(e, r, t) {
  var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: v,
    key: a == null ? null : a === d ? d : "" + a,
    children: e,
    containerInfo: r,
    implementation: t
  };
}
var c = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function y(e, r) {
  if (e === "font") return "";
  if (typeof r == "string")
    return r === "use-credentials" ? r : "";
}
var T = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, E = n.browser = function(e) {
  return { $$typeof: _, _reason: e };
}, O = n.createPortal = function(e, r) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11)
    throw Error(l(299));
  return m(e, r, null, t);
}, R = n.flushSync = function(e) {
  var r = c.T, t = i.p;
  try {
    if (c.T = null, i.p = 2, e) return e();
  } finally {
    c.T = r, i.p = t, i.d.f();
  }
}, P = n.preconnect = function(e, r) {
  typeof e == "string" && (r ? (r = r.crossOrigin, r = typeof r == "string" ? r === "use-credentials" ? r : "" : void 0) : r = null, i.d.C(e, r));
}, N = n.prefetchDNS = function(e) {
  typeof e == "string" && i.d.D(e);
}, h = n.preinit = function(e, r) {
  if (typeof e == "string" && r && typeof r.as == "string") {
    var t = r.as, a = y(t, r.crossOrigin), g = typeof r.integrity == "string" ? r.integrity : void 0, u = typeof r.fetchPriority == "string" ? r.fetchPriority : void 0;
    t === "style" ? i.d.S(
      e,
      typeof r.precedence == "string" ? r.precedence : void 0,
      {
        crossOrigin: a,
        integrity: g,
        fetchPriority: u
      }
    ) : t === "script" && i.d.X(e, {
      crossOrigin: a,
      integrity: g,
      fetchPriority: u,
      nonce: typeof r.nonce == "string" ? r.nonce : void 0
    });
  }
}, A = n.preinitModule = function(e, r) {
  if (typeof e == "string")
    if (typeof r == "object" && r !== null) {
      if (r.as == null || r.as === "script") {
        var t = y(
          r.as,
          r.crossOrigin
        );
        i.d.M(e, {
          crossOrigin: t,
          integrity: typeof r.integrity == "string" ? r.integrity : void 0,
          nonce: typeof r.nonce == "string" ? r.nonce : void 0,
          fetchPriority: typeof r.fetchPriority == "string" ? r.fetchPriority : void 0
        });
      }
    } else r == null && i.d.M(e);
}, C = n.preload = function(e, r) {
  if (typeof e == "string" && typeof r == "object" && r !== null && typeof r.as == "string") {
    var t = r.as, a = y(t, r.crossOrigin);
    i.d.L(e, t, {
      crossOrigin: a,
      integrity: typeof r.integrity == "string" ? r.integrity : void 0,
      nonce: typeof r.nonce == "string" ? r.nonce : void 0,
      type: typeof r.type == "string" ? r.type : void 0,
      fetchPriority: typeof r.fetchPriority == "string" ? r.fetchPriority : void 0,
      referrerPolicy: typeof r.referrerPolicy == "string" ? r.referrerPolicy : void 0,
      imageSrcSet: typeof r.imageSrcSet == "string" ? r.imageSrcSet : void 0,
      imageSizes: typeof r.imageSizes == "string" ? r.imageSizes : void 0,
      media: typeof r.media == "string" ? r.media : void 0
    });
  }
}, D = n.preloadModule = function(e, r) {
  if (typeof e == "string")
    if (r) {
      var t = y(r.as, r.crossOrigin);
      i.d.m(e, {
        as: typeof r.as == "string" && r.as !== "script" ? r.as : void 0,
        crossOrigin: t,
        integrity: typeof r.integrity == "string" ? r.integrity : void 0,
        nonce: typeof r.nonce == "string" ? r.nonce : void 0,
        fetchPriority: typeof r.fetchPriority == "string" ? r.fetchPriority : void 0
      });
    } else i.d.m(e);
}, U = n.requestFormReset = function(e) {
  i.d.r(e);
}, M = n.unstable_batchedUpdates = function(e, r) {
  return e(r);
}, b = n.useFormState = function(e, r, t) {
  return c.H.useFormState(e, r, t);
}, p = n.useFormStatus = function() {
  return c.H.useHostTransitionStatus();
}, I = n.version = "19.3.0";
export {
  T as __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  E as browser,
  O as createPortal,
  n as default,
  R as flushSync,
  P as preconnect,
  N as prefetchDNS,
  h as preinit,
  A as preinitModule,
  C as preload,
  D as preloadModule,
  U as requestFormReset,
  M as unstable_batchedUpdates,
  b as useFormState,
  p as useFormStatus,
  I as version
};
