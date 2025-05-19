import React from "react";
const DeliveryReturn_02: React.FC<
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
        d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 .75.75v5.75H1.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 12h-5v-2h5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 20.75v-13H4.2v12h13.65c.808 0 1.463-.672 1.463-1.5s-.655-1.5-1.462-1.5h-1.06l.773.793-1.378 1.414-3.127-3.207 3.127-3.207 1.378 1.414-.772.793h1.058c1.885 0 3.413 1.567 3.413 3.5s-1.528 3.5-3.413 3.5H3.226a.99.99 0 0 1-.975-1m19.5-13v5H19.8v-5z"
        clipRule="evenodd"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M9.5 11h5" />
    </svg>
  );
};
export default DeliveryReturn_02;
