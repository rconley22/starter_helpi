import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { OpenAI } from 'openai';
import Loader from './Loader';
import './Loader.css'



export function ChatGPT({userKey, content}: {userKey: string; content: string}): JSX.Element {
 const [response, setResponse] = useState<string | null>('');
 const [loading, setLoading] = useState<boolean>(false);
 const myOpenAi = new OpenAI({apiKey: userKey, dangerouslyAllowBrowser: true});
   const getOpenAIResponse = async () => {
    setLoading(true);
    const res = await myOpenAi.chat.completions.create({
    model: 'gpt-4',
    messages: [ {role: "assistant", content: content } ]
    });
    setResponse(res.choices[0]?.message?.content);
    setLoading(false);
}
  let newText = ["", "", "", "", "", "", "", ""];
  if (response !== null) {
  newText= response.split(/[0-5]\./);
  }
 return (
  <div>
    <p>{newText[0]}</p>
    <p>{newText[1]}</p>
    <p>{newText[2]}</p>
    <p>{newText[3]}</p>
    <p>{newText[4]}</p>
    <p>{newText[5]}</p>
    <p>{newText[6]}</p>
    <Button className="submitAns" onClick={getOpenAIResponse}>Click for your personalized career!</Button>
    <div className='response-text'>
    {!loading && response}
    {loading && <Loader></Loader>}
    </div>
  </div>
 );
}