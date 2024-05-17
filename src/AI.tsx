import React from 'react';
import { useState } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { OpenAI } from 'openai';
import Loader from './Loader';
import './Loader.css'
import './AI.css'


export function ChatGPT({userKey, content}: {userKey: string; content: string}): JSX.Element {
 const [response, setResponse] = useState<string | null>('');
 const [loading, setLoading] = useState<boolean>(false);
 const [buttonclicked, setButtonclicked] = useState<boolean>(false);
 const myOpenAi = new OpenAI({apiKey: userKey, dangerouslyAllowBrowser: true});
   const getOpenAIResponse = async () => {
    setLoading(true);
    setButtonclicked(true);
    const res = await myOpenAi.chat.completions.create({
    model: 'gpt-4',
    messages: [ {role: "assistant", content: content } ]
    });
    setResponse(res.choices[0]?.message?.content);
    setLoading(false);
}

const resetResponse = () => {
  setResponse(null);
  setButtonclicked(false);
  window.location.href = 'src/App.tsx';
};

  let newText = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  if (response !== null) {
  // newText= response.split(/[0-16]\./);
  newText= response.split(":", 21);
  }
 return (
  <div>
    <Button className="submitAns" onClick={getOpenAIResponse} hidden={buttonclicked}>Click to Reveal!</Button>
    <div hidden={!buttonclicked || loading}>
    <div className='response-text'>
    <Container>
      <Row>
        <Col>
          <div className='box'>
          <h2>Your Career Matches</h2>
          <p>1. {newText[0]}</p>
          <p>2. {newText[1]}</p>
          <p>3. {newText[2]}</p>
          <p>4. {newText[3]}</p>
          <p>5. {newText[4]}</p>
          </div>
        </Col>
        <Col>
          <div className='box'>
          <h2>Your Industry Matches</h2>
          <p>1. {newText[5]}</p>
          <p>2. {newText[6]}</p>
          <p>3. {newText[7]}</p>
          <p>4. {newText[8]}</p>
          <p>5. {newText[9]}</p>
          </div>
      </Col>
      </Row>
      <Row>
        <Col>
            <div className='box'>
            <h2>Your Job Matches</h2>
            <p>1. {newText[10]}</p>
            <p>2. {newText[11]}</p>
            <p>3. {newText[12]}</p>
            <p>4. {newText[13]}</p>
            <p>5. {newText[14]}</p>
            </div>
        </Col>
        <Col>
          <div className='box'>
          <h2>Your Degree Matches</h2>
          <p>1. {newText[15]}</p>
          <p>2. {newText[16]}</p>
          <p>3. {newText[17]}</p>
          <p>4. {newText[18]}</p>
          <p>5. {newText[19]}</p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
    <Row>      
        <h2>Report Summary</h2>
        <p className='box2'>{newText[20]}</p>
      </Row>
    </Container>
    <Button className='submitAns' onClick={resetResponse} hidden={!buttonclicked || loading}>Take The Quiz Again!</Button>
    </div>
    {/* {!loading && response} */}
    </div>
    {loading && <Loader></Loader>}
    {loading && <p>Thank you, your response has been recorded.</p>}
  </div>
 );
}

export async function TestResponse(userKey:string): Promise<boolean>{

 const myOpenAi = new OpenAI({apiKey: userKey, dangerouslyAllowBrowser: true});

    try {
        const res = await myOpenAi.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: "assistant", content: "This is a test." }]
        });

        const response = res.choices[0]?.message?.content;

        return response !== null && response !== undefined;
    } catch (error) {
        console.error("Error while testing response:", error);
        return false; // Return false if there's an error
    }  
 
 
} 


