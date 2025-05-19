import React from "react";
const TextFirstlineRight: React.FC<
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
        d="M15 3.5h6M15 9.5h6M3 15.5h18M3 21.5h18M3.586 9.914c.586.586 1.528.586 3.414.586s2.828 0 3.414-.586S11 8.386 11 6.5s0-2.828-.586-3.414S8.886 2.5 7 2.5s-2.828 0-3.414.586S3 4.614 3 6.5s0 2.828.586 3.414"
      />
    </svg>
  );
};
export default TextFirstlineRight;
