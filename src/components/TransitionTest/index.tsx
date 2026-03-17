import { useState, ChangeEvent, useTransition, useDeferredValue } from "react";
import BigList from "../BigList";

export default function TransitionTest() {
    const [query, setQuery] = useState('');
    const [myQuery, setMyQuery] = useState('');
    const [isPending, startTransition] = useTransition();
    const [useTransition_, setUseTransition] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setQuery(query);

        if (useTransition_) {
            startTransition(() => {
                setMyQuery(query + '-zhuo');
            });
        } else {
            setMyQuery(query + '-zhuo');
        }
    }   

    const deferredQuery = useDeferredValue(query);

    return (
        <>
            <div style={{ marginBottom: 16 }}>
                <label>
                    <input
                        type="checkbox"
                        checked={useTransition_}
                        onChange={(e) => setUseTransition(e.target.checked)}
                    />
                    使用 startTransition
                </label>
                {isPending && <span style={{ marginLeft: 16, color: 'red' }}>渲染中...</span>}
            </div>

            <input type="text" value={query} onChange={handleChange} placeholder="快速输入测试..." />
            <div>
                <BigList query={myQuery} />
            </div>
        </>
    )
}