import React from "react";
const Time_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m1 8.734a2.25 2.25 0 0 1 1.133 2.735l1.574 1.574-1.414 1.414-1.574-1.574A2.25 2.25 0 0 1 11 9.984V7h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Time_02;
