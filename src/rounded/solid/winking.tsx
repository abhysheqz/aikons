import React from "react";
const Winking: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-3.4 13.3a.75.75 0 1 0-1.2.9 5.74 5.74 0 0 0 4.6 2.3 5.74 5.74 0 0 0 4.6-2.3.75.75 0 1 0-1.2-.9 4.24 4.24 0 0 1-3.4 1.7 4.24 4.24 0 0 1-3.4-1.7m6.93-7.08a.75.75 0 0 1 .029 1.03c.767.018 1.529.367 2.041 1.05a.75.75 0 1 1-1.2.9c-.45-.6-1.35-.6-1.8 0a.75.75 0 0 1-1.35-.45c0-.725.351-1.379.626-1.791a7 7 0 0 1 .594-.74.75.75 0 0 1 1.06 0m-7.534.28c-.688 0-1.246.56-1.246 1.25s.558 1.25 1.246 1.25h.008c.688 0 1.246-.56 1.246-1.25s-.558-1.25-1.246-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Winking;
