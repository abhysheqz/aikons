import React from "react";
const Seo: React.FC<
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
        d="M10.59 11.043c-1.86 0-3.367 1.542-3.367 3.444 0 .952.376 1.811.986 2.436a3.32 3.32 0 0 0 2.38 1.009c1.86 0 3.366-1.542 3.366-3.445s-1.507-3.444-3.366-3.444m-5.322 3.444c0-3.007 2.383-5.444 5.321-5.444 2.939 0 5.32 2.437 5.32 5.444s-2.381 5.445-5.32 5.445a5.2 5.2 0 0 1-3.007-.953l-1.731 1.77-1.382-1.413 1.73-1.771a5.5 5.5 0 0 1-.93-3.078"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 11.712c0-4.678 3.724-8.462 8.307-8.462h4.886c4.583 0 8.307 3.784 8.307 8.462 0 3.69-2.316 6.821-5.54 7.981l-.648-1.886c2.47-.89 4.233-3.286 4.233-6.095 0-3.564-2.839-6.462-6.352-6.462H9.557c-3.513 0-6.352 2.898-6.352 6.462 0 1.176.307 2.276.845 3.224L2.36 15.94a8.55 8.55 0 0 1-1.11-4.228"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Seo;
