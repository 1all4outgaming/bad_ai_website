(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9335],{6405:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return s(3370)}])},3370:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return d}});var t=s(5893),l=s(1664),n=s.n(l),i=s(4593),c=s(1938),r=s(7294),o=s(6154);function d(){let[e,a]=(0,r.useState)(""),[s,l]=(0,r.useState)(""),[d,m]=(0,r.useState)(""),[h,u]=(0,r.useState)(""),[x,g]=(0,r.useState)(),[f,p]=(0,r.useState)(null),b=async t=>{t.preventDefault();try{let t=await o.Z.post("/api/contact/",{name:e,email:s,phone:d,location:h,message:x});200==t.status?(p(!0),a(""),l(""),m(""),u(""),g("")):p(!1)}catch(e){console.error("Error sending email:",e),p(!1)}},w="whatsthebigdata@gmail.com";return(0,t.jsx)(c.Z,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.q,{children:(0,t.jsx)("title",{children:"Get in Touch"})}),(0,t.jsx)("div",{className:"section hero contact wf-section",children:(0,t.jsx)("div",{className:"container-default w-container",children:(0,t.jsxs)("div",{className:"w-layout-grid grid-2-columns contact-v1",children:[(0,t.jsxs)("div",{"data-w-id":"5adaeae2-4d74-a206-9fc8-40a07bc5b264",style:{transform:"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",opacity:1,transformStyle:"preserve-3d"},children:[(0,t.jsx)("h1",{className:"display-1 mg-bottom-12px",children:"Get in Touch "}),(0,t.jsx)("div",{className:"inner-container _310px _100-tablet",children:(0,t.jsx)("p",{className:"paragraph-small mg-bottom-32px mg-bottom-24px-tablet"})}),(0,t.jsx)("div",{className:"heading-h5-size mg-bottom-18px mg-bottom-12px-tablet",children:"Contact information"}),(0,t.jsx)("div",{className:"card pd-28px---20px",children:(0,t.jsx)("div",{className:"inner-container _400px",children:(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"w-layout-grid grid-1-column",children:[(0,t.jsxs)(n(),{href:"mailto:".concat(w),className:"card-link-icon-left w-inline-block",children:[(0,t.jsx)("img",{src:"https://assets.website-files.com/63bed0273cfe5e3f80742329/63bf0366ed42ec18b82406a5_envelope-aggregator-x-webflow-template.svg",alt:""}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-200 color-neutral-600 mg-bottom-2px",children:"Send us an email"}),(0,t.jsx)("div",{className:"text-100 bold color-neutral-800",children:w})]})]}),(0,t.jsxs)(n(),{href:"tel:(415)964-2389",className:"card-link-icon-left w-inline-block",children:[(0,t.jsx)("img",{src:"https://assets.website-files.com/63bed0273cfe5e3f80742329/63bf03bff1d94d8644d2ba9e_phone-call-aggregator-x-webflow-template.svg",alt:""}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-200 color-neutral-600 mg-bottom-2px",children:"Give us a call"}),(0,t.jsx)("div",{className:"text-100 bold color-neutral-800",children:"#"})]})]})]})})})})]}),(0,t.jsx)("div",{"data-w-id":"5adaeae2-4d74-a206-9fc8-40a07bc5b27e",style:{transform:"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",opacity:1,transformStyle:"preserve-3d"},className:"card form-wrapper",children:(0,t.jsxs)("div",{className:"width-100 mg-bottom-0 w-form",children:[(0,t.jsx)("form",{id:"wf-form-Contact-Page-Form",name:"wf-form-Contact-Page-Form","data-name":"Contact Page Form",onSubmit:b,"aria-label":"Contact Page Form",children:(0,t.jsxs)("div",{className:"w-layout-grid grid-2-columns form",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"Name",children:"Full name"}),(0,t.jsx)("input",{value:e,onChange:e=>a(e.target.value),type:"text",className:"input small w-input",maxLength:256,name:"Name","data-name":"Name",placeholder:"What’s your name?",id:"Name",required:!0})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"Email",children:"Email address"}),(0,t.jsx)("input",{value:s,onChange:e=>l(e.target.value),type:"email",className:"input small w-input",maxLength:256,name:"Email","data-name":"Email",placeholder:"What’s your email address?",id:"Email",required:"@"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"Phone",children:"Phone number"}),(0,t.jsx)("input",{value:d,onChange:e=>m(e.target.value),type:"text",className:"input small w-input",maxLength:256,name:"Phone","data-name":"Phone",placeholder:"What’s your phone number?",id:"Phone",required:!0})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"Location",children:"Location"}),(0,t.jsx)("input",{value:h,onChange:e=>u(e.target.value),type:"text",className:"input small w-input",maxLength:256,name:"Location","data-name":"Location",placeholder:"ex. New York, NY",id:"Location",required:!0})]}),(0,t.jsxs)("div",{id:"w-node-_0149d66c-7f52-a714-fcf7-f20a9f86e4cd-4982ce2d",children:[(0,t.jsx)("label",{htmlFor:"Message",children:"Message"}),(0,t.jsx)("textarea",{value:x,onChange:e=>g(e.target.value),id:"Message",name:"Message",maxLength:5e3,"data-name":"Message",placeholder:"Tell your audience about your product...",className:"text-area w-input",defaultValue:"",required:!0})]}),(0,t.jsxs)("div",{id:"w-node-_09107013-e0cc-57d8-f8a2-ed286c7bb090-4982ce2d",className:"contact-btn-wrapper",children:[(0,t.jsx)("input",{type:"submit",defaultValue:"Send Message","data-wait":"Please wait...",id:"w-node-_0149d66c-7f52-a714-fcf7-f20a9f86e4d1-4982ce2d",className:"btn-primary small black w-button"}),(0,t.jsxs)("div",{id:"w-node-e17a5ac2-a546-ec8a-a190-c96123f21241-4982ce2d",className:"social-media-flex",children:[(0,t.jsx)(n(),{href:"https://facebook.com/",rel:"nofollow",target:"_blank",className:"social-icon-square w-inline-block",children:(0,t.jsx)("div",{className:"social-icon-font",children:""})}),(0,t.jsx)(n(),{href:"https://twitter.com/",rel:"nofollow",target:"_blank",className:"social-icon-square w-inline-block",children:(0,t.jsx)("div",{className:"social-icon-font",children:""})}),(0,t.jsx)(n(),{href:"https://www.instagram.com/",rel:"nofollow",target:"_blank",className:"social-icon-square w-inline-block",children:(0,t.jsx)("div",{className:"social-icon-font",children:""})}),(0,t.jsx)(n(),{href:"https://www.linkedin.com/",rel:"nofollow",target:"_blank",className:"social-icon-square w-inline-block",children:(0,t.jsx)("div",{className:"social-icon-font",children:""})})]})]})]})}),!1==f?(0,t.jsx)("div",{children:"Oops! Something went wrong while submitting the form."}):!0==f?(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"line-rounded-icon success-message-check large",children:""}),(0,t.jsx)("h3",{children:"Thank you"}),(0,t.jsxs)("div",{className:"color-neutral-800",children:["Your message has been submitted.",(0,t.jsx)("br",{}),"We will get back to you within 24-48 hours."]})]}):""]})})]})})})]})})}}},function(e){e.O(0,[5675,1664,8519,8764,6154,1938,9774,2888,179],function(){return e(e.s=6405)}),_N_E=e.O()}]);