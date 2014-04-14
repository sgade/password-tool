$(function() {
  function runAsync(fn) {
    setTimeout(fn, 0);
  }
  
  function setProgressBarByScore(score) {
    var klass = 'zero';
    switch ( score ) {
      case 1:
        klass = 'one';
        break;
      case 2:
        klass = 'two';
        break;
      case 3:
        klass = 'three';
        break;
      case 4:
        klass = 'four';
        break;
    }
    
    $(".pw-widget .bar").attr('class', '').addClass('bar ' + klass);
  }
  function showEstimateStats(estimate) {
    estimate = estimate || {};
    var crackTimeDisplay = estimate.crack_time_display || 'unknown';
    
    $("#calc-time").text(estimate.calc_time);
    $("#score").text(estimate.score);
    $("#crack-time-display").text(crackTimeDisplay);
    $("#crack-time").text(estimate.crack_time);
    $("#entropy").text(estimate.entropy);
  }
  
  var lastCheckedPw = null;
  function runCheck(pw) {
    if ( pw == lastCheckedPw ) {
      return;
    } else {
      lastCheckedPw = pw;
    }
    runAsync(function() {
      showEstimateStats(estimate);
      
      if ( pw != $("#pw").val() ) {
        return;
      }
      
      var estimate = zxcvbn(pw);
      
      if ( pw == $("#pw").val() ) {
        setProgressBarByScore(estimate.score);
        showEstimateStats(estimate);
      } else {
        console.log("calculated '" + pw + "' but now its '" + $("#pw").val() + "'...");
      }
    });
  }
  
  $("#pw").keyup(function() {
    var pw = $("#pw").val();
    runCheck(pw);
  });
  
  runCheck($("#pw").val());
});
