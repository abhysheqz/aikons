import React from "react";
const Conference: React.FC<
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
        d="M4.25 3A.75.75 0 0 1 5 2.25h14a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75zm5 5.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M12 12.75c-2.592 0-4.75 1.85-4.75 4.75 0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75c0-2.9-2.158-4.75-4.75-4.75M20.75 17.5v-11h2v11zM1.25 17.5v-11h2v11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Conference;
