import React from "react";
const Soundcloud: React.FC<
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
        d="M7.25 19.75V6h1.5v13.75zM4.25 19.658V9.879h1.5v9.779zM1.25 17.907V11.63h1.5v6.277zM12 4.25c3.322 0 6.115 2.465 6.245 5.65 2.511.339 4.505 2.365 4.505 4.9 0 2.782-2.4 4.95-5.25 4.95h-7.25V4.25z"
      />
    </svg>
  );
};
export default Soundcloud;
