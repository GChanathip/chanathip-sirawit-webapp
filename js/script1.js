function calFarmer(){
        var p = document.getElementById("p").value;
        document.getElementById("pp").innerHTML = p;

        var s = document.getElementById("s").value;
        document.getElementById("ss").innerHTML = s;

        var y = document.getElementById("y").value;
        document.getElementById("yy").innerHTML = y;

        var i = document.getElementById("i").value;
        document.getElementById("ii").innerHTML = i;

        var region = document.getElementById("region").value;
        document.getElementById("regionn").innerHTML = region;
        
        var g = document.getElementById("g").value;
        document.getElementById("g").innerHTML = g;

        var t = document.getElementById("t").value;
        document.getElementById("tt").innerHTML = t;

        var e = document.getElementById("e").value;
        document.getElementById("ee").innerHTML = e;

        var la = document.getElementById("la").value;
        document.getElementById("laa").innerHTML = la;

        var as = document.getElementById("as").value;
        document.getElementById("ass").innerHTML = as;

        var af = document.getElementById("af").value;
        document.getElementById("aff").innerHTML = af;

        var ja = document.getElementById("ja").value;
        document.getElementById("jaa").innerHTML = ja;

        var fa = document.getElementById("fa").value;
        document.getElementById("faa").innerHTML = fa;
        
        var fc = document.getElementById("fc").value;
        document.getElementById("fcc").innerHTML = fc;

        var oa = document.getElementById("oa").value;
        document.getElementById("oaa").innerHTML = oa;

        var ol = document.getElementById("ol").value;
        document.getElementById("oll").innerHTML = ol;

        var oc = document.getElementById("oc").value;
        document.getElementById("occ").innerHTML = oc;

        var wf = document.getElementById("wf").value;
        document.getElementById("wff").innerHTML = wf;

        var ws = document.getElementById("ws").value;
        document.getElementById("wss").innerHTML = ws;

        var w = document.getElementById("w").value;
        document.getElementById("ww").innerHTML = w;

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

        d = (p-s)/y 
        document.getElementById("dd").innerHTML = d;

        //ค่าดอกเบี้ย//
        it = ((p-s)/2)*(i/100)
        document.getElementById("itt").innerHTML = it;

        //ค่าโรงเก็บเครื่อง//
        document.getElementById("g2").innerHTML = g;
        //ค่าภาษี/ประกัน//
        document.getElementById("t2").innerHTML = t;
        //ค่าใช้จ่ายอื่นๆ//
        document.getElementById("e2").innerHTML = e;
        //รวมค่าใช้จ่ายคงที่//
        sum = d+it+g+t+e
        document.getElementById("summ").innerHTML = sum;

        //ค่าคนขับและดูแลเครื่อง//
        l = la*(af*as0)
        document.getElementById("driverr").innerHTML = l; // driver = l (L)

        //ค่านายหน้า//
        j = ja*(af+as0)
        document.getElementById("broker").innerHTML = j;

        //ค่าน้ำมันเชื้อเพลิง//
        f = fa*fc*(af+as0)
        document.getElementById("fuel").innerHTML = f;

        //ค่าน้ำมันเครื่อง//
        o = (ol/oa)*oc*(af+as0)
        document.getElementById("power").innerHTML = o;

        //ค่าซ่อมแซมและบำรุงรักษา//
        m = mc*(af+as0) // MC ยังไม่ลง
        document.getElementById("repair").innerHTML = m;

        //ค่าขนย้ายเครื่อง//
        ts = tsa*(af+as0) // TSA ยังไม่มี
        document.getElementById("move").innerHTML = ts;

        //รวมค่าใช้จ่ายแปรผัน//
        v = l+j+f+o+m+ts
        document.getElementById("costAll").innerHTML = v;
        
        //ค่าจ้างเกี่ยวนวดข้าว//
        h = (af*wf)+(as0*ws)
        document.getElementById("costFarm").innerHTML = h;

        //ระยะเวลาคืนทุน//
        sum2 = (p-s)/(h-it-g-t-e-v)
        document.getElementById("reCost").innerHTML = sum2;



}