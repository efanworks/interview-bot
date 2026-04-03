import ExpensiveItem from "../TransitionTest/ExpensiveItem";
import styles from "./style.module.scss";

export default function BigList({ query }: { query: string }) {
    const items = Array.from({ length: 1000 }, (_, i) => i);

    return (
        <ul className={styles.list}>
            {items.map(i => (
                <ExpensiveItem key={i + query} index={i} query={query} />
            ))}
        </ul>
    );
}