import React from "react";
const SquareArrowExpand_02: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM10.75 7a.75.75 0 0 0-.75-.75H7a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0V8.81l2.72 2.72a.75.75 0 1 0 1.06-1.06L8.81 7.75H10a.75.75 0 0 0 .75-.75m1.72 5.47a.75.75 0 0 0 0 1.06l2.72 2.72H14a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v1.19l-2.72-2.72a.75.75 0 0 0-1.06 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowExpand_02;
