import React from "react";
const Discord: React.FC<
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
        d="M9.602 5.48s1.113-.23 2.398-.23 2.398.23 2.398.23L15 4.25c2.5.5 4.5 1.437 4.5 1.437S22 8.25 22 17.25c-2.134 1.601-5 2.5-5 2.5l-1.052-1.65 1.634-.925-.475-.372S15.205 17.946 12 17.946s-5.107-1.142-5.107-1.142l-.475.372 1.634.925L7 19.75s-2.866-.899-5-2.5c0-9 2.5-11.563 2.5-11.563S6.5 4.75 9 4.25zm7.648 7.27c0 1.104-.784 2-1.75 2s-1.75-.896-1.75-2 .784-2 1.75-2 1.75.895 1.75 2m-8.75 2c.966 0 1.75-.896 1.75-2s-.784-2-1.75-2-1.75.895-1.75 2 .784 2 1.75 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Discord;
