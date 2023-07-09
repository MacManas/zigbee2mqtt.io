"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[66858],{354788:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-08c60170","path":"/advanced/zigbee/03_secure_network.html","title":"Secure your Zigbee network","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Disable joining","slug":"disable-joining","link":"#disable-joining","children":[]},{"level":2,"title":"Change Zigbee network encryption key","slug":"change-zigbee-network-encryption-key","link":"#change-zigbee-network-encryption-key","children":[]}],"git":{"updatedTime":1688903738000},"filePathRelative":"advanced/zigbee/03_secure_network.md"}')},238771:(e,n,a)=>{a.r(n),a.d(n,{default:()=>r});var s=a(166252);const t=(0,s.uE)('<h1 id="secure-your-zigbee-network" tabindex="-1"><a class="header-anchor" href="#secure-your-zigbee-network" aria-hidden="true">#</a> Secure your Zigbee network</h1><p>To make sure your Zigbee network is as secure as possible, consider the following:</p><h2 id="disable-joining" tabindex="-1"><a class="header-anchor" href="#disable-joining" aria-hidden="true">#</a> Disable joining</h2><p>To disable joining it&#39;s important that <code>permit_join: false</code> is set in your <code>configuration.yaml</code>. Otherwise rogue devices are able to join allowing them to send and receive Zigbee traffic.</p><h2 id="change-zigbee-network-encryption-key" tabindex="-1"><a class="header-anchor" href="#change-zigbee-network-encryption-key" aria-hidden="true">#</a> Change Zigbee network encryption key</h2><p><strong>Changing the network key requires re-pairing of all devices!</strong></p><p>Zigbee2MQTT uses a known default encryption key (Zigbee Transport Key). Therefore it is recommended to use a different one. To use a different encryption key add the following to your <code>configuration.yaml</code>:</p><p><strong>Do not use this exact key.</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">network_key</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The network encryption key size is <code>128-bit</code> which is essentially 16 decimal values between <code>0</code> and <code>255</code> or 16 hexadecimal values between <code>0x00</code>and <code>0xFF</code>.</p>',10),o={href:"https://www.binaryhexconverter.com/decimal-to-hex-converter",target:"_blank",rel:"noopener noreferrer"},i=(0,s.uE)('<p>To let Zigbee2MQTT generate a new network key on next startup, add the following to <code>configuration.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">network_key</span><span class="token punctuation">:</span> GENERATE\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',2),c={},r=(0,a(983744).Z)(c,[["render",function(e,n){const a=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[t,(0,s._)("p",null,[(0,s.Uk)("If you need to transform your decimals to hexadecimals (or vice versa) please use a "),(0,s._)("a",o,[(0,s.Uk)("converter"),(0,s.Wm)(a)]),(0,s.Uk)(". Example: 92 (decimal) would become 5C (hexadecimal).")]),i])}]])}}]);