{inputs, pkgs, ...}: {
  env.BIOME_BINARY = "@biomejs/cli-linux-x64-musl/biome";
  overlays = [
      (final: prev: {
        nodejs-slim = (import inputs.nodeslim-24 {
          system = prev.stdenv.system;
        }).nodejs-slim_24;
        bun = (import inputs.bun-132 {
          system = prev.stdenv.system;
        }).bun;
      })
    ];

  packages = [pkgs.git];

  languages.javascript = {
    enable = true;
    bun.enable = true;
  };
  # https://devenv.sh/git-hooks/
  # git-hooks.hooks.shellcheck.enable = true;
}
