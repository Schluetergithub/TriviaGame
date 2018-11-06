$(document).ready(function () {

  var number = 45;
  var intervalId;
  var timeOut;

  var correct = 0;
  var wrong = 0;
  var skipped = 0;


  $("#result_box").hide();


  // start button on click. When button pressed, button dissappears and reveal timer
  $("#start_btn").click(function () {
      $(".forms").show();
      $("#result_box").hide();
      $("#start_btn").hide();
      intervalId = setInterval(timer, 1000);
      timeOut = setTimeout(timeUp, 45000);
  });

  // function to operate timer interval //
  function timer() {
      number--;
      $("#interval_time").text(number);
      console.log('The time is: ' + (number));
  }

  // "Done" button stops timer and dsiplays correct,incorrect,unanswered //
  $('#done_btn').click(function () {
      $("#interval_time").hide();
      $(".forms").hide();
      $("#timeup").hide();
      $("#result_box").show();
      clearTimeout(timeOut);
      timeUp();

  });

  // function which operates when timer interval runs out //
  function timeUp() {
      $(".forms").hide();
      $("#result_box").show();
      $("#timeup").html("<h5>Time's Up!</h5>");
      console.log("time is up");
      checkAnswers();
      clearInterval(intervalId);
  }

  // calculates correct,incorrect,unanswered and prints in html //
  function checkAnswers() {
      for (i = 1; i <= 10; i++) {
          var answerVal = $('input[name="question' + i + '"]:checked').val();
          if (answerVal == "a") correct++;
          else if (answerVal == undefined) wrong++;
          else skipped++;
      } // end of for loop

      console.log(correct);
      console.log(wrong);
      console.log(skipped);

      $('#correct_answer').text("Correct: " + " " + correct);
      $('#wrong_answer').text("Incorrect: " + " " + skipped);
      $('#unanswered').text("Unanswered: " + " " + wrong);

  }






}); //document ready//