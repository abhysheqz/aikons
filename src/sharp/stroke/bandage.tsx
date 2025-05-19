import React from "react";
const Bandage: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6.628 7.372 2 2 7.371 6.629 12M12 6.628 17.372 12M12 6.628 6.629 12m10.743 0L22 16.628 16.628 22 12 17.371M17.372 12 12 17.37m0 0L6.629 12M13.591 5.037 16.628 2 22 7.371l-3.038 3.038m-8.553 8.553L7.371 22 2 16.628l3.038-3.037"
      />
    </svg>
  );
};
export default Bandage;
