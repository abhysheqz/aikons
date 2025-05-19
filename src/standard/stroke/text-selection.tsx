import React from "react";
const TextSelection: React.FC<
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
        d="M7 5.5v13m0-13A2.5 2.5 0 0 0 4.5 3H3m4 2.5A2.5 2.5 0 0 1 9.5 3H11M7 18.5A2.5 2.5 0 0 1 4.5 21H3m4-2.5A2.5 2.5 0 0 0 9.5 21H11m-6-9h4M15.5 13.5l.13-.195A2.931 2.931 0 0 1 21 14.931V20.5m0-4.5h-3.44A2.56 2.56 0 0 0 15 18.56 2.44 2.44 0 0 0 17.439 21h.302a2.74 2.74 0 0 0 1.41-.39l.152-.092A3.5 3.5 0 0 0 21 17.52z"
      />
    </svg>
  );
};
export default TextSelection;
