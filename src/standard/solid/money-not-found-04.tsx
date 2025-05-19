import React from "react";
const MoneyNotFound_04: React.FC<
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
        d="M1.25 6.282c0-1.15 1.078-1.956 2.16-1.72l.611.126q.66.13 1.246.218l4.8 4.801a3 3 0 1 0 4.226 4.226l5.234 5.234A20.6 20.6 0 0 0 16 18.86c-2.35 0-3.677.443-5.587.717-1.774.254-3.813.305-7.14-.401l-.682-.152A1.74 1.74 0 0 1 1.25 17.33zM5.5 11.49a1 1 0 0 0-1 1v.01a1 1 0 1 0 2 0v-.01a1 1 0 0 0-1-1M16 4.251c2.851 0 4.87.543 5.798.863.617.273.952.889.952 1.505v10.873c0 .493-.201.916-.492 1.232l-7.318-7.318a3 3 0 0 0-2.346-2.346L8.66 5.127a15 15 0 0 0 1.657-.161C11.954 4.72 13.564 4.25 16 4.25m2.5 6.238a1 1 0 0 0-1 1v.01a1 1 0 1 0 2 0v-.01a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.543 2.543a1 1 0 0 1 1.414 0l17.5 17.5a1 1 0 0 1-1.414 1.415l-17.5-17.5a1 1 0 0 1 0-1.415"
      />
    </svg>
  );
};
export default MoneyNotFound_04;
