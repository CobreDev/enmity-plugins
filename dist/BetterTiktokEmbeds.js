function k(e,t,i){window.enmity.settings.set(e,t,i)}function $(e,t,i){return window.enmity.settings.get(e,t,i)}const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const z=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const j=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const p=o.Text;o.TextInput,o.TouchableHighlight;const w=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const y=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const D=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const l=o.FormRow,h=o.FormSection;o.FormSelect,o.FormSubLabel;const L=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function G(e){window.enmity.plugins.registerPlugin(e)}const u=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const H=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const f=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const _=window.enmity.modules.common.Storage,g=window.enmity.modules.common.Toasts,C=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const I=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const W=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const A=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function X(e){return window.enmity.patcher.create(e)}const v={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function B(...e){return window.enmity.modules.bulk(...e)}function J(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const R=e=>{let t=0;for(let i in e)t++;return t};function s(e){return window.enmity.assets.getIDByName(e)}const m={Debug:s("debug"),Retry:s("ic_message_retry"),Failed:s("Small"),Cancel:s("ic_megaphone_nsfw_16px"),Add:s("add_white"),Delete:s("ic_message_delete"),Clear:s("ic_clear_all_24px"),Pencil:s("ic_pencil_24px"),Success:s("ic_selection_checked_24px"),Copy:s("toast_copy_link"),Open:s("ic_leave_stage"),Clipboard:s("pending-alert"),Initial:s("coffee"),Debug_Command:{Sent:s("ic_application_command_24px"),Clock:s("clock")},Settings:{Toasts:{Context:s("toast_image_saved"),Settings:s("ic_selection_checked_24px")},Self:s("friends_toast_icon"),Share:s("share"),Robot:s("ic_robot_24px"),Commands:s("ic_profile_badge_bot_commands"),Debug:s("ic_rulebook_16px")}},x=e=>{g.open({content:`Copied ${e} to clipboard.`,source:m.Clipboard})},Z=e=>{let t=e.split(`
`).map(i=>{if(i!="")return`"${i.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[R(t)]=`${t[R(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function q(){try{let e=await _.getItem("device_list");if(e)return JSON.parse(e);let t=(await I.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,i=Z(t);await _.setItem("device_list",i);let a=await _.getItem("device_list");return JSON.parse(a)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function K(e,t,i){let a=await q();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${i.split("-")[1]}
> **Discord Build:** ${f.InfoDictionaryManager.Version} (${f.InfoDictionaryManager.Build})
> **Software Version:** ${f.DCDDeviceManager.systemVersion}
> **Device:** ${a[f.DCDDeviceManager.device]}`}const{native:b}=window.enmity;function Q(){b.reload()}b.version,b.build,b.device,b.version;const ee=J("transitionToGuild");async function te({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,i=await(await I.get(t)).text;let a=i.match(/\d\.\d\.\d+/g),r=i.match(/patch\-\d\.\d\.\d+/g);return!a||!r?V(e.name,e.version):(a=a[0],r=r[0],a!=e.version?N(t,a,r.split("-")[1],e,!1):r!=e.build?N(t,a,r.split("-")[1],e,!0):V(e.name,e.version))}const N=(e,t,i,a,r)=>{const c=r?i:t;C.show({title:"Update found",body:`A newer ${r?"build":"version"} is available for ${a.name}. ${r?`
The version will remain at ${t}, but the build will update to ${i}.`:""}
Would you like to install ${r?`build \`${i}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>ne(e,c,a,r)})},V=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),g.open({content:`${e} is on latest version (${t})`,source:m.Success})};async function ne(e,t,i,a){window.enmity.plugins.installPlugin(e,({data:r})=>{r=="installed_plugin"||r=="overridden_plugin"?C.show({title:`Updated ${i.name}`,body:`Successfully updated to ${a?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{Q()}}):C.show({title:"Error",body:`Something went wrong while updating ${i.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{ee.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${i.name}%20Update%20Error%3A%20${a?`b${t}`:`v${t}`}`)}})})}const S=window.enmity.modules.common.Components.General.Animated,[E,oe]=B(v.byProps("transitionToGuild"),v.byProps("setString"));var ie=({manifest:e})=>{const t=A.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25,fontFamily:u.Fonts.DISPLAY_NORMAL},header:{color:u.ThemeColorMap.HEADER_PRIMARY,fontFamily:u.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:u.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),i=n.useRef(new S.Value(1)).current,a=()=>{S.spring(i,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},r=()=>{S.spring(i,{toValue:1,duration:250,useNativeDriver:!0}).start()},c=()=>{E.openURL("https://spin.rip/")},T={transform:[{scale:i}]};return n.createElement(n.Fragment,null,n.createElement(y,{style:t.container},n.createElement(w,{onPress:c,onPressIn:a,onPressOut:r},n.createElement(S.View,{style:[T]},n.createElement(z,{style:[t.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(y,{style:t.text_container},n.createElement(w,{onPress:()=>{E.openURL(e.sourceUrl)}},n.createElement(p,{style:[t.main_text,t.header]},e.name," ")),n.createElement(y,{style:{flexDirection:"row"}},n.createElement(p,{style:[t.main_text,t.sub_header]},"A plugin by"),n.createElement(w,{onPress:()=>{E.openURL("https://spin.rip/")}},n.createElement(p,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(y,{style:{flexDirection:"row"}},n.createElement(p,{style:[t.main_text,t.sub_header]},"Settings page by"),n.createElement(w,{onPress:()=>{E.openURL("https://github.com/acquitelol/")}},n.createElement(p,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),n.createElement(y,null,n.createElement(w,{style:{flexDirection:"row"},onPress:()=>{oe.setString(`**${e.name}** v${e.version}`),x("plugin name and version")}},n.createElement(p,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(p,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[ae,U]=B(v.byProps("transitionToGuild"),v.byProps("setString"));var se=({manifest:e,settings:t,hasToasts:i,children:a,commands:r})=>{const c=A.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:u.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:u.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[T,O]=n.useState(),[P,Y]=n.useState();return n.createElement(n.Fragment,null,n.createElement(j,{onTouchStart:d=>{O(d.nativeEvent.pageX),Y(d.nativeEvent.pageY)},onTouchEnd:d=>{T-d.nativeEvent.pageX<-100&&P-d.nativeEvent.pageY<40&&P-d.nativeEvent.pageY>-40&&W.pop()}},n.createElement(ie,{manifest:e}),a,r&&n.createElement(h,{title:"Plugin Commands"},r.map(d=>n.createElement(l,{label:`/${d.name}`,subLabel:d.description,leading:n.createElement(l.Icon,{style:c.icon,source:m.Settings.Commands}),trailing:l.Arrow,onPress:function(){U.setString(`/${d.name}`),x(`the command ${d.name}`)}}))),n.createElement(h,{title:"Utility"},i&&n.createElement(n.Fragment,null,n.createElement(l,{label:"Initialization Toasts",leading:n.createElement(l.Icon,{style:c.icon,source:m.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(L,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),g.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:m.Success})}})}),n.createElement(D,null)),n.createElement(l,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(l.Icon,{style:c.icon,source:m.Settings.Debug}),trailing:l.Arrow,onPress:async function(){U.setString(await K(e.name,e.version,e.build)),x("plugin debug information")}}),n.createElement(D,null),n.createElement(l,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(l.Icon,{style:c.icon,source:m.Delete}),trailing:l.Arrow,onPress:async function(){await _.removeItem("device_list"),g.open({content:"Cleared device list storage.",source:m.Success})}})),n.createElement(h,{title:"Source"},n.createElement(l,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(l.Icon,{style:c.icon,source:m.Copy}),trailing:l.Arrow,onPress:()=>{te({manifest:e})}}),n.createElement(D,null),n.createElement(l,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(l.Icon,{style:c.icon,source:m.Open}),trailing:l.Arrow,onPress:()=>{ae.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(l,{style:c.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})))},re="BetterTiktokEmbeds",le="1.2.6",me="patch-1.0.14",ce="Convert TikTok links to vm.dstn.to links so the TikTok embed is better and can be played.",de=[{name:"spin",id:"308440976723148800"}],ue="#ff0069",pe="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/BetterTiktokEmbeds.js",F={name:re,version:le,build:me,description:ce,authors:de,color:ue,sourceUrl:pe};const M=X(F.name),ge={...F,onStart(){try{$("_tiktok","_type",!1)||k("_tiktok","_type","tiktxk.com"),M.before(H,"sendMessage",(e,t,i)=>{const a=t[1].content;!a.match(/http(s)?:\/\/(\w+.)?tiktok.com\/(@[a-zA-Z0-9_.]{2,24}\/video\/\d+|(\w{1}\/)?[a-zA-Z0-9_.-]{8,12})(\/)?/gim)||(t[1].content=a.replace(/http(s)?:\/\/(\w+.)?tiktok.com/gim,`https://${$("_tiktok","_type",!1)}`))})}catch(e){console.log("[ BetterTiktokEmbeds Error ]",e)}},onStop(){M.unpatchAll()},patches:[],getSettingsPanel({settings:e}){return n.createElement(se,{manifest:F,settings:e,hasToasts:!1,commands:null},n.createElement(h,{title:"Plugin Settings"},n.createElement(l,{label:"Use vxtiktok.com instead of vm.dstn.to",leading:n.createElement(l.Icon,{source:m.Copy}),trailing:n.createElement(L,{value:e.getBoolean("_dstn",!1),onValueChange:()=>{try{e.toggle("_dstn",!1),e.getBoolean("_dstn",!1)?k("_tiktok","_type","vt.vxtiktok.com"):k("_tiktok","_type","vm.dstn.to"),g.open({content:`Switched to ${$("_tiktok","_type",!1)}.`,source:m.Success})}catch(t){console.log("[ BetterTiktokEmbeds Error ]",t),g.open({content:"An error has occurred. Check debug logs for more info.",source:m.Failed})}}})})))}};G(ge);
