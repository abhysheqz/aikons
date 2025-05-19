import React from "react";
const ProgrammingFlag: React.FC<
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
        fillRule="evenodd"
        d="M3.5 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0v-5h13a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm9.735 4.647a.75.75 0 1 0-1.47-.294l-1 5a.75.75 0 1 0 1.47.294zM9.53 8.03a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06L8.56 9zm6-1.06a.75.75 0 1 0-1.06 1.06l.97.97-.97.97a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ProgrammingFlag;
