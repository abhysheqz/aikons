import React from "react";
const Sandals: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 18.3V5.814c0-1.587-.456-2.893-2.383-2.81-1.608.069-3.116.893-4.312 1.89-2.142 1.784-2.08 3.866-1.336 6.308l2.384 7.839C5.206 20.2 6.335 21 7.62 21c1.59 0 2.879-1.209 2.879-2.7M13.5 18.3V5.814c0-1.587.456-2.893 2.383-2.81 1.608.069 3.116.893 4.313 1.89 2.141 1.784 2.078 3.866 1.335 6.308l-2.384 7.839C18.794 20.2 17.665 21 16.38 21c-1.59 0-2.879-1.209-2.879-2.7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 13c0-1 .7-3.7 3.5-4.5m0 0c2.5.5 3.5 1.5 4 2m-4-2V7"
      />
      <path
        fill="currentColor"
        d="M14.03 11.03a.75.75 0 1 1-1.06-1.06zM16.75 7a.75.75 0 0 1 1.5 0zm3.5 6c0-.368-.14-1.163-.598-1.947a3.9 3.9 0 0 0-2.358-1.832l.412-1.442a5.4 5.4 0 0 1 3.242 2.518c.592 1.016.802 2.071.802 2.703zm-7.28-3.03c.565-.566 1.692-1.667 4.383-2.205l.294 1.47c-2.309.462-3.182 1.36-3.617 1.795zm3.78-1.47V7h1.5v1.5z"
      />
    </svg>
  );
};
export default Sandals;
