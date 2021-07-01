import { LightningElement,api} from 'lwc';

export default class Manokaran extends LightningElement {
     Message='Hai Dad My Salary is 45000,Send to Your Bank Account Please can Check It';
  salary()
    {
        const event=new CustomEvent('btnclick',
            {
                detail:this.Message
            }
        );
        this.dispatchEvent(event);
    }
   
    
}