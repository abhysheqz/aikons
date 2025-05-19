import React from "react";
const MobileNavigator_01: React.FC<
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
        d="M3.25 4A2.75 2.75 0 0 1 6 1.25h12A2.75 2.75 0 0 1 20.75 4v16A2.75 2.75 0 0 1 18 22.75H6A2.75 2.75 0 0 1 3.25 20zM12 5.25c-2.367 0-4.25 1.968-4.25 4.35 0 1.364.673 2.455 1.404 3.239.733.785 1.58 1.324 2.073 1.603a1.57 1.57 0 0 0 1.546 0c.493-.279 1.34-.818 2.073-1.603.73-.784 1.404-1.876 1.404-3.239 0-2.382-1.883-4.35-4.25-4.35M12 8a1.5 1.5 0 0 0 0 3h.009a1.5 1.5 0 0 0 0-3zm-1 10.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MobileNavigator_01;
