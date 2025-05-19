import React from "react";
const NotificationOff_03: React.FC<
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
        d="M7.049 2.9A8.25 8.25 0 0 1 20.25 9.5v2.172c0 .331.132.649.366.883l1.414 1.415c.141.14.22.331.22.53v1.382c0 .656-.37 1.283-1 1.567q-.13.058-.22.094a.32.32 0 0 1-.342-.082L6.862 3.635c-.072-.073-.119-.17-.1-.271a.75.75 0 0 1 .287-.464M18.23 17.736a.75.75 0 0 1-.562.899c-1.537.354-3.426.615-5.668.615-4.524 0-7.61-1.063-9.25-1.801a1.71 1.71 0 0 1-1-1.567V14.5a.75.75 0 0 1 .22-.53l1.414-1.415a1.25 1.25 0 0 0 .366-.883V9.5c0-1.499.4-2.906 1.1-4.12a.75.75 0 0 1 1.025-.274z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m21.5 21.5-19-19M22 22 2 2"
      />
      <path
        fill="currentColor"
        d="M15.682 20.688a.75.75 0 0 1-.22.904c-.932.726-2.146 1.157-3.462 1.157s-2.53-.43-3.461-1.157a.75.75 0 0 1-.22-.904c.044-.098.154-.14.261-.125.542.074 2.252.295 3.42.295s2.878-.22 3.42-.295c.107-.014.217.027.262.125"
      />
    </svg>
  );
};
export default NotificationOff_03;
