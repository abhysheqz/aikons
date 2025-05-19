import React from "react";
const RssLocked: React.FC<
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
        d="M15 5.375v-.75h-.75v.75zm7 0h.75v-.75H22zM22 11v.75h.75V11zm-7 0h-.75v.75H15zm0-4.875h7v-1.5h-7zm7 4.125h-7v1.5h7zm-4.5-4.875V3.688H16v1.687zm2-1.687v1.687H21V3.688zm-1-.938c.578 0 1 .445 1 .938H21c0-1.372-1.145-2.438-2.5-2.438zm-1 .938c0-.493.422-.938 1-.938v-1.5c-1.355 0-2.5 1.066-2.5 2.438zM22.75 11V5.375h-1.5V11zm-8.5-5.625V11h1.5V5.375z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 21H22v-7.5m-19-2V6h9.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.982 21h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 17.235c2.493 0 4.77 2.265 4.77 4.765M10 22c0-4.5-4.005-8-7.955-8"
      />
    </svg>
  );
};
export default RssLocked;
