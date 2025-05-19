import React from "react";
const CircleArrowExpand_02: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.063 16.063c.518-.517.432-2.715.432-2.715m-.432 2.715c-.517.518-2.715.432-2.715.432m2.715-.432L13 13M7.937 7.937c.517-.518 2.715-.432 2.715-.432m-2.715.432c-.518.517-.432 2.715-.432 2.715m.432-2.715L11 11"
      />
    </svg>
  );
};
export default CircleArrowExpand_02;
