import React from "react";
const Ruku: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.186 1.75C6.81 1.75 3.25 5.261 3.25 9.61v8.89a.75.75 0 0 0 .75.75h1.25v2.25c0 .414.336.75.75.75h4.5v-1.5h-.75l.02-1.5v-8.867a.75.75 0 0 1 .088-.353l2.07-3.883 1.324.706-1.982 3.717v4.608l5.573-6.428h1.782c1.687 0 3.125-1.306 3.125-3 0-1.695-1.438-3-3.125-3H17.25V2.5a.75.75 0 0 0-.75-.75zm6.064 2.5v3h1.375c.936 0 1.625-.71 1.625-1.5s-.689-1.5-1.625-1.5zm-10.5 16.5v-1.5h1.5v1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ruku;
