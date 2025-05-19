import React from "react";
const Ambulance: React.FC<
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
      <circle cx={17} cy={17.625} r={2.5} fill="currentColor" />
      <circle cx={7} cy={17.625} r={2.5} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 5.625v1.25h.004v2.746a.75.75 0 0 0 1.5 0V6.875h2.257c.54 0 1.05.25 1.381.676l2.99 3.843c.238.307.368.685.368 1.074l-.001.407h-1.007a.75.75 0 0 0 0 1.5h1.008v2.25a1.75 1.75 0 0 1-1.75 1.75h-.376q.075-.364.076-.75a3.7 3.7 0 1 0-7.324.75h-2.752q.076-.364.076-.75a3.7 3.7 0 1 0-7.324.75H3a1.75 1.75 0 0 1-1.75-1.75v-11c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75m-5.5 1.5a.75.75 0 0 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25v1.25a.75.75 0 0 0 1.5 0v-1.25H10a.75.75 0 0 0 0-1.5H8.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ambulance;
