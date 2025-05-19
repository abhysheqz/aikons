import React from "react";
const KitchenUtensils: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.502 2a1 1 0 0 1 1 1v10.13a4.26 4.26 0 0 1 1.805 1.006c.682.637 1.197 1.54 1.197 2.489 0 1.09-.405 2.364-1.03 3.371-.596.96-1.608 2.004-2.972 2.004-1.365 0-2.376-1.044-2.972-2.004-.626-1.007-1.03-2.28-1.03-3.371 0-.949.515-1.852 1.197-2.49.481-.45 1.1-.819 1.805-1.005V3a1 1 0 0 1 1-1M1.745 2.345A1 1 0 0 1 2.5 2h6a1 1 0 0 1 .99 1.141l-.877 6.142A2 2 0 0 1 6.633 11H6.5v10a1 1 0 1 1-2 0V11h-.133a2 2 0 0 1-1.98-1.717L1.51 3.14a1 1 0 0 1 .235-.796M17.915 2.189a1 1 0 0 1 .901-.138 5.88 5.88 0 0 1 3.994 4.996l.685 6.853A1 1 0 0 1 22.5 15h-3v6a1 1 0 1 1-2 0V3a1 1 0 0 1 .415-.811"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KitchenUtensils;
