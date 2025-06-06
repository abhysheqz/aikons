import React from "react";
const CloudMidRain: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.407 18.536 8.5 17.5l1.093 1.036c.547.56.547 1.456-.029 2.016-.288.28-.66.448-1.064.448-.403 0-.776-.168-1.064-.448a1.417 1.417 0 0 1-.029-2.016M14.407 18.536 15.5 17.5l1.093 1.036c.547.56.547 1.456-.029 2.016-.288.28-.66.448-1.064.448-.403 0-.776-.168-1.064-.448a1.417 1.417 0 0 1-.029-2.016M10.907 13.036 12 12l1.093 1.036c.547.56.547 1.456-.029 2.016-.288.28-.66.448-1.064.448-.403 0-.776-.168-1.064-.448a1.417 1.417 0 0 1-.029-2.016M17.478 8.78h.022c2.485 0 4.5 1.941 4.5 4.335 0 1.703-1.018 3.176-2.5 3.885m-2.022-8.22q.021-.238.022-.481C17.5 5.372 15.038 3 12 3 9.123 3 6.762 5.128 6.52 7.839m10.958.941a5.17 5.17 0 0 1-1.235 2.89M6.52 7.84C3.984 8.07 2 10.129 2 12.634 2 14.566 3.181 16.233 4.886 17M6.52 7.839q.237-.022.48-.022c1.126 0 2.165.358 3 .963"
      />
    </svg>
  );
};
export default CloudMidRain;
