import React from "react";
const FirstAidKit: React.FC<
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
        d="M8 6V4h8v2h2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 5.25A2.75 2.75 0 0 0 1.25 8v11A2.75 2.75 0 0 0 4 21.75h16A2.75 2.75 0 0 0 22.75 19V8A2.75 2.75 0 0 0 20 5.25zM13 10a1 1 0 1 0-2 0v2.5H8.5a1 1 0 1 0 0 2H11V17a1 1 0 1 0 2 0v-2.5h2.5a1 1 0 1 0 0-2H13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FirstAidKit;
