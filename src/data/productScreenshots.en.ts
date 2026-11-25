import type { ProductVisualGuide } from './productScreenshots.types';

export const PRODUCT_VISUAL_GUIDES_EN: Record<string, ProductVisualGuide> = {
  "sync-verse": {
    "productId": "sync-verse",
    "roleEasyLabel": "Unified Collaboration & Approval",
    "standaloneHomepagePath": "https://empasy.io/en/solutions/sync-verse.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "Dashboard",
        "title": "Inspect End-to-End Task Flow",
        "tip": "Check connected module status and recently completed activities at a glance."
      },
      {
        "step": 2,
        "menuPath": "Approval Center",
        "title": "Compare Diffs & Approve",
        "tip": "Open a pending request to compare before/after changes and test approving or rejecting."
      },
      {
        "step": 3,
        "menuPath": "Site & Quality Audit",
        "title": "Review Consolidated Diagnostic Reports",
        "tip": "Inspect automated pre-release quality and web readiness audit items in detail."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "Unified Dashboard",
        "title": "Work Status & Pending Approvals Dashboard",
        "route": "/dashboard/overview",
        "demoUrl": "https://verse-admin.empasy.io/dashboard/overview",
        "summary": "Check connected module health, recent task logs, and pending approval counts at a glance.",
        "rawUrl": "/images/screenshots/sync-verse/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-verse/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "Quality Checklist",
        "title": "Testing & Quality Verification Progress",
        "route": "/projects/task-list",
        "demoUrl": "https://verse-admin.empasy.io/projects/task-list",
        "summary": "Track per-requirement test items and verification pass status alongside the active task list.",
        "rawUrl": "/images/screenshots/sync-verse/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-verse/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "Site & Quality Audit",
        "title": "Unified Quality & Web Readiness Report",
        "route": "/projects/site-audit",
        "demoUrl": "https://verse-admin.empasy.io/projects/site-audit",
        "summary": "Review pre-release quality checks, web accessibility, and search visibility diagnostics in one consolidated report.",
        "rawUrl": "/images/screenshots/sync-verse/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-verse/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "Approval Center",
        "title": "Staged Human Approval & Version Rollback",
        "route": "/governance/hitl-approval",
        "demoUrl": "https://verse-admin.empasy.io/governance/hitl-approval",
        "summary": "Review before/after differences by approval stage to sign off or revert to a previous state safely.",
        "rawUrl": "/images/screenshots/sync-verse/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-verse/screen_04.png"
      }
    ]
  },
  "sync-boot": {
    "productId": "sync-boot",
    "roleEasyLabel": "Enterprise Business System Core",
    "standaloneHomepagePath": "https://empasy.io/en/solutions/sync-boot.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "Samples > Performance Report",
        "title": "Inspect Standard Report Layouts",
        "tip": "Explore ready-to-use KPI cards, charts, and table layouts built for enterprise admin consoles."
      },
      {
        "step": 2,
        "menuPath": "System > Users & Roles",
        "title": "Configure Role-Based Menu Access",
        "tip": "Test how menus and action buttons change dynamically based on assigned roles."
      },
      {
        "step": 3,
        "menuPath": "Samples > E-Approval",
        "title": "Test Drafting & Approval Routing",
        "tip": "Assign multi-step approvers and observe approval and rejection histories in action."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "Executive Report",
        "title": "Departmental Budget & Performance Report",
        "route": "/showcase/analytics-report",
        "demoUrl": "https://boot-admin.empasy.io/showcase/analytics-report",
        "summary": "Standardized admin report combining KPI cards, period trend charts, and departmental tables.",
        "rawUrl": "/images/screenshots/sync-boot/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-boot/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "Org & Permissions",
        "title": "User, Department & Role Access Control",
        "route": "/system/user",
        "demoUrl": "https://boot-admin.empasy.io/system/user",
        "summary": "Manage role assignments and accessible menu and button permissions synced with your organization tree.",
        "rawUrl": "/images/screenshots/sync-boot/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-boot/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "E-Approval",
        "title": "Multi-Step Electronic Approval & Routing",
        "route": "/showcase/approval-wizard",
        "demoUrl": "https://boot-admin.empasy.io/showcase/approval-wizard",
        "summary": "Support proposal drafting, multi-level approval routing, and live status tracking in one interface.",
        "rawUrl": "/images/screenshots/sync-boot/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-boot/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "Audit Logs",
        "title": "Admin Activity & Security Audit History",
        "route": "/monitor/log",
        "demoUrl": "https://boot-admin.empasy.io/monitor/log",
        "summary": "Search and review logins, menu access, and critical data mutations in chronological order.",
        "rawUrl": "/images/screenshots/sync-boot/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-boot/screen_04.png"
      }
    ]
  },
  "sync-cms": {
    "productId": "sync-cms",
    "roleEasyLabel": "Website & Multilingual CMS",
    "standaloneHomepagePath": "https://empasy.io/en/solutions/sync-cms.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "Content Management",
        "title": "Explore Drafting & Approval Workflow",
        "tip": "Inspect review states and publishing approval steps across sample articles."
      },
      {
        "step": 2,
        "menuPath": "Quality Audit",
        "title": "Verify Pre-Publish SEO & Accessibility",
        "tip": "Check automated diagnostics highlighting missing search and accessibility essentials."
      },
      {
        "step": 3,
        "menuPath": "Multilingual Management",
        "title": "Glossary-Based Translation Control",
        "tip": "See how source articles connect to and stay synced with localized pages."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "Overview Dashboard",
        "title": "Multi-Site Content & Publishing Overview",
        "route": "/dashboard/analysis",
        "demoUrl": "https://cms-admin.empasy.io/dashboard/analysis",
        "summary": "Monitor published volume, drafts awaiting review, and traffic trends across all managed sites at a glance.",
        "rawUrl": "/images/screenshots/sync-cms/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-cms/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "Content Editor",
        "title": "Drafting, Approval & Version Control",
        "route": "/cms/content",
        "demoUrl": "https://cms-admin.empasy.io/cms/content",
        "summary": "Author articles, submit for review, compare revisions, and schedule publishing step by step.",
        "rawUrl": "/images/screenshots/sync-cms/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-cms/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "SEO & A11y Audit",
        "title": "Pre-Publish SEO & Accessibility Check",
        "route": "/cms/ai/audit",
        "demoUrl": "https://cms-admin.empasy.io/cms/ai/audit",
        "summary": "Verify easily missed web quality items such as meta summaries and image alternative text before publishing.",
        "rawUrl": "/images/screenshots/sync-cms/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-cms/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "Multilingual Hub",
        "title": "Glossary-Guided Multilingual Localization",
        "route": "/cms/ai/localization",
        "demoUrl": "https://cms-admin.empasy.io/cms/ai/localization",
        "summary": "Manage localized pages while preserving consistent product names and brand terminology across languages.",
        "rawUrl": "/images/screenshots/sync-cms/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-cms/screen_04.png"
      }
    ]
  },
  "sync-shop": {
    "productId": "sync-shop",
    "roleEasyLabel": "E-Commerce & Pricing Control",
    "standaloneHomepagePath": "https://empasy.io/en/solutions/sync-shop.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "Dashboard",
        "title": "Check Sales & Order Summary",
        "tip": "Review daily and weekly sales trends alongside pending shipments and return counts."
      },
      {
        "step": 2,
        "menuPath": "Products > Product List",
        "title": "Manage Products & Selling Prices",
        "tip": "Inspect price, stock quantity, and sale status controls for registered products."
      },
      {
        "step": 3,
        "menuPath": "Promotions > Flash Deals & Coupons",
        "title": "Explore Promotional Campaigns",
        "tip": "Check time-boxed flash sale schedules and coupon campaign settings."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "Sales & Orders",
        "title": "Store Sales & Order Operations Dashboard",
        "route": "/dashboard/analysis",
        "demoUrl": "https://shop-admin.empasy.io/dashboard/analysis",
        "summary": "Track daily, weekly, and monthly revenue, pending shipments, returns, and customer inquiries in one view.",
        "rawUrl": "/images/screenshots/sync-shop/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-shop/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "Products & Pricing",
        "title": "Product Catalog, Pricing & Stock Control",
        "route": "/pms/product",
        "demoUrl": "https://shop-admin.empasy.io/pms/product",
        "summary": "Inspect product listings, selling prices, inventory counts, and safe margin-checked price updates.",
        "rawUrl": "/images/screenshots/sync-shop/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-shop/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "Orders & Claims",
        "title": "Order Fulfillment, Returns & Exchanges",
        "route": "/oms/order",
        "demoUrl": "https://shop-admin.empasy.io/oms/order",
        "summary": "Process shipment dispatches, delivery tracking, cancellations, and return approvals on one screen.",
        "rawUrl": "/images/screenshots/sync-shop/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-shop/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "Flash Deals & Coupons",
        "title": "Time-Limited Deals & Coupon Campaigns",
        "route": "/sms/flash",
        "demoUrl": "https://shop-admin.empasy.io/sms/flash",
        "summary": "Schedule flash sales and discount coupon campaigns while monitoring active campaign status.",
        "rawUrl": "/images/screenshots/sync-shop/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-shop/screen_04.png"
      }
    ]
  },
  "sync-ops": {
    "productId": "sync-ops",
    "roleEasyLabel": "SI Project & P&L Operations",
    "standaloneHomepagePath": "https://empasy.io/en/solutions/sync-ops.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "Executive Dashboard",
        "title": "Check Enterprise Orders & P&L Summary",
        "tip": "Review combined revenue and profit performance across all active projects."
      },
      {
        "step": 2,
        "menuPath": "Project Profit Matrix",
        "title": "Identify Effort-Overrun Risks",
        "tip": "Inspect the status matrix highlighting gaps between contracted rates and actual labor costs."
      },
      {
        "step": 3,
        "menuPath": "Staffing Gantt",
        "title": "Inspect Engineer Assignment Timelines",
        "tip": "Check monthly staffing allocations and upcoming roll-off dates on the Gantt view."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "Executive Board",
        "title": "Orders, Revenue & Project P&L Dashboard",
        "route": "/executive/dashboard",
        "demoUrl": "https://ops-admin.empasy.io/executive/dashboard",
        "summary": "Monitor total backlog, active revenue, and contribution margin trends across all ongoing projects.",
        "rawUrl": "/images/screenshots/sync-ops/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-ops/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "Profit Matrix",
        "title": "Contract Value vs. Actual Cost P&L Matrix",
        "route": "/executive/profit-matrix",
        "demoUrl": "https://ops-admin.empasy.io/executive/profit-matrix",
        "summary": "Compare planned effort against actual costs per project to highlight margin-risk engagements immediately.",
        "rawUrl": "/images/screenshots/sync-ops/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-ops/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "Bonds & Deadlines",
        "title": "Surety Bond & Subcontract Compliance Alerts",
        "route": "/contract/compliance-alerts",
        "demoUrl": "https://ops-admin.empasy.io/contract/compliance-alerts",
        "summary": "Track mandatory statutory milestones including bond expirations and subcontract payment dates with alerts.",
        "rawUrl": "/images/screenshots/sync-ops/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-ops/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "Staffing Gantt",
        "title": "Skill-Grade Staffing & Utilization Timeline",
        "route": "/talent/assignment-gantt",
        "demoUrl": "https://ops-admin.empasy.io/talent/assignment-gantt",
        "summary": "Visualize assignment windows, roll-off dates, and double-booking checks across your engineering roster.",
        "rawUrl": "/images/screenshots/sync-ops/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-ops/screen_04.png"
      }
    ]
  },
  "sync-llm": {
    "productId": "sync-llm",
    "roleEasyLabel": "Enterprise AI Cost & Privacy",
    "standaloneHomepagePath": "https://empasy.io/en/solutions/sync-llm.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "Dashboard",
        "title": "Inspect Model Volume & Savings",
        "tip": "Review similar-query reuse metrics and departmental AI consumption trends."
      },
      {
        "step": 2,
        "menuPath": "AI Management > Providers",
        "title": "Check Backup Failover Chains",
        "tip": "Inspect how fallback providers take over automatically if a primary AI service fails."
      },
      {
        "step": 3,
        "menuPath": "Request Logs > Masking",
        "title": "Inspect Sensitive-Data Masking Trails",
        "tip": "Review real log records showing how phone numbers and identifiers are masked before dispatch."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "Cost & Usage",
        "title": "AI Usage & Similar-Query Savings Dashboard",
        "route": "/dashboard/analysis",
        "demoUrl": "https://llm-admin.empasy.io/dashboard/analysis",
        "summary": "View per-model call volumes, usage trends, and cost savings achieved through response reuse at a glance.",
        "rawUrl": "/images/screenshots/sync-llm/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-llm/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "Multi-Model Failover",
        "title": "AI Provider Connections & Failover Order",
        "route": "/llm/providers",
        "demoUrl": "https://llm-admin.empasy.io/llm/providers",
        "summary": "Monitor commercial and private model status and configure ordered backup routing for high availability.",
        "rawUrl": "/images/screenshots/sync-llm/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-llm/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "Routing & Budgets",
        "title": "Model Pricing & Routing Policy Management",
        "route": "/llm/models",
        "demoUrl": "https://llm-admin.empasy.io/llm/models",
        "summary": "Configure model selection criteria by workload type alongside departmental usage caps.",
        "rawUrl": "/images/screenshots/sync-llm/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-llm/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "Logs & Masking",
        "title": "Request History & Sensitive-Data Masking Logs",
        "route": "/llm/request-logs",
        "demoUrl": "https://llm-admin.empasy.io/llm/request-logs",
        "summary": "Audit exactly which requests triggered automatic personal-data masking with full transparency.",
        "rawUrl": "/images/screenshots/sync-llm/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-llm/screen_04.png"
      }
    ]
  },
  "sync-insight": {
    "productId": "sync-insight",
    "roleEasyLabel": "Conversational Data Query",
    "standaloneHomepagePath": "https://empasy.io/en/solutions/sync-insight.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "Data Analytics > Conversational Query",
        "title": "Generate Tables & Charts from Sample Questions",
        "tip": "Click a suggested question or type your own to watch tables and charts build in real time."
      },
      {
        "step": 2,
        "menuPath": "Data Analytics > Research Reports",
        "title": "Inspect Summary Analysis Reports",
        "tip": "Review structured briefing views that explain variance drivers beyond raw totals."
      },
      {
        "step": 3,
        "menuPath": "Data Analytics > Data Lineage",
        "title": "Explore Source Lineage Graphs",
        "tip": "Click through the relationship graph to trace which operational tables feed each KPI."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "Summary Reports",
        "title": "Metric Variance Analysis & Summary Reports",
        "route": "/analytics/research",
        "demoUrl": "https://verse-admin.empasy.io/analytics/research",
        "summary": "Combine internal operational figures with supporting context to prepare structured executive briefing reports.",
        "rawUrl": "/images/screenshots/sync-insight/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-insight/screen_02.png"
      },
      {
        "idx": 2,
        "tabLabel": "Conversational Query",
        "title": "Plain-Language Query & Chart Visualization",
        "route": "/analytics/nl2sql",
        "demoUrl": "https://verse-admin.empasy.io/analytics/nl2sql",
        "summary": "Ask questions without query syntax to inspect live tables, charts, and the exact query conditions used.",
        "rawUrl": "/images/screenshots/sync-insight/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-insight/screen_01.png"
      },
      {
        "idx": 3,
        "tabLabel": "Connected Data",
        "title": "Multi-Source Data Connections & Scope",
        "route": "/analytics/datasources",
        "demoUrl": "https://verse-admin.empasy.io/analytics/datasources",
        "summary": "Monitor connection health and permitted query scopes across linked business databases on one screen.",
        "rawUrl": "/images/screenshots/sync-insight/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-insight/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "Data Lineage",
        "title": "Source-to-Metric Data Lineage Map",
        "route": "/search/lineage",
        "demoUrl": "https://verse-admin.empasy.io/search/lineage",
        "summary": "Visually trace which original operational tables and fields feed into each business indicator.",
        "rawUrl": "/images/screenshots/sync-insight/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-insight/screen_04.png"
      }
    ]
  },
  "sync-crawl": {
    "productId": "sync-crawl",
    "roleEasyLabel": "Automated Web Data Collection",
    "standaloneHomepagePath": "https://empasy.io/en/solutions/sync-crawl.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "Dashboard",
        "title": "Check Collection Success & Volume",
        "tip": "Review per-site collection health and recent ingested document trends."
      },
      {
        "step": 2,
        "menuPath": "Collection Design > Sources",
        "title": "Inspect Target Sites & Schedules",
        "tip": "See how source URLs and extraction fields are configured without writing code."
      },
      {
        "step": 3,
        "menuPath": "Results > Collected Documents",
        "title": "Review Cleaned Output Data",
        "tip": "Inspect structured outputs with advertisements and boilerplate already removed."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "Source Setup",
        "title": "Target Site URLs & Schedule Management",
        "route": "/crawl/source",
        "demoUrl": "https://crawl-admin.empasy.io/crawl/source",
        "summary": "Configure target websites, intervals, extraction fields, and layout-change resilience from the admin UI.",
        "rawUrl": "/images/screenshots/sync-crawl/screen_02.png?v=20261120",
        "annotatedUrl": "/images/screenshots/sync-crawl/screen_02.png?v=20261120"
      },
      {
        "idx": 2,
        "tabLabel": "Cleaned Datasets",
        "title": "Normalized & De-Identified Collected Documents",
        "route": "/crawl/document",
        "demoUrl": "https://crawl-admin.empasy.io/crawl/document",
        "summary": "Search and review collected outputs already stripped of clutter and organized into structured fields.",
        "rawUrl": "/images/screenshots/sync-crawl/screen_03.png?v=20261120",
        "annotatedUrl": "/images/screenshots/sync-crawl/screen_03.png?v=20261120"
      },
      {
        "idx": 3,
        "tabLabel": "Compliance Policy",
        "title": "Rate Limits & Safe Collection Governance",
        "route": "/crawl/compliance",
        "demoUrl": "https://crawl-admin.empasy.io/crawl/compliance",
        "summary": "Control request pacing and website allowance compliance centrally for sustainable collection.",
        "rawUrl": "/images/screenshots/sync-crawl/screen_04.png?v=20261120",
        "annotatedUrl": "/images/screenshots/sync-crawl/screen_04.png?v=20261120"
      }
    ]
  },
  "sync-eta": {
    "productId": "sync-eta",
    "roleEasyLabel": "Web Test Automation & Site Audit",
    "standaloneHomepagePath": "https://empasy.io/en/solutions/sync-eta.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "Recorder & Excel Import",
        "title": "Record Clicks or Upload Existing Spreadsheets",
        "tip": "Enter your target URL to record actions directly, or upload an existing Excel test sheet with sample URLs to generate reusable scenarios."
      },
      {
        "step": 2,
        "menuPath": "Studio · Site Audit",
        "title": "Run Full Link & Visual Overlap Audits via One Line",
        "tip": "Run a link and design audit without pre-written scripts to see 404 detection, text-overlap highlights, and honest [Needs Review] triage."
      },
      {
        "step": 3,
        "menuPath": "Bug Kanban Board",
        "title": "Triage Photo Tickets & Re-verify with [Check Now]",
        "tip": "Inspect auto-generated defect cards with screenshots and click [Check Now] to verify that a specific bug is resolved."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "Project Dashboard",
        "title": "Project Dashboard · Pass Trends & SSL Certificate Monitor",
        "route": "/eta/screen-01",
        "demoUrl": "https://empasy.io/en/download_eta.html",
        "summary": "Monitor test counts, pass-rate trends, failure cause ratios, active schedules, and site SSL certificate expiration in one unified dashboard with one-click reporting.",
        "rawUrl": "/images/screenshots/sync-eta/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "Action Recorder",
        "title": "Screen 1 · Browser Action Recorder & Live Verification",
        "route": "/eta/screen-02",
        "demoUrl": "https://empasy.io/en/download_eta.html",
        "summary": "Record real clicks, inputs, and scrolls into reusable blocks while automatically bypassing virtual security keypads, cookie banners, and masking sensitive data.",
        "rawUrl": "/images/screenshots/sync-eta/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "Excel & Prompt Import",
        "title": "Screen 2 · Excel Test Sheet & One-Line Prompt Conversion",
        "route": "/eta/screen-03",
        "demoUrl": "https://empasy.io/en/download_eta.html",
        "summary": "Upload existing Excel/CSV test specifications, select target rows, apply representative and sample URLs, and generate reusable scenarios in batch.",
        "rawUrl": "/images/screenshots/sync-eta/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "Multi-Account Test",
        "title": "Screen 3 · Multi-Account Simultaneous Execution & Video Replay",
        "route": "/eta/screen-04",
        "demoUrl": "https://empasy.io/en/download_eta.html",
        "summary": "Run isolated customer (Tab 0) and administrator (Tab 1) sessions together to validate end-to-end interactions with synchronized video playback and per-tab logs.",
        "rawUrl": "/images/screenshots/sync-eta/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_04.png"
      },
      {
        "idx": 5,
        "tabLabel": "Link & Visual Audit",
        "title": "Screen 4 · Site Knowledge Graph Link Audit & Overlap Detection",
        "route": "/eta/screen-05",
        "demoUrl": "https://empasy.io/en/download_eta.html",
        "summary": "Automatically inspect every sub-link and detect text overlaps, empty regions, and redirect mismatches via the site knowledge graph without writing scenarios.",
        "rawUrl": "/images/screenshots/sync-eta/screen_05.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_05.png"
      },
      {
        "idx": 6,
        "tabLabel": "Bug Kanban & Recheck",
        "title": "Screen 5 · Bug Kanban Board & One-Click [Check Now]",
        "route": "/eta/screen-06",
        "demoUrl": "https://empasy.io/en/download_eta.html",
        "summary": "Manage photo-attached defect tickets across Backlog, Open, Resolved, and Closed columns with duplicate blocking, [Not a Bug] memory, and one-click re-verification.",
        "rawUrl": "/images/screenshots/sync-eta/screen_06.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_06.png"
      }
    ]
  },
  "sync-apim": {
    "productId": "sync-apim",
    "roleEasyLabel": "Integration Discovery & Security",
    "standaloneHomepagePath": "https://empasy.io/en/solutions/sync-apim.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "Dashboard",
        "title": "Review Traffic & Threat Trends",
        "tip": "Check managed integration inventory health and recent anomalous access types."
      },
      {
        "step": 2,
        "menuPath": "Endpoint Inventory",
        "title": "Inspect Discovered Shadow Endpoints",
        "tip": "See how undocumented endpoints discovered in live traffic are classified and flagged."
      },
      {
        "step": 3,
        "menuPath": "Threat Detection Logs",
        "title": "Inspect Attack Payloads & Policies",
        "tip": "Open suspicious request details and review blocking and masking policy controls."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "Security Dashboard",
        "title": "Protected Services & Threat Detection Dashboard",
        "route": "/dashboard/analysis",
        "demoUrl": "https://apim-admin.empasy.io/dashboard/analysis",
        "summary": "Review protected hosts, active endpoint counts, and recent detected or blocked anomalies at a glance.",
        "rawUrl": "/images/screenshots/sync-apim/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-apim/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "Shadow Discovery",
        "title": "Automated Endpoint Inventory & Shadow Routes",
        "route": "/apim/endpoints",
        "demoUrl": "https://apim-admin.empasy.io/apim/endpoints",
        "summary": "Audit the full catalog of endpoints observed in live traffic alongside undocumented shadow routes.",
        "rawUrl": "/images/screenshots/sync-apim/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-apim/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "Spec Drift Check",
        "title": "Standard Spec vs. Live Response Audit",
        "route": "/apim/openapi-specs",
        "demoUrl": "https://apim-admin.empasy.io/apim/openapi-specs",
        "summary": "Compare documented schemas against actual production responses to spot missing or over-exposed fields.",
        "rawUrl": "/images/screenshots/sync-apim/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-apim/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "Threat Details",
        "title": "Anomalous Attack Inspection & Policy Control",
        "route": "/apim/detect-events",
        "demoUrl": "https://apim-admin.empasy.io/apim/detect-events",
        "summary": "Review detailed threat event payloads and manage sensitive-data masking and blocking rules.",
        "rawUrl": "/images/screenshots/sync-apim/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-apim/screen_04.png"
      }
    ]
  },
  "sync-watch": {
    "productId": "sync-watch",
    "roleEasyLabel": "Vulnerability & Rule Governance",
    "standaloneHomepagePath": "https://empasy.io/en/solutions/sync-watch.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "Dashboard",
        "title": "Check Recent Vulnerability Status",
        "tip": "Inspect vulnerability counts by severity alongside rule deployment progress."
      },
      {
        "step": 2,
        "menuPath": "Advisory Ledger",
        "title": "Review Structured Vulnerability Details",
        "tip": "See how collected security bulletins are summarized with affected scope and guidance."
      },
      {
        "step": 3,
        "menuPath": "Deployment & Action Logs",
        "title": "Inspect Verified Rollout Trails",
        "tip": "Review the full audit history of verified security rules deployed across systems."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "Security Overview",
        "title": "New Vulnerability Intake & Response Board",
        "route": "/dashboard/analysis",
        "demoUrl": "https://watch-admin.empasy.io/dashboard/analysis",
        "summary": "Review recently collected security issues, severity breakdown, and rule rollout status at a glance.",
        "rawUrl": "/images/screenshots/sync-watch/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-watch/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "Advisory Ledger",
        "title": "Collected Vulnerability Ledger & Details",
        "route": "/watch/advisories",
        "demoUrl": "https://watch-admin.empasy.io/watch/advisories",
        "summary": "Inspect advisories aggregated from official channels with clear impact scope and remediation guidance.",
        "rawUrl": "/images/screenshots/sync-watch/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-watch/screen_03.png"
      },
      {
        "idx": 3,
        "tabLabel": "Rule Management",
        "title": "Pre-Check & Integration Defense Rules",
        "route": "/watch/verse-rules",
        "demoUrl": "https://watch-admin.empasy.io/watch/verse-rules",
        "summary": "Review pre-verification results and activation status for rules mapped to each vulnerability.",
        "rawUrl": "/images/screenshots/sync-watch/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-watch/screen_04.png"
      },
      {
        "idx": 4,
        "tabLabel": "Rollout History",
        "title": "Rule Deployment & Remediation Audit Trail",
        "route": "/watch/dispatches",
        "demoUrl": "https://watch-admin.empasy.io/watch/dispatches",
        "summary": "Track exactly which vulnerability rule was deployed to which target system and when.",
        "rawUrl": "/images/screenshots/sync-watch/screen_06.png",
        "annotatedUrl": "/images/screenshots/sync-watch/screen_06.png"
      }
    ]
  }
};
