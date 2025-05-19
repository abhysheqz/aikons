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
        fill="currentColor"
        fillRule="evenodd"
        d="M12 10a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1M12 15a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h8a1 1 0 0 0 1-1M22 5a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h18a1 1 0 0 0 1-1M22 20a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h18a1 1 0 0 0 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22 11a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2z"
      />
    </svg>
  );
};
export default TextCenterlineLeft;
