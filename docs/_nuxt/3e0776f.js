(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{419:function(t,e,r){var content=r(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("d68c5332",content,!0,{sourceMap:!1})},423:function(t,e,r){"use strict";r(419)},424:function(t,e,r){var o=r(23)(!1);o.push([t.i,"#timer{border:5px solid #000}",""]),t.exports=o},435:function(t,e,r){"use strict";r.r(e);var o=r(414),n=r(416);r(57),r(30);var c={data:function(){return{isStarted:!1,isWorking:!1,timerId:-1}},props:["isWorkingMode"],methods:{startTimer:function(){var t=this;this.isWorking||(this.isWorking=!0,this.isStarted=!0,this.timerId=setInterval((function(){t.$store.commit("timer/decreaceTime",{isWorkingMode:t.isWorkingMode,interval:100})}),100))},stopTimer:function(){this.isWorking=!1,clearInterval(this.timerId)},decreaseTime:function(){var t,e;this.leftMilliSeconds>0?this.leftMilliSeconds-=100:(this.stopTimer(),t=new AudioContext,(e=t.createOscillator()).type="sine",e.frequency.value=440,e.connect(t.destination),e.start(),setTimeout((function(){e.stop()}),2e3))}},computed:{startText:function(){return this.isStarted?"Restart":"Start"},formattedTime:function(){var t;t=this.isWorkingMode?this.$store.state.timer.workTime:this.$store.state.timer.restTime;var e=Math.floor(t/1e3/60),s=Math.floor(t/1e3%60);return"".concat(e,":").concat(s<10?"0":"").concat(s)}}},l=(r(423),r(93)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{id:"timer"}},[e("h2",[t._v("Timer")]),t._v(" "),e(o.a,{on:{click:t.startTimer}},[t._v(" "+t._s(t.startText)+" ")]),t._v(" "),e(o.a,{on:{click:t.stopTimer}},[t._v("Stop")]),t._v(" "),t.isWorking?e("p",[t._v(" 作業中 ")]):e("p",[t._v(" 休憩中 ")]),t._v(" "),e("p",[t._v(" "+t._s(t.formattedTime)+" ")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);