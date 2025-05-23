import React from "react";
const MagicWand_01: React.FC<
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
        d="M11.513 9.44a1.82 1.82 0 0 0-1.62 0c-.272.135-.564.428-.794.659-.231.23-.524.522-.66.794a1.82 1.82 0 0 0 0 1.62c.136.273.37.505.6.736l.06.059 8.652 8.653c.23.23.463.464.736.6.51.252 1.11.252 1.62 0 .272-.136.564-.428.794-.66.231-.23.524-.522.66-.794.252-.51.252-1.11 0-1.62-.136-.273-.37-.505-.6-.736L12.308 10.1l-.06-.06c-.23-.23-.462-.464-.735-.6m-1.352 1.72c.152-.152.245-.245.318-.31.074-.077.267-.184.451 0 .074.065.166.158.319.31l1.617 1.618-1.087 1.088-1.618-1.618a9 9 0 0 1-.31-.319c-.183-.182-.076-.377 0-.45.065-.074.157-.167.31-.32"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17 1.25a.75.75 0 0 1 .703.49l.295.796c.41 1.11.55 1.44.788 1.678s.569.378 1.678.788l.796.295a.75.75 0 0 1 0 1.406l-.796.295c-1.11.41-1.44.55-1.678.788s-.378.569-.788 1.678l-.295.796a.75.75 0 0 1-1.406 0l-.295-.796c-.41-1.11-.55-1.44-.788-1.678s-.569-.377-1.678-.788l-.796-.295a.75.75 0 0 1 0-1.406l.796-.295c1.11-.41 1.44-.55 1.678-.788s.377-.569.788-1.678l.295-.796A.75.75 0 0 1 17 1.25M6 3.25a.75.75 0 0 1 .703.49l.221.597c.314.848.405 1.048.548 1.191s.343.234 1.19.548l.598.22a.75.75 0 0 1 0 1.407l-.597.221c-.848.314-1.048.405-1.191.548s-.234.343-.548 1.19l-.22.598a.75.75 0 0 1-1.407 0l-.221-.597c-.314-.848-.405-1.048-.548-1.191s-.343-.234-1.19-.548l-.598-.22a.75.75 0 0 1 0-1.407l.597-.221c.848-.314 1.048-.405 1.191-.548s.234-.343.548-1.19l.22-.598A.75.75 0 0 1 6 3.25"
      />
    </svg>
  );
};
export default MagicWand_01;
