import React from "react";
const Rotate_01: React.FC<
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
        d="M12 3a9 9 0 1 0 9 9 1 1 0 1 1 2 0c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1c2.168 0 4.19.628 5.894 1.711l1.328-1.328A1 1 0 0 1 21.01 2v3.132c0 1.222-1.518 1.779-2.309.86A8.98 8.98 0 0 0 12 3"
      />
    </svg>
  );
};
export default Rotate_01;
