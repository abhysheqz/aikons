import React from "react";
const MagicWand_03: React.FC<
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
        d="M14.47 14.47a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.409 16.409a2.25 2.25 0 0 1 3.18 0l2.002 2.001a2.25 2.25 0 1 1-3.18 3.181l-2.002-2.001a2.25 2.25 0 0 1 0-3.181M13.398 1.944c.772.4 1.08 1.266 1.081 2.172l.01 2.615a.72.72 0 0 0 .337.6l1.997 1.252c.844.53 1.555 1.314 1.41 2.262-.145.953-1.063 1.482-2.026 1.726l-2.508.633c-.313.08-.462.366-.497.5l-.632 2.504c-.242.965-.773 1.878-1.726 2.024-.948.144-1.732-.563-2.262-1.408l-1.25-1.996a.74.74 0 0 0-.601-.337l-2.616-.01c-.903-.004-1.768-.313-2.167-1.083-.401-.772-.15-1.656.374-2.392l1.393-1.955a.71.71 0 0 0 .086-.623l-.94-2.789v-.001c-.291-.87-.291-1.814.335-2.44.628-.628 1.572-.626 2.44-.331l2.792.94c.113.037.395.07.621-.091l1.957-1.395c.735-.524 1.619-.776 2.392-.377"
      />
    </svg>
  );
};
export default MagicWand_03;
