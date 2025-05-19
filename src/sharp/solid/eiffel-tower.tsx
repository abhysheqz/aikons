import React from "react";
const EiffelTower: React.FC<
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
        d="M12.75 1.25v2h-1.5v-2zM17 11.75H7v-1.5h10zM19 15.75H5v-1.5h14z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.262 3.867A.75.75 0 0 1 11 3.25h2a.75.75 0 0 1 .738.617c.851 4.738 3.194 11.934 7.616 17.383H23v1.5h-8.54l-1.073-3.218L12 18.838l-1.387.694-1.072 3.218H1v-1.5h1.646C7.068 15.8 9.41 8.605 10.262 3.867M4.546 21.25h3.913l.928-2.782L12 17.162l2.613 1.306.928 2.782h3.913c-3.977-5.328-6.167-11.895-7.076-16.5h-.756c-.91 4.605-3.099 11.172-7.076 16.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.354 21.25H23v1.5h-8.54l-1.073-3.218L12 18.838l-1.387.694-1.072 3.218H1v-1.5h1.646C4.21 19.323 5.513 17.178 6.583 15h10.834c1.07 2.178 2.373 4.323 3.937 6.25M10.262 3.867A.75.75 0 0 1 11 3.25h2a.75.75 0 0 1 .738.617c.366 2.036 1.006 4.524 1.969 7.133H8.293c.963-2.609 1.603-5.097 1.969-7.133"
      />
    </svg>
  );
};
export default EiffelTower;
