let pkgs = import <nixpkgs> {};
in with pkgs; let
    devDependencies = [
    ];
    
    dependencies = [
      nodejs-7_x
      androidenv.androidsdk_6_0
    ];

in {
    devEnv = stdenv.mkDerivation {
        name = "whitelabel-react-native";
        buildInputs = devDependencies ++ dependencies;
    };
}

