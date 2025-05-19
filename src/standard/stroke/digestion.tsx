import React from "react";
const Digestion: React.FC<
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
        d="M9.524 2c0 1.5.953 2.574 2.98 1.872C16.69 2.421 20 6.849 20 10.8c0 4.247-2.817 7.2-6.949 7.2-2.523 0-5.551 1.5-5.551 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.006 2v.776c0 3.802 5.422 6.611 3.631 10.424C8.926 14.715 4 17.5 4 22M14 7a3.03 3.03 0 0 1 2 2"
      />
    </svg>
  );
};
export default Digestion;
