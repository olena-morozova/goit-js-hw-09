import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a="feedback-form-state",r={email:"",message:""},t=document.querySelector(".feedback-form");t.querySelector("input");t.querySelector("textarea");t.addEventListener("submit",n);t.addEventListener("input",s);function n(e){e.preventDefault();const m=e.currentTarget;localStorage.removeItem(a),m.reset()}function s(e){console.log(e.target.name,e.target.value.trim()),r[e.target.name]=e.target.value.trim(),localStorage.setItem(a,JSON.stringify(r))}const o=JSON.parse(localStorage.getItem(a)??"{}");t.elements.email.value=o.email||"";t.elements.message.value=o.message||"";
//# sourceMappingURL=2-form.js.map
