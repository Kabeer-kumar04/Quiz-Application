function answer() {
    var score = 0;

    var right_answer_1 = document.getElementById("q1-a1");
    var q1_answer2 = document.getElementById("q1-a2");
    var q1_answer3 = document.getElementById("q1-a3");
    var q1_answer4 = document.getElementById("q1-a4");

    if (right_answer_1.checked == true) {
        score++;

        alert("Answer one is correct")
    } else {
        alert("Answer one is wrong")
    }


    var right_answer_2 = document.getElementById("q2-a4");
    var q2_answer2 = document.getElementById("q2-a1");
    var q2_answer3 = document.getElementById("q2-a2");
    var q2_answer4 = document.getElementById("q2-a3");

    if (right_answer_2.checked == true) {
        score++;
        alert("Answer two is correct")
    } else {
        alert("Answer two is wrong")
    }


    var right_answer_3 = document.getElementById("q3-a4");
    var q3_answer2 = document.getElementById("q3-a1");
    var q3_answer3 = document.getElementById("q3-a2");
    var q3_answer4 = document.getElementById("q3-a3");

    if (right_answer_3.checked == true) {
        score++;
        alert("Answer three is correct")
    } else {
        alert("Answer three is wrong")
    }


    var right_answer_4 = document.getElementById("q4-a4");
    var q4_answer1 = document.getElementById("q4-a1");
    var q4_answer2 = document.getElementById("q4-a2");
    var q4_answer3 = document.getElementById("q4-a3");

    if (right_answer_4.checked == true) {
        score++;
        alert("Answer four is correct")
    } else {
        alert("Answer four is wrong")
    }


    var right_answer_5 = document.getElementById("q5-a1");
    var q5_answer2 = document.getElementById("q5-a2");
    var q5_answer3 = document.getElementById("q5-a3");
    var q5_answer4 = document.getElementById("q5-a4");

    if (right_answer_5.checked == true) {
        score++;
        alert("Answer five is correct")
    } else {
        alert("Answer five is wrong")
    }


    var right_answer_6 = document.getElementById("q6-a3");
    var q6_answer1 = document.getElementById("q6-a1");
    var q6_answer2 = document.getElementById("q6-a2");
    var q6_answer3 = document.getElementById("q6-a4");

    if (right_answer_6.checked == true) {
        score++;
        alert("Answer six is correct")
    } else {
        alert("Answer six is wrong")
    }


    var right_answer_7 = document.getElementById("q7-a1");
    var q7_answer2 = document.getElementById("q7-a2");
    var q7_answer3 = document.getElementById("q7-a3");
    var q7_answer4 = document.getElementById("q7-a4");

    if (right_answer_7.checked == true) {
        score++;
        alert("Answer seven is correct")
    } else {
        alert("Answer seven is wrong")
    }

    var right_answer_8 = document.getElementById("q8-a2");
    var q8_answer2 = document.getElementById("q8-a1");
    var q8_answer3 = document.getElementById("q8-a3");
    var q8_answer4 = document.getElementById("q8-a4");

    if (right_answer_8.checked == true) {
        score++;
        alert("Answer eight is correct")
    } else {
        alert("Answer eight is wrong")
    }

    var right_answer_9 = document.getElementById("q9-a3");
    var q9_answer2 = document.getElementById("q9-a1");
    var q9_answer3 = document.getElementById("q9-a2");
    var q9_answer4 = document.getElementById("q9-a4");

    if (right_answer_9.checked == true) {
        score++;
        alert("Answer nine is correct")
    } else {
        alert("Answer nine is wrong")
    }

    var right_answer_10 = document.getElementById("q10-a4");
    var q10_answer2 = document.getElementById("q10-a1");
    var q10_answer3 = document.getElementById("q10-a2");
    var q10_answer4 = document.getElementById("q10-a3");

    if (right_answer_10.checked == true) {
        score++;
        alert("Answer ten is correct")
    } else {
        alert("Answer ten is wrong")
    }


    alert(`your score is ${score++}${'/10'}`)
}