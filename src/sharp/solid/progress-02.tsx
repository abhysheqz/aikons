import React from "react";
const Progress_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m6.93 7.88A7.5 7.5 0 0 1 19.5 12H12V4.5a7.5 7.5 0 0 1 6.93 4.63"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Progress_02;
