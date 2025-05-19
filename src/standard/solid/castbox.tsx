import React from "react";
const Castbox: React.FC<
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
        d="M20.5 7.848v8.304a2 2 0 0 1-.986 1.724l-6.583 3.87a1.84 1.84 0 0 1-1.862 0l-6.583-3.87a2 2 0 0 1-.986-1.724V7.848a2 2 0 0 1 .986-1.724l6.583-3.87a1.84 1.84 0 0 1 1.862 0l6.583 3.87a2 2 0 0 1 .986 1.724M11 8.75a.75.75 0 0 1 .75.75v2a.25.25 0 1 0 .5 0V10a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-1.5 0v-1a.25.25 0 1 0-.5 0v.5a.75.75 0 0 1-1.5 0v-1a.25.25 0 1 0-.5 0v2.5a.75.75 0 0 1-1.5 0v-2a.25.25 0 1 0-.5 0 .75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1.5 0 .25.25 0 1 0 .5 0v-1a.75.75 0 0 1 1.5 0v.5a.25.25 0 1 0 .5 0V9.5a.75.75 0 0 1 .75-.75m4 2a.75.75 0 0 1 .75.75V14a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75m2.75 1.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Castbox;
