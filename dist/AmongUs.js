function G(e,t,i){return window.enmity.settings.getBoolean(e,t,i)}function H(e){window.enmity.plugins.registerPlugin(e)}const $={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function R(...e){return window.enmity.modules.bulk(...e)}function B(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const w=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const T=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const D=window.enmity.modules.common.Storage,y=window.enmity.modules.common.Toasts,F=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const M=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const Y=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const N=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function j(e){return window.enmity.patcher.create(e)}const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const z=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const W=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const b=o.Text;o.TextInput,o.TouchableHighlight;const h=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const S=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const L=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const l=o.FormRow,P=o.FormSection;o.FormSelect,o.FormSubLabel;const X=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const U=e=>{let t=0;for(let i in e)t++;return t};function r(e){return window.enmity.assets.getIDByName(e)}const m={Debug:r("debug"),Retry:r("ic_message_retry"),Failed:r("Small"),Cancel:r("ic_megaphone_nsfw_16px"),Add:r("add_white"),Delete:r("ic_message_delete"),Clear:r("ic_clear_all_24px"),Pencil:r("ic_pencil_24px"),Success:r("ic_selection_checked_24px"),Copy:r("toast_copy_link"),Open:r("ic_leave_stage"),Clipboard:r("pending-alert"),Debug_Command:{Sent:r("ic_application_command_24px"),Clock:r("clock")},Settings:{Toasts:{Context:r("toast_image_saved"),Settings:r("ic_selection_checked_24px")},Self:r("friends_toast_icon"),Share:r("share"),Robot:r("ic_robot_24px"),Commands:r("ic_profile_badge_bot_commands"),Debug:r("ic_rulebook_16px")}},I=e=>{y.open({content:`Copied ${e} to clipboard.`,source:m.Clipboard})},J=e=>{let t=e.split(`
`).map(i=>{if(i!="")return`"${i.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[U(t)]=`${t[U(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function q(){try{let e=await D.getItem("device_list");if(e)return JSON.parse(e);let t=(await M.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,i=J(t);await D.setItem("device_list",i);let a=await D.getItem("device_list");return JSON.parse(a)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function K(e,t,i){let a=await q();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${i.split("-")[1]}
> **Discord Build:** ${T.InfoDictionaryManager.Version} (${T.InfoDictionaryManager.Build})
> **Software Version:** ${T.DCDDeviceManager.systemVersion}
> **Device:** ${a[T.DCDDeviceManager.device]}`}const{native:_}=window.enmity;function Q(){_.reload()}_.version,_.build,_.device,_.version;const Z=B("transitionToGuild");async function ee({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,i=await(await M.get(t)).text;let a=i.match(/\d\.\d\.\d+/g),s=i.match(/patch\-\d\.\d\.\d+/g);return!a||!s?k(e.name,e.version):(a=a[0],s=s[0],a!=e.version?V(t,a,s.split("-")[1],e,!1):s!=e.build?V(t,a,s.split("-")[1],e,!0):k(e.name,e.version))}const V=(e,t,i,a,s)=>{const c=s?i:t;F.show({title:"Update found",body:`A newer ${s?"build":"version"} is available for ${a.name}. ${s?`
The version will remain at ${t}, but the build will update to ${i}.`:""}
Would you like to install ${s?`build \`${i}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>te(e,c,a,s)})},k=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),y.open({content:`${e} is on latest version (${t})`,source:m.Success})};async function te(e,t,i,a){window.enmity.plugins.installPlugin(e,({data:s})=>{s=="installed_plugin"||s=="overridden_plugin"?F.show({title:`Updated ${i.name}`,body:`Successfully updated to ${a?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{Q()}}):F.show({title:"Error",body:`Something went wrong while updating ${i.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{Z.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${i.name}%20Update%20Error%3A%20${a?`b${t}`:`v${t}`}`)}})})}const C=window.enmity.modules.common.Components.General.Animated,[A,ne]=R($.byProps("transitionToGuild"),$.byProps("setString"));var oe=({manifest:e})=>{const t=N.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:w.ThemeColorMap.HEADER_PRIMARY,fontFamily:w.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:w.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),i=n.useRef(new C.Value(1)).current,a=()=>{C.spring(i,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},s=()=>{C.spring(i,{toValue:1,duration:250,useNativeDriver:!0}).start()},c=()=>{A.openURL("https://spin.rip/")},f={transform:[{scale:i}]};return n.createElement(n.Fragment,null,n.createElement(S,{style:t.container},n.createElement(h,{onPress:c,onPressIn:a,onPressOut:s},n.createElement(C.View,{style:[f]},n.createElement(z,{style:[t.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(S,{style:t.text_container},n.createElement(h,{onPress:()=>{A.openURL(e.sourceUrl)}},n.createElement(b,{style:[t.main_text,t.header]},e.name," ")),n.createElement(S,{style:{flexDirection:"row"}},n.createElement(b,{style:[t.main_text,t.sub_header]},"A plugin by"),n.createElement(h,{onPress:()=>{A.openURL("https://spin.rip/")}},n.createElement(b,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(S,{style:{flexDirection:"row"}},n.createElement(b,{style:[t.main_text,t.sub_header]},"Settings page by"),n.createElement(h,{onPress:()=>{A.openURL("https://github.com/acquitelol/")}},n.createElement(b,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),n.createElement(S,null,n.createElement(h,{style:{flexDirection:"row"},onPress:()=>{ne.setString(`**${e.name}** v${e.version}`),I("plugin name and version")}},n.createElement(b,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(b,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[ie,O]=R($.byProps("transitionToGuild"),$.byProps("setString"));var ae=({manifest:e,settings:t,hasToasts:i,children:a,commands:s})=>{const c=N.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:w.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:w.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[f,p]=n.useState(),[g,E]=n.useState();return n.createElement(n.Fragment,null,n.createElement(W,{onTouchStart:u=>{p(u.nativeEvent.pageX),E(u.nativeEvent.pageY)},onTouchEnd:u=>{f-u.nativeEvent.pageX<-100&&g-u.nativeEvent.pageY<40&&g-u.nativeEvent.pageY>-40&&Y.pop()}},n.createElement(oe,{manifest:e}),a,s&&n.createElement(P,{title:"Plugin Commands"},s.map(u=>n.createElement(l,{label:`/${u.name}`,subLabel:u.description,leading:n.createElement(l.Icon,{style:c.icon,source:m.Settings.Commands}),trailing:l.Arrow,onPress:function(){O.setString(`/${u.name}`),I(`the command ${u.name}`)}}))),n.createElement(P,{title:"Utility"},i&&n.createElement(n.Fragment,null,n.createElement(l,{label:"Initialization Toasts",leading:n.createElement(l.Icon,{style:c.icon,source:m.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(X,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),y.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:m.Success})}})}),n.createElement(L,null)),n.createElement(l,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(l.Icon,{style:c.icon,source:m.Settings.Debug}),trailing:l.Arrow,onPress:async function(){O.setString(await K(e.name,e.version,e.build)),I("plugin debug information")}}),n.createElement(L,null),n.createElement(l,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(l.Icon,{style:c.icon,source:m.Delete}),trailing:l.Arrow,onPress:async function(){await D.removeItem("device_list"),y.open({content:"Cleared device list storage.",source:m.Success})}})),n.createElement(P,{title:"Source"},n.createElement(l,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(l.Icon,{style:c.icon,source:m.Copy}),trailing:l.Arrow,onPress:()=>{ee({manifest:e})}}),n.createElement(L,null),n.createElement(l,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(l.Icon,{style:c.icon,source:m.Open}),trailing:l.Arrow,onPress:()=>{ie.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(l,{style:c.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})))},se="AmongUs",re="1.0.3",le="patch-1.0.15",me="sus",ce=[{name:"amogus",id:"308440976723148800"}],de="#ff0069",ue="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/AmongUs.js",d={name:se,version:re,build:le,description:me,authors:ce,color:de,sourceUrl:ue};const x=j(d.name),v=B("_currentDispatchActionType","_subscriptions","_waitQueue"),pe={...d,onStart(){v.dispatch({type:"LOAD_MESSAGES"}),v.dispatch({type:"LOAD_MESSAGES_SUCCESS",channelId:0,messages:[],isBefore:!1,isAfter:!1,hasMoreBefore:!1,hasMoreAfter:!1,limit:25,jump:void 0,isStale:!1,truncate:void 0});let e=0,t=3;const i=()=>{let a=G(d.name,`${d.name}-toastEnable`,!1);try{e++,console.log(`[${d.name}] delayed start attempt ${e}/${t}.`),a&&y.open({content:`[${d.name}] start attempt ${e}/${t}.`,source:m.Debug});const s=v._actionHandlers._orderedActionHandlers.MESSAGE_CREATE.find(p=>p.name==="MessageStore"),c=v._actionHandlers._orderedActionHandlers.MESSAGE_UPDATE.find(p=>p.name==="MessageStore"),f=v._actionHandlers._orderedActionHandlers.LOAD_MESSAGES_SUCCESS.find(p=>p.name==="MessageStore");x.before(s,"actionHandler",(p,g)=>{g[0].message.content="sus"}),x.before(c,"actionHandler",(p,g)=>{g[0].message.content="sus"}),x.before(f,"actionHandler",(p,g)=>{g[0].messages=g[0].messages.map(E=>(E.content="sus",E))}),console.log(`${d.name} delayed start successful.`),a&&y.open({content:`${d.name} start successful.`,source:m.Success})}catch{e<t?(console.warn(`${d.name} failed to start. Trying again in ${e}0s.`),a&&y.open({content:`${d.name} failed to start trying again in ${e}0s.`,source:m.Failed}),setTimeout(i,e*1e4)):(console.error(`${d.name} failed to start. Giving up.`),y.open({content:`${d.name} failed to start. Giving up.`,source:m.Failed}))}};setTimeout(()=>{i()},300)},onStop(){x.unpatchAll()},patches:[],getSettingsPanel({settings:e}){return n.createElement(ae,{manifest:d,settings:e,hasToasts:!0,commands:null})}};H(pe);
