import React from "react";
const Tap_07: React.FC<
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
        fillRule="evenodd"
        d="M10 3.5a3 3 0 0 0-3 3 1 1 0 0 1-2 0 5 5 0 0 1 10 0 1 1 0 1 1-2 0 3 3 0 0 0-3-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.306 13.405a1.22 1.22 0 0 1 1.86-.108l.103.116.027.035 1.45 1.654a.45.45 0 0 0 .788-.296V5.822a1.16 1.16 0 0 1 2.317.098v7.113a.408.408 0 1 0 .816 0v-2.53h1.119c.44 0 .827.283.972.695q.059.167.06.354v2.446a.408.408 0 1 0 .815 0v-2.531h1.12c.44 0 .826.283.971.696q.06.166.06.354v2.014a.408.408 0 0 0 .816 0v-2.1h1.119c.557 0 1.031.459 1.031 1.05v6.271a2.484 2.484 0 0 1-2.47 2.497H9.53a2 2 0 0 1-1.74-1.014l-3.497-6.178-.012-.016a1.37 1.37 0 0 1 .024-1.636"
      />
    </svg>
  );
};
export default Tap_07;
