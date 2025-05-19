import React from "react";
const LocationFavourite_01: React.FC<
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
        d="M12.002 1.25c-3.827 0-7.477 2.263-9.005 5.835-1.422 3.324-.652 6.152.95 8.574 1.315 1.986 3.231 3.759 4.96 5.358h.001q.496.458.963.896l.001.002a3.12 3.12 0 0 0 2.13.835c.79 0 1.554-.297 2.129-.836q.441-.412.908-.84c1.748-1.611 3.691-3.402 5.02-5.413 1.6-2.425 2.367-5.256.947-8.576-1.528-3.572-5.178-5.835-9.004-5.835m2.835 6.156c-1.136-.663-2.186-.414-2.837.038-.65-.452-1.701-.7-2.837-.038-.848.494-1.287 1.502-1.132 2.6.156 1.107.899 2.295 2.367 3.328.466.33.944.666 1.602.666s1.136-.337 1.602-.666c1.468-1.033 2.211-2.22 2.367-3.327.155-1.099-.284-2.107-1.132-2.601"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationFavourite_01;
