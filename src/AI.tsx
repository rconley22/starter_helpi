import React from 'react';
import { useState } from 'react';
// import { Button } from 'react-bootstrap';
import { OpenAI } from 'openai';


export function ChatGPT({userKey, content}: {userKey: string; content: string;}): JSX.Element {
 const [response, setResponse] = useState<string | null>('');
 const myOpenAi = new OpenAI({apiKey: userKey, dangerouslyAllowBrowser: true});
   const getOpenAIResponse = async () => {
    const res = await myOpenAi.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [ {role: "user", content: content } ]
    });
    setResponse(res.choices[0]?.message?.content);
}
getOpenAIResponse();
 return (
  <div>
    {response}
  </div>
 );
}