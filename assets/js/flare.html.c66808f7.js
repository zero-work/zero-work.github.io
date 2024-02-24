"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[1074],{3671:(e,n)=>{n.A=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},8721:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>u,data:()=>d});var s=a(7847);const t={href:"https://github.com/soulteary/docker-flare",target:"_blank",rel:"noopener noreferrer"},l=(0,s.Lk)("p",null,[(0,s.Lk)("strong",null,"优势"),(0,s.eW)("：")],-1),r=(0,s.Lk)("li",null,[(0,s.Lk)("strong",null,"本地搜索书签"),(0,s.eW)("：Flare 支持高效的本地书签搜索功能，帮助用户迅速找到所需的信息。")],-1),o=(0,s.Lk)("strong",null,"批量导入书签",-1),i={href:"https://tools.newzone.top/data-parser/flare",target:"_blank",rel:"noopener noreferrer"},p=(0,s.Fv)('<p><strong>存在的问题</strong>：Flare 无法打开 <code>chrome://extensions/</code> 等非标准格式的链接。</p><h2 id="部署代码" tabindex="-1"><a class="header-anchor" href="#部署代码"><span>部署代码</span></a></h2><p>使用以下的 Docker 配置文件，你可以轻松部署 Flare，享受快速而强大的本地导航体验。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.6&#39;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">flare</span><span class="token punctuation">:</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> flare\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> soulteary/flare\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token comment"># 默认无需添加任何参数，如有特殊需求</span>\n    <span class="token comment"># 可阅读文档 https://github.com/soulteary/docker-flare/blob/main/docs/advanced-startup.md</span>\n    <span class="token key atrule">command</span><span class="token punctuation">:</span> flare\n    <span class="token comment"># 启用账号登陆模式</span>\n    <span class="token comment"># command: flare --nologin=0</span>\n    <span class="token comment"># environment:</span>\n      <span class="token comment"># 如需开启用户登陆模式，需要先设置 `nologin` 启动参数为 `0`</span>\n      <span class="token comment"># 如开启 `nologin`，未设置 FLARE_USER，则默认用户为 `flare`</span>\n      <span class="token comment"># - FLARE_USER=flare</span>\n      <span class="token comment"># 指定你自己的账号密码，如未设置 `FLARE_USER`，则会默认生成密码并展示在应用启动日志中</span>\n      <span class="token comment"># - FLARE_PASS=your_password</span>\n      <span class="token comment"># 是否开启“使用向导”，访问 `/guide`</span>\n      <span class="token comment"># - FLARE_GUIDE=1</span>\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 7570<span class="token punctuation">:</span><span class="token number">5005</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/flare/app<span class="token punctuation">:</span>/app\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),c={},u=(0,a(3671).A)(c,[["render",function(e,n){const a=(0,s.g2)("ExternalLinkIcon");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("p",null,[(0,s.eW)("在众多本地导航工具中，"),(0,s.Lk)("a",t,[(0,s.eW)("Flare"),(0,s.bF)(a)]),(0,s.eW)(" 以其极速的加载时间和强大的功能脱颖而出。相较于其他需要 2-3 秒的加载时间，Flare 只需短短 0.2 秒即可完成加载，大幅提升了效率。")]),l,(0,s.Lk)("ul",null,[r,(0,s.Lk)("li",null,[o,(0,s.eW)("：这一功能使得链接的编辑和管理变得异常简便。如果你需要进行批量导入，可以使用我写的 "),(0,s.Lk)("a",i,[(0,s.eW)("Flare 书签解析工具"),(0,s.bF)(a)]),(0,s.eW)("。")])]),p])}]]),d=JSON.parse('{"path":"/services/dockers-on-nas/flare.html","title":"Flare：快速导航页","lang":"zh-CN","frontmatter":{"article":false,"title":"Flare：快速导航页","order":93,"description":"在众多本地导航工具中，Flare 以其极速的加载时间和强大的功能脱颖而出。相较于其他需要 2-3 秒的加载时间，Flare 只需短短 0.2 秒即可完成加载，大幅提升了效率。 优势： 本地搜索书签：Flare 支持高效的本地书签搜索功能，帮助用户迅速找到所需的信息。 批量导入书签：这一功能使得链接的编辑和管理变得异常简便。如果你需要进行批量导入，可以使...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/flare.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Flare：快速导航页"}],["meta",{"property":"og:description","content":"在众多本地导航工具中，Flare 以其极速的加载时间和强大的功能脱颖而出。相较于其他需要 2-3 秒的加载时间，Flare 只需短短 0.2 秒即可完成加载，大幅提升了效率。 优势： 本地搜索书签：Flare 支持高效的本地书签搜索功能，帮助用户迅速找到所需的信息。 批量导入书签：这一功能使得链接的编辑和管理变得异常简便。如果你需要进行批量导入，可以使..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-24T14:22:42.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-24T14:22:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Flare：快速导航页\\",\\"description\\":\\"在众多本地导航工具中，Flare 以其极速的加载时间和强大的功能脱颖而出。相较于其他需要 2-3 秒的加载时间，Flare 只需短短 0.2 秒即可完成加载，大幅提升了效率。 优势： 本地搜索书签：Flare 支持高效的本地书签搜索功能，帮助用户迅速找到所需的信息。 批量导入书签：这一功能使得链接的编辑和管理变得异常简便。如果你需要进行批量导入，可以使...\\"}"]]},"headers":[{"level":2,"title":"部署代码","slug":"部署代码","link":"#部署代码","children":[]}],"git":{"createdTime":1708784562000,"updatedTime":1708784562000,"contributors":[{"name":"zero-work","email":"57585709+zero-work@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.23,"words":370},"filePathRelative":"services/dockers-on-nas/flare.md","localizedDate":"2024年2月24日","excerpt":"<p>在众多本地导航工具中，<a href=\\"https://github.com/soulteary/docker-flare\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Flare</a> 以其极速的加载时间和强大的功能脱颖而出。相较于其他需要 2-3 秒的加载时间，Flare 只需短短 0.2 秒即可完成加载，大幅提升了效率。</p>\\n<p><strong>优势</strong>：</p>\\n<ul>\\n<li><strong>本地搜索书签</strong>：Flare 支持高效的本地书签搜索功能，帮助用户迅速找到所需的信息。</li>\\n<li><strong>批量导入书签</strong>：这一功能使得链接的编辑和管理变得异常简便。如果你需要进行批量导入，可以使用我写的 <a href=\\"https://tools.newzone.top/data-parser/flare\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Flare 书签解析工具</a>。</li>\\n</ul>","autoDesc":true}')}}]);