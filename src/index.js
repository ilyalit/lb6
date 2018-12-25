import timer from './timer.js';
import './styles.css';


  /*   
  Seconds input field  
  */  
  var timeDiv= document.createElement('div');
  timeDiv.innerHTML='Enter seconds:';
  var timeValue=document.createElement('input');
  timeValue.setAttribute('type','number');
  timeValue.setAttribute('id','seconds');
  timeDiv.appendChild(timeValue); 
  timeDiv.setAttribute('id','textDiv');
  
  /*   
  Text input field  
  */   
 var textDiv= document.createElement('div');
  textDiv.innerHTML='Enter message:';
  var getText=document.createElement('input');
  textDiv.appendChild(getText);
  getText.setAttribute('id','message');
  textDiv.setAttribute('id','textDiv');

  /*
  Buttons 
  */
  var divOfButtons=document.createElement('div');
  var start=document.createElement('button');
  start.innerHTML='Start';
  start.setAttribute('id','start'); 
  start.setAttribute('class','button');
  divOfButtons.appendChild(start); 

  var stop=document.createElement('button');
  stop.innerHTML='Stop';
  stop.setAttribute('id','stop');
  stop.setAttribute('class','button');
  divOfButtons.appendChild(stop);

  var pause=document.createElement('button');
  pause.innerHTML='Pause';
  pause.setAttribute('id','pause');
  pause.setAttribute('class','button');
  divOfButtons.appendChild(pause);

  var reset=document.createElement('button');
  reset.innerHTML='Reset';
  reset.setAttribute('id','reset');
  reset.setAttribute('class','button');
  divOfButtons.appendChild(reset);

  /*Вывод секунд таймера*/
  var showTimer=document.createElement('div');
  showTimer.setAttribute('id','showTimer');
  showTimer.innerHTML=0;
 
  document.body.appendChild(timeDiv);    
  document.body.appendChild(textDiv);
  document.body.appendChild(divOfButtons); 
  document.body.appendChild(showTimer);
