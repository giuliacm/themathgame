/**
 * Created by giuliamattia on 2017-01-22.
 */


$(function () {

    var score = 0;

    var easy_level = 10;
    var med_level = 50;
    var hard_level = 100;



    $("#easy").click(function (e) {
        e.preventDefault();
        console.log('clicked easy');

        document.getElementById('score').innerHTML = '<p align="center">score:   ' + score + '</p>';

        generate_question(easy_level, easy_level);
    });

    $("#medium").click(function (e) {
        e.preventDefault();
        console.log('clicked medium');

        document.getElementById('score').innerHTML = '<p align="center">score:   ' + score + '</p>';

        generate_question(med_level, easy_level);
    });

    $("#hard").click(function (e) {
        e.preventDefault();
        console.log('clicked hard');

        document.getElementById('score').innerHTML = '<p align="center">score:   ' + score + '</p>';

        generate_question(hard_level, easy_level);
    });


    function update_score() {
        score = score + 1;
        document.getElementById('score').innerHTML = '<p align="center">score:   ' + score + '</p>';

    }




    function generate_question(level1, level2) {
        var num2 = Math.floor((Math.random() * level1) + 1);
        var correct_answer = Math.floor((Math.random() * level2) + 1);

        var num1 = correct_answer * num2;



        var html = '<p align="center">' + num1 + ' ÷ ' + num2 + ' = ' + '<input type="number" id="submitted_answer">'+  '<button type="button" id="submit">submit</button></p>';
        document.getElementById('game').innerHTML = html;



        $("#submit").click(function (e) {
            e.preventDefault();
            var submitted = $("#submitted_answer").val();
            // console.log(submitted);

            if(typeof submitted != 'undefined' && submitted != null) {
                if (submitted == correct_answer) {
                    update_score();
                    generate_question(level1, level2);
                }
                else {
                    document.getElementById('game').innerHTML = '<p align="center">game over!</p>';
                    score = 0;
                    document.getElementById('score').innerHTML = '<p align="center">score:   ' + score + '</p>';
                }



            }

        });

    }

});