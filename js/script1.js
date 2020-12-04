function calFarmer(){
        var p = document.getElementById("p").value;
        var s = document.getElementById("s").value;
        var y = document.getElementById("y").value;
        var i = document.getElementById("i").value;
        var region = document.getElementById("region").value;
        var g = document.getElementById("g").value;
        var t = document.getElementById("t").value;
        var e = document.getElementById("e").value;
        var la = document.getElementById("la").value;
        var as = document.getElementById("as").value;
        var af = document.getElementById("af").value;
        var ja = document.getElementById("ja").value;
        var fa = document.getElementById("fa").value;
        var fc = document.getElementById("fc").value;
        var oa = document.getElementById("oa").value;
        var ol = document.getElementById("ol").value;
        var oc = document.getElementById("oc").value;      
        var wf = document.getElementById("wf").value;
        var ws = document.getElementById("ws").value;
        var w = document.getElementById("w").value;
        

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
        l = la*(af*as0)
        sessionStorage.setItem("ll", l);

        //ค่านายหน้า//
        j = ja*(af+as0)
        sessionStorage.setItem("jj", j);

        //ค่าน้ำมันเชื้อเพลิง//
        f = fa*fc*(af+as0)
        sessionStorage.setItem("ff", f);

        //ค่าน้ำมันเครื่อง//
        o = (ol/oa)*oc*(af+as0)
        sessionStorage.setItem("oo", o);

        //ค่าซ่อมแซมและบำรุงรักษา//
        m = mc*(af+as0) // MC ยังไม่ลง
        sessionStorage.setItem("mm", m);

        //ค่าขนย้ายเครื่อง//
        ts = tsa*(af+as0) // TSA ยังไม่มี
        sessionStorage.setItem("tss", ts);

        //รวมค่าใช้จ่ายแปรผัน//
        v = l+j+f+o+m+ts
        sessionStorage.setItem("vv", v);
        
        //ค่าจ้างเกี่ยวนวดข้าว//
        h = (af*wf)+(as0*ws)
        sessionStorage.setItem("hh", h);

        //ระยะเวลาคืนทุน//
        sum2 = (p-s)/(h-it-g-t-e-v)
        sessionStorage.setItem("summ2", sum2);

        

}