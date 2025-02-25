import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // habilita acesso a host confiáveis
  images:{
    remotePatterns:[ {hostname:"u9a6wmr3as.ufs.sh"}]
  }
};

export default nextConfig;
