import React from "react";
const House_05: React.FC<
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
        d="M22 22.75H2v-1.5h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.751 22v-8.75h-17.5V22c0 .414.336.75.75.75h16a.75.75 0 0 0 .75-.75M9.5 16.25a.75.75 0 0 0-.75.75v5h1.5v-4.25h3.5V22h1.5v-5a.75.75 0 0 0-.75-.75zm-2 .5h-2v-1.5h2zm11-1.5h-2v1.5h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.41 1.371A.75.75 0 0 0 11.25 2v3.414L5.75 6.79V3h-1.5v4.164l-2.432.608a.75.75 0 0 0-.569.728v3.25h21.5V8.5a.75.75 0 0 0-.34-.629z"
      />
    </svg>
  );
};
export default House_05;
