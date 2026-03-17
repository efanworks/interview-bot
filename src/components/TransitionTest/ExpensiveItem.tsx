export default function ExpensiveItem({ index, query }: { index: number; query: string }) {
    let sum = 0;
    // for (let i = 0; i < 1000; i++) {
    //     sum += Math.sqrt(i + index) * Math.random();
    // }

    return (
        <li>
            {query}-item-{index}-{sum}
        </li>
    )
}