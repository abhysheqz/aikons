import React from "react";
const Cancel_02: React.FC<
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
        strokeWidth={1.5}
        d="m19.97 6.717-2.686-2.688a.1.1 0 0 0-.142 0l-5.13 5.145L6.857 4.04a.1.1 0 0 0-.142 0L4.03 6.727a.1.1 0 0 0 0 .143l5.154 5.133-5.132 5.138a.1.1 0 0 0 0 .142l2.686 2.688a.1.1 0 0 0 .142 0l5.133-5.138 5.112 5.136a.1.1 0 0 0 .143 0l2.686-2.688a.1.1 0 0 0 0-.142l-5.113-5.136 5.13-5.144a.1.1 0 0 0 0-.142Z"
      />
    </svg>
  );
};
export default Cancel_02;
