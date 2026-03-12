import { useState } from 'react';
import s from './App.module.scss';

function App() {
  const [inputText, setInputText] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async () => {
    if (!import.meta.env.VITE_OPENROUTER_API_KEY) {
      console.error('OpenRouter API key is missing. Please set VITE_OPENROUTER_API_KEY in your .env file.');
      return;
    }
    if (!inputText.trim()) return;

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-v3.2',
          messages: [
            {
              role: 'user',
              content: inputText,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const completion = await response.json();
      setInputText('');
      setAnswer(completion.choices[0].message.content);
    } catch (error) {
      console.error("Error making request:", error);
    }
  }

  return (
    <div className={s.App}>
      <h1>Interview Bot</h1>
      <textarea
        className={s.textarea}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="请输入您的问题..."
        rows={10}
        cols={50}
        style={{ display: 'block', marginBottom: '16px' }}
      />
      <button onClick={handleSubmit}>提交</button>
      <div className={s.answer}>{answer}</div>
    </div>
  )
}

export default App;