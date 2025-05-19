import React from "react";
const WifiOff_01: React.FC<
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
        d="M7.798 13.788c1.32-1.3 2.946-1.924 4.79-1.763a1 1 0 1 1-.175 1.992c-1.229-.107-2.287.285-3.21 1.195a1 1 0 0 1-1.405-1.424M12.512 8.848a1 1 0 0 1 1.14-.836c2.014.31 3.908 1.32 5.51 2.739a1 1 0 1 1-1.325 1.498c-1.382-1.223-2.933-2.022-4.489-2.26a1 1 0 0 1-.836-1.14M9.947 9.18a1 1 0 0 1-.627 1.268c-1.094.37-2.172.98-3.18 1.82a1 1 0 1 1-1.28-1.536c1.178-.982 2.47-1.723 3.82-2.18a1 1 0 0 1 1.267.628M9.313 3.756c4.579-.875 9.213.501 13.332 3.98a1 1 0 0 1-1.29 1.528C17.618 6.11 13.581 4.977 9.688 5.721a1 1 0 1 1-.375-1.965M6.394 5.553a1 1 0 0 1-.447 1.341c-.885.443-2.083 1.34-3.302 2.37a1 1 0 1 1-1.29-1.528c1.23-1.038 2.583-2.073 3.698-2.63a1 1 0 0 1 1.341.447"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M12 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
    </svg>
  );
};
export default WifiOff_01;
