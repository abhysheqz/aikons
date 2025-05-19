import React from "react";
const Payment_02: React.FC<
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
        d="M1.25 3.75h9.032l4.776 4.18-.987 1.128L9.718 5.25H1.25zM1.25 12.75h4.5v1.5h-4.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m8.5 6.44 2.53 2.53a2.164 2.164 0 1 1-3.06 3.06l-1.033-1.032a3.2 3.2 0 0 1-3.584-.17l-.903-.678.9-1.2.903.677c.675.507 1.62.44 2.217-.157L7 8.94l2.03 2.03a.664.664 0 1 0 .94-.94L7.44 7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m5.083 9.956-.833-.092V20.25h18.5V7.75H7.69l2.28 2.28a.664.664 0 1 1-.94.94L7 8.94l-.53.53a1.7 1.7 0 0 1-1.387.486M13.5 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Payment_02;
