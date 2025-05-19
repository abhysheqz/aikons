import React from "react";
const Presentation_04: React.FC<
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
        d="M12 1a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M11 18.434V17h2v1.434l4.515 2.708a1 1 0 0 1-1.03 1.716L13 20.766V22a1 1 0 1 1-2 0v-1.234l-3.485 2.092a1 1 0 0 1-1.03-1.716z"
      />
      <path
        fill="currentColor"
        d="M1.75 11.607c0 3.132 0 4.697.948 5.67s2.474.973 5.526.973h7.552c3.052 0 4.578 0 5.526-.973s.948-2.538.948-5.67V9.393c0-3.132 0-4.697-.948-5.67s-2.474-.973-5.526-.973H8.224c-3.052 0-4.578 0-5.526.973S1.75 6.26 1.75 9.393z"
      />
    </svg>
  );
};
export default Presentation_04;
