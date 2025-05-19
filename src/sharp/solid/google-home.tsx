import React from "react";
const GoogleHome: React.FC<
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
        d="m18.452 2.446-.261-.196H5.809l-.26.196a10.7 10.7 0 0 0-4.299 8.58C1.25 16.947 6.063 21.75 12 21.75s10.75-4.802 10.75-10.725c0-3.509-1.69-6.624-4.298-8.58M12 6C9.54 6 7.426 5.26 6.5 4.2h11.001c-.926 1.06-3.04 1.8-5.5 1.8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoogleHome;
