import React from "react";
const University: React.FC<
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
        d="M1 22h21.5M3 12.997v8.985m18-8.985v8.985M7.5 8.005v13.977m9-13.977v13.977M1 13.007h6m16 0h-6M5.5 8.005h13M12 21.981v-2.994M10.5 11.009v1.498m3-1.498v1.498M10.5 14.994v1.497m3-1.497v1.497"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.298 8.028V5.006m0 0V2.009a.01.01 0 0 1 .01-.01h3.901v3.007z"
      />
    </svg>
  );
};
export default University;
