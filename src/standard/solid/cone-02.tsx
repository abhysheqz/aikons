import React from "react";
const Cone_02: React.FC<
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
        d="M13.591 17.409a2.25 2.25 0 1 0 .531 2.341H12a.75.75 0 0 1 0-1.5h2.122a2.24 2.24 0 0 0-.531-.841m-4.243-1.06a3.75 3.75 0 1 1 5.304 5.303 3.75 3.75 0 0 1-5.304-5.304"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 1.785V6a1 1 0 1 0 2 0V1.784l.004.003 8.789 6.152c.646.452.945 1.32.586 2.094a11.7 11.7 0 0 1-2.253 3.269 11.3 11.3 0 0 1-16.25 0 11.7 11.7 0 0 1-2.254-3.27c-.358-.773-.059-1.641.587-2.093l8.788-6.152zM11 9a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cone_02;
