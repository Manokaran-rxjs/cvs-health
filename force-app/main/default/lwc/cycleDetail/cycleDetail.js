import { LightningElement } from 'lwc';

export default class CycleDetail extends LightningElement {
    Name;
    Image;
    Prize;
    myCycle(e)
    {
      this.Name=e.detail.Name;
      this.Image=e.detail.Image;
      this.Prize=e.detail.Prize;
    }
}