import React from "react";
const AiChat_02: React.FC<
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
        d="M9.956 2.514c-6.632.37-10.3 8.292-6.289 14.956L2.083 21.46M9.956 2.514q.244-.014.495-.014m-.495.014 3.966-.014m-.496 0c4.957 0 7.436 4.004 7.932 5.505 1.983 7.007-.992 10.51-3.966 12.012-2.332 1.573-9.207 1.367-10.85 0l-4.459 1.442m0 0c-.03.078-.08.025 0 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m8.256 13.188 1.824-4.656 1.824 4.656m-3.648 0-.948 2.476m.948-2.476h3.648m0 0 1.014 2.476m2.557-7.426v7.574"
      />
    </svg>
  );
};
export default AiChat_02;
