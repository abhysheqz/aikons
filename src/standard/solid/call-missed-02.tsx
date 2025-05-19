import React from "react";
const CallMissed_02: React.FC<
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
        d="M7 3a1 1 0 0 0-1 1v3.5a1 1 0 0 0 .597.915c.243.107.508-.02.696-.208l1.25-1.25 2.75 2.75a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L12 7.585 9.957 5.543l1.25-1.25c.188-.188.316-.453.209-.696A1 1 0 0 0 10.5 3zm15.136 13.135c-5.75-5.514-14.522-5.514-20.272 0A2.86 2.86 0 0 0 1 18.21v1.409a2 2 0 0 0 2.624 1.9l3.454-1.134a2 2 0 0 0 1.377-1.9V14.52a12.35 12.35 0 0 1 7.09 0v3.94a2 2 0 0 0 1.368 1.898l3.454 1.151A2 2 0 0 0 23 19.613V18.21c0-.752-.28-1.516-.864-2.075"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallMissed_02;
