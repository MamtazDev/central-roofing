(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return a(2894)}])},2894:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return t}});var l=a(5893),r=a(2969),i=a(1664),c=a.n(i),n=a(1163);function t(){let e=(0,n.useRouter)(),s=s=>{s.preventDefault();let a=s.target,l=a.firstName.value,r=a.lastName.value,i=a.email.value,c=a.phoneNumber.value,n=a.subject.value,t=a.message.value;fetch("http://localhost:8000/api/contactUs/add",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({firstName:l,lastName:r,email:i,phoneNumber:c,subject:n,message:t})}).then(e=>e.json()).then(s=>{200===s.status&&(alert("Thanks for your message"),e.push("/"))})};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.Z,{breadcrumbTitle:"Contact Us",children:(0,l.jsx)("section",{className:"contact-area pt-120 pb-120",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row justify-content-center",children:[(0,l.jsx)("div",{className:"col-xl-6 col-lg-10",children:(0,l.jsxs)("div",{className:"contact-form-wrap","data-background":"/assets/img/images/contact_form_bg.jpg",children:[(0,l.jsx)("h2",{className:"title",children:"Contact With Us"}),(0,l.jsx)("p",{children:"Send us a message and we' ll respond as soon as possible"}),(0,l.jsxs)("form",{className:"contact-form",onSubmit:s,children:[(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsx)("div",{className:"form-grp",children:(0,l.jsx)("input",{id:"firstName",type:"text",placeholder:"First Name*",name:"firstName",required:!0})})}),(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsx)("div",{className:"form-grp",children:(0,l.jsx)("input",{id:"lastName",type:"text",placeholder:"Last Name*",name:"lastName",required:!0})})}),(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsx)("div",{className:"form-grp",children:(0,l.jsx)("input",{id:"email",type:"email",placeholder:"Email Address*",name:"email",required:!0})})}),(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsx)("div",{className:"form-grp",children:(0,l.jsx)("input",{id:"phone",type:"text",placeholder:"Phone Number*",name:"phoneNumber",required:!0})})})]}),(0,l.jsx)("div",{className:"form-grp",children:(0,l.jsx)("input",{id:"subject",type:"text",placeholder:"Subject",name:"subject"})}),(0,l.jsx)("div",{className:"form-grp",children:(0,l.jsx)("textarea",{id:"message",placeholder:"Your Message here",name:"message",required:!0})}),(0,l.jsx)("button",{className:"btn",type:"submit",children:"Send Message"})]})]})}),(0,l.jsxs)("div",{className:"col-xl-6 col-lg-10",children:[(0,l.jsxs)("div",{className:"contact-info-wrap",children:[(0,l.jsx)("h2",{className:"title",children:"Need Any Help?"}),(0,l.jsx)("p",{children:"Call us or message and we' ll respond as soon as possible"}),(0,l.jsxs)("ul",{className:"list-wrap",children:[(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"contact-info-item",children:[(0,l.jsx)("div",{className:"icon",children:(0,l.jsx)("i",{className:"fas fa-phone-alt"})}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)(c(),{href:"tel:0242867618",children:"+(233) 24 286 7618"}),(0,l.jsx)(c(),{href:"tel:0242227018",children:"+(233) 24 222 7018 "}),(0,l.jsx)(c(),{href:"tel:0277440550",children:"+(233) 27 744 0550"})]})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"contact-info-item",children:[(0,l.jsx)("div",{className:"icon",children:(0,l.jsx)("i",{className:"fas fa-map-marker-alt"})}),(0,l.jsx)("div",{className:"content",children:(0,l.jsxs)("p",{children:["Accra Cape Highway Factory Breku Akotsi-Winneba",(0,l.jsx)("br",{}),"GPS Address: CG-0069-872 ",(0,l.jsx)("br",{}),"Showroom: Kasoa -- Ofaakor ",(0,l.jsx)("br",{}),"Showroom: Takoradi -- K. Junctuon"]})})]})})]})]}),(0,l.jsx)("div",{id:"contact-map",children:(0,l.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s",height:570,style:{border:0,width:"100%"},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})]})})})})})}},1163:function(e,s,a){e.exports=a(6885)}},function(e){e.O(0,[121,969,774,888,179],function(){return e(e.s=8105)}),_N_E=e.O()}]);