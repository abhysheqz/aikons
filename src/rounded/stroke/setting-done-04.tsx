import React from "react";
const SettingDone_04: React.FC<
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
        d="M15 17.5s.5 0 1 1c0 0 1.588-2.5 3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM15.029 9.245a3.5 3.5 0 1 0-5.301 4.417"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21.984 10.74c-.024-.54-.387-1.198-1.193-2.588l-1.924-3.316c-.803-1.384-1.205-2.076-1.865-2.456S15.54 2 13.937 2h-3.874c-1.603 0-2.405 0-3.065.38S5.936 3.452 5.133 4.836L3.21 8.152C2.403 9.542 2 10.237 2 11s.403 1.458 1.21 2.848l1.923 3.316c.803 1.384 1.205 2.076 1.865 2.456.622.3 1 .38 2.602.38"
      />
    </svg>
  );
};
export default SettingDone_04;
