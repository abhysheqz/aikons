import React from "react";
const Plant_03: React.FC<
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
        d="M14.894 12.15c-.056.051-.142.131-.246.239-.208.216-.49.54-.774.965A6.53 6.53 0 0 0 12.75 17a.75.75 0 0 1-1.5 0c0-1.935.692-3.453 1.376-4.478.342-.514.684-.908.944-1.176.13-.135.24-.239.32-.31zM3.27 3.17c.003-.063.014-.207.014-.207a.75.75 0 0 1 .68-.68l.206-.014a14.044 14.044 0 0 1 2.253.063c1.308.146 3.038.544 4.17 1.677A3.949 3.949 0 1 1 5.01 9.593c-1.133-1.132-1.531-2.862-1.677-4.17A14 14 0 0 1 3.27 3.17"
      />
      <path
        fill="currentColor"
        d="M20.72 5.959c.018.19.026.446.029.637.005.381-.005.908-.07 1.493-.125 1.125-.47 2.64-1.468 3.638a3.492 3.492 0 0 1-4.938-4.938c.998-.998 2.512-1.343 3.639-1.468a12 12 0 0 1 1.492-.07c.19.003.455 0 .637.028.36.033.647.32.68.68M10.7 9.188c.064.091.152.223.255.395.206.344.475.849.74 1.514.533 1.331 1.054 3.3 1.054 5.903a.75.75 0 1 1-1.5 0c0-2.397-.479-4.178-.946-5.346a9 9 0 0 0-.634-1.299 5 5 0 0 0-.198-.307z"
      />
      <path
        fill="currentColor"
        d="M2.442 20.5A12.8 12.8 0 0 1 12 16.25c3.804 0 7.222 1.643 9.558 4.25A.75.75 0 0 1 21 21.75H3a.75.75 0 0 1-.558-1.25"
      />
    </svg>
  );
};
export default Plant_03;
