console.log('hahah');

//calculator begin
		    var a,b,r,op;
			  function equal()
			  {
				  b=Number(c.text.value);
				  if(c.text.value=='')
				  {
				    if(op=='power')
				    {
				      r=a**2;
				      return r;
				    }
				    else
					    alert("There is no values for computation");
				  }
				  else
				  {
					  if(op=='+')
				      r=a+b;
					  else if(op=='-')
				      r=a-b;
					  else if(op=='*')
				      r=a*b;
					else if(op=='/')
				    if(b==0)
				      return "zero division error"
					  else        
					    r=a/b;
					else if(op=='%')
					  r=a%b;
					return r;    
				}
			}
			function plus()
			{
				if(c.text.value=='')
					alert("enter a number before operator");
				else
				{
					a=Number(c.text.value);
					op='+';
					c.text.value='';
				}
			}
			function minus()
			{
				if(c.text.value=='')
					alert("enter a number before operator");
				else
				{
					a=Number(c.text.value);
					op='-';
					c.text.value='';
				}
			}
			function mul()
			{
				if(c.text.value=='')
					alert("enter a number before operator");
				else
				{
					a=Number(c.text.value);
					op='*';
					c.text.value='';
				}
			}
			function div()
			{
				if(c.text.value=='')
					alert("enter a number before operator");
				else
				{
					a=Number(c.text.value);
					op='/';
					c.text.value='';
				}
			}
			function p()
			{
				if(c.text.value=='')
					alert("enter a number before operator");
				else
				{
					a=Number(c.text.value);
					op='power';
					c.text.value='';
				}
			}
			function per()
			{
				if(c.text.value=='')
					alert("enter a number before operator");
				else
				{
					a=Number(c.text.value);
					op='%';
					c.text.value='';
				}
			}
			function z()
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
//calculator end			
