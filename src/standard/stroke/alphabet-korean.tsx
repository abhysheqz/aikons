import React from "react";
const AlphabetKorean: React.FC<
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
        d="M5 6h7a.966.966 0 0 1 .979.998C12.804 11.026 11.448 16.824 5 19M16 3v9m0 9v-9m0 0h3"
      />
    </svg>
  );
};
export default AlphabetKorean;
