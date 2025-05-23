import React from "react";
const Exchange_03: React.FC<
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
        d="M18.75 12.25v1.5h1.125c1.035 0 1.875.84 1.875 1.875v.75c0 .422-.14.812-.375 1.125.235.313.375.703.375 1.125v.75c0 1.035-.84 1.875-1.875 1.875H18.75v1.5h-1.5v-1.5h-3v-1.5h1.125v-4.5H14.25v-1.5h3v-1.5zm-1.875 3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375zm3 3h-3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375M18.75 4.25v6.5h-1.5l-2.2-1.65.9-1.2 1.3.975V5.75H11v-1.5zM4.25 14.25h1.5l2.2 1.65-.9 1.2-1.3-.975v3.125H12v1.5H4.25zM6.25 1.25v1.32c1.001.19 1.884.757 2.286 1.61l-1.357.64C6.993 4.425 6.386 4 5.5 4c-.544 0-1.007.166-1.318.4-.31.232-.432.496-.432.725s.122.493.432.726.774.399 1.318.399c.837 0 1.624.253 2.218.7.594.445 1.032 1.118 1.032 1.925s-.438 1.48-1.032 1.926c-.413.31-.918.526-1.468.63v1.319h-1.5v-1.32c-1.001-.19-1.884-.757-2.286-1.61l1.357-.64c.186.395.793.82 1.679.82.544 0 1.007-.166 1.318-.4.31-.232.432-.496.432-.725s-.122-.493-.432-.726S6.044 7.75 5.5 7.75c-.837 0-1.624-.253-2.218-.7-.594-.445-1.032-1.118-1.032-1.925s.438-1.48 1.032-1.926c.413-.31.918-.526 1.468-.63V1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Exchange_03;
