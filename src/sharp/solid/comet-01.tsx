import React from "react";
const Comet_01: React.FC<
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
        d="M12.789 2.92 7.316 8.391 5.934 7.01l5.473-5.473zm-7.867 7.866a5.864 5.864 0 1 0 8.293 8.292l3.86-3.86 1.381 1.383-3.86 3.86A7.818 7.818 0 0 1 3.54 9.403zm17.542 1.807-1.954 1.955-1.383-1.382 1.955-1.955z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.303 12.168a3.91 3.91 0 1 1 5.529 5.529 3.91 3.91 0 0 1-5.529-5.529"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.604 2.632-2.003 2.004-1.382-1.382 2.003-2.004zm-3.958 3.959-6.96 6.96-1.381-1.383 6.959-6.96zm8.104.188L15.98 13.55l-1.382-1.382 6.771-6.771z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Comet_01;
