import React from "react";
const Pan_01: React.FC<
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
        d="M4.836 22.135a2.1 2.1 0 0 1-2.97-2.97c.643-.644 1.384-1.16 2.112-1.667.743-.517 1.473-1.025 2.073-1.651.277-.288.415-.432.547-.429s.259.15.51.442a10 10 0 0 0 1.033 1.032c.292.252.438.378.441.51.004.133-.14.27-.428.547-.626.6-1.135 1.33-1.652 2.074-.507.728-1.022 1.468-1.666 2.112"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.334 3.666A8.25 8.25 0 1 0 8.666 15.334 8.25 8.25 0 0 0 20.334 3.666m-8.132 3.536a3.25 3.25 0 1 1 4.596 4.596 3.25 3.25 0 0 1-4.596-4.596m5.657-1.06a4.75 4.75 0 1 0-6.718 6.717 4.75 4.75 0 0 0 6.718-6.718"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pan_01;
