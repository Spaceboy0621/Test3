export default function Question({ step, onClick, onChange }) {
  return (
    <div>
      <h5>Question {step}. </h5>
      <textarea
        className="form-control"
        placeholder="Some answer here"
        onChange={onChange}
      ></textarea>
      <button className="btn btn-success" onClick={onClick}>
        Next
      </button>
    </div>
  );
}
