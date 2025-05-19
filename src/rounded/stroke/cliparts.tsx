import React from "react";
const Cliparts: React.FC<
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
        d="M12.014 22c4.968 0 9.091-3.617 9.879-8.362.11-.664.165-.995.017-1.457s-.45-.764-1.055-1.368l-7.668-7.668c-.604-.605-.906-.907-1.368-1.055s-.793-.093-1.457.017C5.617 2.895 2 7.018 2 11.986 2 17.516 6.484 22 12.014 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2.5c0 4.714 0 6.571 1.464 8.036C14.93 12 16.787 12 21.5 12"
      />
    </svg>
  );
};
export default Cliparts;
