import React from "react";
const TransitionTop: React.FC<
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
        d="M3 20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zM3 7V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3M12 6l3 3m-3-3L9 9m3-3v8"
      />
    </svg>
  );
};
export default TransitionTop;
