import React from "react";
const MobileNavigator_01: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 9c0-3.3 0-4.95 1.172-5.975S8.229 2 12 2s5.657 0 6.828 1.025S20 5.7 20 9v6c0 3.3 0 4.95-1.172 5.975S15.771 22 12 22s-5.657 0-6.828-1.025S4 18.3 4 15z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.629 14.247a.906.906 0 0 1-1.258 0c-1.544-1.497-3.613-3.168-2.604-5.595A3.53 3.53 0 0 1 12 6.5c1.378 0 2.688.84 3.233 2.152 1.008 2.424-1.056 4.104-2.604 5.595Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 19h2"
      />
    </svg>
  );
};
export default MobileNavigator_01;
