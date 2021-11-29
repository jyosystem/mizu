const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();
// 月末だとずれる可能性があるため、1日固定で取得
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);
var request;
var cal = document.getElementById('calendar');
//本日の日記をプリセット
Today_year = today.getFullYear();
Today_month = today.getMonth()+1
Today_date = today.getDate()
var todayStr=Today_year+"."+Today_month+"."+Today_date;
presetDiary(todayStr);
window.onload = function () {
    request = new XMLHttpRequest();
    request.open('get', 'syukujitsu.csv', true);
    request.send(null);
    request.onload = function () {
        // 初期表示
        showProcess(today, calendar);
    };
};

var request;
window.onload = function () {
    request = new XMLHttpRequest();
    request.open('get', 'syukujitsu.csv', true);
    request.send(null);
    request.onload = function () {
      // 初期表示
      showProcess(today, calendar);
    };
};
// 初期表示
window.onload = function () {
    showProcess(today, calendar);
};
// 前の月表示
function prev(){
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
}

// 次の月表示
function next(){
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
}

// カレンダー表示
function showProcess(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    document.querySelector('#header').innerHTML = year + "年 " + (month + 1) + "月";

    var calendar = createProcess(year, month);
    document.querySelector('#calendar').innerHTML = calendar;
}

// カレンダー作成
function createProcess(year, month) {
    // 曜日
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);
    // 1行ずつ設定
    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        // 1colum単位で設定
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                // 1行目で1日まで先月の日付を設定
                calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                // 最終行で最終日以降、翌月の日付を設定
                count++;
                calendar += "<td class='disabled'>" + (count - endDate) + "</td>";
            } else {
                // 当月の日付を曜日に照らし合わせて設定
                count++;
                if(year == today.getFullYear()
                  && month == (today.getMonth())
                  && count == today.getDate()){
                    calendar += "<td class='today'>" + count + "</td>";
                } else {
                    var dateStr = year+"."+(month+1)+"."+count;
                    calendar += "<td>" + "<a onclick='presetDiary(\""+dateStr+"\");'>"+count + "</a>"+"</td>";
                }
            }
        }
        calendar += "</tr>";
    }
    return calendar;
}
function checkDate(year, month, day) {
    if(isToday(year, month, day)){
        return {
            isToday: true,
            isHoliday: false,
            holidayName: ""
        };
    }

    var checkHoliday = isHoliday(year, month, day);
    return {
        isToday: false,
        isHoliday: checkHoliday[0],
        holidayName: checkHoliday[1],
    };
}

function isHoliday(year, month, day) {
    var checkDate = year + '/' + (month + 1) + '/' + day;
    var dateList = request.responseText.split('\n');
    // 1行目はヘッダーのため、初期値1で開始
    for (var i = 1; i < dateList.length; i++) {
        if (dateList[i].split(',')[0] === checkDate) {
            return [true, dateList[i].split(',')[1]];
        }
    }
    return [false, ""];
}

//ここから追加
function presetDiary(dateStr){
    console.log(dateStr);
    //ボタンのdata属性にキーの日付部分を指定する
    var button=document.getElementById("button");
    button.setAttribute("data-date",dateStr);
    //日記の日付の表示
    
    var diary_date=document.getElementById("diary_date");
    diary_date.innerHTML=dateStr;

    //localStrageからの日記の本文とタイトルを取得
    // var title=localStorage[dateStr+"_title"]
    // var body=localStorage[dateStr+"_body"]
    var O3_before = localStorage[dateStr+"_O3-before"]
    var O3_after = localStorage[dateStr+"_O3-after"]
    var first_time = localStorage[dateStr+"_first-time"]
    var second_time = localStorage[dateStr+"_second-time"]
    var finish_time = localStorage[dateStr+"_finish-time"]
    var tantosha = localStorage[dateStr+"_tantosha"]
    //たぶ2
    var pure = localStorage[dateStr+"_pure"]
    var haisui = localStorage[dateStr+"_haisui"]
    var P1 = localStorage[dateStr+"_P1"]
    var P2 = localStorage[dateStr+"_P2"]
    var P3_in = localStorage[dateStr+"_P3_in"]
    var P3_out = localStorage[dateStr+"_P3_out"]
    var tds_in = localStorage[dateStr+"_tds_in"]
    var tds_out = localStorage[dateStr+"_tds_out"]
    var temperature = localStorage[dateStr+"_temperature"]
    var production = localStorage[dateStr+"_production"]
    var Cl = localStorage[dateStr+"_Cl"]
    var tantosha2 = localStorage[dateStr+"_tantosha2"]
    //たぶ3
    var p_3 = localStorage[dateStr+"_p-3"]
    var e_3 = localStorage[dateStr+"_e-3"]
    var p_5 = localStorage[dateStr+"_p-5"]

    //日記の入力蘭を取得
    // var diary_title=document.getElementById('diary_title');
    // var diary_body=document.getElementById('diary_body');
    var memo_O3_before=document.getElementById('O3-before');
    var memo_O3_after=document.getElementById('O3-after');
    var memo_first_time = document.getElementById('first-time');
    var memo_second_time = document.getElementById('second-time');
    var memo_finish_time = document.getElementById('finish-time');
    var memo_tantosha = document.getElementById('tantosha');
    //たぶ2
    var memo_pure= document.getElementById('pure');
    var memo_haisui=document.getElementById('haisui');
    var memo_P1= document.getElementById('P1');
    var memo_P2 = document.getElementById('P2');
    var memo_P3_in = document.getElementById('P3_in');
    var memo_P3_out = document.getElementById('P3_out');
    var memo_tds_in = document.getElementById('tds_in');
    var memo_tds_out = document.getElementById('tds_out');
    var memo_temperature = document.getElementById('temperature');
    var memo_production = document.getElementById('production');
    var memo_Cl = document.getElementById('Cl');
    var memo_tantosha2 = document.getElementById('tantosha2');
    //たぶ3
    var memo_e_3 = document.getElementById('e-3');
    var memo_p_3 = document.getElementById('p-3');
    var memo_p_5 = document.getElementById('p-5');


    //日記のデータがあれば表示
    if(O3_before){
        memo_O3_before.value=O3_before;
    }else{
        memo_O3_before.value="";
    }
    // if(title){
    //     diary_title.value=title;
    // }else{
    //     diary_title.value="";
    // }
    // if(body){
    //     diary_body.value=body;
    // }else{
    //     diary_body.value="";
    //}
    if(O3_after){
        memo_O3_after.value=O3_after;
    }else{
        memo_O3_after.value="";
    }
    if(first_time){
        memo_first_time.value = first_time;
    }else{
        memo_first_time.value ="";
    }
    if(second_time){
        memo_second_time.value = second_time;
    }else{
        memo_second_time.value="";
    }
    if(finish_time){
        memo_finish_time.value = finish_time;
    }else{
        memo_finish_time.value="";
    }
    if(tantosha){
        memo_tantosha.value=tantosha;
    }else{
        memo_tantosha.value="";
    }
    //たぶ2
    if(pure){
        memo_pure.value = pure;
    }else{
        memo_pure.value = "";
    }
    if(haisui){
        memo_haisui.value = haisui;
    }else{
        memo_haisui.value = "";
    }
    if(P1){
        memo_P1.value = P1;
    }else{
        memo_P1.value = "";
    }
    if(P2){
        memo_P2.value = P2;
    }else{
        memo_P2.value = "";
    }
    if(P3_in){
        memo_P3_in.value = P3_in;
    }else{
        memo_P3_in.value = "";
    }
    if(P3_out){
        memo_P3_out.value = P3_out;
    }else{
        memo_P3_out.value = "";
    }
    if(tds_in){
        memo_tds_in.value = tds_in;
    }else{
        memo_tds_in.value = "";
    }
    if(tds_out){
        memo_tds_out.value = tds_out;
    }else{
        memo_tds_out.value = "";
    }
    if(production){
        memo_production.value = production;
    }else{
        memo_production.value = "";
    }
    if(temperature){
        memo_temperature.value = temperature;
    }else{
        memo_temperature.value = "";
    }
    if(Cl){
        memo_Cl.value = Cl;
    }else{
        memo_Cl.value = "";
    }
    if(tantosha2){
        memo_tantosha2.value=tantosha2;
    }else{
        memo_tantosha2.value="";
    }
    //たぶ3
    if(e_3){
        memo_e_3.value = e_3;
    }else{
        memo_e_3.value = "";
    }
    if(p_3){
        memo_p_3.value = p_3;
    }else{
        memo_p_3.value = "";
    }
    if(p_5){
        memo_p_5.value = p_5;
    }else{
        memo_p_5.value = "";
    }
}
function onSave(obj){
    //ボタンのdate属性から日付文字列を取得
    var dateStr =obj.getAttribute("data-date");
    //日記の記入欄から入力内容を取得
    // var diary_title=document.getElementById('diary_title').value;
    // var diary_body=document.getElementById('diary_body').value;
    var memo_O3_before =document.getElementById('O3-before').value;
    var memo_O3_after =document.getElementById('O3-after').value;
    var memo_first_time=document.getElementById('first-time').value;
    var memo_second_time=document.getElementById('second-time').value;
    var memo_finish_time=document.getElementById('finish-time').value;
    var memo_tantosha=document.getElementById('tantosha').value;
    //たぶ２
    var memo_pure=document.getElementById('pure').value;
    var memo_haisui=document.getElementById('haisui').value;
    var memo_P1=document.getElementById('P1').value;
    var memo_P2=document.getElementById('P2').value;
    var memo_P3_in=document.getElementById('P3_in').value;
    var memo_P3_out=document.getElementById('P3_out').value;
    var memo_tds_in=document.getElementById('tds_in').value;
    var memo_tds_out=document.getElementById('tds_out').value;
    var memo_temperature=document.getElementById('temperature').value;
    var memo_production=document.getElementById('production').value;
    var memo_Cl=document.getElementById('Cl').value;
    var memo_tantosha2=document.getElementById('tantosha2').value;
    //たぶ3
    var memo_e_3=document.getElementById('e-3').value;
    var memo_p_3=document.getElementById('p-3').value;
    var memo_p_5=document.getElementById('p-5').value;
    //日記を保存
    // localStorage[dateStr+"_title"]=diary_title;
    // localStorage[dateStr+"_body"]=diary_body;
    localStorage[dateStr+"_O3-before"]=memo_O3_before;
    localStorage[dateStr+"_O3-after"]=memo_O3_after;
    localStorage[dateStr+"_first-time"]=memo_first_time;
    localStorage[dateStr+"_second-time"]=memo_second_time;
    localStorage[dateStr+"_finish-time"]=memo_finish_time;
    localStorage[dateStr+"_tantosha"]=memo_tantosha;
    //たぶ２
    localStorage[dateStr+"_pure"]=memo_pure;
    localStorage[dateStr+"_haisui"]=memo_haisui;
    localStorage[dateStr+"_P1"]=memo_P1;
    localStorage[dateStr+"_P2"]=memo_P2;
    localStorage[dateStr+"_P3_in"]=memo_P3_in;
    localStorage[dateStr+"_P3_out"]=memo_P3_out;
    localStorage[dateStr+"_tds_in"]=memo_tds_in;
    localStorage[dateStr+"_tds_out"]=memo_tds_out;
    localStorage[dateStr+"_temperature"]=memo_temperature;
    localStorage[dateStr+"_production"]=memo_production;
    localStorage[dateStr+"_Cl"]=memo_Cl;
    localStorage[dateStr+"_tantosha2"]=memo_tantosha2;
    //たぶ3
    localStorage[dateStr+"_e-3"]=memo_e_3;
    localStorage[dateStr+"_p-3"]=memo_p_3;
    localStorage[dateStr+"_p-5"]=memo_p_5;
    //完了メッセージを表示
    window.alert("日記を投稿しました");
    //ページをリロード
    location.reload();
}
