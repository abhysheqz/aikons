import React from "react";
const TwoFinger_02: React.FC<
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
        d="M7.605 13.472V5.649c0-.97.638-1.681 1.49-1.681.85 0 1.554.802 1.554 1.659m0 0v5.351m0-5.351.038-2.131c0-.857.665-1.484 1.516-1.484.85 0 1.54.744 1.54 1.6v8.465m0-2.545s1.942-.386 2.633.41c.752.82.468 1.772.468 3.041m.032-1.895s1.732-.41 2.516.287c.754.522.575 2.69.575 3.127 0 3.844-.97 4.102-2.204 5.438 0 .862.024 2.07.024 2.07m-9.673-.077s.013-1.168 0-1.916c-4.94-6.174-5.85-6.46-.509-11.061"
      />
    </svg>
  );
};
export default TwoFinger_02;
