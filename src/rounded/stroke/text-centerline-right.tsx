import React from "react";
const TextCenterlineRight: React.FC<
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
        d="M3 3h18M3 21h18M15 9h6M15 15h6M3.586 15.414C4.172 16 5.114 16 7 16s2.828 0 3.414-.586S11 13.886 11 12s0-2.828-.586-3.414S8.886 8 7 8s-2.828 0-3.414.586S3 10.114 3 12s0 2.828.586 3.414"
      />
    </svg>
  );
};
export default TextCenterlineRight;
