import React from "react";
const LaptopCloud: React.FC<
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
        d="M2.286 17.25h19.428l1.457 2.915a.75.75 0 0 1-.671 1.085h-21a.75.75 0 0 1-.67-1.085zM19 2.75A2.25 2.25 0 0 1 21.25 5v10.75H2.75V5A2.25 2.25 0 0 1 5 2.75zm-7 3.5c-1.243 0-2.25 1.075-2.25 2.4h-.562c-.932 0-1.688.806-1.688 1.8s.756 1.8 1.688 1.8h5.624c.932 0 1.688-.806 1.688-1.8s-.755-1.8-1.687-1.8h-.563c0-1.325-1.007-2.4-2.25-2.4"
      />
    </svg>
  );
};
export default LaptopCloud;
