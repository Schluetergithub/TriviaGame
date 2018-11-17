$(document).ready(function () {

  var number = 45;
  var intervalId;
  var timeOut;

  $("#start_button").click(function () {
      $(".forms").show();
      $("#result_box").hide();
      $("#start_button").hide();
      intervalId = setInterval(timer, 1000);
      timeOut = setTimeout(timeUp, 45000);
  });

  function timer() {
      number--;
      $("#triviaTimer").text(number);
  }

  $('#end_button').click(function () {
      $("#triviaTime").hide();
      $(".forms").hide();
      $("#timeup").hide();
      $("#result_box").show();
      clearTimeout(timeOut);
      timeUp();
    //   callModal();

  });

  function timeUp() {
      $(".forms").hide();
      $("#result_box").show();
      $("#timeup").html("<h5>Time's Up!</h5>");
      checkAnswers();
      clearInterval(intervalId);

      for (var i = 0; i < 250; i++) {
        create(i);
      }
      
      function create(i) {
        var width = Math.random() * 8;
        var height = width * 0.4;
        var colourIdx = Math.ceil(Math.random() * 3);
        var colour = "red";
        switch(colourIdx) {
          case 1:
            colour = "yellow";
            break;
          case 2:
            colour = "blue";
            break;
          default:
            colour = "red";
        }
        $('<div class="confetti-'+i+' '+colour+'"></div>').css({
          "width" : width+"px",
          "height" : height+"px",
          "top" : -Math.random()*20+"%",
          "left" : Math.random()*100+"%",
          "opacity" : Math.random()+0.5,
          "transform" : "rotate("+Math.random()*360+"deg)"
        }).appendTo('.wrapper');  
        
        drop(i);
      }
      
      function drop(x) {
        $('.confetti-'+x).animate({
          top: "100%",
          left: "+="+Math.random()*15+"%"
        }, Math.random()*3000 + 3000, function() {
          reset(x);
        });
      }
      
      function reset(x) {
        $('.confetti-'+x).animate({
          "top" : -Math.random()*20+"%",
          "left" : "-="+Math.random()*15+"%"
        }, 0, function() {
          drop(x);             
        });
      }

        var correct = 0;
        var wrong = 0;
        var skipped = 0;

        function checkAnswers() {
            for (i = 1; i <= 10; i++) {
                var answerVal = $('input[name="question' + i + '"]:checked').val();
                if (answerVal == "a") correct++;
                else if (answerVal == undefined) wrong++;
                else skipped++;
            } 

            $('#correct_answer').text("Correct: " + " " + correct);
            $('#wrong_answer').text("Incorrect: " + " " + skipped);
            $('#unanswered').text("Unanswered: " + " " + wrong);

        };
  }

  $("#result_box").hide();

//   var correct = 0;
//   var wrong = 0;
//   var skipped = 0;

//   function checkAnswers() {
//       for (i = 1; i <= 10; i++) {
//           var answerVal = $('input[name="question' + i + '"]:checked').val();
//           if (answerVal == "a") correct++;
//           else if (answerVal == undefined) wrong++;
//           else skipped++;
//       } 

//       $('#correct_answer').text("Correct: " + " " + correct);
//       $('#wrong_answer').text("Incorrect: " + " " + skipped);
//       $('#unanswered').text("Unanswered: " + " " + wrong);

//   };
  

}); 