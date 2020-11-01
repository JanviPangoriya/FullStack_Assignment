var countervalue = parseInt(document.getElementById("counter").innerHTML)
        var btn1 = document.getElementById("dec");
        btn1.disabled = true;

        function dec() {
            countervalue = countervalue - 1;
            document.getElementById("counter").innerHTML = countervalue
            if (countervalue == 0) {
                btn1.disabled = true;
            }
        }

        function inc() {
            countervalue = countervalue + 1;
            document.getElementById("counter").innerHTML = countervalue
            btn1.disabled = false
        }