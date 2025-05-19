import React from "react";
const Book_04: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.016 13.016h-8.01M12.011 17.022H8.006"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.512 2.012H6.634c-1.243 0-3.28.893-3.106 3.26m0 0c.174 2.368 2.156 2.755 3.106 2.755h10.88M3.528 5.272v13.292c-.115 1.064.317 3.282 3.056 3.453h13.9V8.027h-2.97m0 0v-3.02a.01.01 0 0 0-.01-.01H6.509"
      />
    </svg>
  );
};
export default Book_04;
