var num1 = 0;
var num2 = 0;
var num3 = 0;
var isNew = '';
var operation = '';
var isCheck = 0;
var n_check1 = 'false';
var n_check2 = 'false';

function pressC()
{
  num1 = 0;
  num2 = 0;
  num3 = 0;
  isNew = '';
  operation = '';
  isCheck = 0;
  n_check1 = 'false';
  n_check2 = 'false';
  document.getElementById('val').innerHTML = '0';
  document.getElementById('op').innerHTML = '';
}

function pressEqual(val)
{
   document.getElementById('op').innerHTML = '';
  if(operation == '' && val != 'true')
  {
    temp = num1;
    pressC();
    num1 = temp;
    isNew = '';
    document.getElementById('val').innerHTML = temp;
    return;
  }
  
  if(operation == '+')
  {
    pressAdd('false');
    calculate(val);
  }
  if(operation == '-')
  {
    pressSub('false');
    calculate(val);
  }
  if(operation == '*')
  {
    pressMul('false');
    calculate(val);
  }
  if(operation == '/')
  {
    pressDiv('false');
    calculate(val);
    return;
  }  
  num2 = '';
  document.getElementById('val').innerHTML = num1;
}

function calculate(val)
{
  if(operation == '+' && val == 'false' && isCheck == '1')
    num1 = parseFloat(num1) + parseFloat(num3);
  else if(operation == '-' && val == 'false' && isCheck == '1')
    num1 = parseFloat(num1) - parseFloat(num3);
  else if (operation == '*' && val == 'false' && isCheck == '1')
    num1 = parseFloat(num1) * parseFloat(num3);
  else if (operation == '/' && val == 'false' && isCheck == '1')
  {
    if(num3 == '0')
    {
      num1 = 0;
      document.getElementById('val').innerHTML = 'Not a number';
    }
    else
      num1 = parseFloat(num1) / parseFloat(num3);
  }
  else if (operation == '+' && val == 'false' && num2 == '')
    num1 = parseFloat(num1) + parseFloat(num1);
  else if (operation == '-' && val == 'false' && num2 == '')
    num1 = parseFloat(num1) - parseFloat(num1);
  else if (operation == '*' && val == 'false' && num2 == '')
    num1 = parseFloat(num1) * parseFloat(num1);
  else if (operation == '/' && val == 'false' && num2 == '')
    num1 = parseFloat(num1) / parseFloat(num1);

  document.getElementById('val').innerHTML = num1;
  isCheck = 1;
}

function pressNum(val)
{
  num = document.getElementById('val').innerHTML;
 
  if(val == '.')
  {
    if(num == 0 && num.indexOf('.') == -1)
    {
      if(num1 == 0)
        num1 = '';
      else if(num2 == 0)
        num2 = '';
      val = '0.';
    }
    else if(num != 0 && num.indexOf('.') == -1)
      num2 = num;
    else if(num.indexOf('.') != -1)
    {
      val = '';
      if (num2 != 0)
        return;
      num2 = '0.';
    } 
  }
  if (isNew == 'true')
	{
    num2 += val;
    document.getElementById('val').innerHTML = num2;
  }
  else
  {
    if(isNew == '')
    {
      if (num1 == val)
        return;
			else
      {
        num1 = val;
				num2 = '';
				isNew = 'false';
      }
		}
    else
      num1 += val;
		document.getElementById('val').innerHTML = num1;
	}
}

function pressN()
{
  if(num1 == '0')
    return;
  if(isNew == 'false' && n_check1 == 'false')
  {
    num1 = '-' + num1;
    document.getElementById('val').innerHTML = num1;
    n_check1 = 'true';
    return;
  }
  else if(n_check1 == 'true' && isNew == 'false')
  {
    num1 = num1.replace('-', '');
    document.getElementById('val').innerHTML = num1;
    n_check1 = 'false';
    return;
  }

  if(isNew == 'true' && n_check1 == 'false')
  {
    if(document.getElementById('val').innerHTML == num1)
      document.getElementById('val').innerHTML = num1;
    else if (n_check2 == 'true' && n_check1 == 'false')
    {
      num2 = num2.replace('-', '');
      n_check1 = 'true';
      isNew = 'true';
      document.getElementById('val').innerHTML = num2;
      return;
    }
  }
  if(isNew == 'true')
  {
    num2 = num2.replace('', '-');
    n_check1 = 'false';
    n_check2 = 'true';
    document.getElementById('val').innerHTML = num2;
    return;
  }
}

function pressAdd(val)
{
  if(val == 'true')
  {
    pressEqual('true');
    document.getElementById('op').innerHTML = '+';
  }
  if(isCheck == '1' && isNew == 'false')
    return;
  
  if(num2 != '')
  {
    num1 = parseFloat(num1) + parseFloat(num2);
    num3 = num2;
    isCheck = 0;
    document.getElementById('val').innerHTML = num1;
    return;
  }
  isNew = 'true';
  operation = '+';
  document.getElementById('val').innerHTML = num1;
}

function pressSub(val)
{
  if(val == 'true')
  {
    pressEqual('true');
    document.getElementById('op').innerHTML = '-';
  }
  if(isCheck == '1' && isNew == 'false')
    return;
  
  if(num2 != '')
  {
    num1 = parseFloat(num1) - parseFloat(num2);
    num3 = num2;
    isCheck = 0;
  }
  isNew = 'true';
  operation = '-';
  document.getElementById('val').innerHTML = num1;
}

function pressMul(val)
{
  if(val == 'true')
  {
    pressEqual('true');
    document.getElementById('op').innerHTML = '&times';
  }
  if(isCheck == '1' && isNew == 'false')
    return;
  if(num2 != '')
  {
    num1 = parseFloat(num1) * parseFloat(num2);
    num3 = num2;
    isCheck = 0;
  }
  isNew = 'true';
  operation = '*';
  document.getElementById('val').innerHTML = num1;
}

function pressDiv(val)
{
  if(val == 'true')
  {
    pressEqual('true');
    document.getElementById('op').innerHTML = '&divide';
  }
  if(isCheck == '1' && isNew == 'false')
    return;

  if(num2 == '0')
  {
    pressC();
    document.getElementById('val').innerHTML = 'Not a number';
    exit;
  }
  else if(num2 != '')
  {
    num1 = parseFloat(num1) / parseFloat(num2);
    num3 = num2;
    isCheck = 0;
  }
  isNew = 'true';
  operation = '/';
  document.getElementById('val').innerHTML = num1;
}
