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
        strokeWidth={1.5}
        d="M5 6h6.155c.868 0 1.302 0 1.598.317.297.318.27.704.218 1.477C12.726 11.383 10.879 17.016 5 19M16 3v9m0 9v-9m0 0h3"
      />
    </svg>
  );
};
export default AlphabetKorean;
