import React from "react";
const Bicycle: React.FC<
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
        d="M15 3a1 1 0 0 0-.968 1.252l.923 3.536-2.54 4.067L9.154 8H9.5a1 1 0 1 0 0-2L5.501 6a1 1 0 1 0-.002 2l1.037.001 4.765 5.635-.534.856A5.001 5.001 0 0 0 1 16.006a5.001 5.001 0 0 0 9.9 1H11a1 1 0 0 0 .85-.47l1.539-2.465A5 5 0 1 0 23 16.006a5 5 0 0 0-5.139-5l-1.544-5.919c1.298.184 2.314.662 2.851 1.468a1 1 0 1 0 1.664-1.11C19.54 3.507 17.08 3 15 3m1.43 10.447.602 2.305a1 1 0 1 0 1.936-.504l-.58-2.22a3.002 3.002 0 0 1-.388 5.98 3 3 0 0 1-1.57-5.561m-.518-1.988-.263-1.008-1.413 2.262a5 5 0 0 1 1.676-1.254M8.83 15.003 6.5 15a1 1 0 0 0-.002 2l2.331.003a3.001 3.001 0 1 1-.001-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bicycle;
