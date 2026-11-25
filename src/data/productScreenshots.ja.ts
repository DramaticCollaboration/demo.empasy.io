import type { ProductVisualGuide } from './productScreenshots.types';

export const PRODUCT_VISUAL_GUIDES_JA: Record<string, ProductVisualGuide> = {
  "sync-verse": {
    "productId": "sync-verse",
    "roleEasyLabel": "協業・承認統合管理",
    "standaloneHomepagePath": "https://empasy.io/ja/solutions/sync-verse.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "ダッシュボード",
        "title": "全体の業務フローを確認",
        "tip": "連携モジュールの状態と最近処理された作業履歴をひと目で確認してみてください。"
      },
      {
        "step": 2,
        "menuPath": "承認センター",
        "title": "変更前後の比較と承認",
        "tip": "承認待ちの項目を開き、変更前後の差分を比較して承認または差し戻しを試してみてください。"
      },
      {
        "step": 3,
        "menuPath": "サイト・品質点検",
        "title": "統合診断レポートを確認",
        "tip": "リリース前に自動点検された品質・Web診断結果を項目ごとに確認できます。"
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "統合ダッシュボード",
        "title": "業務状況および承認待ちダッシュボード",
        "route": "/dashboard/overview",
        "demoUrl": "https://verse-admin.empasy.io/dashboard/overview",
        "summary": "連携モジュールの稼働状態、直近の作業履歴、承認待ち件数をひと目で確認できます。",
        "rawUrl": "/images/screenshots/sync-verse/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-verse/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "品質検証一覧",
        "title": "テストおよび品質点検の進行状況",
        "route": "/projects/task-list",
        "demoUrl": "https://verse-admin.empasy.io/projects/task-list",
        "summary": "要件ごとのテスト項目と検証合格状況をタスク一覧とあわせて追跡します。",
        "rawUrl": "/images/screenshots/sync-verse/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-verse/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "サイト・品質診断",
        "title": "品質・Web最適化の統合診断レポート",
        "route": "/projects/site-audit",
        "demoUrl": "https://verse-admin.empasy.io/projects/site-audit",
        "summary": "リリース前の事前品質点検とWebアクセシビリティ・検索最適化診断を一つのレポートで確認します。",
        "rawUrl": "/images/screenshots/sync-verse/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-verse/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "段階別承認センター",
        "title": "担当者による段階別承認とバージョン復元",
        "route": "/governance/hitl-approval",
        "demoUrl": "https://verse-admin.empasy.io/governance/hitl-approval",
        "summary": "役割別の承認ルートに沿って変更前後の差分を確認し、承認または以前の状態へ復元できます。",
        "rawUrl": "/images/screenshots/sync-verse/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-verse/screen_04.png"
      }
    ]
  },
  "sync-boot": {
    "productId": "sync-boot",
    "roleEasyLabel": "企業業務システム基盤",
    "standaloneHomepagePath": "https://empasy.io/ja/solutions/sync-boot.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "サンプル > 経営実績レポート",
        "title": "標準レポート画面の構成を確認",
        "tip": "企業管理システムですぐ活用できるKPIカード、グラフ、テーブル構成をご確認ください。"
      },
      {
        "step": 2,
        "menuPath": "システム管理 > ユーザー・権限",
        "title": "役割別のメニュー権限制御",
        "tip": "役割に応じてメニューやボタンの表示がどう切り替わるか設定してみてください。"
      },
      {
        "step": 3,
        "menuPath": "サンプル > 電子決裁",
        "title": "起案および承認フローを体験",
        "tip": "承認ルートを指定し、承認・差し戻し履歴が記録される流れをお試しください。"
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "運用サマリーレポート",
        "title": "部署別予算・業務実績レポート画面",
        "route": "/showcase/analytics-report",
        "demoUrl": "https://boot-admin.empasy.io/showcase/analytics-report",
        "summary": "主要KPIカード、期間別推移グラフ、部署別詳細テーブルを組み合わせた標準レポート画面です。",
        "rawUrl": "/images/screenshots/sync-boot/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-boot/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "組織・権限管理",
        "title": "ユーザー・部署・役割別アクセス制御",
        "route": "/system/user",
        "demoUrl": "https://boot-admin.empasy.io/system/user",
        "summary": "組織図と連動し、アカウント別の役割やアクセス可能なメニュー・ボタン権限を一画面で管理します。",
        "rawUrl": "/images/screenshots/sync-boot/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-boot/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "電子決裁",
        "title": "多段階電子決裁の起案および承認ルート管理",
        "route": "/showcase/approval-wizard",
        "demoUrl": "https://boot-admin.empasy.io/showcase/approval-wizard",
        "summary": "稟議・起案フォームの作成から多段階承認ルートの設定、リアルタイム進捗確認まで支援します。",
        "rawUrl": "/images/screenshots/sync-boot/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-boot/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "操作履歴照会",
        "title": "管理者操作およびセキュリティ監査履歴",
        "route": "/monitor/log",
        "demoUrl": "https://boot-admin.empasy.io/monitor/log",
        "summary": "ログイン、メニューアクセス、重要データ変更の履歴を時系列で検索・点検します。",
        "rawUrl": "/images/screenshots/sync-boot/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-boot/screen_04.png"
      }
    ]
  },
  "sync-cms": {
    "productId": "sync-cms",
    "roleEasyLabel": "Webサイト・多言語管理",
    "standaloneHomepagePath": "https://empasy.io/ja/solutions/sync-cms.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "コンテンツ管理",
        "title": "原稿作成と承認フローを確認",
        "tip": "作成済み記事の検収ステータスと公開承認ステップを直接確認してみてください。"
      },
      {
        "step": 2,
        "menuPath": "品質点検",
        "title": "公開前のSEO・アクセシビリティ確認",
        "tip": "検索表示に必要な基本項目と不足要素を診断結果画面で確認してみてください。"
      },
      {
        "step": 3,
        "menuPath": "多言語管理",
        "title": "用語集ベースの翻訳管理",
        "tip": "原文記事が各言語ページへどのように連携・管理されるかご確認ください。"
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "統合ダッシュボード",
        "title": "マルチサイト コンテンツ・公開状況",
        "route": "/dashboard/analysis",
        "demoUrl": "https://cms-admin.empasy.io/dashboard/analysis",
        "summary": "運用中の各サイトの公開件数、検収待ち原稿、アクセス推移をひと目で確認できます。",
        "rawUrl": "/images/screenshots/sync-cms/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-cms/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "コンテンツエディタ",
        "title": "原稿作成・承認およびバージョン管理",
        "route": "/cms/content",
        "demoUrl": "https://cms-admin.empasy.io/cms/content",
        "summary": "記事作成、検収依頼、バージョン差分比較、予約公開まで順番に管理できます。",
        "rawUrl": "/images/screenshots/sync-cms/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-cms/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "SEO・アクセシビリティ",
        "title": "公開前の検索最適化およびアクセシビリティ点検",
        "route": "/cms/ai/audit",
        "demoUrl": "https://cms-admin.empasy.io/cms/ai/audit",
        "summary": "タイトル・要約文、画像代替テキストなど見落としやすいWeb品質項目を公開前にチェックします。",
        "rawUrl": "/images/screenshots/sync-cms/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-cms/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "多言語管理",
        "title": "ブランド用語集に基づく多言語ローカライズ",
        "route": "/cms/ai/localization",
        "demoUrl": "https://cms-admin.empasy.io/cms/ai/localization",
        "summary": "固有の製品名や専門表現の一貫性を保ちながら、多言語ページの翻訳版を管理できます。",
        "rawUrl": "/images/screenshots/sync-cms/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-cms/screen_04.png"
      }
    ]
  },
  "sync-shop": {
    "productId": "sync-shop",
    "roleEasyLabel": "EC運営・価格管理",
    "standaloneHomepagePath": "https://empasy.io/ja/solutions/sync-shop.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "ダッシュボード",
        "title": "売上と注文状況を確認",
        "tip": "日次・週次の売上推移と出荷待ち・返品待ち件数を確認してみてください。"
      },
      {
        "step": 2,
        "menuPath": "商品 > 商品一覧",
        "title": "商品情報と販売価格を管理",
        "tip": "登録商品の販売価格、在庫、販売ステータス変更画面をご確認ください。"
      },
      {
        "step": 3,
        "menuPath": "プロモーション > タイムセール・クーポン",
        "title": "割引施策の運用画面を確認",
        "tip": "時間帯別セールやクーポンキャンペーンの設定画面をご覧ください。"
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "売上・注文状況",
        "title": "EC売上・注文統合ダッシュボード",
        "route": "/dashboard/analysis",
        "demoUrl": "https://shop-admin.empasy.io/dashboard/analysis",
        "summary": "日次・週次・月次の注文件数や売上推移、出荷待ち・返品対応件数を一画面で確認できます。",
        "rawUrl": "/images/screenshots/sync-shop/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-shop/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "商品・価格管理",
        "title": "商品カタログおよび販売価格・在庫管理",
        "route": "/pms/product",
        "demoUrl": "https://shop-admin.empasy.io/pms/product",
        "summary": "商品一覧、販売価格、在庫数、販売ステータスを確認し安全に価格変更を管理します。",
        "rawUrl": "/images/screenshots/sync-shop/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-shop/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "注文・配送・返品",
        "title": "注文処理および返品・交換管理",
        "route": "/oms/order",
        "demoUrl": "https://shop-admin.empasy.io/oms/order",
        "summary": "決済完了案件の出荷指示、配送状況、キャンセル・返品申請を一画面で処理します。",
        "rawUrl": "/images/screenshots/sync-shop/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-shop/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "タイムセール・クーポン",
        "title": "タイムセールおよびクーポン施策管理",
        "route": "/sms/flash",
        "demoUrl": "https://shop-admin.empasy.io/sms/flash",
        "summary": "期間限定セールと割引クーポンのスケジュール登録・稼働管理を行います。",
        "rawUrl": "/images/screenshots/sync-shop/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-shop/screen_04.png"
      }
    ]
  },
  "sync-ops": {
    "productId": "sync-ops",
    "roleEasyLabel": "SIプロジェクト・損益管理",
    "standaloneHomepagePath": "https://empasy.io/ja/solutions/sync-ops.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "経営ダッシュボード",
        "title": "全社受注・損益サマリーを確認",
        "tip": "進行中プロジェクト全体の売上と利益推移をひと目で確認してみてください。"
      },
      {
        "step": 2,
        "menuPath": "プロジェクト損益マトリクス",
        "title": "工数超過リスク案件を確認",
        "tip": "契約単価と実投入人件費の乖離がシグナル表示される一覧をご確認ください。"
      },
      {
        "step": 3,
        "menuPath": "要員アサインガント",
        "title": "要員稼働スケジュールを俯瞰",
        "tip": "月次アサイン状況と終了予定日をガント画面で確認してみてください。"
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "経営ダッシュボード",
        "title": "受注・売上・プロジェクト損益ダッシュボード",
        "route": "/executive/dashboard",
        "demoUrl": "https://ops-admin.empasy.io/executive/dashboard",
        "summary": "進行中プロジェクト全体の受注規模、売上状況、貢献利益推移をひと目で確認できます。",
        "rawUrl": "/images/screenshots/sync-ops/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-ops/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "プロジェクト損益表",
        "title": "契約金額対比 実投入原価の損益マトリクス",
        "route": "/executive/profit-matrix",
        "demoUrl": "https://ops-admin.empasy.io/executive/profit-matrix",
        "summary": "計画工数と実投入原価を案件別に比較し、採算低下リスクのある案件を素早く把握します。",
        "rawUrl": "/images/screenshots/sync-ops/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-ops/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "保証・外注期限",
        "title": "4大保証保険および外注支払期限管理",
        "route": "/contract/compliance-alerts",
        "demoUrl": "https://ops-admin.empasy.io/contract/compliance-alerts",
        "summary": "保証証券の満期日や外注支払期日など必須の法定期限を事前アラート付きで管理します。",
        "rawUrl": "/images/screenshots/sync-ops/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-ops/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "要員アサイン日程",
        "title": "技術等級ベースの要員配置・稼働率管理",
        "route": "/talent/assignment-gantt",
        "demoUrl": "https://ops-admin.empasy.io/talent/assignment-gantt",
        "summary": "要員ごとの参画期間、終了予定日、重複アサイン有無をタイムライン形式で俯瞰できます。",
        "rawUrl": "/images/screenshots/sync-ops/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-ops/screen_04.png"
      }
    ]
  },
  "sync-llm": {
    "productId": "sync-llm",
    "roleEasyLabel": "社内AIコスト・セキュリティ管理",
    "standaloneHomepagePath": "https://empasy.io/ja/solutions/sync-llm.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "ダッシュボード",
        "title": "モデル別利用量と削減指標を確認",
        "tip": "類似質問の再利用実績と部門別AI利用推移をご確認ください。"
      },
      {
        "step": 2,
        "menuPath": "AI管理 > サービス接続",
        "title": "予備モデルの切り替え順序を確認",
        "tip": "特定のAIサービスでエラーが出た際にどの予備モデルへ引き継がれるか設定をご覧ください。"
      },
      {
        "step": 3,
        "menuPath": "利用履歴 > 個人情報保護",
        "title": "個人情報マスキング処理履歴を確認",
        "tip": "連絡先や機密情報が送信前に自動非識別化された実際の記録をご確認ください。"
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "コスト・利用量",
        "title": "AI利用量および類似質問再利用ダッシュボード",
        "route": "/dashboard/analysis",
        "demoUrl": "https://llm-admin.empasy.io/dashboard/analysis",
        "summary": "モデル別の呼び出し数、利用推移、類似質問の再利用によるコスト削減実績をひと目で確認できます。",
        "rawUrl": "/images/screenshots/sync-llm/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-llm/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "マルチモデル・冗長化",
        "title": "AIサービス接続および障害迂回設定",
        "route": "/llm/providers",
        "demoUrl": "https://llm-admin.empasy.io/llm/providers",
        "summary": "複数の商用AIと社内専用AIの稼働状態を確認し、障害時に切り替える予備優先順位を設定します。",
        "rawUrl": "/images/screenshots/sync-llm/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-llm/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "モデル配分・予算",
        "title": "モデル単価および振り分けルール管理",
        "route": "/llm/models",
        "demoUrl": "https://llm-admin.empasy.io/llm/models",
        "summary": "業務特性に応じて最適なモデルが選ばれるよう配分基準と部門別の利用上限を設定します。",
        "rawUrl": "/images/screenshots/sync-llm/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-llm/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "利用履歴・保護記録",
        "title": "利用履歴および個人情報マスキング記録",
        "route": "/llm/request-logs",
        "demoUrl": "https://llm-admin.empasy.io/llm/request-logs",
        "summary": "どのリクエストで個人情報が自動マスキングされたかを履歴画面で透明に確認できます。",
        "rawUrl": "/images/screenshots/sync-llm/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-llm/screen_04.png"
      }
    ]
  },
  "sync-insight": {
    "productId": "sync-insight",
    "roleEasyLabel": "対話型データ照会",
    "standaloneHomepagePath": "https://empasy.io/ja/solutions/sync-insight.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "データ分析 > 対話型照会",
        "title": "サンプル質問で表とグラフを作成",
        "tip": "用意された質問例をクリックするか自由に入力し、表とグラフが生成される流れをご確認ください。"
      },
      {
        "step": 2,
        "menuPath": "データ分析 > 分析レポート",
        "title": "要約分析レポートを確認",
        "tip": "数値だけでなく変動要因を整理して提示するレポート画面をご覧ください。"
      },
      {
        "step": 3,
        "menuPath": "データ分析 > 出典フロー",
        "title": "データ出典マップを探索",
        "tip": "指標がどの業務データからつながって算出されているか関係図をクリックして確認してみてください。"
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "サマリーレポート分析",
        "title": "指標変動要因の整理および要約レポート",
        "route": "/analytics/research",
        "demoUrl": "https://verse-admin.empasy.io/analytics/research",
        "summary": "社内の運用数値と参考情報をあわせて整理し、報告用の要約ドキュメントを作成します。",
        "rawUrl": "/images/screenshots/sync-insight/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-insight/screen_02.png"
      },
      {
        "idx": 2,
        "tabLabel": "対話型データ照会",
        "title": "自然言語質問ベースの照会とグラフ可視化",
        "route": "/analytics/nl2sql",
        "demoUrl": "https://verse-admin.empasy.io/analytics/nl2sql",
        "summary": "検索式なしで日常の言葉で質問すると表とグラフを表示し、実際の照会条件も併せて確認できます。",
        "rawUrl": "/images/screenshots/sync-insight/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-insight/screen_01.png"
      },
      {
        "idx": 3,
        "tabLabel": "連携データ管理",
        "title": "複数業務データの接続および稼働確認",
        "route": "/analytics/datasources",
        "demoUrl": "https://verse-admin.empasy.io/analytics/datasources",
        "summary": "接続された複数の社内業務データの稼働状態と照会許可範囲を一画面で管理します。",
        "rawUrl": "/images/screenshots/sync-insight/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-insight/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "データ出典フロー",
        "title": "指標ごとの原本データ出典マップ",
        "route": "/search/lineage",
        "demoUrl": "https://verse-admin.empasy.io/search/lineage",
        "summary": "特定の指標がどの元データ・項目を経由して算出されたかを視覚的に確認できます。",
        "rawUrl": "/images/screenshots/sync-insight/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-insight/screen_04.png"
      }
    ]
  },
  "sync-crawl": {
    "productId": "sync-crawl",
    "roleEasyLabel": "Webデータ自動収集",
    "standaloneHomepagePath": "https://empasy.io/ja/solutions/sync-crawl.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "ダッシュボード",
        "title": "収集成功率と処理件数を確認",
        "tip": "サイト別の収集状態と直近の蓄積データ推移を確認してみてください。"
      },
      {
        "step": 2,
        "menuPath": "収集設計 > 収集サイト",
        "title": "対象サイトと周期設定を確認",
        "tip": "コーディングなしで収集URLと抽出項目がどのように登録されるかご覧ください。"
      },
      {
        "step": 3,
        "menuPath": "収集結果 > 収集ドキュメント",
        "title": "整理済み結果データを確認",
        "tip": "原文から広告が除かれ構造化項目へ整えられた結果データを確認してみてください。"
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "収集サイト設定",
        "title": "収集対象URLおよびスケジュール管理",
        "route": "/crawl/source",
        "demoUrl": "https://crawl-admin.empasy.io/crawl/source",
        "summary": "対象WebサイトのURL、収集周期、抽出項目、構造変更への対応設定を管理画面から行います。",
        "rawUrl": "/images/screenshots/sync-crawl/screen_02.png?v=20261120",
        "annotatedUrl": "/images/screenshots/sync-crawl/screen_02.png?v=20261120"
      },
      {
        "idx": 2,
        "tabLabel": "整理済みデータ照会",
        "title": "正規化・非識別化済みドキュメント照会",
        "route": "/crawl/document",
        "demoUrl": "https://crawl-admin.empasy.io/crawl/document",
        "summary": "不要要素が除去され構造化項目へ整理された収集結果を検索・確認できます。",
        "rawUrl": "/images/screenshots/sync-crawl/screen_03.png?v=20261120",
        "annotatedUrl": "/images/screenshots/sync-crawl/screen_03.png?v=20261120"
      },
      {
        "idx": 3,
        "tabLabel": "安全収集ポリシー",
        "title": "速度制限および安全収集ルール管理",
        "route": "/crawl/compliance",
        "demoUrl": "https://crawl-admin.empasy.io/crawl/compliance",
        "summary": "リクエスト間隔制限とWebサイトの収集許可基準の遵守状況を管理し安定稼働を維持します。",
        "rawUrl": "/images/screenshots/sync-crawl/screen_04.png?v=20261120",
        "annotatedUrl": "/images/screenshots/sync-crawl/screen_04.png?v=20261120"
      }
    ]
  },
  "sync-eta": {
    "productId": "sync-eta",
    "roleEasyLabel": "Web画面テスト自動化・サイト欠陥管理",
    "standaloneHomepagePath": "https://empasy.io/ja/solutions/sync-eta.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "レコーダー · Excel変換",
        "title": "クリック録画やExcelアップロードで素早く構成",
        "tip": "対象URLを入力して操作を録画するか、既存のExcel試験表と標本URLを登録して自動点検を実行してみてください。"
      },
      {
        "step": 2,
        "menuPath": "スタジオ · 全数検査",
        "title": "一行指示で下位リンクと文字重なりを自動診断",
        "tip": "シナリオなしでもリンク全数検査とデザイン欠陥診断を実行し、404や文字重なり、[確認必要]の分類結果を確認してみてください。"
      },
      {
        "step": 3,
        "menuPath": "バグカンバンボード",
        "title": "写真付きチケット確認と[今すぐ確認]再検証",
        "tip": "検出された不具合カードから[今すぐ確認]ボタン一つで該当項目のみを即時再検証する流れを体験してみてください。"
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "ダッシュボード",
        "title": "プロジェクトダッシュボード · 成功率推移・SSL証明書監視",
        "route": "/eta/screen-01",
        "demoUrl": "https://empasy.io/ja/download_eta.html",
        "summary": "テスト回数・成功率推移・失敗原因比率・有効スケジュールおよびSSL証明書の有効期限を一画面で把握し、ワンクリックでレポートを生成します。",
        "rawUrl": "/images/screenshots/sync-eta/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "操作レコーダー",
        "title": "画面1 · ブラウザ操作レコーダー・リアルタイムDOM検証",
        "route": "/eta/screen-02",
        "demoUrl": "https://empasy.io/ja/download_eta.html",
        "summary": "クリック・入力・スクロールをリアルタイム記録してブロック再利用でき、仮想セキュリティキーパッド・Cookie同意バナー・個人情報マスキングを自動処理します。",
        "rawUrl": "/images/screenshots/sync-eta/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "Excel・文変換",
        "title": "画面2 · Excel試験表・一行文テスト変換",
        "route": "/eta/screen-03",
        "demoUrl": "https://empasy.io/ja/download_eta.html",
        "summary": "既存のExcel・CSVテスト仕様書をアップロードして対象行を選択変換し、代表・標本URLの共通適用と事前実行で複数ページをまとめて検証します。",
        "rawUrl": "/images/screenshots/sync-eta/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "マルチアカウント",
        "title": "画面3 · マルチアカウント同時テスト・録画動画比較",
        "route": "/eta/screen-04",
        "demoUrl": "https://empasy.io/ja/download_eta.html",
        "summary": "問い合わせ側(タブ0)と管理者側(タブ1)を独立ログイン状態で同時実行し、役割間のリアルタイム連携と録画動画・ログをまとめて検証します。",
        "rawUrl": "/images/screenshots/sync-eta/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_04.png"
      },
      {
        "idx": 5,
        "tabLabel": "リンク・画面診断",
        "title": "画面4 · サイト知識グラフによるリンク全数検査・デザイン欠陥検出",
        "route": "/eta/screen-05",
        "demoUrl": "https://empasy.io/ja/download_eta.html",
        "summary": "シナリオ未作成でも下位リンクの404・遷移不一致や文字重なり・空白領域を自動検出し、曖昧な項目は写真付きで[確認必要]に分離します。",
        "rawUrl": "/images/screenshots/sync-eta/screen_05.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_05.png"
      },
      {
        "idx": 6,
        "tabLabel": "バグカンバン",
        "title": "画面5 · バグカンバンボード・[今すぐ確認]ワンクリック再検証",
        "route": "/eta/screen-06",
        "demoUrl": "https://empasy.io/ja/download_eta.html",
        "summary": "写真付きチケットをバックログ→未解決→解決済み→終了で管理し、重複起票防止・[バグではありません]記憶・ボタン一つの即時再検証を実現します。",
        "rawUrl": "/images/screenshots/sync-eta/screen_06.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_06.png"
      }
    ]
  },
  "sync-apim": {
    "productId": "sync-apim",
    "roleEasyLabel": "外部連携把握・セキュリティ管理",
    "standaloneHomepagePath": "https://empasy.io/ja/solutions/sync-apim.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "ダッシュボード",
        "title": "外部連携トラフィックと検知推移を確認",
        "tip": "管理対象連携の状態と直近検知された異常アクセスの種別を確認してみてください。"
      },
      {
        "step": 2,
        "menuPath": "連携一覧",
        "title": "管理漏れ連携経路の検出結果を確認",
        "tip": "仕様書から漏れていたシャドー連携がどのように分類表示されるかご覧ください。"
      },
      {
        "step": 3,
        "menuPath": "脅威検知履歴",
        "title": "異常攻撃試行の詳細とポリシーを確認",
        "tip": "不審リクエストの詳細情報と遮断・マスキング設定画面を確認してみてください。"
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "連携セキュリティ状況",
        "title": "保護対象サーバーおよび脅威検知ダッシュボード",
        "route": "/dashboard/analysis",
        "demoUrl": "https://apim-admin.empasy.io/dashboard/analysis",
        "summary": "保護対象サーバー、稼働中の連携経路数、直近の検知・遮断推移をひと目で確認できます。",
        "rawUrl": "/images/screenshots/sync-apim/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-apim/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "未管理連携の検出",
        "title": "全連携一覧の自動収集とシャドー連携確認",
        "route": "/apim/endpoints",
        "demoUrl": "https://apim-admin.empasy.io/apim/endpoints",
        "summary": "実通信記録から検出された全連携一覧と管理漏れ連携経路を一画面で点検できます。",
        "rawUrl": "/images/screenshots/sync-apim/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-apim/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "仕様乖離点検",
        "title": "標準仕様書に対するレスポンス不一致点検",
        "route": "/apim/openapi-specs",
        "demoUrl": "https://apim-admin.empasy.io/apim/openapi-specs",
        "summary": "文書定義と本番レスポンスの差分を比較し、欠落または過剰露出している項目を確認します。",
        "rawUrl": "/images/screenshots/sync-apim/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-apim/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "検知イベント詳細",
        "title": "異常攻撃試行の詳細確認とポリシー適用",
        "route": "/apim/detect-events",
        "demoUrl": "https://apim-admin.empasy.io/apim/detect-events",
        "summary": "検知された攻撃試行の詳細内容を確認し、機密情報マスキングや遮断ポリシーを管理します。",
        "rawUrl": "/images/screenshots/sync-apim/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-apim/screen_04.png"
      }
    ]
  },
  "sync-watch": {
    "productId": "sync-watch",
    "roleEasyLabel": "脆弱性収集・点検ルール管理",
    "standaloneHomepagePath": "https://empasy.io/ja/solutions/sync-watch.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "ダッシュボード",
        "title": "最新の脆弱性対応状況を確認",
        "tip": "危険度別の脆弱性件数とルール反映ステータスをひと目で確認してみてください。"
      },
      {
        "step": 2,
        "menuPath": "脆弱性台帳",
        "title": "整理された脆弱性詳細を確認",
        "tip": "収集されたセキュリティ警報が要約と影響範囲ごとにどう整理されるかご覧ください。"
      },
      {
        "step": 3,
        "menuPath": "適用・措置履歴",
        "title": "検証済みルールの反映記録を確認",
        "tip": "各セキュリティルールが検証を経て反映された全履歴をご確認ください。"
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "セキュリティ観測ボード",
        "title": "新規脆弱性収集・対応状況ボード",
        "route": "/dashboard/analysis",
        "demoUrl": "https://watch-admin.empasy.io/dashboard/analysis",
        "summary": "直近収集されたセキュリティ課題数、危険度分布、ルール反映状況をひと目で確認できます。",
        "rawUrl": "/images/screenshots/sync-watch/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-watch/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "脆弱性台帳一覧",
        "title": "収集済み脆弱性台帳および詳細確認",
        "route": "/watch/advisories",
        "demoUrl": "https://watch-admin.empasy.io/watch/advisories",
        "summary": "公式チャネルから収集・整理された脆弱性一覧、影響対象、推奨措置を詳細確認できます。",
        "rawUrl": "/images/screenshots/sync-watch/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-watch/screen_03.png"
      },
      {
        "idx": 3,
        "tabLabel": "点検ルール管理",
        "title": "事前点検および外部連携防御ルール管理",
        "route": "/watch/verse-rules",
        "demoUrl": "https://watch-admin.empasy.io/watch/verse-rules",
        "summary": "脆弱性ごとに作成された点検ルールの事前検証結果と有効化状態を管理します。",
        "rawUrl": "/images/screenshots/sync-watch/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-watch/screen_04.png"
      },
      {
        "idx": 4,
        "tabLabel": "適用・対応履歴",
        "title": "ルール適用およびセキュリティ措置履歴",
        "route": "/watch/dispatches",
        "demoUrl": "https://watch-admin.empasy.io/watch/dispatches",
        "summary": "どの脆弱性ルールがいつどのシステムへ反映されたか、全体の対応履歴を追跡できます。",
        "rawUrl": "/images/screenshots/sync-watch/screen_06.png",
        "annotatedUrl": "/images/screenshots/sync-watch/screen_06.png"
      }
    ]
  }
};
