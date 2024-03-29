(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(`.canto-tool{font-family:sans-serif;position:relative}.canto-tool__input{padding-left:38px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Crect width='14' height='14' x='5' y='5' stroke='currentColor' stroke-width='2' rx='4'%3E%3C/rect%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634'%3E%3C/path%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.7778 9.33331H13.7867'%3E%3C/path%3E%3C/svg%3E");background-repeat:no-repeat;background-position:10px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.canto-tool__input-holder{position:relative}.canto-tool__input-holder--error .canto-tool__input{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Crect width='14' height='14' x='5' y='5' stroke='rgb(224, 147, 147)' stroke-width='2' rx='4'%3E%3C/rect%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634'%3E%3C/path%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.7778 9.33331H13.7867'%3E%3C/path%3E%3C/svg%3E");background-color:#fff3f6;border-color:#f3e0e0;color:#a95a5a;box-shadow:inset 0 1px 3px #923e3e0d}.canto-tool__input[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.canto-tool__input[contentEditable=true][data-placeholder]:empty:before{opacity:1}.canto-tool__input[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.canto-tool__progress{position:absolute;box-shadow:inset 0 1px 3px #66556b0a;height:100%;width:0;background-color:#f4f5f7;z-index:-1}.canto-tool__progress--loading{-webkit-animation:progress .5s ease-in;-webkit-animation-fill-mode:forwards}.canto-tool__progress--loaded{width:100%}.canto-tool__content{display:block;border-radius:2px;box-shadow:0 0 0 2px #fff;color:initial!important;text-decoration:none!important}.canto-tool__content:after{content:"";clear:both;display:table}.canto-tool__content--rendered{background:#fff;border:1px solid rgba(201,201,204,.48);box-shadow:0 1px 3px #0000001a;border-radius:6px;will-change:filter;animation:link-in .45s 1 cubic-bezier(.215,.61,.355,1)}.canto-tool__content--rendered:hover{box-shadow:0 0 3px #00000029}.canto-tool__src{background-position:center center;background-repeat:no-repeat;background-size:cover;margin:0 0 1.5rem;width:100%;border-radius:3px;float:right}.canto-tool__title{font-size:17px;font-weight:600;line-height:1.5em;margin:0 0 10px}.canto-tool__title+.canto-tool__anchor{margin-top:25px}.canto-tool__label{font-size:.875rem;display:block;margin:0 auto .5rem;max-width:95%;color:#111827}.canto-tool__caption,.canto-tool__alt,.canto-tool__id{margin:0 0 20px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:15px;line-height:1.55em;margin-bottom:1rem;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;width:100%}.canto-tool__caption,.canto-tool__alt{margin:0 auto 2rem;max-width:95%;overflow:scroll;resize:none;border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);-moz-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.canto-tool__anchor{display:block;font-size:15px;line-height:1em;color:#888!important;border:0!important;padding:0!important}@keyframes link-in{0%{filter:blur(5px)}to{filter:none}}.codex-editor--narrow .canto-tool__image{display:none}@-webkit-keyframes progress{0%{width:0}to{width:85%}}`)),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var L = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function P(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
(function(_) {
  var w = function() {
    try {
      return !!Symbol.iterator;
    } catch {
      return !1;
    }
  }, h = w(), v = function(n) {
    var i = {
      next: function() {
        var e = n.shift();
        return { done: e === void 0, value: e };
      }
    };
    return h && (i[Symbol.iterator] = function() {
      return i;
    }), i;
  }, s = function(n) {
    return encodeURIComponent(n).replace(/%20/g, "+");
  }, o = function(n) {
    return decodeURIComponent(String(n).replace(/\+/g, " "));
  }, a = function() {
    var n = function(e) {
      Object.defineProperty(this, "_entries", { writable: !0, value: {} });
      var c = typeof e;
      if (c !== "undefined")
        if (c === "string")
          e !== "" && this._fromString(e);
        else if (e instanceof n) {
          var d = this;
          e.forEach(function(u, f) {
            d.append(f, u);
          });
        } else if (e !== null && c === "object")
          if (Object.prototype.toString.call(e) === "[object Array]")
            for (var t = 0; t < e.length; t++) {
              var y = e[t];
              if (Object.prototype.toString.call(y) === "[object Array]" || y.length !== 2)
                this.append(y[0], y[1]);
              else
                throw new TypeError("Expected [string, any] as entry at index " + t + " of URLSearchParams's input");
            }
          else
            for (var r in e)
              e.hasOwnProperty(r) && this.append(r, e[r]);
        else
          throw new TypeError("Unsupported input's type for URLSearchParams");
    }, i = n.prototype;
    i.append = function(e, c) {
      e in this._entries ? this._entries[e].push(String(c)) : this._entries[e] = [String(c)];
    }, i.delete = function(e) {
      delete this._entries[e];
    }, i.get = function(e) {
      return e in this._entries ? this._entries[e][0] : null;
    }, i.getAll = function(e) {
      return e in this._entries ? this._entries[e].slice(0) : [];
    }, i.has = function(e) {
      return e in this._entries;
    }, i.set = function(e, c) {
      this._entries[e] = [String(c)];
    }, i.forEach = function(e, c) {
      var d;
      for (var t in this._entries)
        if (this._entries.hasOwnProperty(t)) {
          d = this._entries[t];
          for (var y = 0; y < d.length; y++)
            e.call(c, d[y], t, this);
        }
    }, i.keys = function() {
      var e = [];
      return this.forEach(function(c, d) {
        e.push(d);
      }), v(e);
    }, i.values = function() {
      var e = [];
      return this.forEach(function(c) {
        e.push(c);
      }), v(e);
    }, i.entries = function() {
      var e = [];
      return this.forEach(function(c, d) {
        e.push([d, c]);
      }), v(e);
    }, h && (i[Symbol.iterator] = i.entries), i.toString = function() {
      var e = [];
      return this.forEach(function(c, d) {
        e.push(s(d) + "=" + s(c));
      }), e.join("&");
    }, _.URLSearchParams = n;
  }, p = function() {
    try {
      var n = _.URLSearchParams;
      return new n("?a=1").toString() === "a=1" && typeof n.prototype.set == "function";
    } catch {
      return !1;
    }
  };
  p() || a();
  var l = _.URLSearchParams.prototype;
  typeof l.sort != "function" && (l.sort = function() {
    var n = this, i = [];
    this.forEach(function(c, d) {
      i.push([d, c]), n._entries || n.delete(d);
    }), i.sort(function(c, d) {
      return c[0] < d[0] ? -1 : c[0] > d[0] ? 1 : 0;
    }), n._entries && (n._entries = {});
    for (var e = 0; e < i.length; e++)
      this.append(i[e][0], i[e][1]);
  }), typeof l._fromString != "function" && Object.defineProperty(l, "_fromString", {
    enumerable: !1,
    configurable: !1,
    writable: !1,
    value: function(n) {
      if (this._entries)
        this._entries = {};
      else {
        var i = [];
        this.forEach(function(t, y) {
          i.push(y);
        });
        for (var e = 0; e < i.length; e++)
          this.delete(i[e]);
      }
      n = n.replace(/^\?/, "");
      for (var c = n.split("&"), d, e = 0; e < c.length; e++)
        d = c[e].split("="), this.append(
          o(d[0]),
          d.length > 1 ? o(d[1]) : ""
        );
    }
  });
})(
  typeof L < "u" ? L : typeof window < "u" ? window : typeof self < "u" ? self : L
);
(function(_) {
  var w = function() {
    try {
      var s = new _.URL("b", "http://a");
      return s.pathname = "c d", s.href === "http://a/c%20d" && s.searchParams;
    } catch {
      return !1;
    }
  }, h = function() {
    var s = _.URL, o = function(l, n) {
      typeof l != "string" && (l = String(l));
      var i = document, e;
      if (n && (_.location === void 0 || n !== _.location.href)) {
        i = document.implementation.createHTMLDocument(""), e = i.createElement("base"), e.href = n, i.head.appendChild(e);
        try {
          if (e.href.indexOf(n) !== 0)
            throw new Error(e.href);
        } catch (m) {
          throw new Error("URL unable to set base " + n + " due to " + m);
        }
      }
      var c = i.createElement("a");
      c.href = l, e && (i.body.appendChild(c), c.href = c.href);
      var d = i.createElement("input");
      if (d.type = "url", d.value = l, c.protocol === ":" || !/:/.test(c.href) || !d.checkValidity() && !n)
        throw new TypeError("Invalid URL");
      Object.defineProperty(this, "_anchorElement", {
        value: c
      });
      var t = new _.URLSearchParams(this.search), y = !0, r = !0, u = this;
      ["append", "delete", "set"].forEach(function(m) {
        var b = t[m];
        t[m] = function() {
          b.apply(t, arguments), y && (r = !1, u.search = t.toString(), r = !0);
        };
      }), Object.defineProperty(this, "searchParams", {
        value: t,
        enumerable: !0
      });
      var f = void 0;
      Object.defineProperty(this, "_updateSearchParams", {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: function() {
          this.search !== f && (f = this.search, r && (y = !1, this.searchParams._fromString(this.search), y = !0));
        }
      });
    }, a = o.prototype, p = function(l) {
      Object.defineProperty(a, l, {
        get: function() {
          return this._anchorElement[l];
        },
        set: function(n) {
          this._anchorElement[l] = n;
        },
        enumerable: !0
      });
    };
    ["hash", "host", "hostname", "port", "protocol"].forEach(function(l) {
      p(l);
    }), Object.defineProperty(a, "search", {
      get: function() {
        return this._anchorElement.search;
      },
      set: function(l) {
        this._anchorElement.search = l, this._updateSearchParams();
      },
      enumerable: !0
    }), Object.defineProperties(a, {
      toString: {
        get: function() {
          var l = this;
          return function() {
            return l.href;
          };
        }
      },
      href: {
        get: function() {
          return this._anchorElement.href.replace(/\?$/, "");
        },
        set: function(l) {
          this._anchorElement.href = l, this._updateSearchParams();
        },
        enumerable: !0
      },
      pathname: {
        get: function() {
          return this._anchorElement.pathname.replace(/(^\/?)/, "/");
        },
        set: function(l) {
          this._anchorElement.pathname = l;
        },
        enumerable: !0
      },
      origin: {
        get: function() {
          var l = { "http:": 80, "https:": 443, "ftp:": 21 }[this._anchorElement.protocol], n = this._anchorElement.port != l && this._anchorElement.port !== "";
          return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (n ? ":" + this._anchorElement.port : "");
        },
        enumerable: !0
      },
      password: {
        // TODO
        get: function() {
          return "";
        },
        set: function(l) {
        },
        enumerable: !0
      },
      username: {
        // TODO
        get: function() {
          return "";
        },
        set: function(l) {
        },
        enumerable: !0
      }
    }), o.createObjectURL = function(l) {
      return s.createObjectURL.apply(s, arguments);
    }, o.revokeObjectURL = function(l) {
      return s.revokeObjectURL.apply(s, arguments);
    }, _.URL = o;
  };
  if (w() || h(), _.location !== void 0 && !("origin" in _.location)) {
    var v = function() {
      return _.location.protocol + "//" + _.location.hostname + (_.location.port ? ":" + _.location.port : "");
    };
    try {
      Object.defineProperty(_.location, "origin", {
        get: v,
        enumerable: !0
      });
    } catch {
      setInterval(function() {
        _.location.origin = v();
      }, 100);
    }
  }
})(
  typeof L < "u" ? L : typeof window < "u" ? window : typeof self < "u" ? self : L
);
var O = { exports: {} };
(function(_, w) {
  (function(h, v) {
    _.exports = v();
  })(window, function() {
    return function(h) {
      var v = {};
      function s(o) {
        if (v[o])
          return v[o].exports;
        var a = v[o] = { i: o, l: !1, exports: {} };
        return h[o].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
      }
      return s.m = h, s.c = v, s.d = function(o, a, p) {
        s.o(o, a) || Object.defineProperty(o, a, { enumerable: !0, get: p });
      }, s.r = function(o) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
      }, s.t = function(o, a) {
        if (1 & a && (o = s(o)), 8 & a || 4 & a && typeof o == "object" && o && o.__esModule)
          return o;
        var p = /* @__PURE__ */ Object.create(null);
        if (s.r(p), Object.defineProperty(p, "default", { enumerable: !0, value: o }), 2 & a && typeof o != "string")
          for (var l in o)
            s.d(p, l, (function(n) {
              return o[n];
            }).bind(null, l));
        return p;
      }, s.n = function(o) {
        var a = o && o.__esModule ? function() {
          return o.default;
        } : function() {
          return o;
        };
        return s.d(a, "a", a), a;
      }, s.o = function(o, a) {
        return Object.prototype.hasOwnProperty.call(o, a);
      }, s.p = "", s(s.s = 3);
    }([function(h, v) {
      var s;
      s = function() {
        return this;
      }();
      try {
        s = s || new Function("return this")();
      } catch {
        typeof window == "object" && (s = window);
      }
      h.exports = s;
    }, function(h, v, s) {
      (function(o) {
        var a = s(2), p = setTimeout;
        function l() {
        }
        function n(r) {
          if (!(this instanceof n))
            throw new TypeError("Promises must be constructed via new");
          if (typeof r != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], y(r, this);
        }
        function i(r, u) {
          for (; r._state === 3; )
            r = r._value;
          r._state !== 0 ? (r._handled = !0, n._immediateFn(function() {
            var f = r._state === 1 ? u.onFulfilled : u.onRejected;
            if (f !== null) {
              var m;
              try {
                m = f(r._value);
              } catch (b) {
                return void c(u.promise, b);
              }
              e(u.promise, m);
            } else
              (r._state === 1 ? e : c)(u.promise, r._value);
          })) : r._deferreds.push(u);
        }
        function e(r, u) {
          try {
            if (u === r)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (u && (typeof u == "object" || typeof u == "function")) {
              var f = u.then;
              if (u instanceof n)
                return r._state = 3, r._value = u, void d(r);
              if (typeof f == "function")
                return void y((m = f, b = u, function() {
                  m.apply(b, arguments);
                }), r);
            }
            r._state = 1, r._value = u, d(r);
          } catch (g) {
            c(r, g);
          }
          var m, b;
        }
        function c(r, u) {
          r._state = 2, r._value = u, d(r);
        }
        function d(r) {
          r._state === 2 && r._deferreds.length === 0 && n._immediateFn(function() {
            r._handled || n._unhandledRejectionFn(r._value);
          });
          for (var u = 0, f = r._deferreds.length; u < f; u++)
            i(r, r._deferreds[u]);
          r._deferreds = null;
        }
        function t(r, u, f) {
          this.onFulfilled = typeof r == "function" ? r : null, this.onRejected = typeof u == "function" ? u : null, this.promise = f;
        }
        function y(r, u) {
          var f = !1;
          try {
            r(function(m) {
              f || (f = !0, e(u, m));
            }, function(m) {
              f || (f = !0, c(u, m));
            });
          } catch (m) {
            if (f)
              return;
            f = !0, c(u, m);
          }
        }
        n.prototype.catch = function(r) {
          return this.then(null, r);
        }, n.prototype.then = function(r, u) {
          var f = new this.constructor(l);
          return i(this, new t(r, u, f)), f;
        }, n.prototype.finally = a.a, n.all = function(r) {
          return new n(function(u, f) {
            if (!r || r.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var m = Array.prototype.slice.call(r);
            if (m.length === 0)
              return u([]);
            var b = m.length;
            function g(T, C) {
              try {
                if (C && (typeof C == "object" || typeof C == "function")) {
                  var S = C.then;
                  if (typeof S == "function")
                    return void S.call(C, function(j) {
                      g(T, j);
                    }, f);
                }
                m[T] = C, --b == 0 && u(m);
              } catch (j) {
                f(j);
              }
            }
            for (var E = 0; E < m.length; E++)
              g(E, m[E]);
          });
        }, n.resolve = function(r) {
          return r && typeof r == "object" && r.constructor === n ? r : new n(function(u) {
            u(r);
          });
        }, n.reject = function(r) {
          return new n(function(u, f) {
            f(r);
          });
        }, n.race = function(r) {
          return new n(function(u, f) {
            for (var m = 0, b = r.length; m < b; m++)
              r[m].then(u, f);
          });
        }, n._immediateFn = typeof o == "function" && function(r) {
          o(r);
        } || function(r) {
          p(r, 0);
        }, n._unhandledRejectionFn = function(r) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", r);
        }, v.a = n;
      }).call(this, s(5).setImmediate);
    }, function(h, v, s) {
      v.a = function(o) {
        var a = this.constructor;
        return this.then(function(p) {
          return a.resolve(o()).then(function() {
            return p;
          });
        }, function(p) {
          return a.resolve(o()).then(function() {
            return a.reject(p);
          });
        });
      };
    }, function(h, v, s) {
      function o(t) {
        return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
          return typeof y;
        } : function(y) {
          return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
        })(t);
      }
      s(4);
      var a, p, l, n, i, e, c = s(8), d = (p = function(t) {
        return new Promise(function(y, r) {
          t = n(t), t = i(t);
          var u = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          u.open(t.method, t.url), u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var b = t.headers[m];
            u.setRequestHeader(m, b);
          });
          var f = t.ratio;
          u.upload.addEventListener("progress", function(m) {
            var b = Math.round(m.loaded / m.total * 100), g = Math.ceil(b * f / 100);
            t.progress(g);
          }, !1), u.addEventListener("progress", function(m) {
            var b = Math.round(m.loaded / m.total * 100), g = Math.ceil(b * (100 - f) / 100) + f;
            t.progress(g);
          }, !1), u.onreadystatechange = function() {
            if (u.readyState === 4) {
              var m = u.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var b = c.parseHeaders(u.getAllResponseHeaders()), g = { body: m, code: u.status, headers: b };
              u.status === 200 ? y(g) : r(g);
            }
          }, u.send(t.data);
        });
      }, l = function(t) {
        return t.method = "POST", p(t);
      }, n = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string")
          throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string")
          throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && o(t.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(a).includes(t.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(y) {
        }, t.beforeSend = t.beforeSend || function(y) {
        }, t.ratio && typeof t.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, i = function(t) {
        switch (t.method) {
          case "GET":
            var y = e(t.data, a.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + y : t.url + "?" + y;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var r = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || a.JSON;
            }(t);
            (c.isFormData(t.data) || c.isFormElement(t.data)) && (r = a.FORM), t.data = e(t.data, r), r !== d.contentType.FORM && (t.headers["content-type"] = r);
        }
        return t;
      }, e = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case a.URLENCODED:
            return c.urlEncode(t);
          case a.JSON:
            return c.jsonEncode(t);
          case a.FORM:
            return c.formEncode(t);
          default:
            return t;
        }
      }, { contentType: a = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: p, get: function(t) {
        return t.method = "GET", p(t);
      }, post: l, transport: function(t) {
        return t = n(t), c.selectFiles(t).then(function(y) {
          for (var r = new FormData(), u = 0; u < y.length; u++)
            r.append(t.fieldName, y[u], y[u].name);
          return c.isObject(t.data) && Object.keys(t.data).forEach(function(f) {
            var m = t.data[f];
            r.append(f, m);
          }), t.beforeSend && t.beforeSend(y), t.data = r, l(t);
        });
      }, selectFiles: function(t) {
        return delete (t = n(t)).beforeSend, c.selectFiles(t);
      } });
      h.exports = d;
    }, function(h, v, s) {
      s.r(v);
      var o = s(1);
      window.Promise = window.Promise || o.a;
    }, function(h, v, s) {
      (function(o) {
        var a = o !== void 0 && o || typeof self < "u" && self || window, p = Function.prototype.apply;
        function l(n, i) {
          this._id = n, this._clearFn = i;
        }
        v.setTimeout = function() {
          return new l(p.call(setTimeout, a, arguments), clearTimeout);
        }, v.setInterval = function() {
          return new l(p.call(setInterval, a, arguments), clearInterval);
        }, v.clearTimeout = v.clearInterval = function(n) {
          n && n.close();
        }, l.prototype.unref = l.prototype.ref = function() {
        }, l.prototype.close = function() {
          this._clearFn.call(a, this._id);
        }, v.enroll = function(n, i) {
          clearTimeout(n._idleTimeoutId), n._idleTimeout = i;
        }, v.unenroll = function(n) {
          clearTimeout(n._idleTimeoutId), n._idleTimeout = -1;
        }, v._unrefActive = v.active = function(n) {
          clearTimeout(n._idleTimeoutId);
          var i = n._idleTimeout;
          i >= 0 && (n._idleTimeoutId = setTimeout(function() {
            n._onTimeout && n._onTimeout();
          }, i));
        }, s(6), v.setImmediate = typeof self < "u" && self.setImmediate || o !== void 0 && o.setImmediate || this && this.setImmediate, v.clearImmediate = typeof self < "u" && self.clearImmediate || o !== void 0 && o.clearImmediate || this && this.clearImmediate;
      }).call(this, s(0));
    }, function(h, v, s) {
      (function(o, a) {
        (function(p, l) {
          if (!p.setImmediate) {
            var n, i, e, c, d, t = 1, y = {}, r = !1, u = p.document, f = Object.getPrototypeOf && Object.getPrototypeOf(p);
            f = f && f.setTimeout ? f : p, {}.toString.call(p.process) === "[object process]" ? n = function(g) {
              a.nextTick(function() {
                b(g);
              });
            } : function() {
              if (p.postMessage && !p.importScripts) {
                var g = !0, E = p.onmessage;
                return p.onmessage = function() {
                  g = !1;
                }, p.postMessage("", "*"), p.onmessage = E, g;
              }
            }() ? (c = "setImmediate$" + Math.random() + "$", d = function(g) {
              g.source === p && typeof g.data == "string" && g.data.indexOf(c) === 0 && b(+g.data.slice(c.length));
            }, p.addEventListener ? p.addEventListener("message", d, !1) : p.attachEvent("onmessage", d), n = function(g) {
              p.postMessage(c + g, "*");
            }) : p.MessageChannel ? ((e = new MessageChannel()).port1.onmessage = function(g) {
              b(g.data);
            }, n = function(g) {
              e.port2.postMessage(g);
            }) : u && "onreadystatechange" in u.createElement("script") ? (i = u.documentElement, n = function(g) {
              var E = u.createElement("script");
              E.onreadystatechange = function() {
                b(g), E.onreadystatechange = null, i.removeChild(E), E = null;
              }, i.appendChild(E);
            }) : n = function(g) {
              setTimeout(b, 0, g);
            }, f.setImmediate = function(g) {
              typeof g != "function" && (g = new Function("" + g));
              for (var E = new Array(arguments.length - 1), T = 0; T < E.length; T++)
                E[T] = arguments[T + 1];
              var C = { callback: g, args: E };
              return y[t] = C, n(t), t++;
            }, f.clearImmediate = m;
          }
          function m(g) {
            delete y[g];
          }
          function b(g) {
            if (r)
              setTimeout(b, 0, g);
            else {
              var E = y[g];
              if (E) {
                r = !0;
                try {
                  (function(T) {
                    var C = T.callback, S = T.args;
                    switch (S.length) {
                      case 0:
                        C();
                        break;
                      case 1:
                        C(S[0]);
                        break;
                      case 2:
                        C(S[0], S[1]);
                        break;
                      case 3:
                        C(S[0], S[1], S[2]);
                        break;
                      default:
                        C.apply(l, S);
                    }
                  })(E);
                } finally {
                  m(g), r = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? o === void 0 ? this : o : self);
      }).call(this, s(0), s(7));
    }, function(h, v) {
      var s, o, a = h.exports = {};
      function p() {
        throw new Error("setTimeout has not been defined");
      }
      function l() {
        throw new Error("clearTimeout has not been defined");
      }
      function n(f) {
        if (s === setTimeout)
          return setTimeout(f, 0);
        if ((s === p || !s) && setTimeout)
          return s = setTimeout, setTimeout(f, 0);
        try {
          return s(f, 0);
        } catch {
          try {
            return s.call(null, f, 0);
          } catch {
            return s.call(this, f, 0);
          }
        }
      }
      (function() {
        try {
          s = typeof setTimeout == "function" ? setTimeout : p;
        } catch {
          s = p;
        }
        try {
          o = typeof clearTimeout == "function" ? clearTimeout : l;
        } catch {
          o = l;
        }
      })();
      var i, e = [], c = !1, d = -1;
      function t() {
        c && i && (c = !1, i.length ? e = i.concat(e) : d = -1, e.length && y());
      }
      function y() {
        if (!c) {
          var f = n(t);
          c = !0;
          for (var m = e.length; m; ) {
            for (i = e, e = []; ++d < m; )
              i && i[d].run();
            d = -1, m = e.length;
          }
          i = null, c = !1, function(b) {
            if (o === clearTimeout)
              return clearTimeout(b);
            if ((o === l || !o) && clearTimeout)
              return o = clearTimeout, clearTimeout(b);
            try {
              o(b);
            } catch {
              try {
                return o.call(null, b);
              } catch {
                return o.call(this, b);
              }
            }
          }(f);
        }
      }
      function r(f, m) {
        this.fun = f, this.array = m;
      }
      function u() {
      }
      a.nextTick = function(f) {
        var m = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var b = 1; b < arguments.length; b++)
            m[b - 1] = arguments[b];
        e.push(new r(f, m)), e.length !== 1 || c || n(y);
      }, r.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = u, a.addListener = u, a.once = u, a.off = u, a.removeListener = u, a.removeAllListeners = u, a.emit = u, a.prependListener = u, a.prependOnceListener = u, a.listeners = function(f) {
        return [];
      }, a.binding = function(f) {
        throw new Error("process.binding is not supported");
      }, a.cwd = function() {
        return "/";
      }, a.chdir = function(f) {
        throw new Error("process.chdir is not supported");
      }, a.umask = function() {
        return 0;
      };
    }, function(h, v, s) {
      function o(p, l) {
        for (var n = 0; n < l.length; n++) {
          var i = l[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(p, i.key, i);
        }
      }
      var a = s(9);
      h.exports = function() {
        function p() {
          (function(e, c) {
            if (!(e instanceof c))
              throw new TypeError("Cannot call a class as a function");
          })(this, p);
        }
        var l, n, i;
        return l = p, i = [{ key: "urlEncode", value: function(e) {
          return a(e);
        } }, { key: "jsonEncode", value: function(e) {
          return JSON.stringify(e);
        } }, { key: "formEncode", value: function(e) {
          if (this.isFormData(e))
            return e;
          if (this.isFormElement(e))
            return new FormData(e);
          if (this.isObject(e)) {
            var c = new FormData();
            return Object.keys(e).forEach(function(d) {
              var t = e[d];
              c.append(d, t);
            }), c;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(e) {
          return Object.prototype.toString.call(e) === "[object Object]";
        } }, { key: "isFormData", value: function(e) {
          return e instanceof FormData;
        } }, { key: "isFormElement", value: function(e) {
          return e instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(c, d) {
            var t = document.createElement("INPUT");
            t.type = "file", e.multiple && t.setAttribute("multiple", "multiple"), e.accept && t.setAttribute("accept", e.accept), t.style.display = "none", document.body.appendChild(t), t.addEventListener("change", function(y) {
              var r = y.target.files;
              c(r), document.body.removeChild(t);
            }, !1), t.click();
          });
        } }, { key: "parseHeaders", value: function(e) {
          var c = e.trim().split(/[\r\n]+/), d = {};
          return c.forEach(function(t) {
            var y = t.split(": "), r = y.shift(), u = y.join(": ");
            r && (d[r] = u);
          }), d;
        } }], (n = null) && o(l.prototype, n), i && o(l, i), p;
      }();
    }, function(h, v) {
      var s = function(a) {
        return encodeURIComponent(a).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, o = function(a, p, l, n) {
        return p = p || null, l = l || "&", n = n || null, a ? function(i) {
          for (var e = new Array(), c = 0; c < i.length; c++)
            i[c] && e.push(i[c]);
          return e;
        }(Object.keys(a).map(function(i) {
          var e, c, d = i;
          if (n && (d = n + "[" + d + "]"), typeof a[i] == "object" && a[i] !== null)
            e = o(a[i], null, l, d);
          else {
            p && (c = d, d = !isNaN(parseFloat(c)) && isFinite(c) ? p + Number(d) : d);
            var t = a[i];
            t = (t = (t = (t = t === !0 ? "1" : t) === !1 ? "0" : t) === 0 ? "0" : t) || "", e = s(d) + "=" + s(t);
          }
          return e;
        })).join(l).replace(/[!'()*]/g, "") : "";
      };
      h.exports = o;
    }]);
  });
})(O);
var k = O.exports;
const I = /* @__PURE__ */ P(k), R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
class F {
  /**
   * Notify core that read-only mode supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: R,
      title: "Canto"
    };
  }
  /**
   * Allow to press Enter inside the CantoTool input
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * @param {object} options - Tool constructor options fot from Editor.js
   * @param {CantoToolData} options.data - previously saved data
   * @param {CantoToolConfig} options.config - user config for Tool
   * @param {object} options.api - Editor.js API
   * @param {boolean} options.readOnly - read-only mode flag
   */
  constructor({ data: w, config: h, api: v, readOnly: s }) {
    this.api = v, this.readOnly = s, this.config = {
      endpoint: h.endpoint || "",
      headers: h.headers || {}
    }, this.nodes = {
      wrapper: null,
      container: null,
      progress: null,
      input: null,
      inputHolder: null,
      cantoContentId: null,
      cantoSrc: null,
      cantoTitle: null,
      cantoAlt: null,
      cantoAltLabel: null,
      cantoCaption: null,
      cantoCaptionLabel: null
    }, this._data = {
      contentId: "",
      meta: {}
    }, this.data = w;
  }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.nodes.wrapper = this.make("div", this.CSS.baseClass), this.nodes.container = this.make("div", this.CSS.container), this.nodes.inputHolder = this.makeInputHolder(), this.nodes.cantoContent = this.prepareCantoPreview(), Object.keys(this.data.meta).length ? (this.nodes.container.appendChild(this.nodes.cantoContent), this.showCantoPreview(this.data.meta)) : this.nodes.container.appendChild(this.nodes.inputHolder), this.nodes.wrapper.appendChild(this.nodes.container), this.nodes.wrapper;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {CantoToolData}
   */
  save() {
    return this.data;
  }
  /**
   * Validate Block data
   * - check if given contentId is an empty string or not.
   *
   * @public
   *
   * @returns {boolean} false if saved data is incorrect, otherwise true
   */
  validate() {
    return this.data.contentId.trim() !== "";
  }
  /**
   * Stores all Tool's data
   *
   * @param {CantoToolData} data - data to store
   */
  set data(w) {
    this._data = Object.assign({}, {
      contentId: w.contentId || this._data.contentId,
      meta: w.meta || this._data.meta
    });
  }
  /**
   * Return Tool data
   *
   * @returns {CantoToolData}
   */
  get data() {
    return this._data;
  }
  /**
   * @returns {object} - Canto Tool styles
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      /**
       * Tool's classes
       */
      container: "canto-tool",
      inputEl: "canto-tool__input",
      inputHolder: "canto-tool__input-holder",
      inputError: "canto-tool__input-holder--error",
      inputLabel: "canto-tool__label",
      cantoContent: "canto-tool__content",
      cantoContentRendered: "canto-tool__content--rendered",
      cantoSrc: "canto-tool__src",
      cantoTitle: "canto-tool__title",
      cantoAlt: "canto-tool__alt",
      cantoCaption: "canto-tool__caption",
      cantoContentId: "canto-tool__id",
      progress: "canto-tool__progress",
      progressLoading: "canto-tool__progress--loading",
      progressLoaded: "canto-tool__progress--loaded"
    };
  }
  /**
   * Prepare input holder
   *
   * @returns {HTMLElement}
   */
  makeInputHolder() {
    const w = this.make("div", this.CSS.inputHolder);
    return this.nodes.progress = this.make("label", this.CSS.progress), this.nodes.input = this.make("div", [this.CSS.input, this.CSS.inputEl], {
      contentEditable: !this.readOnly
    }), this.nodes.input.dataset.placeholder = this.api.i18n.t("Canto"), this.readOnly || (this.nodes.input.addEventListener("paste", (h) => {
      this.startFetching(h);
    }), this.nodes.input.addEventListener("keydown", (h) => {
      const [v, s] = [13, 65], o = h.ctrlKey || h.metaKey;
      switch (h.keyCode) {
        case v:
          h.preventDefault(), h.stopPropagation(), this.startFetching(h);
          break;
        case s:
          o && this.selectCantoId(h);
          break;
      }
    })), w.appendChild(this.nodes.progress), w.appendChild(this.nodes.input), w;
  }
  /**
   * Activates Canto data fetching by url
   *
   * @param {PasteEvent|KeyboardEvent} event - fetching could be fired by a pase or keydown events
   */
  startFetching(w) {
    let h = this.nodes.input.textContent;
    w.type === "paste" && (h = (w.clipboardData || window.clipboardData).getData("text")), this.removeErrorStyle(), this.fetchCantoData(h);
  }
  /**
   * If previous Canto data fetching failed, remove error styles
   */
  removeErrorStyle() {
    this.nodes.inputHolder.classList.remove(this.CSS.inputError), this.nodes.inputHolder.insertBefore(this.nodes.progress, this.nodes.input);
  }
  /**
   * Select CantoTool input content by CMD+A
   *
   * @param {KeyboardEvent} event - keydown
   */
  selectCantoId(w) {
    w.preventDefault(), w.stopPropagation();
    const h = window.getSelection(), v = new Range(), a = h.anchorNode.parentNode.closest(`.${this.CSS.inputHolder}`).querySelector(`.${this.CSS.inputEl}`);
    v.selectNodeContents(a), h.removeAllRanges(), h.addRange(v);
  }
  /**
   * Prepare canto preview holder
   *
   * @returns {HTMLElement}
   */
  prepareCantoPreview() {
    const w = this.make("div", this.CSS.cantoContent);
    return this.nodes.cantoContentId = this.make("div", this.CSS.cantoContentId), this.nodes.cantoSrc = this.make("img", this.CSS.cantoSrc), this.nodes.cantoTitle = this.make("div", this.CSS.cantoTitle), this.nodes.cantoCaption = this.make("textarea", this.CSS.cantoCaption, {
      rows: 5
    }), this.nodes.cantoAlt = this.make("textarea", this.CSS.cantoAlt, {
      rows: 2
    }), w;
  }
  /**
   * Compose Canto preview from fetched data
   *
   * @param {metaData} meta - canto meta data
   */
  showCantoPreview({ src: w, title: h, caption: v, alt: s }) {
    this.nodes.container.appendChild(this.nodes.cantoContent), w && (this.nodes.cantoSrc.src = w, this.nodes.cantoContent.appendChild(this.nodes.cantoSrc)), s && (this.nodes.cantoAltLabel = this.make("span", this.CSS.inputLabel), this.nodes.cantoAltLabel.textContent = "Alt Text:", this.nodes.cantoContent.appendChild(this.nodes.cantoAltLabel), this.nodes.cantoAlt.textContent = s, this.nodes.cantoContent.appendChild(this.nodes.cantoAlt)), v && (this.nodes.cantoCaptionLabel = this.make("span", this.CSS.inputLabel), this.nodes.cantoCaptionLabel.textContent = "Caption:", this.nodes.cantoContent.appendChild(this.nodes.cantoCaptionLabel), this.nodes.cantoCaption.textContent = v, this.nodes.cantoContent.appendChild(this.nodes.cantoCaption)), this.nodes.cantoContent.classList.add(this.CSS.cantoContentRendered), this.nodes.cantoContent.setAttribute("href", this.data.meta.src), this.nodes.cantoContent.appendChild(this.nodes.cantoContentId);
  }
  /**
   * Show loading progress bar
   */
  showProgress() {
    this.nodes.progress.classList.add(this.CSS.progressLoading);
  }
  /**
   * Hide loading progress bar
   *
   * @returns {Promise<void>}
   */
  hideProgress() {
    return new Promise((w) => {
      this.nodes.progress.classList.remove(this.CSS.progressLoading), this.nodes.progress.classList.add(this.CSS.progressLoaded), setTimeout(w, 500);
    });
  }
  /**
   * If data fetching failed, set input error style
   */
  applyErrorStyle() {
    this.nodes.inputHolder.classList.add(this.CSS.inputError), this.nodes.progress.remove();
  }
  /**
   * Sends to backend pasted url and receives canto data
   *
   * @param {string} contentId - canto content ID
   */
  async fetchCantoData(w) {
    this.showProgress(), this.data = { contentId: w };
    try {
      const { body: h } = await I.get({
        url: this.config.endpoint,
        headers: this.config.headers,
        data: {
          contentId: w
        }
      });
      this.onFetch(h);
    } catch {
      this.fetchingFailed(this.api.i18n.t("Couldn't fetch the canto data"));
    }
  }
  /**
   * Canto data fetching callback
   *
   * @param {UploadResponseFormat} response - backend response
   */
  onFetch(w) {
    if (!w || !w.success) {
      this.fetchingFailed(this.api.i18n.t("Couldn't get this canto data, try the other one"));
      return;
    }
    const h = w.meta, v = this.data.contentId;
    if (this.data = {
      meta: h,
      contentId: v
    }, !h) {
      this.fetchingFailed(this.api.i18n.t("Wrong response format from the server"));
      return;
    }
    console.log(h), this.hideProgress().then(() => {
      this.nodes.inputHolder.remove(), this.showCantoPreview(h);
    });
  }
  /**
   * Handle canto fetching errors
   *
   * @private
   *
   * @param {string} errorMessage - message to explain user what he should do
   */
  fetchingFailed(w) {
    this.api.notifier.show({
      message: w,
      style: "error"
    }), this.applyErrorStyle();
  }
  /**
   * Helper method for elements creation
   *
   * @param {string} tagName - name of creating element
   * @param {string|string[]} [classNames] - list of CSS classes to add
   * @param {object} [attributes] - object with attributes to add
   * @returns {HTMLElement}
   */
  make(w, h = null, v = {}) {
    const s = document.createElement(w);
    Array.isArray(h) ? s.classList.add(...h) : h && s.classList.add(h);
    for (const o in v)
      s[o] = v[o];
    return s;
  }
}
export {
  F as default
};
