import React from "react";
const RemoveMale: React.FC<
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
        d="M16.043 16.043a1 1 0 0 1 1.414 0l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414l-1.793 1.793 1.793 1.793a1 1 0 0 1-1.414 1.414l-1.793-1.793-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m14.694 15.835-1.944-.585v-1.938c1.78-1.393 3-3.062 3-6.645 0-2.32-.423-4.417-2.961-4.417 0 0-.896-1-3.047-1-3.037 0-4.992 1.827-4.992 5.417 0 3.583 1.22 5.252 3 6.645v1.938l-3.716 1.118a4.07 4.07 0 0 0-2.76 2.892c-.136.536.327.99.882.99h12.917q.04-.046.086-.091l.909-.909-.909-.909a2.25 2.25 0 0 1-.465-2.506"
      />
    </svg>
  );
};
export default RemoveMale;
