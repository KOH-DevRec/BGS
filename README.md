# BGS
Web配信サービス「BGS」のリポジトリです。
ubuntu 20.04をベースにした react開発環境を想定しています。
起動する場合は以下のようにdockerでコンテナ作成を行ってください。

## コンテナの作成
以下ののコマンドを用いてコンテナを作成．

```
(mac・Linuxの場合)
~$ ./build.sh

(Windows 10の場合)
~$ .\build.ps1
```

## リモート エクスプローラーの準備
VS Code内の拡張機能にてRemote-Containersをインストールし、
追加されたアイコンから先程作成したimage内にてcloneを行ってください。
