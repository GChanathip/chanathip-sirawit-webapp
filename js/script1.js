function calFarmer(){
        var p = parseInt(document.getElementById("p").value);
        var s = parseInt(document.getElementById("s").value);
        var y = parseInt(document.getElementById("y").value);
        var i = parseInt(document.getElementById("i").value);
        var region = parseInt(document.getElementById("region")).value;
        var g = parseInt(document.getElementById("g").value);
        var t = parseInt(document.getElementById("t").value);
        var e = parseInt(document.getElementById("e").value);
        var la = parseInt(document.getElementById("la").value);
        var as = parseInt(document.getElementById("as").value);
        var af = parseInt(document.getElementById("af").value);
        var ja = parseInt(document.getElementById("ja").value);
        var fa = parseInt(document.getElementById("fa").value);
        var fc = parseInt(document.getElementById("fc").value);
        var oa = parseInt(document.getElementById("oa").value);
        var ol = parseInt(document.getElementById("ol").value);
        var oc = parseInt(document.getElementById("oc").value);      
        var wf = parseInt(document.getElementById("wf").value);
        var ws = parseInt(document.getElementById("ws").value);
        var w = parseInt(document.getElementById("w").value);
        

        mc = 0;
        tsa = 0;
        
        if(region == "northEast"){
            mc = 41.37;
            tsa = 27.00;
        }else if(region == "north"){
            mc = 39.58;
            tsa = 25.99;
        }else{             // ภาคกลาง
            mc = 30.88;
            tsa = 29.51;
        }

        //ค่าเสื่อมราคา//
        d = (p-s)/y ;
        sessionStorage.setItem("dd", d);

        //ค่าดอกเบี้ย//
        it = ((p-s)/2)*(i/100)
        sessionStorage.setItem("itt", it);

        //ค่าโรงเก็บเครื่อง//
        sessionStorage.setItem("gg", g);

        //ค่าภาษี/ประกัน//
        sessionStorage.setItem("tt", t);

        //ค่าใช้จ่ายอื่นๆ//
        sessionStorage.setItem("ee", e);

        //รวมค่าใช้จ่ายคงที่//
        sum = d+it+g+t+e
        sessionStorage.setItem("summ", sum);

        //ค่าคนขับและดูแลเครื่อง//
        l = la*(af+as);
        sessionStorage.setItem("ll", l);

        //ค่านายหน้า//
        j = ja*(af+as)
        sessionStorage.setItem("jj", j);

        //ค่าน้ำมันเชื้อเพลิง//
        f = fa*fc*(af+as)
        sessionStorage.setItem("ff", f);

        //ค่าน้ำมันเครื่อง//
        o = (ol/oa)*oc*(af+as)
        sessionStorage.setItem("oo", o);

        //ค่าซ่อมแซมและบำรุงรักษา//
        m = mc*(af+as) // MC ยังไม่ลง
        sessionStorage.setItem("mm", m);

        //ค่าขนย้ายเครื่อง//
        ts = tsa*(af+as) // TSA ยังไม่มี
        sessionStorage.setItem("tss", ts);

        //รวมค่าใช้จ่ายแปรผัน//
        v = l+j+f+o+m+ts
        sessionStorage.setItem("vv", v);
        
        //ค่าจ้างเกี่ยวนวดข้าว//
        h = (af*wf)+(as*ws)
        sessionStorage.setItem("hh", h);

        //ระยะเวลาคืนทุน//
        sum2 = (p-s)/(h-it-g-t-e-v)
        sessionStorage.setItem("summ2", sum2);

        

}