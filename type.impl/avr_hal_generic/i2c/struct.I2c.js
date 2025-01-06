(function() {var type_impls = {
"atmega_hal":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ErrorType-for-I2c%3CH,+I2C,+SDA,+SCL,+CLOCK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#139-140\">source</a><a href=\"#impl-ErrorType-for-I2c%3CH,+I2C,+SDA,+SCL,+CLOCK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H, I2C, SDA, SCL, CLOCK&gt; <a class=\"trait\" href=\"embedded_hal/i2c/trait.ErrorType.html\" title=\"trait embedded_hal::i2c::ErrorType\">ErrorType</a> for <a class=\"struct\" href=\"avr_hal_generic/i2c/struct.I2c.html\" title=\"struct avr_hal_generic::i2c::I2c\">I2c</a>&lt;H, I2C, SDA, SCL, CLOCK&gt;<div class=\"where\">where\n    I2C: <a class=\"trait\" href=\"atmega_hal/i2c/trait.I2cOps.html\" title=\"trait atmega_hal::i2c::I2cOps\">I2cOps</a>&lt;H, SDA, SCL&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"embedded_hal/i2c/trait.ErrorType.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"atmega_hal/i2c/enum.Error.html\" title=\"enum atmega_hal::i2c::Error\">Error</a></h4></section></summary><div class='docblock'>Error type</div></details></div></details>","ErrorType","atmega_hal::i2c::I2c"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-I2c%3CH,+I2C,+Pin%3CInput,+SDAPIN%3E,+Pin%3CInput,+SCLPIN%3E,+CLOCK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#224-230\">source</a><a href=\"#impl-I2c%3CH,+I2C,+Pin%3CInput,+SDAPIN%3E,+Pin%3CInput,+SCLPIN%3E,+CLOCK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H, I2C, SDAPIN, SCLPIN, CLOCK&gt; <a class=\"struct\" href=\"avr_hal_generic/i2c/struct.I2c.html\" title=\"struct avr_hal_generic::i2c::I2c\">I2c</a>&lt;H, I2C, <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>, SDAPIN&gt;, <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>, SCLPIN&gt;, CLOCK&gt;<div class=\"where\">where\n    I2C: <a class=\"trait\" href=\"atmega_hal/i2c/trait.I2cOps.html\" title=\"trait atmega_hal::i2c::I2cOps\">I2cOps</a>&lt;H, <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>, SDAPIN&gt;, <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>, SCLPIN&gt;&gt;,\n    SDAPIN: <a class=\"trait\" href=\"atmega_hal/port/trait.PinOps.html\" title=\"trait atmega_hal::port::PinOps\">PinOps</a>,\n    SCLPIN: <a class=\"trait\" href=\"atmega_hal/port/trait.PinOps.html\" title=\"trait atmega_hal::port::PinOps\">PinOps</a>,\n    CLOCK: <a class=\"trait\" href=\"atmega_hal/clock/trait.Clock.html\" title=\"trait atmega_hal::clock::Clock\">Clock</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#240-245\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/i2c/struct.I2c.html#tymethod.new\" class=\"fn\">new</a>(\n    p: I2C,\n    sda: <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.PullUp.html\" title=\"struct atmega_hal::port::mode::PullUp\">PullUp</a>&gt;, SDAPIN&gt;,\n    scl: <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.PullUp.html\" title=\"struct atmega_hal::port::mode::PullUp\">PullUp</a>&gt;, SCLPIN&gt;,\n    speed: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u32.html\">u32</a>\n) -&gt; <a class=\"struct\" href=\"avr_hal_generic/i2c/struct.I2c.html\" title=\"struct avr_hal_generic::i2c::I2c\">I2c</a>&lt;H, I2C, <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>, SDAPIN&gt;, <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>, SCLPIN&gt;, CLOCK&gt;</h4></section></summary><div class=\"docblock\"><p>Initialize an I2C peripheral on the given pins.</p>\n<p>Note that the SDA and SCL pins are hardwired for each I2C peripheral and you <em>must</em> pass\nthe correct ones.  This is enforced at compile time.</p>\n<p>This method expects the internal pull-ups to be configured for both pins to comply with the\nI2C specification.  If you have external pull-ups connected, use\n<a href=\"avr_hal_generic/i2c/struct.I2c.html#method.with_external_pullup\" title=\"associated function avr_hal_generic::i2c::I2c::with_external_pullup\"><code>I2c::with_external_pullup</code></a> instead.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_external_pullup\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#263-268\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/i2c/struct.I2c.html#tymethod.with_external_pullup\" class=\"fn\">with_external_pullup</a>(\n    p: I2C,\n    sda: <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Floating.html\" title=\"struct atmega_hal::port::mode::Floating\">Floating</a>&gt;, SDAPIN&gt;,\n    scl: <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Floating.html\" title=\"struct atmega_hal::port::mode::Floating\">Floating</a>&gt;, SCLPIN&gt;,\n    speed: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u32.html\">u32</a>\n) -&gt; <a class=\"struct\" href=\"avr_hal_generic/i2c/struct.I2c.html\" title=\"struct avr_hal_generic::i2c::I2c\">I2c</a>&lt;H, I2C, <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>, SDAPIN&gt;, <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>, SCLPIN&gt;, CLOCK&gt;</h4></section></summary><div class=\"docblock\"><p>Initialize an I2C peripheral on the given pins.</p>\n<p>Note that the SDA and SCL pins are hardwired for each I2C peripheral and you <em>must</em> pass\nthe correct ones.  This is enforced at compile time.</p>\n<p>This method expects that external resistors pull up SDA and SCL.</p>\n</div></details></div></details>",0,"atmega_hal::i2c::I2c"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-I2c%3CH,+I2C,+SDA,+SCL,+CLOCK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#281-284\">source</a><a href=\"#impl-I2c%3CH,+I2C,+SDA,+SCL,+CLOCK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H, I2C, SDA, SCL, CLOCK&gt; <a class=\"struct\" href=\"avr_hal_generic/i2c/struct.I2c.html\" title=\"struct avr_hal_generic::i2c::I2c\">I2c</a>&lt;H, I2C, SDA, SCL, CLOCK&gt;<div class=\"where\">where\n    I2C: <a class=\"trait\" href=\"atmega_hal/i2c/trait.I2cOps.html\" title=\"trait atmega_hal::i2c::I2cOps\">I2cOps</a>&lt;H, SDA, SCL&gt;,\n    CLOCK: <a class=\"trait\" href=\"atmega_hal/clock/trait.Clock.html\" title=\"trait atmega_hal::clock::Clock\">Clock</a>,\n    <a class=\"struct\" href=\"atmega_hal/delay/struct.Delay.html\" title=\"struct atmega_hal::delay::Delay\">Delay</a>&lt;CLOCK&gt;: <a class=\"trait\" href=\"atmega_hal/prelude/trait._embedded_hal_blocking_delay_DelayMs.html\" title=\"trait atmega_hal::prelude::_embedded_hal_blocking_delay_DelayMs\">DelayMs</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.ping_device\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#287\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/i2c/struct.I2c.html#tymethod.ping_device\" class=\"fn\">ping_device</a>(\n    &amp;mut self,\n    address: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>,\n    direction: <a class=\"enum\" href=\"atmega_hal/i2c/enum.Direction.html\" title=\"enum atmega_hal::i2c::Direction\">Direction</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a>, <a class=\"enum\" href=\"atmega_hal/i2c/enum.Error.html\" title=\"enum atmega_hal::i2c::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Test whether a device answers on a certain address.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.i2cdetect\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#314-318\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/i2c/struct.I2c.html#tymethod.i2cdetect\" class=\"fn\">i2cdetect</a>&lt;W&gt;(\n    &amp;mut self,\n    w: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;mut W</a>,\n    direction: <a class=\"enum\" href=\"atmega_hal/i2c/enum.Direction.html\" title=\"enum atmega_hal::i2c::Direction\">Direction</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, &lt;W as <a class=\"trait\" href=\"atmega_hal/prelude/trait._ufmt_uWrite.html\" title=\"trait atmega_hal::prelude::_ufmt_uWrite\">uWrite</a>&gt;::<a class=\"associatedtype\" href=\"atmega_hal/prelude/trait._ufmt_uWrite.html#associatedtype.Error\" title=\"type atmega_hal::prelude::_ufmt_uWrite::Error\">Error</a>&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"atmega_hal/prelude/trait._ufmt_uWrite.html\" title=\"trait atmega_hal::prelude::_ufmt_uWrite\">uWrite</a>,</div></h4></section></summary><div class=\"docblock\"><p>Scan the bus for connected devices.  This method will output an summary in the format known\nfrom <a href=\"https://man.archlinux.org/man/community/i2c-tools/i2cdetect.8.en\"><code>i2cdetect(8)</code></a> on the selected serial connection.  For example:</p>\n<div class=\"example-wrap\"><pre class=\"language-text\"><code>-    0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f\n00:       -- -- -- -- -- -- -- -- -- -- -- -- -- --\n10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n30: -- -- -- -- -- -- -- -- 38 39 -- -- -- -- -- --\n40: -- -- -- -- -- -- -- -- 48 -- -- -- -- -- -- --\n50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n70: -- -- -- -- -- -- -- --\n</code></pre></div></div></details></div></details>",0,"atmega_hal::i2c::I2c"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-I2c-for-I2c%3CH,+I2C,+SDA,+SCL,+CLOCK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#415-416\">source</a><a href=\"#impl-I2c-for-I2c%3CH,+I2C,+SDA,+SCL,+CLOCK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H, I2C, SDA, SCL, CLOCK&gt; <a class=\"trait\" href=\"embedded_hal/i2c/trait.I2c.html\" title=\"trait embedded_hal::i2c::I2c\">I2c</a> for <a class=\"struct\" href=\"avr_hal_generic/i2c/struct.I2c.html\" title=\"struct avr_hal_generic::i2c::I2c\">I2c</a>&lt;H, I2C, SDA, SCL, CLOCK&gt;<div class=\"where\">where\n    I2C: <a class=\"trait\" href=\"atmega_hal/i2c/trait.I2cOps.html\" title=\"trait atmega_hal::i2c::I2cOps\">I2cOps</a>&lt;H, SDA, SCL&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.transaction\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#418-422\">source</a><a href=\"#method.transaction\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/i2c/trait.I2c.html#tymethod.transaction\" class=\"fn\">transaction</a>(\n    &amp;mut self,\n    address: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>,\n    operations: &amp;mut [<a class=\"enum\" href=\"embedded_hal/i2c/enum.Operation.html\" title=\"enum embedded_hal::i2c::Operation\">Operation</a>&lt;'_&gt;]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, &lt;<a class=\"struct\" href=\"avr_hal_generic/i2c/struct.I2c.html\" title=\"struct avr_hal_generic::i2c::I2c\">I2c</a>&lt;H, I2C, SDA, SCL, CLOCK&gt; as <a class=\"trait\" href=\"embedded_hal/i2c/trait.ErrorType.html\" title=\"trait embedded_hal::i2c::ErrorType\">ErrorType</a>&gt;::<a class=\"associatedtype\" href=\"embedded_hal/i2c/trait.ErrorType.html#associatedtype.Error\" title=\"type embedded_hal::i2c::ErrorType::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Execute the provided operations on the I2C bus. <a href=\"embedded_hal/i2c/trait.I2c.html#tymethod.transaction\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/embedded_hal/i2c.rs.html#333\">source</a><a href=\"#method.read\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/i2c/trait.I2c.html#method.read\" class=\"fn\">read</a>(&amp;mut self, address: A, read: &amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, Self::<a class=\"associatedtype\" href=\"embedded_hal/i2c/trait.ErrorType.html#associatedtype.Error\" title=\"type embedded_hal::i2c::ErrorType::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Reads enough bytes from slave with <code>address</code> to fill <code>read</code>. <a href=\"embedded_hal/i2c/trait.I2c.html#method.read\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/embedded_hal/i2c.rs.html#354\">source</a><a href=\"#method.write\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/i2c/trait.I2c.html#method.write\" class=\"fn\">write</a>(&amp;mut self, address: A, write: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, Self::<a class=\"associatedtype\" href=\"embedded_hal/i2c/trait.ErrorType.html#associatedtype.Error\" title=\"type embedded_hal::i2c::ErrorType::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Writes bytes to slave with address <code>address</code>. <a href=\"embedded_hal/i2c/trait.I2c.html#method.write\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_read\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/embedded_hal/i2c.rs.html#381\">source</a><a href=\"#method.write_read\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/i2c/trait.I2c.html#method.write_read\" class=\"fn\">write_read</a>(\n    &amp;mut self,\n    address: A,\n    write: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>],\n    read: &amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, Self::<a class=\"associatedtype\" href=\"embedded_hal/i2c/trait.ErrorType.html#associatedtype.Error\" title=\"type embedded_hal::i2c::ErrorType::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Writes bytes to slave with address <code>address</code> and then reads enough bytes to fill <code>read</code> <em>in a\nsingle transaction</em>. <a href=\"embedded_hal/i2c/trait.I2c.html#method.write_read\">Read more</a></div></details></div></details>","I2c","atmega_hal::i2c::I2c"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-_embedded_hal_blocking_i2c_Read-for-I2c%3CH,+I2C,+SDA,+SCL,+CLOCK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#382-383\">source</a><a href=\"#impl-_embedded_hal_blocking_i2c_Read-for-I2c%3CH,+I2C,+SDA,+SCL,+CLOCK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H, I2C, SDA, SCL, CLOCK&gt; <a class=\"trait\" href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_Read.html\" title=\"trait atmega_hal::prelude::_embedded_hal_blocking_i2c_Read\">Read</a> for <a class=\"struct\" href=\"avr_hal_generic/i2c/struct.I2c.html\" title=\"struct avr_hal_generic::i2c::I2c\">I2c</a>&lt;H, I2C, SDA, SCL, CLOCK&gt;<div class=\"where\">where\n    I2C: <a class=\"trait\" href=\"atmega_hal/i2c/trait.I2cOps.html\" title=\"trait atmega_hal::i2c::I2cOps\">I2cOps</a>&lt;H, SDA, SCL&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_Read.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"atmega_hal/i2c/enum.Error.html\" title=\"enum atmega_hal::i2c::Error\">Error</a></h4></section></summary><div class='docblock'>Error type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#387\">source</a><a href=\"#method.read\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_Read.html#tymethod.read\" class=\"fn\">read</a>(\n    &amp;mut self,\n    address: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>,\n    buffer: &amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, &lt;<a class=\"struct\" href=\"avr_hal_generic/i2c/struct.I2c.html\" title=\"struct avr_hal_generic::i2c::I2c\">I2c</a>&lt;H, I2C, SDA, SCL, CLOCK&gt; as <a class=\"trait\" href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_Read.html\" title=\"trait atmega_hal::prelude::_embedded_hal_blocking_i2c_Read\">Read</a>&gt;::<a class=\"associatedtype\" href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_Read.html#associatedtype.Error\" title=\"type atmega_hal::prelude::_embedded_hal_blocking_i2c_Read::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Reads enough bytes from slave with <code>address</code> to fill <code>buffer</code> <a href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_Read.html#tymethod.read\">Read more</a></div></details></div></details>","Read","atmega_hal::i2c::I2c"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-_embedded_hal_blocking_i2c_Write-for-I2c%3CH,+I2C,+SDA,+SCL,+CLOCK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#369-370\">source</a><a href=\"#impl-_embedded_hal_blocking_i2c_Write-for-I2c%3CH,+I2C,+SDA,+SCL,+CLOCK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H, I2C, SDA, SCL, CLOCK&gt; <a class=\"trait\" href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_Write.html\" title=\"trait atmega_hal::prelude::_embedded_hal_blocking_i2c_Write\">Write</a> for <a class=\"struct\" href=\"avr_hal_generic/i2c/struct.I2c.html\" title=\"struct avr_hal_generic::i2c::I2c\">I2c</a>&lt;H, I2C, SDA, SCL, CLOCK&gt;<div class=\"where\">where\n    I2C: <a class=\"trait\" href=\"atmega_hal/i2c/trait.I2cOps.html\" title=\"trait atmega_hal::i2c::I2cOps\">I2cOps</a>&lt;H, SDA, SCL&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_Write.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"atmega_hal/i2c/enum.Error.html\" title=\"enum atmega_hal::i2c::Error\">Error</a></h4></section></summary><div class='docblock'>Error type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#374\">source</a><a href=\"#method.write\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_Write.html#tymethod.write\" class=\"fn\">write</a>(\n    &amp;mut self,\n    address: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>,\n    bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, &lt;<a class=\"struct\" href=\"avr_hal_generic/i2c/struct.I2c.html\" title=\"struct avr_hal_generic::i2c::I2c\">I2c</a>&lt;H, I2C, SDA, SCL, CLOCK&gt; as <a class=\"trait\" href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_Write.html\" title=\"trait atmega_hal::prelude::_embedded_hal_blocking_i2c_Write\">Write</a>&gt;::<a class=\"associatedtype\" href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_Write.html#associatedtype.Error\" title=\"type atmega_hal::prelude::_embedded_hal_blocking_i2c_Write::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Writes bytes to slave with address <code>address</code> <a href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_Write.html#tymethod.write\">Read more</a></div></details></div></details>","Write","atmega_hal::i2c::I2c"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-_embedded_hal_blocking_i2c_WriteRead-for-I2c%3CH,+I2C,+SDA,+SCL,+CLOCK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#395-396\">source</a><a href=\"#impl-_embedded_hal_blocking_i2c_WriteRead-for-I2c%3CH,+I2C,+SDA,+SCL,+CLOCK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H, I2C, SDA, SCL, CLOCK&gt; <a class=\"trait\" href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_WriteRead.html\" title=\"trait atmega_hal::prelude::_embedded_hal_blocking_i2c_WriteRead\">WriteRead</a> for <a class=\"struct\" href=\"avr_hal_generic/i2c/struct.I2c.html\" title=\"struct avr_hal_generic::i2c::I2c\">I2c</a>&lt;H, I2C, SDA, SCL, CLOCK&gt;<div class=\"where\">where\n    I2C: <a class=\"trait\" href=\"atmega_hal/i2c/trait.I2cOps.html\" title=\"trait atmega_hal::i2c::I2cOps\">I2cOps</a>&lt;H, SDA, SCL&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_WriteRead.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"atmega_hal/i2c/enum.Error.html\" title=\"enum atmega_hal::i2c::Error\">Error</a></h4></section></summary><div class='docblock'>Error type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_read\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/i2c.rs.html#400-405\">source</a><a href=\"#method.write_read\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_WriteRead.html#tymethod.write_read\" class=\"fn\">write_read</a>(\n    &amp;mut self,\n    address: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>,\n    bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>],\n    buffer: &amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, &lt;<a class=\"struct\" href=\"avr_hal_generic/i2c/struct.I2c.html\" title=\"struct avr_hal_generic::i2c::I2c\">I2c</a>&lt;H, I2C, SDA, SCL, CLOCK&gt; as <a class=\"trait\" href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_WriteRead.html\" title=\"trait atmega_hal::prelude::_embedded_hal_blocking_i2c_WriteRead\">WriteRead</a>&gt;::<a class=\"associatedtype\" href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_WriteRead.html#associatedtype.Error\" title=\"type atmega_hal::prelude::_embedded_hal_blocking_i2c_WriteRead::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Writes bytes to slave with address <code>address</code> and then reads enough bytes to fill <code>buffer</code> <em>in a\nsingle transaction</em> <a href=\"atmega_hal/prelude/trait._embedded_hal_blocking_i2c_WriteRead.html#tymethod.write_read\">Read more</a></div></details></div></details>","WriteRead","atmega_hal::i2c::I2c"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()