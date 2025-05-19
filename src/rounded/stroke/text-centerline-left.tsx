import React from "react";
const TextCenterlineLeft: React.FC<
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
        d="M3 3h18M3 21h18M3 9h6M3 15h6M13.586 15.414C14.172 16 15.114 16 17 16s2.828 0 3.414-.586S21 13.886 21 12s0-2.828-.586-3.414S18.886 8 17 8s-2.828 0-3.414.586S13 10.114 13 12s0 2.828.586 3.414"
      />
    </svg>
  );
};
export default TextCenterlineLeft;
