import React from "react";
const TextFirstlineLeft: React.FC<
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
        d="M3 3.5h6M3 9.5h6M3 15.5h18M3 21.5h18M13.586 9.914c.586.586 1.528.586 3.414.586s2.828 0 3.414-.586S21 8.386 21 6.5s0-2.828-.586-3.414S18.886 2.5 17 2.5s-2.828 0-3.414.586S13 4.614 13 6.5s0 2.828.586 3.414"
      />
    </svg>
  );
};
export default TextFirstlineLeft;
