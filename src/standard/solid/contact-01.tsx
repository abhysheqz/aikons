import React from "react";
const Contact_01: React.FC<
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
        d="M2.75 3.75A2.75 2.75 0 0 1 5.5 1h14a2.75 2.75 0 0 1 2.75 2.75v16a2.75 2.75 0 0 1-2.75 2.75h-14a2.75 2.75 0 0 1-2.75-2.75v-1H2a1 1 0 1 1 0-2h.75v-4H2a1 1 0 1 1 0-2h.75v-4H2a1 1 0 0 1 0-2h.75zm7 4.944C9.75 7.187 11 6 12.5 6c1.498 0 2.75 1.187 2.75 2.694 0 1.508-1.252 2.695-2.75 2.695-1.5 0-2.75-1.187-2.75-2.695m-2 8.056c0-2.582 2.147-4.639 4.75-4.639s4.75 2.057 4.75 4.639a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Contact_01;
