import React from "react";
const PulseRectangle_02: React.FC<
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
        d="M4.5 1.75a2.75 2.75 0 0 0-2.75 2.752l.009 15a2.75 2.75 0 0 0 2.75 2.748h14.988a2.75 2.75 0 0 0 2.75-2.75l.002-15a2.75 2.75 0 0 0-2.75-2.75zm11.218 6.034a.75.75 0 0 0-1.436 0l-1.34 4.466H12a.75.75 0 0 0-.67.415l-.545 1.087-1.052-4.91a.75.75 0 0 0-1.435-.105L6.98 12.25H6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .702-.487l.601-1.602.964 4.496a.75.75 0 0 0 1.404.178l1.293-2.585H13.5a.75.75 0 0 0 .718-.534L15 10.61l.782 2.606a.75.75 0 0 0 .718.534H18a.75.75 0 0 0 0-1.5h-.942z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PulseRectangle_02;
