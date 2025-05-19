import React from "react";
const LaptopCharging: React.FC<
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
        d="M21.818 17.25H2.183L.91 19.393l-.021.04c-.446.864.22 1.817 1.127 1.817h19.968c.907 0 1.573-.953 1.128-1.817l-.022-.04zM15.554 2.75c1.132 0 2.058 0 2.789.099.764.102 1.426.324 1.955.853s.75 1.191.854 1.955c.098.731.098 1.657.098 2.79v7.303H2.75V8.446c0-1.132 0-2.058.099-2.789.102-.764.325-1.426.853-1.955.529-.529 1.191-.75 1.955-.853.731-.099 1.657-.099 2.79-.099zm-3.107 2.605a1 1 0 0 0-1.341.448l-1.5 3a1 1 0 0 0 .894 1.447h1.382l-.776 1.553a1 1 0 0 0 1.789.894l1.5-3A1 1 0 0 0 13.5 8.25h-1.382l.777-1.553a1 1 0 0 0-.448-1.342"
      />
    </svg>
  );
};
export default LaptopCharging;
