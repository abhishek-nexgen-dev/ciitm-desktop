


function EducationItem({
  title,
  score,
}: {
  title: string;
  score: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-zinc-300">
        {title}
      </span>

      <span className="font-semibold text-blue-400">
        {score}
      </span>
    </div>
  );
}


export default EducationItem;