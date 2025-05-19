import React from "react";
const Touch_02: React.FC<
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
        d="M7.5 9.634V3.75a2.5 2.5 0 0 1 5 0v4.998c1.864.063 4.57.638 6.603 2.685.936.942.992 2.32.82 3.46-.175 1.177-.626 2.343-.998 3.12l-1.033 2.157v2.58H7.5v-2.47l-.112-.13c-.181-.211-.428-.502-.69-.818-.51-.614-1.131-1.385-1.414-1.851l-.183-.296c-.268-.43-.588-.942-.803-1.465-.28-.681-.435-1.486-.132-2.358.17-.49.514-.98.872-1.406.367-.44.799-.87 1.203-1.242a23 23 0 0 1 1.26-1.08"
      />
    </svg>
  );
};
export default Touch_02;
