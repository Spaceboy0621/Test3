export default function Summary({ summaries }) {
  return (
    <div>
      {summaries.map((summary, i) => (
        <h3 key={i}>
          Question {i + 1}. {summary}
        </h3>
      ))}
    </div>
  );
}
