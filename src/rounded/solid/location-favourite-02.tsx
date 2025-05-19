import React from "react";
const LocationFavourite_02: React.FC<
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
        d="M12 1.25c-5.275 0-9.75 4.36-9.75 9.676 0 2.722 1.152 4.998 2.767 6.876 1.608 1.87 3.701 3.38 5.661 4.592l.013.008.013.008a2.64 2.64 0 0 0 2.592 0l.011-.007.011-.007c1.968-1.203 4.061-2.716 5.669-4.592 1.613-1.883 2.763-4.165 2.763-6.878 0-5.316-4.474-9.676-9.75-9.676m3.192 5.714c-1.278-.758-2.46-.474-3.192.044-.732-.518-1.914-.802-3.192-.044-.954.565-1.448 1.717-1.273 2.972.175 1.265 1.011 2.622 2.663 3.803.524.376 1.062.761 1.802.761s1.277-.385 1.802-.761c1.652-1.18 2.488-2.538 2.663-3.803.175-1.255-.32-2.407-1.273-2.972"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationFavourite_02;
