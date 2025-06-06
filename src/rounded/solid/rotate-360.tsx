import React from "react";
const Rotate_360: React.FC<
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
        d="M14.813 4.28c-2.29.552-4.869 1.908-7.152 3.962C5.376 10.3 3.894 12.6 3.297 14.608c-.6 2.022-.268 3.547.715 4.43 1.03.925 2.837 1.24 5.148.692 2.275-.541 4.84-1.884 7.122-3.938a1 1 0 0 1 1.337 0c.532.477.605 1.194.613 1.624.01.5-.07 1.04-.166 1.506a15 15 0 0 1-.487 1.784l-.002.006a1 1 0 0 1-1.275.614c-.233-.082-.398-.265-.533-.44l-1.09-1.388c-1.676 1.046-3.408 1.786-5.056 2.177-2.606.62-5.214.407-6.947-1.149-1.782-1.6-2.016-4.065-1.296-6.488C2.104 11.601 3.83 9 6.324 6.756c2.497-2.248 5.366-3.78 8.02-4.42 2.615-.631 5.24-.436 6.977 1.124 1.249 1.121 1.747 2.693 1.67 4.367-.076 1.657-.712 3.455-1.772 5.196a1 1 0 1 1-1.708-1.04c.939-1.542 1.425-3.015 1.482-4.248.056-1.217-.302-2.153-1.008-2.787-1.027-.922-2.842-1.23-5.172-.668"
      />
    </svg>
  );
};
export default Rotate_360;
