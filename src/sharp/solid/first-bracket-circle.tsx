import React from "react";
const FirstBracketCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M8.5 12c0-1.352.642-2.517 1.58-3.186L8.92 7.186C7.446 8.236 6.5 10.012 6.5 12s.947 3.763 2.42 4.814l1.16-1.629C9.143 14.516 8.5 13.352 8.5 12m9 0c0-1.988-.947-3.764-2.42-4.814l-1.16 1.628c.938.67 1.58 1.834 1.58 3.186s-.642 2.516-1.58 3.185l1.16 1.629c1.473-1.05 2.42-2.827 2.42-4.814"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FirstBracketCircle;
