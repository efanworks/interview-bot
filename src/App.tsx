import { useState, useRef } from 'react';
import s from './App.module.scss';

function App() {
  const [jobDescript, setJobDescript] = useState('');
  const [experience, setExperience] = useState('');
  const savedJobDescript = useRef('');
  const savedExperience = useRef('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!import.meta.env.VITE_OPENROUTER_API_KEY) {
      console.error('OpenRouter API key is missing. Please set VITE_OPENROUTER_API_KEY in your .env file.');
      return;
    }
    if (!jobDescript.trim() || !experience.trim()) return;
    setJobDescript('');
    setExperience('');
    setAnswer('');
    setIsLoading(true);
    savedJobDescript.current = jobDescript;
    savedExperience.current = experience;
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-v3.2',
          stream: true,
          messages: [
            {
              role: 'user',
              content: `
                你是面试官，根据以下JD和候选人背景，生成2个最可能被问到的面试题，每题附上回答思路'
                岗位描述：${jobDescript}\n
                项目经历：${experience}\n
              `
            },
          ],
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const reader = response.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6);
          if (data === '[DONE]') break;
          try {
            const chunk = JSON.parse(data);
            const content = chunk.choices[0]?.delta?.content;
            if (content) setAnswer(prev => prev + content);
          } catch {
            // ignore malformed chunks
          }
        }
      }
    } catch (error) {
      console.error("Error making request:", error);
      setJobDescript(savedJobDescript.current);
      setExperience(savedExperience.current);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={s.App}>
      <h1>Interview Bot</h1>
      <div className={s.candidateInfo}>
        <textarea
          name="jobDescript"
          className={s.jobDescript}
          value={jobDescript}
          onChange={(e) => setJobDescript(e.target.value)}
          placeholder="请输入岗位描述..."
          rows={10}
          cols={50}
        />
        <textarea
          name="experience"
          className={s.experience}
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="请输入您的项目经历..."
          rows={10}
          cols={50}
        />
      </div>
      <button onClick={handleSubmit} disabled={isLoading}>提交</button>
      <div className={`${s.answer} ${isLoading ? s.loading : ''}`}>{answer}</div>
    </div>
  )
}

export default App;