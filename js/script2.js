function calFarmer(){
    var p = parseInt(document.getElementById("p").value);
    var s = parseInt(document.getElementById("s").value);
    var y = parseInt(document.getElementById("y").value);
    var i = parseInt(document.getElementById("i").value);
    var region = parseInt(document.getElementById("region").value);
    var g = parseInt(document.getElementById("g").value);
    var t = parseInt(document.getElementById("t").value);
    var e = parseInt(document.getElementById("e").value);
    var af = parseInt(document.getElementById("af").value);
    var ja = parseInt(document.getElementById("j").value);
    var fa = parseInt(document.getElementById("fa").value);
    var fc = parseInt(document.getElementById("fc").value); 
    var ye = parseInt(document.getElementById("ye").value);     
    var n = parseInt(document.getElementById("n").value);
    var la = 9.93;
    
    o = 0;
    m = 26.52;
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
    j = ja*(af)
    sessionStorage.setItem("jj", j);

    //ค่าน้ำมันเชื้อเพลิง//
    f = fa/(ye/12)*fc*(ye)
    sessionStorage.setItem("ff", f);

    // //ค่าน้ำมันเครื่อง//
    // o = (ol/oa)*oc*(af+as)
    // sessionStorage.setItem("oo", o);

    // //ค่าซ่อมแซมและบำรุงรักษา//
    // m = mc/(ye/12)*ye // MC ยังไม่ลง
    // sessionStorage.setItem("mm", m);

    //ค่าขนย้ายเครื่อง//
    ts = 0; // TSA ยังไม่มี
    sessionStorage.setItem("tss", ts);

    //รวมค่าใช้จ่ายแปรผัน//
    v = l+j+f+o+m+ts
    sessionStorage.setItem("vv", v.toFixed(2));
    
    //ค่าจ้างเกี่ยวนวดข้าว//
    m = m/(ye/12)*ye
    sessionStorage.setItem("mm", m);

    
    sessionStorage.setItem("oo", o);

    h = (af*n)
    sessionStorage.setItem("hh", h);

    //ระยะเวลาคืนทุน//
    sum2 = (p-s)/(h+it+g+t+e+v)
    sum22 = sum2.toFixed(2)
    sessionStorage.setItem("summ2", sum22);

    

    

}