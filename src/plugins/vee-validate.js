import Vue from "vue";

/* (1) max 규칙을 직접 만들어 활용하는 방법 */
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";

// extend("max", (value, params) => {
//   const limit = params[0];
//   if (value && value.length > limit) {
//     return `해당 필드는 ${limit}자를 초과할 수 없습니다.`;
//   }
//   return true;
// });

/* (2) 미리 만들어둔 규칙들을 불러와 활용/응용하는 방법 */
import { max, required, email, numeric, digits, confirmed } from "vee-validate/dist/rules";

extend("max", {
  ...max,
  message: "{_field_} 필드는 {length}자를 초과할 수 없습니다.",
});
extend("required", {
  ...required,
  message: "{_field_} 필드는 반드시 입력해야 합니다.",
});
extend("email", {
  ...email,
  message: "잘못 입력된 이메일 주소입니다.",
});
extend("numeric", {
  ...numeric,
  message: "{_field_} 필드는 숫자로만 구성되어야 합니다.",
});
extend("digits", {
  ...digits,
  message: "{_field_} 필드는 {length}자리여야 합니다.",
});
extend("confirmed", {
  ...confirmed,
  message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
});

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
