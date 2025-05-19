import React from "react";
const Iconjar: React.FC<
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
        d="M19.715 15.432 17.41 21.5H6.59l-2.305-6.068c-.566-1.774-.368-4.1 1.312-4.932l-1.49-2h6.84s1.865 1.663.334 4.503c-1.34 2.489.162 4.497 2.072 3.746S15.86 12.5 14.37 8.5h5.523l-1.49 2c1.68.832 1.878 3.158 1.312 4.932M9.25 5.25a2.75 2.75 0 1 1 5.5 0v.25H20V7H4V5.5h5.25z"
      />
    </svg>
  );
};
export default Iconjar;
