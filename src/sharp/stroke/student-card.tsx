import React from "react";
const StudentCard: React.FC<
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
        d="M2 20.5h20v-17H2z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 16c1.609-2.137 5.354-2.254 7 0m-1.751-5.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM14 9.5h5m-5 4h3"
      />
    </svg>
  );
};
export default StudentCard;
