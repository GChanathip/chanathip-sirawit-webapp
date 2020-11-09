function calFarmer(){
    p = document.getElementById("p").value;
    s = document.getElementById("s").value;
    y = document.getElementById("y").value;
    i = document.getElementById("i").value;
    g = document.getElementById("g").value;
    t = document.getElementById("t").value;
    e = document.getElementById("e").value;
    la = document.getElementById("la").value;
    af = document.getElementById("af").value;
    as0 = document.getElementById("as").value; ///as ใช้ as0
    ja = document.getElementById("ja").value;
    fa = document.getElementById("fa").value;
    fc = document.getElementById("fc").value;
    oa = document.getElementById("oa").value;
    ol = document.getElementById("ol").value;
    oc = document.getElementById("oc").value;
    wf = document.getElementById("wf").value;
    ws = document.getElementById("ws").value;
    w = document.getElementById("w").value;
    region = document.getElementById("region").value;
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
    document.getElementById("d").innerHTML = d;

    //ค่าดอกเบี้ย//
    it = ((p-s)/2)*(i/100)
    document.getElementById("it").innerHTML = it;

    //ค่าโรงเก็บเครื่อง//
    document.getElementById("g2").innerHTML = g;
    //ค่าภาษี/ประกัน//
    document.getElementById("t2").innerHTML = t;
    //ค่าใช้จ่ายอื่นๆ//
    document.getElementById("e2").innerHTML = e;
    //รวมค่าใช้จ่ายคงที่//
    sum = d+it+g+t+e
    document.getElementById("sum").innerHTML = sum;

    //ค่าคนขับและดูแลเครื่อง//
    l = la*(af*as0)
    document.getElementById("driver").innerHTML = l; // driver = l (L)

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