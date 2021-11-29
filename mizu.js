<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>水</title>
    <link href="mizu.css" rel="stylesheet">
</head>
<body>
    <div class="wrapper">
        <!-- xxxx年xx月を表示 -->
        <h1 id="header"></h1>
    
        <!-- ボタンクリックで月移動 -->
        <div id="next-prev-button">
            <button id="prev" onclick="prev()">‹</button>
            <button id="next" onclick="next()">›</button>
        </div>
        <div class="framebox">
            <div class="calendar-box">
                <div id="calendar"class ="calendar"></div><br>
            </div>
            <div class="diarybox">
                <div id="diary_date"class="diary_date"></div><br>
                <div class="area">
                    <input type="radio" name="tab_name" id="tab1" checked>
                    <label class="tab_class" for="tab1">容器の衛星</label>
                    <div class="content_class">
                    <p>
                        <table border="1" style="border-collapse: collapse">
                        <tr>
                            <th>O3-before</th>
                            <td><input type="number" id="O3-before" step="0.1" placeholder="0.2">mg/L</td>
                        </tr>
                        <tr>
                            <th>O3-after</th>
                            <td><input type="number" id="O3-after" step="0.1" placeholder="0.2">mg/L</td>
                        </tr>
                        <tr>
                            <th>first-time</th>
                            <td><input type="time" id="first-time" placeholder="09:00"></td>
                        </tr>
                        <tr>
                            <th>second-time</th>
                            <td><input type="time" id="second-time" placeholder="10:00"></td>
                        </tr>
                        <tr>
                            <th>finish-time</th>
                            <td><input type="time" id="finish-time" placeholder="15:00"></td>
                        </tr>
                        <tr>
                            <th>担当者</th>
                            <td><input type="text"placeholder="名前"list="name"id ="tantosha"></td>
                            <datalist id = "name"> 
                                <option value="松永　大仙"></option>
                                <option value="松永　彩子"></option>
                            </datalist>
                        </tr>
                        </table>
                    </p>
                    </div>
                    <input type="radio" name="tab_name" id="tab2" >
                    <label class="tab_class" for="tab2">点検項目</label>
                    <div class="content_class">
                    <p>
                        <table border="1" style="border-collapse: collapse">
                        <tr>
                            <th>純水流量</th>
                            <td><input type="number"id="pure" step="0.1" placeholder="7.0">L/分</td>
                        </tr>
                        <tr>
                            <th>排水流量</th>
                            <td><input type="number" id="haisui" step="0.1" placeholder="5.0">L/分</td>
                        </tr>
                        <tr>
                            <th>P1 受水圧力</th>
                            <td><input type="number" id="P1" step="0.01" placeholder="0.24">MPa</td>
                        </tr>
                        <tr>
                            <th>P2 カーボンフィルター出口圧力</th>
                            <td><input type="number" id="P2" step="0.01" placeholder="0.19">MPa</td>
                        </tr>
                        <tr>
                            <th>P3 Ro入力圧力</th>
                            <td><input type="number" id="P3_in" step="0.001" placeholder="0.875">MPa</td>
                        </tr>
                        <tr>
                            <th>P3 Ro出口圧力</th>
                            <td><input type="number" id="P3_out" step="0.01" placeholder="0.85">MPa</td>
                        </tr>
                        <tr>
                            <th>TDS 純度(IN側)</th>
                            <td><input type="number" id="tds_in" step="1" placeholder="125">PPM</td>
                        </tr>
                        <tr>
                            <th>TDS 純水度(OUT側)</th>
                            <td><input type="number" id="tds_out" step="1" placeholder="5">PPM</td>
                        </tr>
                        <tr>
                            <th>水温</th>
                            <td><input type="number" id="temperature" step="1" placeholder="20.5">℃</td>
                        </tr>
                        <tr>
                            <th>生産時間積算計</th>
                            <td><input type="number" id="production" step="0.1" placeholder="0.2">h</td>
                        </tr>
                        <tr>
                            <th>排水の塩素反応</th>
                            <td><select name="example"id="Cl">
                                <option value="有">有</option>
                                <option value="無">無</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>担当者</th>
                            <td><input type="text"placeholder="名前"list="name"id="tantosha2"></td>
                            <datalist id = "name"> 
                                <option value="松永　大仙"></option>
                                <option value="松永　彩子"></option>
                            </datalist>
                        </tr>
                        </table>
                    </p>
                    </div>
                    <input type="radio" name="tab_name" id="tab3" >
                    <label class="tab_class" for="tab3">累計</label>
                    <div class="content_class">
                        <table border="1" style="border-collapse: collapse">
                            <tr>
                                <th>エクアトリアル</th>
                                <td><input type="number"id="e-3" step="1" placeholder="50">本</td>
                            </tr>
                            <tr>
                                <th>ピュア　3G</th>
                                <td><input type="number"id="p-3" step="1" placeholder="120">本</td>
                            </tr>
                            <tr>
                                <th>ピュア　5G</th>
                                <td><input type="number"id="p-5" step="1" placeholder="50">本</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <input type="button"id="button"onclick="onSave(this)"value="保存">
            </div>
                <!-- <input type="text" id = "diary_title"><br><br>
                <textarea id="diary_body" rows="10"cols="18"></textarea><br><br> -->
            
        </div>
        <!-- カレンダー -->
        <div id="calendar"></div>
        <script src="mizu.js"></script>
    </div>
</body>
