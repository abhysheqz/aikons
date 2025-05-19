import React from "react";
const Bitcoin_01: React.FC<
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
        d="M10.975 1A10.75 10.75 0 0 0 1 10.974h2.708a8.056 8.056 0 0 1 7.267-7.27zm1.5 2.704a8.056 8.056 0 0 1 7.272 7.27h2.702A10.75 10.75 0 0 0 12.475 1zm9.974 8.77h-2.702a8.056 8.056 0 0 1-7.272 7.27v2.705a10.75 10.75 0 0 0 9.974-9.975M10.975 22.45v-2.706a8.056 8.056 0 0 1-7.267-7.269H1a10.75 10.75 0 0 0 9.975 9.975"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.723 5.237a6.487 6.487 0 1 0 0 12.975 6.487 6.487 0 0 0 0-12.975m.672 3.356a.671.671 0 0 0-1.342 0v.224H9.935a.671.671 0 0 0 0 1.342h.223v3.132h-.223a.671.671 0 0 0 0 1.342h1.118v.224a.671.671 0 0 0 1.342 0v-.224a1.79 1.79 0 0 0 1.397-2.908 1.79 1.79 0 0 0-1.397-2.908zm-.895 2.46v-.894h.895a.447.447 0 1 1 0 .895zm0 1.343h.895a.447.447 0 1 1 0 .895H11.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bitcoin_01;
