import React from "react";
const SafeDelivery_02: React.FC<
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
        d="M9 14.25A1.75 1.75 0 0 0 7.25 16v5c0 .966.784 1.75 1.75 1.75h6A1.75 1.75 0 0 0 16.75 21v-5A1.75 1.75 0 0 0 15 14.25zm3 2a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.008 9.99-10.022.015 5.008 3.768zM3 9.005c.016-4.4 3.914-8.123 9.439-8.003h.02c4.136.174 8.484 3.175 8.54 7.97a1 1 0 0 1-.397.81l-7.945 5.995a1.1 1.1 0 0 1-1.324 0l-7.934-5.97A1 1 0 0 1 3 9.006"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SafeDelivery_02;
