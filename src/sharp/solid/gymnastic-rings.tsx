import React from "react";
const GymnasticRings: React.FC<
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
        d="M17.5 9.576V1.5h-2v8.076a6.502 6.502 0 0 0 1 12.924 6.5 6.5 0 0 0 1-12.924M12 16a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.5 5.574V1.5h-2v4.078C3.386 6.064 1 8.753 1 12.001c0 3.846 3.454 6.888 7.253 6.459l-.225-1.988C5.403 16.77 3 14.641 3 12.001 3 9.517 5.019 7.5 7.513 7.5a4.51 4.51 0 0 1 3.674 1.886l1.626-1.166A6.52 6.52 0 0 0 8.5 5.574"
      />
    </svg>
  );
};
export default GymnasticRings;
