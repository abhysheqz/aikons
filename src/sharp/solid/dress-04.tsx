import React from "react";
const Dress_04: React.FC<
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
        d="M7.153 10.5c-.389.427-.826.952-1.263 1.564-1.303 1.824-2.64 4.475-2.64 7.686v.455l.404.21a19 19 0 0 0 3.622 1.432c.112-1.677.575-3.197 1.027-4.331.262-.656.524-1.19.722-1.565a12 12 0 0 1 .312-.554l.02-.033.006-.01.002-.003v-.001l.635.4.634.4-.002.005-.014.021-.056.095q-.077.13-.212.382c-.177.335-.415.821-.653 1.419-.441 1.105-.872 2.56-.938 4.122a17.4 17.4 0 0 0 6.482 0c-.066-1.562-.497-3.017-.938-4.122a15 15 0 0 0-.653-1.42 11 11 0 0 0-.268-.476l-.014-.021-.002-.005.634-.4.634-.4.001.001.002.003.006.01.02.033q.026.041.07.118.092.155.242.436c.198.374.46.91.722 1.565.453 1.134.915 2.654 1.027 4.331a19 19 0 0 0 3.622-1.432l.404-.21v-.455c0-3.21-1.337-5.862-2.64-7.686a17 17 0 0 0-1.263-1.564zM9.75 3.349V1.5h-1.5v1.939l-1.78 1.78a.75.75 0 0 0-.14.866L7.785 9h8.427l1.458-2.915a.75.75 0 0 0-.14-.865L15.75 3.44V1.5h-1.5v1.848L12 4.848zM15.004 10.5H8.995h6.0089999999999995"
      />
    </svg>
  );
};
export default Dress_04;
