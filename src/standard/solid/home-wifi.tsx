import React from "react";
const HomeWifi: React.FC<
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
        d="M16.995 14c-1.73 0-3.32.64-4.626 1.702a1 1 0 1 0 1.262 1.551c.992-.806 2.146-1.253 3.364-1.253 1.221 0 2.379.45 3.372 1.261a1 1 0 1 0 1.266-1.549C20.324 14.643 18.729 14 16.995 14"
      />
      <path
        fill="currentColor"
        d="M16.995 17.36c-.98 0-1.898.288-2.697.784a1 1 0 0 0 1.054 1.7 3.1 3.1 0 0 1 1.643-.483c.581 0 1.14.17 1.65.488a1 1 0 1 0 1.058-1.698 5.1 5.1 0 0 0-2.708-.79M17 21a1 1 0 1 0 0 2h.006a1 1 0 0 0 0-2z"
      />
      <path
        fill="currentColor"
        d="M13.166 2.333a2.75 2.75 0 0 0-3.34 0L3.501 7.167a2.75 2.75 0 0 0-1.04 2.656l1.505 8.648a2.75 2.75 0 0 0 2.71 2.279h6.364a2.5 2.5 0 0 1-.718-1.864 2.5 2.5 0 0 1-.905-4.347c1.542-1.255 3.46-2.04 5.573-2.04.98 0 1.919.17 2.797.476l.669-3.074a2.75 2.75 0 0 0-1.017-2.769z"
      />
    </svg>
  );
};
export default HomeWifi;
