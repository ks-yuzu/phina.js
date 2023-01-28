Ext.data.JsonP.global_Math({"tagname":"class","name":"global.Math","autodetected":{},"files":[{"filename":"math.js","href":"math.html#global-Math"}],"members":[{"name":"DEG_TO_RAD","tagname":"property","owner":"global.Math","id":"property-DEG_TO_RAD","meta":{}},{"name":"PHI","tagname":"property","owner":"global.Math","id":"property-PHI","meta":{}},{"name":"RAD_TO_DEG","tagname":"property","owner":"global.Math","id":"property-RAD_TO_DEG","meta":{}},{"name":"clamp","tagname":"method","owner":"global.Math","id":"static-method-clamp","meta":{"static":true}},{"name":"degToRad","tagname":"method","owner":"global.Math","id":"static-method-degToRad","meta":{"static":true}},{"name":"inside","tagname":"method","owner":"global.Math","id":"static-method-inside","meta":{"static":true}},{"name":"radToDeg","tagname":"method","owner":"global.Math","id":"static-method-radToDeg","meta":{"static":true}},{"name":"randbool","tagname":"method","owner":"global.Math","id":"static-method-randbool","meta":{"static":true}},{"name":"randfloat","tagname":"method","owner":"global.Math","id":"static-method-randfloat","meta":{"static":true}},{"name":"randint","tagname":"method","owner":"global.Math","id":"static-method-randint","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-global.Math","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/math.html#global-Math' target='_blank'>math.js</a></div></pre><div class='doc-contents'><h1>拡張した Math クラス</h1>\n\n<p>数学的な処理を扱う Math クラスを拡張しています。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-DEG_TO_RAD' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.Math'>global.Math</span><br/><a href='source/math.html#global-Math-property-DEG_TO_RAD' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.Math-property-DEG_TO_RAD' class='name expandable'>DEG_TO_RAD</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>度をラジアンに変換するための定数です。</p>\n</div><div class='long'><p>度をラジアンに変換するための定数です。</p>\n</div></div></div><div id='property-PHI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.Math'>global.Math</span><br/><a href='source/math.html#global-Math-property-PHI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.Math-property-PHI' class='name expandable'>PHI</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>黄金比です。</p>\n</div><div class='long'><p>黄金比です。</p>\n</div></div></div><div id='property-RAD_TO_DEG' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.Math'>global.Math</span><br/><a href='source/math.html#global-Math-property-RAD_TO_DEG' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.Math-property-RAD_TO_DEG' class='name expandable'>RAD_TO_DEG</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>ラジアンを度に変換するための定数です。</p>\n</div><div class='long'><p>ラジアンを度に変換するための定数です。</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-clamp' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.Math'>global.Math</span><br/><a href='source/math.html#global-Math-static-method-clamp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.Math-static-method-clamp' class='name expandable'>clamp</a>( <span class='pre'>value, min, max</span> ) : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>指定した値を指定した範囲に収めた結果を返します。 ...</div><div class='long'><p>指定した値を指定した範囲に収めた結果を返します。</p>\n\n<h3>Example</h3>\n\n<pre><code>Math.clamp(120, 0, 640); // =&gt; 120\nMath.clamp(980, 0, 640); // =&gt; 640\nMath.clamp(-80, 0, 640); // =&gt; 0\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>値</p>\n</div></li><li><span class='pre'>min</span> : Number<div class='sub-desc'><p>範囲の下限</p>\n</div></li><li><span class='pre'>max</span> : Number<div class='sub-desc'><p>範囲の上限</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>丸めた結果の値</p>\n</div></li></ul></div></div></div><div id='static-method-degToRad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.Math'>global.Math</span><br/><a href='source/math.html#global-Math-static-method-degToRad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.Math-static-method-degToRad' class='name expandable'>degToRad</a>( <span class='pre'>deg</span> ) : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>度をラジアンに変換します。 ...</div><div class='long'><p>度をラジアンに変換します。</p>\n\n<h3>Example</h3>\n\n<pre><code>Math.degToRad(180); // =&gt; 3.141592653589793\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>deg</span> : Number<div class='sub-desc'><p>度</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>ラジアン</p>\n</div></li></ul></div></div></div><div id='static-method-inside' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.Math'>global.Math</span><br/><a href='source/math.html#global-Math-static-method-inside' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.Math-static-method-inside' class='name expandable'>inside</a>( <span class='pre'>value, min, max</span> ) : Boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>指定した値が指定した値の範囲にあるかどうかを返します。 ...</div><div class='long'><p>指定した値が指定した値の範囲にあるかどうかを返します。</p>\n\n<h3>Example</h3>\n\n<pre><code>Math.inside(980, 0, 640); // =&gt; false\nMath.inside(120, 0, 640); // =&gt; true\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>チェックする値</p>\n</div></li><li><span class='pre'>min</span> : Number<div class='sub-desc'><p>範囲の下限</p>\n</div></li><li><span class='pre'>max</span> : Number<div class='sub-desc'><p>範囲の上限</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>範囲内に値があるかないか</p>\n</div></li></ul></div></div></div><div id='static-method-radToDeg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.Math'>global.Math</span><br/><a href='source/math.html#global-Math-static-method-radToDeg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.Math-static-method-radToDeg' class='name expandable'>radToDeg</a>( <span class='pre'>rad</span> ) : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>ラジアンを度に変換します。 ...</div><div class='long'><p>ラジアンを度に変換します。</p>\n\n<h3>Example</h3>\n\n<pre><code>Math.radToDeg(Math.PI/4); // =&gt; 45\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rad</span> : Number<div class='sub-desc'><p>ラジアン</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>度</p>\n</div></li></ul></div></div></div><div id='static-method-randbool' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.Math'>global.Math</span><br/><a href='source/math.html#global-Math-static-method-randbool' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.Math-static-method-randbool' class='name expandable'>randbool</a>( <span class='pre'>percent</span> ) : Boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>ランダムに真偽値を生成します。 ...</div><div class='long'><p>ランダムに真偽値を生成します。\n引数で百分率を指定する事もできます。</p>\n\n<h3>Example</h3>\n\n<pre><code>Math.randbool();   // =&gt; true または false\nMath.randbool(80); // =&gt; 80% の確率で true\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>percent</span> : Number<div class='sub-desc'><p>真になる百分率</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>ランダムな真偽値</p>\n</div></li></ul></div></div></div><div id='static-method-randfloat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.Math'>global.Math</span><br/><a href='source/math.html#global-Math-static-method-randfloat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.Math-static-method-randfloat' class='name expandable'>randfloat</a>( <span class='pre'>min, max</span> ) : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>指定された範囲内でランダムな数値を生成します。 ...</div><div class='long'><p>指定された範囲内でランダムな数値を生成します。</p>\n\n<h3>Example</h3>\n\n<pre><code>Math.randfloat(-4, 4); // =&gt; -2.7489193824000937 など\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>min</span> : Number<div class='sub-desc'><p>範囲の最小値</p>\n</div></li><li><span class='pre'>max</span> : Number<div class='sub-desc'><p>範囲の最大値</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>ランダムな数値</p>\n</div></li></ul></div></div></div><div id='static-method-randint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global.Math'>global.Math</span><br/><a href='source/math.html#global-Math-static-method-randint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global.Math-static-method-randint' class='name expandable'>randint</a>( <span class='pre'>min, max</span> ) : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>指定された範囲内でランダムな整数値を生成します。 ...</div><div class='long'><p>指定された範囲内でランダムな整数値を生成します。</p>\n\n<h3>Example</h3>\n\n<pre><code>Math.randint(-4, 4); // =&gt; -4、0、3、4 など\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>min</span> : Number<div class='sub-desc'><p>範囲の最小値</p>\n</div></li><li><span class='pre'>max</span> : Number<div class='sub-desc'><p>範囲の最大値</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>ランダムな整数値</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});