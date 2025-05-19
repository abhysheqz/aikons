import React from "react";
const Restaurant: React.FC<
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
        d="M4.2 11.088v4.846h4.875v5.816h-1.95v-3.877H4.2v3.877H2.25V11.088z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.109 6.777 12 2.25 2.893 6.777l.872 1.734 1.41-.701v3.277h13.65V7.81l1.412.701z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 11.088V21.75H19.8v-3.877h-2.925v3.877h-1.95v-5.816H19.8v-4.846z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.15 13.025h11.7v1.939h-4.875v4.846h.975v1.939h-3.9V19.81h.975v-4.846H6.15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Restaurant;
