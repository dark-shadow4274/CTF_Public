import { Q as n, a as _ } from "./QCard.d412a70e.js";
import { Q as y, a as d } from "./QForm.2e0c1198.js";
import {
  v,
  r as c,
  x,
  k as h,
  m as S,
  p as a,
  q as e,
  aA as w,
  ai as i,
  y as Q,
  t as p,
} from "./index.b1cabd98.js";
import { a as I, Q as V } from "./focus-manager.bc47bd22.js";
import "./use-dark.75bb691b.js";
import "./use-key-composition.a64829d4.js";
const b = i(
    "div",
    { class: "text-h6", style: { "text-align": "center" } },
    "Sign In",
    -1
  ),
  k = { style: { "margin-top": "20px" } },
  C = { class: "text-grey-6" },
  N = "/api/v2",
  T = {
    __name: "SignInPage",
    setup(P) {
      const u = I(),
        m = v(),
        s = c(""),
        o = c("");
      async function f() {
        if (o.value && s.value)
          try {
            const l = await fetch(`${N}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: s.value, password: o.value }),
              }),
              t = await l.json();
            l.ok
              ? (localStorage.setItem("userId", t.id),
                localStorage.setItem("userRoles", JSON.stringify(t.roles)),
                m.push("/"))
              : u.notify({ type: "negative", message: t.message });
          } catch (l) {
            console.error("Auethentication error", l),
              u.notify({ type: "negative", message: "API connection error" });
          }
      }
      return (l, t) => {
        const g = x("router-link");
        return (
          h(),
          S(
            V,
            { class: "flex flex-center" },
            {
              default: a(() => [
                e(
                  _,
                  { class: "q-pa-md", style: { width: "350px" } },
                  {
                    default: a(() => [
                      e(n, null, { default: a(() => [b]), _: 1 }),
                      e(n, null, {
                        default: a(() => [
                          e(
                            y,
                            {
                              class: "q-gutter-md",
                              onSubmit: w(f, ["prevent"]),
                            },
                            {
                              default: a(() => [
                                e(
                                  d,
                                  {
                                    filled: "",
                                    modelValue: s.value,
                                    "onUpdate:modelValue":
                                      t[0] || (t[0] = (r) => (s.value = r)),
                                    label: "Username",
                                    type: "text",
                                  },
                                  null,
                                  8,
                                  ["modelValue"]
                                ),
                                e(
                                  d,
                                  {
                                    filled: "",
                                    modelValue: o.value,
                                    "onUpdate:modelValue":
                                      t[1] || (t[1] = (r) => (o.value = r)),
                                    label: "Password",
                                    type: "password",
                                  },
                                  null,
                                  8,
                                  ["modelValue"]
                                ),
                                i("div", k, [
                                  e(
                                    Q,
                                    {
                                      label: "Sign in",
                                      type: "submit",
                                      color: "primary",
                                      class: "full-width",
                                      disabled: !s.value || !o.value,
                                    },
                                    null,
                                    8,
                                    ["disabled"]
                                  ),
                                ]),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }),
                      e(
                        n,
                        { class: "text-center q-pa-none" },
                        {
                          default: a(() => [
                            i("p", C, [
                              p("Not reigistered? "),
                              e(
                                g,
                                { to: { path: "/auth/register" } },
                                {
                                  default: a(() => [p("Create an account")]),
                                  _: 1,
                                }
                              ),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  };
export { T as default };
