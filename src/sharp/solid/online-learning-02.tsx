import React from "react";
const OnlineLearning_02: React.FC<
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
        d="M6.5 1.25A3.75 3.75 0 0 0 2.75 5l-.004 14c0 2.07 1.766 3.75 3.944 3.75h14.557v-1.875H19.51v-3.75h1.737L21.25 1.25zm.19 15.875H17.54v3.75H6.69c-1.09 0-1.972-.84-1.972-1.875v-.001c0-1.035.883-1.874 1.972-1.874M11.995 5.25c-1.65 0-3.18.567-4.447 1.525l.904 1.197c1.03-.779 2.246-1.222 3.543-1.222 1.3 0 2.52.446 3.552 1.23l.907-1.196c-1.27-.964-2.804-1.534-4.46-1.534m0 3.124c-.919 0-1.784.25-2.545.688l.75 1.3a3.6 3.6 0 0 1 1.795-.488c.643 0 1.255.175 1.803.493l.752-1.298a5.1 5.1 0 0 0-2.555-.695m.005 2.876a.75.75 0 0 0 0 1.5h.006a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default OnlineLearning_02;
