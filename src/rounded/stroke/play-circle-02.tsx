import React from "react";
const PlayCircle_02: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        fill="currentColor"
        d="M9.5 11.2v1.6c0 1.52 0 2.28.456 2.586s1.079-.032 2.326-.712l1.468-.8C15.25 13.056 16 12.647 16 12s-.75-1.056-2.25-1.874l-1.469-.8c-1.246-.68-1.87-1.02-2.325-.712C9.5 8.92 9.5 9.68 9.5 11.2"
      />
    </svg>
  );
};
export default PlayCircle_02;
