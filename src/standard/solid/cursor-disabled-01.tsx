import React from "react";
const CursorDisabled_01: React.FC<
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
        d="M16.229 3.428a2.851 2.851 0 0 0-3.801 3.8zm1.343 1.343-3.8 3.801a2.851 2.851 0 0 0 3.8-3.8m-5.93-2.13a4.75 4.75 0 1 1 6.717 6.718 4.75 4.75 0 0 1-6.718-6.718"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9 4.247 5.625 1.25l-1.375 19 5.187-3.398 2.79 5.898 3.975-1.957-2.65-5.67 6.198-1.33-2.299-2.042A6.252 6.252 0 0 1 9 4.247"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.985 3.984a2.85 2.85 0 0 1 3.245-.557l-3.802 3.801a2.85 2.85 0 0 1 .557-3.244m.787 4.588 3.801-3.801a2.851 2.851 0 0 1-3.801 3.801m4.588-5.931a4.75 4.75 0 1 0-6.718 6.718A4.75 4.75 0 0 0 18.36 2.64M7.234 1.567l2.078 1.84a6.252 6.252 0 0 0 8.955 7.923l1.059.937c.81.716.394 2.042-.669 2.184l-4.774.634 2.103 5.183a1.255 1.255 0 0 1-.696 1.636l-1.878.755a1.26 1.26 0 0 1-1.635-.693l-2.068-5.094-3.363 3.004c-.829.74-2.156.12-2.095-1.004L5.144 2.44C5.2 1.384 6.45.874 7.234 1.567"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorDisabled_01;
