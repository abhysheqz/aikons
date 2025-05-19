import React from "react";
const Presentation_01: React.FC<
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
        d="M1.75 11.65c0 3.111 0 4.667.948 5.634.948.966 2.474.966 5.526.966h7.552c3.052 0 4.578 0 5.526-.966.948-.967.948-2.523.948-5.634v-3.3c0-3.111 0-4.667-.948-5.633s-2.474-.967-5.526-.967H8.224c-3.052 0-4.578 0-5.526.967-.948.966-.948 2.522-.948 5.633z"
      />
      <path
        fill="currentColor"
        d="M11 20.766V22a1 1 0 1 0 2 0v-1.234l3.486 2.092a1 1 0 0 0 1.029-1.716L13 18.435V17h-2v1.434l-4.514 2.708a1 1 0 0 0 1.029 1.716z"
      />
    </svg>
  );
};
export default Presentation_01;
