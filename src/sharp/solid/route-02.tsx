import React from "react";
const Route_02: React.FC<
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
        d="M16.998 11.249c.202.116.37.205.491.266l.511.235.51-.235a10.545 10.545 0 0 0 1.973-1.297c1.06-.889 2.267-2.307 2.267-4.2 0-2.625-2.118-4.768-4.75-4.768s-4.75 2.143-4.75 4.767c0 1.894 1.206 3.312 2.266 4.2.542.455 1.08.8 1.482 1.032m.994-6.999c-.962 0-1.742.784-1.742 1.75s.78 1.75 1.742 1.75h.016c.962 0 1.742-.784 1.742-1.75s-.78-1.75-1.742-1.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 10c0-2.348 2.165-4 4.5-4H11v2H9.5C7.97 8 7 9.034 7 10s.97 2 2.5 2h3c2.335 0 4.5 1.652 4.5 4s-2.165 4-4.5 4H11v-2h1.5c1.53 0 2.5-1.035 2.5-2s-.97-2-2.5-2h-3C7.165 14 5 12.348 5 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Route_02;
