function calculator(){
    let datevalue = document.getElementById("date").value;
    if(datevalue === "")
    {
       alert("Plz select the date !!");
       return;
    }
        document.getElementById("output").style.display = "block";
        var brtDate = new Date(datevalue);
        var CurrentDate = new Date();

        var finalYear = CurrentDate.getFullYear() - brtDate.getFullYear();
        var finalMonth = CurrentDate.getMonth() - brtDate.getMonth();
        var finalDay = CurrentDate.getDay() - brtDate.getDay();

        if(finalDay < 0)
        {
            finalMonth--;
            var day = new Date(CurrentDate.getFullYear(),CurrentDate.getMonth(),0).getDate();
            finalDay = finalDay + day;
        }
        if(finalMonth < 0)
        {
            finalYear--;
            finalMonth = finalMonth + 12;
        }
        document.getElementById("year").innerText = finalYear;
        document.getElementById("month").innerText = finalMonth+1;
        document.getElementById("day").innerText = finalDay;
}