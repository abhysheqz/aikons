import React from "react";
const Paragliding: React.FC<
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
        d="M12.435 2.388a.75.75 0 0 0-.869 0c-2.721 1.933-7.56 6.388-9.668 9.378-.675.958-.659 2.09-.647 2.93l.003.304a.75.75 0 0 0 1.035.694l1.832-.751 3.265 2.04a2 2 0 0 0 2.001 2.018H11V21a1 1 0 1 0 2 0v-2h1.612a2 2 0 0 0 2.002-2.017l3.265-2.04 1.833.75A.75.75 0 0 0 22.746 15l.003-.303c.013-.842.029-1.973-.646-2.93-2.109-2.99-6.947-7.446-9.668-9.379m5.165 11.62-2.023-.83.518 1.771zm-3.087 2.652-1.302-4.451-1.21-.496-1.212.496-1.3 4.447a1 1 0 0 1-.072.245l-.03.1h5.225l-.03-.104a1 1 0 0 1-.07-.237m-6.608-1.711.518-1.77-2.023.83z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Paragliding;
