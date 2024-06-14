import{_ as b,f as _,a as F,R as h,T as V,b as y,E as g,c as M,d as B,e as C,u as U,j as l,D as I,I as w,g as P,h as H,B as W,i as j,k as $,l as S,m as G,n as X,s as q,o as z,r as J,p as m,q as K,t as Q,v as Y,w as D,x as O,y as Z}from"./index-jGAf6Zt2.js";function ee(t,s){return t.classList?!!s&&t.classList.contains(s):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+s+" ")!==-1}function te(t,s){t.classList?t.classList.add(s):ee(t,s)||(typeof t.className=="string"?t.className=t.className+" "+s:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+s))}function R(t,s){return t.replace(new RegExp("(^|\\s)"+s+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function se(t,s){t.classList?t.classList.remove(s):typeof t.className=="string"?t.className=R(t.className,s):t.setAttribute("class",R(t.className&&t.className.baseVal||"",s))}var ne=function(s,n){return s&&n&&n.split(" ").forEach(function(e){return te(s,e)})},N=function(s,n){return s&&n&&n.split(" ").forEach(function(e){return se(s,e)})},k=function(t){b(s,t);function s(){for(var e,a=arguments.length,d=new Array(a),o=0;o<a;o++)d[o]=arguments[o];return e=t.call.apply(t,[this].concat(d))||this,e.appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(r,i){var c=e.resolveArguments(r,i),p=c[0],u=c[1];e.removeClasses(p,"exit"),e.addClass(p,u?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(r,i)},e.onEntering=function(r,i){var c=e.resolveArguments(r,i),p=c[0],u=c[1],v=u?"appear":"enter";e.addClass(p,v,"active"),e.props.onEntering&&e.props.onEntering(r,i)},e.onEntered=function(r,i){var c=e.resolveArguments(r,i),p=c[0],u=c[1],v=u?"appear":"enter";e.removeClasses(p,v),e.addClass(p,v,"done"),e.props.onEntered&&e.props.onEntered(r,i)},e.onExit=function(r){var i=e.resolveArguments(r),c=i[0];e.removeClasses(c,"appear"),e.removeClasses(c,"enter"),e.addClass(c,"exit","base"),e.props.onExit&&e.props.onExit(r)},e.onExiting=function(r){var i=e.resolveArguments(r),c=i[0];e.addClass(c,"exit","active"),e.props.onExiting&&e.props.onExiting(r)},e.onExited=function(r){var i=e.resolveArguments(r),c=i[0];e.removeClasses(c,"exit"),e.addClass(c,"exit","done"),e.props.onExited&&e.props.onExited(r)},e.resolveArguments=function(r,i){return e.props.nodeRef?[e.props.nodeRef.current,r]:[r,i]},e.getClassNames=function(r){var i=e.props.classNames,c=typeof i=="string",p=c&&i?i+"-":"",u=c?""+p+r:i[r],v=c?u+"-active":i[r+"Active"],L=c?u+"-done":i[r+"Done"];return{baseClassName:u,activeClassName:v,doneClassName:L}},e}var n=s.prototype;return n.addClass=function(a,d,o){var r=this.getClassNames(d)[o+"ClassName"],i=this.getClassNames("enter"),c=i.doneClassName;d==="appear"&&o==="done"&&c&&(r+=" "+c),o==="active"&&a&&_(a),r&&(this.appliedClasses[d][o]=r,ne(a,r))},n.removeClasses=function(a,d){var o=this.appliedClasses[d],r=o.base,i=o.active,c=o.done;this.appliedClasses[d]={},r&&N(a,r),i&&N(a,i),c&&N(a,c)},n.render=function(){var a=this.props;a.classNames;var d=F(a,["classNames"]);return h.createElement(V,y({},d,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},s}(h.Component);k.defaultProps={classNames:""};k.propTypes={};var x,E;function ae(t,s){return!(t===s||h.isValidElement(t)&&h.isValidElement(s)&&t.key!=null&&t.key===s.key)}var f={out:"out-in",in:"in-out"},T=function(s,n,e){return function(){var a;s.props[n]&&(a=s.props)[n].apply(a,arguments),e()}},re=(x={},x[f.out]=function(t){var s=t.current,n=t.changeState;return h.cloneElement(s,{in:!1,onExited:T(s,"onExited",function(){n(g,null)})})},x[f.in]=function(t){var s=t.current,n=t.changeState,e=t.children;return[s,h.cloneElement(e,{in:!0,onEntered:T(e,"onEntered",function(){n(g)})})]},x),oe=(E={},E[f.out]=function(t){var s=t.children,n=t.changeState;return h.cloneElement(s,{in:!0,onEntered:T(s,"onEntered",function(){n(C,h.cloneElement(s,{in:!0}))})})},E[f.in]=function(t){var s=t.current,n=t.children,e=t.changeState;return[h.cloneElement(s,{in:!1,onExited:T(s,"onExited",function(){e(C,h.cloneElement(n,{in:!0}))})}),h.cloneElement(n,{in:!0})]},E),A=function(t){b(s,t);function s(){for(var e,a=arguments.length,d=new Array(a),o=0;o<a;o++)d[o]=arguments[o];return e=t.call.apply(t,[this].concat(d))||this,e.state={status:C,current:null},e.appeared=!1,e.changeState=function(r,i){i===void 0&&(i=e.state.current),e.setState({status:r,current:i})},e}var n=s.prototype;return n.componentDidMount=function(){this.appeared=!0},s.getDerivedStateFromProps=function(a,d){return a.children==null?{current:null}:d.status===g&&a.mode===f.in?{status:g}:d.current&&ae(d.current,a.children)?{status:M}:{current:h.cloneElement(a.children,{in:!0})}},n.render=function(){var a=this.props,d=a.children,o=a.mode,r=this.state,i=r.status,c=r.current,p={children:d,current:c,changeState:this.changeState,status:i},u;switch(i){case g:u=oe[o](p);break;case M:u=re[o](p);break;case C:u=c}return h.createElement(B.Provider,{value:{isMounting:!this.appeared}},u)},s}(h.Component);A.propTypes={};A.defaultProps={mode:f.out};const ie=({saveChanges:t,event:s,close:n})=>{const{debouncedHandleChange:e,saveChangesDisabled:a,onTimePickerChange:d,eventName:o,time:r,nameChanged:i,timeChanged:c}=U(s),p=()=>{const u={...s,name:o,time:r==null?void 0:r.toISOTime()},v=i.current||c.current;t(u,v)};return l.jsxs(l.Fragment,{children:[l.jsx(I,{sx:{m:0,p:2},id:"customized-dialog-title",children:"Edit an event"}),l.jsx(w,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:u=>u.palette.grey[500]},children:"X"}),l.jsx(P,{children:l.jsxs("div",{className:"add-event-dialog__content",children:[l.jsx(H,{sx:{marginBottom:2},id:"standard-basic",label:"Event name",variant:"standard",defaultValue:s.name,required:!0,onChange:e}),l.jsx(W,{value:j.fromISO(s.time),setTime:d})]})}),l.jsx($,{children:l.jsx(S,{autoFocus:!0,onClick:p,disabled:a,children:"Save changes"})})]})};function le(t){return G("MuiDialogContentText",t)}X("MuiDialogContentText",["root"]);const ce=["children","className"],de=t=>{const{classes:s}=t,e=Y({root:["root"]},le,s);return y({},s,e)},ue=q(z,{shouldForwardProp:t=>J(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,s)=>s.root})({}),pe=m.forwardRef(function(s,n){const e=K({props:s,name:"MuiDialogContentText"}),{className:a}=e,d=F(e,ce),o=de(d);return l.jsx(ue,y({component:"p",variant:"body1",color:"text.secondary",ref:n,ownerState:d,className:Q(o.root,a)},e,{classes:o}))}),he=({event:t,switchToEdit:s,close:n})=>{const{dispatchEvents:e}=D(),a=j.fromISO(t.time).toLocaleString(j.TIME_SIMPLE),d=()=>{e({type:O.delete,payload:t})};return l.jsxs(l.Fragment,{children:[l.jsx(I,{id:"event-dialog-title",children:t.name}),l.jsx(w,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:o=>o.palette.grey[500]},children:"X"}),l.jsx(P,{children:l.jsxs(pe,{children:["Event time: ",a]})}),l.jsxs($,{children:[l.jsx(S,{autoFocus:!0,onClick:s,children:"Edit"}),l.jsx(S,{onClick:d,autoFocus:!0,children:"Delete"})]})]})},ve=({event:t,open:s,close:n})=>{const[e,a]=m.useState(!1),{dispatchEvents:d}=D(),o=c=>{c.stopPropagation()};console.log("render EventModal");const r=()=>{a(!0)},i=(c,p)=>{a(!1),p&&d({type:O.edit,payload:c})};return l.jsx(Z,{onClick:o,open:s,onClose:n,"aria-labelledby":"responsive-dialog-title",children:e?l.jsx(ie,{saveChanges:i,event:t,close:n}):l.jsx(he,{event:t,close:n,switchToEdit:r})})},me=m.memo(ve),fe=({data:t})=>{const[s,n]=m.useState(!1),e=d=>{d.stopPropagation(),n(!0)},a=m.useCallback(()=>n(!1),[]);return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"event",onClick:e,children:t.name}),l.jsx(me,{close:a,open:s,event:t})]})},ge=({day:t,openAddEventModal:s,events:n})=>{const e=Array.from(n.get(t.dayId)||[]);return l.jsx(l.Fragment,{children:l.jsxs("div",{className:"calendar-day",onClick:s,children:[t.data.toFormat("dd"),e!=null&&e.length?e.map(a=>l.jsx(fe,{data:a},a.time)):null]})})},xe="yyyy-LL",Ee=(t=j.local())=>{const s=t.toFormat(xe),n=m.useRef({});if(n.current[s])return n.current[s];const e=t.startOf("month"),d=e.weekday-1,o=e.minus({days:d});return n.current[s]=Ce(o),n.current[s]};function Ce(t){const s=[];for(let n=0;n<35;n++){const e=t.plus({days:n}),a={data:e,dayId:e.toISODate()||""};s.push(a)}return s}const je=["Mo","Tu","We","Th","Fr","Sa","Su"],Ne=m.memo(({isForward:t,currentDay:s,handleDayClick:n})=>{const e=m.useRef(null),a=Ee(s),{events:d}=D();return l.jsx(A,{mode:"out-in",children:l.jsx(k,{nodeRef:e,timeout:500,in:!0,appear:!0,classNames:t?"next":"prev",unmountOnExit:!0,children:l.jsxs("div",{ref:e,children:[l.jsx("div",{className:"weekdays",children:je.map(o=>l.jsx("div",{className:"weekday",children:o},o))}),l.jsx("div",{className:"calendar",children:a.map(o=>l.jsx(ge,{events:d,day:o,openAddEventModal:()=>n(o)},o.dayId))})]})},s.toString())})});export{Ne as default};