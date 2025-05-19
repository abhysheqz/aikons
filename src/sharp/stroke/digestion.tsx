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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.485 2c0 1.5.956 2.574 2.99 1.872 4.202-1.451 7.524 2.977 7.524 6.928 0 3.976-2.646 7.2-5.91 7.2h-1.064c-2.533 0-5.572 1.5-5.572 4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.006 2v.776c0 3.802 5.422 6.611 3.631 10.424C8.926 14.715 4 17.5 4 22M14 7a3.03 3.03 0 0 1 2 2"
      />
    </svg>
  );
};
export default Digestion;
