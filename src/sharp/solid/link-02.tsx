import React from "react";
const Link_02: React.FC<
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
        d="m15.207 10.207-5 5-1.414-1.414 5-5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.293 3.837a6.272 6.272 0 0 1 8.87 8.87l-2.61 2.61-1.414-1.415 2.61-2.61a4.272 4.272 0 1 0-6.042-6.04l-2.61 2.609-1.414-1.414zm-7.456 7.456 2.61-2.61 1.414 1.415-2.61 2.61a4.272 4.272 0 1 0 6.042 6.04l2.61-2.609 1.414 1.414-2.61 2.61a6.272 6.272 0 1 1-8.87-8.87"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Link_02;
