import React from "react";
const TextIndent_01: React.FC<
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
        d="M12 4.5h10M12 9.5h7M12 14.5h10M12 19.5h7M1.998 9l1.065-1.102C3.964 6.966 4.415 6.5 4.998 6.5s1.034.466 1.935 1.398L7.998 9M8 14l-1.065 1.102C6.034 16.034 5.583 16.5 5 16.5s-1.034-.466-1.935-1.398L2 14"
      />
    </svg>
  );
};
export default TextIndent_01;
