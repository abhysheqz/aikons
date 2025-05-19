import React from "react";
const TextClear: React.FC<
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
        d="M11.486 20H8.492m-2.994 0h2.994M12.5 4 8.492 20M12.5 4H7.057c-.916 0-1.714.625-1.936 1.515L5 6m7.5-2h5.502a1 1 0 0 1 .968 1.242L18.78 6M14 15l5 5m-5 0 5-5"
      />
    </svg>
  );
};
export default TextClear;
