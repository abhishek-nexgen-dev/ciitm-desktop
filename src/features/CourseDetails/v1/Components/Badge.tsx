interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span
      className="
      inline-flex
      rounded-full
      bg-violet-600/20
      px-3
      py-1
      text-xs
      font-semibold
      uppercase
      tracking-wide
      text-violet-300
    "
    >
      {children}
    </span>
  );
}
