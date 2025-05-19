import React from "react";
const Highlighter: React.FC<
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
        d="M13.205 2.97a.75.75 0 0 1 1.06 0l7.765 7.764a.75.75 0 0 1 0 1.061l-4.235 4.234a.75.75 0 0 1-1.06 0L8.97 8.264a.75.75 0 0 1 0-1.06zM8.26 9.324l-1.058 1.058a.75.75 0 0 0-.184.758c.02.178.072.679.018 1.023-.107.677-.472 1.68-1.599 2.807a.75.75 0 0 0 0 1.06l3.528 3.53a.75.75 0 0 0 1.061 0c1.127-1.127 2.13-1.491 2.807-1.598.344-.055.846-.003 1.023.018a.75.75 0 0 0 .758-.185l1.059-1.058zM1.962 19.976l2.788-2.867 3.121 3.122-.855.811a.75.75 0 0 1-.516.206h-4a.75.75 0 0 1-.538-1.273"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Highlighter;
