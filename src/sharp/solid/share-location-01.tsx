import React from "react";
const ShareLocation_01: React.FC<
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
        d="M20.794 12c0-4.857-3.94-8.795-8.802-8.795V1.25C17.934 1.25 22.75 6.064 22.75 12s-4.816 10.75-10.758 10.75v-1.954c4.862 0 8.802-3.939 8.802-8.796M9.373 3.641a10.1 10.1 0 0 0-2.921 1.561L5.254 3.657a12 12 0 0 1 3.488-1.866zM4.31 7.571a8.4 8.4 0 0 0-1.137 2.894l-1.923-.358A10.4 10.4 0 0 1 2.649 6.54zm-1.661 9.89a10.4 10.4 0 0 1-1.399-3.568l1.923-.358a8.4 8.4 0 0 0 1.137 2.893zm3.808 1.34a9.9 9.9 0 0 0 2.916 1.558l-.63 1.85a11.8 11.8 0 0 1-3.495-1.87z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.002 16.749c.201.116.37.205.491.266l.51.235.511-.235a10.545 10.545 0 0 0 1.973-1.297c1.06-.889 2.267-2.307 2.267-4.2 0-2.625-2.118-4.768-4.75-4.768s-4.75 2.143-4.75 4.767c0 1.894 1.206 3.312 2.266 4.2.542.455 1.08.8 1.482 1.032m.996-6.999c-.963 0-1.744.784-1.744 1.75s.78 1.75 1.744 1.75h.011c.964 0 1.745-.784 1.745-1.75s-.781-1.75-1.745-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShareLocation_01;
