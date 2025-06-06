import React from "react";
const ShoppingBasketSecure_03: React.FC<
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
        d="M17.498 22.75s-.671-.224-.856-.308a6.7 6.7 0 0 1-1.357-.82c-1.002-.787-2.037-2.111-2.037-4.152v-3.069h.75c.878 0 1.656-.22 2.222-.446a10 10 0 0 0 .864-.429l.414-.276.414.276c.15.082.584.317.865.429a6 6 0 0 0 2.221.446h.75v3.069c0 2.04-1.034 3.365-2.037 4.152a6.7 6.7 0 0 1-1.357.82c-.185.084-.856.308-.856.308"
      />
      <path
        fill="currentColor"
        d="M21.998 6.25h-3.604l-2.5-5-1.789.894 2.052 4.106H9.1l1.816-4.152-1.832-.802L6.916 6.25H1.997a.75.75 0 0 0-.75.75v3.54l1.606.536 1.911 9.078a.75.75 0 0 0 .734.596h7.373c-.515-.87-.873-1.955-.873-3.28V13.15h2c.674 0 1.292-.17 1.757-.357.085-.033.682-.34.682-.34l1.061-.706 1.06.707s.599.306.683.34c.398.159.907.306 1.467.346l.435-2.065 1.605-.535V7a.75.75 0 0 0-.75-.75"
      />
    </svg>
  );
};
export default ShoppingBasketSecure_03;
