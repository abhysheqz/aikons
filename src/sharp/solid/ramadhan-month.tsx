import React from "react";
const RamadhanMonth: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 5.75V1.5h1.5v4.25zm11 0V1.5h1.5v4.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 3.75A.75.75 0 0 1 3.5 3h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75h-18a.75.75 0 0 1-.75-.75zm18 4.25H4.25V4.5h16.5zm-9.168 5.107a2.23 2.23 0 1 0 3.062 3.062l1.713 1.032a4.23 4.23 0 1 1-5.807-5.807zM14 12.75a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RamadhanMonth;
