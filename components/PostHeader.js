export default function PostHeader({ title, date, author }) {
  return (
    <>
      <h1>{title}</h1>

      <div className="max-w-2xl mx-auto">
        <p>{author}</p>
        <div className="mb-6 text-lg">
          <p>{date}</p>
        </div>
      </div>
    </>
  );
}
