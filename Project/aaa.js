function press(val)
{
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  var btn3 = document.getElementById('btn3');
  var btn4 = document.getElementById('btn4');
  var btn5 = document.getElementById('btn5');

  if (val == '1')
  {
    btn1.style.backgroundColor = "#66ffc2"
    btn2.style.backgroundColor = "#C7EDC7"
    btn3.style.backgroundColor = "#C7EDC7"
    btn4.style.backgroundColor = "#C7EDC7"
    btn5.style.backgroundColor = "#C7EDC7"
  }
  else if(val == '2')
  {
    btn1.style.backgroundColor = "#C7EDC7"
    btn2.style.backgroundColor = "#66ffc2"
    btn3.style.backgroundColor = "#C7EDC7"
    btn4.style.backgroundColor = "#C7EDC7"
    btn5.style.backgroundColor = "#C7EDC7"
  }
  else if(val == '3')
  {
    btn1.style.backgroundColor = "#C7EDC7"
    btn2.style.backgroundColor = "#C7EDC7"
    btn3.style.backgroundColor = "#66ffc2"
    btn4.style.backgroundColor = "#C7EDC7"
    btn5.style.backgroundColor = "#C7EDC7"
  }
  else if(val == '4')
  {
    btn1.style.backgroundColor = "#C7EDC7"
    btn2.style.backgroundColor = "#C7EDC7"
    btn3.style.backgroundColor = "#C7EDC7"
    btn4.style.backgroundColor = "#66ffc2"
    btn5.style.backgroundColor = "#C7EDC7"
  }
  else
  {
    btn1.style.backgroundColor = "#C7EDC7"
    btn2.style.backgroundColor = "#C7EDC7"
    btn3.style.backgroundColor = "#C7EDC7"
    btn4.style.backgroundColor = "#C7EDC7"
    btn5.style.backgroundColor = "#66ffc2"
  }
}

