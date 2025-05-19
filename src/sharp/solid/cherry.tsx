import React from "react";
const Cherry: React.FC<
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
        d="M10.25 16.5a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.381 2.542c-.934.55-1.557 1.155-1.96 1.766-.858 1.304-.814 2.811-.28 4.3.534 1.496 1.533 2.873 2.398 3.766l-1.078 1.044c-.972-1.004-2.108-2.558-2.733-4.304-.452-1.264-.651-2.68-.274-4.06-.923.332-1.944.83-2.797 1.543C8.334 7.7 7.408 9.315 7.87 11.757l-1.474.279c-.58-3.06.628-5.195 2.298-6.59 1.507-1.26 3.383-1.919 4.652-2.219.54-.731 1.289-1.397 2.272-1.977z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.429 10.64A7.73 7.73 0 0 0 8.75 16.5c0 1.725.564 3.318 1.517 4.606a6.25 6.25 0 1 1 1.162-10.467"
      />
    </svg>
  );
};
export default Cherry;
