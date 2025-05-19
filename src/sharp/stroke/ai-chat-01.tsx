import React from "react";
const AiChat_01: React.FC<
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
        strokeWidth={1.5}
        d="M15 9H9v6h6z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 15v2m3-2v2m-3-10v2m3-2v2M9 10.5H7m2 3H7m10-3h-2m2 3h-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.956 2.514c-6.632.37-10.3 8.292-6.289 14.956L2.083 21.46M9.956 2.514q.244-.014.495-.014m-.495.014 3.966-.014m-.496 0c4.957 0 7.436 4.004 7.932 5.505 1.983 7.007-.992 10.51-3.966 12.012-2.332 1.573-9.207 1.367-10.85 0l-4.459 1.442m0 0c-.03.078-.08.025 0 0Z"
      />
    </svg>
  );
};
export default AiChat_01;
