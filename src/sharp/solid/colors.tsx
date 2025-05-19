import React from "react";
const Colors: React.FC<
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
        d="M12 1.25a6.101 6.101 0 0 0-2.3 11.755 7.84 7.84 0 0 1 8.202-4.101A6.101 6.101 0 0 0 12 1.25M10.693 21.755a7.82 7.82 0 0 1-1.889-5.106c0-.698.091-1.375.263-2.02a7.87 7.87 0 0 1-4.015-3.634 6.101 6.101 0 1 0 5.641 10.76"
      />
      <path
        fill="currentColor"
        d="M16.649 10.547a6.1 6.1 0 0 0-5.675 3.854 6.1 6.1 0 0 0-.427 2.248c0 1.807.785 3.43 2.034 4.548a6.101 6.101 0 1 0 4.067-10.65"
      />
    </svg>
  );
};
export default Colors;
