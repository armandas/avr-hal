(function() {var type_impls = {
"arduino_hal":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Delay%3CSPEED%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#32\">source</a><a href=\"#impl-Clone-for-Delay%3CSPEED%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SPEED&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;<div class=\"where\">where\n    SPEED: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#32\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","arduino_hal::delay::Delay"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Delay%3CSPEED%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#32\">source</a><a href=\"#impl-Debug-for-Delay%3CSPEED%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SPEED&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;<div class=\"where\">where\n    SPEED: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#32\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arduino_hal::delay::Delay"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Delay%3CSPEED%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#37\">source</a><a href=\"#impl-Delay%3CSPEED%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SPEED&gt; <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#38\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/delay/struct.Delay.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;</h4></section></div></details>",0,"arduino_hal::delay::Delay"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DelayNs-for-Delay%3CSPEED%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#279-281\">source</a><a href=\"#impl-DelayNs-for-Delay%3CSPEED%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SPEED&gt; <a class=\"trait\" href=\"embedded_hal/delay/trait.DelayNs.html\" title=\"trait embedded_hal::delay::DelayNs\">DelayNs</a> for <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;: <a class=\"trait\" href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayUs.html\" title=\"trait arduino_hal::prelude::_embedded_hal_blocking_delay_DelayUs\">DelayUs</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.delay_ns\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#283\">source</a><a href=\"#method.delay_ns\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/delay/trait.DelayNs.html#tymethod.delay_ns\" class=\"fn\">delay_ns</a>(&amp;mut self, ns: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u32.html\">u32</a>)</h4></section></summary><div class='docblock'>Pauses execution for at minimum <code>ns</code> nanoseconds. Pause can be longer\nif the implementation requires it due to precision/timing issues.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.delay_us\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#289\">source</a><a href=\"#method.delay_us\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/delay/trait.DelayNs.html#method.delay_us\" class=\"fn\">delay_us</a>(&amp;mut self, us: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u32.html\">u32</a>)</h4></section></summary><div class='docblock'>Pauses execution for at minimum <code>us</code> microseconds. Pause can be longer\nif the implementation requires it due to precision/timing issues.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.delay_ms\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/embedded_hal/delay.rs.html#31\">source</a><a href=\"#method.delay_ms\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/delay/trait.DelayNs.html#method.delay_ms\" class=\"fn\">delay_ms</a>(&amp;mut self, ms: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u32.html\">u32</a>)</h4></section></summary><div class='docblock'>Pauses execution for at minimum <code>ms</code> milliseconds. Pause can be longer\nif the implementation requires it due to precision/timing issues.</div></details></div></details>","DelayNs","arduino_hal::delay::Delay"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-_embedded_hal_blocking_delay_DelayMs%3Cu16%3E-for-Delay%3CSPEED%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#261-263\">source</a><a href=\"#impl-_embedded_hal_blocking_delay_DelayMs%3Cu16%3E-for-Delay%3CSPEED%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SPEED&gt; <a class=\"trait\" href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayMs.html\" title=\"trait arduino_hal::prelude::_embedded_hal_blocking_delay_DelayMs\">DelayMs</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>&gt; for <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;: <a class=\"trait\" href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayUs.html\" title=\"trait arduino_hal::prelude::_embedded_hal_blocking_delay_DelayUs\">DelayUs</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u32.html\">u32</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.delay_ms\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#265\">source</a><a href=\"#method.delay_ms\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayMs.html#tymethod.delay_ms\" class=\"fn\">delay_ms</a>(&amp;mut self, ms: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>)</h4></section></summary><div class='docblock'>Pauses execution for <code>ms</code> milliseconds</div></details></div></details>","DelayMs<u16>","arduino_hal::delay::Delay"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-_embedded_hal_blocking_delay_DelayMs%3Cu8%3E-for-Delay%3CSPEED%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#270-272\">source</a><a href=\"#impl-_embedded_hal_blocking_delay_DelayMs%3Cu8%3E-for-Delay%3CSPEED%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SPEED&gt; <a class=\"trait\" href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayMs.html\" title=\"trait arduino_hal::prelude::_embedded_hal_blocking_delay_DelayMs\">DelayMs</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;: <a class=\"trait\" href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayMs.html\" title=\"trait arduino_hal::prelude::_embedded_hal_blocking_delay_DelayMs\">DelayMs</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.delay_ms\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#274\">source</a><a href=\"#method.delay_ms\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayMs.html#tymethod.delay_ms\" class=\"fn\">delay_ms</a>(&amp;mut self, ms: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>)</h4></section></summary><div class='docblock'>Pauses execution for <code>ms</code> milliseconds</div></details></div></details>","DelayMs<u8>","arduino_hal::delay::Delay"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-_embedded_hal_blocking_delay_DelayUs%3Cu16%3E-for-Delay%3CMHz16%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#118\">source</a><a href=\"#impl-_embedded_hal_blocking_delay_DelayUs%3Cu16%3E-for-Delay%3CMHz16%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayUs.html\" title=\"trait arduino_hal::prelude::_embedded_hal_blocking_delay_DelayUs\">DelayUs</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>&gt; for <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;<a class=\"struct\" href=\"arduino_hal/clock/struct.MHz16.html\" title=\"struct arduino_hal::clock::MHz16\">MHz16</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.delay_us\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#119\">source</a><a href=\"#method.delay_us\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayUs.html#tymethod.delay_us\" class=\"fn\">delay_us</a>(&amp;mut self, us: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>)</h4></section></summary><div class='docblock'>Pauses execution for <code>us</code> microseconds</div></details></div></details>","DelayUs<u16>","arduino_hal::delay::Delay"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-_embedded_hal_blocking_delay_DelayUs%3Cu32%3E-for-Delay%3CSPEED%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#241-243\">source</a><a href=\"#impl-_embedded_hal_blocking_delay_DelayUs%3Cu32%3E-for-Delay%3CSPEED%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SPEED&gt; <a class=\"trait\" href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayUs.html\" title=\"trait arduino_hal::prelude::_embedded_hal_blocking_delay_DelayUs\">DelayUs</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;: <a class=\"trait\" href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayUs.html\" title=\"trait arduino_hal::prelude::_embedded_hal_blocking_delay_DelayUs\">DelayUs</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.delay_us\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#245\">source</a><a href=\"#method.delay_us\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayUs.html#tymethod.delay_us\" class=\"fn\">delay_us</a>(&amp;mut self, us: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u32.html\">u32</a>)</h4></section></summary><div class='docblock'>Pauses execution for <code>us</code> microseconds</div></details></div></details>","DelayUs<u32>","arduino_hal::delay::Delay"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-_embedded_hal_blocking_delay_DelayUs%3Cu8%3E-for-Delay%3CSPEED%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#232-234\">source</a><a href=\"#impl-_embedded_hal_blocking_delay_DelayUs%3Cu8%3E-for-Delay%3CSPEED%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SPEED&gt; <a class=\"trait\" href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayUs.html\" title=\"trait arduino_hal::prelude::_embedded_hal_blocking_delay_DelayUs\">DelayUs</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;: <a class=\"trait\" href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayUs.html\" title=\"trait arduino_hal::prelude::_embedded_hal_blocking_delay_DelayUs\">DelayUs</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.delay_us\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#236\">source</a><a href=\"#method.delay_us\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arduino_hal/prelude/trait._embedded_hal_blocking_delay_DelayUs.html#tymethod.delay_us\" class=\"fn\">delay_us</a>(&amp;mut self, us: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>)</h4></section></summary><div class='docblock'>Pauses execution for <code>us</code> microseconds</div></details></div></details>","DelayUs<u8>","arduino_hal::delay::Delay"],["<section id=\"impl-Copy-for-Delay%3CSPEED%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/delay.rs.html#32\">source</a><a href=\"#impl-Copy-for-Delay%3CSPEED%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SPEED&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"avr_hal_generic/delay/struct.Delay.html\" title=\"struct avr_hal_generic::delay::Delay\">Delay</a>&lt;SPEED&gt;<div class=\"where\">where\n    SPEED: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section>","Copy","arduino_hal::delay::Delay"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()