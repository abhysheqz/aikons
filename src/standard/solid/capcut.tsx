import React from "react";
const Capcut: React.FC<
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
        d="M15.825 6.107H4.356a.71.71 0 0 0-.717.707V7.5l6.45 3.182L16.542 7.5v-.685a.71.71 0 0 0-.717-.707m3.069.231c-.232-1.466-1.518-2.588-3.07-2.588H4.357c-1.715 0-3.106 1.372-3.106 3.064V8.23c0 .446.256.854.66 1.054L7.418 12 1.91 14.717c-.404.2-.66.608-.66 1.054v1.415c0 1.692 1.39 3.064 3.106 3.064h11.469c1.551 0 2.837-1.122 3.069-2.588l2.127 1.05c.59.29 1.307.055 1.603-.528a1.17 1.17 0 0 0-.535-1.581l-3.762-1.856a1 1 0 0 0-.115-.057L12.76 12l5.452-2.69q.06-.025.115-.057l3.762-1.856c.59-.291.83-1 .535-1.581a1.2 1.2 0 0 0-1.603-.527zm-8.805 6.98L3.639 16.5v.686c0 .39.321.707.717.707h11.469a.71.71 0 0 0 .717-.707V16.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Capcut;
