import React from "react";
const Pulley: React.FC<
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
        d="M17.621 16.337c.452-.28.946-.337 1.379-.337.462 0 .961.07 1.41.359.455.293.72.723.898 1.158.195.473.424 1.093.563 1.69.069.296.123.62.129.933.005.296-.03.693-.236 1.057-.29.51-.765.687-1.136.751-.3.052-.668.052-1 .052h-1.256c-.332 0-.7 0-1-.052-.37-.064-.846-.241-1.136-.75-.207-.365-.241-.762-.236-1.058a4.6 4.6 0 0 1 .13-.934 11.5 11.5 0 0 1 .562-1.69c.188-.457.464-.89.929-1.179M11 10.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0M4 17.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 3a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2h-4.5v3a1 1 0 1 1-2 0V4H6v13.5a1 1 0 1 1-2 0V4H3a1 1 0 0 1-1-1m10 6.5a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1m7 0a1 1 0 0 1 1 1V17a1 1 0 1 1-2 0v-6.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pulley;
