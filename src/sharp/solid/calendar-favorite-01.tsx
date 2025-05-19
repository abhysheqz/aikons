import React from "react";
const CalendarFavorite_01: React.FC<
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
        d="m16.289 12.586 1.625 3.41 3.836.313-2.768 2.68.777 3.762-3.47-1.866-3.47 1.866.777-3.762-2.769-2.68 3.837-.313z"
      />
      <path
        fill="currentColor"
        d="M8.588 1.25v1.955h6.825V1.25h1.95v1.955h4.387V14H19.8V9.75H4.2v11.046H11v1.954H2.25V3.205h4.388V1.25z"
      />
    </svg>
  );
};
export default CalendarFavorite_01;
