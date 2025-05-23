import React from "react";
const StarAward_01: React.FC<
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
        d="M12 1.25a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5m1.309 5.447-.93-1.906a.417.417 0 0 0-.758 0l-.93 1.906a.43.43 0 0 1-.311.237l-2.021.336c-.343.057-.48.495-.234.752L9.57 9.537c.096.1.14.243.12.383l-.32 2.115c-.054.358.304.63.613.464l1.823-.97a.41.41 0 0 1 .386 0l1.823.97c.31.165.667-.106.613-.464l-.32-2.115a.46.46 0 0 1 .12-.383l1.447-1.515c.244-.257.108-.695-.235-.752l-2.02-.336a.43.43 0 0 1-.312-.237m-8.212 8.078-1.78 3.915a.75.75 0 0 0 .806 1.05l2.42-.403 1.268 2.959a.75.75 0 0 0 1.381-.007l1.81-4.343a8.99 8.99 0 0 1-5.905-3.17m9.713 7.514L13 17.946a8.99 8.99 0 0 0 5.905-3.17l1.78 3.914a.75.75 0 0 1-.806 1.05l-2.42-.403-1.268 2.96a.75.75 0 0 1-1.381-.008"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StarAward_01;
