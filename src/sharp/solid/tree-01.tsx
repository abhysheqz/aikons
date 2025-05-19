import React from "react";
const Tree_01: React.FC<
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
        d="M11.25 18.718v2.532h-2v1.5h5.5v-1.5h-2v-2.532a9 9 0 0 1-1.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25a8.75 8.75 0 0 0-.75 17.468v-5.407L8.44 10.5 9.5 9.44l1.75 1.75V8.25h1.5v4.94l1.75-1.75 1.06 1.06-2.81 2.81v3.408A8.75 8.75 0 0 0 12 1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tree_01;
