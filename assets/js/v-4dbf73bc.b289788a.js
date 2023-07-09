"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[89902],{167905:(e,o,t)=>{t.r(o),t.d(o,{data:()=>i});const i=JSON.parse('{"key":"v-4dbf73bc","path":"/devices/GW003-AS-IN-TE-FC.html","title":"Atlantic Group GW003-AS-IN-TE-FC control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Atlantic Group GW003-AS-IN-TE-FC control via MQTT","description":"Integrate your Atlantic Group GW003-AS-IN-TE-FC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-09-30T20:52:51.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Programming_operation_mode (enum)","slug":"programming-operation-mode-enum","link":"#programming-operation-mode-enum","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Quiet_fan (binary)","slug":"quiet-fan-binary","link":"#quiet-fan-binary","children":[]},{"level":3,"title":"Ac_louver_position (enum)","slug":"ac-louver-position-enum","link":"#ac-louver-position-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1688903738000},"filePathRelative":"devices/GW003-AS-IN-TE-FC.md"}')},41128:(e,o,t)=>{t.r(o),t.d(o,{default:()=>m});var i=t(166252);const d=(0,i._)("h1",{id:"atlantic-group-gw003-as-in-te-fc",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#atlantic-group-gw003-as-in-te-fc","aria-hidden":"true"},"#"),(0,i.Uk)(" Atlantic Group GW003-AS-IN-TE-FC")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"GW003-AS-IN-TE-FC")],-1),n=(0,i._)("td",null,"Vendor",-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Interface Naviclim for Takao air conditioners")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"programming_operation_mode, climate (local_temperature, occupied_cooling_setpoint, occupied_heating_setpoint, system_mode, preset, fan_mode, swing_mode), quiet_fan, ac_louver_position, linkquality")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/GW003-AS-IN-TE-FC.jpg",alt:"Atlantic Group GW003-AS-IN-TE-FC"})])],-1),u=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="programming-operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#programming-operation-mode-enum" aria-hidden="true">#</a> Programming_operation_mode (enum)</h3><p>Controls how programming affects the thermostat. Possible values: setpoint (only use specified setpoint), schedule (follow programmed setpoint schedule), schedule_with_preheat (follow programmed setpoint schedule with pre-heating). Changing this value does not clear programmed schedules.. Value can be found in the published state on the <code>programming_operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;programming_operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;programming_operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>setpoint</code>, <code>schedule</code>, <code>schedule_with_preheat</code>, <code>eco</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>occupied_cooling_setpoint</code>, <code>occupied_heating_setpoint</code>, <code>system_mode</code>, <code>preset</code>, <code>fan_mode</code>, <code>swing_mode</code>.</p><ul><li><code>occupied_cooling_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_cooling_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>18</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_cooling_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>16</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>cool</code>, <code>auto</code>, <code>dry</code>, <code>fan_only</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>activity</code>, <code>boost</code>, <code>eco</code>. Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id="quiet-fan-binary" tabindex="-1"><a class="header-anchor" href="#quiet-fan-binary" aria-hidden="true">#</a> Quiet_fan (binary)</h3><p>Fan quiet mode. Value can be found in the published state on the <code>quiet_fan</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;quiet_fan&quot;: NEW_VALUE}</code>. If value equals <code>true</code> quiet_fan is ON, if <code>false</code> OFF.</p><h3 id="ac-louver-position-enum" tabindex="-1"><a class="header-anchor" href="#ac-louver-position-enum" aria-hidden="true">#</a> Ac_louver_position (enum)</h3><p>Ac louver position of this device. Value can be found in the published state on the <code>ac_louver_position</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ac_louver_position&quot;: NEW_VALUE}</code>. The possible values are: <code>quarter_open</code>, <code>half_open</code>, <code>three_quarters_open</code>, <code>fully_open</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),h={},m=(0,t(983744).Z)(h,[["render",function(e,o){const t=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[a,(0,i._)("tbody",null,[c,(0,i._)("tr",null,[n,(0,i._)("td",null,[(0,i.Wm)(t,{to:"/supported-devices/#v=Atlantic%20Group"},{default:(0,i.w5)((()=>[(0,i.Uk)("Atlantic Group")])),_:1})])]),l,s,r])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),u,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);