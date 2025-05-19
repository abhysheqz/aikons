import React from "react";
const TextCenterlineCenterTop: React.FC<
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
        d="M3 3.5h2M19 3.5h2M3 9.5h2M19 9.5h2M3 15.5h18M3 21h18M8.586 10.414C9.172 11 10.114 11 12 11s2.828 0 3.414-.586S16 8.886 16 7s0-2.828-.586-3.414S13.886 3 12 3s-2.828 0-3.414.586S8 5.114 8 7s0 2.828.586 3.414"
      />
    </svg>
  );
};
export default TextCenterlineCenterTop;
