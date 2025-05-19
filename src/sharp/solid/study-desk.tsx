import React from "react";
const StudyDesk: React.FC<
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
        fill="currentColor"
        d="M3.25 13.25v9h1.5v-9h6.5v4.25c0 .414.336.75.75.75h7.25v4h1.5v-9H22v-1.5H2v1.5z"
      />
      <path
        fill="currentColor"
        d="M16.512 1.93a.75.75 0 0 1 1.049.072l4 4.5c.21.236.249.58.097.857l-3 5.5-1.316-.718 2.747-5.037-3.16-3.555-.734.63a2.75 2.75 0 0 1-.483 3.24L11.823 3.53a2.75 2.75 0 0 1 3.33-.432z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 5.75h4.5v6.75h-1.5V7.25h-1.5v5.25h-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 5.75h4.5v6.75h-1.5V7.25h-1.5v5.25h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StudyDesk;
