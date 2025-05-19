import React from "react";
const CircleArrowShrink_02: React.FC<
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
        d="M12.885 11.115c-.517-.517-.431-2.715-.431-2.715m.431 2.715c.517.517 2.715.431 2.715.431m-2.715-.43L16.5 7.5m-5.388 5.388c-.518-.517-2.715-.431-2.715-.431m2.715.431c.517.518.431 2.715.431 2.715m-.431-2.715L7.5 16.5"
      />
    </svg>
  );
};
export default CircleArrowShrink_02;
