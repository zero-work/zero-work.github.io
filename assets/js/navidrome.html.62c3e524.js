"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[4447],{3671:(n,e)=>{e.A=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}},4671:(n,e,a)=>{a.r(e),a.d(e,{comp:()=>d,data:()=>m});var s=a(7847);const t=(0,s.Lk)("p",null,"Navidrome 为开源自托管音乐服务器，提供音频流媒体服务。",-1),o=(0,s.Lk)("p",null,"鉴于 Roon 的定价较高且 Emby 和 Plex 主要针对视频，Navidrome 成为了一个免费的选择。它支持广泛的音频格式，如 MP3、FLAC、AAC 和 OGG 等，并能有效地为多个用户管理其音乐库，确保每位用户的体验互不冲突。",-1),r={href:"https://www.navidrome.org/docs/installation/docker/",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Fv)('<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">navidrome</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> deluan/navidrome<span class="token punctuation">:</span>latest\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> navidrome\n    <span class="token comment">#user: 1000:1000 # should be owner of volumes #群晖应该是 1026:100 # 使用 `id 用户名` 可以查看代码</span>\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;4533:4533&quot;</span>\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token comment"># Optional: put your config options customization here. Examples:</span>\n      <span class="token key atrule">ND_SCANSCHEDULE</span><span class="token punctuation">:</span> 1h\n      <span class="token key atrule">ND_LOGLEVEL</span><span class="token punctuation">:</span> info\n      <span class="token key atrule">ND_SESSIONTIMEOUT</span><span class="token punctuation">:</span> 24h\n      <span class="token key atrule">ND_BASEURL</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;/volume1/docker/navidrome/data:/data&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;/volume4/Music/Audio:/music:ro&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),l={href:"https://www.cnblogs.com/vinlxc/p/11347744.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://aqzscn.cn/archives/stream-music-versions",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Lk)("p",null,"然而，Navidrome 也有其局限性：它不支持显示多行歌词，搜索功能以专辑为单位，这使得直接搜索特定歌曲可能不会总是准确。另外，Windows 客户端不支持显示歌词功能。因此，我转向使用 Emby 来管理 PC 端音乐。然而，Emby 流媒体播放时偶尔会断播，与之对比，Navidrome 在音乐流播放方面更稳定，并且更适合用于移动端 API。",-1),u={},d=(0,a(3671).A)(u,[["render",function(n,e){const a=(0,s.g2)("ExternalLinkIcon");return(0,s.uX)(),(0,s.CE)("div",null,[t,o,(0,s.Lk)("p",null,[(0,s.eW)("想要了解其他安装方法，你可以查看 "),(0,s.Lk)("a",r,[(0,s.eW)("Navidrome 的官方教程"),(0,s.bF)(a)]),(0,s.eW)("。")]),i,(0,s.Lk)("p",null,[(0,s.eW)("不过，Navidrome 并不提供歌词下载功能。如果你需要下载内置的歌词，可以通过 "),(0,s.Lk)("a",l,[(0,s.eW)("MusicTag"),(0,s.bF)(a)]),(0,s.eW)(" 实现。")]),(0,s.Lk)("p",null,[(0,s.eW)("对于播放器的选择，推荐使用国产的 "),(0,s.Lk)("a",p,[(0,s.eW)("音流"),(0,s.bF)(a)]),(0,s.eW)(" 播放器。它当前正处于内测阶段，支持 iOS 和 Android 平台，能够显示下载的内置歌词。")]),c])}]]),m=JSON.parse('{"path":"/services/dockers-on-nas/navidrome.html","title":"Navidrome：开源音乐服务器","lang":"zh-CN","frontmatter":{"article":false,"title":"Navidrome：开源音乐服务器","order":3,"description":"Navidrome 为开源自托管音乐服务器，提供音频流媒体服务。 鉴于 Roon 的定价较高且 Emby 和 Plex 主要针对视频，Navidrome 成为了一个免费的选择。它支持广泛的音频格式，如 MP3、FLAC、AAC 和 OGG 等，并能有效地为多个用户管理其音乐库，确保每位用户的体验互不冲突。 想要了解其他安装方法，你可以查看 Navidr...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/navidrome.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Navidrome：开源音乐服务器"}],["meta",{"property":"og:description","content":"Navidrome 为开源自托管音乐服务器，提供音频流媒体服务。 鉴于 Roon 的定价较高且 Emby 和 Plex 主要针对视频，Navidrome 成为了一个免费的选择。它支持广泛的音频格式，如 MP3、FLAC、AAC 和 OGG 等，并能有效地为多个用户管理其音乐库，确保每位用户的体验互不冲突。 想要了解其他安装方法，你可以查看 Navidr..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-24T14:22:42.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-24T14:22:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Navidrome：开源音乐服务器\\",\\"description\\":\\"Navidrome 为开源自托管音乐服务器，提供音频流媒体服务。 鉴于 Roon 的定价较高且 Emby 和 Plex 主要针对视频，Navidrome 成为了一个免费的选择。它支持广泛的音频格式，如 MP3、FLAC、AAC 和 OGG 等，并能有效地为多个用户管理其音乐库，确保每位用户的体验互不冲突。 想要了解其他安装方法，你可以查看 Navidr...\\"}"]]},"headers":[],"git":{"createdTime":1708784562000,"updatedTime":1708784562000,"contributors":[{"name":"zero-work","email":"57585709+zero-work@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.34,"words":402},"filePathRelative":"services/dockers-on-nas/navidrome.md","localizedDate":"2024年2月24日","excerpt":"<p>Navidrome 为开源自托管音乐服务器，提供音频流媒体服务。</p>\\n<p>鉴于 Roon 的定价较高且 Emby 和 Plex 主要针对视频，Navidrome 成为了一个免费的选择。它支持广泛的音频格式，如 MP3、FLAC、AAC 和 OGG 等，并能有效地为多个用户管理其音乐库，确保每位用户的体验互不冲突。</p>\\n<p>想要了解其他安装方法，你可以查看 <a href=\\"https://www.navidrome.org/docs/installation/docker/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Navidrome 的官方教程</a>。</p>","autoDesc":true}')}}]);