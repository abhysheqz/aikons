import React from "react";
const MoveRight: React.FC<
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
        d="M19.57 8.012a.75.75 0 0 0-.642-.259c-.29.028-.416.346-.416.638V11h-6.258a1 1 0 1 0 0 2h6.258v2.61c0 .291.126.61.416.637a.75.75 0 0 0 .641-.259l3-3.5a.75.75 0 0 0 0-.976zM1.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoveRight;
