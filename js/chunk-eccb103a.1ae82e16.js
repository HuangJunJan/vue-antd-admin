(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eccb103a"],{"6e34":function(e,t,a){"use strict";a("d0ec")},"8d26":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"base-chart"},[e._v(" 深色模式 "),a("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关"},on:{change:e.modeChange}}),a("section",{staticStyle:{"margin-top":"2rem",background:"#fff"}},[a("h2",[e._v("柱状图")]),a("chart-view",{staticClass:"chart-content",attrs:{"chart-option":e.barChartOption,theme:e.theme,height:"500px"}})],1),a("section",{staticStyle:{"margin-top":"2rem",background:"#fff"}},[a("h2",[e._v("折线图")]),a("chart-view",{staticClass:"chart-content",attrs:{"chart-option":e.lineOption,theme:e.theme,height:"500px"}})],1),a("section",{staticStyle:{"margin-top":"2rem",background:"#fff"}},[a("h2",[e._v("饼图")]),a("chart-view",{staticClass:"chart-content",attrs:{"chart-option":e.pieOption,theme:e.theme,height:"500px"}})],1)],1)},i=[],n=(a("a15b"),{name:"BaseChart",data:function(){var e=this.genData(50);return{barChartOption:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Direct",type:"bar",emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Email",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Search Engine",type:"bar",data:[862,1018,964,1026,1679,1600,1570],emphasis:{focus:"series"},markLine:{lineStyle:{type:"dashed"},data:[[{type:"min"},{type:"max"}]]}},{name:"Baidu",type:"bar",barWidth:5,stack:"Search Engine",emphasis:{focus:"series"},data:[620,732,701,734,1090,1130,1120]},{name:"Google",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},data:[120,132,101,134,290,230,220]},{name:"Bing",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},data:[60,72,71,74,190,130,110]},{name:"Others",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},data:[62,82,91,84,109,110,120]}]},lineOption:{title:{text:"Stacked Area Chart"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Email",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]},pieOption:{title:{text:"同名数量统计",subtext:"纯属虚构",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:e.legendData},series:[{name:"姓名",type:"pie",radius:"55%",center:["40%","50%"],data:e.seriesData,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},theme:"light"}},mounted:function(){},created:function(){},methods:{genData:function(e){for(var t=["赵","钱","孙","李","周","吴","郑","王","冯","陈","褚","卫","蒋","沈","韩","杨","朱","秦","尤","许","何","吕","施","张","孔","曹","严","华","金","魏","陶","姜","戚","谢","邹","喻","柏","水","窦","章","云","苏","潘","葛","奚","范","彭","郎","鲁","韦","昌","马","苗","凤","花","方","俞","任","袁","柳","酆","鲍","史","唐","费","廉","岑","薛","雷","贺","倪","汤","滕","殷","罗","毕","郝","邬","安","常","乐","于","时","傅","皮","卞","齐","康","伍","余","元","卜","顾","孟","平","黄","和","穆","萧","尹","姚","邵","湛","汪","祁","毛","禹","狄","米","贝","明","臧","计","伏","成","戴","谈","宋","茅","庞","熊","纪","舒","屈","项","祝","董","梁","杜","阮","蓝","闵","席","季","麻","强","贾","路","娄","危"],a=[],s=[],i=0;i<e;i++){var n=Math.random()>.65?r(4,1)+"·"+r(3,0):r(2,1);a.push(n),s.push({name:n,value:Math.round(1e5*Math.random())})}return{legendData:a,seriesData:s};function r(e,a){for(var s=Math.ceil(Math.random()*e+a),i=[],n=0;n<s;n++)i.push(t[Math.round(Math.random()*t.length-1)]);return i.join("")}},modeChange:function(e){this.theme=e?"dark":"light",console.log(this.theme)}},watch:{}}),r=n,o=(a("6e34"),a("2877")),c=Object(o["a"])(r,s,i,!1,null,"5f3eca5c",null);t["default"]=c.exports},a15b:function(e,t,a){"use strict";var s=a("23e7"),i=a("e330"),n=a("44ad"),r=a("fc6a"),o=a("a640"),c=i([].join),h=n!=Object,d=o("join",",");s({target:"Array",proto:!0,forced:h||!d},{join:function(e){return c(r(this),void 0===e?",":e)}})},d0ec:function(e,t,a){}}]);
//# sourceMappingURL=chunk-eccb103a.1ae82e16.js.map