      var operand1,operand2,result,operator;
			function equal()
			{
			  operand2=Number(c.text.value);
			  if(c.text.value=='')
			  {
			    if(operator=='power')
			    {
			      result=operand1**2;
			      return result;
			    }
			    else
				    alert("There is no values for computation");
			  }
			  else
			  {
				  if(operator=='+')
			      result=operand1+operand2;
				  else if(operator=='-')
			      result=operand1-operand2;
				  else if(operator=='*')
			      result=operand1*operand2;
				  else if(operator=='/')
			      if(operand2==0)
			        return "zero division error"
				    else        
				      result=operand1/operand2;
				  else if(operator=='%')
				    result=operand1%operand2;
				  return result;    
			  }
			}
			function plus()
			{
				if(c.text.value=='')
					alert("enter a number before operator");
				else
				{
					operand1=Number(c.text.value);
					operator='+';
					c.text.value='';
				}
			}
			function minus()
			{
				if(c.text.value=='')
					alert("enter a number before operator");
				else
				{
					operand1=Number(c.text.value);
					operator='-';
					c.text.value='';
				}
			}
			function mul()
			{
				if(c.text.value=='')
					alert("enter a number before operator");
				else
				{
					operand1=Number(c.text.value);
					operator='*';
					c.text.value='';
				}
			}
			function div()
			{
				if(c.text.value=='')
					alert("enter a number before operator");
				else
				{
					operand1=Number(c.text.value);
					operator='/';
					c.text.value='';
				}
			}
			function square()
			{
				if(c.text.value=='')
					alert("enter a number before operator");
				else
				{
					operand1=Number(c.text.value);
					operator='power';
					c.text.value='';
				}
			}
			function modulus()
			{
				if(c.text.value=='')
					alert("enter a number before operator");
				else
				{
					operand1=Number(c.text.value);
					operator='%';
					c.text.value='';
				}
			}
			function zero()
			{
				if(c.text.value=='')
					return c.text.value+='0';
				else
					return c.text.value+='00';
			}
			function dot()
			{
				if(c.text.value=='')
					return c.text.value+='0.';
				else
					return c.text.value+='.';
			}
