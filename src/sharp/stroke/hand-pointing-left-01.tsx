import React from "react";
const HandPointingLeft_01: React.FC<
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
        strokeWidth={1.5}
        d="M22 8.862h-2.043L14.102 4.41a2.3 2.3 0 0 0-.385-.23 1.9 1.9 0 0 0-.456-.163c-.071-.014-.113-.014-.285-.014h-.002c-.26 0-.479.023-.752.145-.135.06-.301.193-.397.266-.38.29-.587.79-.603 1.304-.015.51.232.87.604 1.22.731.686 1.364 1.254 2.198 2.072H4.076c-.53-.002-1.157.099-1.505.465-.757.861-.763 1.639-.007 2.549.348.383.895.47 1.438.472h5.534c-.166 2.587.843 5.248 2.13 6.54.871.985 1.771 1.087 3.225.869 1.68-.298 2.695-.85 5.052-2.003h2.004"
      />
    </svg>
  );
};
export default HandPointingLeft_01;
