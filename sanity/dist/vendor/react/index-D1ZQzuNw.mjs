var u = {};
var y = /* @__PURE__ */ Symbol.for("react.transitional.element"), Y = /* @__PURE__ */ Symbol.for("react.portal"), $ = /* @__PURE__ */ Symbol.for("react.fragment"), L = /* @__PURE__ */ Symbol.for("react.strict_mode"), U = /* @__PURE__ */ Symbol.for("react.profiler"), x = /* @__PURE__ */ Symbol.for("react.consumer"), k = /* @__PURE__ */ Symbol.for("react.context"), D = /* @__PURE__ */ Symbol.for("react.forward_ref"), b = /* @__PURE__ */ Symbol.for("react.suspense"), q = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), z = /* @__PURE__ */ Symbol.for("react.activity"), G = /* @__PURE__ */ Symbol.for("react.view_transition"), d = Symbol.iterator;
function V(t) {
  return t === null || typeof t != "object" ? null : (t = d && t[d] || t["@@iterator"], typeof t == "function" ? t : null);
}
var g = {
  isMounted: function() {
    return !1;
  },
  enqueueForceUpdate: function() {
  },
  enqueueReplaceState: function() {
  },
  enqueueSetState: function() {
  }
}, P = Object.assign, N = {};
function l(t, e, r) {
  this.props = t, this.context = e, this.refs = N, this.updater = r || g;
}
l.prototype.isReactComponent = {};
l.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
l.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function h() {
}
h.prototype = l.prototype;
function T(t, e, r) {
  this.props = t, this.context = e, this.refs = N, this.updater = r || g;
}
var R = T.prototype = new h();
R.constructor = T;
P(R, l.prototype);
R.isPureReactComponent = !0;
var S = Array.isArray;
function E() {
}
var i = { H: null, A: null, T: null, S: null }, H = Object.prototype.hasOwnProperty;
function m(t, e, r) {
  var n = r.ref;
  return {
    $$typeof: y,
    type: t,
    key: e,
    ref: n !== void 0 ? n : null,
    props: r
  };
}
function W(t, e) {
  return m(t.type, e, t.props);
}
function C(t) {
  return typeof t == "object" && t !== null && t.$$typeof === y;
}
function K(t) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(r) {
    return e[r];
  });
}
var A = /\/+/g;
function _(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? K("" + t.key) : e.toString(36);
}
function B(t) {
  switch (t.status) {
    case "fulfilled":
      return t.value;
    case "rejected":
      throw t.reason;
    default:
      switch (typeof t.status == "string" ? t.then(E, E) : (t.status = "pending", t.then(
        function(e) {
          t.status === "pending" && (t.status = "fulfilled", t.value = e);
        },
        function(e) {
          t.status === "pending" && (t.status = "rejected", t.reason = e);
        }
      )), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw t.reason;
      }
  }
  throw t;
}
function p(t, e, r, n, o) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var f = !1;
  if (t === null) f = !0;
  else
    switch (s) {
      case "bigint":
      case "string":
      case "number":
        f = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case y:
          case Y:
            f = !0;
            break;
          case O:
            return f = t._init, p(
              f(t._payload),
              e,
              r,
              n,
              o
            );
        }
    }
  if (f)
    return o = o(t), f = n === "" ? "." + _(t, 0) : n, S(o) ? (r = "", f != null && (r = f.replace(A, "$&/") + "/"), p(o, e, r, "", function(M) {
      return M;
    })) : o != null && (C(o) && (o = W(
      o,
      r + (o.key == null || t && t.key === o.key ? "" : ("" + o.key).replace(
        A,
        "$&/"
      ) + "/") + f
    )), e.push(o)), 1;
  f = 0;
  var a = n === "" ? "." : n + ":";
  if (S(t))
    for (var c = 0; c < t.length; c++)
      n = t[c], s = a + _(n, c), f += p(
        n,
        e,
        r,
        s,
        o
      );
  else if (c = V(t), typeof c == "function")
    for (t = c.call(t), c = 0; !(n = t.next()).done; )
      n = n.value, s = a + _(n, c++), f += p(
        n,
        e,
        r,
        s,
        o
      );
  else if (s === "object") {
    if (typeof t.then == "function")
      return p(
        B(t),
        e,
        r,
        n,
        o
      );
    throw e = String(t), Error(
      "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
    );
  }
  return f;
}
function v(t, e, r) {
  if (t == null) return t;
  var n = [], o = 0;
  return p(t, n, "", "", function(s) {
    return e.call(r, s, o++);
  }), n;
}
function Q(t) {
  if (t._status === -1) {
    var e = t._result, r = e();
    r.then(
      function(n) {
        (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n, r.status === void 0 && (r.status = "fulfilled", r.value = n));
      },
      function(n) {
        (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n, r.status === void 0 && (r.status = "rejected", r.reason = n));
      }
    ), t._status === -1 && (t._status = 0, t._result = r);
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var w = typeof reportError == "function" ? reportError : function(t) {
  if (typeof window == "object" && typeof window.ErrorEvent == "function") {
    var e = new window.ErrorEvent("error", {
      bubbles: !0,
      cancelable: !0,
      message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
      error: t
    });
    if (!window.dispatchEvent(e)) return;
  } else if (typeof process == "object" && typeof process.emit == "function") {
    process.emit("uncaughtException", t);
    return;
  }
  console.error(t);
};
function I(t) {
  var e = i.T, r = {};
  r.types = e !== null ? e.types : null, i.T = r;
  try {
    var n = t(), o = i.S;
    o !== null && o(r, n), typeof n == "object" && n !== null && typeof n.then == "function" && n.then(E, w);
  } catch (s) {
    w(s);
  } finally {
    e !== null && r.types !== null && (e.types = r.types), i.T = e;
  }
}
function j(t) {
  var e = i.T;
  if (e !== null) {
    var r = e.types;
    r === null ? e.types = [t] : r.indexOf(t) === -1 && r.push(t);
  } else I(j.bind(null, t));
}
var X = {
  map: v,
  forEach: function(t, e, r) {
    v(
      t,
      function() {
        e.apply(this, arguments);
      },
      r
    );
  },
  count: function(t) {
    var e = 0;
    return v(t, function() {
      e++;
    }), e;
  },
  toArray: function(t) {
    return v(t, function(e) {
      return e;
    }) || [];
  },
  only: function(t) {
    if (!C(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  }
}, Z = u.Activity = z, J = u.Children = X, F = u.Component = l, tt = u.Fragment = $, et = u.Profiler = U, rt = u.PureComponent = T, nt = u.StrictMode = L, ut = u.Suspense = b, ot = u.ViewTransition = G, st = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, it = u.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function(t) {
    return i.H.useMemoCache(t);
  }
}, ft = u.addTransitionType = j, ct = u.cache = function(t) {
  return function() {
    return t.apply(null, arguments);
  };
}, at = u.cacheSignal = function() {
  return null;
}, pt = u.cloneElement = function(t, e, r) {
  if (t == null)
    throw Error(
      "The argument must be a React element, but you passed " + t + "."
    );
  var n = P({}, t.props), o = t.key;
  if (e != null)
    for (s in e.key !== void 0 && (o = "" + e.key), e)
      !H.call(e, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && e.ref === void 0 || (n[s] = e[s]);
  var s = arguments.length - 2;
  if (s === 1) n.children = r;
  else if (1 < s) {
    for (var f = Array(s), a = 0; a < s; a++)
      f[a] = arguments[a + 2];
    n.children = f;
  }
  return m(t.type, o, n);
}, lt = u.createContext = function(t) {
  return t = {
    $$typeof: k,
    _currentValue: t,
    _currentValue2: t,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  }, t.Provider = t, t.Consumer = {
    $$typeof: x,
    _context: t
  }, t;
}, vt = u.createElement = function(t, e, r) {
  var n, o = {}, s = null;
  if (e != null)
    for (n in e.key !== void 0 && (s = "" + e.key), e)
      H.call(e, n) && n !== "key" && n !== "__self" && n !== "__source" && (o[n] = e[n]);
  var f = arguments.length - 2;
  if (f === 1) o.children = r;
  else if (1 < f) {
    for (var a = Array(f), c = 0; c < f; c++)
      a[c] = arguments[c + 2];
    o.children = a;
  }
  if (t && t.defaultProps)
    for (n in f = t.defaultProps, f)
      o[n] === void 0 && (o[n] = f[n]);
  return m(t, s, o);
}, _t = u.createRef = function() {
  return { current: null };
}, Et = u.forwardRef = function(t) {
  return { $$typeof: D, render: t };
}, yt = u.isValidElement = C, Tt = u.lazy = function(t) {
  return {
    $$typeof: O,
    _payload: { _status: -1, _result: t },
    _init: Q
  };
}, Rt = u.memo = function(t, e) {
  return {
    $$typeof: q,
    type: t,
    compare: e === void 0 ? null : e
  };
}, mt = u.startTransition = I, Ct = u.unstable_useCacheRefresh = function() {
  return i.H.useCacheRefresh();
}, dt = u.use = function(t) {
  return i.H.use(t);
}, St = u.useActionState = function(t, e, r) {
  return i.H.useActionState(t, e, r);
}, At = u.useCallback = function(t, e) {
  return i.H.useCallback(t, e);
}, wt = u.useContext = function(t) {
  return i.H.useContext(t);
}, Ot = u.useDebugValue = function() {
}, gt = u.useDeferredValue = function(t, e) {
  return i.H.useDeferredValue(t, e);
}, Pt = u.useEffect = function(t, e) {
  return i.H.useEffect(t, e);
}, Nt = u.useEffectEvent = function(t) {
  return i.H.useEffectEvent(t);
}, ht = u.useId = function() {
  return i.H.useId();
}, Ht = u.useImperativeHandle = function(t, e, r) {
  return i.H.useImperativeHandle(t, e, r);
}, It = u.useInsertionEffect = function(t, e) {
  return i.H.useInsertionEffect(t, e);
}, jt = u.useLayoutEffect = function(t, e) {
  return i.H.useLayoutEffect(t, e);
}, Mt = u.useMemo = function(t, e) {
  return i.H.useMemo(t, e);
}, Yt = u.useOptimistic = function(t, e) {
  return i.H.useOptimistic(t, e);
}, $t = u.useReducer = function(t, e, r) {
  return i.H.useReducer(t, e, r);
}, Lt = u.useRef = function(t) {
  return i.H.useRef(t);
}, Ut = u.useState = function(t) {
  return i.H.useState(t);
}, xt = u.useSyncExternalStore = function(t, e, r) {
  return i.H.useSyncExternalStore(
    t,
    e,
    r
  );
}, kt = u.useTransition = function() {
  return i.H.useTransition();
}, Dt = u.version = "19.3.0";
export {
  Z as Activity,
  J as Children,
  F as Component,
  tt as Fragment,
  et as Profiler,
  rt as PureComponent,
  nt as StrictMode,
  ut as Suspense,
  ot as ViewTransition,
  st as __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  it as __COMPILER_RUNTIME,
  ft as addTransitionType,
  ct as cache,
  at as cacheSignal,
  pt as cloneElement,
  lt as createContext,
  vt as createElement,
  _t as createRef,
  u as default,
  Et as forwardRef,
  yt as isValidElement,
  Tt as lazy,
  Rt as memo,
  mt as startTransition,
  Ct as unstable_useCacheRefresh,
  dt as use,
  St as useActionState,
  At as useCallback,
  wt as useContext,
  Ot as useDebugValue,
  gt as useDeferredValue,
  Pt as useEffect,
  Nt as useEffectEvent,
  ht as useId,
  Ht as useImperativeHandle,
  It as useInsertionEffect,
  jt as useLayoutEffect,
  Mt as useMemo,
  Yt as useOptimistic,
  $t as useReducer,
  Lt as useRef,
  Ut as useState,
  xt as useSyncExternalStore,
  kt as useTransition,
  Dt as version
};
