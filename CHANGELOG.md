# Change Log

## v2.0.11
- upd：クイックセーブ・ロード関連の作り込み
- upd：ライブラリ更新
## v2.0.10
- upd：ライブラリ更新
- upd：doc/prj/archive/_archive.htm のテストコード判定修正
## v2.0.9
- bug：アルバム画面：サムネイル乱打時エラーに対応
- bug：アルバム・セーブロード画面：画像がドラッグできてしまうのを禁止
- upd：ライブラリ更新
## v2.0.8
- bug：再開を聞くダイアログ、F5デバッグ時以外は出すように(doc/prj/script/sub.sn)
- bug：再開を聞くダイアログでキャンセルできない件(doc/prj/other/_yesno.sn)
- bug：履歴画面を呼び出す上キーショートカットが利いてない件(doc/prj/log/_log.sn)
- del：使用していない doc/prj/album/_album.jpg 削除
- upd：ライブラリ更新
## v2.0.7
- upd：ライブラリ更新
## v2.0.6
- upd：リリースビルド時に一度webpack生成物をクリアするように
- upd：ライブラリ更新
## v2.0.5
- chg：.gitignore更新、SKYNovel拡張機能が生成するファイルを削除
- chg：（ucとhatsuneのみ）アイコン作成
## v2.0.4
- chg：【生成】生成パスを build/ → build/package 下へ
## v2.0.3
- bug：初回起動時に sys:const.sn.sound.VOICE.volume が NaN、初期化するように
## v2.0.2
- chg：ふりーむ対応とファイルサイズから doc/prj/other/_c2p.svg を _c2p.png に差し替え
- upd：ライブラリ更新（スナップショット修正）
- info：[frame]ロード用htmにコメント追記
- info：README.md手直しと使用画像フォルダ名を「example」に変更、必須でなくただの例と示す
## v2.0.1
- chg：【doc/prj/archive/_archive.sn】サムネイル保存をフォルダ別に変更
	（SKYNovel v1.1.0対応）
	- 旧：[let name=pic text="& 'userdata:/storage/'+ _save.place +'.jpg'"]
	- 新：[let name=pic text="& 'userdata:/'+ _save.place +'/pic.jpg'"]
- bug：【更新 doc/app.js】非パッケージアプリ版のセーブデータ箇所が、別アプリと被っていた件
- chg：なるべく package.json を参照しそちらから値を取得するように
## v2.0.0
- upd：SKYNovel 1.0.0 対応・テンプレ変更
	- npm un skynovel && npm i @famibee/skynovel
	- core/app4webpack.js ... require('@famibee/skynovel/app');
	- core/web4webpack.js ... require('@famibee/skynovel/web');
- upd：デバッグアプリ版、ブラウザ版はダイアログで聞かずレジュームするように。リロード開発利便性から（doc/prj/script/sub.sn [sys_resume_load]）
- upd：ライブラリ更新
## v1.2.3
- upd：ライブラリ更新
## v1.2.2
- breaking change：SKYNovel v0.20.4（プラグイン用クラス定義追加と変更）対応
## v1.2.1
- breaking change：SKYNovel v0.20.3（webpackでumdモジュールバンドル化）対応
## v1.2.0
- breaking change：新テンプレ「doc」：フォルダ構成変更（prj→doc/prj）リロード機能有効化（後方互換性なし）
## v1.1.5
- chg：[break_macro]廃止に対応
- upd：ライブラリ更新
## v1.1.4
- add：プレイデータのエクスポート・インポート対応
- add：[notice]プラグイン、text以外の属性も使えるように（参考： https://wavded.github.io/humane-js/ ）
## v1.1.3
- upd：ライブラリ更新
## v1.1.2
- bug：prj/other/breakpage.json の文字コードが UTF-16LE になっていた件
- upd：ライブラリ更新
## v1.1.1
- add：セーブロード画面、履歴画面を暗号化HTML・画像に対応
## v1.1.0
- add：設定画面、アルバム画面を暗号化HTML・画像に対応
## v1.0.52
- bug：タイトル画面でブラウザ制限によるクリック待ちで、ボタンフォーカスを検知してしまう件
## v1.0.51
- upd：暗号化しないフォルダ指定
## v1.0.50
- upd：ライブラリ更新
## v1.0.49
- upd：ライブラリ更新
## v1.0.48
- upd：ライブラリ更新など
## v1.0.47
- upd：ライブラリ更新など
## v1.0.46
- upd：ライブラリ更新
- upd：Deprecatedになった「app.getName()」を「app.name」に変更（app.js）
## v1.0.45
- upd：ライブラリ更新
## v1.0.44
- chg：（_submenu.sn）新文字表示技術に対応（透過の右クリックメニューで、文字が上に来るため、テンプレで消す）
- chg：（sub.sn）バック不透明度、初期値を0.5→0.7に
- chg：（_log.htm）少し高速化
- upd：ライブラリ更新
## v1.0.43
- upd：ライブラリ更新
## v1.0.42
- upd：ライブラリ更新
## v1.0.41
- upd：ライブラリ更新
## v1.0.40
- upd：ライブラリ更新
## v1.0.39
- upd：ライブラリ更新
## v1.0.38
- upd：ログ表示で最新となる一番下へスクロールしておくように
## v1.0.37
- add：ホイールイベントでログ表示するように、など
## v1.0.36
- bug：スペースキーで文字消去・出現が効かない不具合
## v1.0.35
- chg：ライブラリ更新
## v1.0.34
- bug：ロード直前に[sys_resume_save]が実行されてしまう件
## v1.0.33
- bug：BGM音量復帰しても再生されないので、[playbgm]するように
## v1.0.32
- chg：アルバム画面で動画再生をスクリプト主導にし、動画再生中はBGM音量を0にするように
## v1.0.31
- chg：const.sn.sLogをconst.sn.log.jsonに変名
## v1.0.30
- bug：セーブ(ロード)画面で削除したときの不具合
## v1.0.29
- bug：セーブ(ロード)画面で削除するとセーブ(ロード)処理もしてしまう件
- bug：ext_fg2.snを削除していたが使用していたので追加
## v1.0.28
- chg：[save]のtxt属性をtext属性に変名
## v1.0.27
- bug：不具合修正、作り込み
## v1.0.26
- bug：全画面・ウインドウモード切り替え時の通知が逆になってる件
## v1.0.25
- chg：electron-builderの引数変更に対応
## v1.0.24
- chg：about-windowをテンプレでのほうへ移動
- add：メニューに「DevTools」「quit/close」を追加
## v1.0.23
- chg：ファイル更新など
## v1.0.22
- bug：prj/config/_config.sn に [trace]文が残っていたのを削除
## v1.0.21
- bug：セーブロード画面修正（JavaScript部分のみ）
## v1.0.20
- add：アルバム画面、作り込み
## v1.0.19
- bug：「背後に画像を使わない・単色塗り」際はwidth・heightは省略するようにコメント追加
- add：ダイアログに使用されている文字フォント追加
## v1.0.18
- sn.Button.fontFamily 記述追加
## v1.0.17
- 本文フォントを導入・反映
## v1.0.16
- 日本語ファイル名を英数字に変更
## v1.0.15
- Initial commit
- 横書きプロジェクト作成（縦書き「桜の樹の下には」v1.0.14ベースを改良した）
