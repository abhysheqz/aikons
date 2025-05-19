import React from "react";
const CapcutRectangle: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm3.5 5A1.75 1.75 0 0 0 6.25 8.5v1a.75.75 0 0 0 .352.636L9.585 12l-2.982 1.864a.75.75 0 0 0-.353.636v1c0 .966.784 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.746-1.634l1.384.786a.75.75 0 0 0 .74-1.304l-2.5-1.42-.025-.015L12.63 12l3.214-1.664.025-.014 2.5-1.42a.75.75 0 1 0-.74-1.304l-1.384.786A1.75 1.75 0 0 0 14.5 6.75zm-.25 8.166 3.285-2.053 3.715 1.923v.714a.25.25 0 0 1-.25.25H8a.25.25 0 0 1-.25-.25zm0-5.832 3.285 2.053 3.715-1.923V8.5a.25.25 0 0 0-.25-.25H8a.25.25 0 0 0-.25.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CapcutRectangle;
