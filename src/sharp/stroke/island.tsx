import React from "react";
const Island: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 21.968c.95 0 1.889.087 2.678-.528.774-.604 2.005-.584 2.749.044.81.685 2.34.665 3.17.02.804-.628 2.024-.7 2.83-.02.884.747 2.373.64 3.251-.044.774-.604 2.005-.584 2.749.044.716.605 1.693.484 2.573.484M8 19c1.198-2.391 3.436-4 6-4s4.802 1.609 6 4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15c-3-.557-6.603 1.337-8 4M12 15c0-3 .8-7.84 4-10M14.5 2c.875 0 2.802 1.097 1.5 3m0 0c.786.234 3.208 1.32 2.983 4M16 5c-.585-.704-2.687-1.6-4-.2m4 .2c.58.71 1 3 0 4"
      />
    </svg>
  );
};
export default Island;
