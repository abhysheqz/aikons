import React from "react";
const Wattpad: React.FC<
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
        d="M5.764 5.623c1.72.876 1.434 3.285 1.075 4.38 2.205-4.615 8.442-9.586 8.442-1.3.54-.931 2.158-3.014 4.317-3.9 2.699-1.107 4.721 1.108 1.502 4.429 0 0-1.61 1.66-3.22 4.982-1.609 3.321-5.901 6.643-7.277-.925-3.764 9.856-8.066 7.118-9.141.548-1.076-6.571 2.15-9.31 4.302-8.214"
      />
    </svg>
  );
};
export default Wattpad;
