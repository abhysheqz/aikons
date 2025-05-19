import React from "react";
const Money_04: React.FC<
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
        d="M14.5 12.001a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.5 11.49v.01M5.5 12.49v.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 5.001c2.48 0 4.19.384 5.133.676.543.168.867.683.867 1.251v9.755c0 1.115-1.228 1.954-2.324 1.747-.94-.177-2.165-.32-3.676-.32-4.75 0-5.89 1.806-12.855.27A1.47 1.47 0 0 1 2 16.94V6.921c0-.976.92-1.687 1.878-1.497C10.197 6.678 11.421 5 16 5"
      />
    </svg>
  );
};
export default Money_04;
