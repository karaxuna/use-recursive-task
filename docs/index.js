!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=e=>{const t=[],n=[];let r=null,o=0;const a=e.map(e=>({iterator:e,busy:!1})),i=()=>n.length===e.length,u=async()=>{if(i())return{done:!0,value:n};if(t.length)return{done:!1,value:t.shift()};const e=new Promise((e,o)=>{r=()=>{i()?e({done:!0,value:n}):t.length?e({done:!1,value:t.shift()}):u().then(e,o)}}),l=((e,t)=>{for(let[n,r]of function*(e,t){let n,r,o;for(n=0;n<e.length;n++)o=e[r=(t+n)%e.length],yield[o,r]}(e,t))if(!n.busy&&!n.done)return{item:n,index:r}})(a,o);return l&&(async(e,i)=>{const u=a[e];u.busy=!0;const{done:l,value:f}=await u.iterator.next(i);if(u.busy=!1,l?(n.push(f),u.done=!0):(t.push(f),o=e),r){let e=r;r=null,e()}})(l.index),await e};return{next:u}},o=async function*(e){if(Array.isArray(e))return yield*await function(e){const t=e.map(e=>o(e));return{[Symbol.asyncIterator]:()=>r(t)}}(e);const t=e.fn.apply(e.context,e.args);if((e=>"function"==typeof e.then)(t)){let n;try{n=await t}catch(t){let n;const r=new Promise(e=>{n=e});return yield{context:e,errs:[t],retry:n},await r,yield*await o(e)}return n}if((e=>"function"==typeof e.next&&"function"==typeof e[Symbol.iterator])(t)){let e;for(;;){let{done:n,value:r}=await t.next(e);if(n)return r;const a=o(r);for(;;){const t=await a.next();if(t.done){e=t.value;break}yield t.value}}}},a=e=>new Promise((t,n)=>{setTimeout(()=>{3!==e?t(e):n("hah!")},1e3)}),i=o({fn:function*(){let e;return console.log("0. data:",e),e=yield{fn:a,args:[1]},console.log("1. data:",e),e=yield{fn:a,args:[2]},console.log("2. data:",e),e=yield[{fn:function*(){return yield{fn:a,args:[3]}}},{fn:function*(){return yield{fn:a,args:[4]}}}],console.log("3, 4. data:",e),5}});!async function(){for(;;){const e=await i.next();if(console.log(e),e.done)break;e.value.errs.length&&confirm("err: "+e.value.errs[0].message+", retry?")&&e.value.retry()}}()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9QYXJhbGxlbEl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImNyZWF0ZVBhcmFsbGVsSXRlcmF0b3IiLCJpdGVyYXRvcnMiLCJxdWV1ZSIsInJlc3VsdHMiLCJ3YXRjaGVyIiwiaW5kZXgiLCJpdGVtcyIsIm1hcCIsIml0ZXJhdG9yIiwiYnVzeSIsImlzRG9uZSIsImxlbmd0aCIsIm5leHQiLCJhc3luYyIsImRvbmUiLCJzaGlmdCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJmcmVlIiwic3RhcnRGcm9tIiwiaXRlbSIsImFycmF5IiwiY3JlYXRlSXRlcmF0b3JTdGFydGluZ0Zyb20iLCJnZXRGcmVlSXRlbVN0YXJ0aW5nRnJvbSIsImFyZyIsInB1c2giLCJfd2F0Y2hlciIsImV4ZWMiLCJjb250ZXh0IiwiQXJyYXkiLCJpc0FycmF5IiwiY29udGV4dHMiLCJhc3luY0l0ZXJhdG9yIiwicGFyYWxsZWwiLCJyZXN1bHQiLCJmbiIsImFwcGx5IiwiYXJncyIsInRhcmdldCIsImlzUHJvbWlzZSIsImRhdGEiLCJlcnIiLCJyZXRyeSIsInVudGlsUmV0cnkiLCJlcnJzIiwiaXNJdGVyYXRvciIsImxhc3QiLCJnZW4iLCJldmVudCIsInRlc3QiLCJzZXRUaW1lb3V0IiwiZ2VuZXJhdG9yIiwiY29uc29sZSIsImxvZyIsInJlcyIsImNvbmZpcm0iLCJtZXNzYWdlIiwiYXNkIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9B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QUMsTUFHaEIsQ0FDQ0YsR0FBSSxZQUNBLFlBQWEsQ0FDVEEsR0FBSWMsRUFDSlosS0FBTSxDQUFDLE9BS25CZSxRQUFRQyxJQUFJLGNBQWViLEdBQ3BCLE1BSWY5QixpQkFDSSxPQUFhLENBQ1QsTUFBTTRDLFFBQVlILEVBQVUxQyxPQUc1QixHQUZBMkMsUUFBUUMsSUFBSUMsR0FFUkEsRUFBSTNDLEtBQ0osTUFHQTJDLEVBQUl4RSxNQUFNOEQsS0FBS3BDLFFBQVUrQyxRQUFRLFFBQVVELEVBQUl4RSxNQUFNOEQsS0FBSyxHQUFHWSxRQUFVLGFBQ3ZFRixFQUFJeEUsTUFBTTRELFNBS3RCZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNvbnN0IGNyZWF0ZUl0ZXJhdG9yU3RhcnRpbmdGcm9tID0gZnVuY3Rpb24gKihhcnJheSwgc3RhcnRGcm9tKSB7XG4gICAgbGV0IGlcbiAgICBsZXQgaW5kZXhcbiAgICBsZXQgaXRlbVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGluZGV4ID0gKHN0YXJ0RnJvbSArIGkpICUgYXJyYXkubGVuZ3RoXG4gICAgICAgIGl0ZW0gPSAgYXJyYXlbaW5kZXhdXG4gICAgICAgIHlpZWxkIFtpdGVtLCBpbmRleF1cbiAgICB9XG59XG5cbmNvbnN0IGdldEZyZWVJdGVtU3RhcnRpbmdGcm9tID0gKGl0ZW1zLCBzdGFydEZyb20pID0+IHtcbiAgICBmb3IgKGxldCBbaXRlbSwgaW5kZXhdIG9mIGNyZWF0ZUl0ZXJhdG9yU3RhcnRpbmdGcm9tKGl0ZW1zLCBzdGFydEZyb20pKSB7XG4gICAgICAgIGlmICghaXRlbS5idXN5ICYmICFpdGVtLmRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUGFyYWxsZWxJdGVyYXRvciA9IChpdGVyYXRvcnMpID0+IHtcbiAgICBjb25zdCBxdWV1ZSA9IFtdXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdXG4gICAgbGV0IHdhdGNoZXIgPSBudWxsXG4gICAgbGV0IGluZGV4ID0gMFxuXG4gICAgY29uc3QgaXRlbXMgPSBpdGVyYXRvcnMubWFwKGl0ZXJhdG9yID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLFxuICAgICAgICAgICAgYnVzeTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpc0RvbmUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmxlbmd0aCA9PT0gaXRlcmF0b3JzLmxlbmd0aFxuICAgIH1cblxuICAgIGNvbnN0IGNhbGwgPSBhc3luYyAoaSwgYXJnKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXVxuICAgICAgICBpdGVtLmJ1c3kgPSB0cnVlXG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZG9uZSxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0gPSBhd2FpdCBpdGVtLml0ZXJhdG9yLm5leHQoYXJnKVxuXG4gICAgICAgIGl0ZW0uYnVzeSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh2YWx1ZSlcbiAgICAgICAgICAgIGl0ZW0uZG9uZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2godmFsdWUpXG4gICAgICAgICAgICBpbmRleCA9IGlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3YXRjaGVyKSB7XG4gICAgICAgICAgICBsZXQgX3dhdGNoZXIgPSB3YXRjaGVyXG4gICAgICAgICAgICB3YXRjaGVyID0gbnVsbFxuICAgICAgICAgICAgX3dhdGNoZXIoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKGlzRG9uZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHF1ZXVlLnNoaWZ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3YXRjaGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc0RvbmUoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0c1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBxdWV1ZS5zaGlmdCgpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCkudGhlbihyZXNvbHZlLCByZWplY3QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGZyZWUgPSBnZXRGcmVlSXRlbVN0YXJ0aW5nRnJvbShpdGVtcywgaW5kZXgpXG5cbiAgICAgICAgaWYgKGZyZWUpIHtcbiAgICAgICAgICAgIGNhbGwoZnJlZS5pbmRleClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhd2FpdCBwcm9taXNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFxuICAgIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVBhcmFsbGVsSXRlcmF0b3IgfSBmcm9tICcuL1BhcmFsbGVsSXRlcmF0b3InXG5cbmNvbnN0IGlzUHJvbWlzZSA9ICh0YXJnZXQpID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHRhcmdldC50aGVuID09PSAnZnVuY3Rpb24nXG59XG5cbmNvbnN0IGlzSXRlcmF0b3IgPSAodGFyZ2V0KSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0YXJnZXQubmV4dCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdGFyZ2V0W1N5bWJvbC5pdGVyYXRvcl0gPT09ICdmdW5jdGlvbidcbn1cblxuY29uc3QgcGFyYWxsZWwgPSBmdW5jdGlvbiAoY29udGV4dHMpIHtcbiAgICBjb25zdCBpdGVyYXRvcnMgPSBjb250ZXh0cy5tYXAoY29udGV4dCA9PiB7XG4gICAgICAgIHJldHVybiBleGVjKGNvbnRleHQpXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlUGFyYWxsZWxJdGVyYXRvcihpdGVyYXRvcnMpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBleGVjID0gYXN5bmMgZnVuY3Rpb24qIChjb250ZXh0KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgICAgcmV0dXJuIHlpZWxkKiBhd2FpdCBwYXJhbGxlbChjb250ZXh0KVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuZm4uYXBwbHkoY29udGV4dC5jb250ZXh0LCBjb250ZXh0LmFyZ3MpXG5cbiAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgbGV0IGRhdGFcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3VsdFxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxldCByZXRyeVxuICAgICAgICAgICAgY29uc3QgdW50aWxSZXRyeSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0cnkgPSByZXNvbHZlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgICBlcnJzOiBbZXJyXSxcbiAgICAgICAgICAgICAgICByZXRyeVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCB1bnRpbFJldHJ5XG4gICAgICAgICAgICByZXR1cm4geWllbGQqIGF3YWl0IGV4ZWMoY29udGV4dClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgaWYgKGlzSXRlcmF0b3IocmVzdWx0KSkge1xuICAgICAgICBsZXQgbGFzdDtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgICAgZG9uZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogY29udGV4dFxuICAgICAgICAgICAgfSA9IGF3YWl0IHJlc3VsdC5uZXh0KGxhc3QpXG5cbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZ2VuID0gZXhlYyhjb250ZXh0KVxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IGF3YWl0IGdlbi5uZXh0KClcblxuICAgICAgICAgICAgICAgIGlmIChldmVudC5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3QgPSBldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBleGVjIH0gZnJvbSAnLi4vbGliJ1xuXG5jb25zdCB0ZXN0ID0gKHJlc3VsdCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gMykge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCdoYWghJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMClcbiAgICB9KVxufVxuXG5jb25zdCBnZW5lcmF0b3IgPSBleGVjKFxuICAgIC8qe1xuICAgICAgICBmbjogZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB7XG4gICAgICAgICAgICAgICAgZm46IHRlc3QsXG4gICAgICAgICAgICAgICAgYXJnczogWzNdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhOicsIGRhdGEpXG4gICAgICAgIH1cbiAgICB9XG4gICAgW3tcbiAgICAgICAgZm46IGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgICAgZm46IHRlc3QsXG4gICAgICAgICAgICAgICAgYXJnczogWzNdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGZuOiBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICAgIGZuOiB0ZXN0LFxuICAgICAgICAgICAgICAgIGFyZ3M6IFs0XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0qL3tcbiAgICBmbjogZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IGRhdGE7XG5cbiAgICAgICAgY29uc29sZS5sb2coJzAuIGRhdGE6JywgZGF0YSlcblxuICAgICAgICBkYXRhID0geWllbGQge1xuICAgICAgICAgICAgZm46IHRlc3QsXG4gICAgICAgICAgICBhcmdzOiBbMV1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCcxLiBkYXRhOicsIGRhdGEpXG5cbiAgICAgICAgZGF0YSA9IHlpZWxkIHtcbiAgICAgICAgICAgIGZuOiB0ZXN0LFxuICAgICAgICAgICAgYXJnczogWzJdXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnMi4gZGF0YTonLCBkYXRhKVxuXG4gICAgICAgIGRhdGEgPSB5aWVsZCBbe1xuICAgICAgICAgICAgZm46IGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgZm46IHRlc3QsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IFszXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZm46IGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgZm46IHRlc3QsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IFs0XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfV1cblxuICAgICAgICBjb25zb2xlLmxvZygnMywgNC4gZGF0YTonLCBkYXRhKVxuICAgICAgICByZXR1cm4gNVxuICAgIH1cbn0pXG5cbmFzeW5jIGZ1bmN0aW9uIGFzZCgpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZW5lcmF0b3IubmV4dCgpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcblxuICAgICAgICBpZiAocmVzLmRvbmUpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzLnZhbHVlLmVycnMubGVuZ3RoICYmIGNvbmZpcm0oJ2VycjogJyArIHJlcy52YWx1ZS5lcnJzWzBdLm1lc3NhZ2UgKyAnLCByZXRyeT8nKSkge1xuICAgICAgICAgICAgcmVzLnZhbHVlLnJldHJ5KClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYXNkKCkiXSwic291cmNlUm9vdCI6IiJ9