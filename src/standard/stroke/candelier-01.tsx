import React from "react";
const Candelier_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 3h5M12.013 3v13.978"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4.5 14v-2.25a3.75 3.75 0 1 1 7.5 0m0 0V12m0-.25a3.75 3.75 0 1 1 7.5 0V14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17.112 16.553 1.194-2.277a.53.53 0 0 1 .47-.276h1.449c.198 0 .38.107.469.276l1.194 2.277c.349.665-.159 1.447-.938 1.447h-2.9c-.78 0-1.287-.782-.938-1.447M2.112 16.553l1.194-2.277a.53.53 0 0 1 .47-.276h1.449c.198 0 .38.107.469.276l1.194 2.277C7.237 17.218 6.729 18 5.95 18h-2.9c-.78 0-1.287-.782-.938-1.447M9.457 19.47l1.397-2.235a.5.5 0 0 1 .424-.235h1.446a.5.5 0 0 1 .424.235l1.397 2.235a1 1 0 0 1-.848 1.53h-3.392a1 1 0 0 1-.848-1.53"
      />
    </svg>
  );
};
export default Candelier_01;
