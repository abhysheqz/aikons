import React from "react";
const ShareKnowledge: React.FC<
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
        d="M14 21s1-1.5 3.5-1.5S21 21 21 21m-1.5-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0M3 11s1-1.5 3.5-1.5S10 11 10 11M8.5 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14.5 4H21m-6.5 4H18M4 14c0 3.317 2.683 6 6 6l-.5-2"
      />
    </svg>
  );
};
export default ShareKnowledge;
