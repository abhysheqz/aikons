import React from "react";
const EditOff_04: React.FC<
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
        d="M3.664 2.251 21.75 20.337l-1.414 1.415L2.25 3.666z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m9.47 9.47-7.22 7.22v5.061h5.06l7.22-7.22zM16.298 12.764 18 11.06 12.94 6l-1.704 1.702zM16.69 2.251l5.06 5.06-2.689 2.69-5.06-5.062z"
      />
    </svg>
  );
};
export default EditOff_04;
