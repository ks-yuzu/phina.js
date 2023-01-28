Ext.data.JsonP.phina_asset_File({"tagname":"class","name":"phina.asset.File","autodetected":{},"files":[{"filename":"file.js","href":"file.html#phina-asset-File"}],"extends":"phina.asset.Asset","members":[{"name":"constructor","tagname":"method","owner":"phina.asset.File","id":"method-constructor","meta":{}},{"name":"addEventListener","tagname":"method","owner":"phina.util.EventDispatcher","id":"method-addEventListener","meta":{}},{"name":"clear","tagname":"method","owner":"phina.util.EventDispatcher","id":"method-clear","meta":{"chainable":true}},{"name":"clearEventListener","tagname":"method","owner":"phina.util.EventDispatcher","id":"method-clearEventListener","meta":{}},{"name":"dispatchEvent","tagname":"method","owner":"phina.util.EventDispatcher","id":"method-dispatchEvent","meta":{}},{"name":"dispatchEventByType","tagname":"method","owner":"phina.util.EventDispatcher","id":"method-dispatchEventByType","meta":{}},{"name":"fire","tagname":"method","owner":"phina.util.EventDispatcher","id":"method-fire","meta":{"chainable":true}},{"name":"flare","tagname":"method","owner":"phina.util.EventDispatcher","id":"method-flare","meta":{"chainable":true}},{"name":"has","tagname":"method","owner":"phina.util.EventDispatcher","id":"method-has","meta":{}},{"name":"hasEventListener","tagname":"method","owner":"phina.util.EventDispatcher","id":"method-hasEventListener","meta":{}},{"name":"off","tagname":"method","owner":"phina.util.EventDispatcher","id":"method-off","meta":{"chainable":true}},{"name":"on","tagname":"method","owner":"phina.util.EventDispatcher","id":"method-on","meta":{"chainable":true}},{"name":"one","tagname":"method","owner":"phina.util.EventDispatcher","id":"method-one","meta":{"chainable":true}},{"name":"removeEventListener","tagname":"method","owner":"phina.util.EventDispatcher","id":"method-removeEventListener","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-phina.asset.File","component":false,"superclasses":["phina.util.EventDispatcher","phina.asset.Asset"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/phina.util.EventDispatcher' rel='phina.util.EventDispatcher' class='docClass'>phina.util.EventDispatcher</a><div class='subclass '><a href='#!/api/phina.asset.Asset' rel='phina.asset.Asset' class='docClass'>phina.asset.Asset</a><div class='subclass '><strong>phina.asset.File</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/file.html#phina-asset-File' target='_blank'>file.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='phina.asset.File'>phina.asset.File</span><br/><a href='source/file.html#phina-asset-File-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/phina.asset.File-method-constructor' class='name expandable'>phina.asset.File</a>( <span class='pre'></span> ) : <a href=\"#!/api/phina.asset.File\" rel=\"phina.asset.File\" class=\"docClass\">phina.asset.File</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/phina.asset.File\" rel=\"phina.asset.File\" class=\"docClass\">phina.asset.File</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/phina.asset.Asset-method-constructor\" rel=\"phina.asset.Asset-method-constructor\" class=\"docClass\">phina.asset.Asset.constructor</a></p></div></div></div><div id='method-addEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/phina.util.EventDispatcher' rel='phina.util.EventDispatcher' class='defined-in docClass'>phina.util.EventDispatcher</a><br/><a href='source/eventdispatcher.html#phina-util-EventDispatcher-method-addEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/phina.util.EventDispatcher-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>on のエイリアスです。 ...</div><div class='long'><p><a href=\"#!/api/phina.util.EventDispatcher-method-on\" rel=\"phina.util.EventDispatcher-method-on\" class=\"docClass\">on</a> のエイリアスです。</p>\n</div></div></div><div id='method-clear' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/phina.util.EventDispatcher' rel='phina.util.EventDispatcher' class='defined-in docClass'>phina.util.EventDispatcher</a><br/><a href='source/eventdispatcher.html#phina-util-EventDispatcher-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/phina.util.EventDispatcher-method-clear' class='name expandable'>clear</a>( <span class='pre'>type</span> ) : <a href=\"#!/api/phina.util.EventDispatcher\" rel=\"phina.util.EventDispatcher\" class=\"docClass\">phina.util.EventDispatcher</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>ある種類のイベントに対するイベントリスナをすべて削除します。 ...</div><div class='long'><p>ある種類のイベントに対するイベントリスナをすべて削除します。</p>\n\n<p>特定のイベントリスナのみを削除するには <a href=\"#!/api/phina.util.EventDispatcher-method-off\" rel=\"phina.util.EventDispatcher-method-off\" class=\"docClass\">off</a> を使用してください。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>イベントの種類</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/phina.util.EventDispatcher\" rel=\"phina.util.EventDispatcher\" class=\"docClass\">phina.util.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-clearEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/phina.util.EventDispatcher' rel='phina.util.EventDispatcher' class='defined-in docClass'>phina.util.EventDispatcher</a><br/><a href='source/eventdispatcher.html#phina-util-EventDispatcher-method-clearEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/phina.util.EventDispatcher-method-clearEventListener' class='name expandable'>clearEventListener</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>clear のエイリアスです。 ...</div><div class='long'><p><a href=\"#!/api/phina.util.EventDispatcher-method-clear\" rel=\"phina.util.EventDispatcher-method-clear\" class=\"docClass\">clear</a> のエイリアスです。</p>\n</div></div></div><div id='method-dispatchEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/phina.util.EventDispatcher' rel='phina.util.EventDispatcher' class='defined-in docClass'>phina.util.EventDispatcher</a><br/><a href='source/eventdispatcher.html#phina-util-EventDispatcher-method-dispatchEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/phina.util.EventDispatcher-method-dispatchEvent' class='name expandable'>dispatchEvent</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>fire のエイリアスです。 ...</div><div class='long'><p><a href=\"#!/api/phina.util.EventDispatcher-method-fire\" rel=\"phina.util.EventDispatcher-method-fire\" class=\"docClass\">fire</a> のエイリアスです。</p>\n</div></div></div><div id='method-dispatchEventByType' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/phina.util.EventDispatcher' rel='phina.util.EventDispatcher' class='defined-in docClass'>phina.util.EventDispatcher</a><br/><a href='source/eventdispatcher.html#phina-util-EventDispatcher-method-dispatchEventByType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/phina.util.EventDispatcher-method-dispatchEventByType' class='name expandable'>dispatchEventByType</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>flare のエイリアスです。 ...</div><div class='long'><p><a href=\"#!/api/phina.util.EventDispatcher-method-flare\" rel=\"phina.util.EventDispatcher-method-flare\" class=\"docClass\">flare</a> のエイリアスです。</p>\n</div></div></div><div id='method-fire' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/phina.util.EventDispatcher' rel='phina.util.EventDispatcher' class='defined-in docClass'>phina.util.EventDispatcher</a><br/><a href='source/eventdispatcher.html#phina-util-EventDispatcher-method-fire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/phina.util.EventDispatcher-method-fire' class='name expandable'>fire</a>( <span class='pre'>event</span> ) : <a href=\"#!/api/phina.util.EventDispatcher\" rel=\"phina.util.EventDispatcher\" class=\"docClass\">phina.util.EventDispatcher</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>カスタムイベントを表すオブジェクトを指定してカスタムイベントを発火します。 ...</div><div class='long'><p>カスタムイベントを表すオブジェクトを指定してカスタムイベントを発火します。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'><p>カスタムイベントを表すオブジェクト</p>\n<ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>カスタムイベントの名前</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/phina.util.EventDispatcher\" rel=\"phina.util.EventDispatcher\" class=\"docClass\">phina.util.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-flare' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/phina.util.EventDispatcher' rel='phina.util.EventDispatcher' class='defined-in docClass'>phina.util.EventDispatcher</a><br/><a href='source/eventdispatcher.html#phina-util-EventDispatcher-method-flare' target='_blank' class='view-source'>view source</a></div><a href='#!/api/phina.util.EventDispatcher-method-flare' class='name expandable'>flare</a>( <span class='pre'>type, [param]</span> ) : <a href=\"#!/api/phina.util.EventDispatcher\" rel=\"phina.util.EventDispatcher\" class=\"docClass\">phina.util.EventDispatcher</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>イベント名を指定してカスタムイベントを発火します。 ...</div><div class='long'><p>イベント名を指定してカスタムイベントを発火します。</p>\n\n<p>param 引数を指定することによりカスタムイベントに任意のプロパティを設定することができます。<br/>\nこれにより、呼び出し元がイベントリスナに任意の値を渡すことができます。<br/>\n（ただし target プロパティには必ず自分自身が格納されます。）</p>\n\n<h3>Example</h3>\n\n<pre><code>//\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>カスタムイベントの名前</p>\n</div></li><li><span class='pre'>param</span> : Object (optional)<div class='sub-desc'><p>カスタムイベントにプロパティを設定するためのオブジェクト</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/phina.util.EventDispatcher\" rel=\"phina.util.EventDispatcher\" class=\"docClass\">phina.util.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-has' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/phina.util.EventDispatcher' rel='phina.util.EventDispatcher' class='defined-in docClass'>phina.util.EventDispatcher</a><br/><a href='source/eventdispatcher.html#phina-util-EventDispatcher-method-has' target='_blank' class='view-source'>view source</a></div><a href='#!/api/phina.util.EventDispatcher-method-has' class='name expandable'>has</a>( <span class='pre'>type</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>イベントリスナが登録されているかどうかを調べます。 ...</div><div class='long'><p>イベントリスナが登録されているかどうかを調べます。</p>\n\n<p>指定したイベントの種類に対するイベントリスナが登録されている場合は true、そうでない場合は false を返します。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>イベントの種類</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>指定したイベントのイベントリスナが登録されているかどうか</p>\n</div></li></ul></div></div></div><div id='method-hasEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/phina.util.EventDispatcher' rel='phina.util.EventDispatcher' class='defined-in docClass'>phina.util.EventDispatcher</a><br/><a href='source/eventdispatcher.html#phina-util-EventDispatcher-method-hasEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/phina.util.EventDispatcher-method-hasEventListener' class='name expandable'>hasEventListener</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>has のエイリアスです。 ...</div><div class='long'><p><a href=\"#!/api/phina.util.EventDispatcher-method-has\" rel=\"phina.util.EventDispatcher-method-has\" class=\"docClass\">has</a> のエイリアスです。</p>\n</div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/phina.util.EventDispatcher' rel='phina.util.EventDispatcher' class='defined-in docClass'>phina.util.EventDispatcher</a><br/><a href='source/eventdispatcher.html#phina-util-EventDispatcher-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/phina.util.EventDispatcher-method-off' class='name expandable'>off</a>( <span class='pre'>type, listener</span> ) : <a href=\"#!/api/phina.util.EventDispatcher\" rel=\"phina.util.EventDispatcher\" class=\"docClass\">phina.util.EventDispatcher</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>イベントリスナを削除します。 ...</div><div class='long'><p>イベントリスナを削除します。</p>\n\n<p>ある種類のイベントに対するイベントリスナをすべて削除するには <a href=\"#!/api/phina.util.EventDispatcher-method-clear\" rel=\"phina.util.EventDispatcher-method-clear\" class=\"docClass\">clear</a> を使用してください。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>イベントの種類</p>\n</div></li><li><span class='pre'>listener</span> : Function<div class='sub-desc'><p>イベントリスナ関数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/phina.util.EventDispatcher\" rel=\"phina.util.EventDispatcher\" class=\"docClass\">phina.util.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/phina.util.EventDispatcher' rel='phina.util.EventDispatcher' class='defined-in docClass'>phina.util.EventDispatcher</a><br/><a href='source/eventdispatcher.html#phina-util-EventDispatcher-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/phina.util.EventDispatcher-method-on' class='name expandable'>on</a>( <span class='pre'>type, listener</span> ) : <a href=\"#!/api/phina.util.EventDispatcher\" rel=\"phina.util.EventDispatcher\" class=\"docClass\">phina.util.EventDispatcher</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>イベントリスナを登録します。 ...</div><div class='long'><p>イベントリスナを登録します。</p>\n\n<p>１つのイベントに対するイベントリスナはいくつでも登録することができます。</p>\n\n<p>標準のイベントを検知するには、オブジェクトの Object2D.interactive プロパティが true である必要があります。\nObject2D.interactive プロパティを設定するには Object2D.setInteractive メソッドを呼び出してください。</p>\n\n<p>また、<a href=\"#!/api/phina.util.EventDispatcher-method-flare\" rel=\"phina.util.EventDispatcher-method-flare\" class=\"docClass\">flare</a> や <a href=\"#!/api/phina.util.EventDispatcher-method-fire\" rel=\"phina.util.EventDispatcher-method-fire\" class=\"docClass\">fire</a> によって定義したカスタムイベントに対するイベントリスナも登録することが\nできます。カスタムイベントのイベントリスナは Object2D.interactive プロパティによらず呼び出されます。\nなおカスタムイベントのオブジェクトは Event オブジェクトとは異なります。</p>\n\n<h3>Reference</h3>\n\n<p>標準のイベントの種類は以下を参照してください。<br/>\n- <a href=\"https://developer.mozilla.org/en-US/docs/Web/Events\">Event reference | MDN</a></p>\n\n<h3>Example</h3>\n\n<pre><code>var shape = CircleShape().addChildTo(this).setInteractive(true).setPosition(50, 50);\nshape.on(\"touchstart\", function(e){\n  this.color = \"blue\";\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>イベントの種類</p>\n</div></li><li><span class='pre'>listener</span> : Function<div class='sub-desc'><p>イベントリスナとなる関数</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'><p>Event オブジェクト、またはカスタムイベントのオブジェクト</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/phina.util.EventDispatcher\" rel=\"phina.util.EventDispatcher\" class=\"docClass\">phina.util.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-one' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/phina.util.EventDispatcher' rel='phina.util.EventDispatcher' class='defined-in docClass'>phina.util.EventDispatcher</a><br/><a href='source/eventdispatcher.html#phina-util-EventDispatcher-method-one' target='_blank' class='view-source'>view source</a></div><a href='#!/api/phina.util.EventDispatcher-method-one' class='name expandable'>one</a>( <span class='pre'>type, listener</span> ) : <a href=\"#!/api/phina.util.EventDispatcher\" rel=\"phina.util.EventDispatcher\" class=\"docClass\">phina.util.EventDispatcher</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>一度だけ実行されるイベントリスナを登録します。 ...</div><div class='long'><p>一度だけ実行されるイベントリスナを登録します。</p>\n\n<p>指定したイベントリスナが一度実行されると、そのイベントリスナは削除されます。それ以外の挙動は <a href=\"#!/api/phina.util.EventDispatcher-method-on\" rel=\"phina.util.EventDispatcher-method-on\" class=\"docClass\">on</a> と同じです。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>イベントの種類</p>\n</div></li><li><span class='pre'>listener</span> : Function<div class='sub-desc'><p>イベントリスナとなる関数</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'><p>Event オブジェクト、またはカスタムイベントのオブジェクト</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/phina.util.EventDispatcher\" rel=\"phina.util.EventDispatcher\" class=\"docClass\">phina.util.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/phina.util.EventDispatcher' rel='phina.util.EventDispatcher' class='defined-in docClass'>phina.util.EventDispatcher</a><br/><a href='source/eventdispatcher.html#phina-util-EventDispatcher-method-removeEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/phina.util.EventDispatcher-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>off のエイリアスです。 ...</div><div class='long'><p><a href=\"#!/api/phina.util.EventDispatcher-method-off\" rel=\"phina.util.EventDispatcher-method-off\" class=\"docClass\">off</a> のエイリアスです。</p>\n</div></div></div></div></div></div></div>","meta":{}});