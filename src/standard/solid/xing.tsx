import React from "react";
const Xing: React.FC<
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
        d="M2.379 5.58A.75.75 0 0 1 3 5.25h4a.75.75 0 0 1 .696.471l2 5a.75.75 0 0 1 0 .557l-2 5A.75.75 0 0 1 7 16.75H3a.75.75 0 0 1-.696-1.028L4.192 11 2.304 6.279a.75.75 0 0 1 .075-.7M15.319 1.686A.75.75 0 0 1 16 1.25h5a.75.75 0 0 1 .681 1.064l-5.838 12.65 3.808 6.664A.75.75 0 0 1 19 22.75h-5a.75.75 0 0 1-.651-.378l-4-7a.75.75 0 0 1-.03-.686z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Xing;
