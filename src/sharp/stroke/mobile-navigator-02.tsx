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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 22h16V2H4zM10.5 19h3"
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6.5c-1.933 0-3.5 1.447-3.5 3.232 0 1.021.438 1.815 1.313 2.524.616.5 1.738 1.571 2.187 2.244.471-.66 1.57-1.745 2.188-2.244.874-.71 1.312-1.503 1.312-2.524C15.5 7.947 13.933 6.5 12 6.5Z"
      />
    </svg>
  );
};
export default MobileNavigator_02;
