import React from "react";
const WhatsappBusiness: React.FC<
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
        d="M12 22.002c5.524 0 10.002-4.478 10.002-10.002S17.524 1.998 12 1.998 1.998 6.476 1.998 12c0 1.889.434 3.498 1.344 5.005l-1.34 4.98a.01.01 0 0 0 .013.012l4.955-1.331c1.513.92 3.13 1.336 5.03 1.336Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.998 12h3.784m-3.784 0V7.517h3.784a2.242 2.242 0 0 1 0 4.483m-3.784 0v4.483h3.784a2.242 2.242 0 0 0 0-4.483"
      />
    </svg>
  );
};
export default WhatsappBusiness;
