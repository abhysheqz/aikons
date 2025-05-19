import React from "react";
const Knife_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.002 1.458a.75.75 0 0 1 1.015-.02c2.777 2.46 3.015 6.74.427 9.429l-7.362 7.653a.75.75 0 0 1-1.066.015l-1.785-1.756a.25.25 0 0 0-.364.014l-4.226 4.84c-.511.595-1.226.997-1.975 1.094-.766.1-1.58-.123-2.175-.79-.947-1.063-1.037-2.701.025-3.783l.017-.017z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Knife_02;
