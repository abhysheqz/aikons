import React from "react";
const Package_03: React.FC<
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
        d="M12.653 1.382a1.7 1.7 0 0 0-1.306 0L3.023 4.836a1.24 1.24 0 0 0-.772 1.17V18.01c.003.45.25.942.772 1.158l8.326 3.454a1.7 1.7 0 0 0 1.304 0l8.326-3.454c.522-.216.77-.707.772-1.158V6c0-.476-.258-.951-.772-1.164zm-.73 1.386a.2.2 0 0 1 .155 0l2.768 1.148-7.605 3.379-3.116-1.293zm-2.77 5.32 7.604-3.38 3.118 1.294-7.797 3.234a.2.2 0 0 1-.156 0zM6.75 10.5V8.715l-3-1.245v10.376l7.5 3.111V10.581l-3-1.244V10.5a.75.75 0 1 1-1.5 0M5 14.758v1.912c0 .2.12.381.303.46l2.5 1.071a.5.5 0 0 0 .697-.46V15.83a.5.5 0 0 0-.303-.46l-2.5-1.071a.5.5 0 0 0-.697.46"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Package_03;
