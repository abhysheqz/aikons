import React from "react";
const Book_01: React.FC<
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
        d="M20.752 2.227a.98.98 0 0 0-.461-.831.97.97 0 0 0-.946-.043c-.305.153-.595.31-.86.454l-.161.086c-.315.17-.595.317-.869.441-.536.243-1.017.382-1.564.382H7.14c-2.148 0-3.889 1.75-3.889 3.909V19.33c0 1.889 1.523 3.42 3.403 3.42h14.097v-1.954h-1.944v-2.933h1.944zM6.656 17.863h10.208v2.933H6.656a1.46 1.46 0 0 1-1.459-1.466c0-.81.653-1.466 1.459-1.466"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Book_01;
