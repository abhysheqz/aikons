import React from "react";
const AutoConversations: React.FC<
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
        d="M17.076 5.617A1 1 0 0 1 18 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1.707.707L20 9.414l-7.293 7.293a1 1 0 0 1-1.414 0L8 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0L12 14.586 18.586 8l-1.293-1.293a1 1 0 0 1-.217-1.09"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AutoConversations;
