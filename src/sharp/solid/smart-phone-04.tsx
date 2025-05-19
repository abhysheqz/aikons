import React from "react";
const SmartPhone_04: React.FC<
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
        d="M18.108 15.777C19.129 14.8 19.75 13.466 19.75 12s-.62-2.801-1.642-3.777l1.414-1.415c1.37 1.325 2.228 3.16 2.228 5.192s-.857 3.866-2.228 5.191z"
      />
      <path
        fill="currentColor"
        d="M15.5 13.527c.419-.4.666-.94.666-1.527 0-.588-.247-1.127-.666-1.527l1.414-1.414a4.1 4.1 0 0 1 1.252 2.94 4.1 4.1 0 0 1-1.252 2.942z"
      />
      <path
        fill="currentColor"
        d="M16.75 1.25H2.25v21.5h14.5v-5.742h-1.933V19H4.183V3.203H6.97l.484.977h4.094l.484-.977h2.786v3.805h1.933z"
      />
    </svg>
  );
};
export default SmartPhone_04;
