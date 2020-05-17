(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [6],
  {
    a9c3: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "q-layout",
            { staticClass: "is-boxed has-animations" },
            [
              n("div", { staticClass: "body-wrap boxed-container" }, [
                n("header", { staticClass: "site-header" }, [
                  n("div", { staticClass: "container" }, [
                    n("div", { staticClass: "site-header-inner" }, [
                      n(
                        "div",
                        { staticClass: "row brand header-brand" },
                        [
                          n("h2", { staticClass: "logo-text m-0" }, [
                            t._v("\n                  Blogie\n              "),
                          ]),
                          n("q-space"),
                          n("div", { staticClass: "absolute-right" }, [
                            n(
                              "div",
                              { staticClass: "row justify-around" },
                              [
                                t.isAuthenticated
                                  ? n("q-btn", {
                                      attrs: {
                                        flat: "",
                                        color: "blue",
                                        label: "Dashboard",
                                      },
                                      on: { click: t.toDashboard },
                                    })
                                  : t._e(),
                                t.isAuthenticated
                                  ? t._e()
                                  : n("q-btn", {
                                      attrs: {
                                        flat: "",
                                        color: "blue",
                                        label: "signup",
                                      },
                                      on: {
                                        click: function (e) {
                                          return t.displayPopup(
                                            "registerPopup"
                                          );
                                        },
                                      },
                                    }),
                                t.isAuthenticated
                                  ? t._e()
                                  : n("q-btn", {
                                      attrs: {
                                        flat: "",
                                        color: "blue",
                                        label: "login",
                                      },
                                      on: {
                                        click: function (e) {
                                          return t.displayPopup("loginPopup");
                                        },
                                      },
                                    }),
                                t.isAuthenticated
                                  ? n("q-btn", {
                                      attrs: {
                                        flat: "",
                                        color: "blue",
                                        label: "logout",
                                      },
                                      on: { click: t.logout },
                                    })
                                  : t._e(),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]),
              n("router-view"),
            ],
            1
          );
        },
        a = [],
        c =
          (n("8e6e"),
          n("8a81"),
          n("ac6a"),
          n("cadf"),
          n("06db"),
          n("456d"),
          n("c47a")),
        r = n.n(c),
        s = n("2f62"),
        i = n("4ee7");
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                r()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var d = {
          name: "Layout",
          components: {},
          created: function () {},
          methods: {
            toDashboard: function () {
              window.location.href = "/dashboard";
            },
            displayPopup: function (t) {
              this.$store.commit("articles/SET_POPUP", { popup: t, flag: !0 });
            },
            logout: function () {
              var t = this;
              this.$q
                .dialog({
                  title: "Logout",
                  message: "Are you sure you want to logout?",
                  cancel: !0,
                  persistent: !0,
                })
                .onOk(function () {})
                .onOk(function () {
                  i["a"]
                    .signOut()
                    .then(function () {
                      (t.success = "Logged out successfully"),
                        t.$store.dispatch("articles/fetchUser"),
                        (window.location.href = "/");
                    })
                    .catch(function (e) {
                      t.error = "Unknown error occured.";
                    });
                })
                .onCancel(function () {})
                .onDismiss(function () {});
            },
          },
          computed: l({}, Object(s["b"])("articles", ["isAuthenticated"])),
          data: function () {
            return { success: null, error: null };
          },
        },
        p = d,
        f = (n("c430"), n("2877")),
        b = n("eebe"),
        h = n.n(b),
        g = n("4d5a"),
        O = n("2c91"),
        w = n("9c40"),
        y = Object(f["a"])(p, o, a, !1, null, null, null);
      e["default"] = y.exports;
      h()(y, "components", { QLayout: g["a"], QSpace: O["a"], QBtn: w["a"] });
    },
    c430: function (t, e, n) {
      "use strict";
      var o = n("f76d"),
        a = n.n(o);
      a.a;
    },
    f76d: function (t, e, n) {},
  },
]);