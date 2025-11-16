{pkgs, ...}: {
  env.BIOME_BINARY = "@biomejs/cli-linux-x64-musl/biome";
  packages = [pkgs.git];

  languages.javascript = {
    enable = true;
    bun.enable = true;
  };

  languages.typescript.enable = true;

  # https://devenv.sh/git-hooks/
  # git-hooks.hooks.shellcheck.enable = true;
}
