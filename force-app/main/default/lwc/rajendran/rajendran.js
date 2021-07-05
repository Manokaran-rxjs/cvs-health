import { LightningElement } from 'lwc';

export default class Rajendran extends LightningElement {

    mySon;
    mySonMessage(event)
    {
         this.mySon=event.detail;
         console.log(event)
    }
}