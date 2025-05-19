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
        d="M12.002 5h10M12.002 10h7M12.002 15h10M12.002 20h7M2 9.5 5 7l3 2.5M8.002 14.5l-3 2.5-3-2.5"
      />
    </svg>
  );
};
export default TextIndent_01;
