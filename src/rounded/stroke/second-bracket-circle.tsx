import React from "react";
const SecondBracketCircle: React.FC<
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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 8c.65.065 1.088.211 1.414.542C17 9.135 17 10.09 17 12s0 2.865-.586 3.458c-.326.33-.764.477-1.414.542m-6 0c-.65-.065-1.088-.211-1.414-.542C7 14.865 7 13.91 7 12s0-2.865.586-3.458C7.912 8.212 8.35 8.065 9 8"
      />
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default SecondBracketCircle;
