import React from "react";
const MaterialAndTexture: React.FC<
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
        d="M11.695 2.315a.75.75 0 0 1 .61 0l9 4a.75.75 0 0 1 0 1.37L17.222 9.5l4.083 1.814a.75.75 0 0 1 0 1.371l-4.083 1.814 4.083 1.815a.75.75 0 0 1 0 1.37l-9 4a.75.75 0 0 1-.61 0l-9-4a.75.75 0 0 1 0-1.37l4.083-1.815-4.083-1.814a.75.75 0 0 1 0-1.37L6.777 9.5 2.696 7.686a.75.75 0 0 1 0-1.371zm.61 9.37 3.07-1.365.617.274-6.813 3.228a1 1 0 0 0-.102.058l-1.33-.592 3.706-1.71.242.107a.75.75 0 0 0 .61 0m-3.68-1.364 1.004.446-3.706 1.71L4.847 12zM4.846 7 12 10.178 19.153 7 12 3.82zM17.8 11.397l-6.926 3.28 1.126.5L19.153 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MaterialAndTexture;
