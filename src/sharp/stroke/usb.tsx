import React from "react";
const Usb: React.FC<
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
        d="M15.527 5.5V2H8.506v3.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.018 16.5V22M10.512 8.5h3.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.194 5.501h-6.09a.1.1 0 0 0-.1.1v5.881l3.019 5.067h3.171m-.382-11.048h6.09a.1.1 0 0 1 .1.1v5.881l-3.018 5.067h-3.172"
      />
    </svg>
  );
};
export default Usb;
