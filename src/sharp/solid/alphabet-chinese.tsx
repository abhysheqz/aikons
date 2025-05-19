import React from "react";
const AlphabetChinese: React.FC<
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
        d="M11.547 4.878H4V7.9h2V6.892h12V7.9h2V4.878h-6.257c-.42-1.154-1.171-2.239-2.229-2.878l-1.028 1.727c.406.246.775.65 1.06 1.151"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.5 9.914h4.554l-1.61 1.592v1.43H7v2.014h4.443v3.097c0 .653-.185 1.146-.442 1.456-.242.292-.591.483-1.093.483V22c1.082 0 2-.445 2.63-1.208.615-.743.905-1.723.905-2.745V14.95H18v-2.015h-4.557v-.584l2.758-2.726c.29-.286.378-.72.225-1.1A1 1 0 0 0 15.5 7.9h-7z"
      />
    </svg>
  );
};
export default AlphabetChinese;
