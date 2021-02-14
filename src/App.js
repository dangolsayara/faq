import React ,{useState} from 'react';
import Header from './Header';
import  FAQ from './Faq'

function App() {

  const [faqs,setfaqs]=useState([
    {
      question:'how many tourist visit in a year?',
      answer:'Around 1 million ',
      open:false
    },
    {
      question:'which seasopn does tourist mostly prefer to come?',
      answer:'october or end of year',
      open:false
    }
  ]);

const toggleFAQ = index =>{
  setfaqs(faqs.map((faq,i)=>{
    if(i=== index){
      faq.open= !faq.open
    }else{
      faq.open=false;
    }
    return faq;
  }))
}

  return (
    <div className="App">
      <Header/>
      <div className="faqs">
        {faqs.map((faq,i)=>(
          <div>
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
