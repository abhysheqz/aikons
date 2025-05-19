import React from "react";
const Yen: React.FC<
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
        d="M4.74 2.035a1 1 0 0 1 1.226.705C6.36 4.201 8.139 7.662 12 9.462c3.861-1.8 5.64-5.26 6.035-6.722a1 1 0 1 1 1.93.52c-.503 1.87-2.558 5.82-6.965 7.941v.8h4.834a1 1 0 0 1 0 2H13v2h4.834a1 1 0 0 1 0 2H13v3a1 1 0 1 1-2 0v-3H6.167a1 1 0 1 1 0-2H11v-2H6.167a1 1 0 1 1 0-2H11v-.8c-4.406-2.12-6.462-6.072-6.965-7.94a1 1 0 0 1 .705-1.226"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Yen;
