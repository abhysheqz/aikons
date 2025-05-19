import React from "react";
const AmericanFootball: React.FC<
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
        d="M3.91 21.15 10 15.06l1.47 1.47 1.06-1.06L11.06 14 14 11.06l1.47 1.47 1.06-1.06L15.06 10l6.103-6.102c.439.599.74 1.289.875 2.018l.001.008c.768 4.421-.575 9.096-3.818 12.287-3.169 3.199-7.897 4.645-12.31 3.803a4.9 4.9 0 0 1-2-.864M2.844 20.095a4.9 4.9 0 0 1-.897-2.047l-.003-.013c-.73-4.42.613-9.074 3.825-12.28 3.213-3.208 7.87-4.544 12.289-3.808l.013.002c.735.136 1.43.442 2.033.886L14 8.94l-1.47-1.47-1.06 1.061L12.94 10 10 12.939l-1.47-1.47-1.06 1.061L8.94 14z"
      />
    </svg>
  );
};
export default AmericanFootball;
