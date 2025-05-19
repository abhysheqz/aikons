import React from "react";
const Unlink_06: React.FC<
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
        strokeWidth={1.5}
        d="M13.5 13v-1.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.44-.294-1.032-.332-2.111-.336L10 8c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C6.5 9.393 6.5 10.096 6.5 11.5v6c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .552.552C7.893 21 8.596 21 10 21s2.107 0 2.611-.337c.218-.146.406-.334.552-.552.187-.28.27-.622.307-1.111"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.5 11v1.5c0 1.405 0 2.107.337 2.611.146.218.334.406.552.552.44.294 1.032.332 2.111.336L14 16c1.405 0 2.107 0 2.611-.337.218-.146.406-.334.552-.552.337-.504.337-1.207.337-2.611v-6c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C16.107 3 15.404 3 14 3s-2.107 0-2.611.337a2 2 0 0 0-.552.552c-.187.28-.27.622-.307 1.111M20 10.5 22 9m-2 5.5 2 1.5M4 10.5 2 9m2 5.5L2 16"
      />
    </svg>
  );
};
export default Unlink_06;
