import React from "react";
const KeyframeAlignHorizontal: React.FC<
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
        d="M10.714 7.85a1.677 1.677 0 0 1 2.572 0l2.545 3c.559.659.559 1.641 0 2.3l-2.545 3a1.677 1.677 0 0 1-2.572 0l-2.544-3a1.79 1.79 0 0 1 0-2.3zM1 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m18-1a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframeAlignHorizontal;
