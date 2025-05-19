import React from "react";
const Webhook: React.FC<
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
        d="M5.062 13A4 4 0 1 0 11 16.5h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 7.5 3.057 5.503a4 4 0 1 1-.557 6.62"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 8.5a1 1 0 1 0 0-2m0 2a1 1 0 1 1 0-2m0 2v-2M7 17.5a1 1 0 1 0 0-2m0 2a1 1 0 1 1 0-2m0 2v-2M17 17.5a1 1 0 1 0 0-2m0 2a1 1 0 1 1 0-2m0 2v-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7.5a4 4 0 1 0-5.943 3.497L7 16.5"
      />
    </svg>
  );
};
export default Webhook;
