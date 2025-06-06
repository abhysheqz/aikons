import React from "react";
const IceCream_03: React.FC<
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
        d="M12 3a4 4 0 0 0-3.774 5.33 1 1 0 0 1-.537 1.246c-.312.139-.508.274-.615.378.1.06.263.133.511.206.68.2 1.699.313 2.933.336a1 1 0 0 1 .982 1V12.5a.5.5 0 0 0 1 0v-1.005a1 1 0 0 1 .982-1c1.234-.022 2.253-.135 2.933-.335.248-.073.411-.147.511-.206-.107-.104-.303-.24-.615-.378a1 1 0 0 1-.537-1.246A4 4 0 0 0 12 3M6 7a6 6 0 1 1 11.886 1.168q.267.181.486.404c.343.35.628.833.628 1.428 0 .626-.315 1.109-.712 1.436-.372.307-.842.505-1.308.642-.697.206-1.555.323-2.48.38v.042a2.5 2.5 0 0 1-5 0v-.043c-.925-.056-1.783-.173-2.48-.379-.466-.137-.936-.335-1.309-.642C5.315 11.109 5 10.626 5 10c0-.595.285-1.078.628-1.428q.219-.223.486-.404A6 6 0 0 1 6 7"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.82 10.542a1 1 0 0 1 .993-.32c.678.163 1.61.254 2.705.274a1 1 0 0 1 .981 1V12.5a.5.5 0 0 0 1 0v-1.004a1 1 0 0 1 .982-1c1.094-.02 2.026-.11 2.704-.275a1 1 0 0 1 1.16 1.351l-4.42 10.807a1 1 0 0 1-1.851 0L6.653 11.572a1 1 0 0 1 .167-1.03"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default IceCream_03;
