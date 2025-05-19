import React from "react";
const CircleArrowUpDown: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-3 6.5a.75.75 0 0 1 .53.22l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v5.19a.75.75 0 0 1-1.5 0v-5.19l-.72.72a.75.75 0 1 1-1.06-1.06l2-2A.75.75 0 0 1 9 7.75m6 0a.75.75 0 0 1 .75.75v5.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V8.5a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowUpDown;
