import React from "react";
const PointingRight_03: React.FC<
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
        d="M18.293 1.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 1 1-1.414-1.414L19.086 6H15.5a1 1 0 1 1 0-2h3.586l-.793-.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.969 5.283a2.49 2.49 0 0 1 3.43 3.576l-.768.896h8.119a2.5 2.5 0 1 1 0 5h-5.5V18.5a3.75 3.75 0 0 1-3.75 3.75h-5a3.75 3.75 0 0 1-3.75-3.75v-6.93c0-.92.46-1.778 1.224-2.288z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingRight_03;
