import React from "react";
const ThirdBracketCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M8 7a1 1 0 0 0-1 1v2.197l-.832 1.248a1 1 0 0 0 0 1.11L7 13.803V16a1 1 0 0 0 1 1h2v-2H9v-1.803L8.202 12 9 10.803V9h1V7zm6 2h1v1.803L15.798 12 15 13.197V15h-1v2h2a1 1 0 0 0 1-1v-2.197l.832-1.248a1 1 0 0 0 0-1.11L17 10.197V8a1 1 0 0 0-1-1h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThirdBracketCircle;
