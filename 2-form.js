import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const m="feedback-form-state",e={email:"",message:""},t=document.querySelector(".feedback-form");t.addEventListener("submit",l);t.addEventListener("input",o);function l(a){if(a.preventDefault(),e.email.trim()===""||e.message.trim()===""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(m),t.reset(),e.email="",e.message=""}function o(a){e[a.target.name]=a.target.value.trim(),e.email||e.message?localStorage.setItem(m,JSON.stringify(e)):localStorage.removeItem(m)}const s=JSON.parse(localStorage.getItem(m)??"{}");t.elements.email.value=s.email||"";t.elements.message.value=s.message||"";e.email=s.email||"";e.message=s.message||"";
//# sourceMappingURL=2-form.js.map
