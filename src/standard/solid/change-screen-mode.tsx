import React from "react";
const ChangeScreenMode: React.FC<
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
        d="M5 3.75A2.75 2.75 0 0 1 7.752 1l12 .008a2.75 2.75 0 0 1 2.748 2.75v9.99a2.75 2.75 0 0 1-2.75 2.75h-12A2.75 2.75 0 0 1 5 13.749z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.918 7.94a.97.97 0 0 0-.974.97v10.676c0 .536.436.971.973.971h11.666a.97.97 0 0 0 .973-.97v-3.398H18.5v3.397a2.914 2.914 0 0 1-2.917 2.913H3.917A2.914 2.914 0 0 1 1 19.586V8.911a2.914 2.914 0 0 1 2.92-2.912L5.864 6 5.86 7.943z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChangeScreenMode;
