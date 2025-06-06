import React from "react";
const Matches: React.FC<
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
        d="M15 8H9c-1.886 0-2.828 0-3.414.586S5 10.114 5 12v6c0 1.886 0 2.828.586 3.414S7.114 22 9 22h6c1.886 0 2.828 0 3.414-.586S19 19.886 19 18v-6c0-1.886 0-2.828-.586-3.414S16.886 8 15 8M18 8V6c0-1.886 0-2.828-.586-3.414S15.886 2 14 2h-4c-1.886 0-2.828 0-3.414.586S6 4.114 6 6v2M12 8V5M9 8V5M15 8V5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.154 19C13.726 19 15 17.746 15 16.2c0-2.295-2.44-2.8-2.44-5.2-1.828 1-1.56 4-1.56 4s-1.69 0-1.69-1.5c-.948 2.5.357 5.5 2.844 5.5Z"
      />
    </svg>
  );
};
export default Matches;
