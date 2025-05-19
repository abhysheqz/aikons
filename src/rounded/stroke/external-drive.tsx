import React from "react";
const ExternalDrive: React.FC<
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
        d="M20 14v-4c0-3.771 0-5.657-1.103-6.828S16.02 2 12.471 2h-.942C7.98 2 6.205 2 5.103 3.172S4 6.229 4 10v4c0 3.771 0 5.657 1.103 6.828S7.98 22 11.529 22h.942c3.549 0 5.324 0 6.426-1.172S20 17.771 20 14Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 18h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 15h16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 6h2M8 9h2"
      />
    </svg>
  );
};
export default ExternalDrive;
