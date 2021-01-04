$(document).ready(function (){
    $("#datepicker").datepicker({
        beforeShowDay: function(date) {
            var disabled = true,
                numOfDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
            if (numOfDays % 2 === 0)
                disabled = (date.getDate() % 2 !== 0)
            else disabled = (date.getDate() % 2 === 0)
            return [disabled, ""]
        }
    })
})