import React from 'react';

 
/**
 * A counter button: tap the button to increase the count.
 x="https://www.coopeuch.cl/documents/20184/4742684/knop2.jpg"
"https://www.coopeuch.cl/documents/20184/4742684/knop2.jpg"
x.length
57
x.replace('jpg','png')
"https://www.coopeuch.cl/documents/20184/4742684/knop2.png"
x+"yessssss"
"https://www.coopeuch.cl/documents/20184/4742684/knop2.jpgyessssss"
x.includes('www.coopeuch')
true
x.split('/')
(7) ["https:", "", "www.coopeuch.cl", "documents", "20184", "4742684", "knop2.jpg"]0: "https:"1: ""2: "www.coopeuch.cl"3: "documents"4: "20184"5: "4742684"6: "knop2.jpg"length: 7__proto__: Array(0)
x.split('/documents')
(2) ["https://www.coopeuch.cl", "/20184/4742684/knop2.jpg"]0: "https://www.coopeuch.cl"1: "/20184/4742684/knop2.jpg"length: 2__proto__: Array(0)concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Object
x.split('/documents')[0]
"https://www.coopeuch.cl"
 */
 
 const  creditList = {
  "noOfRecords":2,
  "records":[
    {
        "rut":"22123456-7",
        "name":"Lu Xi Jin Fu",
        "totalOperation":200000,
        "valueQuota":20000,
        "otherDiscounts":32000,
        "totalDiscount":55000,
        "creditRequestId":"cred232"
    },
    {
        "rut":"3345676-7",
        "name":"Liu hshhs Kang Raiden Son",
        "totalOperation":600000,
        "valueQuota":20000,
        "otherDiscounts":52000,
        "totalDiscount":75000,
        "creditRequestId":"cred212"
    },
    {
        "rut":"22123456-7",
        "name":"Lu www Xi Jin Fu",
        "totalOperation":200000,
        "valueQuota":20000,
        "otherDiscounts":32000,
        "totalDiscount":55000,
        "creditRequestId":"cred232"
    },
    {
        "rut":"3345676-7",
        "name":"Liu Kang ddd Raiden Son",
        "totalOperation":600000,
        "valueQuota":20000,
        "otherDiscounts":52000,
        "totalDiscount":75000,
        "creditRequestId":"cred212"
    },
    {
        "rut":"22123456-7",
        "name":"Lu Xi Jin www Fu",
        "totalOperation":20330000,
        "valueQuota":20000,
        "otherDiscounts":32000,
        "totalDiscount":55000,
        "creditRequestId":"cred232"
    },
    {
        "rut":"3345676-7",
        "name":"Liu www f Kang Raiden Son",
        "totalOperation":600000,
        "valueQuota":20000,
        "otherDiscounts":52000,
        "totalDiscount":75000,
        "creditRequestId":"cred212"
    }
  ],
  "serviceStatus":{
      "code":200,
      "message":"Success"
    }
};
class ArticleList extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName : "chetna",
      secondName : "singh",
      age:"80",
      salary : 10,
      grade: 2
    };
    this.onBtnClick = this.onBtnClick.bind(this);
  }
 onBtnClick(){
  let gradess = this.state.grade + 10
  this.setState({firstName:"Sowmya"+gradess,grade:gradess})
  alert(this.state.firstName)
 }
 showDetails(creditList){
  return(
    creditList.records.map((i,key) => {
        return (<div key={key}>
          <p>{i.name},{i.totalOperation},{i.totalDiscount}</p>
        </div>)
      })
    )
 }

  render() {
    return (
      <div>
      <input type="text" value={this.state.firstName}  name="firstName"/>
      <button onClick={this.onBtnClick}>click on it</button>
      <h1>{creditList.noOfRecords}</h1>
      {this.showDetails(creditList)} {/* CALL THE FUNCTION WHICH U WANT TI SHOW IN UI*/}
      </div>
      
    );
  }
}
export default ArticleList;