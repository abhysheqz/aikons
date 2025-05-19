import React from "react";
const PizzaCutter: React.FC<
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
        d="M21.359 10.359A4.75 4.75 0 1 0 14.64 3.64a4.75 4.75 0 0 0 6.718 6.718m-2.652-4.066a1 1 0 1 0-1.414 1.414 1 1 0 1 0 1.414-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m10.52 10.424 3.002-2.5.96 1.153-3.003 2.5zm1.992 2.506 3.504-3 .976 1.14-3.505 3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.509 9.433a.75.75 0 0 1 1.053.07l4 4.522a.75.75 0 0 1 .063.911l-.001.002-.001.002-.003.004-.007.01a1 1 0 0 1-.075.1q-.072.092-.202.224a3.5 3.5 0 0 1-.783.59c-.654.365-1.593.631-2.837.456L8.34 18.312a.26.26 0 0 0-.091.197v1.037a.75.75 0 0 1-.217.527c-.656.664-1.535 1.29-2.51 1.551-1.012.27-2.126.138-3.087-.727a3.6 3.6 0 0 1-.009-5.331l.012-.011z"
      />
    </svg>
  );
};
export default PizzaCutter;
