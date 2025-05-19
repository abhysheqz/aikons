import React from "react";
const WifiConnected_02: React.FC<
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
        d="M12 3c3.695 0 7.338 1.443 10.645 4.236a1 1 0 1 1-1.29 1.528C18.346 6.224 15.147 5 12 5S5.654 6.223 2.645 8.764a1 1 0 0 1-1.29-1.528C4.662 4.443 8.305 3 12 3m-7.14 7.732c4.36-3.633 10.146-3.659 14.303.019a1 1 0 0 1-1.326 1.498c-3.378-2.989-8.056-3.015-11.697.02a1 1 0 1 1-1.28-1.537M16.536 15.345a1 1 0 0 0-1.072-1.69c-1.409.895-2.744 2.38-3.693 3.572-.276.347-.525.677-.74.972a4 4 0 0 0-.851-.782 2.6 2.6 0 0 0-.733-.348 1.6 1.6 0 0 0-.447-.07 1 1 0 0 0-.094 1.996c.023.008.08.03.164.086.2.133.595.484 1.036 1.365a1 1 0 0 0 1.738.09v-.002l.101-.153a28.817 28.817 0 0 1 1.391-1.908c.92-1.158 2.086-2.422 3.2-3.128"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiConnected_02;
