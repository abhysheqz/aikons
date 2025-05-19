import React from "react";
const PropertyDelete: React.FC<
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
        d="m17.629 18.543-2.793 2.793 1.414 1.414 2.793-2.793 2.793 2.793 1.414-1.414-2.793-2.793 2.793-2.793-1.414-1.414-2.793 2.793-2.793-2.793-1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.5 1.25A.75.75 0 0 0 .75 2v4.25h19.5V2a.75.75 0 0 0-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.25 7.75H.75V20c0 .414.336.75.75.75h11.8l2.208-2.207-2.793-2.793 3.535-3.535 2.793 2.793L20.25 13.8zM7.5 13h-2v-1.5h2zm6 0h-4v-1.5h4zm-6 4h-2v-1.5h2zm4 0h-2v-1.5h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PropertyDelete;
