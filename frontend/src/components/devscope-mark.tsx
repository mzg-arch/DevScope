type DevScopeMarkProps = {
  className?: string;
};

export function DevScopeMark({
  className = "",
}: DevScopeMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`grid size-8 shrink-0 grid-cols-2 place-items-center gap-0 text-[8px] font-black leading-none tracking-[-0.08em] text-current ${className}`}
    >
      <span>D</span>
      <span>E</span>
      <span>V</span>
      <span>S</span>
    </span>
  );
}