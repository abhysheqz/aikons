import React from "react";
const UngroupLayers: React.FC<
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
        d="M1.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17.25 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1.25 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M10.426 7.755c.549-.27 1.027-.505 1.574-.505s1.025.235 1.574.505l1.244.609c.645.315 1.197.585 1.581.84.363.241.851.641.851 1.296s-.488 1.055-.85 1.296c-.385.255-.937.525-1.582.84l-1.244.61c-.549.269-1.027.504-1.574.504s-1.025-.235-1.574-.505l-1.244-.609c-.645-.315-1.196-.585-1.581-.84-.364-.241-.851-.641-.851-1.296s.487-1.055.85-1.296c.386-.255.937-.525 1.582-.84z"
      />
      <path
        fill="currentColor"
        d="M7.705 12.75c.451 0 .83.292.929.685.263.162.775.416 1.457.727l1.04.474c.702.32.788.336.869.336s.167-.016.87-.336l1.039-.474c.682-.31 1.194-.565 1.457-.727.1-.393.478-.685.93-.685.527 0 .954.398.954.889 0 .705-.566 1.119-.919 1.337-.38.235-.92.48-1.525.756l-.058.027-1.04.474-.113.052c-.509.233-1.015.465-1.595.465s-1.086-.232-1.595-.465l-.114-.052-1.039-.474-.058-.027c-.606-.276-1.145-.521-1.525-.756-.353-.218-.919-.632-.919-1.337 0-.491.427-.889.955-.889"
      />
    </svg>
  );
};
export default UngroupLayers;
