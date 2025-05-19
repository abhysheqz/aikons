import React from "react";
const Banana: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 11.917c2-1.008 4.478-.164 5.578 2.269 1.65 3.65-1.816 7.697-5.57 7.811a.8.8 0 0 1-.322-.056c-2.747-1.143 3.786-5.2 1.646-7.393M12.26 13c.493-1.862-.29-3.741-2.265-3.276-1.196.282-1.479 1.16-2.202 1.233-.562.057-.909-.585-.758-1.121C8.11 6.022 16 6.024 16 10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 18.908C11.808 20 6.609 20.534 4.5 19l-2.5.5v-4l2.5 1c5-2 11.495-3.476 13.246-10.786C18.526 2.46 18.751 2 20.053 2s2.866 3.001 1.273 7.958c-.42 1.31-.918 2.62-1.63 3.841"
      />
    </svg>
  );
};
export default Banana;
