import React from "react";
const StopWatch: React.FC<
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
        d="m5.469 6.03-1.5-1.5 1.06-1.06 1.5 1.5zm14.56-1.5-1.5 1.5-1.06-1.06 1.5-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 3.25 12 3.25m.75 9.94V8.5h-1.5v5.31l2.72 2.72 1.06-1.06z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 2.75H9v-1.5h6v1.5h-2.25v.75h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StopWatch;
