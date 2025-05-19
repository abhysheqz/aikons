import React from "react";
const Distribution: React.FC<
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
        d="M20.25 5.874 17.938 1.25H6.062L3.75 5.874v10.905c0 .537.435.971.97.971h14.56a.97.97 0 0 0 .97-.97zM6.23 5.25l1.03-2.059h9.477l1.03 2.059zm3.77 5h4v-2h-4zM11 20.75H3v2h18v-2h-8v-2h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Distribution;
