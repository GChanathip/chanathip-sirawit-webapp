function calFarmer(){
    var p = document.getElementById("p").value;
    var s = document.getElementById("s").value;
    var y = document.getElementById("y").value;
    var i = document.getElementById("i").value;
    var region = document.getElementById("region").value;
    var g = document.getElementById("g").value;
    var t = document.getElementById("t").value;
    var e = document.getElementById("e").value;
    var af = document.getElementById("af").value;
    var ja = document.getElementById("j").value;
    var fa = document.getElementById("fa").value;
    var fc = document.getElementById("fc").value;     
    var wf = document.getElementById("wf").value;
    var ye = document.getElementById("ye").value;     
    var n = document.getElementById("n").value;
    let la = 9.93;
    

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
    // ค่าใช้จ่ายแปรผัน
    //ค่าคนขับและดูแลเครื่อง//
    l = la/(ye/12)
    sessionStorage.setItem("ll", l);

    //ค่านายหน้า//
    j = ja*(af+as)
    sessionStorage.setItem("jj", j);

    //ค่าน้ำมันเชื้อเพลิง//
    f = fa/(ye/12)*fc*(ye)
    sessionStorage.setItem("ff", f);

    //ค่าน้ำมันเครื่อง//
    o = (ol/oa)*oc*(af+as)
    sessionStorage.setItem("oo", o);

    //ค่าซ่อมแซมและบำรุงรักษา//
    m = mc/(ye/12)*ye // MC ยังไม่ลง
    sessionStorage.setItem("mm", m);

    //ค่าขนย้ายเครื่อง//
    ts = tsa*(af+as) // TSA ยังไม่มี
    sessionStorage.setItem("tss", ts);

    //รวมค่าใช้จ่ายแปรผัน//
    v = l+j+f+o+m+ts
    sessionStorage.setItem("vv", v);
    
    // //ค่าจ้างเกี่ยวนวดข้าว//
    // h = (af*wf)+(as*ws)
    // sessionStorage.setItem("hh", h);

    //ระยะเวลาคืนทุน//
    sum2 = (p-s)/(h-it-g-t-e-v)
    sessionStorage.setItem("summ2", sum2);

    h = (af*n)
    sessionStorage.setItem("hh", h);

    

}