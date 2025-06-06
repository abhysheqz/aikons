import React from "react";
const Yoga_03: React.FC<
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
        strokeWidth={1.5}
        d="M9 10c0 3.866 3 7 3 7s3-3.134 3-7-3-7-3-7-3 3.134-3 7Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.33 8C4.115 7.046 2 7 2 7s.096 4.381 2.857 7.143S12 17 12 17s4.381-.096 7.143-2.857S22 7 22 7s-2.114.046-4.33 1M12.02 17c-.166 1.333.64 4 3.494 4 1.995 0 2.993-2 6.486 0-.4-2-1.2-3.28-2.367-4m-7.654 0c.167 1.333-.64 4-3.492 4C6.49 21 5.493 19 2 21c.4-2 1.2-3.28 2.367-4"
      />
    </svg>
  );
};
export default Yoga_03;
