import { LightningElement } from 'lwc';

export default class CycleList extends LightningElement {
    cycleName=[{
        Id:0,Name:'Hero Cycle',Image:'https://images.91wheels.com//assets/b_images/main/models/cycle1607642447.jpeg',Prize:30000},
        {Id:1,Name:'Tvs Cycle',Image:'https://images.91wheels.com//assets/b_images/main/models/cycle1607642449.jpeg',Prize:40000},
    {Id:2,Name:'Mahindra Cycle',Image:'https://images.91wheels.com//assets/b_images/main/models/cycle1607642454.jpeg',Prize:10000},
        {Id:3,Name:'Bajaj Cycle',Image:'https://images.91wheels.com//assets/b_images/main/models/cycle1607642456.png',Prize:50000
    }
];
demo;
Name;
Image;
Prize;
myCycle(e)
{
    let i=e.target.dataset.id;
   console.log(i);

    var cusEve=new CustomEvent('btnclick',
    {
        detail:{Name:this.cycleName[i].Name,Image:this.cycleName[i].Image,Prize:this.cycleName[i].Prize}
    });
   
   
    this.dispatchEvent(cusEve);
}
}