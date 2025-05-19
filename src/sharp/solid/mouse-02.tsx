import React from "react";
const Mouse_02: React.FC<
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
        d="M13.5 5.237h-.75V1.25c.706.029 1.4.095 2.077.178 2.799.345 4.962 2.668 5.18 5.412.132 1.665.243 3.389.243 5.152s-.11 3.488-.243 5.152c-.218 2.744-2.381 5.067-5.18 5.412-.916.113-1.861.194-2.827.194s-1.911-.081-2.827-.194c-2.799-.345-4.962-2.668-5.18-5.412-.132-1.664-.243-3.389-.243-5.152s.11-3.487.243-5.152c.218-2.744 2.381-5.067 5.18-5.412.678-.083 1.371-.15 2.077-.178v3.987h-.75a.75.75 0 0 0-.75.75v4.004c0 .414.336.75.75.75h.75v1.251h1.5v-1.25h.75a.75.75 0 0 0 .75-.751V5.988a.75.75 0 0 0-.75-.75"
      />
      <path fill="currentColor" d="M11.25 6.738V9.24h1.5V6.738z" />
    </svg>
  );
};
export default Mouse_02;
