"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2687],{62687:(e,t,n)=>{n.r(t),n.d(t,{CommandRegistry:()=>l});var i,r=n(58623),o=n(93315),a=n(79444),s=n(38397),c=n(34938),d=n(41649),l=function(){function e(){this._timerID=0,this._replaying=!1,this._keystrokes=[],this._keydownEvents=[],this._keyBindings=[],this._exactKeyMatch=null,this._commands=Object.create(null),this._commandChanged=new d.Signal(this),this._commandExecuted=new d.Signal(this),this._keyBindingChanged=new d.Signal(this)}return Object.defineProperty(e.prototype,"commandChanged",{get:function(){return this._commandChanged},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"commandExecuted",{get:function(){return this._commandExecuted},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"keyBindingChanged",{get:function(){return this._keyBindingChanged},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"keyBindings",{get:function(){return this._keyBindings},enumerable:!0,configurable:!0}),e.prototype.listCommands=function(){return Object.keys(this._commands)},e.prototype.hasCommand=function(e){return e in this._commands},e.prototype.addCommand=function(e,t){var n=this;if(e in this._commands)throw new Error("Command '"+e+"' already registered.");return this._commands[e]=i.createCommand(t),this._commandChanged.emit({id:e,type:"added"}),new a.DisposableDelegate((function(){delete n._commands[e],n._commandChanged.emit({id:e,type:"removed"})}))},e.prototype.notifyCommandChanged=function(e){if(void 0!==e&&!(e in this._commands))throw new Error("Command '"+e+"' is not registered.");this._commandChanged.emit({id:e,type:e?"changed":"many-changed"})},e.prototype.label=function(e,t){void 0===t&&(t=o.JSONExt.emptyObject);var n=this._commands[e];return n?n.label.call(void 0,t):""},e.prototype.mnemonic=function(e,t){void 0===t&&(t=o.JSONExt.emptyObject);var n=this._commands[e];return n?n.mnemonic.call(void 0,t):-1},e.prototype.icon=function(e,t){void 0===t&&(t=o.JSONExt.emptyObject);var n=this._commands[e];return n?n.icon.call(void 0,t):""},e.prototype.iconClass=function(e,t){void 0===t&&(t=o.JSONExt.emptyObject);var n=this._commands[e];return n?n.iconClass.call(void 0,t):""},e.prototype.iconLabel=function(e,t){void 0===t&&(t=o.JSONExt.emptyObject);var n=this._commands[e];return n?n.iconLabel.call(void 0,t):""},e.prototype.caption=function(e,t){void 0===t&&(t=o.JSONExt.emptyObject);var n=this._commands[e];return n?n.caption.call(void 0,t):""},e.prototype.usage=function(e,t){void 0===t&&(t=o.JSONExt.emptyObject);var n=this._commands[e];return n?n.usage.call(void 0,t):""},e.prototype.className=function(e,t){void 0===t&&(t=o.JSONExt.emptyObject);var n=this._commands[e];return n?n.className.call(void 0,t):""},e.prototype.dataset=function(e,t){void 0===t&&(t=o.JSONExt.emptyObject);var n=this._commands[e];return n?n.dataset.call(void 0,t):{}},e.prototype.isEnabled=function(e,t){void 0===t&&(t=o.JSONExt.emptyObject);var n=this._commands[e];return!!n&&n.isEnabled.call(void 0,t)},e.prototype.isToggled=function(e,t){void 0===t&&(t=o.JSONExt.emptyObject);var n=this._commands[e];return!!n&&n.isToggled.call(void 0,t)},e.prototype.isToggleable=function(e,t){var n=this._commands[e];return!!n&&n.isToggleable},e.prototype.isVisible=function(e,t){void 0===t&&(t=o.JSONExt.emptyObject);var n=this._commands[e];return!!n&&n.isVisible.call(void 0,t)},e.prototype.execute=function(e,t){void 0===t&&(t=o.JSONExt.emptyObject);var n,i=this._commands[e];if(!i)return Promise.reject(new Error("Command '"+e+"' not registered."));try{n=i.execute.call(void 0,t)}catch(e){n=Promise.reject(e)}var r=Promise.resolve(n);return this._commandExecuted.emit({id:e,args:t,result:r}),r},e.prototype.addKeyBinding=function(e){var t=this,n=i.createKeyBinding(e);return this._keyBindings.push(n),this._keyBindingChanged.emit({binding:n,type:"added"}),new a.DisposableDelegate((function(){r.ArrayExt.removeFirstOf(t._keyBindings,n),t._keyBindingChanged.emit({binding:n,type:"removed"})}))},e.prototype.processKeydownEvent=function(t){if(!this._replaying){var n=e.keystrokeForKeydownEvent(t);if(!n)return this._replayKeydownEvents(),void this._clearPendingState();this._keystrokes.push(n);var r=i.matchKeyBinding(this._keyBindings,this._keystrokes,t),o=r.exact,a=r.partial;if(!o&&!a)return this._replayKeydownEvents(),void this._clearPendingState();if(t.preventDefault(),t.stopPropagation(),o&&!a)return this._executeKeyBinding(o),void this._clearPendingState();o&&(this._exactKeyMatch=o),this._keydownEvents.push(t),this._startTimer()}},e.prototype._startTimer=function(){var e=this;this._clearTimer(),this._timerID=window.setTimeout((function(){e._onPendingTimeout()}),i.CHORD_TIMEOUT)},e.prototype._clearTimer=function(){0!==this._timerID&&(clearTimeout(this._timerID),this._timerID=0)},e.prototype._replayKeydownEvents=function(){0!==this._keydownEvents.length&&(this._replaying=!0,this._keydownEvents.forEach(i.replayKeyEvent),this._replaying=!1)},e.prototype._executeKeyBinding=function(e){var t=e.command,n=e.args;if(this.hasCommand(t)&&this.isEnabled(t,n))this.execute(t,n);else{var i=this.hasCommand(t)?"enabled":"registered",r="Cannot execute key binding '"+e.keys.join(", ")+"':",o="command '"+t+"' is not "+i+".";console.warn(r+" "+o)}},e.prototype._clearPendingState=function(){this._clearTimer(),this._exactKeyMatch=null,this._keystrokes.length=0,this._keydownEvents.length=0},e.prototype._onPendingTimeout=function(){this._timerID=0,this._exactKeyMatch?this._executeKeyBinding(this._exactKeyMatch):this._replayKeydownEvents(),this._clearPendingState()},e}();!function(e){function t(e){for(var t="",n=!1,i=!1,r=!1,o=!1,a=0,c=e.split(/\s+/);a<c.length;a++){var d=c[a];"Accel"===d?s.Platform.IS_MAC?i=!0:r=!0:"Alt"===d?n=!0:"Cmd"===d?i=!0:"Ctrl"===d?r=!0:"Shift"===d?o=!0:d.length>0&&(t=d)}return{cmd:i,ctrl:r,alt:n,shift:o,key:t}}function n(e){var n="",i=t(e);return i.ctrl&&(n+="Ctrl "),i.alt&&(n+="Alt "),i.shift&&(n+="Shift "),i.cmd&&s.Platform.IS_MAC&&(n+="Cmd "),n+i.key}e.parseKeystroke=t,e.normalizeKeystroke=n,e.normalizeKeys=function(e){return(s.Platform.IS_WIN?e.winKeys||e.keys:s.Platform.IS_MAC?e.macKeys||e.keys:e.linuxKeys||e.keys).map(n)},e.formatKeystroke=function(e){var n="",i=t(e);return s.Platform.IS_MAC?(i.ctrl&&(n+="⌃ "),i.alt&&(n+="⌥ "),i.shift&&(n+="⇧ "),i.cmd&&(n+="⌘ ")):(i.ctrl&&(n+="Ctrl+"),i.alt&&(n+="Alt+"),i.shift&&(n+="Shift+")),n+i.key},e.keystrokeForKeydownEvent=function(e){var t=(0,c.Vc)().keyForKeydownEvent(e);if(!t)return"";var n="";return e.ctrlKey&&(n+="Ctrl "),e.altKey&&(n+="Alt "),e.shiftKey&&(n+="Shift "),e.metaKey&&s.Platform.IS_MAC&&(n+="Cmd "),n+t}}(l||(l={})),function(e){e.CHORD_TIMEOUT=1e3,e.createCommand=function(e){var o,s;return e.icon&&"string"!=typeof e.icon?(s=d(e.iconClass,t),o=d(e.icon,c)):o=s=d(e.iconClass||e.icon,t),{execute:e.execute,label:d(e.label,t),mnemonic:d(e.mnemonic,n),icon:o,iconClass:s,iconLabel:d(e.iconLabel,t),caption:d(e.caption,t),usage:d(e.usage,t),className:d(e.className,t),dataset:d(e.dataset,a),isEnabled:e.isEnabled||i,isToggled:e.isToggled||r,isToggleable:e.isToggleable||!!e.isToggled,isVisible:e.isVisible||i}},e.createKeyBinding=function(e){return{keys:l.normalizeKeys(e),selector:u(e),command:e.command,args:e.args||o.JSONExt.emptyObject}},e.matchKeyBinding=function(e,t,n){for(var i=null,r=!1,o=1/0,a=0,c=0,d=e.length;c<d;++c){var l=e[c],u=m(l.keys,t);if(0!==u)if(2!==u){var h=y(l.selector,n);if(!(-1===h||h>o)){var p=s.Selector.calculateSpecificity(l.selector);(!i||h<o||p>=a)&&(i=l,o=h,a=p)}}else r||-1===y(l.selector,n)||(r=!0)}return{exact:i,partial:r}},e.replayKeyEvent=function(e){e.target.dispatchEvent(function(e){var t=document.createEvent("Event"),n=e.bubbles||!0,i=e.cancelable||!0;return t.initEvent(e.type||"keydown",n,i),t.key=e.key||"",t.keyCode=e.keyCode||0,t.which=e.keyCode||0,t.ctrlKey=e.ctrlKey||!1,t.altKey=e.altKey||!1,t.shiftKey=e.shiftKey||!1,t.metaKey=e.metaKey||!1,t.view=e.view||window,t}(e))};var t=function(){return""},n=function(){return-1},i=function(){return!0},r=function(){return!1},a=function(){return{}},c=function(){};function d(e,t){return void 0===e?t:"function"==typeof e?e:function(){return e}}function u(e){if(-1!==e.selector.indexOf(","))throw new Error("Selector cannot contain commas: "+e.selector);if(!s.Selector.isValid(e.selector))throw new Error("Invalid selector: "+e.selector);return e.selector}function m(e,t){if(e.length<t.length)return 0;for(var n=0,i=t.length;n<i;++n)if(e[n]!==t[n])return 0;return e.length>t.length?2:1}function y(e,t){for(var n=t.target,i=t.currentTarget,r=0;null!==n;n=n.parentElement,++r){if(n.hasAttribute("data-lm-suppress-shortcuts"))return-1;if(n.hasAttribute("data-p-suppress-shortcuts"))return-1;if(s.Selector.matches(n,e))return r;if(n===i)return-1}return-1}}(i||(i={}))},34938:(e,t,n)=>{function i(){return o.keyboardLayout}n.d(t,{Vc:()=>i});var r=function(){function e(t,n){this.name=t,this._codes=n,this._keys=e.extractKeys(n)}return e.prototype.keys=function(){return Object.keys(this._keys)},e.prototype.isValidKey=function(e){return e in this._keys},e.prototype.keyForKeydownEvent=function(e){return this._codes[e.keyCode]||""},e}();!function(e){e.extractKeys=function(e){var t=Object.create(null);for(var n in e)t[e[n]]=!0;return t}}(r||(r={}));var o,a=new r("en-us",{8:"Backspace",9:"Tab",13:"Enter",19:"Pause",27:"Escape",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",93:"ContextMenu",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"});!function(e){e.keyboardLayout=a}(o||(o={}))}}]);
//# sourceMappingURL=2687.2623a8738159b5fb8fe7.js.map