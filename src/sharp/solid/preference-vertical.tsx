import React from "react";
const PreferenceVertical: React.FC<
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
        d="M3 21V11h2v10zM18 21v-8h2v8zM18 8V3h2v5zM10.5 13V3h2v10zM3 6V3h2v3zM10.5 21v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 7.25h5.5v4.5h-5.5zM8.75 12.25h5.5v4.5h-5.5zM16.25 9.25h5.5v4.5h-5.5z"
      />
    </svg>
  );
};
export default PreferenceVertical;
