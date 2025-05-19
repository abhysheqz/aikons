import React from "react";
const MobileNavigator_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 6.5c1.894 0 3.5 1.613 3.5 3.57 0 1.989-1.632 3.384-3.14 4.333a.72.72 0 0 1-.72 0c-1.505-.958-3.14-2.338-3.14-4.333 0-1.957 1.606-3.57 3.5-3.57Z"
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
export default MobileNavigator_02;
