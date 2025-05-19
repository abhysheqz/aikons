import React from "react";
const Adzan: React.FC<
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
        d="M12 14.934v3.98"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.5 11.95v9.95h11v-9.95"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20 14.934 2-1.99m-2 4.975 2 1.99M4 14.934l-2-1.99m2 4.975-2 1.99"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.85 11.944H6.52c-.2-1.08-3.452-4.472 2.89-8.23.635-.42 1.634-.947 2.587-1.816 1.359 1.182 2.222 1.494 3.022 2.065 5.754 3.684 2.726 6.882 2.452 7.98z"
      />
    </svg>
  );
};
export default Adzan;
