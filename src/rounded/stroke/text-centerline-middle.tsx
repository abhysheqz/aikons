import React from "react";
const TextCenterlineMiddle: React.FC<
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
        d="M3 3h18M3 21h18M3 9h2M19 9h2M3 15h2M19 15h2M8.586 15.414C9.172 16 10.114 16 12 16s2.828 0 3.414-.586S16 13.886 16 12s0-2.828-.586-3.414S13.886 8 12 8s-2.828 0-3.414.586S8 10.114 8 12s0 2.828.586 3.414"
      />
    </svg>
  );
};
export default TextCenterlineMiddle;
