# Change Log

## v2.18.3
- fix: package.json の npm-scripts に【"postinstall": "npm run webpack:dev"】タスクを追加
- fix: rebuild タスクから前述処理を削除。実行結果は同じ
- fix: core/app4webpack.js【new SysApp(hPlg);】を DOMContentLoaded イベント発生後に
- fix: core/web4webpack.js【new SysWeb(hPlg);】を DOMContentLoaded イベント発生後に
## v2.18.2
- fix: 生成ファイルのファイル名を短縮
## v2.18.1
- fix: フォントファイルなど更新
- fix: アイコン用 psd など追加
- fix: ライブラリ更新
## v2.18.0
- feat(_config.sn,htm): ボイス（VOICEバッファの音声）再生中のBGM音量への乗数を設定できるように
- feat(setting.sn): 同上の初期値設定と、設定画面へのスライダー追加
- fix(core/webpack.config.js): 【Module not found: Error: Can't resolve 'url'〜】対策
	- angular14 - Module not found: Error: Can't resolve 'url' in webpack 5/Angular 14 - Stack Overflow https://stackoverflow.com/questions/72720744/module-not-found-error-cant-resolve-url-in-webpack-5-angular-14
## v2.17.0
- fix(_submenu.sn): ページ遷移状態から [page to=load] する際にダイアログで確認するように
	- fix だが前回あげ忘れにつきマイナーver上げ
- fix(_submenu.htm, _submenu.sn): 右クリックメニュー表記を最新に
- fix(_yesno.sn): ダイアログ表示中にショートカットが利かないように
- fix(_album.sn, _archive.sn, _config.sn, _log.sn, _log.sn, _submenu.sn, _yesno.sn, _hidetext.sn): escape キーでも画面を抜けられるように
- fix: ライブラリ更新(SKYNovel v1.60.2)など
## v2.16.3
- feat(_submenu.sn): ページ遷移状態から抜けるキーショートカット追加
	- ページ遷移状態でなければ右クリックメニューを表示するキーショートカット（ESC, Shift）
	- to=load ショートカットとして右クリックや shiftキー を先行で組み込み
- fix(_log.sn → _submenu.sn): ページ遷移状態へ移行するキーショートカットや処理を移動
- fix: ライブラリ更新(SKYNovel v1.58.0)など
## v2.16.2
- fix(app.js): メニューに【ウインドウサイズを初期に戻す】追加
- fix: ライブラリ更新(SKYNovel v1.57.0)など
## v2.16.1
- fix(main.sn): AIRNovel時代の変数名のまま残っていたミス修正
	- 旧：const.flash.display.Stage.displayState=='normal'
	- 新：! const.sn.displayState
## v2.16.0
- feat(main.sn): key=Meta+0 で変更したウインドウサイズを初期状態に戻せる
- fix(app.js): 初期値項目廃止につき記述削除
## v2.15.2
- fix(_submenu.htm): ゲーム終了ボタンが効かなかったのを修正
- fix(_submenu.sn): 「起動：ブラウザ版」上での実行ならゲーム終了ボタンを無視するように
- fix(Bootstrap): ライブラリ更新 v5.1.3 -> v5.3.3
## v2.15.1
- fix(doc/prj/prj.json): debug: {}に【"dumpHtm": false,】追加
- fix(sub.sn): 変数 pos.vleft_disp_x 設定直後に [fg2]用設定を追加
	- テンプレで ext_*.sn 後に  sub.sn が呼ばれるのは保証
- doc(doc/prj/script/sub.sn): 引数説明 txt_time => t_time ミス修正
## v2.15.0
- feat: フォントサイズを変数 font_size で指定できるように。デフォルト値 24（px）
- feat: [設定画面]-[テンプレ]で指定できる変数を追加
	- tategaki（本文は縦書きか）
	- bura_mode（ぶら下げ禁則処理するか）
	- font_size（フォントサイズ）
- fix: フォントサイズ不統一を修正
	- [txt_lay_v_left]で 33.6px
	- [txt_lay_fullscreen]で 24px だった
## v2.14.20
- fix: ライブラリ更新(SKYNovel v1.53.12)など
## v2.14.19
- fix([plc][lr]): [wq]を追加。[quake]中に[p][l]待ちで次へ進むのを止める
	- というか、止めるかどうかをそれぞれのマクロで決められる方針
## v2.14.18
- fix: SKYNovel v1.53.0 対応のフレーム処理に
- fix: ライブラリ更新(SKYNovel v1.53.0)など
## v2.14.17
- fix(ext_fg.sn、ext_fg2.sn): 拡張機能更新
- fix: ライブラリ更新
## v2.14.16
- fix: フレームもの内部で使用しているファイルの拡張子をエンジンから受け取るように
	- 変更対象は
		- doc/prj/frames/_album.htm
		- doc/prj/frames/_album.sn
		- doc/prj/frames/_archive.htm
		- doc/prj/frames/_archive.sn
	- テンプレ素材の拡張子を変えた場合（png→jpgなど）に、分かりづらい不具合になっていたので
- fix: ライブラリ更新(SKYNovel v1.50.1)など
## v2.14.15
- docs(拡張機能やマクロなど): 引数説明記述を拡張機能v4.16.0準拠に
- docs(マクロの引数説明記述): 値域・型の表記ゆれ統一と新規追加
- docs: 画像レイヤの fn 属性もカンマ区切りで複数指定可能である点を明記
	- この属性一つで基本画像（先頭）と差分名称（二つめ以降）を指定できる
	- 内部的に fn と face をcsv結合して扱っている
	- いつからかこの仕様だったが明示していなかった。扱いやすい場合も
- fix: ライブラリ更新
## v2.14.14
- fix: ライブラリ更新(SKYNovel v1.49.2)など
## v2.14.13
- fix: ライブラリ更新(SKYNovel v1.49.1)など
- fix(brix/crypto-js, buffer): 不要になったライブラリ削除、お世話になりました
## v2.14.12
- fix: ライブラリ更新(SKYNovel v1.48.15)など
## v2.14.11
- fix: [plc]内部を sn.skip.enabled 中心に整理
- fix: ext_fg.sn、ext_fg2.sn を微更新
## v2.14.10
- fix: シナリオ開始時共通処理で [fadeoutse buf=VOICE time=1000] 追加
- fix: マクロ[bgm]をシンプルな構造に
- fix: アルバム画面とセーブロード画面 htm、ダミーデータで id 忘れ警告が出ていた件
## v2.14.9
- fix: cfg.log.max_len: デフォルト値 1024 を 64に
## v2.14.8
- feat: （F で既読スキップだが）Ctrl (Mac では Control) + F で未読スキップするように
## v2.14.7
- fix: 設定画面：エクスポート・インポートボタン文言の多言語化忘れ
- fix: 自動読み進み中のボイス再生待ちで、クリックキャンセル時にボイスを再生停止しないように（対象：マクロ[lr][plc]）
- fix: [set_cancel_skip]削除
- fix: _submenu.sn の不要な[wait]削除
## v2.14.6
- fix: [txt_lay_〜]系マクロを呼ぶと、それまでで非表示にしていたシステムメニューボタンレイヤ（mes_sysmenu）が表示されてしまう件
	- [sysmenu_draw_h]や[sysmenu_draw_v]を内部で呼んでいて、その修正
- fix: 拡張スクリプト更新：doc/prj/theme/ext_voice.sn：2023.05.20.009
## v2.14.5
- fix: 縦書きウインドウのヒントの表示位置を修正
	- sub.sn：[sysmenu_draw_v]の hint_opt 属性を修正、テキストウインドウ内側に
- fix: 多言語インタフェースで「前回終了ポイントから再開しますか？」という文言の日本語版以外の指定が抜けていたのを修正
	-ext_lang.sn：変数記述追加
## v2.14.4
- fix: ext_fg.sn 更新
## v2.14.3
- fix: セーブロード画面(htm)：セーブ画面を開いてからロード画面を開くなどでエラーになる件
- fix: セーブロード画面(sn)：[save]で組み込み変数 const.sn.last_page_text の代わりに const.sn.last_page_plain_text を使用するように
## v2.14.2
- fix: core/font/ipamjm.woff2 が一部しか字形を含んでいなかったので、IPA配布の全字形を含んだ ipamjm.ttf に差し替え
- fix: 最新拡張機能（v4.14.0）でフォント再生成
## v2.14.1
- fix: アルバム・セーブロード画面：二度目以降の表示でページ以外の要素が表示される件
## v2.14.0
- feat: アルバム・セーブロード画面：ひと画面に収まる単位で自動ページ分割するように
- feat: アルバム・セーブロード画面：自動ページ分割、画面サイズ・ブラウザ表示サイズの変更に対応
- fix: セーブロード画面：削除時、内部辞書 a を削除していなかった件
- fix: セーブロード画面：削除時、全体を再描画するように
- fix: 全画面モードかどうかを示す組み込み変数 const.sn.displayState の値の変更タイミングが分からないので、先に取得し NOT するように
## v2.13.0
- feat: 本文多言語対応（日・スペイン・英・中）
- feat: インターフェイス多言語対応（日・スペイン・英・中・台）
## v2.12.26
- fix: セーブロード画面：アプリ版セーブでエラーになりサムネイルが保存・表示されてない件
- fix: セーブロード画面：サムネイル画像の更新が反映されない件
	- 画像ロード処理で、パラメータを含んだファイル名に
- fix: ライブラリ更新(SKYNovel v1.41.0)など
## v2.12.25
- fix: 拡張機能マクロ追加「ext_voice.sn」修正
	- 2023.03.06.008	シナリオ名内部変数に「_」など文字を含む運用に
## v2.12.24
- fix: 改変者が利用できるよう拡張機能マクロ追加
- fix: doc/prj/script/sub.sn：[se][plc]のbuf属性説明を修正
## v2.12.23
- fix: [lr]にボイス再生終了待ちを追加
- fix: ライブラリ更新(SKYNovel v1.40.3)など
## v2.12.22
- fix: アプリ版：暗号化プロジェクトでセーブするとサムネイル表示でエラーになる件（SKYNovel v1.39.13 以上必須）
- fix: フレーム系画面 html をクリンナップ
	- 別画面同士で js 構造をよせる・そろえる
	- .replace('sn_repRes();', '') されることを必要としないように
	- 初期値の undefined を忌避、動作するメソッドを入れておく
	- 開発時にブラウザで htm を開いたのか（デザイン用）、実行中なのかの判定をシンプル化・記述統一
	- 素材 webp 化対応処理をシンプル化・記述統一
- docs: build/include/readme.txt 更新
## v2.12.21
- fix: winの全画面：【alt+enter】だと正しく動き、【F11】【左上メニュー】だと左端に寄ったり文字レイヤサイズが狂う件
## v2.12.20
- fix: 表記ゆれ修正漏れ（buf=%buf|音声）
## v2.12.19
- fix: ボイスについてのバッファ名の表記ゆれ（VOICE/音声）を VOICE に統一
- fix: BGM・SE・VOICE初期値設定を修正
- fix: 設定画面：ボイス音量変更部を修正(frames/_config.sn)
## v2.12.18
- fix: BGM・SE・音声初期値設定箇所を移動（frames/_config.sn → script/setting.sn）
## v2.12.17
- fix: core/webpack.config.js に永続的ビルドキャッシュ記述追加
## v2.12.16
- fix: 手直し
## v2.12.15
- fix: webpack-dev-server のログ出力を 'info'→'warn' に
- fix: ライブラリ更新
## v2.12.14
- fix: sub.sn 縦書きテキストレイヤのマクロ修正
- fix: sub.sn マクロ追加・テキストレイヤ横書き(上/中央/下)小窓設定
- fix: sub.sn マクロ説明修正
## v2.12.13
- fix: v2.12.12 の影響手直し【[jump fn=main label=*title]】を【[jump fn=title]】に
## v2.12.12
- fix: [bgm]再生中に同名BGMを再生しようとした際は処理なしとする挙動に
- fix: [sys_title_start]を main.sn から title.sn 冒頭へ移動
## v2.12.11
- fix: [fg][fg2]に snippet_ext=SP_GSM 追加
- fix: [bgm][se]に snippet_ext=SOUND 追加
## v2.12.10
- fix: [fg][fg2]説明修正
## v2.12.9
- fix: [grp]%ruleの型を修正。【画像ファイル名（swf不可）】→【画像ファイル名】
- fix: [bgm]%fnの型を修正。【BGM音声ファイル名】→【音声ファイル名】
## v2.12.8
- fix: v2.12.7 の手直し
## v2.12.7
- fix: セーブ画面でセーブしたあと、サムネイル下の参考本文テキストを更新するように
## v2.12.6
- fix: sub.sn 内定義マクロ [grp] のミス修正
## v2.12.5
- fix: BREAKING CHANGE: sub.sn 内定義マクロ [grp]の属性 nofo_txt, nofi_txt を fo_txt, fi_txt に変更
	- 使用箇所の Boolean 値を 反転すること。テンプレも置換した
		- nofo_txt=true => fo_txt=false
		- nofi_txt=true => fi_txt=false
- fix: sub.sn 内定義マクロ [grp]に属性 chg0, chg1,　chg2 を追加
- docs: [grp]の sum説明を修正
## v2.12.4
- fix: マクロ更新（ext_fg.sn）SKYNovel 1.38.0 以降の[tsy path]を積極使用
## v2.12.3
- docs: テキストレイヤ設定系のマクロに文字レイヤ系の説明を追加
- docs: [bgm][se]のシステム変数説明のミスを修正（const.an.〜 → const.sn.〜）
- docs: [grp]に b_alpha属性説明を追加（デフォルト値がポイント）
## v2.12.2
- docs: [bgm][se]マクロ説明を追加・手直し
## v2.12.1
- docs: マクロ説明を追加・手直し
## v2.12.0
- docs: マクロ説明を追加
## v2.11.9
- fix: ライブラリ更新(SKYNovel v1.35.4)など
## v2.11.8
- fix: ライブラリ更新
## v2.11.7
- fix: _submenuで【ラベル *game_end_do が見つかりません】エラー
## v2.11.6
- fix: ライブラリ更新
## v2.11.5
- fix: フォルダ名変更（audio削除 → music、sound分離）
- fix: 横書きシステムボタンのtooltipを上向きに
- fix: ライブラリ更新
## v2.11.4
- fix: ライブラリ更新
## v2.11.3
- fix: 新拡張機能によるファイル更新(v3.23.1)
- fix: ライブラリ更新
## v2.11.2
- fix: 新拡張機能によるファイル更新
- fix: ライブラリ更新
## v2.11.1
- fix: フォントサイズ最適化機能：適用した中間ファイル追加・最小限フォントファイル同梱
- fix: ライブラリ更新
## v2.11.0
- feat: フレーム系画面、WebP 変換機能に対応
- fix: フレーム系画面、出現と消去でスライドさせていたが、重いので瞬時表示に
## v2.10.0
- feat: アプリメニューに機能追加
	- fix: 'このアプリについて'、Copyright 修正
	- fix: '設定'、'c'ボタン押下と同じ効果、ショートカット 'CmdOrCtrl+,' 追加
	- fix: '全画面/ウインドウモード切替'
	- fix: 'メッセージを消す'、' 'ボタン押下と同じ効果
	- fix: 'メッセージ履歴の表示'、'r'ボタン押下と同じ効果
	- fix: '次の選択肢・未読まで進む'、'f'ボタン押下と同じ効果
	- fix: '自動的に読み進む'、'a'ボタン押下と同じ効果
	- fix: 'DevTools'、ショートカット 'F12' 追加
	- （変更なし） 'close'（macOS）、'quit'（Windows）
- fix: Macの最大化ボタンでフルスクリーンにしない設定に（maximizable: false）
- feat: タイトル画面でもcキーで設定画面が開くように（主にメニュー用）
- fix: 一度本文に入りタイトルに戻った際、タイトル画面でcキーが利いていた件
## v2.9.6
- fix: ブラウザ版で全画面時にセンタリングするように
	- doc/web.htm 変更（cssで「canvas」→「canvas#skynovel」）
## v2.9.4
- fix: doc/prj/theme/ext_fg2.sn 更新
## v2.9.3
- fix: build/include/readme.txt：保存先ミスを修正（デスクトップ→ダウンロードフォルダ）
- fix: doc/app.js：SKYNovel.initRenderer()引数変更：SKYNovel v1.25.8 以降必須対応
## v2.9.2
- fix: クイックロードでエラー【属性 layer【mes_yesno】が不正です。レイヤーがありません】
	- doc/prj/frames/_archive.sn
- fix: スクリーンショット保存先ミスを修正（デスクトップ→ダウンロードフォルダ）
	- doc/prj/frames/_submenu.htm
- fix: yesnoダイアログでサムネイル表示サポート
	- doc/prj/frames/_yesno.htm
	- doc/prj/frames/_yesno.sn
- fix: （開発用ブラウザ版で）自動レジュームするかを設定画面で指定できるように
	- doc/prj/script/setting.sn
## v2.9.1
- fix: セーブするとキャンセル音がする件（doc/prj/frames/_archive.sn）
## v2.9.0
- fix: ライブラリ変更（MDB 5 モーダルが無料で使えなくなったので bootstrap 5に）
	- Bootstrap Modal - examples & tutorial https://mdbootstrap.com/docs/standard/components/modal/
		- This component requires MDB Pro Essential package.
	- ライブラリ変更
		- 削除：doc/prj/frames/lib/mdb.min.css, *.js
		- 追加：bootstrap.min.css, *.js
	- フレーム更新（ほぼ doc/prj/frames/*.htm の文字列置換）
		- mdb.min → bootstrap.min
		- data-toggle → data-bs-toggle
		- data-target → data-bs-target
		- data-dismiss → data-bs-dismiss
		- mdb.Modal → bootstrap.Modal
		- doc/prj/frames/_log.htm：card を使用するよう変更
		- doc/prj/frames/_archive.htm：ダイアログの「やめる」ボタンを .btn-outline-dark に
- fix: ライブラリ更新
## v2.8.1
- fix: ライブラリ更新
## v2.8.0
- feat: (_submenu.sn) 右クリックメニューをレスポンシブなフレームで再作成
- feat: (_yesno.sn) Yes / No ダイアログをレスポンシブなフレームで再作成
- fix: その他フレーム製画面をやや修正（右肩のボタンを右端へ、など）
- fix: ライブラリ更新
## v2.7.2
- fix: ライブラリ更新
## v2.7.1
- fix: パッケージ版ビルドエラー修正
	- script 内 "webpack:pro"の【-p】を【--mode production】に置換
	- "build": {} 直下に
		"artifactName": "${productName}-${version}-${arch}.${ext}",
		- File Patterns - electron-builder https://www.electron.build/file-patterns#file-macros
## v2.7.0
- add: ページ移動機能追加：page up/downキーで、既読ページを前後移動できるように
## v2.6.2
- fix: doc/prj/other/title.jpg を doc/prj/bg/title.jpg に移動
- fix: doc/prj/other フォルダを theme に変名
- fix: doc/prj/theme/_yesno.sn 、二度以上コールされた際に[return]するように
## v2.6.1
- fix: windowsで正しいURLを開けないのを修正
	- package.json/scripts の watch:wds, watch:wdsdbg の「'」を削除
## v2.6.0
- add: 拡張機能 v3.16.0、setting.sn の変数設定をGUI編集できる機能対応
- add: doc/prj/script/setting.sn：新規作成
- upd: doc/prj/script/main.sn：冒頭[add_lay]をsetting.snに移動
- upd: doc/prj/script/sub.sn：冒頭の定数・初期値などをsetting.snに移動
## v2.5.12
- fix: Web版デバッグモードが起動しない件
- fix: ライブラリ更新
## v2.5.11
- fix: リリース版は難読化
- fix: SKYNovel拡張機能 v3.14.5 以上対応
	- pass.json をルートに移動
- fix: ライブラリ更新
## v2.5.10
- upd：ライブラリ更新（Electron 14 に更新）
## v2.5.9
- fix: core/app4webpack.js 修正
## v2.5.8
- fix: ライブラリ更新
## v2.5.7
- fix: ライブラリ更新（webpack-dev-server 4.0.0 対応）
## v2.5.6
- fix: ライブラリ更新
## v2.5.5
- fix: ライブラリ更新
## v2.5.4
- fix: ライブラリ更新
## v2.5.3
- fix: core/webpack.config.js 手直し
- fix: ライブラリ更新
## v2.5.2
- fix: ライブラリ更新
## v2.5.1
- fix: ライブラリ更新
## v2.5.0
- chore: SKYNovel 2.0.0、 pixi.js 6、webpack 5 に更新
	- 追記: core/webpack.config.js に resolve: {fallback: {crypto: stream: }}
	- 追加: npm i -S buffer crypto-browserify stream-browserify@latest
	- fix: ライブラリ更新
	- chg: package.json >scripts「webpack-dev-server」→「webpack-cli serve」
## v2.4.5
- fix: ライブラリ更新
## v2.4.4
- fix: macOS Big Surでデバッグブラウザ版が起動しない件
- fix: ライブラリ更新、electron更新（11.3.0→12.0.0）など
## v2.4.3
- fix: doc/app.js 更新（SKYNovel 1.12.1 対応）、Electronウインドウ作成などを新設 SKYNovel.initRenderer() にラップするように（Store.initRenderer();などもそこに吸収）
- fix: npm un -S electron-store
## v2.4.2
- fix: ライブラリ更新（SKYNovel 1.10.1、electron-store 7.0.2）
## v2.4.1
- fix: npm i -S electron-store@7.0.2 と doc/app.js 追記（SKYNovel更新準備）
- fix: ライブラリ更新
## v2.4.0
- upd: Web版デバッグの変更に伴う更新
- fix: package.json の scripts で不要なものを削除
- fix: ライブラリ更新
## v2.3.0
- upd: 未使用マクロ警告抑制機能の変更に伴う更新
## v2.2.3
- upd：ライブラリ更新
## v2.2.2
- upd：ライブラリ更新
## v2.2.1
- upd：コメント追加（doc/prj/script/sub.sn）
- upd：スクリプト内自己ファイル名修正（doc/prj/frames/_archive.sn）
- upd：.gitignore更新
- upd：ライブラリ更新
## v2.2.0
- upd：doc/prj/other/_yesno.sn が画面サイズ変更に追従するように
- chg：フレーム系画面のフォルダ（album,archive,config,lib,log）をframesに統合（フレームhtml上の「../lib/」という参照がロードされないため）
- add：画像素材psdを追加
- upd：ライブラリ更新
## v2.1.2
- chg: テンプレのデフォルト著作者・出版者を夕街ではなくふぁみべぇに
- upd：ライブラリ更新
## v2.1.1
- upd：ライブラリ更新
## v2.1.0
- upd：セーブロード、アルバム、設定（HTMLフレーム系画面）を【Bootstrap 5 & Material Design 2.0】で再作成。デザインテンプレが豊富なBootstrap陣営へ移行
- bug：縦書き・縦ボタンが回転してない・位置ズレを修正（sub.sn）
- bug：[event key=command]部分を[event key=meta]に修正
## v2.0.16
- fix：フォーカス移動[set_focus]タグ使用部分修正
- upd：ライブラリ更新
## v2.0.15
- upd：不要な「"」を削除したり、見やすさのため「'」に変更
- upd：ライブラリ更新
## v2.0.14
- upd：ライブラリ更新
- bug：アルバム画面：【セレクタ（.mov）に対応する要素が見つかりません】エラーを修正
## v2.0.13
- upd：履歴画面、件数が多くても瞬時表示するように
## v2.0.12
- upd：ライブラリ更新
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
