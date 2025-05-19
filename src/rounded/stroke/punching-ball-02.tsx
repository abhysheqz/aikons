import React from "react";
const PunchingBall_02: React.FC<
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
        d="M14.69 18.5H9.31c-.68 0-1.307.385-1.645 1.008l-.539.996c-.36.666.095 1.496.823 1.496h8.102c.728 0 1.184-.83.823-1.496l-.54-.996c-.337-.623-.964-1.008-1.644-1.008M12 12v6.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 2C9.515 2 7.5 3.178 7.5 5.846c0 2.335 2.01 2.903 3.015 5.103.144.316.217.474.263.545.205.312.402.437.774.493.084.013.206.013.448.013s.364 0 .448-.013c.372-.056.568-.18.773-.492.047-.071.12-.23.264-.546C14.49 8.754 16.5 8.202 16.5 5.846 16.5 3.154 14.485 2 12 2Z"
      />
    </svg>
  );
};
export default PunchingBall_02;
