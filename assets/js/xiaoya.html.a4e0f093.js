"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[9789],{3671:(a,e)=>{e.A=(a,e)=>{const n=a.__vccOpts||a;for(const[a,s]of e)n[a]=s;return n}},7912:(a,e,n)=>{n.r(e),n.d(e,{comp:()=>u,data:()=>d});var s=n(7847);const t={href:"https://hub.docker.com/r/xiaoyaliu/alist",target:"_blank",rel:"noopener noreferrer"},i={href:"https://xiaoyaliu.notion.site/xiaoya-docker-69404af849504fa5bcf9f2dd5ecaa75f",target:"_blank",rel:"noopener noreferrer"},l={href:"https://aliyuntoken.vercel.app/",target:"_blank",rel:"noopener noreferrer"},o=(0,s.Lk)("h2",{id:"结合-emby-使用",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#结合-emby-使用"},[(0,s.Lk)("span",null,"结合 Emby 使用")])],-1),r={href:"https://xiaoyaliu.notion.site/d353c9ceb15444d7b8e21ce6097ed739?v=145044ac8252470a9feef094ff1db520",target:"_blank",rel:"noopener noreferrer"},p=(0,s.Fv)('<p>这种方法允许你将小雅的资源库与 Emby 紧密整合，利用 strm 文件将它们连接起来，并通过同步软件保持它们的内容同步。但是，在使用这种方法时，需要注意元数据可能会占用高达 160G 的空间，并且下载元数据的过程可能会对你现有的 Emby 数据造成影响。因此，在执行以下命令之前，请确保进行了配置备份。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 一键下载元数据（不需进入docker），媒体库目录与小雅配置目录</span>\n<span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> http://docker.xiaoya.pro/update_metainfo.sh<span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-s</span> /volume1/docker/emby /volume1/docker/xiaoya\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="无法下载问题" tabindex="-1"><a class="header-anchor" href="#无法下载问题"><span>无法下载问题</span></a></h2><p>虽然小雅 Alist 提供了便捷的在线播放功能，但有时你可能更希望将资源下载到本地，尤其是在遇到播放问题时。</p><p>我尝试将资源保存到我的阿里云盘，但未能成功。即使我通过 <code>show_my_ali.txt</code> 文件在小雅 Alist 中成功显示了我的云盘内容，移动和复制操作仍然失败，错误提示为 <code>Request failed with status code 403</code>。目前，对于这个问题，我只能通过下载单个文件作为临时解决方案。</p><h2 id="部署代码" tabindex="-1"><a class="header-anchor" href="#部署代码"><span>部署代码</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.3&quot;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">xiaoya</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> xiaoyaliu/alist<span class="token punctuation">:</span>latest\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> xiaoya\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/xiaoya<span class="token punctuation">:</span>/data\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 6789<span class="token punctuation">:</span><span class="token number">80</span>\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> PUID=1026\n      <span class="token punctuation">-</span> PGID=100\n      <span class="token punctuation">-</span> TZ=Asia/Shanghai\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上述的配置和步骤，你可以方便地集成和管理来自阿里云盘的丰富资源，并通过 Emby 享受高质量的播放体验。同时，也请留意资源管理和下载的相关问题，并根据实际情况进行调整和优化。希望你能通过小雅 Alist 和 Emby 打造出一个既私密又高效的个人影音库。</p><p>如果你在部署或使用过程中遇到任何问题，欢迎在评论区留言交流，我们可以一起探讨解决方案。</p>',9),c={},u=(0,n(3671).A)(c,[["render",function(a,e){const n=(0,s.g2)("ExternalLinkIcon");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("p",null,[(0,s.eW)("小雅 Alist 是一款基于阿里云盘的解决方案，提供了一个整合了丰富影音资源的平台，大大简化了用户寻找和管理资源的过程。通过 "),(0,s.Lk)("a",t,[(0,s.eW)("xiaoyaliu/alist"),(0,s.bF)(n)]),(0,s.eW)(" Docker 镜像，你可以快速部署小雅 Alist 服务。具体的配置步骤和方法，可以参考 "),(0,s.Lk)("a",i,[(0,s.eW)("xiaoya docker 配置指南"),(0,s.bF)(n)]),(0,s.eW)("。")]),(0,s.Lk)("p",null,[(0,s.eW)("在使用小雅 Alist 过程中，需要注意的一个关键点是定期更新 mytoken。你可以通过访问 "),(0,s.Lk)("a",l,[(0,s.eW)("https://aliyuntoken.vercel.app/"),(0,s.bF)(n)]),(0,s.eW)(" 并使用阿里云盘 app 扫描网页上的二维码，轻松地获取最新的 token。")]),o,(0,s.Lk)("p",null,[(0,s.eW)("如果你已经在使用 Emby 作为个人媒体服务器，那么可以通过小雅将其丰富的影音内容集成到你的 Emby 服务器中，从而提升你的播放体验。详细的操作步骤和方法，请参阅 "),(0,s.Lk)("a",r,[(0,s.eW)("《如何使用 EMBY 展示小雅内容》教程"),(0,s.bF)(n)]),(0,s.eW)("。")]),p])}]]),d=JSON.parse('{"path":"/services/dockers-on-nas/xiaoya.html","title":"小雅 alist：影视资源合集","lang":"zh-CN","frontmatter":{"article":false,"title":"小雅 alist：影视资源合集","order":2,"description":"小雅 Alist 是一款基于阿里云盘的解决方案，提供了一个整合了丰富影音资源的平台，大大简化了用户寻找和管理资源的过程。通过 xiaoyaliu/alist Docker 镜像，你可以快速部署小雅 Alist 服务。具体的配置步骤和方法，可以参考 xiaoya docker 配置指南。 在使用小雅 Alist 过程中，需要注意的一个关键点是定期更新 m...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/xiaoya.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"小雅 alist：影视资源合集"}],["meta",{"property":"og:description","content":"小雅 Alist 是一款基于阿里云盘的解决方案，提供了一个整合了丰富影音资源的平台，大大简化了用户寻找和管理资源的过程。通过 xiaoyaliu/alist Docker 镜像，你可以快速部署小雅 Alist 服务。具体的配置步骤和方法，可以参考 xiaoya docker 配置指南。 在使用小雅 Alist 过程中，需要注意的一个关键点是定期更新 m..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-24T14:22:42.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-24T14:22:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"小雅 alist：影视资源合集\\",\\"description\\":\\"小雅 Alist 是一款基于阿里云盘的解决方案，提供了一个整合了丰富影音资源的平台，大大简化了用户寻找和管理资源的过程。通过 xiaoyaliu/alist Docker 镜像，你可以快速部署小雅 Alist 服务。具体的配置步骤和方法，可以参考 xiaoya docker 配置指南。 在使用小雅 Alist 过程中，需要注意的一个关键点是定期更新 m...\\"}"]]},"headers":[{"level":2,"title":"结合 Emby 使用","slug":"结合-emby-使用","link":"#结合-emby-使用","children":[]},{"level":2,"title":"无法下载问题","slug":"无法下载问题","link":"#无法下载问题","children":[]},{"level":2,"title":"部署代码","slug":"部署代码","link":"#部署代码","children":[]}],"git":{"createdTime":1708784562000,"updatedTime":1708784562000,"contributors":[{"name":"zero-work","email":"57585709+zero-work@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.44,"words":733},"filePathRelative":"services/dockers-on-nas/xiaoya.md","localizedDate":"2024年2月24日","excerpt":"<p>小雅 Alist 是一款基于阿里云盘的解决方案，提供了一个整合了丰富影音资源的平台，大大简化了用户寻找和管理资源的过程。通过 <a href=\\"https://hub.docker.com/r/xiaoyaliu/alist\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">xiaoyaliu/alist</a> Docker 镜像，你可以快速部署小雅 Alist 服务。具体的配置步骤和方法，可以参考 <a href=\\"https://xiaoyaliu.notion.site/xiaoya-docker-69404af849504fa5bcf9f2dd5ecaa75f\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">xiaoya docker 配置指南</a>。</p>","autoDesc":true}')}}]);