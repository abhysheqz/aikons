import React from "react";
const Vr: React.FC<
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
        d="M22 3H2v10h7l3-3 3 3h7zM5 6h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m10.08 17 2.02 2-2.02 2m5.051-2.229C18.602 18.231 21.266 16.79 22 15M2 15c.777 1.921 4.723 3.843 9.509 3.99"
      />
    </svg>
  );
};
export default Vr;
