import React from "react";
const RainDrop: React.FC<
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
        d="M9.078 2.428a4.213 4.213 0 0 1 5.844 0c1.28 1.216 2.849 2.892 4.102 4.814 1.247 1.913 2.226 4.138 2.226 6.436 0 4.468-3.507 9.072-9.25 9.072s-9.25-4.604-9.25-9.072c0-2.298.979-4.523 2.226-6.436C6.23 5.32 7.798 3.644 9.078 2.428"
      />
    </svg>
  );
};
export default RainDrop;
