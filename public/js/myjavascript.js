function createTime(){
    //membuat datatime
    var datetime = new Date();
    //mengambil jam pada waktu
    var hours = datetime.getHours();
    //mengambil menit pada waktu
    var minutes = datetime.getMinutes();
    //mengambil menit pada waktu
    var seconds = datetime.getSeconds();
    //kondisi ketika jam dan menit dibawah 0 akan di tambah 0 didepan
    if(hours < 10){
        hours = "0"+hours;
    }
    if(minutes < 10){
        minutes = "0"+minutes;
    }
    if(seconds < 10){
        seconds = "0"+seconds;
    }
    //menjadikan object waktu
    var time = {hours:hours,minutes:minutes,seconds:seconds};
    //mengeluarkan waktu
    return time;
}

function totalTime(start_hours,start_minutes,finish_hours,finish_minutes){
    var total_hours,total_minutes;
    //menghitung jam
    total_hours = finish_hours - start_hours;
    //mengubah jam ke menit
    total_minutes = total_hours*60;
    //menghitung waktu
    total_minutes = (finish_minutes-start_minutes)+total_minutes;
    return total_minutes;
}

//check apakah input kosong
function check_empty_input(selector,field,data){
    if(field === data){
        $("#"+selector).addClass("is-invalid");
    }
    $("#"+selector).focus(function(){
        $("#"+selector).removeClass("is-invalid");
    });
}

function textbox_alert(selector){
    setTimeout(function(){
        $("#"+selector).addClass("is-invalid");
    },500);
    setTimeout(function(){
        $("#"+selector).removeClass("is-invalid");
    },1000);
    setTimeout(function(){
        $("#"+selector).addClass("is-invalid");
    },1500);
    setTimeout(function(){
        $("#"+selector).removeClass("is-invalid");
    },2000);
    setTimeout(function(){
        $("#"+selector).addClass("is-invalid");
    },2500);
    $("#"+selector).focus(function(){
        $("#"+selector).removeClass("is-invalid");
    });
};

//fungsi tooltip
function tooltip(selector,data){
    tippy('#'+selector, {
        content: data,
    });
}

//generate nomor work order
function generateNumber(number,month) {
    number++;
    //menhilangkan angka nol didepan misal 0090 jadi 90
    let paddedNumber = number.toString().padStart(4, '0');

    //membuat bulan sekarang
    date_now = new Date();
    month_now = date_now.getMonth()+1;

    //jika bulan sekarang dan bulan pada nomor wo sama maka penomoran tetep lanjut
    if(month_now < 10){
        month_now = "0"+month_now   ;
    }

    if (month_now == month) {
        return paddedNumber;
    }
    return "0000";

}
