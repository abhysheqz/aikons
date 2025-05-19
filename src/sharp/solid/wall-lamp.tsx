import React from "react";
const WallLamp: React.FC<
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
        d="M3.5 22v-6H5v6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.75 8v11a.75.75 0 0 1-.75.75H4.5v-1.5h7.75V8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.275 7.284a.75.75 0 0 1 .94.492l2.336 7.474h4.897l2.335-7.474a.75.75 0 0 1 1.432.448l-2.5 8a.75.75 0 0 1-.715.526h-6a.75.75 0 0 1-.716-.526l-2.501-8a.75.75 0 0 1 .492-.94"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.098 7.55a.75.75 0 0 1-.6 1.2h-11a.75.75 0 0 1-.6-1.2l3.225-4.3h5.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.5 8.75h-15v-1.5h15zM13.75 2v2h-1.5V2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WallLamp;
