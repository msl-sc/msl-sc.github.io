/* Minimal bilingual support: English / 中文 */
(function () {
  var DICT = {
    en: {
      "meta.title": "Mingsong Liu — Mathematics with Computer Science",
      "meta.desc": "Academic page of Mingsong Liu, undergraduate in Mathematics with Computer Science at GTIIT.",
      "brand": "Mingsong Liu",
      "lang.label": "Language",

      "nav.education": "Education",
      "nav.research": "Research",
      "nav.projects": "Projects",
      "nav.skills": "Skills",

      "hero.name": "Mingsong Liu",
      "hero.role": "Undergraduate, Mathematics with Computer Science",
      "hero.affil": "Guangdong Technion – Israel Institute of Technology (GTIIT)",

      "sec.education": "Education",
      "edu.degree": "B.S. in Mathematics with Computer Science",
      "edu.when": "Aug 2023 – Aug 2027",
      "edu.where": "Guangdong Technion – Israel Institute of Technology (GTIIT) · Shantou, China",
      "edu.b2": "Core coursework: Data Structures, Systems Programming, Computer Organization, Digital Systems and Computer Structure, Combinatorial Algorithms, Operating Systems, Numerical Analysis, Probability Theory, Combinatorics, Ordinary Differential Equations, Algebra, Infinitesimal Calculus, Introduction to Applied Mathematics.",

      "sec.research": "Research",
      "res.title": "Technion Summer Research Program",
      "res.when": "Aug 2026 – Sep 2026",
      "res.where": "Technion – Israel Institute of Technology · Haifa · Supervisor: Dr. Rajeev Gangwar",
      "res.b1": "Selected for the Technion Summer Research Program; studied quantum information theory.",
      "res.b2": "Worked on entropy and divergence, the core measures of quantum information: how they quantify the information carried by a quantum state and the distinguishability between two descriptions of the same state.",

      "sec.projects": "Projects",
      "p1.title": "Language of Thought (LoT) Sequence Complexity Framework",
      "p1.when": "Oct 2025 – Mar 2026",
      "p1.stack": "Python",
      "p1.desc": "A minimal formal language for generating sequences. The goal is to find the smallest program that produces a given sequence — a computable analogue of Kolmogorov complexity.",
      "p1.b1": "Implemented the LoT instruction set: <code>play</code>, <code>move &amp; play</code>, and three loop constructs — fixed repetition, iterative mapping and iterative evaluation.",
      "p1.b2": "Implemented direct generation of a string sequence from a given program, and defined and implemented the computation of program space complexity.",
      "p1.b3": "Implemented a dynamic-programming search that returns, for every substring and start position, the minimal program and its complexity; analysed and reduced the running time to polynomial.",
      "p1.b4": "Refactored the <code>complexities_and_minprog</code>, <code>exe</code> and <code>size</code> modules to decouple complexity computation, execution and parameter configuration; designed an indentation-based LoT syntax and parser.",

      "p2.title": "rgbds-live: improvements to an online programming interface",
      "p2.when": "May 2026 – Jun 2026",
      "p2.stack": "Node.js · JavaScript · npm · Vite",
      "p2.desc": "Open-source contribution to rgbds-live, the browser IDE used for Game Boy assembly in the Digital Systems course.",
      "p2.b1": "Built and published an npm command-line tool that serves a local Game Boy assembly project over a local HTTP server and opens it in the web IDE, bypassing the 2 KB URL-hash project size limit while keeping every file on the user's own machine.",
      "p2.b2": "Supported opening remote URLs and local files directly from the terminal, streamlining the edit–compile–test loop.",
      "p2.b3": "Rewrote the assembly log parser so compiler diagnostics carry file and line metadata, enabling one-click navigation from an error message to its source location.",

      "p3.title": "Klotski for the Game Boy, in assembly",
      "p3.when": "Dec 2024 – Jan 2025",
      "p3.stack": "Game Boy assembly (RGBDS)",
      "p3.desc": "A complete sliding-block puzzle game written from scratch for original Game Boy hardware.",
      "p3.b1": "Studied how early Game Boy titles were written and adapted the code to the hardware limits of the machine: instruction selection and memory layout.",
      "p3.b2": "Implemented pixel drawing, tile rendering, move counter and input handling, with a finite-state machine driving game logic.",

      "p4.title": "Scroll Screenshot Extension",
      "p4.when": "2026",
      "p4.stack": "JavaScript · Chrome Extension API",
      "p4.desc": "A Chrome extension that scrolls a page automatically and captures a stitched full-page screenshot, driven from a small popup with a background service worker.",

      "sec.more": "Other projects",
      "m1.tag": "Java",
      "m1.text": "Restaurant fixed-menu system — category and dependency management, menu generation and validation, combining double stacks, min-heap, AVL tree, Treap, Trie, hash table and graph structures.",
      "m2.tag": "Python",
      "m2.text": "Minimum vertex cover on undirected graphs — exact backtracking search with feasibility and optimality pruning, plus a 2-approximation greedy algorithm.",
      "m3.tag": "Python",
      "m3.text": "Numerical methods — Lagrange interpolation, least squares, RK4, Jacobi, Gauss-Seidel and SVD, applied to collision prediction, Moore's law trend analysis and Lorenz system simulation; SVD rank controls image compression.",
      "m4.tag": "C",
      "m4.text": "xv6 — user-level thread library, spinlocks and a concurrent memory allocator.",

      "sec.skills": "Skills",
      "s1.tag": "Languages",
      "s1.text": "Python, C, Java, JavaScript, Game Boy assembly (RGBDS), SQL",
      "s2.tag": "Tools",
      "s2.text": "Git, Linux, Node.js / npm / Vite, LaTeX",

      "sec.awards": "Awards",
      "a1": "Academic Excellence Award, 2024–2025 academic year, GTIIT.",

      "footer.text": "© 2026 Mingsong Liu"
    },

    zh: {
      "meta.title": "刘明松 — 数学与计算机科学",
      "meta.desc": "刘明松的学业主页，广东以色列理工学院数学与计算机科学专业本科生。",
      "brand": "刘明松",
      "lang.label": "语言",

      "nav.education": "教育",
      "nav.research": "科研",
      "nav.projects": "项目",
      "nav.skills": "技能",

      "hero.name": "刘明松",
      "hero.role": "数学与计算机科学 本科在读",
      "hero.affil": "广东以色列理工学院（GTIIT）",

      "sec.education": "教育背景",
      "edu.degree": "数学与计算机科学 理学学士",
      "edu.when": "2023.08 – 2027.08",
      "edu.where": "广东以色列理工学院（GTIIT）· 中国汕头",
      "edu.b2": "核心课程：数据结构、系统编程、计算机组成、数字系统与计算机结构、组合算法、操作系统、数值分析、概率论、组合数学、常微分方程、代数、微积分、应用数学导论。",

      "sec.research": "科研经历",
      "res.title": "以色列理工学院暑期科研项目",
      "res.when": "2026.08 – 2026.09",
      "res.where": "以色列理工学院（Technion）· 海法 · 指导老师：Rajeev Gangwar 博士",
      "res.b1": "入选以色列理工学院暑期科研项目，学习量子信息理论。",
      "res.b2": "研读量子信息的核心度量工具——熵（Entropy）与散度（Divergence），分析二者如何刻画量子态携带的信息量，以及度量同一量子态两种描述之间可区分性的方法。",

      "sec.projects": "项目经历",
      "p1.title": "思维语言（LoT）序列复杂度框架",
      "p1.when": "2025.10 – 2026.03",
      "p1.stack": "Python",
      "p1.desc": "一门用于生成序列的极简形式语言，目标是找出能生成给定序列的最小程序——相当于 Kolmogorov 复杂度的可计算版本。",
      "p1.b1": "用 Python 实现 LoT 指令集：<code>play</code>、<code>move &amp; play</code>，以及固定重复、迭代映射、迭代求值三类循环结构。",
      "p1.b2": "实现对给定程序直接生成字符串序列，定义并实现程序空间复杂度的计算。",
      "p1.b3": "实现动态规划搜索，对每个子串与起点返回最小程序及其复杂度；分析并将时间复杂度优化至多项式级。",
      "p1.b4": "重构 <code>complexities_and_minprog</code>、<code>exe</code>、<code>size</code> 等核心模块，解耦复杂度计算、执行逻辑与参数配置；设计缩进式 LoT 语法与解析器。",

      "p2.title": "rgbds-live：在线编程界面改进",
      "p2.when": "2026.05 – 2026.06",
      "p2.stack": "Node.js · JavaScript · npm · Vite",
      "p2.desc": "面向 rgbds-live 的开源贡献——数字系统课程中使用的 Game Boy 汇编浏览器端 IDE。",
      "p2.b1": "开发并发布 npm 命令行工具：通过本地 HTTP 服务把本地 Game Boy 汇编项目直接送入网页 IDE，突破 2 KB URL hash 的项目体积限制，且文件始终留在用户本机。",
      "p2.b2": "支持从终端直接打开远程网址与本地文件，简化“编辑—编译—测试”流程。",
      "p2.b3": "重写汇编日志解析，为编译诊断信息补充文件名与行号，实现从报错信息一键跳转至源码位置。",

      "p3.title": "Game Boy 华容道（汇编实现）",
      "p3.when": "2024.12 – 2025.01",
      "p3.stack": "Game Boy 汇编（RGBDS）",
      "p3.desc": "面向早期 Game Boy 硬件、从零编写的完整华容道滑块解谜游戏。",
      "p3.b1": "研究早期 Game Boy 游戏的代码实现方式，针对硬件限制优化指令选择与内存布局。",
      "p3.b2": "实现像素绘制、图块渲染、计步器与输入处理，并用有限状态机驱动游戏逻辑。",

      "p4.title": "滚动截图扩展",
      "p4.when": "2026",
      "p4.stack": "JavaScript · Chrome 扩展",
      "p4.desc": "一个 Chrome 扩展：自动滚动页面并拼接生成整页截图，通过轻量弹窗与后台 service worker 驱动。",

      "sec.more": "其他项目",
      "m1.tag": "Java",
      "m1.text": "餐厅固定菜单提案系统——类别管理、类别依赖管理、菜单生成与验证，综合运用双栈、最小堆、AVL 树、Treap、Trie、哈希表与图结构。",
      "m2.tag": "Python",
      "m2.text": "无向图最小顶点覆盖——回溯法精确搜索，配合可行性剪枝与最优性剪枝，并提供 2-近似贪心算法。",
      "m3.tag": "Python",
      "m3.text": "数值方法——实现拉格朗日插值、最小二乘、RK4、Jacobi、Gauss-Seidel 与 SVD，应用于历史碰撞预测、摩尔定律趋势分析与洛伦兹系统仿真，并用 SVD 秩控制图像压缩程度。",
      "m4.tag": "C",
      "m4.text": "xv6 操作系统——实现用户级线程库、自旋锁与并发内存分配器。",

      "sec.skills": "技能",
      "s1.tag": "编程语言",
      "s1.text": "Python、C、Java、JavaScript、Game Boy 汇编（RGBDS）、SQL",
      "s2.tag": "工具",
      "s2.text": "Git、Linux、Node.js / npm / Vite、LaTeX",

      "sec.awards": "荣誉",
      "a1": "广东以色列理工学院 2024–2025 学年学业优秀奖。",

      "footer.text": "© 2026 刘明松"
    }
  };

  var STORE_KEY = "site-lang";

  function apply(lang) {
    var table = DICT[lang] || DICT.en;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var val = table[el.getAttribute("data-i18n")];
      if (val === undefined) continue;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, val.replace(/<[^>]+>/g, ""));
      } else if (el.tagName === "TITLE") {
        el.textContent = val.replace(/<[^>]+>/g, "");
      } else {
        el.innerHTML = val;
      }
    }

    var btns = document.querySelectorAll("[data-lang]");
    for (var j = 0; j < btns.length; j++) {
      if (btns[j].getAttribute("data-lang") === lang) {
        btns[j].classList.add("on");
        btns[j].setAttribute("aria-pressed", "true");
      } else {
        btns[j].classList.remove("on");
        btns[j].setAttribute("aria-pressed", "false");
      }
    }
  }

  function pick() {
    var saved = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    if (saved === "en" || saved === "zh") return saved;
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("zh") === 0 ? "zh" : "en";
  }

  var current = pick();
  apply(current);

  var buttons = document.querySelectorAll("[data-lang]");
  for (var k = 0; k < buttons.length; k++) {
    buttons[k].addEventListener("click", function () {
      current = this.getAttribute("data-lang");
      try { localStorage.setItem(STORE_KEY, current); } catch (e) {}
      apply(current);
    });
  }
})();
