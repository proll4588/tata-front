function tS(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const s of i.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function yp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function Gr(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Ay = { exports: {} },
  Eu = {},
  Iy = { exports: {} },
  Ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ra = Symbol.for('react.element'),
  nS = Symbol.for('react.portal'),
  rS = Symbol.for('react.fragment'),
  oS = Symbol.for('react.strict_mode'),
  iS = Symbol.for('react.profiler'),
  sS = Symbol.for('react.provider'),
  aS = Symbol.for('react.context'),
  lS = Symbol.for('react.forward_ref'),
  uS = Symbol.for('react.suspense'),
  cS = Symbol.for('react.memo'),
  dS = Symbol.for('react.lazy'),
  xh = Symbol.iterator;
function fS(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (xh && e[xh]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var $y = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jy = Object.assign,
  Dy = {};
function Ci(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dy),
    (this.updater = n || $y);
}
Ci.prototype.isReactComponent = {};
Ci.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Ci.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ly() {}
Ly.prototype = Ci.prototype;
function xp(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dy),
    (this.updater = n || $y);
}
var bp = (xp.prototype = new Ly());
bp.constructor = xp;
jy(bp, Ci.prototype);
bp.isPureReactComponent = !0;
var bh = Array.isArray,
  Ny = Object.prototype.hasOwnProperty,
  wp = { current: null },
  Fy = { key: !0, ref: !0, __self: !0, __source: !0 };
function zy(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Ny.call(t, r) && !Fy.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: ra,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: wp.current,
  };
}
function pS(e, t) {
  return {
    $$typeof: ra,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Sp(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ra;
}
function mS(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var wh = /\/+/g;
function Bc(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? mS('' + e.key)
    : t.toString(36);
}
function il(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ra:
          case nS:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + Bc(s, 0) : r),
      bh(o)
        ? ((n = ''),
          e != null && (n = e.replace(wh, '$&/') + '/'),
          il(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (Sp(o) &&
            (o = pS(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ''
                  : ('' + o.key).replace(wh, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), bh(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Bc(i, a);
      s += il(i, t, n, l, o);
    }
  else if (((l = fS(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Bc(i, a++)), (s += il(i, t, n, l, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return s;
}
function Ta(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    il(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function hS(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Dt = { current: null },
  sl = { transition: null },
  gS = {
    ReactCurrentDispatcher: Dt,
    ReactCurrentBatchConfig: sl,
    ReactCurrentOwner: wp,
  };
function By() {
  throw Error('act(...) is not supported in production builds of React.');
}
Ce.Children = {
  map: Ta,
  forEach: function (e, t, n) {
    Ta(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ta(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ta(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Sp(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
Ce.Component = Ci;
Ce.Fragment = rS;
Ce.Profiler = iS;
Ce.PureComponent = xp;
Ce.StrictMode = oS;
Ce.Suspense = uS;
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gS;
Ce.act = By;
Ce.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = jy({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = wp.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Ny.call(t, l) &&
        !Fy.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ra, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Ce.createContext = function (e) {
  return (
    (e = {
      $$typeof: aS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: sS, _context: e }),
    (e.Consumer = e)
  );
};
Ce.createElement = zy;
Ce.createFactory = function (e) {
  var t = zy.bind(null, e);
  return (t.type = e), t;
};
Ce.createRef = function () {
  return { current: null };
};
Ce.forwardRef = function (e) {
  return { $$typeof: lS, render: e };
};
Ce.isValidElement = Sp;
Ce.lazy = function (e) {
  return { $$typeof: dS, _payload: { _status: -1, _result: e }, _init: hS };
};
Ce.memo = function (e, t) {
  return { $$typeof: cS, type: e, compare: t === void 0 ? null : t };
};
Ce.startTransition = function (e) {
  var t = sl.transition;
  sl.transition = {};
  try {
    e();
  } finally {
    sl.transition = t;
  }
};
Ce.unstable_act = By;
Ce.useCallback = function (e, t) {
  return Dt.current.useCallback(e, t);
};
Ce.useContext = function (e) {
  return Dt.current.useContext(e);
};
Ce.useDebugValue = function () {};
Ce.useDeferredValue = function (e) {
  return Dt.current.useDeferredValue(e);
};
Ce.useEffect = function (e, t) {
  return Dt.current.useEffect(e, t);
};
Ce.useId = function () {
  return Dt.current.useId();
};
Ce.useImperativeHandle = function (e, t, n) {
  return Dt.current.useImperativeHandle(e, t, n);
};
Ce.useInsertionEffect = function (e, t) {
  return Dt.current.useInsertionEffect(e, t);
};
Ce.useLayoutEffect = function (e, t) {
  return Dt.current.useLayoutEffect(e, t);
};
Ce.useMemo = function (e, t) {
  return Dt.current.useMemo(e, t);
};
Ce.useReducer = function (e, t, n) {
  return Dt.current.useReducer(e, t, n);
};
Ce.useRef = function (e) {
  return Dt.current.useRef(e);
};
Ce.useState = function (e) {
  return Dt.current.useState(e);
};
Ce.useSyncExternalStore = function (e, t, n) {
  return Dt.current.useSyncExternalStore(e, t, n);
};
Ce.useTransition = function () {
  return Dt.current.useTransition();
};
Ce.version = '18.3.1';
Iy.exports = Ce;
var b = Iy.exports;
const ae = yp(b),
  _l = tS({ __proto__: null, default: ae }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vS = b,
  yS = Symbol.for('react.element'),
  xS = Symbol.for('react.fragment'),
  bS = Object.prototype.hasOwnProperty,
  wS = vS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  SS = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wy(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) bS.call(t, r) && !SS.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: yS,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: wS.current,
  };
}
Eu.Fragment = xS;
Eu.jsx = Wy;
Eu.jsxs = Wy;
Ay.exports = Eu;
var C = Ay.exports,
  Vd = {},
  Vy = { exports: {} },
  sn = {},
  Uy = { exports: {} },
  Hy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, N) {
    var H = O.length;
    O.push(N);
    e: for (; 0 < H; ) {
      var oe = (H - 1) >>> 1,
        ee = O[oe];
      if (0 < o(ee, N)) (O[oe] = N), (O[H] = ee), (H = oe);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var N = O[0],
      H = O.pop();
    if (H !== N) {
      O[0] = H;
      e: for (var oe = 0, ee = O.length, he = ee >>> 1; oe < he; ) {
        var te = 2 * (oe + 1) - 1,
          de = O[te],
          ue = te + 1,
          Re = O[ue];
        if (0 > o(de, H))
          ue < ee && 0 > o(Re, de)
            ? ((O[oe] = Re), (O[ue] = H), (oe = ue))
            : ((O[oe] = de), (O[te] = H), (oe = te));
        else if (ue < ee && 0 > o(Re, H)) (O[oe] = Re), (O[ue] = H), (oe = ue);
        else break e;
      }
    }
    return N;
  }
  function o(O, N) {
    var H = O.sortIndex - N.sortIndex;
    return H !== 0 ? H : O.id - N.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    v = !1,
    m = !1,
    h = !1,
    w = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    g = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(O) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= O)
        r(u), (N.sortIndex = N.expirationTime), t(l, N);
      else break;
      N = n(u);
    }
  }
  function x(O) {
    if (((h = !1), y(O), !m))
      if (n(l) !== null) (m = !0), W(S);
      else {
        var N = n(u);
        N !== null && M(x, N.startTime - O);
      }
  }
  function S(O, N) {
    (m = !1), h && ((h = !1), p(_), (_ = -1)), (v = !0);
    var H = f;
    try {
      for (
        y(N), d = n(l);
        d !== null && (!(d.expirationTime > N) || (O && !D()));

      ) {
        var oe = d.callback;
        if (typeof oe == 'function') {
          (d.callback = null), (f = d.priorityLevel);
          var ee = oe(d.expirationTime <= N);
          (N = e.unstable_now()),
            typeof ee == 'function' ? (d.callback = ee) : d === n(l) && r(l),
            y(N);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var he = !0;
      else {
        var te = n(u);
        te !== null && M(x, te.startTime - N), (he = !1);
      }
      return he;
    } finally {
      (d = null), (f = H), (v = !1);
    }
  }
  var P = !1,
    T = null,
    _ = -1,
    I = 5,
    k = -1;
  function D() {
    return !(e.unstable_now() - k < I);
  }
  function $() {
    if (T !== null) {
      var O = e.unstable_now();
      k = O;
      var N = !0;
      try {
        N = T(!0, O);
      } finally {
        N ? A() : ((P = !1), (T = null));
      }
    } else P = !1;
  }
  var A;
  if (typeof g == 'function')
    A = function () {
      g($);
    };
  else if (typeof MessageChannel < 'u') {
    var z = new MessageChannel(),
      B = z.port2;
    (z.port1.onmessage = $),
      (A = function () {
        B.postMessage(null);
      });
  } else
    A = function () {
      w($, 0);
    };
  function W(O) {
    (T = O), P || ((P = !0), A());
  }
  function M(O, N) {
    _ = w(function () {
      O(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || v || ((m = !0), W(S));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (I = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (O) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = f;
      }
      var H = f;
      f = N;
      try {
        return O();
      } finally {
        f = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, N) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var H = f;
      f = O;
      try {
        return N();
      } finally {
        f = H;
      }
    }),
    (e.unstable_scheduleCallback = function (O, N, H) {
      var oe = e.unstable_now();
      switch (
        (typeof H == 'object' && H !== null
          ? ((H = H.delay), (H = typeof H == 'number' && 0 < H ? oe + H : oe))
          : (H = oe),
        O)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = H + ee),
        (O = {
          id: c++,
          callback: N,
          priorityLevel: O,
          startTime: H,
          expirationTime: ee,
          sortIndex: -1,
        }),
        H > oe
          ? ((O.sortIndex = H),
            t(u, O),
            n(l) === null &&
              O === n(u) &&
              (h ? (p(_), (_ = -1)) : (h = !0), M(x, H - oe)))
          : ((O.sortIndex = ee), t(l, O), m || v || ((m = !0), W(S))),
        O
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (O) {
      var N = f;
      return function () {
        var H = f;
        f = N;
        try {
          return O.apply(this, arguments);
        } finally {
          f = H;
        }
      };
    });
})(Hy);
Uy.exports = Hy;
var ES = Uy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var CS = b,
  rn = ES;
function X(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Gy = new Set(),
  Rs = {};
function Eo(e, t) {
  ci(e, t), ci(e + 'Capture', t);
}
function ci(e, t) {
  for (Rs[e] = t, e = 0; e < t.length; e++) Gy.add(t[e]);
}
var pr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ud = Object.prototype.hasOwnProperty,
  PS =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Sh = {},
  Eh = {};
function TS(e) {
  return Ud.call(Eh, e)
    ? !0
    : Ud.call(Sh, e)
    ? !1
    : PS.test(e)
    ? (Eh[e] = !0)
    : ((Sh[e] = !0), !1);
}
function kS(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function RS(e, t, n, r) {
  if (t === null || typeof t > 'u' || kS(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Lt(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Pt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Pt[e] = new Lt(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Pt[t] = new Lt(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Pt[e] = new Lt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Pt[e] = new Lt(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Pt[e] = new Lt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Pt[e] = new Lt(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Pt[e] = new Lt(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Pt[e] = new Lt(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Pt[e] = new Lt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ep = /[\-:]([a-z])/g;
function Cp(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ep, Cp);
    Pt[t] = new Lt(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ep, Cp);
    Pt[t] = new Lt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ep, Cp);
  Pt[t] = new Lt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Pt[e] = new Lt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pt.xlinkHref = new Lt(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Pt[e] = new Lt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Pp(e, t, n, r) {
  var o = Pt.hasOwnProperty(t) ? Pt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (RS(t, n, o, r) && (n = null),
    r || o === null
      ? TS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yr = CS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ka = Symbol.for('react.element'),
  No = Symbol.for('react.portal'),
  Fo = Symbol.for('react.fragment'),
  Tp = Symbol.for('react.strict_mode'),
  Hd = Symbol.for('react.profiler'),
  Ky = Symbol.for('react.provider'),
  qy = Symbol.for('react.context'),
  kp = Symbol.for('react.forward_ref'),
  Gd = Symbol.for('react.suspense'),
  Kd = Symbol.for('react.suspense_list'),
  Rp = Symbol.for('react.memo'),
  Er = Symbol.for('react.lazy'),
  Xy = Symbol.for('react.offscreen'),
  Ch = Symbol.iterator;
function Wi(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ch && e[Ch]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Qe = Object.assign,
  Wc;
function as(e) {
  if (Wc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wc = (t && t[1]) || '';
    }
  return (
    `
` +
    Wc +
    e
  );
}
var Vc = !1;
function Uc(e, t) {
  if (!e || Vc) return '';
  Vc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Vc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? as(e) : '';
}
function OS(e) {
  switch (e.tag) {
    case 5:
      return as(e.type);
    case 16:
      return as('Lazy');
    case 13:
      return as('Suspense');
    case 19:
      return as('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Uc(e.type, !1)), e;
    case 11:
      return (e = Uc(e.type.render, !1)), e;
    case 1:
      return (e = Uc(e.type, !0)), e;
    default:
      return '';
  }
}
function qd(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Fo:
      return 'Fragment';
    case No:
      return 'Portal';
    case Hd:
      return 'Profiler';
    case Tp:
      return 'StrictMode';
    case Gd:
      return 'Suspense';
    case Kd:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case qy:
        return (e.displayName || 'Context') + '.Consumer';
      case Ky:
        return (e._context.displayName || 'Context') + '.Provider';
      case kp:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Rp:
        return (
          (t = e.displayName || null), t !== null ? t : qd(e.type) || 'Memo'
        );
      case Er:
        (t = e._payload), (e = e._init);
        try {
          return qd(e(t));
        } catch {}
    }
  return null;
}
function _S(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return qd(t);
    case 8:
      return t === Tp ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Vr(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Yy(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function MS(e) {
  var t = Yy(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = '' + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ra(e) {
  e._valueTracker || (e._valueTracker = MS(e));
}
function Qy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Yy(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ml(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xd(e, t) {
  var n = t.checked;
  return Qe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ph(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Vr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Jy(e, t) {
  (t = t.checked), t != null && Pp(e, 'checked', t, !1);
}
function Yd(e, t) {
  Jy(e, t);
  var n = Vr(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Qd(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Qd(e, t.type, Vr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Th(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Qd(e, t, n) {
  (t !== 'number' || Ml(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var ls = Array.isArray;
function Zo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Vr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Jd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(X(91));
  return Qe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function kh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(X(92));
      if (ls(n)) {
        if (1 < n.length) throw Error(X(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Vr(n) };
}
function Zy(e, t) {
  var n = Vr(t.value),
    r = Vr(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Rh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function e0(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Zd(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? e0(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Oa,
  t0 = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Oa = Oa || document.createElement('div'),
          Oa.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Oa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Os(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  AS = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(fs).forEach(function (e) {
  AS.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fs[t] = fs[e]);
  });
});
function n0(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (fs.hasOwnProperty(e) && fs[e])
    ? ('' + t).trim()
    : t + 'px';
}
function r0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = n0(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var IS = Qe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ef(e, t) {
  if (t) {
    if (IS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(X(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(X(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(X(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(X(62));
  }
}
function tf(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var nf = null;
function Op(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var rf = null,
  ei = null,
  ti = null;
function Oh(e) {
  if ((e = sa(e))) {
    if (typeof rf != 'function') throw Error(X(280));
    var t = e.stateNode;
    t && ((t = Ru(t)), rf(e.stateNode, e.type, t));
  }
}
function o0(e) {
  ei ? (ti ? ti.push(e) : (ti = [e])) : (ei = e);
}
function i0() {
  if (ei) {
    var e = ei,
      t = ti;
    if (((ti = ei = null), Oh(e), t)) for (e = 0; e < t.length; e++) Oh(t[e]);
  }
}
function s0(e, t) {
  return e(t);
}
function a0() {}
var Hc = !1;
function l0(e, t, n) {
  if (Hc) return e(t, n);
  Hc = !0;
  try {
    return s0(e, t, n);
  } finally {
    (Hc = !1), (ei !== null || ti !== null) && (a0(), i0());
  }
}
function _s(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ru(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(X(231, t, typeof n));
  return n;
}
var of = !1;
if (pr)
  try {
    var Vi = {};
    Object.defineProperty(Vi, 'passive', {
      get: function () {
        of = !0;
      },
    }),
      window.addEventListener('test', Vi, Vi),
      window.removeEventListener('test', Vi, Vi);
  } catch {
    of = !1;
  }
function $S(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ps = !1,
  Al = null,
  Il = !1,
  sf = null,
  jS = {
    onError: function (e) {
      (ps = !0), (Al = e);
    },
  };
function DS(e, t, n, r, o, i, s, a, l) {
  (ps = !1), (Al = null), $S.apply(jS, arguments);
}
function LS(e, t, n, r, o, i, s, a, l) {
  if ((DS.apply(this, arguments), ps)) {
    if (ps) {
      var u = Al;
      (ps = !1), (Al = null);
    } else throw Error(X(198));
    Il || ((Il = !0), (sf = u));
  }
}
function Co(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function u0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function _h(e) {
  if (Co(e) !== e) throw Error(X(188));
}
function NS(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Co(e)), t === null)) throw Error(X(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return _h(o), e;
        if (i === r) return _h(o), t;
        i = i.sibling;
      }
      throw Error(X(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(X(189));
      }
    }
    if (n.alternate !== r) throw Error(X(190));
  }
  if (n.tag !== 3) throw Error(X(188));
  return n.stateNode.current === n ? e : t;
}
function c0(e) {
  return (e = NS(e)), e !== null ? d0(e) : null;
}
function d0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = d0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var f0 = rn.unstable_scheduleCallback,
  Mh = rn.unstable_cancelCallback,
  FS = rn.unstable_shouldYield,
  zS = rn.unstable_requestPaint,
  rt = rn.unstable_now,
  BS = rn.unstable_getCurrentPriorityLevel,
  _p = rn.unstable_ImmediatePriority,
  p0 = rn.unstable_UserBlockingPriority,
  $l = rn.unstable_NormalPriority,
  WS = rn.unstable_LowPriority,
  m0 = rn.unstable_IdlePriority,
  Cu = null,
  Yn = null;
function VS(e) {
  if (Yn && typeof Yn.onCommitFiberRoot == 'function')
    try {
      Yn.onCommitFiberRoot(Cu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ln = Math.clz32 ? Math.clz32 : GS,
  US = Math.log,
  HS = Math.LN2;
function GS(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((US(e) / HS) | 0)) | 0;
}
var _a = 64,
  Ma = 4194304;
function us(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function jl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = us(a)) : ((i &= s), i !== 0 && (r = us(i)));
  } else (s = n & ~o), s !== 0 ? (r = us(s)) : i !== 0 && (r = us(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ln(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function KS(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qS(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Ln(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = KS(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function af(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function h0() {
  var e = _a;
  return (_a <<= 1), !(_a & 4194240) && (_a = 64), e;
}
function Gc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function oa(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ln(t)),
    (e[t] = n);
}
function XS(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ln(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Mp(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ln(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var je = 0;
function g0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var v0,
  Ap,
  y0,
  x0,
  b0,
  lf = !1,
  Aa = [],
  $r = null,
  jr = null,
  Dr = null,
  Ms = new Map(),
  As = new Map(),
  Pr = [],
  YS =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Ah(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      $r = null;
      break;
    case 'dragenter':
    case 'dragleave':
      jr = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Dr = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Ms.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      As.delete(t.pointerId);
  }
}
function Ui(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = sa(t)), t !== null && Ap(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function QS(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return ($r = Ui($r, e, t, n, r, o)), !0;
    case 'dragenter':
      return (jr = Ui(jr, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Dr = Ui(Dr, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Ms.set(i, Ui(Ms.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), As.set(i, Ui(As.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function w0(e) {
  var t = ro(e.target);
  if (t !== null) {
    var n = Co(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = u0(n)), t !== null)) {
          (e.blockedOn = t),
            b0(e.priority, function () {
              y0(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function al(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = uf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (nf = r), n.target.dispatchEvent(r), (nf = null);
    } else return (t = sa(n)), t !== null && Ap(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ih(e, t, n) {
  al(e) && n.delete(t);
}
function JS() {
  (lf = !1),
    $r !== null && al($r) && ($r = null),
    jr !== null && al(jr) && (jr = null),
    Dr !== null && al(Dr) && (Dr = null),
    Ms.forEach(Ih),
    As.forEach(Ih);
}
function Hi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    lf ||
      ((lf = !0),
      rn.unstable_scheduleCallback(rn.unstable_NormalPriority, JS)));
}
function Is(e) {
  function t(o) {
    return Hi(o, e);
  }
  if (0 < Aa.length) {
    Hi(Aa[0], e);
    for (var n = 1; n < Aa.length; n++) {
      var r = Aa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    $r !== null && Hi($r, e),
      jr !== null && Hi(jr, e),
      Dr !== null && Hi(Dr, e),
      Ms.forEach(t),
      As.forEach(t),
      n = 0;
    n < Pr.length;
    n++
  )
    (r = Pr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pr.length && ((n = Pr[0]), n.blockedOn === null); )
    w0(n), n.blockedOn === null && Pr.shift();
}
var ni = yr.ReactCurrentBatchConfig,
  Dl = !0;
function ZS(e, t, n, r) {
  var o = je,
    i = ni.transition;
  ni.transition = null;
  try {
    (je = 1), Ip(e, t, n, r);
  } finally {
    (je = o), (ni.transition = i);
  }
}
function eE(e, t, n, r) {
  var o = je,
    i = ni.transition;
  ni.transition = null;
  try {
    (je = 4), Ip(e, t, n, r);
  } finally {
    (je = o), (ni.transition = i);
  }
}
function Ip(e, t, n, r) {
  if (Dl) {
    var o = uf(e, t, n, r);
    if (o === null) nd(e, t, r, Ll, n), Ah(e, r);
    else if (QS(o, e, t, n, r)) r.stopPropagation();
    else if ((Ah(e, r), t & 4 && -1 < YS.indexOf(e))) {
      for (; o !== null; ) {
        var i = sa(o);
        if (
          (i !== null && v0(i),
          (i = uf(e, t, n, r)),
          i === null && nd(e, t, r, Ll, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else nd(e, t, r, null, n);
  }
}
var Ll = null;
function uf(e, t, n, r) {
  if (((Ll = null), (e = Op(r)), (e = ro(e)), e !== null))
    if (((t = Co(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = u0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ll = e), null;
}
function S0(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (BS()) {
        case _p:
          return 1;
        case p0:
          return 4;
        case $l:
        case WS:
          return 16;
        case m0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kr = null,
  $p = null,
  ll = null;
function E0() {
  if (ll) return ll;
  var e,
    t = $p,
    n = t.length,
    r,
    o = 'value' in kr ? kr.value : kr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (ll = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ul(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ia() {
  return !0;
}
function $h() {
  return !1;
}
function an(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ia
        : $h),
      (this.isPropagationStopped = $h),
      this
    );
  }
  return (
    Qe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ia));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ia));
      },
      persist: function () {},
      isPersistent: Ia,
    }),
    t
  );
}
var Pi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  jp = an(Pi),
  ia = Qe({}, Pi, { view: 0, detail: 0 }),
  tE = an(ia),
  Kc,
  qc,
  Gi,
  Pu = Qe({}, ia, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Dp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Gi &&
            (Gi && e.type === 'mousemove'
              ? ((Kc = e.screenX - Gi.screenX), (qc = e.screenY - Gi.screenY))
              : (qc = Kc = 0),
            (Gi = e)),
          Kc);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : qc;
    },
  }),
  jh = an(Pu),
  nE = Qe({}, Pu, { dataTransfer: 0 }),
  rE = an(nE),
  oE = Qe({}, ia, { relatedTarget: 0 }),
  Xc = an(oE),
  iE = Qe({}, Pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sE = an(iE),
  aE = Qe({}, Pi, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  lE = an(aE),
  uE = Qe({}, Pi, { data: 0 }),
  Dh = an(uE),
  cE = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  dE = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  fE = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function pE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = fE[e]) ? !!t[e] : !1;
}
function Dp() {
  return pE;
}
var mE = Qe({}, ia, {
    key: function (e) {
      if (e.key) {
        var t = cE[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = ul(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? dE[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Dp,
    charCode: function (e) {
      return e.type === 'keypress' ? ul(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ul(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  hE = an(mE),
  gE = Qe({}, Pu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Lh = an(gE),
  vE = Qe({}, ia, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Dp,
  }),
  yE = an(vE),
  xE = Qe({}, Pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bE = an(xE),
  wE = Qe({}, Pu, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  SE = an(wE),
  EE = [9, 13, 27, 32],
  Lp = pr && 'CompositionEvent' in window,
  ms = null;
pr && 'documentMode' in document && (ms = document.documentMode);
var CE = pr && 'TextEvent' in window && !ms,
  C0 = pr && (!Lp || (ms && 8 < ms && 11 >= ms)),
  Nh = ' ',
  Fh = !1;
function P0(e, t) {
  switch (e) {
    case 'keyup':
      return EE.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function T0(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var zo = !1;
function PE(e, t) {
  switch (e) {
    case 'compositionend':
      return T0(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Fh = !0), Nh);
    case 'textInput':
      return (e = t.data), e === Nh && Fh ? null : e;
    default:
      return null;
  }
}
function TE(e, t) {
  if (zo)
    return e === 'compositionend' || (!Lp && P0(e, t))
      ? ((e = E0()), (ll = $p = kr = null), (zo = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return C0 && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var kE = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function zh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!kE[e.type] : t === 'textarea';
}
function k0(e, t, n, r) {
  o0(r),
    (t = Nl(t, 'onChange')),
    0 < t.length &&
      ((n = new jp('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var hs = null,
  $s = null;
function RE(e) {
  N0(e, 0);
}
function Tu(e) {
  var t = Vo(e);
  if (Qy(t)) return e;
}
function OE(e, t) {
  if (e === 'change') return t;
}
var R0 = !1;
if (pr) {
  var Yc;
  if (pr) {
    var Qc = 'oninput' in document;
    if (!Qc) {
      var Bh = document.createElement('div');
      Bh.setAttribute('oninput', 'return;'),
        (Qc = typeof Bh.oninput == 'function');
    }
    Yc = Qc;
  } else Yc = !1;
  R0 = Yc && (!document.documentMode || 9 < document.documentMode);
}
function Wh() {
  hs && (hs.detachEvent('onpropertychange', O0), ($s = hs = null));
}
function O0(e) {
  if (e.propertyName === 'value' && Tu($s)) {
    var t = [];
    k0(t, $s, e, Op(e)), l0(RE, t);
  }
}
function _E(e, t, n) {
  e === 'focusin'
    ? (Wh(), (hs = t), ($s = n), hs.attachEvent('onpropertychange', O0))
    : e === 'focusout' && Wh();
}
function ME(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Tu($s);
}
function AE(e, t) {
  if (e === 'click') return Tu(t);
}
function IE(e, t) {
  if (e === 'input' || e === 'change') return Tu(t);
}
function $E(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fn = typeof Object.is == 'function' ? Object.is : $E;
function js(e, t) {
  if (Fn(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ud.call(t, o) || !Fn(e[o], t[o])) return !1;
  }
  return !0;
}
function Vh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Uh(e, t) {
  var n = Vh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Vh(n);
  }
}
function _0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _0(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function M0() {
  for (var e = window, t = Ml(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ml(e.document);
  }
  return t;
}
function Np(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function jE(e) {
  var t = M0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Np(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Uh(n, i));
        var s = Uh(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var DE = pr && 'documentMode' in document && 11 >= document.documentMode,
  Bo = null,
  cf = null,
  gs = null,
  df = !1;
function Hh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  df ||
    Bo == null ||
    Bo !== Ml(r) ||
    ((r = Bo),
    'selectionStart' in r && Np(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (gs && js(gs, r)) ||
      ((gs = r),
      (r = Nl(cf, 'onSelect')),
      0 < r.length &&
        ((t = new jp('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Bo))));
}
function $a(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Wo = {
    animationend: $a('Animation', 'AnimationEnd'),
    animationiteration: $a('Animation', 'AnimationIteration'),
    animationstart: $a('Animation', 'AnimationStart'),
    transitionend: $a('Transition', 'TransitionEnd'),
  },
  Jc = {},
  A0 = {};
pr &&
  ((A0 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Wo.animationend.animation,
    delete Wo.animationiteration.animation,
    delete Wo.animationstart.animation),
  'TransitionEvent' in window || delete Wo.transitionend.transition);
function ku(e) {
  if (Jc[e]) return Jc[e];
  if (!Wo[e]) return e;
  var t = Wo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in A0) return (Jc[e] = t[n]);
  return e;
}
var I0 = ku('animationend'),
  $0 = ku('animationiteration'),
  j0 = ku('animationstart'),
  D0 = ku('transitionend'),
  L0 = new Map(),
  Gh =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Kr(e, t) {
  L0.set(e, t), Eo(t, [e]);
}
for (var Zc = 0; Zc < Gh.length; Zc++) {
  var ed = Gh[Zc],
    LE = ed.toLowerCase(),
    NE = ed[0].toUpperCase() + ed.slice(1);
  Kr(LE, 'on' + NE);
}
Kr(I0, 'onAnimationEnd');
Kr($0, 'onAnimationIteration');
Kr(j0, 'onAnimationStart');
Kr('dblclick', 'onDoubleClick');
Kr('focusin', 'onFocus');
Kr('focusout', 'onBlur');
Kr(D0, 'onTransitionEnd');
ci('onMouseEnter', ['mouseout', 'mouseover']);
ci('onMouseLeave', ['mouseout', 'mouseover']);
ci('onPointerEnter', ['pointerout', 'pointerover']);
ci('onPointerLeave', ['pointerout', 'pointerover']);
Eo(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Eo(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Eo('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Eo(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Eo(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Eo(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var cs =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  FE = new Set('cancel close invalid load scroll toggle'.split(' ').concat(cs));
function Kh(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), LS(r, t, void 0, e), (e.currentTarget = null);
}
function N0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Kh(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Kh(o, a, u), (i = l);
        }
    }
  }
  if (Il) throw ((e = sf), (Il = !1), (sf = null), e);
}
function Ue(e, t) {
  var n = t[gf];
  n === void 0 && (n = t[gf] = new Set());
  var r = e + '__bubble';
  n.has(r) || (F0(t, e, 2, !1), n.add(r));
}
function td(e, t, n) {
  var r = 0;
  t && (r |= 4), F0(n, e, r, t);
}
var ja = '_reactListening' + Math.random().toString(36).slice(2);
function Ds(e) {
  if (!e[ja]) {
    (e[ja] = !0),
      Gy.forEach(function (n) {
        n !== 'selectionchange' && (FE.has(n) || td(n, !1, e), td(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ja] || ((t[ja] = !0), td('selectionchange', !1, t));
  }
}
function F0(e, t, n, r) {
  switch (S0(t)) {
    case 1:
      var o = ZS;
      break;
    case 4:
      o = eE;
      break;
    default:
      o = Ip;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !of ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function nd(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = ro(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  l0(function () {
    var u = i,
      c = Op(n),
      d = [];
    e: {
      var f = L0.get(e);
      if (f !== void 0) {
        var v = jp,
          m = e;
        switch (e) {
          case 'keypress':
            if (ul(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            v = hE;
            break;
          case 'focusin':
            (m = 'focus'), (v = Xc);
            break;
          case 'focusout':
            (m = 'blur'), (v = Xc);
            break;
          case 'beforeblur':
          case 'afterblur':
            v = Xc;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = jh;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = rE;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = yE;
            break;
          case I0:
          case $0:
          case j0:
            v = sE;
            break;
          case D0:
            v = bE;
            break;
          case 'scroll':
            v = tE;
            break;
          case 'wheel':
            v = SE;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            v = lE;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = Lh;
        }
        var h = (t & 4) !== 0,
          w = !h && e === 'scroll',
          p = h ? (f !== null ? f + 'Capture' : null) : f;
        h = [];
        for (var g = u, y; g !== null; ) {
          y = g;
          var x = y.stateNode;
          if (
            (y.tag === 5 &&
              x !== null &&
              ((y = x),
              p !== null && ((x = _s(g, p)), x != null && h.push(Ls(g, x, y)))),
            w)
          )
            break;
          g = g.return;
        }
        0 < h.length &&
          ((f = new v(f, m, null, n, c)), d.push({ event: f, listeners: h }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== nf &&
            (m = n.relatedTarget || n.fromElement) &&
            (ro(m) || m[mr]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          v
            ? ((m = n.relatedTarget || n.toElement),
              (v = u),
              (m = m ? ro(m) : null),
              m !== null &&
                ((w = Co(m)), m !== w || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((v = null), (m = u)),
          v !== m)
        ) {
          if (
            ((h = jh),
            (x = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (g = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((h = Lh),
              (x = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (g = 'pointer')),
            (w = v == null ? f : Vo(v)),
            (y = m == null ? f : Vo(m)),
            (f = new h(x, g + 'leave', v, n, c)),
            (f.target = w),
            (f.relatedTarget = y),
            (x = null),
            ro(c) === u &&
              ((h = new h(p, g + 'enter', m, n, c)),
              (h.target = y),
              (h.relatedTarget = w),
              (x = h)),
            (w = x),
            v && m)
          )
            t: {
              for (h = v, p = m, g = 0, y = h; y; y = Ro(y)) g++;
              for (y = 0, x = p; x; x = Ro(x)) y++;
              for (; 0 < g - y; ) (h = Ro(h)), g--;
              for (; 0 < y - g; ) (p = Ro(p)), y--;
              for (; g--; ) {
                if (h === p || (p !== null && h === p.alternate)) break t;
                (h = Ro(h)), (p = Ro(p));
              }
              h = null;
            }
          else h = null;
          v !== null && qh(d, f, v, h, !1),
            m !== null && w !== null && qh(d, w, m, h, !0);
        }
      }
      e: {
        if (
          ((f = u ? Vo(u) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && f.type === 'file'))
        )
          var S = OE;
        else if (zh(f))
          if (R0) S = IE;
          else {
            S = ME;
            var P = _E;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (S = AE);
        if (S && (S = S(e, u))) {
          k0(d, S, n, c);
          break e;
        }
        P && P(e, f, u),
          e === 'focusout' &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === 'number' &&
            Qd(f, 'number', f.value);
      }
      switch (((P = u ? Vo(u) : window), e)) {
        case 'focusin':
          (zh(P) || P.contentEditable === 'true') &&
            ((Bo = P), (cf = u), (gs = null));
          break;
        case 'focusout':
          gs = cf = Bo = null;
          break;
        case 'mousedown':
          df = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (df = !1), Hh(d, n, c);
          break;
        case 'selectionchange':
          if (DE) break;
        case 'keydown':
        case 'keyup':
          Hh(d, n, c);
      }
      var T;
      if (Lp)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart';
              break e;
            case 'compositionend':
              _ = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              _ = 'onCompositionUpdate';
              break e;
          }
          _ = void 0;
        }
      else
        zo
          ? P0(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart');
      _ &&
        (C0 &&
          n.locale !== 'ko' &&
          (zo || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && zo && (T = E0())
            : ((kr = c),
              ($p = 'value' in kr ? kr.value : kr.textContent),
              (zo = !0))),
        (P = Nl(u, _)),
        0 < P.length &&
          ((_ = new Dh(_, e, null, n, c)),
          d.push({ event: _, listeners: P }),
          T ? (_.data = T) : ((T = T0(n)), T !== null && (_.data = T)))),
        (T = CE ? PE(e, n) : TE(e, n)) &&
          ((u = Nl(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Dh('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    N0(d, t);
  });
}
function Ls(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Nl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = _s(e, n)),
      i != null && r.unshift(Ls(e, i, o)),
      (i = _s(e, t)),
      i != null && r.push(Ls(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Ro(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qh(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = _s(n, i)), l != null && s.unshift(Ls(n, l, a)))
        : o || ((l = _s(n, i)), l != null && s.push(Ls(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var zE = /\r\n?/g,
  BE = /\u0000|\uFFFD/g;
function Xh(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      zE,
      `
`
    )
    .replace(BE, '');
}
function Da(e, t, n) {
  if (((t = Xh(t)), Xh(e) !== t && n)) throw Error(X(425));
}
function Fl() {}
var ff = null,
  pf = null;
function mf(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var hf = typeof setTimeout == 'function' ? setTimeout : void 0,
  WE = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Yh = typeof Promise == 'function' ? Promise : void 0,
  VE =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Yh < 'u'
      ? function (e) {
          return Yh.resolve(null).then(e).catch(UE);
        }
      : hf;
function UE(e) {
  setTimeout(function () {
    throw e;
  });
}
function rd(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Is(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Is(t);
}
function Lr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Qh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ti = Math.random().toString(36).slice(2),
  Gn = '__reactFiber$' + Ti,
  Ns = '__reactProps$' + Ti,
  mr = '__reactContainer$' + Ti,
  gf = '__reactEvents$' + Ti,
  HE = '__reactListeners$' + Ti,
  GE = '__reactHandles$' + Ti;
function ro(e) {
  var t = e[Gn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mr] || n[Gn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Qh(e); e !== null; ) {
          if ((n = e[Gn])) return n;
          e = Qh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function sa(e) {
  return (
    (e = e[Gn] || e[mr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(X(33));
}
function Ru(e) {
  return e[Ns] || null;
}
var vf = [],
  Uo = -1;
function qr(e) {
  return { current: e };
}
function He(e) {
  0 > Uo || ((e.current = vf[Uo]), (vf[Uo] = null), Uo--);
}
function We(e, t) {
  Uo++, (vf[Uo] = e.current), (e.current = t);
}
var Ur = {},
  _t = qr(Ur),
  Wt = qr(!1),
  po = Ur;
function di(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ur;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Vt(e) {
  return (e = e.childContextTypes), e != null;
}
function zl() {
  He(Wt), He(_t);
}
function Jh(e, t, n) {
  if (_t.current !== Ur) throw Error(X(168));
  We(_t, t), We(Wt, n);
}
function z0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(X(108, _S(e) || 'Unknown', o));
  return Qe({}, n, r);
}
function Bl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ur),
    (po = _t.current),
    We(_t, e),
    We(Wt, Wt.current),
    !0
  );
}
function Zh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(X(169));
  n
    ? ((e = z0(e, t, po)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      He(Wt),
      He(_t),
      We(_t, e))
    : He(Wt),
    We(Wt, n);
}
var ar = null,
  Ou = !1,
  od = !1;
function B0(e) {
  ar === null ? (ar = [e]) : ar.push(e);
}
function KE(e) {
  (Ou = !0), B0(e);
}
function Xr() {
  if (!od && ar !== null) {
    od = !0;
    var e = 0,
      t = je;
    try {
      var n = ar;
      for (je = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ar = null), (Ou = !1);
    } catch (o) {
      throw (ar !== null && (ar = ar.slice(e + 1)), f0(_p, Xr), o);
    } finally {
      (je = t), (od = !1);
    }
  }
  return null;
}
var Ho = [],
  Go = 0,
  Wl = null,
  Vl = 0,
  pn = [],
  mn = 0,
  mo = null,
  ur = 1,
  cr = '';
function Jr(e, t) {
  (Ho[Go++] = Vl), (Ho[Go++] = Wl), (Wl = e), (Vl = t);
}
function W0(e, t, n) {
  (pn[mn++] = ur), (pn[mn++] = cr), (pn[mn++] = mo), (mo = e);
  var r = ur;
  e = cr;
  var o = 32 - Ln(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Ln(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (ur = (1 << (32 - Ln(t) + o)) | (n << o) | r),
      (cr = i + e);
  } else (ur = (1 << i) | (n << o) | r), (cr = e);
}
function Fp(e) {
  e.return !== null && (Jr(e, 1), W0(e, 1, 0));
}
function zp(e) {
  for (; e === Wl; )
    (Wl = Ho[--Go]), (Ho[Go] = null), (Vl = Ho[--Go]), (Ho[Go] = null);
  for (; e === mo; )
    (mo = pn[--mn]),
      (pn[mn] = null),
      (cr = pn[--mn]),
      (pn[mn] = null),
      (ur = pn[--mn]),
      (pn[mn] = null);
}
var en = null,
  Zt = null,
  Ke = !1,
  $n = null;
function V0(e, t) {
  var n = vn(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function eg(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (en = e), (Zt = Lr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (en = e), (Zt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = mo !== null ? { id: ur, overflow: cr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = vn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (en = e),
            (Zt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function yf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xf(e) {
  if (Ke) {
    var t = Zt;
    if (t) {
      var n = t;
      if (!eg(e, t)) {
        if (yf(e)) throw Error(X(418));
        t = Lr(n.nextSibling);
        var r = en;
        t && eg(e, t)
          ? V0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ke = !1), (en = e));
      }
    } else {
      if (yf(e)) throw Error(X(418));
      (e.flags = (e.flags & -4097) | 2), (Ke = !1), (en = e);
    }
  }
}
function tg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  en = e;
}
function La(e) {
  if (e !== en) return !1;
  if (!Ke) return tg(e), (Ke = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !mf(e.type, e.memoizedProps))),
    t && (t = Zt))
  ) {
    if (yf(e)) throw (U0(), Error(X(418)));
    for (; t; ) V0(e, t), (t = Lr(t.nextSibling));
  }
  if ((tg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(X(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Zt = Lr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Zt = null;
    }
  } else Zt = en ? Lr(e.stateNode.nextSibling) : null;
  return !0;
}
function U0() {
  for (var e = Zt; e; ) e = Lr(e.nextSibling);
}
function fi() {
  (Zt = en = null), (Ke = !1);
}
function Bp(e) {
  $n === null ? ($n = [e]) : $n.push(e);
}
var qE = yr.ReactCurrentBatchConfig;
function Ki(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(X(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(X(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(X(284));
    if (!n._owner) throw Error(X(290, e));
  }
  return e;
}
function Na(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      X(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function ng(e) {
  var t = e._init;
  return t(e._payload);
}
function H0(e) {
  function t(p, g) {
    if (e) {
      var y = p.deletions;
      y === null ? ((p.deletions = [g]), (p.flags |= 16)) : y.push(g);
    }
  }
  function n(p, g) {
    if (!e) return null;
    for (; g !== null; ) t(p, g), (g = g.sibling);
    return null;
  }
  function r(p, g) {
    for (p = new Map(); g !== null; )
      g.key !== null ? p.set(g.key, g) : p.set(g.index, g), (g = g.sibling);
    return p;
  }
  function o(p, g) {
    return (p = Br(p, g)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, g, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < g ? ((p.flags |= 2), g) : y)
            : ((p.flags |= 2), g))
        : ((p.flags |= 1048576), g)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, g, y, x) {
    return g === null || g.tag !== 6
      ? ((g = dd(y, p.mode, x)), (g.return = p), g)
      : ((g = o(g, y)), (g.return = p), g);
  }
  function l(p, g, y, x) {
    var S = y.type;
    return S === Fo
      ? c(p, g, y.props.children, x, y.key)
      : g !== null &&
        (g.elementType === S ||
          (typeof S == 'object' &&
            S !== null &&
            S.$$typeof === Er &&
            ng(S) === g.type))
      ? ((x = o(g, y.props)), (x.ref = Ki(p, g, y)), (x.return = p), x)
      : ((x = gl(y.type, y.key, y.props, null, p.mode, x)),
        (x.ref = Ki(p, g, y)),
        (x.return = p),
        x);
  }
  function u(p, g, y, x) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== y.containerInfo ||
      g.stateNode.implementation !== y.implementation
      ? ((g = fd(y, p.mode, x)), (g.return = p), g)
      : ((g = o(g, y.children || [])), (g.return = p), g);
  }
  function c(p, g, y, x, S) {
    return g === null || g.tag !== 7
      ? ((g = uo(y, p.mode, x, S)), (g.return = p), g)
      : ((g = o(g, y)), (g.return = p), g);
  }
  function d(p, g, y) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (g = dd('' + g, p.mode, y)), (g.return = p), g;
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case ka:
          return (
            (y = gl(g.type, g.key, g.props, null, p.mode, y)),
            (y.ref = Ki(p, null, g)),
            (y.return = p),
            y
          );
        case No:
          return (g = fd(g, p.mode, y)), (g.return = p), g;
        case Er:
          var x = g._init;
          return d(p, x(g._payload), y);
      }
      if (ls(g) || Wi(g))
        return (g = uo(g, p.mode, y, null)), (g.return = p), g;
      Na(p, g);
    }
    return null;
  }
  function f(p, g, y, x) {
    var S = g !== null ? g.key : null;
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return S !== null ? null : a(p, g, '' + y, x);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case ka:
          return y.key === S ? l(p, g, y, x) : null;
        case No:
          return y.key === S ? u(p, g, y, x) : null;
        case Er:
          return (S = y._init), f(p, g, S(y._payload), x);
      }
      if (ls(y) || Wi(y)) return S !== null ? null : c(p, g, y, x, null);
      Na(p, y);
    }
    return null;
  }
  function v(p, g, y, x, S) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (p = p.get(y) || null), a(g, p, '' + x, S);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case ka:
          return (p = p.get(x.key === null ? y : x.key) || null), l(g, p, x, S);
        case No:
          return (p = p.get(x.key === null ? y : x.key) || null), u(g, p, x, S);
        case Er:
          var P = x._init;
          return v(p, g, y, P(x._payload), S);
      }
      if (ls(x) || Wi(x)) return (p = p.get(y) || null), c(g, p, x, S, null);
      Na(g, x);
    }
    return null;
  }
  function m(p, g, y, x) {
    for (
      var S = null, P = null, T = g, _ = (g = 0), I = null;
      T !== null && _ < y.length;
      _++
    ) {
      T.index > _ ? ((I = T), (T = null)) : (I = T.sibling);
      var k = f(p, T, y[_], x);
      if (k === null) {
        T === null && (T = I);
        break;
      }
      e && T && k.alternate === null && t(p, T),
        (g = i(k, g, _)),
        P === null ? (S = k) : (P.sibling = k),
        (P = k),
        (T = I);
    }
    if (_ === y.length) return n(p, T), Ke && Jr(p, _), S;
    if (T === null) {
      for (; _ < y.length; _++)
        (T = d(p, y[_], x)),
          T !== null &&
            ((g = i(T, g, _)), P === null ? (S = T) : (P.sibling = T), (P = T));
      return Ke && Jr(p, _), S;
    }
    for (T = r(p, T); _ < y.length; _++)
      (I = v(T, p, _, y[_], x)),
        I !== null &&
          (e && I.alternate !== null && T.delete(I.key === null ? _ : I.key),
          (g = i(I, g, _)),
          P === null ? (S = I) : (P.sibling = I),
          (P = I));
    return (
      e &&
        T.forEach(function (D) {
          return t(p, D);
        }),
      Ke && Jr(p, _),
      S
    );
  }
  function h(p, g, y, x) {
    var S = Wi(y);
    if (typeof S != 'function') throw Error(X(150));
    if (((y = S.call(y)), y == null)) throw Error(X(151));
    for (
      var P = (S = null), T = g, _ = (g = 0), I = null, k = y.next();
      T !== null && !k.done;
      _++, k = y.next()
    ) {
      T.index > _ ? ((I = T), (T = null)) : (I = T.sibling);
      var D = f(p, T, k.value, x);
      if (D === null) {
        T === null && (T = I);
        break;
      }
      e && T && D.alternate === null && t(p, T),
        (g = i(D, g, _)),
        P === null ? (S = D) : (P.sibling = D),
        (P = D),
        (T = I);
    }
    if (k.done) return n(p, T), Ke && Jr(p, _), S;
    if (T === null) {
      for (; !k.done; _++, k = y.next())
        (k = d(p, k.value, x)),
          k !== null &&
            ((g = i(k, g, _)), P === null ? (S = k) : (P.sibling = k), (P = k));
      return Ke && Jr(p, _), S;
    }
    for (T = r(p, T); !k.done; _++, k = y.next())
      (k = v(T, p, _, k.value, x)),
        k !== null &&
          (e && k.alternate !== null && T.delete(k.key === null ? _ : k.key),
          (g = i(k, g, _)),
          P === null ? (S = k) : (P.sibling = k),
          (P = k));
    return (
      e &&
        T.forEach(function ($) {
          return t(p, $);
        }),
      Ke && Jr(p, _),
      S
    );
  }
  function w(p, g, y, x) {
    if (
      (typeof y == 'object' &&
        y !== null &&
        y.type === Fo &&
        y.key === null &&
        (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case ka:
          e: {
            for (var S = y.key, P = g; P !== null; ) {
              if (P.key === S) {
                if (((S = y.type), S === Fo)) {
                  if (P.tag === 7) {
                    n(p, P.sibling),
                      (g = o(P, y.props.children)),
                      (g.return = p),
                      (p = g);
                    break e;
                  }
                } else if (
                  P.elementType === S ||
                  (typeof S == 'object' &&
                    S !== null &&
                    S.$$typeof === Er &&
                    ng(S) === P.type)
                ) {
                  n(p, P.sibling),
                    (g = o(P, y.props)),
                    (g.ref = Ki(p, P, y)),
                    (g.return = p),
                    (p = g);
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            y.type === Fo
              ? ((g = uo(y.props.children, p.mode, x, y.key)),
                (g.return = p),
                (p = g))
              : ((x = gl(y.type, y.key, y.props, null, p.mode, x)),
                (x.ref = Ki(p, g, y)),
                (x.return = p),
                (p = x));
          }
          return s(p);
        case No:
          e: {
            for (P = y.key; g !== null; ) {
              if (g.key === P)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === y.containerInfo &&
                  g.stateNode.implementation === y.implementation
                ) {
                  n(p, g.sibling),
                    (g = o(g, y.children || [])),
                    (g.return = p),
                    (p = g);
                  break e;
                } else {
                  n(p, g);
                  break;
                }
              else t(p, g);
              g = g.sibling;
            }
            (g = fd(y, p.mode, x)), (g.return = p), (p = g);
          }
          return s(p);
        case Er:
          return (P = y._init), w(p, g, P(y._payload), x);
      }
      if (ls(y)) return m(p, g, y, x);
      if (Wi(y)) return h(p, g, y, x);
      Na(p, y);
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        g !== null && g.tag === 6
          ? (n(p, g.sibling), (g = o(g, y)), (g.return = p), (p = g))
          : (n(p, g), (g = dd(y, p.mode, x)), (g.return = p), (p = g)),
        s(p))
      : n(p, g);
  }
  return w;
}
var pi = H0(!0),
  G0 = H0(!1),
  Ul = qr(null),
  Hl = null,
  Ko = null,
  Wp = null;
function Vp() {
  Wp = Ko = Hl = null;
}
function Up(e) {
  var t = Ul.current;
  He(Ul), (e._currentValue = t);
}
function bf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ri(e, t) {
  (Hl = e),
    (Wp = Ko = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (zt = !0), (e.firstContext = null));
}
function Sn(e) {
  var t = e._currentValue;
  if (Wp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ko === null)) {
      if (Hl === null) throw Error(X(308));
      (Ko = e), (Hl.dependencies = { lanes: 0, firstContext: e });
    } else Ko = Ko.next = e;
  return t;
}
var oo = null;
function Hp(e) {
  oo === null ? (oo = [e]) : oo.push(e);
}
function K0(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Hp(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    hr(e, r)
  );
}
function hr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Cr = !1;
function Gp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function q0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function fr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Nr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), _e & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      hr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Hp(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    hr(e, n)
  );
}
function cl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Mp(e, n);
  }
}
function rg(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Gl(e, t, n, r) {
  var o = e.updateQueue;
  Cr = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        v = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var m = e,
            h = a;
          switch (((f = t), (v = n), h.tag)) {
            case 1:
              if (((m = h.payload), typeof m == 'function')) {
                d = m.call(v, d, f);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = h.payload),
                (f = typeof m == 'function' ? m.call(v, d, f) : m),
                f == null)
              )
                break e;
              d = Qe({}, d, f);
              break e;
            case 2:
              Cr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (l = d)) : (c = c.next = v),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (go |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function og(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(X(191, o));
        o.call(r);
      }
    }
}
var aa = {},
  Qn = qr(aa),
  Fs = qr(aa),
  zs = qr(aa);
function io(e) {
  if (e === aa) throw Error(X(174));
  return e;
}
function Kp(e, t) {
  switch ((We(zs, t), We(Fs, e), We(Qn, aa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zd(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Zd(t, e));
  }
  He(Qn), We(Qn, t);
}
function mi() {
  He(Qn), He(Fs), He(zs);
}
function X0(e) {
  io(zs.current);
  var t = io(Qn.current),
    n = Zd(t, e.type);
  t !== n && (We(Fs, e), We(Qn, n));
}
function qp(e) {
  Fs.current === e && (He(Qn), He(Fs));
}
var Xe = qr(0);
function Kl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var id = [];
function Xp() {
  for (var e = 0; e < id.length; e++)
    id[e]._workInProgressVersionPrimary = null;
  id.length = 0;
}
var dl = yr.ReactCurrentDispatcher,
  sd = yr.ReactCurrentBatchConfig,
  ho = 0,
  Ye = null,
  dt = null,
  gt = null,
  ql = !1,
  vs = !1,
  Bs = 0,
  XE = 0;
function Tt() {
  throw Error(X(321));
}
function Yp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fn(e[n], t[n])) return !1;
  return !0;
}
function Qp(e, t, n, r, o, i) {
  if (
    ((ho = i),
    (Ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (dl.current = e === null || e.memoizedState === null ? ZE : eC),
    (e = n(r, o)),
    vs)
  ) {
    i = 0;
    do {
      if (((vs = !1), (Bs = 0), 25 <= i)) throw Error(X(301));
      (i += 1),
        (gt = dt = null),
        (t.updateQueue = null),
        (dl.current = tC),
        (e = n(r, o));
    } while (vs);
  }
  if (
    ((dl.current = Xl),
    (t = dt !== null && dt.next !== null),
    (ho = 0),
    (gt = dt = Ye = null),
    (ql = !1),
    t)
  )
    throw Error(X(300));
  return e;
}
function Jp() {
  var e = Bs !== 0;
  return (Bs = 0), e;
}
function Vn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return gt === null ? (Ye.memoizedState = gt = e) : (gt = gt.next = e), gt;
}
function En() {
  if (dt === null) {
    var e = Ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = dt.next;
  var t = gt === null ? Ye.memoizedState : gt.next;
  if (t !== null) (gt = t), (dt = e);
  else {
    if (e === null) throw Error(X(310));
    (dt = e),
      (e = {
        memoizedState: dt.memoizedState,
        baseState: dt.baseState,
        baseQueue: dt.baseQueue,
        queue: dt.queue,
        next: null,
      }),
      gt === null ? (Ye.memoizedState = gt = e) : (gt = gt.next = e);
  }
  return gt;
}
function Ws(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function ad(e) {
  var t = En(),
    n = t.queue;
  if (n === null) throw Error(X(311));
  n.lastRenderedReducer = e;
  var r = dt,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((ho & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (Ye.lanes |= c),
          (go |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      Fn(r, t.memoizedState) || (zt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ye.lanes |= i), (go |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ld(e) {
  var t = En(),
    n = t.queue;
  if (n === null) throw Error(X(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Fn(i, t.memoizedState) || (zt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Y0() {}
function Q0(e, t) {
  var n = Ye,
    r = En(),
    o = t(),
    i = !Fn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (zt = !0)),
    (r = r.queue),
    Zp(ex.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (gt !== null && gt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vs(9, Z0.bind(null, n, r, o, t), void 0, null),
      vt === null)
    )
      throw Error(X(349));
    ho & 30 || J0(n, t, o);
  }
  return o;
}
function J0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Z0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), tx(t) && nx(e);
}
function ex(e, t, n) {
  return n(function () {
    tx(t) && nx(e);
  });
}
function tx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fn(e, n);
  } catch {
    return !0;
  }
}
function nx(e) {
  var t = hr(e, 1);
  t !== null && Nn(t, e, 1, -1);
}
function ig(e) {
  var t = Vn();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ws,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = JE.bind(null, Ye, e)),
    [t.memoizedState, e]
  );
}
function Vs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function rx() {
  return En().memoizedState;
}
function fl(e, t, n, r) {
  var o = Vn();
  (Ye.flags |= e),
    (o.memoizedState = Vs(1 | t, n, void 0, r === void 0 ? null : r));
}
function _u(e, t, n, r) {
  var o = En();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (dt !== null) {
    var s = dt.memoizedState;
    if (((i = s.destroy), r !== null && Yp(r, s.deps))) {
      o.memoizedState = Vs(t, n, i, r);
      return;
    }
  }
  (Ye.flags |= e), (o.memoizedState = Vs(1 | t, n, i, r));
}
function sg(e, t) {
  return fl(8390656, 8, e, t);
}
function Zp(e, t) {
  return _u(2048, 8, e, t);
}
function ox(e, t) {
  return _u(4, 2, e, t);
}
function ix(e, t) {
  return _u(4, 4, e, t);
}
function sx(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ax(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), _u(4, 4, sx.bind(null, t, e), n)
  );
}
function em() {}
function lx(e, t) {
  var n = En();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yp(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ux(e, t) {
  var n = En();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yp(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function cx(e, t, n) {
  return ho & 21
    ? (Fn(n, t) || ((n = h0()), (Ye.lanes |= n), (go |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (zt = !0)), (e.memoizedState = n));
}
function YE(e, t) {
  var n = je;
  (je = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = sd.transition;
  sd.transition = {};
  try {
    e(!1), t();
  } finally {
    (je = n), (sd.transition = r);
  }
}
function dx() {
  return En().memoizedState;
}
function QE(e, t, n) {
  var r = zr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fx(e))
  )
    px(t, n);
  else if (((n = K0(e, t, n, r)), n !== null)) {
    var o = $t();
    Nn(n, e, r, o), mx(n, t, r);
  }
}
function JE(e, t, n) {
  var r = zr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fx(e)) px(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Fn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Hp(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = K0(e, t, o, r)),
      n !== null && ((o = $t()), Nn(n, e, r, o), mx(n, t, r));
  }
}
function fx(e) {
  var t = e.alternate;
  return e === Ye || (t !== null && t === Ye);
}
function px(e, t) {
  vs = ql = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function mx(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Mp(e, n);
  }
}
var Xl = {
    readContext: Sn,
    useCallback: Tt,
    useContext: Tt,
    useEffect: Tt,
    useImperativeHandle: Tt,
    useInsertionEffect: Tt,
    useLayoutEffect: Tt,
    useMemo: Tt,
    useReducer: Tt,
    useRef: Tt,
    useState: Tt,
    useDebugValue: Tt,
    useDeferredValue: Tt,
    useTransition: Tt,
    useMutableSource: Tt,
    useSyncExternalStore: Tt,
    useId: Tt,
    unstable_isNewReconciler: !1,
  },
  ZE = {
    readContext: Sn,
    useCallback: function (e, t) {
      return (Vn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Sn,
    useEffect: sg,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        fl(4194308, 4, sx.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return fl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return fl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Vn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Vn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = QE.bind(null, Ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Vn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ig,
    useDebugValue: em,
    useDeferredValue: function (e) {
      return (Vn().memoizedState = e);
    },
    useTransition: function () {
      var e = ig(!1),
        t = e[0];
      return (e = YE.bind(null, e[1])), (Vn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ye,
        o = Vn();
      if (Ke) {
        if (n === void 0) throw Error(X(407));
        n = n();
      } else {
        if (((n = t()), vt === null)) throw Error(X(349));
        ho & 30 || J0(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        sg(ex.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Vs(9, Z0.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Vn(),
        t = vt.identifierPrefix;
      if (Ke) {
        var n = cr,
          r = ur;
        (n = (r & ~(1 << (32 - Ln(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Bs++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = XE++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  eC = {
    readContext: Sn,
    useCallback: lx,
    useContext: Sn,
    useEffect: Zp,
    useImperativeHandle: ax,
    useInsertionEffect: ox,
    useLayoutEffect: ix,
    useMemo: ux,
    useReducer: ad,
    useRef: rx,
    useState: function () {
      return ad(Ws);
    },
    useDebugValue: em,
    useDeferredValue: function (e) {
      var t = En();
      return cx(t, dt.memoizedState, e);
    },
    useTransition: function () {
      var e = ad(Ws)[0],
        t = En().memoizedState;
      return [e, t];
    },
    useMutableSource: Y0,
    useSyncExternalStore: Q0,
    useId: dx,
    unstable_isNewReconciler: !1,
  },
  tC = {
    readContext: Sn,
    useCallback: lx,
    useContext: Sn,
    useEffect: Zp,
    useImperativeHandle: ax,
    useInsertionEffect: ox,
    useLayoutEffect: ix,
    useMemo: ux,
    useReducer: ld,
    useRef: rx,
    useState: function () {
      return ld(Ws);
    },
    useDebugValue: em,
    useDeferredValue: function (e) {
      var t = En();
      return dt === null ? (t.memoizedState = e) : cx(t, dt.memoizedState, e);
    },
    useTransition: function () {
      var e = ld(Ws)[0],
        t = En().memoizedState;
      return [e, t];
    },
    useMutableSource: Y0,
    useSyncExternalStore: Q0,
    useId: dx,
    unstable_isNewReconciler: !1,
  };
function An(e, t) {
  if (e && e.defaultProps) {
    (t = Qe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Qe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Mu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Co(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = $t(),
      o = zr(e),
      i = fr(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Nr(e, i, o)),
      t !== null && (Nn(t, e, o, r), cl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = $t(),
      o = zr(e),
      i = fr(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Nr(e, i, o)),
      t !== null && (Nn(t, e, o, r), cl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = $t(),
      r = zr(e),
      o = fr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Nr(e, o, r)),
      t !== null && (Nn(t, e, r, n), cl(t, e, r));
  },
};
function ag(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !js(n, r) || !js(o, i)
      : !0
  );
}
function hx(e, t, n) {
  var r = !1,
    o = Ur,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Sn(i))
      : ((o = Vt(t) ? po : _t.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? di(e, o) : Ur)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Mu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function lg(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Mu.enqueueReplaceState(t, t.state, null);
}
function Sf(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Gp(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = Sn(i))
    : ((i = Vt(t) ? po : _t.current), (o.context = di(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (wf(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Mu.enqueueReplaceState(o, o.state, null),
      Gl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function hi(e, t) {
  try {
    var n = '',
      r = t;
    do (n += OS(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ud(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ef(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var nC = typeof WeakMap == 'function' ? WeakMap : Map;
function gx(e, t, n) {
  (n = fr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ql || ((Ql = !0), (If = r)), Ef(e, t);
    }),
    n
  );
}
function vx(e, t, n) {
  (n = fr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ef(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ef(e, t),
          typeof r != 'function' &&
            (Fr === null ? (Fr = new Set([this])) : Fr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        });
      }),
    n
  );
}
function ug(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new nC();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = gC.bind(null, e, t, n)), t.then(e, e));
}
function cg(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function dg(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = fr(-1, 1)), (t.tag = 2), Nr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var rC = yr.ReactCurrentOwner,
  zt = !1;
function At(e, t, n, r) {
  t.child = e === null ? G0(t, null, n, r) : pi(t, e.child, n, r);
}
function fg(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    ri(t, o),
    (r = Qp(e, t, n, r, i, o)),
    (n = Jp()),
    e !== null && !zt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        gr(e, t, o))
      : (Ke && n && Fp(t), (t.flags |= 1), At(e, t, r, o), t.child)
  );
}
function pg(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !lm(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), yx(e, t, i, r, o))
      : ((e = gl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : js), n(s, r) && e.ref === t.ref)
    )
      return gr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Br(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function yx(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (js(i, r) && e.ref === t.ref)
      if (((zt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (zt = !0);
      else return (t.lanes = e.lanes), gr(e, t, o);
  }
  return Cf(e, t, n, r, o);
}
function xx(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        We(Xo, Yt),
        (Yt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          We(Xo, Yt),
          (Yt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        We(Xo, Yt),
        (Yt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      We(Xo, Yt),
      (Yt |= r);
  return At(e, t, o, n), t.child;
}
function bx(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Cf(e, t, n, r, o) {
  var i = Vt(n) ? po : _t.current;
  return (
    (i = di(t, i)),
    ri(t, o),
    (n = Qp(e, t, n, r, i, o)),
    (r = Jp()),
    e !== null && !zt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        gr(e, t, o))
      : (Ke && r && Fp(t), (t.flags |= 1), At(e, t, n, o), t.child)
  );
}
function mg(e, t, n, r, o) {
  if (Vt(n)) {
    var i = !0;
    Bl(t);
  } else i = !1;
  if ((ri(t, o), t.stateNode === null))
    pl(e, t), hx(t, n, r), Sf(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Sn(u))
      : ((u = Vt(n) ? po : _t.current), (u = di(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && lg(t, s, r, u)),
      (Cr = !1);
    var f = t.memoizedState;
    (s.state = f),
      Gl(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || Wt.current || Cr
        ? (typeof c == 'function' && (wf(t, n, c, r), (l = t.memoizedState)),
          (a = Cr || ag(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      q0(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : An(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Sn(l))
        : ((l = Vt(n) ? po : _t.current), (l = di(t, l)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== d || f !== l) && lg(t, s, r, l)),
      (Cr = !1),
      (f = t.memoizedState),
      (s.state = f),
      Gl(t, r, s, o);
    var m = t.memoizedState;
    a !== d || f !== m || Wt.current || Cr
      ? (typeof v == 'function' && (wf(t, n, v, r), (m = t.memoizedState)),
        (u = Cr || ag(t, n, u, r, f, m, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, m, l),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, m, l)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (s.props = r),
        (s.state = m),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pf(e, t, n, r, i, o);
}
function Pf(e, t, n, r, o, i) {
  bx(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Zh(t, n, !1), gr(e, t, i);
  (r = t.stateNode), (rC.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = pi(t, e.child, null, i)), (t.child = pi(t, null, a, i)))
      : At(e, t, a, i),
    (t.memoizedState = r.state),
    o && Zh(t, n, !0),
    t.child
  );
}
function wx(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Jh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Jh(e, t.context, !1),
    Kp(e, t.containerInfo);
}
function hg(e, t, n, r, o) {
  return fi(), Bp(o), (t.flags |= 256), At(e, t, n, r), t.child;
}
var Tf = { dehydrated: null, treeContext: null, retryLane: 0 };
function kf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sx(e, t, n) {
  var r = t.pendingProps,
    o = Xe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    We(Xe, o & 1),
    e === null)
  )
    return (
      xf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = $u(s, r, 0, null)),
              (e = uo(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = kf(n)),
              (t.memoizedState = Tf),
              e)
            : tm(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return oC(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Br(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Br(a, i)) : ((i = uo(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? kf(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Tf),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Br(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function tm(e, t) {
  return (
    (t = $u({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Fa(e, t, n, r) {
  return (
    r !== null && Bp(r),
    pi(t, e.child, null, n),
    (e = tm(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function oC(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ud(Error(X(422)))), Fa(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = $u({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = uo(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && pi(t, e.child, null, s),
        (t.child.memoizedState = kf(s)),
        (t.memoizedState = Tf),
        i);
  if (!(t.mode & 1)) return Fa(e, t, s, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(X(419))), (r = ud(i, r, void 0)), Fa(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), zt || a)) {
    if (((r = vt), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), hr(e, o), Nn(r, e, o, -1));
    }
    return am(), (r = ud(Error(X(421)))), Fa(e, t, s, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vC.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Zt = Lr(o.nextSibling)),
      (en = t),
      (Ke = !0),
      ($n = null),
      e !== null &&
        ((pn[mn++] = ur),
        (pn[mn++] = cr),
        (pn[mn++] = mo),
        (ur = e.id),
        (cr = e.overflow),
        (mo = t)),
      (t = tm(t, r.children)),
      (t.flags |= 4096),
      t);
}
function gg(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), bf(e.return, t, n);
}
function cd(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Ex(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((At(e, t, r.children, n), (r = Xe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gg(e, n, t);
        else if (e.tag === 19) gg(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((We(Xe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Kl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          cd(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Kl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        cd(t, !0, n, null, i);
        break;
      case 'together':
        cd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function pl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function gr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (go |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(X(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Br(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Br(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function iC(e, t, n) {
  switch (t.tag) {
    case 3:
      wx(t), fi();
      break;
    case 5:
      X0(t);
      break;
    case 1:
      Vt(t.type) && Bl(t);
      break;
    case 4:
      Kp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      We(Ul, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (We(Xe, Xe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Sx(e, t, n)
          : (We(Xe, Xe.current & 1),
            (e = gr(e, t, n)),
            e !== null ? e.sibling : null);
      We(Xe, Xe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ex(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        We(Xe, Xe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), xx(e, t, n);
  }
  return gr(e, t, n);
}
var Cx, Rf, Px, Tx;
Cx = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Rf = function () {};
Px = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), io(Qn.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = Xd(e, o)), (r = Xd(e, r)), (i = []);
        break;
      case 'select':
        (o = Qe({}, o, { value: void 0 })),
          (r = Qe({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = Jd(e, o)), (r = Jd(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Fl);
    }
    ef(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Rs.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') ||
              (i = i || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Rs.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && Ue('scroll', e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Tx = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qi(e, t) {
  if (!Ke)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function kt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function sC(e, t, n) {
  var r = t.pendingProps;
  switch ((zp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return kt(t), null;
    case 1:
      return Vt(t.type) && zl(), kt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mi(),
        He(Wt),
        He(_t),
        Xp(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (La(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $n !== null && (Df($n), ($n = null)))),
        Rf(e, t),
        kt(t),
        null
      );
    case 5:
      qp(t);
      var o = io(zs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Px(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(X(166));
          return kt(t), null;
        }
        if (((e = io(Qn.current)), La(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Gn] = t), (r[Ns] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Ue('cancel', r), Ue('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Ue('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < cs.length; o++) Ue(cs[o], r);
              break;
            case 'source':
              Ue('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Ue('error', r), Ue('load', r);
              break;
            case 'details':
              Ue('toggle', r);
              break;
            case 'input':
              Ph(r, i), Ue('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Ue('invalid', r);
              break;
            case 'textarea':
              kh(r, i), Ue('invalid', r);
          }
          ef(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Da(r.textContent, a, e),
                    (o = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Da(r.textContent, a, e),
                    (o = ['children', '' + a]))
                : Rs.hasOwnProperty(s) &&
                  a != null &&
                  s === 'onScroll' &&
                  Ue('scroll', r);
            }
          switch (n) {
            case 'input':
              Ra(r), Th(r, i, !0);
              break;
            case 'textarea':
              Ra(r), Rh(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Fl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = e0(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === 'select' &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Gn] = t),
            (e[Ns] = r),
            Cx(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = tf(n, r)), n)) {
              case 'dialog':
                Ue('cancel', e), Ue('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Ue('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < cs.length; o++) Ue(cs[o], e);
                o = r;
                break;
              case 'source':
                Ue('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Ue('error', e), Ue('load', e), (o = r);
                break;
              case 'details':
                Ue('toggle', e), (o = r);
                break;
              case 'input':
                Ph(e, r), (o = Xd(e, r)), Ue('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Qe({}, r, { value: void 0 })),
                  Ue('invalid', e);
                break;
              case 'textarea':
                kh(e, r), (o = Jd(e, r)), Ue('invalid', e);
                break;
              default:
                o = r;
            }
            ef(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === 'style'
                  ? r0(e, l)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && t0(e, l))
                  : i === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && Os(e, l)
                    : typeof l == 'number' && Os(e, '' + l)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Rs.hasOwnProperty(i)
                      ? l != null && i === 'onScroll' && Ue('scroll', e)
                      : l != null && Pp(e, i, l, s));
              }
            switch (n) {
              case 'input':
                Ra(e), Th(e, r, !1);
                break;
              case 'textarea':
                Ra(e), Rh(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Vr(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Zo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Zo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = Fl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return kt(t), null;
    case 6:
      if (e && t.stateNode != null) Tx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(X(166));
        if (((n = io(zs.current)), io(Qn.current), La(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Gn] = t),
            (i = r.nodeValue !== n) && ((e = en), e !== null))
          )
            switch (e.tag) {
              case 3:
                Da(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Da(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Gn] = t),
            (t.stateNode = r);
      }
      return kt(t), null;
    case 13:
      if (
        (He(Xe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ke && Zt !== null && t.mode & 1 && !(t.flags & 128))
          U0(), fi(), (t.flags |= 98560), (i = !1);
        else if (((i = La(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(X(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(X(317));
            i[Gn] = t;
          } else
            fi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          kt(t), (i = !1);
        } else $n !== null && (Df($n), ($n = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Xe.current & 1 ? ft === 0 && (ft = 3) : am())),
          t.updateQueue !== null && (t.flags |= 4),
          kt(t),
          null);
    case 4:
      return (
        mi(), Rf(e, t), e === null && Ds(t.stateNode.containerInfo), kt(t), null
      );
    case 10:
      return Up(t.type._context), kt(t), null;
    case 17:
      return Vt(t.type) && zl(), kt(t), null;
    case 19:
      if ((He(Xe), (i = t.memoizedState), i === null)) return kt(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) qi(i, !1);
        else {
          if (ft !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Kl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    qi(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return We(Xe, (Xe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            rt() > gi &&
            ((t.flags |= 128), (r = !0), qi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Kl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              qi(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !Ke)
            )
              return kt(t), null;
          } else
            2 * rt() - i.renderingStartTime > gi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), qi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = rt()),
          (t.sibling = null),
          (n = Xe.current),
          We(Xe, r ? (n & 1) | 2 : n & 1),
          t)
        : (kt(t), null);
    case 22:
    case 23:
      return (
        sm(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Yt & 1073741824 && (kt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : kt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(X(156, t.tag));
}
function aC(e, t) {
  switch ((zp(t), t.tag)) {
    case 1:
      return (
        Vt(t.type) && zl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mi(),
        He(Wt),
        He(_t),
        Xp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return qp(t), null;
    case 13:
      if (
        (He(Xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(X(340));
        fi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return He(Xe), null;
    case 4:
      return mi(), null;
    case 10:
      return Up(t.type._context), null;
    case 22:
    case 23:
      return sm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var za = !1,
  Ot = !1,
  lC = typeof WeakSet == 'function' ? WeakSet : Set,
  Z = null;
function qo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        tt(e, t, r);
      }
    else n.current = null;
}
function Of(e, t, n) {
  try {
    n();
  } catch (r) {
    tt(e, t, r);
  }
}
var vg = !1;
function uC(e, t) {
  if (((ff = Dl), (e = M0()), Np(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (f = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (a = s),
                f === i && ++c === r && (l = s),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = v;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (pf = { focusedElem: e, selectionRange: n }, Dl = !1, Z = t; Z !== null; )
    if (((t = Z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Z = e);
    else
      for (; Z !== null; ) {
        t = Z;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var h = m.memoizedProps,
                    w = m.memoizedState,
                    p = t.stateNode,
                    g = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? h : An(t.type, h),
                      w
                    );
                  p.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(X(163));
            }
        } catch (x) {
          tt(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Z = e);
          break;
        }
        Z = t.return;
      }
  return (m = vg), (vg = !1), m;
}
function ys(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Of(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Au(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function _f(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function kx(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), kx(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Gn], delete t[Ns], delete t[gf], delete t[HE], delete t[GE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Rx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yg(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rx(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Mf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Fl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mf(e, t, n), e = e.sibling; e !== null; ) Mf(e, t, n), (e = e.sibling);
}
function Af(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Af(e, t, n), e = e.sibling; e !== null; ) Af(e, t, n), (e = e.sibling);
}
var wt = null,
  In = !1;
function xr(e, t, n) {
  for (n = n.child; n !== null; ) Ox(e, t, n), (n = n.sibling);
}
function Ox(e, t, n) {
  if (Yn && typeof Yn.onCommitFiberUnmount == 'function')
    try {
      Yn.onCommitFiberUnmount(Cu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ot || qo(n, t);
    case 6:
      var r = wt,
        o = In;
      (wt = null),
        xr(e, t, n),
        (wt = r),
        (In = o),
        wt !== null &&
          (In
            ? ((e = wt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : wt.removeChild(n.stateNode));
      break;
    case 18:
      wt !== null &&
        (In
          ? ((e = wt),
            (n = n.stateNode),
            e.nodeType === 8
              ? rd(e.parentNode, n)
              : e.nodeType === 1 && rd(e, n),
            Is(e))
          : rd(wt, n.stateNode));
      break;
    case 4:
      (r = wt),
        (o = In),
        (wt = n.stateNode.containerInfo),
        (In = !0),
        xr(e, t, n),
        (wt = r),
        (In = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ot &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Of(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      xr(e, t, n);
      break;
    case 1:
      if (
        !Ot &&
        (qo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          tt(n, t, a);
        }
      xr(e, t, n);
      break;
    case 21:
      xr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ot = (r = Ot) || n.memoizedState !== null), xr(e, t, n), (Ot = r))
        : xr(e, t, n);
      break;
    default:
      xr(e, t, n);
  }
}
function xg(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lC()),
      t.forEach(function (r) {
        var o = yC.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Mn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (wt = a.stateNode), (In = !1);
              break e;
            case 3:
              (wt = a.stateNode.containerInfo), (In = !0);
              break e;
            case 4:
              (wt = a.stateNode.containerInfo), (In = !0);
              break e;
          }
          a = a.return;
        }
        if (wt === null) throw Error(X(160));
        Ox(i, s, o), (wt = null), (In = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        tt(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _x(t, e), (t = t.sibling);
}
function _x(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Mn(t, e), Bn(e), r & 4)) {
        try {
          ys(3, e, e.return), Au(3, e);
        } catch (h) {
          tt(e, e.return, h);
        }
        try {
          ys(5, e, e.return);
        } catch (h) {
          tt(e, e.return, h);
        }
      }
      break;
    case 1:
      Mn(t, e), Bn(e), r & 512 && n !== null && qo(n, n.return);
      break;
    case 5:
      if (
        (Mn(t, e),
        Bn(e),
        r & 512 && n !== null && qo(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Os(o, '');
        } catch (h) {
          tt(e, e.return, h);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && Jy(o, i),
              tf(a, s);
            var u = tf(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === 'style'
                ? r0(o, d)
                : c === 'dangerouslySetInnerHTML'
                ? t0(o, d)
                : c === 'children'
                ? Os(o, d)
                : Pp(o, c, d, u);
            }
            switch (a) {
              case 'input':
                Yd(o, i);
                break;
              case 'textarea':
                Zy(o, i);
                break;
              case 'select':
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? Zo(o, !!i.multiple, v, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Zo(o, !!i.multiple, i.defaultValue, !0)
                      : Zo(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Ns] = i;
          } catch (h) {
            tt(e, e.return, h);
          }
      }
      break;
    case 6:
      if ((Mn(t, e), Bn(e), r & 4)) {
        if (e.stateNode === null) throw Error(X(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (h) {
          tt(e, e.return, h);
        }
      }
      break;
    case 3:
      if (
        (Mn(t, e), Bn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Is(t.containerInfo);
        } catch (h) {
          tt(e, e.return, h);
        }
      break;
    case 4:
      Mn(t, e), Bn(e);
      break;
    case 13:
      Mn(t, e),
        Bn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (om = rt())),
        r & 4 && xg(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ot = (u = Ot) || c), Mn(t, e), (Ot = u)) : Mn(t, e),
        Bn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (Z = e, c = e.child; c !== null; ) {
            for (d = Z = c; Z !== null; ) {
              switch (((f = Z), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ys(4, f, f.return);
                  break;
                case 1:
                  qo(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (h) {
                      tt(r, n, h);
                    }
                  }
                  break;
                case 5:
                  qo(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    wg(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (Z = v)) : wg(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (a.style.display = n0('display', s)));
              } catch (h) {
                tt(e, e.return, h);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps;
              } catch (h) {
                tt(e, e.return, h);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Mn(t, e), Bn(e), r & 4 && xg(e);
      break;
    case 21:
      break;
    default:
      Mn(t, e), Bn(e);
  }
}
function Bn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rx(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(X(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Os(o, ''), (r.flags &= -33));
          var i = yg(e);
          Af(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = yg(e);
          Mf(e, a, s);
          break;
        default:
          throw Error(X(161));
      }
    } catch (l) {
      tt(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cC(e, t, n) {
  (Z = e), Mx(e);
}
function Mx(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Z !== null; ) {
    var o = Z,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || za;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Ot;
        a = za;
        var u = Ot;
        if (((za = s), (Ot = l) && !u))
          for (Z = o; Z !== null; )
            (s = Z),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Sg(o)
                : l !== null
                ? ((l.return = s), (Z = l))
                : Sg(o);
        for (; i !== null; ) (Z = i), Mx(i), (i = i.sibling);
        (Z = o), (za = a), (Ot = u);
      }
      bg(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (Z = i)) : bg(e);
  }
}
function bg(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ot || Au(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ot)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : An(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && og(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                og(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Is(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(X(163));
          }
        Ot || (t.flags & 512 && _f(t));
      } catch (f) {
        tt(t, t.return, f);
      }
    }
    if (t === e) {
      Z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Z = n);
      break;
    }
    Z = t.return;
  }
}
function wg(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t === e) {
      Z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Z = n);
      break;
    }
    Z = t.return;
  }
}
function Sg(e) {
  for (; Z !== null; ) {
    var t = Z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Au(4, t);
          } catch (l) {
            tt(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              tt(t, o, l);
            }
          }
          var i = t.return;
          try {
            _f(t);
          } catch (l) {
            tt(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            _f(t);
          } catch (l) {
            tt(t, s, l);
          }
      }
    } catch (l) {
      tt(t, t.return, l);
    }
    if (t === e) {
      Z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (Z = a);
      break;
    }
    Z = t.return;
  }
}
var dC = Math.ceil,
  Yl = yr.ReactCurrentDispatcher,
  nm = yr.ReactCurrentOwner,
  yn = yr.ReactCurrentBatchConfig,
  _e = 0,
  vt = null,
  at = null,
  Ct = 0,
  Yt = 0,
  Xo = qr(0),
  ft = 0,
  Us = null,
  go = 0,
  Iu = 0,
  rm = 0,
  xs = null,
  Ft = null,
  om = 0,
  gi = 1 / 0,
  sr = null,
  Ql = !1,
  If = null,
  Fr = null,
  Ba = !1,
  Rr = null,
  Jl = 0,
  bs = 0,
  $f = null,
  ml = -1,
  hl = 0;
function $t() {
  return _e & 6 ? rt() : ml !== -1 ? ml : (ml = rt());
}
function zr(e) {
  return e.mode & 1
    ? _e & 2 && Ct !== 0
      ? Ct & -Ct
      : qE.transition !== null
      ? (hl === 0 && (hl = h0()), hl)
      : ((e = je),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : S0(e.type))),
        e)
    : 1;
}
function Nn(e, t, n, r) {
  if (50 < bs) throw ((bs = 0), ($f = null), Error(X(185)));
  oa(e, n, r),
    (!(_e & 2) || e !== vt) &&
      (e === vt && (!(_e & 2) && (Iu |= n), ft === 4 && Tr(e, Ct)),
      Ut(e, r),
      n === 1 && _e === 0 && !(t.mode & 1) && ((gi = rt() + 500), Ou && Xr()));
}
function Ut(e, t) {
  var n = e.callbackNode;
  qS(e, t);
  var r = jl(e, e === vt ? Ct : 0);
  if (r === 0)
    n !== null && Mh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Mh(n), t === 1))
      e.tag === 0 ? KE(Eg.bind(null, e)) : B0(Eg.bind(null, e)),
        VE(function () {
          !(_e & 6) && Xr();
        }),
        (n = null);
    else {
      switch (g0(r)) {
        case 1:
          n = _p;
          break;
        case 4:
          n = p0;
          break;
        case 16:
          n = $l;
          break;
        case 536870912:
          n = m0;
          break;
        default:
          n = $l;
      }
      n = Fx(n, Ax.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ax(e, t) {
  if (((ml = -1), (hl = 0), _e & 6)) throw Error(X(327));
  var n = e.callbackNode;
  if (oi() && e.callbackNode !== n) return null;
  var r = jl(e, e === vt ? Ct : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zl(e, r);
  else {
    t = r;
    var o = _e;
    _e |= 2;
    var i = $x();
    (vt !== e || Ct !== t) && ((sr = null), (gi = rt() + 500), lo(e, t));
    do
      try {
        mC();
        break;
      } catch (a) {
        Ix(e, a);
      }
    while (!0);
    Vp(),
      (Yl.current = i),
      (_e = o),
      at !== null ? (t = 0) : ((vt = null), (Ct = 0), (t = ft));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = af(e)), o !== 0 && ((r = o), (t = jf(e, o)))), t === 1)
    )
      throw ((n = Us), lo(e, 0), Tr(e, r), Ut(e, rt()), n);
    if (t === 6) Tr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !fC(o) &&
          ((t = Zl(e, r)),
          t === 2 && ((i = af(e)), i !== 0 && ((r = i), (t = jf(e, i)))),
          t === 1))
      )
        throw ((n = Us), lo(e, 0), Tr(e, r), Ut(e, rt()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(X(345));
        case 2:
          Zr(e, Ft, sr);
          break;
        case 3:
          if (
            (Tr(e, r), (r & 130023424) === r && ((t = om + 500 - rt()), 10 < t))
          ) {
            if (jl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              $t(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = hf(Zr.bind(null, e, Ft, sr), t);
            break;
          }
          Zr(e, Ft, sr);
          break;
        case 4:
          if ((Tr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Ln(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = rt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * dC(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = hf(Zr.bind(null, e, Ft, sr), r);
            break;
          }
          Zr(e, Ft, sr);
          break;
        case 5:
          Zr(e, Ft, sr);
          break;
        default:
          throw Error(X(329));
      }
    }
  }
  return Ut(e, rt()), e.callbackNode === n ? Ax.bind(null, e) : null;
}
function jf(e, t) {
  var n = xs;
  return (
    e.current.memoizedState.isDehydrated && (lo(e, t).flags |= 256),
    (e = Zl(e, t)),
    e !== 2 && ((t = Ft), (Ft = n), t !== null && Df(t)),
    e
  );
}
function Df(e) {
  Ft === null ? (Ft = e) : Ft.push.apply(Ft, e);
}
function fC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Fn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Tr(e, t) {
  for (
    t &= ~rm,
      t &= ~Iu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ln(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Eg(e) {
  if (_e & 6) throw Error(X(327));
  oi();
  var t = jl(e, 0);
  if (!(t & 1)) return Ut(e, rt()), null;
  var n = Zl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = af(e);
    r !== 0 && ((t = r), (n = jf(e, r)));
  }
  if (n === 1) throw ((n = Us), lo(e, 0), Tr(e, t), Ut(e, rt()), n);
  if (n === 6) throw Error(X(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Zr(e, Ft, sr),
    Ut(e, rt()),
    null
  );
}
function im(e, t) {
  var n = _e;
  _e |= 1;
  try {
    return e(t);
  } finally {
    (_e = n), _e === 0 && ((gi = rt() + 500), Ou && Xr());
  }
}
function vo(e) {
  Rr !== null && Rr.tag === 0 && !(_e & 6) && oi();
  var t = _e;
  _e |= 1;
  var n = yn.transition,
    r = je;
  try {
    if (((yn.transition = null), (je = 1), e)) return e();
  } finally {
    (je = r), (yn.transition = n), (_e = t), !(_e & 6) && Xr();
  }
}
function sm() {
  (Yt = Xo.current), He(Xo);
}
function lo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), WE(n)), at !== null))
    for (n = at.return; n !== null; ) {
      var r = n;
      switch ((zp(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && zl();
          break;
        case 3:
          mi(), He(Wt), He(_t), Xp();
          break;
        case 5:
          qp(r);
          break;
        case 4:
          mi();
          break;
        case 13:
          He(Xe);
          break;
        case 19:
          He(Xe);
          break;
        case 10:
          Up(r.type._context);
          break;
        case 22:
        case 23:
          sm();
      }
      n = n.return;
    }
  if (
    ((vt = e),
    (at = e = Br(e.current, null)),
    (Ct = Yt = t),
    (ft = 0),
    (Us = null),
    (rm = Iu = go = 0),
    (Ft = xs = null),
    oo !== null)
  ) {
    for (t = 0; t < oo.length; t++)
      if (((n = oo[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    oo = null;
  }
  return e;
}
function Ix(e, t) {
  do {
    var n = at;
    try {
      if ((Vp(), (dl.current = Xl), ql)) {
        for (var r = Ye.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ql = !1;
      }
      if (
        ((ho = 0),
        (gt = dt = Ye = null),
        (vs = !1),
        (Bs = 0),
        (nm.current = null),
        n === null || n.return === null)
      ) {
        (ft = 1), (Us = t), (at = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Ct),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = cg(s);
          if (v !== null) {
            (v.flags &= -257),
              dg(v, s, a, i, t),
              v.mode & 1 && ug(i, u, t),
              (t = v),
              (l = u);
            var m = t.updateQueue;
            if (m === null) {
              var h = new Set();
              h.add(l), (t.updateQueue = h);
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              ug(i, u, t), am();
              break e;
            }
            l = Error(X(426));
          }
        } else if (Ke && a.mode & 1) {
          var w = cg(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              dg(w, s, a, i, t),
              Bp(hi(l, a));
            break e;
          }
        }
        (i = l = hi(l, a)),
          ft !== 4 && (ft = 2),
          xs === null ? (xs = [i]) : xs.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = gx(i, l, t);
              rg(i, p);
              break e;
            case 1:
              a = l;
              var g = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof g.getDerivedStateFromError == 'function' ||
                  (y !== null &&
                    typeof y.componentDidCatch == 'function' &&
                    (Fr === null || !Fr.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = vx(i, a, t);
                rg(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Dx(n);
    } catch (S) {
      (t = S), at === n && n !== null && (at = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function $x() {
  var e = Yl.current;
  return (Yl.current = Xl), e === null ? Xl : e;
}
function am() {
  (ft === 0 || ft === 3 || ft === 2) && (ft = 4),
    vt === null || (!(go & 268435455) && !(Iu & 268435455)) || Tr(vt, Ct);
}
function Zl(e, t) {
  var n = _e;
  _e |= 2;
  var r = $x();
  (vt !== e || Ct !== t) && ((sr = null), lo(e, t));
  do
    try {
      pC();
      break;
    } catch (o) {
      Ix(e, o);
    }
  while (!0);
  if ((Vp(), (_e = n), (Yl.current = r), at !== null)) throw Error(X(261));
  return (vt = null), (Ct = 0), ft;
}
function pC() {
  for (; at !== null; ) jx(at);
}
function mC() {
  for (; at !== null && !FS(); ) jx(at);
}
function jx(e) {
  var t = Nx(e.alternate, e, Yt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Dx(e) : (at = t),
    (nm.current = null);
}
function Dx(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = aC(n, t)), n !== null)) {
        (n.flags &= 32767), (at = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ft = 6), (at = null);
        return;
      }
    } else if (((n = sC(n, t, Yt)), n !== null)) {
      at = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      at = t;
      return;
    }
    at = t = e;
  } while (t !== null);
  ft === 0 && (ft = 5);
}
function Zr(e, t, n) {
  var r = je,
    o = yn.transition;
  try {
    (yn.transition = null), (je = 1), hC(e, t, n, r);
  } finally {
    (yn.transition = o), (je = r);
  }
  return null;
}
function hC(e, t, n, r) {
  do oi();
  while (Rr !== null);
  if (_e & 6) throw Error(X(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(X(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (XS(e, i),
    e === vt && ((at = vt = null), (Ct = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ba ||
      ((Ba = !0),
      Fx($l, function () {
        return oi(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = yn.transition), (yn.transition = null);
    var s = je;
    je = 1;
    var a = _e;
    (_e |= 4),
      (nm.current = null),
      uC(e, n),
      _x(n, e),
      jE(pf),
      (Dl = !!ff),
      (pf = ff = null),
      (e.current = n),
      cC(n),
      zS(),
      (_e = a),
      (je = s),
      (yn.transition = i);
  } else e.current = n;
  if (
    (Ba && ((Ba = !1), (Rr = e), (Jl = o)),
    (i = e.pendingLanes),
    i === 0 && (Fr = null),
    VS(n.stateNode),
    Ut(e, rt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ql) throw ((Ql = !1), (e = If), (If = null), e);
  return (
    Jl & 1 && e.tag !== 0 && oi(),
    (i = e.pendingLanes),
    i & 1 ? (e === $f ? bs++ : ((bs = 0), ($f = e))) : (bs = 0),
    Xr(),
    null
  );
}
function oi() {
  if (Rr !== null) {
    var e = g0(Jl),
      t = yn.transition,
      n = je;
    try {
      if (((yn.transition = null), (je = 16 > e ? 16 : e), Rr === null))
        var r = !1;
      else {
        if (((e = Rr), (Rr = null), (Jl = 0), _e & 6)) throw Error(X(331));
        var o = _e;
        for (_e |= 4, Z = e.current; Z !== null; ) {
          var i = Z,
            s = i.child;
          if (Z.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (Z = u; Z !== null; ) {
                  var c = Z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ys(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (Z = d);
                  else
                    for (; Z !== null; ) {
                      c = Z;
                      var f = c.sibling,
                        v = c.return;
                      if ((kx(c), c === u)) {
                        Z = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), (Z = f);
                        break;
                      }
                      Z = v;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var h = m.child;
                if (h !== null) {
                  m.child = null;
                  do {
                    var w = h.sibling;
                    (h.sibling = null), (h = w);
                  } while (h !== null);
                }
              }
              Z = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (Z = s);
          else
            e: for (; Z !== null; ) {
              if (((i = Z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ys(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (Z = p);
                break e;
              }
              Z = i.return;
            }
        }
        var g = e.current;
        for (Z = g; Z !== null; ) {
          s = Z;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (Z = y);
          else
            e: for (s = g; Z !== null; ) {
              if (((a = Z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Au(9, a);
                  }
                } catch (S) {
                  tt(a, a.return, S);
                }
              if (a === s) {
                Z = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                (x.return = a.return), (Z = x);
                break e;
              }
              Z = a.return;
            }
        }
        if (
          ((_e = o), Xr(), Yn && typeof Yn.onPostCommitFiberRoot == 'function')
        )
          try {
            Yn.onPostCommitFiberRoot(Cu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (je = n), (yn.transition = t);
    }
  }
  return !1;
}
function Cg(e, t, n) {
  (t = hi(n, t)),
    (t = gx(e, t, 1)),
    (e = Nr(e, t, 1)),
    (t = $t()),
    e !== null && (oa(e, 1, t), Ut(e, t));
}
function tt(e, t, n) {
  if (e.tag === 3) Cg(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Cg(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Fr === null || !Fr.has(r)))
        ) {
          (e = hi(n, e)),
            (e = vx(t, e, 1)),
            (t = Nr(t, e, 1)),
            (e = $t()),
            t !== null && (oa(t, 1, e), Ut(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function gC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = $t()),
    (e.pingedLanes |= e.suspendedLanes & n),
    vt === e &&
      (Ct & n) === n &&
      (ft === 4 || (ft === 3 && (Ct & 130023424) === Ct && 500 > rt() - om)
        ? lo(e, 0)
        : (rm |= n)),
    Ut(e, t);
}
function Lx(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ma), (Ma <<= 1), !(Ma & 130023424) && (Ma = 4194304))
      : (t = 1));
  var n = $t();
  (e = hr(e, t)), e !== null && (oa(e, t, n), Ut(e, n));
}
function vC(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Lx(e, n);
}
function yC(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(X(314));
  }
  r !== null && r.delete(t), Lx(e, n);
}
var Nx;
Nx = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Wt.current) zt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (zt = !1), iC(e, t, n);
      zt = !!(e.flags & 131072);
    }
  else (zt = !1), Ke && t.flags & 1048576 && W0(t, Vl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      pl(e, t), (e = t.pendingProps);
      var o = di(t, _t.current);
      ri(t, n), (o = Qp(null, t, r, e, o, n));
      var i = Jp();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Vt(r) ? ((i = !0), Bl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Gp(t),
            (o.updater = Mu),
            (t.stateNode = o),
            (o._reactInternals = t),
            Sf(t, r, e, n),
            (t = Pf(null, t, r, !0, i, n)))
          : ((t.tag = 0), Ke && i && Fp(t), At(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (pl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = bC(r)),
          (e = An(r, e)),
          o)
        ) {
          case 0:
            t = Cf(null, t, r, e, n);
            break e;
          case 1:
            t = mg(null, t, r, e, n);
            break e;
          case 11:
            t = fg(null, t, r, e, n);
            break e;
          case 14:
            t = pg(null, t, r, An(r.type, e), n);
            break e;
        }
        throw Error(X(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : An(r, o)),
        Cf(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : An(r, o)),
        mg(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((wx(t), e === null)) throw Error(X(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          q0(e, t),
          Gl(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = hi(Error(X(423)), t)), (t = hg(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = hi(Error(X(424)), t)), (t = hg(e, t, r, n, o));
            break e;
          } else
            for (
              Zt = Lr(t.stateNode.containerInfo.firstChild),
                en = t,
                Ke = !0,
                $n = null,
                n = G0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((fi(), r === o)) {
            t = gr(e, t, n);
            break e;
          }
          At(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        X0(t),
        e === null && xf(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        mf(r, o) ? (s = null) : i !== null && mf(r, i) && (t.flags |= 32),
        bx(e, t),
        At(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && xf(t), null;
    case 13:
      return Sx(e, t, n);
    case 4:
      return (
        Kp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pi(t, null, r, n)) : At(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : An(r, o)),
        fg(e, t, r, o, n)
      );
    case 7:
      return At(e, t, t.pendingProps, n), t.child;
    case 8:
      return At(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return At(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          We(Ul, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Fn(i.value, s)) {
            if (i.children === o.children && !Wt.current) {
              t = gr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = fr(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      bf(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(X(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  bf(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        At(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ri(t, n),
        (o = Sn(o)),
        (r = r(o)),
        (t.flags |= 1),
        At(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = An(r, t.pendingProps)),
        (o = An(r.type, o)),
        pg(e, t, r, o, n)
      );
    case 15:
      return yx(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : An(r, o)),
        pl(e, t),
        (t.tag = 1),
        Vt(r) ? ((e = !0), Bl(t)) : (e = !1),
        ri(t, n),
        hx(t, r, o),
        Sf(t, r, o, n),
        Pf(null, t, r, !0, e, n)
      );
    case 19:
      return Ex(e, t, n);
    case 22:
      return xx(e, t, n);
  }
  throw Error(X(156, t.tag));
};
function Fx(e, t) {
  return f0(e, t);
}
function xC(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function vn(e, t, n, r) {
  return new xC(e, t, n, r);
}
function lm(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bC(e) {
  if (typeof e == 'function') return lm(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === kp)) return 11;
    if (e === Rp) return 14;
  }
  return 2;
}
function Br(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = vn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function gl(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == 'function')) lm(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case Fo:
        return uo(n.children, o, i, t);
      case Tp:
        (s = 8), (o |= 8);
        break;
      case Hd:
        return (
          (e = vn(12, n, t, o | 2)), (e.elementType = Hd), (e.lanes = i), e
        );
      case Gd:
        return (e = vn(13, n, t, o)), (e.elementType = Gd), (e.lanes = i), e;
      case Kd:
        return (e = vn(19, n, t, o)), (e.elementType = Kd), (e.lanes = i), e;
      case Xy:
        return $u(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ky:
              s = 10;
              break e;
            case qy:
              s = 9;
              break e;
            case kp:
              s = 11;
              break e;
            case Rp:
              s = 14;
              break e;
            case Er:
              (s = 16), (r = null);
              break e;
          }
        throw Error(X(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = vn(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function uo(e, t, n, r) {
  return (e = vn(7, e, r, t)), (e.lanes = n), e;
}
function $u(e, t, n, r) {
  return (
    (e = vn(22, e, r, t)),
    (e.elementType = Xy),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function dd(e, t, n) {
  return (e = vn(6, e, null, t)), (e.lanes = n), e;
}
function fd(e, t, n) {
  return (
    (t = vn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function wC(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gc(0)),
    (this.expirationTimes = Gc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function um(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new wC(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = vn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gp(i),
    e
  );
}
function SC(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: No,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function zx(e) {
  if (!e) return Ur;
  e = e._reactInternals;
  e: {
    if (Co(e) !== e || e.tag !== 1) throw Error(X(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Vt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(X(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Vt(n)) return z0(e, n, t);
  }
  return t;
}
function Bx(e, t, n, r, o, i, s, a, l) {
  return (
    (e = um(n, r, !0, e, o, i, s, a, l)),
    (e.context = zx(null)),
    (n = e.current),
    (r = $t()),
    (o = zr(n)),
    (i = fr(r, o)),
    (i.callback = t ?? null),
    Nr(n, i, o),
    (e.current.lanes = o),
    oa(e, o, r),
    Ut(e, r),
    e
  );
}
function ju(e, t, n, r) {
  var o = t.current,
    i = $t(),
    s = zr(o);
  return (
    (n = zx(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = fr(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Nr(o, t, s)),
    e !== null && (Nn(e, o, s, i), cl(e, o, s)),
    s
  );
}
function eu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Pg(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cm(e, t) {
  Pg(e, t), (e = e.alternate) && Pg(e, t);
}
function EC() {
  return null;
}
var Wx =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function dm(e) {
  this._internalRoot = e;
}
Du.prototype.render = dm.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(X(409));
  ju(e, t, null, null);
};
Du.prototype.unmount = dm.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    vo(function () {
      ju(null, e, null, null);
    }),
      (t[mr] = null);
  }
};
function Du(e) {
  this._internalRoot = e;
}
Du.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = x0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pr.length && t !== 0 && t < Pr[n].priority; n++);
    Pr.splice(n, 0, e), n === 0 && w0(e);
  }
};
function fm(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Lu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Tg() {}
function CC(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = eu(s);
        i.call(u);
      };
    }
    var s = Bx(t, r, e, 0, null, !1, !1, '', Tg);
    return (
      (e._reactRootContainer = s),
      (e[mr] = s.current),
      Ds(e.nodeType === 8 ? e.parentNode : e),
      vo(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = eu(l);
      a.call(u);
    };
  }
  var l = um(e, 0, !1, null, null, !1, !1, '', Tg);
  return (
    (e._reactRootContainer = l),
    (e[mr] = l.current),
    Ds(e.nodeType === 8 ? e.parentNode : e),
    vo(function () {
      ju(t, l, n, r);
    }),
    l
  );
}
function Nu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == 'function') {
      var a = o;
      o = function () {
        var l = eu(s);
        a.call(l);
      };
    }
    ju(t, s, e, o);
  } else s = CC(n, t, e, o, r);
  return eu(s);
}
v0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = us(t.pendingLanes);
        n !== 0 &&
          (Mp(t, n | 1), Ut(t, rt()), !(_e & 6) && ((gi = rt() + 500), Xr()));
      }
      break;
    case 13:
      vo(function () {
        var r = hr(e, 1);
        if (r !== null) {
          var o = $t();
          Nn(r, e, 1, o);
        }
      }),
        cm(e, 1);
  }
};
Ap = function (e) {
  if (e.tag === 13) {
    var t = hr(e, 134217728);
    if (t !== null) {
      var n = $t();
      Nn(t, e, 134217728, n);
    }
    cm(e, 134217728);
  }
};
y0 = function (e) {
  if (e.tag === 13) {
    var t = zr(e),
      n = hr(e, t);
    if (n !== null) {
      var r = $t();
      Nn(n, e, t, r);
    }
    cm(e, t);
  }
};
x0 = function () {
  return je;
};
b0 = function (e, t) {
  var n = je;
  try {
    return (je = e), t();
  } finally {
    je = n;
  }
};
rf = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Yd(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ru(r);
            if (!o) throw Error(X(90));
            Qy(r), Yd(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Zy(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Zo(e, !!n.multiple, t, !1);
  }
};
s0 = im;
a0 = vo;
var PC = { usingClientEntryPoint: !1, Events: [sa, Vo, Ru, o0, i0, im] },
  Xi = {
    findFiberByHostInstance: ro,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  TC = {
    bundleType: Xi.bundleType,
    version: Xi.version,
    rendererPackageName: Xi.rendererPackageName,
    rendererConfig: Xi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = c0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Xi.findFiberByHostInstance || EC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Wa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Wa.isDisabled && Wa.supportsFiber)
    try {
      (Cu = Wa.inject(TC)), (Yn = Wa);
    } catch {}
}
sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = PC;
sn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fm(t)) throw Error(X(200));
  return SC(e, t, null, n);
};
sn.createRoot = function (e, t) {
  if (!fm(e)) throw Error(X(299));
  var n = !1,
    r = '',
    o = Wx;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = um(e, 1, !1, null, null, n, !1, r, o)),
    (e[mr] = t.current),
    Ds(e.nodeType === 8 ? e.parentNode : e),
    new dm(t)
  );
};
sn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(X(188))
      : ((e = Object.keys(e).join(',')), Error(X(268, e)));
  return (e = c0(t)), (e = e === null ? null : e.stateNode), e;
};
sn.flushSync = function (e) {
  return vo(e);
};
sn.hydrate = function (e, t, n) {
  if (!Lu(t)) throw Error(X(200));
  return Nu(null, e, t, !0, n);
};
sn.hydrateRoot = function (e, t, n) {
  if (!fm(e)) throw Error(X(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = Wx;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Bx(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[mr] = t.current),
    Ds(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Du(t);
};
sn.render = function (e, t, n) {
  if (!Lu(t)) throw Error(X(200));
  return Nu(null, e, t, !1, n);
};
sn.unmountComponentAtNode = function (e) {
  if (!Lu(e)) throw Error(X(40));
  return e._reactRootContainer
    ? (vo(function () {
        Nu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mr] = null);
        });
      }),
      !0)
    : !1;
};
sn.unstable_batchedUpdates = im;
sn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Lu(n)) throw Error(X(200));
  if (e == null || e._reactInternals === void 0) throw Error(X(38));
  return Nu(e, t, n, !1, r);
};
sn.version = '18.3.1-next-f1338f8080-20240426';
function Vx() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vx);
    } catch (e) {
      console.error(e);
    }
}
Vx(), (Vy.exports = sn);
var pm = Vy.exports;
const Va = yp(pm);
var kg = pm;
(Vd.createRoot = kg.createRoot), (Vd.hydrateRoot = kg.hydrateRoot);
function E() {
  return (
    (E = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    E.apply(this, arguments)
  );
}
function lr(e) {
  if (typeof e != 'object' || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function Ux(e) {
  if (!lr(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = Ux(e[n]);
    }),
    t
  );
}
function tn(e, t, n = { clone: !0 }) {
  const r = n.clone ? E({}, e) : e;
  return (
    lr(e) &&
      lr(t) &&
      Object.keys(t).forEach((o) => {
        o !== '__proto__' &&
          (lr(t[o]) && o in e && lr(e[o])
            ? (r[o] = tn(e[o], t[o], n))
            : n.clone
            ? (r[o] = lr(t[o]) ? Ux(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
const kC = Object.freeze(
  Object.defineProperty(
    { __proto__: null, default: tn, isPlainObject: lr },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
var Hx = { exports: {} },
  RC = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  OC = RC,
  _C = OC;
function Gx() {}
function Kx() {}
Kx.resetWarningCache = Gx;
var MC = function () {
  function e(r, o, i, s, a, l) {
    if (l !== _C) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((u.name = 'Invariant Violation'), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Kx,
    resetWarningCache: Gx,
  };
  return (n.PropTypes = n), n;
};
Hx.exports = MC();
var AC = Hx.exports;
const Fe = yp(AC);
function yo(e) {
  let t = 'https://mui.com/production-error/?code=' + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
}
const IC = Object.freeze(
  Object.defineProperty({ __proto__: null, default: yo }, Symbol.toStringTag, {
    value: 'Module',
  })
);
var qx = { exports: {} },
  De = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mm = Symbol.for('react.element'),
  hm = Symbol.for('react.portal'),
  Fu = Symbol.for('react.fragment'),
  zu = Symbol.for('react.strict_mode'),
  Bu = Symbol.for('react.profiler'),
  Wu = Symbol.for('react.provider'),
  Vu = Symbol.for('react.context'),
  $C = Symbol.for('react.server_context'),
  Uu = Symbol.for('react.forward_ref'),
  Hu = Symbol.for('react.suspense'),
  Gu = Symbol.for('react.suspense_list'),
  Ku = Symbol.for('react.memo'),
  qu = Symbol.for('react.lazy'),
  jC = Symbol.for('react.offscreen'),
  Xx;
Xx = Symbol.for('react.module.reference');
function Rn(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case mm:
        switch (((e = e.type), e)) {
          case Fu:
          case Bu:
          case zu:
          case Hu:
          case Gu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case $C:
              case Vu:
              case Uu:
              case qu:
              case Ku:
              case Wu:
                return e;
              default:
                return t;
            }
        }
      case hm:
        return t;
    }
  }
}
De.ContextConsumer = Vu;
De.ContextProvider = Wu;
De.Element = mm;
De.ForwardRef = Uu;
De.Fragment = Fu;
De.Lazy = qu;
De.Memo = Ku;
De.Portal = hm;
De.Profiler = Bu;
De.StrictMode = zu;
De.Suspense = Hu;
De.SuspenseList = Gu;
De.isAsyncMode = function () {
  return !1;
};
De.isConcurrentMode = function () {
  return !1;
};
De.isContextConsumer = function (e) {
  return Rn(e) === Vu;
};
De.isContextProvider = function (e) {
  return Rn(e) === Wu;
};
De.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === mm;
};
De.isForwardRef = function (e) {
  return Rn(e) === Uu;
};
De.isFragment = function (e) {
  return Rn(e) === Fu;
};
De.isLazy = function (e) {
  return Rn(e) === qu;
};
De.isMemo = function (e) {
  return Rn(e) === Ku;
};
De.isPortal = function (e) {
  return Rn(e) === hm;
};
De.isProfiler = function (e) {
  return Rn(e) === Bu;
};
De.isStrictMode = function (e) {
  return Rn(e) === zu;
};
De.isSuspense = function (e) {
  return Rn(e) === Hu;
};
De.isSuspenseList = function (e) {
  return Rn(e) === Gu;
};
De.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Fu ||
    e === Bu ||
    e === zu ||
    e === Hu ||
    e === Gu ||
    e === jC ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === qu ||
        e.$$typeof === Ku ||
        e.$$typeof === Wu ||
        e.$$typeof === Vu ||
        e.$$typeof === Uu ||
        e.$$typeof === Xx ||
        e.getModuleId !== void 0))
  );
};
De.typeOf = Rn;
qx.exports = De;
var Rg = qx.exports;
const DC = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Yx(e) {
  const t = `${e}`.match(DC);
  return (t && t[1]) || '';
}
function Qx(e, t = '') {
  return e.displayName || e.name || Yx(e) || t;
}
function Og(e, t, n) {
  const r = Qx(t);
  return e.displayName || (r !== '' ? `${n}(${r})` : n);
}
function LC(e) {
  if (e != null) {
    if (typeof e == 'string') return e;
    if (typeof e == 'function') return Qx(e, 'Component');
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Rg.ForwardRef:
          return Og(e, e.render, 'ForwardRef');
        case Rg.Memo:
          return Og(e, e.type, 'memo');
        default:
          return;
      }
  }
}
const NC = Object.freeze(
  Object.defineProperty(
    { __proto__: null, default: LC, getFunctionName: Yx },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function se(e) {
  if (typeof e != 'string') throw new Error(yo(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const FC = Object.freeze(
  Object.defineProperty({ __proto__: null, default: se }, Symbol.toStringTag, {
    value: 'Module',
  })
);
function _g(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function Jx(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function vl(e, t) {
  var n, r;
  return (
    b.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
          (r = r._payload) == null ||
          (r = r.value) == null
        ? void 0
        : r.muiName
    ) !== -1
  );
}
function jt(e) {
  return (e && e.ownerDocument) || document;
}
function xo(e) {
  return jt(e).defaultView || window;
}
function Lf(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
const er = typeof window < 'u' ? b.useLayoutEffect : b.useEffect;
let Mg = 0;
function zC(e) {
  const [t, n] = b.useState(e),
    r = e || t;
  return (
    b.useEffect(() => {
      t == null && ((Mg += 1), n(`mui-${Mg}`));
    }, [t]),
    r
  );
}
const Ag = _l.useId;
function Xu(e) {
  if (Ag !== void 0) {
    const t = Ag();
    return e ?? t;
  }
  return zC(e);
}
function Nf({ controlled: e, default: t, name: n, state: r = 'value' }) {
  const { current: o } = b.useRef(e !== void 0),
    [i, s] = b.useState(t),
    a = o ? e : i,
    l = b.useCallback((u) => {
      o || s(u);
    }, []);
  return [a, l];
}
function Or(e) {
  const t = b.useRef(e);
  return (
    er(() => {
      t.current = e;
    }),
    b.useRef((...n) => (0, t.current)(...n)).current
  );
}
function pt(...e) {
  return b.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              Lf(n, t);
            });
          },
    e
  );
}
const Ig = {};
function BC(e, t) {
  const n = b.useRef(Ig);
  return n.current === Ig && (n.current = e(t)), n;
}
const WC = [];
function VC(e) {
  b.useEffect(e, WC);
}
class la {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new la();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function Yo() {
  const e = BC(la.create).current;
  return VC(e.disposeEffect), e;
}
let Yu = !0,
  Ff = !1;
const UC = new la(),
  HC = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    'datetime-local': !0,
  };
function GC(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === 'INPUT' && HC[t] && !e.readOnly) ||
    (n === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  );
}
function KC(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Yu = !0);
}
function pd() {
  Yu = !1;
}
function qC() {
  this.visibilityState === 'hidden' && Ff && (Yu = !0);
}
function XC(e) {
  e.addEventListener('keydown', KC, !0),
    e.addEventListener('mousedown', pd, !0),
    e.addEventListener('pointerdown', pd, !0),
    e.addEventListener('touchstart', pd, !0),
    e.addEventListener('visibilitychange', qC, !0);
}
function YC(e) {
  const { target: t } = e;
  try {
    return t.matches(':focus-visible');
  } catch {}
  return Yu || GC(t);
}
function Zx() {
  const e = b.useCallback((o) => {
      o != null && XC(o.ownerDocument);
    }, []),
    t = b.useRef(!1);
  function n() {
    return t.current
      ? ((Ff = !0),
        UC.start(100, () => {
          Ff = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return YC(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function e1(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function gm(e, t) {
  const n = E({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = E({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = E({}, i)),
              Object.keys(o).forEach((s) => {
                n[r][s] = gm(o[s], i[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function Se(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, s) => {
          if (s) {
            const a = t(s);
            a !== '' && i.push(a), n && n[s] && i.push(n[s]);
          }
          return i;
        }, [])
        .join(' ');
    }),
    r
  );
}
const $g = (e) => e,
  QC = () => {
    let e = $g;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = $g;
      },
    };
  },
  t1 = QC(),
  n1 = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    open: 'open',
    readOnly: 'readOnly',
    required: 'required',
    selected: 'selected',
  };
function Ee(e, t, n = 'Mui') {
  const r = n1[t];
  return r ? `${n}-${r}` : `${t1.generate(e)}-${t}`;
}
function ge(e, t, n = 'Mui') {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = Ee(e, o, n);
    }),
    r
  );
}
function JC(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const ZC = Object.freeze(
  Object.defineProperty({ __proto__: null, default: JC }, Symbol.toStringTag, {
    value: 'Module',
  })
);
function J(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function r1(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = r1(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function ie() {
  for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = r1(e)) && (r && (r += ' '), (r += t));
  return r;
}
function eP(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : gm(t.components[n].defaultProps, r);
}
const tP = ['values', 'unit', 'step'],
  nP = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => E({}, n, { [r.key]: r.val }), {})
    );
  };
function o1(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5,
    } = e,
    o = J(e, tP),
    i = nP(t),
    s = Object.keys(i);
  function a(f) {
    return `@media (min-width:${typeof t[f] == 'number' ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${
      (typeof t[f] == 'number' ? t[f] : f) - r / 100
    }${n})`;
  }
  function u(f, v) {
    const m = s.indexOf(v);
    return `@media (min-width:${
      typeof t[f] == 'number' ? t[f] : f
    }${n}) and (max-width:${
      (m !== -1 && typeof t[s[m]] == 'number' ? t[s[m]] : v) - r / 100
    }${n})`;
  }
  function c(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : a(f);
  }
  function d(f) {
    const v = s.indexOf(f);
    return v === 0
      ? a(s[1])
      : v === s.length - 1
      ? l(s[v])
      : u(f, s[s.indexOf(f) + 1]).replace('@media', '@media not all and');
  }
  return E(
    {
      keys: s,
      values: i,
      up: a,
      down: l,
      between: u,
      only: c,
      not: d,
      unit: n,
    },
    o
  );
}
const rP = { borderRadius: 4 };
function ws(e, t) {
  return t ? tn(e, t, { clone: !1 }) : e;
}
const vm = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  jg = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${vm[e]}px)`,
  };
function Cn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || jg;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == 'object') {
    const i = r.breakpoints || jg;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || vm).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function oP(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function iP(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function sP(e, t) {
  if (typeof e != 'object') return {};
  const n = {},
    r = Object.keys(t);
  return (
    Array.isArray(e)
      ? r.forEach((o, i) => {
          i < e.length && (n[o] = !0);
        })
      : r.forEach((o) => {
          e[o] != null && (n[o] = !0);
        }),
    n
  );
}
function Qu({ values: e, breakpoints: t, base: n }) {
  const r = n || sP(e, t),
    o = Object.keys(r);
  if (o.length === 0) return e;
  let i;
  return o.reduce(
    (s, a, l) => (
      Array.isArray(e)
        ? ((s[a] = e[l] != null ? e[l] : e[i]), (i = l))
        : typeof e == 'object'
        ? ((s[a] = e[a] != null ? e[a] : e[i]), (i = a))
        : (s[a] = e),
      s
    ),
    {}
  );
}
function Ju(e, t, n = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split('.')
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split('.').reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function tu(e, t, n, r = n) {
  let o;
  return (
    typeof e == 'function'
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Ju(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function ot(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = Ju(l, r) || {};
      return Cn(s, a, (d) => {
        let f = tu(u, o, d);
        return (
          d === f &&
            typeof d == 'string' &&
            (f = tu(u, o, `${t}${d === 'default' ? '' : se(d)}`, d)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function aP(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const lP = { m: 'margin', p: 'padding' },
  uP = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  Dg = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  cP = aP((e) => {
    if (e.length > 2)
      if (Dg[e]) e = Dg[e];
      else return [e];
    const [t, n] = e.split(''),
      r = lP[t],
      o = uP[n] || '';
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  ym = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  xm = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...ym, ...xm];
function ua(e, t, n, r) {
  var o;
  const i = (o = Ju(e, t, !1)) != null ? o : n;
  return typeof i == 'number'
    ? (s) => (typeof s == 'string' ? s : i * s)
    : Array.isArray(i)
    ? (s) => (typeof s == 'string' ? s : i[s])
    : typeof i == 'function'
    ? i
    : () => {};
}
function i1(e) {
  return ua(e, 'spacing', 8);
}
function ca(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`;
}
function dP(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = ca(t, n)), r), {});
}
function fP(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = cP(n),
    i = dP(o, r),
    s = e[n];
  return Cn(e, s, i);
}
function s1(e, t) {
  const n = i1(e.theme);
  return Object.keys(e)
    .map((r) => fP(e, t, r, n))
    .reduce(ws, {});
}
function Je(e) {
  return s1(e, ym);
}
Je.propTypes = {};
Je.filterProps = ym;
function Ze(e) {
  return s1(e, xm);
}
Ze.propTypes = {};
Ze.filterProps = xm;
function pP(e = 8) {
  if (e.mui) return e;
  const t = i1({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i);
          return typeof s == 'number' ? `${s}px` : s;
        })
        .join(' ');
  return (n.mui = !0), n;
}
function Zu(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? ws(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function hn(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
function On(e, t) {
  return ot({ prop: e, themeKey: 'borders', transform: t });
}
const mP = On('border', hn),
  hP = On('borderTop', hn),
  gP = On('borderRight', hn),
  vP = On('borderBottom', hn),
  yP = On('borderLeft', hn),
  xP = On('borderColor'),
  bP = On('borderTopColor'),
  wP = On('borderRightColor'),
  SP = On('borderBottomColor'),
  EP = On('borderLeftColor'),
  CP = On('outline', hn),
  PP = On('outlineColor'),
  ec = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = ua(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({ borderRadius: ca(t, r) });
      return Cn(e, e.borderRadius, n);
    }
    return null;
  };
ec.propTypes = {};
ec.filterProps = ['borderRadius'];
Zu(mP, hP, gP, vP, yP, xP, bP, wP, SP, EP, ec, CP, PP);
const tc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ua(e.theme, 'spacing', 8),
      n = (r) => ({ gap: ca(t, r) });
    return Cn(e, e.gap, n);
  }
  return null;
};
tc.propTypes = {};
tc.filterProps = ['gap'];
const nc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ua(e.theme, 'spacing', 8),
      n = (r) => ({ columnGap: ca(t, r) });
    return Cn(e, e.columnGap, n);
  }
  return null;
};
nc.propTypes = {};
nc.filterProps = ['columnGap'];
const rc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ua(e.theme, 'spacing', 8),
      n = (r) => ({ rowGap: ca(t, r) });
    return Cn(e, e.rowGap, n);
  }
  return null;
};
rc.propTypes = {};
rc.filterProps = ['rowGap'];
const TP = ot({ prop: 'gridColumn' }),
  kP = ot({ prop: 'gridRow' }),
  RP = ot({ prop: 'gridAutoFlow' }),
  OP = ot({ prop: 'gridAutoColumns' }),
  _P = ot({ prop: 'gridAutoRows' }),
  MP = ot({ prop: 'gridTemplateColumns' }),
  AP = ot({ prop: 'gridTemplateRows' }),
  IP = ot({ prop: 'gridTemplateAreas' }),
  $P = ot({ prop: 'gridArea' });
Zu(tc, nc, rc, TP, kP, RP, OP, _P, MP, AP, IP, $P);
function ii(e, t) {
  return t === 'grey' ? t : e;
}
const jP = ot({ prop: 'color', themeKey: 'palette', transform: ii }),
  DP = ot({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: ii,
  }),
  LP = ot({ prop: 'backgroundColor', themeKey: 'palette', transform: ii });
Zu(jP, DP, LP);
function Jt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const NP = ot({ prop: 'width', transform: Jt }),
  bm = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || vm[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== 'px'
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: Jt(n) };
      };
      return Cn(e, e.maxWidth, t);
    }
    return null;
  };
bm.filterProps = ['maxWidth'];
const FP = ot({ prop: 'minWidth', transform: Jt }),
  zP = ot({ prop: 'height', transform: Jt }),
  BP = ot({ prop: 'maxHeight', transform: Jt }),
  WP = ot({ prop: 'minHeight', transform: Jt });
ot({ prop: 'size', cssProperty: 'width', transform: Jt });
ot({ prop: 'size', cssProperty: 'height', transform: Jt });
const VP = ot({ prop: 'boxSizing' });
Zu(NP, bm, FP, zP, BP, WP, VP);
const da = {
  border: { themeKey: 'borders', transform: hn },
  borderTop: { themeKey: 'borders', transform: hn },
  borderRight: { themeKey: 'borders', transform: hn },
  borderBottom: { themeKey: 'borders', transform: hn },
  borderLeft: { themeKey: 'borders', transform: hn },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: hn },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: ec },
  color: { themeKey: 'palette', transform: ii },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: ii,
  },
  backgroundColor: { themeKey: 'palette', transform: ii },
  p: { style: Ze },
  pt: { style: Ze },
  pr: { style: Ze },
  pb: { style: Ze },
  pl: { style: Ze },
  px: { style: Ze },
  py: { style: Ze },
  padding: { style: Ze },
  paddingTop: { style: Ze },
  paddingRight: { style: Ze },
  paddingBottom: { style: Ze },
  paddingLeft: { style: Ze },
  paddingX: { style: Ze },
  paddingY: { style: Ze },
  paddingInline: { style: Ze },
  paddingInlineStart: { style: Ze },
  paddingInlineEnd: { style: Ze },
  paddingBlock: { style: Ze },
  paddingBlockStart: { style: Ze },
  paddingBlockEnd: { style: Ze },
  m: { style: Je },
  mt: { style: Je },
  mr: { style: Je },
  mb: { style: Je },
  ml: { style: Je },
  mx: { style: Je },
  my: { style: Je },
  margin: { style: Je },
  marginTop: { style: Je },
  marginRight: { style: Je },
  marginBottom: { style: Je },
  marginLeft: { style: Je },
  marginX: { style: Je },
  marginY: { style: Je },
  marginInline: { style: Je },
  marginInlineStart: { style: Je },
  marginInlineEnd: { style: Je },
  marginBlock: { style: Je },
  marginBlockStart: { style: Je },
  marginBlockEnd: { style: Je },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ '@media print': { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: tc },
  rowGap: { style: rc },
  columnGap: { style: nc },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: 'zIndex' },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: 'shadows' },
  width: { transform: Jt },
  maxWidth: { style: bm },
  minWidth: { transform: Jt },
  height: { transform: Jt },
  maxHeight: { transform: Jt },
  minHeight: { transform: Jt },
  boxSizing: {},
  fontFamily: { themeKey: 'typography' },
  fontSize: { themeKey: 'typography' },
  fontStyle: { themeKey: 'typography' },
  fontWeight: { themeKey: 'typography' },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: 'typography' },
};
function UP(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function HP(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function a1() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: d } = a;
    if (r == null) return null;
    if (u === 'typography' && r === 'inherit') return { [n]: r };
    const f = Ju(o, u) || {};
    return d
      ? d(s)
      : Cn(s, r, (m) => {
          let h = tu(f, c, m);
          return (
            m === h &&
              typeof m == 'string' &&
              (h = tu(f, c, `${n}${m === 'default' ? '' : se(m)}`, m)),
            l === !1 ? h : { [l]: h }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const s = (r = i.unstable_sxConfig) != null ? r : da;
    function a(l) {
      let u = l;
      if (typeof l == 'function') u = l(i);
      else if (typeof l != 'object') return l;
      if (!u) return null;
      const c = oP(i.breakpoints),
        d = Object.keys(c);
      let f = c;
      return (
        Object.keys(u).forEach((v) => {
          const m = HP(u[v], i);
          if (m != null)
            if (typeof m == 'object')
              if (s[v]) f = ws(f, e(v, m, i, s));
              else {
                const h = Cn({ theme: i }, m, (w) => ({ [v]: w }));
                UP(h, m) ? (f[v] = t({ sx: m, theme: i })) : (f = ws(f, h));
              }
            else f = ws(f, e(v, m, i, s));
        }),
        iP(d, f)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const ki = a1();
ki.filterProps = ['sx'];
function l1(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == 'function'
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, '*:where($1)')]: t,
      }
    : n.palette.mode === e
    ? t
    : {};
}
const GP = ['breakpoints', 'palette', 'spacing', 'shape'];
function fa(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = J(e, GP),
    a = o1(n),
    l = pP(o);
  let u = tn(
    {
      breakpoints: a,
      direction: 'ltr',
      components: {},
      palette: E({ mode: 'light' }, r),
      spacing: l,
      shape: E({}, rP, i),
    },
    s
  );
  return (
    (u.applyStyles = l1),
    (u = t.reduce((c, d) => tn(c, d), u)),
    (u.unstable_sxConfig = E({}, da, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return ki({ sx: d, theme: this });
    }),
    u
  );
}
const KP = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: fa,
      private_createBreakpoints: o1,
      unstable_applyStyles: l1,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function u1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var qP =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  XP = u1(function (e) {
    return (
      qP.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function YP(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function QP(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var JP = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(QP(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = YP(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Rt = '-ms-',
  nu = '-moz-',
  Me = '-webkit-',
  c1 = 'comm',
  wm = 'rule',
  Sm = 'decl',
  ZP = '@import',
  d1 = '@keyframes',
  eT = '@layer',
  tT = Math.abs,
  oc = String.fromCharCode,
  nT = Object.assign;
function rT(e, t) {
  return St(e, 0) ^ 45
    ? (((((((t << 2) ^ St(e, 0)) << 2) ^ St(e, 1)) << 2) ^ St(e, 2)) << 2) ^
        St(e, 3)
    : 0;
}
function f1(e) {
  return e.trim();
}
function oT(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ae(e, t, n) {
  return e.replace(t, n);
}
function zf(e, t) {
  return e.indexOf(t);
}
function St(e, t) {
  return e.charCodeAt(t) | 0;
}
function Hs(e, t, n) {
  return e.slice(t, n);
}
function Un(e) {
  return e.length;
}
function Em(e) {
  return e.length;
}
function Ua(e, t) {
  return t.push(e), e;
}
function iT(e, t) {
  return e.map(t).join('');
}
var ic = 1,
  vi = 1,
  p1 = 0,
  Kt = 0,
  st = 0,
  Ri = '';
function sc(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: ic,
    column: vi,
    length: s,
    return: '',
  };
}
function Yi(e, t) {
  return nT(sc('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function sT() {
  return st;
}
function aT() {
  return (
    (st = Kt > 0 ? St(Ri, --Kt) : 0), vi--, st === 10 && ((vi = 1), ic--), st
  );
}
function nn() {
  return (
    (st = Kt < p1 ? St(Ri, Kt++) : 0), vi++, st === 10 && ((vi = 1), ic++), st
  );
}
function Jn() {
  return St(Ri, Kt);
}
function yl() {
  return Kt;
}
function pa(e, t) {
  return Hs(Ri, e, t);
}
function Gs(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function m1(e) {
  return (ic = vi = 1), (p1 = Un((Ri = e))), (Kt = 0), [];
}
function h1(e) {
  return (Ri = ''), e;
}
function xl(e) {
  return f1(pa(Kt - 1, Bf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function lT(e) {
  for (; (st = Jn()) && st < 33; ) nn();
  return Gs(e) > 2 || Gs(st) > 3 ? '' : ' ';
}
function uT(e, t) {
  for (
    ;
    --t &&
    nn() &&
    !(st < 48 || st > 102 || (st > 57 && st < 65) || (st > 70 && st < 97));

  );
  return pa(e, yl() + (t < 6 && Jn() == 32 && nn() == 32));
}
function Bf(e) {
  for (; nn(); )
    switch (st) {
      case e:
        return Kt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Bf(st);
        break;
      case 40:
        e === 41 && Bf(e);
        break;
      case 92:
        nn();
        break;
    }
  return Kt;
}
function cT(e, t) {
  for (; nn() && e + st !== 57; ) if (e + st === 84 && Jn() === 47) break;
  return '/*' + pa(t, Kt - 1) + '*' + oc(e === 47 ? e : nn());
}
function dT(e) {
  for (; !Gs(Jn()); ) nn();
  return pa(e, Kt);
}
function fT(e) {
  return h1(bl('', null, null, null, [''], (e = m1(e)), 0, [0], e));
}
function bl(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      d = s,
      f = 0,
      v = 0,
      m = 0,
      h = 1,
      w = 1,
      p = 1,
      g = 0,
      y = '',
      x = o,
      S = i,
      P = r,
      T = y;
    w;

  )
    switch (((m = g), (g = nn()))) {
      case 40:
        if (m != 108 && St(T, d - 1) == 58) {
          zf((T += Ae(xl(g), '&', '&\f')), '&\f') != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += xl(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += lT(m);
        break;
      case 92:
        T += uT(yl() - 1, 7);
        continue;
      case 47:
        switch (Jn()) {
          case 42:
          case 47:
            Ua(pT(cT(nn(), yl()), t, n), l);
            break;
          default:
            T += '/';
        }
        break;
      case 123 * h:
        a[u++] = Un(T) * p;
      case 125 * h:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            p == -1 && (T = Ae(T, /\f/g, '')),
              v > 0 &&
                Un(T) - d &&
                Ua(
                  v > 32
                    ? Ng(T + ';', r, n, d - 1)
                    : Ng(Ae(T, ' ', '') + ';', r, n, d - 2),
                  l
                );
            break;
          case 59:
            T += ';';
          default:
            if (
              (Ua((P = Lg(T, t, n, u, c, o, a, y, (x = []), (S = []), d)), i),
              g === 123)
            )
              if (c === 0) bl(T, t, P, P, x, i, d, a, S);
              else
                switch (f === 99 && St(T, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    bl(
                      e,
                      P,
                      P,
                      r && Ua(Lg(e, P, P, 0, 0, o, a, y, o, (x = []), d), S),
                      o,
                      S,
                      d,
                      a,
                      r ? x : S
                    );
                    break;
                  default:
                    bl(T, P, P, P, [''], S, 0, a, S);
                }
        }
        (u = c = v = 0), (h = p = 1), (y = T = ''), (d = s);
        break;
      case 58:
        (d = 1 + Un(T)), (v = m);
      default:
        if (h < 1) {
          if (g == 123) --h;
          else if (g == 125 && h++ == 0 && aT() == 125) continue;
        }
        switch (((T += oc(g)), g * h)) {
          case 38:
            p = c > 0 ? 1 : ((T += '\f'), -1);
            break;
          case 44:
            (a[u++] = (Un(T) - 1) * p), (p = 1);
            break;
          case 64:
            Jn() === 45 && (T += xl(nn())),
              (f = Jn()),
              (c = d = Un((y = T += dT(yl())))),
              g++;
            break;
          case 45:
            m === 45 && Un(T) == 2 && (h = 0);
        }
    }
  return i;
}
function Lg(e, t, n, r, o, i, s, a, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [''], v = Em(f), m = 0, h = 0, w = 0;
    m < r;
    ++m
  )
    for (var p = 0, g = Hs(e, d + 1, (d = tT((h = s[m])))), y = e; p < v; ++p)
      (y = f1(h > 0 ? f[p] + ' ' + g : Ae(g, /&\f/g, f[p]))) && (l[w++] = y);
  return sc(e, t, n, o === 0 ? wm : a, l, u, c);
}
function pT(e, t, n) {
  return sc(e, t, n, c1, oc(sT()), Hs(e, 2, -2), 0);
}
function Ng(e, t, n, r) {
  return sc(e, t, n, Sm, Hs(e, 0, r), Hs(e, r + 1, -1), r);
}
function si(e, t) {
  for (var n = '', r = Em(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
  return n;
}
function mT(e, t, n, r) {
  switch (e.type) {
    case eT:
      if (e.children.length) break;
    case ZP:
    case Sm:
      return (e.return = e.return || e.value);
    case c1:
      return '';
    case d1:
      return (e.return = e.value + '{' + si(e.children, r) + '}');
    case wm:
      e.value = e.props.join(',');
  }
  return Un((n = si(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
function hT(e) {
  var t = Em(e);
  return function (n, r, o, i) {
    for (var s = '', a = 0; a < t; a++) s += e[a](n, r, o, i) || '';
    return s;
  };
}
function gT(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var vT = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Jn()), o === 38 && i === 12 && (n[r] = 1), !Gs(i);

    )
      nn();
    return pa(t, Kt);
  },
  yT = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Gs(o)) {
        case 0:
          o === 38 && Jn() === 12 && (n[r] = 1), (t[r] += vT(Kt - 1, n, r));
          break;
        case 2:
          t[r] += xl(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Jn() === 58 ? '&\f' : ''), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += oc(o);
      }
    while ((o = nn()));
    return t;
  },
  xT = function (t, n) {
    return h1(yT(m1(t), n));
  },
  Fg = new WeakMap(),
  bT = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Fg.get(r)) &&
        !o
      ) {
        Fg.set(t, !0);
        for (
          var i = [], s = xT(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + ' ' + s[l];
      }
    }
  },
  wT = function (t) {
    if (t.type === 'decl') {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''));
    }
  };
function g1(e, t) {
  switch (rT(e, t)) {
    case 5103:
      return Me + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Me + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Me + e + nu + e + Rt + e + e;
    case 6828:
    case 4268:
      return Me + e + Rt + e + e;
    case 6165:
      return Me + e + Rt + 'flex-' + e + e;
    case 5187:
      return (
        Me + e + Ae(e, /(\w+).+(:[^]+)/, Me + 'box-$1$2' + Rt + 'flex-$1$2') + e
      );
    case 5443:
      return Me + e + Rt + 'flex-item-' + Ae(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        Me +
        e +
        Rt +
        'flex-line-pack' +
        Ae(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return Me + e + Rt + Ae(e, 'shrink', 'negative') + e;
    case 5292:
      return Me + e + Rt + Ae(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        Me +
        'box-' +
        Ae(e, '-grow', '') +
        Me +
        e +
        Rt +
        Ae(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return Me + Ae(e, /([^-])(transform)/g, '$1' + Me + '$2') + e;
    case 6187:
      return (
        Ae(
          Ae(Ae(e, /(zoom-|grab)/, Me + '$1'), /(image-set)/, Me + '$1'),
          e,
          ''
        ) + e
      );
    case 5495:
    case 3959:
      return Ae(e, /(image-set\([^]*)/, Me + '$1$`$1');
    case 4968:
      return (
        Ae(
          Ae(e, /(.+:)(flex-)?(.*)/, Me + 'box-pack:$3' + Rt + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        Me +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ae(e, /(.+)-inline(.+)/, Me + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Un(e) - 1 - t > 6)
        switch (St(e, t + 1)) {
          case 109:
            if (St(e, t + 4) !== 45) break;
          case 102:
            return (
              Ae(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  Me +
                  '$2-$3$1' +
                  nu +
                  (St(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~zf(e, 'stretch')
              ? g1(Ae(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (St(e, t + 1) !== 115) break;
    case 6444:
      switch (St(e, Un(e) - 3 - (~zf(e, '!important') && 10))) {
        case 107:
          return Ae(e, ':', ':' + Me) + e;
        case 101:
          return (
            Ae(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                Me +
                (St(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                Me +
                '$2$3$1' +
                Rt +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (St(e, t + 11)) {
        case 114:
          return Me + e + Rt + Ae(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return Me + e + Rt + Ae(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return Me + e + Rt + Ae(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return Me + e + Rt + e + e;
  }
  return e;
}
var ST = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Sm:
          t.return = g1(t.value, t.length);
          break;
        case d1:
          return si([Yi(t, { value: Ae(t.value, '@', '@' + Me) })], o);
        case wm:
          if (t.length)
            return iT(t.props, function (i) {
              switch (oT(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return si(
                    [Yi(t, { props: [Ae(i, /:(read-\w+)/, ':' + nu + '$1')] })],
                    o
                  );
                case '::placeholder':
                  return si(
                    [
                      Yi(t, {
                        props: [Ae(i, /:(plac\w+)/, ':' + Me + 'input-$1')],
                      }),
                      Yi(t, { props: [Ae(i, /:(plac\w+)/, ':' + nu + '$1')] }),
                      Yi(t, { props: [Ae(i, /:(plac\w+)/, Rt + 'input-$1')] }),
                    ],
                    o
                  );
              }
              return '';
            });
      }
  },
  ET = [ST],
  v1 = function (t) {
    var n = t.key;
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(r, function (h) {
        var w = h.getAttribute('data-emotion');
        w.indexOf(' ') !== -1 &&
          (document.head.appendChild(h), h.setAttribute('data-s', ''));
      });
    }
    var o = t.stylisPlugins || ET,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (h) {
          for (
            var w = h.getAttribute('data-emotion').split(' '), p = 1;
            p < w.length;
            p++
          )
            i[w[p]] = !0;
          a.push(h);
        }
      );
    var l,
      u = [bT, wT];
    {
      var c,
        d = [
          mT,
          gT(function (h) {
            c.insert(h);
          }),
        ],
        f = hT(u.concat(o, d)),
        v = function (w) {
          return si(fT(w), f);
        };
      l = function (w, p, g, y) {
        (c = g),
          v(w ? w + '{' + p.styles + '}' : p.styles),
          y && (m.inserted[p.name] = !0);
      };
    }
    var m = {
      key: n,
      sheet: new JP({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return m.sheet.hydrate(a), m;
  },
  y1 = { exports: {} },
  Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yt = typeof Symbol == 'function' && Symbol.for,
  Cm = yt ? Symbol.for('react.element') : 60103,
  Pm = yt ? Symbol.for('react.portal') : 60106,
  ac = yt ? Symbol.for('react.fragment') : 60107,
  lc = yt ? Symbol.for('react.strict_mode') : 60108,
  uc = yt ? Symbol.for('react.profiler') : 60114,
  cc = yt ? Symbol.for('react.provider') : 60109,
  dc = yt ? Symbol.for('react.context') : 60110,
  Tm = yt ? Symbol.for('react.async_mode') : 60111,
  fc = yt ? Symbol.for('react.concurrent_mode') : 60111,
  pc = yt ? Symbol.for('react.forward_ref') : 60112,
  mc = yt ? Symbol.for('react.suspense') : 60113,
  CT = yt ? Symbol.for('react.suspense_list') : 60120,
  hc = yt ? Symbol.for('react.memo') : 60115,
  gc = yt ? Symbol.for('react.lazy') : 60116,
  PT = yt ? Symbol.for('react.block') : 60121,
  TT = yt ? Symbol.for('react.fundamental') : 60117,
  kT = yt ? Symbol.for('react.responder') : 60118,
  RT = yt ? Symbol.for('react.scope') : 60119;
function ln(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Cm:
        switch (((e = e.type), e)) {
          case Tm:
          case fc:
          case ac:
          case uc:
          case lc:
          case mc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case dc:
              case pc:
              case gc:
              case hc:
              case cc:
                return e;
              default:
                return t;
            }
        }
      case Pm:
        return t;
    }
  }
}
function x1(e) {
  return ln(e) === fc;
}
Le.AsyncMode = Tm;
Le.ConcurrentMode = fc;
Le.ContextConsumer = dc;
Le.ContextProvider = cc;
Le.Element = Cm;
Le.ForwardRef = pc;
Le.Fragment = ac;
Le.Lazy = gc;
Le.Memo = hc;
Le.Portal = Pm;
Le.Profiler = uc;
Le.StrictMode = lc;
Le.Suspense = mc;
Le.isAsyncMode = function (e) {
  return x1(e) || ln(e) === Tm;
};
Le.isConcurrentMode = x1;
Le.isContextConsumer = function (e) {
  return ln(e) === dc;
};
Le.isContextProvider = function (e) {
  return ln(e) === cc;
};
Le.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Cm;
};
Le.isForwardRef = function (e) {
  return ln(e) === pc;
};
Le.isFragment = function (e) {
  return ln(e) === ac;
};
Le.isLazy = function (e) {
  return ln(e) === gc;
};
Le.isMemo = function (e) {
  return ln(e) === hc;
};
Le.isPortal = function (e) {
  return ln(e) === Pm;
};
Le.isProfiler = function (e) {
  return ln(e) === uc;
};
Le.isStrictMode = function (e) {
  return ln(e) === lc;
};
Le.isSuspense = function (e) {
  return ln(e) === mc;
};
Le.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === ac ||
    e === fc ||
    e === uc ||
    e === lc ||
    e === mc ||
    e === CT ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === gc ||
        e.$$typeof === hc ||
        e.$$typeof === cc ||
        e.$$typeof === dc ||
        e.$$typeof === pc ||
        e.$$typeof === TT ||
        e.$$typeof === kT ||
        e.$$typeof === RT ||
        e.$$typeof === PT))
  );
};
Le.typeOf = ln;
y1.exports = Le;
var OT = y1.exports,
  b1 = OT,
  _T = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  MT = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  w1 = {};
w1[b1.ForwardRef] = _T;
w1[b1.Memo] = MT;
var AT = !0;
function IT(e, t, n) {
  var r = '';
  return (
    n.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (r += o + ' ');
    }),
    r
  );
}
var S1 = function (t, n, r) {
    var o = t.key + '-' + n.name;
    (r === !1 || AT === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  E1 = function (t, n, r) {
    S1(t, n, r);
    var o = t.key + '-' + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? '.' + o : '', i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function $T(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var jT = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  DT = /[A-Z]|^ms/g,
  LT = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  C1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  zg = function (t) {
    return t != null && typeof t != 'boolean';
  },
  md = u1(function (e) {
    return C1(e) ? e : e.replace(DT, '-$&').toLowerCase();
  }),
  Bg = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(LT, function (r, o, i) {
            return (Hn = { name: o, styles: i, next: Hn }), o;
          });
    }
    return jT[t] !== 1 && !C1(t) && typeof n == 'number' && n !== 0
      ? n + 'px'
      : n;
  };
function Ks(e, t, n) {
  if (n == null) return '';
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      if (n.anim === 1)
        return (Hn = { name: n.name, styles: n.styles, next: Hn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Hn = { name: r.name, styles: r.styles, next: Hn }), (r = r.next);
        var o = n.styles + ';';
        return o;
      }
      return NT(e, t, n);
    }
    case 'function': {
      if (e !== void 0) {
        var i = Hn,
          s = n(e);
        return (Hn = i), Ks(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function NT(e, t, n) {
  var r = '';
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Ks(e, t, n[o]) + ';';
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != 'object')
        t != null && t[s] !== void 0
          ? (r += i + '{' + t[s] + '}')
          : zg(s) && (r += md(i) + ':' + Bg(i, s) + ';');
      else if (
        Array.isArray(s) &&
        typeof s[0] == 'string' &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          zg(s[a]) && (r += md(i) + ':' + Bg(i, s[a]) + ';');
      else {
        var l = Ks(e, t, s);
        switch (i) {
          case 'animation':
          case 'animationName': {
            r += md(i) + ':' + l + ';';
            break;
          }
          default:
            r += i + '{' + l + '}';
        }
      }
    }
  return r;
}
var Wg = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Hn,
  km = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == 'object' &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = '';
    Hn = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += Ks(r, n, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += Ks(r, n, t[a])), o && (i += s[a]);
    Wg.lastIndex = 0;
    for (var l = '', u; (u = Wg.exec(i)) !== null; ) l += '-' + u[1];
    var c = $T(i) + l;
    return { name: c, styles: i, next: Hn };
  },
  FT = function (t) {
    return t();
  },
  P1 = _l.useInsertionEffect ? _l.useInsertionEffect : !1,
  zT = P1 || FT,
  Vg = P1 || b.useLayoutEffect,
  T1 = b.createContext(typeof HTMLElement < 'u' ? v1({ key: 'css' }) : null),
  BT = T1.Provider,
  k1 = function (t) {
    return b.forwardRef(function (n, r) {
      var o = b.useContext(T1);
      return t(n, o, r);
    });
  },
  vc = b.createContext({}),
  hd = { exports: {} },
  Ug;
function R1() {
  return (
    Ug ||
      ((Ug = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var o = arguments[r];
                      for (var i in o)
                        Object.prototype.hasOwnProperty.call(o, i) &&
                          (n[i] = o[i]);
                    }
                    return n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(this, arguments)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(hd)),
    hd.exports
  );
}
R1();
var WT = k1(function (e, t) {
  var n = e.styles,
    r = km([n], void 0, b.useContext(vc)),
    o = b.useRef();
  return (
    Vg(
      function () {
        var i = t.key + '-global',
          s = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          a = !1,
          l = document.querySelector(
            'style[data-emotion="' + i + ' ' + r.name + '"]'
          );
        return (
          t.sheet.tags.length && (s.before = t.sheet.tags[0]),
          l !== null &&
            ((a = !0), l.setAttribute('data-emotion', i), s.hydrate([l])),
          (o.current = [s, a]),
          function () {
            s.flush();
          }
        );
      },
      [t]
    ),
    Vg(
      function () {
        var i = o.current,
          s = i[0],
          a = i[1];
        if (a) {
          i[1] = !1;
          return;
        }
        if ((r.next !== void 0 && E1(t, r.next, !0), s.tags.length)) {
          var l = s.tags[s.tags.length - 1].nextElementSibling;
          (s.before = l), s.flush();
        }
        t.insert('', r, s, !1);
      },
      [t, r.name]
    ),
    null
  );
});
function yc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return km(t);
}
var Oi = function () {
    var t = yc.apply(void 0, arguments),
      n = 'animation-' + t.name;
    return {
      name: n,
      styles: '@keyframes ' + n + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  VT = XP,
  UT = function (t) {
    return t !== 'theme';
  },
  Hg = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? VT : UT;
  },
  Gg = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != 'function' && r && (o = t.__emotion_forwardProp), o;
  },
  HT = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      S1(n, r, o),
      zT(function () {
        return E1(n, r, o);
      }),
      null
    );
  },
  GT = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = Gg(t, n, r),
      l = a || Hg(o),
      u = !l('as');
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push('label:' + i + ';'),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, v = 1; v < f; v++) d.push(c[v], c[0][v]);
      }
      var m = k1(function (h, w, p) {
        var g = (u && h.as) || o,
          y = '',
          x = [],
          S = h;
        if (h.theme == null) {
          S = {};
          for (var P in h) S[P] = h[P];
          S.theme = b.useContext(vc);
        }
        typeof h.className == 'string'
          ? (y = IT(w.registered, x, h.className))
          : h.className != null && (y = h.className + ' ');
        var T = km(d.concat(x), w.registered, S);
        (y += w.key + '-' + T.name), s !== void 0 && (y += ' ' + s);
        var _ = u && a === void 0 ? Hg(g) : l,
          I = {};
        for (var k in h) (u && k === 'as') || (_(k) && (I[k] = h[k]));
        return (
          (I.className = y),
          (I.ref = p),
          b.createElement(
            b.Fragment,
            null,
            b.createElement(HT, {
              cache: w,
              serialized: T,
              isStringTag: typeof g == 'string',
            }),
            b.createElement(g, I)
          )
        );
      });
      return (
        (m.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof o == 'string'
                ? o
                : o.displayName || o.name || 'Component') +
              ')'),
        (m.defaultProps = t.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = o),
        (m.__emotion_styles = d),
        (m.__emotion_forwardProp = a),
        Object.defineProperty(m, 'toString', {
          value: function () {
            return '.' + s;
          },
        }),
        (m.withComponent = function (h, w) {
          return e(h, E({}, n, w, { shouldForwardProp: Gg(m, w, !0) })).apply(
            void 0,
            d
          );
        }),
        m
      );
    };
  },
  KT = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  Wf = GT.bind();
KT.forEach(function (e) {
  Wf[e] = Wf(e);
});
let Vf;
typeof document == 'object' && (Vf = v1({ key: 'css', prepend: !0 }));
function qT(e) {
  const { injectFirst: t, children: n } = e;
  return t && Vf ? C.jsx(BT, { value: Vf, children: n }) : n;
}
function XT(e) {
  return e == null || Object.keys(e).length === 0;
}
function O1(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == 'function' ? (o) => t(XT(o) ? n : o) : t;
  return C.jsx(WT, { styles: r });
}
function Rm(e, t) {
  return Wf(e, t);
}
const _1 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  YT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: O1,
        StyledEngineProvider: qT,
        ThemeContext: vc,
        css: yc,
        default: Rm,
        internal_processStyles: _1,
        keyframes: Oi,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function QT(e) {
  return Object.keys(e).length === 0;
}
function JT(e = null) {
  const t = b.useContext(vc);
  return !t || QT(t) ? e : t;
}
const ZT = fa();
function xc(e = ZT) {
  return JT(e);
}
function M1({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = xc(n);
  return r && (o = o[r] || o), eP({ theme: o, name: t, props: e });
}
const ek = ['sx'],
  tk = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : da;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function bc(e) {
  const { sx: t } = e,
    n = J(e, ek),
    { systemProps: r, otherProps: o } = tk(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == 'function'
      ? (i = (...s) => {
          const a = t(...s);
          return lr(a) ? E({}, r, a) : r;
        })
      : (i = E({}, r, t)),
    E({}, o, { sx: i })
  );
}
const nk = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: ki,
      extendSxProp: bc,
      unstable_createStyleFunctionSx: a1,
      unstable_defaultSxConfig: da,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function rk(e, t) {
  return E(
    {
      toolbar: {
        minHeight: 56,
        [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
        [e.up('sm')]: { minHeight: 64 },
      },
    },
    t
  );
}
var it = {},
  A1 = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(A1);
var I1 = A1.exports;
const ok = Gr(IC),
  ik = Gr(ZC);
var $1 = I1;
Object.defineProperty(it, '__esModule', { value: !0 });
var Bt = (it.alpha = N1);
it.blend = yk;
it.colorChannel = void 0;
var sk = (it.darken = _m);
it.decomposeColor = Pn;
it.emphasize = F1;
var ak = (it.getContrastRatio = pk);
it.getLuminance = ru;
it.hexToRgb = j1;
it.hslToRgb = L1;
var lk = (it.lighten = Mm);
it.private_safeAlpha = mk;
it.private_safeColorChannel = void 0;
it.private_safeDarken = hk;
it.private_safeEmphasize = vk;
it.private_safeLighten = gk;
it.recomposeColor = _i;
it.rgbToHex = fk;
var Kg = $1(ok),
  uk = $1(ik);
function Om(e, t = 0, n = 1) {
  return (0, uk.default)(e, t, n);
}
function j1(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? 'a' : ''}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(', ')})`
      : ''
  );
}
function ck(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Pn(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return Pn(j1(e));
  const t = e.indexOf('('),
    n = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
    throw new Error((0, Kg.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === 'color') {
    if (
      ((r = r.split(' ')),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(
        o
      ) === -1)
    )
      throw new Error((0, Kg.default)(10, o));
  } else r = r.split(',');
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
const D1 = (e) => {
  const t = Pn(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf('hsl') !== -1 && r !== 0 ? `${n}%` : n))
    .join(' ');
};
it.colorChannel = D1;
const dk = (e, t) => {
  try {
    return D1(e);
  } catch {
    return e;
  }
};
it.private_safeColorChannel = dk;
function _i(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf('rgb') !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf('hsl') !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf('color') !== -1
      ? (r = `${n} ${r.join(' ')}`)
      : (r = `${r.join(', ')}`),
    `${t}(${r})`
  );
}
function fk(e) {
  if (e.indexOf('#') === 0) return e;
  const { values: t } = Pn(e);
  return `#${t.map((n, r) => ck(r === 3 ? Math.round(255 * n) : n)).join('')}`;
}
function L1(e) {
  e = Pn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = 'rgb';
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === 'hsla' && ((a += 'a'), l.push(t[3])), _i({ type: a, values: l })
  );
}
function ru(e) {
  e = Pn(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? Pn(L1(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== 'color' && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function pk(e, t) {
  const n = ru(e),
    r = ru(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function N1(e, t) {
  return (
    (e = Pn(e)),
    (t = Om(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    _i(e)
  );
}
function mk(e, t, n) {
  try {
    return N1(e, t);
  } catch {
    return e;
  }
}
function _m(e, t) {
  if (((e = Pn(e)), (t = Om(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return _i(e);
}
function hk(e, t, n) {
  try {
    return _m(e, t);
  } catch {
    return e;
  }
}
function Mm(e, t) {
  if (((e = Pn(e)), (t = Om(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return _i(e);
}
function gk(e, t, n) {
  try {
    return Mm(e, t);
  } catch {
    return e;
  }
}
function F1(e, t = 0.15) {
  return ru(e) > 0.5 ? _m(e, t) : Mm(e, t);
}
function vk(e, t, n) {
  try {
    return F1(e, t);
  } catch {
    return e;
  }
}
function yk(e, t, n, r = 1) {
  const o = (l, u) =>
      Math.round((l ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    i = Pn(e),
    s = Pn(t),
    a = [
      o(i.values[0], s.values[0]),
      o(i.values[1], s.values[1]),
      o(i.values[2], s.values[2]),
    ];
  return _i({ type: 'rgb', values: a });
}
const qs = { black: '#000', white: '#fff' },
  xk = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  Oo = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  _o = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  Qi = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  Mo = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  Ao = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  Io = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  bk = ['mode', 'contrastThreshold', 'tonalOffset'],
  qg = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: qs.white, default: qs.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  gd = {
    text: {
      primary: qs.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: qs.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Xg(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
      ? (e.light = lk(e.main, o))
      : t === 'dark' && (e.dark = sk(e.main, i)));
}
function wk(e = 'light') {
  return e === 'dark'
    ? { main: Mo[200], light: Mo[50], dark: Mo[400] }
    : { main: Mo[700], light: Mo[400], dark: Mo[800] };
}
function Sk(e = 'light') {
  return e === 'dark'
    ? { main: Oo[200], light: Oo[50], dark: Oo[400] }
    : { main: Oo[500], light: Oo[300], dark: Oo[700] };
}
function Ek(e = 'light') {
  return e === 'dark'
    ? { main: _o[500], light: _o[300], dark: _o[700] }
    : { main: _o[700], light: _o[400], dark: _o[800] };
}
function Ck(e = 'light') {
  return e === 'dark'
    ? { main: Ao[400], light: Ao[300], dark: Ao[700] }
    : { main: Ao[700], light: Ao[500], dark: Ao[900] };
}
function Pk(e = 'light') {
  return e === 'dark'
    ? { main: Io[400], light: Io[300], dark: Io[700] }
    : { main: Io[800], light: Io[500], dark: Io[900] };
}
function Tk(e = 'light') {
  return e === 'dark'
    ? { main: Qi[400], light: Qi[300], dark: Qi[700] }
    : { main: '#ed6c02', light: Qi[500], dark: Qi[900] };
}
function kk(e) {
  const {
      mode: t = 'light',
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = J(e, bk),
    i = e.primary || wk(t),
    s = e.secondary || Sk(t),
    a = e.error || Ek(t),
    l = e.info || Ck(t),
    u = e.success || Pk(t),
    c = e.warning || Tk(t);
  function d(h) {
    return ak(h, gd.text.primary) >= n ? gd.text.primary : qg.text.primary;
  }
  const f = ({
      color: h,
      name: w,
      mainShade: p = 500,
      lightShade: g = 300,
      darkShade: y = 700,
    }) => {
      if (
        ((h = E({}, h)),
        !h.main && h[p] && (h.main = h[p]),
        !h.hasOwnProperty('main'))
      )
        throw new Error(yo(11, w ? ` (${w})` : '', p));
      if (typeof h.main != 'string')
        throw new Error(yo(12, w ? ` (${w})` : '', JSON.stringify(h.main)));
      return (
        Xg(h, 'light', g, r),
        Xg(h, 'dark', y, r),
        h.contrastText || (h.contrastText = d(h.main)),
        h
      );
    },
    v = { dark: gd, light: qg };
  return tn(
    E(
      {
        common: E({}, qs),
        mode: t,
        primary: f({ color: i, name: 'primary' }),
        secondary: f({
          color: s,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: f({ color: a, name: 'error' }),
        warning: f({ color: c, name: 'warning' }),
        info: f({ color: l, name: 'info' }),
        success: f({ color: u, name: 'success' }),
        grey: xk,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: f,
        tonalOffset: r,
      },
      v[t]
    ),
    o
  );
}
const Rk = [
  'fontFamily',
  'fontSize',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightMedium',
  'fontWeightBold',
  'htmlFontSize',
  'allVariants',
  'pxToRem',
];
function Ok(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Yg = { textTransform: 'uppercase' },
  Qg = '"Roboto", "Helvetica", "Arial", sans-serif';
function _k(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = Qg,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: d,
    } = n,
    f = J(n, Rk),
    v = o / 14,
    m = d || ((p) => `${(p / u) * v}rem`),
    h = (p, g, y, x, S) =>
      E(
        { fontFamily: r, fontWeight: p, fontSize: m(g), lineHeight: y },
        r === Qg ? { letterSpacing: `${Ok(x / g)}em` } : {},
        S,
        c
      ),
    w = {
      h1: h(i, 96, 1.167, -1.5),
      h2: h(i, 60, 1.2, -0.5),
      h3: h(s, 48, 1.167, 0),
      h4: h(s, 34, 1.235, 0.25),
      h5: h(s, 24, 1.334, 0),
      h6: h(a, 20, 1.6, 0.15),
      subtitle1: h(s, 16, 1.75, 0.15),
      subtitle2: h(a, 14, 1.57, 0.1),
      body1: h(s, 16, 1.5, 0.15),
      body2: h(s, 14, 1.43, 0.15),
      button: h(a, 14, 1.75, 0.4, Yg),
      caption: h(s, 12, 1.66, 0.4),
      overline: h(s, 12, 2.66, 1, Yg),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return tn(
    E(
      {
        htmlFontSize: u,
        pxToRem: m,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      w
    ),
    f,
    { clone: !1 }
  );
}
const Mk = 0.2,
  Ak = 0.14,
  Ik = 0.12;
function Ge(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Mk})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ak})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ik})`,
  ].join(',');
}
const $k = [
    'none',
    Ge(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Ge(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Ge(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Ge(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Ge(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Ge(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Ge(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Ge(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Ge(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Ge(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Ge(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Ge(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Ge(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Ge(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Ge(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Ge(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Ge(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Ge(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Ge(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Ge(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Ge(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Ge(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Ge(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Ge(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  jk = ['duration', 'easing', 'delay'],
  Dk = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  Lk = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Jg(e) {
  return `${Math.round(e)}ms`;
}
function Nk(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Fk(e) {
  const t = E({}, Dk, e.easing),
    n = E({}, Lk, e.duration);
  return E(
    {
      getAutoHeightDuration: Nk,
      create: (o = ['all'], i = {}) => {
        const {
          duration: s = n.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = i;
        return (
          J(i, jk),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof s == 'string' ? s : Jg(s)} ${a} ${
                  typeof l == 'string' ? l : Jg(l)
                }`
            )
            .join(',')
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const zk = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  Bk = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape',
  ];
function z1(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    s = J(e, Bk);
  if (e.vars) throw new Error(yo(18));
  const a = kk(r),
    l = fa(e);
  let u = tn(l, {
    mixins: rk(l.breakpoints, n),
    palette: a,
    shadows: $k.slice(),
    typography: _k(a, i),
    transitions: Fk(o),
    zIndex: E({}, zk),
  });
  return (
    (u = tn(u, s)),
    (u = t.reduce((c, d) => tn(c, d), u)),
    (u.unstable_sxConfig = E({}, da, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return ki({ sx: d, theme: this });
    }),
    u
  );
}
const wc = z1(),
  ma = '$$material';
function be({ props: e, name: t }) {
  return M1({ props: e, name: t, defaultTheme: wc, themeId: ma });
}
var ha = {},
  vd = { exports: {} },
  Zg;
function Wk() {
  return (
    Zg ||
      ((Zg = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var o = {},
            i = Object.keys(n),
            s,
            a;
          for (a = 0; a < i.length; a++)
            (s = i[a]), !(r.indexOf(s) >= 0) && (o[s] = n[s]);
          return o;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(vd)),
    vd.exports
  );
}
const B1 = Gr(YT),
  Vk = Gr(kC),
  Uk = Gr(FC),
  Hk = Gr(NC),
  Gk = Gr(KP),
  Kk = Gr(nk);
var Mi = I1;
Object.defineProperty(ha, '__esModule', { value: !0 });
var qk = (ha.default = a2);
ha.shouldForwardProp = wl;
ha.systemDefaultTheme = void 0;
var dn = Mi(R1()),
  Uf = Mi(Wk()),
  ev = t2(B1),
  Xk = Vk;
Mi(Uk);
Mi(Hk);
var Yk = Mi(Gk),
  Qk = Mi(Kk);
const Jk = ['ownerState'],
  Zk = ['variants'],
  e2 = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function W1(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (W1 = function (r) {
    return r ? n : t;
  })(e);
}
function t2(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var n = W1(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== 'default' && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function n2(e) {
  return Object.keys(e).length === 0;
}
function r2(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function wl(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const o2 = (ha.systemDefaultTheme = (0, Yk.default)()),
  i2 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ha({ defaultTheme: e, theme: t, themeId: n }) {
  return n2(t) ? e : t[n] || t;
}
function s2(e) {
  return e ? (t, n) => n[e] : null;
}
function Sl(e, t) {
  let { ownerState: n } = t,
    r = (0, Uf.default)(t, Jk);
  const o =
    typeof e == 'function' ? e((0, dn.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => Sl(i, (0, dn.default)({ ownerState: n }, r)));
  if (o && typeof o == 'object' && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = (0, Uf.default)(o, Zk);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == 'function'
          ? (u = l.props((0, dn.default)({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== l.props[c] &&
                r[c] !== l.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == 'function'
                ? l.style((0, dn.default)({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      a
    );
  }
  return o;
}
function a2(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = o2,
      rootShouldForwardProp: r = wl,
      slotShouldForwardProp: o = wl,
    } = e,
    i = (s) =>
      (0, Qk.default)(
        (0, dn.default)({}, s, {
          theme: Ha((0, dn.default)({}, s, { defaultTheme: n, themeId: t })),
        })
      );
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      (0, ev.internal_processStyles)(s, (S) =>
        S.filter((P) => !(P != null && P.__mui_systemSx))
      );
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: f = s2(i2(u)),
        } = a,
        v = (0, Uf.default)(a, e2),
        m = c !== void 0 ? c : (u && u !== 'Root' && u !== 'root') || !1,
        h = d || !1;
      let w,
        p = wl;
      u === 'Root' || u === 'root'
        ? (p = r)
        : u
        ? (p = o)
        : r2(s) && (p = void 0);
      const g = (0, ev.default)(
          s,
          (0, dn.default)({ shouldForwardProp: p, label: w }, v)
        ),
        y = (S) =>
          (typeof S == 'function' && S.__emotion_real !== S) ||
          (0, Xk.isPlainObject)(S)
            ? (P) =>
                Sl(
                  S,
                  (0, dn.default)({}, P, {
                    theme: Ha({ theme: P.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : S,
        x = (S, ...P) => {
          let T = y(S);
          const _ = P ? P.map(y) : [];
          l &&
            f &&
            _.push((D) => {
              const $ = Ha(
                (0, dn.default)({}, D, { defaultTheme: n, themeId: t })
              );
              if (
                !$.components ||
                !$.components[l] ||
                !$.components[l].styleOverrides
              )
                return null;
              const A = $.components[l].styleOverrides,
                z = {};
              return (
                Object.entries(A).forEach(([B, W]) => {
                  z[B] = Sl(W, (0, dn.default)({}, D, { theme: $ }));
                }),
                f(D, z)
              );
            }),
            l &&
              !m &&
              _.push((D) => {
                var $;
                const A = Ha(
                    (0, dn.default)({}, D, { defaultTheme: n, themeId: t })
                  ),
                  z =
                    A == null ||
                    ($ = A.components) == null ||
                    ($ = $[l]) == null
                      ? void 0
                      : $.variants;
                return Sl(
                  { variants: z },
                  (0, dn.default)({}, D, { theme: A })
                );
              }),
            h || _.push(i);
          const I = _.length - P.length;
          if (Array.isArray(S) && I > 0) {
            const D = new Array(I).fill('');
            (T = [...S, ...D]), (T.raw = [...S.raw, ...D]);
          }
          const k = g(T, ..._);
          return s.muiName && (k.muiName = s.muiName), k;
        };
      return g.withConfig && (x.withConfig = g.withConfig), x;
    }
  );
}
function V1(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const un = (e) => V1(e) && e !== 'classes',
  Q = qk({ themeId: ma, defaultTheme: wc, rootShouldForwardProp: un });
function l2(e) {
  return Ee('MuiSvgIcon', e);
}
ge('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge',
]);
const u2 = [
    'children',
    'className',
    'color',
    'component',
    'fontSize',
    'htmlColor',
    'inheritViewBox',
    'titleAccess',
    'viewBox',
  ],
  c2 = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ['root', t !== 'inherit' && `color${se(t)}`, `fontSize${se(n)}`],
      };
    return Se(o, l2, r);
  },
  d2 = Q('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== 'inherit' && t[`color${se(n.color)}`],
        t[`fontSize${se(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, s, a, l, u, c, d, f, v, m;
    return {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: t.hasSvgAsChild ? void 0 : 'currentColor',
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, 'fill', {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: 'inherit',
        small:
          ((i = e.typography) == null || (s = i.pxToRem) == null
            ? void 0
            : s.call(i, 20)) || '1.25rem',
        medium:
          ((a = e.typography) == null || (l = a.pxToRem) == null
            ? void 0
            : l.call(a, 24)) || '1.5rem',
        large:
          ((u = e.typography) == null || (c = u.pxToRem) == null
            ? void 0
            : c.call(u, 35)) || '2.1875rem',
      }[t.fontSize],
      color:
        (d =
          (f = (e.vars || e).palette) == null || (f = f[t.color]) == null
            ? void 0
            : f.main) != null
          ? d
          : {
              action:
                (v = (e.vars || e).palette) == null || (v = v.action) == null
                  ? void 0
                  : v.active,
              disabled:
                (m = (e.vars || e).palette) == null || (m = m.action) == null
                  ? void 0
                  : m.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  Hf = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiSvgIcon' }),
      {
        children: o,
        className: i,
        color: s = 'inherit',
        component: a = 'svg',
        fontSize: l = 'medium',
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: d,
        viewBox: f = '0 0 24 24',
      } = r,
      v = J(r, u2),
      m = b.isValidElement(o) && o.type === 'svg',
      h = E({}, r, {
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: f,
        hasSvgAsChild: m,
      }),
      w = {};
    c || (w.viewBox = f);
    const p = c2(h);
    return C.jsxs(
      d2,
      E(
        {
          as: a,
          className: ie(p.root, i),
          focusable: 'false',
          color: u,
          'aria-hidden': d ? void 0 : !0,
          role: d ? 'img' : void 0,
          ref: n,
        },
        w,
        v,
        m && o.props,
        {
          ownerState: h,
          children: [
            m ? o.props.children : o,
            d ? C.jsx('title', { children: d }) : null,
          ],
        }
      )
    );
  });
Hf.muiName = 'SvgIcon';
function Ai(e, t) {
  function n(r, o) {
    return C.jsx(
      Hf,
      E({ 'data-testid': `${t}Icon`, ref: o }, r, { children: e })
    );
  }
  return (n.muiName = Hf.muiName), b.memo(b.forwardRef(n));
}
const f2 = Ai(
    C.jsx('path', {
      d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z',
    }),
    'Email'
  ),
  p2 = Ai(
    [
      C.jsx(
        'path',
        {
          d: 'M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1m0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5z',
        },
        '0'
      ),
      C.jsx(
        'path',
        {
          d: 'M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99M13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83m4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24',
        },
        '1'
      ),
    ],
    'MenuBook'
  ),
  m2 = Ai(
    C.jsx('path', {
      d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4',
    }),
    'Person'
  ),
  h2 = Ai(
    C.jsx('path', {
      d: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z',
    }),
    'Phone'
  );
function g2({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = xc(n),
    o = typeof e == 'function' ? e((t && r[t]) || r) : e;
  return C.jsx(O1, { styles: o });
}
const v2 = ['className', 'component'];
function y2(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = 'MuiBox-root',
      generateClassName: o,
    } = e,
    i = Rm('div', {
      shouldForwardProp: (a) => a !== 'theme' && a !== 'sx' && a !== 'as',
    })(ki);
  return b.forwardRef(function (l, u) {
    const c = xc(n),
      d = bc(l),
      { className: f, component: v = 'div' } = d,
      m = J(d, v2);
    return C.jsx(
      i,
      E(
        {
          as: v,
          ref: u,
          className: ie(f, o ? o(r) : r),
          theme: (t && c[t]) || c,
        },
        m
      )
    );
  });
}
const x2 = ['ownerState'],
  b2 = ['variants'],
  w2 = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function S2(e) {
  return Object.keys(e).length === 0;
}
function E2(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function yd(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const C2 = fa(),
  P2 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ga({ defaultTheme: e, theme: t, themeId: n }) {
  return S2(t) ? e : t[n] || t;
}
function T2(e) {
  return e ? (t, n) => n[e] : null;
}
function El(e, t) {
  let { ownerState: n } = t,
    r = J(t, x2);
  const o = typeof e == 'function' ? e(E({ ownerState: n }, r)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => El(i, E({ ownerState: n }, r)));
  if (o && typeof o == 'object' && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = J(o, b2);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == 'function'
          ? (u = l.props(E({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== l.props[c] &&
                r[c] !== l.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == 'function'
                ? l.style(E({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      a
    );
  }
  return o;
}
function k2(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = C2,
      rootShouldForwardProp: r = yd,
      slotShouldForwardProp: o = yd,
    } = e,
    i = (s) =>
      ki(E({}, s, { theme: Ga(E({}, s, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      _1(s, (S) => S.filter((P) => !(P != null && P.__mui_systemSx)));
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: f = T2(P2(u)),
        } = a,
        v = J(a, w2),
        m = c !== void 0 ? c : (u && u !== 'Root' && u !== 'root') || !1,
        h = d || !1;
      let w,
        p = yd;
      u === 'Root' || u === 'root'
        ? (p = r)
        : u
        ? (p = o)
        : E2(s) && (p = void 0);
      const g = Rm(s, E({ shouldForwardProp: p, label: w }, v)),
        y = (S) =>
          (typeof S == 'function' && S.__emotion_real !== S) || lr(S)
            ? (P) =>
                El(
                  S,
                  E({}, P, {
                    theme: Ga({ theme: P.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : S,
        x = (S, ...P) => {
          let T = y(S);
          const _ = P ? P.map(y) : [];
          l &&
            f &&
            _.push((D) => {
              const $ = Ga(E({}, D, { defaultTheme: n, themeId: t }));
              if (
                !$.components ||
                !$.components[l] ||
                !$.components[l].styleOverrides
              )
                return null;
              const A = $.components[l].styleOverrides,
                z = {};
              return (
                Object.entries(A).forEach(([B, W]) => {
                  z[B] = El(W, E({}, D, { theme: $ }));
                }),
                f(D, z)
              );
            }),
            l &&
              !m &&
              _.push((D) => {
                var $;
                const A = Ga(E({}, D, { defaultTheme: n, themeId: t })),
                  z =
                    A == null ||
                    ($ = A.components) == null ||
                    ($ = $[l]) == null
                      ? void 0
                      : $.variants;
                return El({ variants: z }, E({}, D, { theme: A }));
              }),
            h || _.push(i);
          const I = _.length - P.length;
          if (Array.isArray(S) && I > 0) {
            const D = new Array(I).fill('');
            (T = [...S, ...D]), (T.raw = [...S.raw, ...D]);
          }
          const k = g(T, ..._);
          return s.muiName && (k.muiName = s.muiName), k;
        };
      return g.withConfig && (x.withConfig = g.withConfig), x;
    }
  );
}
const R2 = k2(),
  O2 = b.createContext(),
  U1 = () => {
    const e = b.useContext(O2);
    return e ?? !1;
  },
  _2 = [
    'className',
    'component',
    'disableGutters',
    'fixed',
    'maxWidth',
    'classes',
  ],
  M2 = fa(),
  A2 = R2('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`maxWidth${se(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ];
    },
  }),
  I2 = (e) => M1({ props: e, name: 'MuiContainer', defaultTheme: M2 }),
  $2 = (e, t) => {
    const n = (l) => Ee(t, l),
      { classes: r, fixed: o, disableGutters: i, maxWidth: s } = e,
      a = {
        root: [
          'root',
          s && `maxWidth${se(String(s))}`,
          o && 'fixed',
          i && 'disableGutters',
        ],
      };
    return Se(a, n, r);
  };
function j2(e = {}) {
  const {
      createStyledComponent: t = A2,
      useThemeProps: n = I2,
      componentName: r = 'MuiContainer',
    } = e,
    o = t(
      ({ theme: s, ownerState: a }) =>
        E(
          {
            width: '100%',
            marginLeft: 'auto',
            boxSizing: 'border-box',
            marginRight: 'auto',
            display: 'block',
          },
          !a.disableGutters && {
            paddingLeft: s.spacing(2),
            paddingRight: s.spacing(2),
            [s.breakpoints.up('sm')]: {
              paddingLeft: s.spacing(3),
              paddingRight: s.spacing(3),
            },
          }
        ),
      ({ theme: s, ownerState: a }) =>
        a.fixed &&
        Object.keys(s.breakpoints.values).reduce((l, u) => {
          const c = u,
            d = s.breakpoints.values[c];
          return (
            d !== 0 &&
              (l[s.breakpoints.up(c)] = {
                maxWidth: `${d}${s.breakpoints.unit}`,
              }),
            l
          );
        }, {}),
      ({ theme: s, ownerState: a }) =>
        E(
          {},
          a.maxWidth === 'xs' && {
            [s.breakpoints.up('xs')]: {
              maxWidth: Math.max(s.breakpoints.values.xs, 444),
            },
          },
          a.maxWidth &&
            a.maxWidth !== 'xs' && {
              [s.breakpoints.up(a.maxWidth)]: {
                maxWidth: `${s.breakpoints.values[a.maxWidth]}${
                  s.breakpoints.unit
                }`,
              },
            }
        )
    );
  return b.forwardRef(function (a, l) {
    const u = n(a),
      {
        className: c,
        component: d = 'div',
        disableGutters: f = !1,
        fixed: v = !1,
        maxWidth: m = 'lg',
      } = u,
      h = J(u, _2),
      w = E({}, u, { component: d, disableGutters: f, fixed: v, maxWidth: m }),
      p = $2(w, r);
    return C.jsx(
      o,
      E({ as: d, ownerState: w, className: ie(p.root, c), ref: l }, h)
    );
  });
}
function ga() {
  const e = xc(wc);
  return e[ma] || e;
}
const tv = (e) => {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    (t / 100).toFixed(2)
  );
};
function D2(e) {
  return be;
}
function Gf(e, t) {
  return (
    (Gf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Gf(e, t)
  );
}
function H1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Gf(e, t);
}
const nv = { disabled: !1 },
  ou = ae.createContext(null);
var L2 = function (t) {
    return t.scrollTop;
  },
  ds = 'unmounted',
  eo = 'exited',
  to = 'entering',
  Do = 'entered',
  Kf = 'exiting',
  nr = (function (e) {
    H1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? a
            ? ((l = eo), (i.appearStatus = to))
            : (l = Do)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = ds)
          : (l = eo),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === ds ? { status: eo } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== to && s !== Do && (i = to)
            : (s === to || s === Do) && (i = Kf);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null &&
            typeof o != 'number' &&
            ((i = o.exit),
            (s = o.enter),
            (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === to)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : Va.findDOMNode(this);
              s && L2(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === eo &&
            this.setState({ status: ds });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [Va.findDOMNode(this), a],
          u = l[0],
          c = l[1],
          d = this.getTimeouts(),
          f = a ? d.appear : d.enter;
        if ((!o && !s) || nv.disabled) {
          this.safeSetState({ status: Do }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: to }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: Do }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Va.findDOMNode(this);
        if (!i || nv.disabled) {
          this.safeSetState({ status: eo }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Kf }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: eo }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : Va.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === ds) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = J(i, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return ae.createElement(
          ou.Provider,
          { value: null },
          typeof s == 'function'
            ? s(o, a)
            : ae.cloneElement(ae.Children.only(s), a)
        );
      }),
      t
    );
  })(ae.Component);
nr.contextType = ou;
nr.propTypes = {};
function $o() {}
nr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: $o,
  onEntering: $o,
  onEntered: $o,
  onExit: $o,
  onExiting: $o,
  onExited: $o,
};
nr.UNMOUNTED = ds;
nr.EXITED = eo;
nr.ENTERING = to;
nr.ENTERED = Do;
nr.EXITING = Kf;
function N2(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Am(e, t) {
  var n = function (i) {
      return t && b.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      b.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function F2(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
  return a;
}
function so(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function z2(e, t) {
  return Am(e.children, function (n) {
    return b.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: so(n, 'appear', e),
      enter: so(n, 'enter', e),
      exit: so(n, 'exit', e),
    });
  });
}
function B2(e, t, n) {
  var r = Am(e.children),
    o = F2(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (b.isValidElement(s)) {
        var a = i in t,
          l = i in r,
          u = t[i],
          c = b.isValidElement(u) && !u.props.in;
        l && (!a || c)
          ? (o[i] = b.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: so(s, 'exit', e),
              enter: so(s, 'enter', e),
            }))
          : !l && a && !c
          ? (o[i] = b.cloneElement(s, { in: !1 }))
          : l &&
            a &&
            b.isValidElement(u) &&
            (o[i] = b.cloneElement(s, {
              onExited: n.bind(null, s),
              in: u.props.in,
              exit: so(s, 'exit', e),
              enter: so(s, 'enter', e),
            }));
      }
    }),
    o
  );
}
var W2 =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  V2 = {
    component: 'div',
    childFactory: function (t) {
      return t;
    },
  },
  Im = (function (e) {
    H1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(N2(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? z2(o, a) : B2(o, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var s = Am(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = E({}, a.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = J(o, ['component', 'childFactory']),
          l = this.state.contextValue,
          u = W2(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? ae.createElement(ou.Provider, { value: l }, u)
            : ae.createElement(
                ou.Provider,
                { value: l },
                ae.createElement(i, a, u)
              )
        );
      }),
      t
    );
  })(ae.Component);
Im.propTypes = {};
Im.defaultProps = V2;
const G1 = (e) => e.scrollTop;
function iu(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: s = {} } = e;
  return {
    duration:
      (n = s.transitionDuration) != null
        ? n
        : typeof o == 'number'
        ? o
        : o[t.mode] || 0,
    easing:
      (r = s.transitionTimingFunction) != null
        ? r
        : typeof i == 'object'
        ? i[t.mode]
        : i,
    delay: s.transitionDelay,
  };
}
function U2(e) {
  return Ee('MuiPaper', e);
}
ge('MuiPaper', [
  'root',
  'rounded',
  'outlined',
  'elevation',
  'elevation0',
  'elevation1',
  'elevation2',
  'elevation3',
  'elevation4',
  'elevation5',
  'elevation6',
  'elevation7',
  'elevation8',
  'elevation9',
  'elevation10',
  'elevation11',
  'elevation12',
  'elevation13',
  'elevation14',
  'elevation15',
  'elevation16',
  'elevation17',
  'elevation18',
  'elevation19',
  'elevation20',
  'elevation21',
  'elevation22',
  'elevation23',
  'elevation24',
]);
const H2 = ['className', 'component', 'elevation', 'square', 'variant'],
  G2 = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          'root',
          r,
          !t && 'rounded',
          r === 'elevation' && `elevation${n}`,
        ],
      };
    return Se(i, U2, o);
  },
  K2 = Q('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === 'elevation' && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return E(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create('box-shadow'),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === 'outlined' && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === 'elevation' &&
        E(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === 'dark' && {
              backgroundImage: `linear-gradient(${Bt(
                '#fff',
                tv(t.elevation)
              )}, ${Bt('#fff', tv(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  Sc = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiPaper' }),
      {
        className: o,
        component: i = 'div',
        elevation: s = 1,
        square: a = !1,
        variant: l = 'elevation',
      } = r,
      u = J(r, H2),
      c = E({}, r, { component: i, elevation: s, square: a, variant: l }),
      d = G2(c);
    return C.jsx(
      K2,
      E({ as: i, ownerState: c, className: ie(d.root, o), ref: n }, u)
    );
  });
function su(e) {
  return typeof e == 'string';
}
function Qo(e, t, n) {
  return e === void 0 || su(e)
    ? t
    : E({}, t, { ownerState: E({}, t.ownerState, n) });
}
const q2 = { disableDefaultClasses: !1 },
  X2 = b.createContext(q2);
function Y2(e) {
  const { disableDefaultClasses: t } = b.useContext(X2);
  return (n) => (t ? '' : e(n));
}
function K1(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == 'function' && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function q1(e, t, n) {
  return typeof e == 'function' ? e(t, n) : e;
}
function rv(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == 'function'))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function X1(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const v = ie(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      m = E(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      h = E({}, n, o, r);
    return (
      v.length > 0 && (h.className = v),
      Object.keys(m).length > 0 && (h.style = m),
      { props: h, internalRef: void 0 }
    );
  }
  const s = K1(E({}, o, r)),
    a = rv(r),
    l = rv(o),
    u = t(s),
    c = ie(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    d = E(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    f = E({}, u, n, l, a);
  return (
    c.length > 0 && (f.className = c),
    Object.keys(d).length > 0 && (f.style = d),
    { props: f, internalRef: u.ref }
  );
}
const Q2 = [
  'elementType',
  'externalSlotProps',
  'ownerState',
  'skipResolvingSlotProps',
];
function bo(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: i = !1,
    } = e,
    s = J(e, Q2),
    a = i ? {} : q1(r, o),
    { props: l, internalRef: u } = X1(E({}, s, { externalSlotProps: a })),
    c = pt(
      u,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return Qo(n, E({}, l, { ref: c }), o);
}
const J2 = [
    'className',
    'elementType',
    'ownerState',
    'externalForwardedProps',
    'getSlotOwnerState',
    'internalForwardedProps',
  ],
  Z2 = ['component', 'slots', 'slotProps'],
  eR = ['component'];
function tR(e, t) {
  const {
      className: n,
      elementType: r,
      ownerState: o,
      externalForwardedProps: i,
      getSlotOwnerState: s,
      internalForwardedProps: a,
    } = t,
    l = J(t, J2),
    {
      component: u,
      slots: c = { [e]: void 0 },
      slotProps: d = { [e]: void 0 },
    } = i;
  J(i, Z2);
  const f = c[e] || r,
    v = q1(d[e], o),
    m = X1(
      E({ className: n }, l, {
        externalForwardedProps: void 0,
        externalSlotProps: v,
      })
    ),
    {
      props: { component: h },
      internalRef: w,
    } = m,
    p = J(m.props, eR),
    g = pt(w, v == null ? void 0 : v.ref, t.ref),
    y = s ? s(p) : {},
    x = E({}, o, y),
    S = h,
    P = Qo(
      f,
      E({}, e === 'root', !c[e] && a, p, S && { as: S }, { ref: g }),
      x
    );
  return (
    Object.keys(y).forEach((T) => {
      delete P[T];
    }),
    [f, P]
  );
}
function nR(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: u,
    } = e,
    [c, d] = b.useState(!1),
    f = ie(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    v = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    m = ie(n.child, c && n.childLeaving, r && n.childPulsate);
  return (
    !a && !c && d(!0),
    b.useEffect(() => {
      if (!a && l != null) {
        const h = setTimeout(l, u);
        return () => {
          clearTimeout(h);
        };
      }
    }, [l, a, u]),
    C.jsx('span', {
      className: f,
      style: v,
      children: C.jsx('span', { className: m }),
    })
  );
}
const fn = ge('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  rR = ['center', 'classes', 'className'];
let Ec = (e) => e,
  ov,
  iv,
  sv,
  av;
const qf = 550,
  oR = 80,
  iR = Oi(
    ov ||
      (ov = Ec`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  sR = Oi(
    iv ||
      (iv = Ec`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  aR = Oi(
    sv ||
      (sv = Ec`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  lR = Q('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
  }),
  uR = Q(nR, { name: 'MuiTouchRipple', slot: 'Ripple' })(
    av ||
      (av = Ec`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    fn.rippleVisible,
    iR,
    qf,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    fn.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    fn.child,
    fn.childLeaving,
    sR,
    qf,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    fn.childPulsate,
    aR,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  cR = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiTouchRipple' }),
      { center: o = !1, classes: i = {}, className: s } = r,
      a = J(r, rR),
      [l, u] = b.useState([]),
      c = b.useRef(0),
      d = b.useRef(null);
    b.useEffect(() => {
      d.current && (d.current(), (d.current = null));
    }, [l]);
    const f = b.useRef(!1),
      v = Yo(),
      m = b.useRef(null),
      h = b.useRef(null),
      w = b.useCallback(
        (x) => {
          const {
            pulsate: S,
            rippleX: P,
            rippleY: T,
            rippleSize: _,
            cb: I,
          } = x;
          u((k) => [
            ...k,
            C.jsx(
              uR,
              {
                classes: {
                  ripple: ie(i.ripple, fn.ripple),
                  rippleVisible: ie(i.rippleVisible, fn.rippleVisible),
                  ripplePulsate: ie(i.ripplePulsate, fn.ripplePulsate),
                  child: ie(i.child, fn.child),
                  childLeaving: ie(i.childLeaving, fn.childLeaving),
                  childPulsate: ie(i.childPulsate, fn.childPulsate),
                },
                timeout: qf,
                pulsate: S,
                rippleX: P,
                rippleY: T,
                rippleSize: _,
              },
              c.current
            ),
          ]),
            (c.current += 1),
            (d.current = I);
        },
        [i]
      ),
      p = b.useCallback(
        (x = {}, S = {}, P = () => {}) => {
          const {
            pulsate: T = !1,
            center: _ = o || S.pulsate,
            fakeElement: I = !1,
          } = S;
          if ((x == null ? void 0 : x.type) === 'mousedown' && f.current) {
            f.current = !1;
            return;
          }
          (x == null ? void 0 : x.type) === 'touchstart' && (f.current = !0);
          const k = I ? null : h.current,
            D = k
              ? k.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let $, A, z;
          if (
            _ ||
            x === void 0 ||
            (x.clientX === 0 && x.clientY === 0) ||
            (!x.clientX && !x.touches)
          )
            ($ = Math.round(D.width / 2)), (A = Math.round(D.height / 2));
          else {
            const { clientX: B, clientY: W } =
              x.touches && x.touches.length > 0 ? x.touches[0] : x;
            ($ = Math.round(B - D.left)), (A = Math.round(W - D.top));
          }
          if (_)
            (z = Math.sqrt((2 * D.width ** 2 + D.height ** 2) / 3)),
              z % 2 === 0 && (z += 1);
          else {
            const B =
                Math.max(Math.abs((k ? k.clientWidth : 0) - $), $) * 2 + 2,
              W = Math.max(Math.abs((k ? k.clientHeight : 0) - A), A) * 2 + 2;
            z = Math.sqrt(B ** 2 + W ** 2);
          }
          x != null && x.touches
            ? m.current === null &&
              ((m.current = () => {
                w({ pulsate: T, rippleX: $, rippleY: A, rippleSize: z, cb: P });
              }),
              v.start(oR, () => {
                m.current && (m.current(), (m.current = null));
              }))
            : w({ pulsate: T, rippleX: $, rippleY: A, rippleSize: z, cb: P });
        },
        [o, w, v]
      ),
      g = b.useCallback(() => {
        p({}, { pulsate: !0 });
      }, [p]),
      y = b.useCallback(
        (x, S) => {
          if (
            (v.clear(),
            (x == null ? void 0 : x.type) === 'touchend' && m.current)
          ) {
            m.current(),
              (m.current = null),
              v.start(0, () => {
                y(x, S);
              });
            return;
          }
          (m.current = null),
            u((P) => (P.length > 0 ? P.slice(1) : P)),
            (d.current = S);
        },
        [v]
      );
    return (
      b.useImperativeHandle(n, () => ({ pulsate: g, start: p, stop: y }), [
        g,
        p,
        y,
      ]),
      C.jsx(
        lR,
        E({ className: ie(fn.root, i.root, s), ref: h }, a, {
          children: C.jsx(Im, { component: null, exit: !0, children: l }),
        })
      )
    );
  });
function dR(e) {
  return Ee('MuiButtonBase', e);
}
const fR = ge('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  pR = [
    'action',
    'centerRipple',
    'children',
    'className',
    'component',
    'disabled',
    'disableRipple',
    'disableTouchRipple',
    'focusRipple',
    'focusVisibleClassName',
    'LinkComponent',
    'onBlur',
    'onClick',
    'onContextMenu',
    'onDragLeave',
    'onFocus',
    'onFocusVisible',
    'onKeyDown',
    'onKeyUp',
    'onMouseDown',
    'onMouseLeave',
    'onMouseUp',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'tabIndex',
    'TouchRippleProps',
    'touchRippleRef',
    'type',
  ],
  mR = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      s = Se({ root: ['root', t && 'disabled', n && 'focusVisible'] }, dR, o);
    return n && r && (s.root += ` ${r}`), s;
  },
  hR = Q('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${fR.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  $m = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiButtonBase' }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = 'button',
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: d = !1,
        focusRipple: f = !1,
        LinkComponent: v = 'a',
        onBlur: m,
        onClick: h,
        onContextMenu: w,
        onDragLeave: p,
        onFocus: g,
        onFocusVisible: y,
        onKeyDown: x,
        onKeyUp: S,
        onMouseDown: P,
        onMouseLeave: T,
        onMouseUp: _,
        onTouchEnd: I,
        onTouchMove: k,
        onTouchStart: D,
        tabIndex: $ = 0,
        TouchRippleProps: A,
        touchRippleRef: z,
        type: B,
      } = r,
      W = J(r, pR),
      M = b.useRef(null),
      O = b.useRef(null),
      N = pt(O, z),
      { isFocusVisibleRef: H, onFocus: oe, onBlur: ee, ref: he } = Zx(),
      [te, de] = b.useState(!1);
    u && te && de(!1),
      b.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            de(!0), M.current.focus();
          },
        }),
        []
      );
    const [ue, Re] = b.useState(!1);
    b.useEffect(() => {
      Re(!0);
    }, []);
    const we = ue && !c && !u;
    b.useEffect(() => {
      te && f && !c && ue && O.current.pulsate();
    }, [c, f, te, ue]);
    function ve(re, Ie, xt = d) {
      return Or(
        (bt) => (Ie && Ie(bt), !xt && O.current && O.current[re](bt), !0)
      );
    }
    const Ne = ve('start', P),
      fe = ve('stop', w),
      Pe = ve('stop', p),
      pe = ve('stop', _),
      ye = ve('stop', (re) => {
        te && re.preventDefault(), T && T(re);
      }),
      xe = ve('start', D),
      ht = ve('stop', I),
      Ve = ve('stop', k),
      R = ve(
        'stop',
        (re) => {
          ee(re), H.current === !1 && de(!1), m && m(re);
        },
        !1
      ),
      j = Or((re) => {
        M.current || (M.current = re.currentTarget),
          oe(re),
          H.current === !0 && (de(!0), y && y(re)),
          g && g(re);
      }),
      F = () => {
        const re = M.current;
        return l && l !== 'button' && !(re.tagName === 'A' && re.href);
      },
      G = b.useRef(!1),
      q = Or((re) => {
        f &&
          !G.current &&
          te &&
          O.current &&
          re.key === ' ' &&
          ((G.current = !0),
          O.current.stop(re, () => {
            O.current.start(re);
          })),
          re.target === re.currentTarget &&
            F() &&
            re.key === ' ' &&
            re.preventDefault(),
          x && x(re),
          re.target === re.currentTarget &&
            F() &&
            re.key === 'Enter' &&
            !u &&
            (re.preventDefault(), h && h(re));
      }),
      U = Or((re) => {
        f &&
          re.key === ' ' &&
          O.current &&
          te &&
          !re.defaultPrevented &&
          ((G.current = !1),
          O.current.stop(re, () => {
            O.current.pulsate(re);
          })),
          S && S(re),
          h &&
            re.target === re.currentTarget &&
            F() &&
            re.key === ' ' &&
            !re.defaultPrevented &&
            h(re);
      });
    let L = l;
    L === 'button' && (W.href || W.to) && (L = v);
    const K = {};
    L === 'button'
      ? ((K.type = B === void 0 ? 'button' : B), (K.disabled = u))
      : (!W.href && !W.to && (K.role = 'button'),
        u && (K['aria-disabled'] = u));
    const le = pt(n, he, M),
      me = E({}, r, {
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: d,
        focusRipple: f,
        tabIndex: $,
        focusVisible: te,
      }),
      ce = mR(me);
    return C.jsxs(
      hR,
      E(
        {
          as: L,
          className: ie(ce.root, a),
          ownerState: me,
          onBlur: R,
          onClick: h,
          onContextMenu: fe,
          onFocus: j,
          onKeyDown: q,
          onKeyUp: U,
          onMouseDown: Ne,
          onMouseLeave: ye,
          onMouseUp: pe,
          onDragLeave: Pe,
          onTouchEnd: ht,
          onTouchMove: Ve,
          onTouchStart: xe,
          ref: le,
          tabIndex: u ? -1 : $,
          type: B,
        },
        K,
        W,
        { children: [s, we ? C.jsx(cR, E({ ref: N, center: i }, A)) : null] }
      )
    );
  });
function gR(e) {
  return Ee('MuiIconButton', e);
}
const vR = ge('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
  ]),
  yR = [
    'edge',
    'children',
    'className',
    'color',
    'disabled',
    'disableFocusRipple',
    'size',
  ],
  xR = (e) => {
    const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
      s = {
        root: [
          'root',
          n && 'disabled',
          r !== 'default' && `color${se(r)}`,
          o && `edge${se(o)}`,
          `size${se(i)}`,
        ],
      };
    return Se(s, gR, t);
  },
  bR = Q($m, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== 'default' && t[`color${se(n.color)}`],
        n.edge && t[`edge${se(n.edge)}`],
        t[`size${se(n.size)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      E(
        {
          textAlign: 'center',
          flex: '0 0 auto',
          fontSize: e.typography.pxToRem(24),
          padding: 8,
          borderRadius: '50%',
          overflow: 'visible',
          color: (e.vars || e).palette.action.active,
          transition: e.transitions.create('background-color', {
            duration: e.transitions.duration.shortest,
          }),
        },
        !t.disableRipple && {
          '&:hover': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : Bt(e.palette.action.active, e.palette.action.hoverOpacity),
            '@media (hover: none)': { backgroundColor: 'transparent' },
          },
        },
        t.edge === 'start' && { marginLeft: t.size === 'small' ? -3 : -12 },
        t.edge === 'end' && { marginRight: t.size === 'small' ? -3 : -12 }
      ),
    ({ theme: e, ownerState: t }) => {
      var n;
      const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
      return E(
        {},
        t.color === 'inherit' && { color: 'inherit' },
        t.color !== 'inherit' &&
          t.color !== 'default' &&
          E(
            { color: r == null ? void 0 : r.main },
            !t.disableRipple && {
              '&:hover': E(
                {},
                r && {
                  backgroundColor: e.vars
                    ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : Bt(r.main, e.palette.action.hoverOpacity),
                },
                { '@media (hover: none)': { backgroundColor: 'transparent' } }
              ),
            }
          ),
        t.size === 'small' && {
          padding: 5,
          fontSize: e.typography.pxToRem(18),
        },
        t.size === 'large' && {
          padding: 12,
          fontSize: e.typography.pxToRem(28),
        },
        {
          [`&.${vR.disabled}`]: {
            backgroundColor: 'transparent',
            color: (e.vars || e).palette.action.disabled,
          },
        }
      );
    }
  ),
  lv = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiIconButton' }),
      {
        edge: o = !1,
        children: i,
        className: s,
        color: a = 'default',
        disabled: l = !1,
        disableFocusRipple: u = !1,
        size: c = 'medium',
      } = r,
      d = J(r, yR),
      f = E({}, r, {
        edge: o,
        color: a,
        disabled: l,
        disableFocusRipple: u,
        size: c,
      }),
      v = xR(f);
    return C.jsx(
      bR,
      E(
        {
          className: ie(v.root, s),
          centerRipple: !0,
          focusRipple: !u,
          disabled: l,
          ref: n,
        },
        d,
        { ownerState: f, children: i }
      )
    );
  });
function wR(e) {
  return Ee('MuiTypography', e);
}
ge('MuiTypography', [
  'root',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'inherit',
  'button',
  'caption',
  'overline',
  'alignLeft',
  'alignRight',
  'alignCenter',
  'alignJustify',
  'noWrap',
  'gutterBottom',
  'paragraph',
]);
const SR = [
    'align',
    'className',
    'component',
    'gutterBottom',
    'noWrap',
    'paragraph',
    'variant',
    'variantMapping',
  ],
  ER = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          'root',
          i,
          e.align !== 'inherit' && `align${se(t)}`,
          n && 'gutterBottom',
          r && 'noWrap',
          o && 'paragraph',
        ],
      };
    return Se(a, wR, s);
  },
  CR = Q('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== 'inherit' && t[`align${se(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    E(
      { margin: 0 },
      t.variant === 'inherit' && { font: 'inherit' },
      t.variant !== 'inherit' && e.typography[t.variant],
      t.align !== 'inherit' && { textAlign: t.align },
      t.noWrap && {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      t.gutterBottom && { marginBottom: '0.35em' },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  uv = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p',
  },
  PR = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main',
  },
  TR = (e) => PR[e] || e,
  et = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiTypography' }),
      o = TR(r.color),
      i = bc(E({}, r, { color: o })),
      {
        align: s = 'inherit',
        className: a,
        component: l,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: d = !1,
        variant: f = 'body1',
        variantMapping: v = uv,
      } = i,
      m = J(i, SR),
      h = E({}, i, {
        align: s,
        color: o,
        className: a,
        component: l,
        gutterBottom: u,
        noWrap: c,
        paragraph: d,
        variant: f,
        variantMapping: v,
      }),
      w = l || (d ? 'p' : v[f] || uv[f]) || 'span',
      p = ER(h);
    return C.jsx(
      CR,
      E({ as: w, ref: n, ownerState: h, className: ie(p.root, a) }, m)
    );
  });
function kR(e) {
  return Ee('MuiAppBar', e);
}
ge('MuiAppBar', [
  'root',
  'positionFixed',
  'positionAbsolute',
  'positionSticky',
  'positionStatic',
  'positionRelative',
  'colorDefault',
  'colorPrimary',
  'colorSecondary',
  'colorInherit',
  'colorTransparent',
  'colorError',
  'colorInfo',
  'colorSuccess',
  'colorWarning',
]);
const RR = ['className', 'color', 'enableColorOnDark', 'position'],
  OR = (e) => {
    const { color: t, position: n, classes: r } = e,
      o = { root: ['root', `color${se(t)}`, `position${se(n)}`] };
    return Se(o, kR, r);
  },
  Ka = (e, t) => (e ? `${e == null ? void 0 : e.replace(')', '')}, ${t})` : t),
  _R = Q(Sc, {
    name: 'MuiAppBar',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`position${se(n.position)}`], t[`color${se(n.color)}`]];
    },
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === 'light' ? e.palette.grey[100] : e.palette.grey[900];
    return E(
      {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        boxSizing: 'border-box',
        flexShrink: 0,
      },
      t.position === 'fixed' && {
        position: 'fixed',
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: 'auto',
        right: 0,
        '@media print': { position: 'absolute' },
      },
      t.position === 'absolute' && {
        position: 'absolute',
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: 'auto',
        right: 0,
      },
      t.position === 'sticky' && {
        position: 'sticky',
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: 'auto',
        right: 0,
      },
      t.position === 'static' && { position: 'static' },
      t.position === 'relative' && { position: 'relative' },
      !e.vars &&
        E(
          {},
          t.color === 'default' && {
            backgroundColor: n,
            color: e.palette.getContrastText(n),
          },
          t.color &&
            t.color !== 'default' &&
            t.color !== 'inherit' &&
            t.color !== 'transparent' && {
              backgroundColor: e.palette[t.color].main,
              color: e.palette[t.color].contrastText,
            },
          t.color === 'inherit' && { color: 'inherit' },
          e.palette.mode === 'dark' &&
            !t.enableColorOnDark && { backgroundColor: null, color: null },
          t.color === 'transparent' &&
            E(
              { backgroundColor: 'transparent', color: 'inherit' },
              e.palette.mode === 'dark' && { backgroundImage: 'none' }
            )
        ),
      e.vars &&
        E(
          {},
          t.color === 'default' && {
            '--AppBar-background': t.enableColorOnDark
              ? e.vars.palette.AppBar.defaultBg
              : Ka(
                  e.vars.palette.AppBar.darkBg,
                  e.vars.palette.AppBar.defaultBg
                ),
            '--AppBar-color': t.enableColorOnDark
              ? e.vars.palette.text.primary
              : Ka(
                  e.vars.palette.AppBar.darkColor,
                  e.vars.palette.text.primary
                ),
          },
          t.color &&
            !t.color.match(/^(default|inherit|transparent)$/) && {
              '--AppBar-background': t.enableColorOnDark
                ? e.vars.palette[t.color].main
                : Ka(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette[t.color].main
                  ),
              '--AppBar-color': t.enableColorOnDark
                ? e.vars.palette[t.color].contrastText
                : Ka(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette[t.color].contrastText
                  ),
            },
          {
            backgroundColor: 'var(--AppBar-background)',
            color: t.color === 'inherit' ? 'inherit' : 'var(--AppBar-color)',
          },
          t.color === 'transparent' && {
            backgroundImage: 'none',
            backgroundColor: 'transparent',
            color: 'inherit',
          }
        )
    );
  }),
  MR = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiAppBar' }),
      {
        className: o,
        color: i = 'primary',
        enableColorOnDark: s = !1,
        position: a = 'fixed',
      } = r,
      l = J(r, RR),
      u = E({}, r, { color: i, position: a, enableColorOnDark: s }),
      c = OR(u);
    return C.jsx(
      _R,
      E(
        {
          square: !0,
          component: 'header',
          ownerState: u,
          elevation: 4,
          className: ie(c.root, o, a === 'fixed' && 'mui-fixed'),
          ref: n,
        },
        l
      )
    );
  }),
  Y1 = 'base';
function AR(e) {
  return `${Y1}--${e}`;
}
function IR(e, t) {
  return `${Y1}-${e}-${t}`;
}
function Q1(e, t) {
  const n = n1[t];
  return n ? AR(n) : IR(e, t);
}
function $R(e, t) {
  const n = {};
  return (
    t.forEach((r) => {
      n[r] = Q1(e, r);
    }),
    n
  );
}
const jR = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
].join(',');
function DR(e) {
  const t = parseInt(e.getAttribute('tabindex') || '', 10);
  return Number.isNaN(t)
    ? e.contentEditable === 'true' ||
      ((e.nodeName === 'AUDIO' ||
        e.nodeName === 'VIDEO' ||
        e.nodeName === 'DETAILS') &&
        e.getAttribute('tabindex') === null)
      ? 0
      : e.tabIndex
    : t;
}
function LR(e) {
  if (e.tagName !== 'INPUT' || e.type !== 'radio' || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function NR(e) {
  return !(
    e.disabled ||
    (e.tagName === 'INPUT' && e.type === 'hidden') ||
    LR(e)
  );
}
function FR(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(jR)).forEach((r, o) => {
      const i = DR(r);
      i === -1 ||
        !NR(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function zR() {
  return !0;
}
function BR(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = FR,
      isEnabled: s = zR,
      open: a,
    } = e,
    l = b.useRef(!1),
    u = b.useRef(null),
    c = b.useRef(null),
    d = b.useRef(null),
    f = b.useRef(null),
    v = b.useRef(!1),
    m = b.useRef(null),
    h = pt(t.ref, m),
    w = b.useRef(null);
  b.useEffect(() => {
    !a || !m.current || (v.current = !n);
  }, [n, a]),
    b.useEffect(() => {
      if (!a || !m.current) return;
      const y = jt(m.current);
      return (
        m.current.contains(y.activeElement) ||
          (m.current.hasAttribute('tabIndex') ||
            m.current.setAttribute('tabIndex', '-1'),
          v.current && m.current.focus()),
        () => {
          o ||
            (d.current &&
              d.current.focus &&
              ((l.current = !0), d.current.focus()),
            (d.current = null));
        }
      );
    }, [a]),
    b.useEffect(() => {
      if (!a || !m.current) return;
      const y = jt(m.current),
        x = (T) => {
          (w.current = T),
            !(r || !s() || T.key !== 'Tab') &&
              y.activeElement === m.current &&
              T.shiftKey &&
              ((l.current = !0), c.current && c.current.focus());
        },
        S = () => {
          const T = m.current;
          if (T === null) return;
          if (!y.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            T.contains(y.activeElement) ||
            (r &&
              y.activeElement !== u.current &&
              y.activeElement !== c.current)
          )
            return;
          if (y.activeElement !== f.current) f.current = null;
          else if (f.current !== null) return;
          if (!v.current) return;
          let _ = [];
          if (
            ((y.activeElement === u.current || y.activeElement === c.current) &&
              (_ = i(m.current)),
            _.length > 0)
          ) {
            var I, k;
            const D = !!(
                (I = w.current) != null &&
                I.shiftKey &&
                ((k = w.current) == null ? void 0 : k.key) === 'Tab'
              ),
              $ = _[0],
              A = _[_.length - 1];
            typeof $ != 'string' &&
              typeof A != 'string' &&
              (D ? A.focus() : $.focus());
          } else T.focus();
        };
      y.addEventListener('focusin', S), y.addEventListener('keydown', x, !0);
      const P = setInterval(() => {
        y.activeElement && y.activeElement.tagName === 'BODY' && S();
      }, 50);
      return () => {
        clearInterval(P),
          y.removeEventListener('focusin', S),
          y.removeEventListener('keydown', x, !0);
      };
    }, [n, r, o, s, a, i]);
  const p = (y) => {
      d.current === null && (d.current = y.relatedTarget),
        (v.current = !0),
        (f.current = y.target);
      const x = t.props.onFocus;
      x && x(y);
    },
    g = (y) => {
      d.current === null && (d.current = y.relatedTarget), (v.current = !0);
    };
  return C.jsxs(b.Fragment, {
    children: [
      C.jsx('div', {
        tabIndex: a ? 0 : -1,
        onFocus: g,
        ref: u,
        'data-testid': 'sentinelStart',
      }),
      b.cloneElement(t, { ref: h, onFocus: p }),
      C.jsx('div', {
        tabIndex: a ? 0 : -1,
        onFocus: g,
        ref: c,
        'data-testid': 'sentinelEnd',
      }),
    ],
  });
}
function WR(e) {
  return typeof e == 'function' ? e() : e;
}
const J1 = b.forwardRef(function (t, n) {
  const { children: r, container: o, disablePortal: i = !1 } = t,
    [s, a] = b.useState(null),
    l = pt(b.isValidElement(r) ? r.ref : null, n);
  if (
    (er(() => {
      i || a(WR(o) || document.body);
    }, [o, i]),
    er(() => {
      if (s && !i)
        return (
          Lf(n, s),
          () => {
            Lf(n, null);
          }
        );
    }, [n, s, i]),
    i)
  ) {
    if (b.isValidElement(r)) {
      const u = { ref: l };
      return b.cloneElement(r, u);
    }
    return C.jsx(b.Fragment, { children: r });
  }
  return C.jsx(b.Fragment, { children: s && pm.createPortal(r, s) });
});
function VR(e) {
  const t = jt(e);
  return t.body === e
    ? xo(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Ss(e, t) {
  t ? e.setAttribute('aria-hidden', 'true') : e.removeAttribute('aria-hidden');
}
function cv(e) {
  return parseInt(xo(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function UR(e) {
  const n =
      [
        'TEMPLATE',
        'SCRIPT',
        'STYLE',
        'LINK',
        'MAP',
        'META',
        'NOSCRIPT',
        'PICTURE',
        'COL',
        'COLGROUP',
        'PARAM',
        'SLOT',
        'SOURCE',
        'TRACK',
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === 'INPUT' && e.getAttribute('type') === 'hidden';
  return n || r;
}
function dv(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1,
      l = !UR(s);
    a && l && Ss(s, o);
  });
}
function xd(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function HR(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (VR(r)) {
      const s = e1(jt(r));
      n.push({ value: r.style.paddingRight, property: 'padding-right', el: r }),
        (r.style.paddingRight = `${cv(r) + s}px`);
      const a = jt(r).querySelectorAll('.mui-fixed');
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: 'padding-right',
          el: l,
        }),
          (l.style.paddingRight = `${cv(l) + s}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = jt(r).body;
    else {
      const s = r.parentElement,
        a = xo(r);
      i =
        (s == null ? void 0 : s.nodeName) === 'HTML' &&
        a.getComputedStyle(s).overflowY === 'scroll'
          ? s
          : r;
    }
    n.push(
      { value: i.style.overflow, property: 'overflow', el: i },
      { value: i.style.overflowX, property: 'overflow-x', el: i },
      { value: i.style.overflowY, property: 'overflow-y', el: i }
    ),
      (i.style.overflow = 'hidden');
  }
  return () => {
    n.forEach(({ value: i, el: s, property: a }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function GR(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute('aria-hidden') === 'true' && t.push(n);
    }),
    t
  );
}
class KR {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && Ss(t.modalRef, !1);
    const o = GR(n);
    dv(n, t.mount, t.modalRef, o, !0);
    const i = xd(this.containers, (s) => s.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = xd(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = HR(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = xd(this.containers, (s) => s.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && Ss(t.modalRef, n),
        dv(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Ss(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function qR(e) {
  return typeof e == 'function' ? e() : e;
}
function XR(e) {
  return e ? e.props.hasOwnProperty('in') : !1;
}
const YR = new KR();
function QR(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = YR,
      closeAfterTransition: i = !1,
      onTransitionEnter: s,
      onTransitionExited: a,
      children: l,
      onClose: u,
      open: c,
      rootRef: d,
    } = e,
    f = b.useRef({}),
    v = b.useRef(null),
    m = b.useRef(null),
    h = pt(m, d),
    [w, p] = b.useState(!c),
    g = XR(l);
  let y = !0;
  (e['aria-hidden'] === 'false' || e['aria-hidden'] === !1) && (y = !1);
  const x = () => jt(v.current),
    S = () => (
      (f.current.modalRef = m.current), (f.current.mount = v.current), f.current
    ),
    P = () => {
      o.mount(S(), { disableScrollLock: r }),
        m.current && (m.current.scrollTop = 0);
    },
    T = Or(() => {
      const W = qR(t) || x().body;
      o.add(S(), W), m.current && P();
    }),
    _ = b.useCallback(() => o.isTopModal(S()), [o]),
    I = Or((W) => {
      (v.current = W), W && (c && _() ? P() : m.current && Ss(m.current, y));
    }),
    k = b.useCallback(() => {
      o.remove(S(), y);
    }, [y, o]);
  b.useEffect(
    () => () => {
      k();
    },
    [k]
  ),
    b.useEffect(() => {
      c ? T() : (!g || !i) && k();
    }, [c, k, g, i, T]);
  const D = (W) => (M) => {
      var O;
      (O = W.onKeyDown) == null || O.call(W, M),
        !(M.key !== 'Escape' || M.which === 229 || !_()) &&
          (n || (M.stopPropagation(), u && u(M, 'escapeKeyDown')));
    },
    $ = (W) => (M) => {
      var O;
      (O = W.onClick) == null || O.call(W, M),
        M.target === M.currentTarget && u && u(M, 'backdropClick');
    };
  return {
    getRootProps: (W = {}) => {
      const M = K1(e);
      delete M.onTransitionEnter, delete M.onTransitionExited;
      const O = E({}, M, W);
      return E({ role: 'presentation' }, O, { onKeyDown: D(O), ref: h });
    },
    getBackdropProps: (W = {}) => {
      const M = W;
      return E({ 'aria-hidden': !0 }, M, { onClick: $(M), open: c });
    },
    getTransitionProps: () => {
      const W = () => {
          p(!1), s && s();
        },
        M = () => {
          p(!0), a && a(), i && k();
        };
      return {
        onEnter: _g(W, l == null ? void 0 : l.props.onEnter),
        onExited: _g(M, l == null ? void 0 : l.props.onExited),
      };
    },
    rootRef: h,
    portalRef: I,
    isTopModal: _,
    exited: w,
    hasTransition: g,
  };
}
var Ht = 'top',
  Tn = 'bottom',
  kn = 'right',
  Gt = 'left',
  jm = 'auto',
  va = [Ht, Tn, kn, Gt],
  yi = 'start',
  Xs = 'end',
  JR = 'clippingParents',
  Z1 = 'viewport',
  Ji = 'popper',
  ZR = 'reference',
  fv = va.reduce(function (e, t) {
    return e.concat([t + '-' + yi, t + '-' + Xs]);
  }, []),
  eb = [].concat(va, [jm]).reduce(function (e, t) {
    return e.concat([t, t + '-' + yi, t + '-' + Xs]);
  }, []),
  eO = 'beforeRead',
  tO = 'read',
  nO = 'afterRead',
  rO = 'beforeMain',
  oO = 'main',
  iO = 'afterMain',
  sO = 'beforeWrite',
  aO = 'write',
  lO = 'afterWrite',
  uO = [eO, tO, nO, rO, oO, iO, sO, aO, lO];
function tr(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function on(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function wo(e) {
  var t = on(e).Element;
  return e instanceof t || e instanceof Element;
}
function xn(e) {
  var t = on(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Dm(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = on(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function cO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      i = t.elements[n];
    !xn(i) ||
      !tr(i) ||
      (Object.assign(i.style, r),
      Object.keys(o).forEach(function (s) {
        var a = o[s];
        a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? '' : a);
      }));
  });
}
function dO(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: '0',
        top: '0',
        margin: '0',
      },
      arrow: { position: 'absolute' },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          i = t.attributes[r] || {},
          s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          a = s.reduce(function (l, u) {
            return (l[u] = ''), l;
          }, {});
        !xn(o) ||
          !tr(o) ||
          (Object.assign(o.style, a),
          Object.keys(i).forEach(function (l) {
            o.removeAttribute(l);
          }));
      });
    }
  );
}
const fO = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: cO,
  effect: dO,
  requires: ['computeStyles'],
};
function Zn(e) {
  return e.split('-')[0];
}
var co = Math.max,
  au = Math.min,
  xi = Math.round;
function Xf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function tb() {
  return !/^((?!chrome|android).)*safari/i.test(Xf());
}
function bi(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    xn(e) &&
    ((o = (e.offsetWidth > 0 && xi(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && xi(r.height) / e.offsetHeight) || 1));
  var s = wo(e) ? on(e) : window,
    a = s.visualViewport,
    l = !tb() && n,
    u = (r.left + (l && a ? a.offsetLeft : 0)) / o,
    c = (r.top + (l && a ? a.offsetTop : 0)) / i,
    d = r.width / o,
    f = r.height / i;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c,
  };
}
function Lm(e) {
  var t = bi(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function nb(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Dm(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function vr(e) {
  return on(e).getComputedStyle(e);
}
function pO(e) {
  return ['table', 'td', 'th'].indexOf(tr(e)) >= 0;
}
function Yr(e) {
  return ((wo(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Cc(e) {
  return tr(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (Dm(e) ? e.host : null) || Yr(e);
}
function pv(e) {
  return !xn(e) || vr(e).position === 'fixed' ? null : e.offsetParent;
}
function mO(e) {
  var t = /firefox/i.test(Xf()),
    n = /Trident/i.test(Xf());
  if (n && xn(e)) {
    var r = vr(e);
    if (r.position === 'fixed') return null;
  }
  var o = Cc(e);
  for (Dm(o) && (o = o.host); xn(o) && ['html', 'body'].indexOf(tr(o)) < 0; ) {
    var i = vr(o);
    if (
      i.transform !== 'none' ||
      i.perspective !== 'none' ||
      i.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === 'filter') ||
      (t && i.filter && i.filter !== 'none')
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function ya(e) {
  for (var t = on(e), n = pv(e); n && pO(n) && vr(n).position === 'static'; )
    n = pv(n);
  return n &&
    (tr(n) === 'html' || (tr(n) === 'body' && vr(n).position === 'static'))
    ? t
    : n || mO(e) || t;
}
function Nm(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function Es(e, t, n) {
  return co(e, au(t, n));
}
function hO(e, t, n) {
  var r = Es(e, t, n);
  return r > n ? n : r;
}
function rb() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ob(e) {
  return Object.assign({}, rb(), e);
}
function ib(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var gO = function (t, n) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    ob(typeof t != 'number' ? t : ib(t, va))
  );
};
function vO(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    s = n.modifiersData.popperOffsets,
    a = Zn(n.placement),
    l = Nm(a),
    u = [Gt, kn].indexOf(a) >= 0,
    c = u ? 'height' : 'width';
  if (!(!i || !s)) {
    var d = gO(o.padding, n),
      f = Lm(i),
      v = l === 'y' ? Ht : Gt,
      m = l === 'y' ? Tn : kn,
      h =
        n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c],
      w = s[l] - n.rects.reference[l],
      p = ya(i),
      g = p ? (l === 'y' ? p.clientHeight || 0 : p.clientWidth || 0) : 0,
      y = h / 2 - w / 2,
      x = d[v],
      S = g - f[c] - d[m],
      P = g / 2 - f[c] / 2 + y,
      T = Es(x, P, S),
      _ = l;
    n.modifiersData[r] = ((t = {}), (t[_] = T), (t.centerOffset = T - P), t);
  }
}
function yO(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? '[data-popper-arrow]' : r;
  o != null &&
    ((typeof o == 'string' && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (nb(t.elements.popper, o) && (t.elements.arrow = o)));
}
const xO = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: vO,
  effect: yO,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function wi(e) {
  return e.split('-')[1];
}
var bO = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function wO(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: xi(n * o) / o || 0, y: xi(r * o) / o || 0 };
}
function mv(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    s = e.offsets,
    a = e.position,
    l = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    d = e.isFixed,
    f = s.x,
    v = f === void 0 ? 0 : f,
    m = s.y,
    h = m === void 0 ? 0 : m,
    w = typeof c == 'function' ? c({ x: v, y: h }) : { x: v, y: h };
  (v = w.x), (h = w.y);
  var p = s.hasOwnProperty('x'),
    g = s.hasOwnProperty('y'),
    y = Gt,
    x = Ht,
    S = window;
  if (u) {
    var P = ya(n),
      T = 'clientHeight',
      _ = 'clientWidth';
    if (
      (P === on(n) &&
        ((P = Yr(n)),
        vr(P).position !== 'static' &&
          a === 'absolute' &&
          ((T = 'scrollHeight'), (_ = 'scrollWidth'))),
      (P = P),
      o === Ht || ((o === Gt || o === kn) && i === Xs))
    ) {
      x = Tn;
      var I = d && P === S && S.visualViewport ? S.visualViewport.height : P[T];
      (h -= I - r.height), (h *= l ? 1 : -1);
    }
    if (o === Gt || ((o === Ht || o === Tn) && i === Xs)) {
      y = kn;
      var k = d && P === S && S.visualViewport ? S.visualViewport.width : P[_];
      (v -= k - r.width), (v *= l ? 1 : -1);
    }
  }
  var D = Object.assign({ position: a }, u && bO),
    $ = c === !0 ? wO({ x: v, y: h }, on(n)) : { x: v, y: h };
  if (((v = $.x), (h = $.y), l)) {
    var A;
    return Object.assign(
      {},
      D,
      ((A = {}),
      (A[x] = g ? '0' : ''),
      (A[y] = p ? '0' : ''),
      (A.transform =
        (S.devicePixelRatio || 1) <= 1
          ? 'translate(' + v + 'px, ' + h + 'px)'
          : 'translate3d(' + v + 'px, ' + h + 'px, 0)'),
      A)
    );
  }
  return Object.assign(
    {},
    D,
    ((t = {}),
    (t[x] = g ? h + 'px' : ''),
    (t[y] = p ? v + 'px' : ''),
    (t.transform = ''),
    t)
  );
}
function SO(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    s = i === void 0 ? !0 : i,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    u = {
      placement: Zn(t.placement),
      variation: wi(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === 'fixed',
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      mv(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: s,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        mv(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }));
}
const EO = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: SO,
  data: {},
};
var qa = { passive: !0 };
function CO(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    s = r.resize,
    a = s === void 0 ? !0 : s,
    l = on(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      u.forEach(function (c) {
        c.addEventListener('scroll', n.update, qa);
      }),
    a && l.addEventListener('resize', n.update, qa),
    function () {
      i &&
        u.forEach(function (c) {
          c.removeEventListener('scroll', n.update, qa);
        }),
        a && l.removeEventListener('resize', n.update, qa);
    }
  );
}
const PO = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: CO,
  data: {},
};
var TO = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Cl(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return TO[t];
  });
}
var kO = { start: 'end', end: 'start' };
function hv(e) {
  return e.replace(/start|end/g, function (t) {
    return kO[t];
  });
}
function Fm(e) {
  var t = on(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function zm(e) {
  return bi(Yr(e)).left + Fm(e).scrollLeft;
}
function RO(e, t) {
  var n = on(e),
    r = Yr(e),
    o = n.visualViewport,
    i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (s = o.height);
    var u = tb();
    (u || (!u && t === 'fixed')) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a + zm(e), y: l };
}
function OO(e) {
  var t,
    n = Yr(e),
    r = Fm(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = co(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    s = co(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    a = -r.scrollLeft + zm(e),
    l = -r.scrollTop;
  return (
    vr(o || n).direction === 'rtl' &&
      (a += co(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: s, x: a, y: l }
  );
}
function Bm(e) {
  var t = vr(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function sb(e) {
  return ['html', 'body', '#document'].indexOf(tr(e)) >= 0
    ? e.ownerDocument.body
    : xn(e) && Bm(e)
    ? e
    : sb(Cc(e));
}
function Cs(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = sb(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = on(r),
    s = o ? [i].concat(i.visualViewport || [], Bm(r) ? r : []) : r,
    a = t.concat(s);
  return o ? a : a.concat(Cs(Cc(s)));
}
function Yf(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function _O(e, t) {
  var n = bi(e, !1, t === 'fixed');
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function gv(e, t, n) {
  return t === Z1 ? Yf(RO(e, n)) : wo(t) ? _O(t, n) : Yf(OO(Yr(e)));
}
function MO(e) {
  var t = Cs(Cc(e)),
    n = ['absolute', 'fixed'].indexOf(vr(e).position) >= 0,
    r = n && xn(e) ? ya(e) : e;
  return wo(r)
    ? t.filter(function (o) {
        return wo(o) && nb(o, r) && tr(o) !== 'body';
      })
    : [];
}
function AO(e, t, n, r) {
  var o = t === 'clippingParents' ? MO(e) : [].concat(t),
    i = [].concat(o, [n]),
    s = i[0],
    a = i.reduce(function (l, u) {
      var c = gv(e, u, r);
      return (
        (l.top = co(c.top, l.top)),
        (l.right = au(c.right, l.right)),
        (l.bottom = au(c.bottom, l.bottom)),
        (l.left = co(c.left, l.left)),
        l
      );
    }, gv(e, s, r));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function ab(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? Zn(r) : null,
    i = r ? wi(r) : null,
    s = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    l;
  switch (o) {
    case Ht:
      l = { x: s, y: t.y - n.height };
      break;
    case Tn:
      l = { x: s, y: t.y + t.height };
      break;
    case kn:
      l = { x: t.x + t.width, y: a };
      break;
    case Gt:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Nm(o) : null;
  if (u != null) {
    var c = u === 'y' ? 'height' : 'width';
    switch (i) {
      case yi:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Xs:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Ys(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    s = i === void 0 ? e.strategy : i,
    a = n.boundary,
    l = a === void 0 ? JR : a,
    u = n.rootBoundary,
    c = u === void 0 ? Z1 : u,
    d = n.elementContext,
    f = d === void 0 ? Ji : d,
    v = n.altBoundary,
    m = v === void 0 ? !1 : v,
    h = n.padding,
    w = h === void 0 ? 0 : h,
    p = ob(typeof w != 'number' ? w : ib(w, va)),
    g = f === Ji ? ZR : Ji,
    y = e.rects.popper,
    x = e.elements[m ? g : f],
    S = AO(wo(x) ? x : x.contextElement || Yr(e.elements.popper), l, c, s),
    P = bi(e.elements.reference),
    T = ab({ reference: P, element: y, strategy: 'absolute', placement: o }),
    _ = Yf(Object.assign({}, y, T)),
    I = f === Ji ? _ : P,
    k = {
      top: S.top - I.top + p.top,
      bottom: I.bottom - S.bottom + p.bottom,
      left: S.left - I.left + p.left,
      right: I.right - S.right + p.right,
    },
    D = e.modifiersData.offset;
  if (f === Ji && D) {
    var $ = D[o];
    Object.keys(k).forEach(function (A) {
      var z = [kn, Tn].indexOf(A) >= 0 ? 1 : -1,
        B = [Ht, Tn].indexOf(A) >= 0 ? 'y' : 'x';
      k[A] += $[B] * z;
    });
  }
  return k;
}
function IO(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    s = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    u = l === void 0 ? eb : l,
    c = wi(r),
    d = c
      ? a
        ? fv
        : fv.filter(function (m) {
            return wi(m) === c;
          })
      : va,
    f = d.filter(function (m) {
      return u.indexOf(m) >= 0;
    });
  f.length === 0 && (f = d);
  var v = f.reduce(function (m, h) {
    return (
      (m[h] = Ys(e, { placement: h, boundary: o, rootBoundary: i, padding: s })[
        Zn(h)
      ]),
      m
    );
  }, {});
  return Object.keys(v).sort(function (m, h) {
    return v[m] - v[h];
  });
}
function $O(e) {
  if (Zn(e) === jm) return [];
  var t = Cl(e);
  return [hv(e), t, hv(t)];
}
function jO(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        s = n.altAxis,
        a = s === void 0 ? !0 : s,
        l = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        d = n.rootBoundary,
        f = n.altBoundary,
        v = n.flipVariations,
        m = v === void 0 ? !0 : v,
        h = n.allowedAutoPlacements,
        w = t.options.placement,
        p = Zn(w),
        g = p === w,
        y = l || (g || !m ? [Cl(w)] : $O(w)),
        x = [w].concat(y).reduce(function (te, de) {
          return te.concat(
            Zn(de) === jm
              ? IO(t, {
                  placement: de,
                  boundary: c,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: m,
                  allowedAutoPlacements: h,
                })
              : de
          );
        }, []),
        S = t.rects.reference,
        P = t.rects.popper,
        T = new Map(),
        _ = !0,
        I = x[0],
        k = 0;
      k < x.length;
      k++
    ) {
      var D = x[k],
        $ = Zn(D),
        A = wi(D) === yi,
        z = [Ht, Tn].indexOf($) >= 0,
        B = z ? 'width' : 'height',
        W = Ys(t, {
          placement: D,
          boundary: c,
          rootBoundary: d,
          altBoundary: f,
          padding: u,
        }),
        M = z ? (A ? kn : Gt) : A ? Tn : Ht;
      S[B] > P[B] && (M = Cl(M));
      var O = Cl(M),
        N = [];
      if (
        (i && N.push(W[$] <= 0),
        a && N.push(W[M] <= 0, W[O] <= 0),
        N.every(function (te) {
          return te;
        }))
      ) {
        (I = D), (_ = !1);
        break;
      }
      T.set(D, N);
    }
    if (_)
      for (
        var H = m ? 3 : 1,
          oe = function (de) {
            var ue = x.find(function (Re) {
              var we = T.get(Re);
              if (we)
                return we.slice(0, de).every(function (ve) {
                  return ve;
                });
            });
            if (ue) return (I = ue), 'break';
          },
          ee = H;
        ee > 0;
        ee--
      ) {
        var he = oe(ee);
        if (he === 'break') break;
      }
    t.placement !== I &&
      ((t.modifiersData[r]._skip = !0), (t.placement = I), (t.reset = !0));
  }
}
const DO = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: jO,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
};
function vv(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function yv(e) {
  return [Ht, kn, Tn, Gt].some(function (t) {
    return e[t] >= 0;
  });
}
function LO(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    s = Ys(t, { elementContext: 'reference' }),
    a = Ys(t, { altBoundary: !0 }),
    l = vv(s, r),
    u = vv(a, o, i),
    c = yv(l),
    d = yv(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': c,
      'data-popper-escaped': d,
    }));
}
const NO = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: LO,
};
function FO(e, t, n) {
  var r = Zn(e),
    o = [Gt, Ht].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
    s = i[0],
    a = i[1];
  return (
    (s = s || 0),
    (a = (a || 0) * o),
    [Gt, kn].indexOf(r) >= 0 ? { x: a, y: s } : { x: s, y: a }
  );
}
function zO(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    s = eb.reduce(function (c, d) {
      return (c[d] = FO(d, t.rects, i)), c;
    }, {}),
    a = s[t.placement],
    l = a.x,
    u = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = s);
}
const BO = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: zO,
};
function WO(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = ab({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  });
}
const VO = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: WO,
  data: {},
};
function UO(e) {
  return e === 'x' ? 'y' : 'x';
}
function HO(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    s = n.altAxis,
    a = s === void 0 ? !1 : s,
    l = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    d = n.padding,
    f = n.tether,
    v = f === void 0 ? !0 : f,
    m = n.tetherOffset,
    h = m === void 0 ? 0 : m,
    w = Ys(t, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
    p = Zn(t.placement),
    g = wi(t.placement),
    y = !g,
    x = Nm(p),
    S = UO(x),
    P = t.modifiersData.popperOffsets,
    T = t.rects.reference,
    _ = t.rects.popper,
    I =
      typeof h == 'function'
        ? h(Object.assign({}, t.rects, { placement: t.placement }))
        : h,
    k =
      typeof I == 'number'
        ? { mainAxis: I, altAxis: I }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
    D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    $ = { x: 0, y: 0 };
  if (P) {
    if (i) {
      var A,
        z = x === 'y' ? Ht : Gt,
        B = x === 'y' ? Tn : kn,
        W = x === 'y' ? 'height' : 'width',
        M = P[x],
        O = M + w[z],
        N = M - w[B],
        H = v ? -_[W] / 2 : 0,
        oe = g === yi ? T[W] : _[W],
        ee = g === yi ? -_[W] : -T[W],
        he = t.elements.arrow,
        te = v && he ? Lm(he) : { width: 0, height: 0 },
        de = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : rb(),
        ue = de[z],
        Re = de[B],
        we = Es(0, T[W], te[W]),
        ve = y
          ? T[W] / 2 - H - we - ue - k.mainAxis
          : oe - we - ue - k.mainAxis,
        Ne = y
          ? -T[W] / 2 + H + we + Re + k.mainAxis
          : ee + we + Re + k.mainAxis,
        fe = t.elements.arrow && ya(t.elements.arrow),
        Pe = fe ? (x === 'y' ? fe.clientTop || 0 : fe.clientLeft || 0) : 0,
        pe = (A = D == null ? void 0 : D[x]) != null ? A : 0,
        ye = M + ve - pe - Pe,
        xe = M + Ne - pe,
        ht = Es(v ? au(O, ye) : O, M, v ? co(N, xe) : N);
      (P[x] = ht), ($[x] = ht - M);
    }
    if (a) {
      var Ve,
        R = x === 'x' ? Ht : Gt,
        j = x === 'x' ? Tn : kn,
        F = P[S],
        G = S === 'y' ? 'height' : 'width',
        q = F + w[R],
        U = F - w[j],
        L = [Ht, Gt].indexOf(p) !== -1,
        K = (Ve = D == null ? void 0 : D[S]) != null ? Ve : 0,
        le = L ? q : F - T[G] - _[G] - K + k.altAxis,
        me = L ? F + T[G] + _[G] - K - k.altAxis : U,
        ce = v && L ? hO(le, F, me) : Es(v ? le : q, F, v ? me : U);
      (P[S] = ce), ($[S] = ce - F);
    }
    t.modifiersData[r] = $;
  }
}
const GO = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: HO,
  requiresIfExists: ['offset'],
};
function KO(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function qO(e) {
  return e === on(e) || !xn(e) ? Fm(e) : KO(e);
}
function XO(e) {
  var t = e.getBoundingClientRect(),
    n = xi(t.width) / e.offsetWidth || 1,
    r = xi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function YO(e, t, n) {
  n === void 0 && (n = !1);
  var r = xn(t),
    o = xn(t) && XO(t),
    i = Yr(t),
    s = bi(e, o, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((tr(t) !== 'body' || Bm(i)) && (a = qO(t)),
      xn(t)
        ? ((l = bi(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = zm(i))),
    {
      x: s.left + a.scrollLeft - l.x,
      y: s.top + a.scrollTop - l.y,
      width: s.width,
      height: s.height,
    }
  );
}
function QO(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function (a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && o(l);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function JO(e) {
  var t = QO(e);
  return uO.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function ZO(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function e_(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var xv = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function bv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == 'function');
  });
}
function t_(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? xv : o;
  return function (a, l, u) {
    u === void 0 && (u = i);
    var c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, xv, i),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      v = {
        state: c,
        setOptions: function (p) {
          var g = typeof p == 'function' ? p(c.options) : p;
          h(),
            (c.options = Object.assign({}, i, c.options, g)),
            (c.scrollParents = {
              reference: wo(a)
                ? Cs(a)
                : a.contextElement
                ? Cs(a.contextElement)
                : [],
              popper: Cs(l),
            });
          var y = JO(e_([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = y.filter(function (x) {
              return x.enabled;
            })),
            m(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var p = c.elements,
              g = p.reference,
              y = p.popper;
            if (bv(g, y)) {
              (c.rects = {
                reference: YO(g, ya(y), c.options.strategy === 'fixed'),
                popper: Lm(y),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (k) {
                  return (c.modifiersData[k.name] = Object.assign({}, k.data));
                });
              for (var x = 0; x < c.orderedModifiers.length; x++) {
                if (c.reset === !0) {
                  (c.reset = !1), (x = -1);
                  continue;
                }
                var S = c.orderedModifiers[x],
                  P = S.fn,
                  T = S.options,
                  _ = T === void 0 ? {} : T,
                  I = S.name;
                typeof P == 'function' &&
                  (c = P({ state: c, options: _, name: I, instance: v }) || c);
              }
            }
          }
        },
        update: ZO(function () {
          return new Promise(function (w) {
            v.forceUpdate(), w(c);
          });
        }),
        destroy: function () {
          h(), (f = !0);
        },
      };
    if (!bv(a, l)) return v;
    v.setOptions(u).then(function (w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function m() {
      c.orderedModifiers.forEach(function (w) {
        var p = w.name,
          g = w.options,
          y = g === void 0 ? {} : g,
          x = w.effect;
        if (typeof x == 'function') {
          var S = x({ state: c, name: p, instance: v, options: y }),
            P = function () {};
          d.push(S || P);
        }
      });
    }
    function h() {
      d.forEach(function (w) {
        return w();
      }),
        (d = []);
    }
    return v;
  };
}
var n_ = [PO, VO, EO, fO, BO, DO, GO, xO, NO],
  r_ = t_({ defaultModifiers: n_ });
const lb = 'Popper';
function o_(e) {
  return Q1(lb, e);
}
$R(lb, ['root']);
const i_ = [
    'anchorEl',
    'children',
    'direction',
    'disablePortal',
    'modifiers',
    'open',
    'placement',
    'popperOptions',
    'popperRef',
    'slotProps',
    'slots',
    'TransitionProps',
    'ownerState',
  ],
  s_ = [
    'anchorEl',
    'children',
    'container',
    'direction',
    'disablePortal',
    'keepMounted',
    'modifiers',
    'open',
    'placement',
    'popperOptions',
    'popperRef',
    'style',
    'transition',
    'slotProps',
    'slots',
  ];
function a_(e, t) {
  if (t === 'ltr') return e;
  switch (e) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return e;
  }
}
function Qf(e) {
  return typeof e == 'function' ? e() : e;
}
function l_(e) {
  return e.nodeType !== void 0;
}
const u_ = () => Se({ root: ['root'] }, Y2(o_)),
  c_ = {},
  d_ = b.forwardRef(function (t, n) {
    var r;
    const {
        anchorEl: o,
        children: i,
        direction: s,
        disablePortal: a,
        modifiers: l,
        open: u,
        placement: c,
        popperOptions: d,
        popperRef: f,
        slotProps: v = {},
        slots: m = {},
        TransitionProps: h,
      } = t,
      w = J(t, i_),
      p = b.useRef(null),
      g = pt(p, n),
      y = b.useRef(null),
      x = pt(y, f),
      S = b.useRef(x);
    er(() => {
      S.current = x;
    }, [x]),
      b.useImperativeHandle(f, () => y.current, []);
    const P = a_(c, s),
      [T, _] = b.useState(P),
      [I, k] = b.useState(Qf(o));
    b.useEffect(() => {
      y.current && y.current.forceUpdate();
    }),
      b.useEffect(() => {
        o && k(Qf(o));
      }, [o]),
      er(() => {
        if (!I || !u) return;
        const B = (O) => {
          _(O.placement);
        };
        let W = [
          { name: 'preventOverflow', options: { altBoundary: a } },
          { name: 'flip', options: { altBoundary: a } },
          {
            name: 'onUpdate',
            enabled: !0,
            phase: 'afterWrite',
            fn: ({ state: O }) => {
              B(O);
            },
          },
        ];
        l != null && (W = W.concat(l)),
          d && d.modifiers != null && (W = W.concat(d.modifiers));
        const M = r_(I, p.current, E({ placement: P }, d, { modifiers: W }));
        return (
          S.current(M),
          () => {
            M.destroy(), S.current(null);
          }
        );
      }, [I, a, l, u, d, P]);
    const D = { placement: T };
    h !== null && (D.TransitionProps = h);
    const $ = u_(),
      A = (r = m.root) != null ? r : 'div',
      z = bo({
        elementType: A,
        externalSlotProps: v.root,
        externalForwardedProps: w,
        additionalProps: { role: 'tooltip', ref: g },
        ownerState: t,
        className: $.root,
      });
    return C.jsx(A, E({}, z, { children: typeof i == 'function' ? i(D) : i }));
  }),
  f_ = b.forwardRef(function (t, n) {
    const {
        anchorEl: r,
        children: o,
        container: i,
        direction: s = 'ltr',
        disablePortal: a = !1,
        keepMounted: l = !1,
        modifiers: u,
        open: c,
        placement: d = 'bottom',
        popperOptions: f = c_,
        popperRef: v,
        style: m,
        transition: h = !1,
        slotProps: w = {},
        slots: p = {},
      } = t,
      g = J(t, s_),
      [y, x] = b.useState(!0),
      S = () => {
        x(!1);
      },
      P = () => {
        x(!0);
      };
    if (!l && !c && (!h || y)) return null;
    let T;
    if (i) T = i;
    else if (r) {
      const k = Qf(r);
      T = k && l_(k) ? jt(k).body : jt(null).body;
    }
    const _ = !c && l && (!h || y) ? 'none' : void 0,
      I = h ? { in: c, onEnter: S, onExited: P } : void 0;
    return C.jsx(J1, {
      disablePortal: a,
      container: T,
      children: C.jsx(
        d_,
        E(
          {
            anchorEl: r,
            direction: s,
            disablePortal: a,
            modifiers: u,
            ref: n,
            open: h ? !y : c,
            placement: d,
            popperOptions: f,
            popperRef: v,
            slotProps: w,
            slots: p,
          },
          g,
          {
            style: E({ position: 'fixed', top: 0, left: 0, display: _ }, m),
            TransitionProps: I,
            children: o,
          }
        )
      ),
    });
  }),
  p_ = ['onChange', 'maxRows', 'minRows', 'style', 'value'];
function Xa(e) {
  return parseInt(e, 10) || 0;
}
const m_ = {
  shadow: {
    visibility: 'hidden',
    position: 'absolute',
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    transform: 'translateZ(0)',
  },
};
function h_(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflowing)
  );
}
const g_ = b.forwardRef(function (t, n) {
  const { onChange: r, maxRows: o, minRows: i = 1, style: s, value: a } = t,
    l = J(t, p_),
    { current: u } = b.useRef(a != null),
    c = b.useRef(null),
    d = pt(n, c),
    f = b.useRef(null),
    v = b.useCallback(() => {
      const w = c.current,
        g = xo(w).getComputedStyle(w);
      if (g.width === '0px') return { outerHeightStyle: 0, overflowing: !1 };
      const y = f.current;
      (y.style.width = g.width),
        (y.value = w.value || t.placeholder || 'x'),
        y.value.slice(-1) ===
          `
` && (y.value += ' ');
      const x = g.boxSizing,
        S = Xa(g.paddingBottom) + Xa(g.paddingTop),
        P = Xa(g.borderBottomWidth) + Xa(g.borderTopWidth),
        T = y.scrollHeight;
      y.value = 'x';
      const _ = y.scrollHeight;
      let I = T;
      i && (I = Math.max(Number(i) * _, I)),
        o && (I = Math.min(Number(o) * _, I)),
        (I = Math.max(I, _));
      const k = I + (x === 'border-box' ? S + P : 0),
        D = Math.abs(I - T) <= 1;
      return { outerHeightStyle: k, overflowing: D };
    }, [o, i, t.placeholder]),
    m = b.useCallback(() => {
      const w = v();
      if (h_(w)) return;
      const p = c.current;
      (p.style.height = `${w.outerHeightStyle}px`),
        (p.style.overflow = w.overflowing ? 'hidden' : '');
    }, [v]);
  er(() => {
    const w = () => {
      m();
    };
    let p;
    const g = Jx(w),
      y = c.current,
      x = xo(y);
    x.addEventListener('resize', g);
    let S;
    return (
      typeof ResizeObserver < 'u' &&
        ((S = new ResizeObserver(w)), S.observe(y)),
      () => {
        g.clear(),
          cancelAnimationFrame(p),
          x.removeEventListener('resize', g),
          S && S.disconnect();
      }
    );
  }, [v, m]),
    er(() => {
      m();
    });
  const h = (w) => {
    u || m(), r && r(w);
  };
  return C.jsxs(b.Fragment, {
    children: [
      C.jsx(
        'textarea',
        E({ value: a, onChange: h, ref: d, rows: i, style: s }, l)
      ),
      C.jsx('textarea', {
        'aria-hidden': !0,
        className: t.className,
        readOnly: !0,
        ref: f,
        tabIndex: -1,
        style: E({}, m_.shadow, s, { paddingTop: 0, paddingBottom: 0 }),
      }),
    ],
  });
});
var Wm = {};
Object.defineProperty(Wm, '__esModule', { value: !0 });
var ub = (Wm.default = void 0),
  v_ = x_(b),
  y_ = B1;
function cb(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (cb = function (r) {
    return r ? n : t;
  })(e);
}
function x_(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var n = cb(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== 'default' && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function b_(e) {
  return Object.keys(e).length === 0;
}
function w_(e = null) {
  const t = v_.useContext(y_.ThemeContext);
  return !t || b_(t) ? e : t;
}
ub = Wm.default = w_;
const S_ = [
    'anchorEl',
    'component',
    'components',
    'componentsProps',
    'container',
    'disablePortal',
    'keepMounted',
    'modifiers',
    'open',
    'placement',
    'popperOptions',
    'popperRef',
    'transition',
    'slots',
    'slotProps',
  ],
  E_ = Q(f_, {
    name: 'MuiPopper',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({}),
  db = b.forwardRef(function (t, n) {
    var r;
    const o = ub(),
      i = be({ props: t, name: 'MuiPopper' }),
      {
        anchorEl: s,
        component: a,
        components: l,
        componentsProps: u,
        container: c,
        disablePortal: d,
        keepMounted: f,
        modifiers: v,
        open: m,
        placement: h,
        popperOptions: w,
        popperRef: p,
        transition: g,
        slots: y,
        slotProps: x,
      } = i,
      S = J(i, S_),
      P =
        (r = y == null ? void 0 : y.root) != null
          ? r
          : l == null
          ? void 0
          : l.Root,
      T = E(
        {
          anchorEl: s,
          container: c,
          disablePortal: d,
          keepMounted: f,
          modifiers: v,
          open: m,
          placement: h,
          popperOptions: w,
          popperRef: p,
          transition: g,
        },
        S
      );
    return C.jsx(
      E_,
      E(
        {
          as: a,
          direction: o == null ? void 0 : o.direction,
          slots: { root: P },
          slotProps: x ?? u,
        },
        T,
        { ref: n }
      )
    );
  });
function Ii({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > 'u' && (r[o] = n[o]), r),
    {}
  );
}
const Vm = b.createContext(void 0);
function $i() {
  return b.useContext(Vm);
}
function fb(e) {
  return C.jsx(g2, E({}, e, { defaultTheme: wc, themeId: ma }));
}
function wv(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function lu(e, t = !1) {
  return (
    e &&
    ((wv(e.value) && e.value !== '') ||
      (t && wv(e.defaultValue) && e.defaultValue !== ''))
  );
}
function C_(e) {
  return e.startAdornment;
}
function P_(e) {
  return Ee('MuiInputBase', e);
}
const Si = ge('MuiInputBase', [
    'root',
    'formControl',
    'focused',
    'disabled',
    'adornedStart',
    'adornedEnd',
    'error',
    'sizeSmall',
    'multiline',
    'colorSecondary',
    'fullWidth',
    'hiddenLabel',
    'readOnly',
    'input',
    'inputSizeSmall',
    'inputMultiline',
    'inputTypeSearch',
    'inputAdornedStart',
    'inputAdornedEnd',
    'inputHiddenLabel',
  ]),
  T_ = [
    'aria-describedby',
    'autoComplete',
    'autoFocus',
    'className',
    'color',
    'components',
    'componentsProps',
    'defaultValue',
    'disabled',
    'disableInjectingGlobalStyles',
    'endAdornment',
    'error',
    'fullWidth',
    'id',
    'inputComponent',
    'inputProps',
    'inputRef',
    'margin',
    'maxRows',
    'minRows',
    'multiline',
    'name',
    'onBlur',
    'onChange',
    'onClick',
    'onFocus',
    'onKeyDown',
    'onKeyUp',
    'placeholder',
    'readOnly',
    'renderSuffix',
    'rows',
    'size',
    'slotProps',
    'slots',
    'startAdornment',
    'type',
    'value',
  ],
  Pc = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === 'small' && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${se(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  Tc = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === 'small' && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === 'search' && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  k_ = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: a,
        fullWidth: l,
        hiddenLabel: u,
        multiline: c,
        readOnly: d,
        size: f,
        startAdornment: v,
        type: m,
      } = e,
      h = {
        root: [
          'root',
          `color${se(n)}`,
          r && 'disabled',
          o && 'error',
          l && 'fullWidth',
          s && 'focused',
          a && 'formControl',
          f && f !== 'medium' && `size${se(f)}`,
          c && 'multiline',
          v && 'adornedStart',
          i && 'adornedEnd',
          u && 'hiddenLabel',
          d && 'readOnly',
        ],
        input: [
          'input',
          r && 'disabled',
          m === 'search' && 'inputTypeSearch',
          c && 'inputMultiline',
          f === 'small' && 'inputSizeSmall',
          u && 'inputHiddenLabel',
          v && 'inputAdornedStart',
          i && 'inputAdornedEnd',
          d && 'readOnly',
        ],
      };
    return Se(h, P_, t);
  },
  kc = Q('div', { name: 'MuiInputBase', slot: 'Root', overridesResolver: Pc })(
    ({ theme: e, ownerState: t }) =>
      E(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: '1.4375em',
          boxSizing: 'border-box',
          position: 'relative',
          cursor: 'text',
          display: 'inline-flex',
          alignItems: 'center',
          [`&.${Si.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: 'default',
          },
        },
        t.multiline &&
          E({ padding: '4px 0 5px' }, t.size === 'small' && { paddingTop: 1 }),
        t.fullWidth && { width: '100%' }
      )
  ),
  Rc = Q('input', {
    name: 'MuiInputBase',
    slot: 'Input',
    overridesResolver: Tc,
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === 'light',
      r = E(
        { color: 'currentColor' },
        e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: n ? 0.42 : 0.5 },
        {
          transition: e.transitions.create('opacity', {
            duration: e.transitions.duration.shorter,
          }),
        }
      ),
      o = { opacity: '0 !important' },
      i = e.vars
        ? { opacity: e.vars.opacity.inputPlaceholder }
        : { opacity: n ? 0.42 : 0.5 };
    return E(
      {
        font: 'inherit',
        letterSpacing: 'inherit',
        color: 'currentColor',
        padding: '4px 0 5px',
        border: 0,
        boxSizing: 'content-box',
        background: 'none',
        height: '1.4375em',
        margin: 0,
        WebkitTapHighlightColor: 'transparent',
        display: 'block',
        minWidth: 0,
        width: '100%',
        animationName: 'mui-auto-fill-cancel',
        animationDuration: '10ms',
        '&::-webkit-input-placeholder': r,
        '&::-moz-placeholder': r,
        '&:-ms-input-placeholder': r,
        '&::-ms-input-placeholder': r,
        '&:focus': { outline: 0 },
        '&:invalid': { boxShadow: 'none' },
        '&::-webkit-search-decoration': { WebkitAppearance: 'none' },
        [`label[data-shrink=false] + .${Si.formControl} &`]: {
          '&::-webkit-input-placeholder': o,
          '&::-moz-placeholder': o,
          '&:-ms-input-placeholder': o,
          '&::-ms-input-placeholder': o,
          '&:focus::-webkit-input-placeholder': i,
          '&:focus::-moz-placeholder': i,
          '&:focus:-ms-input-placeholder': i,
          '&:focus::-ms-input-placeholder': i,
        },
        [`&.${Si.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        '&:-webkit-autofill': {
          animationDuration: '5000s',
          animationName: 'mui-auto-fill',
        },
      },
      t.size === 'small' && { paddingTop: 1 },
      t.multiline && {
        height: 'auto',
        resize: 'none',
        padding: 0,
        paddingTop: 0,
      },
      t.type === 'search' && { MozAppearance: 'textfield' }
    );
  }),
  R_ = C.jsx(fb, {
    styles: {
      '@keyframes mui-auto-fill': { from: { display: 'block' } },
      '@keyframes mui-auto-fill-cancel': { from: { display: 'block' } },
    },
  }),
  O_ = b.forwardRef(function (t, n) {
    var r;
    const o = be({ props: t, name: 'MuiInputBase' }),
      {
        'aria-describedby': i,
        autoComplete: s,
        autoFocus: a,
        className: l,
        components: u = {},
        componentsProps: c = {},
        defaultValue: d,
        disabled: f,
        disableInjectingGlobalStyles: v,
        endAdornment: m,
        fullWidth: h = !1,
        id: w,
        inputComponent: p = 'input',
        inputProps: g = {},
        inputRef: y,
        maxRows: x,
        minRows: S,
        multiline: P = !1,
        name: T,
        onBlur: _,
        onChange: I,
        onClick: k,
        onFocus: D,
        onKeyDown: $,
        onKeyUp: A,
        placeholder: z,
        readOnly: B,
        renderSuffix: W,
        rows: M,
        slotProps: O = {},
        slots: N = {},
        startAdornment: H,
        type: oe = 'text',
        value: ee,
      } = o,
      he = J(o, T_),
      te = g.value != null ? g.value : ee,
      { current: de } = b.useRef(te != null),
      ue = b.useRef(),
      Re = b.useCallback((ce) => {}, []),
      we = pt(ue, y, g.ref, Re),
      [ve, Ne] = b.useState(!1),
      fe = $i(),
      Pe = Ii({
        props: o,
        muiFormControl: fe,
        states: [
          'color',
          'disabled',
          'error',
          'hiddenLabel',
          'size',
          'required',
          'filled',
        ],
      });
    (Pe.focused = fe ? fe.focused : ve),
      b.useEffect(() => {
        !fe && f && ve && (Ne(!1), _ && _());
      }, [fe, f, ve, _]);
    const pe = fe && fe.onFilled,
      ye = fe && fe.onEmpty,
      xe = b.useCallback(
        (ce) => {
          lu(ce) ? pe && pe() : ye && ye();
        },
        [pe, ye]
      );
    er(() => {
      de && xe({ value: te });
    }, [te, xe, de]);
    const ht = (ce) => {
        if (Pe.disabled) {
          ce.stopPropagation();
          return;
        }
        D && D(ce),
          g.onFocus && g.onFocus(ce),
          fe && fe.onFocus ? fe.onFocus(ce) : Ne(!0);
      },
      Ve = (ce) => {
        _ && _(ce),
          g.onBlur && g.onBlur(ce),
          fe && fe.onBlur ? fe.onBlur(ce) : Ne(!1);
      },
      R = (ce, ...re) => {
        if (!de) {
          const Ie = ce.target || ue.current;
          if (Ie == null) throw new Error(yo(1));
          xe({ value: Ie.value });
        }
        g.onChange && g.onChange(ce, ...re), I && I(ce, ...re);
      };
    b.useEffect(() => {
      xe(ue.current);
    }, []);
    const j = (ce) => {
      ue.current && ce.currentTarget === ce.target && ue.current.focus(),
        k && k(ce);
    };
    let F = p,
      G = g;
    P &&
      F === 'input' &&
      (M
        ? (G = E({ type: void 0, minRows: M, maxRows: M }, G))
        : (G = E({ type: void 0, maxRows: x, minRows: S }, G)),
      (F = g_));
    const q = (ce) => {
      xe(
        ce.animationName === 'mui-auto-fill-cancel'
          ? ue.current
          : { value: 'x' }
      );
    };
    b.useEffect(() => {
      fe && fe.setAdornedStart(!!H);
    }, [fe, H]);
    const U = E({}, o, {
        color: Pe.color || 'primary',
        disabled: Pe.disabled,
        endAdornment: m,
        error: Pe.error,
        focused: Pe.focused,
        formControl: fe,
        fullWidth: h,
        hiddenLabel: Pe.hiddenLabel,
        multiline: P,
        size: Pe.size,
        startAdornment: H,
        type: oe,
      }),
      L = k_(U),
      K = N.root || u.Root || kc,
      le = O.root || c.root || {},
      me = N.input || u.Input || Rc;
    return (
      (G = E({}, G, (r = O.input) != null ? r : c.input)),
      C.jsxs(b.Fragment, {
        children: [
          !v && R_,
          C.jsxs(
            K,
            E(
              {},
              le,
              !su(K) && { ownerState: E({}, U, le.ownerState) },
              { ref: n, onClick: j },
              he,
              {
                className: ie(
                  L.root,
                  le.className,
                  l,
                  B && 'MuiInputBase-readOnly'
                ),
                children: [
                  H,
                  C.jsx(Vm.Provider, {
                    value: null,
                    children: C.jsx(
                      me,
                      E(
                        {
                          ownerState: U,
                          'aria-invalid': Pe.error,
                          'aria-describedby': i,
                          autoComplete: s,
                          autoFocus: a,
                          defaultValue: d,
                          disabled: Pe.disabled,
                          id: w,
                          onAnimationStart: q,
                          name: T,
                          placeholder: z,
                          readOnly: B,
                          required: Pe.required,
                          rows: M,
                          value: te,
                          onKeyDown: $,
                          onKeyUp: A,
                          type: oe,
                        },
                        G,
                        !su(me) && {
                          as: F,
                          ownerState: E({}, U, G.ownerState),
                        },
                        {
                          ref: we,
                          className: ie(
                            L.input,
                            G.className,
                            B && 'MuiInputBase-readOnly'
                          ),
                          onBlur: Ve,
                          onChange: R,
                          onFocus: ht,
                        }
                      )
                    ),
                  }),
                  m,
                  W ? W(E({}, Pe, { startAdornment: H })) : null,
                ],
              }
            )
          ),
        ],
      })
    );
  }),
  Um = O_;
function __(e) {
  return Ee('MuiInput', e);
}
const Zi = E({}, Si, ge('MuiInput', ['root', 'underline', 'input']));
function M_(e) {
  return Ee('MuiOutlinedInput', e);
}
const br = E(
  {},
  Si,
  ge('MuiOutlinedInput', ['root', 'notchedOutline', 'input'])
);
function A_(e) {
  return Ee('MuiFilledInput', e);
}
const Qr = E({}, Si, ge('MuiFilledInput', ['root', 'underline', 'input'])),
  I_ = Ai(C.jsx('path', { d: 'M7 10l5 5 5-5z' }), 'ArrowDropDown'),
  $_ = Ai(
    C.jsx('path', {
      d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    }),
    'Person'
  );
function j_(e) {
  return Ee('MuiAvatar', e);
}
ge('MuiAvatar', [
  'root',
  'colorDefault',
  'circular',
  'rounded',
  'square',
  'img',
  'fallback',
]);
const D_ = [
    'alt',
    'children',
    'className',
    'component',
    'slots',
    'slotProps',
    'imgProps',
    'sizes',
    'src',
    'srcSet',
    'variant',
  ],
  L_ = D2(),
  N_ = (e) => {
    const { classes: t, variant: n, colorDefault: r } = e;
    return Se(
      {
        root: ['root', n, r && 'colorDefault'],
        img: ['img'],
        fallback: ['fallback'],
      },
      j_,
      t
    );
  },
  F_ = Q('div', {
    name: 'MuiAvatar',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
    },
  })(({ theme: e }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(20),
    lineHeight: 1,
    borderRadius: '50%',
    overflow: 'hidden',
    userSelect: 'none',
    variants: [
      {
        props: { variant: 'rounded' },
        style: { borderRadius: (e.vars || e).shape.borderRadius },
      },
      { props: { variant: 'square' }, style: { borderRadius: 0 } },
      {
        props: { colorDefault: !0 },
        style: E(
          { color: (e.vars || e).palette.background.default },
          e.vars
            ? { backgroundColor: e.vars.palette.Avatar.defaultBg }
            : E(
                { backgroundColor: e.palette.grey[400] },
                e.applyStyles('dark', { backgroundColor: e.palette.grey[600] })
              )
        ),
      },
    ],
  })),
  z_ = Q('img', {
    name: 'MuiAvatar',
    slot: 'Img',
    overridesResolver: (e, t) => t.img,
  })({
    width: '100%',
    height: '100%',
    textAlign: 'center',
    objectFit: 'cover',
    color: 'transparent',
    textIndent: 1e4,
  }),
  B_ = Q($_, {
    name: 'MuiAvatar',
    slot: 'Fallback',
    overridesResolver: (e, t) => t.fallback,
  })({ width: '75%', height: '75%' });
function W_({ crossOrigin: e, referrerPolicy: t, src: n, srcSet: r }) {
  const [o, i] = b.useState(!1);
  return (
    b.useEffect(() => {
      if (!n && !r) return;
      i(!1);
      let s = !0;
      const a = new Image();
      return (
        (a.onload = () => {
          s && i('loaded');
        }),
        (a.onerror = () => {
          s && i('error');
        }),
        (a.crossOrigin = e),
        (a.referrerPolicy = t),
        (a.src = n),
        r && (a.srcset = r),
        () => {
          s = !1;
        }
      );
    }, [e, t, n, r]),
    o
  );
}
const V_ = b.forwardRef(function (t, n) {
    const r = L_({ props: t, name: 'MuiAvatar' }),
      {
        alt: o,
        children: i,
        className: s,
        component: a = 'div',
        slots: l = {},
        slotProps: u = {},
        imgProps: c,
        sizes: d,
        src: f,
        srcSet: v,
        variant: m = 'circular',
      } = r,
      h = J(r, D_);
    let w = null;
    const p = W_(E({}, c, { src: f, srcSet: v })),
      g = f || v,
      y = g && p !== 'error',
      x = E({}, r, { colorDefault: !y, component: a, variant: m }),
      S = N_(x),
      [P, T] = tR('img', {
        className: S.img,
        elementType: z_,
        externalForwardedProps: {
          slots: l,
          slotProps: { img: E({}, c, u.img) },
        },
        additionalProps: { alt: o, src: f, srcSet: v, sizes: d },
        ownerState: x,
      });
    return (
      y
        ? (w = C.jsx(P, E({}, T)))
        : i || i === 0
        ? (w = i)
        : g && o
        ? (w = o[0])
        : (w = C.jsx(B_, { ownerState: x, className: S.fallback })),
      C.jsx(
        F_,
        E({ as: a, ownerState: x, className: ie(S.root, s), ref: n }, h, {
          children: w,
        })
      )
    );
  }),
  U_ = [
    'addEndListener',
    'appear',
    'children',
    'easing',
    'in',
    'onEnter',
    'onEntered',
    'onEntering',
    'onExit',
    'onExited',
    'onExiting',
    'style',
    'timeout',
    'TransitionComponent',
  ],
  H_ = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  pb = b.forwardRef(function (t, n) {
    const r = ga(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: c,
        onEntered: d,
        onEntering: f,
        onExit: v,
        onExited: m,
        onExiting: h,
        style: w,
        timeout: p = o,
        TransitionComponent: g = nr,
      } = t,
      y = J(t, U_),
      x = b.useRef(null),
      S = pt(x, a.ref, n),
      P = (z) => (B) => {
        if (z) {
          const W = x.current;
          B === void 0 ? z(W) : z(W, B);
        }
      },
      T = P(f),
      _ = P((z, B) => {
        G1(z);
        const W = iu({ style: w, timeout: p, easing: l }, { mode: 'enter' });
        (z.style.webkitTransition = r.transitions.create('opacity', W)),
          (z.style.transition = r.transitions.create('opacity', W)),
          c && c(z, B);
      }),
      I = P(d),
      k = P(h),
      D = P((z) => {
        const B = iu({ style: w, timeout: p, easing: l }, { mode: 'exit' });
        (z.style.webkitTransition = r.transitions.create('opacity', B)),
          (z.style.transition = r.transitions.create('opacity', B)),
          v && v(z);
      }),
      $ = P(m),
      A = (z) => {
        i && i(x.current, z);
      };
    return C.jsx(
      g,
      E(
        {
          appear: s,
          in: u,
          nodeRef: x,
          onEnter: _,
          onEntered: I,
          onEntering: T,
          onExit: D,
          onExited: $,
          onExiting: k,
          addEndListener: A,
          timeout: p,
        },
        y,
        {
          children: (z, B) =>
            b.cloneElement(
              a,
              E(
                {
                  style: E(
                    {
                      opacity: 0,
                      visibility: z === 'exited' && !u ? 'hidden' : void 0,
                    },
                    H_[z],
                    w,
                    a.props.style
                  ),
                  ref: S,
                },
                B
              )
            ),
        }
      )
    );
  });
function G_(e) {
  return Ee('MuiBackdrop', e);
}
ge('MuiBackdrop', ['root', 'invisible']);
const K_ = [
    'children',
    'className',
    'component',
    'components',
    'componentsProps',
    'invisible',
    'open',
    'slotProps',
    'slots',
    'TransitionComponent',
    'transitionDuration',
  ],
  q_ = (e) => {
    const { classes: t, invisible: n } = e;
    return Se({ root: ['root', n && 'invisible'] }, G_, t);
  },
  X_ = Q('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    E(
      {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        WebkitTapHighlightColor: 'transparent',
      },
      e.invisible && { backgroundColor: 'transparent' }
    )
  ),
  mb = b.forwardRef(function (t, n) {
    var r, o, i;
    const s = be({ props: t, name: 'MuiBackdrop' }),
      {
        children: a,
        className: l,
        component: u = 'div',
        components: c = {},
        componentsProps: d = {},
        invisible: f = !1,
        open: v,
        slotProps: m = {},
        slots: h = {},
        TransitionComponent: w = pb,
        transitionDuration: p,
      } = s,
      g = J(s, K_),
      y = E({}, s, { component: u, invisible: f }),
      x = q_(y),
      S = (r = m.root) != null ? r : d.root;
    return C.jsx(
      w,
      E({ in: v, timeout: p }, g, {
        children: C.jsx(
          X_,
          E({ 'aria-hidden': !0 }, S, {
            as: (o = (i = h.root) != null ? i : c.Root) != null ? o : u,
            className: ie(x.root, l, S == null ? void 0 : S.className),
            ownerState: E({}, y, S == null ? void 0 : S.ownerState),
            classes: x,
            ref: n,
            children: a,
          })
        ),
      })
    );
  }),
  Y_ = ge('MuiBox', ['root']),
  Q_ = z1(),
  Et = y2({
    themeId: ma,
    defaultTheme: Q_,
    defaultClassName: Y_.root,
    generateClassName: t1.generate,
  });
function J_(e) {
  return Ee('MuiButton', e);
}
const Ya = ge('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorInfo',
    'colorWarning',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'icon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge',
  ]),
  Z_ = b.createContext({}),
  eM = b.createContext(void 0),
  tM = [
    'children',
    'color',
    'component',
    'className',
    'disabled',
    'disableElevation',
    'disableFocusRipple',
    'endIcon',
    'focusVisibleClassName',
    'fullWidth',
    'size',
    'startIcon',
    'type',
    'variant',
  ],
  nM = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          'root',
          i,
          `${i}${se(t)}`,
          `size${se(o)}`,
          `${i}Size${se(o)}`,
          `color${se(t)}`,
          n && 'disableElevation',
          r && 'fullWidth',
        ],
        label: ['label'],
        startIcon: ['icon', 'startIcon', `iconSize${se(o)}`],
        endIcon: ['icon', 'endIcon', `iconSize${se(o)}`],
      },
      l = Se(a, J_, s);
    return E({}, s, l);
  },
  hb = (e) =>
    E(
      {},
      e.size === 'small' && { '& > *:nth-of-type(1)': { fontSize: 18 } },
      e.size === 'medium' && { '& > *:nth-of-type(1)': { fontSize: 20 } },
      e.size === 'large' && { '& > *:nth-of-type(1)': { fontSize: 22 } }
    ),
  rM = Q($m, {
    shouldForwardProp: (e) => un(e) || e === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${se(n.color)}`],
        t[`size${se(n.size)}`],
        t[`${n.variant}Size${se(n.size)}`],
        n.color === 'inherit' && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o =
          e.palette.mode === 'light'
            ? e.palette.grey[300]
            : e.palette.grey[800],
        i =
          e.palette.mode === 'light'
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return E(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: '6px 16px',
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ['background-color', 'box-shadow', 'border-color', 'color'],
            { duration: e.transitions.duration.short }
          ),
          '&:hover': E(
            {
              textDecoration: 'none',
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Bt(e.palette.text.primary, e.palette.action.hoverOpacity),
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
            t.variant === 'text' &&
              t.color !== 'inherit' && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Bt(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            t.variant === 'outlined' &&
              t.color !== 'inherit' && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Bt(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            t.variant === 'contained' && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : i,
              boxShadow: (e.vars || e).shadows[4],
              '@media (hover: none)': {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === 'contained' &&
              t.color !== 'inherit' && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                '@media (hover: none)': {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          '&:active': E(
            {},
            t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${Ya.focusVisible}`]: E(
            {},
            t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Ya.disabled}`]: E(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === 'outlined' && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === 'contained' && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === 'text' && { padding: '6px 8px' },
        t.variant === 'text' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === 'outlined' && {
          padding: '5px 15px',
          border: '1px solid currentColor',
        },
        t.variant === 'outlined' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${Bt(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === 'contained' && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === 'contained' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === 'inherit' && {
          color: 'inherit',
          borderColor: 'currentColor',
        },
        t.size === 'small' &&
          t.variant === 'text' && {
            padding: '4px 5px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'text' && {
            padding: '8px 11px',
            fontSize: e.typography.pxToRem(15),
          },
        t.size === 'small' &&
          t.variant === 'outlined' && {
            padding: '3px 9px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'outlined' && {
            padding: '7px 21px',
            fontSize: e.typography.pxToRem(15),
          },
        t.size === 'small' &&
          t.variant === 'contained' && {
            padding: '4px 10px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'contained' && {
            padding: '8px 22px',
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: '100%' }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: 'none',
        '&:hover': { boxShadow: 'none' },
        [`&.${Ya.focusVisible}`]: { boxShadow: 'none' },
        '&:active': { boxShadow: 'none' },
        [`&.${Ya.disabled}`]: { boxShadow: 'none' },
      }
  ),
  oM = Q('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${se(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    E(
      { display: 'inherit', marginRight: 8, marginLeft: -4 },
      e.size === 'small' && { marginLeft: -2 },
      hb(e)
    )
  ),
  iM = Q('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${se(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    E(
      { display: 'inherit', marginRight: -4, marginLeft: 8 },
      e.size === 'small' && { marginRight: -2 },
      hb(e)
    )
  ),
  ai = b.forwardRef(function (t, n) {
    const r = b.useContext(Z_),
      o = b.useContext(eM),
      i = gm(r, t),
      s = be({ props: i, name: 'MuiButton' }),
      {
        children: a,
        color: l = 'primary',
        component: u = 'button',
        className: c,
        disabled: d = !1,
        disableElevation: f = !1,
        disableFocusRipple: v = !1,
        endIcon: m,
        focusVisibleClassName: h,
        fullWidth: w = !1,
        size: p = 'medium',
        startIcon: g,
        type: y,
        variant: x = 'text',
      } = s,
      S = J(s, tM),
      P = E({}, s, {
        color: l,
        component: u,
        disabled: d,
        disableElevation: f,
        disableFocusRipple: v,
        fullWidth: w,
        size: p,
        type: y,
        variant: x,
      }),
      T = nM(P),
      _ =
        g && C.jsx(oM, { className: T.startIcon, ownerState: P, children: g }),
      I = m && C.jsx(iM, { className: T.endIcon, ownerState: P, children: m }),
      k = o || '';
    return C.jsxs(
      rM,
      E(
        {
          ownerState: P,
          className: ie(r.className, T.root, c, k),
          component: u,
          disabled: d,
          focusRipple: !v,
          focusVisibleClassName: ie(T.focusVisible, h),
          ref: n,
          type: y,
        },
        S,
        { classes: T, children: [_, a, I] }
      )
    );
  });
function sM(e) {
  return Ee('MuiCircularProgress', e);
}
ge('MuiCircularProgress', [
  'root',
  'determinate',
  'indeterminate',
  'colorPrimary',
  'colorSecondary',
  'svg',
  'circle',
  'circleDeterminate',
  'circleIndeterminate',
  'circleDisableShrink',
]);
const aM = [
  'className',
  'color',
  'disableShrink',
  'size',
  'style',
  'thickness',
  'value',
  'variant',
];
let Oc = (e) => e,
  Sv,
  Ev,
  Cv,
  Pv;
const wr = 44,
  lM = Oi(
    Sv ||
      (Sv = Oc`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)
  ),
  uM = Oi(
    Ev ||
      (Ev = Oc`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)
  ),
  cM = (e) => {
    const { classes: t, variant: n, color: r, disableShrink: o } = e,
      i = {
        root: ['root', n, `color${se(r)}`],
        svg: ['svg'],
        circle: ['circle', `circle${se(n)}`, o && 'circleDisableShrink'],
      };
    return Se(i, sM, t);
  },
  dM = Q('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], t[`color${se(n.color)}`]];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      E(
        { display: 'inline-block' },
        e.variant === 'determinate' && {
          transition: t.transitions.create('transform'),
        },
        e.color !== 'inherit' && { color: (t.vars || t).palette[e.color].main }
      ),
    ({ ownerState: e }) =>
      e.variant === 'indeterminate' &&
      yc(
        Cv ||
          (Cv = Oc`
      animation: ${0} 1.4s linear infinite;
    `),
        lM
      )
  ),
  fM = Q('svg', {
    name: 'MuiCircularProgress',
    slot: 'Svg',
    overridesResolver: (e, t) => t.svg,
  })({ display: 'block' }),
  pM = Q('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.circle,
        t[`circle${se(n.variant)}`],
        n.disableShrink && t.circleDisableShrink,
      ];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      E(
        { stroke: 'currentColor' },
        e.variant === 'determinate' && {
          transition: t.transitions.create('stroke-dashoffset'),
        },
        e.variant === 'indeterminate' && {
          strokeDasharray: '80px, 200px',
          strokeDashoffset: 0,
        }
      ),
    ({ ownerState: e }) =>
      e.variant === 'indeterminate' &&
      !e.disableShrink &&
      yc(
        Pv ||
          (Pv = Oc`
      animation: ${0} 1.4s ease-in-out infinite;
    `),
        uM
      )
  ),
  mM = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiCircularProgress' }),
      {
        className: o,
        color: i = 'primary',
        disableShrink: s = !1,
        size: a = 40,
        style: l,
        thickness: u = 3.6,
        value: c = 0,
        variant: d = 'indeterminate',
      } = r,
      f = J(r, aM),
      v = E({}, r, {
        color: i,
        disableShrink: s,
        size: a,
        thickness: u,
        value: c,
        variant: d,
      }),
      m = cM(v),
      h = {},
      w = {},
      p = {};
    if (d === 'determinate') {
      const g = 2 * Math.PI * ((wr - u) / 2);
      (h.strokeDasharray = g.toFixed(3)),
        (p['aria-valuenow'] = Math.round(c)),
        (h.strokeDashoffset = `${(((100 - c) / 100) * g).toFixed(3)}px`),
        (w.transform = 'rotate(-90deg)');
    }
    return C.jsx(
      dM,
      E(
        {
          className: ie(m.root, o),
          style: E({ width: a, height: a }, w, l),
          ownerState: v,
          ref: n,
          role: 'progressbar',
        },
        p,
        f,
        {
          children: C.jsx(fM, {
            className: m.svg,
            ownerState: v,
            viewBox: `${wr / 2} ${wr / 2} ${wr} ${wr}`,
            children: C.jsx(pM, {
              className: m.circle,
              style: h,
              ownerState: v,
              cx: wr,
              cy: wr,
              r: (wr - u) / 2,
              fill: 'none',
              strokeWidth: u,
            }),
          }),
        }
      )
    );
  }),
  hM = j2({
    createStyledComponent: Q('div', {
      name: 'MuiContainer',
      slot: 'Root',
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${se(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => be({ props: e, name: 'MuiContainer' }),
  }),
  gM = (e, t) =>
    E(
      {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        boxSizing: 'border-box',
        WebkitTextSizeAdjust: '100%',
      },
      t && !e.vars && { colorScheme: e.palette.mode }
    ),
  vM = (e) =>
    E({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
      backgroundColor: (e.vars || e).palette.background.default,
      '@media print': { backgroundColor: (e.vars || e).palette.common.white },
    }),
  yM = (e, t = !1) => {
    var n;
    const r = {};
    t &&
      e.colorSchemes &&
      Object.entries(e.colorSchemes).forEach(([s, a]) => {
        var l;
        r[e.getColorSchemeSelector(s).replace(/\s*&/, '')] = {
          colorScheme: (l = a.palette) == null ? void 0 : l.mode,
        };
      });
    let o = E(
      {
        html: gM(e, t),
        '*, *::before, *::after': { boxSizing: 'inherit' },
        'strong, b': { fontWeight: e.typography.fontWeightBold },
        body: E({ margin: 0 }, vM(e), {
          '&::backdrop': {
            backgroundColor: (e.vars || e).palette.background.default,
          },
        }),
      },
      r
    );
    const i =
      (n = e.components) == null || (n = n.MuiCssBaseline) == null
        ? void 0
        : n.styleOverrides;
    return i && (o = [o, i]), o;
  };
function xM(e) {
  const t = be({ props: e, name: 'MuiCssBaseline' }),
    { children: n, enableColorScheme: r = !1 } = t;
  return C.jsxs(b.Fragment, {
    children: [C.jsx(fb, { styles: (o) => yM(o, r) }), n],
  });
}
function bM(e) {
  return Ee('MuiModal', e);
}
ge('MuiModal', ['root', 'hidden', 'backdrop']);
const wM = [
    'BackdropComponent',
    'BackdropProps',
    'classes',
    'className',
    'closeAfterTransition',
    'children',
    'container',
    'component',
    'components',
    'componentsProps',
    'disableAutoFocus',
    'disableEnforceFocus',
    'disableEscapeKeyDown',
    'disablePortal',
    'disableRestoreFocus',
    'disableScrollLock',
    'hideBackdrop',
    'keepMounted',
    'onBackdropClick',
    'onClose',
    'onTransitionEnter',
    'onTransitionExited',
    'open',
    'slotProps',
    'slots',
    'theme',
  ],
  SM = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return Se(
      { root: ['root', !t && n && 'hidden'], backdrop: ['backdrop'] },
      bM,
      r
    );
  },
  EM = Q('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    E(
      {
        position: 'fixed',
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: 'hidden' }
    )
  ),
  CM = Q(mb, {
    name: 'MuiModal',
    slot: 'Backdrop',
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  gb = b.forwardRef(function (t, n) {
    var r, o, i, s, a, l;
    const u = be({ name: 'MuiModal', props: t }),
      {
        BackdropComponent: c = CM,
        BackdropProps: d,
        className: f,
        closeAfterTransition: v = !1,
        children: m,
        container: h,
        component: w,
        components: p = {},
        componentsProps: g = {},
        disableAutoFocus: y = !1,
        disableEnforceFocus: x = !1,
        disableEscapeKeyDown: S = !1,
        disablePortal: P = !1,
        disableRestoreFocus: T = !1,
        disableScrollLock: _ = !1,
        hideBackdrop: I = !1,
        keepMounted: k = !1,
        onBackdropClick: D,
        open: $,
        slotProps: A,
        slots: z,
      } = u,
      B = J(u, wM),
      W = E({}, u, {
        closeAfterTransition: v,
        disableAutoFocus: y,
        disableEnforceFocus: x,
        disableEscapeKeyDown: S,
        disablePortal: P,
        disableRestoreFocus: T,
        disableScrollLock: _,
        hideBackdrop: I,
        keepMounted: k,
      }),
      {
        getRootProps: M,
        getBackdropProps: O,
        getTransitionProps: N,
        portalRef: H,
        isTopModal: oe,
        exited: ee,
        hasTransition: he,
      } = QR(E({}, W, { rootRef: n })),
      te = E({}, W, { exited: ee }),
      de = SM(te),
      ue = {};
    if ((m.props.tabIndex === void 0 && (ue.tabIndex = '-1'), he)) {
      const { onEnter: pe, onExited: ye } = N();
      (ue.onEnter = pe), (ue.onExited = ye);
    }
    const Re =
        (r = (o = z == null ? void 0 : z.root) != null ? o : p.Root) != null
          ? r
          : EM,
      we =
        (i = (s = z == null ? void 0 : z.backdrop) != null ? s : p.Backdrop) !=
        null
          ? i
          : c,
      ve = (a = A == null ? void 0 : A.root) != null ? a : g.root,
      Ne = (l = A == null ? void 0 : A.backdrop) != null ? l : g.backdrop,
      fe = bo({
        elementType: Re,
        externalSlotProps: ve,
        externalForwardedProps: B,
        getSlotProps: M,
        additionalProps: { ref: n, as: w },
        ownerState: te,
        className: ie(
          f,
          ve == null ? void 0 : ve.className,
          de == null ? void 0 : de.root,
          !te.open && te.exited && (de == null ? void 0 : de.hidden)
        ),
      }),
      Pe = bo({
        elementType: we,
        externalSlotProps: Ne,
        additionalProps: d,
        getSlotProps: (pe) =>
          O(
            E({}, pe, {
              onClick: (ye) => {
                D && D(ye), pe != null && pe.onClick && pe.onClick(ye);
              },
            })
          ),
        className: ie(
          Ne == null ? void 0 : Ne.className,
          d == null ? void 0 : d.className,
          de == null ? void 0 : de.backdrop
        ),
        ownerState: te,
      });
    return !k && !$ && (!he || ee)
      ? null
      : C.jsx(J1, {
          ref: H,
          container: h,
          disablePortal: P,
          children: C.jsxs(
            Re,
            E({}, fe, {
              children: [
                !I && c ? C.jsx(we, E({}, Pe)) : null,
                C.jsx(BR, {
                  disableEnforceFocus: x,
                  disableAutoFocus: y,
                  disableRestoreFocus: T,
                  isEnabled: oe,
                  open: $,
                  children: b.cloneElement(m, ue),
                }),
              ],
            })
          ),
        });
  });
function PM(e) {
  return Ee('MuiDialog', e);
}
const bd = ge('MuiDialog', [
    'root',
    'scrollPaper',
    'scrollBody',
    'container',
    'paper',
    'paperScrollPaper',
    'paperScrollBody',
    'paperWidthFalse',
    'paperWidthXs',
    'paperWidthSm',
    'paperWidthMd',
    'paperWidthLg',
    'paperWidthXl',
    'paperFullWidth',
    'paperFullScreen',
  ]),
  vb = b.createContext({}),
  TM = [
    'aria-describedby',
    'aria-labelledby',
    'BackdropComponent',
    'BackdropProps',
    'children',
    'className',
    'disableEscapeKeyDown',
    'fullScreen',
    'fullWidth',
    'maxWidth',
    'onBackdropClick',
    'onClose',
    'open',
    'PaperComponent',
    'PaperProps',
    'scroll',
    'TransitionComponent',
    'transitionDuration',
    'TransitionProps',
  ],
  kM = Q(mb, {
    name: 'MuiDialog',
    slot: 'Backdrop',
    overrides: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  RM = (e) => {
    const {
        classes: t,
        scroll: n,
        maxWidth: r,
        fullWidth: o,
        fullScreen: i,
      } = e,
      s = {
        root: ['root'],
        container: ['container', `scroll${se(n)}`],
        paper: [
          'paper',
          `paperScroll${se(n)}`,
          `paperWidth${se(String(r))}`,
          o && 'paperFullWidth',
          i && 'paperFullScreen',
        ],
      };
    return Se(s, PM, t);
  },
  OM = Q(gb, {
    name: 'MuiDialog',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({ '@media print': { position: 'absolute !important' } }),
  _M = Q('div', {
    name: 'MuiDialog',
    slot: 'Container',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.container, t[`scroll${se(n.scroll)}`]];
    },
  })(({ ownerState: e }) =>
    E(
      { height: '100%', '@media print': { height: 'auto' }, outline: 0 },
      e.scroll === 'paper' && {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      e.scroll === 'body' && {
        overflowY: 'auto',
        overflowX: 'hidden',
        textAlign: 'center',
        '&::after': {
          content: '""',
          display: 'inline-block',
          verticalAlign: 'middle',
          height: '100%',
          width: '0',
        },
      }
    )
  ),
  MM = Q(Sc, {
    name: 'MuiDialog',
    slot: 'Paper',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`scrollPaper${se(n.scroll)}`],
        t[`paperWidth${se(String(n.maxWidth))}`],
        n.fullWidth && t.paperFullWidth,
        n.fullScreen && t.paperFullScreen,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    E(
      {
        margin: 32,
        position: 'relative',
        overflowY: 'auto',
        '@media print': { overflowY: 'visible', boxShadow: 'none' },
      },
      t.scroll === 'paper' && {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 'calc(100% - 64px)',
      },
      t.scroll === 'body' && {
        display: 'inline-block',
        verticalAlign: 'middle',
        textAlign: 'left',
      },
      !t.maxWidth && { maxWidth: 'calc(100% - 64px)' },
      t.maxWidth === 'xs' && {
        maxWidth:
          e.breakpoints.unit === 'px'
            ? Math.max(e.breakpoints.values.xs, 444)
            : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
        [`&.${bd.paperScrollBody}`]: {
          [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]:
            { maxWidth: 'calc(100% - 64px)' },
        },
      },
      t.maxWidth &&
        t.maxWidth !== 'xs' && {
          maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
          [`&.${bd.paperScrollBody}`]: {
            [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
              maxWidth: 'calc(100% - 64px)',
            },
          },
        },
      t.fullWidth && { width: 'calc(100% - 64px)' },
      t.fullScreen && {
        margin: 0,
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        maxHeight: 'none',
        borderRadius: 0,
        [`&.${bd.paperScrollBody}`]: { margin: 0, maxWidth: '100%' },
      }
    )
  ),
  AM = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiDialog' }),
      o = ga(),
      i = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        'aria-describedby': s,
        'aria-labelledby': a,
        BackdropComponent: l,
        BackdropProps: u,
        children: c,
        className: d,
        disableEscapeKeyDown: f = !1,
        fullScreen: v = !1,
        fullWidth: m = !1,
        maxWidth: h = 'sm',
        onBackdropClick: w,
        onClose: p,
        open: g,
        PaperComponent: y = Sc,
        PaperProps: x = {},
        scroll: S = 'paper',
        TransitionComponent: P = pb,
        transitionDuration: T = i,
        TransitionProps: _,
      } = r,
      I = J(r, TM),
      k = E({}, r, {
        disableEscapeKeyDown: f,
        fullScreen: v,
        fullWidth: m,
        maxWidth: h,
        scroll: S,
      }),
      D = RM(k),
      $ = b.useRef(),
      A = (M) => {
        $.current = M.target === M.currentTarget;
      },
      z = (M) => {
        $.current &&
          (($.current = null), w && w(M), p && p(M, 'backdropClick'));
      },
      B = Xu(a),
      W = b.useMemo(() => ({ titleId: B }), [B]);
    return C.jsx(
      OM,
      E(
        {
          className: ie(D.root, d),
          closeAfterTransition: !0,
          components: { Backdrop: kM },
          componentsProps: { backdrop: E({ transitionDuration: T, as: l }, u) },
          disableEscapeKeyDown: f,
          onClose: p,
          open: g,
          ref: n,
          onClick: z,
          ownerState: k,
        },
        I,
        {
          children: C.jsx(
            P,
            E({ appear: !0, in: g, timeout: T, role: 'presentation' }, _, {
              children: C.jsx(_M, {
                className: ie(D.container),
                onMouseDown: A,
                ownerState: k,
                children: C.jsx(
                  MM,
                  E(
                    {
                      as: y,
                      elevation: 24,
                      role: 'dialog',
                      'aria-describedby': s,
                      'aria-labelledby': B,
                    },
                    x,
                    {
                      className: ie(D.paper, x.className),
                      ownerState: k,
                      children: C.jsx(vb.Provider, { value: W, children: c }),
                    }
                  )
                ),
              }),
            })
          ),
        }
      )
    );
  });
function IM(e) {
  return Ee('MuiDialogActions', e);
}
ge('MuiDialogActions', ['root', 'spacing']);
const $M = ['className', 'disableSpacing'],
  jM = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return Se({ root: ['root', !n && 'spacing'] }, IM, t);
  },
  DM = Q('div', {
    name: 'MuiDialogActions',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableSpacing && t.spacing];
    },
  })(({ ownerState: e }) =>
    E(
      {
        display: 'flex',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'flex-end',
        flex: '0 0 auto',
      },
      !e.disableSpacing && {
        '& > :not(style) ~ :not(style)': { marginLeft: 8 },
      }
    )
  ),
  LM = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiDialogActions' }),
      { className: o, disableSpacing: i = !1 } = r,
      s = J(r, $M),
      a = E({}, r, { disableSpacing: i }),
      l = jM(a);
    return C.jsx(DM, E({ className: ie(l.root, o), ownerState: a, ref: n }, s));
  });
function NM(e) {
  return Ee('MuiDialogContent', e);
}
ge('MuiDialogContent', ['root', 'dividers']);
function FM(e) {
  return Ee('MuiDialogTitle', e);
}
const zM = ge('MuiDialogTitle', ['root']),
  BM = ['className', 'dividers'],
  WM = (e) => {
    const { classes: t, dividers: n } = e;
    return Se({ root: ['root', n && 'dividers'] }, NM, t);
  },
  VM = Q('div', {
    name: 'MuiDialogContent',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.dividers && t.dividers];
    },
  })(({ theme: e, ownerState: t }) =>
    E(
      {
        flex: '1 1 auto',
        WebkitOverflowScrolling: 'touch',
        overflowY: 'auto',
        padding: '20px 24px',
      },
      t.dividers
        ? {
            padding: '16px 24px',
            borderTop: `1px solid ${(e.vars || e).palette.divider}`,
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          }
        : { [`.${zM.root} + &`]: { paddingTop: 0 } }
    )
  ),
  UM = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiDialogContent' }),
      { className: o, dividers: i = !1 } = r,
      s = J(r, BM),
      a = E({}, r, { dividers: i }),
      l = WM(a);
    return C.jsx(VM, E({ className: ie(l.root, o), ownerState: a, ref: n }, s));
  });
function HM(e) {
  return Ee('MuiDialogContentText', e);
}
ge('MuiDialogContentText', ['root']);
const GM = ['children', 'className'],
  KM = (e) => {
    const { classes: t } = e,
      r = Se({ root: ['root'] }, HM, t);
    return E({}, t, r);
  },
  qM = Q(et, {
    shouldForwardProp: (e) => un(e) || e === 'classes',
    name: 'MuiDialogContentText',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({}),
  XM = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiDialogContentText' }),
      { className: o } = r,
      i = J(r, GM),
      s = KM(i);
    return C.jsx(
      qM,
      E(
        {
          component: 'p',
          variant: 'body1',
          color: 'text.secondary',
          ref: n,
          ownerState: i,
          className: ie(s.root, o),
        },
        r,
        { classes: s }
      )
    );
  }),
  YM = ['className', 'id'],
  QM = (e) => {
    const { classes: t } = e;
    return Se({ root: ['root'] }, FM, t);
  },
  JM = Q(et, {
    name: 'MuiDialogTitle',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({ padding: '16px 24px', flex: '0 0 auto' }),
  ZM = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiDialogTitle' }),
      { className: o, id: i } = r,
      s = J(r, YM),
      a = r,
      l = QM(a),
      { titleId: u = i } = b.useContext(vb);
    return C.jsx(
      JM,
      E(
        {
          component: 'h2',
          className: ie(l.root, o),
          ownerState: a,
          ref: n,
          variant: 'h6',
          id: i ?? u,
        },
        s
      )
    );
  }),
  Tv = ge('MuiDivider', [
    'root',
    'absolute',
    'fullWidth',
    'inset',
    'middle',
    'flexItem',
    'light',
    'vertical',
    'withChildren',
    'withChildrenVertical',
    'textAlignRight',
    'textAlignLeft',
    'wrapper',
    'wrapperVertical',
  ]),
  eA = [
    'disableUnderline',
    'components',
    'componentsProps',
    'fullWidth',
    'hiddenLabel',
    'inputComponent',
    'multiline',
    'slotProps',
    'slots',
    'type',
  ],
  tA = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = Se({ root: ['root', !n && 'underline'], input: ['input'] }, A_, t);
    return E({}, t, o);
  },
  nA = Q(kc, {
    shouldForwardProp: (e) => un(e) || e === 'classes',
    name: 'MuiFilledInput',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Pc(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    const r = e.palette.mode === 'light',
      o = r ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)',
      i = r ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)',
      s = r ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)',
      a = r ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)';
    return E(
      {
        position: 'relative',
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create('background-color', {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        '&:hover': {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
          '@media (hover: none)': {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
        },
        [`&.${Qr.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        },
        [`&.${Qr.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a,
        },
      },
      !t.disableUnderline && {
        '&::after': {
          borderBottom: `2px solid ${
            (n = (e.vars || e).palette[t.color || 'primary']) == null
              ? void 0
              : n.main
          }`,
          left: 0,
          bottom: 0,
          content: '""',
          position: 'absolute',
          right: 0,
          transform: 'scaleX(0)',
          transition: e.transitions.create('transform', {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut,
          }),
          pointerEvents: 'none',
        },
        [`&.${Qr.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
        [`&.${Qr.error}`]: {
          '&::before, &::after': {
            borderBottomColor: (e.vars || e).palette.error.main,
          },
        },
        '&::before': {
          borderBottom: `1px solid ${
            e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
              : o
          }`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: 'absolute',
          right: 0,
          transition: e.transitions.create('border-bottom-color', {
            duration: e.transitions.duration.shorter,
          }),
          pointerEvents: 'none',
        },
        [`&:hover:not(.${Qr.disabled}, .${Qr.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
        },
        [`&.${Qr.disabled}:before`]: { borderBottomStyle: 'dotted' },
      },
      t.startAdornment && { paddingLeft: 12 },
      t.endAdornment && { paddingRight: 12 },
      t.multiline &&
        E(
          { padding: '25px 12px 8px' },
          t.size === 'small' && { paddingTop: 21, paddingBottom: 4 },
          t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
          t.hiddenLabel &&
            t.size === 'small' && { paddingTop: 8, paddingBottom: 9 }
        )
    );
  }),
  rA = Q(Rc, { name: 'MuiFilledInput', slot: 'Input', overridesResolver: Tc })(
    ({ theme: e, ownerState: t }) =>
      E(
        { paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 },
        !e.vars && {
          '&:-webkit-autofill': {
            WebkitBoxShadow:
              e.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
            WebkitTextFillColor: e.palette.mode === 'light' ? null : '#fff',
            caretColor: e.palette.mode === 'light' ? null : '#fff',
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit',
          },
        },
        e.vars && {
          '&:-webkit-autofill': {
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit',
          },
          [e.getColorSchemeSelector('dark')]: {
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #266798 inset',
              WebkitTextFillColor: '#fff',
              caretColor: '#fff',
            },
          },
        },
        t.size === 'small' && { paddingTop: 21, paddingBottom: 4 },
        t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
        t.startAdornment && { paddingLeft: 0 },
        t.endAdornment && { paddingRight: 0 },
        t.hiddenLabel &&
          t.size === 'small' && { paddingTop: 8, paddingBottom: 9 },
        t.multiline && {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }
      )
  ),
  Hm = b.forwardRef(function (t, n) {
    var r, o, i, s;
    const a = be({ props: t, name: 'MuiFilledInput' }),
      {
        components: l = {},
        componentsProps: u,
        fullWidth: c = !1,
        inputComponent: d = 'input',
        multiline: f = !1,
        slotProps: v,
        slots: m = {},
        type: h = 'text',
      } = a,
      w = J(a, eA),
      p = E({}, a, { fullWidth: c, inputComponent: d, multiline: f, type: h }),
      g = tA(a),
      y = { root: { ownerState: p }, input: { ownerState: p } },
      x = v ?? u ? tn(y, v ?? u) : y,
      S = (r = (o = m.root) != null ? o : l.Root) != null ? r : nA,
      P = (i = (s = m.input) != null ? s : l.Input) != null ? i : rA;
    return C.jsx(
      Um,
      E(
        {
          slots: { root: S, input: P },
          componentsProps: x,
          fullWidth: c,
          inputComponent: d,
          multiline: f,
          ref: n,
          type: h,
        },
        w,
        { classes: g }
      )
    );
  });
Hm.muiName = 'Input';
function oA(e) {
  return Ee('MuiFormControl', e);
}
ge('MuiFormControl', [
  'root',
  'marginNone',
  'marginNormal',
  'marginDense',
  'fullWidth',
  'disabled',
]);
const iA = [
    'children',
    'className',
    'color',
    'component',
    'disabled',
    'error',
    'focused',
    'fullWidth',
    'hiddenLabel',
    'margin',
    'required',
    'size',
    'variant',
  ],
  sA = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = {
        root: ['root', n !== 'none' && `margin${se(n)}`, r && 'fullWidth'],
      };
    return Se(o, oA, t);
  },
  aA = Q('div', {
    name: 'MuiFormControl',
    slot: 'Root',
    overridesResolver: ({ ownerState: e }, t) =>
      E({}, t.root, t[`margin${se(e.margin)}`], e.fullWidth && t.fullWidth),
  })(({ ownerState: e }) =>
    E(
      {
        display: 'inline-flex',
        flexDirection: 'column',
        position: 'relative',
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: 'top',
      },
      e.margin === 'normal' && { marginTop: 16, marginBottom: 8 },
      e.margin === 'dense' && { marginTop: 8, marginBottom: 4 },
      e.fullWidth && { width: '100%' }
    )
  ),
  lA = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiFormControl' }),
      {
        children: o,
        className: i,
        color: s = 'primary',
        component: a = 'div',
        disabled: l = !1,
        error: u = !1,
        focused: c,
        fullWidth: d = !1,
        hiddenLabel: f = !1,
        margin: v = 'none',
        required: m = !1,
        size: h = 'medium',
        variant: w = 'outlined',
      } = r,
      p = J(r, iA),
      g = E({}, r, {
        color: s,
        component: a,
        disabled: l,
        error: u,
        fullWidth: d,
        hiddenLabel: f,
        margin: v,
        required: m,
        size: h,
        variant: w,
      }),
      y = sA(g),
      [x, S] = b.useState(() => {
        let A = !1;
        return (
          o &&
            b.Children.forEach(o, (z) => {
              if (!vl(z, ['Input', 'Select'])) return;
              const B = vl(z, ['Select']) ? z.props.input : z;
              B && C_(B.props) && (A = !0);
            }),
          A
        );
      }),
      [P, T] = b.useState(() => {
        let A = !1;
        return (
          o &&
            b.Children.forEach(o, (z) => {
              vl(z, ['Input', 'Select']) &&
                (lu(z.props, !0) || lu(z.props.inputProps, !0)) &&
                (A = !0);
            }),
          A
        );
      }),
      [_, I] = b.useState(!1);
    l && _ && I(!1);
    const k = c !== void 0 && !l ? c : _;
    let D;
    const $ = b.useMemo(
      () => ({
        adornedStart: x,
        setAdornedStart: S,
        color: s,
        disabled: l,
        error: u,
        filled: P,
        focused: k,
        fullWidth: d,
        hiddenLabel: f,
        size: h,
        onBlur: () => {
          I(!1);
        },
        onEmpty: () => {
          T(!1);
        },
        onFilled: () => {
          T(!0);
        },
        onFocus: () => {
          I(!0);
        },
        registerEffect: D,
        required: m,
        variant: w,
      }),
      [x, s, l, u, P, k, d, f, D, m, h, w]
    );
    return C.jsx(Vm.Provider, {
      value: $,
      children: C.jsx(
        aA,
        E({ as: a, ownerState: g, className: ie(y.root, i), ref: n }, p, {
          children: o,
        })
      ),
    });
  });
function uA(e) {
  return Ee('MuiFormHelperText', e);
}
const kv = ge('MuiFormHelperText', [
  'root',
  'error',
  'disabled',
  'sizeSmall',
  'sizeMedium',
  'contained',
  'focused',
  'filled',
  'required',
]);
var Rv;
const cA = [
    'children',
    'className',
    'component',
    'disabled',
    'error',
    'filled',
    'focused',
    'margin',
    'required',
    'variant',
  ],
  dA = (e) => {
    const {
        classes: t,
        contained: n,
        size: r,
        disabled: o,
        error: i,
        filled: s,
        focused: a,
        required: l,
      } = e,
      u = {
        root: [
          'root',
          o && 'disabled',
          i && 'error',
          r && `size${se(r)}`,
          n && 'contained',
          a && 'focused',
          s && 'filled',
          l && 'required',
        ],
      };
    return Se(u, uA, t);
  },
  fA = Q('p', {
    name: 'MuiFormHelperText',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.size && t[`size${se(n.size)}`],
        n.contained && t.contained,
        n.filled && t.filled,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    E(
      { color: (e.vars || e).palette.text.secondary },
      e.typography.caption,
      {
        textAlign: 'left',
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${kv.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${kv.error}`]: { color: (e.vars || e).palette.error.main },
      },
      t.size === 'small' && { marginTop: 4 },
      t.contained && { marginLeft: 14, marginRight: 14 }
    )
  ),
  pA = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiFormHelperText' }),
      { children: o, className: i, component: s = 'p' } = r,
      a = J(r, cA),
      l = $i(),
      u = Ii({
        props: r,
        muiFormControl: l,
        states: [
          'variant',
          'size',
          'disabled',
          'error',
          'filled',
          'focused',
          'required',
        ],
      }),
      c = E({}, r, {
        component: s,
        contained: u.variant === 'filled' || u.variant === 'outlined',
        variant: u.variant,
        size: u.size,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      d = dA(c);
    return C.jsx(
      fA,
      E({ as: s, ownerState: c, className: ie(d.root, i), ref: n }, a, {
        children:
          o === ' '
            ? Rv ||
              (Rv = C.jsx('span', { className: 'notranslate', children: '​' }))
            : o,
      })
    );
  });
function mA(e) {
  return Ee('MuiFormLabel', e);
}
const Ps = ge('MuiFormLabel', [
    'root',
    'colorSecondary',
    'focused',
    'disabled',
    'error',
    'filled',
    'required',
    'asterisk',
  ]),
  hA = [
    'children',
    'className',
    'color',
    'component',
    'disabled',
    'error',
    'filled',
    'focused',
    'required',
  ],
  gA = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: s,
        required: a,
      } = e,
      l = {
        root: [
          'root',
          `color${se(n)}`,
          o && 'disabled',
          i && 'error',
          s && 'filled',
          r && 'focused',
          a && 'required',
        ],
        asterisk: ['asterisk', i && 'error'],
      };
    return Se(l, mA, t);
  },
  vA = Q('label', {
    name: 'MuiFormLabel',
    slot: 'Root',
    overridesResolver: ({ ownerState: e }, t) =>
      E(
        {},
        t.root,
        e.color === 'secondary' && t.colorSecondary,
        e.filled && t.filled
      ),
  })(({ theme: e, ownerState: t }) =>
    E({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
      lineHeight: '1.4375em',
      padding: 0,
      position: 'relative',
      [`&.${Ps.focused}`]: { color: (e.vars || e).palette[t.color].main },
      [`&.${Ps.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${Ps.error}`]: { color: (e.vars || e).palette.error.main },
    })
  ),
  yA = Q('span', {
    name: 'MuiFormLabel',
    slot: 'Asterisk',
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${Ps.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  xA = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiFormLabel' }),
      { children: o, className: i, component: s = 'label' } = r,
      a = J(r, hA),
      l = $i(),
      u = Ii({
        props: r,
        muiFormControl: l,
        states: ['color', 'required', 'focused', 'disabled', 'error', 'filled'],
      }),
      c = E({}, r, {
        color: u.color || 'primary',
        component: s,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      d = gA(c);
    return C.jsxs(
      vA,
      E({ as: s, ownerState: c, className: ie(d.root, i), ref: n }, a, {
        children: [
          o,
          u.required &&
            C.jsxs(yA, {
              ownerState: c,
              'aria-hidden': !0,
              className: d.asterisk,
              children: [' ', '*'],
            }),
        ],
      })
    );
  }),
  Ov = b.createContext();
function bA(e) {
  return Ee('MuiGrid', e);
}
const wA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  SA = ['column-reverse', 'column', 'row-reverse', 'row'],
  EA = ['nowrap', 'wrap-reverse', 'wrap'],
  es = ['auto', !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  Qs = ge('MuiGrid', [
    'root',
    'container',
    'item',
    'zeroMinWidth',
    ...wA.map((e) => `spacing-xs-${e}`),
    ...SA.map((e) => `direction-xs-${e}`),
    ...EA.map((e) => `wrap-xs-${e}`),
    ...es.map((e) => `grid-xs-${e}`),
    ...es.map((e) => `grid-sm-${e}`),
    ...es.map((e) => `grid-md-${e}`),
    ...es.map((e) => `grid-lg-${e}`),
    ...es.map((e) => `grid-xl-${e}`),
  ]),
  CA = [
    'className',
    'columns',
    'columnSpacing',
    'component',
    'container',
    'direction',
    'item',
    'rowSpacing',
    'spacing',
    'wrap',
    'zeroMinWidth',
  ];
function li(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), '') || 'px'}`;
}
function PA({ theme: e, ownerState: t }) {
  let n;
  return e.breakpoints.keys.reduce((r, o) => {
    let i = {};
    if ((t[o] && (n = t[o]), !n)) return r;
    if (n === !0) i = { flexBasis: 0, flexGrow: 1, maxWidth: '100%' };
    else if (n === 'auto')
      i = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto',
      };
    else {
      const s = Qu({ values: t.columns, breakpoints: e.breakpoints.values }),
        a = typeof s == 'object' ? s[o] : s;
      if (a == null) return r;
      const l = `${Math.round((n / a) * 1e8) / 1e6}%`;
      let u = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const c = e.spacing(t.columnSpacing);
        if (c !== '0px') {
          const d = `calc(${l} + ${li(c)})`;
          u = { flexBasis: d, maxWidth: d };
        }
      }
      i = E({ flexBasis: l, flexGrow: 0, maxWidth: l }, u);
    }
    return (
      e.breakpoints.values[o] === 0
        ? Object.assign(r, i)
        : (r[e.breakpoints.up(o)] = i),
      r
    );
  }, {});
}
function TA({ theme: e, ownerState: t }) {
  const n = Qu({ values: t.direction, breakpoints: e.breakpoints.values });
  return Cn({ theme: e }, n, (r) => {
    const o = { flexDirection: r };
    return (
      r.indexOf('column') === 0 &&
        (o[`& > .${Qs.item}`] = { maxWidth: 'none' }),
      o
    );
  });
}
function yb({ breakpoints: e, values: t }) {
  let n = '';
  Object.keys(t).forEach((o) => {
    n === '' && t[o] !== 0 && (n = o);
  });
  const r = Object.keys(e).sort((o, i) => e[o] - e[i]);
  return r.slice(0, r.indexOf(n));
}
function kA({ theme: e, ownerState: t }) {
  const { container: n, rowSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = Qu({ values: r, breakpoints: e.breakpoints.values });
    let s;
    typeof i == 'object' &&
      (s = yb({ breakpoints: e.breakpoints.values, values: i })),
      (o = Cn({ theme: e }, i, (a, l) => {
        var u;
        const c = e.spacing(a);
        return c !== '0px'
          ? {
              marginTop: `-${li(c)}`,
              [`& > .${Qs.item}`]: { paddingTop: li(c) },
            }
          : (u = s) != null && u.includes(l)
          ? {}
          : { marginTop: 0, [`& > .${Qs.item}`]: { paddingTop: 0 } };
      }));
  }
  return o;
}
function RA({ theme: e, ownerState: t }) {
  const { container: n, columnSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = Qu({ values: r, breakpoints: e.breakpoints.values });
    let s;
    typeof i == 'object' &&
      (s = yb({ breakpoints: e.breakpoints.values, values: i })),
      (o = Cn({ theme: e }, i, (a, l) => {
        var u;
        const c = e.spacing(a);
        return c !== '0px'
          ? {
              width: `calc(100% + ${li(c)})`,
              marginLeft: `-${li(c)}`,
              [`& > .${Qs.item}`]: { paddingLeft: li(c) },
            }
          : (u = s) != null && u.includes(l)
          ? {}
          : {
              width: '100%',
              marginLeft: 0,
              [`& > .${Qs.item}`]: { paddingLeft: 0 },
            };
      }));
  }
  return o;
}
function OA(e, t, n = {}) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == 'string' && !Number.isNaN(Number(e))) ||
    typeof e == 'number'
  )
    return [n[`spacing-xs-${String(e)}`]];
  const r = [];
  return (
    t.forEach((o) => {
      const i = e[o];
      Number(i) > 0 && r.push(n[`spacing-${o}-${String(i)}`]);
    }),
    r
  );
}
const _A = Q('div', {
  name: 'MuiGrid',
  slot: 'Root',
  overridesResolver: (e, t) => {
    const { ownerState: n } = e,
      {
        container: r,
        direction: o,
        item: i,
        spacing: s,
        wrap: a,
        zeroMinWidth: l,
        breakpoints: u,
      } = n;
    let c = [];
    r && (c = OA(s, u, t));
    const d = [];
    return (
      u.forEach((f) => {
        const v = n[f];
        v && d.push(t[`grid-${f}-${String(v)}`]);
      }),
      [
        t.root,
        r && t.container,
        i && t.item,
        l && t.zeroMinWidth,
        ...c,
        o !== 'row' && t[`direction-xs-${String(o)}`],
        a !== 'wrap' && t[`wrap-xs-${String(a)}`],
        ...d,
      ]
    );
  },
})(
  ({ ownerState: e }) =>
    E(
      { boxSizing: 'border-box' },
      e.container && { display: 'flex', flexWrap: 'wrap', width: '100%' },
      e.item && { margin: 0 },
      e.zeroMinWidth && { minWidth: 0 },
      e.wrap !== 'wrap' && { flexWrap: e.wrap }
    ),
  TA,
  kA,
  RA,
  PA
);
function MA(e, t) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == 'string' && !Number.isNaN(Number(e))) ||
    typeof e == 'number'
  )
    return [`spacing-xs-${String(e)}`];
  const n = [];
  return (
    t.forEach((r) => {
      const o = e[r];
      if (Number(o) > 0) {
        const i = `spacing-${r}-${String(o)}`;
        n.push(i);
      }
    }),
    n
  );
}
const AA = (e) => {
    const {
      classes: t,
      container: n,
      direction: r,
      item: o,
      spacing: i,
      wrap: s,
      zeroMinWidth: a,
      breakpoints: l,
    } = e;
    let u = [];
    n && (u = MA(i, l));
    const c = [];
    l.forEach((f) => {
      const v = e[f];
      v && c.push(`grid-${f}-${String(v)}`);
    });
    const d = {
      root: [
        'root',
        n && 'container',
        o && 'item',
        a && 'zeroMinWidth',
        ...u,
        r !== 'row' && `direction-xs-${String(r)}`,
        s !== 'wrap' && `wrap-xs-${String(s)}`,
        ...c,
      ],
    };
    return Se(d, bA, t);
  },
  gn = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiGrid' }),
      { breakpoints: o } = ga(),
      i = bc(r),
      {
        className: s,
        columns: a,
        columnSpacing: l,
        component: u = 'div',
        container: c = !1,
        direction: d = 'row',
        item: f = !1,
        rowSpacing: v,
        spacing: m = 0,
        wrap: h = 'wrap',
        zeroMinWidth: w = !1,
      } = i,
      p = J(i, CA),
      g = v || m,
      y = l || m,
      x = b.useContext(Ov),
      S = c ? a || 12 : x,
      P = {},
      T = E({}, p);
    o.keys.forEach((k) => {
      p[k] != null && ((P[k] = p[k]), delete T[k]);
    });
    const _ = E(
        {},
        i,
        {
          columns: S,
          container: c,
          direction: d,
          item: f,
          rowSpacing: g,
          columnSpacing: y,
          wrap: h,
          zeroMinWidth: w,
          spacing: m,
        },
        P,
        { breakpoints: o.keys }
      ),
      I = AA(_);
    return C.jsx(Ov.Provider, {
      value: S,
      children: C.jsx(
        _A,
        E({ ownerState: _, className: ie(I.root, s), as: u, ref: n }, T)
      ),
    });
  }),
  IA = [
    'addEndListener',
    'appear',
    'children',
    'easing',
    'in',
    'onEnter',
    'onEntered',
    'onEntering',
    'onExit',
    'onExited',
    'onExiting',
    'style',
    'timeout',
    'TransitionComponent',
  ];
function Jf(e) {
  return `scale(${e}, ${e ** 2})`;
}
const $A = {
    entering: { opacity: 1, transform: Jf(1) },
    entered: { opacity: 1, transform: 'none' },
  },
  wd =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  uu = b.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: a,
        onEnter: l,
        onEntered: u,
        onEntering: c,
        onExit: d,
        onExited: f,
        onExiting: v,
        style: m,
        timeout: h = 'auto',
        TransitionComponent: w = nr,
      } = t,
      p = J(t, IA),
      g = Yo(),
      y = b.useRef(),
      x = ga(),
      S = b.useRef(null),
      P = pt(S, i.ref, n),
      T = (B) => (W) => {
        if (B) {
          const M = S.current;
          W === void 0 ? B(M) : B(M, W);
        }
      },
      _ = T(c),
      I = T((B, W) => {
        G1(B);
        const {
          duration: M,
          delay: O,
          easing: N,
        } = iu({ style: m, timeout: h, easing: s }, { mode: 'enter' });
        let H;
        h === 'auto'
          ? ((H = x.transitions.getAutoHeightDuration(B.clientHeight)),
            (y.current = H))
          : (H = M),
          (B.style.transition = [
            x.transitions.create('opacity', { duration: H, delay: O }),
            x.transitions.create('transform', {
              duration: wd ? H : H * 0.666,
              delay: O,
              easing: N,
            }),
          ].join(',')),
          l && l(B, W);
      }),
      k = T(u),
      D = T(v),
      $ = T((B) => {
        const {
          duration: W,
          delay: M,
          easing: O,
        } = iu({ style: m, timeout: h, easing: s }, { mode: 'exit' });
        let N;
        h === 'auto'
          ? ((N = x.transitions.getAutoHeightDuration(B.clientHeight)),
            (y.current = N))
          : (N = W),
          (B.style.transition = [
            x.transitions.create('opacity', { duration: N, delay: M }),
            x.transitions.create('transform', {
              duration: wd ? N : N * 0.666,
              delay: wd ? M : M || N * 0.333,
              easing: O,
            }),
          ].join(',')),
          (B.style.opacity = 0),
          (B.style.transform = Jf(0.75)),
          d && d(B);
      }),
      A = T(f),
      z = (B) => {
        h === 'auto' && g.start(y.current || 0, B), r && r(S.current, B);
      };
    return C.jsx(
      w,
      E(
        {
          appear: o,
          in: a,
          nodeRef: S,
          onEnter: I,
          onEntered: k,
          onEntering: _,
          onExit: $,
          onExited: A,
          onExiting: D,
          addEndListener: z,
          timeout: h === 'auto' ? null : h,
        },
        p,
        {
          children: (B, W) =>
            b.cloneElement(
              i,
              E(
                {
                  style: E(
                    {
                      opacity: 0,
                      transform: Jf(0.75),
                      visibility: B === 'exited' && !a ? 'hidden' : void 0,
                    },
                    $A[B],
                    m,
                    i.props.style
                  ),
                  ref: P,
                },
                W
              )
            ),
        }
      )
    );
  });
uu.muiSupportAuto = !0;
function jA(e) {
  return Ee('MuiImageList', e);
}
ge('MuiImageList', ['root', 'masonry', 'quilted', 'standard', 'woven']);
const xb = b.createContext({}),
  DA = [
    'children',
    'className',
    'cols',
    'component',
    'rowHeight',
    'gap',
    'style',
    'variant',
  ],
  LA = (e) => {
    const { classes: t, variant: n } = e;
    return Se({ root: ['root', n] }, jA, t);
  },
  NA = Q('ul', {
    name: 'MuiImageList',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant]];
    },
  })(({ ownerState: e }) =>
    E(
      {
        display: 'grid',
        overflowY: 'auto',
        listStyle: 'none',
        padding: 0,
        WebkitOverflowScrolling: 'touch',
      },
      e.variant === 'masonry' && { display: 'block' }
    )
  ),
  FA = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiImageList' }),
      {
        children: o,
        className: i,
        cols: s = 2,
        component: a = 'ul',
        rowHeight: l = 'auto',
        gap: u = 4,
        style: c,
        variant: d = 'standard',
      } = r,
      f = J(r, DA),
      v = b.useMemo(() => ({ rowHeight: l, gap: u, variant: d }), [l, u, d]);
    b.useEffect(() => {}, []);
    const m = E(
        d === 'masonry'
          ? { columnCount: s, columnGap: u }
          : { gridTemplateColumns: `repeat(${s}, 1fr)`, gap: u },
        c
      ),
      h = E({}, r, { component: a, gap: u, rowHeight: l, variant: d }),
      w = LA(h);
    return C.jsx(
      NA,
      E(
        {
          as: a,
          className: ie(w.root, w[d], i),
          ref: n,
          style: m,
          ownerState: h,
        },
        f,
        { children: C.jsx(xb.Provider, { value: v, children: o }) }
      )
    );
  });
function zA(e) {
  return Ee('MuiImageListItem', e);
}
const _v = ge('MuiImageListItem', [
    'root',
    'img',
    'standard',
    'woven',
    'masonry',
    'quilted',
  ]),
  BA = ['children', 'className', 'cols', 'component', 'rows', 'style'],
  WA = (e) => {
    const { classes: t, variant: n } = e;
    return Se({ root: ['root', n], img: ['img'] }, zA, t);
  },
  VA = Q('li', {
    name: 'MuiImageListItem',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [{ [`& .${_v.img}`]: t.img }, t.root, t[n.variant]];
    },
  })(({ ownerState: e }) =>
    E(
      { display: 'block', position: 'relative' },
      e.variant === 'standard' && { display: 'flex', flexDirection: 'column' },
      e.variant === 'woven' && {
        height: '100%',
        alignSelf: 'center',
        '&:nth-of-type(even)': { height: '70%' },
      },
      {
        [`& .${_v.img}`]: E(
          {
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            display: 'block',
          },
          e.variant === 'standard' && { height: 'auto', flexGrow: 1 }
        ),
      }
    )
  ),
  UA = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiImageListItem' }),
      {
        children: o,
        className: i,
        cols: s = 1,
        component: a = 'li',
        rows: l = 1,
        style: u,
      } = r,
      c = J(r, BA),
      { rowHeight: d = 'auto', gap: f, variant: v } = b.useContext(xb);
    let m = 'auto';
    v === 'woven' ? (m = void 0) : d !== 'auto' && (m = d * l + f * (l - 1));
    const h = E({}, r, {
        cols: s,
        component: a,
        gap: f,
        rowHeight: d,
        rows: l,
        variant: v,
      }),
      w = WA(h);
    return C.jsx(
      VA,
      E(
        {
          as: a,
          className: ie(w.root, w[v], i),
          ref: n,
          style: E(
            {
              height: m,
              gridColumnEnd: v !== 'masonry' ? `span ${s}` : void 0,
              gridRowEnd: v !== 'masonry' ? `span ${l}` : void 0,
              marginBottom: v === 'masonry' ? f : void 0,
              breakInside: v === 'masonry' ? 'avoid' : void 0,
            },
            u
          ),
          ownerState: h,
        },
        c,
        {
          children: b.Children.map(o, (p) =>
            b.isValidElement(p)
              ? p.type === 'img' || vl(p, ['Image'])
                ? b.cloneElement(p, { className: ie(w.img, p.props.className) })
                : p
              : null
          ),
        }
      )
    );
  }),
  HA = [
    'disableUnderline',
    'components',
    'componentsProps',
    'fullWidth',
    'inputComponent',
    'multiline',
    'slotProps',
    'slots',
    'type',
  ],
  GA = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = Se({ root: ['root', !n && 'underline'], input: ['input'] }, __, t);
    return E({}, t, o);
  },
  KA = Q(kc, {
    shouldForwardProp: (e) => un(e) || e === 'classes',
    name: 'MuiInput',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Pc(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    let r =
      e.palette.mode === 'light'
        ? 'rgba(0, 0, 0, 0.42)'
        : 'rgba(255, 255, 255, 0.7)';
    return (
      e.vars &&
        (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
      E(
        { position: 'relative' },
        t.formControl && { 'label + &': { marginTop: 16 } },
        !t.disableUnderline && {
          '&::after': {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: 'absolute',
            right: 0,
            transform: 'scaleX(0)',
            transition: e.transitions.create('transform', {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
            pointerEvents: 'none',
          },
          [`&.${Zi.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
          [`&.${Zi.error}`]: {
            '&::before, &::after': {
              borderBottomColor: (e.vars || e).palette.error.main,
            },
          },
          '&::before': {
            borderBottom: `1px solid ${r}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: 'absolute',
            right: 0,
            transition: e.transitions.create('border-bottom-color', {
              duration: e.transitions.duration.shorter,
            }),
            pointerEvents: 'none',
          },
          [`&:hover:not(.${Zi.disabled}, .${Zi.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            '@media (hover: none)': { borderBottom: `1px solid ${r}` },
          },
          [`&.${Zi.disabled}:before`]: { borderBottomStyle: 'dotted' },
        }
      )
    );
  }),
  qA = Q(Rc, { name: 'MuiInput', slot: 'Input', overridesResolver: Tc })({}),
  Gm = b.forwardRef(function (t, n) {
    var r, o, i, s;
    const a = be({ props: t, name: 'MuiInput' }),
      {
        disableUnderline: l,
        components: u = {},
        componentsProps: c,
        fullWidth: d = !1,
        inputComponent: f = 'input',
        multiline: v = !1,
        slotProps: m,
        slots: h = {},
        type: w = 'text',
      } = a,
      p = J(a, HA),
      g = GA(a),
      x = { root: { ownerState: { disableUnderline: l } } },
      S = m ?? c ? tn(m ?? c, x) : x,
      P = (r = (o = h.root) != null ? o : u.Root) != null ? r : KA,
      T = (i = (s = h.input) != null ? s : u.Input) != null ? i : qA;
    return C.jsx(
      Um,
      E(
        {
          slots: { root: P, input: T },
          slotProps: S,
          fullWidth: d,
          inputComponent: f,
          multiline: v,
          ref: n,
          type: w,
        },
        p,
        { classes: g }
      )
    );
  });
Gm.muiName = 'Input';
function XA(e) {
  return Ee('MuiInputLabel', e);
}
ge('MuiInputLabel', [
  'root',
  'focused',
  'disabled',
  'error',
  'required',
  'asterisk',
  'formControl',
  'sizeSmall',
  'shrink',
  'animated',
  'standard',
  'filled',
  'outlined',
]);
const YA = ['disableAnimation', 'margin', 'shrink', 'variant', 'className'],
  QA = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: o,
        disableAnimation: i,
        variant: s,
        required: a,
      } = e,
      l = {
        root: [
          'root',
          n && 'formControl',
          !i && 'animated',
          o && 'shrink',
          r && r !== 'normal' && `size${se(r)}`,
          s,
        ],
        asterisk: [a && 'asterisk'],
      },
      u = Se(l, XA, t);
    return E({}, t, u);
  },
  JA = Q(xA, {
    shouldForwardProp: (e) => un(e) || e === 'classes',
    name: 'MuiInputLabel',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Ps.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === 'small' && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    E(
      {
        display: 'block',
        transformOrigin: 'top left',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
      },
      t.formControl && {
        position: 'absolute',
        left: 0,
        top: 0,
        transform: 'translate(0, 20px) scale(1)',
      },
      t.size === 'small' && { transform: 'translate(0, 17px) scale(1)' },
      t.shrink && {
        transform: 'translate(0, -1.5px) scale(0.75)',
        transformOrigin: 'top left',
        maxWidth: '133%',
      },
      !t.disableAnimation && {
        transition: e.transitions.create(['color', 'transform', 'max-width'], {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
      },
      t.variant === 'filled' &&
        E(
          {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(12px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)',
          },
          t.size === 'small' && { transform: 'translate(12px, 13px) scale(1)' },
          t.shrink &&
            E(
              {
                userSelect: 'none',
                pointerEvents: 'auto',
                transform: 'translate(12px, 7px) scale(0.75)',
                maxWidth: 'calc(133% - 24px)',
              },
              t.size === 'small' && {
                transform: 'translate(12px, 4px) scale(0.75)',
              }
            )
        ),
      t.variant === 'outlined' &&
        E(
          {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(14px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)',
          },
          t.size === 'small' && { transform: 'translate(14px, 9px) scale(1)' },
          t.shrink && {
            userSelect: 'none',
            pointerEvents: 'auto',
            maxWidth: 'calc(133% - 32px)',
            transform: 'translate(14px, -9px) scale(0.75)',
          }
        )
    )
  ),
  ZA = b.forwardRef(function (t, n) {
    const r = be({ name: 'MuiInputLabel', props: t }),
      { disableAnimation: o = !1, shrink: i, className: s } = r,
      a = J(r, YA),
      l = $i();
    let u = i;
    typeof u > 'u' && l && (u = l.filled || l.focused || l.adornedStart);
    const c = Ii({
        props: r,
        muiFormControl: l,
        states: ['size', 'variant', 'required', 'focused'],
      }),
      d = E({}, r, {
        disableAnimation: o,
        formControl: l,
        shrink: u,
        size: c.size,
        variant: c.variant,
        required: c.required,
        focused: c.focused,
      }),
      f = QA(d);
    return C.jsx(
      JA,
      E(
        { 'data-shrink': u, ownerState: d, ref: n, className: ie(f.root, s) },
        a,
        { classes: f }
      )
    );
  }),
  Zf = b.createContext({});
function eI(e) {
  return Ee('MuiList', e);
}
ge('MuiList', ['root', 'padding', 'dense', 'subheader']);
const tI = [
    'children',
    'className',
    'component',
    'dense',
    'disablePadding',
    'subheader',
  ],
  nI = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return Se(
      { root: ['root', !n && 'padding', r && 'dense', o && 'subheader'] },
      eI,
      t
    );
  },
  rI = Q('ul', {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    E(
      { listStyle: 'none', margin: 0, padding: 0, position: 'relative' },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  oI = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiList' }),
      {
        children: o,
        className: i,
        component: s = 'ul',
        dense: a = !1,
        disablePadding: l = !1,
        subheader: u,
      } = r,
      c = J(r, tI),
      d = b.useMemo(() => ({ dense: a }), [a]),
      f = E({}, r, { component: s, dense: a, disablePadding: l }),
      v = nI(f);
    return C.jsx(Zf.Provider, {
      value: d,
      children: C.jsxs(
        rI,
        E({ as: s, className: ie(v.root, i), ref: n, ownerState: f }, c, {
          children: [u, o],
        })
      ),
    });
  }),
  Mv = ge('MuiListItemIcon', ['root', 'alignItemsFlexStart']),
  Av = ge('MuiListItemText', [
    'root',
    'multiline',
    'dense',
    'inset',
    'primary',
    'secondary',
  ]),
  iI = [
    'actions',
    'autoFocus',
    'autoFocusItem',
    'children',
    'className',
    'disabledItemsFocusable',
    'disableListWrap',
    'onKeyDown',
    'variant',
  ];
function Sd(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : n
    ? null
    : e.firstChild;
}
function Iv(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild;
}
function bb(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
      ? n[0] === t.keys[0]
      : n.indexOf(t.keys.join('')) === 0
  );
}
function ts(e, t, n, r, o, i) {
  let s = !1,
    a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s) return !1;
      s = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute('aria-disabled') === 'true';
    if (!a.hasAttribute('tabindex') || !bb(a, i) || l) a = o(e, a, n);
    else return a.focus(), !0;
  }
  return !1;
}
const sI = b.forwardRef(function (t, n) {
  const {
      actions: r,
      autoFocus: o = !1,
      autoFocusItem: i = !1,
      children: s,
      className: a,
      disabledItemsFocusable: l = !1,
      disableListWrap: u = !1,
      onKeyDown: c,
      variant: d = 'selectedMenu',
    } = t,
    f = J(t, iI),
    v = b.useRef(null),
    m = b.useRef({
      keys: [],
      repeating: !0,
      previousKeyMatched: !0,
      lastTime: null,
    });
  er(() => {
    o && v.current.focus();
  }, [o]),
    b.useImperativeHandle(
      r,
      () => ({
        adjustStyleForScrollbar: (y, { direction: x }) => {
          const S = !v.current.style.width;
          if (y.clientHeight < v.current.clientHeight && S) {
            const P = `${e1(jt(y))}px`;
            (v.current.style[x === 'rtl' ? 'paddingLeft' : 'paddingRight'] = P),
              (v.current.style.width = `calc(100% + ${P})`);
          }
          return v.current;
        },
      }),
      []
    );
  const h = (y) => {
      const x = v.current,
        S = y.key,
        P = jt(x).activeElement;
      if (S === 'ArrowDown') y.preventDefault(), ts(x, P, u, l, Sd);
      else if (S === 'ArrowUp') y.preventDefault(), ts(x, P, u, l, Iv);
      else if (S === 'Home') y.preventDefault(), ts(x, null, u, l, Sd);
      else if (S === 'End') y.preventDefault(), ts(x, null, u, l, Iv);
      else if (S.length === 1) {
        const T = m.current,
          _ = S.toLowerCase(),
          I = performance.now();
        T.keys.length > 0 &&
          (I - T.lastTime > 500
            ? ((T.keys = []), (T.repeating = !0), (T.previousKeyMatched = !0))
            : T.repeating && _ !== T.keys[0] && (T.repeating = !1)),
          (T.lastTime = I),
          T.keys.push(_);
        const k = P && !T.repeating && bb(P, T);
        T.previousKeyMatched && (k || ts(x, P, !1, l, Sd, T))
          ? y.preventDefault()
          : (T.previousKeyMatched = !1);
      }
      c && c(y);
    },
    w = pt(v, n);
  let p = -1;
  b.Children.forEach(s, (y, x) => {
    if (!b.isValidElement(y)) {
      p === x && ((p += 1), p >= s.length && (p = -1));
      return;
    }
    y.props.disabled ||
      (((d === 'selectedMenu' && y.props.selected) || p === -1) && (p = x)),
      p === x &&
        (y.props.disabled ||
          y.props.muiSkipListHighlight ||
          y.type.muiSkipListHighlight) &&
        ((p += 1), p >= s.length && (p = -1));
  });
  const g = b.Children.map(s, (y, x) => {
    if (x === p) {
      const S = {};
      return (
        i && (S.autoFocus = !0),
        y.props.tabIndex === void 0 && d === 'selectedMenu' && (S.tabIndex = 0),
        b.cloneElement(y, S)
      );
    }
    return y;
  });
  return C.jsx(
    oI,
    E(
      {
        role: 'menu',
        ref: w,
        className: a,
        onKeyDown: h,
        tabIndex: o ? 0 : -1,
      },
      f,
      { children: g }
    )
  );
});
function aI(e) {
  return Ee('MuiPopover', e);
}
ge('MuiPopover', ['root', 'paper']);
const lI = ['onEntering'],
  uI = [
    'action',
    'anchorEl',
    'anchorOrigin',
    'anchorPosition',
    'anchorReference',
    'children',
    'className',
    'container',
    'elevation',
    'marginThreshold',
    'open',
    'PaperProps',
    'slots',
    'slotProps',
    'transformOrigin',
    'TransitionComponent',
    'transitionDuration',
    'TransitionProps',
    'disableScrollLock',
  ],
  cI = ['slotProps'];
function $v(e, t) {
  let n = 0;
  return (
    typeof t == 'number'
      ? (n = t)
      : t === 'center'
      ? (n = e.height / 2)
      : t === 'bottom' && (n = e.height),
    n
  );
}
function jv(e, t) {
  let n = 0;
  return (
    typeof t == 'number'
      ? (n = t)
      : t === 'center'
      ? (n = e.width / 2)
      : t === 'right' && (n = e.width),
    n
  );
}
function Dv(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == 'number' ? `${t}px` : t))
    .join(' ');
}
function Ed(e) {
  return typeof e == 'function' ? e() : e;
}
const dI = (e) => {
    const { classes: t } = e;
    return Se({ root: ['root'], paper: ['paper'] }, aI, t);
  },
  fI = Q(gb, {
    name: 'MuiPopover',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({}),
  wb = Q(Sc, {
    name: 'MuiPopover',
    slot: 'Paper',
    overridesResolver: (e, t) => t.paper,
  })({
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    outline: 0,
  }),
  pI = b.forwardRef(function (t, n) {
    var r, o, i;
    const s = be({ props: t, name: 'MuiPopover' }),
      {
        action: a,
        anchorEl: l,
        anchorOrigin: u = { vertical: 'top', horizontal: 'left' },
        anchorPosition: c,
        anchorReference: d = 'anchorEl',
        children: f,
        className: v,
        container: m,
        elevation: h = 8,
        marginThreshold: w = 16,
        open: p,
        PaperProps: g = {},
        slots: y,
        slotProps: x,
        transformOrigin: S = { vertical: 'top', horizontal: 'left' },
        TransitionComponent: P = uu,
        transitionDuration: T = 'auto',
        TransitionProps: { onEntering: _ } = {},
        disableScrollLock: I = !1,
      } = s,
      k = J(s.TransitionProps, lI),
      D = J(s, uI),
      $ = (r = x == null ? void 0 : x.paper) != null ? r : g,
      A = b.useRef(),
      z = pt(A, $.ref),
      B = E({}, s, {
        anchorOrigin: u,
        anchorReference: d,
        elevation: h,
        marginThreshold: w,
        externalPaperSlotProps: $,
        transformOrigin: S,
        TransitionComponent: P,
        transitionDuration: T,
        TransitionProps: k,
      }),
      W = dI(B),
      M = b.useCallback(() => {
        if (d === 'anchorPosition') return c;
        const pe = Ed(l),
          xe = (
            pe && pe.nodeType === 1 ? pe : jt(A.current).body
          ).getBoundingClientRect();
        return {
          top: xe.top + $v(xe, u.vertical),
          left: xe.left + jv(xe, u.horizontal),
        };
      }, [l, u.horizontal, u.vertical, c, d]),
      O = b.useCallback(
        (pe) => ({
          vertical: $v(pe, S.vertical),
          horizontal: jv(pe, S.horizontal),
        }),
        [S.horizontal, S.vertical]
      ),
      N = b.useCallback(
        (pe) => {
          const ye = { width: pe.offsetWidth, height: pe.offsetHeight },
            xe = O(ye);
          if (d === 'none')
            return { top: null, left: null, transformOrigin: Dv(xe) };
          const ht = M();
          let Ve = ht.top - xe.vertical,
            R = ht.left - xe.horizontal;
          const j = Ve + ye.height,
            F = R + ye.width,
            G = xo(Ed(l)),
            q = G.innerHeight - w,
            U = G.innerWidth - w;
          if (w !== null && Ve < w) {
            const L = Ve - w;
            (Ve -= L), (xe.vertical += L);
          } else if (w !== null && j > q) {
            const L = j - q;
            (Ve -= L), (xe.vertical += L);
          }
          if (w !== null && R < w) {
            const L = R - w;
            (R -= L), (xe.horizontal += L);
          } else if (F > U) {
            const L = F - U;
            (R -= L), (xe.horizontal += L);
          }
          return {
            top: `${Math.round(Ve)}px`,
            left: `${Math.round(R)}px`,
            transformOrigin: Dv(xe),
          };
        },
        [l, d, M, O, w]
      ),
      [H, oe] = b.useState(p),
      ee = b.useCallback(() => {
        const pe = A.current;
        if (!pe) return;
        const ye = N(pe);
        ye.top !== null && (pe.style.top = ye.top),
          ye.left !== null && (pe.style.left = ye.left),
          (pe.style.transformOrigin = ye.transformOrigin),
          oe(!0);
      }, [N]);
    b.useEffect(
      () => (
        I && window.addEventListener('scroll', ee),
        () => window.removeEventListener('scroll', ee)
      ),
      [l, I, ee]
    );
    const he = (pe, ye) => {
        _ && _(pe, ye), ee();
      },
      te = () => {
        oe(!1);
      };
    b.useEffect(() => {
      p && ee();
    }),
      b.useImperativeHandle(
        a,
        () =>
          p
            ? {
                updatePosition: () => {
                  ee();
                },
              }
            : null,
        [p, ee]
      ),
      b.useEffect(() => {
        if (!p) return;
        const pe = Jx(() => {
            ee();
          }),
          ye = xo(l);
        return (
          ye.addEventListener('resize', pe),
          () => {
            pe.clear(), ye.removeEventListener('resize', pe);
          }
        );
      }, [l, p, ee]);
    let de = T;
    T === 'auto' && !P.muiSupportAuto && (de = void 0);
    const ue = m || (l ? jt(Ed(l)).body : void 0),
      Re = (o = y == null ? void 0 : y.root) != null ? o : fI,
      we = (i = y == null ? void 0 : y.paper) != null ? i : wb,
      ve = bo({
        elementType: we,
        externalSlotProps: E({}, $, {
          style: H ? $.style : E({}, $.style, { opacity: 0 }),
        }),
        additionalProps: { elevation: h, ref: z },
        ownerState: B,
        className: ie(W.paper, $ == null ? void 0 : $.className),
      }),
      Ne = bo({
        elementType: Re,
        externalSlotProps: (x == null ? void 0 : x.root) || {},
        externalForwardedProps: D,
        additionalProps: {
          ref: n,
          slotProps: { backdrop: { invisible: !0 } },
          container: ue,
          open: p,
        },
        ownerState: B,
        className: ie(W.root, v),
      }),
      { slotProps: fe } = Ne,
      Pe = J(Ne, cI);
    return C.jsx(
      Re,
      E({}, Pe, !su(Re) && { slotProps: fe, disableScrollLock: I }, {
        children: C.jsx(
          P,
          E(
            { appear: !0, in: p, onEntering: he, onExited: te, timeout: de },
            k,
            { children: C.jsx(we, E({}, ve, { children: f })) }
          )
        ),
      })
    );
  });
function mI(e) {
  return Ee('MuiMenu', e);
}
ge('MuiMenu', ['root', 'paper', 'list']);
const hI = ['onEntering'],
  gI = [
    'autoFocus',
    'children',
    'className',
    'disableAutoFocusItem',
    'MenuListProps',
    'onClose',
    'open',
    'PaperProps',
    'PopoverClasses',
    'transitionDuration',
    'TransitionProps',
    'variant',
    'slots',
    'slotProps',
  ],
  vI = { vertical: 'top', horizontal: 'right' },
  yI = { vertical: 'top', horizontal: 'left' },
  xI = (e) => {
    const { classes: t } = e;
    return Se({ root: ['root'], paper: ['paper'], list: ['list'] }, mI, t);
  },
  bI = Q(pI, {
    shouldForwardProp: (e) => un(e) || e === 'classes',
    name: 'MuiMenu',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({}),
  wI = Q(wb, {
    name: 'MuiMenu',
    slot: 'Paper',
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: 'calc(100% - 96px)', WebkitOverflowScrolling: 'touch' }),
  SI = Q(sI, {
    name: 'MuiMenu',
    slot: 'List',
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  ep = b.forwardRef(function (t, n) {
    var r, o;
    const i = be({ props: t, name: 'MuiMenu' }),
      {
        autoFocus: s = !0,
        children: a,
        className: l,
        disableAutoFocusItem: u = !1,
        MenuListProps: c = {},
        onClose: d,
        open: f,
        PaperProps: v = {},
        PopoverClasses: m,
        transitionDuration: h = 'auto',
        TransitionProps: { onEntering: w } = {},
        variant: p = 'selectedMenu',
        slots: g = {},
        slotProps: y = {},
      } = i,
      x = J(i.TransitionProps, hI),
      S = J(i, gI),
      P = U1(),
      T = E({}, i, {
        autoFocus: s,
        disableAutoFocusItem: u,
        MenuListProps: c,
        onEntering: w,
        PaperProps: v,
        transitionDuration: h,
        TransitionProps: x,
        variant: p,
      }),
      _ = xI(T),
      I = s && !u && f,
      k = b.useRef(null),
      D = (O, N) => {
        k.current &&
          k.current.adjustStyleForScrollbar(O, {
            direction: P ? 'rtl' : 'ltr',
          }),
          w && w(O, N);
      },
      $ = (O) => {
        O.key === 'Tab' && (O.preventDefault(), d && d(O, 'tabKeyDown'));
      };
    let A = -1;
    b.Children.map(a, (O, N) => {
      b.isValidElement(O) &&
        (O.props.disabled ||
          (((p === 'selectedMenu' && O.props.selected) || A === -1) &&
            (A = N)));
    });
    const z = (r = g.paper) != null ? r : wI,
      B = (o = y.paper) != null ? o : v,
      W = bo({
        elementType: g.root,
        externalSlotProps: y.root,
        ownerState: T,
        className: [_.root, l],
      }),
      M = bo({
        elementType: z,
        externalSlotProps: B,
        ownerState: T,
        className: _.paper,
      });
    return C.jsx(
      bI,
      E(
        {
          onClose: d,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: P ? 'right' : 'left',
          },
          transformOrigin: P ? vI : yI,
          slots: { paper: z, root: g.root },
          slotProps: { root: W, paper: M },
          open: f,
          ref: n,
          transitionDuration: h,
          TransitionProps: E({ onEntering: D }, x),
          ownerState: T,
        },
        S,
        {
          classes: m,
          children: C.jsx(
            SI,
            E(
              {
                onKeyDown: $,
                actions: k,
                autoFocus: s && (A === -1 || u),
                autoFocusItem: I,
                variant: p,
              },
              c,
              { className: ie(_.list, c.className), children: a }
            )
          ),
        }
      )
    );
  });
function EI(e) {
  return Ee('MuiMenuItem', e);
}
const ns = ge('MuiMenuItem', [
    'root',
    'focusVisible',
    'dense',
    'disabled',
    'divider',
    'gutters',
    'selected',
  ]),
  CI = [
    'autoFocus',
    'component',
    'dense',
    'divider',
    'disableGutters',
    'focusVisibleClassName',
    'role',
    'tabIndex',
    'className',
  ],
  PI = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  TI = (e) => {
    const {
        disabled: t,
        dense: n,
        divider: r,
        disableGutters: o,
        selected: i,
        classes: s,
      } = e,
      l = Se(
        {
          root: [
            'root',
            n && 'dense',
            t && 'disabled',
            !o && 'gutters',
            r && 'divider',
            i && 'selected',
          ],
        },
        EI,
        s
      );
    return E({}, s, l);
  },
  kI = Q($m, {
    shouldForwardProp: (e) => un(e) || e === 'classes',
    name: 'MuiMenuItem',
    slot: 'Root',
    overridesResolver: PI,
  })(({ theme: e, ownerState: t }) =>
    E(
      {},
      e.typography.body1,
      {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: 'border-box',
        whiteSpace: 'nowrap',
      },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: 'padding-box',
      },
      {
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: (e.vars || e).palette.action.hover,
          '@media (hover: none)': { backgroundColor: 'transparent' },
        },
        [`&.${ns.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : Bt(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${ns.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Bt(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${ns.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : Bt(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          '@media (hover: none)': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Bt(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${ns.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${ns.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        [`& + .${Tv.root}`]: {
          marginTop: e.spacing(1),
          marginBottom: e.spacing(1),
        },
        [`& + .${Tv.inset}`]: { marginLeft: 52 },
        [`& .${Av.root}`]: { marginTop: 0, marginBottom: 0 },
        [`& .${Av.inset}`]: { paddingLeft: 36 },
        [`& .${Mv.root}`]: { minWidth: 36 },
      },
      !t.dense && { [e.breakpoints.up('sm')]: { minHeight: 'auto' } },
      t.dense &&
        E(
          { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
          e.typography.body2,
          { [`& .${Mv.root} svg`]: { fontSize: '1.25rem' } }
        )
    )
  ),
  Lv = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiMenuItem' }),
      {
        autoFocus: o = !1,
        component: i = 'li',
        dense: s = !1,
        divider: a = !1,
        disableGutters: l = !1,
        focusVisibleClassName: u,
        role: c = 'menuitem',
        tabIndex: d,
        className: f,
      } = r,
      v = J(r, CI),
      m = b.useContext(Zf),
      h = b.useMemo(
        () => ({ dense: s || m.dense || !1, disableGutters: l }),
        [m.dense, s, l]
      ),
      w = b.useRef(null);
    er(() => {
      o && w.current && w.current.focus();
    }, [o]);
    const p = E({}, r, { dense: h.dense, divider: a, disableGutters: l }),
      g = TI(r),
      y = pt(w, n);
    let x;
    return (
      r.disabled || (x = d !== void 0 ? d : -1),
      C.jsx(Zf.Provider, {
        value: h,
        children: C.jsx(
          kI,
          E(
            {
              ref: y,
              role: c,
              tabIndex: x,
              component: i,
              focusVisibleClassName: ie(g.focusVisible, u),
              className: ie(g.root, f),
            },
            v,
            { ownerState: p, classes: g }
          )
        ),
      })
    );
  });
function RI(e) {
  return Ee('MuiNativeSelect', e);
}
const Km = ge('MuiNativeSelect', [
    'root',
    'select',
    'multiple',
    'filled',
    'outlined',
    'standard',
    'disabled',
    'icon',
    'iconOpen',
    'iconFilled',
    'iconOutlined',
    'iconStandard',
    'nativeInput',
    'error',
  ]),
  OI = [
    'className',
    'disabled',
    'error',
    'IconComponent',
    'inputRef',
    'variant',
  ],
  _I = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ['select', n, r && 'disabled', o && 'multiple', s && 'error'],
        icon: ['icon', `icon${se(n)}`, i && 'iconOpen', r && 'disabled'],
      };
    return Se(a, RI, t);
  },
  Sb = ({ ownerState: e, theme: t }) =>
    E(
      {
        MozAppearance: 'none',
        WebkitAppearance: 'none',
        userSelect: 'none',
        borderRadius: 0,
        cursor: 'pointer',
        '&:focus': E(
          {},
          t.vars
            ? {
                backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`,
              }
            : {
                backgroundColor:
                  t.palette.mode === 'light'
                    ? 'rgba(0, 0, 0, 0.05)'
                    : 'rgba(255, 255, 255, 0.05)',
              },
          { borderRadius: 0 }
        ),
        '&::-ms-expand': { display: 'none' },
        [`&.${Km.disabled}`]: { cursor: 'default' },
        '&[multiple]': { height: 'auto' },
        '&:not([multiple]) option, &:not([multiple]) optgroup': {
          backgroundColor: (t.vars || t).palette.background.paper,
        },
        '&&&': { paddingRight: 24, minWidth: 16 },
      },
      e.variant === 'filled' && { '&&&': { paddingRight: 32 } },
      e.variant === 'outlined' && {
        borderRadius: (t.vars || t).shape.borderRadius,
        '&:focus': { borderRadius: (t.vars || t).shape.borderRadius },
        '&&&': { paddingRight: 32 },
      }
    ),
  MI = Q('select', {
    name: 'MuiNativeSelect',
    slot: 'Select',
    shouldForwardProp: un,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        { [`&.${Km.multiple}`]: t.multiple },
      ];
    },
  })(Sb),
  Eb = ({ ownerState: e, theme: t }) =>
    E(
      {
        position: 'absolute',
        right: 0,
        top: 'calc(50% - .5em)',
        pointerEvents: 'none',
        color: (t.vars || t).palette.action.active,
        [`&.${Km.disabled}`]: { color: (t.vars || t).palette.action.disabled },
      },
      e.open && { transform: 'rotate(180deg)' },
      e.variant === 'filled' && { right: 7 },
      e.variant === 'outlined' && { right: 7 }
    ),
  AI = Q('svg', {
    name: 'MuiNativeSelect',
    slot: 'Icon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${se(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(Eb),
  II = b.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: o,
        error: i,
        IconComponent: s,
        inputRef: a,
        variant: l = 'standard',
      } = t,
      u = J(t, OI),
      c = E({}, t, { disabled: o, variant: l, error: i }),
      d = _I(c);
    return C.jsxs(b.Fragment, {
      children: [
        C.jsx(
          MI,
          E(
            {
              ownerState: c,
              className: ie(d.select, r),
              disabled: o,
              ref: a || n,
            },
            u
          )
        ),
        t.multiple
          ? null
          : C.jsx(AI, { as: s, ownerState: c, className: d.icon }),
      ],
    });
  });
var Nv;
const $I = ['children', 'classes', 'className', 'label', 'notched'],
  jI = Q('fieldset', { shouldForwardProp: un })({
    textAlign: 'left',
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: '0 8px',
    pointerEvents: 'none',
    borderRadius: 'inherit',
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
    minWidth: '0%',
  }),
  DI = Q('legend', { shouldForwardProp: un })(({ ownerState: e, theme: t }) =>
    E(
      { float: 'unset', width: 'auto', overflow: 'hidden' },
      !e.withLabel && {
        padding: 0,
        lineHeight: '11px',
        transition: t.transitions.create('width', {
          duration: 150,
          easing: t.transitions.easing.easeOut,
        }),
      },
      e.withLabel &&
        E(
          {
            display: 'block',
            padding: 0,
            height: 11,
            fontSize: '0.75em',
            visibility: 'hidden',
            maxWidth: 0.01,
            transition: t.transitions.create('max-width', {
              duration: 50,
              easing: t.transitions.easing.easeOut,
            }),
            whiteSpace: 'nowrap',
            '& > span': {
              paddingLeft: 5,
              paddingRight: 5,
              display: 'inline-block',
              opacity: 0,
              visibility: 'visible',
            },
          },
          e.notched && {
            maxWidth: '100%',
            transition: t.transitions.create('max-width', {
              duration: 100,
              easing: t.transitions.easing.easeOut,
              delay: 50,
            }),
          }
        )
    )
  );
function LI(e) {
  const { className: t, label: n, notched: r } = e,
    o = J(e, $I),
    i = n != null && n !== '',
    s = E({}, e, { notched: r, withLabel: i });
  return C.jsx(
    jI,
    E({ 'aria-hidden': !0, className: t, ownerState: s }, o, {
      children: C.jsx(DI, {
        ownerState: s,
        children: i
          ? C.jsx('span', { children: n })
          : Nv ||
            (Nv = C.jsx('span', { className: 'notranslate', children: '​' })),
      }),
    })
  );
}
const NI = [
    'components',
    'fullWidth',
    'inputComponent',
    'label',
    'multiline',
    'notched',
    'slots',
    'type',
  ],
  FI = (e) => {
    const { classes: t } = e,
      r = Se(
        {
          root: ['root'],
          notchedOutline: ['notchedOutline'],
          input: ['input'],
        },
        M_,
        t
      );
    return E({}, t, r);
  },
  zI = Q(kc, {
    shouldForwardProp: (e) => un(e) || e === 'classes',
    name: 'MuiOutlinedInput',
    slot: 'Root',
    overridesResolver: Pc,
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === 'light'
        ? 'rgba(0, 0, 0, 0.23)'
        : 'rgba(255, 255, 255, 0.23)';
    return E(
      {
        position: 'relative',
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${br.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        '@media (hover: none)': {
          [`&:hover .${br.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : n,
          },
        },
        [`&.${br.focused} .${br.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[t.color].main,
          borderWidth: 2,
        },
        [`&.${br.error} .${br.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main,
        },
        [`&.${br.disabled} .${br.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled,
        },
      },
      t.startAdornment && { paddingLeft: 14 },
      t.endAdornment && { paddingRight: 14 },
      t.multiline &&
        E(
          { padding: '16.5px 14px' },
          t.size === 'small' && { padding: '8.5px 14px' }
        )
    );
  }),
  BI = Q(LI, {
    name: 'MuiOutlinedInput',
    slot: 'NotchedOutline',
    overridesResolver: (e, t) => t.notchedOutline,
  })(({ theme: e }) => {
    const t =
      e.palette.mode === 'light'
        ? 'rgba(0, 0, 0, 0.23)'
        : 'rgba(255, 255, 255, 0.23)';
    return {
      borderColor: e.vars
        ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
        : t,
    };
  }),
  WI = Q(Rc, {
    name: 'MuiOutlinedInput',
    slot: 'Input',
    overridesResolver: Tc,
  })(({ theme: e, ownerState: t }) =>
    E(
      { padding: '16.5px 14px' },
      !e.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow:
            e.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: e.palette.mode === 'light' ? null : '#fff',
          caretColor: e.palette.mode === 'light' ? null : '#fff',
          borderRadius: 'inherit',
        },
      },
      e.vars && {
        '&:-webkit-autofill': { borderRadius: 'inherit' },
        [e.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff',
          },
        },
      },
      t.size === 'small' && { padding: '8.5px 14px' },
      t.multiline && { padding: 0 },
      t.startAdornment && { paddingLeft: 0 },
      t.endAdornment && { paddingRight: 0 }
    )
  ),
  qm = b.forwardRef(function (t, n) {
    var r, o, i, s, a;
    const l = be({ props: t, name: 'MuiOutlinedInput' }),
      {
        components: u = {},
        fullWidth: c = !1,
        inputComponent: d = 'input',
        label: f,
        multiline: v = !1,
        notched: m,
        slots: h = {},
        type: w = 'text',
      } = l,
      p = J(l, NI),
      g = FI(l),
      y = $i(),
      x = Ii({
        props: l,
        muiFormControl: y,
        states: [
          'color',
          'disabled',
          'error',
          'focused',
          'hiddenLabel',
          'size',
          'required',
        ],
      }),
      S = E({}, l, {
        color: x.color || 'primary',
        disabled: x.disabled,
        error: x.error,
        focused: x.focused,
        formControl: y,
        fullWidth: c,
        hiddenLabel: x.hiddenLabel,
        multiline: v,
        size: x.size,
        type: w,
      }),
      P = (r = (o = h.root) != null ? o : u.Root) != null ? r : zI,
      T = (i = (s = h.input) != null ? s : u.Input) != null ? i : WI;
    return C.jsx(
      Um,
      E(
        {
          slots: { root: P, input: T },
          renderSuffix: (_) =>
            C.jsx(BI, {
              ownerState: S,
              className: g.notchedOutline,
              label:
                f != null && f !== '' && x.required
                  ? a || (a = C.jsxs(b.Fragment, { children: [f, ' ', '*'] }))
                  : f,
              notched:
                typeof m < 'u'
                  ? m
                  : !!(_.startAdornment || _.filled || _.focused),
            }),
          fullWidth: c,
          inputComponent: d,
          multiline: v,
          ref: n,
          type: w,
        },
        p,
        { classes: E({}, g, { notchedOutline: null }) }
      )
    );
  });
qm.muiName = 'Input';
function VI(e) {
  return Ee('MuiSelect', e);
}
const rs = ge('MuiSelect', [
  'root',
  'select',
  'multiple',
  'filled',
  'outlined',
  'standard',
  'disabled',
  'focused',
  'icon',
  'iconOpen',
  'iconFilled',
  'iconOutlined',
  'iconStandard',
  'nativeInput',
  'error',
]);
var Fv;
const UI = [
    'aria-describedby',
    'aria-label',
    'autoFocus',
    'autoWidth',
    'children',
    'className',
    'defaultOpen',
    'defaultValue',
    'disabled',
    'displayEmpty',
    'error',
    'IconComponent',
    'inputRef',
    'labelId',
    'MenuProps',
    'multiple',
    'name',
    'onBlur',
    'onChange',
    'onClose',
    'onFocus',
    'onOpen',
    'open',
    'readOnly',
    'renderValue',
    'SelectDisplayProps',
    'tabIndex',
    'type',
    'value',
    'variant',
  ],
  HI = Q('div', {
    name: 'MuiSelect',
    slot: 'Select',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`&.${rs.select}`]: t.select },
        { [`&.${rs.select}`]: t[n.variant] },
        { [`&.${rs.error}`]: t.error },
        { [`&.${rs.multiple}`]: t.multiple },
      ];
    },
  })(Sb, {
    [`&.${rs.select}`]: {
      height: 'auto',
      minHeight: '1.4375em',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  }),
  GI = Q('svg', {
    name: 'MuiSelect',
    slot: 'Icon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${se(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(Eb),
  KI = Q('input', {
    shouldForwardProp: (e) => V1(e) && e !== 'classes',
    name: 'MuiSelect',
    slot: 'NativeInput',
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    width: '100%',
    boxSizing: 'border-box',
  });
function zv(e, t) {
  return typeof t == 'object' && t !== null ? e === t : String(e) === String(t);
}
function qI(e) {
  return e == null || (typeof e == 'string' && !e.trim());
}
const XI = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ['select', n, r && 'disabled', o && 'multiple', s && 'error'],
        icon: ['icon', `icon${se(n)}`, i && 'iconOpen', r && 'disabled'],
        nativeInput: ['nativeInput'],
      };
    return Se(a, VI, t);
  },
  YI = b.forwardRef(function (t, n) {
    var r;
    const {
        'aria-describedby': o,
        'aria-label': i,
        autoFocus: s,
        autoWidth: a,
        children: l,
        className: u,
        defaultOpen: c,
        defaultValue: d,
        disabled: f,
        displayEmpty: v,
        error: m = !1,
        IconComponent: h,
        inputRef: w,
        labelId: p,
        MenuProps: g = {},
        multiple: y,
        name: x,
        onBlur: S,
        onChange: P,
        onClose: T,
        onFocus: _,
        onOpen: I,
        open: k,
        readOnly: D,
        renderValue: $,
        SelectDisplayProps: A = {},
        tabIndex: z,
        value: B,
        variant: W = 'standard',
      } = t,
      M = J(t, UI),
      [O, N] = Nf({ controlled: B, default: d, name: 'Select' }),
      [H, oe] = Nf({ controlled: k, default: c, name: 'Select' }),
      ee = b.useRef(null),
      he = b.useRef(null),
      [te, de] = b.useState(null),
      { current: ue } = b.useRef(k != null),
      [Re, we] = b.useState(),
      ve = pt(n, w),
      Ne = b.useCallback((ne) => {
        (he.current = ne), ne && de(ne);
      }, []),
      fe = te == null ? void 0 : te.parentNode;
    b.useImperativeHandle(
      ve,
      () => ({
        focus: () => {
          he.current.focus();
        },
        node: ee.current,
        value: O,
      }),
      [O]
    ),
      b.useEffect(() => {
        c &&
          H &&
          te &&
          !ue &&
          (we(a ? null : fe.clientWidth), he.current.focus());
      }, [te, a]),
      b.useEffect(() => {
        s && he.current.focus();
      }, [s]),
      b.useEffect(() => {
        if (!p) return;
        const ne = jt(he.current).getElementById(p);
        if (ne) {
          const ke = () => {
            getSelection().isCollapsed && he.current.focus();
          };
          return (
            ne.addEventListener('click', ke),
            () => {
              ne.removeEventListener('click', ke);
            }
          );
        }
      }, [p]);
    const Pe = (ne, ke) => {
        ne ? I && I(ke) : T && T(ke),
          ue || (we(a ? null : fe.clientWidth), oe(ne));
      },
      pe = (ne) => {
        ne.button === 0 &&
          (ne.preventDefault(), he.current.focus(), Pe(!0, ne));
      },
      ye = (ne) => {
        Pe(!1, ne);
      },
      xe = b.Children.toArray(l),
      ht = (ne) => {
        const ke = xe.find(($e) => $e.props.value === ne.target.value);
        ke !== void 0 && (N(ke.props.value), P && P(ne, ke));
      },
      Ve = (ne) => (ke) => {
        let $e;
        if (ke.currentTarget.hasAttribute('tabindex')) {
          if (y) {
            $e = Array.isArray(O) ? O.slice() : [];
            const Mt = O.indexOf(ne.props.value);
            Mt === -1 ? $e.push(ne.props.value) : $e.splice(Mt, 1);
          } else $e = ne.props.value;
          if (
            (ne.props.onClick && ne.props.onClick(ke), O !== $e && (N($e), P))
          ) {
            const Mt = ke.nativeEvent || ke,
              zn = new Mt.constructor(Mt.type, Mt);
            Object.defineProperty(zn, 'target', {
              writable: !0,
              value: { value: $e, name: x },
            }),
              P(zn, ne);
          }
          y || Pe(!1, ke);
        }
      },
      R = (ne) => {
        D ||
          ([' ', 'ArrowUp', 'ArrowDown', 'Enter'].indexOf(ne.key) !== -1 &&
            (ne.preventDefault(), Pe(!0, ne)));
      },
      j = te !== null && H,
      F = (ne) => {
        !j &&
          S &&
          (Object.defineProperty(ne, 'target', {
            writable: !0,
            value: { value: O, name: x },
          }),
          S(ne));
      };
    delete M['aria-invalid'];
    let G, q;
    const U = [];
    let L = !1;
    (lu({ value: O }) || v) && ($ ? (G = $(O)) : (L = !0));
    const K = xe.map((ne) => {
      if (!b.isValidElement(ne)) return null;
      let ke;
      if (y) {
        if (!Array.isArray(O)) throw new Error(yo(2));
        (ke = O.some(($e) => zv($e, ne.props.value))),
          ke && L && U.push(ne.props.children);
      } else (ke = zv(O, ne.props.value)), ke && L && (q = ne.props.children);
      return b.cloneElement(ne, {
        'aria-selected': ke ? 'true' : 'false',
        onClick: Ve(ne),
        onKeyUp: ($e) => {
          $e.key === ' ' && $e.preventDefault(),
            ne.props.onKeyUp && ne.props.onKeyUp($e);
        },
        role: 'option',
        selected: ke,
        value: void 0,
        'data-value': ne.props.value,
      });
    });
    L &&
      (y
        ? U.length === 0
          ? (G = null)
          : (G = U.reduce(
              (ne, ke, $e) => (
                ne.push(ke), $e < U.length - 1 && ne.push(', '), ne
              ),
              []
            ))
        : (G = q));
    let le = Re;
    !a && ue && te && (le = fe.clientWidth);
    let me;
    typeof z < 'u' ? (me = z) : (me = f ? null : 0);
    const ce = A.id || (x ? `mui-component-select-${x}` : void 0),
      re = E({}, t, { variant: W, value: O, open: j, error: m }),
      Ie = XI(re),
      xt = E({}, g.PaperProps, (r = g.slotProps) == null ? void 0 : r.paper),
      bt = Xu();
    return C.jsxs(b.Fragment, {
      children: [
        C.jsx(
          HI,
          E(
            {
              ref: Ne,
              tabIndex: me,
              role: 'combobox',
              'aria-controls': bt,
              'aria-disabled': f ? 'true' : void 0,
              'aria-expanded': j ? 'true' : 'false',
              'aria-haspopup': 'listbox',
              'aria-label': i,
              'aria-labelledby': [p, ce].filter(Boolean).join(' ') || void 0,
              'aria-describedby': o,
              onKeyDown: R,
              onMouseDown: f || D ? null : pe,
              onBlur: F,
              onFocus: _,
            },
            A,
            {
              ownerState: re,
              className: ie(A.className, Ie.select, u),
              id: ce,
              children: qI(G)
                ? Fv ||
                  (Fv = C.jsx('span', {
                    className: 'notranslate',
                    children: '​',
                  }))
                : G,
            }
          )
        ),
        C.jsx(
          KI,
          E(
            {
              'aria-invalid': m,
              value: Array.isArray(O) ? O.join(',') : O,
              name: x,
              ref: ee,
              'aria-hidden': !0,
              onChange: ht,
              tabIndex: -1,
              disabled: f,
              className: Ie.nativeInput,
              autoFocus: s,
              ownerState: re,
            },
            M
          )
        ),
        C.jsx(GI, { as: h, className: Ie.icon, ownerState: re }),
        C.jsx(
          ep,
          E(
            {
              id: `menu-${x || ''}`,
              anchorEl: fe,
              open: j,
              onClose: ye,
              anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
              transformOrigin: { vertical: 'top', horizontal: 'center' },
            },
            g,
            {
              MenuListProps: E(
                {
                  'aria-labelledby': p,
                  role: 'listbox',
                  'aria-multiselectable': y ? 'true' : void 0,
                  disableListWrap: !0,
                  id: bt,
                },
                g.MenuListProps
              ),
              slotProps: E({}, g.slotProps, {
                paper: E({}, xt, {
                  style: E({ minWidth: le }, xt != null ? xt.style : null),
                }),
              }),
              children: K,
            }
          )
        ),
      ],
    });
  }),
  QI = [
    'autoWidth',
    'children',
    'classes',
    'className',
    'defaultOpen',
    'displayEmpty',
    'IconComponent',
    'id',
    'input',
    'inputProps',
    'label',
    'labelId',
    'MenuProps',
    'multiple',
    'native',
    'onClose',
    'onOpen',
    'open',
    'renderValue',
    'SelectDisplayProps',
    'variant',
  ],
  JI = ['root'],
  ZI = (e) => {
    const { classes: t } = e;
    return t;
  },
  Xm = {
    name: 'MuiSelect',
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => un(e) && e !== 'variant',
    slot: 'Root',
  },
  e$ = Q(Gm, Xm)(''),
  t$ = Q(qm, Xm)(''),
  n$ = Q(Hm, Xm)(''),
  Cb = b.forwardRef(function (t, n) {
    const r = be({ name: 'MuiSelect', props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: s = {},
        className: a,
        defaultOpen: l = !1,
        displayEmpty: u = !1,
        IconComponent: c = I_,
        id: d,
        input: f,
        inputProps: v,
        label: m,
        labelId: h,
        MenuProps: w,
        multiple: p = !1,
        native: g = !1,
        onClose: y,
        onOpen: x,
        open: S,
        renderValue: P,
        SelectDisplayProps: T,
        variant: _ = 'outlined',
      } = r,
      I = J(r, QI),
      k = g ? II : YI,
      D = $i(),
      $ = Ii({ props: r, muiFormControl: D, states: ['variant', 'error'] }),
      A = $.variant || _,
      z = E({}, r, { variant: A, classes: s }),
      B = ZI(z),
      W = J(B, JI),
      M =
        f ||
        {
          standard: C.jsx(e$, { ownerState: z }),
          outlined: C.jsx(t$, { label: m, ownerState: z }),
          filled: C.jsx(n$, { ownerState: z }),
        }[A],
      O = pt(n, M.ref);
    return C.jsx(b.Fragment, {
      children: b.cloneElement(
        M,
        E(
          {
            inputComponent: k,
            inputProps: E(
              {
                children: i,
                error: $.error,
                IconComponent: c,
                variant: A,
                type: void 0,
                multiple: p,
              },
              g
                ? { id: d }
                : {
                    autoWidth: o,
                    defaultOpen: l,
                    displayEmpty: u,
                    labelId: h,
                    MenuProps: w,
                    onClose: y,
                    onOpen: x,
                    open: S,
                    renderValue: P,
                    SelectDisplayProps: E({ id: d }, T),
                  },
              v,
              { classes: v ? tn(W, v.classes) : W },
              f ? f.props.inputProps : {}
            ),
          },
          ((p && g) || u) && A === 'outlined' ? { notched: !0 } : {},
          { ref: O, className: ie(M.props.className, a, B.root) },
          !f && { variant: A },
          I
        )
      ),
    });
  });
Cb.muiName = 'Select';
function r$(e) {
  return Ee('MuiTooltip', e);
}
const _r = ge('MuiTooltip', [
    'popper',
    'popperInteractive',
    'popperArrow',
    'popperClose',
    'tooltip',
    'tooltipArrow',
    'touch',
    'tooltipPlacementLeft',
    'tooltipPlacementRight',
    'tooltipPlacementTop',
    'tooltipPlacementBottom',
    'arrow',
  ]),
  o$ = [
    'arrow',
    'children',
    'classes',
    'components',
    'componentsProps',
    'describeChild',
    'disableFocusListener',
    'disableHoverListener',
    'disableInteractive',
    'disableTouchListener',
    'enterDelay',
    'enterNextDelay',
    'enterTouchDelay',
    'followCursor',
    'id',
    'leaveDelay',
    'leaveTouchDelay',
    'onClose',
    'onOpen',
    'open',
    'placement',
    'PopperComponent',
    'PopperProps',
    'slotProps',
    'slots',
    'title',
    'TransitionComponent',
    'TransitionProps',
  ];
function i$(e) {
  return Math.round(e * 1e5) / 1e5;
}
const s$ = (e) => {
    const {
        classes: t,
        disableInteractive: n,
        arrow: r,
        touch: o,
        placement: i,
      } = e,
      s = {
        popper: ['popper', !n && 'popperInteractive', r && 'popperArrow'],
        tooltip: [
          'tooltip',
          r && 'tooltipArrow',
          o && 'touch',
          `tooltipPlacement${se(i.split('-')[0])}`,
        ],
        arrow: ['arrow'],
      };
    return Se(s, r$, t);
  },
  a$ = Q(db, {
    name: 'MuiTooltip',
    slot: 'Popper',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.popper,
        !n.disableInteractive && t.popperInteractive,
        n.arrow && t.popperArrow,
        !n.open && t.popperClose,
      ];
    },
  })(({ theme: e, ownerState: t, open: n }) =>
    E(
      { zIndex: (e.vars || e).zIndex.tooltip, pointerEvents: 'none' },
      !t.disableInteractive && { pointerEvents: 'auto' },
      !n && { pointerEvents: 'none' },
      t.arrow && {
        [`&[data-popper-placement*="bottom"] .${_r.arrow}`]: {
          top: 0,
          marginTop: '-0.71em',
          '&::before': { transformOrigin: '0 100%' },
        },
        [`&[data-popper-placement*="top"] .${_r.arrow}`]: {
          bottom: 0,
          marginBottom: '-0.71em',
          '&::before': { transformOrigin: '100% 0' },
        },
        [`&[data-popper-placement*="right"] .${_r.arrow}`]: E(
          {},
          t.isRtl
            ? { right: 0, marginRight: '-0.71em' }
            : { left: 0, marginLeft: '-0.71em' },
          {
            height: '1em',
            width: '0.71em',
            '&::before': { transformOrigin: '100% 100%' },
          }
        ),
        [`&[data-popper-placement*="left"] .${_r.arrow}`]: E(
          {},
          t.isRtl
            ? { left: 0, marginLeft: '-0.71em' }
            : { right: 0, marginRight: '-0.71em' },
          {
            height: '1em',
            width: '0.71em',
            '&::before': { transformOrigin: '0 0' },
          }
        ),
      }
    )
  ),
  l$ = Q('div', {
    name: 'MuiTooltip',
    slot: 'Tooltip',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${se(n.placement.split('-')[0])}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    E(
      {
        backgroundColor: e.vars
          ? e.vars.palette.Tooltip.bg
          : Bt(e.palette.grey[700], 0.92),
        borderRadius: (e.vars || e).shape.borderRadius,
        color: (e.vars || e).palette.common.white,
        fontFamily: e.typography.fontFamily,
        padding: '4px 8px',
        fontSize: e.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: 'break-word',
        fontWeight: e.typography.fontWeightMedium,
      },
      t.arrow && { position: 'relative', margin: 0 },
      t.touch && {
        padding: '8px 16px',
        fontSize: e.typography.pxToRem(14),
        lineHeight: `${i$(16 / 14)}em`,
        fontWeight: e.typography.fontWeightRegular,
      },
      {
        [`.${_r.popper}[data-popper-placement*="left"] &`]: E(
          { transformOrigin: 'right center' },
          t.isRtl
            ? E({ marginLeft: '14px' }, t.touch && { marginLeft: '24px' })
            : E({ marginRight: '14px' }, t.touch && { marginRight: '24px' })
        ),
        [`.${_r.popper}[data-popper-placement*="right"] &`]: E(
          { transformOrigin: 'left center' },
          t.isRtl
            ? E({ marginRight: '14px' }, t.touch && { marginRight: '24px' })
            : E({ marginLeft: '14px' }, t.touch && { marginLeft: '24px' })
        ),
        [`.${_r.popper}[data-popper-placement*="top"] &`]: E(
          { transformOrigin: 'center bottom', marginBottom: '14px' },
          t.touch && { marginBottom: '24px' }
        ),
        [`.${_r.popper}[data-popper-placement*="bottom"] &`]: E(
          { transformOrigin: 'center top', marginTop: '14px' },
          t.touch && { marginTop: '24px' }
        ),
      }
    )
  ),
  u$ = Q('span', {
    name: 'MuiTooltip',
    slot: 'Arrow',
    overridesResolver: (e, t) => t.arrow,
  })(({ theme: e }) => ({
    overflow: 'hidden',
    position: 'absolute',
    width: '1em',
    height: '0.71em',
    boxSizing: 'border-box',
    color: e.vars ? e.vars.palette.Tooltip.bg : Bt(e.palette.grey[700], 0.9),
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundColor: 'currentColor',
      transform: 'rotate(45deg)',
    },
  }));
let Qa = !1;
const Bv = new la();
let os = { x: 0, y: 0 };
function Ja(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const c$ = b.forwardRef(function (t, n) {
  var r, o, i, s, a, l, u, c, d, f, v, m, h, w, p, g, y, x, S;
  const P = be({ props: t, name: 'MuiTooltip' }),
    {
      arrow: T = !1,
      children: _,
      components: I = {},
      componentsProps: k = {},
      describeChild: D = !1,
      disableFocusListener: $ = !1,
      disableHoverListener: A = !1,
      disableInteractive: z = !1,
      disableTouchListener: B = !1,
      enterDelay: W = 100,
      enterNextDelay: M = 0,
      enterTouchDelay: O = 700,
      followCursor: N = !1,
      id: H,
      leaveDelay: oe = 0,
      leaveTouchDelay: ee = 1500,
      onClose: he,
      onOpen: te,
      open: de,
      placement: ue = 'bottom',
      PopperComponent: Re,
      PopperProps: we = {},
      slotProps: ve = {},
      slots: Ne = {},
      title: fe,
      TransitionComponent: Pe = uu,
      TransitionProps: pe,
    } = P,
    ye = J(P, o$),
    xe = b.isValidElement(_) ? _ : C.jsx('span', { children: _ }),
    ht = ga(),
    Ve = U1(),
    [R, j] = b.useState(),
    [F, G] = b.useState(null),
    q = b.useRef(!1),
    U = z || N,
    L = Yo(),
    K = Yo(),
    le = Yo(),
    me = Yo(),
    [ce, re] = Nf({
      controlled: de,
      default: !1,
      name: 'Tooltip',
      state: 'open',
    });
  let Ie = ce;
  const xt = Xu(H),
    bt = b.useRef(),
    ne = Or(() => {
      bt.current !== void 0 &&
        ((document.body.style.WebkitUserSelect = bt.current),
        (bt.current = void 0)),
        me.clear();
    });
  b.useEffect(() => ne, [ne]);
  const ke = (Te) => {
      Bv.clear(), (Qa = !0), re(!0), te && !Ie && te(Te);
    },
    $e = Or((Te) => {
      Bv.start(800 + oe, () => {
        Qa = !1;
      }),
        re(!1),
        he && Ie && he(Te),
        L.start(ht.transitions.duration.shortest, () => {
          q.current = !1;
        });
    }),
    Mt = (Te) => {
      (q.current && Te.type !== 'touchstart') ||
        (R && R.removeAttribute('title'),
        K.clear(),
        le.clear(),
        W || (Qa && M)
          ? K.start(Qa ? M : W, () => {
              ke(Te);
            })
          : ke(Te));
    },
    zn = (Te) => {
      K.clear(),
        le.start(oe, () => {
          $e(Te);
        });
    },
    { isFocusVisibleRef: ko, onBlur: Lc, onFocus: Uw, ref: Hw } = Zx(),
    [, dh] = b.useState(!1),
    fh = (Te) => {
      Lc(Te), ko.current === !1 && (dh(!1), zn(Te));
    },
    ph = (Te) => {
      R || j(Te.currentTarget), Uw(Te), ko.current === !0 && (dh(!0), Mt(Te));
    },
    mh = (Te) => {
      q.current = !0;
      const qt = xe.props;
      qt.onTouchStart && qt.onTouchStart(Te);
    },
    Gw = (Te) => {
      mh(Te),
        le.clear(),
        L.clear(),
        ne(),
        (bt.current = document.body.style.WebkitUserSelect),
        (document.body.style.WebkitUserSelect = 'none'),
        me.start(O, () => {
          (document.body.style.WebkitUserSelect = bt.current), Mt(Te);
        });
    },
    Kw = (Te) => {
      xe.props.onTouchEnd && xe.props.onTouchEnd(Te),
        ne(),
        le.start(ee, () => {
          $e(Te);
        });
    };
  b.useEffect(() => {
    if (!Ie) return;
    function Te(qt) {
      (qt.key === 'Escape' || qt.key === 'Esc') && $e(qt);
    }
    return (
      document.addEventListener('keydown', Te),
      () => {
        document.removeEventListener('keydown', Te);
      }
    );
  }, [$e, Ie]);
  const qw = pt(xe.ref, Hw, j, n);
  !fe && fe !== 0 && (Ie = !1);
  const Nc = b.useRef(),
    Xw = (Te) => {
      const qt = xe.props;
      qt.onMouseMove && qt.onMouseMove(Te),
        (os = { x: Te.clientX, y: Te.clientY }),
        Nc.current && Nc.current.update();
    },
    Fi = {},
    Fc = typeof fe == 'string';
  D
    ? ((Fi.title = !Ie && Fc && !A ? fe : null),
      (Fi['aria-describedby'] = Ie ? xt : null))
    : ((Fi['aria-label'] = Fc ? fe : null),
      (Fi['aria-labelledby'] = Ie && !Fc ? xt : null));
  const _n = E(
      {},
      Fi,
      ye,
      xe.props,
      {
        className: ie(ye.className, xe.props.className),
        onTouchStart: mh,
        ref: qw,
      },
      N ? { onMouseMove: Xw } : {}
    ),
    zi = {};
  B || ((_n.onTouchStart = Gw), (_n.onTouchEnd = Kw)),
    A ||
      ((_n.onMouseOver = Ja(Mt, _n.onMouseOver)),
      (_n.onMouseLeave = Ja(zn, _n.onMouseLeave)),
      U || ((zi.onMouseOver = Mt), (zi.onMouseLeave = zn))),
    $ ||
      ((_n.onFocus = Ja(ph, _n.onFocus)),
      (_n.onBlur = Ja(fh, _n.onBlur)),
      U || ((zi.onFocus = ph), (zi.onBlur = fh)));
  const Yw = b.useMemo(() => {
      var Te;
      let qt = [
        { name: 'arrow', enabled: !!F, options: { element: F, padding: 4 } },
      ];
      return (
        (Te = we.popperOptions) != null &&
          Te.modifiers &&
          (qt = qt.concat(we.popperOptions.modifiers)),
        E({}, we.popperOptions, { modifiers: qt })
      );
    }, [F, we]),
    Bi = E({}, P, {
      isRtl: Ve,
      arrow: T,
      disableInteractive: U,
      placement: ue,
      PopperComponentProp: Re,
      touch: q.current,
    }),
    zc = s$(Bi),
    hh = (r = (o = Ne.popper) != null ? o : I.Popper) != null ? r : a$,
    gh =
      (i =
        (s = (a = Ne.transition) != null ? a : I.Transition) != null
          ? s
          : Pe) != null
        ? i
        : uu,
    vh = (l = (u = Ne.tooltip) != null ? u : I.Tooltip) != null ? l : l$,
    yh = (c = (d = Ne.arrow) != null ? d : I.Arrow) != null ? c : u$,
    Qw = Qo(
      hh,
      E({}, we, (f = ve.popper) != null ? f : k.popper, {
        className: ie(
          zc.popper,
          we == null ? void 0 : we.className,
          (v = (m = ve.popper) != null ? m : k.popper) == null
            ? void 0
            : v.className
        ),
      }),
      Bi
    ),
    Jw = Qo(gh, E({}, pe, (h = ve.transition) != null ? h : k.transition), Bi),
    Zw = Qo(
      vh,
      E({}, (w = ve.tooltip) != null ? w : k.tooltip, {
        className: ie(
          zc.tooltip,
          (p = (g = ve.tooltip) != null ? g : k.tooltip) == null
            ? void 0
            : p.className
        ),
      }),
      Bi
    ),
    eS = Qo(
      yh,
      E({}, (y = ve.arrow) != null ? y : k.arrow, {
        className: ie(
          zc.arrow,
          (x = (S = ve.arrow) != null ? S : k.arrow) == null
            ? void 0
            : x.className
        ),
      }),
      Bi
    );
  return C.jsxs(b.Fragment, {
    children: [
      b.cloneElement(xe, _n),
      C.jsx(
        hh,
        E(
          {
            as: Re ?? db,
            placement: ue,
            anchorEl: N
              ? {
                  getBoundingClientRect: () => ({
                    top: os.y,
                    left: os.x,
                    right: os.x,
                    bottom: os.y,
                    width: 0,
                    height: 0,
                  }),
                }
              : R,
            popperRef: Nc,
            open: R ? Ie : !1,
            id: xt,
            transition: !0,
          },
          zi,
          Qw,
          {
            popperOptions: Yw,
            children: ({ TransitionProps: Te }) =>
              C.jsx(
                gh,
                E({ timeout: ht.transitions.duration.shorter }, Te, Jw, {
                  children: C.jsxs(
                    vh,
                    E({}, Zw, {
                      children: [
                        fe,
                        T ? C.jsx(yh, E({}, eS, { ref: G })) : null,
                      ],
                    })
                  ),
                })
              ),
          }
        )
      ),
    ],
  });
});
function d$(e) {
  return Ee('MuiToolbar', e);
}
ge('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
const f$ = ['className', 'component', 'disableGutters', 'variant'],
  p$ = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return Se({ root: ['root', !n && 'gutters', r] }, d$, t);
  },
  m$ = Q('div', {
    name: 'MuiToolbar',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      E(
        { position: 'relative', display: 'flex', alignItems: 'center' },
        !t.disableGutters && {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up('sm')]: {
            paddingLeft: e.spacing(3),
            paddingRight: e.spacing(3),
          },
        },
        t.variant === 'dense' && { minHeight: 48 }
      ),
    ({ theme: e, ownerState: t }) => t.variant === 'regular' && e.mixins.toolbar
  ),
  h$ = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiToolbar' }),
      {
        className: o,
        component: i = 'div',
        disableGutters: s = !1,
        variant: a = 'regular',
      } = r,
      l = J(r, f$),
      u = E({}, r, { component: i, disableGutters: s, variant: a }),
      c = p$(u);
    return C.jsx(
      m$,
      E({ as: i, className: ie(c.root, o), ref: n, ownerState: u }, l)
    );
  });
function g$(e) {
  return Ee('MuiTextField', e);
}
ge('MuiTextField', ['root']);
const v$ = [
    'autoComplete',
    'autoFocus',
    'children',
    'className',
    'color',
    'defaultValue',
    'disabled',
    'error',
    'FormHelperTextProps',
    'fullWidth',
    'helperText',
    'id',
    'InputLabelProps',
    'inputProps',
    'InputProps',
    'inputRef',
    'label',
    'maxRows',
    'minRows',
    'multiline',
    'name',
    'onBlur',
    'onChange',
    'onFocus',
    'placeholder',
    'required',
    'rows',
    'select',
    'SelectProps',
    'type',
    'value',
    'variant',
  ],
  y$ = { standard: Gm, filled: Hm, outlined: qm },
  x$ = (e) => {
    const { classes: t } = e;
    return Se({ root: ['root'] }, g$, t);
  },
  b$ = Q(lA, {
    name: 'MuiTextField',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({}),
  Za = b.forwardRef(function (t, n) {
    const r = be({ props: t, name: 'MuiTextField' }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: s,
        className: a,
        color: l = 'primary',
        defaultValue: u,
        disabled: c = !1,
        error: d = !1,
        FormHelperTextProps: f,
        fullWidth: v = !1,
        helperText: m,
        id: h,
        InputLabelProps: w,
        inputProps: p,
        InputProps: g,
        inputRef: y,
        label: x,
        maxRows: S,
        minRows: P,
        multiline: T = !1,
        name: _,
        onBlur: I,
        onChange: k,
        onFocus: D,
        placeholder: $,
        required: A = !1,
        rows: z,
        select: B = !1,
        SelectProps: W,
        type: M,
        value: O,
        variant: N = 'outlined',
      } = r,
      H = J(r, v$),
      oe = E({}, r, {
        autoFocus: i,
        color: l,
        disabled: c,
        error: d,
        fullWidth: v,
        multiline: T,
        required: A,
        select: B,
        variant: N,
      }),
      ee = x$(oe),
      he = {};
    N === 'outlined' &&
      (w && typeof w.shrink < 'u' && (he.notched = w.shrink), (he.label = x)),
      B &&
        ((!W || !W.native) && (he.id = void 0),
        (he['aria-describedby'] = void 0));
    const te = Xu(h),
      de = m && te ? `${te}-helper-text` : void 0,
      ue = x && te ? `${te}-label` : void 0,
      Re = y$[N],
      we = C.jsx(
        Re,
        E(
          {
            'aria-describedby': de,
            autoComplete: o,
            autoFocus: i,
            defaultValue: u,
            fullWidth: v,
            multiline: T,
            name: _,
            rows: z,
            maxRows: S,
            minRows: P,
            type: M,
            value: O,
            id: te,
            inputRef: y,
            onBlur: I,
            onChange: k,
            onFocus: D,
            placeholder: $,
            inputProps: p,
          },
          he,
          g
        )
      );
    return C.jsxs(
      b$,
      E(
        {
          className: ie(ee.root, a),
          disabled: c,
          error: d,
          fullWidth: v,
          ref: n,
          required: A,
          color: l,
          variant: N,
          ownerState: oe,
        },
        H,
        {
          children: [
            x != null &&
              x !== '' &&
              C.jsx(ZA, E({ htmlFor: te, id: ue }, w, { children: x })),
            B
              ? C.jsx(
                  Cb,
                  E(
                    {
                      'aria-describedby': de,
                      id: te,
                      labelId: ue,
                      value: O,
                      input: we,
                    },
                    W,
                    { children: s }
                  )
                )
              : we,
            m && C.jsx(pA, E({ id: de }, f, { children: m })),
          ],
        }
      )
    );
  }),
  dr = (e) => C.jsx(hM, { maxWidth: 'xl', ...e });
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Js() {
  return (
    (Js = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Js.apply(this, arguments)
  );
}
var Mr;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Mr || (Mr = {}));
const Wv = 'popstate';
function w$(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return tp(
      '',
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : cu(o);
  }
  return E$(t, n, null, e);
}
function lt(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Pb(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function S$() {
  return Math.random().toString(36).substr(2, 8);
}
function Vv(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function tp(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Js(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? ji(t) : t,
      { state: n, key: (t && t.key) || r || S$() }
    )
  );
}
function cu(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function ji(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function E$(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = Mr.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Js({}, s.state, { idx: u }), ''));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = Mr.Pop;
    let w = c(),
      p = w == null ? null : w - u;
    (u = w), l && l({ action: a, location: h.location, delta: p });
  }
  function f(w, p) {
    a = Mr.Push;
    let g = tp(h.location, w, p);
    u = c() + 1;
    let y = Vv(g, u),
      x = h.createHref(g);
    try {
      s.pushState(y, '', x);
    } catch (S) {
      if (S instanceof DOMException && S.name === 'DataCloneError') throw S;
      o.location.assign(x);
    }
    i && l && l({ action: a, location: h.location, delta: 1 });
  }
  function v(w, p) {
    a = Mr.Replace;
    let g = tp(h.location, w, p);
    u = c();
    let y = Vv(g, u),
      x = h.createHref(g);
    s.replaceState(y, '', x),
      i && l && l({ action: a, location: h.location, delta: 0 });
  }
  function m(w) {
    let p = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      g = typeof w == 'string' ? w : cu(w);
    return (
      (g = g.replace(/ $/, '%20')),
      lt(
        p,
        'No window.location.(origin|href) available to create URL for href: ' +
          g
      ),
      new URL(g, p)
    );
  }
  let h = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(w) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(Wv, d),
        (l = w),
        () => {
          o.removeEventListener(Wv, d), (l = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: m,
    encodeLocation(w) {
      let p = m(w);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: f,
    replace: v,
    go(w) {
      return s.go(w);
    },
  };
  return h;
}
var Uv;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Uv || (Uv = {}));
function C$(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? ji(t) : t,
    o = Ym(r.pathname || '/', n);
  if (o == null) return null;
  let i = Tb(e);
  P$(i);
  let s = null;
  for (let a = 0; s == null && a < i.length; ++a) {
    let l = L$(o);
    s = $$(i[a], l);
  }
  return s;
}
function Tb(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || '' : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith('/') &&
      (lt(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Wr([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (lt(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      Tb(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: A$(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === '' || !((a = i.path) != null && a.includes('?'))) o(i, s);
      else for (let l of kb(i.path)) o(i, s, l);
    }),
    t
  );
}
function kb(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let s = kb(r.join('/')),
    a = [];
  return (
    a.push(...s.map((l) => (l === '' ? i : [i, l].join('/')))),
    o && a.push(...s),
    a.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function P$(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : I$(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const T$ = /^:[\w-]+$/,
  k$ = 3,
  R$ = 2,
  O$ = 1,
  _$ = 10,
  M$ = -2,
  Hv = (e) => e === '*';
function A$(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Hv) && (r += M$),
    t && (r += R$),
    n
      .filter((o) => !Hv(o))
      .reduce((o, i) => o + (T$.test(i) ? k$ : i === '' ? O$ : _$), r)
  );
}
function I$(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function $$(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = [];
  for (let s = 0; s < n.length; ++s) {
    let a = n[s],
      l = s === n.length - 1,
      u = o === '/' ? t : t.slice(o.length) || '/',
      c = j$(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = a.route;
    i.push({
      params: r,
      pathname: Wr([o, c.pathname]),
      pathnameBase: B$(Wr([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== '/' && (o = Wr([o, c.pathnameBase]));
  }
  return i;
}
function j$(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = D$(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, '$1'),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: v } = c;
      if (f === '*') {
        let h = a[d] || '';
        s = i.slice(0, i.length - h.length).replace(/(.)\/+$/, '$1');
      }
      const m = a[d];
      return (
        v && !m ? (u[f] = void 0) : (u[f] = (m || '').replace(/%2F/g, '/')), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function D$(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Pb(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function L$(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Pb(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Ym(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function N$(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? ji(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : F$(n, t)) : t,
    search: W$(r),
    hash: V$(o),
  };
}
function F$(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Cd(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function z$(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Rb(e, t) {
  let n = z$(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Ob(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = ji(e))
    : ((o = Js({}, e)),
      lt(
        !o.pathname || !o.pathname.includes('?'),
        Cd('?', 'pathname', 'search', o)
      ),
      lt(
        !o.pathname || !o.pathname.includes('#'),
        Cd('#', 'pathname', 'hash', o)
      ),
      lt(!o.search || !o.search.includes('#'), Cd('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    s = i ? '/' : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith('..')) {
      let f = s.split('/');
      for (; f[0] === '..'; ) f.shift(), (d -= 1);
      o.pathname = f.join('/');
    }
    a = d >= 0 ? t[d] : '/';
  }
  let l = N$(o, a),
    u = s && s !== '/' && s.endsWith('/'),
    c = (i || s === '.') && n.endsWith('/');
  return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l;
}
const Wr = (e) => e.join('/').replace(/\/\/+/g, '/'),
  B$ = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  W$ = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  V$ = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function U$(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const _b = ['post', 'put', 'patch', 'delete'];
new Set(_b);
const H$ = ['get', ..._b];
new Set(H$);
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zs() {
  return (
    (Zs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zs.apply(this, arguments)
  );
}
const Qm = b.createContext(null),
  G$ = b.createContext(null),
  Po = b.createContext(null),
  _c = b.createContext(null),
  To = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Mb = b.createContext(null);
function K$(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  xa() || lt(!1);
  let { basename: r, navigator: o } = b.useContext(Po),
    { hash: i, pathname: s, search: a } = $b(e, { relative: n }),
    l = s;
  return (
    r !== '/' && (l = s === '/' ? r : Wr([r, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function xa() {
  return b.useContext(_c) != null;
}
function Mc() {
  return xa() || lt(!1), b.useContext(_c).location;
}
function Ab(e) {
  b.useContext(Po).static || b.useLayoutEffect(e);
}
function Ib() {
  let { isDataRoute: e } = b.useContext(To);
  return e ? sj() : q$();
}
function q$() {
  xa() || lt(!1);
  let e = b.useContext(Qm),
    { basename: t, future: n, navigator: r } = b.useContext(Po),
    { matches: o } = b.useContext(To),
    { pathname: i } = Mc(),
    s = JSON.stringify(Rb(o, n.v7_relativeSplatPath)),
    a = b.useRef(!1);
  return (
    Ab(() => {
      a.current = !0;
    }),
    b.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let d = Ob(u, JSON.parse(s), i, c.relative === 'path');
        e == null &&
          t !== '/' &&
          (d.pathname = d.pathname === '/' ? t : Wr([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, s, i, e]
    )
  );
}
function $b(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = b.useContext(Po),
    { matches: o } = b.useContext(To),
    { pathname: i } = Mc(),
    s = JSON.stringify(Rb(o, r.v7_relativeSplatPath));
  return b.useMemo(() => Ob(e, JSON.parse(s), i, n === 'path'), [e, s, i, n]);
}
function X$(e, t) {
  return Y$(e, t);
}
function Y$(e, t, n, r) {
  xa() || lt(!1);
  let { navigator: o } = b.useContext(Po),
    { matches: i } = b.useContext(To),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : '/';
  s && s.route;
  let u = Mc(),
    c;
  if (t) {
    var d;
    let w = typeof t == 'string' ? ji(t) : t;
    l === '/' || ((d = w.pathname) != null && d.startsWith(l)) || lt(!1),
      (c = w);
  } else c = u;
  let f = c.pathname || '/',
    v = f;
  if (l !== '/') {
    let w = l.replace(/^\//, '').split('/');
    v = '/' + f.replace(/^\//, '').split('/').slice(w.length).join('/');
  }
  let m = C$(e, { pathname: v }),
    h = tj(
      m &&
        m.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: Wr([
              l,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === '/'
                ? l
                : Wr([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && h
    ? b.createElement(
        _c.Provider,
        {
          value: {
            location: Zs(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              c
            ),
            navigationType: Mr.Pop,
          },
        },
        h
      )
    : h;
}
function Q$() {
  let e = ij(),
    t = U$(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement('h2', null, 'Unexpected Application Error!'),
    b.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? b.createElement('pre', { style: o }, n) : null,
    null
  );
}
const J$ = b.createElement(Q$, null);
class Z$ extends b.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? b.createElement(
          To.Provider,
          { value: this.props.routeContext },
          b.createElement(Mb.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function ej(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = b.useContext(Qm);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(To.Provider, { value: t }, r)
  );
}
function tj(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let c = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    c >= 0 || lt(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: v } = n,
          m =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!v || v[d.route.id] === void 0);
        if (d.route.lazy || m) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, d, f) => {
    let v,
      m = !1,
      h = null,
      w = null;
    n &&
      ((v = a && d.route.id ? a[d.route.id] : void 0),
      (h = d.route.errorElement || J$),
      l &&
        (u < 0 && f === 0
          ? ((m = !0), (w = null))
          : u === f &&
            ((m = !0), (w = d.route.hydrateFallbackElement || null))));
    let p = t.concat(s.slice(0, f + 1)),
      g = () => {
        let y;
        return (
          v
            ? (y = h)
            : m
            ? (y = w)
            : d.route.Component
            ? (y = b.createElement(d.route.Component, null))
            : d.route.element
            ? (y = d.route.element)
            : (y = c),
          b.createElement(ej, {
            match: d,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? b.createElement(Z$, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: v,
          children: g(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var jb = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(jb || {}),
  du = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(du || {});
function nj(e) {
  let t = b.useContext(Qm);
  return t || lt(!1), t;
}
function rj(e) {
  let t = b.useContext(G$);
  return t || lt(!1), t;
}
function oj(e) {
  let t = b.useContext(To);
  return t || lt(!1), t;
}
function Db(e) {
  let t = oj(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || lt(!1), n.route.id;
}
function ij() {
  var e;
  let t = b.useContext(Mb),
    n = rj(du.UseRouteError),
    r = Db(du.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function sj() {
  let { router: e } = nj(jb.UseNavigateStable),
    t = Db(du.UseNavigateStable),
    n = b.useRef(!1);
  return (
    Ab(() => {
      n.current = !0;
    }),
    b.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, Zs({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Lo(e) {
  lt(!1);
}
function aj(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = Mr.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  xa() && lt(!1);
  let l = t.replace(/^\/*/, '/'),
    u = b.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: Zs({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s]
    );
  typeof r == 'string' && (r = ji(r));
  let {
      pathname: c = '/',
      search: d = '',
      hash: f = '',
      state: v = null,
      key: m = 'default',
    } = r,
    h = b.useMemo(() => {
      let w = Ym(c, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: d, hash: f, state: v, key: m },
            navigationType: o,
          };
    }, [l, c, d, f, v, m, o]);
  return h == null
    ? null
    : b.createElement(
        Po.Provider,
        { value: u },
        b.createElement(_c.Provider, { children: n, value: h })
      );
}
function lj(e) {
  let { children: t, location: n } = e;
  return X$(np(t), n);
}
new Promise(() => {});
function np(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    b.Children.forEach(e, (r, o) => {
      if (!b.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === b.Fragment) {
        n.push.apply(n, np(r.props.children, i));
        return;
      }
      r.type !== Lo && lt(!1), !r.props.index || !r.props.children || lt(!1);
      let s = {
        id: r.props.id || i.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = np(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rp() {
  return (
    (rp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rp.apply(this, arguments)
  );
}
function uj(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function cj(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function dj(e, t) {
  return e.button === 0 && (!t || t === '_self') && !cj(e);
}
const fj = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  pj = '6';
try {
  window.__reactRouterVersion = pj;
} catch {}
const mj = 'startTransition',
  Gv = _l[mj];
function hj(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = b.useRef();
  i.current == null && (i.current = w$({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = b.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = b.useCallback(
      (d) => {
        u && Gv ? Gv(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    b.useLayoutEffect(() => s.listen(c), [s, c]),
    b.createElement(aj, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const gj =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  vj = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Pd = b.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      f = uj(t, fj),
      { basename: v } = b.useContext(Po),
      m,
      h = !1;
    if (typeof u == 'string' && vj.test(u) && ((m = u), gj))
      try {
        let y = new URL(window.location.href),
          x = u.startsWith('//') ? new URL(y.protocol + u) : new URL(u),
          S = Ym(x.pathname, v);
        x.origin === y.origin && S != null
          ? (u = S + x.search + x.hash)
          : (h = !0);
      } catch {}
    let w = K$(u, { relative: o }),
      p = yj(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: d,
      });
    function g(y) {
      r && r(y), y.defaultPrevented || p(y);
    }
    return b.createElement(
      'a',
      rp({}, f, { href: m || w, onClick: h || i ? r : g, ref: n, target: l })
    );
  });
var Kv;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Kv || (Kv = {}));
var qv;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(qv || (qv = {}));
function yj(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = Ib(),
    u = Mc(),
    c = $b(e, { relative: s });
  return b.useCallback(
    (d) => {
      if (dj(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : cu(u) === cu(c);
        l(e, {
          replace: f,
          state: o,
          preventScrollReset: i,
          relative: s,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, c, r, o, n, e, i, s, a]
  );
}
var ba = (e) => e.type === 'checkbox',
  Jo = (e) => e instanceof Date,
  It = (e) => e == null;
const Lb = (e) => typeof e == 'object';
var mt = (e) => !It(e) && !Array.isArray(e) && Lb(e) && !Jo(e),
  Nb = (e) =>
    mt(e) && e.target ? (ba(e.target) ? e.target.checked : e.target.value) : e,
  xj = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  Fb = (e, t) => e.has(xj(t)),
  bj = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return mt(t) && t.hasOwnProperty('isPrototypeOf');
  },
  Jm =
    typeof window < 'u' &&
    typeof window.HTMLElement < 'u' &&
    typeof document < 'u';
function Nt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(Jm && (e instanceof Blob || e instanceof FileList)) &&
    (n || mt(e))
  )
    if (((t = n ? [] : {}), !n && !bj(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = Nt(e[r]));
  else return e;
  return t;
}
var wa = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  nt = (e) => e === void 0,
  Y = (e, t, n) => {
    if (!t || !mt(e)) return n;
    const r = wa(t.split(/[,[\].]+?/)).reduce((o, i) => (It(o) ? o : o[i]), e);
    return nt(r) || r === e ? (nt(e[t]) ? n : e[t]) : r;
  },
  jn = (e) => typeof e == 'boolean';
const fu = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  Dn = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  or = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  },
  wj = ae.createContext(null),
  Zm = () => ae.useContext(wj);
var zb = (e, t, n, r = !0) => {
    const o = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(o, i, {
        get: () => {
          const s = i;
          return (
            t._proxyFormState[s] !== Dn.all &&
              (t._proxyFormState[s] = !r || Dn.all),
            n && (n[s] = !0),
            e[s]
          );
        },
      });
    return o;
  },
  Xt = (e) => mt(e) && !Object.keys(e).length,
  Bb = (e, t, n, r) => {
    n(e);
    const { name: o, ...i } = e;
    return (
      Xt(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((s) => t[s] === (!r || Dn.all))
    );
  },
  Pl = (e) => (Array.isArray(e) ? e : [e]),
  Wb = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    Pl(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function eh(e) {
  const t = ae.useRef(e);
  (t.current = e),
    ae.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
function Sj(e) {
  const t = Zm(),
    { control: n = t.control, disabled: r, name: o, exact: i } = e || {},
    [s, a] = ae.useState(n._formState),
    l = ae.useRef(!0),
    u = ae.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    c = ae.useRef(o);
  return (
    (c.current = o),
    eh({
      disabled: r,
      next: (d) =>
        l.current &&
        Wb(c.current, d.name, i) &&
        Bb(d, u.current, n._updateFormState) &&
        a({ ...n._formState, ...d }),
      subject: n._subjects.state,
    }),
    ae.useEffect(
      () => (
        (l.current = !0),
        u.current.isValid && n._updateValid(!0),
        () => {
          l.current = !1;
        }
      ),
      [n]
    ),
    zb(s, n, u.current, !1)
  );
}
var Kn = (e) => typeof e == 'string',
  Vb = (e, t, n, r, o) =>
    Kn(e)
      ? (r && t.watch.add(e), Y(n, e, o))
      : Array.isArray(e)
      ? e.map((i) => (r && t.watch.add(i), Y(n, i)))
      : (r && (t.watchAll = !0), n);
function Ej(e) {
  const t = Zm(),
    {
      control: n = t.control,
      name: r,
      defaultValue: o,
      disabled: i,
      exact: s,
    } = e || {},
    a = ae.useRef(r);
  (a.current = r),
    eh({
      disabled: i,
      subject: n._subjects.values,
      next: (c) => {
        Wb(a.current, c.name, s) &&
          u(Nt(Vb(a.current, n._names, c.values || n._formValues, !1, o)));
      },
    });
  const [l, u] = ae.useState(n._getWatch(r, o));
  return ae.useEffect(() => n._removeUnmounted()), l;
}
var th = (e) => /^\w*$/.test(e),
  Ub = (e) => wa(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
  ze = (e, t, n) => {
    let r = -1;
    const o = th(t) ? [t] : Ub(t),
      i = o.length,
      s = i - 1;
    for (; ++r < i; ) {
      const a = o[r];
      let l = n;
      if (r !== s) {
        const u = e[a];
        l = mt(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
      }
      (e[a] = l), (e = e[a]);
    }
    return e;
  };
function Cj(e) {
  const t = Zm(),
    { name: n, disabled: r, control: o = t.control, shouldUnregister: i } = e,
    s = Fb(o._names.array, n),
    a = Ej({
      control: o,
      name: n,
      defaultValue: Y(o._formValues, n, Y(o._defaultValues, n, e.defaultValue)),
      exact: !0,
    }),
    l = Sj({ control: o, name: n }),
    u = ae.useRef(
      o.register(n, {
        ...e.rules,
        value: a,
        ...(jn(e.disabled) ? { disabled: e.disabled } : {}),
      })
    );
  return (
    ae.useEffect(() => {
      const c = o._options.shouldUnregister || i,
        d = (f, v) => {
          const m = Y(o._fields, f);
          m && (m._f.mount = v);
        };
      if ((d(n, !0), c)) {
        const f = Nt(Y(o._options.defaultValues, n));
        ze(o._defaultValues, n, f),
          nt(Y(o._formValues, n)) && ze(o._formValues, n, f);
      }
      return () => {
        (s ? c && !o._state.action : c) ? o.unregister(n) : d(n, !1);
      };
    }, [n, o, s, i]),
    ae.useEffect(() => {
      Y(o._fields, n) &&
        o._updateDisabledField({
          disabled: r,
          fields: o._fields,
          name: n,
          value: Y(o._fields, n)._f.value,
        });
    }, [r, n, o]),
    {
      field: {
        name: n,
        value: a,
        ...(jn(r) || l.disabled ? { disabled: l.disabled || r } : {}),
        onChange: ae.useCallback(
          (c) =>
            u.current.onChange({
              target: { value: Nb(c), name: n },
              type: fu.CHANGE,
            }),
          [n]
        ),
        onBlur: ae.useCallback(
          () =>
            u.current.onBlur({
              target: { value: Y(o._formValues, n), name: n },
              type: fu.BLUR,
            }),
          [n, o]
        ),
        ref: (c) => {
          const d = Y(o._fields, n);
          d &&
            c &&
            (d._f.ref = {
              focus: () => c.focus(),
              select: () => c.select(),
              setCustomValidity: (f) => c.setCustomValidity(f),
              reportValidity: () => c.reportValidity(),
            });
        },
      },
      formState: l,
      fieldState: Object.defineProperties(
        {},
        {
          invalid: { enumerable: !0, get: () => !!Y(l.errors, n) },
          isDirty: { enumerable: !0, get: () => !!Y(l.dirtyFields, n) },
          isTouched: { enumerable: !0, get: () => !!Y(l.touchedFields, n) },
          isValidating: {
            enumerable: !0,
            get: () => !!Y(l.validatingFields, n),
          },
          error: { enumerable: !0, get: () => Y(l.errors, n) },
        }
      ),
    }
  );
}
const el = (e) => e.render(Cj(e));
var Pj = (e, t, n, r, o) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: o || !0 },
        }
      : {},
  Xv = (e) => ({
    isOnSubmit: !e || e === Dn.onSubmit,
    isOnBlur: e === Dn.onBlur,
    isOnChange: e === Dn.onChange,
    isOnAll: e === Dn.all,
    isOnTouch: e === Dn.onTouched,
  }),
  Yv = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const Ts = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const i = Y(e, o);
    if (i) {
      const { _f: s, ...a } = i;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], o) && !r) break;
        if (s.ref && t(s.ref, s.name) && !r) break;
        Ts(a, t);
      } else mt(a) && Ts(a, t);
    }
  }
};
var Tj = (e, t, n) => {
    const r = wa(Y(e, n));
    return ze(r, 'root', t[n]), ze(e, n, r), e;
  },
  nh = (e) => e.type === 'file',
  Ar = (e) => typeof e == 'function',
  pu = (e) => {
    if (!Jm) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Tl = (e) => Kn(e),
  rh = (e) => e.type === 'radio',
  mu = (e) => e instanceof RegExp;
const Qv = { value: !1, isValid: !1 },
  Jv = { value: !0, isValid: !0 };
var Hb = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !nt(e[0].attributes.value)
        ? nt(e[0].value) || e[0].value === ''
          ? Jv
          : { value: e[0].value, isValid: !0 }
        : Jv
      : Qv;
  }
  return Qv;
};
const Zv = { isValid: !1, value: null };
var Gb = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        Zv
      )
    : Zv;
function ey(e, t, n = 'validate') {
  if (Tl(e) || (Array.isArray(e) && e.every(Tl)) || (jn(e) && !e))
    return { type: n, message: Tl(e) ? e : '', ref: t };
}
var jo = (e) => (mt(e) && !mu(e) ? e : { value: e, message: '' }),
  ty = async (e, t, n, r, o) => {
    const {
        ref: i,
        refs: s,
        required: a,
        maxLength: l,
        minLength: u,
        min: c,
        max: d,
        pattern: f,
        validate: v,
        name: m,
        valueAsNumber: h,
        mount: w,
        disabled: p,
      } = e._f,
      g = Y(t, m);
    if (!w || p) return {};
    const y = s ? s[0] : i,
      x = ($) => {
        r &&
          y.reportValidity &&
          (y.setCustomValidity(jn($) ? '' : $ || ''), y.reportValidity());
      },
      S = {},
      P = rh(i),
      T = ba(i),
      _ = P || T,
      I =
        ((h || nh(i)) && nt(i.value) && nt(g)) ||
        (pu(i) && i.value === '') ||
        g === '' ||
        (Array.isArray(g) && !g.length),
      k = Pj.bind(null, m, n, S),
      D = ($, A, z, B = or.maxLength, W = or.minLength) => {
        const M = $ ? A : z;
        S[m] = { type: $ ? B : W, message: M, ref: i, ...k($ ? B : W, M) };
      };
    if (
      o
        ? !Array.isArray(g) || !g.length
        : a &&
          ((!_ && (I || It(g))) ||
            (jn(g) && !g) ||
            (T && !Hb(s).isValid) ||
            (P && !Gb(s).isValid))
    ) {
      const { value: $, message: A } = Tl(a)
        ? { value: !!a, message: a }
        : jo(a);
      if (
        $ &&
        ((S[m] = {
          type: or.required,
          message: A,
          ref: y,
          ...k(or.required, A),
        }),
        !n)
      )
        return x(A), S;
    }
    if (!I && (!It(c) || !It(d))) {
      let $, A;
      const z = jo(d),
        B = jo(c);
      if (!It(g) && !isNaN(g)) {
        const W = i.valueAsNumber || (g && +g);
        It(z.value) || ($ = W > z.value), It(B.value) || (A = W < B.value);
      } else {
        const W = i.valueAsDate || new Date(g),
          M = (H) => new Date(new Date().toDateString() + ' ' + H),
          O = i.type == 'time',
          N = i.type == 'week';
        Kn(z.value) &&
          g &&
          ($ = O ? M(g) > M(z.value) : N ? g > z.value : W > new Date(z.value)),
          Kn(B.value) &&
            g &&
            (A = O
              ? M(g) < M(B.value)
              : N
              ? g < B.value
              : W < new Date(B.value));
      }
      if (($ || A) && (D(!!$, z.message, B.message, or.max, or.min), !n))
        return x(S[m].message), S;
    }
    if ((l || u) && !I && (Kn(g) || (o && Array.isArray(g)))) {
      const $ = jo(l),
        A = jo(u),
        z = !It($.value) && g.length > +$.value,
        B = !It(A.value) && g.length < +A.value;
      if ((z || B) && (D(z, $.message, A.message), !n))
        return x(S[m].message), S;
    }
    if (f && !I && Kn(g)) {
      const { value: $, message: A } = jo(f);
      if (
        mu($) &&
        !g.match($) &&
        ((S[m] = { type: or.pattern, message: A, ref: i, ...k(or.pattern, A) }),
        !n)
      )
        return x(A), S;
    }
    if (v) {
      if (Ar(v)) {
        const $ = await v(g, t),
          A = ey($, y);
        if (A && ((S[m] = { ...A, ...k(or.validate, A.message) }), !n))
          return x(A.message), S;
      } else if (mt(v)) {
        let $ = {};
        for (const A in v) {
          if (!Xt($) && !n) break;
          const z = ey(await v[A](g, t), y, A);
          z &&
            (($ = { ...z, ...k(A, z.message) }), x(z.message), n && (S[m] = $));
        }
        if (!Xt($) && ((S[m] = { ref: y, ...$ }), !n)) return S;
      }
    }
    return x(!0), S;
  };
function kj(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = nt(e) ? r++ : e[t[r++]];
  return e;
}
function Rj(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !nt(e[t])) return !1;
  return !0;
}
function ct(e, t) {
  const n = Array.isArray(t) ? t : th(t) ? [t] : Ub(t),
    r = n.length === 1 ? e : kj(e, n),
    o = n.length - 1,
    i = n[o];
  return (
    r && delete r[i],
    o !== 0 &&
      ((mt(r) && Xt(r)) || (Array.isArray(r) && Rj(r))) &&
      ct(e, n.slice(0, -1)),
    e
  );
}
var Td = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (o) => {
        for (const i of e) i.next && i.next(o);
      },
      subscribe: (o) => (
        e.push(o),
        {
          unsubscribe: () => {
            e = e.filter((i) => i !== o);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  hu = (e) => It(e) || !Lb(e);
function ao(e, t) {
  if (hu(e) || hu(t)) return e === t;
  if (Jo(e) && Jo(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n) {
    const i = e[o];
    if (!r.includes(o)) return !1;
    if (o !== 'ref') {
      const s = t[o];
      if (
        (Jo(i) && Jo(s)) ||
        (mt(i) && mt(s)) ||
        (Array.isArray(i) && Array.isArray(s))
          ? !ao(i, s)
          : i !== s
      )
        return !1;
    }
  }
  return !0;
}
var Kb = (e) => e.type === 'select-multiple',
  Oj = (e) => rh(e) || ba(e),
  kd = (e) => pu(e) && e.isConnected,
  qb = (e) => {
    for (const t in e) if (Ar(e[t])) return !0;
    return !1;
  };
function gu(e, t = {}) {
  const n = Array.isArray(e);
  if (mt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (mt(e[r]) && !qb(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), gu(e[r], t[r]))
        : It(e[r]) || (t[r] = !0);
  return t;
}
function Xb(e, t, n) {
  const r = Array.isArray(e);
  if (mt(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || (mt(e[o]) && !qb(e[o]))
        ? nt(t) || hu(n[o])
          ? (n[o] = Array.isArray(e[o]) ? gu(e[o], []) : { ...gu(e[o]) })
          : Xb(e[o], It(t) ? {} : t[o], n[o])
        : (n[o] = !ao(e[o], t[o]));
  return n;
}
var tl = (e, t) => Xb(e, t, gu(t)),
  Yb = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    nt(e)
      ? e
      : t
      ? e === ''
        ? NaN
        : e && +e
      : n && Kn(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function Rd(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return nh(t)
      ? t.files
      : rh(t)
      ? Gb(e.refs).value
      : Kb(t)
      ? [...t.selectedOptions].map(({ value: n }) => n)
      : ba(t)
      ? Hb(e.refs).value
      : Yb(nt(t.value) ? e.ref.value : t.value, e);
}
var _j = (e, t, n, r) => {
    const o = {};
    for (const i of e) {
      const s = Y(t, i);
      s && ze(o, i, s._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: o,
      shouldUseNativeValidation: r,
    };
  },
  is = (e) =>
    nt(e)
      ? e
      : mu(e)
      ? e.source
      : mt(e)
      ? mu(e.value)
        ? e.value.source
        : e.value
      : e,
  Mj = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function ny(e, t, n) {
  const r = Y(e, n);
  if (r || th(n)) return { error: r, name: n };
  const o = n.split('.');
  for (; o.length; ) {
    const i = o.join('.'),
      s = Y(t, i),
      a = Y(e, i);
    if (s && !Array.isArray(s) && n !== i) return { name: n };
    if (a && a.type) return { name: i, error: a };
    o.pop();
  }
  return { name: n };
}
var Aj = (e, t, n, r, o) =>
    o.isOnAll
      ? !1
      : !n && o.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : o.isOnBlur)
      ? !e
      : (n ? r.isOnChange : o.isOnChange)
      ? e
      : !0,
  Ij = (e, t) => !wa(Y(e, t)).length && ct(e, t);
const $j = {
  mode: Dn.onSubmit,
  reValidateMode: Dn.onChange,
  shouldFocusError: !0,
};
function jj(e = {}) {
  let t = { ...$j, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Ar(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    o =
      mt(t.defaultValues) || mt(t.values)
        ? Nt(t.defaultValues || t.values) || {}
        : {},
    i = t.shouldUnregister ? {} : Nt(o),
    s = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    l,
    u = 0;
  const c = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    d = { values: Td(), array: Td(), state: Td() },
    f = Xv(t.mode),
    v = Xv(t.reValidateMode),
    m = t.criteriaMode === Dn.all,
    h = (R) => (j) => {
      clearTimeout(u), (u = setTimeout(R, j));
    },
    w = async (R) => {
      if (c.isValid || R) {
        const j = t.resolver ? Xt((await _()).errors) : await k(r, !0);
        j !== n.isValid && d.state.next({ isValid: j });
      }
    },
    p = (R, j) => {
      (c.isValidating || c.validatingFields) &&
        ((R || Array.from(a.mount)).forEach((F) => {
          F && (j ? ze(n.validatingFields, F, j) : ct(n.validatingFields, F));
        }),
        d.state.next({
          validatingFields: n.validatingFields,
          isValidating: !Xt(n.validatingFields),
        }));
    },
    g = (R, j = [], F, G, q = !0, U = !0) => {
      if (G && F) {
        if (((s.action = !0), U && Array.isArray(Y(r, R)))) {
          const L = F(Y(r, R), G.argA, G.argB);
          q && ze(r, R, L);
        }
        if (U && Array.isArray(Y(n.errors, R))) {
          const L = F(Y(n.errors, R), G.argA, G.argB);
          q && ze(n.errors, R, L), Ij(n.errors, R);
        }
        if (c.touchedFields && U && Array.isArray(Y(n.touchedFields, R))) {
          const L = F(Y(n.touchedFields, R), G.argA, G.argB);
          q && ze(n.touchedFields, R, L);
        }
        c.dirtyFields && (n.dirtyFields = tl(o, i)),
          d.state.next({
            name: R,
            isDirty: $(R, j),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else ze(i, R, j);
    },
    y = (R, j) => {
      ze(n.errors, R, j), d.state.next({ errors: n.errors });
    },
    x = (R) => {
      (n.errors = R), d.state.next({ errors: n.errors, isValid: !1 });
    },
    S = (R, j, F, G) => {
      const q = Y(r, R);
      if (q) {
        const U = Y(i, R, nt(F) ? Y(o, R) : F);
        nt(U) || (G && G.defaultChecked) || j
          ? ze(i, R, j ? U : Rd(q._f))
          : B(R, U),
          s.mount && w();
      }
    },
    P = (R, j, F, G, q) => {
      let U = !1,
        L = !1;
      const K = { name: R },
        le = !!(Y(r, R) && Y(r, R)._f.disabled);
      if (!F || G) {
        c.isDirty &&
          ((L = n.isDirty),
          (n.isDirty = K.isDirty = $()),
          (U = L !== K.isDirty));
        const me = le || ao(Y(o, R), j);
        (L = !!(!le && Y(n.dirtyFields, R))),
          me || le ? ct(n.dirtyFields, R) : ze(n.dirtyFields, R, !0),
          (K.dirtyFields = n.dirtyFields),
          (U = U || (c.dirtyFields && L !== !me));
      }
      if (F) {
        const me = Y(n.touchedFields, R);
        me ||
          (ze(n.touchedFields, R, F),
          (K.touchedFields = n.touchedFields),
          (U = U || (c.touchedFields && me !== F)));
      }
      return U && q && d.state.next(K), U ? K : {};
    },
    T = (R, j, F, G) => {
      const q = Y(n.errors, R),
        U = c.isValid && jn(j) && n.isValid !== j;
      if (
        (e.delayError && F
          ? ((l = h(() => y(R, F))), l(e.delayError))
          : (clearTimeout(u),
            (l = null),
            F ? ze(n.errors, R, F) : ct(n.errors, R)),
        (F ? !ao(q, F) : q) || !Xt(G) || U)
      ) {
        const L = {
          ...G,
          ...(U && jn(j) ? { isValid: j } : {}),
          errors: n.errors,
          name: R,
        };
        (n = { ...n, ...L }), d.state.next(L);
      }
    },
    _ = async (R) => {
      p(R, !0);
      const j = await t.resolver(
        i,
        t.context,
        _j(R || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return p(R), j;
    },
    I = async (R) => {
      const { errors: j } = await _(R);
      if (R)
        for (const F of R) {
          const G = Y(j, F);
          G ? ze(n.errors, F, G) : ct(n.errors, F);
        }
      else n.errors = j;
      return j;
    },
    k = async (R, j, F = { valid: !0 }) => {
      for (const G in R) {
        const q = R[G];
        if (q) {
          const { _f: U, ...L } = q;
          if (U) {
            const K = a.array.has(U.name);
            p([G], !0);
            const le = await ty(q, i, m, t.shouldUseNativeValidation && !j, K);
            if ((p([G]), le[U.name] && ((F.valid = !1), j))) break;
            !j &&
              (Y(le, U.name)
                ? K
                  ? Tj(n.errors, le, U.name)
                  : ze(n.errors, U.name, le[U.name])
                : ct(n.errors, U.name));
          }
          L && (await k(L, j, F));
        }
      }
      return F.valid;
    },
    D = () => {
      for (const R of a.unMount) {
        const j = Y(r, R);
        j &&
          (j._f.refs ? j._f.refs.every((F) => !kd(F)) : !kd(j._f.ref)) &&
          ue(R);
      }
      a.unMount = new Set();
    },
    $ = (R, j) => (R && j && ze(i, R, j), !ao(oe(), o)),
    A = (R, j, F) =>
      Vb(R, a, { ...(s.mount ? i : nt(j) ? o : Kn(R) ? { [R]: j } : j) }, F, j),
    z = (R) => wa(Y(s.mount ? i : o, R, e.shouldUnregister ? Y(o, R, []) : [])),
    B = (R, j, F = {}) => {
      const G = Y(r, R);
      let q = j;
      if (G) {
        const U = G._f;
        U &&
          (!U.disabled && ze(i, R, Yb(j, U)),
          (q = pu(U.ref) && It(j) ? '' : j),
          Kb(U.ref)
            ? [...U.ref.options].forEach(
                (L) => (L.selected = q.includes(L.value))
              )
            : U.refs
            ? ba(U.ref)
              ? U.refs.length > 1
                ? U.refs.forEach(
                    (L) =>
                      (!L.defaultChecked || !L.disabled) &&
                      (L.checked = Array.isArray(q)
                        ? !!q.find((K) => K === L.value)
                        : q === L.value)
                  )
                : U.refs[0] && (U.refs[0].checked = !!q)
              : U.refs.forEach((L) => (L.checked = L.value === q))
            : nh(U.ref)
            ? (U.ref.value = '')
            : ((U.ref.value = q),
              U.ref.type || d.values.next({ name: R, values: { ...i } })));
      }
      (F.shouldDirty || F.shouldTouch) &&
        P(R, q, F.shouldTouch, F.shouldDirty, !0),
        F.shouldValidate && H(R);
    },
    W = (R, j, F) => {
      for (const G in j) {
        const q = j[G],
          U = `${R}.${G}`,
          L = Y(r, U);
        (a.array.has(R) || !hu(q) || (L && !L._f)) && !Jo(q)
          ? W(U, q, F)
          : B(U, q, F);
      }
    },
    M = (R, j, F = {}) => {
      const G = Y(r, R),
        q = a.array.has(R),
        U = Nt(j);
      ze(i, R, U),
        q
          ? (d.array.next({ name: R, values: { ...i } }),
            (c.isDirty || c.dirtyFields) &&
              F.shouldDirty &&
              d.state.next({
                name: R,
                dirtyFields: tl(o, i),
                isDirty: $(R, U),
              }))
          : G && !G._f && !It(U)
          ? W(R, U, F)
          : B(R, U, F),
        Yv(R, a) && d.state.next({ ...n }),
        d.values.next({ name: s.mount ? R : void 0, values: { ...i } });
    },
    O = async (R) => {
      s.mount = !0;
      const j = R.target;
      let F = j.name,
        G = !0;
      const q = Y(r, F),
        U = () => (j.type ? Rd(q._f) : Nb(R)),
        L = (K) => {
          G = Number.isNaN(K) || K === Y(i, F, K);
        };
      if (q) {
        let K, le;
        const me = U(),
          ce = R.type === fu.BLUR || R.type === fu.FOCUS_OUT,
          re =
            (!Mj(q._f) && !t.resolver && !Y(n.errors, F) && !q._f.deps) ||
            Aj(ce, Y(n.touchedFields, F), n.isSubmitted, v, f),
          Ie = Yv(F, a, ce);
        ze(i, F, me),
          ce
            ? (q._f.onBlur && q._f.onBlur(R), l && l(0))
            : q._f.onChange && q._f.onChange(R);
        const xt = P(F, me, ce, !1),
          bt = !Xt(xt) || Ie;
        if (
          (!ce && d.values.next({ name: F, type: R.type, values: { ...i } }),
          re)
        )
          return (
            c.isValid && w(), bt && d.state.next({ name: F, ...(Ie ? {} : xt) })
          );
        if ((!ce && Ie && d.state.next({ ...n }), t.resolver)) {
          const { errors: ne } = await _([F]);
          if ((L(me), G)) {
            const ke = ny(n.errors, r, F),
              $e = ny(ne, r, ke.name || F);
            (K = $e.error), (F = $e.name), (le = Xt(ne));
          }
        } else
          p([F], !0),
            (K = (await ty(q, i, m, t.shouldUseNativeValidation))[F]),
            p([F]),
            L(me),
            G && (K ? (le = !1) : c.isValid && (le = await k(r, !0)));
        G && (q._f.deps && H(q._f.deps), T(F, le, K, xt));
      }
    },
    N = (R, j) => {
      if (Y(n.errors, j) && R.focus) return R.focus(), 1;
    },
    H = async (R, j = {}) => {
      let F, G;
      const q = Pl(R);
      if (t.resolver) {
        const U = await I(nt(R) ? R : q);
        (F = Xt(U)), (G = R ? !q.some((L) => Y(U, L)) : F);
      } else
        R
          ? ((G = (
              await Promise.all(
                q.map(async (U) => {
                  const L = Y(r, U);
                  return await k(L && L._f ? { [U]: L } : L);
                })
              )
            ).every(Boolean)),
            !(!G && !n.isValid) && w())
          : (G = F = await k(r));
      return (
        d.state.next({
          ...(!Kn(R) || (c.isValid && F !== n.isValid) ? {} : { name: R }),
          ...(t.resolver || !R ? { isValid: F } : {}),
          errors: n.errors,
        }),
        j.shouldFocus && !G && Ts(r, N, R ? q : a.mount),
        G
      );
    },
    oe = (R) => {
      const j = { ...(s.mount ? i : o) };
      return nt(R) ? j : Kn(R) ? Y(j, R) : R.map((F) => Y(j, F));
    },
    ee = (R, j) => ({
      invalid: !!Y((j || n).errors, R),
      isDirty: !!Y((j || n).dirtyFields, R),
      isTouched: !!Y((j || n).touchedFields, R),
      isValidating: !!Y((j || n).validatingFields, R),
      error: Y((j || n).errors, R),
    }),
    he = (R) => {
      R && Pl(R).forEach((j) => ct(n.errors, j)),
        d.state.next({ errors: R ? n.errors : {} });
    },
    te = (R, j, F) => {
      const G = (Y(r, R, { _f: {} })._f || {}).ref;
      ze(n.errors, R, { ...j, ref: G }),
        d.state.next({ name: R, errors: n.errors, isValid: !1 }),
        F && F.shouldFocus && G && G.focus && G.focus();
    },
    de = (R, j) =>
      Ar(R)
        ? d.values.subscribe({ next: (F) => R(A(void 0, j), F) })
        : A(R, j, !0),
    ue = (R, j = {}) => {
      for (const F of R ? Pl(R) : a.mount)
        a.mount.delete(F),
          a.array.delete(F),
          j.keepValue || (ct(r, F), ct(i, F)),
          !j.keepError && ct(n.errors, F),
          !j.keepDirty && ct(n.dirtyFields, F),
          !j.keepTouched && ct(n.touchedFields, F),
          !j.keepIsValidating && ct(n.validatingFields, F),
          !t.shouldUnregister && !j.keepDefaultValue && ct(o, F);
      d.values.next({ values: { ...i } }),
        d.state.next({ ...n, ...(j.keepDirty ? { isDirty: $() } : {}) }),
        !j.keepIsValid && w();
    },
    Re = ({ disabled: R, name: j, field: F, fields: G, value: q }) => {
      if (jn(R)) {
        const U = R ? void 0 : nt(q) ? Rd(F ? F._f : Y(G, j)._f) : q;
        ze(i, j, U), P(j, U, !1, !1, !0);
      }
    },
    we = (R, j = {}) => {
      let F = Y(r, R);
      const G = jn(j.disabled);
      return (
        ze(r, R, {
          ...(F || {}),
          _f: {
            ...(F && F._f ? F._f : { ref: { name: R } }),
            name: R,
            mount: !0,
            ...j,
          },
        }),
        a.mount.add(R),
        F
          ? Re({ field: F, disabled: j.disabled, name: R, value: j.value })
          : S(R, !0, j.value),
        {
          ...(G ? { disabled: j.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!j.required,
                min: is(j.min),
                max: is(j.max),
                minLength: is(j.minLength),
                maxLength: is(j.maxLength),
                pattern: is(j.pattern),
              }
            : {}),
          name: R,
          onChange: O,
          onBlur: O,
          ref: (q) => {
            if (q) {
              we(R, j), (F = Y(r, R));
              const U =
                  (nt(q.value) &&
                    q.querySelectorAll &&
                    q.querySelectorAll('input,select,textarea')[0]) ||
                  q,
                L = Oj(U),
                K = F._f.refs || [];
              if (L ? K.find((le) => le === U) : U === F._f.ref) return;
              ze(r, R, {
                _f: {
                  ...F._f,
                  ...(L
                    ? {
                        refs: [
                          ...K.filter(kd),
                          U,
                          ...(Array.isArray(Y(o, R)) ? [{}] : []),
                        ],
                        ref: { type: U.type, name: R },
                      }
                    : { ref: U }),
                },
              }),
                S(R, !1, void 0, U);
            } else
              (F = Y(r, R, {})),
                F._f && (F._f.mount = !1),
                (t.shouldUnregister || j.shouldUnregister) &&
                  !(Fb(a.array, R) && s.action) &&
                  a.unMount.add(R);
          },
        }
      );
    },
    ve = () => t.shouldFocusError && Ts(r, N, a.mount),
    Ne = (R) => {
      jn(R) &&
        (d.state.next({ disabled: R }),
        Ts(
          r,
          (j, F) => {
            let G = R;
            const q = Y(r, F);
            q && jn(q._f.disabled) && (G || (G = q._f.disabled)),
              (j.disabled = G);
          },
          0,
          !1
        ));
    },
    fe = (R, j) => async (F) => {
      let G;
      F && (F.preventDefault && F.preventDefault(), F.persist && F.persist());
      let q = Nt(i);
      if ((d.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: U, values: L } = await _();
        (n.errors = U), (q = L);
      } else await k(r);
      if ((ct(n.errors, 'root'), Xt(n.errors))) {
        d.state.next({ errors: {} });
        try {
          await R(q, F);
        } catch (U) {
          G = U;
        }
      } else j && (await j({ ...n.errors }, F)), ve(), setTimeout(ve);
      if (
        (d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Xt(n.errors) && !G,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        G)
      )
        throw G;
    },
    Pe = (R, j = {}) => {
      Y(r, R) &&
        (nt(j.defaultValue)
          ? M(R, Nt(Y(o, R)))
          : (M(R, j.defaultValue), ze(o, R, Nt(j.defaultValue))),
        j.keepTouched || ct(n.touchedFields, R),
        j.keepDirty ||
          (ct(n.dirtyFields, R),
          (n.isDirty = j.defaultValue ? $(R, Nt(Y(o, R))) : $())),
        j.keepError || (ct(n.errors, R), c.isValid && w()),
        d.state.next({ ...n }));
    },
    pe = (R, j = {}) => {
      const F = R ? Nt(R) : o,
        G = Nt(F),
        q = Xt(R),
        U = q ? o : G;
      if ((j.keepDefaultValues || (o = F), !j.keepValues)) {
        if (j.keepDirtyValues)
          for (const L of a.mount)
            Y(n.dirtyFields, L) ? ze(U, L, Y(i, L)) : M(L, Y(U, L));
        else {
          if (Jm && nt(R))
            for (const L of a.mount) {
              const K = Y(r, L);
              if (K && K._f) {
                const le = Array.isArray(K._f.refs) ? K._f.refs[0] : K._f.ref;
                if (pu(le)) {
                  const me = le.closest('form');
                  if (me) {
                    me.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (i = e.shouldUnregister ? (j.keepDefaultValues ? Nt(o) : {}) : Nt(U)),
          d.array.next({ values: { ...U } }),
          d.values.next({ values: { ...U } });
      }
      (a = {
        mount: j.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (s.mount = !c.isValid || !!j.keepIsValid || !!j.keepDirtyValues),
        (s.watch = !!e.shouldUnregister),
        d.state.next({
          submitCount: j.keepSubmitCount ? n.submitCount : 0,
          isDirty: q
            ? !1
            : j.keepDirty
            ? n.isDirty
            : !!(j.keepDefaultValues && !ao(R, o)),
          isSubmitted: j.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: q
            ? []
            : j.keepDirtyValues
            ? j.keepDefaultValues && i
              ? tl(o, i)
              : n.dirtyFields
            : j.keepDefaultValues && R
            ? tl(o, R)
            : {},
          touchedFields: j.keepTouched ? n.touchedFields : {},
          errors: j.keepErrors ? n.errors : {},
          isSubmitSuccessful: j.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    ye = (R, j) => pe(Ar(R) ? R(i) : R, j);
  return {
    control: {
      register: we,
      unregister: ue,
      getFieldState: ee,
      handleSubmit: fe,
      setError: te,
      _executeSchema: _,
      _getWatch: A,
      _getDirty: $,
      _updateValid: w,
      _removeUnmounted: D,
      _updateFieldArray: g,
      _updateDisabledField: Re,
      _getFieldArray: z,
      _reset: pe,
      _resetDefaultValues: () =>
        Ar(t.defaultValues) &&
        t.defaultValues().then((R) => {
          ye(R, t.resetOptions), d.state.next({ isLoading: !1 });
        }),
      _updateFormState: (R) => {
        n = { ...n, ...R };
      },
      _disableForm: Ne,
      _subjects: d,
      _proxyFormState: c,
      _setErrors: x,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return s;
      },
      set _state(R) {
        s = R;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return a;
      },
      set _names(R) {
        a = R;
      },
      get _formState() {
        return n;
      },
      set _formState(R) {
        n = R;
      },
      get _options() {
        return t;
      },
      set _options(R) {
        t = { ...t, ...R };
      },
    },
    trigger: H,
    register: we,
    handleSubmit: fe,
    watch: de,
    setValue: M,
    getValues: oe,
    reset: ye,
    resetField: Pe,
    clearErrors: he,
    unregister: ue,
    setError: te,
    setFocus: (R, j = {}) => {
      const F = Y(r, R),
        G = F && F._f;
      if (G) {
        const q = G.refs ? G.refs[0] : G.ref;
        q.focus && (q.focus(), j.shouldSelect && q.select());
      }
    },
    getFieldState: ee,
  };
}
function Dj(e = {}) {
  const t = ae.useRef(),
    n = ae.useRef(),
    [r, o] = ae.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Ar(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: Ar(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...jj(e), formState: r });
  const i = t.current.control;
  return (
    (i._options = e),
    eh({
      subject: i._subjects.state,
      next: (s) => {
        Bb(s, i._proxyFormState, i._updateFormState, !0) &&
          o({ ...i._formState });
      },
    }),
    ae.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
    ae.useEffect(() => {
      if (i._proxyFormState.isDirty) {
        const s = i._getDirty();
        s !== r.isDirty && i._subjects.state.next({ isDirty: s });
      }
    }, [i, r.isDirty]),
    ae.useEffect(() => {
      e.values && !ao(e.values, n.current)
        ? (i._reset(e.values, i._options.resetOptions),
          (n.current = e.values),
          o((s) => ({ ...s })))
        : i._resetDefaultValues();
    }, [e.values, i]),
    ae.useEffect(() => {
      e.errors && i._setErrors(e.errors);
    }, [e.errors, i]),
    ae.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch &&
          ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    ae.useEffect(() => {
      e.shouldUnregister && i._subjects.values.next({ values: i._getWatch() });
    }, [e.shouldUnregister, i]),
    (t.current.formState = zb(r, i)),
    t.current
  );
}
const Lj = ({ children: e }) =>
    C.jsxs(Et, {
      children: [C.jsx(xM, {}), C.jsx(zj, {}), C.jsx(Et, { children: e })],
    }),
  Nj = ['Products', 'Pricing', 'Blog'],
  Fj = ['Profile', 'Account', 'Dashboard', 'Logout'],
  zj = () => {
    const e = Ib(),
      [t, n] = Uj(),
      [r, o] = b.useState(null),
      [i, s] = b.useState(null),
      a = (v) => {
        o(v.currentTarget);
      },
      l = (v) => {
        s(v.currentTarget);
      },
      u = () => {
        o(null);
      },
      c = () => {
        s(null);
      },
      d = () => {
        e('/');
      },
      f = b.useMemo(
        () => [
          { name: 'Контактная информация', action: () => {} },
          {
            name: 'Заказать услугу',
            action: () => {
              n.open();
            },
          },
          {
            name: 'Улучшить свои фото',
            action: () => {
              e('/photo-process');
            },
          },
        ],
        []
      );
    return C.jsxs(C.Fragment, {
      children: [
        C.jsx(Vj, { isOpen: t, onClose: n.close }),
        C.jsx(MR, {
          position: 'static',
          children: C.jsx(dr, {
            children: C.jsxs(h$, {
              disableGutters: !0,
              children: [
                C.jsx(et, {
                  onClick: d,
                  variant: 'h6',
                  noWrap: !0,
                  component: 'a',
                  sx: {
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  },
                  children: 'TATA',
                }),
                C.jsxs(Et, {
                  sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
                  children: [
                    C.jsx(lv, {
                      size: 'large',
                      'aria-label': 'account of current user',
                      'aria-controls': 'menu-appbar',
                      'aria-haspopup': 'true',
                      onClick: a,
                      color: 'inherit',
                      children: C.jsx(p2, {}),
                    }),
                    C.jsx(ep, {
                      id: 'menu-appbar',
                      anchorEl: r,
                      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                      keepMounted: !0,
                      transformOrigin: { vertical: 'top', horizontal: 'left' },
                      open: !!r,
                      onClose: u,
                      sx: { display: { xs: 'block', md: 'none' } },
                      children: Nj.map((v) =>
                        C.jsx(
                          Lv,
                          {
                            onClick: u,
                            children: C.jsx(et, {
                              textAlign: 'center',
                              children: v,
                            }),
                          },
                          v
                        )
                      ),
                    }),
                  ],
                }),
                C.jsx(et, {
                  variant: 'h5',
                  noWrap: !0,
                  component: 'a',
                  href: '#app-bar-with-responsive-menu',
                  sx: {
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  },
                  children: 'TATA',
                }),
                C.jsx(Et, {
                  sx: { flexGrow: 1, display: { xs: 'none', md: 'flex' } },
                  children: f.map((v) =>
                    C.jsx(
                      ai,
                      {
                        onClick: () => {
                          u(), v.action();
                        },
                        sx: { my: 2, color: 'white', display: 'block' },
                        children: v.name,
                      },
                      v.name
                    )
                  ),
                }),
                C.jsxs(Et, {
                  sx: { flexGrow: 0 },
                  children: [
                    C.jsx(c$, {
                      title: 'Open settings',
                      children: C.jsx(lv, {
                        onClick: l,
                        sx: { p: 0 },
                        children: C.jsx(V_, {
                          alt: 'Remy Sharp',
                          src: '/static/images/avatar/2.jpg',
                        }),
                      }),
                    }),
                    C.jsx(ep, {
                      sx: { mt: '45px' },
                      id: 'menu-appbar',
                      anchorEl: i,
                      anchorOrigin: { vertical: 'top', horizontal: 'right' },
                      keepMounted: !0,
                      transformOrigin: { vertical: 'top', horizontal: 'right' },
                      open: !!i,
                      onClose: c,
                      children: Fj.map((v) =>
                        C.jsx(
                          Lv,
                          {
                            onClick: c,
                            children: C.jsx(et, {
                              textAlign: 'center',
                              children: v,
                            }),
                          },
                          v
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  Bj = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g,
  Wj = ({ onSubmit: e, renderActions: t }) => {
    const { control: n, handleSubmit: r } = Dj();
    return C.jsxs(gn, {
      component: 'form',
      onSubmit: r(e),
      container: !0,
      flexDirection: 'column',
      gap: 2,
      pt: 1,
      children: [
        C.jsx(el, {
          control: n,
          name: 'name',
          rules: { required: !0, maxLength: 30 },
          render: ({
            field: { value: o, onChange: i },
            fieldState: { error: s },
          }) =>
            C.jsx(Za, {
              label: 'Имя',
              placeholder: 'Как вас зовут',
              required: !0,
              value: o,
              error: !!s,
              helperText:
                (s == null ? void 0 : s.message) ||
                'Мне достаточно просто вашего имени',
              InputProps: {
                startAdornment: C.jsx(m2, { sx: { mr: 1 }, color: 'action' }),
              },
              variant: 'standard',
              onChange: (a) => {
                i(a.target.value);
              },
            }),
        }),
        C.jsx(el, {
          control: n,
          name: 'phone',
          rules: { required: !0, pattern: Bj },
          render: ({
            field: { value: o, onChange: i },
            fieldState: { error: s },
          }) =>
            C.jsx(Za, {
              label: 'Номер телефона',
              placeholder: 'XXX XXX XXXX',
              required: !0,
              value: o,
              type: 'tel',
              prefix: '+7',
              error: !!s,
              helperText:
                (s == null ? void 0 : s.message) ||
                'Будьте на связи, чтобы я смогла с вами связаться',
              InputProps: {
                startAdornment: C.jsxs(C.Fragment, {
                  children: [
                    C.jsx(h2, { sx: { mr: 1 }, color: 'action' }),
                    C.jsxs(et, { mr: 1, color: 'grey', children: ['+7', ' '] }),
                  ],
                }),
              },
              variant: 'standard',
              onChange: (a) => {
                const l = a.target.value.replace(/\D/g, '');
                if (l.length <= 10) {
                  let u = l.replace(/ /gm, ''),
                    c = `${u.substring(0, 3)} ${u.substring(
                      3,
                      6
                    )} ${u.substring(6, u.length)}`;
                  (c = c.trim()), i(c);
                }
              },
            }),
        }),
        C.jsx(el, {
          control: n,
          name: 'email',
          rules: { required: !0 },
          render: ({
            field: { value: o, onChange: i },
            fieldState: { error: s },
          }) =>
            C.jsx(Za, {
              label: 'Почта',
              placeholder: 'Ваша почта',
              required: !0,
              value: o,
              type: 'email',
              error: !!s,
              helperText:
                (s == null ? void 0 : s.message) ||
                'На случай если я не смогу до вас дозвониться',
              InputProps: {
                startAdornment: C.jsx(f2, { sx: { mr: 1 }, color: 'action' }),
              },
              variant: 'standard',
              onChange: (a) => {
                i(a.target.value);
              },
            }),
        }),
        C.jsx(el, {
          control: n,
          name: 'description',
          render: ({ field: { value: o, onChange: i } }) =>
            C.jsx(Za, {
              label: 'Пожелания',
              placeholder: 'Введите свои пожелания',
              value: o,
              multiline: !0,
              minRows: 4,
              maxRows: 4,
              onChange: (s) => {
                i(s.target.value);
              },
            }),
        }),
        t(),
      ],
    });
  },
  Vj = ({ isOpen: e, onClose: t }) =>
    C.jsxs(AM, {
      open: e,
      onClose: t,
      children: [
        C.jsx(ZM, { children: 'Заказать услугу' }),
        C.jsxs(UM, {
          sx: { width: 550 },
          children: [
            C.jsx(XM, {
              children:
                '* Заполните данную форму что-бы я могла с вами связаться.',
            }),
            C.jsx(Wj, {
              onSubmit: () => {},
              renderActions: () =>
                C.jsxs(LM, {
                  children: [
                    C.jsx(ai, {
                      onClick: t,
                      color: 'error',
                      variant: 'outlined',
                      children: 'Закрыть',
                    }),
                    C.jsx(ai, {
                      type: 'submit',
                      variant: 'contained',
                      children: 'Отправить',
                    }),
                  ],
                }),
            }),
          ],
        }),
      ],
    }),
  Uj = () => {
    const [e, t] = b.useState(!1),
      n = b.useCallback(() => {
        t(!0);
      }, [t]),
      r = b.useCallback(() => {
        t(!1);
      }, [t]);
    return [e, { open: n, close: r }];
  };
function Qb(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Hj } = Object.prototype,
  { getPrototypeOf: oh } = Object,
  Ac = ((e) => (t) => {
    const n = Hj.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  rr = (e) => ((e = e.toLowerCase()), (t) => Ac(t) === e),
  Ic = (e) => (t) => typeof t === e,
  { isArray: Di } = Array,
  ea = Ic('undefined');
function Gj(e) {
  return (
    e !== null &&
    !ea(e) &&
    e.constructor !== null &&
    !ea(e.constructor) &&
    bn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Jb = rr('ArrayBuffer');
function Kj(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Jb(e.buffer)),
    t
  );
}
const qj = Ic('string'),
  bn = Ic('function'),
  Zb = Ic('number'),
  $c = (e) => e !== null && typeof e == 'object',
  Xj = (e) => e === !0 || e === !1,
  kl = (e) => {
    if (Ac(e) !== 'object') return !1;
    const t = oh(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Yj = rr('Date'),
  Qj = rr('File'),
  Jj = rr('Blob'),
  Zj = rr('FileList'),
  eD = (e) => $c(e) && bn(e.pipe),
  tD = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (bn(e.append) &&
          ((t = Ac(e)) === 'formdata' ||
            (t === 'object' &&
              bn(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  nD = rr('URLSearchParams'),
  rD = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Sa(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, o;
  if ((typeof e != 'object' && (e = [e]), Di(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let a;
    for (r = 0; r < s; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function ew(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const tw =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global,
  nw = (e) => !ea(e) && e !== tw;
function op() {
  const { caseless: e } = (nw(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && ew(t, o)) || o;
      kl(t[i]) && kl(r)
        ? (t[i] = op(t[i], r))
        : kl(r)
        ? (t[i] = op({}, r))
        : Di(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Sa(arguments[r], n);
  return t;
}
const oD = (e, t, n, { allOwnKeys: r } = {}) => (
    Sa(
      t,
      (o, i) => {
        n && bn(o) ? (e[i] = Qb(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  iD = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  sD = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  aD = (e, t, n, r) => {
    let o, i, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = n !== !1 && oh(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  lD = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  uD = (e) => {
    if (!e) return null;
    if (Di(e)) return e;
    let t = e.length;
    if (!Zb(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  cD = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && oh(Uint8Array)),
  dD = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  fD = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  pD = rr('HTMLFormElement'),
  mD = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  ry = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  hD = rr('RegExp'),
  rw = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Sa(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r);
  },
  gD = (e) => {
    rw(e, (t, n) => {
      if (bn(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (bn(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  vD = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return Di(e) ? r(e) : r(String(e).split(t)), n;
  },
  yD = () => {},
  xD = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Od = 'abcdefghijklmnopqrstuvwxyz',
  oy = '0123456789',
  ow = { DIGIT: oy, ALPHA: Od, ALPHA_DIGIT: Od + Od.toUpperCase() + oy },
  bD = (e = 16, t = ow.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function wD(e) {
  return !!(
    e &&
    bn(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const SD = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if ($c(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[o] = r;
            const i = Di(r) ? [] : {};
            return (
              Sa(r, (s, a) => {
                const l = n(s, o + 1);
                !ea(l) && (i[a] = l);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  ED = rr('AsyncFunction'),
  CD = (e) => e && ($c(e) || bn(e)) && bn(e.then) && bn(e.catch),
  V = {
    isArray: Di,
    isArrayBuffer: Jb,
    isBuffer: Gj,
    isFormData: tD,
    isArrayBufferView: Kj,
    isString: qj,
    isNumber: Zb,
    isBoolean: Xj,
    isObject: $c,
    isPlainObject: kl,
    isUndefined: ea,
    isDate: Yj,
    isFile: Qj,
    isBlob: Jj,
    isRegExp: hD,
    isFunction: bn,
    isStream: eD,
    isURLSearchParams: nD,
    isTypedArray: cD,
    isFileList: Zj,
    forEach: Sa,
    merge: op,
    extend: oD,
    trim: rD,
    stripBOM: iD,
    inherits: sD,
    toFlatObject: aD,
    kindOf: Ac,
    kindOfTest: rr,
    endsWith: lD,
    toArray: uD,
    forEachEntry: dD,
    matchAll: fD,
    isHTMLForm: pD,
    hasOwnProperty: ry,
    hasOwnProp: ry,
    reduceDescriptors: rw,
    freezeMethods: gD,
    toObjectSet: vD,
    toCamelCase: mD,
    noop: yD,
    toFiniteNumber: xD,
    findKey: ew,
    global: tw,
    isContextDefined: nw,
    ALPHABET: ow,
    generateString: bD,
    isSpecCompliantForm: wD,
    toJSONObject: SD,
    isAsyncFn: ED,
    isThenable: CD,
  };
function Oe(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
V.inherits(Oe, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: V.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const iw = Oe.prototype,
  sw = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  sw[e] = { value: e };
});
Object.defineProperties(Oe, sw);
Object.defineProperty(iw, 'isAxiosError', { value: !0 });
Oe.from = (e, t, n, r, o, i) => {
  const s = Object.create(iw);
  return (
    V.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== 'isAxiosError'
    ),
    Oe.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const PD = null;
function ip(e) {
  return V.isPlainObject(e) || V.isArray(e);
}
function aw(e) {
  return V.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function iy(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = aw(o)), !n && i ? '[' + o + ']' : o;
        })
        .join(n ? '.' : '')
    : t;
}
function TD(e) {
  return V.isArray(e) && !e.some(ip);
}
const kD = V.toFlatObject(V, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function jc(e, t, n) {
  if (!V.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = V.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (h, w) {
        return !V.isUndefined(w[h]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    s = n.indexes,
    l = (n.Blob || (typeof Blob < 'u' && Blob)) && V.isSpecCompliantForm(t);
  if (!V.isFunction(o)) throw new TypeError('visitor must be a function');
  function u(m) {
    if (m === null) return '';
    if (V.isDate(m)) return m.toISOString();
    if (!l && V.isBlob(m))
      throw new Oe('Blob is not supported. Use a Buffer instead.');
    return V.isArrayBuffer(m) || V.isTypedArray(m)
      ? l && typeof Blob == 'function'
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function c(m, h, w) {
    let p = m;
    if (m && !w && typeof m == 'object') {
      if (V.endsWith(h, '{}'))
        (h = r ? h : h.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (V.isArray(m) && TD(m)) ||
        ((V.isFileList(m) || V.endsWith(h, '[]')) && (p = V.toArray(m)))
      )
        return (
          (h = aw(h)),
          p.forEach(function (y, x) {
            !(V.isUndefined(y) || y === null) &&
              t.append(
                s === !0 ? iy([h], x, i) : s === null ? h : h + '[]',
                u(y)
              );
          }),
          !1
        );
    }
    return ip(m) ? !0 : (t.append(iy(w, h, i), u(m)), !1);
  }
  const d = [],
    f = Object.assign(kD, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: ip,
    });
  function v(m, h) {
    if (!V.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error('Circular reference detected in ' + h.join('.'));
      d.push(m),
        V.forEach(m, function (p, g) {
          (!(V.isUndefined(p) || p === null) &&
            o.call(t, p, V.isString(g) ? g.trim() : g, h, f)) === !0 &&
            v(p, h ? h.concat(g) : [g]);
        }),
        d.pop();
    }
  }
  if (!V.isObject(e)) throw new TypeError('data must be an object');
  return v(e), t;
}
function sy(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function ih(e, t) {
  (this._pairs = []), e && jc(e, this, t);
}
const lw = ih.prototype;
lw.append = function (t, n) {
  this._pairs.push([t, n]);
};
lw.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, sy);
      }
    : sy;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1]);
    }, '')
    .join('&');
};
function RD(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function uw(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || RD,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = V.isURLSearchParams(t) ? t.toString() : new ih(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf('#');
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}
class ay {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    V.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const cw = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  OD = typeof URLSearchParams < 'u' ? URLSearchParams : ih,
  _D = typeof FormData < 'u' ? FormData : null,
  MD = typeof Blob < 'u' ? Blob : null,
  AD = {
    isBrowser: !0,
    classes: { URLSearchParams: OD, FormData: _D, Blob: MD },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  dw = typeof window < 'u' && typeof document < 'u',
  ID = ((e) => dw && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product
  ),
  $D =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  jD = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: dw,
        hasStandardBrowserEnv: ID,
        hasStandardBrowserWebWorkerEnv: $D,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  qn = { ...jD, ...AD };
function DD(e, t) {
  return jc(
    e,
    new qn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return qn.isNode && V.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function LD(e) {
  return V.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0]
  );
}
function ND(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function fw(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === '__proto__') return !0;
    const a = Number.isFinite(+s),
      l = i >= n.length;
    return (
      (s = !s && V.isArray(o) ? o.length : s),
      l
        ? (V.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !a)
        : ((!o[s] || !V.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && V.isArray(o[s]) && (o[s] = ND(o[s])),
          !a)
    );
  }
  if (V.isFormData(e) && V.isFunction(e.entries)) {
    const n = {};
    return (
      V.forEachEntry(e, (r, o) => {
        t(LD(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function FD(e, t, n) {
  if (V.isString(e))
    try {
      return (t || JSON.parse)(e), V.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ea = {
  transitional: cw,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = V.isObject(t);
      if ((i && V.isHTMLForm(t) && (t = new FormData(t)), V.isFormData(t)))
        return o ? JSON.stringify(fw(t)) : t;
      if (
        V.isArrayBuffer(t) ||
        V.isBuffer(t) ||
        V.isStream(t) ||
        V.isFile(t) ||
        V.isBlob(t)
      )
        return t;
      if (V.isArrayBufferView(t)) return t.buffer;
      if (V.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return DD(t, this.formSerializer).toString();
        if ((a = V.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return jc(
            a ? { 'files[]': t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType('application/json', !1), FD(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ea.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json';
      if (t && V.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === 'SyntaxError'
              ? Oe.from(a, Oe.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: qn.classes.FormData, Blob: qn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
V.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  Ea.headers[e] = {};
});
const zD = V.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  BD = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (o = s.indexOf(':')),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && zD[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  ly = Symbol('internals');
function ss(e) {
  return e && String(e).trim().toLowerCase();
}
function Rl(e) {
  return e === !1 || e == null ? e : V.isArray(e) ? e.map(Rl) : String(e);
}
function WD(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const VD = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function _d(e, t, n, r, o) {
  if (V.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!V.isString(t))) {
    if (V.isString(r)) return t.indexOf(r) !== -1;
    if (V.isRegExp(r)) return r.test(t);
  }
}
function UD(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function HD(e, t) {
  const n = V.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
class wn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, l, u) {
      const c = ss(l);
      if (!c) throw new Error('header name must be a non-empty string');
      const d = V.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || l] = Rl(a));
    }
    const s = (a, l) => V.forEach(a, (u, c) => i(u, c, l));
    return (
      V.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : V.isString(t) && (t = t.trim()) && !VD(t)
        ? s(BD(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = ss(t)), t)) {
      const r = V.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return WD(o);
        if (V.isFunction(n)) return n.call(this, o, r);
        if (V.isRegExp(n)) return n.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = ss(t)), t)) {
      const r = V.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || _d(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = ss(s)), s)) {
        const a = V.findKey(r, s);
        a && (!n || _d(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return V.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || _d(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      V.forEach(this, (o, i) => {
        const s = V.findKey(r, i);
        if (s) {
          (n[s] = Rl(o)), delete n[i];
          return;
        }
        const a = t ? UD(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = Rl(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      V.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && V.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[ly] = this[ly] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const a = ss(s);
      r[a] || (HD(o, s), (r[a] = !0));
    }
    return V.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
wn.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
V.reduceDescriptors(wn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
V.freezeMethods(wn);
function Md(e, t) {
  const n = this || Ea,
    r = t || n,
    o = wn.from(r.headers);
  let i = r.data;
  return (
    V.forEach(e, function (a) {
      i = a.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function pw(e) {
  return !!(e && e.__CANCEL__);
}
function Ca(e, t, n) {
  Oe.call(this, e ?? 'canceled', Oe.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
V.inherits(Ca, Oe, { __CANCEL__: !0 });
function GD(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new Oe(
          'Request failed with status code ' + n.status,
          [Oe.ERR_BAD_REQUEST, Oe.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const KD = qn.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const s = [e + '=' + encodeURIComponent(t)];
        V.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
          V.isString(r) && s.push('path=' + r),
          V.isString(o) && s.push('domain=' + o),
          i === !0 && s.push('secure'),
          (document.cookie = s.join('; '));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function qD(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function XD(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function mw(e, t) {
  return e && !qD(t) ? XD(e, t) : t;
}
const YD = qn.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function o(i) {
        let s = i;
        return (
          t && (n.setAttribute('href', s), (s = n.href)),
          n.setAttribute('href', s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (s) {
          const a = V.isString(s) ? o(s) : s;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function QD(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function JD(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[i];
      s || (s = u), (n[o] = l), (r[o] = u);
      let d = i,
        f = 0;
      for (; d !== o; ) (f += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const v = c && u - c;
      return v ? Math.round((f * 1e3) / v) : void 0;
    }
  );
}
function uy(e, t) {
  let n = 0;
  const r = JD(50, 250);
  return (o) => {
    const i = o.loaded,
      s = o.lengthComputable ? o.total : void 0,
      a = i - n,
      l = r(a),
      u = i <= s;
    n = i;
    const c = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && s && u ? (s - i) / l : void 0,
      event: o,
    };
    (c[t ? 'download' : 'upload'] = !0), e(c);
  };
}
const ZD = typeof XMLHttpRequest < 'u',
  eL =
    ZD &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = wn.from(e.headers).normalize();
        let { responseType: s, withXSRFToken: a } = e,
          l;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener('abort', l);
        }
        let c;
        if (V.isFormData(o)) {
          if (qn.hasStandardBrowserEnv || qn.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((c = i.getContentType()) !== !1) {
            const [h, ...w] = c
              ? c
                  .split(';')
                  .map((p) => p.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([h || 'multipart/form-data', ...w].join('; '));
          }
        }
        let d = new XMLHttpRequest();
        if (e.auth) {
          const h = e.auth.username || '',
            w = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : '';
          i.set('Authorization', 'Basic ' + btoa(h + ':' + w));
        }
        const f = mw(e.baseURL, e.url);
        d.open(e.method.toUpperCase(), uw(f, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout);
        function v() {
          if (!d) return;
          const h = wn.from(
              'getAllResponseHeaders' in d && d.getAllResponseHeaders()
            ),
            p = {
              data:
                !s || s === 'text' || s === 'json'
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: h,
              config: e,
              request: d,
            };
          GD(
            function (y) {
              n(y), u();
            },
            function (y) {
              r(y), u();
            },
            p
          ),
            (d = null);
        }
        if (
          ('onloadend' in d
            ? (d.onloadend = v)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 &&
                    !(d.responseURL && d.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(v);
              }),
          (d.onabort = function () {
            d &&
              (r(new Oe('Request aborted', Oe.ECONNABORTED, e, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new Oe('Network Error', Oe.ERR_NETWORK, e, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let w = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const p = e.transitional || cw;
            e.timeoutErrorMessage && (w = e.timeoutErrorMessage),
              r(
                new Oe(
                  w,
                  p.clarifyTimeoutError ? Oe.ETIMEDOUT : Oe.ECONNABORTED,
                  e,
                  d
                )
              ),
              (d = null);
          }),
          qn.hasStandardBrowserEnv &&
            (a && V.isFunction(a) && (a = a(e)), a || (a !== !1 && YD(f))))
        ) {
          const h =
            e.xsrfHeaderName && e.xsrfCookieName && KD.read(e.xsrfCookieName);
          h && i.set(e.xsrfHeaderName, h);
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in d &&
            V.forEach(i.toJSON(), function (w, p) {
              d.setRequestHeader(p, w);
            }),
          V.isUndefined(e.withCredentials) ||
            (d.withCredentials = !!e.withCredentials),
          s && s !== 'json' && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            d.addEventListener('progress', uy(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            d.upload &&
            d.upload.addEventListener('progress', uy(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (h) => {
              d &&
                (r(!h || h.type ? new Ca(null, e, d) : h),
                d.abort(),
                (d = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener('abort', l)));
        const m = QD(f);
        if (m && qn.protocols.indexOf(m) === -1) {
          r(new Oe('Unsupported protocol ' + m + ':', Oe.ERR_BAD_REQUEST, e));
          return;
        }
        d.send(o || null);
      });
    },
  sp = { http: PD, xhr: eL };
V.forEach(sp, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const cy = (e) => `- ${e}`,
  tL = (e) => V.isFunction(e) || e === null || e === !1,
  hw = {
    getAdapter: (e) => {
      e = V.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let s;
        if (
          ((r = n),
          !tL(n) && ((r = sp[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new Oe(`Unknown adapter '${s}'`);
        if (r) break;
        o[s || '#' + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        );
        let s = t
          ? i.length > 1
            ? `since :
` +
              i.map(cy).join(`
`)
            : ' ' + cy(i[0])
          : 'as no adapter specified';
        throw new Oe(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT'
        );
      }
      return r;
    },
    adapters: sp,
  };
function Ad(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ca(null, e);
}
function dy(e) {
  return (
    Ad(e),
    (e.headers = wn.from(e.headers)),
    (e.data = Md.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    hw
      .getAdapter(e.adapter || Ea.adapter)(e)
      .then(
        function (r) {
          return (
            Ad(e),
            (r.data = Md.call(e, e.transformResponse, r)),
            (r.headers = wn.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            pw(r) ||
              (Ad(e),
              r &&
                r.response &&
                ((r.response.data = Md.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = wn.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const fy = (e) => (e instanceof wn ? { ...e } : e);
function Ei(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return V.isPlainObject(u) && V.isPlainObject(c)
      ? V.merge.call({ caseless: d }, u, c)
      : V.isPlainObject(c)
      ? V.merge({}, c)
      : V.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u, c, d) {
    if (V.isUndefined(c)) {
      if (!V.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function i(u, c) {
    if (!V.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if (V.isUndefined(c)) {
      if (!V.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, c) => o(fy(u), fy(c), !0),
  };
  return (
    V.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = l[c] || o,
        f = d(e[c], t[c], c);
      (V.isUndefined(f) && d !== a) || (n[c] = f);
    }),
    n
  );
}
const gw = '1.6.8',
  sh = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    sh[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  }
);
const py = {};
sh.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      '[Axios v' +
      gw +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? '. ' + r : '')
    );
  }
  return (i, s, a) => {
    if (t === !1)
      throw new Oe(
        o(s, ' has been removed' + (n ? ' in ' + n : '')),
        Oe.ERR_DEPRECATED
      );
    return (
      n &&
        !py[s] &&
        ((py[s] = !0),
        console.warn(
          o(
            s,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(i, s, a) : !0
    );
  };
};
function nL(e, t, n) {
  if (typeof e != 'object')
    throw new Oe('options must be an object', Oe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const a = e[i],
        l = a === void 0 || s(a, i, e);
      if (l !== !0)
        throw new Oe('option ' + i + ' must be ' + l, Oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Oe('Unknown option ' + i, Oe.ERR_BAD_OPTION);
  }
}
const ap = { assertOptions: nL, validators: sh },
  Sr = ap.validators;
class fo {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new ay(), response: new ay() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, '') : '';
        r.stack
          ? i &&
            !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, '')) &&
            (r.stack +=
              `
` + i)
          : (r.stack = i);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Ei(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      ap.assertOptions(
        r,
        {
          silentJSONParsing: Sr.transitional(Sr.boolean),
          forcedJSONParsing: Sr.transitional(Sr.boolean),
          clarifyTimeoutError: Sr.transitional(Sr.boolean),
        },
        !1
      ),
      o != null &&
        (V.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : ap.assertOptions(
              o,
              { encode: Sr.function, serialize: Sr.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let s = i && V.merge(i.common, i[n.method]);
    i &&
      V.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (m) => {
          delete i[m];
        }
      ),
      (n.headers = wn.concat(s, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (h) {
      (typeof h.runWhen == 'function' && h.runWhen(n) === !1) ||
        ((l = l && h.synchronous), a.unshift(h.fulfilled, h.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (h) {
      u.push(h.fulfilled, h.rejected);
    });
    let c,
      d = 0,
      f;
    if (!l) {
      const m = [dy.bind(this), void 0];
      for (
        m.unshift.apply(m, a),
          m.push.apply(m, u),
          f = m.length,
          c = Promise.resolve(n);
        d < f;

      )
        c = c.then(m[d++], m[d++]);
      return c;
    }
    f = a.length;
    let v = n;
    for (d = 0; d < f; ) {
      const m = a[d++],
        h = a[d++];
      try {
        v = m(v);
      } catch (w) {
        h.call(this, w);
        break;
      }
    }
    try {
      c = dy.call(this, v);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, f = u.length; d < f; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Ei(this.defaults, t);
    const n = mw(t.baseURL, t.url);
    return uw(n, t.params, t.paramsSerializer);
  }
}
V.forEach(['delete', 'get', 'head', 'options'], function (t) {
  fo.prototype[t] = function (n, r) {
    return this.request(
      Ei(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
V.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, s, a) {
      return this.request(
        Ei(a || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: s,
        })
      );
    };
  }
  (fo.prototype[t] = n()), (fo.prototype[t + 'Form'] = n(!0));
});
class ah {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, a) {
        r.reason || ((r.reason = new Ca(i, s, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new ah(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function rL(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function oL(e) {
  return V.isObject(e) && e.isAxiosError === !0;
}
const lp = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(lp).forEach(([e, t]) => {
  lp[t] = e;
});
function vw(e) {
  const t = new fo(e),
    n = Qb(fo.prototype.request, t);
  return (
    V.extend(n, fo.prototype, t, { allOwnKeys: !0 }),
    V.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return vw(Ei(e, o));
    }),
    n
  );
}
const ut = vw(Ea);
ut.Axios = fo;
ut.CanceledError = Ca;
ut.CancelToken = ah;
ut.isCancel = pw;
ut.VERSION = gw;
ut.toFormData = jc;
ut.AxiosError = Oe;
ut.Cancel = ut.CanceledError;
ut.all = function (t) {
  return Promise.all(t);
};
ut.spread = rL;
ut.isAxiosError = oL;
ut.mergeConfig = Ei;
ut.AxiosHeaders = wn;
ut.formToJSON = (e) => fw(V.isHTMLForm(e) ? new FormData(e) : e);
ut.getAdapter = hw.getAdapter;
ut.HttpStatusCode = lp;
ut.default = ut;
const iL = () => {
    const [e, t] = b.useState(!1);
    return {
      isLoading: e,
      convertImg: async (r) => {
        const o = new FormData();
        o.append('content', r), t(!0);
        const i = await ut.post('http://127.0.0.1:5000/process_image', o, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        });
        return t(!1), i.data.result_image;
      },
    };
  },
  sL = ({ src: e, actions: t }) =>
    C.jsxs(Et, {
      width: 600,
      height: 600,
      children: [
        C.jsx('img', {
          width: 600,
          height: 600,
          style: { objectPosition: 'center', objectFit: 'contain' },
          src: e,
        }),
        C.jsx(gn, {
          container: !0,
          gap: 1,
          justifyContent: 'center',
          children: t,
        }),
      ],
    }),
  aL = ({ images: e, actions: t }) => {
    const [n, r] = b.useState(0);
    return C.jsxs(gn, {
      container: !0,
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      children: [
        C.jsxs(gn, {
          container: !0,
          flexDirection: 'row',
          flexWrap: 'nowrap',
          gap: 1,
          sx: { width: '100%', height: 600 },
          children: [
            C.jsx(Et, {
              flex: '80%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              children: C.jsx('img', {
                style: { objectPosition: 'center', objectFit: 'contain' },
                width: '100%',
                height: '100%',
                src: e[n],
              }),
            }),
            C.jsx(gn, {
              container: !0,
              height: '100%',
              flexDirection: 'column',
              gap: 1,
              flexWrap: 'nowrap',
              flex: '100px',
              overflow: 'scroll',
              children: e.map((o, i) =>
                C.jsx(
                  Et,
                  {
                    sx: {
                      borderRadius: 2,
                      width: '100%',
                      height: 100,
                      overflow: 'hidden',
                      flexShrink: 0,
                      cursor: 'pointer',
                    },
                    onClick: () => {
                      r(i);
                    },
                    children: C.jsx('img', {
                      style: { objectFit: 'contain' },
                      width: '100%',
                      height: '100%',
                      src: o,
                    }),
                  },
                  i
                )
              ),
            }),
          ],
        }),
        t,
      ],
    });
  };
function Li(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (d) {
        s(d);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (d) {
        s(d);
      }
    }
    function u(c) {
      c.done ? i(c.value) : o(c.value).then(a, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function Ni(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    r,
    o,
    i,
    s;
  return (
    (s = { next: a(0), throw: a(1), return: a(2) }),
    typeof Symbol == 'function' &&
      (s[Symbol.iterator] = function () {
        return this;
      }),
    s
  );
  function a(u) {
    return function (c) {
      return l([u, c]);
    };
  }
  function l(u) {
    if (r) throw new TypeError('Generator is already executing.');
    for (; s && ((s = 0), u[0] && (n = 0)), n; )
      try {
        if (
          ((r = 1),
          o &&
            (i =
              u[0] & 2
                ? o.return
                : u[0]
                ? o.throw || ((i = o.return) && i.call(o), 0)
                : o.next) &&
            !(i = i.call(o, u[1])).done)
        )
          return i;
        switch (((o = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, (o = u[1]), (u = [0]);
            continue;
          case 7:
            (u = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((i = n.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (u[0] === 6 || u[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              (n.label = i[1]), (i = u);
              break;
            }
            if (i && n.label < i[2]) {
              (n.label = i[2]), n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (c) {
        (u = [6, c]), (o = 0);
      } finally {
        r = i = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function my(e, t) {
  var n = typeof Symbol == 'function' && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    o,
    i = [],
    s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}
function hy(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var lL = new Map([
  ['aac', 'audio/aac'],
  ['abw', 'application/x-abiword'],
  ['arc', 'application/x-freearc'],
  ['avif', 'image/avif'],
  ['avi', 'video/x-msvideo'],
  ['azw', 'application/vnd.amazon.ebook'],
  ['bin', 'application/octet-stream'],
  ['bmp', 'image/bmp'],
  ['bz', 'application/x-bzip'],
  ['bz2', 'application/x-bzip2'],
  ['cda', 'application/x-cdf'],
  ['csh', 'application/x-csh'],
  ['css', 'text/css'],
  ['csv', 'text/csv'],
  ['doc', 'application/msword'],
  [
    'docx',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
  ['eot', 'application/vnd.ms-fontobject'],
  ['epub', 'application/epub+zip'],
  ['gz', 'application/gzip'],
  ['gif', 'image/gif'],
  ['heic', 'image/heic'],
  ['heif', 'image/heif'],
  ['htm', 'text/html'],
  ['html', 'text/html'],
  ['ico', 'image/vnd.microsoft.icon'],
  ['ics', 'text/calendar'],
  ['jar', 'application/java-archive'],
  ['jpeg', 'image/jpeg'],
  ['jpg', 'image/jpeg'],
  ['js', 'text/javascript'],
  ['json', 'application/json'],
  ['jsonld', 'application/ld+json'],
  ['mid', 'audio/midi'],
  ['midi', 'audio/midi'],
  ['mjs', 'text/javascript'],
  ['mp3', 'audio/mpeg'],
  ['mp4', 'video/mp4'],
  ['mpeg', 'video/mpeg'],
  ['mpkg', 'application/vnd.apple.installer+xml'],
  ['odp', 'application/vnd.oasis.opendocument.presentation'],
  ['ods', 'application/vnd.oasis.opendocument.spreadsheet'],
  ['odt', 'application/vnd.oasis.opendocument.text'],
  ['oga', 'audio/ogg'],
  ['ogv', 'video/ogg'],
  ['ogx', 'application/ogg'],
  ['opus', 'audio/opus'],
  ['otf', 'font/otf'],
  ['png', 'image/png'],
  ['pdf', 'application/pdf'],
  ['php', 'application/x-httpd-php'],
  ['ppt', 'application/vnd.ms-powerpoint'],
  [
    'pptx',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  ],
  ['rar', 'application/vnd.rar'],
  ['rtf', 'application/rtf'],
  ['sh', 'application/x-sh'],
  ['svg', 'image/svg+xml'],
  ['swf', 'application/x-shockwave-flash'],
  ['tar', 'application/x-tar'],
  ['tif', 'image/tiff'],
  ['tiff', 'image/tiff'],
  ['ts', 'video/mp2t'],
  ['ttf', 'font/ttf'],
  ['txt', 'text/plain'],
  ['vsd', 'application/vnd.visio'],
  ['wav', 'audio/wav'],
  ['weba', 'audio/webm'],
  ['webm', 'video/webm'],
  ['webp', 'image/webp'],
  ['woff', 'font/woff'],
  ['woff2', 'font/woff2'],
  ['xhtml', 'application/xhtml+xml'],
  ['xls', 'application/vnd.ms-excel'],
  ['xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  ['xml', 'application/xml'],
  ['xul', 'application/vnd.mozilla.xul+xml'],
  ['zip', 'application/zip'],
  ['7z', 'application/x-7z-compressed'],
  ['mkv', 'video/x-matroska'],
  ['mov', 'video/quicktime'],
  ['msg', 'application/vnd.ms-outlook'],
]);
function Pa(e, t) {
  var n = uL(e);
  if (typeof n.path != 'string') {
    var r = e.webkitRelativePath;
    Object.defineProperty(n, 'path', {
      value:
        typeof t == 'string'
          ? t
          : typeof r == 'string' && r.length > 0
          ? r
          : e.name,
      writable: !1,
      configurable: !1,
      enumerable: !0,
    });
  }
  return n;
}
function uL(e) {
  var t = e.name,
    n = t && t.lastIndexOf('.') !== -1;
  if (n && !e.type) {
    var r = t.split('.').pop().toLowerCase(),
      o = lL.get(r);
    o &&
      Object.defineProperty(e, 'type', {
        value: o,
        writable: !1,
        configurable: !1,
        enumerable: !0,
      });
  }
  return e;
}
var cL = ['.DS_Store', 'Thumbs.db'];
function dL(e) {
  return Li(this, void 0, void 0, function () {
    return Ni(this, function (t) {
      return vu(e) && fL(e.dataTransfer)
        ? [2, gL(e.dataTransfer, e.type)]
        : pL(e)
        ? [2, mL(e)]
        : Array.isArray(e) &&
          e.every(function (n) {
            return 'getFile' in n && typeof n.getFile == 'function';
          })
        ? [2, hL(e)]
        : [2, []];
    });
  });
}
function fL(e) {
  return vu(e);
}
function pL(e) {
  return vu(e) && vu(e.target);
}
function vu(e) {
  return typeof e == 'object' && e !== null;
}
function mL(e) {
  return up(e.target.files).map(function (t) {
    return Pa(t);
  });
}
function hL(e) {
  return Li(this, void 0, void 0, function () {
    var t;
    return Ni(this, function (n) {
      switch (n.label) {
        case 0:
          return [
            4,
            Promise.all(
              e.map(function (r) {
                return r.getFile();
              })
            ),
          ];
        case 1:
          return (
            (t = n.sent()),
            [
              2,
              t.map(function (r) {
                return Pa(r);
              }),
            ]
          );
      }
    });
  });
}
function gL(e, t) {
  return Li(this, void 0, void 0, function () {
    var n, r;
    return Ni(this, function (o) {
      switch (o.label) {
        case 0:
          return e.items
            ? ((n = up(e.items).filter(function (i) {
                return i.kind === 'file';
              })),
              t !== 'drop' ? [2, n] : [4, Promise.all(n.map(vL))])
            : [3, 2];
        case 1:
          return (r = o.sent()), [2, gy(yw(r))];
        case 2:
          return [
            2,
            gy(
              up(e.files).map(function (i) {
                return Pa(i);
              })
            ),
          ];
      }
    });
  });
}
function gy(e) {
  return e.filter(function (t) {
    return cL.indexOf(t.name) === -1;
  });
}
function up(e) {
  if (e === null) return [];
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function vL(e) {
  if (typeof e.webkitGetAsEntry != 'function') return vy(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? xw(t) : vy(e);
}
function yw(e) {
  return e.reduce(function (t, n) {
    return hy(hy([], my(t), !1), my(Array.isArray(n) ? yw(n) : [n]), !1);
  }, []);
}
function vy(e) {
  var t = e.getAsFile();
  if (!t) return Promise.reject(''.concat(e, ' is not a File'));
  var n = Pa(t);
  return Promise.resolve(n);
}
function yL(e) {
  return Li(this, void 0, void 0, function () {
    return Ni(this, function (t) {
      return [2, e.isDirectory ? xw(e) : xL(e)];
    });
  });
}
function xw(e) {
  var t = e.createReader();
  return new Promise(function (n, r) {
    var o = [];
    function i() {
      var s = this;
      t.readEntries(
        function (a) {
          return Li(s, void 0, void 0, function () {
            var l, u, c;
            return Ni(this, function (d) {
              switch (d.label) {
                case 0:
                  if (a.length) return [3, 5];
                  d.label = 1;
                case 1:
                  return d.trys.push([1, 3, , 4]), [4, Promise.all(o)];
                case 2:
                  return (l = d.sent()), n(l), [3, 4];
                case 3:
                  return (u = d.sent()), r(u), [3, 4];
                case 4:
                  return [3, 6];
                case 5:
                  (c = Promise.all(a.map(yL))), o.push(c), i(), (d.label = 6);
                case 6:
                  return [2];
              }
            });
          });
        },
        function (a) {
          r(a);
        }
      );
    }
    i();
  });
}
function xL(e) {
  return Li(this, void 0, void 0, function () {
    return Ni(this, function (t) {
      return [
        2,
        new Promise(function (n, r) {
          e.file(
            function (o) {
              var i = Pa(o, e.fullPath);
              n(i);
            },
            function (o) {
              r(o);
            }
          );
        }),
      ];
    });
  });
}
var bL = function (e, t) {
  if (e && t) {
    var n = Array.isArray(t) ? t : t.split(','),
      r = e.name || '',
      o = (e.type || '').toLowerCase(),
      i = o.replace(/\/.*$/, '');
    return n.some(function (s) {
      var a = s.trim().toLowerCase();
      return a.charAt(0) === '.'
        ? r.toLowerCase().endsWith(a)
        : a.endsWith('/*')
        ? i === a.replace(/\/.*$/, '')
        : o === a;
    });
  }
  return !0;
};
function yy(e) {
  return EL(e) || SL(e) || ww(e) || wL();
}
function wL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SL(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function EL(e) {
  if (Array.isArray(e)) return cp(e);
}
function xy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function by(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xy(Object(n), !0).forEach(function (r) {
          bw(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : xy(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function bw(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ta(e, t) {
  return TL(e) || PL(e, t) || ww(e, t) || CL();
}
function CL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ww(e, t) {
  if (e) {
    if (typeof e == 'string') return cp(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return cp(e, t);
  }
}
function cp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function PL(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r = [],
      o = !0,
      i = !1,
      s,
      a;
    try {
      for (
        n = n.call(e);
        !(o = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t));
        o = !0
      );
    } catch (l) {
      (i = !0), (a = l);
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function TL(e) {
  if (Array.isArray(e)) return e;
}
var kL = 'file-invalid-type',
  RL = 'file-too-large',
  OL = 'file-too-small',
  _L = 'too-many-files',
  ML = function (t) {
    t = Array.isArray(t) && t.length === 1 ? t[0] : t;
    var n = Array.isArray(t) ? 'one of '.concat(t.join(', ')) : t;
    return { code: kL, message: 'File type must be '.concat(n) };
  },
  wy = function (t) {
    return {
      code: RL,
      message: 'File is larger than '
        .concat(t, ' ')
        .concat(t === 1 ? 'byte' : 'bytes'),
    };
  },
  Sy = function (t) {
    return {
      code: OL,
      message: 'File is smaller than '
        .concat(t, ' ')
        .concat(t === 1 ? 'byte' : 'bytes'),
    };
  },
  AL = { code: _L, message: 'Too many files' };
function Sw(e, t) {
  var n = e.type === 'application/x-moz-file' || bL(e, t);
  return [n, n ? null : ML(t)];
}
function Ew(e, t, n) {
  if (no(e.size))
    if (no(t) && no(n)) {
      if (e.size > n) return [!1, wy(n)];
      if (e.size < t) return [!1, Sy(t)];
    } else {
      if (no(t) && e.size < t) return [!1, Sy(t)];
      if (no(n) && e.size > n) return [!1, wy(n)];
    }
  return [!0, null];
}
function no(e) {
  return e != null;
}
function IL(e) {
  var t = e.files,
    n = e.accept,
    r = e.minSize,
    o = e.maxSize,
    i = e.multiple,
    s = e.maxFiles,
    a = e.validator;
  return (!i && t.length > 1) || (i && s >= 1 && t.length > s)
    ? !1
    : t.every(function (l) {
        var u = Sw(l, n),
          c = ta(u, 1),
          d = c[0],
          f = Ew(l, r, o),
          v = ta(f, 1),
          m = v[0],
          h = a ? a(l) : null;
        return d && m && !h;
      });
}
function yu(e) {
  return typeof e.isPropagationStopped == 'function'
    ? e.isPropagationStopped()
    : typeof e.cancelBubble < 'u'
    ? e.cancelBubble
    : !1;
}
function nl(e) {
  return e.dataTransfer
    ? Array.prototype.some.call(e.dataTransfer.types, function (t) {
        return t === 'Files' || t === 'application/x-moz-file';
      })
    : !!e.target && !!e.target.files;
}
function Ey(e) {
  e.preventDefault();
}
function $L(e) {
  return e.indexOf('MSIE') !== -1 || e.indexOf('Trident/') !== -1;
}
function jL(e) {
  return e.indexOf('Edge/') !== -1;
}
function DL() {
  var e =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : window.navigator.userAgent;
  return $L(e) || jL(e);
}
function Wn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    for (
      var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1;
      s < o;
      s++
    )
      i[s - 1] = arguments[s];
    return t.some(function (a) {
      return !yu(r) && a && a.apply(void 0, [r].concat(i)), yu(r);
    });
  };
}
function LL() {
  return 'showOpenFilePicker' in window;
}
function NL(e) {
  if (no(e)) {
    var t = Object.entries(e)
      .filter(function (n) {
        var r = ta(n, 2),
          o = r[0],
          i = r[1],
          s = !0;
        return (
          Cw(o) ||
            (console.warn(
              'Skipped "'.concat(
                o,
                '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.'
              )
            ),
            (s = !1)),
          (!Array.isArray(i) || !i.every(Pw)) &&
            (console.warn(
              'Skipped "'.concat(
                o,
                '" because an invalid file extension was provided.'
              )
            ),
            (s = !1)),
          s
        );
      })
      .reduce(function (n, r) {
        var o = ta(r, 2),
          i = o[0],
          s = o[1];
        return by(by({}, n), {}, bw({}, i, s));
      }, {});
    return [{ description: 'Files', accept: t }];
  }
  return e;
}
function FL(e) {
  if (no(e))
    return Object.entries(e)
      .reduce(function (t, n) {
        var r = ta(n, 2),
          o = r[0],
          i = r[1];
        return [].concat(yy(t), [o], yy(i));
      }, [])
      .filter(function (t) {
        return Cw(t) || Pw(t);
      })
      .join(',');
}
function zL(e) {
  return (
    e instanceof DOMException &&
    (e.name === 'AbortError' || e.code === e.ABORT_ERR)
  );
}
function BL(e) {
  return (
    e instanceof DOMException &&
    (e.name === 'SecurityError' || e.code === e.SECURITY_ERR)
  );
}
function Cw(e) {
  return (
    e === 'audio/*' ||
    e === 'video/*' ||
    e === 'image/*' ||
    e === 'text/*' ||
    /\w+\/[-+.\w]+/g.test(e)
  );
}
function Pw(e) {
  return /^.*\.[\w]+$/.test(e);
}
var WL = ['children'],
  VL = ['open'],
  UL = [
    'refKey',
    'role',
    'onKeyDown',
    'onFocus',
    'onBlur',
    'onClick',
    'onDragEnter',
    'onDragOver',
    'onDragLeave',
    'onDrop',
  ],
  HL = ['refKey', 'onChange', 'onClick'];
function GL(e) {
  return XL(e) || qL(e) || Tw(e) || KL();
}
function KL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qL(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function XL(e) {
  if (Array.isArray(e)) return dp(e);
}
function Id(e, t) {
  return JL(e) || QL(e, t) || Tw(e, t) || YL();
}
function YL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tw(e, t) {
  if (e) {
    if (typeof e == 'string') return dp(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return dp(e, t);
  }
}
function dp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function QL(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r = [],
      o = !0,
      i = !1,
      s,
      a;
    try {
      for (
        n = n.call(e);
        !(o = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t));
        o = !0
      );
    } catch (l) {
      (i = !0), (a = l);
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function JL(e) {
  if (Array.isArray(e)) return e;
}
function Cy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cy(Object(n), !0).forEach(function (r) {
          fp(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Cy(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function fp(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function xu(e, t) {
  if (e == null) return {};
  var n = ZL(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function ZL(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var lh = b.forwardRef(function (e, t) {
  var n = e.children,
    r = xu(e, WL),
    o = Rw(r),
    i = o.open,
    s = xu(o, VL);
  return (
    b.useImperativeHandle(
      t,
      function () {
        return { open: i };
      },
      [i]
    ),
    ae.createElement(b.Fragment, null, n(qe(qe({}, s), {}, { open: i })))
  );
});
lh.displayName = 'Dropzone';
var kw = {
  disabled: !1,
  getFilesFromEvent: dL,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !0,
  autoFocus: !1,
};
lh.defaultProps = kw;
lh.propTypes = {
  children: Fe.func,
  accept: Fe.objectOf(Fe.arrayOf(Fe.string)),
  multiple: Fe.bool,
  preventDropOnDocument: Fe.bool,
  noClick: Fe.bool,
  noKeyboard: Fe.bool,
  noDrag: Fe.bool,
  noDragEventsBubbling: Fe.bool,
  minSize: Fe.number,
  maxSize: Fe.number,
  maxFiles: Fe.number,
  disabled: Fe.bool,
  getFilesFromEvent: Fe.func,
  onFileDialogCancel: Fe.func,
  onFileDialogOpen: Fe.func,
  useFsAccessApi: Fe.bool,
  autoFocus: Fe.bool,
  onDragEnter: Fe.func,
  onDragLeave: Fe.func,
  onDragOver: Fe.func,
  onDrop: Fe.func,
  onDropAccepted: Fe.func,
  onDropRejected: Fe.func,
  onError: Fe.func,
  validator: Fe.func,
};
var pp = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: [],
};
function Rw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = qe(qe({}, kw), e),
    n = t.accept,
    r = t.disabled,
    o = t.getFilesFromEvent,
    i = t.maxSize,
    s = t.minSize,
    a = t.multiple,
    l = t.maxFiles,
    u = t.onDragEnter,
    c = t.onDragLeave,
    d = t.onDragOver,
    f = t.onDrop,
    v = t.onDropAccepted,
    m = t.onDropRejected,
    h = t.onFileDialogCancel,
    w = t.onFileDialogOpen,
    p = t.useFsAccessApi,
    g = t.autoFocus,
    y = t.preventDropOnDocument,
    x = t.noClick,
    S = t.noKeyboard,
    P = t.noDrag,
    T = t.noDragEventsBubbling,
    _ = t.onError,
    I = t.validator,
    k = b.useMemo(
      function () {
        return FL(n);
      },
      [n]
    ),
    D = b.useMemo(
      function () {
        return NL(n);
      },
      [n]
    ),
    $ = b.useMemo(
      function () {
        return typeof w == 'function' ? w : Py;
      },
      [w]
    ),
    A = b.useMemo(
      function () {
        return typeof h == 'function' ? h : Py;
      },
      [h]
    ),
    z = b.useRef(null),
    B = b.useRef(null),
    W = b.useReducer(eN, pp),
    M = Id(W, 2),
    O = M[0],
    N = M[1],
    H = O.isFocused,
    oe = O.isFileDialogActive,
    ee = b.useRef(typeof window < 'u' && window.isSecureContext && p && LL()),
    he = function () {
      !ee.current &&
        oe &&
        setTimeout(function () {
          if (B.current) {
            var K = B.current.files;
            K.length || (N({ type: 'closeDialog' }), A());
          }
        }, 300);
    };
  b.useEffect(
    function () {
      return (
        window.addEventListener('focus', he, !1),
        function () {
          window.removeEventListener('focus', he, !1);
        }
      );
    },
    [B, oe, A, ee]
  );
  var te = b.useRef([]),
    de = function (K) {
      (z.current && z.current.contains(K.target)) ||
        (K.preventDefault(), (te.current = []));
    };
  b.useEffect(
    function () {
      return (
        y &&
          (document.addEventListener('dragover', Ey, !1),
          document.addEventListener('drop', de, !1)),
        function () {
          y &&
            (document.removeEventListener('dragover', Ey),
            document.removeEventListener('drop', de));
        }
      );
    },
    [z, y]
  ),
    b.useEffect(
      function () {
        return !r && g && z.current && z.current.focus(), function () {};
      },
      [z, g, r]
    );
  var ue = b.useCallback(
      function (L) {
        _ ? _(L) : console.error(L);
      },
      [_]
    ),
    Re = b.useCallback(
      function (L) {
        L.preventDefault(),
          L.persist(),
          F(L),
          (te.current = [].concat(GL(te.current), [L.target])),
          nl(L) &&
            Promise.resolve(o(L))
              .then(function (K) {
                if (!(yu(L) && !T)) {
                  var le = K.length,
                    me =
                      le > 0 &&
                      IL({
                        files: K,
                        accept: k,
                        minSize: s,
                        maxSize: i,
                        multiple: a,
                        maxFiles: l,
                        validator: I,
                      }),
                    ce = le > 0 && !me;
                  N({
                    isDragAccept: me,
                    isDragReject: ce,
                    isDragActive: !0,
                    type: 'setDraggedFiles',
                  }),
                    u && u(L);
                }
              })
              .catch(function (K) {
                return ue(K);
              });
      },
      [o, u, ue, T, k, s, i, a, l, I]
    ),
    we = b.useCallback(
      function (L) {
        L.preventDefault(), L.persist(), F(L);
        var K = nl(L);
        if (K && L.dataTransfer)
          try {
            L.dataTransfer.dropEffect = 'copy';
          } catch {}
        return K && d && d(L), !1;
      },
      [d, T]
    ),
    ve = b.useCallback(
      function (L) {
        L.preventDefault(), L.persist(), F(L);
        var K = te.current.filter(function (me) {
            return z.current && z.current.contains(me);
          }),
          le = K.indexOf(L.target);
        le !== -1 && K.splice(le, 1),
          (te.current = K),
          !(K.length > 0) &&
            (N({
              type: 'setDraggedFiles',
              isDragActive: !1,
              isDragAccept: !1,
              isDragReject: !1,
            }),
            nl(L) && c && c(L));
      },
      [z, c, T]
    ),
    Ne = b.useCallback(
      function (L, K) {
        var le = [],
          me = [];
        L.forEach(function (ce) {
          var re = Sw(ce, k),
            Ie = Id(re, 2),
            xt = Ie[0],
            bt = Ie[1],
            ne = Ew(ce, s, i),
            ke = Id(ne, 2),
            $e = ke[0],
            Mt = ke[1],
            zn = I ? I(ce) : null;
          if (xt && $e && !zn) le.push(ce);
          else {
            var ko = [bt, Mt];
            zn && (ko = ko.concat(zn)),
              me.push({
                file: ce,
                errors: ko.filter(function (Lc) {
                  return Lc;
                }),
              });
          }
        }),
          ((!a && le.length > 1) || (a && l >= 1 && le.length > l)) &&
            (le.forEach(function (ce) {
              me.push({ file: ce, errors: [AL] });
            }),
            le.splice(0)),
          N({ acceptedFiles: le, fileRejections: me, type: 'setFiles' }),
          f && f(le, me, K),
          me.length > 0 && m && m(me, K),
          le.length > 0 && v && v(le, K);
      },
      [N, a, k, s, i, l, f, v, m, I]
    ),
    fe = b.useCallback(
      function (L) {
        L.preventDefault(),
          L.persist(),
          F(L),
          (te.current = []),
          nl(L) &&
            Promise.resolve(o(L))
              .then(function (K) {
                (yu(L) && !T) || Ne(K, L);
              })
              .catch(function (K) {
                return ue(K);
              }),
          N({ type: 'reset' });
      },
      [o, Ne, ue, T]
    ),
    Pe = b.useCallback(
      function () {
        if (ee.current) {
          N({ type: 'openDialog' }), $();
          var L = { multiple: a, types: D };
          window
            .showOpenFilePicker(L)
            .then(function (K) {
              return o(K);
            })
            .then(function (K) {
              Ne(K, null), N({ type: 'closeDialog' });
            })
            .catch(function (K) {
              zL(K)
                ? (A(K), N({ type: 'closeDialog' }))
                : BL(K)
                ? ((ee.current = !1),
                  B.current
                    ? ((B.current.value = null), B.current.click())
                    : ue(
                        new Error(
                          'Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.'
                        )
                      ))
                : ue(K);
            });
          return;
        }
        B.current &&
          (N({ type: 'openDialog' }),
          $(),
          (B.current.value = null),
          B.current.click());
      },
      [N, $, A, p, Ne, ue, D, a]
    ),
    pe = b.useCallback(
      function (L) {
        !z.current ||
          !z.current.isEqualNode(L.target) ||
          ((L.key === ' ' ||
            L.key === 'Enter' ||
            L.keyCode === 32 ||
            L.keyCode === 13) &&
            (L.preventDefault(), Pe()));
      },
      [z, Pe]
    ),
    ye = b.useCallback(function () {
      N({ type: 'focus' });
    }, []),
    xe = b.useCallback(function () {
      N({ type: 'blur' });
    }, []),
    ht = b.useCallback(
      function () {
        x || (DL() ? setTimeout(Pe, 0) : Pe());
      },
      [x, Pe]
    ),
    Ve = function (K) {
      return r ? null : K;
    },
    R = function (K) {
      return S ? null : Ve(K);
    },
    j = function (K) {
      return P ? null : Ve(K);
    },
    F = function (K) {
      T && K.stopPropagation();
    },
    G = b.useMemo(
      function () {
        return function () {
          var L =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            K = L.refKey,
            le = K === void 0 ? 'ref' : K,
            me = L.role,
            ce = L.onKeyDown,
            re = L.onFocus,
            Ie = L.onBlur,
            xt = L.onClick,
            bt = L.onDragEnter,
            ne = L.onDragOver,
            ke = L.onDragLeave,
            $e = L.onDrop,
            Mt = xu(L, UL);
          return qe(
            qe(
              fp(
                {
                  onKeyDown: R(Wn(ce, pe)),
                  onFocus: R(Wn(re, ye)),
                  onBlur: R(Wn(Ie, xe)),
                  onClick: Ve(Wn(xt, ht)),
                  onDragEnter: j(Wn(bt, Re)),
                  onDragOver: j(Wn(ne, we)),
                  onDragLeave: j(Wn(ke, ve)),
                  onDrop: j(Wn($e, fe)),
                  role:
                    typeof me == 'string' && me !== '' ? me : 'presentation',
                },
                le,
                z
              ),
              !r && !S ? { tabIndex: 0 } : {}
            ),
            Mt
          );
        };
      },
      [z, pe, ye, xe, ht, Re, we, ve, fe, S, P, r]
    ),
    q = b.useCallback(function (L) {
      L.stopPropagation();
    }, []),
    U = b.useMemo(
      function () {
        return function () {
          var L =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            K = L.refKey,
            le = K === void 0 ? 'ref' : K,
            me = L.onChange,
            ce = L.onClick,
            re = xu(L, HL),
            Ie = fp(
              {
                accept: k,
                multiple: a,
                type: 'file',
                style: { display: 'none' },
                onChange: Ve(Wn(me, fe)),
                onClick: Ve(Wn(ce, q)),
                tabIndex: -1,
              },
              le,
              B
            );
          return qe(qe({}, Ie), re);
        };
      },
      [B, n, a, fe, r]
    );
  return qe(
    qe({}, O),
    {},
    {
      isFocused: H && !r,
      getRootProps: G,
      getInputProps: U,
      rootRef: z,
      inputRef: B,
      open: Ve(Pe),
    }
  );
}
function eN(e, t) {
  switch (t.type) {
    case 'focus':
      return qe(qe({}, e), {}, { isFocused: !0 });
    case 'blur':
      return qe(qe({}, e), {}, { isFocused: !1 });
    case 'openDialog':
      return qe(qe({}, pp), {}, { isFileDialogActive: !0 });
    case 'closeDialog':
      return qe(qe({}, e), {}, { isFileDialogActive: !1 });
    case 'setDraggedFiles':
      return qe(
        qe({}, e),
        {},
        {
          isDragActive: t.isDragActive,
          isDragAccept: t.isDragAccept,
          isDragReject: t.isDragReject,
        }
      );
    case 'setFiles':
      return qe(
        qe({}, e),
        {},
        { acceptedFiles: t.acceptedFiles, fileRejections: t.fileRejections }
      );
    case 'reset':
      return qe({}, pp);
    default:
      return e;
  }
}
function Py() {}
const tN = {
    'image/png': ['.png'],
    'image/jpeg': ['.jpeg'],
    'image/jpg': ['.jpg'],
  },
  nN = ({ onSelectImg: e }) => {
    const {
      getRootProps: t,
      getInputProps: n,
      isFocused: r,
    } = Rw({ accept: tN, onDrop: e, maxFiles: 1, multiple: !1 });
    return C.jsxs(Et, {
      ...t({ className: 'dropzone' }),
      sx: {
        height: 600,
        width: 600,
        borderWidth: 2,
        borderColor: r ? 'green' : 'black',
        borderStyle: 'dashed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      children: [
        C.jsx('input', { ...n() }),
        C.jsx(et, {
          children: 'Перетащите своё фото в эту область, или нажмите на неё.',
        }),
      ],
    });
  },
  rN = () => {
    const { convertImg: e, isLoading: t } = iL(),
      [n, r] = b.useState(void 0),
      [o, i] = b.useState(void 0),
      s = () => {
        r(void 0);
      },
      a = () => {
        n &&
          e(n[0]).then((c) => {
            i(c);
          });
      },
      l = b.useMemo(() => {
        if (n && n[0]) return URL.createObjectURL(n[0]);
      }, [n]),
      u = () => {
        i(void 0), r(void 0);
      };
    return C.jsx(dr, {
      sx: { pt: 2 },
      children: C.jsxs(gn, {
        container: !0,
        alignContent: 'center',
        justifyContent: 'center',
        children: [
          !o &&
            !t &&
            C.jsxs(Et, {
              sx: { height: 600, width: 600 },
              children: [
                !n && C.jsx(nN, { onSelectImg: r }),
                l &&
                  C.jsx(sL, {
                    src: l,
                    actions: C.jsxs(C.Fragment, {
                      children: [
                        C.jsx(ai, {
                          variant: 'contained',
                          onClick: a,
                          children: 'Обработать',
                        }),
                        C.jsx(ai, {
                          variant: 'contained',
                          color: 'error',
                          onClick: s,
                          children: 'Выбрать другую',
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          t &&
            C.jsxs(Et, {
              sx: {
                height: 600,
                width: 600,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: 'black',
                borderStyle: 'dashed',
              },
              children: [
                C.jsx(mM, {}),
                C.jsx(et, {
                  children:
                    'Фото обрабатывается, это может занять несколько минуть',
                }),
              ],
            }),
          o &&
            !t &&
            C.jsx(aL, {
              images: o.map((c) => `data:image/png;base64,${c}`),
              actions: C.jsx(C.Fragment, {
                children: C.jsx(ai, {
                  onClick: u,
                  variant: 'contained',
                  children: 'Обработать другое фото',
                }),
              }),
            }),
        ],
      }),
    });
  },
  uh = ({ src: e, cols: t = 4 }) =>
    C.jsx(Et, {
      children: C.jsx(FA, {
        variant: 'masonry',
        cols: t,
        gap: 8,
        children: e.map((n) =>
          C.jsx(
            UA,
            { children: C.jsx('img', { src: n, alt: n, loading: 'lazy' }) },
            n
          )
        ),
      }),
    }),
  oN = [
    'photo/love-story/3D0A0320.jpg',
    'photo/love-story/3D0A0349.jpg',
    'photo/love-story/_DSC4193-5.jpg',
    'photo/love-story/_DSC4224-10.jpg',
    'photo/love-story/_DSC4240-12.jpg',
    'photo/love-story/_DSC4400-28.jpg',
    'photo/love-story/_DSC6062.jpg',
    'photo/love-story/_DSC6083.jpg',
    'photo/love-story/IMG_8428.jpg',
    'photo/love-story/IMG_8536.jpg',
  ],
  iN = () =>
    C.jsxs(dr, {
      sx: { mt: 2 },
      children: [
        C.jsx(et, { fontWeight: 800, fontSize: 30, children: 'LoveStory' }),
        C.jsx(uh, { src: oN }),
      ],
    }),
  sN = [
    'photo/portret/1K2A8437.jpg',
    'photo/portret/1K2A8484.jpg',
    'photo/portret/1K2A8646.jpg',
    'photo/portret/1K2A8749.jpg',
    'photo/portret/_DSC2538-85.jpg',
    'photo/portret/_DSC2551-75.jpg',
    'photo/portret/_DSC3035-96.jpg',
    'photo/portret/_DSC4472-40.jpg',
    'photo/portret/_DSC4777-11.jpg',
    'photo/portret/_DSC4918-21.jpg',
    'photo/portret/IMG_0561.jpg',
    'photo/portret/IMG_0569.jpg',
    'photo/portret/IMG_0592.jpg',
    'photo/portret/IMG_0631.jpg',
    'photo/portret/IMG_0780.jpg',
    'photo/portret/IMG_2196.jpg',
    'photo/portret/IMG_2221.jpg',
    'photo/portret/IMG_5165.jpg',
    'photo/portret/IMG_5179.jpg',
  ],
  aN = () =>
    C.jsxs(dr, {
      sx: { mt: 2 },
      children: [
        C.jsx(et, { fontWeight: 800, fontSize: 30, children: 'Портерты' }),
        C.jsx(uh, { src: sN }),
      ],
    }),
  lN = [
    'photo/reportag/1K2A0088.jpg',
    'photo/reportag/1K2A0296.jpg',
    'photo/reportag/1K2A0362.jpg',
    'photo/reportag/1K2A0526.jpg',
    'photo/reportag/1K2A0683.jpg',
    'photo/reportag/1K2A0767.jpg',
    'photo/reportag/1K2A1022-Улучшено-Ум. шума.jpg',
    'photo/reportag/1K2A1340.jpg',
    'photo/reportag/1K2A2838.jpg',
    'photo/reportag/1K2A4291.jpg',
    'photo/reportag/1K2A4427.jpg',
    'photo/reportag/1K2A6298.jpg',
    'photo/reportag/1K2A6548.jpg',
    'photo/reportag/1K2A6670.jpg',
    'photo/reportag/1K2A1022-Улучшено-Ум. шума.jpg',
    'photo/reportag/1K2A8379.jpg',
    'photo/reportag/1K2A7603-Улучшено-Ум. шума.jpg',
    'photo/reportag/1K2A8932.jpg',
    'photo/reportag/1K2A9379.jpg',
    'photo/reportag/1K2A9489.jpg',
    'photo/reportag/1K2A9740.jpg',
    'photo/reportag/1K2A9901.jpg',
    'photo/reportag/3D0A9411.jpg',
    'photo/reportag/DSC04737.jpg',
    'photo/reportag/DSC04945.jpg',
  ],
  uN = () =>
    C.jsxs(dr, {
      sx: { mt: 2 },
      children: [
        C.jsx(et, { fontWeight: 800, fontSize: 30, children: 'Репортажы' }),
        C.jsx(uh, { src: lN, cols: 3 }),
      ],
    });
function Ty(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    'constructor' in e &&
    e.constructor === Object
  );
}
function ch(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > 'u'
        ? (e[n] = t[n])
        : Ty(t[n]) &&
          Ty(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          ch(e[n], t[n]);
    });
}
const Ow = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
};
function Hr() {
  const e = typeof document < 'u' ? document : {};
  return ch(e, Ow), e;
}
const cN = {
  document: Ow,
  navigator: { userAgent: '' },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > 'u' || clearTimeout(e);
  },
};
function cn() {
  const e = typeof window < 'u' ? window : {};
  return ch(e, cN), e;
}
function dN(e) {
  return (
    e === void 0 && (e = ''),
    e
      .trim()
      .split(' ')
      .filter((t) => !!t.trim())
  );
}
function fN(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function mp(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function bu() {
  return Date.now();
}
function pN(e) {
  const t = cn();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function mN(e, t) {
  t === void 0 && (t = 'x');
  const n = cn();
  let r, o, i;
  const s = pN(e);
  return (
    n.WebKitCSSMatrix
      ? ((o = s.transform || s.webkitTransform),
        o.split(',').length > 6 &&
          (o = o
            .split(', ')
            .map((a) => a.replace(',', '.'))
            .join(', ')),
        (i = new n.WebKitCSSMatrix(o === 'none' ? '' : o)))
      : ((i =
          s.MozTransform ||
          s.OTransform ||
          s.MsTransform ||
          s.msTransform ||
          s.transform ||
          s
            .getPropertyValue('transform')
            .replace('translate(', 'matrix(1, 0, 0, 1,')),
        (r = i.toString().split(','))),
    t === 'x' &&
      (n.WebKitCSSMatrix
        ? (o = i.m41)
        : r.length === 16
        ? (o = parseFloat(r[12]))
        : (o = parseFloat(r[4]))),
    t === 'y' &&
      (n.WebKitCSSMatrix
        ? (o = i.m42)
        : r.length === 16
        ? (o = parseFloat(r[13]))
        : (o = parseFloat(r[5]))),
    o || 0
  );
}
function rl(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  );
}
function hN(e) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Qt() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ['__proto__', 'constructor', 'prototype'];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !hN(r)) {
      const o = Object.keys(Object(r)).filter((i) => t.indexOf(i) < 0);
      for (let i = 0, s = o.length; i < s; i += 1) {
        const a = o[i],
          l = Object.getOwnPropertyDescriptor(r, a);
        l !== void 0 &&
          l.enumerable &&
          (rl(e[a]) && rl(r[a])
            ? r[a].__swiper__
              ? (e[a] = r[a])
              : Qt(e[a], r[a])
            : !rl(e[a]) && rl(r[a])
            ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : Qt(e[a], r[a]))
            : (e[a] = r[a]));
      }
    }
  }
  return e;
}
function ol(e, t, n) {
  e.style.setProperty(t, n);
}
function _w(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const o = cn(),
    i = -t.translate;
  let s = null,
    a;
  const l = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = 'none'),
    o.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > i ? 'next' : 'prev',
    c = (f, v) => (u === 'next' && f >= v) || (u === 'prev' && f <= v),
    d = () => {
      (a = new Date().getTime()), s === null && (s = a);
      const f = Math.max(Math.min((a - s) / l, 1), 0),
        v = 0.5 - Math.cos(f * Math.PI) / 2;
      let m = i + v * (n - i);
      if ((c(m, n) && (m = n), t.wrapperEl.scrollTo({ [r]: m }), c(m, n))) {
        (t.wrapperEl.style.overflow = 'hidden'),
          (t.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [r]: m });
          }),
          o.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = o.requestAnimationFrame(d);
    };
  d();
}
function Xn(e, t) {
  return t === void 0 && (t = ''), [...e.children].filter((n) => n.matches(t));
}
function wu(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function na(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : dN(t))), n;
}
function gN(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function vN(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function Ir(e, t) {
  return cn().getComputedStyle(e, null).getPropertyValue(t);
}
function hp(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function yN(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) n.push(r), (r = r.parentElement);
  return n;
}
function ky(e, t, n) {
  const r = cn();
  return (
    e[t === 'width' ? 'offsetWidth' : 'offsetHeight'] +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === 'width' ? 'margin-right' : 'margin-top')
    ) +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === 'width' ? 'margin-left' : 'margin-bottom')
    )
  );
}
function Be(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
let $d;
function xN() {
  const e = cn(),
    t = Hr();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      'scrollBehavior' in t.documentElement.style,
    touch: !!(
      'ontouchstart' in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function Mw() {
  return $d || ($d = xN()), $d;
}
let jd;
function bN(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = Mw(),
    r = cn(),
    o = r.navigator.platform,
    i = t || r.navigator.userAgent,
    s = { ios: !1, android: !1 },
    a = r.screen.width,
    l = r.screen.height,
    u = i.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = i.match(/(iPad).*OS\s([\d_]+)/);
  const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    v = o === 'Win32';
  let m = o === 'MacIntel';
  const h = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810',
  ];
  return (
    !c &&
      m &&
      n.touch &&
      h.indexOf(`${a}x${l}`) >= 0 &&
      ((c = i.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, '13_0_0']),
      (m = !1)),
    u && !v && ((s.os = 'android'), (s.android = !0)),
    (c || f || d) && ((s.os = 'ios'), (s.ios = !0)),
    s
  );
}
function Aw(e) {
  return e === void 0 && (e = {}), jd || (jd = bN(e)), jd;
}
let Dd;
function wN() {
  const e = cn(),
    t = Aw();
  let n = !1;
  function r() {
    const a = e.navigator.userAgent.toLowerCase();
    return (
      a.indexOf('safari') >= 0 &&
      a.indexOf('chrome') < 0 &&
      a.indexOf('android') < 0
    );
  }
  if (r()) {
    const a = String(e.navigator.userAgent);
    if (a.includes('Version/')) {
      const [l, u] = a
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((c) => Number(c));
      n = l < 16 || (l === 16 && u < 2);
    }
  }
  const o = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    i = r(),
    s = i || (o && t.ios);
  return {
    isSafari: n || i,
    needPerspectiveFix: n,
    need3dFix: s,
    isWebView: o,
  };
}
function SN() {
  return Dd || (Dd = wN()), Dd;
}
function EN(e) {
  let { swiper: t, on: n, emit: r } = e;
  const o = cn();
  let i = null,
    s = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (r('beforeResize'), r('resize'));
    },
    l = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((i = new ResizeObserver((d) => {
          s = o.requestAnimationFrame(() => {
            const { width: f, height: v } = t;
            let m = f,
              h = v;
            d.forEach((w) => {
              let { contentBoxSize: p, contentRect: g, target: y } = w;
              (y && y !== t.el) ||
                ((m = g ? g.width : (p[0] || p).inlineSize),
                (h = g ? g.height : (p[0] || p).blockSize));
            }),
              (m !== f || h !== v) && a();
          });
        })),
        i.observe(t.el));
    },
    u = () => {
      s && o.cancelAnimationFrame(s),
        i && i.unobserve && t.el && (i.unobserve(t.el), (i = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || r('orientationchange');
    };
  n('init', () => {
    if (t.params.resizeObserver && typeof o.ResizeObserver < 'u') {
      l();
      return;
    }
    o.addEventListener('resize', a), o.addEventListener('orientationchange', c);
  }),
    n('destroy', () => {
      u(),
        o.removeEventListener('resize', a),
        o.removeEventListener('orientationchange', c);
    });
}
function CN(e) {
  let { swiper: t, extendParams: n, on: r, emit: o } = e;
  const i = [],
    s = cn(),
    a = function (c, d) {
      d === void 0 && (d = {});
      const f = s.MutationObserver || s.WebkitMutationObserver,
        v = new f((m) => {
          if (t.__preventObserver__) return;
          if (m.length === 1) {
            o('observerUpdate', m[0]);
            return;
          }
          const h = function () {
            o('observerUpdate', m[0]);
          };
          s.requestAnimationFrame
            ? s.requestAnimationFrame(h)
            : s.setTimeout(h, 0);
        });
      v.observe(c, {
        attributes: typeof d.attributes > 'u' ? !0 : d.attributes,
        childList: typeof d.childList > 'u' ? !0 : d.childList,
        characterData: typeof d.characterData > 'u' ? !0 : d.characterData,
      }),
        i.push(v);
    },
    l = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = yN(t.hostEl);
          for (let d = 0; d < c.length; d += 1) a(c[d]);
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }),
          a(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      i.forEach((c) => {
        c.disconnect();
      }),
        i.splice(0, i.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r('init', l),
    r('destroy', u);
}
var PN = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r;
    const o = n ? 'unshift' : 'push';
    return (
      e.split(' ').forEach((i) => {
        r.eventsListeners[i] || (r.eventsListeners[i] = []),
          r.eventsListeners[i][o](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r;
    function o() {
      r.off(e, o), o.__emitterProxy && delete o.__emitterProxy;
      for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
        s[a] = arguments[a];
      t.apply(r, s);
    }
    return (o.__emitterProxy = t), r.on(e, o, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != 'function') return n;
    const r = t ? 'unshift' : 'push';
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(' ').forEach((r) => {
          typeof t > 'u'
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((o, i) => {
                (o === t || (o.__emitterProxy && o.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(i, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (
      typeof i[0] == 'string' || Array.isArray(i[0])
        ? ((t = i[0]), (n = i.slice(1, i.length)), (r = e))
        : ((t = i[0].events), (n = i[0].data), (r = i[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(' ')).forEach((l) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(r, [l, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[l] &&
            e.eventsListeners[l].forEach((u) => {
              u.apply(r, n);
            });
      }),
      e
    );
  },
};
function TN() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < 'u' && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < 'u' && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(Ir(r, 'padding-left') || 0, 10) -
        parseInt(Ir(r, 'padding-right') || 0, 10)),
      (n =
        n -
        parseInt(Ir(r, 'padding-top') || 0, 10) -
        parseInt(Ir(r, 'padding-bottom') || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function kN() {
  const e = this;
  function t(k, D) {
    return parseFloat(k.getPropertyValue(e.getDirectionLabel(D)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: o, size: i, rtlTranslate: s, wrongRTL: a } = e,
    l = e.virtual && n.virtual.enabled,
    u = l ? e.virtual.slides.length : e.slides.length,
    c = Xn(o, `.${e.params.slideClass}, swiper-slide`),
    d = l ? e.virtual.slides.length : c.length;
  let f = [];
  const v = [],
    m = [];
  let h = n.slidesOffsetBefore;
  typeof h == 'function' && (h = n.slidesOffsetBefore.call(e));
  let w = n.slidesOffsetAfter;
  typeof w == 'function' && (w = n.slidesOffsetAfter.call(e));
  const p = e.snapGrid.length,
    g = e.slidesGrid.length;
  let y = n.spaceBetween,
    x = -h,
    S = 0,
    P = 0;
  if (typeof i > 'u') return;
  typeof y == 'string' && y.indexOf('%') >= 0
    ? (y = (parseFloat(y.replace('%', '')) / 100) * i)
    : typeof y == 'string' && (y = parseFloat(y)),
    (e.virtualSize = -y),
    c.forEach((k) => {
      s ? (k.style.marginLeft = '') : (k.style.marginRight = ''),
        (k.style.marginBottom = ''),
        (k.style.marginTop = '');
    }),
    n.centeredSlides &&
      n.cssMode &&
      (ol(r, '--swiper-centered-offset-before', ''),
      ol(r, '--swiper-centered-offset-after', ''));
  const T = n.grid && n.grid.rows > 1 && e.grid;
  T ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  let _;
  const I =
    n.slidesPerView === 'auto' &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (k) => typeof n.breakpoints[k].slidesPerView < 'u'
    ).length > 0;
  for (let k = 0; k < d; k += 1) {
    _ = 0;
    let D;
    if (
      (c[k] && (D = c[k]),
      T && e.grid.updateSlide(k, D, c),
      !(c[k] && Ir(D, 'display') === 'none'))
    ) {
      if (n.slidesPerView === 'auto') {
        I && (c[k].style[e.getDirectionLabel('width')] = '');
        const $ = getComputedStyle(D),
          A = D.style.transform,
          z = D.style.webkitTransform;
        if (
          (A && (D.style.transform = 'none'),
          z && (D.style.webkitTransform = 'none'),
          n.roundLengths)
        )
          _ = e.isHorizontal() ? ky(D, 'width') : ky(D, 'height');
        else {
          const B = t($, 'width'),
            W = t($, 'padding-left'),
            M = t($, 'padding-right'),
            O = t($, 'margin-left'),
            N = t($, 'margin-right'),
            H = $.getPropertyValue('box-sizing');
          if (H && H === 'border-box') _ = B + O + N;
          else {
            const { clientWidth: oe, offsetWidth: ee } = D;
            _ = B + W + M + O + N + (ee - oe);
          }
        }
        A && (D.style.transform = A),
          z && (D.style.webkitTransform = z),
          n.roundLengths && (_ = Math.floor(_));
      } else
        (_ = (i - (n.slidesPerView - 1) * y) / n.slidesPerView),
          n.roundLengths && (_ = Math.floor(_)),
          c[k] && (c[k].style[e.getDirectionLabel('width')] = `${_}px`);
      c[k] && (c[k].swiperSlideSize = _),
        m.push(_),
        n.centeredSlides
          ? ((x = x + _ / 2 + S / 2 + y),
            S === 0 && k !== 0 && (x = x - i / 2 - y),
            k === 0 && (x = x - i / 2 - y),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            n.roundLengths && (x = Math.floor(x)),
            P % n.slidesPerGroup === 0 && f.push(x),
            v.push(x))
          : (n.roundLengths && (x = Math.floor(x)),
            (P - Math.min(e.params.slidesPerGroupSkip, P)) %
              e.params.slidesPerGroup ===
              0 && f.push(x),
            v.push(x),
            (x = x + _ + y)),
        (e.virtualSize += _ + y),
        (S = _),
        (P += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, i) + w),
    s &&
      a &&
      (n.effect === 'slide' || n.effect === 'coverflow') &&
      (r.style.width = `${e.virtualSize + y}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel('width')] = `${e.virtualSize + y}px`),
    T && e.grid.updateWrapperSize(_, f),
    !n.centeredSlides)
  ) {
    const k = [];
    for (let D = 0; D < f.length; D += 1) {
      let $ = f[D];
      n.roundLengths && ($ = Math.floor($)),
        f[D] <= e.virtualSize - i && k.push($);
    }
    (f = k),
      Math.floor(e.virtualSize - i) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(e.virtualSize - i);
  }
  if (l && n.loop) {
    const k = m[0] + y;
    if (n.slidesPerGroup > 1) {
      const D = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        $ = k * n.slidesPerGroup;
      for (let A = 0; A < D; A += 1) f.push(f[f.length - 1] + $);
    }
    for (let D = 0; D < e.virtual.slidesBefore + e.virtual.slidesAfter; D += 1)
      n.slidesPerGroup === 1 && f.push(f[f.length - 1] + k),
        v.push(v[v.length - 1] + k),
        (e.virtualSize += k);
  }
  if ((f.length === 0 && (f = [0]), y !== 0)) {
    const k =
      e.isHorizontal() && s ? 'marginLeft' : e.getDirectionLabel('marginRight');
    c.filter((D, $) =>
      !n.cssMode || n.loop ? !0 : $ !== c.length - 1
    ).forEach((D) => {
      D.style[k] = `${y}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let k = 0;
    m.forEach(($) => {
      k += $ + (y || 0);
    }),
      (k -= y);
    const D = k - i;
    f = f.map(($) => ($ <= 0 ? -h : $ > D ? D + w : $));
  }
  if (n.centerInsufficientSlides) {
    let k = 0;
    if (
      (m.forEach((D) => {
        k += D + (y || 0);
      }),
      (k -= y),
      k < i)
    ) {
      const D = (i - k) / 2;
      f.forEach(($, A) => {
        f[A] = $ - D;
      }),
        v.forEach(($, A) => {
          v[A] = $ + D;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: f,
      slidesGrid: v,
      slidesSizesGrid: m,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    ol(r, '--swiper-centered-offset-before', `${-f[0]}px`),
      ol(
        r,
        '--swiper-centered-offset-after',
        `${e.size / 2 - m[m.length - 1] / 2}px`
      );
    const k = -e.snapGrid[0],
      D = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map(($) => $ + k)),
      (e.slidesGrid = e.slidesGrid.map(($) => $ + D));
  }
  if (
    (d !== u && e.emit('slidesLengthChange'),
    f.length !== p &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit('snapGridLengthChange')),
    v.length !== g && e.emit('slidesGridLengthChange'),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit('slidesUpdated'),
    !l && !n.cssMode && (n.effect === 'slide' || n.effect === 'fade'))
  ) {
    const k = `${n.containerModifierClass}backface-hidden`,
      D = e.el.classList.contains(k);
    d <= n.maxBackfaceHiddenSlides
      ? D || e.el.classList.add(k)
      : D && e.el.classList.remove(k);
  }
}
function RN(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let o = 0,
    i;
  typeof e == 'number'
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const s = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
        const a = t.activeIndex + i;
        if (a > t.slides.length && !r) break;
        n.push(s(a));
      }
  else n.push(s(t.activeIndex));
  for (i = 0; i < n.length; i += 1)
    if (typeof n[i] < 'u') {
      const a = n[i].offsetHeight;
      o = a > o ? a : o;
    }
  (o || o === 0) && (t.wrapperEl.style.height = `${o}px`);
}
function ON() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function _N(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: o, snapGrid: i } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > 'u' && t.updateSlidesOffset();
  let s = -e;
  o && (s = e),
    r.forEach((l) => {
      l.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == 'string' && a.indexOf('%') >= 0
    ? (a = (parseFloat(a.replace('%', '')) / 100) * t.size)
    : typeof a == 'string' && (a = parseFloat(a));
  for (let l = 0; l < r.length; l += 1) {
    const u = r[l];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
    const d =
        (s + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      f =
        (s - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      v = -(s - c),
      m = v + t.slidesSizesGrid[l],
      h = v >= 0 && v <= t.size - t.slidesSizesGrid[l];
    ((v >= 0 && v < t.size - 1) ||
      (m > 1 && m <= t.size) ||
      (v <= 0 && m >= t.size)) &&
      (t.visibleSlides.push(u),
      t.visibleSlidesIndexes.push(l),
      r[l].classList.add(n.slideVisibleClass)),
      h && r[l].classList.add(n.slideFullyVisibleClass),
      (u.progress = o ? -d : d),
      (u.originalProgress = o ? -f : f);
  }
}
function MN(e) {
  const t = this;
  if (typeof e > 'u') {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: o, isBeginning: i, isEnd: s, progressLoop: a } = t;
  const l = i,
    u = s;
  if (r === 0) (o = 0), (i = !0), (s = !0);
  else {
    o = (e - t.minTranslate()) / r;
    const c = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1;
    (i = c || o <= 0), (s = d || o >= 1), c && (o = 0), d && (o = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      f = t.slidesGrid[c],
      v = t.slidesGrid[d],
      m = t.slidesGrid[t.slidesGrid.length - 1],
      h = Math.abs(e);
    h >= f ? (a = (h - f) / m) : (a = (h + m - v) / m), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: o, progressLoop: a, isBeginning: i, isEnd: s }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    i && !l && t.emit('reachBeginning toEdge'),
    s && !u && t.emit('reachEnd toEdge'),
    ((l && !i) || (u && !s)) && t.emit('fromEdge'),
    t.emit('progress', o);
}
const Ld = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function AN() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: o } = e,
    i = e.virtual && n.virtual.enabled,
    s = e.grid && n.grid && n.grid.rows > 1,
    a = (d) => Xn(r, `.${n.slideClass}${d}, swiper-slide${d}`)[0];
  let l, u, c;
  if (i)
    if (n.loop) {
      let d = o - e.virtual.slidesBefore;
      d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        (l = a(`[data-swiper-slide-index="${d}"]`));
    } else l = a(`[data-swiper-slide-index="${o}"]`);
  else
    s
      ? ((l = t.filter((d) => d.column === o)[0]),
        (c = t.filter((d) => d.column === o + 1)[0]),
        (u = t.filter((d) => d.column === o - 1)[0]))
      : (l = t[o]);
  l &&
    (s ||
      ((c = vN(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = gN(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((d) => {
      Ld(d, d === l, n.slideActiveClass),
        Ld(d, d === c, n.slideNextClass),
        Ld(d, d === u, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const Ol = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let o = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !o &&
        e.isElement &&
        (r.shadowRoot
          ? (o = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((o = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                o && o.remove());
            })),
        o && o.remove();
    }
  },
  Nd = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute('loading');
  },
  gp = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === 'auto'
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      o = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const s = o,
        a = [s - t];
      a.push(...Array.from({ length: t }).map((l, u) => s + r + u)),
        e.slides.forEach((l, u) => {
          a.includes(l.column) && Nd(e, u);
        });
      return;
    }
    const i = o + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let s = o - t; s <= i + t; s += 1) {
        const a = ((s % n) + n) % n;
        (a < o || a > i) && Nd(e, a);
      }
    else
      for (let s = Math.max(o - t, 0); s <= Math.min(i + t, n - 1); s += 1)
        s !== o && (s > i || s < o) && Nd(e, s);
  };
function IN(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let o;
  for (let i = 0; i < t.length; i += 1)
    typeof t[i + 1] < 'u'
      ? r >= t[i] && r < t[i + 1] - (t[i + 1] - t[i]) / 2
        ? (o = i)
        : r >= t[i] && r < t[i + 1] && (o = i + 1)
      : r >= t[i] && (o = i);
  return n.normalizeSlideIndex && (o < 0 || typeof o > 'u') && (o = 0), o;
}
function $N(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: o, activeIndex: i, realIndex: s, snapIndex: a } = t;
  let l = e,
    u;
  const c = (v) => {
    let m = v - t.virtual.slidesBefore;
    return (
      m < 0 && (m = t.virtual.slides.length + m),
      m >= t.virtual.slides.length && (m -= t.virtual.slides.length),
      m
    );
  };
  if ((typeof l > 'u' && (l = IN(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const v = Math.min(o.slidesPerGroupSkip, l);
    u = v + Math.floor((l - v) / o.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), l === i && !t.params.loop)) {
    u !== a && ((t.snapIndex = u), t.emit('snapIndexChange'));
    return;
  }
  if (l === i && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(l);
    return;
  }
  const d = t.grid && o.grid && o.grid.rows > 1;
  let f;
  if (t.virtual && o.virtual.enabled && o.loop) f = c(l);
  else if (d) {
    const v = t.slides.filter((h) => h.column === l)[0];
    let m = parseInt(v.getAttribute('data-swiper-slide-index'), 10);
    Number.isNaN(m) && (m = Math.max(t.slides.indexOf(v), 0)),
      (f = Math.floor(m / o.grid.rows));
  } else if (t.slides[l]) {
    const v = t.slides[l].getAttribute('data-swiper-slide-index');
    v ? (f = parseInt(v, 10)) : (f = l);
  } else f = l;
  Object.assign(t, {
    previousSnapIndex: a,
    snapIndex: u,
    previousRealIndex: s,
    realIndex: f,
    previousIndex: i,
    activeIndex: l,
  }),
    t.initialized && gp(t),
    t.emit('activeIndexChange'),
    t.emit('snapIndexChange'),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (s !== f && t.emit('realIndexChange'), t.emit('slideChange'));
}
function jN(e, t) {
  const n = this,
    r = n.params;
  let o = e.closest(`.${r.slideClass}, swiper-slide`);
  !o &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !o && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (o = a);
    });
  let i = !1,
    s;
  if (o) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === o) {
        (i = !0), (s = a);
        break;
      }
  }
  if (o && i)
    (n.clickedSlide = o),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            o.getAttribute('data-swiper-slide-index'),
            10
          ))
        : (n.clickedIndex = s);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var DN = {
  updateSize: TN,
  updateSlides: kN,
  updateAutoHeight: RN,
  updateSlidesOffset: ON,
  updateSlidesProgress: _N,
  updateProgress: MN,
  updateSlidesClasses: AN,
  updateActiveIndex: $N,
  updateClickedSlide: jN,
};
function LN(e) {
  e === void 0 && (e = this.isHorizontal() ? 'x' : 'y');
  const t = this,
    { params: n, rtlTranslate: r, translate: o, wrapperEl: i } = t;
  if (n.virtualTranslate) return r ? -o : o;
  if (n.cssMode) return o;
  let s = mN(i, e);
  return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
}
function NN(e, t) {
  const n = this,
    { rtlTranslate: r, params: o, wrapperEl: i, progress: s } = n;
  let a = 0,
    l = 0;
  const u = 0;
  n.isHorizontal() ? (a = r ? -e : e) : (l = e),
    o.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : l),
    o.cssMode
      ? (i[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal()
          ? -a
          : -l)
      : o.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (l -= n.cssOverflowAdjustment()),
        (i.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`));
  let c;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
    c !== s && n.updateProgress(e),
    n.emit('setTranslate', n.translate, t);
}
function FN() {
  return -this.snapGrid[0];
}
function zN() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function BN(e, t, n, r, o) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const i = this,
    { params: s, wrapperEl: a } = i;
  if (i.animating && s.preventInteractionOnTransition) return !1;
  const l = i.minTranslate(),
    u = i.maxTranslate();
  let c;
  if (
    (r && e > l ? (c = l) : r && e < u ? (c = u) : (c = e),
    i.updateProgress(c),
    s.cssMode)
  ) {
    const d = i.isHorizontal();
    if (t === 0) a[d ? 'scrollLeft' : 'scrollTop'] = -c;
    else {
      if (!i.support.smoothScroll)
        return (
          _w({ swiper: i, targetPosition: -c, side: d ? 'left' : 'top' }), !0
        );
      a.scrollTo({ [d ? 'left' : 'top']: -c, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    t === 0
      ? (i.setTransition(0),
        i.setTranslate(c),
        n && (i.emit('beforeTransitionStart', t, o), i.emit('transitionEnd')))
      : (i.setTransition(t),
        i.setTranslate(c),
        n && (i.emit('beforeTransitionStart', t, o), i.emit('transitionStart')),
        i.animating ||
          ((i.animating = !0),
          i.onTranslateToWrapperTransitionEnd ||
            (i.onTranslateToWrapperTransitionEnd = function (f) {
              !i ||
                i.destroyed ||
                (f.target === this &&
                  (i.wrapperEl.removeEventListener(
                    'transitionend',
                    i.onTranslateToWrapperTransitionEnd
                  ),
                  (i.onTranslateToWrapperTransitionEnd = null),
                  delete i.onTranslateToWrapperTransitionEnd,
                  (i.animating = !1),
                  n && i.emit('transitionEnd')));
            }),
          i.wrapperEl.addEventListener(
            'transitionend',
            i.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var WN = {
  getTranslate: LN,
  setTranslate: NN,
  minTranslate: FN,
  maxTranslate: zN,
  translateTo: BN,
};
function VN(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? '0ms' : '')),
    n.emit('setTransition', e, t);
}
function Iw(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: o } = e;
  const { activeIndex: i, previousIndex: s } = t;
  let a = r;
  if (
    (a || (i > s ? (a = 'next') : i < s ? (a = 'prev') : (a = 'reset')),
    t.emit(`transition${o}`),
    n && i !== s)
  ) {
    if (a === 'reset') {
      t.emit(`slideResetTransition${o}`);
      return;
    }
    t.emit(`slideChangeTransition${o}`),
      a === 'next'
        ? t.emit(`slideNextTransition${o}`)
        : t.emit(`slidePrevTransition${o}`);
  }
}
function UN(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Iw({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }));
}
function HN(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Iw({ swiper: n, runCallbacks: e, direction: t, step: 'End' }));
}
var GN = { setTransition: VN, transitionStart: UN, transitionEnd: HN };
function KN(e, t, n, r, o) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == 'string' && (e = parseInt(e, 10));
  const i = this;
  let s = e;
  s < 0 && (s = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: v,
    enabled: m,
  } = i;
  if (
    (!m && !r && !o) ||
    i.destroyed ||
    (i.animating && a.preventInteractionOnTransition)
  )
    return !1;
  typeof t > 'u' && (t = i.params.speed);
  const h = Math.min(i.params.slidesPerGroupSkip, s);
  let w = h + Math.floor((s - h) / i.params.slidesPerGroup);
  w >= l.length && (w = l.length - 1);
  const p = -l[w];
  if (a.normalizeSlideIndex)
    for (let y = 0; y < u.length; y += 1) {
      const x = -Math.floor(p * 100),
        S = Math.floor(u[y] * 100),
        P = Math.floor(u[y + 1] * 100);
      typeof u[y + 1] < 'u'
        ? x >= S && x < P - (P - S) / 2
          ? (s = y)
          : x >= S && x < P && (s = y + 1)
        : x >= S && (s = y);
    }
  if (
    i.initialized &&
    s !== d &&
    ((!i.allowSlideNext &&
      (f
        ? p > i.translate && p > i.minTranslate()
        : p < i.translate && p < i.minTranslate())) ||
      (!i.allowSlidePrev &&
        p > i.translate &&
        p > i.maxTranslate() &&
        (d || 0) !== s))
  )
    return !1;
  s !== (c || 0) && n && i.emit('beforeSlideChangeStart'), i.updateProgress(p);
  let g;
  if (
    (s > d ? (g = 'next') : s < d ? (g = 'prev') : (g = 'reset'),
    (f && -p === i.translate) || (!f && p === i.translate))
  )
    return (
      i.updateActiveIndex(s),
      a.autoHeight && i.updateAutoHeight(),
      i.updateSlidesClasses(),
      a.effect !== 'slide' && i.setTranslate(p),
      g !== 'reset' && (i.transitionStart(n, g), i.transitionEnd(n, g)),
      !1
    );
  if (a.cssMode) {
    const y = i.isHorizontal(),
      x = f ? p : -p;
    if (t === 0) {
      const S = i.virtual && i.params.virtual.enabled;
      S &&
        ((i.wrapperEl.style.scrollSnapType = 'none'),
        (i._immediateVirtual = !0)),
        S && !i._cssModeVirtualInitialSet && i.params.initialSlide > 0
          ? ((i._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              v[y ? 'scrollLeft' : 'scrollTop'] = x;
            }))
          : (v[y ? 'scrollLeft' : 'scrollTop'] = x),
        S &&
          requestAnimationFrame(() => {
            (i.wrapperEl.style.scrollSnapType = ''), (i._immediateVirtual = !1);
          });
    } else {
      if (!i.support.smoothScroll)
        return (
          _w({ swiper: i, targetPosition: x, side: y ? 'left' : 'top' }), !0
        );
      v.scrollTo({ [y ? 'left' : 'top']: x, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    i.setTransition(t),
    i.setTranslate(p),
    i.updateActiveIndex(s),
    i.updateSlidesClasses(),
    i.emit('beforeTransitionStart', t, r),
    i.transitionStart(n, g),
    t === 0
      ? i.transitionEnd(n, g)
      : i.animating ||
        ((i.animating = !0),
        i.onSlideToWrapperTransitionEnd ||
          (i.onSlideToWrapperTransitionEnd = function (x) {
            !i ||
              i.destroyed ||
              (x.target === this &&
                (i.wrapperEl.removeEventListener(
                  'transitionend',
                  i.onSlideToWrapperTransitionEnd
                ),
                (i.onSlideToWrapperTransitionEnd = null),
                delete i.onSlideToWrapperTransitionEnd,
                i.transitionEnd(n, g)));
          }),
        i.wrapperEl.addEventListener(
          'transitionend',
          i.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function qN(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == 'string' && (e = parseInt(e, 10));
  const o = this;
  if (o.destroyed) return;
  typeof t > 'u' && (t = o.params.speed);
  const i = o.grid && o.params.grid && o.params.grid.rows > 1;
  let s = e;
  if (o.params.loop)
    if (o.virtual && o.params.virtual.enabled) s = s + o.virtual.slidesBefore;
    else {
      let a;
      if (i) {
        const f = s * o.params.grid.rows;
        a = o.slides.filter(
          (v) => v.getAttribute('data-swiper-slide-index') * 1 === f
        )[0].column;
      } else a = o.getSlideIndexByData(s);
      const l = i
          ? Math.ceil(o.slides.length / o.params.grid.rows)
          : o.slides.length,
        { centeredSlides: u } = o.params;
      let c = o.params.slidesPerView;
      c === 'auto'
        ? (c = o.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(o.params.slidesPerView, 10))),
          u && c % 2 === 0 && (c = c + 1));
      let d = l - a < c;
      if (
        (u && (d = d || a < Math.ceil(c / 2)),
        r && u && o.params.slidesPerView !== 'auto' && !i && (d = !1),
        d)
      ) {
        const f = u
          ? a < o.activeIndex
            ? 'prev'
            : 'next'
          : a - o.activeIndex - 1 < o.params.slidesPerView
          ? 'next'
          : 'prev';
        o.loopFix({
          direction: f,
          slideTo: !0,
          activeSlideIndex: f === 'next' ? a + 1 : a - l + 1,
          slideRealIndex: f === 'next' ? o.realIndex : void 0,
        });
      }
      if (i) {
        const f = s * o.params.grid.rows;
        s = o.slides.filter(
          (v) => v.getAttribute('data-swiper-slide-index') * 1 === f
        )[0].column;
      } else s = o.getSlideIndexByData(s);
    }
  return (
    requestAnimationFrame(() => {
      o.slideTo(s, t, n, r);
    }),
    o
  );
}
function XN(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: o, params: i, animating: s } = r;
  if (!o || r.destroyed) return r;
  typeof e > 'u' && (e = r.params.speed);
  let a = i.slidesPerGroup;
  i.slidesPerView === 'auto' &&
    i.slidesPerGroup === 1 &&
    i.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic('current', !0), 1));
  const l = r.activeIndex < i.slidesPerGroupSkip ? 1 : a,
    u = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (s && !u && i.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: 'next' }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && i.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + l, e, t, n);
        }),
        !0
      );
  }
  return i.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + l, e, t, n);
}
function YN(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    {
      params: o,
      snapGrid: i,
      slidesGrid: s,
      rtlTranslate: a,
      enabled: l,
      animating: u,
    } = r;
  if (!l || r.destroyed) return r;
  typeof e > 'u' && (e = r.params.speed);
  const c = r.virtual && o.virtual.enabled;
  if (o.loop) {
    if (u && !c && o.loopPreventsSliding) return !1;
    r.loopFix({ direction: 'prev' }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const d = a ? r.translate : -r.translate;
  function f(p) {
    return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p);
  }
  const v = f(d),
    m = i.map((p) => f(p));
  let h = i[m.indexOf(v) - 1];
  if (typeof h > 'u' && o.cssMode) {
    let p;
    i.forEach((g, y) => {
      v >= g && (p = y);
    }),
      typeof p < 'u' && (h = i[p > 0 ? p - 1 : p]);
  }
  let w = 0;
  if (
    (typeof h < 'u' &&
      ((w = s.indexOf(h)),
      w < 0 && (w = r.activeIndex - 1),
      o.slidesPerView === 'auto' &&
        o.slidesPerGroup === 1 &&
        o.slidesPerGroupAuto &&
        ((w = w - r.slidesPerViewDynamic('previous', !0) + 1),
        (w = Math.max(w, 0)))),
    o.rewind && r.isBeginning)
  ) {
    const p =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(p, e, t, n);
  } else if (o.loop && r.activeIndex === 0 && o.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(w, e, t, n);
      }),
      !0
    );
  return r.slideTo(w, e, t, n);
}
function QN(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof e > 'u' && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    );
}
function JN(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const o = this;
  if (o.destroyed) return;
  typeof e > 'u' && (e = o.params.speed);
  let i = o.activeIndex;
  const s = Math.min(o.params.slidesPerGroupSkip, i),
    a = s + Math.floor((i - s) / o.params.slidesPerGroup),
    l = o.rtlTranslate ? o.translate : -o.translate;
  if (l >= o.snapGrid[a]) {
    const u = o.snapGrid[a],
      c = o.snapGrid[a + 1];
    l - u > (c - u) * r && (i += o.params.slidesPerGroup);
  } else {
    const u = o.snapGrid[a - 1],
      c = o.snapGrid[a];
    l - u <= (c - u) * r && (i -= o.params.slidesPerGroup);
  }
  return (
    (i = Math.max(i, 0)),
    (i = Math.min(i, o.slidesGrid.length - 1)),
    o.slideTo(i, e, t, n)
  );
}
function ZN() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView;
  let o = e.clickedIndex,
    i;
  const s = e.isElement ? 'swiper-slide' : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (i = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      t.centeredSlides
        ? o < e.loopedSlides - r / 2 ||
          o > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (o = e.getSlideIndex(
              Xn(n, `${s}[data-swiper-slide-index="${i}"]`)[0]
            )),
            mp(() => {
              e.slideTo(o);
            }))
          : e.slideTo(o)
        : o > e.slides.length - r
        ? (e.loopFix(),
          (o = e.getSlideIndex(
            Xn(n, `${s}[data-swiper-slide-index="${i}"]`)[0]
          )),
          mp(() => {
            e.slideTo(o);
          }))
        : e.slideTo(o);
  } else e.slideTo(o);
}
var eF = {
  slideTo: KN,
  slideToLoop: qN,
  slideNext: XN,
  slidePrev: YN,
  slideReset: QN,
  slideToClosest: JN,
  slideToClickedSlide: ZN,
};
function tF(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const o = () => {
      Xn(r, `.${n.slideClass}, swiper-slide`).forEach((d, f) => {
        d.setAttribute('data-swiper-slide-index', f);
      });
    },
    i = t.grid && n.grid && n.grid.rows > 1,
    s = n.slidesPerGroup * (i ? n.grid.rows : 1),
    a = t.slides.length % s !== 0,
    l = i && t.slides.length % n.grid.rows !== 0,
    u = (c) => {
      for (let d = 0; d < c; d += 1) {
        const f = t.isElement
          ? na('swiper-slide', [n.slideBlankClass])
          : na('div', [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(f);
      }
    };
  if (a) {
    if (n.loopAddBlankSlides) {
      const c = s - (t.slides.length % s);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      wu(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      );
    o();
  } else if (l) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      wu(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      );
    o();
  } else o();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : 'next',
  });
}
function nF(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: o,
    activeSlideIndex: i,
    byController: s,
    byMousewheel: a,
  } = e === void 0 ? {} : e;
  const l = this;
  if (!l.params.loop) return;
  l.emit('beforeLoopFix');
  const {
      slides: u,
      allowSlidePrev: c,
      allowSlideNext: d,
      slidesEl: f,
      params: v,
    } = l,
    { centeredSlides: m } = v;
  if (
    ((l.allowSlidePrev = !0),
    (l.allowSlideNext = !0),
    l.virtual && v.virtual.enabled)
  ) {
    n &&
      (!v.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : v.centeredSlides && l.snapIndex < v.slidesPerView
        ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
        : l.snapIndex === l.snapGrid.length - 1 &&
          l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = c),
      (l.allowSlideNext = d),
      l.emit('loopFix');
    return;
  }
  let h = v.slidesPerView;
  h === 'auto'
    ? (h = l.slidesPerViewDynamic())
    : ((h = Math.ceil(parseFloat(v.slidesPerView, 10))),
      m && h % 2 === 0 && (h = h + 1));
  const w = v.slidesPerGroupAuto ? h : v.slidesPerGroup;
  let p = w;
  p % w !== 0 && (p += w - (p % w)),
    (p += v.loopAdditionalSlides),
    (l.loopedSlides = p);
  const g = l.grid && v.grid && v.grid.rows > 1;
  u.length < h + p
    ? wu(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
      )
    : g &&
      v.grid.fill === 'row' &&
      wu(
        'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
      );
  const y = [],
    x = [];
  let S = l.activeIndex;
  typeof i > 'u'
    ? (i = l.getSlideIndex(
        u.filter((A) => A.classList.contains(v.slideActiveClass))[0]
      ))
    : (S = i);
  const P = r === 'next' || !r,
    T = r === 'prev' || !r;
  let _ = 0,
    I = 0;
  const k = g ? Math.ceil(u.length / v.grid.rows) : u.length,
    $ = (g ? u[i].column : i) + (m && typeof o > 'u' ? -h / 2 + 0.5 : 0);
  if ($ < p) {
    _ = Math.max(p - $, w);
    for (let A = 0; A < p - $; A += 1) {
      const z = A - Math.floor(A / k) * k;
      if (g) {
        const B = k - z - 1;
        for (let W = u.length - 1; W >= 0; W -= 1)
          u[W].column === B && y.push(W);
      } else y.push(k - z - 1);
    }
  } else if ($ + h > k - p) {
    I = Math.max($ - (k - p * 2), w);
    for (let A = 0; A < I; A += 1) {
      const z = A - Math.floor(A / k) * k;
      g
        ? u.forEach((B, W) => {
            B.column === z && x.push(W);
          })
        : x.push(z);
    }
  }
  if (
    ((l.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      l.__preventObserver__ = !1;
    }),
    T &&
      y.forEach((A) => {
        (u[A].swiperLoopMoveDOM = !0),
          f.prepend(u[A]),
          (u[A].swiperLoopMoveDOM = !1);
      }),
    P &&
      x.forEach((A) => {
        (u[A].swiperLoopMoveDOM = !0),
          f.append(u[A]),
          (u[A].swiperLoopMoveDOM = !1);
      }),
    l.recalcSlides(),
    v.slidesPerView === 'auto'
      ? l.updateSlides()
      : g &&
        ((y.length > 0 && T) || (x.length > 0 && P)) &&
        l.slides.forEach((A, z) => {
          l.grid.updateSlide(z, A, l.slides);
        }),
    v.watchSlidesProgress && l.updateSlidesOffset(),
    n)
  ) {
    if (y.length > 0 && T) {
      if (typeof t > 'u') {
        const A = l.slidesGrid[S],
          B = l.slidesGrid[S + _] - A;
        a
          ? l.setTranslate(l.translate - B)
          : (l.slideTo(S + Math.ceil(_), 0, !1, !0),
            o &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - B),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - B)));
      } else if (o) {
        const A = g ? y.length / v.grid.rows : y.length;
        l.slideTo(l.activeIndex + A, 0, !1, !0),
          (l.touchEventsData.currentTranslate = l.translate);
      }
    } else if (x.length > 0 && P)
      if (typeof t > 'u') {
        const A = l.slidesGrid[S],
          B = l.slidesGrid[S - I] - A;
        a
          ? l.setTranslate(l.translate - B)
          : (l.slideTo(S - I, 0, !1, !0),
            o &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - B),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - B)));
      } else {
        const A = g ? x.length / v.grid.rows : x.length;
        l.slideTo(l.activeIndex - A, 0, !1, !0);
      }
  }
  if (
    ((l.allowSlidePrev = c),
    (l.allowSlideNext = d),
    l.controller && l.controller.control && !s)
  ) {
    const A = {
      slideRealIndex: t,
      direction: r,
      setTranslate: o,
      activeSlideIndex: i,
      byController: !0,
    };
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((z) => {
          !z.destroyed &&
            z.params.loop &&
            z.loopFix({
              ...A,
              slideTo: z.params.slidesPerView === v.slidesPerView ? n : !1,
            });
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix({
          ...A,
          slideTo:
            l.controller.control.params.slidesPerView === v.slidesPerView
              ? n
              : !1,
        });
  }
  l.emit('loopFix');
}
function rF() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((o) => {
    const i =
      typeof o.swiperSlideIndex > 'u'
        ? o.getAttribute('data-swiper-slide-index') * 1
        : o.swiperSlideIndex;
    r[i] = o;
  }),
    e.slides.forEach((o) => {
      o.removeAttribute('data-swiper-slide-index');
    }),
    r.forEach((o) => {
      n.append(o);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var oF = { loopCreate: tF, loopFix: nF, loopDestroy: rF };
function iF(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = 'move'),
    (n.style.cursor = e ? 'grabbing' : 'grab'),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function sF() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
    ].style.cursor = ''),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var aF = { setGrabCursor: iF, unsetGrabCursor: sF };
function lF(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === Hr() || r === cn()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const o = r.closest(e);
    return !o && !r.getRootNode ? null : o || n(r.getRootNode().host);
  }
  return n(t);
}
function Ry(e, t, n) {
  const r = cn(),
    { params: o } = e,
    i = o.edgeSwipeDetection,
    s = o.edgeSwipeThreshold;
  return i && (n <= s || n >= r.innerWidth - s)
    ? i === 'prevent'
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function uF(e) {
  const t = this,
    n = Hr();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const o = t.touchEventsData;
  if (r.type === 'pointerdown') {
    if (o.pointerId !== null && o.pointerId !== r.pointerId) return;
    o.pointerId = r.pointerId;
  } else
    r.type === 'touchstart' &&
      r.targetTouches.length === 1 &&
      (o.touchId = r.targetTouches[0].identifier);
  if (r.type === 'touchstart') {
    Ry(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: i, touches: s, enabled: a } = t;
  if (
    !a ||
    (!i.simulateTouch && r.pointerType === 'mouse') ||
    (t.animating && i.preventInteractionOnTransition)
  )
    return;
  !t.animating && i.cssMode && i.loop && t.loopFix();
  let l = r.target;
  if (
    (i.touchEventsTarget === 'wrapper' && !t.wrapperEl.contains(l)) ||
    ('which' in r && r.which === 3) ||
    ('button' in r && r.button > 0) ||
    (o.isTouched && o.isMoved)
  )
    return;
  const u = !!i.noSwipingClass && i.noSwipingClass !== '',
    c = r.composedPath ? r.composedPath() : r.path;
  u && r.target && r.target.shadowRoot && c && (l = c[0]);
  const d = i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`,
    f = !!(r.target && r.target.shadowRoot);
  if (i.noSwiping && (f ? lF(d, l) : l.closest(d))) {
    t.allowClick = !0;
    return;
  }
  if (i.swipeHandler && !l.closest(i.swipeHandler)) return;
  (s.currentX = r.pageX), (s.currentY = r.pageY);
  const v = s.currentX,
    m = s.currentY;
  if (!Ry(t, r, v)) return;
  Object.assign(o, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (s.startX = v),
    (s.startY = m),
    (o.touchStartTime = bu()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    i.threshold > 0 && (o.allowThresholdMove = !1);
  let h = !0;
  l.matches(o.focusableElements) &&
    ((h = !1), l.nodeName === 'SELECT' && (o.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(o.focusableElements) &&
      n.activeElement !== l &&
      n.activeElement.blur();
  const w = h && t.allowTouchMove && i.touchStartPreventDefault;
  (i.touchStartForcePreventDefault || w) &&
    !l.isContentEditable &&
    r.preventDefault(),
    i.freeMode &&
      i.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !i.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit('touchStart', r);
}
function cF(e) {
  const t = Hr(),
    n = this,
    r = n.touchEventsData,
    { params: o, touches: i, rtlTranslate: s, enabled: a } = n;
  if (!a || (!o.simulateTouch && e.pointerType === 'mouse')) return;
  let l = e;
  if (
    (l.originalEvent && (l = l.originalEvent),
    l.type === 'pointermove' &&
      (r.touchId !== null || l.pointerId !== r.pointerId))
  )
    return;
  let u;
  if (l.type === 'touchmove') {
    if (
      ((u = [...l.changedTouches].filter((P) => P.identifier === r.touchId)[0]),
      !u || u.identifier !== r.touchId)
    )
      return;
  } else u = l;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit('touchMoveOpposite', l);
    return;
  }
  const c = u.pageX,
    d = u.pageY;
  if (l.preventedByNestedSwiper) {
    (i.startX = c), (i.startY = d);
    return;
  }
  if (!n.allowTouchMove) {
    l.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(i, { startX: c, startY: d, currentX: c, currentY: d }),
        (r.touchStartTime = bu()));
    return;
  }
  if (o.touchReleaseOnEdges && !o.loop) {
    if (n.isVertical()) {
      if (
        (d < i.startY && n.translate <= n.maxTranslate()) ||
        (d > i.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (c < i.startX && n.translate <= n.maxTranslate()) ||
      (c > i.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    l.target === t.activeElement &&
    l.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit('touchMove', l),
    (i.previousX = i.currentX),
    (i.previousY = i.currentY),
    (i.currentX = c),
    (i.currentY = d);
  const f = i.currentX - i.startX,
    v = i.currentY - i.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + v ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > 'u') {
    let P;
    (n.isHorizontal() && i.currentY === i.startY) ||
    (n.isVertical() && i.currentX === i.startX)
      ? (r.isScrolling = !1)
      : f * f + v * v >= 25 &&
        ((P = (Math.atan2(Math.abs(v), Math.abs(f)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? P > o.touchAngle
          : 90 - P > o.touchAngle));
  }
  if (
    (r.isScrolling && n.emit('touchMoveOpposite', l),
    typeof r.startMoving > 'u' &&
      (i.currentX !== i.startX || i.currentY !== i.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (l.type === 'touchmove' && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !o.cssMode && l.cancelable && l.preventDefault(),
    o.touchMoveStopPropagation && !o.nested && l.stopPropagation();
  let m = n.isHorizontal() ? f : v,
    h = n.isHorizontal() ? i.currentX - i.previousX : i.currentY - i.previousY;
  o.oneWayMovement &&
    ((m = Math.abs(m) * (s ? 1 : -1)), (h = Math.abs(h) * (s ? 1 : -1))),
    (i.diff = m),
    (m *= o.touchRatio),
    s && ((m = -m), (h = -h));
  const w = n.touchesDirection;
  (n.swipeDirection = m > 0 ? 'prev' : 'next'),
    (n.touchesDirection = h > 0 ? 'prev' : 'next');
  const p = n.params.loop && !o.cssMode,
    g =
      (n.touchesDirection === 'next' && n.allowSlideNext) ||
      (n.touchesDirection === 'prev' && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (p && g && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const P = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(P);
    }
    (r.allowMomentumBounce = !1),
      o.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit('sliderFirstMove', l);
  }
  let y;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      w !== n.touchesDirection &&
      p &&
      g &&
      Math.abs(m) >= 1)
  ) {
    Object.assign(i, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit('sliderMove', l),
    (r.isMoved = !0),
    (r.currentTranslate = m + r.startTranslate);
  let x = !0,
    S = o.resistanceRatio;
  if (
    (o.touchReleaseOnEdges && (S = 0),
    m > 0
      ? (p &&
          g &&
          !y &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (o.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: 'prev',
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((x = !1),
          o.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + m) ** S)))
      : m < 0 &&
        (p &&
          g &&
          !y &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (o.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (o.slidesPerView === 'auto'
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(o.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((x = !1),
          o.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - m) ** S))),
    x && (l.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === 'next' &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === 'prev' &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    o.threshold > 0)
  )
    if (Math.abs(m) > o.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (i.startX = i.currentX),
          (i.startY = i.currentY),
          (r.currentTranslate = r.startTranslate),
          (i.diff = n.isHorizontal()
            ? i.currentX - i.startX
            : i.currentY - i.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !o.followFinger ||
    o.cssMode ||
    (((o.freeMode && o.freeMode.enabled && n.freeMode) ||
      o.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    o.freeMode && o.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function dF(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let o;
  if (r.type === 'touchend' || r.type === 'touchcancel') {
    if (
      ((o = [...r.changedTouches].filter((S) => S.identifier === n.touchId)[0]),
      !o || o.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    o = r;
  }
  if (
    ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(
      r.type
    ) &&
    !(
      ['pointercancel', 'contextmenu'].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: s,
    touches: a,
    rtlTranslate: l,
    slidesGrid: u,
    enabled: c,
  } = t;
  if (!c || (!s.simulateTouch && r.pointerType === 'mouse')) return;
  if (
    (n.allowTouchCallbacks && t.emit('touchEnd', r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && s.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  s.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const d = bu(),
    f = d - n.touchStartTime;
  if (t.allowClick) {
    const S = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((S && S[0]) || r.target, S),
      t.emit('tap click', r),
      f < 300 &&
        d - n.lastClickTime < 300 &&
        t.emit('doubleTap doubleClick', r);
  }
  if (
    ((n.lastClickTime = bu()),
    mp(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (a.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let v;
  if (
    (s.followFinger
      ? (v = l ? t.translate : -t.translate)
      : (v = -n.currentTranslate),
    s.cssMode)
  )
    return;
  if (s.freeMode && s.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: v });
    return;
  }
  const m = v >= -t.maxTranslate() && !t.params.loop;
  let h = 0,
    w = t.slidesSizesGrid[0];
  for (
    let S = 0;
    S < u.length;
    S += S < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
  ) {
    const P = S < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    typeof u[S + P] < 'u'
      ? (m || (v >= u[S] && v < u[S + P])) && ((h = S), (w = u[S + P] - u[S]))
      : (m || v >= u[S]) && ((h = S), (w = u[u.length - 1] - u[u.length - 2]));
  }
  let p = null,
    g = null;
  s.rewind &&
    (t.isBeginning
      ? (g =
          s.virtual && s.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (p = 0));
  const y = (v - u[h]) / w,
    x = h < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
  if (f > s.longSwipesMs) {
    if (!s.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === 'next' &&
      (y >= s.longSwipesRatio
        ? t.slideTo(s.rewind && t.isEnd ? p : h + x)
        : t.slideTo(h)),
      t.swipeDirection === 'prev' &&
        (y > 1 - s.longSwipesRatio
          ? t.slideTo(h + x)
          : g !== null && y < 0 && Math.abs(y) > s.longSwipesRatio
          ? t.slideTo(g)
          : t.slideTo(h));
  } else {
    if (!s.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(h + x)
        : t.slideTo(h)
      : (t.swipeDirection === 'next' && t.slideTo(p !== null ? p : h + x),
        t.swipeDirection === 'prev' && t.slideTo(g !== null ? g : h));
  }
}
function Oy() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: o, snapGrid: i } = e,
    s = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const a = s && t.loop;
  (t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !s
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = o),
    (e.allowSlideNext = r),
    e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
}
function fF(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function pF() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let o;
  const i = e.maxTranslate() - e.minTranslate();
  i === 0 ? (o = 0) : (o = (e.translate - e.minTranslate()) / i),
    o !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit('setTranslate', e.translate, !1);
}
function mF(e) {
  const t = this;
  Ol(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)
    ) && t.update();
}
function hF() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'));
}
const $w = (e, t) => {
  const n = Hr(),
    { params: r, el: o, wrapperEl: i, device: s } = e,
    a = !!r.nested,
    l = t === 'on' ? 'addEventListener' : 'removeEventListener',
    u = t;
  n[l]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: a }),
    o[l]('touchstart', e.onTouchStart, { passive: !1 }),
    o[l]('pointerdown', e.onTouchStart, { passive: !1 }),
    n[l]('touchmove', e.onTouchMove, { passive: !1, capture: a }),
    n[l]('pointermove', e.onTouchMove, { passive: !1, capture: a }),
    n[l]('touchend', e.onTouchEnd, { passive: !0 }),
    n[l]('pointerup', e.onTouchEnd, { passive: !0 }),
    n[l]('pointercancel', e.onTouchEnd, { passive: !0 }),
    n[l]('touchcancel', e.onTouchEnd, { passive: !0 }),
    n[l]('pointerout', e.onTouchEnd, { passive: !0 }),
    n[l]('pointerleave', e.onTouchEnd, { passive: !0 }),
    n[l]('contextmenu', e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      o[l]('click', e.onClick, !0),
    r.cssMode && i[l]('scroll', e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          s.ios || s.android
            ? 'resize orientationchange observerUpdate'
            : 'resize observerUpdate',
          Oy,
          !0
        )
      : e[u]('observerUpdate', Oy, !0),
    o[l]('load', e.onLoad, { capture: !0 });
};
function gF() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = uF.bind(e)),
    (e.onTouchMove = cF.bind(e)),
    (e.onTouchEnd = dF.bind(e)),
    (e.onDocumentTouchStart = hF.bind(e)),
    t.cssMode && (e.onScroll = pF.bind(e)),
    (e.onClick = fF.bind(e)),
    (e.onLoad = mF.bind(e)),
    $w(e, 'on');
}
function vF() {
  $w(this, 'off');
}
var yF = { attachEvents: gF, detachEvents: vF };
const _y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function xF() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: o } = e,
    i = r.breakpoints;
  if (!i || (i && Object.keys(i).length === 0)) return;
  const s = e.getBreakpoint(i, e.params.breakpointsBase, e.el);
  if (!s || e.currentBreakpoint === s) return;
  const l = (s in i ? i[s] : void 0) || e.originalParams,
    u = _y(e, r),
    c = _y(e, l),
    d = e.params.grabCursor,
    f = l.grabCursor,
    v = r.enabled;
  u && !c
    ? (o.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (o.classList.add(`${r.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === 'column') ||
        (!l.grid.fill && r.grid.fill === 'column')) &&
        o.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    d && !f ? e.unsetGrabCursor() : !d && f && e.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach((y) => {
      if (typeof l[y] > 'u') return;
      const x = r[y] && r[y].enabled,
        S = l[y] && l[y].enabled;
      x && !S && e[y].disable(), !x && S && e[y].enable();
    });
  const m = l.direction && l.direction !== r.direction,
    h = r.loop && (l.slidesPerView !== r.slidesPerView || m),
    w = r.loop;
  m && n && e.changeDirection(), Qt(e.params, l);
  const p = e.params.enabled,
    g = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    v && !p ? e.disable() : !v && p && e.enable(),
    (e.currentBreakpoint = s),
    e.emit('_beforeBreakpoint', l),
    n &&
      (h
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !w && g
        ? (e.loopCreate(t), e.updateSlides())
        : w && !g && e.loopDestroy()),
    e.emit('breakpoint', l);
}
function bF(e, t, n) {
  if ((t === void 0 && (t = 'window'), !e || (t === 'container' && !n))) return;
  let r = !1;
  const o = cn(),
    i = t === 'window' ? o.innerHeight : n.clientHeight,
    s = Object.keys(e).map((a) => {
      if (typeof a == 'string' && a.indexOf('@') === 0) {
        const l = parseFloat(a.substr(1));
        return { value: i * l, point: a };
      }
      return { value: a, point: a };
    });
  s.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < s.length; a += 1) {
    const { point: l, value: u } = s[a];
    t === 'window'
      ? o.matchMedia(`(min-width: ${u}px)`).matches && (r = l)
      : u <= n.clientWidth && (r = l);
  }
  return r || 'max';
}
var wF = { setBreakpoint: xF, getBreakpoint: bF };
function SF(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == 'object'
        ? Object.keys(r).forEach((o) => {
            r[o] && n.push(t + o);
          })
        : typeof r == 'string' && n.push(t + r);
    }),
    n
  );
}
function EF() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: o, device: i } = e,
    s = SF(
      [
        'initialized',
        n.direction,
        { 'free-mode': e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          'grid-column': n.grid && n.grid.rows > 1 && n.grid.fill === 'column',
        },
        { android: i.android },
        { ios: i.ios },
        { 'css-mode': n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { 'watch-progress': n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...s), o.classList.add(...t), e.emitContainerClasses();
}
function CF() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var PF = { addClasses: EF, removeClasses: CF };
function TF() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const o = e.slides.length - 1,
      i = e.slidesGrid[o] + e.slidesSizesGrid[o] + r * 2;
    e.isLocked = e.size > i;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
}
var kF = { checkOverflow: TF },
  vp = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: 'swiper',
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function RF(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const o = Object.keys(r)[0],
      i = r[o];
    if (typeof i != 'object' || i === null) {
      Qt(t, r);
      return;
    }
    if (
      (e[o] === !0 && (e[o] = { enabled: !0 }),
      o === 'navigation' &&
        e[o] &&
        e[o].enabled &&
        !e[o].prevEl &&
        !e[o].nextEl &&
        (e[o].auto = !0),
      ['pagination', 'scrollbar'].indexOf(o) >= 0 &&
        e[o] &&
        e[o].enabled &&
        !e[o].el &&
        (e[o].auto = !0),
      !(o in e && 'enabled' in i))
    ) {
      Qt(t, r);
      return;
    }
    typeof e[o] == 'object' && !('enabled' in e[o]) && (e[o].enabled = !0),
      e[o] || (e[o] = { enabled: !1 }),
      Qt(t, r);
  };
}
const Fd = {
    eventsEmitter: PN,
    update: DN,
    translate: WN,
    transition: GN,
    slide: eF,
    loop: oF,
    grabCursor: aF,
    events: yF,
    breakpoints: wF,
    checkOverflow: kF,
    classes: PF,
  },
  zd = {};
let Dc = class ir {
  constructor() {
    let t, n;
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    o.length === 1 &&
    o[0].constructor &&
    Object.prototype.toString.call(o[0]).slice(8, -1) === 'Object'
      ? (n = o[0])
      : ([t, n] = o),
      n || (n = {}),
      (n = Qt({}, n)),
      t && !n.el && (n.el = t);
    const s = Hr();
    if (
      n.el &&
      typeof n.el == 'string' &&
      s.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        s.querySelectorAll(n.el).forEach((d) => {
          const f = Qt({}, n, { el: d });
          c.push(new ir(f));
        }),
        c
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = Mw()),
      (a.device = Aw({ userAgent: n.userAgent })),
      (a.browser = SN()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const l = {};
    a.modules.forEach((c) => {
      c({
        params: n,
        swiper: a,
        extendParams: RF(n, l),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const u = Qt({}, vp, l);
    return (
      (a.params = Qt({}, u, zd, n)),
      (a.originalParams = Qt({}, a.params)),
      (a.passedParams = Qt({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((c) => {
          a.on(c, a.params.on[c]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === 'horizontal';
        },
        isVertical() {
          return a.params.direction === 'vertical';
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit('_swiper'),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      o = Xn(n, `.${r.slideClass}, swiper-slide`),
      i = hp(o[0]);
    return hp(t) - i;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute('data-swiper-slide-index') * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = Xn(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit('enable'));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit('disable'));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const o = r.minTranslate(),
      s = (r.maxTranslate() - o) * t + o;
    r.translateTo(s, typeof n > 'u' ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(' ')
      .filter(
        (r) =>
          r.indexOf('swiper') === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit('_containerClasses', n.join(' '));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ''
      : t.className
          .split(' ')
          .filter(
            (r) =>
              r.indexOf('swiper-slide') === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(' ');
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const o = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: o }), t.emit('_slideClass', r, o);
    }),
      t.emit('_slideClasses', n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = 'current'), n === void 0 && (n = !1);
    const r = this,
      {
        params: o,
        slides: i,
        slidesGrid: s,
        slidesSizesGrid: a,
        size: l,
        activeIndex: u,
      } = r;
    let c = 1;
    if (typeof o.slidesPerView == 'number') return o.slidesPerView;
    if (o.centeredSlides) {
      let d = i[u] ? Math.ceil(i[u].swiperSlideSize) : 0,
        f;
      for (let v = u + 1; v < i.length; v += 1)
        i[v] &&
          !f &&
          ((d += Math.ceil(i[v].swiperSlideSize)), (c += 1), d > l && (f = !0));
      for (let v = u - 1; v >= 0; v -= 1)
        i[v] &&
          !f &&
          ((d += i[v].swiperSlideSize), (c += 1), d > l && (f = !0));
    } else if (t === 'current')
      for (let d = u + 1; d < i.length; d += 1)
        (n ? s[d] + a[d] - s[u] < l : s[d] - s[u] < l) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) s[u] - s[d] < l && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
        s.complete && Ol(t, s);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function o() {
      const s = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let i;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      o(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === 'auto' || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const s = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        i = t.slideTo(s.length - 1, 0, !1, !0);
      } else i = t.slideTo(t.activeIndex, 0, !1, !0);
      i || o();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit('update');
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      o = r.params.direction;
    return (
      t || (t = o === 'horizontal' ? 'vertical' : 'horizontal'),
      t === o ||
        (t !== 'horizontal' && t !== 'vertical') ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${o}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((i) => {
          t === 'vertical' ? (i.style.width = '') : (i.style.height = '');
        }),
        r.emit('changeDirection'),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === 'rtl') ||
      (!n.rtl && t === 'ltr') ||
      ((n.rtl = t === 'rtl'),
      (n.rtlTranslate = n.params.direction === 'horizontal' && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = 'rtl'))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = 'ltr')),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == 'string' && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const o = () =>
      `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`;
    let s =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(o())
        : Xn(r, o())[0];
    return (
      !s &&
        n.params.createElements &&
        ((s = na('div', n.params.wrapperClass)),
        r.append(s),
        Xn(r, `.${n.params.slideClass}`).forEach((a) => {
          s.append(a);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: s,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : s,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === 'rtl' || Ir(r, 'direction') === 'rtl',
        rtlTranslate:
          n.params.direction === 'horizontal' &&
          (r.dir.toLowerCase() === 'rtl' || Ir(r, 'direction') === 'rtl'),
        wrongRTL: Ir(s, 'display') === '-webkit-box',
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit('beforeInit'),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const o = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && o.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      o.forEach((i) => {
        i.complete
          ? Ol(n, i)
          : i.addEventListener('load', (s) => {
              Ol(n, s.target);
            });
      }),
      gp(n),
      (n.initialized = !0),
      gp(n),
      n.emit('init'),
      n.emit('afterInit'),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: o, el: i, wrapperEl: s, slides: a } = r;
    return (
      typeof r.params > 'u' ||
        r.destroyed ||
        (r.emit('beforeDestroy'),
        (r.initialized = !1),
        r.detachEvents(),
        o.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          i.removeAttribute('style'),
          s.removeAttribute('style'),
          a &&
            a.length &&
            a.forEach((l) => {
              l.classList.remove(
                o.slideVisibleClass,
                o.slideFullyVisibleClass,
                o.slideActiveClass,
                o.slideNextClass,
                o.slidePrevClass
              ),
                l.removeAttribute('style'),
                l.removeAttribute('data-swiper-slide-index');
            })),
        r.emit('destroy'),
        Object.keys(r.eventsListeners).forEach((l) => {
          r.off(l);
        }),
        t !== !1 && ((r.el.swiper = null), fN(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Qt(zd, t);
  }
  static get extendedDefaults() {
    return zd;
  }
  static get defaults() {
    return vp;
  }
  static installModule(t) {
    ir.prototype.__modules__ || (ir.prototype.__modules__ = []);
    const n = ir.prototype.__modules__;
    typeof t == 'function' && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => ir.installModule(n)), ir)
      : (ir.installModule(t), ir);
  }
};
Object.keys(Fd).forEach((e) => {
  Object.keys(Fd[e]).forEach((t) => {
    Dc.prototype[t] = Fd[e][t];
  });
});
Dc.use([EN, CN]);
const jw = [
  'eventsPrefix',
  'injectStyles',
  'injectStylesUrls',
  'modules',
  'init',
  '_direction',
  'oneWayMovement',
  'swiperElementNodeName',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  'breakpointsBase',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_loop',
  'loopAdditionalSlides',
  'loopAddBlankSlides',
  'loopPreventsSliding',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideActiveClass',
  'slideVisibleClass',
  'slideFullyVisibleClass',
  'slideNextClass',
  'slidePrevClass',
  'slideBlankClass',
  'wrapperClass',
  'lazyPreloaderClass',
  'lazyPreloadPrevNext',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'hashNavigation',
  'history',
  'keyboard',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  'virtual',
  'zoom',
  'control',
];
function So(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object' &&
    !e.__swiper__
  );
}
function ui(e, t) {
  const n = ['__proto__', 'constructor', 'prototype'];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > 'u'
        ? (e[r] = t[r])
        : So(t[r]) && So(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : ui(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function Dw(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > 'u' &&
      typeof e.navigation.prevEl > 'u'
  );
}
function Lw(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > 'u';
}
function Nw(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > 'u';
}
function Fw(e) {
  e === void 0 && (e = '');
  const t = e
      .split(' ')
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(' ')
  );
}
function OF(e) {
  return (
    e === void 0 && (e = ''),
    e
      ? e.includes('swiper-wrapper')
        ? e
        : `swiper-wrapper ${e}`
      : 'swiper-wrapper'
  );
}
function _F(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: o,
    nextEl: i,
    prevEl: s,
    scrollbarEl: a,
    paginationEl: l,
  } = e;
  const u = o.filter(
      (I) => I !== 'children' && I !== 'direction' && I !== 'wrapperClass'
    ),
    {
      params: c,
      pagination: d,
      navigation: f,
      scrollbar: v,
      virtual: m,
      thumbs: h,
    } = t;
  let w, p, g, y, x, S, P, T;
  o.includes('thumbs') &&
    r.thumbs &&
    r.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (w = !0),
    o.includes('controller') &&
      r.controller &&
      r.controller.control &&
      c.controller &&
      !c.controller.control &&
      (p = !0),
    o.includes('pagination') &&
      r.pagination &&
      (r.pagination.el || l) &&
      (c.pagination || c.pagination === !1) &&
      d &&
      !d.el &&
      (g = !0),
    o.includes('scrollbar') &&
      r.scrollbar &&
      (r.scrollbar.el || a) &&
      (c.scrollbar || c.scrollbar === !1) &&
      v &&
      !v.el &&
      (y = !0),
    o.includes('navigation') &&
      r.navigation &&
      (r.navigation.prevEl || s) &&
      (r.navigation.nextEl || i) &&
      (c.navigation || c.navigation === !1) &&
      f &&
      !f.prevEl &&
      !f.nextEl &&
      (x = !0);
  const _ = (I) => {
    t[I] &&
      (t[I].destroy(),
      I === 'navigation'
        ? (t.isElement && (t[I].prevEl.remove(), t[I].nextEl.remove()),
          (c[I].prevEl = void 0),
          (c[I].nextEl = void 0),
          (t[I].prevEl = void 0),
          (t[I].nextEl = void 0))
        : (t.isElement && t[I].el.remove(),
          (c[I].el = void 0),
          (t[I].el = void 0)));
  };
  o.includes('loop') &&
    t.isElement &&
    (c.loop && !r.loop ? (S = !0) : !c.loop && r.loop ? (P = !0) : (T = !0)),
    u.forEach((I) => {
      if (So(c[I]) && So(r[I]))
        Object.assign(c[I], r[I]),
          (I === 'navigation' || I === 'pagination' || I === 'scrollbar') &&
            'enabled' in r[I] &&
            !r[I].enabled &&
            _(I);
      else {
        const k = r[I];
        (k === !0 || k === !1) &&
        (I === 'navigation' || I === 'pagination' || I === 'scrollbar')
          ? k === !1 && _(I)
          : (c[I] = r[I]);
      }
    }),
    u.includes('controller') &&
      !p &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    o.includes('children') && n && m && c.virtual.enabled
      ? ((m.slides = n), m.update(!0))
      : o.includes('virtual') &&
        m &&
        c.virtual.enabled &&
        (n && (m.slides = n), m.update(!0)),
    o.includes('children') && n && c.loop && (T = !0),
    w && h.init() && h.update(!0),
    p && (t.controller.control = c.controller.control),
    g &&
      (t.isElement &&
        (!l || typeof l == 'string') &&
        ((l = document.createElement('div')),
        l.classList.add('swiper-pagination'),
        l.part.add('pagination'),
        t.el.appendChild(l)),
      l && (c.pagination.el = l),
      d.init(),
      d.render(),
      d.update()),
    y &&
      (t.isElement &&
        (!a || typeof a == 'string') &&
        ((a = document.createElement('div')),
        a.classList.add('swiper-scrollbar'),
        a.part.add('scrollbar'),
        t.el.appendChild(a)),
      a && (c.scrollbar.el = a),
      v.init(),
      v.updateSize(),
      v.setTranslate()),
    x &&
      (t.isElement &&
        ((!i || typeof i == 'string') &&
          ((i = document.createElement('div')),
          i.classList.add('swiper-button-next'),
          (i.innerHTML = t.hostEl.constructor.nextButtonSvg),
          i.part.add('button-next'),
          t.el.appendChild(i)),
        (!s || typeof s == 'string') &&
          ((s = document.createElement('div')),
          s.classList.add('swiper-button-prev'),
          (s.innerHTML = t.hostEl.constructor.prevButtonSvg),
          s.part.add('button-prev'),
          t.el.appendChild(s))),
      i && (c.navigation.nextEl = i),
      s && (c.navigation.prevEl = s),
      f.init(),
      f.update()),
    o.includes('allowSlideNext') && (t.allowSlideNext = r.allowSlideNext),
    o.includes('allowSlidePrev') && (t.allowSlidePrev = r.allowSlidePrev),
    o.includes('direction') && t.changeDirection(r.direction, !1),
    (S || T) && t.loopDestroy(),
    (P || T) && t.loopCreate(),
    t.update();
}
function MF(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    o = {};
  ui(n, vp), (n._emitClasses = !0), (n.init = !1);
  const i = {},
    s = jw.map((l) => l.replace(/_/, '')),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((l) => {
      typeof e[l] > 'u' ||
        (s.indexOf(l) >= 0
          ? So(e[l])
            ? ((n[l] = {}), (o[l] = {}), ui(n[l], e[l]), ui(o[l], e[l]))
            : ((n[l] = e[l]), (o[l] = e[l]))
          : l.search(/on[A-Z]/) === 0 && typeof e[l] == 'function'
          ? t
            ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
            : (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
          : (i[l] = e[l]));
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((l) => {
      n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l];
    }),
    { params: n, passedParams: o, rest: i, events: r }
  );
}
function AF(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: o,
    paginationEl: i,
    scrollbarEl: s,
    swiper: a,
  } = e;
  Dw(t) &&
    r &&
    o &&
    ((a.params.navigation.nextEl = r),
    (a.originalParams.navigation.nextEl = r),
    (a.params.navigation.prevEl = o),
    (a.originalParams.navigation.prevEl = o)),
    Lw(t) &&
      i &&
      ((a.params.pagination.el = i), (a.originalParams.pagination.el = i)),
    Nw(t) &&
      s &&
      ((a.params.scrollbar.el = s), (a.originalParams.scrollbar.el = s)),
    a.init(n);
}
function IF(e, t, n, r, o) {
  const i = [];
  if (!t) return i;
  const s = (l) => {
    i.indexOf(l) < 0 && i.push(l);
  };
  if (n && r) {
    const l = r.map(o),
      u = n.map(o);
    l.join('') !== u.join('') && s('children'),
      r.length !== n.length && s('children');
  }
  return (
    jw
      .filter((l) => l[0] === '_')
      .map((l) => l.replace(/_/, ''))
      .forEach((l) => {
        if (l in e && l in t)
          if (So(e[l]) && So(t[l])) {
            const u = Object.keys(e[l]),
              c = Object.keys(t[l]);
            u.length !== c.length
              ? s(l)
              : (u.forEach((d) => {
                  e[l][d] !== t[l][d] && s(l);
                }),
                c.forEach((d) => {
                  e[l][d] !== t[l][d] && s(l);
                }));
          } else e[l] !== t[l] && s(l);
      }),
    i
  );
}
const $F = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Su() {
  return (
    (Su = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Su.apply(this, arguments)
  );
}
function zw(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes('SwiperSlide')
  );
}
function Bw(e) {
  const t = [];
  return (
    ae.Children.toArray(e).forEach((n) => {
      zw(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          Bw(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function jF(e) {
  const t = [],
    n = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': [],
    };
  return (
    ae.Children.toArray(e).forEach((r) => {
      if (zw(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const o = Bw(r.props.children);
        o.length > 0 ? o.forEach((i) => t.push(i)) : n['container-end'].push(r);
      } else n['container-end'].push(r);
    }),
    { slides: t, slots: n }
  );
}
function DF(e, t, n) {
  if (!n) return null;
  const r = (c) => {
      let d = c;
      return (
        c < 0 ? (d = t.length + c) : d >= t.length && (d = d - t.length), d
      );
    },
    o = e.isHorizontal()
      ? { [e.rtlTranslate ? 'right' : 'left']: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: i, to: s } = n,
    a = e.params.loop ? -t.length : 0,
    l = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = a; c < l; c += 1) c >= i && c <= s && u.push(t[r(c)]);
  return u.map((c, d) =>
    ae.cloneElement(c, {
      swiper: e,
      style: o,
      key: c.props.virtualIndex || c.key || `slide-${d}`,
    })
  );
}
function ks(e, t) {
  return typeof window > 'u' ? b.useEffect(e, t) : b.useLayoutEffect(e, t);
}
const My = b.createContext(null),
  LF = b.createContext(null),
  Ww = b.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = 'div',
        wrapperTag: o = 'div',
        children: i,
        onSwiper: s,
        ...a
      } = e === void 0 ? {} : e,
      l = !1;
    const [u, c] = b.useState('swiper'),
      [d, f] = b.useState(null),
      [v, m] = b.useState(!1),
      h = b.useRef(!1),
      w = b.useRef(null),
      p = b.useRef(null),
      g = b.useRef(null),
      y = b.useRef(null),
      x = b.useRef(null),
      S = b.useRef(null),
      P = b.useRef(null),
      T = b.useRef(null),
      { params: _, passedParams: I, rest: k, events: D } = MF(a),
      { slides: $, slots: A } = jF(i),
      z = () => {
        m(!v);
      };
    Object.assign(_.on, {
      _containerClasses(N, H) {
        c(H);
      },
    });
    const B = () => {
      Object.assign(_.on, D), (l = !0);
      const N = { ..._ };
      if (
        (delete N.wrapperClass,
        (p.current = new Dc(N)),
        p.current.virtual && p.current.params.virtual.enabled)
      ) {
        p.current.virtual.slides = $;
        const H = {
          cache: !1,
          slides: $,
          renderExternal: f,
          renderExternalUpdate: !1,
        };
        ui(p.current.params.virtual, H),
          ui(p.current.originalParams.virtual, H);
      }
    };
    w.current || B(), p.current && p.current.on('_beforeBreakpoint', z);
    const W = () => {
        l ||
          !D ||
          !p.current ||
          Object.keys(D).forEach((N) => {
            p.current.on(N, D[N]);
          });
      },
      M = () => {
        !D ||
          !p.current ||
          Object.keys(D).forEach((N) => {
            p.current.off(N, D[N]);
          });
      };
    b.useEffect(() => () => {
      p.current && p.current.off('_beforeBreakpoint', z);
    }),
      b.useEffect(() => {
        !h.current &&
          p.current &&
          (p.current.emitSlidesClasses(), (h.current = !0));
      }),
      ks(() => {
        if ((t && (t.current = w.current), !!w.current))
          return (
            p.current.destroyed && B(),
            AF(
              {
                el: w.current,
                nextEl: x.current,
                prevEl: S.current,
                paginationEl: P.current,
                scrollbarEl: T.current,
                swiper: p.current,
              },
              _
            ),
            s && !p.current.destroyed && s(p.current),
            () => {
              p.current && !p.current.destroyed && p.current.destroy(!0, !1);
            }
          );
      }, []),
      ks(() => {
        W();
        const N = IF(I, g.current, $, y.current, (H) => H.key);
        return (
          (g.current = I),
          (y.current = $),
          N.length &&
            p.current &&
            !p.current.destroyed &&
            _F({
              swiper: p.current,
              slides: $,
              passedParams: I,
              changedParams: N,
              nextEl: x.current,
              prevEl: S.current,
              scrollbarEl: T.current,
              paginationEl: P.current,
            }),
          () => {
            M();
          }
        );
      }),
      ks(() => {
        $F(p.current);
      }, [d]);
    function O() {
      return _.virtual
        ? DF(p.current, $, d)
        : $.map((N, H) =>
            ae.cloneElement(N, { swiper: p.current, swiperSlideIndex: H })
          );
    }
    return ae.createElement(
      r,
      Su({ ref: w, className: Fw(`${u}${n ? ` ${n}` : ''}`) }, k),
      ae.createElement(
        LF.Provider,
        { value: p.current },
        A['container-start'],
        ae.createElement(
          o,
          { className: OF(_.wrapperClass) },
          A['wrapper-start'],
          O(),
          A['wrapper-end']
        ),
        Dw(_) &&
          ae.createElement(
            ae.Fragment,
            null,
            ae.createElement('div', {
              ref: S,
              className: 'swiper-button-prev',
            }),
            ae.createElement('div', { ref: x, className: 'swiper-button-next' })
          ),
        Nw(_) &&
          ae.createElement('div', { ref: T, className: 'swiper-scrollbar' }),
        Lw(_) &&
          ae.createElement('div', { ref: P, className: 'swiper-pagination' }),
        A['container-end']
      )
    );
  });
Ww.displayName = 'Swiper';
const Vw = b.forwardRef(function (e, t) {
  let {
    tag: n = 'div',
    children: r,
    className: o = '',
    swiper: i,
    zoom: s,
    lazy: a,
    virtualIndex: l,
    swiperSlideIndex: u,
    ...c
  } = e === void 0 ? {} : e;
  const d = b.useRef(null),
    [f, v] = b.useState('swiper-slide'),
    [m, h] = b.useState(!1);
  function w(x, S, P) {
    S === d.current && v(P);
  }
  ks(() => {
    if (
      (typeof u < 'u' && (d.current.swiperSlideIndex = u),
      t && (t.current = d.current),
      !(!d.current || !i))
    ) {
      if (i.destroyed) {
        f !== 'swiper-slide' && v('swiper-slide');
        return;
      }
      return (
        i.on('_slideClass', w),
        () => {
          i && i.off('_slideClass', w);
        }
      );
    }
  }),
    ks(() => {
      i && d.current && !i.destroyed && v(i.getSlideClasses(d.current));
    }, [i]);
  const p = {
      isActive: f.indexOf('swiper-slide-active') >= 0,
      isVisible: f.indexOf('swiper-slide-visible') >= 0,
      isPrev: f.indexOf('swiper-slide-prev') >= 0,
      isNext: f.indexOf('swiper-slide-next') >= 0,
    },
    g = () => (typeof r == 'function' ? r(p) : r),
    y = () => {
      h(!0);
    };
  return ae.createElement(
    n,
    Su(
      {
        ref: d,
        className: Fw(`${f}${o ? ` ${o}` : ''}`),
        'data-swiper-slide-index': l,
        onLoad: y,
      },
      c
    ),
    s &&
      ae.createElement(
        My.Provider,
        { value: p },
        ae.createElement(
          'div',
          {
            className: 'swiper-zoom-container',
            'data-swiper-zoom': typeof s == 'number' ? s : void 0,
          },
          g(),
          a &&
            !m &&
            ae.createElement('div', { className: 'swiper-lazy-preloader' })
        )
      ),
    !s &&
      ae.createElement(
        My.Provider,
        { value: p },
        g(),
        a &&
          !m &&
          ae.createElement('div', { className: 'swiper-lazy-preloader' })
      )
  );
});
Vw.displayName = 'SwiperSlide';
function NF(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((o) => {
        if (!n[o] && n.auto === !0) {
          let i = Xn(e.el, `.${r[o]}`)[0];
          i || ((i = na('div', r[o])), (i.className = r[o]), e.el.append(i)),
            (n[o] = i),
            (t[o] = i);
        }
      }),
    n
  );
}
function FF(e) {
  let { swiper: t, extendParams: n, on: r, emit: o } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled',
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null });
  function i(m) {
    let h;
    return m &&
      typeof m == 'string' &&
      t.isElement &&
      ((h = t.el.querySelector(m)), h)
      ? h
      : (m &&
          (typeof m == 'string' && (h = [...document.querySelectorAll(m)]),
          t.params.uniqueNavElements &&
          typeof m == 'string' &&
          h &&
          h.length > 1 &&
          t.el.querySelectorAll(m).length === 1
            ? (h = t.el.querySelector(m))
            : h && h.length === 1 && (h = h[0])),
        m && !h ? m : h);
  }
  function s(m, h) {
    const w = t.params.navigation;
    (m = Be(m)),
      m.forEach((p) => {
        p &&
          (p.classList[h ? 'add' : 'remove'](...w.disabledClass.split(' ')),
          p.tagName === 'BUTTON' && (p.disabled = h),
          t.params.watchOverflow &&
            t.enabled &&
            p.classList[t.isLocked ? 'add' : 'remove'](w.lockClass));
      });
  }
  function a() {
    const { nextEl: m, prevEl: h } = t.navigation;
    if (t.params.loop) {
      s(h, !1), s(m, !1);
      return;
    }
    s(h, t.isBeginning && !t.params.rewind), s(m, t.isEnd && !t.params.rewind);
  }
  function l(m) {
    m.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), o('navigationPrev'));
  }
  function u(m) {
    m.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), o('navigationNext'));
  }
  function c() {
    const m = t.params.navigation;
    if (
      ((t.params.navigation = NF(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
      )),
      !(m.nextEl || m.prevEl))
    )
      return;
    let h = i(m.nextEl),
      w = i(m.prevEl);
    Object.assign(t.navigation, { nextEl: h, prevEl: w }),
      (h = Be(h)),
      (w = Be(w));
    const p = (g, y) => {
      g && g.addEventListener('click', y === 'next' ? u : l),
        !t.enabled && g && g.classList.add(...m.lockClass.split(' '));
    };
    h.forEach((g) => p(g, 'next')), w.forEach((g) => p(g, 'prev'));
  }
  function d() {
    let { nextEl: m, prevEl: h } = t.navigation;
    (m = Be(m)), (h = Be(h));
    const w = (p, g) => {
      p.removeEventListener('click', g === 'next' ? u : l),
        p.classList.remove(...t.params.navigation.disabledClass.split(' '));
    };
    m.forEach((p) => w(p, 'next')), h.forEach((p) => w(p, 'prev'));
  }
  r('init', () => {
    t.params.navigation.enabled === !1 ? v() : (c(), a());
  }),
    r('toEdge fromEdge lock unlock', () => {
      a();
    }),
    r('destroy', () => {
      d();
    }),
    r('enable disable', () => {
      let { nextEl: m, prevEl: h } = t.navigation;
      if (((m = Be(m)), (h = Be(h)), t.enabled)) {
        a();
        return;
      }
      [...m, ...h]
        .filter((w) => !!w)
        .forEach((w) => w.classList.add(t.params.navigation.lockClass));
    }),
    r('click', (m, h) => {
      let { nextEl: w, prevEl: p } = t.navigation;
      (w = Be(w)), (p = Be(p));
      const g = h.target;
      if (t.params.navigation.hideOnClick && !p.includes(g) && !w.includes(g)) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === g || t.pagination.el.contains(g))
        )
          return;
        let y;
        w.length
          ? (y = w[0].classList.contains(t.params.navigation.hiddenClass))
          : p.length &&
            (y = p[0].classList.contains(t.params.navigation.hiddenClass)),
          o(y === !0 ? 'navigationShow' : 'navigationHide'),
          [...w, ...p]
            .filter((x) => !!x)
            .forEach((x) =>
              x.classList.toggle(t.params.navigation.hiddenClass)
            );
      }
    });
  const f = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(' ')
      ),
        c(),
        a();
    },
    v = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(' ')
      ),
        d();
    };
  Object.assign(t.navigation, {
    enable: f,
    disable: v,
    update: a,
    init: c,
    destroy: d,
  });
}
function Bd(e) {
  return (
    e === void 0 && (e = ''),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, '\\$1')
      .replace(/ /g, '.')}`
  );
}
function zF(e) {
  let { swiper: t, extendParams: n, on: r } = e;
  n({
    a11y: {
      enabled: !0,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null,
    },
  }),
    (t.a11y = { clicked: !1 });
  let o = null,
    i,
    s,
    a = new Date().getTime();
  function l(M) {
    const O = o;
    O.length !== 0 && ((O.innerHTML = ''), (O.innerHTML = M));
  }
  function u(M) {
    const O = () => Math.round(16 * Math.random()).toString(16);
    return 'x'.repeat(M).replace(/x/g, O);
  }
  function c(M) {
    (M = Be(M)),
      M.forEach((O) => {
        O.setAttribute('tabIndex', '0');
      });
  }
  function d(M) {
    (M = Be(M)),
      M.forEach((O) => {
        O.setAttribute('tabIndex', '-1');
      });
  }
  function f(M, O) {
    (M = Be(M)),
      M.forEach((N) => {
        N.setAttribute('role', O);
      });
  }
  function v(M, O) {
    (M = Be(M)),
      M.forEach((N) => {
        N.setAttribute('aria-roledescription', O);
      });
  }
  function m(M, O) {
    (M = Be(M)),
      M.forEach((N) => {
        N.setAttribute('aria-controls', O);
      });
  }
  function h(M, O) {
    (M = Be(M)),
      M.forEach((N) => {
        N.setAttribute('aria-label', O);
      });
  }
  function w(M, O) {
    (M = Be(M)),
      M.forEach((N) => {
        N.setAttribute('id', O);
      });
  }
  function p(M, O) {
    (M = Be(M)),
      M.forEach((N) => {
        N.setAttribute('aria-live', O);
      });
  }
  function g(M) {
    (M = Be(M)),
      M.forEach((O) => {
        O.setAttribute('aria-disabled', !0);
      });
  }
  function y(M) {
    (M = Be(M)),
      M.forEach((O) => {
        O.setAttribute('aria-disabled', !1);
      });
  }
  function x(M) {
    if (M.keyCode !== 13 && M.keyCode !== 32) return;
    const O = t.params.a11y,
      N = M.target;
    if (
      !(
        t.pagination &&
        t.pagination.el &&
        (N === t.pagination.el || t.pagination.el.contains(M.target)) &&
        !M.target.matches(Bd(t.params.pagination.bulletClass))
      )
    ) {
      if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
        const H = Be(t.navigation.prevEl);
        Be(t.navigation.nextEl).includes(N) &&
          ((t.isEnd && !t.params.loop) || t.slideNext(),
          t.isEnd ? l(O.lastSlideMessage) : l(O.nextSlideMessage)),
          H.includes(N) &&
            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
            t.isBeginning ? l(O.firstSlideMessage) : l(O.prevSlideMessage));
      }
      t.pagination &&
        N.matches(Bd(t.params.pagination.bulletClass)) &&
        N.click();
    }
  }
  function S() {
    if (t.params.loop || t.params.rewind || !t.navigation) return;
    const { nextEl: M, prevEl: O } = t.navigation;
    O && (t.isBeginning ? (g(O), d(O)) : (y(O), c(O))),
      M && (t.isEnd ? (g(M), d(M)) : (y(M), c(M)));
  }
  function P() {
    return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
  }
  function T() {
    return P() && t.params.pagination.clickable;
  }
  function _() {
    const M = t.params.a11y;
    P() &&
      t.pagination.bullets.forEach((O) => {
        t.params.pagination.clickable &&
          (c(O),
          t.params.pagination.renderBullet ||
            (f(O, 'button'),
            h(
              O,
              M.paginationBulletMessage.replace(/\{\{index\}\}/, hp(O) + 1)
            ))),
          O.matches(Bd(t.params.pagination.bulletActiveClass))
            ? O.setAttribute('aria-current', 'true')
            : O.removeAttribute('aria-current');
      });
  }
  const I = (M, O, N) => {
      c(M),
        M.tagName !== 'BUTTON' &&
          (f(M, 'button'), M.addEventListener('keydown', x)),
        h(M, N),
        m(M, O);
    },
    k = (M) => {
      s && s !== M.target && !s.contains(M.target) && (i = !0),
        (t.a11y.clicked = !0);
    },
    D = () => {
      (i = !1),
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            t.destroyed || (t.a11y.clicked = !1);
          });
        });
    },
    $ = (M) => {
      a = new Date().getTime();
    },
    A = (M) => {
      if (t.a11y.clicked || new Date().getTime() - a < 100) return;
      const O = M.target.closest(`.${t.params.slideClass}, swiper-slide`);
      if (!O || !t.slides.includes(O)) return;
      s = O;
      const N = t.slides.indexOf(O) === t.activeIndex,
        H =
          t.params.watchSlidesProgress &&
          t.visibleSlides &&
          t.visibleSlides.includes(O);
      N ||
        H ||
        (M.sourceCapabilities && M.sourceCapabilities.firesTouchEvents) ||
        (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
        requestAnimationFrame(() => {
          i || (t.slideTo(t.slides.indexOf(O), 0), (i = !1));
        }));
    },
    z = () => {
      const M = t.params.a11y;
      M.itemRoleDescriptionMessage && v(t.slides, M.itemRoleDescriptionMessage),
        M.slideRole && f(t.slides, M.slideRole);
      const O = t.slides.length;
      M.slideLabelMessage &&
        t.slides.forEach((N, H) => {
          const oe = t.params.loop
              ? parseInt(N.getAttribute('data-swiper-slide-index'), 10)
              : H,
            ee = M.slideLabelMessage
              .replace(/\{\{index\}\}/, oe + 1)
              .replace(/\{\{slidesLength\}\}/, O);
          h(N, ee);
        });
    },
    B = () => {
      const M = t.params.a11y;
      t.el.append(o);
      const O = t.el;
      M.containerRoleDescriptionMessage &&
        v(O, M.containerRoleDescriptionMessage),
        M.containerMessage && h(O, M.containerMessage);
      const N = t.wrapperEl,
        H = M.id || N.getAttribute('id') || `swiper-wrapper-${u(16)}`,
        oe = t.params.autoplay && t.params.autoplay.enabled ? 'off' : 'polite';
      w(N, H), p(N, oe), z();
      let { nextEl: ee, prevEl: he } = t.navigation ? t.navigation : {};
      (ee = Be(ee)),
        (he = Be(he)),
        ee && ee.forEach((de) => I(de, H, M.nextSlideMessage)),
        he && he.forEach((de) => I(de, H, M.prevSlideMessage)),
        T() &&
          Be(t.pagination.el).forEach((ue) => {
            ue.addEventListener('keydown', x);
          }),
        Hr().addEventListener('visibilitychange', $),
        t.el.addEventListener('focus', A, !0),
        t.el.addEventListener('focus', A, !0),
        t.el.addEventListener('pointerdown', k, !0),
        t.el.addEventListener('pointerup', D, !0);
    };
  function W() {
    o && o.remove();
    let { nextEl: M, prevEl: O } = t.navigation ? t.navigation : {};
    (M = Be(M)),
      (O = Be(O)),
      M && M.forEach((H) => H.removeEventListener('keydown', x)),
      O && O.forEach((H) => H.removeEventListener('keydown', x)),
      T() &&
        Be(t.pagination.el).forEach((oe) => {
          oe.removeEventListener('keydown', x);
        }),
      Hr().removeEventListener('visibilitychange', $),
      t.el.removeEventListener('focus', A, !0),
      t.el.removeEventListener('pointerdown', k, !0),
      t.el.removeEventListener('pointerup', D, !0);
  }
  r('beforeInit', () => {
    (o = na('span', t.params.a11y.notificationClass)),
      o.setAttribute('aria-live', 'assertive'),
      o.setAttribute('aria-atomic', 'true');
  }),
    r('afterInit', () => {
      t.params.a11y.enabled && B();
    }),
    r('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
      t.params.a11y.enabled && z();
    }),
    r('fromEdge toEdge afterInit lock unlock', () => {
      t.params.a11y.enabled && S();
    }),
    r('paginationUpdate', () => {
      t.params.a11y.enabled && _();
    }),
    r('destroy', () => {
      t.params.a11y.enabled && W();
    });
}
Dc.use([FF, zF]);
const BF = () =>
    C.jsxs(gn, {
      children: [
        C.jsxs(Et, {
          sx: {
            background: 'url(tata.jpeg) center / cover no-repeat;',
            width: '100%',
            height: '105vh',
            position: 'relative',
          },
          children: [
            C.jsxs(et, {
              color: 'white',
              fontSize: 50,
              width: 170,
              lineHeight: 1,
              sx: { position: 'absolute', left: '20%', top: '20%' },
              children: ['Привет ', C.jsx('b', { children: 'Я Tata' })],
            }),
            C.jsxs(et, {
              color: 'white',
              fontSize: 50,
              width: 170,
              lineHeight: 1,
              sx: { position: 'absolute', top: '42%', right: '15%' },
              children: ['Telegtam ', C.jsx('b', { children: '@ttaattaaa' })],
            }),
          ],
        }),
        C.jsxs(Et, {
          sx: {
            position: 'relative',
            top: -30,
            background:
              'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 2%, rgba(255,255,255,1) 100%)',
            pt: 4,
          },
          children: [
            C.jsx(dr, {
              children: C.jsxs(gn, {
                mt: 4,
                container: !0,
                gap: 2,
                children: [
                  C.jsxs(gn, {
                    container: !0,
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    gap: 4,
                    children: [
                      C.jsx('img', {
                        src: 'tata5.jpeg',
                        alt: 'tata1',
                        style: { width: 400, borderRadius: 16 },
                      }),
                      C.jsxs(gn, {
                        flex: 0.5,
                        container: !0,
                        gap: 2,
                        children: [
                          C.jsx(et, { fontSize: 24, children: 'Добрый день!' }),
                          C.jsx(et, {
                            fontSize: 20,
                            children:
                              'Меня зовут Таня, я фотограф из Красноярска. Занимаюсь фотографией с 2018 года и очень сильно люблю свою работу, потому что создаю шедевры',
                          }),
                          C.jsx(et, {
                            fontSize: 20,
                            children:
                              'На этапе подготовке к съёмке помогаю с выбором образа, реквизита, локации, визажиста',
                          }),
                        ],
                      }),
                    ],
                  }),
                  C.jsxs(gn, {
                    container: !0,
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    gap: 4,
                    children: [
                      C.jsxs(gn, {
                        flex: 0.5,
                        container: !0,
                        gap: 2,
                        children: [
                          C.jsx(et, {
                            fontSize: 20,
                            children:
                              'Фотосессии всегда проходят весело и легко, во время съемки общаюсь с моделями, помогаю с позированием, стараюсь уделить максимум внимания каждому, кто ко мне обратится. Ко всем клиентам свой индивидуальный подход.',
                          }),
                          C.jsx(et, {
                            fontSize: 24,
                            children: 'Остальное скажут за меня мои работы:)',
                          }),
                        ],
                      }),
                      C.jsx('img', {
                        src: 'tata9.jpeg',
                        alt: 'tata1',
                        style: { width: 400, borderRadius: 16 },
                      }),
                    ],
                  }),
                ],
              }),
            }),
            C.jsxs(Et, {
              children: [
                C.jsx(dr, {
                  children: C.jsx(Pd, {
                    to: '/love-story',
                    style: { textDecoration: 'none' },
                    children: C.jsxs(et, {
                      fontWeight: 800,
                      color: 'black',
                      fontSize: 40,
                      sx: { textDecoration: 'none' },
                      children: ['Love-Story', '>'],
                    }),
                  }),
                }),
                C.jsx(Wd, { src: WF }),
              ],
            }),
            C.jsxs(Et, {
              children: [
                C.jsx(dr, {
                  children: C.jsx(Pd, {
                    to: '/reportage',
                    style: { textDecoration: 'none' },
                    children: C.jsxs(et, {
                      fontWeight: 800,
                      color: 'black',
                      fontSize: 40,
                      sx: { textDecoration: 'none' },
                      children: ['Репортажи', '>'],
                    }),
                  }),
                }),
                C.jsx(Wd, { src: UF, width: '620px' }),
              ],
            }),
            C.jsxs(Et, {
              children: [
                C.jsx(dr, {
                  children: C.jsx(Pd, {
                    to: '/portret',
                    style: { textDecoration: 'none' },
                    children: C.jsxs(et, {
                      fontWeight: 800,
                      color: 'black',
                      fontSize: 40,
                      sx: { textDecoration: 'none' },
                      children: ['Портреты', '>'],
                    }),
                  }),
                }),
                C.jsx(Wd, { src: VF }),
              ],
            }),
          ],
        }),
      ],
    }),
  WF = [
    'photo/love-story/3D0A0320.jpg',
    'photo/love-story/3D0A0349.jpg',
    'photo/love-story/_DSC4193-5.jpg',
    'photo/love-story/_DSC4224-10.jpg',
    'photo/love-story/_DSC4240-12.jpg',
    'photo/love-story/_DSC4400-28.jpg',
    'photo/love-story/_DSC6062.jpg',
    'photo/love-story/_DSC6083.jpg',
    'photo/love-story/IMG_8428.jpg',
    'photo/love-story/IMG_8536.jpg',
  ],
  VF = [
    'photo/portret/1K2A8437.jpg',
    'photo/portret/1K2A8484.jpg',
    'photo/portret/1K2A8646.jpg',
    'photo/portret/1K2A8749.jpg',
    'photo/portret/_DSC2538-85.jpg',
    'photo/portret/_DSC2551-75.jpg',
    'photo/portret/_DSC3035-96.jpg',
    'photo/portret/_DSC4472-40.jpg',
    'photo/portret/_DSC4777-11.jpg',
    'photo/portret/_DSC4918-21.jpg',
    'photo/portret/IMG_0561.jpg',
    'photo/portret/IMG_0569.jpg',
    'photo/portret/IMG_0592.jpg',
    'photo/portret/IMG_0631.jpg',
    'photo/portret/IMG_0780.jpg',
    'photo/portret/IMG_2196.jpg',
    'photo/portret/IMG_2221.jpg',
    'photo/portret/IMG_5165.jpg',
    'photo/portret/IMG_5179.jpg',
  ],
  UF = [
    'photo/reportag/1K2A0088.jpg',
    'photo/reportag/1K2A0296.jpg',
    'photo/reportag/1K2A0362.jpg',
    'photo/reportag/1K2A0526.jpg',
    'photo/reportag/1K2A0683.jpg',
    'photo/reportag/1K2A0767.jpg',
    'photo/reportag/1K2A1022-Улучшено-Ум. шума.jpg',
    'photo/reportag/1K2A1340.jpg',
    'photo/reportag/1K2A2838.jpg',
    'photo/reportag/1K2A4291.jpg',
    'photo/reportag/1K2A4427.jpg',
    'photo/reportag/1K2A6298.jpg',
    'photo/reportag/1K2A6548.jpg',
    'photo/reportag/1K2A6670.jpg',
    'photo/reportag/1K2A1022-Улучшено-Ум. шума.jpg',
    'photo/reportag/1K2A8379.jpg',
    'photo/reportag/1K2A7603-Улучшено-Ум. шума.jpg',
    'photo/reportag/1K2A8932.jpg',
    'photo/reportag/1K2A9379.jpg',
    'photo/reportag/1K2A9489.jpg',
    'photo/reportag/1K2A9740.jpg',
    'photo/reportag/1K2A9901.jpg',
    'photo/reportag/3D0A9411.jpg',
    'photo/reportag/DSC04737.jpg',
    'photo/reportag/DSC04945.jpg',
  ],
  Wd = ({ src: e, width: t = '300px' }) =>
    C.jsx(Ww, {
      spaceBetween: 10,
      slidesPerView: 'auto',
      navigation: !0,
      loop: !0,
      pagination: { clickable: !0 },
      children: e.map((n, r) =>
        C.jsx(
          Vw,
          {
            style: { width: t },
            children: C.jsx('img', {
              src: n,
              style: { height: 400, borderRadius: 10 },
            }),
          },
          r
        )
      ),
    }),
  HF = () =>
    C.jsx(hj, {
      children: C.jsx(Lj, {
        children: C.jsxs(lj, {
          children: [
            C.jsx(Lo, { path: '/', element: C.jsx(BF, {}) }),
            C.jsx(Lo, { path: '/photo-process', element: C.jsx(rN, {}) }),
            C.jsx(Lo, { path: '/love-story', element: C.jsx(iN, {}) }),
            C.jsx(Lo, { path: '/portret', element: C.jsx(aN, {}) }),
            C.jsx(Lo, { path: '/reportage', element: C.jsx(uN, {}) }),
          ],
        }),
      }),
    });
Vd.createRoot(document.getElementById('root')).render(
  C.jsx(ae.StrictMode, { children: C.jsx(HF, {}) })
);
