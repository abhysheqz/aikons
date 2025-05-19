import React from "react";
const RightToLeftListNumber: React.FC<
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
        d="M3 5.25h10v2H3zM3 11.25h10v2H3zM3 17.25h10v2H3zM16.5 14h3.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H18V20h3v1.5h-3.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h2.25v-1.5h-3zM17.75 4H17V2.5h1.5a.75.75 0 0 1 .75.75V8.5H20V10h-3V8.5h.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RightToLeftListNumber;
