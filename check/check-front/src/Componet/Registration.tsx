import React from 'react';
import { Stack, Text, Link, FontWeights, PrimaryButton, TextField} from 'office-ui-fabric-react';
import logo from './image/2xz.png'
const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const Registration: React.FunctionComponent = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      horizontal 
      disableShrink 
      styles={{
        root: {
          width: '0 auto',
          margin: '0 auto',
          textAlign: 'start',
          color: '#000000'
        }
      }}
      gap={15}
    
    > 

<div>

<Stack
     horizontalAlign="center"
      verticalAlign="start"
      verticalFill
      styles={{
        root: {
          width: '960px', 
          textAlign: 'start',

        }
      }}
      gap={15}
    >
    <Text>CHECK</Text>
	
	
<img src="../image/2xz.png"/> 

          
       <Text block>POINT</Text> 
<Stack
     horizontalAlign="start"
      verticalAlign="start"
      verticalFill
      styles={{
        root: {
          width: '960px', 
          textAlign: 'start',
		  
color: '#605e5c'
        }
      }}
      gap={15}
    >	   
	   <p>Мы предупредим о</p> 
	    <p>предстоящей проверке</p>  
	    <p>и подскажем вам </p> 
	    <p>какая документация </p> 
	    <p>нужна</p> 
          </Stack>
		  </Stack>
</div>

<div>
<form action="#" method="GET">
<Stack
     horizontalAlign="center"
      verticalAlign="start"
      verticalFill
      styles={{
        root: {
          width: '960px',
          
          textAlign: 'center',
          color: '#605e5c'
        }
      }}
      gap={15}
    >
<input placeholder="организация" id="organisation" name="organisation" type="text"/>
<input placeholder="логин" id="login" name="login" type="text"/>
<input placeholder="пароль" id="parole" name="parole" type="password"/>
<input placeholder="электронная почта" id="mail" name="mail" type="email"/>
<input placeholder="номер телефона" id="number" name="number" type="text"/>
    <PrimaryButton
            type="signup"
            data-automation-id="test"
            text="зарегистрироваться"
            allowDisabledFocus={false}
            
          />
          </Stack>
</form>
</div>


    </Stack>
  );
};
